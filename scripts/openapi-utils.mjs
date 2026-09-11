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
  delete sanitized.components?.parameters?.CsrfHeader;

  for (const pathItem of Object.values(sanitized.paths ?? {})) {
    for (const operation of Object.values(pathItem ?? {})) {
      if (!operation || typeof operation !== "object" || !("responses" in operation)) continue;
      if (Array.isArray(operation.security)) {
        operation.security = operation.security.filter((entry) => !("sessionCookie" in entry));
      }
      if (Array.isArray(operation.parameters)) {
        operation.parameters = operation.parameters.filter(
          (parameter) => parameter?.$ref !== "#/components/parameters/CsrfHeader",
        );
      }
    }
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
