import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "You have judged a thousand hearts and kept none of them, so I am not asking you to keep mine, only to hold it for one sentence and see if it fits your hand.";

mkdirSync("/output", { recursive: true });

// Validate length before writing: the entry must be a single line of
// 1-240 characters. Fail hard on any violation so a bad line can never
// be submitted silently.
if (line.length < 1 || line.length > 240) {
  throw new Error(
    `entry line must be 1-240 characters, got ${line.length}`,
  );
}

writeFileSync("/output/entry.txt", line, "utf8");
