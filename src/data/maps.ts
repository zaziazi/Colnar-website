/**
 * Map links for the estate's three addresses.
 *
 * Searched by address rather than by place id: a search URL keeps working if a
 * listing is renamed, merged or re-registered, and needs no API key.
 */
const search = (address: string) =>
  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;

export const maps = {
  /** The cellar at Lešnica, where the tastings are. */
  cellar: search('Lešnica 8, 8222 Otočec'),
  /** The old zidanica above the vineyards. */
  zidanica: search('Črešnjice 124, 8222 Otočec'),
  /** The wine bar in the Supernova centre in Novo mesto. */
  vinoteka: search('Otoška cesta 5, 8000 Novo mesto'),
};
