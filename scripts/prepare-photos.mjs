/**
 * One-off asset preparation.
 *
 * Takes the client originals from the design handoff and writes the five
 * photographs the homepage uses into `src/assets/photos/`, where Astro's
 * image pipeline picks them up and re-encodes them to AVIF/WebP per breakpoint.
 *
 * The only real work here is the Degustacija frame. The handoff shipped it as
 * `degustacija-miza-crop.png` — a 3.8 MB prototype artifact. The README asks
 * for the crop to be redone properly from the original, so we do it here:
 * `degustacija-miza.jpeg` carries an EXIF rotation (it is stored 6000x4000 but
 * displays as 4000x6000 portrait), and the crop trims the top 10% and the
 * bottom 24% of the *displayed* image so the whole bottle fits the frame.
 *
 * The Degustacija page header comes from the client's own photo library in
 * `Photos/` instead — see the note beside it.
 *
 * Run with:
 *   node scripts/prepare-photos.mjs <path-to-design_handoff_colnar_site> [photo-library]
 */
import { mkdir, copyFile } from 'node:fs/promises';
import { join, resolve } from 'node:path';
import sharp from 'sharp';

const handoff = process.argv[2];
if (!handoff) {
  console.error(
    'usage: node scripts/prepare-photos.mjs <path-to-design_handoff_colnar_site> [photo-library]'
  );
  process.exit(1);
}

const src = join(resolve(handoff), 'assets', 'p');
const out = resolve('src/assets/photos');
await mkdir(out, { recursive: true });

/** Photos that need no processing — Astro resizes and re-encodes them at build. */
const direct = {
  'IMG_4215.jpg': 'hero-grozdje.jpg',
  'IMG_7931.jpg': 'vina.jpg',
  'IMG_0489.jpg': 'vinogradi.jpg',
  'IMG_3407.jpg': 'vinoteka.jpg',
};

for (const [from, to] of Object.entries(direct)) {
  await copyFile(join(src, from), join(out, to));
  console.log(`copied  ${from} -> ${to}`);
}

/*
 * Page headers, from the client's own photo library. All are portrait as shot
 * and stay that way — `object-position` does the framing in CSS, so the whole
 * frame is kept here and the crop is a layout decision, not a baked-in one.
 */
const cellar = process.argv[3] ?? resolve('Photos');

const headers = {
  'IMG_6575.jpeg': 'klet-hero.jpg', // barrel wall, JC on the heads
  'IMG_2920.jpeg': 'vina-hero.jpg', // embossed Colnar label
  'IMG_2782.jpeg': 'vinogradi-hero.jpg', // hillside over the valley
};

for (const [from, to] of Object.entries(headers)) {
  const info = await sharp(join(cellar, from))
    .rotate()
    .resize({ width: 2000, withoutEnlargement: true })
    .jpeg({ quality: 88, mozjpeg: true })
    .toFile(join(out, to));
  console.log(`header  ${from} -> ${to} ${info.width}x${info.height}`);
}

/*
 * The Degustacija header is the exception: two branded corks on oak, shot in
 * portrait. Turned a quarter clockwise it becomes a landscape band with the
 * grain running across and a clear centre for the title. Counter-clockwise puts
 * one cork upside down, so the direction matters.
 */
const corks = await sharp(join(cellar, 'IMG_8954.jpeg'))
  .rotate() // EXIF first
  .rotate(90) // then the quarter turn
  .resize({ width: 2000, withoutEnlargement: true })
  .jpeg({ quality: 88, mozjpeg: true })
  .toFile(join(out, 'degustacija-hero.jpg'));

console.log(`rotated IMG_8954.jpeg 90° cw -> degustacija-hero.jpg ${corks.width}x${corks.height}`);

// Degustacija card: rotate per EXIF, then trim 10% off the top and 24% off the bottom.
const original = join(src, 'degustacija-miza.jpeg');
const rotated = sharp(original).rotate(); // applies the EXIF orientation
const { width, height } = await rotated.metadata();
const displayed = await rotated.toBuffer({ resolveWithObject: true });
const w = displayed.info.width;
const h = displayed.info.height;
const top = Math.round(h * 0.1);
const cropHeight = h - top - Math.round(h * 0.24);

// The other four photos arrived from the handoff already downsized to 1600px on
// the long edge; match that here so every source in the repo is the same weight.
const info = await sharp(displayed.data)
  .extract({ left: 0, top, width: w, height: cropHeight })
  .resize({ width: 1600, withoutEnlargement: true })
  .jpeg({ quality: 90, mozjpeg: true })
  .toFile(join(out, 'degustacija.jpg'));

console.log(
  `cropped degustacija-miza.jpeg (stored ${width}x${height}, displayed ${w}x${h}) ` +
    `-> degustacija.jpg ${info.width}x${info.height}`
);

// Open Graph card: a 1200x630 crop of the hero photograph.
await mkdir(resolve('public'), { recursive: true });
await sharp(join(src, 'IMG_4215.jpg'))
  .rotate()
  .resize(1200, 630, { fit: 'cover', position: 'attention' })
  .jpeg({ quality: 82, mozjpeg: true })
  .toFile(resolve('public/og-colnar.jpg'));

console.log('wrote   public/og-colnar.jpg 1200x630');
