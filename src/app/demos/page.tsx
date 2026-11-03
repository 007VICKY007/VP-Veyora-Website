import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { DemoShowcase } from "@/components/sections/DemoShowcase";
import { ArrowRight, Sparkles, Cpu, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Live Product Demos & AI Automation Engine | VP VEYORA",
  description: "Watch live product recordings and test interactive simulations of AI lead qualification, document processing, and human-in-the-loop workflows built by VP VEYORA.",
  alternates: {
    canonical: "https://vpveyora.com/demos",
  }
};

export default function DemosPage() {
  return (
    <div className="bg-white text-[#0a0a0a] min-h-screen pt-32 pb-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-gray-200 bg-gray-50 text-xs font-mono font-bold uppercase tracking-wider text-black">
            <span className="h-2 w-2 rounded-full bg-[#ffe500]" />
            <span>Product Walkthrough & Testbench</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-[-0.03em] leading-tight">
            See Our AI Product <br />
            <span className="relative inline-block mt-1">
              <span className="bg-[#ffe500] text-black px-3.5 py-0.5 rounded-lg font-black">
                In Active Deployment.
              </span>
            </span>
          </h1>
          <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
            Watch our live product walkthrough video or run simulated real-world scenarios below to evaluate how our autonomous pipelines parse inputs, normalize data, and stage enterprise actions.
          </p>
        </div>

        {/* Demo Showcase Component (Video + Simulator) */}
        <DemoShowcase />

        {/* Bottom Call to Action Card */}
        <div className="rounded-3xl border border-gray-200 bg-gray-50/70 p-8 sm:p-12 text-center max-w-4xl mx-auto space-y-6 shadow-editorial">
          <div className="inline-flex p-3 rounded-2xl bg-white border border-gray-200 text-black shadow-xs">
            <Cpu className="h-6 w-6" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-[#0a0a0a]">
            Ready to Implement This Engine in Your Business?
          </h2>
          <p className="text-gray-600 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            Whether you need a proof-of-concept audit or a white-label delivery team for your agency, we build stable, supervised automation pipelines tailored to your stack.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <Link
              href="/partners"
              className="inline-flex items-center gap-2 bg-[#ffe500] hover:bg-black hover:text-white text-black font-mono font-bold text-xs uppercase tracking-[0.18em] px-8 py-4 rounded-xl transition-all shadow-sm"
            >
              <span>Discuss an Agency Partnership</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 border border-gray-300 hover:border-black bg-white text-black font-mono font-bold text-xs uppercase tracking-[0.18em] px-8 py-4 rounded-xl transition-all"
            >
              <span>Request an Automation Audit</span>
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
