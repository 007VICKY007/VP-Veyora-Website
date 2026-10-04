import React from "react";
import Link from "next/link";
import { getPortfolio } from "@/lib/dataLoaders";
import { GlassCard } from "@/components/shared/GlassCard";
import { ArrowRight, ExternalLink, Award } from "lucide-react";

export default async function PortfolioPage() {
  const portfolio = await getPortfolio();

  return (
    <div className="bg-transparent text-white  min-h-screen py-20 px-4">
      <div className="max-w-6xl mx-auto space-y-16">
        
        {/* Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#F5C200] ">Our Works</span>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">Case Studies & Portfolio</h1>
          <p className="text-white/60  text-lg leading-relaxed">
            Examine the exact challenges, RAG integrations, and custom database structures we deployed for our enterprise partners.
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {portfolio.map((item) => {
            const results = typeof item.results === "string" ? {} : item.results;
            return (
              <GlassCard key={item.id} className="overflow-hidden p-0 border-white/08 /60 flex flex-col justify-between group hover:scale-[1.01] transition-transform">
                <div>
                  <div 
                    className="h-60 w-full bg-cover bg-center"
                    style={{ backgroundImage: `url(${item.imageUrl})` }}
                  />
                  <div className="p-8 space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-[#F5C200]  uppercase tracking-widest">{item.category}</span>
                      {item.featured && (
                        <span className="inline-flex items-center space-x-1 rounded-full bg-amber-500/10 px-2 py-0.5 text-[10px] text-amber-400 border border-amber-500/20">
                          <Award className="h-3 w-3" />
                          <span>Featured Case</span>
                        </span>
                      )}
                    </div>
                    
                    <h3 className="text-2xl font-bold text-white  group-hover:text-[#F5C200] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-sm text-white/60  leading-relaxed">
                      {item.description}
                    </p>

                    <div className="border-t border-white/08  pt-4 mt-4">
                      <p className="text-xs font-semibold text-white/40  uppercase tracking-wider mb-2">Metrics achieved:</p>
                      <div className="grid grid-cols-2 gap-4">
                        {Object.entries(results).map(([key, value]) => (
                          <div key={key} className="space-y-0.5">
                            <span className="text-[10px] text-white/40 ">{key}</span>
                            <p className="text-sm font-bold text-white ">{value}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="px-8 pb-8 pt-4">
                  <Link
                    href={`/portfolio/${item.slug}`}
                    className="inline-flex items-center space-x-2 rounded-xl bg-white/[0.04]  hover:bg-[#F5C200]/08 border border-[#F5C200]/25 hover:border-[#F5C200] px-5 py-3 text-sm font-semibold text-[#F5C200]  w-full justify-center transition-all duration-300 shadow-sm"
                  >
                    <span>Read Complete Case Study</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </GlassCard>
            );
          })}
        </div>

        {/* Tech Partner Note */}
        <div className="border-t border-white/[0.06]  p-8 sm:p-12 text-center space-y-6 max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold">Have a Technical Challenge to Solve?</h3>
          <p className="text-white/60  max-w-xl mx-auto text-sm sm:text-base">
            Founder Vignesh Pandiya will personally consult on system requirements and sketch architecture blueprints.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center space-x-2 rounded-full bg-[#F5C200] px-6 py-3 text-sm font-bold text-white  hover:bg-[#F5C200]/080 shadow-md"
          >
            <span>Consult on Your Project</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

      </div>
    </div>
  );
}
