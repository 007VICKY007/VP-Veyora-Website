// Static data fallbacks for VP Enterpriceses when DB is not reachable or empty.

export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  category: string;
  description: string;
  icon: string;
  features: string[] | string;
  techStack?: string[] | string;
}

export interface PortfolioItem {
  id: string;
  slug: string;
  title: string;
  category: string;
  client: string;
  description: string;
  challenge: string;
  solution: string;
  results: Record<string, string> | string;
  imageUrl: string;
  websiteUrl?: string | null;
  featured: boolean;
}

export interface BlogItem {
  id: string;
  slug: string;
  title: string;
  content: string;
  excerpt: string;
  coverImage: string;
  author: string;
  readTime: string;
  tags: string[] | string;
  published: boolean;
  publishedAt?: string | Date | null;
  createdAt?: string | Date;
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  company: string;
  feedback: string;
  rating: number;
  avatarUrl?: string | null;
  featured: boolean;
}

export interface CareerItem {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  description: string;
  requirements: string[] | string;
  benefits: string[] | string;
  status: "OPEN" | "CLOSED";
}

export interface PricingPlanItem {
  id: string;
  name: string;
  price: string;
  billingPeriod: string;
  description: string;
  features: string[] | string;
  buttonText: string;
  buttonUrl: string;
  featured: boolean;
}

export const fallbackServices: ServiceItem[] = [
  {
    id: "s1",
    slug: "ai-machine-learning",
    title: "AI & Machine Learning Solutions",
    category: "Artificial Intelligence",
    description: "Deploy custom machine learning models, natural language classifiers, and predictive analytics engines built to process complex business data.",
    icon: "Brain",
    features: [
      "Predictive Analytics",
      "Natural Language Processing",
      "Anomaly & Fraud Detection",
      "Model Optimization & Tuning"
    ],
    techStack: ["TensorFlow", "PyTorch", "Python", "Scikit-Learn", "Hugging Face"]
  },
  {
    id: "s2",
    slug: "custom-software",
    title: "Custom Software Development",
    category: "Software Development",
    description: "Tailor-made software architectures engineered from the ground up to support unique business requirements and scalable operations.",
    icon: "Code",
    features: [
      "Bespoke Architectures",
      "High-Concurrency Backend APIs",
      "Modular Database Design",
      "Robust Integrations"
    ],
    techStack: ["Node.js", "Python", "TypeScript", "PostgreSQL", "MongoDB"]
  },
  {
    id: "s3",
    slug: "enterprise-web-apps",
    title: "Enterprise Web Applications",
    category: "Software Development",
    description: "High-performance, secure web applications built to coordinate complex workflows and serve millions of active users globally.",
    icon: "Globe",
    features: [
      "Custom Admin Hubs",
      "Multi-Tenant Platforms",
      "Real-Time Collaboration Tools",
      "Granular Access Controls"
    ],
    techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Prisma"]
  },
  {
    id: "s4",
    slug: "mobile-apps",
    title: "Mobile App Development",
    category: "Software Development",
    description: "Build immersive, cross-platform and native mobile experiences that run smoothly on iOS and Android platforms.",
    icon: "Smartphone",
    features: [
      "Cross-Platform Optimization",
      "Offline-First Support",
      "Biometric Authentication",
      "Push Notification Pipelines"
    ],
    techStack: ["React Native", "Flutter", "Swift", "Kotlin", "Firebase"]
  },
  {
    id: "s5",
    slug: "cloud-devops",
    title: "Cloud Computing & DevOps",
    category: "Cloud Solutions",
    description: "Scale your software seamlessly with robust cloud architectures, automated deployments, and continuous system monitoring.",
    icon: "Cloud",
    features: [
      "AWS & Google Cloud Setup",
      "Docker & Kubernetes Deployment",
      "CI/CD Deployment Pipelines",
      "Auto-Scaling & Load Balancing"
    ],
    techStack: ["AWS", "Google Cloud", "Docker", "Kubernetes", "GitHub Actions", "Terraform"]
  },
  {
    id: "s6",
    slug: "cybersecurity-services",
    title: "Cybersecurity Services",
    category: "Cybersecurity",
    description: "Protect your corporate networks and web assets with comprehensive security checks, ethical hacking audits, and zero-trust guidelines.",
    icon: "ShieldAlert",
    features: [
      "Penetration Testing & Auditing",
      "Vulnerability Scanning",
      "Identity & Access Management",
      "Threat Response Planning"
    ],
    techStack: ["Kali Linux", "Burp Suite", "OWASP ZAP", "Wireshark", "Nmap"]
  },
  {
    id: "s7",
    slug: "erp-crm-solutions",
    title: "ERP & CRM Solutions",
    category: "Business Software",
    description: "Align your internal operations and customer relationships with highly customizable enterprise management software.",
    icon: "Briefcase",
    features: [
      "Operational Resource Management",
      "Customer Lifecycle Tracking",
      "Automated Sales Pipelines",
      "Finance & HR Modules"
    ],
    techStack: ["Odoo", "Salesforce API", "PostgreSQL", "Node.js", "React"]
  },
  {
    id: "s8",
    slug: "business-automation",
    title: "Business Process Automation",
    category: "AI Automation",
    description: "Connect your fragmented systems, automate administrative jobs, and eliminate manual entry using cognitive workflow bots.",
    icon: "Cpu",
    features: [
      "Cross-App API Workflows",
      "Email & Document Automation",
      "Database Synchronization",
      "Error Handling & Logging"
    ],
    techStack: ["n8n", "Make.com", "Zapier", "WhatsApp API", "Resend"]
  },
  {
    id: "s9",
    slug: "digital-transformation",
    title: "Digital Transformation Consulting",
    category: "IT Consulting",
    description: "Bridge the gap between modern technology capabilities and actual business outcomes with comprehensive system blueprints.",
    icon: "Target",
    features: [
      "Legacy System Auditing",
      "Technology Stack Modernization",
      "Strategic Roadmap Planning",
      "Change Management Guidance"
    ],
    techStack: ["ITIL", "Enterprise Architecture", "Agile Roadmap", "Blueprinting"]
  },
  {
    id: "s10",
    slug: "ui-ux-design",
    title: "UI/UX Design",
    category: "Software Development",
    description: "Create intuitive user journeys and highly interactive wireframes designed to optimize engagement and customer conversions.",
    icon: "Eye",
    features: [
      "User Persona Development",
      "Wireframing & Prototyping",
      "Interactive Micro-Animations",
      "Design System Implementation"
    ],
    techStack: ["Figma", "Adobe XD", "Tailwind CSS", "Framer Motion"]
  },
  {
    id: "s11",
    slug: "data-analytics",
    title: "Data Analytics & Business Intelligence",
    category: "Data Engineering",
    description: "Transform raw databases into beautiful dashboards and key performance metrics that support executive decision making.",
    icon: "BarChart3",
    features: [
      "Executive BI Dashboards",
      "Data Pipelines & ETL",
      "Predictive Trend Analysis",
      "Key Metric Tracking"
    ],
    techStack: ["Power BI", "Tableau", "Apache Spark", "Snowflake", "Python"]
  },
  {
    id: "s12",
    slug: "it-consulting",
    title: "IT Consulting",
    category: "IT Consulting",
    description: "Navigate complex vendor reviews, architectural patterns, and IT budgets with seasoned systems consultant guidance.",
    icon: "Compass",
    features: [
      "Architecture Advisory",
      "SLA & Vendor Evaluations",
      "Capacity Planning",
      "Disaster Recovery Strategy"
    ],
    techStack: ["TOGAF", "Cloud Architecture", "Disaster Recovery", "System Scaling"]
  },
  {
    id: "s13",
    slug: "saas-development",
    title: "SaaS Product Development",
    category: "Software Development",
    description: "Turn your business logic into a scalable, secure software-as-a-service application ready to onboard worldwide tenants.",
    icon: "Code",
    features: [
      "Multi-Tenant DB Partitioning",
      "Stripe Billing Subscriptions",
      "Self-Serve Account Setup",
      "Global API Gateways"
    ],
    techStack: ["Next.js", "Node.js", "Stripe API", "PostgreSQL", "Auth0"]
  },
  {
    id: "s14",
    slug: "api-integration",
    title: "API Development & System Integration",
    category: "Software Development",
    description: "Connect disparate legacy software, external SaaS tools, and local databases with robust, clean API interfaces.",
    icon: "Link",
    features: [
      "RESTful & GraphQL Design",
      "Secure Middleware Bridges",
      "Webhooks & WebSockets",
      "Thorough API Documentation"
    ],
    techStack: ["Fastify", "Express", "GraphQL", "Swagger", "Postman"]
  },
  {
    id: "s15",
    slug: "qa-testing",
    title: "Quality Assurance & Testing",
    category: "Software Development",
    description: "Ensure software durability and code correctness with comprehensive automated testing scripts and performance profiling.",
    icon: "Check",
    features: [
      "End-to-End Test Automation",
      "Load & Stress Testing",
      "API Contract Validation",
      "Regression Suite Integration"
    ],
    techStack: ["Playwright", "Cypress", "Jest", "Postman", "K6"]
  },
  {
    id: "s16",
    slug: "managed-it-services",
    title: "Managed IT Services",
    category: "IT Consulting",
    description: "Delegate infrastructure health checks, system monitoring, and hardware support to dedicated network specialists.",
    icon: "ShieldAlert",
    features: [
      "24/7 Server Monitoring",
      "Automatic Security Patches",
      "Database Backup Routines",
      "Network Support Tickets"
    ],
    techStack: ["Nagios", "Datadog", "AWS CloudWatch", "Prometheus"]
  },
  {
    id: "s17",
    slug: "technical-support",
    title: "Technical Support & Maintenance",
    category: "Software Development",
    description: "Keep your operational platforms running optimally with regular software revisions, bug fixes, and performance updates.",
    icon: "Cpu",
    features: [
      "Preventative Maintenance",
      "Incident SLA Response",
      "Legacy Bug Investigation",
      "Database Performance Tuning"
    ],
    techStack: ["Git", "Prisma", "Jira", "Sentry", "AWS Console"]
  },
  {
    id: "s18",
    slug: "digital-marketing-technology",
    title: "Digital Marketing Technology",
    category: "Digital Marketing",
    description: "Enhance marketing reach with targeted SEO pipelines, lead capture automation, and clean client data analytics.",
    icon: "Megaphone",
    features: [
      "Search Engine Optimization",
      "Marketing Lead Integration",
      "Analytics Tracking",
      "Automated Ad Campaigns"
    ],
    techStack: ["Google Analytics 4", "Semrush", "Meta Ads Manager", "Google Ads"]
  },
  {
    id: "s19",
    slug: "ecommerce-solutions",
    title: "E-commerce Solutions",
    category: "Software Development",
    description: "Deploy high-conversion retail frameworks, custom digital storefronts, and secure payment processing pipelines.",
    icon: "Globe",
    features: [
      "Inventory Sync Pipelines",
      "Multiple Payment Gateways",
      "Order Processing Workflows",
      "Customer Coupon Logic"
    ],
    techStack: ["Shopify API", "Next.js", "Stripe", "PostgreSQL", "Algolia"]
  },
  {
    id: "s20",
    slug: "startup-consulting",
    title: "Startup Technology Consulting",
    category: "IT Consulting",
    description: "Support early-stage companies with rapid MVP blueprinting, product architecture design, and investor pitch deck reviews.",
    icon: "Target",
    features: [
      "MVP Scoping & Mapping",
      "Rapid Wireframe Feedback",
      "Scalable Technology Choice",
      "Technical Feasibility Check"
    ],
    techStack: ["Agile MVP", "Next.js", "Firebase", "PostgreSQL"]
  },
  {
    id: "s21",
    slug: "corporate-training",
    title: "Corporate Training",
    category: "IT Consulting",
    description: "Level up your internal software engineers and managers with rigorous workshops covering AI, cloud, and modern programming.",
    icon: "Brain",
    features: [
      "Generative AI Workshops",
      "DevOps & Cloud Architecture",
      "Modern Web Frameworks",
      "Cybersecurity Best Practices"
    ],
    techStack: ["React 19", "Next.js 15", "Kubernetes", "Prompt Engineering"]
  },
  {
    id: "s22",
    slug: "recruitment-technology",
    title: "Recruitment Technology Solutions",
    category: "Business Software",
    description: "Streamline talent acquisition with applicant tracking databases, cognitive resume parser pipelines, and interview schedulers.",
    icon: "Briefcase",
    features: [
      "Applicant Tracking Systems",
      "AI Resume Ingestion",
      "Automated Interview Invites",
      "HR Onboarding Checklists"
    ],
    techStack: ["Node.js", "React", "PostgreSQL", "OpenAI API"]
  },
  {
    id: "s23",
    slug: "import-export-software",
    title: "Import & Export Management Software",
    category: "Business Software",
    description: "Track international custom logs, freight details, transport manifests, and global compliance regulations smoothly.",
    icon: "Globe",
    features: [
      "Customs Documentation Log",
      "Freight Cost Analysis",
      "Tariff Rule Ingestion",
      "Vendor License Tracking"
    ],
    techStack: ["TypeScript", "PostgreSQL", "n8n", "AWS S3"]
  },
  {
    id: "s24",
    slug: "supply-chain-logistics",
    title: "Supply Chain & Logistics Software",
    category: "Business Software",
    description: "Optimize shipping networks, import logs, carrier configurations, and shipping delays with intelligent software.",
    icon: "Compass",
    features: [
      "Carrier API Integrations",
      "Real-Time Tracking Logs",
      "Shipping Rate Optimization",
      "Delays Notification Bot"
    ],
    techStack: ["Node.js", "React", "PostgreSQL", "Mapbox API"]
  },
  {
    id: "s25",
    slug: "warehouse-management",
    title: "Warehouse Management Systems",
    category: "Business Software",
    description: "Organize bin configurations, barcode scan updates, stock shelf layouts, and physical warehouse operations in real time.",
    icon: "Cpu",
    features: [
      "Barcode Scanning Software",
      "Bin Location Configuration",
      "Stock Inward/Outward Log",
      "Inventory Level Alerts"
    ],
    techStack: ["React Native", "Express", "PostgreSQL", "Zebra Scanner API"]
  },
  {
    id: "s26",
    slug: "fleet-management",
    title: "Fleet Management Solutions",
    category: "Business Software",
    description: "Monitor commercial vehicles, vehicle maintenance tasks, driver hours, and route optimization routines.",
    icon: "Compass",
    features: [
      "GPS Vehicle Coordinates Map",
      "Fuel Consumption Logs",
      "Maintenance Schedule Alerts",
      "Driver Dispatch Dispatcher"
    ],
    techStack: ["Node.js", "Flutter", "PostgreSQL", "Google Maps API"]
  },
  {
    id: "s27",
    slug: "inventory-procurement",
    title: "Inventory & Procurement Systems",
    category: "Business Software",
    description: "Keep purchase orders, stock levels, vendor lists, and inventory valuations synchronized automatically.",
    icon: "Briefcase",
    features: [
      "Auto Purchase Order Creation",
      "Vendor Catalog Management",
      "Average Cost Valuation",
      "Stock Level Thresholds"
    ],
    techStack: ["Next.js", "Prisma", "PostgreSQL", "Node.js"]
  },
  {
    id: "s28",
    slug: "business-management",
    title: "Business Management Software",
    category: "Business Software",
    description: "Unify company operations, task calendars, billing details, and staff profiles inside a secure business dashboard.",
    icon: "Target",
    features: [
      "Task Assignment Board",
      "Billing & Invoice Modules",
      "Staff Profile Directory",
      "Expense Request Approvals"
    ],
    techStack: ["Next.js", "Tailwind CSS", "PostgreSQL", "Prisma"]
  },
  {
    id: "s29",
    slug: "enterprise-digital-solutions",
    title: "Enterprise Digital Solutions",
    category: "Business Software",
    description: "Custom software solutions engineered to scale large corporate operations, integrate disparate APIs, and secure data pipelines.",
    icon: "Code",
    features: [
      "Multi-Region Data Pipelines",
      "Unified LDAP/SSO Auth",
      "Legacy Database Modernization",
      "Custom API Integrations"
    ],
    techStack: ["Next.js", "AWS", "PostgreSQL", "Docker", "Node.js"]
  }
];

export const fallbackPortfolio: PortfolioItem[] = [
  {
    id: "p1",
    slug: "enterprise-ai-automation-engine",
    title: "Enterprise AI Automation Engine",
    category: "AI Automation",
    client: "Alpha Logistics",
    description: "Automating invoice processing and logistics workflow using n8n and Generative AI, reducing manual processing time by 85%.",
    challenge: "Client processed 10,000+ invoices manually every month, causing shipping delays, manual errors, and high operational costs.",
    solution: "Built an end-to-end automated pipeline using n8n, OpenAI API, and custom Document AI to ingest, categorize, extract fields, and write into the core ERP.",
    results: {
      "Time Saved": "85%",
      "Accuracy": "99.2%",
      "Monthly Savings": "₹4,50,000",
      "ROI achieved": "300% in 3 Months"
    },
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
    featured: true
  },
  {
    id: "p2",
    slug: "global-saas-platform-edtech",
    title: "Global SaaS Platform for EdTech",
    category: "Software Development",
    client: "EduLearn Inc",
    description: "A comprehensive SaaS platform built using Next.js, PostgreSQL, and Node.js for managing online classrooms, curriculum, and billing.",
    challenge: "Existing student management systems were sluggish, non-responsive, and crashed when active concurrent sessions exceeded 5,000.",
    solution: "Re-architected the web application as a Next.js single-page application with microservices, leveraging AWS RDS PostgreSQL replication and Redis caching.",
    results: {
      "Daily Active Users": "50,000+",
      "Response Latency": "<100ms",
      "Server Resource Cost": "-40%",
      "System Uptime": "99.99%"
    },
    imageUrl: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80",
    websiteUrl: "https://edulearn-demo.vpenterprises.in",
    featured: true
  },

];

export const fallbackBlogs: BlogItem[] = [
  {
    id: "b1",
    slug: "gen-ai-enterprise-automation-2026",
    title: "How Generative AI is Transforming Enterprise Automation in 2026",
    author: "Vignesh Pandiya",
    excerpt: "An in-depth look at how businesses can leverage Generative AI and low-code orchestrators to automate complex decision-making workflows.",
    content: `Generative AI has evolved from simple text generation to autonomous reasoning agents capable of orchestrating full workflows. In 2026, enterprises are moving away from rigid robotic process automation (RPA) towards flexible, cognitive automation.

### The Shift from RPA to Cognitive Agents
Traditional automation required static rules. If an invoice layout changed by a pixel, the automation broke. Today, custom Large Language Models (LLMs) can read document semantics, understanding context rather than coordinates.

### Key Platforms
Integrating LLMs with tools like n8n, Make.com, or custom Node.js scripts allows companies to chain tasks:
1. **Ingest**: File uploads, emails, or API payloads.
2. **Understand**: LLM extracts metadata, detects intent, and determines correct routes.
3. **Act**: Write to database, send email notifications, or hit internal APIs.

VP Enterpriceses specializes in building these smart orchestration pipelines, enabling companies to focus on strategic decisions rather than administrative inputs.`,
    readTime: "5 min read",
    tags: ["AI", "Automation", "Enterprise"],
    coverImage: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=800&q=80",
    published: true,
    publishedAt: "2026-07-25T12:00:00Z",
    createdAt: "2026-07-25T12:00:00Z"
  },
  {
    id: "b2",
    slug: "securing-nextjs-applications-checklist",
    title: "Securing Next.js Applications: A Checklist for Corporate Websites",
    author: "Vignesh Pandiya",
    excerpt: "Learn how to defend your Next.js application from common security threats like CSRF, XSS, and SQL Injection.",
    content: `Security is not an afterthought—especially for corporate and enterprise websites carrying user details and internal dashboards. Next.js provides excellent security defaults, but there are several critical steps developers must take.

### 1. Cross-Site Scripting (XSS) Protection
Always sanitize user-submitted HTML if you must render it using 'dangerouslySetInnerHTML'. Standard React bindings protect from simple script injection, but dynamic data requires libraries like DOMPurify.

### 2. Guarding APIs (Rate Limiting)
Public-facing forms (like contact forms or support systems) must be rate-limited. Implementing a simple token bucket middleware or using services like Redis protects routes from Denial of Service (DoS) and spam bots.

### 3. Database Sanitization
When using Prisma, most queries are automatically parameterized, protecting from SQL injection. However, avoid raw queries ('prisma.$queryRaw') unless you strictly bind parameters.

### 4. CSRF Tokens
Ensure your NextAuth setup uses host-checked cookies, secure cookies, and correct CORS policies to verify originating client identity.`,
    readTime: "8 min read",
    tags: ["Next.js", "Security", "Web Development"],
    coverImage: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80",
    published: true,
    publishedAt: "2026-07-25T12:00:00Z",
    createdAt: "2026-07-25T12:00:00Z"
  }
];

export const fallbackTestimonials: TestimonialItem[] = [
  {
    id: "t1",
    name: "Rajesh Kumar",
    role: "Chief Technology Officer",
    company: "Alpha Logistics",
    feedback: "VP Enterpriceses transformed our operations. Their AI automation solution saved us hundreds of hours monthly and has been incredibly stable and robust.",
    rating: 5,
    avatarUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80",
    featured: true
  },
  {
    id: "t2",
    name: "Ananya Sen",
    role: "Founder",
    company: "EduLearn Inc",
    feedback: "Working with Vignesh and his team was a breeze. They delivered our SaaS product ahead of schedule and with top-tier code quality. Highly recommended!",
    rating: 5,
    avatarUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80",
    featured: true
  }
];

export const fallbackCareers: CareerItem[] = [
  {
    id: "c1",
    title: "Senior AI Software Engineer",
    department: "Engineering",
    location: "Tamil Nadu, India (Hybrid)",
    type: "Full-time",
    description: "We are looking for a Senior AI Engineer to join our Tamil Nadu workspace. You will build and scale custom RAG architectures, write fine-tuning pipelines, and integrate state-of-the-art LLMs into SaaS systems.",
    requirements: [
      "3+ years experience with LLMs, Vector DBs, and LangChain/LlamaIndex",
      "Proficiency in React/Next.js, Node.js, and TypeScript",
      "Experience deploying containerized applications (Docker/Kubernetes)"
    ],
    benefits: [
      "Competitive salary & performance bonuses",
      "Flexible hybrid work environment (Tamil Nadu office)",
      "Professional certification allowances & continuous learning budget"
    ],
    status: "OPEN"
  },
  {
    id: "c2",
    title: "Cybersecurity Analyst",
    department: "Security",
    location: "Remote (India)",
    type: "Contract",
    description: "We are searching for a contract Cybersecurity Analyst to perform system audits, penetration tests, and vulnerability assessments for corporate client portfolios.",
    requirements: [
      "Certified Ethical Hacker (CEH) or OSCP certification",
      "Strong familiarity with OWASP Top 10 vulnerabilities and network inspection",
      "Proven experience documenting and remediating security incidents"
    ],
    benefits: [
      "Flexible hourly contracting schedule",
      "Exposure to diverse enterprise network environments",
      "Path to full-time security consulting roles"
    ],
    status: "OPEN"
  }
];

export const fallbackPricing: PricingPlanItem[] = [
  {
    id: "pr1",
    name: "Startup Launchpad",
    price: "₹49,999",
    billingPeriod: "one-time",
    description: "Perfect for startups and small businesses looking to establish a premium web presence and generate leads.",
    features: [
      "Single Page Premium Design",
      "Fully Responsive Web Layout",
      "Basic SEO Optimization",
      "Contact & Lead Capture Form",
      "1 Month Support & Handoff"
    ],
    buttonText: "Request Consultation",
    buttonUrl: "/contact",
    featured: false
  },
  {
    id: "pr2",
    name: "Growth Automation",
    price: "₹1,49,999",
    billingPeriod: "one-time",
    description: "Ideal for companies needing automated business workflows, custom dashboards, and specialized web tools.",
    features: [
      "Up to 5 Pages Modern Website",
      "Basic AI Workflow Automation (n8n/Make)",
      "PostgreSQL Database Integrations",
      "Lead Status Analytics Dashboard",
      "3 Months Support & Maintenance"
    ],
    buttonText: "Schedule Call",
    buttonUrl: "/contact",
    featured: true
  },
  {
    id: "pr3",
    name: "Enterprise Solutions",
    price: "Custom Quote",
    billingPeriod: "custom",
    description: "For corporate organizations requiring tailored AI agents, extensive SaaS apps, and comprehensive security testing.",
    features: [
      "Custom AI Agents & RAG Integration",
      "End-to-End Core Workflow Automation",
      "Cloud Infrastructure setup (AWS/DevOps)",
      "Cybersecurity Penetration Audit",
      "Dedicated SLA Support Package"
    ],
    buttonText: "Contact Sales Team",
    buttonUrl: "/contact",
    featured: false
  }
];
