// Worst Fix Ever: Funniest Commit Message
// A single commit subject line about a repair that backfired badly.
//
// The joke: the login really did get faster. That is the problem.
// Removing the password check solved the wait and, in the same stroke,
// promoted every stranger on the internet to administrator.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const commitMessage =
  "fix: fixed slow login by removing passwords; now everyone logs in instantly as admin";

const outputPath = "/output/entry.txt";

mkdirSync(dirname(outputPath), { recursive: true });
writeFileSync(outputPath, commitMessage, "utf8");
