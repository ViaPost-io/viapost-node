import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

import { parseContract, sdkContract } from "../scripts/openapi-utils.mjs";

const recipePath = "/v1/automations/{id}/recipes/saas-onboarding";

test("API-key SDK excludes session-only operations without weakening dual-auth operations", async () => {
  const source = parseContract(await readFile(new URL("../openapi.yaml", import.meta.url), "utf8"));
  const recipe = source.paths[recipePath]?.patch;
  assert.deepEqual(recipe?.security, [{ sessionCookie: [] }]);

  const sdk = sdkContract(source);
  assert.equal(sdk.paths[recipePath], undefined);
  assert.equal(sdk.paths["/v1/automations/{id}/duplicate"].post.security.length, 1);
  assert.deepEqual(sdk.paths["/v1/automations/{id}/duplicate"].post.security, [{ bearerApiKey: [] }]);
  assert.equal(sdk.components.securitySchemes.sessionCookie, undefined);
  assert.deepEqual(source.paths[recipePath].patch.security, [{ sessionCookie: [] }]);
});

test("generated API-key types do not contain the session-only recipe method", async () => {
  const generated = await readFile(new URL("../src/generated/openapi.ts", import.meta.url), "utf8");
  assert.doesNotMatch(generated, /patchAutomationsIdRecipesSaasOnboarding|\/v1\/automations\/\{id\}\/recipes\/saas-onboarding/);
});
