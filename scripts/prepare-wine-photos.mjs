/**
 * Bottle shots for /vina, from the distributor's brand page:
 * https://www.evino.si/znamke/colnar/
 *
 * The estate confirmed these are its own photographs, so they are used here
 * with its permission — the provenance is recorded in README.
 *
 * Each source is a 565x565 studio shot of one bottle on pure white. Two steps
 * turn that into something that sits on the page rather than in a box:
 *
 *   1. key the white out. The ground is a flat #ffffff, so a threshold at 249
 *      catches it without punching holes in pale labels (the palest, hišno
 *      belo, sits around 206) or in the glass highlights.
 *   2. trim the transparent margin, so the bottle fills its frame and every
 *      row lines up regardless of how much air the original had.
 *
 * Output is PNG with alpha; Astro re-encodes to AVIF/WebP at build and the
 * transparency survives, so the bottles work on any ground.
 *
 * Run with:  npm run wine-photos
 */
import { mkdir, writeFile, readFile, unlink } from 'node:fs/promises';
import { join, resolve } from 'node:path';
import sharp from 'sharp';

const BRAND_PAGE = 'https://www.evino.si/znamke/colnar/';

/** slug in src/content/wines → the distributor's image for that bottle. */
const sources = {
  cvicek: 'https://www.evino.si/wp-content/uploads/2024/08/colnar_cvicek_1_.jpg',
  'hisno-belo': 'https://www.evino.si/wp-content/uploads/2025/08/Colnar-Hisno-belo.png',
  'laski-rizling': 'https://www.evino.si/wp-content/uploads/2024/08/colnar_laski_rizling.jpg',
  'modra-frankinja': 'https://www.evino.si/wp-content/uploads/2026/05/colnar-_modrafrankinja.png',
  rose: 'https://www.evino.si/wp-content/uploads/2024/09/colnar-rose.png',
  penina: 'https://www.evino.si/wp-content/uploads/2024/08/colnar_penina.jpg',
  'grand-jaenes': 'https://www.evino.si/wp-content/uploads/2026/03/grandjaenes.png',
  // Their filename carries a typo — "grandjanenes" — keep it, it is the real path.
  'grand-jaenes-rose': 'https://www.evino.si/wp-content/uploads/2026/03/grandjanenes_rose.png',
  collis: 'https://www.evino.si/wp-content/uploads/2024/08/colnar_collis.jpg',
  // `dolenjsko-belo` has no listing on the brand page — see README.
};

const WHITE = 249;
const out = resolve('src/assets/photos/wines');
await mkdir(out, { recursive: true });

for (const [slug, url] of Object.entries(sources)) {
  const response = await fetch(url, {
    headers: {
      // The CDN refuses requests without a browser-shaped UA and referer.
      'user-agent':
        'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126 Safari/537.36',
      referer: BRAND_PAGE,
    },
  });
  if (!response.ok) throw new Error(`${slug}: HTTP ${response.status} for ${url}`);

  const original = Buffer.from(await response.arrayBuffer());
  const { data, info } = await sharp(original)
    .flatten({ background: '#ffffff' }) // any existing alpha starts white too
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  for (let i = 0; i < data.length; i += 4) {
    if (data[i] >= WHITE && data[i + 1] >= WHITE && data[i + 2] >= WHITE) data[i + 3] = 0;
  }

  const info2 = await sharp(data, { raw: { width: info.width, height: info.height, channels: 4 } })
    .trim()
    .png({ compressionLevel: 9 })
    .toFile(join(out, `${slug}.png`));

  console.log(`bottle  ${slug}.png ${info2.width}x${info2.height}`);
}
