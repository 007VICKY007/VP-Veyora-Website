import React from "react";
import { GlassCard } from "@/components/shared/GlassCard";
import { Cpu, Layers, Code, ShieldCheck, Terminal, Compass } from "lucide-react";

export default function TechnologiesPage() {
  const techCategories = [
    {
      title: "Artificial Intelligence & RAG",
      desc: "APIs, LLM frameworks, vector search engines, and prompt orchestrators.",
      icon: Cpu,
      techs: ["OpenAI API", "Anthropic Claude API", "Google Gemini API", "LangChain", "LlamaIndex", "Pinecone", "ChromaDB", "pgvector"]
    },
    {
      title: "Web & Mobile Frontend",
      desc: "Modern user interface frameworks, state managers, and styling utilities.",
      icon: Code,
      techs: ["Next.js 15", "React 19", "TypeScript", "Tailwind CSS", "Framer Motion", "GSAP Animations", "Flutter", "React Native"]
    },
    {
      title: "Backend & Database Engines",
      desc: "API architectures, object-relational mapping, and relational database systems.",
      icon: Layers,
      techs: ["Node.js", "Express.js", "Prisma ORM", "PostgreSQL", "MongoDB", "Redis Caching", "RESTful APIs", "GraphQL"]
    },
    {
      title: "DevOps & Cloud Operations",
      desc: "Containerization, automated build-runs, and server management.",
      icon: Terminal,
      techs: ["Amazon Web Services (AWS)", "Google Cloud Platform (GCP)", "Docker Containers", "Kubernetes Clusters", "GitHub Actions CI/CD", "Terraform IaC", "Nginx Servers"]
    },
    {
      title: "AI Automation Node-Networks",
      desc: "Visual workflow orchestrators and API webhooks.",
      icon: Compass,
      techs: ["n8n (Self-Host/Cloud)", "Make.com", "Zapier Integrations", "WhatsApp Business API", "Resend Email API"]
    },
    {
      title: "Cybersecurity & Web3 Systems",
      desc: "Security auditing systems, penetration test packages, and decentralized Web3 ledgers.",
      icon: ShieldCheck,
      techs: ["Kali Linux", "Burp Suite", "OWASP ZAP Auditing", "Wireshark", "Solidity Smart Contracts", "Metamask", "Ethers.js"]
    }
  ];

  return (
    <div className="bg-transparent text-slate-900 dark:text-white min-h-screen py-20 px-4">
      <div className="max-w-6xl mx-auto space-y-16">
        
        {/* Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#00529b] dark:text-blue-400">Our Toolkits</span>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">Enterprise Technology Stack</h1>
          <p className="text-slate-600 dark:text-gray-400 text-lg leading-relaxed">
            We use stable, modern, and high-performance developer ecosystems to construct safe databases, fast web portals, and reliable automations.
          </p>
        </div>

        {/* Tech categories list */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {techCategories.map((cat, idx) => {
            const Icon = cat.icon;
            return (
              <GlassCard key={idx} interactive={false} className="border-slate-200 dark:border-gray-900 bg-white/70 border border-slate-100 dark:bg-white dark:bg-gray-900/10 dark:border-gray-950 space-y-6 flex flex-col justify-between">
                <div className="space-y-4">
                  {/* Category Header */}
                  <div className="flex items-center space-x-3">
                    <div className="p-2.5 rounded-lg bg-blue-500/10 text-[#00529b] dark:text-blue-400">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="font-bold text-slate-900 dark:text-white text-base sm:text-lg">{cat.title}</h3>
                  </div>
                  <p className="text-xs text-slate-500 dark:text-gray-500 leading-relaxed">{cat.desc}</p>
                </div>

                {/* Tech Chips */}
                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-slate-200 dark:border-gray-900">
                  {cat.techs.map((tech, i) => (
                    <span 
                      key={i} 
                      className="bg-slate-50 dark:bg-gray-950 border border-slate-200 dark:border-gray-800 rounded px-2.5 py-1 text-xs text-slate-700 dark:text-gray-300 font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </GlassCard>
            );
          })}
        </div>

        {/* Standard note */}
        <div className="rounded-3xl bg-indigo-950/20 border border-[#00529b]/20 p-8 sm:p-12 text-center max-w-4xl mx-auto">
          <h3 className="text-xl sm:text-2xl font-bold mb-4">Have an Existing System?</h3>
          <p className="text-slate-700 dark:text-gray-300 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            We integrate with legacy architectures, databases, and custom third-party APIs. We perform full code reviews and security audits to bridge outdated applications with modern AI automation pipelines safely.
          </p>
        </div>

      </div>
    </div>
  );
}
