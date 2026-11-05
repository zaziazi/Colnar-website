import type { Content } from './types';
import { maps, search } from '../data/maps';

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
  legalName: 'COLNAR VINA, trgovina in storitve d.o.o.',
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
      title: 'Colnar Winery — family wine estate in Dolenjska, Slovenia, since 1747',
      description:
        'The Colnar family makes wine at Lešnica near Otočec, Slovenia. Book a tasting at the cellar, or call in at the Colnar wine bar in Novo mesto.',
    },
    story: {
      title: 'Our story: the Colnar family since 1408 — Vinska klet Colnar',
      crumb: 'Our story',
      description:
        'The Colnar family story: first records from 1408, a line of Janezes since 1747, the vineyards expanded in 2001 and a new cellar at Lešnica in 2022.',
    },
    wines: {
      title: 'Cviček, sparkling and Dolenjska wines — Vinska klet Colnar',
      crumb: 'Wines',
      description:
        'Twelve wines from the Colnar family in Dolenjska, Slovenia: award-winning cviček, Grand Jaenes sparkling wines, Chardonnay, Modri pinot, Collis and more.',
    },
    vineyards: {
      title: 'Our vineyards in Dolenjska, Slovenia — Vinska klet Colnar',
      crumb: 'Vineyards',
      description:
        '16.5 hectares and 125,000 vines on five sunny sites above the Krka valley, facing the Gorjanci — Trška gora, Razbore, Grčevje, Ždinja vas and Vinji vrh.',
    },
    vinoteka: {
      title: 'Colnar wine bar — Supernova, Novo mesto, Slovenia',
      crumb: 'Wine bar',
      description:
        'The Colnar wine bar in the Supernova shopping centre, Novo mesto. All our wines and sparkling wines by the glass or bottle, open Mon – Sat 9.00 – 21.00.',
    },
    tasting: {
      title: 'Wine tasting in Dolenjska, Slovenia — Vinska klet Colnar',
      crumb: 'Tasting',
      description:
        'A tasting of three to six wines at the cellar in Lešnica near Otočec, from €16 per person. Cellar tour and charcuterie board optional. Book in advance.',
    },
    funding: {
      title: 'Investment in wine cellar equipment — Vinska klet Colnar',
      description:
        'The Colnar farm’s investment in wine cellar equipment: a nitrogen generator, wooden barrels and wine storage equipment. Co-funded by the European Union.',
    },
    terms: {
      title: 'Terms and conditions — Vinska klet Colnar',
      crumb: 'Terms',
      description:
        'Who runs this site, terms of use, tasting bookings, prices, and how complaints and disputes are handled.',
    },
    privacy: {
      title: 'Privacy notice — Vinska klet Colnar',
      crumb: 'Privacy',
      description:
        'What personal data we collect through this site and tasting bookings, why, how long we keep it, and your rights.',
    },
    cookies: {
      title: 'Cookies — Vinska klet Colnar',
      description:
        'This site uses no cookies and no tracking. Your browser only remembers that you have confirmed you are of legal drinking age.',
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
        kicker: 'Expansion',
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
      { value: 16.5, unit: 'ha', label: 'Of vineyards' },
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
        copy: '16.5 hectares above the Krka, looking out to the Gorjanci.',
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
      addressLabel: 'Location',
      address: 'Otoška cesta 5',
      town: '8000 Novo mesto',
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
    faq: {
      head: 'Common questions',
      items: [
        {
          q: 'Which of your wines have won awards?',
          a: 'Our cviček has been named King of Cviček three times — in 2008 and 2014 (Janez Colnar) and in 2022 (Janez Colnar Jr). At the Decanter World Wine Awards in London, our Rosé 2018 won gold with 95 points (2019) and our Rosé 2023 silver with 92 points (2024); our cviček (2019, 2020, 2024) and laški rizling (2020, 2021) won bronze.',
        },
        {
          q: 'What is cviček?',
          a: 'The speciality of Dolenjska: a wine blended from both white and red grapes — žametna črnina, kraljevina, laški rizling and modra frankinja. It is fresh, and at home with red meat and cured sausage. It accounts for 60 % of the wine we make.',
        },
        {
          q: 'What is kraljevina?',
          a: 'An indigenous Dolenjska grape, and a protected variety. It has high acidity, low aromatics and low alcohol, which makes it ideal for sparkling wine. You will find it in Penina Colnar, in cviček, Dolenjsko belo and Hišno belo.',
        },
        {
          q: 'What is žametna črnina?',
          a: 'One of the oldest Slovenian red varieties, grown today mainly in Dolenjska — you will hardly find it anywhere else. It is the main grape of cviček, and gives wines of a bright ruby colour, fresh acidity and gentle tannins. We grow it at Razbore, Ždinja vas, Trška gora and Vinji vrh; you will find it in our cviček and in the sparkling Grand Jaenes and Grand Jaenes Rosé.',
        },
        {
          q: 'What is laški rizling?',
          a: 'A white variety (Welschriesling) that, with žametna črnina, modra frankinja and kraljevina, is one of the four grapes covering most of Dolenjska\'s vineyards. It makes dry, fresh wines with lively acidity. We grow it on all five of our sites; it goes into our cviček, Dolenjsko belo, Hišno belo and Collis, and on its own it has twice won bronze at Decanter.',
        },
        {
          q: 'Do you make sparkling wine?',
          a: 'Yes, three, all by the classic method. We have made Penina Colnar from kraljevina since 2016; it is brut nature and spends at least 30 months on the lees. Grand Jaenes and Grand Jaenes Rosé are made from žametna črnina and spend 20 months on the lees.',
        },
        {
          q: 'Which wines are aged in wood?',
          a: 'Collis spends 24 months in a 2,500-litre acacia cask, modra frankinja 18 months in new barriques, chardonnay and modri pinot 12 months each in barriques, and laški rizling 6 months in oak casks. Dolenjsko belo and Hišno belo, our fresh whites, are kept in stainless steel.',
        },
        {
          q: 'Where can I buy your wines?',
          a: 'At the cellar in Lešnica when you visit, at our wine bar Vinoteka Colnar in the Supernova centre in Novo mesto, and online from the distributor Evino. We also ship within Slovenia and abroad — write to us at info@colnar.si.',
        },
      ],
    },
    detail: {
      prev: 'Previous',
      next: 'Next',
      specHead: 'Characteristics',
      spec: {
        style: 'Style',
        grapes: 'Grapes',
        sweetness: 'Sweetness',
        ageing: 'Ageing',
        pairing: 'Pairs with',
        vintage: 'Vintage',
        volume: 'Volume',
        alcohol: 'Alcohol',
        region: 'Region',
        country: 'Country',
        awards: 'Awards',
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
      pageTitle: (name, zvrst) => {
        const noun = { belo: 'white wine', 'rdeče': 'red wine', 'rosé': 'rosé', penina: 'sparkling wine', 'penina rosé': 'sparkling rosé' }[zvrst ?? ''];
        if (!noun) return `${name} — Colnar`;
        return `${name}${noun === name.toLowerCase() ? '' : `, ${noun}`} from Dolenjska — Colnar`;
      },
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
    sections: [
      {
        head: 'Every first son is a Janez',
        paragraphs: [
          'The Colnar family lives and farms at Lešnica near Otočec. The first records of the family go back to 1408, and in 1747 the first Janez was born — every firstborn son has carried the name since. The tradition carries on in the cellar too: Janez the father was King of Cviček in 2008 and 2014, and his son Janez Jr in 2022.',
        ],
      },
      {
        head: 'A farm the whole family runs',
        paragraphs: [
          'Today the farm is run by Janez Jr and his wife Katarina, with his father Janez and mother Katarina beside them. Uncle Matjaž looks after the cellar, brother Martin and mother Katarina run the tourism side, and sisters Meta and Ana help in the vineyards, the cellar and with sales. Bigger investments we decide together.',
          'In 2001 Janez and his brother Matjaž planted three and a half hectares of new vineyards. Today we farm 16.5 hectares on five sites, with about 125,000 vines, and make twelve wines.',
        ],
      },
      {
        head: 'The new cellar at Lešnica',
        paragraphs: [
          'In 2022 we built a new cellar in the middle of Lešnica: the upper floor measures 47 × 27 metres, the lower one, dug into the hillside, 57 × 20 metres. The grapes pass over a sorting table that removes damaged berries, and from the moment they arrive we control the temperature and keep the wine away from oxygen. Sulphur is added only before bottling.',
          'In the cellar laboratory a Foss WineScan analyser follows the grapes, the must and the wine; from those readings we set the day of the harvest for each variety separately.',
        ],
      },
      {
        head: 'In the vineyard',
        paragraphs: [
          'We plant the vines closer together than usual, so that each carries less fruit — in the new part of Grčevje up to 33,000 vines per hectare. We farm the vineyards close to nature, with as little fertiliser and spraying as we can, and twice a season we protect and feed the vines with a nettle extract.',
        ],
      },
      {
        head: 'Nothing goes to waste',
        paragraphs: [
          'A 140 kW solar plant on the cellar roof produces about 170 MWh a year. We press oil from grape seeds and from sunflowers, and make a grape juice from žametna črnina that we bottle for children like wine. In 2023 the Agrobiznis conference gave us an award for our move towards energy and environmental neutrality.',
        ],
      },
    ],
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
    sitesIntro: [
      'Across five winegrowing sites in Dolenjska, together covering 16.5 hectares, varied soils, winegrowing tradition and a modern approach to growing grapes come together.',
      'Each site has its own character and its own part in shaping our wines. From the marl soils of Grčevje, where we follow the Burgundian way of planting, to the traditional Dolenjska vineyards, where we grow grapes for fresh, fruity, lively wines.',
      'The diversity of the vineyards lets us create different styles of wine, joined by respect for nature, careful work and the wish to keep in every wine a part of the landscape it comes from.',
    ],
    sites: [
      {
        name: 'Grčevje',
        copy: [
          'Grčevje is a chapter of its own in our winegrowing story. Across 6 hectares of vineyards we distinguish an older part (1.5 ha), where Laški rizling, Chardonnay and Sivi pinot grow, and a new part (4.5 ha), planted in stages in 2020, 2022 and 2024. The new vineyard expresses our modern, Burgundy-inspired direction.',
          'The new part of Grčevje is planted in the Burgundian style at exceptionally high densities: on individual plots 15,000, 20,000, 25,000 and 33,000 vines per hectare. The different densities are part of a considered approach to working the vineyard and to finding the balance between the vine’s growth, its yield and the quality of the grapes.',
          'The marl soils play an important part. Their structure and their ability to hold moisture shape particular growing conditions. Together with the climate, the position and the way the vineyard is worked, they lay the foundations for wines of distinct character.',
          'Grčevje is the expression of our long-term vision. We believe that considered winegrowing, knowledge and respect for what nature gives us can make wines that join their Dolenjska origin with an ambition for the highest quality.',
        ],
      },
      {
        name: 'Razbore',
        copy: [
          'On 3.5 hectares of vineyards at Razbore lies one of our characteristic Dolenjska sites. The vineyard was planted in 2001, and its character is shaped by marl soils.',
          'At Razbore we grow Žametna črnina, Laški rizling, Kraljevina and Beli pinot. This range of varieties gives us grapes for wines that express authenticity and the rich winegrowing heritage of Dolenjska.',
        ],
      },
      {
        name: 'Ždinja vas',
        copy: [
          'Stony soils prevail across the 3.5 hectares of vineyards at Ždinja vas, planted in 2014.',
          'Ždinja vas plays an important part in making our fresh, fruity, lively wines. In the vineyard we work to preserve the grapes’ natural freshness, a pleasant balance of acidity and the aromatic expression that are the key elements of this style of wine.',
          'Ždinja vas grows Kraljevina, Žametna črnina, Modra frankinja, Laški rizling, Chardonnay, Beli pinot, Sivi pinot and Traminec. This wide choice of traditional and international varieties gives us grapes for many styles of wine, from fresh and lively to more aromatic.',
        ],
      },
      {
        name: 'Trška gora',
        copy: [
          'Trška gora is one of the best-known winegrowing landscapes in Dolenjska. For centuries its slopes, threaded with vineyards and zidanice, the small vineyard cottages of the region, have been a symbol of the wine culture here.',
          'On about 2 hectares of vineyards, where marl and stony soils intertwine, we continue the rich winegrowing tradition of the area. The original planting dates back to 1994, and in 2008 we added new vines.',
          'On Trška gora we grow Kraljevina, Žametna črnina, Modra frankinja, Laški rizling and Beli pinot. These varieties help shape the face of Dolenjska winegrowing and remain an important part of our identity today.',
          'For us Trška gora is more than a vineyard site. It is part of our heritage, a place where tradition meets everyday life and where wine has always brought people together.',
        ],
      },
      {
        name: 'Vinji vrh',
        copy: [
          'White marl prevails across the roughly 1.5 hectares of vineyards at Vinji vrh, giving this site a geological identity of its own and setting it apart from our other vineyards.',
          'The make-up and structure of the pale marl soils affect how much water is available, how the root system develops and how the vine grows.',
          'At Vinji vrh, where we work about 1.5 hectares of vineyards, we grow Žametna črnina, Laški rizling and Modra frankinja. These traditional varieties are closely tied to Dolenjska’s wine culture and allow us to create different styles of wine.',
        ],
      },
    ],
    photoPending: 'Photograph to follow',
    faq: {
      head: 'Common questions',
      items: [
        {
          q: 'How many vineyards do you have?',
          a: '16.5 hectares in all, with about 125,000 vines, on five sites: Grčevje (6 ha), Razbore (3.5 ha), Ždinja vas (3.5 ha), Trška gora (about 2 ha) and Vinji vrh (about 1.5 ha).',
        },
        {
          q: 'Which grape varieties do you grow?',
          a: 'The traditional Dolenjska varieties — kraljevina, žametna črnina, modra frankinja (blaufränkisch) and laški rizling (Welschriesling) — alongside chardonnay, pinot blanc, pinot gris and traminer.',
        },
        {
          q: 'What are the soils like?',
          a: 'Mostly marl, which holds moisture well — at Grčevje and Razbore, and white marl at Vinji vrh. At Ždinja vas the soil is stony; on Trška gora marl and stone meet.',
        },
        {
          q: 'What is special about Grčevje?',
          a: 'The new part of Grčevje (4.5 ha), planted in 2020, 2022 and 2024, follows the Burgundian model, at densities of 15,000 to 33,000 vines per hectare.',
        },
        {
          q: 'What is Trška gora?',
          a: 'One of the best-known wine landscapes of Dolenjska, near Novo mesto, its slopes dotted with vineyards and vineyard cottages. Our vineyard there was first planted in 1994 and replanted with new vines in 2008.',
        },
        {
          q: 'Where is Dolenjska?',
          a: 'In south-eastern Slovenia, along the river Krka, between Ljubljana and Zagreb. It is a wine district of the Posavje wine region, and the home of cviček.',
        },
      ],
    },
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
    faq: {
      head: 'Common questions',
      items: [
        {
          q: 'Where is Vinoteka Colnar and when is it open?',
          a: 'In the Supernova shopping centre in Novo mesto, at Otoška cesta 5. It is open Monday to Saturday, 9.00 to 21.00.',
        },
        {
          q: 'Can I buy wine to take home?',
          a: 'Yes. Our wines and sparkling wines are all for sale to take home, with gift bags and wooden boxes for one, two or six bottles.',
        },
        {
          q: 'Do you have wines from other winemakers?',
          a: 'Yes. Alongside our own we pour and sell wines from other winemakers, among them Šturm, Dolfo and Grubar, as well as dessert wines.',
        },
        {
          q: 'Do you have anything without alcohol?',
          a: 'Yes — soft drinks, coffee, cocoa and our own Colnar grape juice.',
        },
        {
          q: 'Can I taste the wines here before visiting the cellar?',
          a: 'Yes, most of our wines are poured by the glass. For a guided tasting and a tour of the cellar, visit us at Lešnica near Otočec, ten minutes by car from Novo mesto.',
        },
      ],
    },
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
    privacyNote: 'We use the details you give only to arrange your tasting. More in our ',
    privacyLink: 'privacy notice',
    nearby: {
      head: 'A day in Dolenjska',
      intro: 'The cellar is an hour from Ljubljana and from Zagreb, and a tasting fits well into a day out around it. Times are by car from the cellar.',
      items: [
        { name: 'Otočec Castle', time: '5 minutes', copy: 'A castle on an island in the river Krka.', map: search('Grad Otočec') },
        { name: 'Trška gora', time: '5 minutes', copy: 'A vineyard hill dotted with vineyard cottages, for a walk among the vines.', map: search('Trška gora, Novo mesto') },
        { name: 'Novo mesto', time: '10 minutes', copy: 'A town in a bend of the Krka, with its main square — and our wine bar.', map: search('Glavni trg, Novo mesto') },
        { name: 'Šmarješke Toplice', time: '13 minutes', copy: 'A thermal spa set in green countryside.', map: search('Šmarješke Toplice') },
        { name: 'Dolenjske Toplice', time: '25 minutes', copy: 'A thermal spa at the edge of the Kočevski rog forest.', map: search('Dolenjske Toplice') },
        { name: 'Pleterje Charterhouse', time: '25 minutes', copy: 'A Carthusian monastery with an open-air museum and a monastery shop.', map: search('Kartuzija Pleterje') },
      ],
    },
    faq: {
      head: 'Common questions',
      items: [
        {
          q: 'What does a tasting include?',
          a: 'Three to six wines and an account of how they are made. A tour of the modern cellar at Lešnica and a board of local charcuterie and cheese can be added, €10 per person each.',
        },
        {
          q: 'What does a tasting cost?',
          a: 'Three wines €16, four €20, five €24, six €28 per person. The board of local delicacies is €10 per person and the cellar tour €10 per person. Prices include VAT.',
        },
        {
          q: 'Do I need to book?',
          a: 'Yes. Two or three days ahead is best, through the form on this page or by phone on +386 31 288 724. If we have room, we can also arrange a tasting for the same day.',
        },
        {
          q: 'When can we come?',
          a: 'On weekdays we are at the cellar from 8.00 to 16.00, and at weekends we are glad to welcome you if we arrange it beforehand.',
        },
        {
          q: 'How do we get to you?',
          a: 'The cellar is at Lešnica near Otočec, ten minutes by car from Novo mesto and five minutes from Otočec Castle. From Ljubljana it is a little under an hour by motorway, from Zagreb a little over an hour.',
        },
        {
          q: 'What else is there to do nearby?',
          a: 'A tasting fits well into a day in Dolenjska: Otočec Castle, on an island in the river Krka, is five minutes from the cellar, Novo mesto and its main square ten minutes, and the Šmarješke Toplice spa a little over ten minutes. For a walk among vineyards and vineyard cottages, there is Trška gora.',
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
          q: 'In which languages do you hold tastings?',
          a: 'Slovenian, English and Croatian.',
        },
        {
          q: 'Do you take larger groups?',
          a: 'Yes, from couples to groups of more than a hundred guests — companies, clubs and coach parties. We ask larger groups to let us know a few days ahead.',
        },
        {
          q: 'Is there parking at the cellar?',
          a: 'Yes, there is room for cars and coaches at the cellar.',
        },
        {
          q: 'How can I pay?',
          a: 'On site, in cash or by card.',
        },
        {
          q: 'Where can I buy your wines?',
          a: 'At the cellar in Lešnica when you visit, at our wine bar Vinoteka Colnar in the Supernova centre in Novo mesto (Otoška cesta 5, Mon – Sat 9.00 – 21.00), and online from the distributor Evino. We also ship within Slovenia and abroad — write to us at info@colnar.si.',
        },
        {
          q: 'Can we bring children or a dog?',
          a: 'Of course. Children are welcome and we have soft drinks for them, and dogs are welcome too.',
        },
        {
          q: 'Is the cellar wheelchair accessible?',
          a: 'The tasting room is accessible; the cellar tour has steps.',
        },
        {
          q: 'Do you host private events?',
          a: 'Yes — company outings, celebrations and other private parties, at the cellar in Lešnica or at our vineyard cottage in Črešnjice. Call us on +386 31 288 724 or write to info@colnar.si.',
        },
      ],
    },
    aside: {
      whereLabel: 'Where',
      whereName: 'Vinska klet Colnar',
      whereCopy: 'Lešnica 8, 8222 Otočec, Slovenia',
      whereMap: maps.cellar,
      whenLabel: 'When',
      whenHours: 'By arrangement',
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
      notePlaceholder: 'Allergies and other notes',
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
    resultsLabel: 'Results',
    results:
      'New equipment for the wine cellar — a nitrogen generator, wooden barrels and wine storage equipment — replacing worn equipment and modernising how the holding makes and stores its wine.',
    note: 'This is a translation. The Slovenian version of this page is the official one.',
  },

  legal: {
    updatedLabel: 'In force from',
    updated: '3 November 2026',
    note: 'This is a translation. The Slovenian version is the binding one.',
    pages: {
      terms: {
        eyebrow: 'Legal notice',
        title: 'Terms and conditions',
        link: 'Terms',
        intro:
          'These terms apply to the use of colnar.si and to tasting bookings made through it. We do not run an online shop: our wines are sold by the distributor Evino, at the cellar in Lešnica and at the Colnar wine bar.',
        sections: [
          {
            head: 'Who we are',
            blocks: [
              'This site and the Colnar wine bar are run by:',
              [
                'COLNAR VINA, trgovina in storitve d.o.o.',
                'Lešnica 8, 8222 Otočec, Slovenia',
                'Registration number: 9467963000',
                'VAT ID: SI24422363',
                'Email: info@colnar.si',
                'Phone: +386 31 288 724',
              ],
              'The vineyards and the cellar belong to the family farm, which also holds the EU-co-funded investment:',
              [
                'JANEZ COLNAR – NOSILEC DOPOLNILNE DEJAVNOSTI NA KMETIJI',
                'Lešnica 8, 8222 Otočec, Slovenia',
                'Registration number: 2605139000',
                'VAT ID: SI43099807',
              ],
            ],
          },
          {
            head: 'Using this site',
            blocks: [
              'This site presents alcoholic drinks and is meant for people of legal drinking age.',
              'The texts, photographs, logos and other content on this site belong to Vinska klet Colnar or to their authors. They may not be copied, published or otherwise used without our written permission, except for personal use.',
            ],
          },
          {
            head: 'Prices and buying wine',
            blocks: [
              'All prices on this site include VAT. Bottle prices on the wine pages are Evino’s prices on the day of publication and are for information. A purchase through the “Buy at Evino” link is made with Evino, under Evino’s terms.',
              'We do our best to keep prices, opening hours and other details accurate. Where they differ from those at the point of sale, the price at the point of sale applies.',
            ],
          },
          {
            head: 'Tasting bookings',
            blocks: [
              'A booking made through the form or by phone is not binding until we confirm the date by email or phone.',
              'Tasting and extra prices are in the price list on the Tasting page. Payment is on site, in cash or by card; we do not take payment in advance.',
              'If you cannot make it, please let us know as soon as you can on +386 31 288 724 or at info@colnar.si.',
              'We serve alcoholic drinks only to adults.',
            ],
          },
          {
            head: 'Complaints and disputes',
            blocks: [
              'Send complaints to info@colnar.si or by post to our address. Within five working days we confirm that we have received it, tell you how long we will need, and keep you informed.',
              'We try to settle disputes by agreement. We do not recognise any out-of-court consumer dispute resolution provider as competent for disputes with us. If a dispute cannot be settled by agreement, the court of the consumer’s permanent residence has jurisdiction.',
            ],
          },
          {
            head: 'Liability',
            blocks: [
              'The content of this site is for information. We are not responsible for the content of external sites we link to — Evino, maps, social networks.',
            ],
          },
          {
            head: 'Changes',
            blocks: [
              'We may change these terms. The version published on this page applies; a tasting booking is governed by the terms published when it was made.',
            ],
          },
        ],
      },
      privacy: {
        eyebrow: 'Data protection',
        title: 'Privacy notice',
        link: 'Privacy',
        intro:
          'This notice explains what personal data we collect through this site, why, how long we keep it and what rights you have. It follows the General Data Protection Regulation (GDPR) and the Slovenian Personal Data Protection Act (ZVOP-2).',
        sections: [
          {
            head: 'Controller',
            blocks: [
              [
                'COLNAR VINA, trgovina in storitve d.o.o.',
                'Lešnica 8, 8222 Otočec, Slovenia',
                'Email: info@colnar.si',
                'Phone: +386 31 288 724',
              ],
            ],
          },
          {
            head: 'Tasting bookings',
            blocks: [
              'When you send a booking we receive your name, email address, phone number, preferred date and time, number of guests, the tasting and extras you chose, and your note if you write one. We send an automatic confirmation of receipt to the email address you give.',
              'We use these details to arrange and hold the tasting: to confirm the date, tell you about any change and prepare for your visit. The legal basis is entering into and performing a contract (Article 6(1)(b) GDPR).',
              'If your note mentions allergies or other dietary restrictions, that is health data. Giving it is voluntary; by giving it you consent to our using it only to prepare your tasting and board (Article 9(2)(a) GDPR). You can withdraw that consent at any time.',
              'We keep bookings, note included, for one year after the date of the tasting and then delete them.',
            ],
          },
          {
            head: 'Email and phone',
            blocks: [
              'When you write or call, we use your details and your message to reply. The legal basis is our legitimate interest in answering you (Article 6(1)(f) GDPR), or preparing a contract when it is a booking. We keep messages for as long as we need them to deal with your enquiry.',
            ],
          },
          {
            head: 'Visiting this site',
            blocks: [
              'We do not use this site for analytics, advertising or tracking, and it carries no social media plugins. Our hosting provider automatically logs technical data with each visit — IP address, time, page visited and browser type — which is needed to run and secure the site. The legal basis is legitimate interest (Article 6(1)(f) GDPR).',
              'What the site stores in your browser is described on the Cookies page.',
            ],
          },
          {
            head: 'Who receives your data',
            blocks: [
              'We do not sell your data or pass it on for advertising. Only the processors who help us run the site have access to it, under a data processing agreement:',
              [
                'Netlify, Inc. (USA) — hosts the site and receives bookings. Netlify participates in the EU-U.S. Data Privacy Framework, so the transfer to the USA rests on the European Commission’s adequacy decision.',
                'NEOSERV d.o.o. (Slovenia) — hosts the info@colnar.si mailbox, through which we receive bookings and write to you.',
              ],
              'We pass data to public authorities only when the law requires it.',
            ],
          },
          {
            head: 'Your rights',
            blocks: [
              'You can ask at any time for:',
              [
                'access to the data we hold about you,',
                'correction of inaccurate data,',
                'erasure of your data,',
                'restriction of processing,',
                'transfer of your data to another controller,',
                'objection to processing based on legitimate interest,',
                'withdrawal of consent, without affecting processing before the withdrawal.',
              ],
              'Send your request to info@colnar.si or by post to our address. We reply within one month at the latest.',
              'If you believe we process your data unlawfully, you can complain to the Slovenian Information Commissioner (Informacijski pooblaščenec), Dunajska cesta 22, 1000 Ljubljana, https://www.ip-rs.si.',
            ],
          },
          {
            head: 'Changes',
            blocks: [
              'We update this notice when the way we process data changes. The version published on this page applies.',
            ],
          },
        ],
      },
      cookies: {
        eyebrow: 'Cookies',
        title: 'Cookies and browser storage',
        link: 'Cookies',
        intro:
          'This site uses no cookies. We have no analytics, advertising or tracking tools, so we do not ask for your consent.',
        sections: [
          {
            head: 'What we store in your browser',
            blocks: [
              'When you confirm that you are of legal drinking age, your browser remembers it so that we do not ask on every visit. We write a single key, colnar:age-ok, with the time of confirmation, to your browser’s local storage (localStorage). It stays in your browser, is never sent to us and is used for nothing else.',
              'Because it is strictly necessary for a site we show only to adults, it needs no consent (Article 225(2) of the Slovenian Electronic Communications Act, ZEKom-2).',
            ],
          },
          {
            head: 'Content from other providers',
            blocks: [
              'Our fonts are served from our own server, so a visit does not call Google or any other provider. Maps, Instagram, Facebook and Evino are plain links: when you follow one, that site’s own rules apply.',
            ],
          },
          {
            head: 'How to delete it',
            blocks: [
              'Clear the site data for colnar.si in your browser settings. On your next visit we will ask your age again.',
            ],
          },
        ],
      },
    },
  },

  footer: {
    legalLabel: 'Legal',
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
