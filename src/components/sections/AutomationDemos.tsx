"use client";

import React, { useState } from "react";
import { 
  Bot, 
  FileText, 
  CheckCircle2, 
  AlertTriangle, 
  RefreshCw, 
  Sparkles, 
  Sliders, 
  Workflow, 
  Database, 
  Eye, 
  ShieldCheck,
  Mail,
  Edit3
} from "lucide-react";

// Synthetic samples for Demo A
const SAMPLE_LEADS = [
  {
    id: "sample-1",
    label: "Enterprise Agency (High ICP)",
    name: "Marcus Vance",
    company: "Apex Digital Solutions UK",
    email: "marcus@apexdigital.co.uk",
    country: "United Kingdom",
    need: "White-label AI automation delivery for 15+ existing B2B clients",
    message: "We are a London-based digital agency managing CRM and web infrastructure for mid-market clients. We need an external technical team to engineer and maintain n8n workflows and custom LLM document processing agents under our brand.",
    simulatedScore: 94,
    priority: "HIGH PRIORITY",
    intent: "White-label Partnership",
    recommendedAction: "Schedule 30-min Technical Partner Briefing (CEO / Lead Architect)",
    extractedEntities: {
      budgetTier: "Agency Retainer / Tier-1",
      timeline: "Immediate (< 30 days)",
      integrationTargets: ["n8n", "HubSpot", "OpenAI / Claude API", "AWS"],
      riskFlag: "None - Clear commercial scope"
    }
  },
  {
    id: "sample-2",
    label: "Mid-Market Logistics (Document AI)",
    name: "Sarah Jenkins",
    company: "TransGlobal Freight LLC",
    email: "s.jenkins@transglobalfreight.ae",
    country: "United Arab Emirates",
    need: "Automate customs bill of lading and multi-currency vendor invoice extraction",
    message: "Our accounting team manually transcribes 800+ international shipment invoices every week from PDFs into SAP. We need an automated extraction pipeline with human review before final ledger posting.",
    simulatedScore: 89,
    priority: "HIGH PRIORITY",
    intent: "Client Direct Project",
    recommendedAction: "Send Document Extraction Pilot Scope & Sandbox Test Plan",
    extractedEntities: {
      budgetTier: "Pilot to Production ($2,000+)",
      timeline: "60 Days",
      integrationTargets: ["SAP ERP", "Document OCR", "Email Ingestion Webhook"],
      riskFlag: "Multi-currency format validation required"
    }
  },
  {
    id: "sample-3",
    label: "Low-Intent / Ambiguous Inquiry",
    name: "Anonymous User",
    company: "Unknown",
    email: "test1234@gmail.com",
    country: "Unknown",
    need: "Free AI advice",
    message: "Can you build me a complete app for free or cheap in 2 days?",
    simulatedScore: 18,
    priority: "DISQUALIFIED / LOW",
    intent: "Non-Commercial",
    recommendedAction: "Route to automated resource documentation; do not book architect time",
    extractedEntities: {
      budgetTier: "Below minimum threshold",
      timeline: "Unrealistic",
      integrationTargets: ["None"],
      riskFlag: "Incomplete contact data & low commercial intent"
    }
  }
];

// Synthetic samples for Demo B
const SYNTHETIC_INVOICES = [
  {
    id: "inv-1",
    label: "Sample 01: Cloud Infrastructure Invoice",
    vendor: "HyperScale Cloud Systems Ltd",
    invoiceNumber: "INV-2026-8942",
    invoiceDate: "2026-10-15",
    dueDate: "2026-11-14",
    currency: "USD",
    poNumber: "PO-77812",
    lineItems: [
      { description: "Managed Kubernetes Cluster (us-east-1)", qty: 1, unitPrice: 1200, total: 1200 },
      { description: "High-IOPS Block Storage (5TB Tier)", qty: 2, unitPrice: 250, total: 500 },
      { description: "VPC Peering & Outbound Data Egress", qty: 1, unitPrice: 145, total: 145 }
    ],
    taxRate: 0.10,
    extractedConfidence: 99.4,
    validationStatus: "PASS"
  },
  {
    id: "inv-2",
    label: "Sample 02: Software Consulting (Missing PO Flag)",
    vendor: "Veyora Tech Systems Hub",
    invoiceNumber: "VTS-2026-104",
    invoiceDate: "2026-10-22",
    dueDate: "2026-11-21",
    currency: "USD",
    poNumber: "", // Missing PO triggers Human Review
    lineItems: [
      { description: "AI Agent Workflow Sprint Phase 1", qty: 1, unitPrice: 2400, total: 2400 },
      { description: "Document OCR Integration Testing", qty: 1, unitPrice: 600, total: 600 }
    ],
    taxRate: 0.18,
    extractedConfidence: 92.1,
    validationStatus: "FLAGGED_FOR_HUMAN_REVIEW"
  }
];

export const AutomationDemos = () => {
  const [activeTab, setActiveTab] = useState<"lead" | "document" | "architecture">("lead");

  // Lead qualification demo state
  const [selectedLeadSample, setSelectedLeadSample] = useState(SAMPLE_LEADS[0]);
  const [customLead, setCustomLead] = useState({
    name: SAMPLE_LEADS[0].name,
    company: SAMPLE_LEADS[0].company,
    need: SAMPLE_LEADS[0].need,
    message: SAMPLE_LEADS[0].message
  });
  const [isEvaluatingLead, setIsEvaluatingLead] = useState(false);
  const [leadResult, setLeadResult] = useState(SAMPLE_LEADS[0]);

  const handleSelectLeadSample = (sample: typeof SAMPLE_LEADS[0]) => {
    setSelectedLeadSample(sample);
    setCustomLead({
      name: sample.name,
      company: sample.company,
      need: sample.need,
      message: sample.message
    });
    setIsEvaluatingLead(true);
    setTimeout(() => {
      setLeadResult(sample);
      setIsEvaluatingLead(false);
    }, 400);
  };

  const handleRunCustomLead = () => {
    setIsEvaluatingLead(true);
    setTimeout(() => {
      // Heuristic evaluation for custom text
      const len = (customLead.message + customLead.need).length;
      const isHigh = len > 80 && customLead.company.length > 2;
      setLeadResult({
        id: "custom-run",
        label: "Custom Submission",
        name: customLead.name || "Custom Prospect",
        company: customLead.company || "Prospective Partner",
        email: "simulated@prospect.com",
        country: "International",
        need: customLead.need,
        message: customLead.message,
        simulatedScore: isHigh ? 88 : 42,
        priority: isHigh ? "HIGH PRIORITY" : "MEDIUM PRIORITY",
        intent: isHigh ? "Qualified Business Lead" : "Needs Clarification",
        recommendedAction: isHigh 
          ? "Route to Senior Systems Architect for tailored workflow scoping" 
          : "Request further technical details regarding existing stack",
        extractedEntities: {
          budgetTier: isHigh ? "Standard Project Scope" : "To be confirmed",
          timeline: isHigh ? "Estimated 30-45 Days" : "TBD",
          integrationTargets: ["Webhook API", "CRM Bridge", "LLM Parser"],
          riskFlag: isHigh ? "None identified" : "Brief description provided"
        }
      });
      setIsEvaluatingLead(false);
    }, 450);
  };

  // Document demo state
  const [selectedDoc, setSelectedDoc] = useState(SYNTHETIC_INVOICES[0]);
  const [editableDoc, setEditableDoc] = useState(SYNTHETIC_INVOICES[0]);

  const handleSelectDoc = (doc: typeof SYNTHETIC_INVOICES[0]) => {
    setSelectedDoc(doc);
    setEditableDoc(doc);
  };

  const calculateSubtotal = () => {
    return editableDoc.lineItems.reduce((acc, item) => acc + (item.qty * item.unitPrice), 0);
  };

  const calculateTax = () => {
    return calculateSubtotal() * editableDoc.taxRate;
  };

  const calculateTotal = () => {
    return calculateSubtotal() + calculateTax();
  };

  const hasPoError = !editableDoc.poNumber || editableDoc.poNumber.trim() === "";

  return (
    <div id="demos" className="space-y-12">
      
      {/* Demo Selector Header */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-6 border-b border-subtle pb-6">
        <div>
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-brand block mb-1">
            Live Architecture Simulator
          </span>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-primary">
            Explore Interactive Automation Workflows
          </h3>
          <p className="text-xs sm:text-sm text-secondary mt-1">
            Test realistic workflow mechanics. All inputs and outputs are processed transparently in sandbox mode.
          </p>
        </div>

        {/* Tab Buttons */}
        <div className="flex items-center p-1.5 rounded-xl border border-glass bg-card/60 backdrop-blur-md">
          <button
            onClick={() => setActiveTab("lead")}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-all ${
              activeTab === "lead" 
                ? "bg-brand text-inverse shadow-md" 
                : "text-secondary hover:text-primary"
            }`}
          >
            <Bot className="h-4 w-4" />
            <span>AI Lead Qualification</span>
          </button>
          <button
            onClick={() => setActiveTab("document")}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-all ${
              activeTab === "document" 
                ? "bg-brand text-inverse shadow-md" 
                : "text-secondary hover:text-primary"
            }`}
          >
            <FileText className="h-4 w-4" />
            <span>Document Processing</span>
          </button>
          <button
            onClick={() => setActiveTab("architecture")}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-all ${
              activeTab === "architecture" 
                ? "bg-brand text-inverse shadow-md" 
                : "text-secondary hover:text-primary"
            }`}
          >
            <Workflow className="h-4 w-4" />
            <span>Pipeline Architecture</span>
          </button>
        </div>
      </div>

      {/* TAB 1: AI LEAD QUALIFICATION DEMO */}
      {activeTab === "lead" && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Input Form / Sample Chooser */}
          <div className="lg:col-span-6 rounded-2xl border border-glass bg-card p-6 sm:p-8 space-y-6">
            <div className="flex items-center justify-between border-b border-subtle pb-4">
              <div className="flex items-center gap-2">
                <Sliders className="h-4 w-4 text-brand" />
                <h4 className="text-sm font-bold uppercase tracking-wider text-primary">Inbound Lead Input</h4>
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 border border-white/10 text-muted">
                Synthetic Testbench
              </span>
            </div>

            {/* Quick Presets */}
            <div className="space-y-2">
              <label className="text-[11px] font-bold uppercase tracking-wider text-muted block">
                Load Preset Synthetic Scenarios:
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                {SAMPLE_LEADS.map((sample) => (
                  <button
                    key={sample.id}
                    onClick={() => handleSelectLeadSample(sample)}
                    className={`text-left p-2.5 rounded-lg border text-xs transition-all ${
                      selectedLeadSample.id === sample.id 
                        ? "border-brand bg-brand/10 text-primary font-bold" 
                        : "border-glass bg-base/50 text-secondary hover:border-brand/40"
                    }`}
                  >
                    <span className="block truncate font-mono text-[10px] text-brand">{sample.company}</span>
                    <span className="block truncate text-[11px]">{sample.priority}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Form Fields */}
            <div className="space-y-4 pt-2">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-secondary">Prospect Name</label>
                  <input
                    type="text"
                    value={customLead.name}
                    onChange={(e) => setCustomLead({ ...customLead, name: e.target.value })}
                    className="w-full rounded-lg border border-glass bg-base px-3.5 py-2 text-xs text-primary focus:border-brand focus:outline-none"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-secondary">Company Name</label>
                  <input
                    type="text"
                    value={customLead.company}
                    onChange={(e) => setCustomLead({ ...customLead, company: e.target.value })}
                    className="w-full rounded-lg border border-glass bg-base px-3.5 py-2 text-xs text-primary focus:border-brand focus:outline-none"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-secondary">Stated Business Need</label>
                <input
                  type="text"
                  value={customLead.need}
                  onChange={(e) => setCustomLead({ ...customLead, need: e.target.value })}
                  className="w-full rounded-lg border border-glass bg-base px-3.5 py-2 text-xs text-primary focus:border-brand focus:outline-none"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-secondary">Message / Requirement Scope</label>
                <textarea
                  rows={4}
                  value={customLead.message}
                  onChange={(e) => setCustomLead({ ...customLead, message: e.target.value })}
                  className="w-full rounded-lg border border-glass bg-base p-3.5 text-xs text-primary focus:border-brand focus:outline-none leading-relaxed"
                />
              </div>

              <button
                onClick={handleRunCustomLead}
                disabled={isEvaluatingLead}
                className="w-full inline-flex items-center justify-center gap-2 bg-brand text-inverse font-bold text-xs uppercase tracking-[0.18em] py-3.5 rounded-lg hover:bg-white transition-all disabled:opacity-50"
              >
                {isEvaluatingLead ? (
                  <>
                    <RefreshCw className="h-4 w-4 animate-spin" />
                    <span>Analyzing Lead Semantics...</span>
                  </>
                ) : (
                  <>
                    <Sparkles className="h-4 w-4" />
                    <span>Simulate AI Lead Evaluation</span>
                  </>
                )}
              </button>
            </div>

            <p className="text-[10px] text-muted leading-relaxed text-center italic">
              Notice: Demonstrative sandbox. No actual outbound emails or automated messaging triggered.
            </p>
          </div>

          {/* Right: Structured Output Analysis */}
          <div className="lg:col-span-6 rounded-2xl border border-glass bg-card/90 p-6 sm:p-8 space-y-6">
            <div className="flex items-center justify-between border-b border-subtle pb-4">
              <div className="flex items-center gap-2">
                <Bot className="h-4 w-4 text-brand" />
                <h4 className="text-sm font-bold uppercase tracking-wider text-primary">Triage Agent Output</h4>
              </div>
              <div className="flex items-center gap-2">
                <span className={`text-[10px] font-mono font-bold px-2.5 py-1 rounded border ${
                  leadResult.simulatedScore > 75 
                    ? "bg-emerald-500/10 text-emerald-400 border-emerald-500/30"
                    : leadResult.simulatedScore > 40
                    ? "bg-amber-500/10 text-amber-400 border-amber-500/30"
                    : "bg-rose-500/10 text-rose-400 border-rose-500/30"
                }`}>
                  Score: {leadResult.simulatedScore}/100
                </span>
                <span className="text-[10px] font-mono px-2 py-1 rounded bg-white/5 border border-white/10 text-secondary">
                  {leadResult.priority}
                </span>
              </div>
            </div>

            {/* Qualification Cards */}
            <div className="grid grid-cols-2 gap-4">
              <div className="p-3.5 rounded-xl border border-glass bg-base/50">
                <span className="text-[10px] font-mono uppercase tracking-wider text-muted block">Intent Type</span>
                <p className="text-xs font-bold text-primary mt-1">{leadResult.intent}</p>
              </div>
              <div className="p-3.5 rounded-xl border border-glass bg-base/50">
                <span className="text-[10px] font-mono uppercase tracking-wider text-muted block">Budget Classification</span>
                <p className="text-xs font-bold text-primary mt-1">{leadResult.extractedEntities.budgetTier}</p>
              </div>
            </div>

            {/* Recommended Next Action */}
            <div className="p-4 rounded-xl border border-brand/30 bg-brand/5 space-y-1.5">
              <div className="flex items-center gap-2 text-brand">
                <CheckCircle2 className="h-4 w-4" />
                <span className="text-xs font-bold uppercase tracking-wider">Automated Next Action</span>
              </div>
              <p className="text-xs text-primary leading-relaxed pl-6">
                {leadResult.recommendedAction}
              </p>
            </div>

            {/* Extracted JSON Schema Preview */}
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs text-muted">
                <span className="font-mono text-[11px] uppercase tracking-wider">Normalized CRM Payload</span>
                <span className="text-[10px] font-mono text-brand">JSON Schema v1.2</span>
              </div>
              <pre className="p-4 rounded-xl border border-glass bg-[#030308] text-[11px] font-mono text-emerald-400 overflow-x-auto leading-relaxed">
{JSON.stringify({
  prospect: {
    name: leadResult.name,
    company: leadResult.company,
    country: leadResult.country
  },
  qualification: {
    score: leadResult.simulatedScore,
    status: leadResult.priority,
    intentCategory: leadResult.intent,
    integrationsDetected: leadResult.extractedEntities.integrationTargets
  },
  orchestration: {
    action: leadResult.recommendedAction,
    riskNotes: leadResult.extractedEntities.riskFlag,
    humanEscalationRequired: leadResult.simulatedScore < 60
  }
}, null, 2)}
              </pre>
            </div>

            <div className="flex items-center justify-between pt-2 border-t border-subtle text-xs text-secondary">
              <span>Next step in production:</span>
              <span className="text-primary font-mono font-semibold">Webhooks &rarr; CRM &rarr; Slack Alert</span>
            </div>
          </div>

        </div>
      )}

      {/* TAB 2: DOCUMENT PROCESSING DEMO */}
      {activeTab === "document" && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Synthetic Invoice Document View */}
          <div className="lg:col-span-6 rounded-2xl border border-glass bg-card p-6 sm:p-8 space-y-6">
            <div className="flex items-center justify-between border-b border-subtle pb-4">
              <div className="flex items-center gap-2">
                <FileText className="h-4 w-4 text-brand" />
                <h4 className="text-sm font-bold uppercase tracking-wider text-primary">Sample Invoice (Synthetic)</h4>
              </div>
              <div className="flex items-center gap-2">
                {SYNTHETIC_INVOICES.map((doc) => (
                  <button
                    key={doc.id}
                    onClick={() => handleSelectDoc(doc)}
                    className={`text-[10px] font-mono px-2.5 py-1 rounded border transition-all ${
                      selectedDoc.id === doc.id
                        ? "bg-brand text-inverse border-brand font-bold"
                        : "bg-white/5 border-white/10 text-secondary hover:text-primary"
                    }`}
                  >
                    {doc.id === "inv-1" ? "Valid PO" : "Missing PO (Audit)"}
                  </button>
                ))}
              </div>
            </div>

            {/* Document Preview Card */}
            <div className="p-6 rounded-xl border border-glass bg-base space-y-6">
              <div className="flex justify-between items-start border-b border-subtle pb-4">
                <div>
                  <span className="text-[10px] font-mono text-muted uppercase">Vendor</span>
                  <h5 className="text-base font-bold text-primary">{editableDoc.vendor}</h5>
                </div>
                <div className="text-right">
                  <span className="text-[10px] font-mono text-muted uppercase">Invoice Number</span>
                  <h5 className="text-sm font-mono font-bold text-brand">{editableDoc.invoiceNumber}</h5>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4 text-xs">
                <div>
                  <span className="text-[10px] text-muted uppercase block">Invoice Date</span>
                  <span className="font-mono text-secondary">{editableDoc.invoiceDate}</span>
                </div>
                <div>
                  <span className="text-[10px] text-muted uppercase block">Due Date</span>
                  <span className="font-mono text-secondary">{editableDoc.dueDate}</span>
                </div>
                <div>
                  <span className="text-[10px] text-muted uppercase block">PO Number</span>
                  <span className={`font-mono font-bold ${hasPoError ? "text-rose-400" : "text-emerald-400"}`}>
                    {editableDoc.poNumber || "[MISSING PO]"}
                  </span>
                </div>
              </div>

              {/* Line items table */}
              <div className="border border-subtle rounded-lg overflow-hidden">
                <table className="w-full text-left text-xs">
                  <thead className="bg-white/5 text-[10px] font-mono uppercase text-muted border-b border-subtle">
                    <tr>
                      <th className="p-2.5">Description</th>
                      <th className="p-2.5 text-center">Qty</th>
                      <th className="p-2.5 text-right">Price</th>
                      <th className="p-2.5 text-right">Total</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-subtle font-mono text-[11px]">
                    {editableDoc.lineItems.map((item, idx) => (
                      <tr key={idx} className="text-secondary">
                        <td className="p-2.5 text-primary">{item.description}</td>
                        <td className="p-2.5 text-center">{item.qty}</td>
                        <td className="p-2.5 text-right">${item.unitPrice.toFixed(2)}</td>
                        <td className="p-2.5 text-right text-primary">${item.total.toFixed(2)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Total calculations */}
              <div className="border-t border-subtle pt-4 space-y-1.5 text-xs text-secondary text-right">
                <div className="flex justify-between">
                  <span>Subtotal:</span>
                  <span className="font-mono text-primary">${calculateSubtotal().toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Tax ({Math.round(editableDoc.taxRate * 100)}%):</span>
                  <span className="font-mono text-primary">${calculateTax().toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm font-bold text-brand border-t border-subtle pt-2">
                  <span>Grand Total:</span>
                  <span className="font-mono">${calculateTotal().toFixed(2)} USD</span>
                </div>
              </div>
            </div>

            <p className="text-[10px] text-muted text-center italic">
              Synthetic sample generated for workflow validation testing. No proprietary customer files are used.
            </p>
          </div>

          {/* Right: Validation & Human Review Gate */}
          <div className="lg:col-span-6 rounded-2xl border border-glass bg-card/90 p-6 sm:p-8 space-y-6">
            <div className="flex items-center justify-between border-b border-subtle pb-4">
              <div className="flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-brand" />
                <h4 className="text-sm font-bold uppercase tracking-wider text-primary">Validation & Human Approval</h4>
              </div>
              <span className={`text-[10px] font-mono font-bold px-2.5 py-1 rounded border ${
                !hasPoError 
                  ? "bg-emerald-500/10 text-emerald-400 border-emerald-500/30"
                  : "bg-rose-500/10 text-rose-400 border-rose-500/30"
              }`}>
                {!hasPoError ? "STATUS: AUTOMATED SYNC READY" : "STATUS: FLAGGED FOR HUMAN APPROVAL"}
              </span>
            </div>

            {/* Validation Rules Checklist */}
            <div className="space-y-3">
              <span className="text-[11px] font-bold uppercase tracking-wider text-muted block">
                Automated Integrity Checks:
              </span>

              <div className="p-3 rounded-lg border border-emerald-500/20 bg-emerald-500/5 flex items-center justify-between text-xs">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                  <span className="text-primary font-medium">Mathematical Re-sum & Tax Calculation</span>
                </div>
                <span className="text-emerald-400 font-mono text-[10px]">Verified (100% Match)</span>
              </div>

              <div className="p-3 rounded-lg border border-emerald-500/20 bg-emerald-500/5 flex items-center justify-between text-xs">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                  <span className="text-primary font-medium">Vendor Registry Existence</span>
                </div>
                <span className="text-emerald-400 font-mono text-[10px]">Active Vendor Found</span>
              </div>

              <div className={`p-3 rounded-lg border flex items-center justify-between text-xs ${
                hasPoError 
                  ? "border-rose-500/30 bg-rose-500/10" 
                  : "border-emerald-500/20 bg-emerald-500/5"
              }`}>
                <div className="flex items-center gap-2">
                  {hasPoError ? (
                    <AlertTriangle className="h-4 w-4 text-rose-400" />
                  ) : (
                    <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                  )}
                  <span className="text-primary font-medium">Purchase Order (PO) Cross-Check</span>
                </div>
                <span className={`font-mono text-[10px] ${hasPoError ? "text-rose-400 font-bold" : "text-emerald-400"}`}>
                  {hasPoError ? "Missing PO — Requires Approval" : "PO Match Confirmed"}
                </span>
              </div>
            </div>

            {/* Interactive Human Review Field */}
            <div className="p-4 rounded-xl border border-glass bg-base/60 space-y-3">
              <div className="flex items-center gap-2 text-xs font-bold text-primary">
                <Edit3 className="h-4 w-4 text-brand" />
                <span>Operator Review & Override Gate</span>
              </div>
              <p className="text-[11px] text-secondary leading-relaxed">
                If automated extraction encounters ambiguous fields or missing PO numbers, operators can verify and enter corrections before pushing to ERP:
              </p>

              <div className="space-y-1.5 pt-1">
                <label className="text-[11px] font-semibold text-secondary">
                  Operator PO Input / Correction:
                </label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    placeholder="Enter PO (e.g. PO-99201) to clear flag..."
                    value={editableDoc.poNumber}
                    onChange={(e) => setEditableDoc({ ...editableDoc, poNumber: e.target.value })}
                    className="flex-grow rounded-lg border border-glass bg-card px-3.5 py-2 text-xs font-mono text-primary focus:border-brand focus:outline-none"
                  />
                  {hasPoError && (
                    <button
                      onClick={() => setEditableDoc({ ...editableDoc, poNumber: "PO-MANUAL-APPROVED-2026" })}
                      className="px-3 py-2 bg-brand/20 border border-brand/40 text-brand text-xs font-bold rounded-lg hover:bg-brand hover:text-inverse transition-colors whitespace-nowrap"
                    >
                      Quick Approve
                    </button>
                  )}
                </div>
              </div>
            </div>

            <div className="pt-2 border-t border-subtle flex items-center justify-between text-xs text-secondary">
              <span>ERP Sync Destination:</span>
              <span className="font-mono text-primary">SAP / QuickBooks / Xero Webhook</span>
            </div>

          </div>

        </div>
      )}

      {/* TAB 3: PIPELINE ARCHITECTURE FLOW */}
      {activeTab === "architecture" && (
        <div className="rounded-2xl border border-glass bg-card p-6 sm:p-10 space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-brand">
              Production Architecture
            </span>
            <h4 className="text-xl sm:text-2xl font-extrabold text-primary">
              Five-Stage Supervised Automation Flow
            </h4>
            <p className="text-xs sm:text-sm text-secondary">
              Every workflow engineered by VP VEYORA incorporates deterministic validation and human supervisor checkpoints.
            </p>
          </div>

          {/* 5 Architecture Stages Flow */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative">
            {[
              {
                step: "01",
                title: "Input Ingestion",
                desc: "Webhooks, inbound emails, PDF uploads, or API payloads captured with HMAC authentication.",
                icon: Mail,
                badge: "Trigger"
              },
              {
                step: "02",
                title: "AI Processing",
                desc: "LLMs, OCR parsers, and embeddings extract structured schemas and conversational intent.",
                icon: Bot,
                badge: "Extraction"
              },
              {
                step: "03",
                title: "Rule Validation",
                desc: "Deterministic business logic, tax calculations, and database entity integrity checks.",
                icon: ShieldCheck,
                badge: "Automated Gate"
              },
              {
                step: "04",
                title: "Human Review",
                desc: "Discrepancy routing: High confidence auto-resolves; flagged edge-cases go to review queue.",
                icon: Eye,
                badge: "Supervision"
              },
              {
                step: "05",
                title: "System Output",
                desc: "Synchronized writes to CRM, ERP, PostgreSQL, notification channels, and audit logs.",
                icon: Database,
                badge: "Integration"
              }
            ].map((stage, idx) => (
              <div 
                key={idx}
                className="rounded-xl border border-glass bg-base/60 p-5 flex flex-col justify-between space-y-4 hover:border-brand/40 transition-all group"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-brand">{stage.step}</span>
                    <span className="text-[9px] font-mono uppercase tracking-wider px-2 py-0.5 rounded bg-white/5 border border-white/10 text-muted">
                      {stage.badge}
                    </span>
                  </div>
                  <div className="inline-flex p-2.5 rounded-lg bg-brand/10 text-brand border border-brand/20 group-hover:scale-105 transition-transform">
                    <stage.icon className="h-4 w-4" />
                  </div>
                  <h5 className="text-sm font-bold text-primary">{stage.title}</h5>
                  <p className="text-xs text-secondary leading-relaxed">{stage.desc}</p>
                </div>

                <div className="pt-3 border-t border-subtle">
                  <span className="text-[10px] font-mono text-muted flex items-center gap-1">
                    <span>Verified Step</span>
                    <CheckCircle2 className="h-3 w-3 text-brand" />
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="p-4 rounded-xl border border-glass bg-base/40 text-center text-xs text-secondary max-w-xl mx-auto">
            Need this pipeline connected to your proprietary stack?{" "}
            <a href="/partners" className="text-brand font-bold hover:underline">
              Discuss an agency partnership &rarr;
            </a>
          </div>
        </div>
      )}

    </div>
  );
};
