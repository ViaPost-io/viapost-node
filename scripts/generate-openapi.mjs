import { readFile, writeFile } from "node:fs/promises";

import openapiTS, { astToString } from "openapi-typescript";

import { parseContract, sdkContract } from "./openapi-utils.mjs";

const outputPath = new URL("../src/generated/openapi.ts", import.meta.url);
const inputPath = new URL("../openapi.yaml", import.meta.url);
const header = `/**
 * This file was auto-generated from openapi.yaml.
 * Do not make direct changes to the file.
 */

`;
const contract = sdkContract(parseContract(await readFile(inputPath, "utf8")));
const generated = header + astToString(await openapiTS(contract, { defaultNonNullable: false, immutable: true }));

if (process.argv.includes("--check")) {
  const current = await readFile(outputPath, "utf8").catch(() => "");
  if (current !== generated) {
    console.error("Generated OpenAPI types are stale. Run `npm run generate`.");
    process.exitCode = 1;
  }
} else {
  await writeFile(outputPath, generated);
  console.log("Generated src/generated/openapi.ts from the API-key-only public contract.");
}
