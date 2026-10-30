import React from "react";
import Link from "next/link";
import { 
  getSiteSettings, 
  getServices, 
  getPortfolio 
} from "@/lib/dataLoaders";
import { Hero } from "@/components/sections/Hero";
import { FAQ } from "@/components/sections/FAQ";
import { ContactForm } from "@/components/sections/ContactForm";
import { AutomationDemos } from "@/components/sections/AutomationDemos";
import { 
  FadeIn, 
  StaggerContainer, 
  StaggerItem 
} from "@/components/shared/MotionWrappers";
import { RunningMarquee } from "@/components/shared/RunningText";
import { 
  Bot,
  Workflow, 
  FileText, 
  Users, 
  Database, 
  Terminal, 
  ArrowRight, 
  Zap, 
  Target, 
  Mail, 
  ShieldCheck, 
  TrendingUp, 
  Layers, 
  Clock, 
  Handshake, 
  CheckCircle2, 
  Briefcase, 
  Search, 
  Cpu,
  ExternalLink,
  Sliders,
  DollarSign
} from "lucide-react";
import { LinkedInIcon } from "@/components/shared/SocialIcons";

export default async function HomePage() {
  const settings = await getSiteSettings();
  const portfolio = await getPortfolio();

  const heroTitle = settings["homepage.hero.title"] || "Turn Repetitive Business Operations into Intelligent AI Workflows.";
  const heroSubtitle = settings["homepage.hero.subtitle"] || "VP VEYORA helps software agencies and growing businesses automate manual processes with AI agents, intelligent workflows, and custom system integrations. From initial discovery to deployment and ongoing support, we build practical automation solutions that save time and simplify operations.";

  // 6 Core Solutions as defined in Master Prompt Section 5
  const coreSolutions = [
    {
      title: "AI Workflow Automation",
      desc: "Connect disconnected systems into event-driven automated pipelines using tools like n8n, Make.com, or custom microservices with error handling.",
      icon: Workflow,
      href: "/solutions/ai-automation#lead-triage"
    },
    {
      title: "AI Agents & Business Assistants",
      desc: "Deploy autonomous conversational and task-oriented agents that qualify leads, categorize customer requests, and route inquiries intelligently.",
      icon: Bot,
      href: "/solutions/ai-automation#support-assistants"
    },
    {
      title: "Document Processing & Extraction",
      desc: "Transform unstructured invoices, purchase orders, and PDF receipts into validated, schema-compliant JSON ready for accounting sync.",
      icon: FileText,
      href: "/solutions/ai-automation#document-extraction"
    },
    {
      title: "CRM & ERP Workflow Integration",
      desc: "Synchronize customer records, deals, inventory, and invoices bidirectionally across HubSpot, Salesforce, SAP, QuickBooks, and internal portals.",
      icon: Users,
      href: "/solutions/ai-automation#crm-updates"
    },
    {
      title: "API Integrations & Process Automation",
      desc: "Engineer resilient webhook listeners, asynchronous message queues, and API translation layers between proprietary enterprise systems.",
      icon: Zap,
      href: "/solutions/ai-automation#api-integrations"
    },
    {
      title: "Custom AI-Powered Internal Tools",
      desc: "Build secure internal portals, RAG knowledge-base search engines, and management dashboards tailored to your operational workflows.",
      icon: Terminal,
      href: "/solutions/ai-automation#rag-search"
    }
  ];

  // How We Work: 5 Stages (Discover → Prototype → Pilot → Deploy → Optimize)
  const deliveryStages = [
    {
      stage: "01",
      title: "Discover",
      desc: "Map existing manual bottlenecks, evaluate technical feasibility, inspect APIs, and define clear success criteria."
    },
    {
      stage: "02",
      title: "Prototype",
      desc: "Build a rapid, isolated proof-of-concept using synthetic test datasets to validate prompt logic and schema outputs."
    },
    {
      stage: "03",
      title: "Pilot",
      desc: "Connect integrations in a supervised staging environment with automated integrity checks and human approval gates."
    },
    {
      stage: "04",
      title: "Deploy",
      desc: "Execute controlled production rollout with role-based access, error monitoring, dead-letter queues, and documentation."
    },
    {
      stage: "05",
      title: "Optimize",
      desc: "Continuously monitor throughput, tune model parameters against schema drift, and support evolving operational needs."
    }
  ];

  return (
    <div className="bg-base text-primary min-h-screen">
      
      {/* 1. Hero Section */}
      <Hero title={heroTitle} subtitle={heroSubtitle} />

      {/* Running Marquee — Core Specializations & International Footprint */}
      <RunningMarquee 
        speed={32}
        items={[
          "AI AUTOMATION DELIVERY PARTNER",
          "WHITE-LABEL AGENCY DELIVERY",
          "SUPERVISED HUMAN-IN-THE-LOOP",
          "DOCUMENT & INVOICE OCR AI",
          "CRM & ERP WORKFLOW BRIDGES",
          "SERVING UK · USA · UAE · EU · SG · AU",
          "VP VEYORA PRIVATE LIMITED"
        ]}
      />

      {/* 2. Business Outcomes Section (Framed as Potential Benefits) */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-subtle">
        <FadeIn className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-brand">
            Operational Value
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-primary">
            Targeted Business Outcomes
          </h2>
          <p className="text-secondary text-sm sm:text-base leading-relaxed">
            We engineer practical automation solutions designed to eliminate repetitive operational friction. These represent potential operational gains dependent on your current process maturity and baseline data:
          </p>
        </FadeIn>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              icon: Clock,
              title: "Reduced Repetitive Work",
              desc: "Eliminate manual data re-entry, routine document transcription, and copy-pasting between disparate software tools."
            },
            {
              icon: Zap,
              title: "Faster Processing Cycles",
              desc: "Accelerate invoice reconciliation, inbound lead qualification, and customer inquiry turnaround from days to minutes."
            },
            {
              icon: ShieldCheck,
              title: "Improved Workflow Visibility",
              desc: "Gain transparent audit trails, structured validation logs, and instant notifications when edge-cases need human review."
            },
            {
              icon: Layers,
              title: "Better System Integration",
              desc: "Unify legacy databases, modern cloud SaaS, email inboxes, and internal messaging into synchronized operational workflows."
            }
          ].map((item, idx) => (
            <StaggerItem key={idx}>
              <div className="h-full rounded-2xl border border-glass bg-card p-7 space-y-4 hover:border-brand/35 transition-all duration-300">
                <div className="inline-flex p-3 rounded-xl bg-brand/10 text-brand border border-brand/20">
                  <item.icon className="h-5 w-5" />
                </div>
                <h3 className="text-base font-bold text-primary">{item.title}</h3>
                <p className="text-xs sm:text-sm text-secondary leading-relaxed">{item.desc}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </section>

      {/* 3. Core Solutions Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-subtle">
        <FadeIn className="text-center mb-16 space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center space-x-2 rounded-full border border-brand/20 bg-brand/5 px-3.5 py-1 text-xs font-semibold text-brand">
            <Zap className="h-3.5 w-3.5" />
            <span>Specialized Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-primary">
            Core AI Automation Offerings
          </h2>
          <p className="text-secondary text-sm sm:text-base leading-relaxed">
            Our primary offering is AI automation and intelligent agents. We combine robust orchestration frameworks with deterministic validation gates.
          </p>
        </FadeIn>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {coreSolutions.map((sol, idx) => {
            const Icon = sol.icon;
            return (
              <StaggerItem key={idx}>
                <div className="h-full rounded-2xl border border-glass bg-card p-8 flex flex-col justify-between hover:border-brand/40 transition-all duration-300 group">
                  <div className="space-y-4">
                    <div className="inline-flex p-3 rounded-xl bg-brand/10 text-brand border border-brand/20 group-hover:scale-105 transition-transform">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="text-lg font-bold text-primary group-hover:text-brand transition-colors">
                      {sol.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-secondary leading-relaxed">
                      {sol.desc}
                    </p>
                  </div>

                  <div className="pt-6 mt-6 border-t border-subtle">
                    <Link
                      href={sol.href}
                      className="inline-flex items-center space-x-1.5 text-xs font-bold uppercase tracking-wider text-brand hover:text-primary transition-colors"
                    >
                      <span>Explore Technical Workflow</span>
                      <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>

        <FadeIn delay={0.2} className="text-center pt-12">
          <Link
            href="/solutions/ai-automation"
            className="inline-flex items-center space-x-2 border border-glass bg-card hover:bg-card-hover hover:border-brand/40 px-8 py-3.5 text-xs font-bold uppercase tracking-[0.15em] text-primary hover:text-brand transition-all rounded-lg"
          >
            <span>View All Detailed Workflow Breakdowns</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </FadeIn>
      </section>

      {/* 4. Interactive Automation Demonstrations Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-subtle">
        <AutomationDemos />
      </section>

      {/* 5. How We Work: Discover → Prototype → Pilot → Deploy → Optimize */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-subtle">
        <FadeIn className="text-center mb-16 space-y-4 max-w-2xl mx-auto">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-brand">
            Proven Delivery Process
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-primary">
            How We Work
          </h2>
          <p className="text-secondary text-sm sm:text-base leading-relaxed">
            A structured, disciplined 5-stage methodology designed to de-risk development and ensure system reliability before production launch.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {deliveryStages.map((stage, idx) => (
            <div
              key={idx}
              className="rounded-2xl border border-glass bg-card p-6 flex flex-col justify-between space-y-4 hover:border-brand/35 transition-all group"
            >
              <div className="space-y-3">
                <span className="text-xs font-mono font-bold text-brand block">
                  STAGE {stage.stage}
                </span>
                <h3 className="text-base font-bold text-primary group-hover:text-brand transition-colors">
                  {stage.title}
                </h3>
                <p className="text-xs text-secondary leading-relaxed">
                  {stage.desc}
                </p>
              </div>
              <div className="pt-3 border-t border-subtle">
                <span className="text-[10px] font-mono text-muted flex items-center gap-1.5">
                  <CheckCircle2 className="h-3 w-3 text-brand" />
                  <span>Quality Milestone</span>
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. Partnership Program Highlight */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-subtle">
        <div className="rounded-3xl border border-glass bg-gradient-to-b from-card to-card/60 p-8 sm:p-14 relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full border border-brand/20 bg-brand/5 px-3.5 py-1 text-xs font-semibold text-brand">
                <Handshake className="h-3.5 w-3.5" />
                <span>Agency Collaboration</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-black text-primary leading-tight">
                Deliver AI Automation to Your Clients <br />
                <span className="text-gradient">Without Building an AI Team.</span>
              </h2>
              <p className="text-secondary text-sm sm:text-base leading-relaxed max-w-xl">
                We partner with software development agencies, CRM consultants, and IT service providers across the UK, USA, UAE, and Europe. Expand your service revenue with white-label delivery, joint implementations, and referral models.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                <div className="p-3.5 rounded-xl border border-glass bg-base/50">
                  <h4 className="text-xs font-bold text-primary">White-Label</h4>
                  <p className="text-[11px] text-muted mt-1">We build silently under your agency brand</p>
                </div>
                <div className="p-3.5 rounded-xl border border-glass bg-base/50">
                  <h4 className="text-xs font-bold text-primary">Joint Delivery</h4>
                  <p className="text-[11px] text-muted mt-1">Co-engineering on complex client briefs</p>
                </div>
                <div className="p-3.5 rounded-xl border border-glass bg-base/50">
                  <h4 className="text-xs font-bold text-primary">Referral Model</h4>
                  <p className="text-[11px] text-muted mt-1">Agreed fees under formal contract</p>
                </div>
              </div>

              <div className="pt-4 flex flex-wrap gap-4">
                <Link
                  href="/partners"
                  className="inline-flex items-center gap-2 bg-brand text-inverse font-bold text-xs uppercase tracking-[0.18em] px-7 py-3.5 rounded-lg hover:bg-white transition-all shadow-lg shadow-brand/20"
                >
                  <span>Explore Partner Program</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/partners#partner-form"
                  className="inline-flex items-center gap-2 glass border border-glass text-primary font-semibold text-xs uppercase tracking-[0.18em] px-7 py-3.5 rounded-lg hover:border-brand/40 hover:text-brand transition-all"
                >
                  <span>Inquire Now</span>
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5 rounded-2xl border border-glass bg-base/80 p-6 sm:p-8 space-y-4">
              <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-brand">
                Ideal Partner Criteria
              </h4>
              <ul className="space-y-3 text-xs text-secondary">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="h-4 w-4 text-brand shrink-0 mt-0.5" />
                  <span>Digital agencies looking to offer AI without adding fixed salary overhead</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="h-4 w-4 text-brand shrink-0 mt-0.5" />
                  <span>CRM / ERP consultants who need custom n8n or Python automation hooks</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="h-4 w-4 text-brand shrink-0 mt-0.5" />
                  <span>IT MSPs upgrading enterprise clients with RAG bots and document extractors</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="h-4 w-4 text-brand shrink-0 mt-0.5" />
                  <span>Full intellectual property assignment & strict bilateral NDAs signed upfront</span>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* 7. Automation Demonstrations & Example Use Cases (Clear Synthetic Labels) */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-subtle">
        <FadeIn className="text-center mb-16 space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center space-x-2 rounded-full border border-brand/20 bg-brand/5 px-3.5 py-1 text-xs font-semibold text-brand">
            <Layers className="h-3.5 w-3.5" />
            <span>Demonstrations & Use Cases</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-primary">
            Featured Automation Demonstrations
          </h2>
          <p className="text-secondary text-sm sm:text-base leading-relaxed">
            Representative architectural implementations built on synthetic datasets to showcase ingestion, classification, and validation mechanics.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {portfolio.slice(0, 2).map((item) => {
            const results = typeof item.results === "string" ? {} : item.results;
            return (
              <FadeIn key={item.id} className="rounded-2xl border border-glass bg-card overflow-hidden flex flex-col justify-between hover:border-brand/40 transition-all duration-300">
                <div>
                  <div 
                    className="h-48 w-full bg-cover bg-center border-b border-subtle"
                    style={{ backgroundImage: `url(${item.imageUrl})` }}
                  />
                  <div className="p-7 space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-mono font-bold text-brand uppercase tracking-widest">
                        {item.category}
                      </span>
                      <span className="text-[9px] font-mono px-2 py-0.5 rounded bg-white/5 border border-white/10 text-muted">
                        Synthetic Dataset
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-primary">{item.title}</h3>
                    <p className="text-xs sm:text-sm text-secondary leading-relaxed">{item.description}</p>
                    
                    <div className="grid grid-cols-2 gap-3 pt-4 border-t border-subtle">
                      {Object.entries(results).map(([key, value]) => (
                        <div key={key} className="p-2.5 rounded-lg bg-base/50 border border-glass">
                          <span className="text-[10px] uppercase tracking-wider text-muted block font-mono">{key}</span>
                          <p className="text-xs font-bold text-primary mt-0.5 font-mono">{value}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="px-7 pb-7 pt-2">
                  <Link
                    href={`/portfolio/${item.slug}`}
                    className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-brand hover:text-primary transition-colors"
                  >
                    <span>Inspect Architecture Blueprint</span>
                    <ExternalLink className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </section>

      {/* 8. Indicative Engagement Models Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-subtle">
        <FadeIn className="text-center mb-16 space-y-4 max-w-2xl mx-auto">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-brand">
            Engagement Tiers
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-primary">
            Service Engagement Packages
          </h2>
          <p className="text-secondary text-sm sm:text-base leading-relaxed">
            Indicative pricing hypotheses based on typical project scopes. Final quotes subject to API requirements, volume, and SLA support.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              title: "Discovery & Audit",
              tag: "Assessment",
              price: "$150 – $250",
              priceINR: "₹10,000 – ₹20,000",
              desc: "Workflow feasibility analysis, tech stack audit & architecture roadmap."
            },
            {
              title: "Proof of Concept",
              tag: "Prototype",
              price: "$350 – $750",
              priceINR: "₹25,000 – ₹60,000",
              desc: "Single automated workflow using synthetic test data in a working web sandbox."
            },
            {
              title: "Automation Pilot",
              tag: "Production",
              price: "$800 – $2,000",
              priceINR: "₹60,000 – ₹1,50,000",
              desc: "End-to-end multi-system workflow connected to live CRM, ERP, and alerts."
            },
            {
              title: "Retainer SLA",
              tag: "Monthly",
              price: "Scoped Monthly",
              priceINR: "Scoped Monthly",
              desc: "Continuous model tuning, API maintenance, and dedicated monthly sprint hours."
            }
          ].map((pkg, idx) => (
            <div key={idx} className="rounded-2xl border border-glass bg-card p-6 space-y-4 flex flex-col justify-between hover:border-brand/35 transition-all">
              <div className="space-y-3">
                <span className="text-[10px] font-mono uppercase tracking-wider font-bold text-brand px-2.5 py-0.5 rounded bg-brand/10 border border-brand/20">
                  {pkg.tag}
                </span>
                <h3 className="text-base font-bold text-primary">{pkg.title}</h3>
                <div className="py-1">
                  <span className="text-xl font-black font-mono text-primary">{pkg.price}</span>
                  <span className="text-[11px] text-muted font-mono block">({pkg.priceINR})</span>
                </div>
                <p className="text-xs text-secondary leading-relaxed">{pkg.desc}</p>
              </div>

              <div className="pt-4 border-t border-subtle">
                <Link
                  href="/pricing"
                  className="text-xs font-bold uppercase tracking-wider text-brand hover:text-primary transition-colors flex items-center justify-between"
                >
                  <span>View Details</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 9. FAQ Section */}
      <FAQ />

      {/* 10. Direct Contact / Lead Generation Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-subtle">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          <FadeIn className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center space-x-2 rounded-full border border-brand/20 bg-brand/5 px-3.5 py-1 text-xs font-semibold text-brand">
              <Mail className="h-3.5 w-3.5" />
              <span>Direct Inquiries</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-primary leading-tight">
              Start Your <span className="text-gradient">Automation Project</span>
            </h2>
            <p className="text-secondary text-sm sm:text-base leading-relaxed">
              Tell us about your business process or agency partnership goals. Our solutions engineering team will review your requirements and respond within 24 business hours.
            </p>
            
            <div className="space-y-3.5 text-xs sm:text-sm text-secondary pt-4 border-t border-subtle">
              <p className="flex items-center gap-2">
                <span className="text-muted uppercase text-[10px] tracking-wider w-24">Direct Email</span>
                <a href="mailto:vpveyora@gmail.com" className="text-brand hover:underline font-mono">vpveyora@gmail.com</a>
              </p>
              <p className="flex items-center gap-2">
                <span className="text-muted uppercase text-[10px] tracking-wider w-24">Corporate HQ</span>
                <span className="text-primary">Tamil Nadu, India</span>
              </p>
              <p className="flex items-center gap-2">
                <span className="text-muted uppercase text-[10px] tracking-wider w-24">Working Hours</span>
                <span className="text-primary">Mon – Sat (9:00 AM – 7:00 PM IST)</span>
              </p>
              <p className="flex items-center gap-2">
                <span className="text-muted uppercase text-[10px] tracking-wider w-24">Focus Markets</span>
                <span className="text-primary">UK, USA, UAE, Singapore, Australia, Europe</span>
              </p>
            </div>

            <div className="p-4 rounded-xl border border-glass bg-card/60 space-y-2 text-xs text-muted">
              <span className="font-bold text-primary block">Transparent Company Profile:</span>
              <p className="leading-relaxed">
                VP VEYORA PRIVATE LIMITED is an India-based technology engineering company delivering custom AI automation solutions, intelligent agents, and software platforms for international clients and agency partners.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.2} direction="left" className="lg:col-span-7">
            <ContactForm />
          </FadeIn>

        </div>
      </section>

    </div>
  );
}
