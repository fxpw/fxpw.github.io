const headers={Accept:'application/vnd.github+json','X-Github-Api-Version':'2022-11-28',...(process.env.GITHUB_TOKEN?{Authorization:`Bearer ${process.env.GITHUB_TOKEN}`}:{})};
const u=await(await fetch('https://api.github.com/users/fxpw',{headers})).json();
const r=await(await fetch('https://api.github.com/users/fxpw/repos?per_page=100&sort=updated',{headers})).json();
const owned=r.filter(x=>!x.fork), data={publicRepos:u.public_repos,followers:u.followers,following:u.following,totalStars:owned.reduce((n,x)=>n+x.stargazers_count,0),forks:owned.reduce((n,x)=>n+x.forks_count,0),languages:[...new Set(owned.map(x=>x.language).filter(Boolean))].sort(),activeRepos:owned.filter(x=>x.pushed_at&&Date.now()-Date.parse(x.pushed_at)<365*864e5).length,updatedAt:new Date().toISOString()};
await import('node:fs').then(({writeFile})=>writeFile('assets/github-stats.json',JSON.stringify(data,null,2)+'\n'));
