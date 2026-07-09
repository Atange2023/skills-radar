import { readFile, writeFile } from "node:fs/promises";

const dataPath = new URL("../content/skills.ts", import.meta.url);
const statusPath = new URL("../content/source-status.json", import.meta.url);
const sourceText = await readFile(dataPath, "utf8");
const sourceUrls = [...sourceText.matchAll(/https:\/\/github\.com\/([^"'\s)]+)/g)]
  .map((match) => match[1].replace(/\.git$/, "").split("/").slice(0, 2).join("/"))
  .filter((repo) => repo.includes("/"));
const repos = [...new Set(sourceUrls)].sort();
const headers = { Accept: "application/vnd.github+json", "User-Agent": "skills-radar-source-review" };

const sources = [];
for (const repository of repos) {
  try {
    const response = await fetch(`https://api.github.com/repos/${repository}`, { headers });
    if (!response.ok) {
      sources.push({ repository, status: response.status === 404 ? "not_found" : "unavailable" });
      continue;
    }
    const repo = await response.json();
    sources.push({
      repository,
      status: repo.archived ? "archived" : "active",
      defaultBranch: repo.default_branch,
      pushedAt: repo.pushed_at,
      updatedAt: repo.updated_at,
      stars: repo.stargazers_count,
    });
  } catch {
    sources.push({ repository, status: "unavailable" });
  }
}

if (sources.length > 0 && sources.every((source) => source.status === "unavailable")) {
  console.warn("GitHub API was unreachable; keeping the previous source snapshot.");
  process.exit(0);
}

const existing = JSON.parse(await readFile(statusPath, "utf8"));
const before = JSON.stringify(existing.sources ?? []);
const after = JSON.stringify(sources);
if (before === after) process.exit(0);

await writeFile(statusPath, `${JSON.stringify({ fetchedAt: new Date().toISOString(), sources }, null, 2)}\n`);
