import { sl } from './sl';
import { en } from './en';
import type { Content } from './types';

export type { Content } from './types';

export const languages = ['sl', 'en'] as const;
export type Lang = (typeof languages)[number];

const content: Record<Lang, Content> = { sl, en };

export const getContent = (lang: Lang): Content => content[lang];

export type RouteKey = 'home' | 'wines' | 'cellar' | 'vineyards' | 'vinoteka' | 'tasting';

/**
 * Slovenian is the site; English sits under /en/. Both sets are spelled out
 * rather than derived, because the English paths are translated too — /vina is
 * /en/wines, not /en/vina — and because this is the one place to look when
 * wiring a link.
 *
 * The trailing slashes are load-bearing. `build.format: 'directory'` writes
 * dist/vina/index.html, which a host serves at /vina/ and 301s /vina to — so
 * without them every internal link takes a redirect, the canonical points at a
 * URL that is not the one served, and the sitemap (which adds them) disagrees
 * with the canonical. Astro's `trailingSlash: 'always'` keeps dev honest.
 */
export const routes: Record<Lang, Record<RouteKey, string>> = {
  sl: {
    home: '/',
    wines: '/vina/',
    cellar: '/klet/',
    vineyards: '/vinogradi/',
    vinoteka: '/vinoteka/',
    tasting: '/degustacija/',
  },
  en: {
    home: '/en/',
    wines: '/en/wines/',
    cellar: '/en/cellar/',
    vineyards: '/en/vineyards/',
    vinoteka: '/en/wine-bar/',
    tasting: '/en/tasting/',
  },
};

export const route = (lang: Lang, key: RouteKey): string => routes[lang][key];

/** The other language's version of the same page, for the nav toggle and hreflang. */
export const otherLang = (lang: Lang): Lang => (lang === 'sl' ? 'en' : 'sl');

export const alternates = (key: RouteKey) =>
  languages.map((lang) => ({ lang, href: routes[lang][key] }));

/** Wines live in src/content/wines/<lang>/, so the id carries the language. */
export const winesFor = (lang: Lang) => (entry: { id: string }) =>
  entry.id.startsWith(`${lang}/`);
