"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Brain, Cpu, ShieldCheck, TrendingUp } from "lucide-react";
import { Counter } from "../shared/MotionWrappers";
import { TypewriterText } from "../shared/RunningText";

export const Hero = ({ title, subtitle }: { title: string; subtitle: string }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      containerRef.current.style.setProperty("--mx", `${x}%`);
      containerRef.current.style.setProperty("--my", `${y}%`);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-transparent"
      style={{
        background: `
          radial-gradient(ellipse 80% 60% at var(--mx, 50%) var(--my, 40%), rgba(245,194,0,0.06) 0%, transparent 60%),
          radial-gradient(ellipse 60% 80% at 80% 20%, rgba(100,60,200,0.08) 0%, transparent 50%),
          radial-gradient(ellipse 50% 50% at 20% 80%, rgba(0,100,255,0.05) 0%, transparent 50%),
          #05050d
        `,
        "--mx": "50%",
        "--my": "40%",
      } as React.CSSProperties}
    >
      {/* Atmospheric glow orbs */}
      <div className="absolute top-1/4 right-1/4 h-[500px] w-[500px] rounded-full bg-[#F5C200]/8 glow-blur animate-glow" />
      <div className="absolute bottom-1/3 left-1/5 h-[400px] w-[400px] rounded-full bg-purple-600/8 glow-blur animate-glow" style={{ animationDelay: "2s" }} />
      <div className="absolute top-1/2 left-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-900/10 glow-blur animate-glow" style={{ animationDelay: "4s" }} />

      {/* Grid overlay */}
      <div className="absolute inset-0 opacity-[0.015]" style={{
        backgroundImage: `linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)`,
        backgroundSize: "80px 80px"
      }} />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-32 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-8"
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-3 glass px-4 py-2 rounded-full border border-[#F5C200]/20">
              <span className="h-1.5 w-1.5 rounded-full bg-[#F5C200] animate-pulse" />
              <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#F5C200]/80">
                VP Veyora · SaaS Based Company
              </span>
            </div>

            {/* Headline with running letter typewriter */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black leading-[1.05] tracking-tight">
              <span className="text-white">Engineering</span><br />
              <span className="text-gradient">AI Solutions</span><br />
              <span className="text-white/80">for </span>
              <TypewriterText
                words={["Tomorrow.", "Modern Scale.", "Automation.", "Enterprise SaaS.", "Growth."]}
                className="text-[#F5C200] glow-gold-text"
              />
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-white/50 leading-relaxed max-w-md">
              {subtitle || "Building intelligent technology for growing businesses worldwide — custom software, cloud, AI automation, and cybersecurity."}
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4 pt-2">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2.5 bg-[#F5C200] text-[#05050d] font-bold text-sm uppercase tracking-[0.15em] px-8 py-4 hover:bg-white transition-all duration-300 hover:shadow-2xl hover:shadow-[#F5C200]/20 hover:-translate-y-0.5"
              >
                Get Started
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 glass border border-white/10 text-white/70 font-semibold text-sm uppercase tracking-[0.15em] px-8 py-4 hover:text-white hover:border-[#F5C200]/30 transition-all duration-300"
              >
                Explore Services
              </Link>
            </div>

            {/* Stats row with animated counter */}
            <div className="flex gap-8 pt-4 border-t border-white/05">
              {[
                { val: "50+", label: "Projects Delivered" },
                { val: "3×", label: "Avg Client Growth" },
                { val: "30+", label: "SaaS Apps Built" },
              ].map((s) => (
                <Counter
                  key={s.label}
                  value={s.val}
                  label={s.label}
                  className="text-2xl font-black text-[#F5C200]"
                />
              ))}
            </div>
          </motion.div>

          {/* Right — Minimal Tech Cards */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="grid grid-cols-2 gap-4"
          >
            {[
              { icon: Brain, label: "AI & Machine Learning", desc: "Autonomous agents, RAG, LLM pipelines", glow: true },
              { icon: TrendingUp, label: "Workflow Automation", desc: "n8n, Make.com, operational efficiency", glow: false },
              { icon: Cpu, label: "Custom SaaS Systems", desc: "Enterprise CRM, ERP, modern portals", glow: false },
              { icon: ShieldCheck, label: "Cybersecurity Audits", desc: "Pentest, zero-trust, security posture", glow: true },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + i * 0.1 }}
                className="rounded-xl border border-white/[0.08] bg-white/[0.015] p-6 hover:border-[#F5C200]/40 hover:bg-white/[0.03] transition-all duration-300 group cursor-default"
              >
                <div className={`inline-flex p-2.5 mb-4 rounded-lg transition-transform duration-300 group-hover:scale-110 ${item.glow ? "bg-[#F5C200]/10 border border-[#F5C200]/20" : "bg-white/05 border border-white/08"}`}>
                  <item.icon className={`h-5 w-5 ${item.glow ? "text-[#F5C200]" : "text-white/50"}`} />
                </div>
                <h3 className="text-sm font-bold text-white mb-1.5 leading-tight group-hover:text-[#F5C200] transition-colors">{item.label}</h3>
                <p className="text-xs text-white/40 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-6 lg:left-8 flex flex-col items-center gap-2"
        >
          <span className="text-[10px] tracking-[0.3em] uppercase text-white/25 rotate-0">Scroll</span>
          <div className="w-px h-12" />
        </motion.div>
      </div>
    </section>
  );
};
