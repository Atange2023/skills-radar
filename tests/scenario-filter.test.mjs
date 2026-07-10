import assert from "node:assert/strict";
import test from "node:test";
import { items, paths } from "../content/skills.ts";
import { filterItemsByPath } from "../content/filtering.ts";

test("research scenario returns every skill in its path", () => {
  const researchPath = paths.find((path) => path.id === "research");
  assert.ok(researchPath);

  const result = filterItemsByPath(items, researchPath.items);
  assert.deepEqual(result.map((item) => item.name), [
    "hv-analysis",
    "aihot",
    "github-high-potential",
    "Third-Eye",
    "KAR",
  ]);
});
