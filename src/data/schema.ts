/**
 * Structured data.
 *
 * One `@graph` per page: the winery, the page itself, its breadcrumb, and
 * whatever that page adds — the cenik as a `Menu`, the tasting as `Offer`s, the
 * wines as `Product`s. Nodes carry `@id`s so they can point at each other
 * instead of being restated.
 *
 * The rule throughout is that nothing is marked up that a visitor cannot also
 * read on the page. Prices appear here only where they appear there: that is
 * Google's own condition, and it is what keeps the markup honest.
 */
import { maps } from './maps';
import type { Content } from '../i18n/types';

export type Node = Record<string, unknown>;

export const ids = {
  winery: (site: URL | string) => new URL('#winery', site).href,
  website: (site: URL | string) => new URL('#website', site).href,
  vinoteka: (site: URL | string) => new URL('/vinoteka/#vinoteka', site).href,
};

/** The estate. Its three addresses are departments of the one business. */
export const winery = (site: URL, t: Content, homeUrl: string, image: string): Node => ({
  '@type': 'Winery',
  '@id': ids.winery(site),
  name: t.siteName,
  legalName: t.legalName,
  url: homeUrl,
  image,
  logo: new URL('/logo-colnar.svg', site).href,
  email: 'info@colnar.si',
  telephone: '+386 31 288 724',
  foundingDate: '1747',
  vatID: 'SI43099807',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Lešnica 8',
    postalCode: '8222',
    addressLocality: 'Otočec',
    addressRegion: 'Dolenjska',
    addressCountry: 'SI',
  },
  hasMap: maps.cellar,
  areaServed: 'SI',
  knowsLanguage: ['sl', 'en'],
  department: [
    {
      '@type': ['BarOrPub', 'LiquorStore'],
      '@id': ids.vinoteka(site),
      name: 'Vinoteka Colnar',
      telephone: '+386 41 871 425',
      url: new URL('/vinoteka/', site).href,
      hasMap: maps.vinoteka,
      priceRange: '€–€€€',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Otoška cesta 5',
        postalCode: '8000',
        addressLocality: 'Novo mesto',
        addressCountry: 'SI',
      },
      openingHoursSpecification: [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
          opens: '09:00',
          closes: '21:00',
        },
      ],
    },
    {
      '@type': 'Winery',
      name: 'Zidanica Colnar',
      telephone: '+386 31 725 830',
      hasMap: maps.zidanica,
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Črešnjice 124',
        addressLocality: 'Otočec',
        addressCountry: 'SI',
      },
    },
  ],
});

export const website = (site: URL, t: Content, homeUrl: string): Node => ({
  '@type': 'WebSite',
  '@id': ids.website(site),
  name: t.siteName,
  url: homeUrl,
  inLanguage: t.htmlLang,
  publisher: { '@id': ids.winery(site) },
});

export const webPage = (
  site: URL,
  t: Content,
  canonical: string,
  title: string,
  description: string,
  image: string,
): Node => ({
  '@type': 'WebPage',
  '@id': `${canonical}#webpage`,
  url: canonical,
  name: title,
  description,
  inLanguage: t.htmlLang,
  isPartOf: { '@id': ids.website(site) },
  about: { '@id': ids.winery(site) },
  primaryImageOfPage: image,
});

/** Home → this page. Two levels is the whole site. */
export const breadcrumb = (home: string, homeName: string, url: string, name: string): Node => ({
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: homeName, item: home },
    { '@type': 'ListItem', position: 2, name, item: url },
  ],
});

/* --------------------------------------------------------------- the cenik --
 *
 * The vinoteka's list as a `Menu`, section for section and row for row. Pours
 * are the offer's `eligibleQuantity` rather than part of the name, so a machine
 * reading it gets "Cviček, 0.1 l, 1.40 €" as three facts and not one string.
 */
type MenuItemData = { name: string; ml?: number; g?: number; price: number };
type MenuGroupData = { id: string; items?: MenuItemData[]; parts?: { id: string; items: MenuItemData[] }[] };
type MenuSectionData = { id: string; groups: MenuGroupData[] };

const menuItem = (item: MenuItemData): Node => ({
  '@type': 'MenuItem',
  name: item.name,
  offers: {
    '@type': 'Offer',
    price: item.price.toFixed(2),
    priceCurrency: 'EUR',
    ...(item.ml || item.g
      ? {
          eligibleQuantity: {
            '@type': 'QuantitativeValue',
            value: item.ml ? item.ml / 1000 : item.g,
            unitCode: item.ml ? 'LTR' : 'GRM',
          },
        }
      : {}),
  },
});

export const menu = (
  site: URL,
  canonical: string,
  t: Content,
  name: string,
  sections: MenuSectionData[],
  labels: { sections: Record<string, string>; groups: Record<string, string> },
): Node[] => [
  {
    '@type': ['BarOrPub', 'LiquorStore'],
    '@id': ids.vinoteka(site),
    hasMenu: { '@id': `${canonical}#menu` },
  },
  {
    '@type': 'Menu',
    '@id': `${canonical}#menu`,
    name,
    inLanguage: t.htmlLang,
    hasMenuSection: sections.map((section) => ({
      '@type': 'MenuSection',
      name: labels.sections[section.id],
      hasMenuSection: section.groups.map((group) => ({
        '@type': 'MenuSection',
        name: labels.groups[group.id],
        ...(group.parts
          ? {
              hasMenuSection: group.parts.map((part) => ({
                '@type': 'MenuSection',
                name: labels.groups[part.id],
                hasMenuItem: part.items.map(menuItem),
              })),
            }
          : { hasMenuItem: (group.items ?? []).map(menuItem) }),
      })),
    })),
  },
];

/* ------------------------------------------------------------- the tasting --
 *
 * A service with one offer per size of tasting, plus the two add-ons. Every
 * figure is the one printed in the cenik on that page.
 */
export const tasting = (
  site: URL,
  canonical: string,
  t: Content,
  perPerson: string,
): Node => ({
  '@type': 'Service',
  '@id': `${canonical}#degustacija`,
  serviceType: t.tasting.title,
  name: `${t.tasting.title} — ${t.siteName}`,
  description: t.tasting.intro,
  provider: { '@id': ids.winery(site) },
  areaServed: { '@type': 'Place', name: 'Otočec, Dolenjska, SI' },
  url: canonical,
  offers: t.tasting.priceGroups.flatMap((group) =>
    group.rows.map((row) => ({
      '@type': 'Offer',
      name: row.name,
      description: [group.label, row.note, perPerson].filter(Boolean).join(' · '),
      price: row.price.toFixed(2),
      priceCurrency: 'EUR',
      availability: 'https://schema.org/InStock',
      url: canonical,
    })),
  ),
});

/* ---------------------------------------------------------------- the wines --
 *
 * The range as an `ItemList` of products. Deliberately without prices: the page
 * does not show any, and marking up figures a visitor cannot see is exactly
 * what the guidelines forbid.
 */
export const wineList = (
  site: URL,
  canonical: string,
  t: Content,
  wines: { name: string; kind?: string; description?: string; image?: string; url?: string }[],
): Node => ({
  '@type': 'ItemList',
  '@id': `${canonical}#vina`,
  name: `${t.wines.title} — ${t.siteName}`,
  numberOfItems: wines.length,
  itemListElement: wines.map((wine, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    item: {
      '@type': 'Product',
      name: wine.name,
      ...(wine.kind ? { category: wine.kind } : {}),
      ...(wine.description ? { description: wine.description } : {}),
      ...(wine.image ? { image: wine.image } : {}),
      ...(wine.url ? { url: wine.url } : {}),
      brand: { '@id': ids.winery(site) },
      manufacturer: { '@id': ids.winery(site) },
    },
  })),
});
