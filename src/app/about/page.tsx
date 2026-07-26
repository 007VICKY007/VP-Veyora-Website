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
    <div className="bg-transparent text-slate-900 dark:text-white min-h-screen py-20 px-4">
      <div className="max-w-6xl mx-auto space-y-20">
        
        {/* Header Section */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#00529b] dark:text-blue-400">VP Enterpriceses</span>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">Our Organization & Vision</h1>
          <p className="text-slate-600 dark:text-gray-400 text-lg sm:text-xl leading-relaxed">
            VP Enterpriceses is an AI-first technology company founded by Vignesh Pandiya. We engineer custom software and automate workflows to help startups and enterprises scale.
          </p>
        </div>

        {/* Mission and Vision Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <GlassCard interactive={false} className="space-y-4 border-[#00529b]/20">
            <div className="inline-flex p-3 rounded-xl bg-blue-500/10 text-[#00529b] dark:text-blue-400">
              <Target className="h-6 w-6" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Our Mission</h3>
            <p className="text-slate-600 dark:text-gray-400 leading-relaxed text-sm sm:text-base">
              Helping businesses automate, innovate, and grow using Artificial Intelligence and modern software technologies. We build automated data loops, custom LLM models, and secure ERP/CRM databases that release workers from tedious admin workloads.
            </p>
          </GlassCard>

          <GlassCard interactive={false} className="space-y-4 border-purple-500/20">
            <div className="inline-flex p-3 rounded-xl bg-sky-500/10 text-slate-500 dark:text-slate-400">
              <Eye className="h-6 w-6" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Our Vision</h3>
            <p className="text-slate-600 dark:text-gray-400 leading-relaxed text-sm sm:text-base">
              To become one of India's leading AI and Digital Transformation companies delivering world-class enterprise solutions. We aim to bridge the gap between abstract academic AI research and real-world industrial software execution.
            </p>
          </GlassCard>
        </div>

        {/* Founder Spotlights */}
        <div className="border-t border-slate-200 pt-20">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
            
            {/* Image / Name Card */}
            <div className="lg:col-span-2">
              <GlassCard className="border-slate-200/60 shadow-xl hover:shadow-[#00529b]/10 hover:border-[#00529b]/35 transition-all duration-300 p-8 rounded-3xl flex flex-col items-center text-center space-y-6">
                <div className="relative group">
                  <div className="absolute -inset-0.5 bg-gradient-to-tr from-[#00205b] to-[#0072ce] rounded-full blur opacity-25 group-hover:opacity-40 transition duration-300"></div>
                  <div className="relative h-40 w-40 rounded-full bg-gradient-to-tr from-[#00205b] to-[#00529b] flex items-center justify-center text-white text-5xl font-bold font-mono shadow-md border border-slate-200/50 transform hover:scale-105 transition-transform duration-300 select-none">
                    VP
                  </div>
                </div>
                
                <div className="space-y-1">
                  <h3 className="text-2xl font-bold text-slate-900">Vignesh Pandiya</h3>
                  <p className="text-sm font-semibold text-[#00529b]">Founder & CEO, Lead Architect</p>
                  <p className="text-xs text-slate-500">Tamil Nadu, India</p>
                </div>

                <div className="flex space-x-3 pt-2">
                  <a href="https://linkedin.com/in/vigneshpandiya" target="_blank" rel="noopener noreferrer" className="p-2.5 bg-slate-50 hover:bg-blue-50 text-slate-600 hover:text-[#00529b] rounded-full border border-slate-200 transition-colors" aria-label="LinkedIn Profile">
                    <LinkedInIcon size={16} className="h-4 w-4" />
                  </a>
                  <a href="https://github.com/vigneshpandiyag" target="_blank" rel="noopener noreferrer" className="p-2.5 bg-slate-50 hover:bg-blue-50 text-slate-600 hover:text-[#00529b] rounded-full border border-slate-200 transition-colors" aria-label="GitHub Profile">
                    <GitHubIcon size={16} className="h-4 w-4" />
                  </a>
                  <a href="mailto:contact@vpenterprises.in" className="p-2.5 bg-slate-50 hover:bg-blue-50 text-slate-600 hover:text-[#00529b] rounded-full border border-slate-200 transition-colors" aria-label="Email Founder">
                    <Mail className="h-4 w-4" />
                  </a>
                </div>
              </GlassCard>
            </div>

            {/* Founder Biography */}
            <div className="lg:col-span-3 space-y-6">
              <div className="space-y-2 text-center lg:text-left">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#00529b]">Executive Leadership</span>
                <h3 className="text-3xl font-extrabold tracking-tight text-slate-900">Leading with Innovation First</h3>
              </div>
              
              <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                Under the strategic leadership of Vignesh Pandiya, VP Enterpriceses functions as a premier technology partner, engineering robust AI solutions and custom enterprise architectures that drive digital transformation. We specialize in building intelligent automation frameworks, scalable software ecosystems, and secure cloud infrastructures that empower organizations to modernize workflows and unlock new growth avenues.
              </p>
              
              <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                Rather than deploying generic integrations, we establish high-trust, long-term partnerships with our clients. We combine rigorous cybersecurity protocols with advanced artificial intelligence implementations to deliver zero-trust, high-concurrency systems that align perfectly with complex business objectives and compliance standards.
              </p>

              {/* Founder Quote / Vision Statement */}
              <div className="border-l-4 border-[#00529b] pl-4 italic text-slate-700 text-sm sm:text-base bg-blue-50/50 py-3 pr-2 rounded-r-xl">
                "Our mission is to bridge the gap between complex technological capabilities and actual business outcomes. We don't just build software; we engineer competitive advantages through intelligent automation and secure, scalable design."
              </div>

              {/* Enterprise Trust Indicators / Expertise Tags */}
              <div className="space-y-3 pt-2">
                <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 block">Core Enterprise Capabilities</span>
                <div className="flex flex-wrap gap-2 text-xs font-semibold text-slate-700">
                  <span className="bg-blue-50 border border-blue-100 px-3.5 py-1.5 rounded-full">AI Solutions</span>
                  <span className="bg-blue-50 border border-blue-100 px-3.5 py-1.5 rounded-full">Enterprise Software</span>
                  <span className="bg-blue-50 border border-blue-100 px-3.5 py-1.5 rounded-full">Cloud & DevOps</span>
                  <span className="bg-blue-50 border border-blue-100 px-3.5 py-1.5 rounded-full">Cybersecurity</span>
                  <span className="bg-blue-50 border border-blue-100 px-3.5 py-1.5 rounded-full">Global Delivery</span>
                  <span className="bg-blue-50 border border-blue-100 px-3.5 py-1.5 rounded-full">Client Success</span>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Core Values Section */}
        <div className="border-t border-slate-200 dark:border-gray-900 pt-20 space-y-12">
          <div className="text-center space-y-2">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Our Core Principles</h2>
            <p className="text-slate-600 dark:text-gray-400 text-sm max-w-lg mx-auto">The foundations of how we structure packages, build files, and manage client relations.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((v, idx) => {
              const ValIcon = v.icon;
              return (
                <GlassCard key={idx} className="space-y-4 hover:border-[#00529b]/20">
                  <div className="inline-flex p-2.5 rounded-lg bg-blue-500/10 text-[#00529b] dark:text-blue-400">
                    <ValIcon className="h-5 w-5" />
                  </div>
                  <h4 className="font-bold text-slate-900 dark:text-white text-lg">{v.title}</h4>
                  <p className="text-sm text-slate-600 dark:text-gray-400 leading-relaxed">{v.desc}</p>
                </GlassCard>
              );
            })}
          </div>
        </div>

        {/* CTA Banner */}
        <div className="rounded-3xl bg-gradient-to-r from-[#00205b]/5 via-[#00529b]/10 to-blue-50 border border-blue-100/50 p-8 sm:p-12 text-center space-y-6">
          <h3 className="text-2xl sm:text-3xl font-bold text-slate-900">Ready to consult on your digital roadmap?</h3>
          <p className="text-slate-700 max-w-xl mx-auto text-sm sm:text-base">
            Contact Vignesh Pandiya and the development team to schedule a system mapping discussion.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center space-x-2 rounded-full bg-gradient-to-r from-[#00205b] to-[#00529b] px-6 py-3 text-sm font-bold text-white hover:scale-105 shadow-lg shadow-blue-900/10 transition-all"
          >
            <span>Let's Connect</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

      </div>
    </div>
  );
}
