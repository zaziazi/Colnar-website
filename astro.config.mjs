// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { routes } from './src/i18n/index.ts';

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
  // Matches build.format below, and how a static host serves directory output.
  trailingSlash: 'always',
  integrations: [
    /*
     * Each entry carries its counterpart as an xhtml:link — the sitemap's own
     * way of saying that /vina and /en/wines are one page in two languages.
     *
     * Done by hand rather than with the integration's `i18n` option: that one
     * pairs pages whose paths match after the locale segment, and ours do not.
     * `/vina` and `/en/wines` are the same page under two different words, so
     * the route map is the only thing that knows they belong together.
     */
    sitemap({
      serialize(item) {
        const { origin, pathname } = new URL(item.url);
        const pair = Object.keys(routes.sl).find(
          (key) => routes.sl[key] === pathname || routes.en[key] === pathname,
        );
        if (pair) {
          item.links = [
            { lang: 'sl', url: origin + routes.sl[pair] },
            { lang: 'en', url: origin + routes.en[pair] },
          ];
        }
        return item;
      },
    }),
  ],
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
