"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

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
      className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-base"
      style={{
        background: "var(--overlay-gradient)",
        "--mx": "50%",
        "--my": "40%",
      } as React.CSSProperties}
    >
      {/* Atmospheric glow orbs */}
      <div className="absolute top-1/4 right-1/4 h-[500px] w-[500px] rounded-full bg-brand/8 glow-blur animate-glow" />
      <div className="absolute bottom-1/3 left-1/5 h-[400px] w-[400px] rounded-full bg-purple-600/8 glow-blur animate-glow" style={{ animationDelay: "2s" }} />
      <div className="absolute top-1/2 left-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-900/10 glow-blur animate-glow" style={{ animationDelay: "4s" }} />

      {/* Grid overlay */}
      <div className="absolute inset-0 opacity-[0.015]" style={{
        backgroundImage: `linear-gradient(var(--border-subtle) 1px, transparent 1px), linear-gradient(90deg, var(--border-subtle) 1px, transparent 1px)`,
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
            <div className="inline-flex items-center gap-3 glass px-4 py-2 rounded-full border border-brand/20">
              <span className="h-1.5 w-1.5 rounded-full bg-brand animate-pulse" />
              <span className="text-xs font-semibold tracking-[0.2em] uppercase text-brand">
                Your AI Automation Delivery Partner
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-[1.1] tracking-tight">
              {title || (
                <>
                  Turn Repetitive Business Operations into <br className="hidden sm:inline" />
                  <span className="text-gradient">Intelligent AI Workflows.</span>
                </>
              )}
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-secondary leading-relaxed max-w-xl">
              {subtitle || "VP VEYORA helps software agencies and growing businesses automate manual processes with AI agents, intelligent workflows, and custom system integrations. From initial discovery to deployment and ongoing support, we build practical automation solutions that save time and simplify operations."}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                href="/partners"
                className="group inline-flex items-center gap-2.5 bg-brand text-inverse font-bold text-xs uppercase tracking-[0.18em] px-7 py-4 hover:bg-white transition-all duration-300 hover:shadow-2xl hover:shadow-brand/20 hover:-translate-y-0.5 rounded-lg"
              >
                Discuss a Partnership
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/demos"
                className="inline-flex items-center gap-2 glass border border-glass text-primary font-semibold text-xs uppercase tracking-[0.18em] px-7 py-4 hover:border-brand/40 hover:text-brand transition-all duration-300 rounded-lg"
              >
                Explore Live Demos
              </Link>
              <Link
                href="/contact"
                className="text-xs font-semibold text-muted hover:text-brand transition-colors uppercase tracking-[0.15em] underline underline-offset-4"
              >
                Request an Automation Audit
              </Link>
            </div>

            {/* Target Delivery Regions */}
            <div className="pt-6 border-t border-subtle flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-muted">
              <span className="font-semibold uppercase tracking-wider text-primary">Delivery Footprint:</span>
              <span>United States</span>
              <span className="text-brand">·</span>
              <span>United Kingdom</span>
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

          {/* Right — Live Architecture Flow Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="rounded-2xl border border-glass bg-card/80 backdrop-blur-xl p-6 sm:p-8 space-y-6 shadow-2xl relative overflow-hidden"
          >
            <div className="flex items-center justify-between pb-4 border-b border-subtle">
              <div className="flex items-center gap-2.5">
                <span className="h-2 w-2 rounded-full bg-emerald-400 animate-ping" />
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-primary">
                  Workflow Execution Pipeline
                </span>
              </div>
              <span className="text-[10px] font-mono px-2.5 py-1 rounded bg-brand/10 text-brand border border-brand/20">
                Human-in-the-Loop Active
              </span>
            </div>

            {/* Pipeline Steps */}
            <div className="space-y-3.5">
              {[
                { step: "01", name: "Inbound Ingestion", desc: "Webhook, email attachments, PDF/invoices, or REST payload", tag: "Received" },
                { step: "02", name: "AI Extraction & Triage", desc: "LLM schema parsing, entity normalization & intent scoring", tag: "99.2% Conf" },
                { step: "03", name: "Validation & Human Gate", desc: "Business rules check & discrepancy escalation review", tag: "Supervised" },
                { step: "04", name: "System Integration", desc: "Automated write to CRM, ERP, database, and Slack notifications", tag: "Completed" },
              ].map((item, idx) => (
                <div key={idx} className="p-3.5 rounded-xl border border-glass bg-base/50 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-mono font-bold text-brand">{item.step}</span>
                    <div>
                      <h4 className="text-xs font-bold text-primary">{item.name}</h4>
                      <p className="text-[11px] text-muted">{item.desc}</p>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 border border-white/10 text-secondary whitespace-nowrap">
                    {item.tag}
                  </span>
                </div>
              ))}
            </div>

            <div className="pt-4 border-t border-subtle flex items-center justify-between text-xs text-secondary">
              <span>Engineered by VP VEYORA</span>
              <Link href="/demos" className="text-brand hover:underline font-semibold inline-flex items-center gap-1">
                Test Live Simulator &rarr;
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-6 lg:left-8 flex flex-col items-center gap-2"
        >
          <span className="text-[10px] tracking-[0.3em] uppercase text-muted rotate-0">Scroll</span>
          <div className="w-px h-12 bg-brand" />
        </motion.div>
      </div>
    </section>
  );
};
