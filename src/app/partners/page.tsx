import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { 
  Building2, 
  Handshake, 
  ShieldCheck, 
  Briefcase, 
  ArrowRight, 
  CheckCircle2, 
  Globe2, 
  FileText, 
  Lock, 
  Cpu, 
  Bot, 
  Clock, 
  Zap,
  Users
} from "lucide-react";
import { ContactForm } from "@/components/sections/ContactForm";

export const metadata: Metadata = {
  title: "Agency & Delivery Partnership Program | VP VEYORA",
  description: "Deliver AI automation to your clients without building an AI team. White-label delivery, joint delivery, and referral partnerships for international agencies and consultancies.",
  alternates: {
    canonical: "https://vpveyora.com/partners",
  }
};

export default function PartnersPage() {
  const models = [
    {
      id: "white-label",
      title: "Model A: White-Label Delivery",
      subtitle: "Your Brand, Our Technical Execution",
      badge: "Most Popular for Agencies",
      desc: "Sell AI automation, document extraction pipelines, and intelligent workflows directly to your client base under your agency's name. VP VEYORA operates entirely as your silent technical delivery arm.",
      points: [
        "Complete client ownership remains with your agency",
        "Deliverables branded with your agency identity and domains",
        "Back-office engineering, QA, and maintenance handled by our team",
        "Transparent, predictable project-based or monthly retainer pricing",
        "Strict non-disclosure agreements (NDAs) signed prior to discovery"
      ]
    },
    {
      id: "joint-delivery",
      title: "Model B: Joint Delivery",
      subtitle: "Collaborative Co-Engineering",
      badge: "Ideal for Systems Integrators",
      desc: "Partner with us as your specialized AI automation co-engineers. We join stakeholder calls, co-design architecture blueprints, and implement technical integrations alongside your consultants.",
      points: [
        "Collaborative discovery, solution scoping, and architecture design",
        "VP VEYORA introduced as your specialized AI engineering partner",
        "Shared project management and milestone governance",
        "Tier-2 / Tier-3 technical escalation support for complex workflows",
        "Ideal for CRM consultants and IT firms tackling large client mandates"
      ]
    },
    {
      id: "referral",
      title: "Model C: Referral Partnership",
      subtitle: "Introduce Qualified Clients",
      badge: "For Advisors & Consultancies",
      desc: "Introduce enterprise clients or peers who require custom AI automation, workflow engineering, or system integrations. Receive an agreed referral fee under a formalized written agreement.",
      points: [
        "Commercial terms and referral percentages formalized per agreement",
        "Zero delivery overhead or implementation management required",
        "Transparent pipeline updates on project scoping and closure",
        "Reliable client experience handled by senior engineering leads",
        "Protection under bilateral commercial partner contracts"
      ]
    }
  ];

  const idealPartners = [
    {
      title: "Digital & Web Agencies",
      desc: "Expand your service catalog from websites and marketing into high-value AI workflows, chatbot agents, and internal automations without hiring in-house AI engineers.",
      icon: Globe2
    },
    {
      title: "CRM & ERP Implementation Partners",
      desc: "Solve custom client integration bottlenecks across HubSpot, Salesforce, Zoho, SAP, or QuickBooks using automated n8n pipelines and custom LLM extractors.",
      icon: Users
    },
    {
      title: "IT Managed Service Providers (MSPs)",
      desc: "Add modern cloud automation and internal knowledge RAG bots to your recurring managed services packages for SME and enterprise accounts.",
      icon: Cpu
    },
    {
      title: "Management & Growth Consultancies",
      desc: "Turn your operational optimization recommendations into working, tested code and automated workflows for international clients.",
      icon: Briefcase
    }
  ];

  const workflowSteps = [
    {
      step: "01",
      title: "Partner Alignment & NDA",
      desc: "We sign mutual non-disclosure and commercial agreements to ensure 100% intellectual property protection and clear boundaries."
    },
    {
      step: "02",
      title: "Requirement Scoping",
      desc: "Share your client's business bottleneck or have us participate in technical discovery under agreed communication guidelines."
    },
    {
      step: "03",
      title: "Fixed Scope & Prototype",
      desc: "We provide an architecture blueprint, milestone schedule, and fixed quote for the implementation sprint."
    },
    {
      step: "04",
      title: "Build, Test & Staging",
      desc: "Our engineers build the pipelines, test with synthetic edge-cases, and stage the integration with human approval gates."
    },
    {
      step: "05",
      title: "Deployment & Retainer SLA",
      desc: "Roll out to production with thorough documentation, staff training, and optional ongoing maintenance agreements."
    }
  ];

  return (
    <div className="bg-base text-primary min-h-screen pt-32 pb-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-24">

        {/* Hero Section */}
        <div className="text-center max-w-4xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-brand/20 bg-brand/5 px-4 py-1.5 text-xs font-semibold text-brand">
            <Handshake className="h-3.5 w-3.5" />
            <span>International Partner Program</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1]">
            Deliver AI Automation to Your Clients <br className="hidden sm:inline" />
            <span className="text-gradient">Without Building an AI Team.</span>
          </h1>

          <p className="text-secondary text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Partner with VP VEYORA as your dedicated technical implementation arm. We engineer reliable AI workflows, autonomous agents, and system integrations for agencies and consultancies in the UK, USA, UAE, Singapore, Australia, and Europe.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <a
              href="#partner-form"
              className="inline-flex items-center gap-2 bg-brand text-inverse font-bold text-xs uppercase tracking-[0.18em] px-8 py-4 rounded-lg hover:bg-white transition-all shadow-xl shadow-brand/20"
            >
              <span>Become a Delivery Partner</span>
              <ArrowRight className="h-4 w-4" />
            </a>
            <Link
              href="/demos"
              className="inline-flex items-center gap-2 glass border border-glass text-primary font-semibold text-xs uppercase tracking-[0.18em] px-8 py-4 rounded-lg hover:border-brand/40 hover:text-brand transition-all"
            >
              <span>Explore Live Demos</span>
            </Link>
          </div>
        </div>

        {/* 3 Partnership Models */}
        <div className="space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-brand">
              Structured Engagement
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-primary">
              Three Flexible Partnership Models
            </h2>
            <p className="text-xs sm:text-sm text-secondary">
              Choose the delivery structure that best fits your business model, client relationship, and operational strategy.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {models.map((model) => (
              <div
                key={model.id}
                className="rounded-2xl border border-glass bg-card p-8 flex flex-col justify-between space-y-6 hover:border-brand/40 transition-all duration-300 relative group"
              >
                <div className="space-y-4">
                  <span className="inline-block text-[10px] font-mono uppercase tracking-wider font-bold px-3 py-1 rounded-full bg-brand/10 text-brand border border-brand/20">
                    {model.badge}
                  </span>
                  <h3 className="text-xl font-bold text-primary">{model.title}</h3>
                  <h4 className="text-xs font-mono text-muted uppercase tracking-wider">{model.subtitle}</h4>
                  <p className="text-xs sm:text-sm text-secondary leading-relaxed">{model.desc}</p>
                  
                  <div className="space-y-2.5 pt-4 border-t border-subtle">
                    {model.points.map((point, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs text-secondary">
                        <CheckCircle2 className="h-3.5 w-3.5 text-brand shrink-0 mt-0.5" />
                        <span>{point}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 border-t border-subtle">
                  <a
                    href="#partner-form"
                    className="inline-flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-wider text-brand hover:text-primary transition-colors w-full p-2.5 rounded-lg border border-brand/20 bg-brand/5 hover:bg-brand/10"
                  >
                    <span>Inquire About {model.title.split(":")[0]}</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Ideal Partner Profiles */}
        <div className="space-y-12 border-t border-subtle pt-20">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-brand">
              Collaborative Ecosystem
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-primary">
              Who We Partner With
            </h2>
            <p className="text-xs sm:text-sm text-secondary">
              Designed specifically for service providers looking to deliver specialized AI capabilities without increasing internal technical payroll.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {idealPartners.map((partner, idx) => (
              <div
                key={idx}
                className="rounded-xl border border-glass bg-card p-6 space-y-4 hover:border-brand/35 transition-all"
              >
                <div className="inline-flex p-3 rounded-lg bg-brand/10 text-brand border border-brand/20">
                  <partner.icon className="h-5 w-5" />
                </div>
                <h3 className="text-base font-bold text-primary">{partner.title}</h3>
                <p className="text-xs text-secondary leading-relaxed">{partner.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Workflow & Responsibilities */}
        <div className="rounded-2xl border border-glass bg-card/60 p-8 sm:p-12 space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-brand">
              Clear Governance
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-primary">
              Joint Project Workflow & Responsibilities
            </h2>
            <p className="text-xs sm:text-sm text-secondary">
              Transparent handoffs and communication expectations ensure smooth delivery for every client project.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {workflowSteps.map((s, i) => (
              <div key={i} className="p-4 rounded-xl border border-glass bg-base/50 space-y-2">
                <span className="text-xs font-mono font-bold text-brand">{s.step}</span>
                <h4 className="text-sm font-bold text-primary">{s.title}</h4>
                <p className="text-xs text-muted leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>

          {/* Legal and Commercial Policy Notice */}
          <div className="rounded-xl border border-glass bg-base/80 p-6 space-y-3 text-xs text-secondary">
            <div className="flex items-center gap-2 text-primary font-bold">
              <Lock className="h-4 w-4 text-brand" />
              <span>Contractual Safeguards, IP, & Non-Disclosure</span>
            </div>
            <p className="leading-relaxed">
              Every partnership is bound by written contractual terms agreed upon by both parties before development commences. 
              Under white-label arrangements, all bespoke code, workflows, and intellectual property developed for your clients belong entirely to you or your client as defined in the Statement of Work (SOW). 
              Commercial terms, referral percentages, and payment milestones are tailored to project scope and formalized contractually.
            </p>
          </div>
        </div>

        {/* Partner Inquiry Form Section */}
        <div id="partner-form" className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start border-t border-subtle pt-20">
          
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-brand/20 bg-brand/5 px-3.5 py-1 text-xs font-semibold text-brand">
              <Building2 className="h-3.5 w-3.5" />
              <span>Partner Onboarding</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-primary leading-tight">
              Let's Discuss a <span className="text-gradient">Strategic Partnership</span>
            </h2>
            <p className="text-secondary text-sm leading-relaxed">
              Fill out the inquiry form to connect directly with VP VEYORA's leadership team. We will review your agency profile and schedule a dedicated partnership briefing within 24 hours.
            </p>

            <div className="p-6 rounded-xl border border-glass bg-card space-y-4 text-xs text-secondary">
              <h4 className="font-bold text-primary uppercase tracking-wider text-[11px]">What to expect:</h4>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5 text-brand" />
                  <span>Prompt response from Founder & CEO Vignesh Pandiya</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5 text-brand" />
                  <span>Discussion of technical capabilities, sample architectures & NDA</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5 text-brand" />
                  <span>Transparent partner rate card and pilot project scoping</span>
                </li>
              </ul>
            </div>

            <div className="pt-2 text-xs text-muted space-y-1">
              <p>Direct Partner Desk: <a href="mailto:vpveyora@gmail.com" className="text-brand hover:underline font-mono">vpveyora@gmail.com</a></p>
              <p>International Operations: Tamil Nadu, India · Serving UK, USA, UAE, EU, SG & AU</p>
            </div>
          </div>

          <div className="lg:col-span-7">
            <ContactForm initialInquiryType="White-label Partnership" />
          </div>

        </div>

      </div>
    </div>
  );
}
