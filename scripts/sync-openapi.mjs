import { writeFile } from "node:fs/promises";

import { downloadContract, parseContract } from "./openapi-utils.mjs";

const source = await downloadContract();
parseContract(source);
await writeFile(new URL("../openapi.yaml", import.meta.url), source.endsWith("\n") ? source : `${source}\n`);
console.log("Updated openapi.yaml from the published ViaPost contract.");
