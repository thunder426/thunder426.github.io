// Copies each addon's CHANGELOG.md from its own repo into src/content/changelogs/.
// The site reads the version and the latest release notes from these copies.
//
//   npm run sync                       repos next to this one (../wowaddon, ...)
//   ADDONS_DIR=D:\src npm run sync     repos somewhere else

import { copyFile, access } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const addonsDir = process.env.ADDONS_DIR ?? path.resolve(root, '..');

// site slug -> repo folder
const repos = {
  'forever-leveling-bis': 'wowaddon',
  'waylaid-auction-helper': 'waylaidhelper',
  'let-me-buff-you': 'letmebuffyou',
};

let failed = false;
for (const [slug, repo] of Object.entries(repos)) {
  const from = path.join(addonsDir, repo, 'CHANGELOG.md');
  const to = path.join(root, 'src', 'content', 'changelogs', `${slug}.md`);
  try {
    await access(from);
    await copyFile(from, to);
    console.log(`${slug}: copied ${from}`);
  } catch {
    console.error(`${slug}: ${from} not found`);
    failed = true;
  }
}
process.exitCode = failed ? 1 : 0;
