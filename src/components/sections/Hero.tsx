"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { AiThreeScene } from "./AiThreeScene";
import { 
  RunningLettersTicker, 
  RunningLetterHeadline, 
  RunningLetterHover 
} from "../shared/RunningLetters";

export const Hero = () => {
  return (
    <section id="hero" className="relative min-h-[92vh] flex flex-col justify-center overflow-hidden bg-white pt-24 sm:pt-28 pb-12">
      
      {/* ── Background Geometric Polygonal Hairlines (Inspired by Brochure Cover) ── */}
      <div className="absolute inset-0 bg-geometric-lines opacity-100 pointer-events-none" />
      
      {/* ── Running Letter Background Watermark (Infinite Horizontal Running Stream) ── */}
      <div 
        aria-hidden="true"
        className="absolute top-1/2 left-0 -translate-y-1/2 w-full select-none pointer-events-none overflow-hidden z-0 opacity-[0.035]"
      >
        <RunningLettersTicker
          text="AUTOMATION • INTELLIGENCE • WORKFLOWS • AGENTS • ORCHESTRATION • SPEED • SCALE"
          repeat={4}
          speedSeconds={35}
          direction="left"
          className="text-[14vw] font-black text-gray-900 tracking-[-0.04em]"
          separator="—"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">

          {/* Left Column: Editorial Company Profile Layout */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 space-y-6 sm:space-y-7 text-left lg:pr-6"
          >
            {/* Year & Category Badge Row (Matching Brochure 2026 Tag) */}
            <div className="flex items-center gap-3">
              <span className="px-2.5 py-1 rounded bg-[#ffe500] text-black font-mono font-black text-[11px] tracking-wider uppercase shadow-xs">
                2026
              </span>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-gray-200 bg-gray-50/80 text-[11px] font-mono uppercase tracking-[0.2em] text-gray-700">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                <span>01 / AI Automation Delivery Partner</span>
              </div>
            </div>

            {/* Monumental Headline with Running Letter Animation */}
            <h1 className="text-3xl sm:text-5xl lg:text-5xl xl:text-[3.5rem] font-black tracking-[-0.03em] text-[#0a0a0a] leading-[1.08]">
              Turn Repetitive <br className="hidden sm:inline" />
              Operations Into <br />
              <span className="relative inline-block mt-2">
                <RunningLetterHeadline
                  words={[
                    "Intelligent Reality.",
                    "Smart Workflows.",
                    "Automated Scale.",
                    "Digital Precision."
                  ]}
                  intervalMs={3200}
                />
              </span>
            </h1>

            {/* Sub-headline (Matching "GROW YOUR BUSINESS TO THE NEXT LEVEL") */}
            <p className="text-xs sm:text-sm font-mono font-bold tracking-[0.2em] uppercase text-gray-400">
              Grow Your Business Operations To The Next Level
            </p>

            {/* Narrative description */}
            <p className="text-sm sm:text-base text-gray-600 font-normal leading-relaxed max-w-xl">
              VP VEYORA engineers autonomous AI agents, multi-system workflow pipelines, and custom enterprise integrations. We transform repetitive manual bottlenecks into reliable, self-driving digital infrastructure.
            </p>

            {/* Action CTA Buttons (High contrast Black + Yellow Arrow + CRM Live SaaS Portal) */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <a
                  href="#services"
                  className="group inline-flex items-center gap-3.5 pl-3.5 pr-6 py-2 rounded-full bg-[#0a0a0a] hover:bg-black text-white transition-all shadow-md"
                >
                  <div className="h-9 w-9 rounded-full bg-[#ffe500] text-black flex items-center justify-center transition-transform group-hover:rotate-45">
                    <ArrowRight className="h-4 w-4" />
                  </div>
                  <span className="text-xs font-mono font-bold uppercase tracking-[0.18em]">
                    <RunningLetterHover text="Explore Capabilities" />
                  </span>
                </a>
              </motion.div>

              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <a
                  href={process.env.NEXT_PUBLIC_CRM_URL || "http://localhost:3001"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2.5 px-5 py-3 rounded-full font-mono font-bold text-xs uppercase tracking-[0.18em] text-black bg-[#ffe500] hover:bg-[#ebd300] transition-all shadow-sm"
                  title="Launch Veyora CRM Portal"
                >
                  <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span>Launch Veyora CRM</span>
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 -rotate-45" />
                </a>
              </motion.div>

              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <a
                  href="#partners"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-full font-mono font-bold text-xs uppercase tracking-[0.18em] text-[#0a0a0a] border border-gray-300 hover:border-black bg-white hover:bg-gray-50 transition-all shadow-xs"
                >
                  <RunningLetterHover text="Partner With Us" />
                </a>
              </motion.div>
            </div>

            {/* Telemetry & Geographic footprint */}
            <div className="pt-6 border-t border-gray-200 flex flex-wrap items-center gap-y-2 gap-x-6 text-[11px] font-mono text-gray-500">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-emerald-500" />
                <span className="text-gray-800 font-medium">UK · USA · UAE · SG · AUS · EU</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-black font-bold">LATENCY &lt;120MS</span>
                <span>·</span>
                <span>ENTERPRISE NDA</span>
              </div>
            </div>

          </motion.div>

          {/* Right Column: 3D Architectural AI Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative flex items-center justify-center lg:justify-end"
          >
            <AiThreeScene />
          </motion.div>

        </div>
      </div>

      {/* ── Running Letters Ticker Ribbon (Full Width Accent Bar) ── */}
      <div className="mt-12 pt-4 pb-4 border-y border-gray-200 bg-gray-50/80">
        <RunningLettersTicker
          text="AUTONOMOUS AI AGENTS • WORKFLOW AUTOMATION • CRM & ERP INTEGRATIONS • 24/7 INTELLIGENCE • 100% IP HANDOVER • ZERO LATENCY"
          repeat={5}
          speedSeconds={28}
          direction="left"
          className="text-xs font-mono font-bold tracking-[0.2em] text-gray-800"
          separator="✦"
        />
      </div>

      {/* Bottom hairline divider */}
      <div className="absolute bottom-0 inset-x-0 h-[1px] bg-gray-200" />
    </section>
  );
};
