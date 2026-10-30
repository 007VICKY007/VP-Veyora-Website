import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { AutomationDemos } from "@/components/sections/AutomationDemos";
import { ArrowRight, Sparkles, ShieldCheck, Cpu } from "lucide-react";

export const metadata: Metadata = {
  title: "Interactive AI Automation Demos | VP VEYORA",
  description: "Test live interactive simulations of AI lead qualification, document processing, and human-in-the-loop workflows built by VP VEYORA.",
  alternates: {
    canonical: "https://vpveyora.com/demos",
  }
};

export default function DemosPage() {
  return (
    <div className="bg-base text-primary min-h-screen pt-32 pb-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-brand/20 bg-brand/5 px-4 py-1.5 text-xs font-semibold text-brand">
            <Sparkles className="h-3.5 w-3.5" />
            <span>Interactive Workflow Testbench</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight">
            Practical AI Automation <span className="text-gradient">in Action</span>
          </h1>
          <p className="text-secondary text-base sm:text-lg leading-relaxed">
            Experience how VP VEYORA designs, validates, and orchestrates intelligent business workflows. Test live simulated scenarios below with transparent data inspection.
          </p>
        </div>

        {/* The Interactive Demo component */}
        <AutomationDemos />

        {/* Bottom CTA Card */}
        <div className="rounded-2xl border border-glass bg-card p-8 sm:p-12 text-center max-w-4xl mx-auto space-y-6">
          <div className="inline-flex p-3 rounded-xl bg-brand/10 text-brand border border-brand/20">
            <Cpu className="h-6 w-6" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-primary">
            Ready to Implement a Workflow for Your Business?
          </h2>
          <p className="text-secondary text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            Whether you need a proof-of-concept audit or a white-label delivery team for your agency, we build stable, supervised automation pipelines tailored to your stack.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <Link
              href="/partners"
              className="inline-flex items-center gap-2 bg-brand text-inverse font-bold text-xs uppercase tracking-[0.18em] px-8 py-4 rounded-lg hover:bg-white transition-all shadow-lg shadow-brand/20"
            >
              <span>Discuss an Agency Partnership</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 glass border border-glass text-primary font-semibold text-xs uppercase tracking-[0.18em] px-8 py-4 rounded-lg hover:border-brand/40 hover:text-brand transition-all"
            >
              <span>Request an Automation Audit</span>
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
