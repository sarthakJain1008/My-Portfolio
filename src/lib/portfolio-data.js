// Centralized portfolio content for Sarthak Jain
export const PROFILE = {
  name: "Sarthak Jain",
  firstName: "Sarthak",
  lastName: "Jain",
  tagline: "Building intelligent systems with AI and customisable software products.",
  shortBio:
    "Freelance software developer crafting full-stack platforms, AI-driven automations and analytics dashboards for teams that move fast.",
  email: "imsarthakjain00@gmail.com",
  github: "https://github.com/sarthakJain1008",
  linkedin: "https://www.linkedin.com/in/sarthak-jain-a2b887275/",
  location: "Available worldwide · Remote",
  status: "Available for projects — 2026",
};

export const NAV_LINKS = [
  { id: "about", label: "About" },
  { id: "skills", label: "Stack" },
  { id: "projects", label: "Work" },
  { id: "experience", label: "Journey" },
  { id: "contact", label: "Contact" },
];

export const SKILLS = [
  { name: "Java Spring Boot", category: "Backend", note: "Enterprise APIs at scale" },
  { name: "FastAPI", category: "Backend", note: "Async Python services" },
  { name: "Python", category: "Language", note: "Automation & data" },
  { name: "React", category: "Frontend", note: "Component systems" },
  { name: "Next.js", category: "Frontend", note: "SSR + edge apps" },
  { name: "AI Automation", category: "AI/ML", note: "Agents, RAG, LLM ops" },
  { name: "Automated Workflows", category: "Automation", note: "n8n · Zapier · custom" },
  { name: "Dashboard Creation", category: "Data Viz", note: "Real-time insights" },
  { name: "Data Analytics", category: "Data", note: "ETL · SQL · BI" },
];

export const MARQUEE_TECH = [
  "Spring Boot", "FastAPI", "React", "Next.js", "Python", "AI Automation",
  "Workflows", "Dashboards", "Analytics", "Postgres", "MongoDB", "Docker",
];

export const PROJECTS = [
  {
    id: "01",
    title: "Aurora — AI Workflow Engine",
    summary:
      "Visual workflow builder that lets ops teams compose LLM-powered pipelines with branching, retries and human review.",
    stack: ["Next.js", "FastAPI", "Postgres", "LangGraph"],
    role: "Lead Engineer",
    year: "2025",
    image:
      "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=1600&q=80",
    link: null,
  },
  {
    id: "02",
    title: "Pulse — Realtime Ops Dashboard",
    summary:
      "Operations cockpit aggregating 14 data sources into a single low-latency view with anomaly alerts and SLA scoring.",
    stack: ["React", "Spring Boot", "Kafka", "TimescaleDB"],
    role: "Full-Stack & Data",
    year: "2024",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1600&q=80",
    link: null,
  },
  {
    id: "03",
    title: "Ledger AI — Finance Copilot",
    summary:
      "Conversational analytics agent for SMB finance teams. Natural-language queries over invoices, ledgers and forecasts.",
    stack: ["Python", "FastAPI", "OpenAI", "DuckDB"],
    role: "Founding Engineer",
    year: "2024",
    image:
      "https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=1600&q=80",
    link: null,
  },
  {
    id: "04",
    title: "Forge — Custom CMS Platform",
    summary:
      "Headless CMS tailored for agencies — visual editing, role-based workflows, plug-in marketplace and API-first delivery.",
    stack: ["Next.js", "Spring Boot", "Postgres", "S3"],
    role: "Architect",
    year: "2023",
    image:
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=1600&q=80",
    link: null,
  },
];

export const EXPERIENCE = [
  {
    period: "2024 — Now",
    role: "Independent Software Developer",
    org: "Freelance · Remote",
    bullets: [
      "Designing & shipping AI-first SaaS products and internal tools for startups across fintech, ops and media.",
      "Owning end-to-end delivery: architecture, full-stack build, automated workflows and analytics dashboards.",
    ],
  },
  {
    period: "2023 — 2024",
    role: "Full-Stack Engineer",
    org: "Product Studio",
    bullets: [
      "Built Spring Boot + React platforms serving 50k+ MAUs with realtime data pipelines.",
      "Led the migration of legacy services to event-driven microservices on Kubernetes.",
    ],
  },
  {
    period: "2022 — 2023",
    role: "Software Engineer",
    org: "Early-stage Startup",
    bullets: [
      "Shipped the first AI automation modules — saved customer success teams 30+ hours per week.",
      "Drove the analytics initiative: dashboards, KPIs and self-serve reporting for product and ops.",
    ],
  },
];

export const STATS = [
  { value: "30+", label: "Projects shipped" },
  { value: "12", label: "Industries served" },
  { value: "4 yrs", label: "Building for the web" },
  { value: "99%", label: "Client retention" },
];
