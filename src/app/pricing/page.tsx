"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  CheckCircle2, 
  ArrowRight, 
  HelpCircle, 
  AlertCircle, 
  ShieldCheck, 
  FileText, 
  DollarSign, 
  RefreshCw,
  Zap,
  Globe2
} from "lucide-react";

export default function PricingPage() {
  const [currency, setCurrency] = useState<"INR" | "USD">("USD");

  const packages = [
    {
      id: "discovery",
      title: "Discovery & Automation Audit",
      badge: "Initial Assessment",
      priceINR: "₹10,000 – ₹20,000",
      priceUSD: "$150 – $250",
      timeframe: "3 – 5 Business Days",
      bestFor: "Businesses and agencies seeking clarity on feasibility, architecture, and exact ROI before committing to development.",
      deliverables: [
        "In-depth analysis of existing manual workflows and bottleneck points",
        "Technical feasibility assessment across LLM models and API availability",
        "Architecture blueprint & recommended integration stack",
        "Deterministic human-in-the-loop validation flow design",
        "Detailed Statement of Work (SOW) with fixed milestones"
      ],
      cta: "Book an Audit",
      highlighted: false
    },
    {
      id: "poc",
      title: "Small Proof of Concept (PoC)",
      badge: "Fast Validation",
      priceINR: "₹25,000 – ₹60,000",
      priceUSD: "$350 – $750",
      timeframe: "1 – 2 Weeks",
      bestFor: "Testing a single focused automation (e.g. invoice extraction or lead triage) with synthetic test datasets.",
      deliverables: [
        "Single automated workflow implementation (n8n / custom worker)",
        "Core prompt engineering, schema validation, and confidence scoring",
        "Synthetic edge-case dataset testing and error benchmarking",
        "Functional web sandbox demo for internal stakeholder review",
        "Complete technical walkthrough and handoff documentation"
      ],
      cta: "Build a PoC",
      highlighted: true
    },
    {
      id: "pilot",
      title: "Production AI Automation Pilot",
      badge: "Production Ready",
      priceINR: "₹60,000 – ₹1,50,000",
      priceUSD: "$800 – $2,000",
      timeframe: "3 – 6 Weeks",
      bestFor: "Deploying end-to-end multi-system workflows connected to live CRMs, ERPs, databases, and alerting channels.",
      deliverables: [
        "Multi-stage automated pipeline with live API authentication",
        "Bidirectional CRM/ERP sync (HubSpot, Salesforce, SAP, QuickBooks)",
        "Operator exception dashboard & human approval escalation gates",
        "Dead-letter queue (DLQ) retry logic and audit trail logging",
        "30-day post-launch warranty and bug remediation SLA"
      ],
      cta: "Scope a Pilot",
      highlighted: false
    },
    {
      id: "retainer",
      title: "Ongoing Maintenance & SLA Support",
      badge: "Continuous Retainer",
      priceINR: "Scoped Monthly Agreement",
      priceUSD: "Scoped Monthly Agreement",
      timeframe: "Monthly Retainer",
      bestFor: "Agencies requiring continuous white-label engineering capacity, model tuning, and 24/7 uptime monitoring.",
      deliverables: [
        "Dedicated monthly engineering sprint hours for new workflows",
        "Continuous monitoring of third-party API changes and model version updates",
        "Prompt regression testing and schema drift adjustments",
        "Priority bug-fix turnaround according to agreed SLA tiers",
        "Monthly performance, throughput, and error analysis reporting"
      ],
      cta: "Discuss Retainer",
      highlighted: false
    }
  ];

  const deliveryPrinciples = [
    {
      title: "Scope Boundaries",
      desc: "Each engagement is defined by an agreed Statement of Work (SOW) detailing exact input sources, transformation rules, and output endpoints. Out-of-scope feature requests are evaluated under a transparent change-order process."
    },
    {
      title: "Third-Party & API Usage Costs",
      desc: "Package estimates reflect engineering implementation fees. Direct operational costs (e.g., OpenAI API tokens, AWS hosting, n8n cloud subscriptions) are paid directly by the client or billed transparently at actuals."
    },
    {
      title: "Payment Milestones",
      desc: "Standard project contracts operate on clear milestones (typically 40% upfront deposit upon SOW signing, 40% upon staging demo approval, and 20% upon final production deployment and handoff)."
    },
    {
      title: "Intellectual Property & Ownership",
      desc: "Upon final milestone settlement, 100% of custom-developed code, scripts, workflow definitions, and architectural documentation belong exclusively to the client or agency partner."
    }
  ];

  return (
    <div className="bg-base text-primary min-h-screen pt-32 pb-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-20">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-brand">
            Transparent Engagement
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight">
            Indicative Service <span className="text-gradient">Engagement Packages</span>
          </h1>
          <p className="text-secondary text-base sm:text-lg leading-relaxed">
            Predictable, phased delivery from initial technical audit to production deployment. All packages are tailored to your required endpoints, validation depth, and compliance standards.
          </p>

          {/* Currency Toggle */}
          <div className="pt-4 flex items-center justify-center gap-3">
            <span className="text-xs font-semibold uppercase tracking-wider text-muted">Display Currency:</span>
            <div className="inline-flex p-1 rounded-xl border border-glass bg-card">
              <button
                onClick={() => setCurrency("USD")}
                className={`px-4 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-all ${
                  currency === "USD" ? "bg-brand text-inverse shadow-sm" : "text-secondary hover:text-primary"
                }`}
              >
                USD ($)
              </button>
              <button
                onClick={() => setCurrency("INR")}
                className={`px-4 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-all ${
                  currency === "INR" ? "bg-brand text-inverse shadow-sm" : "text-secondary hover:text-primary"
                }`}
              >
                INR (₹)
              </button>
            </div>
          </div>
        </div>

        {/* Disclaimer Alert */}
        <div className="rounded-xl border border-glass bg-card/60 p-4 sm:p-5 max-w-4xl mx-auto text-xs text-secondary flex items-start gap-3">
          <AlertCircle className="h-4 w-4 text-brand shrink-0 mt-0.5" />
          <p className="leading-relaxed">
            <strong>Indicative Pricing Notice:</strong> The rates shown below are initial planning hypotheses based on typical project scopes. Final commercial pricing is confirmed after the initial technical audit and depends on integration complexity, compliance requirements, volume tiers, and ongoing SLA needs.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {packages.map((pkg) => (
            <div
              key={pkg.id}
              className={`rounded-2xl border p-7 flex flex-col justify-between space-y-6 transition-all duration-300 relative ${
                pkg.highlighted 
                  ? "border-brand bg-card shadow-2xl shadow-brand/10 ring-1 ring-brand/40" 
                  : "border-glass bg-card/80 hover:border-brand/40"
              }`}
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono uppercase tracking-wider px-2.5 py-0.5 rounded bg-brand/10 text-brand border border-brand/20 font-bold">
                    {pkg.badge}
                  </span>
                  <span className="text-[10px] font-mono text-muted">{pkg.timeframe}</span>
                </div>

                <h3 className="text-xl font-bold text-primary">{pkg.title}</h3>
                
                <div className="py-2 border-y border-subtle">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-muted block">Starting at:</span>
                  <p className="text-2xl font-black text-primary font-mono mt-0.5">
                    {currency === "USD" ? pkg.priceUSD : pkg.priceINR}
                  </p>
                </div>

                <p className="text-xs text-secondary leading-relaxed">{pkg.bestFor}</p>

                <div className="space-y-2 pt-2">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-muted block">Key Scope:</span>
                  {pkg.deliverables.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-secondary">
                      <CheckCircle2 className="h-3.5 w-3.5 text-brand shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-subtle">
                <Link
                  href={`/contact?package=${encodeURIComponent(pkg.title)}`}
                  className={`w-full inline-flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-[0.15em] py-3.5 rounded-lg transition-all ${
                    pkg.highlighted 
                      ? "bg-brand text-inverse hover:bg-white shadow-md" 
                      : "border border-glass hover:border-brand text-primary hover:text-brand bg-base/50"
                  }`}
                >
                  <span>{pkg.cta}</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Delivery Stages & Commercial Policies */}
        <div className="rounded-2xl border border-glass bg-card/60 p-8 sm:p-12 space-y-10">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-brand">
              Professional Governance
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-primary">
              Delivery Stages & Commercial Boundaries
            </h2>
            <p className="text-xs sm:text-sm text-secondary">
              We operate with strict commercial clarity to protect your timeline and budget.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {deliveryPrinciples.map((item, idx) => (
              <div key={idx} className="p-6 rounded-xl border border-glass bg-base/50 space-y-2.5">
                <h4 className="text-sm font-bold text-primary flex items-center gap-2">
                  <ShieldCheck className="h-4 w-4 text-brand" />
                  <span>{item.title}</span>
                </h4>
                <p className="text-xs text-secondary leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          {/* International Quote Callout */}
          <div className="p-6 rounded-xl border border-brand/20 bg-brand/5 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="space-y-1">
              <h4 className="text-sm font-bold text-primary">Need a Custom USD or Regional Quote?</h4>
              <p className="text-xs text-secondary">
                We accommodate international billing in USD, GBP, EUR, and AED for clients in the UK, USA, UAE, and Europe.
              </p>
            </div>
            <Link
              href="/contact?type=usd-quote"
              className="inline-flex items-center gap-2 bg-brand text-inverse text-xs font-bold uppercase tracking-wider px-6 py-3 rounded-lg hover:bg-white transition-all whitespace-nowrap shadow-sm"
            >
              <span>Request a Custom Quote</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
