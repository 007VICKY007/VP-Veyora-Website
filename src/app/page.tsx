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
  Handshake
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
      color: "bg-[#ffe500] text-black",
      accent: "border-gray-200 hover:border-black",
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
      color: "bg-black text-[#ffe500]",
      accent: "border-gray-200 hover:border-black",
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
      color: "bg-[#ffe500] text-black",
      accent: "border-gray-200 hover:border-black",
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
      color: "bg-black text-[#ffe500]",
      accent: "border-gray-200 hover:border-black",
      tag: "Custom Architecture",
      specs: ["Private LLM Hosting", "Vector Embeddings", "Zero-Data Retention"]
    }
  ];

  return (
    <div className="bg-white text-[#0a0a0a] min-h-screen selection:bg-[#ffe500] selection:text-black">
      
      {/* 1. HERO SECTION (Cover Inspired with 2026 Tag & 3D Monolith) */}
      <Hero />

      {/* 2. SERVICES SECTION (Editorial Magazine Grid Layout) */}
      <section id="services" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <FadeIn className="max-w-3xl mb-16 space-y-4">
          <div className="flex items-center gap-3">
            <span className="px-2.5 py-1 rounded bg-[#ffe500] text-black font-mono font-black text-[11px] tracking-wider uppercase">
              02 / SERVICES
            </span>
            <span className="text-xs font-mono font-bold tracking-[0.2em] uppercase text-gray-500">
              Specialized Capabilities
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black tracking-[-0.03em] text-[#0a0a0a] leading-tight">
            Engineered for <br />
            <span className="relative inline-block mt-1">
              <span className="bg-[#ffe500] text-black px-3.5 py-0.5 rounded-lg font-black">
                Operational Precision.
              </span>
            </span>
          </h2>

          <p className="text-sm sm:text-base text-gray-600 leading-relaxed font-normal">
            High-velocity, production-tested AI architectures engineered to eliminate operational friction, reduce clerical overhead, and scale delivery.
          </p>
        </FadeIn>

        {/* 4 Cards Grid (Inspired by "Our Services" Spread in the Brochure) */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((item) => {
            const Icon = item.icon;
            return (
              <StaggerItem key={item.id}>
                <HoverCard className={`h-full rounded-2xl border ${item.accent} bg-white p-7 flex flex-col justify-between space-y-6 transition-all duration-300 shadow-editorial relative overflow-hidden group hover:shadow-editorial-lg`}>
                  
                  <div className="space-y-4 relative z-10">
                    
                    {/* Number & Icon Row */}
                    <div className="flex items-center justify-between border-b border-gray-100 pb-4">
                      <span className="text-xs font-mono font-bold text-gray-400 tracking-widest">
                        {item.num}
                      </span>
                      <div className={`p-2.5 rounded-xl ${item.color} shadow-xs font-bold`}>
                        <Icon className="h-5 w-5" />
                      </div>
                    </div>

                    {/* Title & Subtitle */}
                    <div>
                      <h3 className="text-lg font-black text-[#0a0a0a] group-hover:text-amber-600 transition-colors">
                        {item.title}
                      </h3>
                      <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-gray-400 block mt-0.5">
                        {item.subtitle}
                      </span>
                    </div>
                    
                    {/* Description */}
                    <p className="text-xs text-gray-600 leading-relaxed">
                      {item.desc}
                    </p>

                    {/* Micro Specs List */}
                    <ul className="pt-2 space-y-1.5 text-[10px] font-mono text-gray-600 border-t border-gray-100">
                      {item.specs.map((spec, i) => (
                        <li key={i} className="flex items-center gap-1.5">
                          <span className="h-1.5 w-1.5 rounded-full bg-[#ffe500] border border-black/40" />
                          <span>{spec}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Card Bottom CTA */}
                  <div className="pt-4 border-t border-gray-100 relative z-10">
                    <a
                      href="#contact"
                      className="inline-flex items-center justify-between w-full text-xs font-mono font-bold uppercase tracking-wider text-black group-hover:text-amber-600 transition-colors"
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
      <section id="ai-in-action" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10 border-t border-gray-200">
        <FadeIn className="max-w-3xl mb-12 space-y-3">
          <div className="flex items-center gap-3">
            <span className="px-2.5 py-1 rounded bg-[#ffe500] text-black font-mono font-black text-[11px] tracking-wider uppercase">
              03 / TESTBENCH
            </span>
            <span className="text-xs font-mono font-bold tracking-[0.2em] uppercase text-gray-500">
              Interactive Execution
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black tracking-[-0.03em] text-[#0a0a0a] leading-tight">
            Live AI Workflow <br />
            <span className="relative inline-block mt-1">
              <span className="bg-[#ffe500] text-black px-3.5 py-0.5 rounded-lg font-black">
                Execution Architecture.
              </span>
            </span>
          </h2>
          <p className="text-sm sm:text-base text-gray-600">
            Simulate real-world business tasks and inspect how our multi-agent pipelines parse raw inputs, normalize data, and stage actions.
          </p>
        </FadeIn>

        <AiInActionDemo />
      </section>

      {/* 4. PARTNERSHIPS SECTION (Inspired by Signature Yellow Page in Brochure) */}
      <section id="partners" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10 border-t border-gray-200">
        <div className="rounded-3xl border border-gray-200 bg-white p-8 sm:p-14 relative overflow-hidden shadow-editorial">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-3">
                <span className="px-2.5 py-1 rounded bg-[#ffe500] text-black font-mono font-black text-[11px] tracking-wider uppercase">
                  04 / PARTNERSHIP
                </span>
                <span className="text-xs font-mono font-bold tracking-[0.2em] uppercase text-gray-500">
                  International Delivery Program
                </span>
              </div>

              <h2 className="text-3xl sm:text-5xl font-black text-[#0a0a0a] leading-[1.08] tracking-[-0.02em]">
                Scale Your Agency With <br />
                <span className="relative inline-block mt-1">
                  <span className="bg-[#ffe500] text-black px-3.5 py-0.5 rounded-lg font-black">
                    Dedicated AI Engineering.
                  </span>
                </span>
              </h2>

              <p className="text-sm sm:text-base text-gray-600 leading-relaxed max-w-xl">
                We invite international software consultancies, CRM agencies, and digital firms in the UK, USA, UAE, Singapore, Australia, and Europe to partner with VP VEYORA. Deliver high-value AI automations to your clients under your own brand.
              </p>

              {/* 3 Model Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 pt-2">
                <div className="p-4 rounded-xl border border-gray-200 bg-gray-50/70">
                  <h4 className="text-xs font-mono font-bold uppercase text-black tracking-wider">White-Label</h4>
                  <p className="text-[11px] text-gray-500 mt-1 leading-snug">Built under your agency banner & NDAs</p>
                </div>
                <div className="p-4 rounded-xl border border-gray-200 bg-gray-50/70">
                  <h4 className="text-xs font-mono font-bold uppercase text-black tracking-wider">Joint Delivery</h4>
                  <p className="text-[11px] text-gray-500 mt-1 leading-snug">Co-engineering on complex client briefs</p>
                </div>
                <div className="p-4 rounded-xl border border-gray-200 bg-gray-50/70">
                  <h4 className="text-xs font-mono font-bold uppercase text-black tracking-wider">Referral Program</h4>
                  <p className="text-[11px] text-gray-500 mt-1 leading-snug">Formal commission & retainer agreements</p>
                </div>
              </div>

              <div className="pt-4 flex flex-wrap items-center gap-4">
                <a
                  href="#contact"
                  className="group inline-flex items-center gap-3 pl-3 pr-6 py-2 rounded-full bg-[#0a0a0a] hover:bg-black text-white transition-all shadow-md"
                >
                  <div className="h-9 w-9 rounded-full bg-[#ffe500] text-black flex items-center justify-center font-bold transition-transform group-hover:rotate-45">
                    <ArrowUpRight className="h-4 w-4" />
                  </div>
                  <span className="text-xs font-mono font-bold uppercase tracking-[0.18em]">
                    Discuss a Partnership
                  </span>
                </a>

                <Link
                  href="/partners"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-mono font-bold text-xs uppercase tracking-[0.16em] text-black border border-gray-300 hover:border-black transition-colors"
                >
                  <span>Explore Partner Framework</span>
                </Link>
              </div>
            </div>

            {/* Right Column: Institutional Safeguards Card (Yellow Header Style) */}
            <div className="lg:col-span-5 rounded-2xl border border-gray-200 bg-gray-50/70 p-6 sm:p-8 space-y-4">
              <div className="flex items-center justify-between border-b border-gray-200 pb-3">
                <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-black font-extrabold">
                  Partnership Safeguards
                </span>
                <span className="text-[9px] font-mono px-2 py-0.5 rounded bg-[#ffe500] text-black font-bold">
                  VERIFIED
                </span>
              </div>

              <ul className="space-y-3.5 text-xs text-gray-700">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="h-4 w-4 text-black shrink-0 mt-0.5" />
                  <span>100% intellectual property transfer upon milestone sign-off</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="h-4 w-4 text-black shrink-0 mt-0.5" />
                  <span>Comprehensive bilateral NDA executed prior to discovery</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="h-4 w-4 text-black shrink-0 mt-0.5" />
                  <span>Direct lead architect communication with zero intermediary lag</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="h-4 w-4 text-black shrink-0 mt-0.5" />
                  <span>Dedicated overlapping working windows for UK, US, UAE & EU</span>
                </li>
              </ul>

              <div className="pt-3 border-t border-gray-200 flex items-center justify-between text-[10px] font-mono text-gray-400">
                <span>EST. 2024</span>
                <span>GLOBAL DELIVERY</span>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 5. CONTACT SECTION (Inquiry & Direct Connect) */}
      <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10 border-t border-gray-200">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Inquiries */}
          <FadeIn className="lg:col-span-5 space-y-6">
            <div className="flex items-center gap-3">
              <span className="px-2.5 py-1 rounded bg-[#ffe500] text-black font-mono font-black text-[11px] tracking-wider uppercase">
                05 / CONTACT
              </span>
              <span className="text-xs font-mono font-bold tracking-[0.2em] uppercase text-gray-500">
                Direct Inquiries
              </span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-black tracking-[-0.03em] text-[#0a0a0a] leading-tight">
              Start Your AI <br />
              <span className="relative inline-block mt-1">
                <span className="bg-[#ffe500] text-black px-3.5 py-0.5 rounded-lg font-black">
                  Automation Brief.
                </span>
              </span>
            </h2>

            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              Tell us about your business process bottlenecks or agency partnership brief. Our engineering leads review all submissions and respond within 24 business hours.
            </p>

            {/* Direct Channels Box */}
            <div className="p-6 rounded-2xl border border-gray-200 bg-gray-50/70 space-y-4 text-xs font-mono">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-white border border-gray-200 text-black">
                  <Mail className="h-4 w-4" />
                </div>
                <div>
                  <span className="text-[10px] text-gray-400 block uppercase tracking-wider">Direct Email</span>
                  <a href="mailto:vpveyora@gmail.com" className="text-black hover:text-amber-600 font-bold transition-colors">
                    vpveyora@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3 border-t border-gray-200 pt-3.5">
                <div className="p-2.5 rounded-xl bg-white border border-gray-200 text-black">
                  <Phone className="h-4 w-4" />
                </div>
                <div>
                  <span className="text-[10px] text-gray-400 block uppercase tracking-wider">WhatsApp Direct</span>
                  <a href="https://wa.me/919488890697" className="text-black hover:text-amber-600 font-bold transition-colors">
                    +91 9488890697
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3 border-t border-gray-200 pt-3.5">
                <div className="p-2.5 rounded-xl bg-white border border-gray-200 text-black">
                  <MapPin className="h-4 w-4" />
                </div>
                <div>
                  <span className="text-[10px] text-gray-400 block uppercase tracking-wider">Corporate Engineering</span>
                  <span className="text-gray-700">Tamil Nadu, India · Serving Globally</span>
                </div>
              </div>
            </div>

            <p className="text-[11px] text-gray-500 flex items-center gap-2 font-mono">
              <ShieldCheck className="h-4 w-4 text-emerald-600 shrink-0" />
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
