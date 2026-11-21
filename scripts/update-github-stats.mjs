import { execFile } from 'node:child_process';
import { readFile, writeFile } from 'node:fs/promises';
import { promisify } from 'node:util';

const profile = 'fxpw/fxpw';
const reportFile = 'github-metrics.svg';
const snapshotFile = new URL('../assets/github-stats.json', import.meta.url);
const historyFile = new URL('../assets/github-stats-history.json', import.meta.url);
const dayInMilliseconds = 86_400_000;
const runGit = promisify(execFile);

const labels = {
  totalRepos: /^([\d,]+) Repositories(?: \(including [\d,]+ forks\))?$/i,
  totalStars: /^([\d,]+) Stargazers?$/i,
  forks: /^([\d,]+) Forkers?$/i,
  releases: /^([\d,]+) Releases?$/i,
  watchers: /^([\d,]+) Watchers?$/i,
  followers: /^Followed by ([\d,]+) users?$/i,
  following: /^Following ([\d,]+) users?$/i,
  commits: /^([\d,]+) Commits?$/i,
  pullRequestsOpened: /^([\d,]+) Pull requests? opened$/i,
  pullRequestsReviewed: /^([\d,]+) Pull requests? reviewed$/i,
  issues: /^([\d,]+) Issues? opened$/i,
  issueComments: /^([\d,]+) Issue comments?$/i,
  currentStreak: /^Current streak ([\d,]+) days?$/i,
  longestStreak: /^Best streak ([\d,]+) days?$/i,
  highestCommitsPerDay: /^Highest in a day at ([\d,]+)$/i,
  averageCommitsPerDay: /^Average per day at ~?([\d,]+(?:\.\d+)?)$/i
};

async function fetchMetrics(url, headers) {
  const response = await fetch(url, { headers, signal: AbortSignal.timeout(30_000) });
  if (!response.ok) throw new Error(`GitHub Metrics source returned HTTP ${response.status} for ${url}`);
  return response;
}

async function readReport(ref, archived = false) {
  const response = await fetchMetrics(`https://raw.githubusercontent.com/${profile}/${ref}/${reportFile}`);
  const report = await response.text();
  const timestamp = report.match(/Last updated (\d{1,2} [a-z]{3,4} \d{4}), [\d:]+ \(timezone Europe\/Minsk\)/i);
  if (!timestamp) throw new Error(`Missing GitHub Metrics publication date at ${ref}`);
  const date = new Date(timestamp[1] + ' UTC').toISOString().slice(0, 10);

  // Metrics renders each stat with an optional icon followed by its label.
  const fields = Array.from(
    report.matchAll(/<(div|h[23]) class="field">([\s\S]*?)<\/\1>/g),
    ([, , field]) => field.replace(/<svg\b[^>]*>[\s\S]*?<\/svg>/g, '').trim().replace(/\s+/g, ' ')
  );
  const values = {};
  for (const [key, pattern] of Object.entries(labels)) {
    const matches = fields.map(field => field.match(pattern)).filter(Boolean);
    const value = matches[0]?.[1];
    const count = Number(value?.replaceAll(',', ''));
    if (matches.length === 1 && /^\d+(?:,\d{3})*(?:\.\d+)?$/.test(value) && Number.isFinite(count)) {
      values[key] = count;
    } else if (!archived) {
      throw new Error(`Expected one numeric GitHub Metrics field for ${key}, found ${matches.length}`);
    }
  }

  // The profile's old repository query emitted zero rollups until its pagination fix on 18 November.
  const repositoryRollups = ['totalStars', 'forks', 'releases', 'watchers'];
  if (archived && date < '2026-11-18' && repositoryRollups.every(key => values[key] === 0)) {
    for (const key of repositoryRollups) delete values[key];
  }
  return { date, source: `https://github.com/${profile}/blob/${ref}/${reportFile}`, values };
}

async function readArchive(date) {
  const query = new URLSearchParams({
    sha: 'main',
    path: reportFile,
    per_page: '1',
    until: date + 'T23:59:59+03:00'
  });
  const token = process.env.PORTFOLIO_HISTORY_TOKEN;
  const headers = token ? { Authorization: `Bearer ${token}` } : undefined;
  const response = await fetchMetrics(`https://api.github.com/repos/${profile}/commits?${query}`, headers);
  const [commit] = await response.json();
  return commit ? readReport(commit.sha, true) : null;
}

const isoDay = date => date.toISOString().slice(0, 10);

async function readJson(file, fallback) {
  try {
    return JSON.parse(await readFile(file, 'utf8'));
  } catch (error) {
    if (error.code === 'ENOENT') return fallback;
    throw error;
  }
}

function mergeHistory(points, period, since) {
  const byPeriod = new Map();
  for (const point of points) {
    if (!point || point.date < since || !Object.keys(point.values).length) continue;
    const key = point.date.slice(0, period);
    if (!byPeriod.has(key) || byPeriod.get(key).date <= point.date) byPeriod.set(key, point);
  }
  return [...byPeriod.values()].sort((a, b) => a.date.localeCompare(b.date));
}

const { stdout: mainRef } = await runGit('git', ['ls-remote', `https://github.com/${profile}.git`, 'refs/heads/main'], { timeout: 30_000 });
const commit = mainRef.trim().split(/\s+/, 1)[0];
if (!/^[a-f0-9]{40}$/.test(commit)) throw new Error('Could not resolve the GitHub Metrics profile commit');
const current = await readReport(commit);
const reportDate = new Date(current.date + 'T00:00:00Z');
const year = reportDate.getUTCFullYear();
const month = reportDate.getUTCMonth();
const firstMonth = isoDay(new Date(Date.UTC(year, month - 11, 1)));
const firstRecentDay = isoDay(new Date(+reportDate - 13 * dayInMilliseconds));
const previousHistory = await readJson(historyFile, { monthly: [], recent: [] });

let archiveMonths = [];
let archiveDays = [];
if (process.argv.includes('--backfill')) {
  const monthEnds = Array.from({ length: 11 }, (_, index) => isoDay(new Date(Date.UTC(year, month - index, 0))));
  const recentDays = Array.from({ length: 7 }, (_, index) => isoDay(new Date(+reportDate - (index + 1) * dayInMilliseconds)));
  [archiveMonths, archiveDays] = await Promise.all([
    Promise.all(monthEnds.map(readArchive)),
    Promise.all(recentDays.map(readArchive))
  ]);
}

const history = {
  monthly: mergeHistory([...previousHistory.monthly, ...archiveMonths, current], 7, firstMonth),
  recent: mergeHistory([...previousHistory.recent, ...archiveDays, current], 10, firstRecentDay)
};
const { updatedAt, ...previousStats } = await readJson(snapshotFile, {});
if (!updatedAt || JSON.stringify(previousStats) !== JSON.stringify(current.values)) {
  await writeFile(snapshotFile, JSON.stringify({ ...current.values, updatedAt: new Date().toISOString() }, null, 2) + '\n');
}
if (JSON.stringify(history) !== JSON.stringify(previousHistory)) {
  await writeFile(historyFile, JSON.stringify(history, null, 2) + '\n');
}
