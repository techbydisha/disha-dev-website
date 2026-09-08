/**
 * Everything about you that isn't a case study lives here.
 * Case studies stay in src/content/work/ — drop in an .mdx file to add one.
 *
 * PLACEHOLDERS: every entry below is a slot, not a fact. Replace them.
 */

export interface Role {
  /** Shown on the timeline, e.g. "2024 — Present" or "Jun 2023 — Dec 2023". */
  period: string;
  title: string;
  org: string;
  /** One or two sentences. What you owned and what changed because of you. */
  body: string;
  /** Optional short list of tools or areas. Rendered as small tags. */
  tags?: string[];
  /** Marks the entry as ongoing — draws the live dot. */
  current?: boolean;
}

export interface Education {
  period: string;
  credential: string;
  school: string;
  detail?: string;
}

export const roles: Role[] = [
  {
    period: '20XX — Present',
    title: 'Your current title',
    org: 'Company name',
    body: 'What you own, who you work with, and the thing you changed. Two sentences is plenty — the case studies carry the detail.',
    tags: ['TypeScript', 'React', 'Go'],
    current: true,
  },
  {
    period: '20XX — 20XX',
    title: 'A previous title',
    org: 'Company name',
    body: 'Replace this with the role that came before. If you were promoted inside one company, list each title as its own entry so the progression is visible.',
    tags: ['Python', 'Postgres'],
  },
  {
    period: '20XX — 20XX',
    title: 'Where you started',
    org: 'Company name',
    body: 'Your first role, an internship, or a co-op. Short is fine this far down the page.',
    tags: ['Java'],
  },
];

export const education: Education[] = [
  {
    period: '20XX — 20XX',
    credential: 'Your degree',
    school: 'University name',
    detail: 'Optional: a specialisation, an honour, or a line about what you focused on.',
  },
  {
    period: '20XX',
    credential: 'A certification',
    school: 'Issuing body',
  },
];

/** Short bio for the homepage. The /about page carries the long version. */
export const about = [
  `Replace this paragraph. Two or three sentences about how you work and what
   you are drawn to — the homepage version of your story, not the whole thing.`,
  `A second paragraph if you want one. Keep the full version for the About page;
   this is the trailer, not the film.`,
];
