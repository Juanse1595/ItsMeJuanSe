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
    "4+ years working on software as Fullstack. AWS Certified Cloud Practitioner. I love learning about software, about how to do it great, secure and useful.",
  location: "Cali, Colombia",
  timezone: "UTC-5 — full overlap with US business hours",
  availability: "Open to remote, hibrid or on site roles",
  email: "jspbescos15@gmail.com",
  links: {
    linkedin: "https://linkedin.com/in/juanseperea",
    // TODO: point at your GitHub profile once you have public repos worth reading.
    github: "https://github.com/Juanse1595",
  },
  cv: "/cv.pdf",
};

export const experience = [
  {
    company: "MindCloud",
    role: "Systems Integrator",
    location: "Remote (US)",
    period: "Feb 2026 — Apr 2026",
    blurb:
      "Built and deployed integrations connecting Shopify, NetSuite and Amazon on MindCloud's iPaaS, with JavaScript data mappings and API connections syncing CRM, ERP, eCommerce and finance systems for enterprise B2B clients. Left to pursue full-time training at Jala University.",
  },
  {
    company: "Aestro Colombia AI SAS",
    role: "Fullstack Developer",
    location: "Remote (Colombia)",
    period: "Nov 2023 — Jan 2026",
    blurb:
      "Designed the multi-tenant MySQL architecture (migrations, per-user DB switching) behind a legal-tech SaaS serving 15+ fintech/legal clients. Built the Express/TypeORM API, integrations (SendGrid, PDF generation, CSV uploads) that roughly halved recurring document and email work for a team of 5 lawyers, and the React/TypeScript interface attorneys used daily. Deployed on GCP with Nginx, PM2 and Certbot; worked in SCRUM with PRs and code reviews.",
  },
  {
    company: "Coderise",
    role: "Fullstack Developer & Mentor",
    location: "Cali, Colombia",
    period: "May 2022 — Nov 2023",
    blurb:
      "Automated business processes with React and TypeScript across frontend and backend, deploying servers with Nginx and PM2. Mentored 80+ students at the Holberton School by Coderise bootcamp in programming, algorithms and software architecture.",
  },
];

export const projects = [
  {
    name: "QuizArena — AI-powered educational platform",
    detail:
      "Capstone MVP at Jala University. Angular 22 + .NET/C# modular monolith over PostgreSQL (DDD, Clean/Hexagonal), RabbitMQ/MassTransit with the Saga pattern, LLM quiz generation PoC with Ollama, Dockerized and deployed on Azure.",
    period: "Apr 2026 — Aug 2026",
  },
  {
    name: "LitisApp — legal advice platform",
    detail:
      "Freelance. Integrated PayU payments and contributed to the landing page, using Next.js, NestJS, Supabase and Apollo GraphQL.",
    period: "Dec 2024 — Feb 2025",
  },
  {
    name: "US lawyer — attorney website",
    detail:
      "Freelance. Built and delivered the site, including Stripe payments, hosted on Hostinger.",
    period: "Nov 2022 — Jun 2023",
  },
];

export const education = [
  {
    school: "AWS Certified Cloud Practitioner",
    detail:
      "Cloud concepts, architecture, security, billing; core services incl. EC2, S3, RDS, Lambda, IAM, VPC.",
    period: "Oct 2026",
  },
  {
    school: "Jala University — Fullstack Bootcamp",
    detail: "Top 3 performer of the cohort. Angular 22, .NET/C#, PostgreSQL, RabbitMQ, DDD, Clean/Hexagonal architecture, Docker and cloud deployment.",
    period: "Apr 2026 — Aug 2026",
  },
  {
    school: "Qversity — Data Engineering",
    detail: "Data engineering with Python and SQL on DataCamp, plus the Databricks Data Engineer Associate certification.",
    period: "May 2025 — Jul 2025",
  },
  {
    school: "Globant University — Java Backend",
    detail: "OOP, Maven, JUnit, MySQL, JDBC, JPA, Spring, REST APIs.",
    period: "Aug 2024 — Apr 2025",
  },
  {
    school: "Holberton School",
    detail: "9 months, full-time and project-based: C, Python, JavaScript and Linux systems programming.",
    period: "Jun 2021 — Mar 2022",
  },
  {
    school: "Universidad del Valle",
    detail: "Degree in Business Administration.",
    period: "2016 — 2021",
  },
];

// Ordered by honest depth: daily tools first, then production experience, then learning.
// `icon` is the simple-icons export name; items without a brand icon render a monogram.
export const languages = [
  { name: "Claude Code", icon: "siClaude" },
  { name: "TypeScript", icon: "siTypescript" },
  { name: "React", icon: "siReact" },
  { name: "Node.js", icon: "siNodedotjs" },
  { name: "Express", icon: "siExpress" },
  { name: "C#", icon: "siDotnet" },
  { name: "Python", icon: "siPython" },
];

export const stack = [
  { name: "PostgreSQL", icon: "siPostgresql" },
  { name: "MySQL", icon: "siMysql" },
  { name: "Tailwind", icon: "siTailwindcss" },
  { name: "Git", icon: "siGit" },
  { name: "GitHub", icon: "siGithub" },
  { name: "Angular", icon: "siAngular" },
  { name: "Next.js", icon: "siNextdotjs" },
  { name: "NestJS", icon: "siNestjs" },
  { name: "GraphQL", icon: "siGraphql" },
  { name: "Docker", icon: "siDocker" },
  { name: "GCP", icon: "siGooglecloud" },
  { name: "GitHub Actions", icon: "siGithubactions" },
  { name: "AWS" },
  { name: "MongoDB", icon: "siMongodb" },
];
