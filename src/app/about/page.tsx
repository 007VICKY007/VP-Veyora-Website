import React from "react";
import Link from "next/link";
import { GlassCard } from "@/components/shared/GlassCard";
import { Target, Eye, ShieldCheck, Heart, Award, ArrowRight, Mail } from "lucide-react";
import { LinkedInIcon, GitHubIcon } from "@/components/shared/SocialIcons";

export default function AboutPage() {
  const values = [
    { title: "Real Problem Solving", desc: "We believe software should resolve operational bottlenecks, cut down overhead, and deliver genuine corporate value, rather than just look good.", icon: Target },
    { title: "AI-First Architectures", desc: "We build machine intelligence and agentic workflows directly into core database structures, making automation a native platform layer.", icon: Award },
    { title: "Proactive Security", desc: "Security is non-negotiable. All SaaS portals, APIs, and systems undergo rigid network audits and ethical hacking checks before deploy.", icon: ShieldCheck },
    { title: "Scalability & Speed", desc: "Using systems like Next.js 15, PostgreSQL, and AWS containerization, we ensure low latency under high concurrency.", icon: Heart }
  ];

  return (
    <div className="bg-transparent text-white  min-h-screen py-20 px-4">
      <div className="max-w-6xl mx-auto space-y-20">
        
        {/* Header Section */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#F5C200] ">VP Veyora Private Limited</span>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">Our Organization & Vision</h1>
          <p className="text-white/60  text-lg sm:text-xl leading-relaxed">
            VP Veyora Private Limited is an AI-first technology company founded by Vignesh Pandiya. We engineer custom software and automate workflows to help startups and enterprises scale.
          </p>
        </div>

        {/* Mission and Vision Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <GlassCard interactive={false} className="space-y-4 border-[#F5C200]/20">
            <div className="inline-flex p-3 rounded-xl bg-yellow-500/10 text-[#F5C200] ">
              <Target className="h-6 w-6" />
            </div>
            <h3 className="text-2xl font-bold text-white ">Our Mission</h3>
            <p className="text-white/60  leading-relaxed text-sm sm:text-base">
              Helping businesses automate, innovate, and grow using Artificial Intelligence and modern software technologies. We build automated data loops, custom LLM models, and secure ERP/CRM databases that release workers from tedious admin workloads.
            </p>
          </GlassCard>

          <GlassCard interactive={false} className="space-y-4 border-purple-500/20">
            <div className="inline-flex p-3 rounded-xl bg-sky-500/10 text-white/40">
              <Eye className="h-6 w-6" />
            </div>
            <h3 className="text-2xl font-bold text-white ">Our Vision</h3>
            <p className="text-white/60  leading-relaxed text-sm sm:text-base">
              To become one of India's leading AI and Digital Transformation companies delivering world-class enterprise solutions. We aim to bridge the gap between abstract academic AI research and real-world industrial software execution.
            </p>
          </GlassCard>
        </div>

        {/* Founder Spotlights */}
        <div className="border-t border-white/08 pt-20">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
            
            {/* Image / Name Card */}
            <div className="lg:col-span-2">
              <GlassCard className="border-white/08/60 shadow-xl hover:shadow-[#F5C200]/10 hover:border-[#F5C200]/35 transition-all duration-300 p-8 flex flex-col items-center text-center space-y-6">
                <div className="relative group">
                  <div className="absolute -inset-0.5 bg-gradient-to-tr from-[#1a1a1a] to-[#D4A800] rounded-full blur opacity-25 group-hover:opacity-40 transition duration-300"></div>
                  <div className="relative h-40 w-40 rounded-full bg-gradient-to-tr from-[#1a1a1a] to-[#F5C200] flex items-center justify-center text-white text-5xl font-bold font-mono shadow-md border border-white/08/50 transform hover:scale-105 transition-transform duration-300 select-none">
                    VP
                  </div>
                </div>
                
                <div className="space-y-1">
                  <h3 className="text-2xl font-bold text-white">Vignesh Pandiya</h3>
                  <p className="text-sm font-semibold text-[#F5C200]">Founder & CEO, Lead Architect</p>
                  <p className="text-xs text-white/40">Tamil Nadu, India</p>
                </div>

                <div className="flex space-x-3 pt-2">
                  <a href="https://linkedin.com/in/vigneshpandiya" target="_blank" rel="noopener noreferrer" className="p-2.5 hover:bg-[#F5C200]/08 text-white/60 hover:text-[#F5C200] rounded-full border border-white/08 transition-colors" aria-label="LinkedIn Profile">
                    <LinkedInIcon size={16} className="h-4 w-4" />
                  </a>
                  <a href="https://github.com/vigneshpandiyag" target="_blank" rel="noopener noreferrer" className="p-2.5 hover:bg-[#F5C200]/08 text-white/60 hover:text-[#F5C200] rounded-full border border-white/08 transition-colors" aria-label="GitHub Profile">
                    <GitHubIcon size={16} className="h-4 w-4" />
                  </a>
                  <a href="mailto:vpveyora@gmail.com" className="p-2.5 hover:bg-[#F5C200]/08 text-white/60 hover:text-[#F5C200] rounded-full border border-white/08 transition-colors" aria-label="Email Founder">
                    <Mail className="h-4 w-4" />
                  </a>
                </div>
              </GlassCard>
            </div>

            {/* Founder Biography */}
            <div className="lg:col-span-3 space-y-6">
              <div className="space-y-2 text-center lg:text-left">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#F5C200]">Executive Leadership</span>
                <h3 className="text-3xl font-extrabold tracking-tight text-white">Leading with Innovation First</h3>
              </div>
              
              <p className="text-white/60 leading-relaxed text-sm sm:text-base">
                Under the strategic leadership of Vignesh Pandiya, VP Veyora Private Limited functions as a premier technology partner, engineering robust AI solutions and custom enterprise architectures that drive digital transformation. We specialize in building intelligent automation frameworks, scalable software ecosystems, and secure cloud infrastructures that empower organizations to modernize workflows and unlock new growth avenues.
              </p>
              
              <p className="text-white/60 leading-relaxed text-sm sm:text-base">
                Rather than deploying generic integrations, we establish high-trust, long-term partnerships with our clients. We combine rigorous cybersecurity protocols with advanced artificial intelligence implementations to deliver zero-trust, high-concurrency systems that align perfectly with complex business objectives and compliance standards.
              </p>

              {/* Founder Quote / Vision Statement */}
              <div className="border-l-2 border-[#F5C200] pl-4 italic text-white/80 text-sm sm:text-base py-2">
                "Our mission is to bridge the gap between complex technological capabilities and actual business outcomes. We don't just build software; we engineer competitive advantages through intelligent automation and secure, scalable design."
              </div>

              {/* Enterprise Trust Indicators / Expertise Tags */}
              <div className="space-y-3 pt-2">
                <span className="text-xs font-semibold uppercase tracking-wider text-white/30 block">Core Enterprise Capabilities</span>
                <div className="flex flex-wrap gap-2 text-xs font-semibold text-white/70">
                  <span className="bg-white/[0.03] border border-white/[0.08] px-3.5 py-1.5 rounded-lg">AI Solutions</span>
                  <span className="bg-white/[0.03] border border-white/[0.08] px-3.5 py-1.5 rounded-lg">Enterprise Software</span>
                  <span className="bg-white/[0.03] border border-white/[0.08] px-3.5 py-1.5 rounded-lg">Cloud & DevOps</span>
                  <span className="bg-white/[0.03] border border-white/[0.08] px-3.5 py-1.5 rounded-lg">Cybersecurity</span>
                  <span className="bg-white/[0.03] border border-white/[0.08] px-3.5 py-1.5 rounded-lg">Global Delivery</span>
                  <span className="bg-white/[0.03] border border-white/[0.08] px-3.5 py-1.5 rounded-lg">Client Success</span>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Core Values Section */}
        <div className="border-t border-white/08  pt-20 space-y-12">
          <div className="text-center space-y-2">
            <h2 className="text-3xl font-bold text-white ">Our Core Principles</h2>
            <p className="text-white/60  text-sm max-w-lg mx-auto">The foundations of how we structure packages, build files, and manage client relations.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((v, idx) => {
              const ValIcon = v.icon;
              return (
                <GlassCard key={idx} className="space-y-4 hover:border-[#F5C200]/20">
                  <div className="inline-flex p-2.5 rounded-lg bg-yellow-500/10 text-[#F5C200] ">
                    <ValIcon className="h-5 w-5" />
                  </div>
                  <h4 className="font-bold text-white  text-lg">{v.title}</h4>
                  <p className="text-sm text-white/60  leading-relaxed">{v.desc}</p>
                </GlassCard>
              );
            })}
          </div>
        </div>

        {/* CTA — minimal, no background box */}
        <div className="border-t border-white/[0.06] pt-16 text-center space-y-5">
          <div className="w-10 h-px bg-[#F5C200] mx-auto" />
          <h3 className="text-2xl sm:text-3xl font-bold text-white">
            Ready to start your project?
          </h3>
          <p className="text-white/40 max-w-md mx-auto text-sm">
            Schedule a consultation with our team.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-[#F5C200] px-8 py-3.5 text-sm font-bold text-[#05050d] hover:bg-white transition-colors duration-300"
          >
            <span>Let's Connect</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

      </div>
    </div>
  );
}
