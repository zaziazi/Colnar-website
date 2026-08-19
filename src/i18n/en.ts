import type { Content } from './types';
import { maps } from '../data/maps';

/**
 * English.
 *
 * What stays Slovenian: the estate's name (Vinska klet Colnar), the wine names,
 * the grape varieties, the place names and the legal name. They are what is on
 * the label, on the road sign and in the register, and one business name across
 * both languages is worth more to a winery in search than a neat translation.
 *
 * Everything else is English, including the words that describe a building —
 * the zidanica is the vineyard cottage, the vinoteka is the wine bar. Only the
 * Winery JSON-LD in Base.astro keeps `Vinoteka Colnar` and `Zidanica Colnar`,
 * because structured data should carry the names the businesses are registered
 * under, whichever language the page is written in.
 */
export const en: Content = {
  htmlLang: 'en',
  ogLocale: 'en_GB',
  numberLocale: 'en-GB',

  siteName: 'Vinska klet Colnar',
  legalName: 'Janez Colnar, vinogradništvo in vinarstvo',
  vatLabel: 'VAT ID',

  nav: {
    left: [
      { label: 'Wines', to: 'wines' },
      { label: 'Cellar', to: 'cellar' },
      { label: 'Vineyards', to: 'vineyards' },
      { label: 'Wine bar', to: 'vinoteka' },
    ],
    right: [{ label: 'Tasting', to: 'tasting' }],
    toggle: 'SL',
    menu: 'Menu',
    menuAria: 'Main menu',
  },

  meta: {
    home: {
      title: 'Vinska klet Colnar — a family cellar in Dolenjska since 1747',
      description:
        'The Colnar family has made wine at Lešnica near Otočec for generations. Book a tasting with a tour of the cellar, or call in at the Colnar wine bar in Novo mesto.',
    },
    wines: {
      title: 'Our wines — Vinska klet Colnar',
      description:
        'Cviček, penina, Grand Jaenes, Dolenjsko and house white, rosé, modra frankinja, laški rizling and Collis — the wines of the Colnar family from Lešnica near Otočec.',
    },
    cellar: {
      title: 'The cellar — Vinska klet Colnar',
      description:
        'A modern cellar built in 2022 at Lešnica near Otočec. Cellar tours, tastings and wine collection.',
    },
    vineyards: {
      title: 'Our vineyards — Vinska klet Colnar',
      description:
        'The Colnar vineyards above the Krka valley, looking across to the Gorjanci — Trška gora, Razbore, Grčevje, Ždinja Vas and Vinji vrh.',
    },
    vinoteka: {
      title: 'The wine bar — Vinska klet Colnar',
      description:
        'The Colnar wine bar in the Supernova shopping centre, Novo mesto. Every one of our wines and sparkling wines by the glass or the bottle, open Mon – Sat 9.00 – 21.00.',
    },
    tasting: {
      title: 'Tasting — Vinska klet Colnar',
      description:
        'A tasting of three to six wines with a tour of the modern cellar at Lešnica, served with a board of local charcuterie. Book your date.',
    },
  },

  home: {
    heroAlt: 'A bunch of grapes in the morning light above the Krka valley',
    heroLinks: [
      { label: 'Meet our wines', to: 'wines' },
      { label: 'Book a tasting', to: 'tasting' },
    ],
    scrollHint: 'Scroll down',
    storyHead: 'Our Story',
    storyCopy:
      'The Colnars are an old family, passing on their love of the beautiful Dolenjska hills and of the land itself from one generation to the next.',
    yearsHead: 'Through the years',
    milestones: [
      {
        year: '1408',
        kicker: 'First records',
        copy: 'The first records of the Colnar family go back to 1408.',
      },
      {
        year: '1747',
        kicker: 'Tradition',
        copy: 'The first son named Janez is born. Every first son has carried the name since.',
      },
      {
        year: '2001',
        kicker: 'First vines',
        copy: 'Janez VII and his brother Matjaž plant three and a half hectares of vines, and enlarge the old vineyard cottage.',
      },
      {
        year: '2022',
        kicker: 'New cellar',
        copy: 'We build a new cellar with modern equipment for making wine.',
      },
      {
        year: 'Today',
        kicker: 'Quality',
        copy: 'We make ten kinds of wine, and consistent quality comes before all of it.',
      },
    ],
    stats: [
      { value: 20, unit: 'ha', label: 'Of vineyards' },
      { value: 100000, grouped: true, label: 'Vines' },
      { value: 5, label: 'Sunny sites' },
    ],
    cards: [
      {
        id: 'vina',
        title: 'Wines',
        alt: 'Bottles of Colnar wine',
        copy: 'Meet our wines: cviček, our penina, Grand Jaenes and Grand Jaenes rosé, the Dolenjsko and house whites, rosé, modra frankinja, laški rizling and Collis.',
        link: { label: 'Meet our wines', to: 'wines' },
      },
      {
        id: 'degustacija',
        title: 'Tasting',
        alt: 'A bottle of modra frankinja and a glass on the old table',
        copy: 'We introduce our wines and how they are made, and take you through the modern cellar at Lešnica. Tastings run from three to six wines, served with a board of local charcuterie.',
        link: { label: 'Book a tasting', to: 'tasting' },
      },
      {
        id: 'vinogradi',
        title: 'Vineyards',
        alt: 'Vineyards on a sunny slope above the Krka valley',
        copy: 'Twenty hectares on five sunny sites above the Krka valley — 100,000 vines, which we prune and pick ourselves.',
        link: { label: 'See our vineyards', to: 'vineyards' },
      },
    ],
    quote: '“Life is too short to drink bad wine.”',
    placesHead: 'Where to find us',
    places: [
      {
        label: 'Cellar',
        name: 'Lešnica 8',
        copy: 'A modern cellar built in 2022. Cellar tours, tastings and wine collection.',
        map: maps.cellar,
      },
      {
        label: 'Vineyard cottage',
        name: 'Črešnjice 124, Otočec',
        copy: 'The old vineyard cottage among the vines, looking out over the Krka and the Gorjanci. A place for parties and celebrations.',
        map: maps.zidanica,
      },
    ],
    vinoteka: {
      title: 'Colnar Wine Bar',
      copy: 'Our wine bar in the Supernova shopping centre in Novo mesto, where you can stop for a coffee or a glass of wine. You can also collect wine to take home.',
      hoursLabel: 'Opening hours',
      hours: 'Mon – Sat · 9.00 – 21.00',
      menuLabel: 'Menu',
      menuLink: 'What the wine bar offers',
      alt: 'Glasses at a tasting',
    },
    ctaBar: 'Book a tasting',
  },

  wines: {
    title: 'Wines',
    standfirst: 'from our own vineyards',
    heroAlt: 'The Colnar name embossed on a bottle label',
    lede: 'Consistent quality comes before everything else — from the vine we prune and pick ourselves, to the bottle.',
    prose: [
      'The grapes come from twenty hectares on five sunny sites above the Krka valley. Cviček, the speciality of Dolenjska, accounts for 60 % of everything we make; alongside it we produce white wines, rosé, modra frankinja, sparkling wine by the classic method, and Collis, which ages in an acacia cask.',
      'You can taste the wines at the cellar in Lešnica, or collect them there and at the Colnar wine bar in Novo mesto.',
    ],
    listHead: 'Wines',
    buy: 'Buy at Evino',
    bottleAlt: (name) => `Bottle — ${name}`,
    kinds: {
      belo: 'white',
      'rdeče': 'red',
      'rosé': 'rosé',
      penina: 'sparkling',
      'penina rosé': 'sparkling rosé',
    },
    cta: {
      heading: 'Meet them at the cellar.',
      secondary: { label: 'See the vineyards', to: 'vineyards' },
    },
  },

  cellar: {
    title: 'The cellar',
    standfirst: 'at Lešnica',
    heroAlt: 'Oak barrels bearing the Colnar winery monogram',
    lede: 'A modern cellar built in 2022. Cellar tours, tastings and wine collection.',
    prose: [
      'In 2022 we built a new cellar with modern equipment for making wine — everything from the arrival of the grapes to the bottle, under one roof. The red wines age in oak, the whites in stainless steel and, in the case of Collis, in a large acacia cask.',
      'This is where we introduce our wines and how they are made, and where the cellar tour takes place. You can also collect wine here.',
    ],
    inCellarHead: 'In the cellar',
    inCellar: [
      {
        label: '2022',
        name: 'A new cellar',
        copy: 'We build a new cellar with modern equipment for making wine.',
      },
      {
        label: 'Tasting',
        name: 'A tour and a glass',
        copy: 'We introduce our wines and how they are made, and take you through the modern cellar at Lešnica. Tastings run from three to six wines, served with a board of local charcuterie.',
      },
    ],
    whereHead: 'Where to find us',
    addressLabel: 'Address',
    addressName: 'Lešnica 8',
    addressCopy: '8222 Otočec, Slovenia',
    addressMap: maps.cellar,
    contactLabel: 'Contact',
    cta: {
      heading: 'Tours and tastings are arranged in advance.',
      secondary: { label: 'Meet our wines', to: 'wines' },
    },
  },

  vineyards: {
    title: 'Vineyards',
    standfirst: 'above the Krka valley, looking to the Gorjanci',
    heroAlt: 'A vineyard on a sunny slope looking over the valley to the Gorjanci',
    sitesHead: 'Sunny sites',
    sites: ['Trška gora', 'Razbore', 'Grčevje', 'Ždinja Vas', 'Vinji vrh'],
    photoPending: 'Photograph to follow',
    cta: {
      heading: 'Meet the wines these vineyards make.',
      secondary: { label: 'Our wines', to: 'wines' },
    },
  },

  vinoteka: {
    title: 'Colnar Wine Bar',
    heroAlt: 'Glasses on the wine bar counter',
    whereHead: 'How to find us',
    addressLabel: 'Address',
    addressName: 'Otoška cesta 5',
    addressCopy: 'Supernova Novo mesto, 8000 Novo mesto, Slovenia',
    addressMap: maps.vinoteka,
    hoursLabel: 'Opening hours',
    hours: 'Mon – Sat · 9.00 – 21.00',
    menu: {
      sections: {
        bar: 'Price list',
        home: 'To take home',
      },
      groups: {
        glass: 'Wines by the glass',
        bottle: 'Wines by the bottle',
        colnar: 'Colnar wines',
        guest: 'Wines from other growers',
        predikati: 'Predicate wines',
        mixed: 'Spritzers',
        spirits: 'Spirits and aperitifs',
        beer: 'Beer',
        soft: 'Soft drinks',
        hot: 'Hot drinks',
        extras: 'Extras',
        colnarWines: 'Colnar wines',
        colnarSparkling: 'Colnar sparkling wines',
        guestWines: 'Wines from other growers',
        sparkling: 'Sparkling wines and champagne',
        spiritsHome: 'Spirits',
        delicacies: 'Juices and local delicacies',
        gifts: 'Gift packaging and accessories',
      },
    },
    menuNote:
      'Prices are in euros and include VAT. The list changes as the cellar does — if a wine is not on it, ask at the counter.',
    cta: {
      heading: 'You can taste the wines at the cellar too.',
      secondary: { label: 'Our wines', to: 'wines' },
    },
  },

  tasting: {
    title: 'Tasting',
    standfirst: 'and a tour of the cellar',
    heroAlt: 'Corks stamped Colnar on an oak table',
    intro:
      'We introduce our wines and how they are made, and take you through the cellar we built in 2022.',
    prose: [
      'Tastings come in several sizes, to suit the party — from three wines to six. They are served with a board of local charcuterie, and the cellar tour takes about half an hour.',
      'We welcome groups of every kind. Lunch or dinner can be arranged alongside the tasting, if you let us know in advance.',
      'We use every by-product of winemaking: the grape seeds give us oil and flour, which is our small contribution to farming sustainably. You can try both at the tasting.',
    ],
    bookingHead: 'Book a tasting',
    priceHead: 'Prices',
    priceGroups: [
      {
        label: 'Tasting',
        rows: [
          { name: '3 wines', price: 16 },
          { name: '4 wines', price: 20 },
          { name: '5 wines', price: 24 },
          { name: '6 wines', price: 28 },
        ],
      },
      {
        label: 'Extras',
        rows: [
          { name: 'Board of local charcuterie', price: 10 },
          { name: 'Cellar tour', note: 'About 30 minutes.', price: 10 },
        ],
      },
    ],
    perPerson: 'per person',
    perPersonShort: '/ person',
    vatNote: 'All prices include VAT.',
    paymentNote: 'Payment is taken on site, in cash or by card.',
    aside: {
      whereLabel: 'Where',
      whereName: 'Vinska klet Colnar',
      whereCopy: 'Lešnica 8, 8222 Otočec, Slovenia',
      whereMap: maps.cellar,
      phoneLabel: 'Rather by phone',
    },
    form: {
      name: 'Full name',
      email: 'Email',
      phone: 'Phone',
      date: 'Preferred date',
      guests: 'Number of guests',
      extras: 'Extras',
      size: 'Size of tasting',
      note: 'Anything else',
      noteHelp:
        'A charcuterie board, lunch or dinner by prior arrangement, allergies, the occasion — anything that helps us prepare.',
      submit: 'Send booking',
      sending: 'Sending …',
      doneHead: 'Thank you',
      doneCopy:
        'We have your booking, and will come back to you shortly to confirm the date — if it is urgent, call us on ',
      doneCopyTail: '.',
      sizes: [
        { value: '3', label: '3 wines', price: 16 },
        { value: '4', label: '4 wines', price: 20 },
        { value: '5', label: '5 wines', price: 24 },
        { value: '6', label: '6 wines', price: 28 },
      ],
      extraItems: [
        { value: 'narezek', name: 'Charcuterie board', price: 10 },
        { value: 'ogled', name: 'Cellar tour', note: 'About 30 minutes.', price: 10 },
      ],
      messages: {
        locale: 'en',
        required: {
          ime: 'Please enter your name.',
          email: 'Please enter your email address.',
          telefon: 'Please enter a phone number.',
          datum: 'Please choose a date.',
          gostje: 'Please enter the number of guests.',
          obseg: 'Please choose the size of the tasting.',
        },
        invalid: {
          ime: 'That name looks too short.',
          email: 'That email address does not look right.',
          telefon: 'That phone number looks too short.',
          datumPast: 'Please choose a date in the future.',
          datumBad: 'That date is not valid.',
          gostje: 'Please enter the number of guests (at least 1).',
          gostjeMany: 'For parties over 60, please call us.',
        },
        unfilled: {
          one: 'One field still needs attention.',
          other: '{n} fields still need attention.',
        },
        noEndpoint:
          'The form is not connected to a mail server yet. Please write to info@colnar.si or call +386 31 288 724.',
        failed: 'The booking could not be sent. Please try again, or write to info@colnar.si.',
        ok: 'Thank you — your booking has been sent. We will be in touch shortly.',
      },
    },
  },

  footer: {
    columns: [
      {
        label: 'Winery',
        lines: [
          [{ text: 'Lešnica 8, 8222 Otočec', href: maps.cellar, external: true }],
          [{ text: '+386 31 288 724', href: 'tel:+38631288724' }],
        ],
      },
      {
        label: 'Wine bar',
        lines: [
          [{ text: 'Otoška cesta 5, 8000 Novo mesto', href: maps.vinoteka, external: true }],
          [{ text: '+386 41 871 425', href: 'tel:+38641871425' }],
        ],
      },
      {
        label: 'Vineyard cottage',
        lines: [
          [{ text: 'Črešnjice 124, Otočec', href: maps.zidanica, external: true }],
          [{ text: '+386 31 725 830', href: 'tel:+38631725830' }],
        ],
      },
      {
        label: 'Contact',
        lines: [
          [{ text: 'info@colnar.si', href: 'mailto:info@colnar.si' }],
          [{ text: 'Instagram' }, { text: 'Facebook' }],
        ],
      },
    ],
  },
};
