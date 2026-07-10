import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

test("hash navigation does not install a global smooth-scroll lock", async () => {
  const css = await readFile(new URL("../app/globals.css", import.meta.url), "utf8");
  assert.doesNotMatch(css, /html\s*\{[^}]*scroll-behavior\s*:\s*smooth/i);
});
