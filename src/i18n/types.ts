import type { RouteKey } from './index';

/**
 * The shape both languages implement. Every user-visible string on the site is
 * in here or in the wine collection — nothing translatable is left in markup,
 * so `sl.ts` and `en.ts` sitting side by side is the whole translation.
 */

export type Link = { label: string; to: RouteKey };
export type Meta = { title: string; description: string };

export type Milestone = { year: string; kicker: string; copy: string };

export type Stat = {
  value: number;
  /** Rendered with the locale's grouping (100000 → 100.000 / 100,000). */
  grouped?: boolean;
  unit?: string;
  label: string;
};

export type Place = { label: string; name: string; copy: string; map?: string };

export type Card = {
  id: string;
  title: string;
  alt: string;
  copy: string;
  link: Link;
};

export type FooterItem = { text: string; href?: string; external?: boolean };
export type FooterColumn = { label: string; lines: FooterItem[][] };

export type PriceRow = { name: string; note?: string; price: number };


export type Content = {
  /** `lang` attribute and Open Graph locale. */
  htmlLang: string;
  ogLocale: string;
  /** Locale for number formatting — 100.000 in Slovenian, 100,000 in English. */
  numberLocale: string;

  siteName: string;
  legalName: string;
  vatLabel: string;

  nav: {
    left: Link[];
    right: Link[];
    /** Label of the link to the other language. */
    toggle: string;
    menu: string;
    menuAria: string;
  };

  meta: Record<RouteKey, Meta>;

  home: {
    heroAlt: string;
    heroLinks: Link[];
    scrollHint: string;
    storyHead: string;
    storyCopy: string;
    yearsHead: string;
    milestones: Milestone[];
    stats: Stat[];
    cards: Card[];
    quote: string;
    placesHead: string;
    places: Place[];
    vinoteka: {
      title: string;
      copy: string;
      hoursLabel: string;
      hours: string;
      menuLabel: string;
      menuLink: string;
      alt: string;
    };
    ctaBar: string;
  };

  wines: {
    title: string;
    standfirst: string;
    heroAlt: string;
    lede: string;
    prose: string[];
    listHead: string;
    buy: string;
    bottleAlt: (name: string) => string;
    kinds: Record<string, string>;
    cta: { heading: string; secondary: Link };
  };

  cellar: {
    title: string;
    standfirst: string;
    heroAlt: string;
    lede: string;
    prose: string[];
    inCellarHead: string;
    inCellar: Place[];
    whereHead: string;
    addressLabel: string;
    addressName: string;
    addressCopy: string;
    addressMap: string;
    contactLabel: string;
    cta: { heading: string; secondary: Link };
  };

  vineyards: {
    title: string;
    standfirst: string;
    heroAlt: string;
    lede: string;
    prose: string[];
    sitesHead: string;
    sites: string[];
    photoPending: string;
    cta: { heading: string; secondary: Link };
  };

  vinoteka: {
    title: string;
    heroAlt: string;
    whereHead: string;
    addressLabel: string;
    addressName: string;
    addressCopy: string;
    addressMap: string;
    hoursLabel: string;
    hours: string;
    /**
     * Labels for the price list. The rows themselves — names, volumes, prices —
     * are language-neutral and live in `src/data/vinoteka-menu.ts`; only these
     * headings are translated, keyed by the `id` of each section and group.
     */
    menu: {
      sections: Record<string, string>;
      groups: Record<string, string>;
    };
    /** Terms under the list — DDV, that the offer changes. */
    menuNote: string;
    cta: { heading: string; secondary: Link };
  };

  tasting: {
    title: string;
    standfirst: string;
    heroAlt: string;
    intro: string;
    prose: string[];
    bookingHead: string;
    priceHead: string;
    priceGroups: { label: string; rows: PriceRow[] }[];
    perPerson: string;
    perPersonShort: string;
    vatNote: string;
    paymentNote: string;
    /** Answers to what people ring up and ask, every one of them from this page. */
    faq: { head: string; items: { q: string; a: string }[] };
    aside: {
      whereLabel: string;
      whereName: string;
      whereCopy: string;
      whereMap: string;
      phoneLabel: string;
    };
    form: {
      name: string;
      email: string;
      phone: string;
      date: string;
      guests: string;
      extras: string;
      size: string;
      note: string;
      noteHelp: string;
      submit: string;
      sending: string;
      doneHead: string;
      doneCopy: string;
      doneCopyTail: string;
      sizes: { value: string; label: string; price: number }[];
      extraItems: { value: string; name: string; note?: string; price: number }[];
      messages: FormMessages;
    };
  };

  footer: { columns: FooterColumn[] };
};

/** Handed to the browser as JSON — see scripts/reservation.js. */
export type FormMessages = {
  locale: string;
  required: Record<string, string>;
  invalid: Record<string, string>;
  /** Keyed by Intl.PluralRules category; `{n}` is replaced with the count. */
  unfilled: Record<string, string>;
  noEndpoint: string;
  failed: string;
  ok: string;
};
