"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { AiThreeScene } from "./AiThreeScene";

export const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-[#080b14] pt-24 sm:pt-28 pb-16">
      
      {/* ── Background Giant Display Watermark Typography (Inspired by ZROBIM reference) ── */}
      <div 
        aria-hidden="true"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full select-none pointer-events-none flex justify-center items-center overflow-hidden z-0"
      >
        <span className="text-[18vw] font-black uppercase tracking-[-0.04em] text-white/[0.025] whitespace-nowrap">
          INTELLIGENCE
        </span>
      </div>

      {/* Atmospheric Dawn & Celestial Horizon Radial Glows (Inspired by EOSAI reference) */}
      <div className="absolute top-1/3 left-1/4 w-[700px] h-[700px] -translate-x-1/2 -translate-y-1/2 bg-amber-500/[0.07] rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute top-1/4 right-1/4 w-[650px] h-[650px] bg-sky-500/[0.06] rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/2 -translate-x-1/2 w-[900px] h-[350px] bg-gradient-to-t from-amber-600/[0.05] via-sky-600/[0.04] to-transparent blur-[120px] pointer-events-none" />
      <div className="absolute inset-0 bg-grid-cyber opacity-[0.025] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center">

          {/* Left Column: Editorial & Storytelling (Inspired by EOSAI & ZROBIM) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 space-y-6 sm:space-y-7 text-left"
          >
            {/* Agency metadata tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-white/10 bg-white/[0.03] backdrop-blur-md">
              <span className="h-1.5 w-1.5 rounded-full bg-amber-400 animate-pulse" />
              <span className="text-[10px] sm:text-[11px] font-mono uppercase tracking-[0.22em] text-white/75 font-medium">
                01 / AI Automation Delivery Partner
              </span>
            </div>

            {/* Monumental Editorial Headline */}
            <h1 className="text-4xl sm:text-6xl lg:text-6xl xl:text-7xl font-black tracking-[-0.03em] text-white leading-[1.04]">
              Turn Repetitive <br className="hidden sm:inline" />
              Operations Into <br />
              <span className="font-serif italic font-normal text-gradient-gold">
                Intelligent Reality.
              </span>
            </h1>

            {/* Delicate hairline rule */}
            <div className="w-16 h-[1.5px] bg-gradient-to-r from-amber-400 via-amber-300 to-transparent" />

            {/* Concise narrative */}
            <p className="text-sm sm:text-base text-slate-300 font-light leading-relaxed max-w-xl">
              VP VEYORA engineers autonomous AI agents, multi-system workflow pipelines, and custom enterprise integrations. We transform repetitive manual bottlenecks into reliable, self-driving digital infrastructure.
            </p>

            {/* Agency CTA Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <a
                  href="#services"
                  className="group inline-flex items-center gap-3.5 pl-2 pr-6 py-2 rounded-full border border-white/20 hover:border-amber-400/80 bg-white/[0.04] hover:bg-white/[0.08] transition-all backdrop-blur-md shadow-lg shadow-black/40"
                >
                  <div className="h-10 w-10 rounded-full border border-amber-400/40 bg-amber-400/15 text-amber-300 group-hover:bg-amber-400 group-hover:text-black flex items-center justify-center transition-all shadow-sm">
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
                  </div>
                  <span className="text-xs font-mono font-bold uppercase tracking-[0.18em] text-white group-hover:text-amber-300 transition-colors">
                    Explore Capabilities
                  </span>
                </a>
              </motion.div>

              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <a
                  href="#partners"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full font-mono font-bold text-xs uppercase tracking-[0.18em] text-white/80 hover:text-white border border-white/10 hover:border-white/30 bg-white/[0.02] hover:bg-white/[0.05] transition-all backdrop-blur-md"
                >
                  <span>Partner With Us</span>
                </a>
              </motion.div>
            </div>

            {/* Telemetry & Geographic footprint */}
            <div className="pt-6 border-t border-white/10 flex flex-wrap items-center gap-y-2 gap-x-6 text-[11px] font-mono text-white/45">
              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                <span className="text-white/70">UK · USA · UAE · SG · AUS · EU</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-amber-400/90">LATENCY &lt;120MS</span>
                <span>·</span>
                <span>ENTERPRISE NDA</span>
              </div>
            </div>

          </motion.div>

          {/* Right Column: Three.js Interactive 3D Portal & Spec Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.1, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 relative flex items-center justify-center"
          >
            <AiThreeScene />
          </motion.div>

        </div>
      </div>

      {/* Subtle Scroll Indicator with Glowing Tracer (Inspired by EOSAI reference) */}
      <div className="absolute left-6 bottom-6 hidden lg:flex items-center gap-3 select-none pointer-events-none">
        <span className="text-[9px] font-mono uppercase tracking-[0.3em] text-white/30 rotate-180 [writing-mode:vertical-lr]">
          SCROLL
        </span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-amber-400 via-amber-400/40 to-transparent relative">
          <span className="absolute top-0 -left-[1.5px] h-1 w-1 rounded-full bg-amber-400 shadow-[0_0_8px_#f5c200] animate-pulse" />
        </div>
      </div>

      {/* Bottom subtle border divider */}
      <div className="absolute bottom-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </section>
  );
};
