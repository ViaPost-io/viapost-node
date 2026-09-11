import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { createRequire } from "node:module";
import { spawnSync } from "node:child_process";
import test from "node:test";

import { VERSION, ViaPost as ViaPostESM } from "../dist/index.js";

test("ships both ESM and CommonJS entrypoints", () => {
  const require = createRequire(import.meta.url);
  const { ViaPost: ViaPostCJS } = require("../dist/index.cjs");
  assert.equal(typeof ViaPostESM, "function");
  assert.equal(typeof ViaPostCJS, "function");
});

test("generated SDK version matches package metadata", () => {
  const packageJson = JSON.parse(readFileSync(new URL("../package.json", import.meta.url), "utf8"));
  assert.equal(VERSION, packageJson.version);
});

test("browser condition blocks loading the server-side SDK", () => {
  const packageJson = JSON.parse(readFileSync(new URL("../package.json", import.meta.url), "utf8"));
  assert.deepEqual(packageJson.sideEffects, ["./dist/browser.js", "./dist/browser.cjs"]);
  assert.deepEqual(packageJson.browser, {
    "./dist/index.js": "./dist/browser.js",
    "./dist/index.cjs": "./dist/browser.cjs",
  });
  const result = spawnSync(
    process.execPath,
    ["--conditions=browser", "--input-type=module", "--eval", 'await import("@viapost/sdk")'],
    { cwd: new URL("..", import.meta.url), encoding: "utf8" },
  );
  assert.notEqual(result.status, 0);
  assert.match(result.stderr, /server-side only/i);
});

test("runtime guard blocks legacy bundlers that load the Node entrypoint in a browser", () => {
  const browser = spawnSync(
    process.execPath,
    ["--input-type=module", "--eval", 'globalThis.window = {}; await import("../dist/index.js")'],
    { cwd: new URL(".", import.meta.url), encoding: "utf8" },
  );
  assert.notEqual(browser.status, 0);
  assert.match(browser.stderr, /server-side only/i);
});
