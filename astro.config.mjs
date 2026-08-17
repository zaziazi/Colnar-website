// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
/*
 * Canonical URLs, hreflang and the sitemap are all built from `site`, so it has
 * to be whatever the site is actually served from.
 *
 * Netlify sets `URL` to the main site URL at build time: the *.netlify.app
 * subdomain while that is all there is, and the custom domain the moment one is
 * attached. So this needs no editing when colnar.si is pointed here — and
 * Netlify 301s the old subdomain to the custom domain itself.
 *
 * The fallback is for local builds and for any host that does not set `URL`.
 */
export default defineConfig({
  site: process.env.URL ?? 'https://colnar.si',
  output: 'static',
  integrations: [sitemap()],
  build: {
    // colnar.si/degustacija rather than colnar.si/degustacija/index.html
    format: 'directory',
  },
  image: {
    // The five client photographs are the only images on the site; AVIF/WebP
    // variants are produced at build time by sharp.
    responsiveStyles: false,
  },
  compressHTML: true,
});
