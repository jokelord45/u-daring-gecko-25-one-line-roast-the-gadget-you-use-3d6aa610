// One-Line Roast: The Gadget You Use Every Day
// Writes a single original roast line (<= 200 chars) to /output/entry.txt.
// Node 22, stdlib only.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "My phone's Face ID fails every morning until I've had coffee — even the gadget holding all my secrets pretends not to know me before caffeine.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
console.log(`Wrote ${ENTRY.length} chars to /output/entry.txt`);
console.log(ENTRY);
