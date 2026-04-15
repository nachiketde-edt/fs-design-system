/**
 * Copies src/tokens.css → dist/tokens.css
 * Run after tsup so the CSS file lands alongside the JS output.
 */
import { copyFileSync, mkdirSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, '..');

mkdirSync(resolve(root, 'dist'), { recursive: true });
copyFileSync(resolve(root, 'src/tokens.css'), resolve(root, 'dist/tokens.css'));

console.log('✓ dist/tokens.css written');
