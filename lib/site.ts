export const site = {
  name: "JuanSe Perea",
  role: "Fullstack Developer",
  url: "https://juanseperea.dev",
  // Hero: one sentence on what you do. Keep it concrete.
  tagline:
    "I design the data layer, build the API, and ship the interface on top.",
  // Hero: one sentence on what you do. Keep it concrete.
  whoami:
    "Who am I, really? Constancy. Self Improvement made person, the one that is step by step, not immediate but inevitable. I'm a happy person learning to be succesful and happier. I also happen to be a Software developer.",
  summary:
    "4+ years working on software as Fullstack. I love learning about software, about how to do it great, secure and useful.",
  location: "Cali, Colombia",
  timezone: "UTC-5 — full overlap with US business hours",
  availability: "Open to remote roles in the US & EU",
  email: "jspbescos15@gmail.com",
  links: {
    linkedin: "https://linkedin.com/in/juanseperea",
    // TODO: point at your GitHub profile once you have public repos worth reading.
    github: "https://github.com/Juanse1595",
  },
  // TODO: drop your current CV at public/cv.pdf
  cv: "/cv.pdf",
};

export const experience = [
  {
    company: "MindCloud",
    role: "Systems Integrator",
    location: "Remote (US)",
    period: "Feb 2026 — Apr 2026",
    blurb:
      "Built integrations connecting Salesforce, NetSuite, HubSpot, QuickBooks and Amazon on a low-code iPaaS, syncing data across CRM, ERP and finance systems for B2B clients.",
    caseStudy: "saas-integrations",
  },
  {
    company: "Aestro Colombia AI SAS",
    role: "Fullstack Developer",
    location: "Remote (Colombia)",
    period: "Nov 2023 — Jan 2026",
    blurb:
      "Designed and owned the multi-tenant database architecture for a legal-tech SaaS. Built the Express/TypeORM API, the React front end attorneys used daily, and the GCP deployment pipeline.",
    caseStudy: "multi-tenant-legal-platform",
  },
  {
    company: "Coderise",
    role: "Fullstack Developer & Mentor",
    location: "Cali, Colombia",
    period: "May 2022 — Nov 2023",
    blurb:
      "Automated business processes with React and TypeScript across frontend and backend. Mentored 80+ students at Holberton School in programming, algorithms and software architecture.",
    caseStudy: null,
  },
];

export const education = [
  {
    school: "Jala University — Fullstack Bootcamp",
    detail: "Top 3 performer. Angular 22, .NET/C#, PostgreSQL, RabbitMQ, DDD.",
    period: "Apr 2026 — Aug 2026",
  },
  {
    school: "Qversity — Data Engineering",
    detail: "Databricks Data Engineer Associate certification.",
    period: "May 2025 — Jul 2025",
  },
  {
    school: "Globant University — Java Backend",
    detail: "OOP, Maven, JUnit, MySQL, JDBC, JPA, Spring, REST APIs.",
    period: "Aug 2024 — Apr 2025",
  },
  {
    school: "Holberton School",
    detail: "9 months, project-based software development training.",
    period: "Jun 2021 — Mar 2022",
  },
  {
    school: "Universidad del Valle",
    detail: "Degree in Business Administration.",
    period: "2016 — 2021",
  },
];

// Grouped by honest depth, not by category. This reads as confidence.
export const stack = [
  {
    label: "Daily",
    items: [
      "TypeScript",
      "React",
      "Node.js / Express",
      "TypeORM",
      "PostgreSQL",
      "MySQL",
      "Tailwind",
      "Git / GitHub",
      "Claude Code",
    ],
  },
  {
    label: "Worked with in production",
    items: [
      "Angular",
      ".NET / C#",
      "Next.js",
      "NestJS",
      "GraphQL (Apollo)",
      "RabbitMQ / MassTransit",
      "Docker",
      "GCP",
      "Azure",
      "Nginx / PM2",
      "GitHub Actions",
      "Supabase",
      "Stripe",
      "SendGrid",
    ],
  },
  {
    label: "Learning",
    items: ["AWS (Cloud Practitioner)", "Python", "MongoDB"],
  },
];
