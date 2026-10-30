"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { AiThreeScene } from "./AiThreeScene";

export const Hero = () => {
  return (
    <section id="hero" className="relative min-h-[92vh] flex flex-col justify-center overflow-hidden bg-white pt-24 sm:pt-28 pb-16">
      
      {/* ── Background Geometric Polygonal Hairlines (Inspired by Brochure Cover) ── */}
      <div className="absolute inset-0 bg-geometric-lines opacity-100 pointer-events-none" />
      
      {/* Giant Background Watermark (Inspired by Company Profile Cover) */}
      <div 
        aria-hidden="true"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full select-none pointer-events-none flex justify-center items-center overflow-hidden z-0"
      >
        <span className="text-[17vw] font-black uppercase tracking-[-0.04em] text-gray-900/[0.025] whitespace-nowrap">
          AUTOMATION
        </span>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">

          {/* Left Column: Editorial Company Profile Layout */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 space-y-6 sm:space-y-7 text-left"
          >
            {/* Year & Category Badge Row (Matching Brochure 2026 Tag) */}
            <div className="flex items-center gap-3">
              <span className="px-2.5 py-1 rounded bg-[#ffe500] text-black font-mono font-black text-[11px] tracking-wider uppercase shadow-xs">
                2026
              </span>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-gray-200 bg-gray-50/80 text-[11px] font-mono uppercase tracking-[0.2em] text-gray-700">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                <span>01 / AI Automation Delivery Partner</span>
              </div>
            </div>

            {/* Monumental Headline with Yellow Highlighter Block */}
            <h1 className="text-4xl sm:text-6xl lg:text-6xl xl:text-7xl font-black tracking-[-0.03em] text-[#0a0a0a] leading-[1.04]">
              Turn Repetitive <br className="hidden sm:inline" />
              Operations Into <br />
              <span className="relative inline-block mt-2">
                <span className="bg-[#ffe500] text-black px-3.5 py-0.5 rounded-lg font-black shadow-xs">
                  Intelligent Reality.
                </span>
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

            {/* Action CTA Buttons (High contrast Black + Yellow Arrow) */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <a
                  href="#services"
                  className="group inline-flex items-center gap-3.5 pl-3 pr-6 py-2 rounded-full bg-[#0a0a0a] hover:bg-black text-white transition-all shadow-md"
                >
                  <div className="h-9 w-9 rounded-full bg-[#ffe500] text-black flex items-center justify-center transition-transform group-hover:rotate-45">
                    <ArrowRight className="h-4 w-4" />
                  </div>
                  <span className="text-xs font-mono font-bold uppercase tracking-[0.18em]">
                    Explore Capabilities
                  </span>
                </a>
              </motion.div>

              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <a
                  href="#partners"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full font-mono font-bold text-xs uppercase tracking-[0.18em] text-[#0a0a0a] border border-gray-300 hover:border-black bg-white hover:bg-gray-50 transition-all shadow-xs"
                >
                  <span>Partner With Us</span>
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
            className="lg:col-span-6 relative flex items-center justify-center"
          >
            <AiThreeScene />
          </motion.div>

        </div>
      </div>

      {/* Bottom hairline divider */}
      <div className="absolute bottom-0 inset-x-0 h-[1px] bg-gray-200" />
    </section>
  );
};
