import { writeFile } from 'node:fs/promises';

const headers = {
  Accept: 'application/vnd.github+json',
  'X-Github-Api-Version': '2022-11-28',
  ...(process.env.GITHUB_TOKEN ? { Authorization: `Bearer ${process.env.GITHUB_TOKEN}` } : {})
};

const userResponse = await fetch('https://api.github.com/users/fxpw', { headers });
if (!userResponse.ok) throw new Error(`GitHub user failed: ${userResponse.status}`);
const user = await userResponse.json();

const reposResponse = await fetch('https://api.github.com/users/fxpw/repos?per_page=100&sort=updated', { headers });
if (!reposResponse.ok) throw new Error(`GitHub repos failed: ${reposResponse.status}`);
const repos = await reposResponse.json();

const owned = repos.filter(repo => !repo.fork);
const totalStars = owned.reduce((sum, repo) => sum + repo.stargazers_count, 0);
const forks = owned.reduce((sum, repo) => sum + repo.forks_count, 0);
const languages = [...new Set(owned.map(repo => repo.language).filter(Boolean))].sort();
const activeRepos = owned.filter(repo =>
  repo.pushed_at && Date.now() - Date.parse(repo.pushed_at) < 365 * 864e5
).length;

const data = {
  publicRepos: user.public_repos,
  followers: user.followers,
  following: user.following,
  totalStars,
  forks,
  languages,
  activeRepos,
  updatedAt: new Date().toISOString()
};

await writeFile('assets/github-stats.json', JSON.stringify(data, null, 2) + '\n');
