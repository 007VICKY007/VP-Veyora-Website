"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Layers } from "lucide-react";
import { AiOrbVisual } from "./AiOrbVisual";

export const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center overflow-hidden bg-base pt-28 pb-16">
      
      {/* Background ambient glowing mesh */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[450px] bg-gradient-to-b from-purple-600/20 via-cyan-500/15 to-transparent blur-[120px] pointer-events-none" />
      <div className="absolute inset-0 bg-grid-cyber opacity-[0.03] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

          {/* Left Text Column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 space-y-7 text-center lg:text-left"
          >
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-cyan-400/30 bg-cyan-400/5 backdrop-blur-md">
              <span className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
              <span className="text-[11px] font-mono font-bold tracking-[0.2em] uppercase text-cyan-300">
                Next-Gen AI Automation Partner
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[1.08]">
              Make Intelligence <br />
              <span className="text-gradient-ai">Work for You.</span>
            </h1>

            {/* Short, scanned description */}
            <p className="text-base sm:text-lg text-secondary leading-relaxed max-w-xl mx-auto lg:mx-0">
              VP VEYORA engineers autonomous AI agents, intelligent workflow pipelines, and custom system integrations that transform manual operations into automated speed.
            </p>

            {/* Two Primary Action Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
              <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}>
                <a
                  href="#services"
                  className="inline-flex items-center gap-2.5 px-8 py-4 rounded-xl font-black text-xs uppercase tracking-[0.18em] text-black bg-gradient-to-r from-cyan-400 via-teal-300 to-cyan-400 hover:from-white hover:to-white transition-all shadow-xl shadow-cyan-500/20"
                >
                  <span>Explore Solutions</span>
                  <ArrowRight className="h-4 w-4" />
                </a>
              </motion.div>

              <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}>
                <a
                  href="#partners"
                  className="inline-flex items-center gap-2.5 px-8 py-4 rounded-xl font-bold text-xs uppercase tracking-[0.18em] text-white border border-purple-500/40 bg-purple-950/40 hover:bg-purple-900/60 hover:border-purple-400 transition-all backdrop-blur-md shadow-lg shadow-purple-500/10"
                >
                  <span>Partner With Us</span>
                </a>
              </motion.div>
            </div>

            {/* Footprint Indicator */}
            <div className="pt-4 flex items-center justify-center lg:justify-start gap-3 text-xs text-muted font-mono">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              <span>International Delivery: UK · USA · UAE · Singapore · Australia · Europe</span>
            </div>

          </motion.div>

          {/* Right Column: Animated AI Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex items-center justify-center"
          >
            <AiOrbVisual />
          </motion.div>

        </div>
      </div>
    </section>
  );
};
