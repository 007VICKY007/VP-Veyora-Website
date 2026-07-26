import React from "react";
import Link from "next/link";
import { GlassCard } from "@/components/shared/GlassCard";
import { Target, Eye, ShieldCheck, Heart, Award, ArrowRight } from "lucide-react";

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
          <span className="text-xs font-semibold uppercase tracking-wider text-[#00529b] dark:text-blue-400">VP Enterprises</span>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">Our Organization & Vision</h1>
          <p className="text-slate-600 dark:text-gray-400 text-lg sm:text-xl leading-relaxed">
            VP Enterprises is an AI-first technology company founded by Vignesh Pandiya. We engineer custom software and automate workflows to help startups and enterprises scale.
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
        <div className="border-t border-slate-200 dark:border-gray-900 pt-20">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
            
            {/* Image / Name Card */}
            <div className="lg:col-span-2 text-center lg:text-left space-y-4">
              <div className="h-48 w-48 rounded-full bg-gradient-to-tr from-[#00205b] via-purple-500 to-pink-500 mx-auto lg:mx-0 flex items-center justify-center text-slate-900 dark:text-white text-5xl font-bold font-mono shadow-2xl">
                VP
              </div>
              <div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Vignesh Pandiya</h3>
                <p className="text-[#00529b] dark:text-blue-400">Founder & CEO, Lead Architect</p>
                <p className="text-xs text-slate-500 dark:text-gray-500 mt-1">Tamil Nadu, India</p>
              </div>
            </div>

            {/* Founder Biography */}
            <div className="lg:col-span-3 space-y-6">
              <h3 className="text-2xl font-bold">Leading with Technology First</h3>
              <p className="text-slate-600 dark:text-gray-400 leading-relaxed text-sm sm:text-base">
                Founded by Vignesh Pandiya, VP Enterprises was built on the core belief that enterprise software should be clean, secure, and fast. Rather than outsourcing client architectures, Vignesh oversees all product layouts and system integrations personally.
              </p>
              <p className="text-slate-600 dark:text-gray-400 leading-relaxed text-sm sm:text-base">
                Whether implementing custom vector indexers for Retrieval Augmented Generation (RAG) or configuring Kubernetes pods on AWS, our organization guarantees clean documentation, structured codebases, and reliable client support.
              </p>
              <div className="flex flex-wrap gap-4 text-xs font-semibold text-slate-600 dark:text-gray-400">
                <span className="bg-white dark:bg-gray-900 border border-slate-200 dark:border-gray-800 px-3.5 py-1.5 rounded-full">AI AUTOMATION</span>
                <span className="bg-white dark:bg-gray-900 border border-slate-200 dark:border-gray-800 px-3.5 py-1.5 rounded-full">NEXT.JS ARCHITECT</span>
                <span className="bg-white dark:bg-gray-900 border border-slate-200 dark:border-gray-800 px-3.5 py-1.5 rounded-full">CYBERSECURITY</span>
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
        <div className="rounded-3xl bg-gradient-to-r from-indigo-950/60 to-purple-950/60 border border-[#00529b]/20 p-8 sm:p-12 text-center space-y-6">
          <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">Ready to consult on your digital roadmap?</h3>
          <p className="text-slate-700 dark:text-gray-300 max-w-xl mx-auto text-sm sm:text-base">
            Contact Vignesh Pandiya and the development team to schedule a system mapping discussion.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center space-x-2 rounded-full bg-white text-gray-950 hover:bg-gray-100 px-6 py-3 text-sm font-bold shadow-lg transition-all"
          >
            <span>Let's Connect</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

      </div>
    </div>
  );
}
