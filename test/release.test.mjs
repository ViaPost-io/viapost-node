import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";

import { assertReleaseTag } from "../scripts/release-utils.mjs";

test("release tag must exactly match the package version", () => {
  assert.doesNotThrow(() => assertReleaseTag("v0.2.1", "0.2.1"));
  assert.throws(() => assertReleaseTag("0.2.1", "0.2.1"), /v0\.2\.1/);
  assert.throws(() => assertReleaseTag("v0.2.0", "0.2.1"), /v0\.2\.1/);
  assert.throws(() => assertReleaseTag("", "0.2.1"), /v0\.2\.1/);
});

test("release workflow publishes an explicit local tarball path", () => {
  const workflow = readFileSync(new URL("../.github/workflows/publish.yml", import.meta.url), "utf8");
  assert.match(workflow, /tarball="\.\/\$\{tarballs\[0\]\}"/);
  assert.match(workflow, /npm publish "\$tarball" --ignore-scripts/);
});
