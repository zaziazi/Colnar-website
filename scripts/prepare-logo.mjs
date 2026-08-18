/**
 * The JC COLNAR logo, converted from the client's `JC-LOGO-1.pdf` to SVG.
 *
 * The PDF is pure vector — no fonts, no images, the wordmark already outlined —
 * and uses only the path operators (m, l, c, h, re) plus two fills. So rather
 * than rasterising it, which would tie the mark to one size and one colour, the
 * paths are translated straight into SVG:
 *
 *   - PDF puts the origin bottom-left with y going up; SVG puts it top-left with
 *     y going down, so every coordinate is flipped about the page height. This
 *     page also carries `/Rotate 270`, which a viewer applies on display and
 *     which is easy to miss — ignore it and the mark comes out on its side.
 *   - `f` is a nonzero fill and `f*` an even-odd one — the counters inside the
 *     letters depend on the difference, so each fill becomes its own <path> with
 *     its own fill-rule rather than being merged.
 *   - The viewBox is the exact ink bounds, including the true extrema of each
 *     cubic rather than its control points, so the mark has no stray padding
 *     and can be positioned by its own edges.
 *
 * Output carries `fill: currentColor` and is inlined by components/Logo.astro,
 * so the mark takes its colour from wherever it sits — the tint in the nav, and
 * whatever a dark ground needs later — without a second copy of the file.
 *
 * Run with:  npm run logo
 */
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { inflateSync } from 'node:zlib';
import { join, resolve } from 'node:path';

const source = process.argv[2] ?? resolve('Photos/JC-LOGO-1.pdf');
const out = resolve('src/assets/brand');
mkdirSync(out, { recursive: true });

const pdf = readFileSync(source);
const text = pdf.toString('latin1');
const box = /\/MediaBox\s*\[\s*[\d.-]+\s+[\d.-]+\s+([\d.]+)\s+([\d.]+)/.exec(text);
const pageWidth = Number(box[1]);
const pageHeight = Number(box[2]);
const rotate = ((Number(/\/Rotate\s*(-?\d+)/.exec(text)?.[1] ?? 0) % 360) + 360) % 360;

// First content stream; the other two pages are the same mark.
const stream = /stream\r?\n([\s\S]*?)endstream/.exec(text)[1];
const content = inflateSync(Buffer.from(stream.replace(/^\r?\n/, ''), 'latin1')).toString('latin1');

/**
 * One PDF user-space point to one SVG point, taking the page rotation with it.
 * `/Rotate` is clockwise on display, and 90 or 270 swap the canvas dimensions.
 */
const toSvg = (x, y) => {
  switch (rotate) {
    case 90:
      return [y, x];
    case 180:
      return [pageWidth - x, y];
    case 270:
      return [pageHeight - y, pageWidth - x];
    default:
      return [x, pageHeight - y];
  }
};

const n = (v) => Number(v.toFixed(2));

const tokens = content.split(/\s+/).filter(Boolean);
const paths = [];
let d = '';
let stack = [];
let cursor = [0, 0];
const points = [];

const note = (x, y) => points.push([x, y]);

for (const token of tokens) {
  if (/^-?[\d.]+$/.test(token)) {
    stack.push(Number(token));
    continue;
  }

  switch (token) {
    case 'm': {
      const [x, y] = stack.slice(-2);
      cursor = toSvg(x, y);
      d += `M${n(cursor[0])} ${n(cursor[1])}`;
      note(...cursor);
      break;
    }
    case 'l': {
      const [x, y] = stack.slice(-2);
      cursor = toSvg(x, y);
      d += `L${n(cursor[0])} ${n(cursor[1])}`;
      note(...cursor);
      break;
    }
    case 'c': {
      const [x1, y1, x2, y2, x3, y3] = stack.slice(-6);
      const c1 = toSvg(x1, y1);
      const c2 = toSvg(x2, y2);
      const end = toSvg(x3, y3);
      d += `C${n(c1[0])} ${n(c1[1])} ${n(c2[0])} ${n(c2[1])} ${n(end[0])} ${n(end[1])}`;
      cubicExtrema(cursor, c1, c2, end).forEach((p) => note(...p));
      cursor = end;
      break;
    }
    case 'h':
      d += 'Z';
      break;
    case 'f':
    case 'f*':
      if (d) paths.push({ d, rule: token === 'f*' ? 'evenodd' : 'nonzero' });
      d = '';
      break;
    // `re W n` is the full-page clip, and `q Q gs k` carry no geometry.
    default:
      break;
  }
  stack = [];
}

/** Where a cubic actually reaches, not merely where its control points are. */
function cubicExtrema(p0, p1, p2, p3) {
  const hits = [p0, p3];
  for (const axis of [0, 1]) {
    const [a, b, c, dd] = [p0[axis], p1[axis], p2[axis], p3[axis]];
    const A = -a + 3 * b - 3 * c + dd;
    const B = 2 * (a - 2 * b + c);
    const C = b - a;
    const roots = [];
    if (Math.abs(A) < 1e-9) {
      if (Math.abs(B) > 1e-9) roots.push(-C / B);
    } else {
      const disc = B * B - 4 * A * C;
      if (disc >= 0) {
        const s = Math.sqrt(disc);
        roots.push((-B + s) / (2 * A), (-B - s) / (2 * A));
      }
    }
    for (const t of roots) {
      if (t <= 0 || t >= 1) continue;
      const u = 1 - t;
      const point = [0, 1].map(
        (i) =>
          u * u * u * p0[i] + 3 * u * u * t * p1[i] + 3 * u * t * t * p2[i] + t * t * t * p3[i]
      );
      hits.push(point);
    }
  }
  return hits;
}

const xs = points.map((p) => p[0]);
const ys = points.map((p) => p[1]);
const minX = Math.min(...xs);
const minY = Math.min(...ys);
const width = Math.max(...xs) - minX;
const height = Math.max(...ys) - minY;

const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${n(width)} ${n(height)}" fill="currentColor" role="img" aria-label="Colnar">
  <g transform="translate(${n(-minX)} ${n(-minY)})">
${paths.map((p) => `    <path fill-rule="${p.rule}" d="${p.d}"/>`).join('\n')}
  </g>
</svg>
`;

writeFileSync(join(out, 'jc.svg'), svg);
console.log(
  `logo    jc.svg  ${paths.length} paths, ${n(width)}×${n(height)}, aspect ${(width / height).toFixed(3)}, ${svg.length} bytes`
);
