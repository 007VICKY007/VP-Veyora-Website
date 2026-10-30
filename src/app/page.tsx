import React from "react";
import Link from "next/link";
import { 
  getSiteSettings
} from "@/lib/dataLoaders";
import { Hero } from "@/components/sections/Hero";
import { FAQ } from "@/components/sections/FAQ";
import { ContactForm } from "@/components/sections/ContactForm";
import { AutomationDemos } from "@/components/sections/AutomationDemos";
import { 
  FadeIn, 
  StaggerContainer, 
  StaggerItem,
  HoverCard 
} from "@/components/shared/MotionWrappers";
import { RunningMarquee } from "@/components/shared/RunningText";
import { 
  Bot,
  Workflow, 
  FileText, 
  Users, 
  ArrowRight, 
  Zap, 
  Target, 
  Mail, 
  ShieldCheck, 
  Clock, 
  Handshake, 
  CheckCircle2, 
  Sparkles,
  Layers,
  Terminal
} from "lucide-react";

export default async function HomePage() {
  const settings = await getSiteSettings();

  const heroTitle = settings["homepage.hero.title"] || "Turn Repetitive Business Operations into Intelligent AI Workflows.";
  const heroSubtitle = settings["homepage.hero.subtitle"] || "VP VEYORA helps software agencies and growing businesses automate manual processes with AI agents, document extraction, and custom system integrations.";

  // 6 Core Solutions — Concise & High-Impact
  const coreSolutions = [
    {
      title: "AI Workflow Automation",
      desc: "Connect disparate APIs and databases into resilient event-driven pipelines with automated retry logic.",
      icon: Workflow,
      href: "/solutions/ai-automation#lead-triage"
    },
    {
      title: "Autonomous AI Agents",
      desc: "Deploy intelligent triage agents that qualify inbound prospects and route customer tickets 24/7.",
      icon: Bot,
      href: "/solutions/ai-automation#support-assistants"
    },
    {
      title: "Document & Invoice OCR AI",
      desc: "Extract unstructured invoice line items, dates, and amounts into validated accounting schemas.",
      icon: FileText,
      href: "/solutions/ai-automation#document-extraction"
    },
    {
      title: "CRM & ERP Synchronizers",
      desc: "Eliminate manual data re-entry with live bidirectional bridges across HubSpot, Salesforce, and SAP.",
      icon: Users,
      href: "/solutions/ai-automation#crm-updates"
    },
    {
      title: "API Bridges & Webhook Ingestion",
      desc: "High-throughput asynchronous message queues linking legacy databases with modern cloud apps.",
      icon: Zap,
      href: "/solutions/ai-automation#api-integrations"
    },
    {
      title: "Custom AI Internal Portals",
      desc: "Bespoke operational dashboards and internal RAG knowledge-base search engines built for your team.",
      icon: Terminal,
      href: "/solutions/ai-automation#rag-search"
    }
  ];

  // 5-Stage Delivery Process
  const deliveryStages = [
    { stage: "01", title: "Discover", desc: "Map bottleneck friction, audit API feasibility, and define success KPIs." },
    { stage: "02", title: "Prototype", desc: "Rapid sandbox proof-of-concept benchmarked against synthetic edge cases." },
    { stage: "03", title: "Pilot", desc: "Staged deployment with deterministic validation rules and human-in-the-loop gates." },
    { stage: "04", title: "Deploy", desc: "Controlled production launch with role-based security, DLQ, and audit logs." },
    { stage: "05", title: "Optimize", desc: "Continuous model tuning, schema drift monitoring, and proactive SLA support." }
  ];

  return (
    <div className="bg-base text-primary min-h-screen">
      
      {/* 1. Hero Section */}
      <Hero title={heroTitle} subtitle={heroSubtitle} />

      {/* Marquee Ticker */}
      <RunningMarquee 
        speed={30}
        items={[
          "AI AUTOMATION DELIVERY PARTNER",
          "WHITE-LABEL AGENCY DELIVERY",
          "SUPERVISED HUMAN-IN-THE-LOOP",
          "DOCUMENT & INVOICE OCR",
          "CRM & ERP WORKFLOW BRIDGES",
          "SERVING UK · USA · UAE · EU · SG · AU",
          "VP VEYORA PRIVATE LIMITED"
        ]}
      />

      {/* 2. Business Outcomes — Lean & Vibrant */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-subtle">
        <FadeIn className="text-center max-w-2xl mx-auto space-y-3 mb-12">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-brand">
            Operational Value
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-primary">
            Targeted Business Outcomes
          </h2>
          <p className="text-secondary text-xs sm:text-sm">
            Potential operational leverage achievable through supervised automation engineering:
          </p>
        </FadeIn>

        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {[
            {
              icon: Clock,
              title: "Zero Manual Re-entry",
              desc: "Eliminate repetitive copy-pasting across disparate spreadsheets and portals."
            },
            {
              icon: Zap,
              title: "Instant Processing",
              desc: "Turn hours of manual document transcription and triage into sub-minute pipelines."
            },
            {
              icon: ShieldCheck,
              title: "Supervised Integrity",
              desc: "Deterministic validation gates ensure ambiguous records escalate to human operators."
            },
            {
              icon: Layers,
              title: "Unified Software Stack",
              desc: "Synchronize legacy ERPs, modern CRMs, email, and Slack into cohesive workflows."
            }
          ].map((item, idx) => (
            <StaggerItem key={idx}>
              <HoverCard className="h-full rounded-2xl border border-glass bg-card p-6 space-y-3 hover:border-brand/40 transition-colors">
                <div className="inline-flex p-2.5 rounded-xl bg-brand/10 text-brand border border-brand/20">
                  <item.icon className="h-5 w-5" />
                </div>
                <h3 className="text-base font-bold text-primary">{item.title}</h3>
                <p className="text-xs text-secondary leading-relaxed">{item.desc}</p>
              </HoverCard>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </section>

      {/* 3. Core Solutions — Interactive Vibrant Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-subtle">
        <FadeIn className="text-center mb-12 space-y-3 max-w-2xl mx-auto">
          <div className="inline-flex items-center space-x-2 rounded-full border border-brand/20 bg-brand/5 px-3 py-1 text-xs font-semibold text-brand">
            <Zap className="h-3.5 w-3.5" />
            <span>Specialized Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-primary">
            Engineered Automation Offerings
          </h2>
          <p className="text-secondary text-xs sm:text-sm">
            Practical AI workflows built for stability, accuracy, and enterprise reliability.
          </p>
        </FadeIn>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {coreSolutions.map((sol, idx) => {
            const Icon = sol.icon;
            return (
              <StaggerItem key={idx}>
                <HoverCard className="h-full rounded-2xl border border-glass bg-card p-6 flex flex-col justify-between hover:border-brand/40 transition-colors group">
                  <div className="space-y-3">
                    <div className="inline-flex p-2.5 rounded-xl bg-brand/10 text-brand border border-brand/20">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="text-base font-bold text-primary group-hover:text-brand transition-colors">
                      {sol.title}
                    </h3>
                    <p className="text-xs text-secondary leading-relaxed">
                      {sol.desc}
                    </p>
                  </div>

                  <div className="pt-4 mt-4 border-t border-subtle">
                    <Link
                      href={sol.href}
                      className="inline-flex items-center space-x-1.5 text-xs font-bold uppercase tracking-wider text-brand hover:text-primary transition-colors"
                    >
                      <span>Explore Workflow</span>
                      <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </HoverCard>
              </StaggerItem>
            );
          })}
        </StaggerContainer>

        <FadeIn delay={0.2} className="text-center pt-8">
          <Link
            href="/solutions/ai-automation"
            className="inline-flex items-center space-x-2 border border-glass bg-card hover:bg-card-hover hover:border-brand/40 px-6 py-3 text-xs font-bold uppercase tracking-[0.15em] text-primary hover:text-brand transition-all rounded-lg"
          >
            <span>View All Detailed Architecture Schemas</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </FadeIn>
      </section>

      {/* 4. Live Interactive Automation Demonstrations */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-subtle">
        <AutomationDemos />
      </section>

      {/* 5. How We Work — 5 Clean Progressive Stages */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-subtle">
        <FadeIn className="text-center mb-12 space-y-3 max-w-2xl mx-auto">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-brand">
            Process Discipline
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-primary">
            How We Deliver
          </h2>
          <p className="text-secondary text-xs sm:text-sm">
            A 5-stage engineering lifecycle designed to eliminate technical risk before production rollout.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {deliveryStages.map((stage, idx) => (
            <HoverCard
              key={idx}
              className="rounded-2xl border border-glass bg-card p-5 flex flex-col justify-between space-y-3 hover:border-brand/35 transition-colors group"
            >
              <div className="space-y-2.5">
                <span className="text-[11px] font-mono font-bold text-brand block">
                  STAGE {stage.stage}
                </span>
                <h3 className="text-sm font-bold text-primary group-hover:text-brand transition-colors">
                  {stage.title}
                </h3>
                <p className="text-xs text-secondary leading-relaxed">
                  {stage.desc}
                </p>
              </div>
              <div className="pt-2.5 border-t border-subtle">
                <span className="text-[10px] font-mono text-muted flex items-center gap-1.5">
                  <CheckCircle2 className="h-3 w-3 text-brand" />
                  <span>Verified</span>
                </span>
              </div>
            </HoverCard>
          ))}
        </div>
      </section>

      {/* 6. Agency Partner Program Banner */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-subtle">
        <div className="rounded-3xl border border-glass bg-gradient-to-b from-card to-card/60 p-8 sm:p-12 relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 rounded-full border border-brand/20 bg-brand/5 px-3 py-1 text-xs font-semibold text-brand">
                <Handshake className="h-3.5 w-3.5" />
                <span>Agency Partnerships</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-black text-primary leading-tight">
                Deliver AI Automation to Your Clients <br />
                <span className="text-gradient">Without Building an AI Team.</span>
              </h2>
              <p className="text-secondary text-xs sm:text-sm leading-relaxed max-w-xl">
                We partner with digital agencies, CRM consultants, and IT MSPs in the UK, USA, UAE, and Europe. Expand your client retainers with white-label execution, joint delivery, and strict NDA protection.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                <div className="p-3 rounded-xl border border-glass bg-base/50">
                  <h4 className="text-xs font-bold text-primary">White-Label</h4>
                  <p className="text-[11px] text-muted mt-0.5">Delivered under your brand</p>
                </div>
                <div className="p-3 rounded-xl border border-glass bg-base/50">
                  <h4 className="text-xs font-bold text-primary">Joint Delivery</h4>
                  <p className="text-[11px] text-muted mt-0.5">Co-engineered implementations</p>
                </div>
                <div className="p-3 rounded-xl border border-glass bg-base/50">
                  <h4 className="text-xs font-bold text-primary">Referral Model</h4>
                  <p className="text-[11px] text-muted mt-0.5">Contractual referral fee structure</p>
                </div>
              </div>

              <div className="pt-3 flex flex-wrap gap-3">
                <Link
                  href="/partners"
                  className="inline-flex items-center gap-2 bg-[#F5C200] text-[#05050d] font-black text-xs uppercase tracking-[0.18em] px-6 py-3 rounded-lg hover:bg-white transition-all shadow-md"
                >
                  <span>Explore Partner Program</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/partners#partner-form"
                  className="inline-flex items-center gap-2 glass border border-glass text-primary font-bold text-xs uppercase tracking-[0.18em] px-6 py-3 rounded-lg hover:border-brand/40 hover:text-brand transition-all"
                >
                  <span>Inquire as Partner</span>
                </Link>
              </div>
            </div>

            <div className="lg:col-span-4 rounded-2xl border border-glass bg-base/70 p-6 space-y-3">
              <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-brand">
                Key Safeguards
              </h4>
              <ul className="space-y-2.5 text-xs text-secondary">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5 text-brand shrink-0 mt-0.5" />
                  <span>100% intellectual property assigned upon settlement</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5 text-brand shrink-0 mt-0.5" />
                  <span>Strict bilateral non-disclosure agreement (NDA)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5 text-brand shrink-0 mt-0.5" />
                  <span>Direct engineer-to-engineer communication</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5 text-brand shrink-0 mt-0.5" />
                  <span>Time-zone overlap with UK, USA, UAE & Europe</span>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* 7. Indicative Engagement Packages */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-subtle">
        <FadeIn className="text-center mb-12 space-y-3 max-w-2xl mx-auto">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-brand">
            Engagement Tiers
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-primary">
            Service Engagement Packages
          </h2>
          <p className="text-secondary text-xs sm:text-sm">
            Indicative initial scopes. Final pricing confirmed after technical audit based on endpoints and volume.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {[
            {
              title: "Discovery & Audit",
              tag: "Assessment",
              priceUSD: "$150 – $250",
              priceINR: "₹10,000 – ₹20,000",
              desc: "Workflow feasibility analysis, tech audit & architecture roadmap."
            },
            {
              title: "Proof of Concept",
              tag: "Prototype",
              priceUSD: "$350 – $750",
              priceINR: "₹25,000 – ₹60,000",
              desc: "Single automated workflow in a working web sandbox with synthetic data."
            },
            {
              title: "Automation Pilot",
              tag: "Production",
              priceUSD: "$800 – $2,000",
              priceINR: "₹60,000 – ₹1,50,000",
              desc: "End-to-end multi-system workflow connected to live CRM, ERP, and alerts."
            },
            {
              title: "Retainer SLA",
              tag: "Monthly",
              priceUSD: "Scoped Monthly",
              priceINR: "Scoped Monthly",
              desc: "Continuous model tuning, API maintenance, and dedicated sprint hours."
            }
          ].map((pkg, idx) => (
            <HoverCard key={idx} className="rounded-2xl border border-glass bg-card p-6 space-y-3 flex flex-col justify-between hover:border-brand/40 transition-colors">
              <div className="space-y-2.5">
                <span className="text-[10px] font-mono uppercase tracking-wider font-bold text-brand px-2 py-0.5 rounded bg-brand/10 border border-brand/20">
                  {pkg.tag}
                </span>
                <h3 className="text-base font-bold text-primary">{pkg.title}</h3>
                <div>
                  <span className="text-lg font-black font-mono text-primary">{pkg.priceUSD}</span>
                  <span className="text-[11px] text-muted font-mono block">({pkg.priceINR})</span>
                </div>
                <p className="text-xs text-secondary leading-relaxed">{pkg.desc}</p>
              </div>

              <div className="pt-3 border-t border-subtle">
                <Link
                  href="/pricing"
                  className="text-xs font-bold uppercase tracking-wider text-brand hover:text-primary transition-colors flex items-center justify-between"
                >
                  <span>View Details</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </HoverCard>
          ))}
        </div>
      </section>

      {/* 8. FAQ Section */}
      <FAQ />

      {/* 9. Direct Contact / Lead Generation Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-subtle">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          <FadeIn className="lg:col-span-5 space-y-5">
            <div className="inline-flex items-center space-x-2 rounded-full border border-brand/20 bg-brand/5 px-3 py-1 text-xs font-semibold text-brand">
              <Mail className="h-3.5 w-3.5" />
              <span>Direct Inquiries</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-primary leading-tight">
              Start Your <span className="text-gradient">Automation Project</span>
            </h2>
            <p className="text-secondary text-xs sm:text-sm leading-relaxed">
              Share your business bottleneck or agency partnership goals. Our solutions engineering team will review requirements and reply within 24 business hours.
            </p>
            
            <div className="space-y-3 text-xs text-secondary pt-3 border-t border-subtle">
              <p className="flex items-center gap-2">
                <span className="text-muted uppercase text-[10px] tracking-wider w-24">Direct Email</span>
                <a href="mailto:vpveyora@gmail.com" className="text-brand hover:underline font-mono">vpveyora@gmail.com</a>
              </p>
              <p className="flex items-center gap-2">
                <span className="text-muted uppercase text-[10px] tracking-wider w-24">Corporate HQ</span>
                <span className="text-primary">Tamil Nadu, India</span>
              </p>
              <p className="flex items-center gap-2">
                <span className="text-muted uppercase text-[10px] tracking-wider w-24">Hours</span>
                <span className="text-primary">Mon – Sat (9:00 AM – 7:00 PM IST)</span>
              </p>
              <p className="flex items-center gap-2">
                <span className="text-muted uppercase text-[10px] tracking-wider w-24">Target Markets</span>
                <span className="text-primary">UK, USA, UAE, SG, AU, Europe</span>
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.15} direction="left" className="lg:col-span-7">
            <ContactForm />
          </FadeIn>

        </div>
      </section>

    </div>
  );
}
