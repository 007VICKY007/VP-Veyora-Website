import React from "react";
import Link from "next/link";
import { Hero } from "@/components/sections/Hero";
import { AiInActionDemo } from "@/components/sections/AiInActionDemo";
import { ContactForm } from "@/components/sections/ContactForm";
import { 
  HoverCard, 
  FadeIn, 
  StaggerContainer, 
  StaggerItem 
} from "@/components/shared/MotionWrappers";
import { 
  Bot, 
  Workflow, 
  Zap, 
  Cpu, 
  ArrowUpRight, 
  CheckCircle2, 
  Mail, 
  Phone, 
  MapPin, 
  ShieldCheck, 
  Handshake,
  Sparkles
} from "lucide-react";

export default function HomePage() {
  const services = [
    {
      num: "01",
      id: "ai-agents",
      title: "AI Agents",
      subtitle: "Autonomous Digital Assistants",
      desc: "24/7 autonomous agents that qualify inbound enterprise leads, triage customer support tickets, and execute multi-step operational tasks.",
      icon: Bot,
      color: "from-amber-400 to-yellow-500",
      accent: "border-amber-500/20 hover:border-amber-400/60",
      tag: "Autonomous 24/7",
      specs: ["Sub-150ms Response", "RAG Knowledge Base", "Human Escalation Gate"]
    },
    {
      num: "02",
      id: "workflow-automation",
      title: "Workflow Automation",
      subtitle: "Event-Driven Logic Pipelines",
      desc: "Robust event-driven data pipelines connecting your APIs, webhooks, and databases to eliminate manual copy-pasting and clerical delays.",
      icon: Workflow,
      color: "from-sky-400 to-blue-500",
      accent: "border-sky-500/20 hover:border-sky-400/60",
      tag: "Event-Driven",
      specs: ["Webhook & API Routing", "n8n / Custom Workers", "Dead-Letter Queues"]
    },
    {
      num: "03",
      id: "ai-integrations",
      title: "AI Integrations",
      subtitle: "Cross-Platform Bidirectional Sync",
      desc: "Seamless bidirectional synchronization between HubSpot, Salesforce, SAP, QuickBooks, and internal databases with validation checks.",
      icon: Zap,
      color: "from-indigo-400 to-violet-500",
      accent: "border-indigo-500/20 hover:border-indigo-400/60",
      tag: "100% Supervised",
      specs: ["CRM / ERP Connectors", "Document OCR Extraction", "Schema Normalization"]
    },
    {
      num: "04",
      id: "custom-ai-solutions",
      title: "Custom AI Solutions",
      subtitle: "Tailored Engineering Sprints",
      desc: "Bespoke domain-tuned LLM architectures, vector search indexes, and secure internal tools engineered specifically for your business stack.",
      icon: Cpu,
      color: "from-amber-300 to-teal-400",
      accent: "border-teal-500/20 hover:border-teal-400/60",
      tag: "Custom Architecture",
      specs: ["Private LLM Hosting", "Vector Embeddings", "Zero-Data Retention"]
    }
  ];

  return (
    <div className="bg-[#080b14] text-white min-h-screen selection:bg-amber-400 selection:text-black">
      
      {/* 1. HERO SECTION (Three.js 3D Monolith & Editorial Typography) */}
      <Hero />

      {/* 2. SERVICES SECTION (Architectural Editorial Layout) */}
      <section id="services" className="py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <FadeIn className="max-w-3xl mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-white/10 bg-white/[0.03] backdrop-blur-md">
            <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
            <span className="text-[10px] sm:text-[11px] font-mono uppercase tracking-[0.22em] text-white/70">
              02 / Specialized Capabilities
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black tracking-[-0.03em] text-white leading-tight">
            Engineered for <br />
            <span className="font-serif italic font-normal text-gradient-gold">
              Operational Precision.
            </span>
          </h2>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-light">
            High-velocity, production-tested AI architectures engineered to eliminate operational friction, reduce clerical overhead, and scale delivery.
          </p>
        </FadeIn>

        {/* 4 Cards Grid */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((item) => {
            const Icon = item.icon;
            return (
              <StaggerItem key={item.id}>
                <HoverCard className={`h-full rounded-2xl border ${item.accent} bg-[#0c1122]/75 backdrop-blur-xl p-7 flex flex-col justify-between space-y-6 transition-all duration-300 shadow-2xl relative overflow-hidden group`}>
                  
                  {/* Subtle corner light sheen */}
                  <div className={`absolute -top-12 -right-12 w-32 h-32 bg-gradient-to-br ${item.color} rounded-full blur-2xl opacity-10 group-hover:opacity-25 transition-opacity pointer-events-none`} />

                  <div className="space-y-4 relative z-10">
                    
                    {/* Number & Icon Row */}
                    <div className="flex items-center justify-between border-b border-white/5 pb-4">
                      <span className="text-xs font-mono font-bold text-white/30 tracking-widest">
                        {item.num}
                      </span>
                      <div className="p-2.5 rounded-xl border border-white/10 bg-white/[0.03] text-amber-300 group-hover:text-white group-hover:border-white/20 transition-all">
                        <Icon className="h-5 w-5" />
                      </div>
                    </div>

                    {/* Title & Subtitle */}
                    <div>
                      <h3 className="text-lg font-bold text-white group-hover:text-amber-200 transition-colors">
                        {item.title}
                      </h3>
                      <span className="text-[10px] font-mono uppercase tracking-wider text-amber-400/80 block mt-0.5">
                        {item.subtitle}
                      </span>
                    </div>
                    
                    {/* Description */}
                    <p className="text-xs text-slate-300 leading-relaxed font-light">
                      {item.desc}
                    </p>

                    {/* Micro Specs List */}
                    <ul className="pt-2 space-y-1.5 text-[10px] font-mono text-white/50 border-t border-white/5">
                      {item.specs.map((spec, i) => (
                        <li key={i} className="flex items-center gap-1.5">
                          <span className="h-1 w-1 rounded-full bg-amber-400/80" />
                          <span>{spec}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Card Bottom CTA */}
                  <div className="pt-4 border-t border-white/10 relative z-10">
                    <a
                      href="#contact"
                      className="inline-flex items-center justify-between w-full text-xs font-mono font-bold uppercase tracking-wider text-white/70 group-hover:text-amber-300 transition-colors"
                    >
                      <span>Scope Requirement</span>
                      <ArrowUpRight className="h-4 w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </a>
                  </div>

                </HoverCard>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </section>

      {/* 3. AI IN ACTION (Interactive Telemetry Testbench) */}
      <section id="ai-in-action" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10 border-t border-white/5">
        <FadeIn className="max-w-3xl mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-white/10 bg-white/[0.03] backdrop-blur-md">
            <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
            <span className="text-[10px] sm:text-[11px] font-mono uppercase tracking-[0.22em] text-white/70">
              03 / Interactive Testbench
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black tracking-[-0.03em] text-white leading-tight">
            Live AI Workflow <br />
            <span className="font-serif italic font-normal text-gradient-gold">
              Execution Architecture.
            </span>
          </h2>
          <p className="text-sm sm:text-base text-slate-300 font-light">
            Simulate real-world business tasks and inspect how our multi-agent pipelines parse raw inputs, normalize data, and stage actions.
          </p>
        </FadeIn>

        <AiInActionDemo />
      </section>

      {/* 4. PARTNERSHIPS SECTION (International Agency Delivery) */}
      <section id="partners" className="py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10 border-t border-white/5">
        <div className="rounded-3xl border border-amber-500/25 bg-gradient-to-b from-[#11172e]/90 to-[#090d1c]/90 backdrop-blur-2xl p-8 sm:p-14 relative overflow-hidden shadow-2xl">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-amber-400/30 bg-amber-400/10 backdrop-blur-md">
                <Handshake className="h-3.5 w-3.5 text-amber-300" />
                <span className="text-[10px] sm:text-[11px] font-mono uppercase tracking-[0.22em] text-amber-300 font-bold">
                  04 / International Delivery Partnership
                </span>
              </div>

              <h2 className="text-3xl sm:text-5xl font-black text-white leading-[1.08] tracking-[-0.02em]">
                Scale Your Agency With <br />
                <span className="font-serif italic font-normal text-gradient-gold">
                  Dedicated AI Engineering.
                </span>
              </h2>

              <p className="text-sm sm:text-base text-slate-300 font-light leading-relaxed max-w-xl">
                We invite international software consultancies, CRM agencies, and digital firms in the UK, USA, UAE, Singapore, Australia, and Europe to partner with VP VEYORA. Deliver high-value AI automations to your clients under your own brand.
              </p>

              {/* 3 Model Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 pt-2">
                <div className="p-4 rounded-xl border border-white/10 bg-white/[0.02]">
                  <h4 className="text-xs font-mono font-bold uppercase text-white tracking-wider">White-Label</h4>
                  <p className="text-[11px] text-white/50 mt-1 leading-snug">Built under your agency banner & NDAs</p>
                </div>
                <div className="p-4 rounded-xl border border-white/10 bg-white/[0.02]">
                  <h4 className="text-xs font-mono font-bold uppercase text-white tracking-wider">Joint Delivery</h4>
                  <p className="text-[11px] text-white/50 mt-1 leading-snug">Co-engineering on complex client briefs</p>
                </div>
                <div className="p-4 rounded-xl border border-white/10 bg-white/[0.02]">
                  <h4 className="text-xs font-mono font-bold uppercase text-white tracking-wider">Referral Program</h4>
                  <p className="text-[11px] text-white/50 mt-1 leading-snug">Formal commission & retainer agreements</p>
                </div>
              </div>

              <div className="pt-4 flex flex-wrap items-center gap-4">
                <a
                  href="#contact"
                  className="group inline-flex items-center gap-3 pl-2 pr-6 py-2 rounded-full border border-white/20 hover:border-amber-400 bg-white/[0.04] hover:bg-white/[0.08] transition-all backdrop-blur-md shadow-lg shadow-black/40"
                >
                  <div className="h-9 w-9 rounded-full bg-gradient-to-tr from-amber-400 to-yellow-300 text-black flex items-center justify-center font-bold">
                    <ArrowUpRight className="h-4 w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                  <span className="text-xs font-mono font-bold uppercase tracking-[0.18em] text-white group-hover:text-amber-200 transition-colors">
                    Discuss a Partnership
                  </span>
                </a>

                <Link
                  href="/partners"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-mono font-bold text-xs uppercase tracking-[0.16em] text-white/80 hover:text-white border border-white/10 hover:border-white/30 transition-colors"
                >
                  <span>Explore Partner Framework</span>
                </Link>
              </div>
            </div>

            {/* Right Column: Institutional Safeguards Card */}
            <div className="lg:col-span-5 rounded-2xl border border-white/10 bg-black/60 backdrop-blur-xl p-6 sm:p-8 space-y-4">
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-amber-400 font-bold">
                  Partnership Safeguards
                </span>
                <span className="text-[9px] font-mono text-emerald-400">VERIFIED</span>
              </div>

              <ul className="space-y-3.5 text-xs text-white/70">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="h-4 w-4 text-amber-400 shrink-0 mt-0.5" />
                  <span>100% intellectual property transfer upon milestone sign-off</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="h-4 w-4 text-amber-400 shrink-0 mt-0.5" />
                  <span>Comprehensive bilateral NDA executed prior to discovery</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="h-4 w-4 text-amber-400 shrink-0 mt-0.5" />
                  <span>Direct lead architect communication with zero intermediary lag</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="h-4 w-4 text-amber-400 shrink-0 mt-0.5" />
                  <span>Dedicated overlapping working windows for UK, US, UAE & EU</span>
                </li>
              </ul>

              <div className="pt-3 border-t border-white/10 flex items-center justify-between text-[10px] font-mono text-white/40">
                <span>EST. 2024</span>
                <span>GLOBAL DELIVERY</span>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 5. CONTACT SECTION (Inquiry & Direct Connect) */}
      <section id="contact" className="py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10 border-t border-white/5">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Inquiries */}
          <FadeIn className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-white/10 bg-white/[0.03] backdrop-blur-md">
              <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
              <span className="text-[10px] sm:text-[11px] font-mono uppercase tracking-[0.22em] text-white/70">
                05 / Direct Connect
              </span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-black tracking-[-0.03em] text-white leading-tight">
              Start Your AI <br />
              <span className="font-serif italic font-normal text-gradient-gold">
                Automation Brief.
              </span>
            </h2>

            <p className="text-sm sm:text-base text-slate-300 font-light leading-relaxed">
              Tell us about your business process bottlenecks or agency partnership brief. Our engineering leads review all submissions and respond within 24 business hours.
            </p>

            {/* Direct Channels Glass HUD */}
            <div className="p-6 rounded-2xl border border-white/10 bg-black/50 backdrop-blur-xl space-y-4 text-xs font-mono">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-amber-400/10 text-amber-400 border border-amber-400/20">
                  <Mail className="h-4 w-4" />
                </div>
                <div>
                  <span className="text-[10px] text-white/40 block uppercase tracking-wider">Direct Email</span>
                  <a href="mailto:vpveyora@gmail.com" className="text-white hover:text-amber-400 font-bold transition-colors">
                    vpveyora@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3 border-t border-white/5 pt-3.5">
                <div className="p-2.5 rounded-xl bg-sky-400/10 text-sky-400 border border-sky-400/20">
                  <Phone className="h-4 w-4" />
                </div>
                <div>
                  <span className="text-[10px] text-white/40 block uppercase tracking-wider">WhatsApp Direct</span>
                  <a href="https://wa.me/919488890697" className="text-white hover:text-sky-300 font-bold transition-colors">
                    +91 9488890697
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3 border-t border-white/5 pt-3.5">
                <div className="p-2.5 rounded-xl bg-indigo-400/10 text-indigo-400 border border-indigo-400/20">
                  <MapPin className="h-4 w-4" />
                </div>
                <div>
                  <span className="text-[10px] text-white/40 block uppercase tracking-wider">Corporate Engineering</span>
                  <span className="text-white/80">Tamil Nadu, India · Serving Globally</span>
                </div>
              </div>
            </div>

            <p className="text-[11px] text-white/40 flex items-center gap-2 font-mono">
              <ShieldCheck className="h-4 w-4 text-emerald-400 shrink-0" />
              <span>All communications protected by mutual NDA standards.</span>
            </p>
          </FadeIn>

          {/* Right Column: Contact Form */}
          <FadeIn delay={0.15} direction="left" className="lg:col-span-7">
            <ContactForm />
          </FadeIn>

        </div>
      </section>

    </div>
  );
}
