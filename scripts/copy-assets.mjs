import { cpSync, existsSync, mkdirSync, readdirSync } from 'node:fs';
import { join, resolve } from 'node:path';

const [, , sourceArg, destinationArg] = process.argv;

if (!sourceArg || !destinationArg) {
  console.error('Usage: node scripts/copy-assets.mjs <sourceDir> <destinationDir>');
  process.exit(1);
}

const sourceDir = resolve(sourceArg);
const destinationDir = resolve(destinationArg);

if (!existsSync(sourceDir)) {
  console.error(`Source directory does not exist: ${sourceDir}`);
  process.exit(1);
}

mkdirSync(destinationDir, { recursive: true });

for (const entry of readdirSync(sourceDir)) {
  cpSync(join(sourceDir, entry), join(destinationDir, entry), {
    recursive: true,
    force: false,
    errorOnExist: false,
  });
}
