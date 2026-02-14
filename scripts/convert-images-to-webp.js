// Convert all .png, .jpg, .jpeg, and .svg files to .webp in the same locations
// Usage: node scripts/convert-images-to-webp.js
// Requires: npm i sharp glob

import path from 'path';
import { sync as globSync } from 'glob';
import sharp from 'sharp';

// Include svg as well
const PATTERN = '**/*.{png,jpg,jpeg}';

(async () => {
  try {
    const files = globSync(PATTERN, { nodir: true, ignore: ['**/node_modules/**', 'dist/**', '.next/**'] });

    for (const file of files) {
      // Replace any of the source extensions with .webp
      const out = file.replace(/\.(png|jpg|jpeg|svg)$/i, '.webp');

      try {
        const extension = path.extname(file).toLowerCase();

        let conversion;

        if (extension === '.svg') {
          // Use lossless for SVGs to keep sharpness
          conversion = sharp(file).webp({ lossless: true });
        } else {
          // Use quality for raster images (png, jpg)
          conversion = sharp(file).webp({ quality: 80 });
        }

        await conversion.toFile(out);
      } catch (err) {
        console.error(`Failed convert ${file}:`, err?.message || String(err));
      }
    }
  } catch (err) {
    console.error('Error during conversion:', err?.message || String(err));
    process.exit(1);
  }
})();