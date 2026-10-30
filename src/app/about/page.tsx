import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { GlassCard } from "@/components/shared/GlassCard";
import { Target, Eye, ShieldCheck, ArrowRight, Mail, Handshake, Globe2, Cpu } from "lucide-react";
import { LinkedInIcon, GitHubIcon } from "@/components/shared/SocialIcons";

export const metadata: Metadata = {
  title: "About VP VEYORA | AI Automation Delivery Partner",
  description: "Learn about VP VEYORA PRIVATE LIMITED — an India-based technology company building AI automation workflows and agent systems for international agencies and enterprises.",
  alternates: {
    canonical: "https://vpveyora.com/about",
  }
};

export default function AboutPage() {
  const values = [
    { 
      title: "Supervised Automation", 
      desc: "We engineer deterministic human-in-the-loop checkpoints into every workflow. AI handles data extraction and synthesis; human operators retain control over critical business decisions.", 
      icon: ShieldCheck 
    },
    { 
      title: "Agency-First Alignment", 
      desc: "We work as the quiet, reliable technical delivery arm for international digital agencies and consultancies, providing white-label code with 100% intellectual property transfer.", 
      icon: Handshake 
    },
    { 
      title: "Transparent Pragmatism", 
      desc: "We avoid hype and unrealistic claims. We scope realistic, measurable workflows, benchmark on synthetic datasets first, and deliver predictable milestone outcomes.", 
      icon: Target 
    },
    { 
      title: "Robust Architecture", 
      desc: "Using modern frameworks like Next.js, n8n, Python, and containerized microservices, our automations are built with retry queues, validation gates, and audit trails.", 
      icon: Cpu 
    }
  ];

  return (
    <div className="bg-base text-primary min-h-screen pt-32 pb-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto space-y-24">
        
        {/* Header Section */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full border border-brand/20 bg-brand/5 px-4 py-1.5 text-xs font-semibold text-brand">
            <Globe2 className="h-3.5 w-3.5" />
            <span>Company Profile</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-black tracking-tight leading-tight">
            Your Dedicated <span className="text-gradient">AI Automation Delivery Partner</span>
          </h1>
          <p className="text-secondary text-base sm:text-lg leading-relaxed">
            VP VEYORA PRIVATE LIMITED is an India-based technology company engineering supervised AI workflows, autonomous agents, and system integrations for growing businesses and international software agencies.
          </p>
        </div>

        {/* Global Positioning & Presence Note */}
        <div className="rounded-2xl border border-glass bg-card/60 p-8 sm:p-10 space-y-4 max-w-4xl mx-auto text-center">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-brand">
            International Delivery Model
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-primary">
            Engineering From India, Serving Globally
          </h2>
          <p className="text-secondary text-xs sm:text-sm leading-relaxed max-w-2xl mx-auto">
            Headquartered in Tamil Nadu, India, we collaborate closely with clients across the <strong>United Kingdom, United States, United Arab Emirates, Singapore, Australia, and Europe</strong>. We provide enterprise-grade technical delivery, time-zone overlapping communication, and competitive commercial structures.
          </p>
        </div>

        {/* Mission and Vision Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <GlassCard interactive={false} className="space-y-4 border-glass p-8">
            <div className="inline-flex p-3 rounded-xl bg-brand/10 text-brand border border-brand/20">
              <Target className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-bold text-primary">Our Mission</h3>
            <p className="text-secondary leading-relaxed text-xs sm:text-sm">
              To turn repetitive manual operations into supervised, intelligent AI workflows that save time, reduce clerical overhead, and free human professionals to focus on high-leverage strategic growth.
            </p>
          </GlassCard>

          <GlassCard interactive={false} className="space-y-4 border-glass p-8">
            <div className="inline-flex p-3 rounded-xl bg-brand/10 text-brand border border-brand/20">
              <Eye className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-bold text-primary">Our Vision</h3>
            <p className="text-secondary leading-relaxed text-xs sm:text-sm">
              To become the most dependable and technically rigorous white-label AI delivery partner for software agencies and technology consultancies internationally, recognized for honest scoping and zero-fluff execution.
            </p>
          </GlassCard>
        </div>

        {/* Core Values */}
        <div className="space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-brand">
              Engineering Ethos
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-primary">
              Core Principles Behind Our Delivery
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <div key={i} className="rounded-xl border border-glass bg-card p-6 space-y-3">
                <div className="inline-flex p-2.5 rounded-lg bg-brand/10 text-brand border border-brand/20">
                  <v.icon className="h-4 w-4" />
                </div>
                <h4 className="text-sm font-bold text-primary">{v.title}</h4>
                <p className="text-xs text-secondary leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Founder & Lead Architect */}
        <div className="border-t border-subtle pt-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Image / Name Card */}
            <div className="lg:col-span-5">
              <GlassCard className="border-glass p-8 flex flex-col items-center text-center space-y-6">
                <div className="relative h-36 w-36 rounded-full bg-gradient-to-tr from-[#1a1a1a] to-brand flex items-center justify-center text-inverse text-4xl font-black font-mono shadow-xl border border-brand/30">
                  VP
                </div>
                
                <div className="space-y-1">
                  <h3 className="text-2xl font-bold text-primary">Vignesh Pandiya</h3>
                  <p className="text-xs font-mono font-bold text-brand uppercase tracking-wider">
                    Founder & CEO · Lead Systems Architect
                  </p>
                  <p className="text-xs text-muted">Tamil Nadu, India</p>
                </div>

                <div className="flex space-x-3 pt-2">
                  <a 
                    href="https://linkedin.com/in/vigneshpandiya" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="p-2.5 rounded-lg border border-glass text-secondary hover:text-brand hover:border-brand/40 transition-colors"
                    aria-label="LinkedIn Profile"
                  >
                    <LinkedInIcon size={16} className="h-4 w-4" />
                  </a>
                  <a 
                    href="https://github.com/vigneshpandiyag" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="p-2.5 rounded-lg border border-glass text-secondary hover:text-brand hover:border-brand/40 transition-colors"
                    aria-label="GitHub Profile"
                  >
                    <GitHubIcon size={16} className="h-4 w-4" />
                  </a>
                  <a 
                    href="mailto:vpveyora@gmail.com" 
                    className="p-2.5 rounded-lg border border-glass text-secondary hover:text-brand hover:border-brand/40 transition-colors"
                    aria-label="Email Founder"
                  >
                    <Mail className="h-4 w-4" />
                  </a>
                </div>
              </GlassCard>
            </div>

            {/* Founder Biography & Commitment */}
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-mono font-bold uppercase tracking-widest text-brand">Executive Leadership</span>
                <h3 className="text-3xl font-extrabold tracking-tight text-primary">
                  Engineering Practical Solutions for Growing Enterprises
                </h3>
              </div>
              
              <p className="text-secondary leading-relaxed text-xs sm:text-sm">
                Founded by Vignesh Pandiya, VP VEYORA was established to bridge the gap between speculative AI trends and dependable enterprise software execution. We engineer workflow automations that companies can rely on for daily production workloads without fear of unpredictable outputs or system downtime.
              </p>
              
              <p className="text-secondary leading-relaxed text-xs sm:text-sm">
                As a lead systems architect, Vignesh personally oversees the technical feasibility assessments, schema designs, and validation logic for every agency partnership and direct client engagement. We maintain direct, engineer-to-engineer communication with zero sales fluff.
              </p>

              <div className="p-4 rounded-xl border border-brand/20 bg-brand/5 border-l-4 border-l-brand">
                <p className="text-xs text-primary italic leading-relaxed">
                  &ldquo;Our goal is straightforward: deliver rock-solid automation pipelines that save hours every single day, while giving our agency partners the confidence to pitch AI services knowing their technical delivery is in reliable hands.&rdquo;
                </p>
              </div>

              <div className="pt-2 flex flex-wrap gap-4">
                <Link
                  href="/partners"
                  className="inline-flex items-center gap-2 bg-brand text-inverse font-bold text-xs uppercase tracking-wider px-6 py-3 rounded-lg hover:bg-white transition-all shadow-md"
                >
                  <span>Discuss an Agency Partnership</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 glass border border-glass text-primary font-semibold text-xs uppercase tracking-wider px-6 py-3 rounded-lg hover:border-brand/40 hover:text-brand transition-all"
                >
                  <span>Schedule Architecture Discussion</span>
                </Link>
              </div>

            </div>

          </div>
        </div>

      </div>
    </div>
  );
}
