import assert from "node:assert/strict";
import test from "node:test";

import { assertReleaseTag } from "../scripts/release-utils.mjs";

test("release tag must exactly match the package version", () => {
  assert.doesNotThrow(() => assertReleaseTag("v0.1.0", "0.1.0"));
  assert.throws(() => assertReleaseTag("0.1.0", "0.1.0"), /v0\.1\.0/);
  assert.throws(() => assertReleaseTag("v0.1.1", "0.1.0"), /v0\.1\.0/);
  assert.throws(() => assertReleaseTag("", "0.1.0"), /v0\.1\.0/);
});
