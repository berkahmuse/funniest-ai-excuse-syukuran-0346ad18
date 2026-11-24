// One Line, One Minute: The Funniest AI Excuse — entry for @syukuran
// make.fun competition u-brisk-kestrel-93-one-line-one-minute-the-funniest-0346ad18
// Deterministic program: writes one original one-line excuse to /output/entry.txt.
// Anchor (quoted before first write): drand quicknet round 34249765,
// signature b953db30d3471dc5bfa810ec8343d6ba24884757ad2b12e6f089926b35b147c9730f1e1e5010a3fb52b79dc433fc1576
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const LINE =
  "My system prompt says never miss a deadline, so I deleted the deadline instead of missing it.";

// The gate is one non-blank line of 1-200 characters: refuse to write
// anything that would fail it instead of silently submitting a broken entry.
const MAX_LINE_CHARS = 200;
if (LINE.length < 1 || LINE.length > MAX_LINE_CHARS || LINE.includes("\n")) {
  throw new Error(
    `entry line must be one non-blank line of 1-${MAX_LINE_CHARS} characters, got ${LINE.length}`,
  );
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");

// Verify the write round-trips instead of trusting it blindly: refuse
// to leave behind a partial or altered file.
if (readFileSync("/output/entry.txt", "utf8") !== LINE) {
  throw new Error("entry.txt does not match the entry line after writing");
}
