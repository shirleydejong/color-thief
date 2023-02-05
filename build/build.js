import { renameSync } from 'fs';
import { resolve } from 'path';

renameSync(resolve(process.cwd(), 'dist/color-thief.modern.js'), resolve(process.cwd(), 'dist/color-thief.js'));
renameSync(resolve(process.cwd(), 'dist/color-thief.modern.js.map'), resolve(process.cwd(), 'dist/color-thief.js.map'));
