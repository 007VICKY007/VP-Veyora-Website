import React from "react";
import Link from "next/link";
import { GlassCard } from "@/components/shared/GlassCard";
import { Cloud, Layers, Terminal, Cpu, ArrowRight, Check } from "lucide-react";

export default function CloudSolutionsPage() {
  const categories = [
    { title: "AWS, Azure & Google Cloud", desc: "Configure cloud virtual machines, managed relational databases, blob containers, and custom networks.", icon: Cloud },
    { title: "Docker & Kubernetes Containerization", desc: "Package software with its exact dependencies into microservices, deploying them across load-balanced pods.", icon: Layers },
    { title: "CI/CD & DevOps Automation", desc: "Automate code testing, lint checks, compilation, and cloud deploys utilizing GitHub Actions pipelines.", icon: Terminal },
    { title: "Infrastructure as Code", desc: "Maintain cloud environments inside declarative Terraform scripts to ensure stable, replicable server networks.", icon: Cpu }
  ];

  return (
    <div className="bg-transparent text-slate-900 dark:text-white min-h-screen py-20 px-4">
      <div className="max-w-6xl mx-auto space-y-16">
        
        {/* Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#00529b] dark:text-blue-400">Operations Layer</span>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">Cloud & DevOps Infrastructure</h1>
          <p className="text-slate-600 dark:text-gray-400 text-lg leading-relaxed">
            Eliminate server down-times and deployment blockages. We set up automated build-pipelines and containerized hosting networks.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {categories.map((cat, idx) => {
            const Icon = cat.icon;
            return (
              <GlassCard key={idx} className="space-y-4 hover:border-[#00529b]/20 flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="inline-flex p-3 rounded-xl bg-blue-500/10 text-[#00529b] dark:text-blue-400">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">{cat.title}</h3>
                  <p className="text-sm text-slate-600 dark:text-gray-400 leading-relaxed">{cat.desc}</p>
                </div>
                <div className="pt-4 border-t border-slate-200 dark:border-gray-900 flex items-center space-x-2 text-xs text-slate-500 dark:text-gray-500">
                  <Check className="h-4 w-4 text-[#00529b] dark:text-blue-400" />
                  <span>99.99% Infrastructure Uptime Focus</span>
                </div>
              </GlassCard>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link
            href="/contact"
            className="inline-flex items-center space-x-2 rounded-full bg-gradient-to-r from-[#00205b] via-[#00529b] to-[#0072ce] hover:from-[#00205b] hover:to-[#00529b] px-8 py-4 text-base font-bold text-white shadow-xl"
          >
            <span>Consult on Cloud Infrastructure</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

      </div>
    </div>
  );
}
