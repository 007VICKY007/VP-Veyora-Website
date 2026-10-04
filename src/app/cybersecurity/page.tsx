import React from "react";
import Link from "next/link";
import { GlassCard } from "@/components/shared/GlassCard";
import { ShieldCheck, ShieldAlert, Key, Eye, ArrowRight, Check } from "lucide-react";

export default function CybersecurityPage() {
  const categories = [
    { title: "Penetration Testing", desc: "Ethical hacking simulation identifying vulnerabilities in public web apps, local APIs, and servers.", icon: ShieldAlert },
    { title: "Vulnerability Auditing", desc: "Rigid scanning of systems against standard CVE registries, outdated packages, and configuration gaps.", icon: ShieldCheck },
    { title: "JWT & Access Management", desc: "Configure JWT authentication, Secure cookies, rate-limiting, and Role-Based Access Controls.", icon: Key },
    { title: "Threat Monitoring", desc: "Setup real-time audit logs, Cloud security notifications, and proactive DDoS protection configurations.", icon: Eye }
  ];

  return (
    <div className="bg-transparent text-white  min-h-screen py-20 px-4">
      <div className="max-w-6xl mx-auto space-y-16">
        
        {/* Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#F5C200] ">Security Posture</span>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">Cybersecurity & Auditing</h1>
          <p className="text-white/60  text-lg leading-relaxed">
            Protect your digital assets. We run ethical hacks and audit configurations to seal up vulnerabilities before bad actors exploit them.
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
                  <span>Aligned with OWASP Top 10 Standards</span>
                </div>
              </GlassCard>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link
            href="/contact"
            className="inline-flex items-center space-x-2 rounded-full bg-gradient-to-r from-[#1a1a1a] via-[#F5C200] to-[#D4A800] hover:from-[#1a1a1a] hover:to-[#F5C200] px-8 py-4 text-base font-bold text-white shadow-xl"
          >
            <span>Request System Security Audit</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

      </div>
    </div>
  );
}
