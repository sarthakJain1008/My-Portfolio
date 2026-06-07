// Centralized portfolio content — sourced from Sarthak Jain's actual resume
export const PROFILE = {
  name: "Sarthak Jain",
  firstName: "Sarthak",
  lastName: "Jain",
  tagline: "Building intelligent systems with AI and customisable software products.",
  shortBio:
    "B.Tech CSE (Data Science) student & freelance engineer shipping AI-powered automations, Spring Boot backends and full-stack platforms for startups and product teams.",
  email: "imsarthakjain00@gmail.com",
  phone: "+91 63756 20702",
  github: "https://github.com/sarthakJain1008",
  linkedin: "https://www.linkedin.com/in/sarthak-jain-a2b887275/",
  location: "Kota, Rajasthan · Remote-first · Available worldwide",
  status: "Open to freelance engagements — 2026",
};

export const NAV_LINKS = [
  { id: "about", label: "About" },
  { id: "skills", label: "Stack" },
  { id: "projects", label: "Work" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
];

export const SKILLS = [
  { name: "Java Spring Boot", category: "Backend", note: "CRM pipelines, REST APIs, schedulers" },
  { name: "Python", category: "Language", note: "Automation, AI agents, data pipelines" },
  { name: "AI Automation", category: "AI/ML", note: "LLM agents, RAG, workflow bots" },
  { name: "React / Next.js", category: "Frontend", note: "SSR apps & component systems" },
  { name: "FastAPI", category: "Backend", note: "Async Python microservices" },
  { name: "MongoDB / PostgreSQL", category: "Data", note: "High-volume storage & indexing" },
  { name: "Docker & Git", category: "DevOps", note: "Containerised delivery pipelines" },
  { name: "Tableau / BI", category: "Data Viz", note: "Self-serve dashboards & insights" },
  { name: "NLP / GenAI", category: "AI/ML", note: "LLMs, embeddings, semantic search" },
];

export const MARQUEE_TECH = [
  "Spring Boot", "Python", "React", "Next.js", "FastAPI", "AI Automation",
  "MongoDB", "PostgreSQL", "Docker", "GenAI", "LangChain", "Tableau",
];

export const PROJECTS = [
  {
    id: "01",
    title: "Etsy Seller Intelligence — Web Scraper & Dashboard",
    summary:
      "High-performance parallelised scraper crawling 335+ Etsy root categories → 5,000+ sub-categories → 290,000+ product listings. Built on Node.js + Apify with multi-worker concurrency, real-time progress tracking and automatic retry. Data stored in a scalable MongoDB pipeline (300K+ records) powering a Tableau dashboard for marketplace analytics.",
    stack: ["Node.js", "Apify", "MongoDB", "Tableau"],
    role: "Lead Engineer",
    year: "2025",
    highlight: "290K+ listings scraped",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1600&q=80",
    link: "https://github.com/sarthakJain1008",
  },
  {
    id: "02",
    title: "PO Email-Automation / AI Expeditor",
    summary:
      "End-to-end automated Purchase Order processing system in Python. Monitors inboxes (Gmail/Outlook APIs), detects PO PDFs with 98%+ accuracy, extracts structured data (PO number, items, quantities, prices) using custom parsers + semantic search, and syncs everything to Google Sheets — reducing manual effort by 95% and processing speed by 500%+.",
    stack: ["Python", "Gmail API", "PDF Parser", "Google Sheets", "OpenAI"],
    role: "AI Automation Developer",
    year: "2025–2026",
    highlight: "95% manual effort cut",
    image:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1600&q=80",
    link: "https://github.com/sarthakJain1008",
  },
  {
    id: "03",
    title: "CRM Lead Ingestion Automation — Digital Intellij",
    summary:
      "Spring Boot + Spring Scheduler pipeline that polls the Meta Graph API via background Cron jobs, syncing social-platform prospects directly into the CRM. Built a smart deduplication engine reducing DB duplicates by 98%, and automated multi-channel outreach (JavaMail + WhatsApp Business API) cutting outreach response time by 70%.",
    stack: ["Java", "Spring Boot", "Spring Security", "Meta Graph API", "Python"],
    role: "Java Spring Developer",
    year: "Feb 2026 – Apr 2026",
    highlight: "70% faster outreach",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1600&q=80",
    link: "https://github.com/sarthakJain1008",
  },
  {
    id: "04",
    title: "Etsy Seller Comparison — Tableau Dashboard",
    summary:
      "Interactive Tableau dashboard visualising top Etsy seller performance metrics — comparative sales insights, ranking patterns and category-level trends. Designed for marketplace intelligence to identify high-performing shops and untapped market opportunities.",
    stack: ["Tableau", "MongoDB", "SQL", "Data Viz"],
    role: "Data Engineer",
    year: "2025",
    highlight: "300K+ records visualised",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1600&q=80",
    link: "https://github.com/sarthakJain1008",
  },
];

export const EXPERIENCE = [
  {
    period: "Feb 2026 — Apr 2026",
    role: "Java Spring & Hibernate Developer",
    org: "Digital Intellij · Delhi, India",
    bullets: [
      "Engineered a lead ingestion automation pipeline using Spring Scheduler + Meta Graph API, eliminating 100% of manual CRM data entry.",
      "Built a deduplication engine that sanitises incoming JSON payloads from REST APIs against active CRM records — reduced DB duplicates by 98%.",
      "Automated multi-channel dispatch (JavaMail + WhatsApp Business API) via async multi-threading, accelerating outreach response time by 70%.",
      "Refactored security using Spring Security + BCrypt; wrote 17+ end-to-end integration test scenarios in Python (openpyxl).",
    ],
  },
  {
    period: "Nov 2025 — Jan 2026",
    role: "AI Automation Developer",
    org: "Denicx · Remote",
    bullets: [
      "Delivered a Python-based Purchase Order processing system cutting manual effort by 95% and boosting processing speed by 500%+.",
      "Integrated Gmail/Outlook APIs, custom PDF parsers and Google Sheets for automated PO detection, data extraction and real-time tracking.",
      "Implemented semantic search and scalable orchestration pipelines handling multiple operational and communication scenarios end-to-end.",
    ],
  },
  {
    period: "Oct 2025 — Present",
    role: "Freelance Software Engineer",
    org: "Self-employed · Remote",
    bullets: [
      "Built a parallelised Node.js + Apify web scraper extracting 290,000+ Etsy product listings across 5,000+ categories with auto-retry and progress tracking.",
      "Designed a MongoDB analytics pipeline indexing 300K+ records, powering Tableau dashboards for marketplace intelligence.",
    ],
  },
  {
    period: "Sep 2023 — Present",
    role: "B.Tech CSE — Data Science Engineering",
    org: "Bennett University · Greater Noida",
    bullets: [
      "Relevant coursework: Data Structures & Algorithms, AI/ML, Data Science, System Design (HLD/LLD).",
      "Ranked 19th at Smart India Hackathon (SIH) in first year.",
      "IT Sub-Head, University Student Council; active GeeksforGeeks campus chapter member.",
    ],
  },
];

export const STATS = [
  { value: "290K+", label: "Records scraped & indexed" },
  { value: "95%", label: "Manual effort cut (PO automation)" },
  { value: "98%", label: "Deduplication accuracy (CRM)" },
  { value: "70%", label: "Faster outreach response time" },
];

export const ACHIEVEMENTS = [
  {
    icon: "🏆",
    title: "SIH Top 19",
    desc: "Ranked 19th nationwide at Smart India Hackathon in first year of college.",
  },
  {
    icon: "⚡",
    title: "500%+ Speed Gain",
    desc: "PO automation system delivered 5× processing speed with 95% manual effort reduction.",
  },
  {
    icon: "🔗",
    title: "Zero Manual Entry",
    desc: "CRM lead pipeline eliminated 100% manual data entry via Meta Graph API + Spring Scheduler.",
  },
  {
    icon: "📊",
    title: "300K Records",
    desc: "Designed MongoDB pipeline storing and indexing 300K+ Etsy product records for live analytics.",
  },
];

export const TESTIMONIALS = [
  {
    quote:
      "Sarthak delivered the automation exactly as scoped — zero manual intervention on PO processing. The accuracy of the PDF parser was impressive.",
    author: "Client, Denicx",
    role: "Operations Lead",
  },
  {
    quote:
      "The CRM pipeline he built saved our sales team hours every day. The deduplication engine alone was worth the engagement.",
    author: "Client, Digital Intellij",
    role: "Head of Sales Technology",
  },
];
