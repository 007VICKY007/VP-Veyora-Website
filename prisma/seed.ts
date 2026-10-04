import { PrismaClient } from "@prisma/client";
import * as bcrypt from "bcryptjs";

const prisma = new PrismaClient();

async function main() {
  console.log("Seeding started...");

  // 1. Create Default Admin User
  const adminEmail = "contact@vpenterprises.in";
  const existingAdmin = await prisma.user.findUnique({
    where: { email: adminEmail },
  });

  if (!existingAdmin) {
    const hashedPassword = await bcrypt.hash("VPAdmin2026!", 10);
    await prisma.user.create({
      data: {
        email: adminEmail,
        name: "Vignesh Pandiya",
        password: hashedPassword,
        role: "ADMIN",
      },
    });
    console.log("Default admin user created: contact@vpenterprises.in / VPAdmin2026!");
  } else {
    console.log("Admin user already exists.");
  }

  // 2. Seed Services
  const servicesData = [
  {
    "slug": "ai-machine-learning",
    "title": "AI & Machine Learning",
    "category": "Artificial Intelligence",
    "description": "Custom machine learning models, predictive intelligence, neural networks, and domain-tuned algorithms engineered to turn complex business data into automated competitive advantages.",
    "icon": "Brain",
    "features": "[\"Custom Predictive Modeling\",\"Natural Language Processing (NLP)\",\"Computer Vision & Recognition\",\"Model Fine-Tuning & Deployment\",\"Real-Time Inference Pipelines\"]",
    "techStack": "[\"PyTorch\",\"TensorFlow\",\"Python\",\"Hugging Face\",\"Scikit-Learn\"]"
  },
  {
    "slug": "web-development",
    "title": "Web Development",
    "category": "Web Platforms",
    "description": "High-performance, ultra-fast modern web applications, client portals, and responsive digital interfaces built for seamless user experiences and high conversion.",
    "icon": "Globe",
    "features": "[\"Next.js 15 & React 19 Architectures\",\"High-Conversion UI/UX Design\",\"Server-Side Rendering (SSR) & Edge Caching\",\"SEO & Core Web Vitals Optimization\",\"Mobile-First Responsive Layouts\"]",
    "techStack": "[\"Next.js\",\"React\",\"TypeScript\",\"Tailwind CSS\",\"Node.js\"]"
  },
  {
    "slug": "software-development",
    "title": "Software Development",
    "category": "Software Engineering",
    "description": "Bespoke full-cycle software development from system architecture to secure production deployment, built with scalable codebases and zero-trust engineering.",
    "icon": "Code",
    "features": "[\"Bespoke System Architectures\",\"High-Concurrency Microservices & APIs\",\"Modular Database Schema Design\",\"Cross-Platform Native & Hybrid Applications\",\"Automated CI/CD & Testing Pipelines\"]",
    "techStack": "[\"TypeScript\",\"Node.js\",\"Go\",\"PostgreSQL\",\"Docker\"]"
  },
  {
    "slug": "ai-agents",
    "title": "AI Agents",
    "category": "Autonomous Systems",
    "description": "Autonomous multi-agent ecosystems that reason, execute tasks, research, interact with third-party tools, and automate complex cognitive business operations 24/7.",
    "icon": "Bot",
    "features": "[\"Autonomous Decision-Making Agents\",\"Tool-Calling & Multi-Agent Collaboration\",\"Retrieval-Augmented Generation (RAG)\",\"Customer Support & Sales AI Agents\",\"Continuous Memory & Learning Systems\"]",
    "techStack": "[\"LangChain\",\"OpenAI API\",\"Claude API\",\"LlamaIndex\",\"Pinecone\"]"
  },
  {
    "slug": "automation",
    "title": "Automation",
    "category": "Workflow Automation",
    "description": "End-to-end enterprise workflow automation that connects disjointed applications, eliminates repetitive manual labor, and synchronizes mission-critical business data.",
    "icon": "Zap",
    "features": "[\"Cross-Platform System Integration\",\"n8n, Make & Zapier Enterprise Workflows\",\"Automated Document Processing & Invoicing\",\"WhatsApp & Omnichannel Alert Bots\",\"Scheduled Batch Processing & ETL Pipelines\"]",
    "techStack": "[\"n8n\",\"Make.com\",\"Zapier\",\"WhatsApp API\",\"Python\"]"
  },
  {
    "slug": "data-analytics",
    "title": "Data Analytics",
    "category": "Data Intelligence",
    "description": "Transform raw data into real-time business intelligence with interactive executive dashboards, automated reporting pipelines, and predictive revenue analytics.",
    "icon": "BarChart3",
    "features": "[\"Real-Time Executive BI Dashboards\",\"ETL Data Pipelines & Warehousing\",\"Cohort & Customer Retention Analytics\",\"Revenue Forecasting & Operational Metrics\",\"Automated Scheduled Data Reports\"]",
    "techStack": "[\"PostgreSQL\",\"ClickHouse\",\"PowerBI\",\"Python\",\"Apache Superset\"]"
  },
  {
    "slug": "crm-solutions",
    "title": "CRM Solutions",
    "category": "Enterprise Platforms",
    "description": "Custom Customer Relationship Management systems built to streamline pipeline tracking, automate lead follow-ups, unify communications, and drive deal closures.",
    "icon": "Users",
    "features": "[\"End-to-End Sales Pipeline Tracking\",\"Automated Lead Capture & Smart Routing\",\"Integrated Email & WhatsApp Communication\",\"Custom Contact Lifecycle Management\",\"Detailed Performance & Conversion Reporting\"]",
    "techStack": "[\"React\",\"Next.js\",\"Node.js\",\"PostgreSQL\",\"Prisma\"]"
  },
  {
    "slug": "erp-solutions",
    "title": "ERP Solutions",
    "category": "Enterprise Platforms",
    "description": "Comprehensive Enterprise Resource Planning systems designed to integrate inventory tracking, supply chain, financial accounting, HR operations, and order fulfillment.",
    "icon": "Database",
    "features": "[\"Centralized Inventory & Warehouse Tracking\",\"Financial Accounting & Automated Ledger Sync\",\"Supply Chain & Vendor Management Hubs\",\"Human Resources & Employee Attendance Portals\",\"Role-Based Granular Access & Audit Logs\"]",
    "techStack": "[\"PostgreSQL\",\"TypeScript\",\"Node.js\",\"Redis\",\"Docker\"]"
  },
  {
    "slug": "custom-technology-services",
    "title": "Custom Technology Services",
    "category": "Specialized Engineering",
    "description": "Specialized technical consulting, legacy system refactoring, cloud infrastructure migration, API architecture design, and zero-trust security audits tailored to unique challenges.",
    "icon": "Terminal",
    "features": "[\"Cloud Infrastructure & DevOps (AWS / GCP)\",\"Legacy Codebase Modernization & Refactoring\",\"Penetration Testing & Zero-Trust Security Audits\",\"Third-Party API & Hardware Protocol Integrations\",\"High-Availability 24/7 SLA Engineering Support\"]",
    "techStack": "[\"AWS\",\"Kubernetes\",\"Docker\",\"Linux\",\"Terraform\"]"
  }
];

  for (const s of servicesData) {
    await prisma.service.upsert({
      where: { slug: s.slug },
      update: s,
      create: s,
    });
  }
  console.log("Services seeded.");

  // 3. Seed Portfolio / Case Studies
  const portfolioData = [
    {
      slug: "enterprise-ai-automation-engine",
      title: "Enterprise AI Automation Engine",
      category: "AI Automation",
      client: "Alpha Logistics",
      description: "Automating invoice processing and logistics workflow using n8n and Generative AI, reducing manual processing time by 85%.",
      challenge: "Client processed 10,000+ invoices manually every month, causing shipping delays, manual errors, and high operational costs.",
      solution: "Built an end-to-end automated pipeline using n8n, OpenAI API, and custom Document AI to ingest, categorize, extract fields, and write into the core ERP.",
      results: JSON.stringify({
        "Time Saved": "85%",
        "Accuracy": "99.2%",
        "Monthly Cost Savings": "₹4,50,000",
        "ROI achieved": "300% in 3 Months"
      }),
      imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
      websiteUrl: null,
      featured: true
    },
    {
      slug: "global-saas-platform-edtech",
      title: "Global SaaS Platform for EdTech",
      category: "Software Development",
      client: "EduLearn Inc",
      description: "A comprehensive SaaS platform built using Next.js, PostgreSQL, and Node.js for managing online classrooms, curriculum, and billing.",
      challenge: "Existing student management systems were sluggish, non-responsive, and crashed when active concurrent sessions exceeded 5,000.",
      solution: "Re-architected the web application as a Next.js single-page application with microservices, leveraging AWS RDS PostgreSQL replication and Redis caching.",
      results: JSON.stringify({
        "Daily Active Users": "50,000+",
        "Response Latency": "<100ms",
        "Server Resource Cost": "-40%",
        "System Uptime": "99.99%"
      }),
      imageUrl: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80",
      websiteUrl: "https://edulearn-demo.vpenterprises.in",
      featured: true
    },

  ];

  for (const p of portfolioData) {
    await prisma.portfolio.upsert({
      where: { slug: p.slug },
      update: p,
      create: p,
    });
  }
  console.log("Portfolio seeded.");

  // 4. Seed Testimonials
  const testimonialsData = [
    {
      name: "Rajesh Kumar",
      role: "Chief Technology Officer",
      company: "Alpha Logistics",
      feedback: "VP Enterprises transformed our operations. Their AI automation solution saved us hundreds of hours monthly and has been incredibly stable and robust.",
      rating: 5,
      avatarUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80",
      featured: true
    },
    {
      name: "Ananya Sen",
      role: "Founder",
      company: "EduLearn Inc",
      feedback: "Working with Vignesh and his team was a breeze. They delivered our SaaS product ahead of schedule and with top-tier code quality. Highly recommended!",
      rating: 5,
      avatarUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80",
      featured: true
    }
  ];

  await prisma.testimonial.deleteMany({});
  for (const t of testimonialsData) {
    await prisma.testimonial.create({ data: t });
  }
  console.log("Testimonials seeded.");

  // 5. Seed Blogs
  const blogsData = [
    {
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

VP Enterprises specializes in building these smart orchestration pipelines, enabling companies to focus on strategic decisions rather than administrative inputs.`,
      readTime: "5 min read",
      tags: JSON.stringify(["AI", "Automation", "Enterprise"]),
      coverImage: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=800&q=80",
      published: true,
      publishedAt: new Date()
    },
    {
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
      tags: JSON.stringify(["Next.js", "Security", "Web Development"]),
      coverImage: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80",
      published: true,
      publishedAt: new Date()
    }
  ];

  for (const b of blogsData) {
    await prisma.blog.upsert({
      where: { slug: b.slug },
      update: b,
      create: b,
    });
  }
  console.log("Blogs seeded.");

  // 6. Seed Careers
  const careersData = [
    {
      title: "Senior AI Software Engineer",
      department: "Engineering",
      location: "Tamil Nadu, India (Hybrid)",
      type: "Full-time",
      description: "We are looking for a Senior AI Engineer to join our Tamil Nadu workspace. You will build and scale custom RAG architectures, write fine-tuning pipelines, and integrate state-of-the-art LLMs into SaaS systems.",
      requirements: JSON.stringify([
        "3+ years experience with LLMs, Vector DBs, and LangChain/LlamaIndex",
        "Proficiency in React/Next.js, Node.js, and TypeScript",
        "Experience deploying containerized applications (Docker/Kubernetes)"
      ]),
      benefits: JSON.stringify([
        "Competitive salary & performance bonuses",
        "Flexible hybrid work environment (Tamil Nadu office)",
        "Professional certification allowances & continuous learning budget"
      ]),
      status: "OPEN" as const
    },
    {
      title: "Cybersecurity Analyst",
      department: "Security",
      location: "Remote (India)",
      type: "Contract",
      description: "We are searching for a contract Cybersecurity Analyst to perform system audits, penetration tests, and vulnerability assessments for corporate client portfolios.",
      requirements: JSON.stringify([
        "Certified Ethical Hacker (CEH) or OSCP certification",
        "Strong familiarity with OWASP Top 10 vulnerabilities and network inspection",
        "Proven experience documenting and remediating security incidents"
      ]),
      benefits: JSON.stringify([
        "Flexible hourly contracting schedule",
        "Exposure to diverse enterprise network environments",
        "Path to full-time security consulting roles"
      ]),
      status: "OPEN" as const
    }
  ];

  await prisma.career.deleteMany({});
  for (const c of careersData) {
    await prisma.career.create({ data: c });
  }
  console.log("Careers seeded.");

  // 7. Seed Pricing Plans
  const pricingPlansData = [
    {
      name: "Startup Launchpad",
      price: "₹49,999",
      billingPeriod: "one-time",
      description: "Perfect for startups and small businesses looking to establish a premium web presence and generate leads.",
      features: JSON.stringify([
        "Single Page Premium Design",
        "Fully Responsive Web Layout",
        "Basic SEO Optimization",
        "Contact & Lead Capture Form",
        "1 Month Support & Handoff"
      ]),
      buttonText: "Request Consultation",
      buttonUrl: "/contact",
      featured: false
    },
    {
      name: "Growth Automation",
      price: "₹1,49,999",
      billingPeriod: "one-time",
      description: "Ideal for companies needing automated business workflows, custom dashboards, and specialized web tools.",
      features: JSON.stringify([
        "Up to 5 Pages Modern Website",
        "Basic AI Workflow Automation (n8n/Make)",
        "PostgreSQL Database Integrations",
        "Lead Status Analytics Dashboard",
        "3 Months Support & Maintenance"
      ]),
      buttonText: "Schedule Call",
      buttonUrl: "/contact",
      featured: true
    },
    {
      name: "Enterprise Solutions",
      price: "Custom Quote",
      billingPeriod: "custom",
      description: "For corporate organizations requiring tailored AI agents, extensive SaaS apps, and comprehensive security testing.",
      features: JSON.stringify([
        "Custom AI Agents & RAG Integration",
        "End-to-End Core Workflow Automation",
        "Cloud Infrastructure setup (AWS/DevOps)",
        "Cybersecurity Penetration Audit",
        "Dedicated SLA Support Package"
      ]),
      buttonText: "Contact Sales Team",
      buttonUrl: "/contact",
      featured: false
    }
  ];

  await prisma.pricingPlan.deleteMany({});
  for (const p of pricingPlansData) {
    await prisma.pricingPlan.create({ data: p });
  }
  console.log("Pricing plans seeded.");

  // 8. Seed Site Settings
  const siteSettingsData = [
    { key: "homepage.hero.title", value: "Engineering AI Solutions for Tomorrow" },
    { key: "homepage.hero.subtitle", value: "Helping businesses automate, innovate, and grow using Artificial Intelligence and modern software technologies." },
    { key: "homepage.about.text", value: "VP Enterprises is an AI-first technology company founded by Vignesh Pandiya. We help startups, enterprises, and organizations build intelligent software, AI-powered products, automation workflows, enterprise applications, cloud infrastructure, and cybersecurity solutions. We believe technology should solve real business problems through innovation, automation, and scalable software." }
  ];

  for (const s of siteSettingsData) {
    await prisma.siteSetting.upsert({
      where: { key: s.key },
      update: s,
      create: s,
    });
  }
  console.log("Site settings seeded.");

  console.log("Seeding completed successfully!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
