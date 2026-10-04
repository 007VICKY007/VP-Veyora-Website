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
      question: "Who is behind VP Veyora Private Limited?",
      answer: "Founded by Vignesh Pandiya, VP Veyora is an AI-first technology firm engineering custom software, workflow automation pipelines, and enterprise architectures."
    },
    {
      question: "What core technology stacks do you deliver?",
      answer: "We engineer AI automation (n8n, LangChain, OpenAI API), full-stack web platforms (Next.js 15, React 19, TypeScript, PostgreSQL), cloud infrastructure (AWS, Docker, Kubernetes), and enterprise cybersecurity audits."
    },
    {
      question: "What typical ROI can clients expect?",
      answer: "Our automated workflow solutions typically eliminate 70–80% of repetitive operational tasks, reducing overhead and delivering a measurable return on investment within 90 days."
    },
    {
      question: "How do you guarantee data security and compliance?",
      answer: "Every system undergoes strict zero-trust security audits, role-based access controls, encrypted data pipelines, and OWASP-compliant vulnerability assessments."
    },
    {
      question: "Do you provide ongoing support after deployment?",
      answer: "Yes. We offer continuous SLA maintenance, security patch cycles, cloud performance monitoring, and iterative feature scaling."
    }
  ];

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-24 px-4 max-w-4xl mx-auto border-t border-white/[0.06]">
      {/* Header */}
      <div className="text-center mb-16 space-y-4">
        <div className="inline-flex items-center space-x-2 rounded-full border border-[#F5C200]/20 bg-[#F5C200]/05 px-3.5 py-1 text-xs font-semibold text-[#F5C200]">
          <HelpCircle className="h-3.5 w-3.5" />
          <span>FAQ</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
          Frequently Asked Questions
        </h2>
        <p className="text-white/50 text-sm max-w-md mx-auto">
          Clear answers about our development process, tech stack, and partnership models.
        </p>
      </div>

      {/* Accordion List */}
      <div className="space-y-3">
        {faqs.map((faq, index) => {
          const isOpen = activeIndex === index;
          return (
            <div
              key={index}
              className={`rounded-xl border transition-all duration-300 ${
                isOpen 
                  ? "border-[#F5C200]/30 bg-white/[0.02]" 
                  : "border-white/[0.06] bg-white/[0.01] hover:border-white/[0.12] hover:bg-white/[0.02]"
              }`}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="flex w-full items-center justify-between p-5 sm:p-6 text-left focus:outline-none cursor-pointer"
              >
                <span className="text-sm sm:text-base font-semibold text-white/90">
                  {faq.question}
                </span>
                <span className={`ml-4 shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}>
                  <ChevronDown className="h-4 w-4 text-[#F5C200]" />
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
                    <div className="px-5 pb-6 sm:px-6 text-xs sm:text-sm text-white/60 leading-relaxed border-t border-white/[0.04] pt-4">
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
