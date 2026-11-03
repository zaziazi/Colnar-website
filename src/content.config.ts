import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
// Not `astro:content`'s re-export — that one is deprecated in Astro 7.
import { z } from 'astro/zod';

/**
 * Vina — ena datoteka na vino.
 *
 * The handoff asked for this so a new vintage is a one-file edit rather than a
 * markup change. The body of each file is the wine's description: leave it
 * empty and the page renders just the name and the category.
 */
const wines = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/wines' }),
  schema: ({ image }) =>
    z.object({
      /** Ime, kot ga beremo na strani. */
      ime: z.string(),
      /** Zvrst. Neobvezno — brez nje se oznaka preprosto ne izpiše. */
      zvrst: z.enum(['belo', 'rdeče', 'rosé', 'penina', 'penina rosé']).optional(),
      /** Vrstni red na strani — čez vse skupine, od prve do zadnje. */
      vrstniRed: z.number(),
      /** Linija, v kateri je vino na strani z vini; vrstni red linij določa stran sama. */
      skupina: z.enum(['jc', 'colnar', 'grand-jaenes']),
      /** Slika steklenice. Brez nje vrstica preprosto nima fotografije. */
      slika: image().optional(),
      /** Stran pri distributerju (evino.si). Brez nje ni povezave. */
      evino: z.url().optional(),
      /**
       * Cena steklenice na evino.si v evrih, z DDV — prepisana ročno, zato jo
       * ob novi ceni ali letniku popravite tudi tu. Brez povezave nima pomena.
       */
      cena: z.number().optional(),

      /*
       * Značilnosti, kot jih navaja distributer. Vsaka je neobvezna: vrstica se
       * izpiše samo, če podatek imamo, tako da vino brez podatkov nima prazne
       * tabele. Vrednosti so brez enot — te doda stran v svojem jeziku.
       */
      /** Slog vina; ključ v `wines.detail.styles`. */
      stil: z
        .enum(['sveze-belo', 'bogato-belo', 'sveze-rdece', 'bogato-rdece', 'rose', 'penece'])
        .optional(),
      /** Letnik. Penine so brez njega. */
      letnik: z.number().int().optional(),
      /** Prostornina steklenice v litrih. */
      volumen: z.number().optional(),
      /** Delež alkohola v odstotkih. */
      alkohol: z.number().optional(),
      /** Priznanja vina, kot se izpišejo v vrstici značilnosti. */
      priznanja: z.array(z.string()).optional(),
    }),
});

export const collections = { wines };
