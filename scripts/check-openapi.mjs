import { readFile } from "node:fs/promises";

import { canonical, downloadContract, parseContract, CONTRACT_URL } from "./openapi-utils.mjs";

const local = parseContract(await readFile(new URL("../openapi.yaml", import.meta.url), "utf8"));
const remote = parseContract(await downloadContract());

if (JSON.stringify(canonical(local)) !== JSON.stringify(canonical(remote))) {
  console.error(`openapi.yaml differs semantically from ${CONTRACT_URL}. Run \`npm run sync:contract\`.`);
  process.exitCode = 1;
} else {
  console.log("openapi.yaml is semantically synchronized with the published ViaPost contract.");
}
