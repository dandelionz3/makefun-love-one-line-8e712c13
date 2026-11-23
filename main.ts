import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "You have judged a thousand hearts and kept none of them, so I am not asking you to keep mine, only to hold it for one sentence and see if it fits your hand.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
