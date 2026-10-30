"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Bot, 
  FileText, 
  Users, 
  Play, 
  CheckCircle2, 
  Sparkles, 
  RefreshCw, 
  ArrowRight,
  ShieldCheck,
  Zap
} from "lucide-react";

interface WorkflowDemoScenario {
  id: string;
  title: string;
  icon: any;
  inputDescription: string;
  inputPayload: string;
  steps: string[];
  outputTitle: string;
  outputPayload: {
    intent: string;
    confidence: string;
    extractedFields: Record<string, string>;
    actionExecuted: string;
    humanVerification: string;
  };
}

const scenarios: WorkflowDemoScenario[] = [
  {
    id: "lead-triage",
    title: "Inbound Lead Triage & Routing",
    icon: Bot,
    inputDescription: "Inbound Enterprise Form Submission",
    inputPayload: "We manage 20+ clients on HubSpot. Need a white-label team to engineer document OCR workflows. Starting next month. Budget $10k.",
    steps: [
      "1. Webhook Captured & Decrypted",
      "2. Intent & ICP Match Classification",
      "3. Confidence Validation Check",
      "4. Instant CRM Staging & Slack Alert"
    ],
    outputTitle: "Qualified Lead Dispatch",
    outputPayload: {
      intent: "Agency White-Label Partnership",
      confidence: "99.4%",
      extractedFields: {
        companyType: "Digital Agency",
        clientBase: "20+ Accounts",
        timeline: "Immediate (<30 Days)",
        budgetTier: "Tier-1 Retainer ($10k)"
      },
      actionExecuted: "Staged in CRM + Calendar Invite Generated",
      humanVerification: "Direct review assigned to Lead Solutions Architect"
    }
  },
  {
    id: "invoice-extract",
    title: "Document & Invoice Extraction",
    icon: FileText,
    inputDescription: "PDF Vendor Invoice Ingestion (Synthetic)",
    inputPayload: "Scanned multi-currency bill from CloudOps Ltd: Subtotal $2,400, VAT 20% ($480), Total $2,880. PO-99120.",
    steps: [
      "1. OCR Vision & Layout Parsing",
      "2. Field Extraction & Entity Normalization",
      "3. Mathematical Subtotal + Tax Re-Sum",
      "4. Direct Accounting ERP Posting"
    ],
    outputTitle: "Verified Accounting Schema",
    outputPayload: {
      intent: "Accounts Payable Reconciliation",
      confidence: "99.8%",
      extractedFields: {
        vendor: "CloudOps Ltd",
        subtotal: "$2,400.00",
        taxAmount: "$480.00 (20%)",
        totalCalculated: "$2,880.00 [MATCHED]",
        poNumber: "PO-99120 [VERIFIED]"
      },
      actionExecuted: "Posted to ERP Ledger via Webhook",
      humanVerification: "Zero discrepancies detected; auto-cleared"
    }
  },
  {
    id: "crm-sync",
    title: "Autonomous Cross-CRM Sync",
    icon: Users,
    inputDescription: "Sales Call Transcript & Deal Progression",
    inputPayload: "Zoom call with CTO Marcus. Agreed on 4-week AI pilot scope. Needs proposal SOW sent by Thursday.",
    steps: [
      "1. Audio Transcript Ingestion",
      "2. Action Item & Decision Extraction",
      "3. Deal Pipeline Stage Advance",
      "4. Draft Follow-up Prepared in Gmail"
    ],
    outputTitle: "CRM Pipeline Sync",
    outputPayload: {
      intent: "Deal Stage Progression",
      confidence: "98.7%",
      extractedFields: {
        contact: "Marcus (CTO)",
        stageUpdate: "Proposal / SOW Pending",
        nextAction: "Send SOW by Thursday",
        milestoneValue: "$3,500 Pilot Sprint"
      },
      actionExecuted: "CRM Deal Updated + Draft Follow-up staged",
      humanVerification: "Sales rep approves email before dispatch"
    }
  }
];

export const AiInActionDemo = () => {
  const [selectedScenario, setSelectedScenario] = useState(scenarios[0]);
  const [isRunning, setIsRunning] = useState(false);
  const [progressStep, setProgressStep] = useState(4); // All done initially

  const handleRunDemo = (scenario: WorkflowDemoScenario) => {
    setSelectedScenario(scenario);
    setIsRunning(true);
    setProgressStep(0);

    const interval = setInterval(() => {
      setProgressStep((prev) => {
        if (prev >= 4) {
          clearInterval(interval);
          setIsRunning(false);
          return 4;
        }
        return prev + 1;
      });
    }, 450);
  };

  return (
    <div className="rounded-3xl border border-white/10 bg-gradient-to-b from-[#0c0c24]/90 to-[#050512]/90 backdrop-blur-2xl p-6 sm:p-10 shadow-2xl relative overflow-hidden">
      
      {/* Background neon ambient highlight */}
      <div className="absolute top-0 right-0 w-[450px] h-[300px] bg-gradient-to-bl from-cyan-500/10 via-purple-600/10 to-transparent blur-3xl pointer-events-none" />

      {/* Header */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-b border-white/10 pb-6 mb-8">
        <div>
          <span className="text-[11px] font-mono font-bold tracking-[0.2em] text-cyan-400 uppercase block mb-1">
            Interactive Testbench
          </span>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
            See How AI Automates Real Business Tasks
          </h3>
        </div>

        {/* Preset Task Buttons */}
        <div className="flex flex-wrap gap-2">
          {scenarios.map((s) => (
            <button
              key={s.id}
              onClick={() => handleRunDemo(s)}
              className={`px-3.5 py-2 rounded-xl text-xs font-bold font-mono transition-all flex items-center gap-2 ${
                selectedScenario.id === s.id
                  ? "bg-gradient-to-r from-cyan-400 to-purple-500 text-black shadow-md shadow-cyan-500/20"
                  : "bg-white/5 border border-white/10 text-white/70 hover:text-white hover:border-white/20"
              }`}
            >
              <s.icon className="h-3.5 w-3.5" />
              <span>{s.title}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Simulator Body */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left: Input & Processing Steps */}
        <div className="lg:col-span-6 space-y-6">
          
          {/* Input Box */}
          <div className="p-5 rounded-2xl border border-white/10 bg-black/40 space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-cyan-400">
                1. Trigger Ingestion ({selectedScenario.inputDescription})
              </span>
              <span className="text-[10px] font-mono text-white/40">Raw Payload</span>
            </div>
            <p className="text-xs font-mono text-white/80 leading-relaxed bg-white/5 p-3 rounded-lg border border-white/5">
              "{selectedScenario.inputPayload}"
            </p>
          </div>

          {/* Workflow Execution Pipeline */}
          <div className="space-y-2.5">
            <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-white/50 block">
              Automated Pipeline Progression:
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {selectedScenario.steps.map((step, idx) => {
                const isCompleted = progressStep >= idx + 1;
                const isCurrent = progressStep === idx;
                return (
                  <div
                    key={idx}
                    className={`p-3 rounded-xl border text-xs font-mono transition-all flex items-center gap-2.5 ${
                      isCompleted
                        ? "border-cyan-400/30 bg-cyan-400/5 text-cyan-300"
                        : isCurrent
                        ? "border-purple-400 bg-purple-500/10 text-white animate-pulse"
                        : "border-white/5 bg-black/20 text-white/40"
                    }`}
                  >
                    {isCompleted ? (
                      <CheckCircle2 className="h-4 w-4 text-cyan-400 shrink-0" />
                    ) : isCurrent ? (
                      <RefreshCw className="h-4 w-4 text-purple-400 shrink-0 animate-spin" />
                    ) : (
                      <div className="h-4 w-4 rounded-full border border-white/20 shrink-0" />
                    )}
                    <span className="truncate">{step}</span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Re-trigger action button */}
          <button
            onClick={() => handleRunDemo(selectedScenario)}
            disabled={isRunning}
            className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl font-bold font-mono text-xs uppercase tracking-wider text-white border border-cyan-400/40 bg-cyan-950/30 hover:bg-cyan-900/40 transition-all disabled:opacity-50"
          >
            {isRunning ? (
              <>
                <RefreshCw className="h-4 w-4 animate-spin text-cyan-400" />
                <span>Simulating Execution...</span>
              </>
            ) : (
              <>
                <Play className="h-4 w-4 text-cyan-400" />
                <span>Re-run Simulated Workflow</span>
              </>
            )}
          </button>
        </div>

        {/* Right: Output Payload Card */}
        <div className="lg:col-span-6 rounded-2xl border border-white/10 bg-black/50 p-6 space-y-5">
          <div className="flex items-center justify-between border-b border-white/10 pb-4">
            <div className="flex items-center gap-2">
              <Sparkles className="h-4 w-4 text-pink-400" />
              <h4 className="text-sm font-bold font-mono text-white">
                {selectedScenario.outputTitle}
              </h4>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-mono font-bold px-2.5 py-1 rounded-full bg-cyan-400/10 text-cyan-300 border border-cyan-400/30">
                Confidence: {selectedScenario.outputPayload.confidence}
              </span>
            </div>
          </div>

          {/* Extracted JSON schema items */}
          <div className="space-y-2">
            <span className="text-[10px] font-mono uppercase tracking-wider text-white/50 block">
              Extracted & Normalized Entities:
            </span>
            <div className="grid grid-cols-2 gap-2 text-xs font-mono">
              {Object.entries(selectedScenario.outputPayload.extractedFields).map(([k, v]) => (
                <div key={k} className="p-2.5 rounded-lg border border-white/5 bg-white/[0.02]">
                  <span className="text-[10px] text-white/40 block uppercase">{k}</span>
                  <span className="text-cyan-300 font-bold block truncate mt-0.5">{v}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Action Triggered */}
          <div className="p-3.5 rounded-xl border border-emerald-500/30 bg-emerald-500/10 flex items-start gap-2.5 text-xs">
            <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
            <div>
              <span className="font-bold text-white block">Execution Completed</span>
              <span className="text-emerald-300 font-mono text-[11px]">{selectedScenario.outputPayload.actionExecuted}</span>
            </div>
          </div>

          {/* Human Checkpoint Note */}
          <div className="p-3 rounded-xl border border-purple-500/30 bg-purple-500/5 flex items-center gap-2 text-[11px] text-purple-300">
            <ShieldCheck className="h-4 w-4 text-purple-400 shrink-0" />
            <span>Supervision: {selectedScenario.outputPayload.humanVerification}</span>
          </div>
        </div>

      </div>

    </div>
  );
};
