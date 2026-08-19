# colnar.si

Spletna stran Vinske kleti Colnar — Lešnica pri Otočcu.

Built from `design_handoff_colnar_site` (the "Colnar winery — homepage" handoff).
Astro, static output, plain CSS, ~250 lines of vanilla JS. No framework runtime,
no analytics, no cookies, nothing fetched from a third party at runtime.

```bash
npm install
npm run dev            # http://localhost:4321
npm run build          # → dist/
npm run preview
npm run check          # astro check (types + template diagnostics)
```

Node 22.12+ (Astro 7 requires it).

## What is here

The site is **bilingual**: Slovenian at the root, English under `/en/`.

| Slovenian | English | |
| --- | --- | --- |
| `/` | `/en/` | The homepage from the handoff, in full — hero, story, timeline, statistics, three cards, quote, locations, Vinoteka, footer. |
| `/vina` | `/en/wines` | The wines, from the content collection. See [Wines](#wines). |
| `/klet` | `/en/cellar` | The cellar at Lešnica. |
| `/vinogradi` | `/en/vineyards` | The vineyards. |
| `/vinoteka` | `/en/wine-bar` | The wine bar in Novo mesto: the full cenik, by category. See [The vinoteka cenik](#the-vinoteka-cenik). |
| `/degustacija` | `/en/tasting` | What a tasting is, the reservation form, then the prices. See [Reservation form](#reservation-form). |

Only `/` was designed. The other five are built out of the same parts — hairline
structure, 4px radius, outlined controls, small caps labels in
`--color-accent-700`.

### Languages

`src/i18n/` holds one content object per language — `sl.ts` and `en.ts`, both
implementing the `Content` type in `types.ts`. **Every user-visible string is in
there or in the wine collection**; no translatable text is left in markup, so
those two files side by side are the whole translation.

Each page is a five-line wrapper around a view in `src/views/`, which takes a
`lang` prop. `/vina` and `/en/wines` render the same `WinesView` — one set of
markup, two languages, so a layout change cannot drift between them.

- **Paths are translated too**, not just the words: `/vina` → `/en/wines`. The
  map is `routes` in `src/i18n/index.ts`, and links are built with
  `route(lang, key)` rather than written out.
- **The EN link in the nav finally does something.** It was designed in from the
  start and inert until now; it points at the *same page* in the other language,
  and reads `SL` on the English side.
- Each page declares `hreflang` for both languages plus `x-default` → Slovenian.
- **Numbers and plurals follow the locale.** 100.000 in Slovenian, 100,000 in
  English, from `document.documentElement.lang`. The form's "N fields still need
  attention" runs through `Intl.PluralRules`, which knows Slovenian counts in
  four — ednina, dvojina, 3–4, then 5 and up — so the dual is handled by the
  platform rather than by a hand-written table.

**What stays Slovenian in English:** the estate's name (*Vinska klet Colnar*),
the wine names, the grape varieties, the place names and the legal name. They are
what is on the label, the road sign and the register — someone looking for
Vinska klet Colnar, for Cviček or for Lešnica needs the same word on both sides,
and one business name across both languages is worth more to a winery in search
than a neat translation.

Everything else is English, including the words that describe a building: the
*zidanica* is the vineyard cottage, the *vinoteka* is the wine bar.

One deliberate exception: the Winery JSON-LD in `Base.astro` keeps
`Vinoteka Colnar` and `Zidanica Colnar` on both language versions, because
structured data should carry the names those businesses are registered and
signposted under, whichever language the page is written in.

### The age gate

`components/AgeGate.astro`, rendered from the layout so it sits on every page.
It asks two things in one act: confirm you are 18 or over, and choose a
language — the two buttons *are* the confirmation, so it is one decision rather
than two. Bilingual throughout, because at that point we do not know which
language the visitor reads. Declining swaps the panel for a polite refusal and
does not let them in.

- **The language buttons go to the counterpart of the current page.** Land on
  `/degustacija/`, choose English, and you arrive at `/en/tasting/` — not the
  homepage.
- **Consent is remembered** in `localStorage` under `colnar:age-ok`, and the
  `gated` class is set in `<head>` before first paint. A returning visitor never
  sees the gate flash; a new one never sees the site flash behind it. Private
  browsing throws on `localStorage`, which is caught — the gate simply asks
  again next time.
- **Its script is inline, in one piece with the markup.** The `gated` class that
  covers the page is set in `<head>`; this is what removes it. As a module that
  failed to load, it would leave a visitor facing a gate that could not open.
- **Deliberately client-side.** The page underneath is served in full, so
  crawlers and anyone without JavaScript get the site rather than a wall — which
  is how these gates are normally built, and what keeps the site indexable.
- Carries the health ministry warning required for alcohol in Slovenia.

### Sub-page rules

All four sub-pages follow these.

1. **The page opens on the photograph, and nothing else.** No bar across the
   top, no second line — `components/PageHero.astro` fills the viewport with the
   photograph under the homepage's radial veil and the title over it in the same
   type treatment as the wordmark.
2. **Then the pane pins and the chrome fades up under the scroll.** The hero is
   sticky inside a `178vh` track (`152vh` on the phone), so the page holds still
   while the standfirst comes in over `p 0.10–0.50` and the nav follows a beat
   behind over `p 0.20–0.68`. Only once both have arrived does the hero release
   into the content. Ramps are in `scripts/motion.js`.
3. **The scroll position is the timeline.** Those values are written straight to
   `element.style`, exactly as on the homepage, so they must not also carry a CSS
   transition — hence the `is-scrubbed` class, which turns the stylesheet's off.
   Pages with a hero pass `<Nav />`, never `<Nav alwaysVisible />`.
4. **The standfirst continues the title** rather than repeating it —
   `DEGUSTACIJA` / `in ogled kleti`, set where the homepage puts `1747`.
5. **Facts run as a list of hairline rows**, name left and figure right
   (`.price-list`), or label left and explanation right (`.detail-list`). Same
   hairline language as the timeline and the stats band, turned vertical.
6. **Only the estate's own words and figures.** Nothing about a wine, a price or
   a duration is inferred.

Without JavaScript the track collapses and the hero is simply a band; reduced
motion does the same, via `is-flat`.

Every nav item now has a page. The homepage card ids (`#vina`, `#degustacija`,
`#vinogradi`) and the `#klet` section id are kept so the handoff's anchors keep
resolving, but the nav and the cards link to the real routes.

## Layout of the source

```
src/
  styles/tokens.css     design tokens — the only file with a raw colour or font stack
  styles/fonts.css      @font-face for the self-hosted Cormorant Garamond + Lora
  styles/site.css       everything else; desktop is the base, phone overrides follow each block
  scripts/motion.js     the whole motion layer (hero rAF + one IntersectionObserver)
  scripts/reservation.js  form validation, submitting state, outcomes
  i18n/                 sl.ts + en.ts — every string on the site, and the route map
  views/                one view per page, rendered once per language
  content/wines/sl|en/  one markdown file per wine per language (see below)
  assets/photos/wines/  bottle shots, keyed and trimmed by scripts/prepare-wine-photos.mjs
  content.config.ts     the wines collection schema
  components/           Nav, Hero, Timeline, Stats, Cards, Vinoteka, Footer,
                        PageHead + CtaBand (shared by the sub-pages)
  layouts/Base.astro    head, meta, OG, Winery JSON-LD, the `js` class gate
  assets/photos/        the five client photographs Astro re-encodes at build
scripts/prepare-photos.mjs   one-off: pulls the photos out of the handoff bundle
```

### Breakpoints

Real media queries, one switch at **760px** and an intermediate step at
**1040px** that drops the 3-up card row to 2-up. The prototypes drove this from
JS off fixed viewport widths; that was a limitation of their authoring format,
and the handoff asks for CSS here.

### Motion

`scripts/motion.js`, and the stylesheet.

- **Hero**: one `requestAnimationFrame`-throttled scroll handler computes
  `p = clamp(-track.top / (trackHeight - vh), 0, 1)` and writes opacity,
  letter-spacing and translate straight to `element.style`. These properties
  carry **no CSS transition** — the scroll position *is* the timeline. Ramps and
  values are the handoff's, desktop and phone variants both.
- **Everything else** is a class toggle (`.is-in`, `.is-visible`) with the
  transition in CSS, so the phone and desktop timings live next to the
  breakpoints they belong to. The timeline stagger is a `--i` index the
  `transition-delay: calc()` reads.
- **Reveals**: one `IntersectionObserver`, `threshold: 0.01`,
  `rootMargin: '0px 0px -4% 0px'`, unobserved once fired, plus the
  reveal-immediately pass for anything within `1.15 × innerHeight` at load.
- **Reduced motion**: reveals render in place, the timeline draws itself
  instantly, and the hero is flattened — the track drops to `100vh` so there is
  no dead scroll, the wordmark/year/links render at full opacity with no scroll
  dependency, and the chrome is present from the start.
- **Without JavaScript** nothing is hidden. The initial hidden state is scoped
  to a `js` class an inline head script sets, so a no-JS visitor gets the whole
  page, statically.

### The sticky hero

`body` uses `overflow-x: clip`, never `overflow-x: hidden`. `hidden` on any
ancestor of the sticky hero turns that element into a scroll container and
silently breaks `position: sticky`, which leaves a blank viewport where the hero
should be. The handoff hit this bug; the comment in `site.css` marks it.

## Photographs

`src/assets/photos/` holds the images the site uses; `astro:assets` re-encodes
them to AVIF and WebP per breakpoint at build, with `width`/`height` set. Page
heroes are eager with `fetchpriority="high"`; the rest are lazy.

`Photos/` is the client's full photo library (~340 MB of originals) and is
git-ignored — it is a source, not an asset. `scripts/prepare-photos.mjs`
regenerates everything from it and from the handoff bundle:

```bash
npm run photos -- /path/to/design_handoff_colnar_site
```

Page headers come from that library, kept at full frame — the crop is an
`object-position` decision in CSS, not baked into the file:

| Page | Photo | |
| --- | --- | --- |
| `/vina` | `IMG_2920.jpeg` | embossed Colnar label |
| `/klet` | `IMG_6575.jpeg` | barrel wall, JC on the heads |
| `/vinogradi` | `IMG_2782.jpeg` | hillside over the valley |
| `/degustacija` | `IMG_8954.jpeg` | two corks on oak — the one exception, turned a quarter **clockwise**. The direction matters: counter-clockwise leaves one cork upside down. |

The cenik on that page — 3/4/5/6 wines at 16/20/24/28 €, narezek and ogled kleti
at 10 € each, **all per person, VAT included** — was given by the estate and
lives in the page's frontmatter. It sits *below* the form, with the payment
terms (on site, cash or card) under it; the prices also appear on the chips in
the form itself, where the choice is made. Note that colnar.si still describes
the cellar tour as part of the tasting; here it is a paid extra, per the estate.

The only real work it does is the Degustacija frame. The handoff shipped that as
`degustacija-miza-crop.png`, a 3.8 MB prototype artifact, and asked for the crop
to be redone properly. `degustacija-miza.jpeg` carries an EXIF rotation — it is
stored 6000×4000 but displays as 4000×6000 portrait — so the script rotates
first, then trims 10% off the top and 24% off the bottom of the displayed image
and re-encodes as JPEG. Result 1600×1584, matching the aspect of the prototype
crop exactly.

`public/og-colnar.jpg` is a 1200×630 crop of the hero photograph, generated by
the same script.

## Type

Cormorant Garamond (300, 400, 300 italic) and Lora (400), self-hosted from the
`@fontsource` packages with `font-display: swap`. Nothing touches Google at
runtime — no third-party request, no GDPR question.

`fonts.css` declares the faces by hand rather than importing @fontsource's
per-subset stylesheets, because those ship without `unicode-range`, and
Slovenian needs both blocks (ASCII from `latin`, č/š/ž from `latin-ext`). With
the ranges spelled out, each file is fetched only for the characters it carries.
Cormorant 600 and Lora italic are in the token set but unused; add a block when
a screen needs one.

## Wines

`src/content/wines/<lang>/*.md` — one file per wine per language, as the handoff
asked for, so a new vintage is a one-file edit. Frontmatter is `ime`, `vrstniRed` and an optional
`zvrst`; **the body of the file is the wine's description**.

```markdown
---
ime: Cviček
zvrst: rdeče
vrstniRed: 1
---

Dva ali trije stavki o vinu.
```

All ten carry a description, the Slovenian taken verbatim from that wine's own
page on colnar.si (`/product/<slug>`), the English translated from it with only light copy-editing — sentence joins,
lower-cased grape names, `l` for litres. Nothing about a wine is invented here.

Nine of the ten also carry `slika` (a bottle shot) and `evino` (the
distributor's product page). Every field is optional and the row adapts: no description and the name
takes the width; no bottle and the photo column collapses on the phone; no
`evino` and there is simply no buy link.

### The logo

`npm run logo` — converts the client's `JC-LOGO-1.pdf` into
`src/assets/brand/jc.svg`, which `components/Logo.astro` inlines.

The PDF is pure vector, with the wordmark already outlined, so it is translated
rather than rasterised: PDF path operators become SVG ones, coordinates are
flipped for SVG's y-down axis, and the two fills keep their own fill-rules —
`f*` is even-odd, and the counters inside the letters depend on the difference.
The viewBox is the exact ink bounds, computed from the true extrema of each
cubic rather than its control points, so the mark has no stray padding.

**The page carries `/Rotate 270`**, which viewers apply on display and which is
easy to miss — ignore it and the mark comes out on its side. The converter
handles all four rotations.

Inlined rather than linked so `fill: currentColor` works: the mark takes the
colour of whatever it sits in, which is why the nav can tint it and darken it on
hover without a second file for dark grounds.

### Bottle shots

`npm run wine-photos` — downloads the nine bottle shots from the distributor's
brand page (evino.si/znamke/colnar), keys the white ground out and trims the
margin, writing PNGs with alpha to `src/assets/photos/wines/`. They sit on the
page ground rather than in a white box.

**Provenance:** these are the distributor's files. The estate confirmed the
photographs are its own and asked for them to be used, and that is the basis on
which they are here. If that ever comes into question, the fix is to replace the
seven PNGs — nothing else refers to evino.si for images.

`dolenjsko-belo` has **no** bottle shot and no buy link: the brand page does not
list it. Still on the distributor and not here: a *grozdni sok* (not a wine), a
magnum modra frankinja and a 1 l hišno belo (both other formats of wines already
listed).

The two Grand Jaenes are sparkling — both 100 % žametna črnina by the classic
method, 20 months on the lees. `zvrst` gained `penina rosé` for the second, so a
rosé sparkling is not labelled the same as a white one.

## The vinoteka cenik

`src/data/vinoteka-menu.ts` — the whole price list, from the estate's own POS
export (*Prodajni artikli — VINOTEKACOLNAR*, 19 August 2026). Prices are that
file's **BRUTO CENA**: the shelf price, DDV included.

The page carries no prose at all, at the owner's instruction: the hero opens
straight onto the cenik. Every category is a `<details>` — shut, the list reads
as a page of fifteen names on hairlines; the header opens it and shuts it
again, and the `+` becomes a `—`. *Na kozarec* and *Na steklenico* each hold
two or three labelled parts — Colnar's own wines, then everybody else's — under
the one header, so a visitor opens a serving size rather than four near-identical
wine categories. No script: `<details>` opens and closes on its
own, the keyboard and screen readers already know it, and the list works
without JavaScript. Address and opening hours follow the list, before the CTA.

The rows sit in `src/data/` rather than in `sl.ts` / `en.ts` because a wine's
name is a wine's name in either language. Only the group and part labels and the
two section labels are translated, under `vinoteka.menu` in the content files,
keyed by each group's `id`. Volumes are stored as millilitres and grams so the
page can format them per locale — `0,75 l` against `0.75 l`.

All 189 articles from the export are on the page, checked against it by
comparing the two price lists item for item. Four judgement calls were made
while transcribing, and each is worth the owner's eye:

- **The four `QL` rows are left off** (`KAVA QL`, `KAVA QL - BELA KAVA`,
  `CAPUCCINO QL`, `KAKAV QL`). They are second, lower prices for drinks already
  on the list, and a public cenik cannot show a coffee at two prices.
- **`COLNAR LAŠKI RIZLING 1L` is listed as 0,75 l**, since its own recipe line
  reads `0,750 Liter COLNAR LAŠKI RIZLING 0,75L`. One of the two is a typing
  slip in the POS.
- **`SON. OLJE` is written out as *Sončnično olje***.
- **Two rows are duplicated in the export** — `ERIGONE - RIBOLLA GIALLA` twice
  and `ERIGONE - ZALA` under two spellings. Each appears once here.

Producers come from the recipe column rather than the article name where the two
differ: `GROS, SAUVIGNON` is poured from `GRUBAR ANTON Sauvignon`, and is on the
page as *Sauvignon, Grubar*.

Gift packaging, the Riedel glasses and the Coravin are their own group at the
foot of the list. They are articles the vinoteka sells, so they are on it — say
if a public cenik should stop at the drinks.

## Addresses

`src/data/maps.ts` holds one Google Maps link per address — the cellar at
Lešnica, the zidanica at Črešnjice, the vinoteka in Novo mesto — and every place
the address is printed links to it: the two locations on the homepage, the
cellar page, the *Kje* block on the tasting page, the vinoteka page, and all
three columns of the footer. They are **search** URLs built from the address
itself rather than place ids, so a renamed or re-registered listing cannot break
them. All open in a new tab.

## Reservation form

`/degustacija` — name, e-mail, phone, preferred date, number of guests, tasting
size (3 / 4 / 6 wines), note. Client-side validation with Slovenian messages
(including the dual, which Slovene needs and most form code gets wrong), a
submitting state, and success/error outcomes.

Set the endpoint in `.env` (see `.env.example`):

```
PUBLIC_FORM_ENDPOINT=https://formspree.io/f/xxxxxxx
```

Anything that accepts a multipart POST and answers 2xx works — a Cloudflare
Pages Function, Netlify Forms, Formspree. The form's `action` is set to the same
URL, so it still posts without JavaScript.

**With no endpoint configured the form validates but cannot send.** It says so
in Slovenian and gives the estate's e-mail and phone, rather than showing a
success message for a reservation that went nowhere. Configure the endpoint
before launch.

## Findability

Two audiences read this site: search engines, and the assistants people now ask
instead of searching. Both want the same thing — plain facts, stated once, in a
form a machine can lift.

**Structured data.** `src/data/schema.ts` builds one `@graph` per page:

| Page | Nodes |
| --- | --- |
| `/` | `Winery`, `WebSite`, `WebPage` |
| `/vina` | + `ItemList` of ten `Product`s — description, photograph, distributor link |
| `/degustacija` | + `Service` with an `Offer` per tasting size and add-on |
| `/vinoteka` | + `BarOrPub`/`LiquorStore` with a `Menu`: 189 `MenuItem`s, each with its price and pour |
| every sub-page | + `BreadcrumbList` |

The `Winery` node carries the address, the VAT number, the founding year, the
three map links, and the vinoteka and zidanica as departments. Everything points
at it by `@id` rather than restating it.

The rule is that **nothing is marked up that the page does not show**. The
tasting offers are the figures in its cenik; the menu is the list itself; the
wines carry no prices, because none are printed there. That is Google's own
condition and it is what keeps the markup honest. The vinoteka's graph is 36 KB
raw and 3.6 KB over the wire — the richest thing on the site, and the reason an
assistant can answer *what does a glass of cviček cost in Novo mesto*.

**`/llms.txt`** — the estate in plain text: who, where, opening hours, the ten
wines, the tasting prices, and the whole cenik. Generated in
`src/pages/llms.txt.ts` from the same content the pages are built from, so it
cannot drift from them. `robots.txt` points at it.

**Titles and descriptions** are 30–60 and 134–165 characters, each naming the
estate, the place, and what is on offer — a description is an answer, not a
teaser.

## Before this goes live

Four things need the owner, not the developer. Every factual question the
handoff left open is now closed: the figures are 20 ha / 100.000 trt / 5 leg,
there are ten wines, and the first planting year is 2001.

1. **Instagram and Facebook are plain text**, because the handoff gave no
   profile URLs. Add `href`s to the Kontakt / Contact column in `src/i18n/sl.ts` and `en.ts`.
2. **Form notifications.** On Netlify the bookings are captured automatically,
   but somebody has to be told about them — Netlify → Forms → Settings → form
   notifications, pointed at info@colnar.si.
3. **Three text tints fall below WCAG AA.** The nav wordmark and the footer
   colophon sit at 55% of `--color-text` (3.63:1) and the nav `EN` at 40%
   (2.40:1), against 4.5:1 required. These are the handoff's own values and are
   reproduced exactly, since the brief says the colours are final. 62% clears
   AA for all three if the owner wants them fixed. Everything else passes:
   body copy runs 6.1–8.6:1, the gold `--color-accent-700` 5.97:1, the labels on
   the dark Vinoteka ground 9.38:1.
4. **Photographs and copy for the five vineyards.** `/vinogradi` names Trška
   gora, Razbore, Grčevje, Ždinja Vas and Vinji vrh, each as a row with an empty
   photo frame reading *Fotografija sledi*. The frames are visible on purpose,
   so an unfinished vineyard reads as pending rather than quietly missing —
   **but they should not go live empty**. Filling one in is two edits at the top
   of `src/pages/vinogradi.astro`: import the photo and set `photo`/`alt`, then
   write `copy`.

## Decisions taken while building

Places where the handoff left a gap, and what was done:

- **The phone "Meni"** is a static label in the prototype, but it is the only
  route to the nav links on a phone. It is a real disclosure button here,
  opening a panel with the four links, styled from the same parts. Solid ground
  rather than the bar's translucency, because it opens over the hero photograph.
- **`EN`** stays an inert `<span>`, exactly as both prototypes have it. The
  handoff offers "stub the route or hide the toggle"; a span is neither a dead
  link nor a change to the design.
- **Links go to routes that exist.** The reservation CTAs point at
  `/degustacija`, and the Vina/Vinogradi links at their pages. What is left as a
  handoff placeholder is "Ponudba vinoteke" → `#degustacija`, which stands in
  for a Vinoteka menu page that does not exist yet.
- **Phone page padding is 22px**, from the phone prototype, not the 20px in the
  handoff's spacing table. The prototype is self-consistent at 22 — the timeline
  spine offset depends on it — and the handoff names it the primary phone
  reference.
- **`--color-error: #8a2f26`** is an addition to the token set. No form was
  designed, and a form needs a state that reads as wrong without leaning on the
  gold. It is the darkest wine red that still clears 4.5:1 on `--color-bg`.
- **The reservation page lists only the klet.** Tastings happen at Lešnica 8,
  not at the zidanica, so the zidanica is not offered as a location there. The
  homepage's "Kje nas najdete" still lists both, as designed — that section is
  about where to find the estate, not where to taste.
- **`/degustacija` copy is the estate's own**, from
  colnar.si/vinarstvo/degustacija-vina, split across three blocks rather than
  run together as one paragraph. Three obvious typos in the source are corrected
  — "najnaprednješi", "veseljm", "poiskusite". Nothing is added.
- **The sub-pages carry no invented copy.** Every sentence is the estate's own,
  moved into context: the wine descriptions come from each bottle's page on
  colnar.si, `/degustacija` from the tasting page there, and "V kleti" pairs the
  2022 milestone with the Degustacija card. Where there was nothing to say, the
  page says nothing rather than filling the space — which is why `/vinogradi` is
  a stats band and five named positions, and no paragraphs.
- **`/klet` does not repeat the homepage's two-location block.** The klet entry
  there is word-for-word that page's own lede, and the zidanica is a different
  building where no tasting happens — so the section carries the address and
  the contact details instead.

The prototypes could not be rendered for a pixel-by-pixel comparison: they
reference a `_ds/classical-…/styles.css` design-system bundle that is not in the
handoff, so without it every token is undefined. The handoff's token table and
the prototypes' inline styles were the reference instead, which is what the
brief intends.

## Deploying

Static output — any host. `npm run build`, publish `dist/`.

Set up for **Netlify**, with everything in `netlify.toml` so nothing has to be
configured in the dashboard: build command, publish directory, Node 22, and
`PUBLIC_FORM_ENDPOINT = "/"`. `public/_headers` caches `/_astro/*` and the fonts
forever — they are fingerprinted — and keeps pages revalidating.

### The site URL

`site` in `astro.config.mjs` reads `process.env.URL`, which Netlify sets at build
time to the main site URL — the `*.netlify.app` subdomain while that is all there
is, and the custom domain the moment one is attached. Canonical URLs, hreflang,
Open Graph and the sitemap all follow it.

**So nothing needs editing when colnar.si is pointed here.** Netlify also 301s
the old subdomain to the custom domain on its own, so anything indexed under the
temporary URL follows across.

`robots.txt` is generated (`src/pages/robots.txt.ts`) rather than static, for the
same reason: its `Sitemap:` line has to follow the deploy URL.

The fallback when `URL` is unset — local builds, other hosts — is
`https://colnar.si`.

### The booking form on Netlify

The form carries `name="rezervacija"`, `data-netlify="true"` and a hidden
`form-name`, which is what Netlify's build scanner looks for — so submissions
land in **Forms** in the dashboard with no backend and no third-party account.

- **Both languages share one form name**, so bookings arrive in a single list; a
  hidden `jezik` field records which side each came from.
- A honeypot (`bot-field`) catches bots without troubling a real visitor.
- Submissions go url-encoded, which is what Netlify expects from an AJAX post —
  and what Formspree and a plain function handler take too.
- **Turn on notifications** in Netlify → Forms → Settings, or the bookings sit in
  the dashboard unread. That is the one thing still to do by hand.

None of this is Netlify-specific from the page's point of view: point
`PUBLIC_FORM_ENDPOINT` at a Formspree URL or a function instead and the same
markup posts there.

### Other hosts

Cloudflare Pages or Vercel: build command `npm run build`, output `dist`, Node
22+, and set `PUBLIC_FORM_ENDPOINT` yourself — neither has a forms service, so
it needs Formspree or a small function.
