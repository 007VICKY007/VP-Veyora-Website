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
  ArrowRight, 
  CheckCircle2, 
  Mail, 
  Phone, 
  MapPin, 
  ShieldCheck, 
  Handshake,
  Sparkles
} from "lucide-react";

export default function HomePage() {
  // 4 Core Services as requested
  const services = [
    {
      id: "ai-agents",
      title: "AI Agents",
      desc: "Autonomous 24/7 digital assistants that qualify inbound leads, triage support tickets, and execute multi-step operational tasks.",
      icon: Bot,
      color: "from-cyan-400 to-blue-500",
      accent: "border-cyan-500/30",
      glow: "hover:shadow-cyan-500/20",
      tag: "Autonomous 24/7"
    },
    {
      id: "workflow-automation",
      title: "Workflow Automation",
      desc: "Event-driven pipelines connecting your APIs, webhooks, and databases to eliminate manual copy-pasting and clerical lag.",
      icon: Workflow,
      color: "from-purple-500 to-indigo-500",
      accent: "border-purple-500/30",
      glow: "hover:shadow-purple-500/20",
      tag: "Event-Driven"
    },
    {
      id: "ai-integrations",
      title: "AI Integrations",
      desc: "Seamless bidirectional sync between HubSpot, Salesforce, SAP, QuickBooks, and internal databases with human validation gates.",
      icon: Zap,
      color: "from-pink-500 to-rose-500",
      accent: "border-pink-500/30",
      glow: "hover:shadow-pink-500/20",
      tag: "100% Supervised"
    },
    {
      id: "custom-ai-solutions",
      title: "Custom AI Solutions",
      desc: "Bespoke domain-tuned LLM architectures, RAG knowledge-base search engines, and secure internal tools built for your unique stack.",
      icon: Cpu,
      color: "from-teal-400 to-cyan-500",
      accent: "border-teal-500/30",
      glow: "hover:shadow-teal-500/20",
      tag: "Custom Engineered"
    }
  ];

  return (
    <div className="bg-base text-primary min-h-screen">
      
      {/* 1. HERO SECTION */}
      <Hero />

      {/* 2. SERVICES SECTION */}
      <section id="services" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/5">
        <FadeIn className="text-center max-w-2xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/5 px-3.5 py-1 text-xs font-mono font-bold text-cyan-400 uppercase">
            <Sparkles className="h-3.5 w-3.5" />
            <span>Specialized Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white">
            Core AI <span className="text-gradient-cyan">Capabilities</span>
          </h2>
          <p className="text-secondary text-sm sm:text-base leading-relaxed">
            High-velocity, production-tested AI architectures engineered to eliminate operational friction.
          </p>
        </FadeIn>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((item) => {
            const Icon = item.icon;
            return (
              <StaggerItem key={item.id}>
                <HoverCard className={`h-full rounded-2xl border ${item.accent} bg-card p-7 flex flex-col justify-between space-y-6 transition-all duration-300 hover:border-white/30 shadow-xl ${item.glow} group relative overflow-hidden`}>
                  
                  {/* Subtle top corner gradient glow */}
                  <div className={`absolute -top-10 -right-10 w-28 h-28 bg-gradient-to-br ${item.color} rounded-full blur-2xl opacity-20 group-hover:opacity-40 transition-opacity pointer-events-none`} />

                  <div className="space-y-4 relative z-10">
                    <div className="flex items-center justify-between">
                      <div className={`p-3 rounded-xl bg-gradient-to-br ${item.color} text-black font-bold shadow-md`}>
                        <Icon className="h-6 w-6" />
                      </div>
                      <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10 text-white/70">
                        {item.tag}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {item.title}
                    </h3>
                    
                    <p className="text-xs text-secondary leading-relaxed">
                      {item.desc}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-white/10 relative z-10">
                    <a
                      href="#contact"
                      className="inline-flex items-center gap-1.5 text-xs font-mono font-bold uppercase tracking-wider text-cyan-400 hover:text-white transition-colors"
                    >
                      <span>Scope This Solution</span>
                      <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </HoverCard>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </section>

      {/* 3. AI IN ACTION (INTERACTIVE WORKFLOW DEMO) */}
      <section id="ai-in-action" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/5">
        <AiInActionDemo />
      </section>

      {/* 4. PARTNERSHIPS SECTION */}
      <section id="partners" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/5">
        <div className="rounded-3xl border border-purple-500/30 bg-gradient-to-b from-purple-950/20 via-black to-[#050512] p-8 sm:p-14 relative overflow-hidden shadow-2xl">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Column */}
            <div className="lg:col-span-8 space-y-5">
              <div className="inline-flex items-center gap-2 rounded-full border border-purple-400/30 bg-purple-400/10 px-3.5 py-1 text-xs font-mono font-bold text-purple-300 uppercase">
                <Handshake className="h-3.5 w-3.5" />
                <span>International Delivery Partnership</span>
              </div>

              <h2 className="text-3xl sm:text-5xl font-black text-white leading-[1.1]">
                Scale Your Agency With <br />
                <span className="text-gradient-violet">Dedicated AI Engineering.</span>
              </h2>

              <p className="text-secondary text-sm sm:text-base leading-relaxed max-w-xl">
                We invite international software agencies, CRM consultants, and digital firms in the UK, USA, UAE, Singapore, Australia, and Europe to partner with VP VEYORA. Deliver enterprise AI automation under your brand without hiring in-house AI teams.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 pt-3">
                <div className="p-4 rounded-xl border border-white/10 bg-white/[0.02]">
                  <h4 className="text-sm font-bold text-white">White-Label</h4>
                  <p className="text-xs text-white/50 mt-1">We build silently under your agency brand</p>
                </div>
                <div className="p-4 rounded-xl border border-white/10 bg-white/[0.02]">
                  <h4 className="text-sm font-bold text-white">Joint Delivery</h4>
                  <p className="text-xs text-white/50 mt-1">Co-engineering on complex client briefs</p>
                </div>
                <div className="p-4 rounded-xl border border-white/10 bg-white/[0.02]">
                  <h4 className="text-sm font-bold text-white">Referral Model</h4>
                  <p className="text-xs text-white/50 mt-1">Formalized written referral agreement</p>
                </div>
              </div>

              <div className="pt-4 flex flex-wrap gap-4">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-black font-mono text-xs uppercase tracking-[0.18em] text-black bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 hover:from-white hover:to-white transition-all shadow-lg shadow-purple-500/20"
                >
                  <span>Become a Partner</span>
                  <ArrowRight className="h-4 w-4" />
                </a>
                <Link
                  href="/partners"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-bold font-mono text-xs uppercase tracking-[0.16em] text-white border border-white/15 hover:border-purple-400 transition-colors"
                >
                  <span>Read Full Partner Guide</span>
                </Link>
              </div>
            </div>

            {/* Right Column: Safeguards Card */}
            <div className="lg:col-span-4 rounded-2xl border border-white/10 bg-black/60 p-6 sm:p-7 space-y-4">
              <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-400">
                Partner Commitments
              </h4>
              <ul className="space-y-3 text-xs text-secondary">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="h-4 w-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span>100% intellectual property transfer upon milestone completion</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="h-4 w-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span>Bilateral NDA signed prior to any technical discovery</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="h-4 w-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span>Direct lead architect communication with zero sales fluff</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="h-4 w-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span>Dedicated overlapping time zones with UK, US, UAE & EU</span>
                </li>
              </ul>
            </div>

          </div>

        </div>
      </section>

      {/* 5. CONTACT SECTION */}
      <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/5">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Inquiries */}
          <FadeIn className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/5 px-3.5 py-1 text-xs font-mono font-bold text-cyan-400 uppercase">
              <Mail className="h-3.5 w-3.5" />
              <span>Direct Connect</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white leading-tight">
              Let&apos;s Build Your <br />
              <span className="text-gradient-ai">AI Advantage.</span>
            </h2>

            <p className="text-secondary text-sm sm:text-base leading-relaxed">
              Share your business requirements or agency partnership brief. Our engineering team reviews all inquiries and responds within 24 business hours.
            </p>

            {/* Direct Channels */}
            <div className="p-6 rounded-2xl border border-white/10 bg-black/40 space-y-4 text-xs font-mono">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-cyan-400/10 text-cyan-400">
                  <Mail className="h-4 w-4" />
                </div>
                <div>
                  <span className="text-[10px] text-white/40 block uppercase">Email Directly</span>
                  <a href="mailto:vpveyora@gmail.com" className="text-white hover:text-cyan-400 font-bold">
                    vpveyora@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3 border-t border-white/5 pt-3">
                <div className="p-2 rounded-lg bg-purple-400/10 text-purple-400">
                  <Phone className="h-4 w-4" />
                </div>
                <div>
                  <span className="text-[10px] text-white/40 block uppercase">WhatsApp Direct</span>
                  <a href="https://wa.me/919488890697" className="text-white hover:text-purple-400 font-bold">
                    +91 9488890697
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3 border-t border-white/5 pt-3">
                <div className="p-2 rounded-lg bg-pink-400/10 text-pink-400">
                  <MapPin className="h-4 w-4" />
                </div>
                <div>
                  <span className="text-[10px] text-white/40 block uppercase">Engineering Hub</span>
                  <span className="text-white">Tamil Nadu, India · Serving Globally</span>
                </div>
              </div>
            </div>

            <p className="text-[11px] text-white/40 flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-emerald-400 shrink-0" />
              <span>All client inquiries are bound by strict confidentiality standards.</span>
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
