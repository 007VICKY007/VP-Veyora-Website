"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Mail, MapPin, Phone, ArrowUpRight, Globe2 } from "lucide-react";
import { LinkedInIcon, GitHubIcon, InstagramIcon } from "../shared/SocialIcons";

export const Footer = () => {
  const pathname = usePathname();
  if (pathname.startsWith("/admin")) return null;

  const currentYear = new Date().getFullYear();

  const timezones = [
    { city: "London", zone: "GMT" },
    { city: "New York", zone: "EST" },
    { city: "Dubai", zone: "GST" },
    { city: "Singapore", zone: "SGT" },
    { city: "Chennai (HQ)", zone: "IST" }
  ];

  return (
    <footer className="relative bg-[#060912] border-t border-white/10 text-white/60">
      {/* Top subtle hairline divider */}
      <div className="h-[1px] bg-gradient-to-r from-transparent via-amber-400/40 to-transparent" />

      {/* Global Timezones Telemetry Bar (Agency Editorial Feature) */}
      <div className="border-b border-white/5 py-4 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-4 text-[10px] font-mono uppercase tracking-[0.2em] text-white/40">
          <div className="flex items-center gap-2 text-amber-400">
            <Globe2 className="h-3.5 w-3.5" />
            <span>Active International Operating Windows</span>
          </div>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            {timezones.map((tz) => (
              <div key={tz.city} className="flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-white/70">{tz.city}:</span>
                <span className="text-white/40">{tz.zone}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12">

          {/* Brand Info */}
          <div className="lg:col-span-5 space-y-4">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="h-8 w-8 rounded-lg bg-gradient-to-tr from-amber-400 via-yellow-200 to-sky-400 p-[1.5px]">
                <div className="h-full w-full bg-[#0a0e1c] rounded-[6px] flex items-center justify-center font-black font-mono text-amber-400 text-xs">
                  VP
                </div>
              </div>
              <span className="text-base font-black tracking-[0.16em] text-white uppercase group-hover:text-amber-200 transition-colors">
                VP Veyora
              </span>
            </Link>

            <p className="text-xs text-white/50 leading-relaxed max-w-sm">
              VP VEYORA PRIVATE LIMITED is an AI engineering company delivering autonomous agents, workflow automations, and custom integrations for international software agencies and enterprises.
            </p>

            <div className="flex gap-2.5 pt-2">
              <a 
                href="https://linkedin.com/company/vpveyora" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-white/[0.03] border border-white/10 text-white/60 hover:text-amber-400 hover:border-amber-400/40 transition-colors"
                aria-label="LinkedIn"
              >
                <LinkedInIcon className="h-4 w-4" />
              </a>
              <a 
                href="https://github.com/007VICKY007/VP-Veyora-Website" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-white/[0.03] border border-white/10 text-white/60 hover:text-amber-400 hover:border-amber-400/40 transition-colors"
                aria-label="GitHub"
              >
                <GitHubIcon className="h-4 w-4" />
              </a>
              <a 
                href="https://instagram.com/vpveyora" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-white/[0.03] border border-white/10 text-white/60 hover:text-amber-400 hover:border-amber-400/40 transition-colors"
                aria-label="Instagram"
              >
                <InstagramIcon className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Quick Nav */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-white">Capabilities</h4>
            <ul className="space-y-2 text-xs font-mono">
              <li><a href="#services" className="hover:text-amber-400 transition-colors">01 / AI Agents</a></li>
              <li><a href="#services" className="hover:text-amber-400 transition-colors">02 / Workflow Automation</a></li>
              <li><a href="#services" className="hover:text-amber-400 transition-colors">03 / AI Integrations</a></li>
              <li><a href="#services" className="hover:text-amber-400 transition-colors">04 / Custom AI Solutions</a></li>
              <li><a href="#ai-in-action" className="hover:text-amber-400 transition-colors">Interactive Testbench</a></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-white">Direct Connect</h4>
            <ul className="space-y-2.5 text-xs font-mono">
              <li className="flex items-center gap-2.5">
                <Mail className="h-3.5 w-3.5 text-amber-400 shrink-0" />
                <a href="mailto:vpveyora@gmail.com" className="hover:text-amber-400 text-white/80">vpveyora@gmail.com</a>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="h-3.5 w-3.5 text-sky-400 shrink-0" />
                <a href="https://wa.me/919488890697" className="hover:text-sky-300 text-white/80">+91 9488890697 (WhatsApp)</a>
              </li>
              <li className="flex items-center gap-2.5">
                <MapPin className="h-3.5 w-3.5 text-amber-400 shrink-0" />
                <span className="text-white/60">Tamil Nadu, India · Global Delivery</span>
              </li>
            </ul>

            <div className="pt-2">
              <a
                href="#partners"
                className="inline-flex items-center gap-1.5 text-[11px] font-mono uppercase tracking-[0.16em] text-amber-400 hover:text-white transition-colors"
              >
                <span>Agency Partner Inquiries</span>
                <ArrowUpRight className="h-3 w-3" />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Legal Row */}
        <div className="pt-10 mt-12 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/40 font-mono">
          <p>
            &copy; {currentYear} VP VEYORA PRIVATE LIMITED. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link href="/refund-policy" className="hover:text-white transition-colors">Refund Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
