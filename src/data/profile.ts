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

export interface Certificates {
  period: string;
  credential: string;
  accreditor: string;
  detail?: string;
}

export const roles: Role[] = [
  {
    period: 'May 2026 — Present',
    title: 'Product Manager',
    org: 'Stride (independent product)',
    body: `I run product on Stride, an AI forecasting agent for short-term financial
      planning, and I build it. I own discovery, the PRD, user stories and
      prioritisation, and I prototype flows to validate them before committing build
      time. An engineer worked on the early version and now advises on direction.`,
    tags: ['Discovery', 'PRD', 'Prioritisation', 'Google ADK', 'Gemini', 'React'],
    current: true,
  },
  {
    period: 'Dec 2025 — May 2026',
    title: 'Program Manager',
    org: 'Arctic Wolf',
    body: `I owned the roadmap and delivery for a detection and response integration
      program, aligning Directors, Senior Engineering Managers and the CTO across three
      leadership groups. Quarterly delivery went from 2 of 5 planned integrations to
      full completion plus 2 pulled forward from the next quarter.`,
    tags: ['Roadmap', 'PI planning', 'PMO', 'Aha!', 'Jira', 'Risk & dependencies'],
  },
  {
    period: 'May 2022 — Dec 2025',
    title: 'Software Developer',
    org: 'Arctic Wolf',
    body: `Three and a half years building across the stack, React and TypeScript on
      the front end alongside Python and Go services. I co-led a three-quarter
      decomposition of a monolithic repository, and shipped a click-to-call feature I
      designed after presenting three options with tradeoffs to the product team.`,
    tags: ['Python', 'Go', 'TypeScript', 'React', 'PostgreSQL', 'Elasticsearch', 'AWS'],
  },
  {
    period: 'Mar 2023 — Dec 2025',
    title: 'Chief Operating Officer',
    org: 'The Last Otakus Inc.',
    body: `I ran operations across three e-commerce brands and designed and built the
      ordering experience for kraftypawz.com, extending Shopify with custom code for
      automated fulfilment and personalised orders. I also ran brand and social, and
      launched a 10-person ambassador program.`,
    tags: ['Shopify', 'E-commerce', '0 to 1', 'Brand', 'Ops'],
  },
  // {
  //   period: 'May 2021 — Dec 2021',
  //   title: 'Security Engineer, Co-op',
  //   org: 'Ecobee',
  //   body: `Wrote Go alongside security engineering work, and deployed code and features
  //     using ArgoCD and Kubernetes on GCP.`,
  //   tags: ['Go', 'Kubernetes', 'ArgoCD', 'GCP', 'Docker'],
  // },
  // {
  //   period: 'May 2019 — Aug 2021 · co-op, then part-time',
  //   title: 'Production Engineer',
  //   org: 'BSG Canada',
  //   body: `Ran a shrink-sleeve labelling line for beverage cans. A colleague and I
  //     identified a recurring conveyor congestion fault and proposed the sensor
  //     automation that fixed it, halting the belt on a blockage so cans stopped falling
  //     off the line.`,
  //   tags: ['Manufacturing', 'Automation', 'Sensors', 'Process improvement'],
  // },
];

export const education: Education[] = [
  {
    period: '2025 — 2027 (expected)',
    credential: 'Master of Engineering Management',
    school: 'University of Ottawa',
    detail: `Project Management (PMBOK, stage gates, risk mitigation, stakeholder
      management); Business Intelligence and Performance Management; Creativity and
      Innovation. Currently taking Visual Literacy and User Experience Design
      Principles, and Initiation and Design of Complex Projects and Programs.`,
  },
  {
    period: '2017 — 2022',
    credential: 'BEng, Systems and Computing Engineering (Co-op)',
    school: 'University of Guelph',
  },
];

export const certificates: Certificates[] = [
  {
    period: '2026',
    credential: '5-Day AI Agents Intensive',

    accreditor: 'Google and Kaggle',
  },
  {
    period: '2026',
    credential: 'Certified Scrum Product Owner (CSPO)',
    accreditor: 'Scrum Alliance',
  },
  {
    period: '2025',
    credential: 'AWS Certified Cloud Practitioner',
    accreditor: 'Amazon Web Services',
  },
];

/** Short bio for the About section on the homepage. */
export const about = [
  `I spent three and a half years building full-stack software at a cybersecurity company, 
  then moved into program management and found the part I actually wanted. Writing the stories, 
  arguing the tradeoffs, owning what gets built instead of waiting to be handed a spec.`,
  `Today I run product on Stride, a consumer-facing AI forecasting agent. I own the discovery, 
  the PRD and the prioritisation, and I build it. Before that I ran a small e-commerce business, 
  where I designed the storefront, took it to local popups, and learned what it costs when the unit 
  economics don't work.`,

   
];
