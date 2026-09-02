# Portfolio site — build brief

## Context

I'm Disha, a software developer moving into product and technical program
management. I'm actively interviewing for PM, TPM, and EM roles. This site
exists to do one thing: let a hiring manager read two or three case studies
and come away convinced I can both ship and decide.

The audience is a hiring manager or recruiter who found me on LinkedIn and
has about four minutes. They are not looking for a gallery. They are looking
for evidence of judgment.

I write TypeScript, React, Go, and Python. The site being well-built is part
of the argument, so don't hide that.

## Stack and constraints

- Astro, TypeScript, static output. No React unless a component genuinely
  needs interactivity — this site probably has none.
- Content as MDX files in `src/content/`, using Astro's content collections
  with a typed schema. I want to add a case study by dropping in a file.
- Deploys to Vercel from a GitHub repo. Set it up so `git push` is the only
  publish step.
- Keep dependencies near zero. No UI library, no CSS framework, no icon
  package, no animation library. Hand-written CSS.
- No CMS, no auth, no contact form backend, no third-party analytics.
- Self-host any web fonts in `public/fonts/` — no Google Fonts CDN call.

## Structure

- `/` — hero, a short positioning statement, three case study cards, a link
  to the resume PDF and LinkedIn.
- `/work/[slug]` — case study template. Needs to comfortably hold 800 words
  of prose plus subheads, a metadata block (role, timeframe, what I owned),
  and the occasional inline image or pull quote.
- `/about` — one page, prose, no timeline graphic.
- Resume PDF served from `public/`, linked in the nav.

Scaffold three case studies with real titles and lorem-length placeholder
bodies. I'm writing the actual prose myself — do not draft it, and do not
invent metrics, employers, or outcomes anywhere on the site. Placeholder
titles:

1. "Twenty days to a Microsoft API deprecation"
2. "Stride: building a financial forecaster with one engineer"
3. "KraftyPawz: a custom ordering flow from user research"

## Design

Propose a design plan before you write any code, and wait for me to approve
it. I want: a palette of 4–6 named hex values, a display face and a body face
chosen deliberately and paired, a type scale, a one-paragraph layout concept
with an ASCII wireframe of the homepage and the case study page, and the one
signature element the site will be remembered by.

Direction I care about:

- This is a reading site. Measure, leading, and hierarchy matter more than
  anything else. A case study page should be genuinely pleasant to read at
  length on a laptop and on a phone.
- Typography carries the personality. Don't use the same faces you'd reach
  for on any other portfolio.
- Restraint. One bold move, everything else quiet. Cut decoration that isn't
  doing a job.

Explicitly avoid, because they read as defaults rather than choices: cream
background with a high-contrast serif and a terracotta accent; near-black
with one acid-green or vermilion accent; gradient anything; 01 / 02 / 03
numbered section markers; a skills grid of technology logos; animated
counters; "Hi, I'm Disha 👋"; a dark-mode toggle.

Quality floor, unannounced: responsive to 360px, visible keyboard focus
states, `prefers-reduced-motion` respected, semantic headings, real alt text,
Lighthouse accessibility at 100.

## How I want to work

1. Propose the design plan. Stop. I'll respond.
2. Once approved, scaffold the project and get `npm run dev` working. Commit.
3. Build the homepage. Show me a screenshot before moving on.
4. Build the case study template with one placeholder study filled in.
   Screenshot again.
5. Fill in the remaining pages, then write a short `README.md` explaining how
   I add a new case study and how deploys work.

Ask me before adding any dependency. If something in this brief is
underspecified, pick a reasonable answer and tell me what you picked rather
than stopping to ask — except on the design plan, where I want the checkpoint.
