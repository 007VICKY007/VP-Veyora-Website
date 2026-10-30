import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { 
  Bot, 
  Mail, 
  FileText, 
  Users, 
  Search, 
  BarChart3, 
  Workflow, 
  ArrowRight, 
  CheckCircle2, 
  AlertCircle, 
  ShieldCheck, 
  Eye, 
  Cpu,
  Layers
} from "lucide-react";

export const metadata: Metadata = {
  title: "AI Automation Solutions & Workflows | VP VEYORA",
  description: "Explore practical AI automation solutions: email triage, document extraction, CRM synchronization, customer support assistants, and internal RAG search pipelines.",
  alternates: {
    canonical: "https://vpveyora.com/solutions/ai-automation",
  }
};

interface SolutionCase {
  id: string;
  title: string;
  icon: any;
  category: string;
  problem: string;
  workflow: string[];
  inputExample: string;
  outputExample: string;
  integrations: string[];
  humanCheckpoint: string;
  expectedValue: string;
}

const solutions: SolutionCase[] = [
  {
    id: "lead-triage",
    title: "Email Triage & Inbound Lead Qualification",
    icon: Mail,
    category: "Revenue Operations",
    problem: "Sales and account teams spend hours sifting through contact forms and shared inboxes, manually filtering spam, extracting company names, and determining urgency—delaying first-touch response to high-intent leads.",
    workflow: [
      "Inbound email or webhook captured securely via API triggers the ingestion worker.",
      "An LLM triage agent parses sender intent, budget cues, timeline constraints, and company profile.",
      "Deterministic ICP scoring rules classify the lead as Tier-1, Tier-2, or Disqualified.",
      "Qualified leads are staged into CRM with enriched metadata and alert notifications sent to Slack/Teams."
    ],
    inputExample: "Raw email: 'Hi, we are a 40-person logistics firm in Dubai looking to automate our bill-of-lading entries from PDFs into SAP. Need to start within 3 weeks. Budget around $5k-$10k.'",
    outputExample: "JSON CRM Payload: { intent: 'High-Intent Enterprise', company: 'Logistics (UAE)', leadScore: 92/100, urgent: true, action: 'Auto-schedule Senior Solutions Architect' }",
    integrations: ["n8n / Make.com", "OpenAI / Claude API", "HubSpot / Salesforce", "Slack / Microsoft Teams"],
    humanCheckpoint: "Inquiries scoring between 40–70 (ambiguous intent or missing contact verification) are routed to a human SDR review queue before any external meeting invite is dispatched.",
    expectedValue: "Faster response turnaround on high-priority inquiries and reduced administrative triage time. Actual results depend on inbound email volume and existing sales SLAs."
  },
  {
    id: "crm-updates",
    title: "CRM Updates & Sales Follow-Up Automation",
    icon: Users,
    category: "Sales Enablement",
    problem: "Sales representatives frequently neglect updating deal notes, stage progressions, and next-step actions in the CRM after client calls, causing executive reporting gaps and stalled follow-ups.",
    workflow: [
      "Call transcripts (from Zoom, Google Meet, or Fireflies) or meeting notes are uploaded via webhook.",
      "AI extraction model pulls action items, objection summaries, discussed budgets, and promised delivery dates.",
      "CRM records are updated automatically with structured call takeaways and task deadlines.",
      "A personalized follow-up email draft is created in the rep's mailbox for 1-click review."
    ],
    inputExample: "Raw call transcript excerpt: '...Client agreed to the $3,500 pilot sprint. Vignesh to send SOW by Thursday. Follow up call scheduled for Monday 10am EST...'",
    outputExample: "CRM Deal updated: Stage -> 'Proposal Sent', Next Step -> 'Send SOW by Oct 30', Draft Email generated in Gmail Outbox.",
    integrations: ["Zoom / Fireflies.ai", "OpenAI API", "HubSpot / Salesforce / Pipedrive", "Gmail / Outlook"],
    humanCheckpoint: "The sales representative retains 100% control over the generated email draft. Outbound emails are never sent autonomously without manual human approval.",
    expectedValue: "Increased CRM hygiene, cleaner pipeline forecasting, and faster post-meeting follow-up cadence, proportional to team meeting frequency."
  },
  {
    id: "document-extraction",
    title: "Document & Invoice Data Extraction",
    icon: FileText,
    category: "Financial Operations",
    problem: "Accounts payable teams manually type line items, tax numbers, and dates from hundreds of multi-format PDF invoices, causing delayed month-end closes and costly transcription errors.",
    workflow: [
      "PDF invoices or receipts ingested from an incoming AP email inbox or file-upload dropzone.",
      "OCR and multimodal vision/LLM models extract vendor, invoice #, dates, line items, and tax breakdowns.",
      "Deterministic mathematical verification confirms whether subtotal + tax exactly equals total amount.",
      "Validated records are pushed to the ERP or accounting software via webhook."
    ],
    inputExample: "Scanned multi-page PDF vendor invoice with varying layouts and non-standard tables.",
    outputExample: "Normalized accounting schema: { vendorId: 'VEND-882', subtotal: 1250.00, tax: 225.00, total: 1475.00, verified: true }",
    integrations: ["PDF Ingestion Engine", "AWS Textract / GPT-4o / Claude Vision", "QuickBooks / Xero / SAP", "PostgreSQL"],
    humanCheckpoint: "Any invoice with mathematical variance >$0.01, missing PO numbers, or an unverified vendor ID is held in an exception queue for accounts payable staff review.",
    expectedValue: "Substantial reduction in manual keystrokes and faster processing cycles. Accuracy and throughput depend on scan legibility and document layout uniformity."
  },
  {
    id: "support-assistants",
    title: "Customer Support Knowledge Assistants",
    icon: Bot,
    category: "Customer Experience",
    problem: "Support teams are overwhelmed answering repetitive tier-1 questions (e.g. tracking orders, policy lookups, configuration steps), increasing first-response times for urgent customer tickets.",
    workflow: [
      "Inbound support ticket arrives from Zendesk, Intercom, or email.",
      "AI assistant queries company documentation, knowledge base articles, and past resolved tickets.",
      "The assistant crafts a contextually relevant, accurate draft response citing approved internal sources.",
      "If confidence is high, a suggested draft is placed directly in the support agent's dashboard."
    ],
    inputExample: "Customer inquiry: 'How do I configure IP whitelisting for the webhook listener on your platform?'",
    outputExample: "Suggested response: 'You can whitelist our outbound CIDR ranges by navigating to Settings > Webhooks > Security. Here are the 3 current static IPs...'",
    integrations: ["Zendesk / Freshdesk / Intercom", "Pinecone / pgvector", "Anthropic Claude / OpenAI", "Company Help Center"],
    humanCheckpoint: "Support staff review and approve the draft before delivery. Hallucination safeguards ensure answers cite only verified documentation; unverified queries escalate to human engineers.",
    expectedValue: "Reduced average handle time (AHT) and consistent response quality. Performance depends on the depth and accuracy of the underlying knowledge repository."
  },
  {
    id: "rag-search",
    title: "Internal Knowledge-Base Search (RAG)",
    icon: Search,
    category: "Internal Productivity",
    problem: "Team members waste 30+ minutes daily searching across fragmented Notion pages, Google Docs, Slack channels, and PDF policy handbooks to locate authoritative operational answers.",
    workflow: [
      "Internal documentation repositories are continuously indexed and chunked into vector embeddings.",
      "Employees ask questions in Slack, Teams, or an internal portal using natural language.",
      "Hybrid dense-and-sparse retrieval fetches relevant passages with semantic similarity matching.",
      "A synthesized answer is generated with exact clickable source citations."
    ],
    inputExample: "'What is our contractual warranty window for custom software bugs under white-label delivery?'",
    outputExample: "Answer: 'According to the Master Service Agreement (Section 4.2, revised Sept 2026), the standard warranty period is 30 days post-deployment, covering critical bug fixes.' [Source: SOW_Template_v3.pdf]",
    integrations: ["Notion API / Google Drive", "Pinecone / Qdrant / pgvector", "LangChain / LlamaIndex", "Slack / Internal Portal"],
    humanCheckpoint: "Role-based access control (RBAC) ensures employees can only query documents their security clearance permits. Answers always link to the primary source document for verification.",
    expectedValue: "Immediate access to institutional knowledge and reduced onboarding friction. Value depends on document currency and internal adoption."
  },
  {
    id: "reporting-consolidation",
    title: "Automated Reporting & Data Consolidation",
    icon: BarChart3,
    category: "Business Intelligence",
    problem: "Operations leads manually compile data across Google Analytics, Stripe, HubSpot, and ad platforms into weekly spreadsheets for executive reporting, leading to stale metrics.",
    workflow: [
      "Scheduled cron workers fetch data payloads from third-party APIs on weekly or monthly cadences.",
      "Data transformation pipelines normalize disparate currency values, dates, and metric definitions.",
      "Consolidated records are loaded into a centralized database or Google Sheets dashboard.",
      "An automated executive summary highlighting key trend variances is delivered via email or Slack."
    ],
    inputExample: "Raw API JSON payloads from Stripe, Google Analytics 4, and Meta Ads Manager.",
    outputExample: "Consolidated Executive KPI Dashboard + Slack digest: 'Week 42: Net Revenue up 8.4%, Customer Acquisition Cost down 12%, Top channel: Direct B2B.'",
    integrations: ["Stripe API / PayPal", "Google Analytics 4 API", "PostgreSQL / BigQuery", "Resend / Slack Webhooks"],
    humanCheckpoint: "Automated anomaly-detection alerts trigger when numbers vary by more than 20% week-over-week, prompting manual financial reconciliation.",
    expectedValue: "Timely operational visibility without manual weekend spreadsheet preparation. Dependent on third-party API uptime and consistent attribution schemas."
  },
  {
    id: "api-integrations",
    title: "Repetitive Tasks Across APIs & Business Systems",
    icon: Workflow,
    category: "System Integration",
    problem: "Siloed legacy systems require administrative staff to manually copy and paste customer details, orders, and statuses between proprietary tools that lack native integrations.",
    workflow: [
      "Custom microservices or n8n workflows act as bidirectional event-driven API bridges.",
      "Incoming webhooks authenticate via HMAC signatures and queue jobs in a persistent Redis buffer.",
      "Payloads are transformed and posted to target system endpoints with retry logic and idempotency.",
      "Comprehensive execution logs provide full audit trails for compliance."
    ],
    inputExample: "Legacy customer record created in custom desktop ERP.",
    outputExample: "Synchronized account created in modern cloud billing portal + confirmation logged.",
    integrations: ["n8n Workflows", "Custom Node.js / Python Services", "Redis Queue", "Docker / AWS"],
    humanCheckpoint: "Failed API calls enter a dead-letter queue (DLQ) with automated alert notifications, allowing engineering review and 1-click retry.",
    expectedValue: "Eliminates double data entry and reduces inter-system synchronization lag. Overall impact depends on transaction volume and legacy API stability."
  }
];

export default function AISolutionsPage() {
  return (
    <div className="bg-base text-primary min-h-screen pt-32 pb-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-24">

        {/* Page Header */}
        <div className="text-center max-w-4xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-brand/20 bg-brand/5 px-4 py-1.5 text-xs font-semibold text-brand">
            <Cpu className="h-3.5 w-3.5" />
            <span>Operational Architecture</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1]">
            AI Automation Solutions <br className="hidden sm:inline" />
            <span className="text-gradient">Engineered for Reliability</span>
          </h1>
          <p className="text-secondary text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Detailed technical breakdowns of common business bottlenecks, our proposed workflow architectures, integration requirements, and human-in-the-loop safeguards.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <Link
              href="/demos"
              className="inline-flex items-center gap-2 bg-brand text-inverse font-bold text-xs uppercase tracking-[0.18em] px-7 py-4 rounded-lg hover:bg-white transition-all shadow-xl shadow-brand/20"
            >
              <span>Test Interactive Demos</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/partners"
              className="inline-flex items-center gap-2 glass border border-glass text-primary font-semibold text-xs uppercase tracking-[0.18em] px-7 py-4 rounded-lg hover:border-brand/40 hover:text-brand transition-all"
            >
              <span>Explore Agency Partnerships</span>
            </Link>
          </div>
        </div>

        {/* Core Principles Alert */}
        <div className="rounded-2xl border border-glass bg-card/60 p-6 sm:p-8 space-y-3 max-w-5xl mx-auto">
          <div className="flex items-center gap-2.5 text-brand font-bold text-sm">
            <ShieldCheck className="h-5 w-5" />
            <span>Our Automation Philosophy: Supervised & Deterministic</span>
          </div>
          <p className="text-xs sm:text-sm text-secondary leading-relaxed">
            We never deploy AI workflows with blind autonomous authority over critical financial, legal, or customer-facing operations. 
            Every architecture we build includes deterministic schema validation, automated mathematical consistency checks, and human escalation checkpoints to safeguard your business integrity.
          </p>
        </div>

        {/* 7 Solutions List */}
        <div className="space-y-16">
          {solutions.map((sol, index) => {
            const Icon = sol.icon;
            return (
              <div
                key={sol.id}
                id={sol.id}
                className="rounded-2xl border border-glass bg-card p-8 sm:p-12 space-y-8 hover:border-brand/35 transition-all duration-300"
              >
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-subtle pb-6">
                  <div className="flex items-center gap-4">
                    <div className="inline-flex p-3 rounded-xl bg-brand/10 text-brand border border-brand/20">
                      <Icon className="h-6 w-6" />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono uppercase tracking-widest text-brand font-bold">
                        {sol.category} · Solution 0{index + 1}
                      </span>
                      <h2 className="text-2xl sm:text-3xl font-extrabold text-primary">{sol.title}</h2>
                    </div>
                  </div>
                  <Link
                    href={`/contact?service=${encodeURIComponent(sol.title)}`}
                    className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand hover:text-primary transition-colors self-start sm:self-auto"
                  >
                    <span>Scope This Workflow</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>

                {/* Problem & Proposed Workflow Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                  
                  {/* Left: Problem & Flow */}
                  <div className="lg:col-span-7 space-y-6">
                    <div className="space-y-2">
                      <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-muted flex items-center gap-2">
                        <AlertCircle className="h-4 w-4 text-rose-400" />
                        <span>The Business Problem</span>
                      </h3>
                      <p className="text-xs sm:text-sm text-secondary leading-relaxed pl-6">
                        {sol.problem}
                      </p>
                    </div>

                    <div className="space-y-3 pt-2">
                      <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-muted flex items-center gap-2">
                        <Workflow className="h-4 w-4 text-brand" />
                        <span>Proposed Automated Pipeline</span>
                      </h3>
                      <div className="space-y-2.5 pl-6">
                        {sol.workflow.map((step, idx) => (
                          <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-secondary">
                            <span className="text-[10px] font-mono font-bold text-brand rounded px-1.5 py-0.5 bg-brand/10 border border-brand/20 shrink-0 mt-0.5">
                              {idx + 1}
                            </span>
                            <span className="leading-relaxed">{step}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Human Checkpoint Box */}
                    <div className="p-4 rounded-xl border border-brand/20 bg-brand/5 space-y-1.5">
                      <h4 className="text-xs font-bold text-brand flex items-center gap-2">
                        <Eye className="h-4 w-4" />
                        <span>Human-in-the-Loop Supervision Point</span>
                      </h4>
                      <p className="text-xs text-primary leading-relaxed pl-6">
                        {sol.humanCheckpoint}
                      </p>
                    </div>
                  </div>

                  {/* Right: I/O Example & Integrations */}
                  <div className="lg:col-span-5 space-y-6">
                    
                    {/* Input Example */}
                    <div className="space-y-1.5 p-4 rounded-xl border border-glass bg-base/60">
                      <span className="text-[10px] font-mono uppercase tracking-wider text-muted block">Example Input:</span>
                      <p className="text-xs font-mono text-secondary leading-relaxed italic">
                        "{sol.inputExample}"
                      </p>
                    </div>

                    {/* Output Example */}
                    <div className="space-y-1.5 p-4 rounded-xl border border-glass bg-[#030308]">
                      <span className="text-[10px] font-mono uppercase tracking-wider text-emerald-400 block">Structured Output:</span>
                      <pre className="text-[11px] font-mono text-emerald-300 whitespace-pre-wrap leading-relaxed">
                        {sol.outputExample}
                      </pre>
                    </div>

                    {/* Integrations */}
                    <div className="space-y-2">
                      <span className="text-[10px] font-mono uppercase tracking-wider text-muted block">Required Integrations:</span>
                      <div className="flex flex-wrap gap-2">
                        {sol.integrations.map((tech) => (
                          <span key={tech} className="text-[10px] font-mono px-2.5 py-1 rounded bg-white/5 border border-white/10 text-secondary">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Expected Value Disclaimer */}
                    <div className="pt-2 border-t border-subtle">
                      <span className="text-[10px] font-mono uppercase tracking-wider text-muted block">Expected Business Impact:</span>
                      <p className="text-xs text-secondary leading-relaxed mt-1">
                        {sol.expectedValue}
                      </p>
                    </div>

                  </div>

                </div>

              </div>
            );
          })}
        </div>

        {/* Bottom Contact / Scoping CTA */}
        <div className="rounded-2xl border border-glass bg-card p-8 sm:p-12 text-center max-w-4xl mx-auto space-y-6">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-primary">
            Need an Architecture Scoped for Your Process?
          </h2>
          <p className="text-secondary text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            Every business has unique systems and edge cases. We begin with a structured technical audit to map your existing inputs, required validation rules, and integration endpoints.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-brand text-inverse font-bold text-xs uppercase tracking-[0.18em] px-8 py-4 rounded-lg hover:bg-white transition-all shadow-lg shadow-brand/20"
            >
              <span>Request an Automation Audit</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/partners"
              className="inline-flex items-center gap-2 glass border border-glass text-primary font-semibold text-xs uppercase tracking-[0.18em] px-8 py-4 rounded-lg hover:border-brand/40 hover:text-brand transition-all"
            >
              <span>Agency Delivery Partnership</span>
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
