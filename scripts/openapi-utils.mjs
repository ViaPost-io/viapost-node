import { parse } from "yaml";

export const CONTRACT_URL = "https://docs.viapost.io/openapi/public.yaml";

export function parseContract(source) {
  const contract = parse(source);
  if (!contract || typeof contract !== "object" || !String(contract.openapi).startsWith("3.1")) {
    throw new Error("Expected a valid OpenAPI 3.1 document");
  }
  return contract;
}

export function sdkContract(contract) {
  const sanitized = structuredClone(contract);
  delete sanitized.components?.securitySchemes?.sessionCookie;
  delete sanitized.components?.securitySchemes?.mcpOAuth;
  delete sanitized.components?.schemas?.MCPBroadcastScheduleRequest;
  delete sanitized.components?.parameters?.CsrfHeader;
  delete sanitized.components?.parameters?.RequiredCsrfHeader;

  const methods = ["get", "put", "post", "delete", "options", "head", "patch", "trace"];
  for (const [path, pathItem] of Object.entries(sanitized.paths ?? {})) {
    // OAuth discovery, authorization and token endpoints belong to the dormant
    // MCP client flow, not to this server-side API-key SDK.
    if (path.startsWith("/oauth/") || path.startsWith("/.well-known/oauth-") || path === "/.well-known/jwks.json") {
      delete sanitized.paths[path];
      continue;
    }
    for (const method of methods) {
      const operation = pathItem?.[method];
      if (!operation || typeof operation !== "object" || !("responses" in operation)) continue;
      const security = operation.security ?? contract.security;
      // Each OpenAPI security entry is an alternative. Session and MCP OAuth
      // requirements cannot be satisfied by this API-key-only SDK.
      const supported = Array.isArray(security)
        ? security.filter((entry) => !("sessionCookie" in entry) && !("mcpOAuth" in entry))
        : security;
      if (Array.isArray(security) && security.length > 0 && supported.length === 0) {
        delete pathItem[method];
        continue;
      }
      if (Array.isArray(operation.security)) {
        operation.security = supported;
      }
      if (path === "/v1/broadcasts/{id}/schedule" && method === "post") {
        // The published operation has a second request body for MCP OAuth.
        // API-key consumers can submit only the ordinary version request.
        operation.requestBody.content["application/json"].schema = {
          $ref: "#/components/schemas/BroadcastVersionRequest",
        };
        delete operation["x-viapost-mcp-scopes"];
        if (operation.description?.includes("OAuth MCP exige")) {
          operation.description = operation.description.replace(
            /OAuth MCP exige[\s\S]*?(?=O agendamento é fail-closed)/,
            "",
          );
        }
        // Fail closed if the upstream description changes rather than shipping
        // SDK types that advertise an unsupported OAuth/MCP scheduling flow.
        if (/\b(MCP|OAuth|plan_id|plan_hash|approval_id)\b/i.test(operation.description ?? "")) {
          throw new Error("Unsupported MCP scheduling instructions in API-key SDK contract");
        }
      }
      if (Array.isArray(operation.parameters)) {
        operation.parameters = operation.parameters.filter(
          (parameter) =>
            parameter?.$ref !== "#/components/parameters/CsrfHeader" &&
            parameter?.$ref !== "#/components/parameters/RequiredCsrfHeader",
        );
      }
    }
    if (!methods.some((method) => method in pathItem)) delete sanitized.paths[path];
  }
  return sanitized;
}

export function canonical(value) {
  if (Array.isArray(value)) return value.map(canonical);
  if (value && typeof value === "object") {
    return Object.fromEntries(Object.keys(value).sort().map((key) => [key, canonical(value[key])]));
  }
  return value;
}

export async function downloadContract() {
  const response = await fetch(CONTRACT_URL, { signal: AbortSignal.timeout(15_000) });
  if (!response.ok) throw new Error(`Unable to download ${CONTRACT_URL}: HTTP ${response.status}`);
  return response.text();
}
