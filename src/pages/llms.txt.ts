import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { getContent, routes, winesFor } from '../i18n';
import { menu } from '../data/vinoteka-menu';
import { maps } from '../data/maps';

/*
 * /llms.txt — the estate in plain text, for the assistants that now answer
 * "where can I taste wine near Novo mesto" instead of returning ten links.
 *
 * Generated from the same content the pages are built from, so it cannot drift:
 * every figure here is the figure on the page it points at. English, because
 * that is the convention for the file, with the Slovenian names kept as names.
 */
export const GET: APIRoute = async ({ site }) => {
  const url = (path: string) => new URL(path, site).href;
  const sl = getContent('sl');
  const en = getContent('en');

  const wines = (await getCollection('wines', winesFor('en'))).sort(
    (a, b) => a.data.vrstniRed - b.data.vrstniRed,
  );

  const money = (n: number) => `€${n.toFixed(2)}`;
  const size = (item: { ml?: number; g?: number }) =>
    item.ml ? `${item.ml / 1000} l` : item.g ? `${item.g} g` : '';

  const menuLines = menu
    .map((section) => {
      const groups = section.groups
        .map((group) => {
          const parts = group.parts ?? [{ id: null, items: group.items ?? [] }];
          const rows = parts
            .map((part) =>
              [
                part.id ? `  ${en.vinoteka.menu.groups[part.id]}:` : null,
                ...part.items.map(
                  (item) => `  - ${item.name}${size(item) ? `, ${size(item)}` : ''} — ${money(item.price)}`,
                ),
              ]
                .filter(Boolean)
                .join('\n'),
            )
            .join('\n');
          return `### ${en.vinoteka.menu.groups[group.id]}\n${rows}`;
        })
        .join('\n\n');
      return `## ${en.vinoteka.menu.sections[section.id]}\n\n${groups}`;
    })
    .join('\n\n');

  const tastingLines = en.tasting.priceGroups
    .flatMap((group) => group.rows.map((row) => `- ${row.name} — ${money(row.price)} ${en.tasting.perPerson}`))
    .join('\n');

  const body = `# Vinska klet Colnar

> A family wine estate in Lešnica pri Otočcu, Dolenjska, Slovenia. The Colnar
> family has farmed these hills since the first records of 1408; every first son
> since 1747 has been named Janez. Twenty hectares on five sunny sites above the
> Krka valley, 100,000 vines, ten wines, a cellar built in 2022, and a wine bar
> in Novo mesto.

Legal name: ${sl.legalName}. VAT: SI43099807.
Website: ${url(routes.sl.home)} (Slovenian) · ${url(routes.en.home)} (English)

## Where

- Cellar (tastings, cellar tours, collection): Lešnica 8, 8222 Otočec, Slovenia.
  Phone +386 31 288 724. Map: ${maps.cellar}
- Wine bar "Vinoteka Colnar": Otoška cesta 5, Supernova shopping centre,
  8000 Novo mesto, Slovenia. Open Monday–Saturday 9.00–21.00.
  Phone +386 41 871 425. Map: ${maps.vinoteka}
- Zidanica Colnar (a vineyard cottage for private parties): Črešnjice 124,
  8222 Otočec, Slovenia. Phone +386 31 725 830. Map: ${maps.zidanica}

Email: info@colnar.si

## The wines

${wines.map((w) => `- ${w.data.ime}${w.data.zvrst ? ` (${en.wines.kinds[w.data.zvrst] ?? w.data.zvrst})` : ''}`).join('\n')}

Cviček, the speciality of the Dolenjska region, is 60% of what the estate makes.
Full descriptions: ${url(routes.en.wines)}

## Tastings

Three to six wines with a tour of the cellar at Lešnica, with boards of local
charcuterie and cheese. Booked in advance through the form at
${url(routes.en.tasting)}.

${tastingLines}

Prices include VAT. Payment on site, cash or card.

## The vineyards

Twenty hectares, 100,000 vines, five sunny sites above the Krka valley facing
the Gorjanci hills: Trška gora, Razbore, Grčevje, Ždinja Vas, Vinji vrh. First
planted by Janez VII and his brother Matjaž in 2001. ${url(routes.en.vineyards)}

## The cellar

Built in 2022 at Lešnica: grape reception to bottle under one roof. Reds age in
oak, whites in stainless steel, and the Collis in a large acacia cask.
${url(routes.en.cellar)}

## The wine bar price list

Everything below is served or sold at Otoška cesta 5, Novo mesto. Prices are in
euros and include VAT; they are the prices printed at ${url(routes.sl.vinoteka)}.

${menuLines}

## Pages

- ${url(routes.en.home)} — the estate
- ${url(routes.en.wines)} — the ten wines
- ${url(routes.en.cellar)} — the cellar at Lešnica
- ${url(routes.en.vineyards)} — the five vineyard sites
- ${url(routes.en.vinoteka)} — the wine bar and the full price list
- ${url(routes.en.tasting)} — tastings, prices, and the booking form

Slovenian originals live at the same paths without the /en/ prefix.
`;

  return new Response(body, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
