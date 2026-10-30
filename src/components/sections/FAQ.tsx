"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

export const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqs: FAQItem[] = [
    {
      question: "What does VP VEYORA do as an AI Automation Delivery Partner?",
      answer: "We act as the specialized technical engineering arm for software agencies, CRM consultants, and growing businesses. We design and build custom AI workflows, autonomous triage agents, document and invoice extraction pipelines, and bidirectional system integrations connecting tools like HubSpot, Salesforce, SAP, QuickBooks, and internal databases."
    },
    {
      question: "How does the white-label agency delivery model work?",
      answer: "Under our white-label agreement, your agency sells AI automation services directly to your clients under your own brand. VP VEYORA provides the architecture, backend engineering, testing, and documentation silently. We sign strict non-disclosure agreements (NDAs), and all intellectual property developed belongs entirely to you or your client."
    },
    {
      question: "How do you coordinate with international clients across different time zones?",
      answer: "Our core engineering hub is located in Tamil Nadu, India (IST), which provides strong overlapping collaboration windows with the UK, Europe, UAE/Middle East, Singapore, and Australia, as well as morning overlap with US Eastern time. We utilize asynchronous documentation, Loom walkthroughs, and scheduled Slack/Zoom touchpoints to ensure rapid turnaround without communication lag."
    },
    {
      question: "How do you prevent AI hallucinations or unintended autonomous actions?",
      answer: "We strictly adhere to a supervised 'Human-in-the-Loop' architecture. We never give LLMs unchecked authority over critical financial transactions, external communications, or database deletion. Workflows include deterministic schema validation, automated math checks, confidence scoring thresholds, and exception queues where ambiguous items must be reviewed and approved by human operators."
    },
    {
      question: "Can we start with a small Proof of Concept (PoC) before committing to a larger project?",
      answer: "Yes. In fact, we recommend beginning with an initial Automation Audit (₹10,000–₹20,000 / $150–$250) or a focused Proof of Concept (₹25,000–₹60,000 / $350–$750) using synthetic sample datasets. This allows your team to test the extraction accuracy, schema structure, and integration mechanics with minimal financial risk before deploying to production."
    },
    {
      question: "How are data privacy and credentials safeguarded?",
      answer: "We follow industry-standard secret management best practices. API keys and credentials are stored exclusively in encrypted environment variables or secure vault managers—never exposed client-side. We encourage clients to provision scoped least-privilege API tokens and sign bilateral data protection agreements."
    },
    {
      question: "Who owns the code, workflow definitions, and intellectual property?",
      answer: "Upon milestone completion and settlement according to the Statement of Work (SOW), 100% of the bespoke code, n8n workflow JSONs, custom scripts, and integration assets belong exclusively to the client or agency partner. We retain zero proprietary lock-in on custom implementations."
    }
  ];

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-24 px-4 max-w-4xl mx-auto border-t border-subtle">
      {/* Header */}
      <div className="text-center mb-16 space-y-4">
        <div className="inline-flex items-center space-x-2 rounded-full border border-brand/20 bg-brand/5 px-3.5 py-1 text-xs font-semibold text-brand">
          <HelpCircle className="h-3.5 w-3.5" />
          <span>Clarity & Governance</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-primary">
          Frequently Asked Questions
        </h2>
        <p className="text-secondary text-sm max-w-md mx-auto">
          Direct, transparent answers regarding our delivery models, security protocols, and international partner workflow.
        </p>
      </div>

      {/* Accordion List */}
      <div className="space-y-3.5">
        {faqs.map((faq, index) => {
          const isOpen = activeIndex === index;
          return (
            <div
              key={index}
              className={`rounded-xl border transition-all duration-300 ${
                isOpen 
                  ? "border-brand/40 bg-card shadow-lg" 
                  : "border-glass bg-card/60 hover:border-brand/20"
              }`}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="flex w-full items-center justify-between p-5 sm:p-6 text-left focus:outline-none cursor-pointer"
                aria-expanded={isOpen}
              >
                <span className="text-sm sm:text-base font-semibold text-primary">
                  {faq.question}
                </span>
                <span className={`ml-4 shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}>
                  <ChevronDown className="h-4 w-4 text-brand" />
                </span>
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25, ease: [0.21, 0.47, 0.32, 0.98] }}
                  >
                    <div className="px-5 pb-6 sm:px-6 text-xs sm:text-sm text-secondary leading-relaxed border-t border-subtle pt-4">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </section>
  );
};
