import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

async function render() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);
  return worker.fetch(
    new Request("http://localhost/", { headers: { accept: "text/html" } }),
    { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } },
    { waitUntil() {}, passThroughOnException() {} },
  );
}

test("server-renders the Skills Radar catalogue", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);
  const html = await response.text();
  assert.match(html, /<title>Skills Radar｜中文互联网 Skills 推荐雷达<\/title>/i);
  assert.match(html, /把值得用的/);
  assert.match(html, /26/);
  assert.match(html, /数字生命卡兹克/);
  assert.match(html, /ExpertWiki/);
  assert.match(html, /每日复核/);
  assert.match(html, /打开 GitHub/);
});

test("keeps the content catalogue and metadata scoped to the product", async () => {
  const [page, layout, data] = await Promise.all([
    readFile(new URL("../app/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/layout.tsx", import.meta.url), "utf8"),
    readFile(new URL("../content/skills.ts", import.meta.url), "utf8"),
  ]);
  assert.match(page, /export default function Home/);
  assert.match(page, /navigator\.clipboard/);
  assert.match(page, /data\/|content|SkillCard/);
  assert.match(layout, /lang="zh-CN"/);
  assert.match(layout, /Skills Radar/);
  assert.match(data, /export const experts/);
  assert.match(data, /export const items/);
  assert.match(data, /export const paths/);
  assert.doesNotMatch(page, /codex-preview|SkeletonPreview|_sites-preview/);
  assert.doesNotMatch(layout, /codex-preview|Starter Project/);
});
