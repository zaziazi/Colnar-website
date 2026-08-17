// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://colnar.si',
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
