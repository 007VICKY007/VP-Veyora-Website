import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getPortfolio } from "@/lib/dataLoaders";
import { GlassCard } from "@/components/shared/GlassCard";
import { 
  ArrowRight, 
  CheckCircle2, 
  HelpCircle, 
  Settings, 
  BarChart, 
  Calendar,
  Building,
  User,
  ShieldCheck
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
    <div className="bg-transparent text-white  min-h-screen py-20 px-4">
      <div className="max-w-5xl mx-auto space-y-16">
        
        {/* Back Link & Header */}
        <div className="space-y-6">
          <Link 
            href="/portfolio" 
            className="inline-flex items-center space-x-2 text-xs font-semibold text-white/60  hover:text-[#F5C200]  transition-colors"
          >
            <ArrowRight className="h-4 w-4 rotate-180" />
            <span>Back to Portfolio</span>
          </Link>

          <div className="space-y-4 border-b border-white/08  pb-10">
            <span className="text-xs font-bold text-[#F5C200]  uppercase tracking-widest">{item.category}</span>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">{item.title}</h1>
            <p className="text-white/60  max-w-3xl leading-relaxed text-sm sm:text-base">
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
              <div className="flex items-center space-x-2 font-bold text-lg text-white ">
                <HelpCircle className="h-5 w-5 text-[#F5C200] " />
                <h3>The Challenge</h3>
              </div>
              <p className="text-sm sm:text-base text-white/60  leading-relaxed pl-7">
                {item.challenge}
              </p>
            </div>

            {/* The Solution */}
            <div className="space-y-4 border-t border-white/08  pt-10">
              <div className="flex items-center space-x-2 font-bold text-lg text-white ">
                <Settings className="h-5 w-5 text-[#F5C200]  animate-spin" style={{ animationDuration: '6s' }} />
                <h3>The Solution</h3>
              </div>
              <p className="text-sm sm:text-base text-white/60  leading-relaxed pl-7">
                {item.solution}
              </p>
            </div>

            {/* The Results */}
            <div className="space-y-6 border-t border-white/08  pt-10">
              <div className="flex items-center space-x-2 font-bold text-lg text-white ">
                <BarChart className="h-5 w-5 text-[#F5C200] " />
                <h3>The Results</h3>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pl-7">
                {Object.entries(results).map(([key, value]) => (
                  <GlassCard key={key} interactive={false} className="border-white/08    space-y-1">
                    <span className="text-[10px] text-white/40  uppercase tracking-wider font-semibold">{key}</span>
                    <h4 className="text-xl font-bold text-[#F5C200] ">{value}</h4>
                  </GlassCard>
                ))}
              </div>
            </div>

          </div>

          {/* Sidebar */}
          <div className="space-y-6 lg:sticky lg:top-24">
            
            {/* Project Parameters Card */}
            <GlassCard interactive={false} className="border-white/08  space-y-4 text-xs sm:text-sm">
              <h4 className="font-bold text-sm uppercase tracking-wider text-white/40">Case Metadata</h4>
              
              <ul className="space-y-4">
                <li className="flex items-center space-x-3 text-white/60 ">
                  <Building className="h-5 w-5 text-[#F5C200]  shrink-0" />
                  <div>
                    <span className="text-xs text-white/40  block">Client</span>
                    <strong className="text-white  font-semibold">{item.client}</strong>
                  </div>
                </li>
                <li className="flex items-center space-x-3 text-white/60 ">
                  <Calendar className="h-5 w-5 text-[#F5C200]  shrink-0" />
                  <div>
                    <span className="text-xs text-white/40  block">Deploy Timeline</span>
                    <strong className="text-white  font-semibold">1-3 Months</strong>
                  </div>
                </li>
                <li className="flex items-center space-x-3 text-white/60 ">
                  <User className="h-5 w-5 text-[#F5C200]  shrink-0" />
                  <div>
                    <span className="text-xs text-white/40  block">Lead Architect</span>
                    <strong className="text-white  font-semibold">Vignesh Pandiya</strong>
                  </div>
                </li>
                <li className="flex items-center space-x-3 text-white/60 ">
                  <ShieldCheck className="h-5 w-5 text-[#F5C200]  shrink-0" />
                  <div>
                    <span className="text-xs text-white/40  block">Status</span>
                    <strong className="text-white  font-semibold text-green-400">Completed & Verified</strong>
                  </div>
                </li>
              </ul>
            </GlassCard>

            {/* CTA */}
            <GlassCard className="border-[#F5C200]/20 bg-[#F5C200]/05 border border-[#F5C200]/20/50  border border-[#F5C200]/20/50 space-y-4 text-center">
              <h4 className="font-bold text-base text-white ">Require Similar Automation?</h4>
              <p className="text-xs text-white/60  leading-relaxed">
                Connect with our development team. We provide full code ownership and deployment services.
              </p>
              <Link
                href="/contact"
                className="flex w-full items-center justify-center space-x-2 rounded-xl bg-gradient-to-r from-[#1a1a1a] via-[#F5C200] to-[#D4A800] px-4 py-2.5 text-xs sm:text-sm font-bold text-white shadow-md hover:scale-[1.01] transition-all"
              >
                <span>Request Case Blueprint</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </GlassCard>

          </div>

        </div>

      </div>
    </div>
  );
}
