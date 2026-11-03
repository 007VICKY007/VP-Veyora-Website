"use client";

import React, { useState } from "react";
import { MonitorPlay, PlayCircle, Cpu, Sparkles } from "lucide-react";
import { ProductVideoDemo } from "./ProductVideoDemo";
import { AiInActionDemo } from "./AiInActionDemo";

export const DemoShowcase: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"video" | "simulator">("video");

  return (
    <div className="space-y-8">
      
      {/* Mode Switcher Pills */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-gray-200 pb-5">
        <div className="flex items-center gap-2 p-1.5 rounded-full border border-gray-200 bg-gray-50/80">
          <button
            onClick={() => setActiveTab("video")}
            className={`flex items-center gap-2 px-4 sm:px-6 py-2 rounded-full text-xs font-mono font-bold uppercase tracking-wider transition-all duration-200 ${
              activeTab === "video"
                ? "bg-[#0a0a0a] text-white shadow-sm"
                : "text-gray-600 hover:text-black hover:bg-gray-200/50"
            }`}
          >
            <MonitorPlay className={`h-4 w-4 ${activeTab === "video" ? "text-[#ffe500]" : ""}`} />
            <span>Product Walkthrough Video</span>
            <span className="ml-1 px-1.5 py-0.5 rounded text-[9px] bg-[#ffe500] text-black font-extrabold">
              NEW
            </span>
          </button>

          <button
            onClick={() => setActiveTab("simulator")}
            className={`flex items-center gap-2 px-4 sm:px-6 py-2 rounded-full text-xs font-mono font-bold uppercase tracking-wider transition-all duration-200 ${
              activeTab === "simulator"
                ? "bg-[#0a0a0a] text-white shadow-sm"
                : "text-gray-600 hover:text-black hover:bg-gray-200/50"
            }`}
          >
            <Cpu className={`h-4 w-4 ${activeTab === "simulator" ? "text-[#ffe500]" : ""}`} />
            <span>Interactive Testbench</span>
          </button>
        </div>

        <div className="text-xs font-mono text-gray-500 hidden md:flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
          <span>Verified Working Build v3.4</span>
        </div>
      </div>

      {/* Dynamic Tab Body */}
      {activeTab === "video" ? (
        <ProductVideoDemo />
      ) : (
        <AiInActionDemo />
      )}

    </div>
  );
};
