"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, CheckCircle2, ShieldCheck, Cpu } from "lucide-react";

export const Hero = ({ title, subtitle }: { title?: string; subtitle?: string }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeStep, setActiveStep] = useState(1);

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

  const pipelineSteps = [
    { step: "01", name: "Inbound Ingestion", desc: "Webhook, email attachments, or PDF payload", tag: "Ingested", color: "text-brand" },
    { step: "02", name: "AI Extraction & Triage", desc: "LLM schema parsing & intent scoring", tag: "99.2% Conf", color: "text-emerald-400" },
    { step: "03", name: "Validation & Human Gate", desc: "Deterministic business rules & approval check", tag: "Supervised", color: "text-brand" },
    { step: "04", name: "System Integration", desc: "Synchronized writes to CRM, ERP, and Slack", tag: "Synced", color: "text-primary" },
  ];

  return (
    <section
      ref={containerRef}
      className="relative min-h-[92vh] flex flex-col justify-center overflow-hidden bg-base"
      style={{
        background: "var(--overlay-gradient)",
        "--mx": "50%",
        "--my": "40%",
      } as React.CSSProperties}
    >
      {/* Ambient glow orbs */}
      <div className="absolute top-1/4 right-1/4 h-[420px] w-[420px] rounded-full bg-brand/10 glow-blur pointer-events-none" />
      <div className="absolute bottom-1/3 left-1/5 h-[360px] w-[360px] rounded-full bg-indigo-600/10 glow-blur pointer-events-none" />

      {/* Grid overlay */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none" style={{
        backgroundImage: `linear-gradient(var(--border-subtle) 1px, transparent 1px), linear-gradient(90deg, var(--border-subtle) 1px, transparent 1px)`,
        backgroundSize: "60px 60px"
      }} />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* Left Hero Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 space-y-6"
          >
            {/* Pill Badge */}
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="inline-flex items-center gap-2.5 glass px-4 py-1.5 rounded-full border border-brand/25 cursor-default shadow-sm"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-brand animate-ping" />
              <span className="text-[11px] font-mono font-bold tracking-[0.18em] uppercase text-brand">
                Your AI Automation Delivery Partner
              </span>
            </motion.div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-[1.1] tracking-tight">
              Turn Repetitive Business Operations into <br className="hidden sm:inline" />
              <span className="text-gradient">Intelligent AI Workflows.</span>
            </h1>

            {/* Concise Subtitle */}
            <p className="text-sm sm:text-base text-secondary leading-relaxed max-w-xl">
              {subtitle || "VP VEYORA helps software agencies and growing businesses automate manual processes with AI agents, document extraction pipelines, and custom system integrations."}
            </p>

            {/* Interactive CTAs with spring gesture */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                <Link
                  href="/partners"
                  className="inline-flex items-center gap-2 bg-[#F5C200] text-[#05050d] font-black text-xs uppercase tracking-[0.18em] px-7 py-3.5 rounded-lg shadow-lg shadow-brand/20 hover:bg-white transition-colors"
                >
                  <span>Discuss a Partnership</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </motion.div>

              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                <Link
                  href="/demos"
                  className="inline-flex items-center gap-2 glass border border-glass text-primary font-bold text-xs uppercase tracking-[0.18em] px-7 py-3.5 rounded-lg hover:border-brand/40 hover:text-brand transition-colors"
                >
                  <span>Explore Live Demos</span>
                </Link>
              </motion.div>

              <Link
                href="/contact"
                className="text-xs font-semibold text-muted hover:text-brand transition-colors uppercase tracking-[0.12em] underline underline-offset-4 pl-1"
              >
                Request an Audit &rarr;
              </Link>
            </div>

            {/* Lightweight Footprint Badges */}
            <div className="pt-4 border-t border-subtle flex flex-wrap items-center gap-x-5 gap-y-1.5 text-[11px] text-muted font-mono">
              <span className="font-bold text-primary uppercase">Footprint:</span>
              <span>United Kingdom</span>
              <span className="text-brand">·</span>
              <span>United States</span>
              <span className="text-brand">·</span>
              <span>UAE</span>
              <span className="text-brand">·</span>
              <span>Singapore</span>
              <span className="text-brand">·</span>
              <span>Australia</span>
              <span className="text-brand">·</span>
              <span>Europe</span>
            </div>
          </motion.div>

          {/* Right — Interactive Live Pipeline Execution Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 rounded-2xl border border-glass bg-card/90 backdrop-blur-xl p-6 sm:p-7 space-y-5 shadow-2xl relative"
          >
            <div className="flex items-center justify-between pb-3.5 border-b border-subtle">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-primary">
                  Supervised Pipeline Demo
                </span>
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-brand/10 text-brand border border-brand/20">
                Active
              </span>
            </div>

            {/* Interactive Steps */}
            <div className="space-y-2.5">
              {pipelineSteps.map((item, idx) => {
                const isSelected = activeStep === idx;
                return (
                  <motion.div
                    key={idx}
                    onClick={() => setActiveStep(idx)}
                    whileHover={{ x: 4 }}
                    transition={{ type: "spring", stiffness: 400, damping: 25 }}
                    className={`p-3 rounded-xl border text-xs cursor-pointer transition-colors flex items-center justify-between gap-3 ${
                      isSelected
                        ? "border-brand/40 bg-brand/5 shadow-sm"
                        : "border-glass bg-base/40 hover:border-brand/20"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-mono font-bold text-brand">{item.step}</span>
                      <div>
                        <h4 className="font-bold text-primary text-xs">{item.name}</h4>
                        <p className="text-[11px] text-muted">{item.desc}</p>
                      </div>
                    </div>
                    <span className={`text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 border border-white/10 shrink-0 ${item.color}`}>
                      {item.tag}
                    </span>
                  </motion.div>
                );
              })}
            </div>

            <div className="pt-3 border-t border-subtle flex items-center justify-between text-xs text-secondary">
              <span className="text-[11px] text-muted">Click any step to inspect</span>
              <Link href="/demos" className="text-brand font-bold hover:underline flex items-center gap-1 text-xs">
                <span>Launch Full Sandbox</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
