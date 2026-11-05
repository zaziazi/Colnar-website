/**
 * Map links for the estate's three addresses.
 *
 * Searched by address rather than by place id: a search URL keeps working if a
 * listing is renamed, merged or re-registered, and needs no API key.
 */
export const search = (address: string) =>
  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;

export const maps = {
  /**
   * The cellar at Lešnica, where the tastings are. Its own Google profile by
   * place id (from the review link), so the link opens the profile, with its
   * reviews and photos, rather than an address search.
   */
  cellar: `${search('Vinska klet Colnar, Lešnica 8, 8222 Otočec')}&query_place_id=ChIJxQHzq34AZUcR2ICwcNJHNMo`,
  /** The old zidanica above the vineyards. */
  zidanica: search('Črešnjice 124, 8222 Otočec'),
  /** The wine bar in the Supernova centre in Novo mesto. */
  vinoteka: search('Otoška cesta 5, 8000 Novo mesto'),
};
