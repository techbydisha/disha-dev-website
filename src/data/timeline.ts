/**
 * The homepage timeline. Newest first — entries render in the order written here.
 *
 * Nothing in this file is real yet except the three case study titles, which link
 * through to their pages. Replace the placeholder entries with your actual
 * milestones: roles, projects, education, anything you want a recruiter to see.
 */

export type EntryKind = 'work' | 'project' | 'study' | 'writing';

export interface TimelineEntry {
  /** Displayed on the timeline, e.g. "2025" or "Mar 2024". Keep it short. */
  date: string;
  title: string;
  /** Employer, school, or project owner. Optional. */
  org?: string;
  /** One or two sentences. This is what someone actually reads. */
  body: string;
  kind: EntryKind;
  /** Links the entry to a case study or anywhere else. Optional. */
  href?: string;
  /** Draws the entry as the current, in-progress item at the top. */
  current?: boolean;
}

export const KIND_LABEL: Record<EntryKind, string> = {
  work: 'Work',
  project: 'Project',
  study: 'Case study',
  writing: 'Writing',
};

export const timeline: TimelineEntry[] = [
  {
    date: 'Now',
    title: 'Looking for my next role',
    body: 'Replace this with what you are doing right now — the role you want, what you are building, or what you are learning.',
    kind: 'work',
    current: true,
  },
  {
    date: 'Add a date',
    title: 'Twenty days to a Microsoft API deprecation',
    org: 'Where this happened',
    body: 'One or two sentences on what this was and why it mattered. The full story lives in the case study.',
    kind: 'study',
    href: '/work/microsoft-api-deprecation',
  },
  {
    date: 'Add a date',
    title: 'Stride: building a financial forecaster with one engineer',
    org: 'Where this happened',
    body: 'One or two sentences on what this was and why it mattered. The full story lives in the case study.',
    kind: 'study',
    href: '/work/stride-financial-forecaster',
  },
  {
    date: 'Add a date',
    title: 'KraftyPawz: a custom ordering flow from user research',
    org: 'Where this happened',
    body: 'One or two sentences on what this was and why it mattered. The full story lives in the case study.',
    kind: 'study',
    href: '/work/kraftypawz-ordering-flow',
  },
  {
    date: 'Add a date',
    title: 'A role, a promotion, or a team you joined',
    org: 'Company name',
    body: 'Timeline entries do not all need case studies behind them. Short entries give the line rhythm and show the shape of your path.',
    kind: 'work',
  },
  {
    date: 'Add a date',
    title: 'Your degree or a certification',
    org: 'School name',
    body: 'One line is enough for an entry like this.',
    kind: 'project',
  },
];
