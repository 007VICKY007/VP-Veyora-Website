"use client";

import React from "react";
import { motion } from "framer-motion";
import { Cpu, Bot, Zap, Sparkles, ShieldCheck, Activity } from "lucide-react";

export const AiOrbVisual = () => {
  return (
    <div className="relative w-full aspect-square max-w-[500px] mx-auto flex items-center justify-center">
      
      {/* Background radial glow */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#7928ca]/30 via-[#00f2fe]/20 to-[#ff007f]/20 blur-3xl animate-pulse-slow pointer-events-none" />

      {/* Outer Rotating Ring 1 - Cyan */}
      <div className="absolute inset-4 rounded-full border border-cyan-400/20 border-dashed animate-spin-slow pointer-events-none" />

      {/* Outer Rotating Ring 2 - Violet (Counter-clockwise) */}
      <div className="absolute inset-12 rounded-full border border-purple-500/30 border-t-purple-400/80 animate-reverse-spin-slow pointer-events-none" />

      {/* Inner Rotating Ring 3 - Magenta */}
      <div className="absolute inset-24 rounded-full border border-pink-500/30 border-b-pink-400 animate-spin-slow pointer-events-none" style={{ animationDuration: "18s" }} />

      {/* Central Luminous Hologram Sphere */}
      <motion.div
        animate={{
          scale: [1, 1.05, 1],
          boxShadow: [
            "0 0 40px rgba(0, 242, 254, 0.4), 0 0 80px rgba(139, 92, 246, 0.3)",
            "0 0 60px rgba(255, 0, 127, 0.5), 0 0 100px rgba(0, 242, 254, 0.4)",
            "0 0 40px rgba(0, 242, 254, 0.4), 0 0 80px rgba(139, 92, 246, 0.3)"
          ]
        }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="relative z-10 w-44 h-44 rounded-full bg-gradient-to-tr from-[#050515] via-[#100d2b] to-[#1c082e] border border-white/20 flex flex-col items-center justify-center p-4 backdrop-blur-2xl"
      >
        <div className="relative">
          <div className="absolute -inset-2 rounded-full bg-gradient-to-r from-cyan-400 to-pink-500 opacity-60 blur-md animate-pulse" />
          <div className="relative p-3 rounded-full bg-black/80 border border-white/20 text-cyan-300">
            <Cpu className="h-8 w-8 text-cyan-400" />
          </div>
        </div>

        <span className="text-[11px] font-mono font-black tracking-[0.2em] text-white mt-3 uppercase">
          AI CORE ENGINE
        </span>
        <span className="text-[9px] font-mono text-cyan-400/90 tracking-wider flex items-center gap-1 mt-0.5">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-ping" />
          AUTONOMOUS
        </span>
      </motion.div>

      {/* Floating Holographic Chip 1 (Top Left) */}
      <motion.div
        animate={{ y: [-6, 6, -6] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-6 left-2 z-20 glass px-3.5 py-2 rounded-xl border border-cyan-400/30 flex items-center gap-2.5 shadow-lg shadow-cyan-500/10"
      >
        <div className="p-1.5 rounded-lg bg-cyan-400/10 text-cyan-400">
          <Bot className="h-3.5 w-3.5" />
        </div>
        <div>
          <span className="text-[9px] font-mono text-white/50 block">AGENT DISPATCH</span>
          <span className="text-xs font-bold text-white font-mono">Sub-Second Triage</span>
        </div>
      </motion.div>

      {/* Floating Holographic Chip 2 (Bottom Right) */}
      <motion.div
        animate={{ y: [6, -6, 6] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        className="absolute bottom-8 right-2 z-20 glass px-3.5 py-2 rounded-xl border border-pink-500/30 flex items-center gap-2.5 shadow-lg shadow-pink-500/10"
      >
        <div className="p-1.5 rounded-lg bg-pink-500/10 text-pink-400">
          <Zap className="h-3.5 w-3.5" />
        </div>
        <div>
          <span className="text-[9px] font-mono text-white/50 block">INTEGRATION SYNC</span>
          <span className="text-xs font-bold text-white font-mono">100% Deterministic</span>
        </div>
      </motion.div>

      {/* Floating Holographic Chip 3 (Bottom Left) */}
      <motion.div
        animate={{ y: [-4, 5, -4] }}
        transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-12 left-6 z-20 glass px-3 py-1.5 rounded-lg border border-purple-500/30 flex items-center gap-2 shadow-lg"
      >
        <ShieldCheck className="h-3.5 w-3.5 text-purple-400" />
        <span className="text-[10px] font-mono font-bold text-purple-300">Supervised Gate</span>
      </motion.div>

    </div>
  );
};
