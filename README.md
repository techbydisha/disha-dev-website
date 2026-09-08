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

- **Homepage** — [`src/pages/index.astro`](src/pages/index.astro). The hero
  statement is inline HTML at the top; rewrite it in your own words.
- **Name, résumé path, LinkedIn URL, email** — all in
  [`src/consts.ts`](src/consts.ts). Change them once; the nav and footer follow.
- **Résumé** — replace `public/disha-S-Nath-resume.pdf` with your real PDF,
  keeping the filename (or update `SITE.resume` in `src/consts.ts`).
- **Your photo** — replace `public/images/disha.jpg`, keeping the filename, and
  update `width`/`height` on the `<img>` in `src/pages/index.astro` to match.
  It is displayed at a 4:5 crop, so a portrait file works best. Downscale it to
  around 1000px wide first — it renders at 368px, so anything larger is wasted
  bytes on the slowest part of the page load.

Note that **everything in `public/` is served from the site root**: a file at
`public/images/foo.pdf` is at `/images/foo.pdf`, not `/foo.pdf`. That mismatch
is the usual cause of a link 404ing.

## Design

**Signal** — deep violet ground, vivid pink and violet accents. All of it lives in
[`src/styles/global.css`](src/styles/global.css), tokens at the top.

| Token | Value | Job |
| --- | --- | --- |
| `--bg` | `#140f1e` | Page ground, with two soft radial lights over it |
| `--surface` | `#1d1730` | Cards: timeline entries, projects, education, the rail |
| `--surface-hi` | `#262040` | Card hover |
| `--ink` | `#efe9fa` | Body text |
| `--bright` | `#ffffff` | Headlines |
| `--muted` | `#a99dc4` | Secondary text, captions |
| `--pink` | `#f25da8` | Primary accent: buttons, dates, links, focus ring |
| `--violet` | `#ad85f8` | Secondary accent: orgs, tags, eyebrows |
| `--violet-deep` | `#9b6bf5` | Decorative only — gradients and the timeline spine |
| `--line` | `#302848` | Borders and hairlines |

Lowest text contrast is 5.5:1, well past the 4.5:1 AA bar. `--violet-deep` is
darker than that bar allows for text, which is why it is restricted to gradients.

**Space Grotesk** (display) and **Manrope** (body), self-hosted latin-subset
variable files in `public/fonts/` — 46KB for both, and no request to Google
Fonts at runtime.

Section reveals use CSS `animation-timeline: view()` — no JavaScript. The site
still ships zero JS. Browsers without support show the content normally, and the
animation is skipped entirely under `prefers-reduced-motion`.

## Editing your details

- **Roles, education, certifications, and the short bio** —
  [`src/data/profile.ts`](src/data/profile.ts). Education and certifications share
  one set of `.credentials` styles, so a new entry in either list needs no CSS.
- **Name, location, résumé, email, LinkedIn, GitHub** — [`src/consts.ts`](src/consts.ts).
- **Hero sentence** — [`src/pages/index.astro`](src/pages/index.astro). Whatever
  you wrap in `<em>` picks up the pink-to-violet gradient.

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
