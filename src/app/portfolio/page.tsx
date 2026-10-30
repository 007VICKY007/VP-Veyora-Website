import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { getPortfolio } from "@/lib/dataLoaders";
import { GlassCard } from "@/components/shared/GlassCard";
import { ArrowRight, ExternalLink, Layers, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Automation Demonstrations & Use Cases | VP VEYORA",
  description: "Explore practical automation architecture blueprints and synthetic dataset demonstrations built by VP VEYORA.",
  alternates: {
    canonical: "https://vpveyora.com/portfolio",
  }
};

export default async function PortfolioPage() {
  const portfolio = await getPortfolio();

  return (
    <div className="bg-base text-primary min-h-screen pt-32 pb-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto space-y-16">
        
        {/* Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full border border-brand/20 bg-brand/5 px-4 py-1.5 text-xs font-semibold text-brand">
            <Layers className="h-3.5 w-3.5" />
            <span>Architecture Blueprints</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
            Automation Demonstrations & Use Cases
          </h1>
          <p className="text-secondary text-base sm:text-lg leading-relaxed">
            Examine our technical workflow implementations, human-in-the-loop validation designs, and schema structures. 
            All featured case studies below represent illustrative architectural demonstrations evaluated on synthetic datasets.
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {portfolio.map((item) => {
            const results = typeof item.results === "string" ? {} : item.results;
            return (
              <GlassCard key={item.id} className="overflow-hidden p-0 border-glass flex flex-col justify-between group hover:border-brand/40 transition-all">
                <div>
                  <div 
                    className="h-56 w-full bg-cover bg-center border-b border-subtle"
                    style={{ backgroundImage: `url(${item.imageUrl})` }}
                  />
                  <div className="p-8 space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono font-bold text-brand uppercase tracking-widest">
                        {item.category}
                      </span>
                      <span className="inline-flex items-center space-x-1 rounded-full bg-brand/10 px-2.5 py-0.5 text-[10px] text-brand border border-brand/20 font-mono">
                        <span>Demonstration Model</span>
                      </span>
                    </div>
                    
                    <h2 className="text-2xl font-bold text-primary group-hover:text-brand transition-colors">
                      {item.title}
                    </h2>
                    <p className="text-xs sm:text-sm text-secondary leading-relaxed">
                      {item.description}
                    </p>

                    <div className="border-t border-subtle pt-4 mt-4">
                      <p className="text-[10px] font-mono uppercase tracking-wider text-muted mb-2">Technical Specifications:</p>
                      <div className="grid grid-cols-2 gap-3">
                        {Object.entries(results).map(([key, value]) => (
                          <div key={key} className="p-2.5 rounded-lg bg-base/60 border border-glass">
                            <span className="text-[10px] font-mono text-muted block">{key}</span>
                            <p className="text-xs font-bold font-mono text-primary mt-0.5">{value}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="px-8 pb-8 pt-2">
                  <Link
                    href={`/portfolio/${item.slug}`}
                    className="inline-flex items-center space-x-2 rounded-lg bg-brand text-inverse font-bold px-5 py-3 text-xs uppercase tracking-wider w-full justify-center transition-all hover:bg-white shadow-sm"
                  >
                    <span>Inspect Full Architecture Blueprint</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </GlassCard>
            );
          })}
        </div>

        {/* Tech Partner Note */}
        <div className="border-t border-subtle pt-16 text-center space-y-6 max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold text-primary">Need a Custom Automation Blueprint for Your Agency?</h3>
          <p className="text-secondary text-sm leading-relaxed">
            We partner with international agencies and software consultants to engineer white-label automation pipelines tailored to specific client tech stacks.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/partners"
              className="inline-flex items-center space-x-2 rounded-lg bg-brand px-7 py-3.5 text-xs font-bold uppercase tracking-wider text-inverse hover:bg-white shadow-md transition-all"
            >
              <span>Explore Agency Partnerships</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/demos"
              className="inline-flex items-center space-x-2 rounded-lg glass border border-glass px-7 py-3.5 text-xs font-bold uppercase tracking-wider text-primary hover:border-brand/40 hover:text-brand transition-all"
            >
              <span>Test Interactive Demos</span>
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
