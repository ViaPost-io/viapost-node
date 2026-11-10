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

test("API-key view excludes MCP OAuth endpoints and alternatives", async () => {
  const source = parseContract(await readFile(new URL("../openapi.yaml", import.meta.url), "utf8"));
  const sdk = sdkContract(source);

  assert.equal(sdk.components.securitySchemes.mcpOAuth, undefined);
  assert.equal(sdk.paths["/oauth/token"], undefined);
  assert.equal(sdk.paths["/.well-known/jwks.json"], undefined);
  assert.equal(sdk.paths["/v1/broadcasts/{id}/send-plans"], undefined);
  assert.deepEqual(sdk.paths["/v1/broadcasts/{id}/schedule"].post.security, [
    { bearerApiKey: [] },
  ]);
  assert.deepEqual(
    sdk.paths["/v1/broadcasts/{id}/schedule"].post.requestBody.content["application/json"].schema,
    { $ref: "#/components/schemas/BroadcastVersionRequest" },
  );
  assert.equal(sdk.components.schemas.MCPBroadcastScheduleRequest, undefined);
  assert.doesNotMatch(sdk.paths["/v1/broadcasts/{id}/schedule"].post.description, /MCP|OAuth|plan_id|plan_hash|approval_id/i);
  assert.deepEqual(source.paths["/v1/broadcasts/{id}/schedule"].post.security, [
    { bearerApiKey: [] },
    { sessionCookie: [] },
    { mcpOAuth: ["broadcasts:write", "broadcasts:send"] },
  ]);
});

test("API-key projection rejects changed MCP scheduling guidance", async () => {
  const source = parseContract(await readFile(new URL("../openapi.yaml", import.meta.url), "utf8"));
  source.paths["/v1/broadcasts/{id}/schedule"].post.description = "OAuth MCP requires another plan.";
  assert.throws(() => sdkContract(source), /Unsupported MCP scheduling instructions/);
});

test("API-key projection keeps every local schema reference resolvable", async () => {
  const source = parseContract(await readFile(new URL("../openapi.yaml", import.meta.url), "utf8"));
  const sdk = sdkContract(source);
  const missing = [];
  function inspect(value) {
    if (Array.isArray(value)) {
      value.forEach(inspect);
      return;
    }
    if (value === null || typeof value !== "object") return;
    if (typeof value.$ref === "string" && value.$ref.startsWith("#/")) {
      const keys = value.$ref.slice(2).split("/").map((key) => key.replaceAll("~1", "/").replaceAll("~0", "~"));
      const target = keys.reduce((part, key) => part?.[key], sdk);
      if (target === undefined) missing.push(value.$ref);
    }
    Object.values(value).forEach(inspect);
  }
  inspect(sdk);
  assert.deepEqual(missing, []);
});
