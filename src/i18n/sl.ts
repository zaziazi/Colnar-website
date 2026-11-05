import type { Content } from './types';
import { maps } from '../data/maps';

/**
 * Slovenščina — izvirno besedilo.
 *
 * Prose here is the estate's own, from the design handoff and from colnar.si.
 * The confirmed figures are 16,5 ha / 125.000 trt / 5 leg, twelve wines, and 2001
 * as the year the vineyards grew to this scale.
 */
export const sl: Content = {
  htmlLang: 'sl',
  ogLocale: 'sl_SI',
  numberLocale: 'sl-SI',

  siteName: 'Vinska klet Colnar',
  legalName: 'COLNAR VINA, trgovina in storitve d.o.o.',
  vatLabel: 'ID za DDV',

  nav: {
    left: [
      { label: 'Naša zgodba', to: 'story' },
      { label: 'Vina', to: 'wines' },
      { label: 'Vinogradi', to: 'vineyards' },
    ],
    right: [
      { label: 'Degustacija', to: 'tasting' },
      { label: 'Vinoteka', to: 'vinoteka' },
    ],
    toggle: 'EN',
    menu: 'Meni',
    menuAria: 'Glavni meni',
  },

  meta: {
    home: {
      title: 'Vinska klet Colnar — družinska klet na Dolenjskem od 1747',
      description:
        'Družina Colnar prideluje vino v Lešnici pri Otočcu. Rezervirajte degustacijo z ogledom kleti ali se oglasite v Vinoteki Colnar v Novem mestu.',
    },
    story: {
      title: 'Naša zgodba: družina Colnar od leta 1408 — Vinska klet Colnar',
      crumb: 'Naša zgodba',
      description:
        'Zgodba družine Colnar: prvi zapisi iz leta 1408, tradicija Janezov od leta 1747, širitev vinogradov leta 2001 in nova klet na Lešnici leta 2022.',
    },
    wines: {
      title: 'Cviček, penine in dolenjska vina — Vinska klet Colnar',
      crumb: 'Vina',
      description:
        'Dvanajst vin družine Colnar z Dolenjske: cviček z nazivom Kralj cvička, penine Grand Jaenes, chardonnay, modri pinot, collis in druga.',
    },
    vineyards: {
      title: 'Naši vinogradi na Dolenjskem — Vinska klet Colnar',
      crumb: 'Vinogradi',
      description:
        '16,5 hektarja in 125.000 trt na petih sončnih legah nad dolino Krke, s pogledom na Gorjance — Trška gora, Razbore, Grčevje, Ždinja vas in Vinji vrh.',
    },
    vinoteka: {
      title: 'Vinoteka Colnar — vinski bar v Supernovi, Novo mesto',
      crumb: 'Vinoteka',
      description:
        'Vinoteka Colnar v nakupovalnem središču Supernova Novo mesto. Vsa naša vina in penine na kozarec ali na steklenico, odprto Pon – Sob 9.00 – 21.00.',
    },
    tasting: {
      title: 'Degustacija vin na Dolenjskem, Otočec — Vinska klet Colnar',
      crumb: 'Degustacija',
      description:
        'Degustacija treh do šestih vin v kleti na Lešnici pri Otočcu, od 16 € na osebo. Po želji ogled kleti in narezek domačih dobrot. Rezervacija vnaprej.',
    },
    funding: {
      title: 'Naložba v opremo vinske kleti — Vinska klet Colnar',
      description:
        'Naložba Kmetijskega gospodarstva Colnar v opremo vinske kleti: generator dušika, lesene sode in opremo za skladiščenje vina. Sofinancira Evropska unija.',
    },
    terms: {
      title: 'Splošni pogoji — Vinska klet Colnar',
      description:
        'Podatki o ponudniku, pogoji uporabe spletne strani, prijave na degustacijo, cene ter reševanje pritožb in sporov.',
    },
    privacy: {
      title: 'Pravilnik o zasebnosti — Vinska klet Colnar',
      crumb: 'Zasebnost',
      description:
        'Katere osebne podatke zbiramo prek spletne strani in prijav na degustacijo, zakaj, kako dolgo jih hranimo in kakšne so vaše pravice.',
    },
    cookies: {
      title: 'Piškotki — Vinska klet Colnar',
      description:
        'Spletna stran ne uporablja piškotkov in orodij za sledenje. V brskalniku si zapomni le, da ste potrdili polnoletnost.',
    },
  },

  home: {
    heroAlt: 'Grozd v jutranji svetlobi nad dolino Krke',
    heroLinks: [
      { label: 'Spoznaj naša vina', to: 'wines' },
      { label: 'Rezerviraj degustacijo', to: 'tasting' },
    ],
    scrollHint: 'Pomaknite se navzdol',
    storyHead: 'Naša Zgodba',
    lead: 'Pustite se zapeljati med dolenjske griče in spoznajte naša vina.',
    yearsHead: 'Družina s tradicijo',
    milestones: [
      {
        year: '1408',
        kicker: 'Prvi zapisi',
        copy: 'Prvi zapisi družine Colnar segajo v leto 1408.',
      },
      {
        year: '1747',
        kicker: 'Tradicija',
        copy: 'Rodi se prvi sin po imenu Janez. Od tedaj tako poimenujemo vsakega prvega sina.',
      },
      {
        year: '2001',
        kicker: 'Širitev',
        copy: 'Janez VII. in brat Matjaž posadita tri hektarje in pol trte, obenem povečamo obstoječo zidanico.',
      },
      {
        year: '2022',
        kicker: 'Nova klet',
        copy: 'Zgradimo novo klet s sodobno opremo za pridelavo vina.',
      },
      {
        year: 'Danes',
        kicker: 'Kakovost',
        copy: 'Pridelujemo dvanajst vrst vina, na prvem mestu pa je konstantno zagotavljanje kakovosti.',
      },
    ],
    stats: [
      { value: 16.5, unit: 'ha', label: 'Vinogradov' },
      { value: 125000, grouped: true, label: 'Trt' },
      { value: 5, label: 'Sončnih leg' },
    ],
    cards: [
      {
        id: 'vina',
        title: 'Vina',
        alt: 'Steklenice vina Colnar',
        copy: 'Dvanajst vin v treh linijah: JC, Colnar in Grand Jaenes.',
        link: { label: 'Spoznajte naša vina', to: 'wines' },
      },
      {
        id: 'degustacija',
        title: 'Degustacija',
        alt: 'Steklenica modre frankinje in kozarec na stari mizi',
        copy: 'Pokušina naših vin in ogled sodobne kleti na Lešnici.',
        link: { label: 'Prijavite se na degustacijo', to: 'tasting' },
      },
      {
        id: 'vinogradi',
        title: 'Vinogradi',
        alt: 'Vinogradi na Grčevju od zgoraj',
        copy: '16,5 hektarja nad Krko, s pogledom na Gorjance.',
        link: { label: 'Spoznajte naše vinograde', to: 'vineyards' },
      },
    ],
    quote: '»Življenje je prekratko, da bi pili slabo vino.«',
    placesHead: 'Kje nas najdete',
    places: [
      {
        label: 'Klet',
        name: 'Lešnica 8',
        copy: 'Sodobna vinska klet iz leta 2022. Možen je ogled kleti, degustacija in prevzem vina.',
        map: maps.cellar,
      },
      {
        label: 'Zidanica Colnar',
        name: 'Črešnjice 124, Otočec',
        copy: 'Stara zidanica med vinogradi, s pogledom na Krko in Gorjance. Prostor za zaključne družbe in praznovanja.',
        map: maps.zidanica,
      },
    ],
    vinoteka: {
      title: 'Vinoteka Colnar',
      copy: 'Vinoteka v nakupovalnem središču Supernova Novo mesto, kjer se lahko ustavite na kozarcu vina. Možen tudi prevzem vina za domov.',
      hoursLabel: 'Delovni čas',
      hours: 'Pon – Sob · 9.00 – 21.00',
      menuLabel: 'Meni',
      menuLink: 'Ponudba vinoteke',
      addressLabel: 'Lokacija',
      address: 'Otoška cesta 5',
      town: '8000 Novo mesto',
      alt: 'Vinoteka Colnar: police z vini, pult in barske mize',
    },
    ctaBar: 'Rezerviraj degustacijo',
  },

  wines: {
    title: 'Vina',
    standfirst: 'iz naših vinogradov',
    heroAlt: 'Vtisnjen napis Colnar na etiketi steklenice',
    quote: {
      text: '»Vino je ustekleničena poezija.«',
      author: 'Robert Louis Stevenson',
    },
    listHead: 'Vina',
    buy: 'Kupi na Evino',
    bottleAlt: (name) => `Steklenica — ${name}`,
    photoPending: 'Fotografija sledi',
    groups: [
      { key: 'jc', label: 'JC' },
      { key: 'colnar', label: 'Colnar' },
      { key: 'grand-jaenes', label: 'Grand Jaenes' },
    ],
    kinds: {
      belo: 'belo',
      'rdeče': 'rdeče',
      'rosé': 'rosé',
      penina: 'penina',
      'penina rosé': 'penina rosé',
    },
    detail: {
      prev: 'Prejšnje',
      next: 'Naslednje',
      specHead: 'Značilnosti',
      spec: {
        style: 'Slog vina',
        grapes: 'Sorte',
        sweetness: 'Vsebnost sladkorja',
        ageing: 'Zorenje',
        pairing: 'Ob hrani',
        vintage: 'Letnik',
        volume: 'Prostornina',
        alcohol: 'Delež alkohola',
        region: 'Regija',
        country: 'Država',
        awards: 'Priznanja',
      },
      styles: {
        'sveze-belo': 'Sveže belo',
        'bogato-belo': 'Bogato belo',
        'sveze-rdece': 'Sveže rdeče',
        'bogato-rdece': 'Bogato rdeče',
        rose: 'Rosé',
        penece: 'Peneče',
      },
      regionName: 'Dolenjska',
      countryName: 'Slovenija',
      pageTitle: (name, zvrst) => {
        const noun = { belo: 'belo vino', 'rdeče': 'rdeče vino', 'rosé': 'rosé', penina: 'penina', 'penina rosé': 'rosé penina' }[zvrst ?? ''];
        if (!noun) return `${name} — Colnar`;
        return `${name}${noun === name.toLowerCase() ? '' : `, ${noun}`} z Dolenjske — Colnar`;
      },
      fallbackDescription: (name, kind) =>
        `${name}${kind ? `, ${kind} vino` : ''} Vinske kleti Colnar iz Lešnice pri Otočcu. Pokusite ga na degustaciji v kleti ali v Vinoteki Colnar v Novem mestu.`,
    },
    cta: { heading: 'Spoznajte jih v kleti.', secondary: { label: 'Poglejte vinograde', to: 'vineyards' } },
  },


  story: {
    title: 'Naša zgodba',
    standfirst: 'od leta 1408',
    heroAlt: 'Ob rdečem traktorju pod brajdami v vinogradu, trgatev 2019',
    tree: {
      head: 'Družinsko drevo',
      alt: 'Ročno zapisan rodovnik družine Colnar – Zollner z Lešnice, z zapisi od okoli leta 1400',
      caption:
        'Zapisi o družini segajo v čas okoli leta 1400, leta 1747 pa se rodi prvi Janez. Od takrat to ime nosi vsak prvorojeni sin. Rodovnik povezuje enajst rodov, ki so vsi živeli na Lešnici, od Mihaela, rojenega leta 1590, do Janeza, rojenega leta 1936. Danes ime nosi že deveti Janez.',
      open: 'Odpri v polni velikosti',
    },
    slides: {
      label: 'Fotografije družine',
      prev: 'Prejšnja fotografija',
      next: 'Naslednja fotografija',
      alts: [
        'Nazdravljamo pred domačo hišo',
        'Z najmlajšim članom družine',
        'Med brajdami v vinogradu pod modrim nebom',
        'Za mizo s steklenicami JC',
        'Nazdravljamo, eden izmed nas v rdečem kraljevskem plašču',
        'S priznanjem Agrobiznis konference 2023 za premik proti energetski in okoljski nevtralnosti',
        'Pod vhodom z vklesanim napisom J. C. 1897',
        'Na predstavitvi naših vin',
        'Ekipa pred kletjo',
        'Za mizo z vrčem domačega vina',
      ],
    },
    cta: {
      heading: 'Zgodbo nadaljujemo v kleti.',
      secondary: { label: 'Naša vina', to: 'wines' },
    },
  },

  vineyards: {
    title: 'Vinogradi',
    standfirst: 'nad dolino reke Krke, s pogledom na Gorjance',
    heroAlt: 'Vrste trt v vinogradu, med njimi regratove lučke',
    quote: {
      text: '»Vino je pesem zemlje, ki se dviga k nebu.«',
      author: 'Luigi Veronelli',
    },
    sitesHead: 'Naši vinogradi',
    sitesIntro: [
      'Na petih vinogradniških legah Dolenjske, ki skupaj obsegajo 16,5 hektarja, se prepletajo raznolika tla, vinogradniška tradicija in sodoben pristop k pridelavi grozdja.',
      'Vsaka lega ima svoj značaj in svojo vlogo pri oblikovanju naših vin. Od lapornih tal Grčevja, kjer sledimo burgundskemu načinu sajenja, do tradicionalnih dolenjskih vinogradov, kjer pridelujemo grozdje za sveža, sadna in živahna vina.',
      'Raznolikost vinogradov nam omogoča ustvarjanje različnih vinskih slogov, ki jih povezujejo spoštovanje narave, skrbno delo in želja, da v vsakem vinu ohranimo del pokrajine, iz katere prihaja.',
    ],
    sites: [
      {
        name: 'Grčevje',
        copy: [
          'Grčevje predstavlja posebno poglavje naše vinogradniške zgodbe. Na skupno 6 hektarjih vinogradov ločimo starejši del (1,5 ha), kjer uspevajo laški rizling, chardonnay in sivi pinot, ter novi del (4,5 ha), zasajen postopoma v letih 2020, 2022 in 2024. Novi vinograd je izraz naše sodobne, burgundsko navdihnjene usmeritve.',
          'Novi del Grčevja je zasajen v burgundskem slogu z izjemno visokimi gostotami sajenja: na posameznih površinah 15.000, 20.000, 25.000 in 33.000 trt na hektar. Različne gostote so del premišljenega pristopa k obdelavi in iskanju ravnovesja med rastjo trte, pridelkom in kakovostjo grozdja.',
          'Pomembno vlogo imajo laporna tla, ki s svojo strukturo in sposobnostjo zadrževanja vlage oblikujejo posebne rastne razmere. V povezavi s podnebjem, lego in načinom obdelave ustvarjajo temelje za vina z izrazitim značajem.',
          'Grčevje je izraz naše dolgoročne vizije. Verjamemo, da lahko s premišljenim vinogradništvom, znanjem in spoštovanjem naravnih danosti ustvarjamo vina, ki povezujejo dolenjsko poreklo z ambicijo po najvišji kakovosti.',
        ],
      },
      {
        name: 'Razbore',
        copy: [
          'Na 3,5 hektarja vinogradov v Razborah se razprostira ena naših značilnih dolenjskih vinogradniških leg. Vinograd je bil zasajen leta 2001, njegovo podobo pa oblikujejo laporna tla.',
          'V Razborah gojimo žametno črnino, laški rizling, kraljevino in beli pinot. Raznolikost sort nam omogoča pridelavo grozdja za vina, ki izražajo pristnost in bogato vinogradniško dediščino Dolenjske.',
        ],
      },
      {
        name: 'Ždinja vas',
        copy: [
          'Na 3,5 hektarja vinogradov v Ždinji vasi, zasajenih leta 2014, prevladujejo kamnita tla.',
          'Ždinja vas ima pomembno vlogo pri pridelavi naših svežih, sadnih in živahnih vin. Pri vinogradniškem delu si prizadevamo ohranjati naravno svežino grozdja, prijetno kislinsko ravnovesje in aromatsko izraznost, ki so ključni elementi takšnega vinskega sloga.',
          'V Ždinji vasi uspevajo kraljevina, žametna črnina, modra frankinja, laški rizling, chardonnay, beli pinot, sivi pinot in traminec. Širok izbor tradicionalnih in mednarodnih sort omogoča pridelavo grozdja za raznolike vinske sloge, od svežih in živahnih do aromatsko izrazitejših vin.',
        ],
      },
      {
        name: 'Trška gora',
        copy: [
          'Trška gora je ena najbolj prepoznavnih vinogradniških pokrajin Dolenjske. Njena pobočja, prepletena z vinogradi in zidanicami, že stoletja predstavljajo simbol tukajšnje vinske kulture.',
          'Na približno 2 hektarjih vinogradov, kjer se prepletajo laporna in kamnita tla, nadaljujemo bogato vinogradniško tradicijo tega območja. Prvotna zasaditev sega v leto 1994, leta 2008 pa smo vinograd dopolnili z novimi trtami.',
          'Na Trški gori gojimo kraljevino, žametno črnino, modro frankinjo, laški rizling in beli pinot. Te sorte sooblikujejo podobo dolenjskega vinogradništva in še danes predstavljajo pomemben del naše identitete.',
          'Trška gora za nas ni zgolj vinogradniška lega. Je del naše dediščine, kraj, kjer se tradicija srečuje z vsakdanjim življenjem in kjer vino že od nekdaj povezuje ljudi.',
        ],
      },
      {
        name: 'Vinji vrh',
        copy: [
          'Na približno 1,5 hektarja vinogradov Vinjega vrha prevladuje beli lapor, ki tej legi daje posebno geološko identiteto in jo razlikuje od preostalih naših vinogradov.',
          'Svetla laporna tla s svojo sestavo in strukturo vplivajo na razpoložljivost vode, razvoj koreninskega sistema in rast trte.',
          'Na Vinjem vrhu, kjer obdelujemo približno 1,5 hektarja vinogradov, gojimo žametno črnino, laški rizling in modro frankinjo. Te tradicionalne sorte so tesno povezane z dolenjsko vinsko kulturo in nam omogočajo ustvarjanje različnih vinskih slogov.',
        ],
      },
    ],
    photoPending: 'Fotografija sledi',
    cta: {
      heading: 'Spoznajte vina iz naših vinogradov.',
      secondary: { label: 'Naša vina', to: 'wines' },
    },
  },

  vinoteka: {
    title: 'Vinoteka',
    heroAlt: 'Vinoteka Colnar: police z vini, pult in barske mize',
    whereHead: 'Kako do nas',
    addressLabel: 'Naslov',
    addressName: 'Otoška cesta 5',
    addressCopy: 'Supernova Novo mesto, 8000 Novo mesto',
    addressMap: maps.vinoteka,
    hoursLabel: 'Delovni čas',
    hours: 'Pon – Sob · 9.00 – 21.00',
    menu: {
      sections: {
        bar: 'Cenik',
        home: 'Za domov',
      },
      groups: {
        glass: 'Vina na kozarec',
        bottle: 'Vina na steklenico',
        colnar: 'Vina Colnar',
        guest: 'Vina drugih vinarjev',
        predikati: 'Predikatna vina',
        mixed: 'Špricarji in škropci',
        spirits: 'Žgane pijače in aperitivi',
        beer: 'Piva',
        soft: 'Brezalkoholne pijače',
        hot: 'Topli napitki',
        extras: 'Dodatki k napitkom',
        colnarWines: 'Vina Colnar',
        colnarSparkling: 'Penine Colnar',
        guestWines: 'Vina drugih vinarjev',
        sparkling: 'Penine in šampanjci',
        spiritsHome: 'Žgane pijače',
        delicacies: 'Sokovi in domače dobrote',
        gifts: 'Darilna embalaža in dodatki',
      },
    },
    menuNote:
      'Cene so v evrih in vključujejo DDV. Ponudba se sproti spreminja — za vino, ki ga ni na seznamu, vprašajte pri pultu.',
    cta: {
      heading: 'Vina lahko pokusite tudi v kleti.',
      secondary: { label: 'Naša vina', to: 'wines' },
    },
  },

  tasting: {
    title: 'Degustacija',
    standfirst: 'in ogled kleti',
    heroAlt: 'Mladi poganjki trte v spomladanskem soncu',
    photoAlt: 'Med ogledom kleti: steklenico penine držimo proti svetlobi',
    intro:
      'Doživite pot vina od grozda do kozarca. Popeljemo vas skozi našo klet, zgrajeno leta 2022, in vam pokažemo, kako nastajajo naša vina.',
    prose: [
      'Nato pride na vrsto pokušina: od treh do šestih vin, ob njih narezki domačih dobrot in zgodbe, ki stojijo za vsakim kozarcem. Sprejmemo vsako družbo, po dogovoru pa pripravimo tudi kosilo ali večerjo iz domačih, sezonskih sestavin.',
      'Obisk dogovorimo vnaprej — prek obrazca spodaj ali po telefonu. Povejte nam, koliko vas bo in ob kakšni priložnosti prihajate, pa degustacijo pripravimo po vaši meri.',
    ],
    bookingHead: 'Rezerviraj degustacijo',
    priceHead: 'Cenik',
    priceGroups: [
      {
        label: 'Degustacija',
        rows: [
          { name: '3 vina', price: 16 },
          { name: '4 vina', price: 20 },
          { name: '5 vin', price: 24 },
          { name: '6 vin', price: 28 },
        ],
      },
      {
        label: 'Dodatno',
        rows: [
          { name: 'Narezek domačih dobrot', price: 10 },
          { name: 'Ogled kleti', note: 'Traja približno 30 minut.', price: 10 },
        ],
      },
    ],
    perPerson: 'na osebo',
    perPersonShort: '/ osebo',
    vatNote: 'Vse cene vključujejo DDV.',
    paymentNote: 'Plačilo je možno na lokaciji, z gotovino ali s kartico.',
    privacyNote: 'Podatke iz prijave uporabimo samo za dogovor o degustaciji. Več v ',
    privacyLink: 'pravilniku o zasebnosti',
    faq: {
      head: 'Pogosta vprašanja',
      items: [
        {
          q: 'Kaj vključuje degustacija?',
          a: 'Pokušino treh do šestih vin s predstavitvijo vin in njihove pridelave. Po želji dodamo ogled sodobne kleti na Lešnici in narezek domačih dobrot, vsakega po 10 € na osebo.',
        },
        {
          q: 'Koliko stane degustacija?',
          a: 'Tri vina 16 €, štiri vina 20 €, pet vin 24 €, šest vin 28 € na osebo. Narezek domačih dobrot je 10 € na osebo, ogled kleti 10 € na osebo. Cene vključujejo DDV.',
        },
        {
          q: 'Ali je potrebna rezervacija?',
          a: 'Da. Najbolje je, da se oglasite dva do tri dni prej — prek obrazca na tej strani ali po telefonu +386 31 288 724. Če imamo prosto, se lahko dogovorimo tudi za isti dan.',
        },
        {
          q: 'Kdaj lahko pridemo?',
          a: 'Med tednom smo v kleti od 8. do 16. ure, ob vikendih pa vas z veseljem sprejmemo, če se prej dogovorimo.',
        },
        {
          q: 'Kje poteka degustacija?',
          a: 'V vinski kleti Colnar na Lešnici 8, 8222 Otočec. Degustacije so samo v kleti; zidanica v Črešnjicah je namenjena zaključnim družbam.',
        },
        {
          q: 'Koliko traja ogled kleti?',
          a: 'Približno 30 minut.',
        },
        {
          q: 'V katerih jezikih vodite degustacije?',
          a: 'V slovenščini, angleščini in hrvaščini.',
        },
        {
          q: 'Ali sprejmete tudi večje skupine?',
          a: 'Da, od para do skupin z več kot sto gosti — podjetja, društva in avtobusne skupine. Večje skupine prosimo, da se najavijo nekaj dni prej.',
        },
        {
          q: 'Ali je pri kleti parkirišče?',
          a: 'Da, pri kleti je prostor za avtomobile in avtobuse.',
        },
        {
          q: 'Kako lahko plačam?',
          a: 'Na lokaciji z gotovino ali s kartico.',
        },
        {
          q: 'Kje lahko kupim vaša vina?',
          a: 'Ob obisku v kleti na Lešnici, v Vinoteki Colnar v središču Supernova v Novem mestu (Otoška cesta 5, pon – sob 9.00 – 21.00) in na spletu pri distributerju Evino. Vino pošljemo tudi po Sloveniji in v tujino — pišite nam na info@colnar.si.',
        },
        {
          q: 'Ali lahko pridemo z otroki ali s psom?',
          a: 'Seveda. Otroci so dobrodošli in zanje imamo brezalkoholno pijačo, dobrodošli so tudi psi.',
        },
        {
          q: 'Ali je klet dostopna z invalidskim vozičkom?',
          a: 'Prostor za degustacijo je dostopen, pri ogledu kleti pa so stopnice.',
        },
        {
          q: 'Ali organizirate zaključene družbe?',
          a: 'Da — izlete podjetij, praznovanja in druge zaključene družbe, v kleti na Lešnici ali v naši zidanici med vinogradi v Črešnjicah. Pokličite nas na +386 31 288 724 ali pišite na info@colnar.si.',
        },
        {
          q: 'Kaj je cviček?',
          a: 'Posebnost Dolenjske: vino, sestavljeno iz belih in rdečih sort grozdja — žametne črnine, kraljevine, laškega rizlinga in modre frankinje. Je sveže in prija ob rdečem mesu in suhih mesninah. V naši kleti predstavlja 60 % pridelanega vina.',
        },
      ],
    },
    aside: {
      whereLabel: 'Kje',
      whereName: 'Vinska klet Colnar',
      whereCopy: 'Lešnica 8, 8222 Otočec',
      whereMap: maps.cellar,
      whenLabel: 'Kdaj',
      whenHours: 'Po dogovoru',
      phoneLabel: 'Raje po telefonu',
    },
    form: {
      name: 'Ime in priimek',
      email: 'E-pošta',
      phone: 'Telefon',
      date: 'Želeni datum',
      time: 'Ura prihoda',
      guests: 'Število gostov',
      extras: 'Dodatno',
      size: 'Obseg degustacije',
      note: 'Opomba',
      notePlaceholder: 'Alergeni in druge opombe',
      submit: 'Pošlji prijavo',
      sending: 'Pošiljam …',
      doneHead: 'Hvala za prijavo',
      doneCopy:
        'Prijavo smo prejeli. Oglasimo se vam v najkrajšem času s potrditvijo termina — če se nam mudi, nas lahko pokličete na ',
      doneCopyTail: '.',
      sizes: [
        { value: '3', label: '3 vina', price: 16 },
        { value: '4', label: '4 vina', price: 20 },
        { value: '5', label: '5 vin', price: 24 },
        { value: '6', label: '6 vin', price: 28 },
      ],
      extraItems: [
        { value: 'narezek', name: 'Narezek domačih dobrot', price: 10 },
        { value: 'ogled', name: 'Ogled kleti', note: 'Traja približno 30 minut.', price: 10 },
      ],
      messages: {
        locale: 'sl',
        required: {
          ime: 'Vpišite ime in priimek.',
          email: 'Vpišite e-poštni naslov.',
          telefon: 'Vpišite telefonsko številko.',
          datum: 'Izberite želeni datum.',
          ura: 'Izberite uro prihoda.',
          gostje: 'Vpišite število gostov.',
          obseg: 'Izberite obseg degustacije.',
        },
        invalid: {
          ime: 'Ime je prekratko.',
          email: 'E-poštni naslov ni videti pravilen.',
          telefon: 'Telefonska številka je prekratka.',
          datumPast: 'Izberite datum v prihodnosti.',
          datumBad: 'Datum ni veljaven.',
          gostje: 'Vpišite število gostov (najmanj 1).',
          gostjeMany: 'Za več kot 60 gostov nas prosim pokličite.',
        },
        // Intl.PluralRules('sl') gives one / two / few / other — the dual is
        // exactly why this is a table and not a ternary.
        unfilled: {
          one: 'Eno polje še ni izpolnjeno pravilno.',
          two: 'Dve polji še nista izpolnjeni pravilno.',
          few: '{n} polja še niso izpolnjena pravilno.',
          other: '{n} polj še ni izpolnjenih pravilno.',
        },
        noEndpoint:
          'Obrazec trenutno ni povezan s poštnim strežnikom. Pišite nam na info@colnar.si ali pokličite +386 31 288 724.',
        failed: 'Prijave ni bilo mogoče oddati. Poskusite znova ali nam pišite na info@colnar.si.',
        ok: 'Hvala — vaša prijava je oddana. Oglasimo se v najkrajšem času.',
      },
    },
  },

  funding: {
    eyebrow: 'Sofinanciranje',
    title: 'Naložba v opremo vinske kleti',
    logoAlt: 'Sofinancira Evropska unija · Republika Slovenija · Skupna kmetijska politika',
    footerLink: 'Sofinanciranje naložbe v opremo vinske kleti',
    interventionLabel: 'Naziv intervencije',
    intervention:
      '1. Javni razpis za podintervencijo naložbe kmetij v okviru intervencije IRP35 Naložbe v predelavo in trženje kmetijskih proizvodov za dvig produktivnosti in tehnološki razvoj, vključno z digitalizacijo, za leto 2025',
    operationLabel: 'Naziv operacije',
    operation: 'Naložba v opremo vinske kleti',
    descriptionLabel: 'Kratek opis',
    description:
      'Kmetijsko gospodarstvo Colnar se na 1. Javni razpis za podintervencijo naložbe kmetij v okviru intervencije IRP35 Naložbe v predelavo in trženje kmetijskih proizvodov za dvig produktivnosti in tehnološki razvoj, vključno z digitalizacijo, za leto 2025 prijavlja z naložbo v:',
    items: ['generator dušika,', 'lesene sode,', 'opremo za skladiščenje vina.'],
    goalsLabel: 'Cilji operacije',
    goals:
      'Razlogi za odločitev o izvedbi naložbe so povezani s potrebami po posodabljanju osnovnih sredstev na kmetijskem gospodarstvu. Oprema za predelavo vina se sčasoma z uporabo amortizira, zaradi česar jo je potrebno zamenjati z novo, ki je poleg tega običajno tudi tehnološko naprednejša. Kmetijsko gospodarstvo na ta način lahko normalno obratuje in se obenem tudi razvija.',
    resultsLabel: 'Rezultati operacije',
    results:
      'Nova oprema vinske kleti — generator dušika, leseni sodi in oprema za skladiščenje vina —, ki nadomesti iztrošeno opremo ter posodobi predelavo in skladiščenje vina na kmetijskem gospodarstvu.',
  },

  legal: {
    updatedLabel: 'Velja od',
    updated: '3. 11. 2026',
    pages: {
      terms: {
        eyebrow: 'Pravno obvestilo',
        title: 'Splošni pogoji',
        link: 'Splošni pogoji',
        intro:
          'Ti pogoji veljajo za uporabo spletne strani colnar.si in za prijave na degustacijo prek nje. Spletne trgovine nimamo: naša vina kupite pri distributerju Evino, v kleti na Lešnici ali v Vinoteki Colnar.',
        sections: [
          {
            head: 'Ponudnik',
            blocks: [
              'Spletno stran in Vinoteko Colnar upravlja:',
              [
                'COLNAR VINA, trgovina in storitve d.o.o.',
                'Lešnica 8, 8222 Otočec, Slovenija',
                'Matična številka: 9467963000',
                'ID za DDV: SI24422363',
                'E-pošta: info@colnar.si',
                'Telefon: +386 31 288 724',
              ],
              'Vinogradi in klet sta del kmetije, ki je tudi nosilec naložbe, sofinancirane iz Evropske unije:',
              [
                'JANEZ COLNAR – NOSILEC DOPOLNILNE DEJAVNOSTI NA KMETIJI',
                'Lešnica 8, 8222 Otočec, Slovenija',
                'Matična številka: 2605139000',
                'ID za DDV: SI43099807',
              ],
            ],
          },
          {
            head: 'Uporaba spletne strani',
            blocks: [
              'Spletna stran predstavlja alkoholne pijače, zato je namenjena polnoletnim osebam.',
              'Besedila, fotografije, logotipi in druge vsebine na strani so last Vinske kleti Colnar ali njihovih avtorjev. Brez našega pisnega dovoljenja jih ni dovoljeno kopirati, objavljati ali drugače uporabljati, razen za osebno rabo.',
            ],
          },
          {
            head: 'Cene in nakup vin',
            blocks: [
              'Vse cene na strani vključujejo DDV. Cene steklenic na straneh posameznih vin so cene pri distributerju Evino na dan objave in so informativne. Nakup prek povezave »Kupi na Evino« opravite pri Evinu, po njegovih pogojih poslovanja.',
              'Trudimo se, da so cene, delovni čas in drugi podatki na strani točni. Če se razlikujejo od podatkov na prodajnem mestu, velja cena na prodajnem mestu.',
            ],
          },
          {
            head: 'Prijava na degustacijo',
            blocks: [
              'Prijava prek obrazca ali po telefonu ni zavezujoča, dokler vam termina ne potrdimo po e-pošti ali telefonu.',
              'Cene degustacij in dodatkov so v ceniku na strani Degustacija. Plačilo je na lokaciji, z gotovino ali s kartico; vnaprejšnjega plačila ne zahtevamo.',
              'Če termina ne morete izkoristiti, nam to čim prej sporočite na +386 31 288 724 ali info@colnar.si.',
              'Alkoholne pijače strežemo samo polnoletnim osebam.',
            ],
          },
          {
            head: 'Pritožbe in spori',
            blocks: [
              'Pritožbo pošljite na info@colnar.si ali po pošti na naš naslov. V petih delovnih dneh vam potrdimo, da smo jo prejeli, sporočimo, v kolikšnem času jo bomo obravnavali, in vas obveščamo o poteku postopka.',
              'Spore skušamo rešiti sporazumno. Nobenega izvajalca izvensodnega reševanja potrošniških sporov ne priznavamo kot pristojnega za reševanje sporov z nami. Če spora ne rešimo sporazumno, je pristojno sodišče po stalnem prebivališču potrošnika.',
            ],
          },
          {
            head: 'Odgovornost',
            blocks: [
              'Vsebine na strani so informativne. Za vsebino zunanjih strani, na katere vodijo povezave — Evino, zemljevidi, družbena omrežja —, ne odgovarjamo.',
            ],
          },
          {
            head: 'Spremembe',
            blocks: [
              'Pogoje lahko spremenimo. Velja različica, objavljena na tej strani; za prijavo na degustacijo veljajo pogoji, objavljeni ob prijavi.',
            ],
          },
        ],
      },
      privacy: {
        eyebrow: 'Varstvo osebnih podatkov',
        title: 'Pravilnik o zasebnosti',
        link: 'Zasebnost',
        intro:
          'Tu pojasnjujemo, katere osebne podatke zbiramo prek spletne strani, zakaj, kako dolgo jih hranimo in kakšne pravice imate. Pravilnik sledi Splošni uredbi o varstvu podatkov (GDPR) in Zakonu o varstvu osebnih podatkov (ZVOP-2).',
        sections: [
          {
            head: 'Upravljavec',
            blocks: [
              [
                'COLNAR VINA, trgovina in storitve d.o.o.',
                'Lešnica 8, 8222 Otočec, Slovenija',
                'E-pošta: info@colnar.si',
                'Telefon: +386 31 288 724',
              ],
            ],
          },
          {
            head: 'Prijava na degustacijo',
            blocks: [
              'Ko oddate prijavo, prejmemo vaše ime in priimek, e-naslov, telefonsko številko, želeni datum in uro, število gostov, izbrano degustacijo in dodatke ter opombo, če jo napišete. Na vpisani e-naslov vam samodejno pošljemo potrditev prejema.',
              'Podatke uporabimo za dogovor in izvedbo degustacije: da potrdimo termin, vas obvestimo o morebitnih spremembah in degustacijo pripravimo. Pravna podlaga je sklenitev in izvedba pogodbe (točka b 1. odstavka 6. člena GDPR).',
              'Če v opombo napišete alergije ali druge prehranske omejitve, so to podatki o zdravju. Vpis je prostovoljen; z njim privolite, da jih uporabimo samo za pripravo degustacije in narezka (točka a 2. odstavka 9. člena GDPR). Privolitev lahko kadarkoli prekličete.',
              'Prijave, skupaj z opombo, hranimo eno leto po datumu degustacije, nato jih izbrišemo.',
            ],
          },
          {
            head: 'E-pošta in telefon',
            blocks: [
              'Ko nam pišete ali nas pokličete, vaše podatke in vsebino sporočila uporabimo za odgovor. Pravna podlaga je naš zakoniti interes, da odgovorimo na vaše vprašanje (točka f 1. odstavka 6. člena GDPR), oziroma priprava pogodbe, če gre za rezervacijo. Sporočila hranimo, dokler jih potrebujemo za obravnavo vašega vprašanja.',
            ],
          },
          {
            head: 'Obisk spletne strani',
            blocks: [
              'Strani ne uporabljamo za analitiko, oglaševanje ali sledenje in nanjo ne vključujemo vtičnikov družbenih omrežij. Ponudnik gostovanja ob vsakem obisku samodejno beleži tehnične podatke — IP-naslov, čas obiska, obiskano stran in vrsto brskalnika —, ki so potrebni za delovanje in varnost strani. Pravna podlaga je zakoniti interes (točka f 1. odstavka 6. člena GDPR).',
              'Kaj stran shrani v vašem brskalniku, piše na strani Piškotki.',
            ],
          },
          {
            head: 'Komu podatke posredujemo',
            blocks: [
              'Podatkov ne prodajamo in jih ne posredujemo za oglaševanje. Dostop do njih imajo le obdelovalci, ki nam pomagajo pri delovanju strani, na podlagi pogodbe o obdelavi podatkov:',
              [
                'Netlify, Inc. (ZDA) — gostovanje spletne strani in sprejem prijav. Netlify je vključen v okvir EU-ZDA za zasebnost podatkov (EU-U.S. Data Privacy Framework), zato prenos podatkov v ZDA temelji na sklepu Evropske komisije o ustreznosti.',
                'NEOSERV d.o.o. (Slovenija) — e-poštni predal info@colnar.si, prek katerega prejemamo prijave in vam pošiljamo sporočila.',
              ],
              'Državnim organom podatke posredujemo samo, kadar to zahteva zakon.',
            ],
          },
          {
            head: 'Vaše pravice',
            blocks: [
              'Kadarkoli lahko zahtevate:',
              [
                'dostop do podatkov, ki jih hranimo o vas,',
                'popravek netočnih podatkov,',
                'izbris podatkov,',
                'omejitev obdelave,',
                'prenos podatkov k drugemu upravljavcu,',
                'ugovor obdelavi, ki temelji na zakonitem interesu,',
                'preklic privolitve, ne da bi to vplivalo na obdelavo pred preklicem.',
              ],
              'Zahtevo pošljite na info@colnar.si ali po pošti na naš naslov. Odgovorimo najpozneje v enem mesecu.',
              'Če menite, da vaše podatke obdelujemo v nasprotju s predpisi, lahko vložite pritožbo pri Informacijskem pooblaščencu, Dunajska cesta 22, 1000 Ljubljana, https://www.ip-rs.si.',
            ],
          },
          {
            head: 'Spremembe',
            blocks: [
              'Pravilnik dopolnimo, ko se spremeni način obdelave podatkov. Velja različica, objavljena na tej strani.',
            ],
          },
        ],
      },
      cookies: {
        eyebrow: 'Piškotki',
        title: 'Piškotki in shranjevanje v brskalniku',
        link: 'Piškotki',
        intro:
          'Spletna stran ne uporablja piškotkov. Nimamo orodij za analitiko, oglaševanje ali sledenje, zato vas za soglasje ne sprašujemo.',
        sections: [
          {
            head: 'Kaj shranimo v vašem brskalniku',
            blocks: [
              'Ko potrdite, da ste polnoletni, si to zapomni vaš brskalnik, da vprašanja ne ponavljamo ob vsakem obisku. V lokalno shrambo brskalnika (localStorage) zapišemo le ključ colnar:age-ok s časom potrditve. Podatek ostane v vašem brskalniku, nam se ne pošlje in ga ne uporabljamo za nič drugega.',
              'Ker je ta zapis nujen za delovanje strani, ki jo prikažemo samo polnoletnim, zanj soglasje ni potrebno (2. odstavek 225. člena ZEKom-2).',
            ],
          },
          {
            head: 'Vsebine drugih ponudnikov',
            blocks: [
              'Pisave so shranjene na našem strežniku, zato ob obisku ne kličemo Googla ali drugih ponudnikov. Zemljevidi, Instagram, Facebook in Evino so na strani samo povezave: ko jim sledite, veljajo pravila tistih strani.',
            ],
          },
          {
            head: 'Kako zapis izbrišete',
            blocks: [
              'Zapis izbrišete v nastavitvah brskalnika, z brisanjem podatkov spletnih mest za colnar.si. Ob naslednjem obisku vas bomo znova vprašali po starosti.',
            ],
          },
        ],
      },
    },
  },

  footer: {
    legalLabel: 'Pravna obvestila',
    columns: [
      {
        label: 'Vinska klet',
        lines: [
          [{ text: 'Lešnica 8, 8222 Otočec', href: maps.cellar, external: true }],
          [{ text: '+386 31 288 724', href: 'tel:+38631288724' }],
        ],
      },
      {
        label: 'Vinoteka',
        lines: [
          [{ text: 'Otoška cesta 5, 8000 Novo mesto', href: maps.vinoteka, external: true }],
          [{ text: '+386 41 871 425', href: 'tel:+38641871425' }],
        ],
      },
      {
        label: 'Zidanica',
        lines: [
          [{ text: 'Črešnjice 124, Otočec', href: maps.zidanica, external: true }],
          [{ text: '+386 31 725 830', href: 'tel:+38631725830' }],
        ],
      },
      {
        label: 'Kontakt',
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
