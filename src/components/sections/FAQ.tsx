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
      question: "Who is the founder of VP Enterprises?",
      answer: "VP Enterprises was founded by Vignesh Pandiya. Under his leadership, we function as an AI-first technology partner, engineering robust automation engines and custom enterprise architectures."
    },
    {
      question: "What types of services do you offer?",
      answer: "We offer end-to-end IT consulting. This spans custom AI models (LLMs, RAG systems, Prompt Engineering), Workflow Automation (n8n, Make, Zapier), Custom Software & SaaS development, Web & Mobile applications, Cybersecurity assessments, Cloud engineering, and IoT embedded devices."
    },
    {
      question: "How do you calculate ROI on automation projects?",
      answer: "Typically, our clients see an 80%+ reduction in manual processing times (such as invoice processing, data syncs, or scheduling) and a 3x return on investment within the first quarter of going live. We analyze your bottlenecks to deliver exact metrics."
    },
    {
      question: "How does VP Enterprises approach application security?",
      answer: "Security is baked into our development lifecycle. We conduct rigorous penetration testing, implement rate-limiting, defend against OWASP Top 10 vulnerabilities (SQLi, XSS, CSRF), and maintain zero-trust cloud configuration guidelines."
    },
    {
      question: "Can we hire VP Enterprises for ongoing IT support?",
      answer: "Yes. We offer service-level agreement (SLA) support packages ranging from startup launch support to dedicated 24/7 enterprise infrastructure monitoring, software upgrades, and continuous feature integration."
    }
  ];

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="bg-transparent py-20 px-4 transition-colors duration-300">
      <div className="mx-auto max-w-4xl">
        
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 rounded-full border border-[#00529b]/20 bg-blue-50/40 border border-blue-100/50 dark:bg-blue-50/40 border border-blue-100/50 px-4 py-1.5 text-xs text-[#00529b] dark:text-blue-400">
            <HelpCircle className="h-4 w-4" />
            <span>Got Questions?</span>
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-600 dark:text-gray-400 max-w-xl mx-auto">
            Everything you need to know about our services, integration workflows, and capabilities.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = activeIndex === index;
            return (
              <div
                key={index}
                className="overflow-hidden rounded-2xl border border-slate-200 dark:border-gray-800 bg-white/70 border border-slate-100 dark:bg-white dark:bg-gray-900/40 dark:border-gray-950 backdrop-blur-sm transition-all duration-300 hover:border-slate-200 dark:border-gray-700"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="flex w-full items-center justify-between p-6 text-left focus:outline-none"
                >
                  <span className="text-base sm:text-lg font-semibold text-slate-900 dark:text-white">
                    {faq.question}
                  </span>
                  <span className={`ml-4 text-slate-600 dark:text-gray-400 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}>
                    <ChevronDown className="h-5 w-5 text-[#00529b] dark:text-blue-400" />
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="border-t border-slate-200 dark:border-gray-800 p-6 text-sm sm:text-base text-slate-600 dark:text-gray-400 leading-relaxed bg-white/70 border border-slate-100 dark:bg-white dark:bg-gray-900/20 dark:border-gray-950">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
