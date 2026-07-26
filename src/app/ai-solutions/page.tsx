import React from "react";
import Link from "next/link";
import { GlassCard } from "@/components/shared/GlassCard";
import { Brain, Cpu, Database, Languages, Eye, ArrowRight, Check } from "lucide-react";

export default function AiSolutionsPage() {
  const capabilities = [
    { title: "Generative AI & LLMs", desc: "Integrate models like OpenAI's GPT-4, Anthropic's Claude 3.5, and Google's Gemini 1.5 Pro into commercial platforms.", icon: Brain },
    { title: "Retrieval-Augmented Generation (RAG)", desc: "Build secure proprietary document question-answering systems referencing local databases, PDF manuals, or file networks.", icon: Database },
    { title: "Fine-Tuning & Prompt Engineering", desc: "Adapt open-source models (like Llama 3) to your tone, specific formats, or database querying syntaxes.", icon: Cpu },
    { title: "Voice AI & Agentic Interfaces", desc: "Implement human-like conversational interfaces, automated voice systems, and interactive speech portals.", icon: Languages },
    { title: "Computer Vision & OCR", desc: "Cognitive text extraction, barcode readers, spatial navigation, and visual anomaly detection.", icon: Eye }
  ];

  return (
    <div className="bg-transparent text-slate-900 dark:text-white min-h-screen py-20 px-4">
      <div className="max-w-6xl mx-auto space-y-16">
        
        {/* Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#00529b] dark:text-blue-400">Specialty Domain</span>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">Artificial Intelligence Solutions</h1>
          <p className="text-slate-600 dark:text-gray-400 text-lg leading-relaxed">
            We architect and deploy proprietary machine learning pipelines, custom agents, and RAG search structures for enterprise applications.
          </p>
        </div>

        {/* Capabilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {capabilities.map((cap, idx) => {
            const Icon = cap.icon;
            return (
              <GlassCard key={idx} className="space-y-4 hover:border-[#00529b]/20 flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="inline-flex p-3 rounded-xl bg-blue-500/10 text-[#00529b] dark:text-blue-400">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">{cap.title}</h3>
                  <p className="text-sm text-slate-600 dark:text-gray-400 leading-relaxed">{cap.desc}</p>
                </div>
                <div className="pt-4 border-t border-slate-200 dark:border-gray-900 flex items-center space-x-2 text-xs text-slate-500 dark:text-gray-500">
                  <Check className="h-4 w-4 text-[#00529b] dark:text-blue-400" />
                  <span>Production Ready API Integration</span>
                </div>
              </GlassCard>
            );
          })}
        </div>

        {/* Spec Blueprint Box */}
        <div className="rounded-3xl bg-indigo-950/20 border border-[#00529b]/20 p-8 sm:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-2xl sm:text-3xl font-bold">Enterprise Vector Datasets</h3>
              <p className="text-slate-700 dark:text-gray-300 text-sm sm:text-base leading-relaxed">
                By segmenting, indexing, and embedding company documents, we feed semantic search pipelines with precise internal context. This limits hallucinations and keeps data within your private networks.
              </p>
              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-600 dark:text-gray-400">
                <li className="flex items-center space-x-2"><Check className="h-4 w-4 text-[#00529b] dark:text-blue-400" /> <span>Hybrid Keyword + Vector search filters</span></li>
                <li className="flex items-center space-x-2"><Check className="h-4 w-4 text-[#00529b] dark:text-blue-400" /> <span>Metadata filters for role accessibility</span></li>
                <li className="flex items-center space-x-2"><Check className="h-4 w-4 text-[#00529b] dark:text-blue-400" /> <span>Seamless integration with Pinecone, pgvector, or Qdrant</span></li>
              </ul>
            </div>
            <GlassCard interactive={false} className="border-slate-200 dark:border-gray-900 bg-white/70 border border-slate-100 dark:bg-white dark:bg-gray-900/40 dark:border-gray-950 space-y-4">
              <h4 className="font-bold text-sm uppercase tracking-wider text-[#00529b] dark:text-blue-400">AI Stack Highlights</h4>
              <div className="flex flex-wrap gap-2 text-xs font-mono">
                <span className="bg-slate-50 dark:bg-gray-950 border border-slate-200 dark:border-gray-800 px-3 py-1 rounded">OpenAI API</span>
                <span className="bg-slate-50 dark:bg-gray-950 border border-slate-200 dark:border-gray-800 px-3 py-1 rounded">Anthropic Claude</span>
                <span className="bg-slate-50 dark:bg-gray-950 border border-slate-200 dark:border-gray-800 px-3 py-1 rounded">Gemini Flash/Pro</span>
                <span className="bg-slate-50 dark:bg-gray-950 border border-slate-200 dark:border-gray-800 px-3 py-1 rounded">LangChain</span>
                <span className="bg-slate-50 dark:bg-gray-950 border border-slate-200 dark:border-gray-800 px-3 py-1 rounded">LlamaIndex</span>
                <span className="bg-slate-50 dark:bg-gray-950 border border-slate-200 dark:border-gray-800 px-3 py-1 rounded">pgvector / PostgreSQL</span>
              </div>
            </GlassCard>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link
            href="/contact"
            className="inline-flex items-center space-x-2 rounded-full bg-gradient-to-r from-[#00205b] via-[#00529b] to-[#0072ce] hover:from-[#00205b] hover:to-[#00529b] px-8 py-4 text-base font-bold text-white shadow-xl shadow-blue-900/10"
          >
            <span>Consult Vignesh Pandiya on AI</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

      </div>
    </div>
  );
}
