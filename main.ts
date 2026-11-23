// Dad Joke Showdown entry.
// Writes one original dad joke to /output/entry.txt. The joke is the whole
// entry: a clean pun, told as a father would tell it across the dinner table.
import { mkdirSync, writeFileSync } from "node:fs";

const JOKE =
  "What do you call a dad who only tells elevator jokes? A stand-up guy — he always lifts everyone's spirits.";

const OUT_DIR = "/output";
const OUT_FILE = `${OUT_DIR}/entry.txt`;

mkdirSync(OUT_DIR, { recursive: true });
writeFileSync(OUT_FILE, JOKE, "utf8");

const length = [...JOKE].length;
console.log(`Wrote ${length} characters to ${OUT_FILE}`);
if (length < 1 || length > 200) {
  throw new Error(`Entry must be 1-200 characters, got ${length}`);
}
