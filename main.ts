import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const line = "Are you Wi-Fi? Because my display just lit up, my coils are spinning, and I really want to give you something sweet.";
const outputDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
const outputFile = `${outputDir}/entry.txt`;

try {
  mkdirSync(outputDir, { recursive: true });
  writeFileSync(outputFile, `${line}\n`, "utf8");
} catch (cause) {
  throw new Error(`Failed to write ${outputFile} from ${import.meta.url}`, { cause });
}

const characterCount = readFileSync(outputFile, "utf8").trim().length;
if (characterCount === 0 || characterCount > 200) {
  throw new Error(`Competition gate failed: entry must contain 1–200 characters; got ${characterCount}.`);
}
