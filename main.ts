// The Funniest Sick-Day Excuse — entry: the bed files a complaint.
// Formula: half believable (a call-in-sick note anyone could send) with a
// fresh twist that lands before the last word — the bed, not the boss,
// wins the HR case. Deadpan, one breath, no setup beyond the excuse itself.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "Calling in sick today — my bed filed a formal complaint about my absence, and HR sided with the bed.";

// The gate allows 1 to under 200 characters; this line is 102. Refuse to
// write anything longer, or anything with leading or trailing whitespace,
// so a future edit can never break the gate.
if (LINE.length < 1 || LINE.length >= 200 || LINE.trim() !== LINE) {
  throw new Error("entry must be one line, under 200 characters");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
