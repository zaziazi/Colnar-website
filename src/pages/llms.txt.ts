import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { getContent, routes, winesFor } from '../i18n';
import { menuIn } from '../data/vinoteka-menu';
import { maps } from '../data/maps';

/*
 * /llms.txt — the estate in plain text, for the assistants that now answer
 * "where can I taste wine near Novo mesto" instead of returning ten blue links.
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

  const menuLines = menuIn('en')
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

  const plain = (text?: string) => (text ?? '').replace(/<!--[\s\S]*?-->/g, '').replace(/\s+/g, ' ').trim();

  const tastingLines = en.tasting.priceGroups
    .flatMap((group) => group.rows.map((row) => `- ${row.name} — ${money(row.price)} ${en.tasting.perPerson}`))
    .join('\n');

  const body = `# Vinska klet Colnar

> A family wine estate in Lešnica pri Otočcu, Dolenjska, Slovenia. The Colnar
> family has farmed these hills since the first records of 1408; every first son
> since 1747 has been named Janez. 16.5 hectares on five sunny sites above the
> Krka valley, 125,000 vines, ${wines.length} wines, a cellar built in 2022, and a wine bar
> in Novo mesto.

Named Kralj cvička — King of Cviček, the region's award for the best cviček —
in 2008, 2014 and 2022.

Legal name: ${sl.legalName}, Lešnica 8, 8222 Otočec. VAT: SI24422363.
The vineyards and the EU-co-funded cellar investment are the family farm's:
JANEZ COLNAR – NOSILEC DOPOLNILNE DEJAVNOSTI NA KMETIJI, VAT SI43099807.
Website: ${url(routes.sl.home)} (Slovenian) · ${url(routes.en.home)} (English)

## Where

- Cellar (tastings, cellar tours, collection): Lešnica 8, 8222 Otočec, Slovenia.
  Open Monday–Friday 7.00–17.00; at weekends by arrangement.
  Phone +386 31 288 724. Map: ${maps.cellar}
- Wine bar "Vinoteka Colnar": Otoška cesta 5, Supernova shopping centre,
  8000 Novo mesto, Slovenia. Open Monday–Saturday 9.00–21.00.
  Phone +386 41 871 425. Map: ${maps.vinoteka}
- Zidanica Colnar (a vineyard cottage for private parties): Črešnjice 124,
  8222 Otočec, Slovenia. Phone +386 31 725 830. Map: ${maps.zidanica}

Email: info@colnar.si
Instagram: https://www.instagram.com/vinskakletcolnar/ (wine bar:
https://www.instagram.com/vinotekacolnar/)
Facebook: https://www.facebook.com/vinskakletcolnar/
Sold online through the distributor Evino: https://www.evino.si/znamke/colnar/

## The wines

${wines
  .map(
    (w) =>
      `### ${w.data.ime}${w.data.zvrst ? ` (${en.wines.kinds[w.data.zvrst] ?? w.data.zvrst})` : ''}\n${url(
        `${routes.en.wines}${w.id.split('/').pop()}/`,
      )}\n${[plain(w.body), w.data.priznanja?.length ? `Awards: ${w.data.priznanja.join('; ')}.` : '', w.data.evino && w.data.cena ? `Price at Evino: €${w.data.cena.toFixed(2)} (${w.data.evino}).` : ''].filter(Boolean).join('\n')}`,
  )
  .join('\n\n')}

Cviček, the speciality of the Dolenjska region, is 60% of what the estate makes.
Each wine has its own page; the list is at ${url(routes.en.wines)}

## Tastings

Three to six wines at the cellar in Lešnica. A cellar tour and a charcuterie
board are optional extras. Booked in advance through the form at
${url(routes.en.tasting)}.

${tastingLines}

Prices include VAT. Payment on site, cash or card.

### Questions guests ask

${en.tasting.faq.items.map((item) => `**${item.q}** ${item.a}`).join('\n\n')}

## The family

${en.home.milestones.map((m) => `- ${m.year}, ${m.kicker}: ${m.copy}`).join('\n')}

More at ${url(routes.en.story)}

## The vineyards

16.5 hectares, 125,000 vines, five sunny sites above the Krka valley facing
the Gorjanci hills. Janez VII and his brother Matjaž expanded the vineyards in
2001. ${url(routes.en.vineyards)}

${en.vineyards.sites.map((site) => `### ${site.name}\n${site.copy.join(' ')}`).join('\n\n')}

## The wine bar price list

Everything below is served or sold at Otoška cesta 5, Novo mesto. Prices are in
euros and include VAT; they are the prices printed at ${url(routes.sl.vinoteka)}.

${menuLines}

## Pages

- ${url(routes.en.home)} — the estate
- ${url(routes.en.story)} — the family's story, from 1408
- ${url(routes.en.wines)} — the wines
- ${url(routes.en.vineyards)} — the five vineyard sites
- ${url(routes.en.vinoteka)} — the wine bar and the full price list
- ${url(routes.en.tasting)} — tastings, prices, and the booking form

Slovenian originals: ${url(routes.sl.home)} · ${url(routes.sl.story)} · ${url(routes.sl.wines)} · ${url(routes.sl.vineyards)} · ${url(routes.sl.vinoteka)} · ${url(routes.sl.tasting)}
`;

  return new Response(body, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
