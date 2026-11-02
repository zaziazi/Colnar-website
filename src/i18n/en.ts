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
      { label: 'Our story', to: 'story' },
      { label: 'Wines', to: 'wines' },
      { label: 'Vineyards', to: 'vineyards' },
    ],
    right: [
      { label: 'Tasting', to: 'tasting' },
      { label: 'Wine bar', to: 'vinoteka' },
    ],
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
    story: {
      title: 'Our story — Vinska klet Colnar',
      description:
        'The Colnar family story: first records from 1408, a line of Janezes since 1747, the first vines in 2001 and a new cellar at Lešnica in 2022.',
    },
    wines: {
      title: 'Our wines — Vinska klet Colnar',
      description:
        'Twelve wines from the Colnar family at Lešnica near Otočec: cviček, penina, Grand Jaenes, the Dolenjsko and house whites, chardonnay, laški rizling, rosé, modra frankinja, modri pinot and Collis.',
    },
    vineyards: {
      title: 'Our vineyards — Vinska klet Colnar',
      description:
        'Fifteen hectares and 125,000 vines on five sunny sites above the Krka valley, facing the Gorjanci — Trška gora, Razbore, Grčevje, Ždinja vas and Vinji vrh.',
    },
    vinoteka: {
      title: 'The wine bar — Vinska klet Colnar',
      description:
        'The Colnar wine bar in the Supernova shopping centre, Novo mesto. Every one of our wines and sparkling wines by the glass or the bottle, open Mon – Sat 9.00 – 21.00.',
    },
    tasting: {
      title: 'Tasting — Vinska klet Colnar',
      description:
        'A tasting of three to six wines with a tour of the cellar at Lešnica, served with a board of local charcuterie. From €16 per person. Book your date.',
    },
    funding: {
      title: 'Investment in wine cellar equipment — Vinska klet Colnar',
      description:
        'The Colnar farm’s investment in wine cellar equipment: a nitrogen generator, wooden barrels and wine storage equipment. Co-funded by the European Union.',
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
    lead: 'Let us take you through the hills of Dolenjska, and meet our wines.',
    yearsHead: 'A family with tradition',
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
        copy: 'We make twelve kinds of wine, and consistent quality comes before all of it.',
      },
    ],
    stats: [
      { value: 15, unit: 'ha', label: 'Of vineyards' },
      { value: 125000, grouped: true, label: 'Vines' },
      { value: 5, label: 'Sunny sites' },
    ],
    cards: [
      {
        id: 'vina',
        title: 'Wines',
        alt: 'Bottles of Colnar wine',
        copy: 'Twelve wines in three lines: JC, Colnar and Grand Jaenes.',
        link: { label: 'Meet our wines', to: 'wines' },
      },
      {
        id: 'degustacija',
        title: 'Tasting',
        alt: 'A bottle of modra frankinja and a glass on the old table',
        copy: 'A tasting of our wines and a tour of the cellar at Lešnica.',
        link: { label: 'Book a tasting', to: 'tasting' },
      },
      {
        id: 'vinogradi',
        title: 'Vineyards',
        alt: 'The Grčevje vineyards from above',
        copy: 'Fifteen hectares above the Krka, looking out to the Gorjanci.',
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
      copy: 'Our wine bar in the Supernova shopping centre in Novo mesto, where you can stop for a glass of wine. You can also collect wine to take home.',
      hoursLabel: 'Opening hours',
      hours: 'Mon – Sat · 9.00 – 21.00',
      menuLabel: 'Menu',
      menuLink: 'What the wine bar offers',
      alt: 'Vinoteka Colnar: shelves of wine, the counter and bar tables',
    },
    ctaBar: 'Book a tasting',
  },

  wines: {
    title: 'Wines',
    standfirst: 'from our own vineyards',
    heroAlt: 'The Colnar name embossed on a bottle label',
    quote: {
      text: '“Wine is bottled poetry.”',
      author: 'Robert Louis Stevenson',
    },
    listHead: 'Wines',
    buy: 'Buy at Evino',
    bottleAlt: (name) => `Bottle — ${name}`,
    photoPending: 'Photograph to follow',
    groups: [
      { key: 'jc', label: 'JC' },
      { key: 'colnar', label: 'Colnar' },
      { key: 'grand-jaenes', label: 'Grand Jaenes' },
    ],
    kinds: {
      belo: 'white',
      'rdeče': 'red',
      'rosé': 'rosé',
      penina: 'sparkling',
      'penina rosé': 'sparkling rosé',
    },
    detail: {
      prev: 'Previous',
      next: 'Next',
      specHead: 'Characteristics',
      spec: {
        style: 'Style',
        vintage: 'Vintage',
        volume: 'Volume',
        alcohol: 'Alcohol',
        region: 'Region',
        country: 'Country',
      },
      styles: {
        'sveze-belo': 'Fresh white',
        'bogato-belo': 'Rich white',
        'sveze-rdece': 'Fresh red',
        'bogato-rdece': 'Rich red',
        rose: 'Rosé',
        penece: 'Sparkling',
      },
      regionName: 'Dolenjska',
      countryName: 'Slovenia',
      fallbackDescription: (name, kind) =>
        `${name}${kind ? `, a ${kind} wine` : ''} from Vinska klet Colnar at Lešnica near Otočec. Taste it at the cellar or at the Colnar wine bar in Novo mesto.`,
    },
    cta: {
      heading: 'Meet them at the cellar.',
      secondary: { label: 'See the vineyards', to: 'vineyards' },
    },
  },


  story: {
    title: 'Our story',
    standfirst: 'since 1408',
    heroAlt: 'By the red tractor under the vine pergola, harvest 2019',
    tree: {
      head: 'Family tree',
      alt: 'The hand-written family tree of the Colnar – Zollner family of Lešnica, with records from around 1400',
      caption:
        'The family records reach back to around 1400, and in 1747 the first Janez is born. Every firstborn son has carried the name since. The tree links eleven generations, all of them at Lešnica, from Mihael, born in 1590, to Janez, born in 1936. Today the name is carried by the ninth Janez.',
      open: 'Open full size',
    },
    slides: {
      label: 'Family photographs',
      prev: 'Previous photograph',
      next: 'Next photograph',
      alts: [
        'Raising a glass outside the house',
        'With the youngest member of the family',
        'Among the vine pergolas under a blue sky',
        'At the table with bottles from the JC line',
        'Raising a glass, one of us in a red royal robe',
        'With the 2023 Agrobiznis conference award for moving towards energy and environmental neutrality',
        'Under the doorway carved J. C. 1897',
        'Presenting our wines',
        'The team outside the cellar',
        'At the table with a carafe of our own wine',
      ],
    },
    cta: {
      heading: 'The story continues at the cellar.',
      secondary: { label: 'Our wines', to: 'wines' },
    },
  },

  vineyards: {
    title: 'Vineyards',
    standfirst: 'above the Krka valley, looking to the Gorjanci',
    heroAlt: 'Rows of vines with dandelion clocks between them',
    quote: {
      text: '“Wine is the song of the earth rising to the sky.”',
      author: 'Luigi Veronelli',
    },
    sitesHead: 'Our vineyards',
    sites: [
      {
        name: 'Grčevje',
        copy: [
          'Grčevje is a chapter of its own in our winegrowing story. Across 6 hectares of vineyards we distinguish an older part of 1.5 ha, where Laški rizling, Chardonnay and Sivi pinot grow, and a new part of 4.5 ha, planted in stages in 2020, 2022 and 2024.',
          'The new vineyard is planted in the Burgundian style, with the vines set exceptionally close together: depending on the plot, from 15,000, 20,000 and 25,000 up to 33,000 vines per hectare. The different densities are part of a considered approach to working the vineyard and to finding the balance between the vine’s growth, its yield and the quality of the grapes. Planting like this demands a great deal of precision, persistence and handwork in the vineyard.',
          'The marl soils play an important part. Their structure and their ability to hold moisture shape particular growing conditions. Together with the climate, the position and the way the vineyard is worked, they lay the foundations for wines of distinct character.',
          'In the older part of Grčevje we grow Laški rizling, Chardonnay and Sivi pinot. The new part grows Modri pinot, Merlot, Chardonnay, Modra frankinja and Laški rizling.',
          'Grčevje is the expression of our long-term vision. We believe that considered winegrowing, knowledge and respect for what nature gives us can make wines that join their Dolenjska origin with an ambition for the highest quality.',
        ],
      },
      {
        name: 'Razbore',
        copy: [
          'On 3.5 hectares of marl soil at Razbore lies the vineyard planted in 2001, when the family decided to turn its farm towards winegrowing.',
          'The make-up of marl affects how the soil holds water, how the root system develops and how the vine grows. Understanding these traits lets us adapt the way we work to the natural conditions and the potential of each vineyard.',
          'At Razbore we grow Žametna črnina, Laški rizling, Kraljevina and Beli pinot. This range of varieties gives us grapes for wines that express authenticity and the rich winegrowing heritage of Dolenjska.',
          'Razbore is where our larger story began, a story in which tradition and knowledge of the land are woven together.',
        ],
      },
      {
        name: 'Ždinja vas',
        copy: [
          'Stony soils prevail across the 3.5 hectares of vineyards at Ždinja vas, planted in 2014. Their structure creates particular growing conditions and plays a key part in making our fresh, fruity, lively wines.',
          'In the vineyard we work to preserve the grapes’ natural freshness, a pleasant balance of acidity and the aromatic expression that are the key elements of this style of wine. We pay particular attention to choosing the right moment to harvest: for wines where we want to bring out freshness, what matters is not only sugar ripeness but also keeping the natural acids and the aromas of the variety.',
          'Ždinja vas grows Kraljevina, Žametna črnina, Modra frankinja, Laški rizling, Chardonnay, Beli pinot, Sivi pinot and Traminec. This wide choice of traditional and international varieties gives us grapes for many styles of wine, from fresh and lively to more aromatic.',
        ],
      },
      {
        name: 'Trška gora',
        copy: [
          'Trška gora is one of the best-known winegrowing landscapes in Dolenjska. For centuries its slopes, threaded with vineyards and zidanice, the small vineyard cottages of the region, have been a symbol of the wine culture here. In our cellar too this vineyard has a special place, because this is where our winegrowing story began.',
          'On about 2 hectares of vineyards, where marl and stony soils intertwine, we grow Kraljevina, Žametna črnina, Modra frankinja, Laški rizling and Beli pinot. The original planting dates back to 1994, and in 2008 we added new vines.',
          'The vineyard mainly gives grapes for fresh, light, harmonious wines. In these wines we want to bring out the liveliness, the fruit and the easy drinkability that have long been hallmarks of Dolenjska’s wine tradition.',
          'For us Trška gora is more than a vineyard site. It is part of our heritage, a place where tradition meets everyday life and where wine has always brought people together.',
        ],
      },
      {
        name: 'Vinji vrh',
        copy: [
          'White marl prevails across the roughly 1.5 hectares of vineyards at Vinji vrh, giving this site a geological identity of its own and setting it apart from our other vineyards.',
          'The make-up and structure of the pale marl soils affect how much water is available, how the root system develops and how the vine grows. Understanding these traits matters when we plan the work in the vineyard and secure the best conditions for the grapes to ripen.',
          'Here we grow Žametna črnina, Laški rizling and Modra frankinja.',
          'Vinji vrh reflects the diversity of our landscape. It reminds us that every piece of land has its own story, and that the richness of Dolenjska winegrowing lies in exactly these differences.',
        ],
      },
    ],
    photoPending: 'Photograph to follow',
    cta: {
      heading: 'Meet the wines these vineyards make.',
      secondary: { label: 'Our wines', to: 'wines' },
    },
  },

  vinoteka: {
    title: 'Wine bar',
    heroAlt: 'Vinoteka Colnar: shelves of wine, the counter and bar tables',
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
    heroAlt: 'Young vine shoots in spring sunlight',
    photoAlt: 'On the cellar tour: a bottle of sparkling wine held up to the light',
    intro:
      'Follow wine from the grape to the glass. We take you through our cellar, built in 2022, and show you how our wines are made.',
    prose: [
      'Then comes the tasting: three to six wines, with a board of local delicacies and the stories behind every glass. We welcome groups of every kind, and with notice we can also prepare lunch or dinner from local, seasonal produce.',
      'Book your visit in advance, using the form below or by phone. Tell us how many of you there will be and what the occasion is, and we will shape the tasting around you.',
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
    faq: {
      head: 'Common questions',
      items: [
        {
          q: 'What does a tasting include?',
          a: 'Three to six wines, an account of how they are made, and a tour of the modern cellar at Lešnica. A board of local charcuterie and cheese can be added.',
        },
        {
          q: 'What does a tasting cost?',
          a: 'Three wines €16, four €20, five €24, six €28 per person. The board of local delicacies is €10 per person and the cellar tour €10 per person. Prices include VAT.',
        },
        {
          q: 'Do I need to book?',
          a: 'Yes. Tours and tastings are arranged in advance, through the form on this page or by phone on +386 31 288 724.',
        },
        {
          q: 'Where does the tasting take place?',
          a: 'At the Colnar cellar, Lešnica 8, 8222 Otočec. Tastings are held at the cellar only; the vineyard cottage at Črešnjice is for private parties.',
        },
        {
          q: 'How long is the cellar tour?',
          a: 'About 30 minutes.',
        },
        {
          q: 'How can I pay?',
          a: 'On site, in cash or by card.',
        },
      ],
    },
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
      time: 'Arrival time',
      guests: 'Number of guests',
      extras: 'Extras',
      size: 'Size of tasting',
      note: 'Anything else',
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
          ura: 'Please choose an arrival time.',
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

  funding: {
    eyebrow: 'Co-financing',
    title: 'Investment in wine cellar equipment',
    logoAlt: 'Co-funded by the European Union · Republic of Slovenia · Common Agricultural Policy',
    footerLink: 'Co-financing of our investment in wine cellar equipment',
    interventionLabel: 'Intervention',
    intervention:
      '1st public call for the sub-intervention farm investments under intervention IRP35, Investments in the processing and marketing of agricultural products to increase productivity and for technological development, including digitalisation, for 2025',
    operationLabel: 'Operation',
    operation: 'Investment in wine cellar equipment',
    descriptionLabel: 'Summary',
    description: 'The Colnar agricultural holding has applied to this call with an investment in:',
    items: ['a nitrogen generator,', 'wooden barrels,', 'wine storage equipment.'],
    goalsLabel: 'Objectives',
    goals:
      'The investment answers the need to renew the holding’s fixed assets. Winemaking equipment wears out with use and has to be replaced with new equipment, which is usually also more technologically advanced. This lets the holding keep operating normally and continue to develop.',
    note: 'This is a translation. The Slovenian version of this page is the official one.',
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
          [
            { text: 'Instagram', href: 'https://www.instagram.com/vinskakletcolnar/', external: true },
            { text: 'Facebook', href: 'https://www.facebook.com/vinskakletcolnar/', external: true },
          ],
        ],
      },
    ],
  },
};
