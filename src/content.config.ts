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
      /** Vrstni red na strani. */
      vrstniRed: z.number(),
      /** Slika steklenice. Brez nje vrstica preprosto nima fotografije. */
      slika: image().optional(),
      /** Stran pri distributerju (evino.si). Brez nje ni povezave. */
      evino: z.url().optional(),
    }),
});

export const collections = { wines };
