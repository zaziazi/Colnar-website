import type { Content } from './types';
import { maps } from '../data/maps';

/**
 * Slovenščina — izvirno besedilo.
 *
 * Prose here is the estate's own, from the design handoff and from colnar.si.
 * The confirmed figures are 20 ha / 100.000 trt / 5 leg, ten wines, and 2001 as
 * the first planting year.
 */
export const sl: Content = {
  htmlLang: 'sl',
  ogLocale: 'sl_SI',
  numberLocale: 'sl-SI',

  siteName: 'Vinska klet Colnar',
  legalName: 'Janez Colnar, vinogradništvo in vinarstvo',
  vatLabel: 'ID za DDV',

  nav: {
    left: [
      { label: 'Vina', to: 'wines' },
      { label: 'Klet', to: 'cellar' },
      { label: 'Vinogradi', to: 'vineyards' },
      { label: 'Vinoteka', to: 'vinoteka' },
    ],
    right: [{ label: 'Degustacija', to: 'tasting' }],
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
    wines: {
      title: 'Naša vina — Vinska klet Colnar',
      description:
        'Dvanajst vin družine Colnar iz Lešnice pri Otočcu: cviček, penina, Grand Jaenes, dolenjsko in hišno belo, chardonnay, laški rizling, rosé, modra frankinja, modri pinot in collis.',
    },
    cellar: {
      title: 'Vinska klet — Vinska klet Colnar',
      description:
        'Sodobna klet družine Colnar iz leta 2022 na Lešnici 8 pri Otočcu. Rdeča vina zorimo v hrastovih sodih. Možen je ogled kleti, degustacija in prevzem vina.',
    },
    vineyards: {
      title: 'Naši vinogradi — Vinska klet Colnar',
      description:
        'Dvajset hektarjev in 100.000 trt na petih sončnih legah nad dolino Krke, s pogledom na Gorjance — Trška gora, Razbore, Grčevje, Ždinja Vas in Vinji vrh.',
    },
    vinoteka: {
      title: 'Vinoteka Colnar — Supernova Novo mesto',
      description:
        'Vinoteka Colnar v nakupovalnem središču Supernova Novo mesto. Vsa naša vina in penine na kozarec ali na steklenico, odprto Pon – Sob 9.00 – 21.00.',
    },
    tasting: {
      title: 'Degustacija — Vinska klet Colnar',
      description:
        'Degustacija treh do šestih vin z ogledom sodobne kleti na Lešnici, z narezki domačih dobrot. Od 16 € na osebo. Prijavite se na termin.',
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
    storyCopy:
      'Družina Colnar je stara rodbina, ki ljubezen do prelepih dolenjskih gričev in zemlje skozi leta prenaša iz roda v rod.',
    yearsHead: 'Skozi leta',
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
        kicker: 'Prva trta',
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
      { value: 20, unit: 'ha', label: 'Vinogradov' },
      { value: 100000, grouped: true, label: 'Trt' },
      { value: 5, label: 'Sončnih leg' },
    ],
    cards: [
      {
        id: 'vina',
        title: 'Vina',
        alt: 'Steklenice vina Colnar',
        copy: 'Spoznajte naša vina: cviček, penina, Grand Jaenes in Grand Jaenes rosé, dolenjsko in hišno belo, chardonnay, laški rizling, rosé, modra frankinja, modri pinot in collis.',
        link: { label: 'Spoznajte naša vina', to: 'wines' },
      },
      {
        id: 'degustacija',
        title: 'Degustacija',
        alt: 'Steklenica modre frankinje in kozarec na stari mizi',
        copy: 'Gostom predstavimo vina in njihovo pridelavo, obenem pa izpeljemo ogled sodobne kleti na Lešnici. Možne so degustacije od treh do šestih vin, z narezki domačih dobrot.',
        link: { label: 'Prijavite se na degustacijo', to: 'tasting' },
      },
      {
        id: 'vinogradi',
        title: 'Vinogradi',
        alt: 'Vinogradi na sončni legi nad dolino Krke',
        copy: 'Dvajset hektarjev na petih sončnih legah nad dolino Krke — 100.000 trt, ki jih obrezujemo in beremo sami.',
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
      copy: 'Vinoteka v nakupovalnem središču Supernova Novo mesto, kjer se lahko ustavite na kavi ali kozarčku vina. Možen tudi prevzem vina za domov.',
      hoursLabel: 'Delovni čas',
      hours: 'Pon – Sob · 9.00 – 21.00',
      menuLabel: 'Meni',
      menuLink: 'Ponudba vinoteke',
      alt: 'Kozarci na degustaciji',
    },
    ctaBar: 'Rezerviraj degustacijo',
  },

  wines: {
    title: 'Vina',
    standfirst: 'iz naših vinogradov',
    heroAlt: 'Vtisnjen napis Colnar na etiketi steklenice',
    lede: 'Na prvem mestu je konstantno zagotavljanje kakovosti — od trte, ki jo obrezujemo in beremo sami, do steklenice.',
    prose: [
      'Grozdje pridelamo na dvajsetih hektarjih na petih sončnih legah nad dolino Krke. Cviček, posebnost Dolenjske, predstavlja kar 60 % pridelanega vina; ob njem pridelujemo bela vina, chardonnay, rosé, modro frankinjo, modri pinot, penino po klasični metodi in collis, ki zori v akacijevem sodu. Naziv kralja cvička smo prejeli v letih 2008, 2014 in 2022.',
      'Vina lahko pokusite ob degustaciji v kleti na Lešnici ali jih prevzamete tam in v Vinoteki Colnar v Novem mestu.',
    ],
    listHead: 'Vina',
    buy: 'Kupi na Evino',
    bottleAlt: (name) => `Steklenica — ${name}`,
    kinds: {
      belo: 'belo',
      'rdeče': 'rdeče',
      'rosé': 'rosé',
      penina: 'penina',
      'penina rosé': 'penina rosé',
    },
    cta: { heading: 'Spoznajte jih v kleti.', secondary: { label: 'Poglejte vinograde', to: 'vineyards' } },
  },

  cellar: {
    title: 'Vinska klet',
    standfirst: 'na Lešnici',
    heroAlt: 'Hrastovi sodi z monogramom Vinske kleti Colnar',
    lede: 'Sodobna vinska klet iz leta 2022. Možen je ogled kleti, degustacija in prevzem vina.',
    prose: [
      'Leta 2022 smo zgradili novo klet s sodobno opremo za pridelavo vina — od sprejema grozdja do steklenice pod eno streho. Rdeča vina zorimo v hrastovih sodih, bela pa v inox posodah in, pri collisu, v velikem akacijevem sodu.',
      'Gostom tu predstavimo vina in njihovo pridelavo ter izpeljemo ogled kleti. Vino lahko v kleti tudi prevzamete.',
    ],
    inCellarHead: 'V kleti',
    inCellar: [
      {
        label: '2022',
        name: 'Nova klet',
        copy: 'Zgradimo novo klet s sodobno opremo za pridelavo vina.',
      },
      {
        label: 'Degustacija',
        name: 'Ogled in pokušina',
        copy: 'Gostom predstavimo vina in njihovo pridelavo, obenem pa izpeljemo ogled sodobne kleti na Lešnici. Možne so degustacije od treh do šestih vin, z narezki domačih dobrot.',
      },
    ],
    whereHead: 'Kje nas najdete',
    addressLabel: 'Naslov',
    addressName: 'Lešnica 8',
    addressCopy: '8222 Otočec',
    addressMap: maps.cellar,
    contactLabel: 'Kontakt',
    cta: {
      heading: 'Ogled in degustacijo dogovorimo vnaprej.',
      secondary: { label: 'Spoznajte naša vina', to: 'wines' },
    },
  },

  vineyards: {
    title: 'Vinogradi',
    standfirst: 'nad dolino reke Krke, s pogledom na Gorjance',
    heroAlt: 'Vinograd na sončni legi s pogledom na dolino in Gorjance',
    lede: 'Dvajset hektarjev vinogradov na petih sončnih legah nad dolino reke Krke, s pogledom na Gorjance.',
    prose: [
      'Prvo trto sta Janez VII. in brat Matjaž posadila leta 2001. Danes na petih legah raste 100.000 trt, ki jih obrezujemo in beremo sami.',
      'Iz teh vrst pride vse, kar pridelamo — cviček, ki predstavlja 60 % pridelka, ob njem pa bela vina, rosé, modra frankinja, laški rizling, penina in collis.',
    ],
    sitesHead: 'Sončne lege',
    sites: ['Trška gora', 'Razbore', 'Grčevje', 'Ždinja Vas', 'Vinji vrh'],
    photoPending: 'Fotografija sledi',
    cta: {
      heading: 'Spoznajte vina iz naših vinogradov.',
      secondary: { label: 'Naša vina', to: 'wines' },
    },
  },

  vinoteka: {
    title: 'Vinoteka',
    heroAlt: 'Steklenica Colnar Chardonnay na mizi med zelenjem',
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
    heroAlt: 'Zamaška z napisom Colnar na hrastovi mizi',
    intro:
      'Našim gostom predstavimo naša vina in njihovo pridelavo, obenem pa izpeljemo ogled vinske kleti, zgrajene leta 2022.',
    prose: [
      'Pri degustaciji nudimo različne pakete, glede na želje gostov — od treh do šestih vin. K vinom postrežemo narezke domačih dobrot, ogled kleti pa traja približno pol ure.',
      'Sprejmemo vse vrste skupin. Po predhodnem naročilu se lahko dogovorimo tudi za kosilo ali večerjo.',
      'Predelamo in porabimo vse stranske produkte pri pridelavi vina: iz grozdnih pešk pridobimo olje in moko ter tako pripomoremo k trajnostnemu razvoju kmetijstva. Pri degustaciji lahko poskusite oboje.',
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
    faq: {
      head: 'Pogosta vprašanja',
      items: [
        {
          q: 'Kaj vključuje degustacija?',
          a: 'Pokušino treh do šestih vin s predstavitvijo vin in njihove pridelave ter ogled sodobne kleti na Lešnici. Po želji dodamo narezek domačih dobrot.',
        },
        {
          q: 'Koliko stane degustacija?',
          a: 'Tri vina 16 €, štiri vina 20 €, pet vin 24 €, šest vin 28 € na osebo. Narezek domačih dobrot je 10 € na osebo, ogled kleti 10 € na osebo. Cene vključujejo DDV.',
        },
        {
          q: 'Ali je potrebna rezervacija?',
          a: 'Da, ogled in degustacijo dogovorimo vnaprej — prek obrazca na tej strani ali po telefonu +386 31 288 724.',
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
          q: 'Kako lahko plačam?',
          a: 'Na lokaciji z gotovino ali s kartico.',
        },
      ],
    },
    aside: {
      whereLabel: 'Kje',
      whereName: 'Vinska klet Colnar',
      whereCopy: 'Lešnica 8, 8222 Otočec',
      whereMap: maps.cellar,
      phoneLabel: 'Raje po telefonu',
    },
    form: {
      name: 'Ime in priimek',
      email: 'E-pošta',
      phone: 'Telefon',
      date: 'Želeni datum',
      guests: 'Število gostov',
      extras: 'Dodatno',
      size: 'Obseg degustacije',
      note: 'Opomba',
      noteHelp:
        'Narezki domačih dobrot, kosilo ali večerja po predhodnem naročilu, prilagoditve zaradi alergij, priložnost — karkoli nam pomaga pripraviti termin.',
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

  footer: {
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
