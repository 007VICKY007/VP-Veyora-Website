import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getPortfolio } from "@/lib/dataLoaders";
import { GlassCard } from "@/components/shared/GlassCard";
import { 
  ArrowRight, 
  HelpCircle, 
  Settings, 
  BarChart, 
  Calendar,
  Building,
  User,
  ShieldCheck,
  Layers,
  Database
} from "lucide-react";

interface CaseStudyDetailProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const portfolio = await getPortfolio();
  return portfolio.map((p) => ({
    slug: p.slug,
  }));
}

export default async function CaseStudyDetailPage({ params }: CaseStudyDetailProps) {
  const { slug } = await params;
  const portfolio = await getPortfolio();
  const item = portfolio.find((p) => p.slug === slug);

  if (!item) {
    notFound();
  }

  const results = typeof item.results === "string" ? {} : item.results;

  return (
    <div className="bg-base text-primary min-h-screen pt-32 pb-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto space-y-16">
        
        {/* Back Link & Header */}
        <div className="space-y-6">
          <Link 
            href="/portfolio" 
            className="inline-flex items-center space-x-2 text-xs font-semibold text-secondary hover:text-brand transition-colors"
          >
            <ArrowRight className="h-4 w-4 rotate-180" />
            <span>Back to Demonstrations & Cases</span>
          </Link>

          <div className="space-y-4 border-b border-subtle pb-10">
            <div className="flex items-center gap-3">
              <span className="text-xs font-mono font-bold text-brand uppercase tracking-widest">{item.category}</span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 border border-white/10 text-muted">
                Synthetic Benchmark
              </span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">{item.title}</h1>
            <p className="text-secondary max-w-3xl leading-relaxed text-sm sm:text-base">
              {item.description}
            </p>
          </div>
        </div>

        {/* Dynamic Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          
          {/* Main case details */}
          <div className="lg:col-span-2 space-y-10">
            
            {/* The Challenge */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2 font-bold text-lg text-primary">
                <HelpCircle className="h-5 w-5 text-brand" />
                <h3>The Operational Challenge</h3>
              </div>
              <p className="text-sm sm:text-base text-secondary leading-relaxed pl-7">
                {item.challenge}
              </p>
            </div>

            {/* The Solution */}
            <div className="space-y-4 border-t border-subtle pt-10">
              <div className="flex items-center space-x-2 font-bold text-lg text-primary">
                <Settings className="h-5 w-5 text-brand animate-spin" style={{ animationDuration: '8s' }} />
                <h3>Architectural Solution & Pipeline</h3>
              </div>
              <p className="text-sm sm:text-base text-secondary leading-relaxed pl-7">
                {item.solution}
              </p>
            </div>

            {/* Technical Metrics */}
            <div className="space-y-6 border-t border-subtle pt-10">
              <div className="flex items-center space-x-2 font-bold text-lg text-primary">
                <BarChart className="h-5 w-5 text-brand" />
                <h3>Demonstration Benchmarks (Synthetic)</h3>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pl-7">
                {Object.entries(results).map(([key, value]) => (
                  <GlassCard key={key} interactive={false} className="border-glass space-y-1">
                    <span className="text-[10px] text-muted uppercase tracking-wider font-mono font-semibold">{key}</span>
                    <h4 className="text-lg font-bold font-mono text-primary">{value}</h4>
                  </GlassCard>
                ))}
              </div>
            </div>

          </div>

          {/* Sidebar */}
          <div className="space-y-6 lg:sticky lg:top-28">
            
            {/* Project Parameters Card */}
            <GlassCard interactive={false} className="border-glass space-y-4 text-xs sm:text-sm">
              <h4 className="font-bold text-xs uppercase tracking-wider text-muted font-mono">Blueprint Context</h4>
              
              <ul className="space-y-4">
                <li className="flex items-center space-x-3 text-secondary">
                  <Layers className="h-4 w-4 text-brand shrink-0" />
                  <div>
                    <span className="text-[10px] text-muted block uppercase">Classification</span>
                    <strong className="text-primary font-semibold">{item.client}</strong>
                  </div>
                </li>
                <li className="flex items-center space-x-3 text-secondary">
                  <Calendar className="h-4 w-4 text-brand shrink-0" />
                  <div>
                    <span className="text-[10px] text-muted block uppercase">Typical Implementation</span>
                    <strong className="text-primary font-semibold">2 – 4 Weeks</strong>
                  </div>
                </li>
                <li className="flex items-center space-x-3 text-secondary">
                  <User className="h-4 w-4 text-brand shrink-0" />
                  <div>
                    <span className="text-[10px] text-muted block uppercase">Lead Architect</span>
                    <strong className="text-primary font-semibold">Vignesh Pandiya</strong>
                  </div>
                </li>
                <li className="flex items-center space-x-3 text-secondary">
                  <ShieldCheck className="h-4 w-4 text-brand shrink-0" />
                  <div>
                    <span className="text-[10px] text-muted block uppercase">Verification Status</span>
                    <strong className="text-emerald-400 font-semibold">Deterministic & Supervised</strong>
                  </div>
                </li>
              </ul>
            </GlassCard>

            {/* CTA */}
            <GlassCard className="border-brand/30 bg-brand/5 space-y-4 text-center">
              <h4 className="font-bold text-sm text-primary">Need This Implemented?</h4>
              <p className="text-xs text-secondary leading-relaxed">
                We can adapt this pipeline to your agency's client base or proprietary internal systems.
              </p>
              <Link
                href="/contact"
                className="flex w-full items-center justify-center space-x-2 rounded-lg bg-brand px-4 py-3 text-xs font-bold uppercase tracking-wider text-inverse shadow-md hover:bg-white transition-all"
              >
                <span>Request Custom Scoping</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </GlassCard>

          </div>

        </div>

      </div>
    </div>
  );
}
