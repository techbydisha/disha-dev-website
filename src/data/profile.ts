/**
 * Everything about you that isn't a case study lives here.
 * Case studies stay in src/content/work/ — drop in an .mdx file to add one.
 */

export interface Role {
  /** Shown on the timeline, e.g. "2024 — Present" or "Jun 2023 — Dec 2023". */
  period: string;
  title: string;
  org: string;
  /** One or two sentences. What you owned and what changed because of you. */
  body: string;
  /** Optional bullet points for the concrete things you shipped. */
  highlights?: string[];
  /** Optional short list of tools or areas. Rendered as small tags. */
  tags?: string[];
  /** Marks the entry as ongoing — draws the live dot. */
  current?: boolean;
}

export interface Education {
  period: string;
  credential: string;
  school: string;
  detail?: string | string[];
}

export interface Certificates {
  period: string;
  credential: string;
  accreditor: string;
  detail?: string;
}

export interface SkillGroup {
  area: string;
  items: string[];
}

export const roles: Role[] = [
  {
    period: 'May 2026 — Present',
    title: 'Co-founder and Engineer',
    org: 'Stride (independent product)',
    body: `I design, build and ship Stride, an AI-powered financial planning tool that is live
      with early adopters. I write the code end to end, with Claude Code as my primary coding
      partner.`,
    highlights: [
      `Built the web app in React and TypeScript on Firebase (Firestore, Auth, Hosting).`,
      `Integrated Gemini as a conversational tool inside the product.`,
    ],
    tags: ['React', 'TypeScript', 'Firebase', 'Firestore', 'Gemini', 'Claude Code'],
    current: true,
  },
  {
    period: 'Dec 2025 — May 2026',
    title: 'Program Manager',
    org: 'Arctic Wolf',
    body: `Led a business-critical detection and response integration program across a 10-person
      engineering team, working with Directors, Senior Engineering Managers and the CTO.
      Quarterly delivery went from 2 of 5 planned integrations to full completion, plus 2
      pulled forward from the next quarter.`,
    tags: ['Technical delivery', 'Integrations', 'Cross-team planning'],
  },
  {
    period: 'May 2022 — Dec 2025',
    title: 'Software Developer',
    org: 'Arctic Wolf',
    body: `Three and a half years as a full-stack developer on a cybersecurity platform, owning
      features from the UI through the API, the database and the deployment.`,
    highlights: [
      `Built Action Centre, an analyst dashboard, from scratch in React, Node.js and TypeScript
        as one of two engineers, covering the data schema, filtering, pagination and reporting.`,
      `Rebuilt the full CRUD, search and list API for the Notes service and added UUID
        identifiers to the schema, unblocking a 3-quarter monolith decomposition and a
        Python-to-Go migration.`,
      `Designed and shipped click-to-call end to end, from the Zoom integration to the UI and a
        confirmation safeguard, cutting the time support engineers spent placing a call by 50%.`,
      `Turned the feature flag system into a self-serve tool with guardrails and CloudWatch audit
        logging, removing a ticket queue and cutting change friction by 70%.`,
      `Defined the SLIs, SLOs and alerting for the Notes service, with Prometheus metrics in
        Grafana and CloudWatch and PagerDuty alerts routed by severity.`,
      `Deployed through Jenkins, Harness and GitHub Actions on a shared rotation, and contributed
        to the Cypress to Playwright, Vite and EKS migrations.`,
    ],
    tags: [
      'TypeScript',
      'React',
      'Node.js',
      'Go',
      'Python',
      'PostgreSQL',
      'Elasticsearch',
      'AWS',
      'EKS',
      'Prometheus',
      'Grafana',
    ],
  },
  {
    period: 'Mar 2023 — Dec 2025',
    title: 'Chief Operating Officer (part-time)',
    org: 'The Last Otakus Inc.',
    body: `Built the ordering experience for kraftypawz.com by extending Shopify with custom code
      for personalised orders and automated fulfilment. Also built an internal bulk product
      editor on Rails against the Shopify and OpenAI APIs.`,
    tags: ['Shopify', 'Ruby on Rails', 'OpenAI API', 'E-commerce'],
  },
  {
    period: 'May 2021 — Dec 2021',
    title: 'Security Engineer, Co-op',
    org: 'Ecobee',
    body: `Wrote Go alongside security engineering work, and reviewed code for security issues
      across Go, Java and C++.`,
    highlights: [
      `Built and deployed an automated GitHub vulnerability alert application in Go, with
        Terraform for a consistent CLI workflow, Docker and Kubernetes for deployment, ArgoCD for
        continuous delivery, and Prometheus and Grafana for alert metrics.`,
    ],
    tags: ['Go', 'Kubernetes', 'Docker', 'Terraform', 'ArgoCD', 'GCP'],
  },
];

export const skills: SkillGroup[] = [
  {
    area: 'Languages',
    items: ['TypeScript', 'JavaScript', 'Python', 'Go', 'SQL'],
  },
  {
    area: 'Frontend',
    items: ['React', 'Vite', 'HTML/CSS', 'Playwright'],
  },
  {
    area: 'Backend and data',
    items: ['Node.js', 'REST APIs', 'PostgreSQL', 'Elasticsearch', 'Kafka', 'AWS DMS', 'Firebase'],
  },
  {
    area: 'Cloud and delivery',
    items: [
      'AWS',
      'EKS',
      'Kubernetes',
      'Docker',
      'Terraform',
      'Jenkins',
      'GitHub Actions',
      'Harness',
      'ArgoCD',
    ],
  },
  {
    area: 'Observability',
    items: ['Prometheus', 'Grafana', 'CloudWatch', 'PagerDuty', 'SLIs and SLOs'],
  },
  {
    area: 'AI',
    items: ['Gemini', 'Google ADK', 'OpenAI API', 'Claude Code', 'GitHub Copilot'],
  },
];

export const education: Education[] = [
  {
    period: '2017 — 2022',
    credential: 'BEng, Systems and Computing Engineering (Co-op)',
    school: 'University of Guelph',
    detail: [`Data Algorithms`],
  },
  {
    period: '2025 — 2027 (expected)',
    credential: 'Master of Engineering Management',
    school: 'University of Ottawa',
  },
];

export const certificates: Certificates[] = [
  {
    period: '2025',
    credential: 'AWS Certified Cloud Practitioner',
    accreditor: 'Amazon Web Services',
  },
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
];

/** Short bio for the About section on the homepage. */
export const about = [
  `I'm a full-stack developer with 4+ years of building and running production software. At
  Arctic Wolf, a cybersecurity company, I built an analyst dashboard from scratch as one of two
  engineers, rebuilt the API that let us break up a monolith and move services from Python to Go,
  and defined the SLOs and alerting for the service I owned.`,

  `I like owning a feature the whole way down: the interaction, the API contract, the schema, the
  pipeline that ships it and the dashboard that says it is healthy. Most of my best work came from
  that, like turning a ticket queue into a self-serve tool that any engineer could use safely.`,

  `Outside work I keep building. Right now that's Stride, an AI-powered financial planning tool
  in React, TypeScript and Firebase, live with early adopters. AI coding assistants are part of
  my daily loop, and I'm still the one who reviews and owns every line.`,
];
