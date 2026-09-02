// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

export default defineConfig({
  // TODO(disha): replace with the real domain once Vercel is pointed at it.
  site: 'https://example.com',
  integrations: [mdx()],
  markdown: {
    // Prose is hand-written; no syntax highlighting is needed on this site.
    syntaxHighlight: false,
    smartypants: true,
  },
});
