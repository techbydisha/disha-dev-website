# disha.dev — portfolio

Astro, static output, hand-written CSS. Three dependencies in total: `astro`,
`@astrojs/mdx`, and TypeScript types. No UI library, no CSS framework, no
analytics, no CMS.

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # static output to dist/
npm run preview  # serve dist/ locally
```

## Adding a case study

Drop a new `.mdx` file in `src/content/work/`. The filename becomes the URL:
`src/content/work/stride-financial-forecaster.mdx` → `/work/stride-financial-forecaster`.

```mdx
---
title: "Stride: building a financial forecaster with one engineer"
claim: "One sentence about the decision this project turned on."
role: "Product lead"
timeframe: "Jan–Jun 2025"
owned:
  - "Roadmap and scope"
  - "Vendor evaluation"
  - "The cutover plan"
order: 2
draft: false
---

Body prose starts here. Markdown, with the extras below.
```

Nothing else to touch — the homepage, the prev/next links and the page itself
all read from that file. The schema is enforced at build time in
[`src/content.config.ts`](src/content.config.ts); a missing or misspelled field
fails the build with a message naming the file, rather than shipping a blank.

### The fields

| Field | Notes |
| --- | --- |
| `title` | Project name. The headline on the case study page; the small label above the claim on the homepage. |
| `claim` | **One sentence of judgment** — the decision, not a summary. This is the largest type on the site. |
| `role` | Free text. Shown in the margin rail. |
| `timeframe` | Free text, e.g. `"Mar–Apr 2024"`. |
| `owned` | A list. Rendered as dashed items in the rail. Two to four reads best. |
| `order` | Lower sorts first on the homepage. |
| `draft` | `true` hides it from the homepage and from prev/next. It still builds at its URL, so you can send yourself the link. |

### What you can put in the body

Standard Markdown — `## subheads`, lists, `**bold**`, links — plus:

**A pull quote.** A blockquote gets the pull-quote treatment automatically:

```md
> The sentence a reader should leave with.
```

**An image.** Images run wider than the text column on purpose. Put the file in
`public/images/` and write real alt text describing what the image *shows*:

```html
<figure>
  <img src="/images/cutover-timeline.png" alt="Timeline showing the four migration phases." width="1200" height="675" />
  <figcaption>What the reader should notice about it.</figcaption>
</figure>
```

The prose column is capped at a 66-character measure. Don't widen it — that cap
is the reason the page is readable at 800 words.

## The other pages

- **Homepage** — [`src/pages/index.astro`](src/pages/index.astro). The
  positioning statement is inline HTML at the top; rewrite it in your own words.
- **About** — [`src/pages/about.astro`](src/pages/about.astro). Plain prose
  inside `.prose`. Replace the placeholder paragraphs.
- **Name, résumé path, LinkedIn URL, email** — all in
  [`src/consts.ts`](src/consts.ts). Change them once; the nav and footer follow.
- **Résumé** — replace `public/disha-nagpal-resume.pdf` with your real PDF,
  keeping the filename (or update `SITE.resume` in `src/consts.ts`).
- **Your photo** — replace `public/images/disha.jpg`, keeping the filename. It
  is displayed at a 4:5 crop, so a portrait-orientation file works best; roughly
  800×1000 is plenty. The file there now is a grey placeholder.

## Design

Six colours, two faces, one signature element. All of it lives in
[`src/styles/global.css`](src/styles/global.css), tokens at the top.

| Token | Value | Job |
| --- | --- | --- |
| `--ink` | `#0f0f11` | Page ground (near-black) |
| `--paper` | `#f2f0ea` | Body text, warm off-white |
| `--bright` | `#ffffff` | Headlines |
| `--graphite` | `#9c9aa2` | Metadata, captions |
| `--brass` | `#d9ae57` | The only accent: the hero highlight, link underlines, focus ring, CTA hover |
| `--chalk` | `#2a2a2f` | Hairlines |
| `--sunk` | `#17171b` | The metadata rail on small screens |

Lowest text contrast on the site is 6.4:1, comfortably past the 4.5:1 AA bar.

**Display: Bricolage Grotesque. Body: Newsreader.** Both are self-hosted,
latin-subset, variable `.woff2` files in `public/fonts/` — there is no request
to Google Fonts at runtime. If you ever swap a face, replace the file and the
`@font-face` block; the `--font-display` / `--font-body` tokens do the rest.

The homepage hero is a first-person statement with one phrase wrapped in `<em>`,
which is what turns it gold — that `<em>` is not italic here, it's the accent.

The signature element is the **claim line**: the same sentence is the headline
on the homepage and the standfirst on the case study, with the hierarchy
inverted between the two. If a claim reads like a project summary rather than a
decision, the homepage stops working — that's the one piece of writing the
design depends on.

## Deploying

Vercel builds from GitHub, so **`git push` is the whole publish step.** One-time
setup:

1. Push this repo to GitHub.
2. On [vercel.com](https://vercel.com), **Add New → Project**, import the repo.
3. Vercel detects Astro on its own — framework preset `Astro`, build command
   `npm run build`, output directory `dist`. Accept the defaults and deploy.
4. Add your domain under **Settings → Domains**, then set `site` in
   [`astro.config.mjs`](astro.config.mjs) to that URL (it's a placeholder now;
   it feeds the canonical tags).

After that: every push to `main` deploys to production, and every other branch
or pull request gets its own preview URL.

## The quality floor

Responsive to 360px, visible keyboard focus on every interactive element,
`prefers-reduced-motion` respected (it also unsticks the margin rail), semantic
heading order, a skip link, and text contrast at 4.9:1 or better throughout.
Worth re-checking after you swap in real content — especially alt text on any
image you add.
