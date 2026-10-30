"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Mail, MapPin, Clock, ShieldCheck } from "lucide-react";
import { LinkedInIcon, GitHubIcon, InstagramIcon, FacebookIcon, YouTubeIcon } from "../shared/SocialIcons";

export const Footer = () => {
  const pathname = usePathname();
  if (pathname.startsWith("/admin")) return null;

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#030309] border-t border-white/05 text-secondary">
      {/* Top gold line */}
      <div className="h-px bg-gradient-to-r from-transparent via-[#F5C200]/40 to-transparent" />

      {/* Ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-[#F5C200]/4 glow-blur pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">

          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-6">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="flex flex-col leading-tight">
                <span className="text-lg font-black uppercase tracking-tight text-white">VP Veyora</span>
                <span className="text-[9px] font-bold tracking-[0.2em] uppercase text-brand">Private Limited</span>
              </div>
            </Link>
            
            <p className="text-xs sm:text-sm text-white/50 leading-relaxed max-w-sm">
              Your AI Automation Delivery Partner. We engineer supervised AI workflows, autonomous agents, document extraction pipelines, and custom system integrations for software agencies and growing businesses worldwide.
            </p>

            <div className="p-3.5 rounded-xl border border-glass bg-white/[0.02] text-xs text-white/40 space-y-1">
              <span className="font-semibold text-white/70 block uppercase text-[10px] tracking-wider">International Delivery Footprint:</span>
              <p>United Kingdom · United States · UAE · Singapore · Australia · Europe</p>
            </div>

            <div className="flex gap-4 pt-2">
              {[
                { href: "https://linkedin.com/company/vpveyora", Icon: LinkedInIcon },
                { href: "https://github.com/007VICKY007/VP-Veyora-Website", Icon: GitHubIcon },
                { href: "https://instagram.com/vpveyora", Icon: InstagramIcon },
                { href: "https://facebook.com/vpveyora", Icon: FacebookIcon },
                { href: "https://youtube.com/@vpveyora", Icon: YouTubeIcon },
              ].map(({ href, Icon }) => (
                <a 
                  key={href} 
                  href={href} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-white/30 hover:text-brand transition-colors duration-300"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Solutions Column */}
          <div className="space-y-4">
            <h3 className="text-[11px] font-bold uppercase tracking-[0.2em] text-white/70">Solutions</h3>
            <ul className="space-y-2.5 text-xs">
              {[
                ["AI Workflow Automation", "/solutions/ai-automation#lead-triage"],
                ["AI Agents & Assistants", "/solutions/ai-automation#support-assistants"],
                ["Document & Invoice AI", "/solutions/ai-automation#document-extraction"],
                ["CRM & ERP Sync", "/solutions/ai-automation#crm-updates"],
                ["Internal RAG Search", "/solutions/ai-automation#rag-search"],
                ["Automated Reporting", "/solutions/ai-automation#reporting-consolidation"],
                ["API & System Bridges", "/solutions/ai-automation#api-integrations"],
              ].map(([label, href]) => (
                <li key={href}>
                  <Link href={href} className="text-white/40 hover:text-brand transition-colors block">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Partnership & Quick Links */}
          <div className="space-y-4">
            <h3 className="text-[11px] font-bold uppercase tracking-[0.2em] text-white/70">Partnership & Demos</h3>
            <ul className="space-y-2.5 text-xs">
              {[
                ["Partner Program", "/partners"],
                ["White-label Delivery", "/partners#white-label"],
                ["Joint Delivery", "/partners#joint-delivery"],
                ["Referral Program", "/partners#referral"],
                ["Interactive Demos", "/demos"],
                ["Indicative Pricing", "/pricing"],
                ["About VP VEYORA", "/about"],
                ["Engineering Blog", "/blog"],
              ].map(([label, href]) => (
                <li key={href}>
                  <Link href={href} className="text-white/40 hover:text-brand transition-colors block">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Operations & Legal Column */}
          <div className="space-y-4">
            <h3 className="text-[11px] font-bold uppercase tracking-[0.2em] text-white/70">Contact & Legal</h3>
            <ul className="space-y-3 text-xs text-white/40">
              <li className="flex items-start gap-2.5">
                <MapPin className="h-3.5 w-3.5 text-brand shrink-0 mt-0.5" />
                <span>Tamil Nadu, India</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Mail className="h-3.5 w-3.5 text-brand shrink-0 mt-0.5" />
                <a href="mailto:vpveyora@gmail.com" className="text-brand hover:underline font-mono">
                  vpveyora@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Clock className="h-3.5 w-3.5 text-brand shrink-0 mt-0.5" />
                <span>Mon – Sat (9:00 AM – 7:00 PM IST)</span>
              </li>
            </ul>

            <div className="pt-3 border-t border-white/05 space-y-1.5 text-[11px]">
              <Link href="/privacy-policy" className="block text-white/30 hover:text-brand transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="block text-white/30 hover:text-brand transition-colors">
                Terms of Service
              </Link>
              <Link href="/refund-policy" className="block text-white/30 hover:text-brand transition-colors">
                Refund & Cancellation Policy
              </Link>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-12 mt-12 border-t border-white/05 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/30">
          <p>
            &copy; {currentYear} VP VEYORA PRIVATE LIMITED. All rights reserved. Registered technology enterprise in Tamil Nadu, India.
          </p>
          <p className="flex items-center gap-1.5">
            <ShieldCheck className="h-3.5 w-3.5 text-brand" />
            <span>Contractual NDA & Enterprise Data Confidentiality Guaranteed</span>
          </p>
        </div>
      </div>
    </footer>
  );
};
