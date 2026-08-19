/**
 * The vinoteka price list, from the estate's own POS export
 * (`Prodajni artikli — VINOTEKACOLNAR`, 19 August 2026).
 *
 * Prices are the export's BRUTO CENA — the shelf price, DDV included.
 *
 * The rows live here rather than in `sl.ts` / `en.ts` because a wine's name is
 * a wine's name in both languages: only the group labels are translated, and
 * those are in the content files under `vinoteka.menu`. Volumes are held as
 * millilitres and grams so each language can format them its own way —
 * `0,75 l` in Slovenian, `0.75 l` in English.
 */

export type MenuItem = {
  name: string;
  /** Serving or bottle size. */
  ml?: number;
  /** Weight, for the things that are sold by it. */
  g?: number;
  /** Gross price in euros, DDV included. */
  price: number;
};

export type MenuGroup = {
  /** Key into `vinoteka.menu.groups` in the content files. */
  id: string;
  items: MenuItem[];
};

export type MenuSection = {
  /** Key into `vinoteka.menu.sections`. */
  id: string;
  groups: MenuGroup[];
};

export const menu: MenuSection[] = [
  {
    id: 'bar',
    groups: [
      {
        id: 'colnarGlass',
        items: [
          { name: 'Cviček', ml: 100, price: 1.4 },
          { name: 'Dolenjsko belo', ml: 100, price: 1.4 },
          { name: 'Hišno belo', ml: 100, price: 3.0 },
          { name: 'Rosé', ml: 100, price: 3.0 },
          { name: 'Laški rizling', ml: 100, price: 3.5 },
          { name: 'Collis', ml: 100, price: 3.5 },
          { name: 'Modra frankinja', ml: 100, price: 3.5 },
          { name: 'Modra frankinja, iz magnuma', ml: 100, price: 3.5 },
          { name: 'Chardonnay', ml: 100, price: 3.9 },
        ],
      },
      {
        id: 'guestGlass',
        items: [
          { name: 'Modri pinot, Šturm', ml: 100, price: 3.0 },
          { name: 'Sauvignon, Šturm', ml: 100, price: 3.0 },
          { name: 'Rumeni muškat, polsladko, Šturm', ml: 100, price: 3.0 },
          { name: 'Beli pinot, Šturm', ml: 100, price: 3.3 },
          { name: 'Renski rizling, sladko, Šturm', ml: 100, price: 3.5 },
          { name: 'Cabernet sauvignon, Dolfo', ml: 100, price: 3.9 },
          { name: 'Sauvignon, Grubar', ml: 100, price: 4.0 },
          { name: 'Akord, oranžno, Šturm', ml: 100, price: 5.5 },
        ],
      },
      {
        id: 'colnarBottle',
        items: [
          { name: 'Cviček', ml: 1000, price: 13.0 },
          { name: 'Dolenjsko belo', ml: 1000, price: 13.0 },
          { name: 'Hišno belo', ml: 750, price: 20.0 },
          { name: 'Rosé', ml: 750, price: 20.0 },
          { name: 'Laški rizling', ml: 750, price: 24.0 },
          { name: 'Collis', ml: 750, price: 24.0 },
          { name: 'Modra frankinja', ml: 750, price: 24.0 },
          { name: 'Chardonnay', ml: 750, price: 29.0 },
          { name: 'Modri pinot', ml: 750, price: 47.5 },
        ],
      },
      {
        id: 'guestBottle',
        items: [
          { name: 'Modri pinot, Šturm', ml: 750, price: 20.0 },
          { name: 'Rumeni muškat, Šturm', ml: 750, price: 20.0 },
          { name: 'Sauvignon, Šturm', ml: 750, price: 21.0 },
          { name: 'Beli pinot, Šturm', ml: 750, price: 22.0 },
          { name: 'Renski rizling, sladko, Šturm', ml: 750, price: 22.0 },
          { name: '1. Classe Cabernet Sauvignon, Dolfo', ml: 750, price: 25.1 },
          { name: 'Akord, oranžno, Šturm', ml: 750, price: 40.0 },
        ],
      },
      {
        id: 'predikati',
        items: [
          { name: 'Rumeni muškat, jagodni izbor, Šturm', ml: 375, price: 45.0 },
          { name: 'Chardonnay, ledeno vino, Šturm', ml: 375, price: 58.0 },
        ],
      },
      {
        id: 'mixed',
        items: [
          { name: 'Škropec, beli', ml: 100, price: 1.5 },
          { name: 'Škropec, rdeči', ml: 100, price: 1.5 },
          { name: 'Špricar, beli', ml: 200, price: 1.6 },
          { name: 'Špricar, rdeči', ml: 200, price: 1.6 },
          { name: 'Špricar, beli', ml: 2000, price: 15.0 },
          { name: 'Špricar, rdeči', ml: 2000, price: 15.0 },
        ],
      },
      {
        id: 'spirits',
        items: [
          { name: 'Cynar', ml: 30, price: 3.0 },
          { name: 'Gin Brin Virgin, 0 %', ml: 30, price: 3.0 },
          { name: "Gin Martin Miller's", ml: 30, price: 3.2 },
          { name: 'Gin Gunpowder', ml: 30, price: 3.5 },
          { name: 'Gin Brin', ml: 30, price: 4.0 },
          { name: 'Rum Dictador, 12 y. o.', ml: 30, price: 4.5 },
          { name: 'Cognac Tesseron Composition', ml: 30, price: 5.0 },
          { name: 'Rum Dictador, 20 y. o.', ml: 30, price: 6.5 },
          { name: 'Cognac Tesseron X.O.', ml: 30, price: 9.0 },
          { name: 'Tequila Clase Azul Plata', ml: 30, price: 9.8 },
          { name: 'Aperol Spritz', price: 5.9 },
        ],
      },
      {
        id: 'beer',
        items: [
          { name: 'Heineken', ml: 330, price: 2.8 },
          { name: 'Heineken, 0,0 %', ml: 330, price: 2.8 },
          { name: 'Bernard, svetlo', ml: 500, price: 3.4 },
          { name: 'Bernard, temno', ml: 500, price: 3.6 },
        ],
      },
      {
        id: 'soft',
        items: [
          { name: 'Grozdni sok Colnar', ml: 100, price: 1.2 },
          { name: 'Karlovček, jabolčni sok', ml: 100, price: 1.2 },
          { name: 'Dana', ml: 500, price: 2.0 },
          { name: 'Cedevita', ml: 350, price: 2.0 },
          { name: 'Karlovček, sok', ml: 200, price: 2.4 },
          { name: 'Dana, z okusom', ml: 500, price: 2.5 },
          { name: 'Limonada', ml: 300, price: 2.8 },
          { name: 'Coca-Cola', ml: 250, price: 2.9 },
          { name: 'Coca-Cola Zero', ml: 250, price: 2.9 },
          { name: 'Fanta', ml: 250, price: 2.9 },
          { name: 'Cockta', ml: 275, price: 2.9 },
          { name: 'Ledeni čaj', ml: 250, price: 2.9 },
          { name: 'Fever-Tree', ml: 200, price: 3.0 },
          { name: 'Grozdna limonada', ml: 300, price: 3.2 },
          { name: 'Grozdni sok Colnar', ml: 750, price: 7.0 },
        ],
      },
      {
        id: 'hot',
        items: [
          { name: 'Babyccino', price: 1.2 },
          { name: 'Kava', price: 1.5 },
          { name: 'Macchiato', price: 1.6 },
          { name: 'Kava z mlekom', price: 1.7 },
          { name: 'Brezkofeinska kava', price: 1.7 },
          { name: 'Kava s smetano', price: 1.8 },
          { name: 'Cappuccino', price: 1.8 },
          { name: 'Kakav', price: 1.8 },
          { name: 'Brezkofeinski macchiato', price: 1.8 },
          { name: 'Bela kava', price: 1.9 },
          { name: 'Brezkofeinska kava z mlekom', price: 1.9 },
          { name: 'Brezkofeinska kava s smetano', price: 2.0 },
          { name: 'Brezkofeinski cappuccino', price: 2.0 },
          { name: 'Brezkofeinska bela kava', price: 2.1 },
          { name: 'Latte macchiato', price: 2.2 },
          { name: 'Kuhano belo vino', ml: 300, price: 3.2 },
          { name: 'Kuhano rdeče vino', ml: 300, price: 3.2 },
        ],
      },
      {
        id: 'extras',
        items: [
          { name: 'Mleko', price: 0.5 },
          { name: 'Smetana', price: 0.5 },
          { name: 'Med', price: 0.5 },
          { name: 'Limona', price: 0.5 },
          { name: 'Sirup', price: 0.8 },
        ],
      },
    ],
  },
  {
    id: 'home',
    groups: [
      {
        id: 'colnarWines',
        items: [
          { name: 'Cviček', ml: 1000, price: 4.5 },
          { name: 'Dolenjsko belo', ml: 1000, price: 4.5 },
          { name: 'Cviček', ml: 750, price: 5.9 },
          { name: 'Hišno belo', ml: 750, price: 7.9 },
          { name: 'Rosé', ml: 750, price: 10.5 },
          { name: 'Collis', ml: 750, price: 14.9 },
          { name: 'Laški rizling', ml: 750, price: 14.9 },
          { name: 'Modra frankinja', ml: 750, price: 15.5 },
          { name: 'Chardonnay', ml: 750, price: 19.9 },
          { name: 'Modri pinot', ml: 750, price: 35.0 },
          { name: 'Magnum, več vrst', ml: 1500, price: 45.0 },
          { name: 'Modra frankinja, double magnum', ml: 3000, price: 95.0 },
        ],
      },
      {
        id: 'colnarSparkling',
        items: [
          { name: 'Penina', ml: 750, price: 14.9 },
          { name: 'Grand Jaenes', ml: 750, price: 19.9 },
          { name: 'Grand Jaenes Rosé', ml: 750, price: 19.9 },
        ],
      },
      {
        id: 'guestWines',
        items: [
          { name: 'Rebula, Bužinel', ml: 750, price: 12.1 },
          { name: 'Sivi pinot, Herga', ml: 750, price: 12.1 },
          { name: '1. Classe Cabernet Sauvignon, Dolfo', ml: 750, price: 12.1 },
          { name: 'Sauvignon bela, Familija', ml: 750, price: 12.49 },
          { name: 'Rubikon Red, Edi Simčič', ml: 750, price: 13.49 },
          { name: 'Diana, Edi Simčič', ml: 750, price: 14.1 },
          { name: 'Fazan, Doppler', ml: 750, price: 11.2 },
          { name: 'Blanc, Ana Selection', ml: 750, price: 15.5 },
          { name: 'Pinela, Ferjančič', ml: 750, price: 18.0 },
          { name: 'Burja Bela, eko', ml: 750, price: 18.9 },
          { name: 'Sivi pinot Cru, Familija', ml: 750, price: 19.9 },
          { name: 'Renski rizling, Gross', ml: 750, price: 19.99 },
          { name: 'Chardonnay, Sutor', ml: 750, price: 21.49 },
          { name: 'Ribolla Gialla, Erigone', ml: 750, price: 23.9 },
          { name: 'Zala, Erigone', ml: 750, price: 23.9 },
          { name: 'Sauvignon, Grubar', ml: 750, price: 24.9 },
          { name: 'Modri pinot, Herga', ml: 750, price: 25.9 },
          { name: 'Triton Lex, Edi Simčič', ml: 750, price: 26.9 },
          { name: 'Pinot Noir, Domaine Faiveley', ml: 750, price: 26.9 },
          { name: 'Rosé, L’Escarelle', ml: 750, price: 26.9 },
          { name: 'Reddo, Burja', ml: 750, price: 27.9 },
          { name: 'Riesling, Domaine Sparr', ml: 750, price: 28.49 },
          { name: 'Duet, Edi Simčič', ml: 750, price: 30.9 },
          { name: 'Burja Bela, magnum', ml: 1500, price: 36.99 },
          { name: 'Akord, oranžno, Šturm', ml: 750, price: 36.6 },
          { name: 'Cabernet Franc, Gašper', ml: 750, price: 43.2 },
          { name: 'Chablis, Christian Moreau', ml: 750, price: 44.9 },
          { name: 'Aalto', ml: 750, price: 45.9 },
          { name: 'Château Lassègue', ml: 750, price: 46.9 },
          { name: 'Promis, Gaja', ml: 750, price: 51.9 },
          { name: 'Les Hauts de Smith Blanc', ml: 750, price: 56.49 },
          { name: 'Rosé, L’Escarelle, magnum', ml: 1500, price: 64.9 },
          { name: 'Domaine Faiveley', ml: 750, price: 70.49 },
          { name: 'Rebula, Gravner', ml: 750, price: 113.9 },
          { name: 'Château Pontet-Canet', ml: 750, price: 192.9 },
        ],
      },
      {
        id: 'sparkling',
        items: [
          { name: 'Charles Heidsieck, Brut Réserve', ml: 750, price: 65.9 },
          { name: 'Charles Heidsieck, Brut Réserve, darilna', ml: 750, price: 69.95 },
          { name: 'Charles Heidsieck, Rosé Réserve', ml: 750, price: 83.9 },
          { name: 'Pol Roger, Brut Vintage', ml: 750, price: 84.9 },
          { name: 'Pol Roger, Brut, magnum', ml: 1500, price: 125.9 },
          { name: 'Charles Heidsieck, Brut Réserve, magnum', ml: 1500, price: 159.5 },
        ],
      },
      {
        id: 'spiritsHome',
        items: [
          { name: 'Gin Brin Virgin, 0 %', ml: 500, price: 15.49 },
          { name: 'Irish Whiskey Hyde', ml: 700, price: 24.9 },
          { name: 'Pelinkovec Iliriko, Gradisciutta', ml: 700, price: 26.49 },
          { name: 'Gin Brin', ml: 500, price: 29.2 },
          { name: 'Gin Gunpowder', ml: 700, price: 34.9 },
          { name: 'Gin Gunpowder, Panda Edition', ml: 700, price: 37.3 },
          { name: 'Bellevoye Blue', ml: 700, price: 40.49 },
          { name: 'Douglas Laing Scallywag', ml: 700, price: 45.49 },
          { name: 'Rum Dictador, 12 y. o.', ml: 700, price: 46.9 },
          { name: 'Drumshanbo', ml: 700, price: 49.9 },
          { name: 'Rum Dictador, 20 y. o.', ml: 700, price: 69.9 },
          { name: 'Tequila Clase Azul Plata', ml: 700, price: 137.5 },
          { name: 'Rum Dictador, Game Changer', ml: 700, price: 181.9 },
          { name: 'Tequila Clase Azul Reposado', ml: 700, price: 244.9 },
        ],
      },
      {
        id: 'delicacies',
        items: [
          { name: 'Karlovček, jabolčni sok', ml: 1000, price: 2.6 },
          { name: 'Sončnično olje', ml: 100, price: 3.0 },
          { name: 'Karlovček, breskov sok', ml: 1000, price: 3.8 },
          { name: 'Grozdni sok Colnar', ml: 1000, price: 4.0 },
          { name: 'Sončnično olje', ml: 250, price: 4.0 },
          { name: 'Sončnično olje', ml: 500, price: 6.0 },
          { name: 'Liofilizirana jabolka', g: 30, price: 6.2 },
          { name: 'Eko čaj, za njo', price: 6.5 },
          { name: 'Eko čaj, za njega', price: 6.5 },
          { name: 'Granola Lepa Anka', g: 200, price: 6.9 },
          { name: 'Granola Zeleni Jurij', g: 200, price: 6.9 },
          { name: 'Zeliščna sol', g: 80, price: 7.7 },
          { name: 'Berryshka, Jurčičeve kroglice', price: 9.5 },
          { name: 'Berryshka, Srčki', price: 9.5 },
          { name: 'Berryshka, Prefinjeni', price: 9.8 },
          { name: 'Berryshka, Assorted', price: 15.5 },
        ],
      },
      {
        id: 'gifts',
        items: [
          { name: 'Nošenka, enojna', price: 0.9 },
          { name: 'Darilna embalaža, enojna', price: 2.0 },
          { name: 'Darilna embalaža, dvojna', price: 6.0 },
          { name: 'Lesena embalaža, 1 × 0,75 l', price: 10.0 },
          { name: 'Lesena embalaža za penino, 1 × 0,75 l', price: 10.0 },
          { name: 'Lesena embalaža, 2 × 0,75 l', price: 15.0 },
          { name: 'Lesena embalaža, magnum 1 × 1,5 l', price: 15.0 },
          { name: 'Lesena embalaža, 6 × 0,75 l', price: 23.0 },
          { name: 'Riedel Bar Rock Glass, set 2 kozarcev', price: 31.9 },
          { name: 'Coravin Model 6', price: 439.99 },
        ],
      },
    ],
  },
];
