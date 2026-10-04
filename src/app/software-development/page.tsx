import React from "react";
import Link from "next/link";
import { GlassCard } from "@/components/shared/GlassCard";
import { Code, Database, ShieldAlert, Cpu, ArrowRight, Check } from "lucide-react";

export default function SoftwareDevelopmentPage() {
  const categories = [
    { title: "Custom SaaS Development", desc: "Build scalable web applications from scratch using Next.js 15, React, Node.js, and Prisma.", icon: Code },
    { title: "Enterprise ERP & CRMs", desc: "Bespoke company dashboards to track inventories, schedule tasks, manage clients, and display analytics.", icon: Database },
    { title: "Billing & Invoicing Solutions", desc: "Automated billing systems with subscription management (Stripe/Razorpay), PDF generator, and tax loggers.", icon: Cpu },
    { title: "API Development & Integration", desc: "Build fast, secure REST or GraphQL endpoints with thorough OpenAPI/Swagger documentation.", icon: ShieldAlert }
  ];

  return (
    <div className="bg-transparent text-white  min-h-screen py-20 px-4">
      <div className="max-w-6xl mx-auto space-y-16">
        
        {/* Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#F5C200] ">Engineering Core</span>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">Enterprise Software Development</h1>
          <p className="text-white/60  text-lg leading-relaxed">
            We deliver production-ready software constructed with clean architectures, type-safe structures, and relational databases.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {categories.map((cat, idx) => {
            const Icon = cat.icon;
            return (
              <GlassCard key={idx} className="space-y-4 hover:border-[#F5C200]/20 flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="inline-flex p-3 rounded-xl bg-yellow-500/10 text-[#F5C200] ">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold text-white ">{cat.title}</h3>
                  <p className="text-sm text-white/60  leading-relaxed">{cat.desc}</p>
                </div>
                <div className="pt-4 border-t border-white/08  flex items-center space-x-2 text-xs text-white/40 ">
                  <Check className="h-4 w-4 text-[#F5C200] " />
                  <span>Type-Safe TypeScript Codebases</span>
                </div>
              </GlassCard>
            );
          })}
        </div>

        {/* Blueprint info */}
        <div className="border-t border-white/[0.06] p-8 sm:p-12 text-center space-y-6 max-w-4xl mx-auto">
          <h3 className="text-2xl sm:text-3xl font-bold">Relational Database Focus</h3>
          <p className="text-white/80  text-sm sm:text-base leading-relaxed">
            We prioritize Prisma and PostgreSQL for core transaction registries. Hashed credentials, strict foreign-keys, and dynamic indexes guarantee high database performance and zero data corruption.
          </p>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link
            href="/contact"
            className="inline-flex items-center space-x-2 rounded-full bg-gradient-to-r from-[#1a1a1a] via-[#F5C200] to-[#D4A800] hover:from-[#1a1a1a] hover:to-[#F5C200] px-8 py-4 text-base font-bold text-white shadow-xl"
          >
            <span>Discuss Custom Software Project</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

      </div>
    </div>
  );
}
