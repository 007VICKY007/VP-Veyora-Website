"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Brain, Cpu, ShieldCheck } from "lucide-react";

export const Hero = ({ title, subtitle }: { title: string; subtitle: string }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Mouse follow backdrop glow effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      containerRef.current.style.setProperty("--mouse-x", `${x}px`);
      containerRef.current.style.setProperty("--mouse-y", `${y}px`);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative flex min-h-[90vh] flex-col justify-center items-center overflow-hidden bg-transparent px-4 pt-20 text-center transition-colors duration-300"
      style={{
        background: "radial-gradient(circle 800px at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(0, 82, 155, 0.08), transparent 80%)"
      }}
    >
      {/* Background Orbs */}
      <div className="absolute top-1/4 left-1/4 h-96 w-96 rounded-full bg-blue-500/10 glow-blur animate-pulse-slow"></div>
      <div className="absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full bg-sky-500/10 glow-blur animate-pulse-slow" style={{ animationDelay: "2s" }}></div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-5xl mx-auto space-y-8">
        
        {/* Animated Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center space-x-2 rounded-full border border-[#00529b]/30 bg-blue-500/10 px-4 py-1.5 text-xs sm:text-sm text-[#00529b] dark:text-blue-400 backdrop-blur-sm"
        >
          <span className="h-2 w-2 rounded-full bg-[#00529b] animate-ping"></span>
          <span>VP Enterprises — Next-Gen AI Platform</span>
        </motion.div>

        {/* Hero Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-6xl md:text-7xl leading-tight"
        >
          Engineering <span className="text-gradient">AI Solutions</span> <br />
          for Tomorrow
        </motion.h1>

        {/* Hero Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mx-auto max-w-3xl text-base sm:text-lg md:text-xl text-slate-600 dark:text-gray-400 leading-relaxed"
        >
          {subtitle || "Helping businesses automate, innovate, and grow using Artificial Intelligence and modern software technologies."}
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-4"
        >
          <Link
            href="/contact"
            className="group flex items-center space-x-2 rounded-full bg-gradient-to-r from-[#00205b] via-[#00529b] to-[#0072ce] px-8 py-4 text-base font-semibold text-white shadow-xl shadow-blue-900/15 hover:shadow-blue-500/35 hover:scale-105 transition-all duration-300"
          >
            <span>Start Your Project</span>
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
          
          <Link
            href="/services"
            className="flex items-center space-x-2 rounded-full border border-slate-200 dark:border-gray-700 bg-white dark:bg-gray-900/60 hover:bg-gray-800 px-8 py-4 text-base font-semibold text-slate-700 dark:text-gray-300 hover:text-white transition-all duration-300"
          >
            Explore Services
          </Link>
        </motion.div>

        {/* Key Points Banner */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.8 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-16 max-w-4xl mx-auto border-t border-slate-200 dark:border-gray-800"
        >
          <div className="flex items-center space-x-3 text-left">
            <Brain className="h-6 w-6 text-[#00529b] dark:text-blue-400 shrink-0" />
            <div>
              <h4 className="text-sm font-semibold text-slate-900 dark:text-white">AI First Strategy</h4>
              <p className="text-xs text-slate-500 dark:text-gray-500">Autonomous agents & Generative LLMs</p>
            </div>
          </div>
          <div className="flex items-center space-x-3 text-left">
            <Cpu className="h-6 w-6 text-slate-500 dark:text-slate-400 shrink-0" />
            <div>
              <h4 className="text-sm font-semibold text-slate-900 dark:text-white">Scalable Systems</h4>
              <p className="text-xs text-slate-500 dark:text-gray-500">Enterprise CRM, ERP & SaaS apps</p>
            </div>
          </div>
          <div className="flex items-center space-x-3 text-left">
            <ShieldCheck className="h-6 w-6 text-slate-450 dark:text-pink-400 shrink-0" />
            <div>
              <h4 className="text-sm font-semibold text-slate-900 dark:text-white">Proactive Security</h4>
              <p className="text-xs text-slate-500 dark:text-gray-500">Penetration testing & Cloud security</p>
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  );
};
