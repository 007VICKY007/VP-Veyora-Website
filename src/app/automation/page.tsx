import React from "react";
import Link from "next/link";
import { GlassCard } from "@/components/shared/GlassCard";
import { Link2, Mail, MessageSquare, FileSpreadsheet, Layers, ArrowRight, Check } from "lucide-react";

export default function AutomationPage() {
  const automations = [
    { title: "n8n & Make Orchestration", desc: "Build advanced multi-node workflow automations running locally or hosted on cloud servers, reducing SaaS cost.", icon: Layers },
    { title: "WhatsApp & Chatbot Automations", desc: "Automate customer support queries, booking flows, and sales follow-ups via official WhatsApp API nodes.", icon: MessageSquare },
    { title: "Email & Lead Automation", desc: "Connect contact forms, newsletter sign-ups, and CRM workflows to instant autoresponders and lead loggers.", icon: Mail },
    { title: "Document & Invoice Parsing", desc: "Ingest email attachments, run document OCR to pull line-items, and push details into accounting software automatically.", icon: FileSpreadsheet },
    { title: "Zapier Integrations", desc: "Connect thousands of standard business apps (Slack, HubSpot, Gmail, Asana) without writing backend API handlers.", icon: Link2 }
  ];

  return (
    <div className="bg-transparent text-white  min-h-screen py-20 px-4">
      <div className="max-w-6xl mx-auto space-y-16">
        
        {/* Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#F5C200] ">Workflow Efficiency</span>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">AI & Business Automation</h1>
          <p className="text-white/60  text-lg leading-relaxed">
            Eliminate hours of manual data syncs. We construct resilient, self-healing automation routines to connect your CRM, emails, and database.
          </p>
        </div>

        {/* Capabilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {automations.map((aut, idx) => {
            const Icon = aut.icon;
            return (
              <GlassCard key={idx} className="space-y-4 hover:border-[#F5C200]/20 flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="inline-flex p-3 rounded-xl bg-yellow-500/10 text-[#F5C200] ">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold text-white ">{aut.title}</h3>
                  <p className="text-sm text-white/60  leading-relaxed">{aut.desc}</p>
                </div>
                <div className="pt-4 border-t border-white/08  flex items-center space-x-2 text-xs text-white/40 ">
                  <Check className="h-4 w-4 text-[#F5C200] " />
                  <span>Saves 80%+ Employee Work Hours</span>
                </div>
              </GlassCard>
            );
          })}
        </div>

        {/* Case summary */}
        <div className="border-t border-white/[0.06] p-8 sm:p-12 text-center space-y-6 max-w-4xl mx-auto">
          <h3 className="text-2xl sm:text-3xl font-bold">Why Node-Based Automation?</h3>
          <p className="text-white/80  text-sm sm:text-base leading-relaxed">
            Platforms like n8n and Make allow rapid development of visual nodes while letting engineers hook custom JavaScript/Python code directly. This yields the speed of low-code combined with the unlimited power of custom programming.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-xs font-mono text-white/60 ">
            <span className="bg-transparent  border border-white/08  px-3 py-1.5 rounded">n8n Self-Host</span>
            <span className="bg-transparent  border border-white/08  px-3 py-1.5 rounded">Make.com Scenario</span>
            <span className="bg-transparent  border border-white/08  px-3 py-1.5 rounded">Zapier Webhooks</span>
            <span className="bg-transparent  border border-white/08  px-3 py-1.5 rounded">CRM Sync</span>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link
            href="/contact"
            className="inline-flex items-center space-x-2 rounded-full bg-gradient-to-r from-[#1a1a1a] via-[#F5C200] to-[#D4A800] hover:from-[#1a1a1a] hover:to-[#F5C200] px-8 py-4 text-base font-bold text-white shadow-xl"
          >
            <span>Consult on Workflow Automation</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

      </div>
    </div>
  );
}
