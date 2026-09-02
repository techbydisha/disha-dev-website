import { defineCollection } from 'astro/content/config';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const work = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/work' }),
  schema: z.object({
    /** Project name. The headline on the case study page, the small label on the homepage. */
    title: z.string(),
    /** One sentence of judgment. The headline on the homepage, the standfirst on the case study. */
    claim: z.string(),
    role: z.string(),
    timeframe: z.string(),
    /** What you owned. Rendered as a list in the margin rail. */
    owned: z.array(z.string()).min(1),
    /** Lower numbers sort first on the homepage. */
    order: z.number().int(),
    /** Drafts are hidden from the homepage and from prev/next, but still build at their URL in dev. */
    draft: z.boolean().default(false),
  }),
});

export const collections = { work };
