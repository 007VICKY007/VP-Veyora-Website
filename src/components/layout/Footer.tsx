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
    <footer className="relative bg-white border-t border-gray-200 text-gray-600">
      
      {/* Global Timezones Telemetry Bar (Editorial Brochure Header Feature) */}
      <div className="border-b border-gray-100 py-3.5 px-4 sm:px-6 lg:px-8 bg-gray-50/50">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-4 text-[10px] font-mono uppercase tracking-[0.18em] text-gray-500">
          <div className="flex items-center gap-2 text-black font-bold">
            <Globe2 className="h-3.5 w-3.5" />
            <span>Active International Operating Windows</span>
          </div>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            {timezones.map((tz) => (
              <div key={tz.city} className="flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                <span className="text-black font-semibold">{tz.city}:</span>
                <span className="text-gray-500">{tz.zone}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12">

          {/* Brand Info (Styled like the Brochure Cover block) */}
          <div className="lg:col-span-5 space-y-4">
            <Link href="/" className="flex items-center gap-2.5 group">
              <div className="h-8 w-8 rounded-lg bg-[#ffe500] p-1 flex items-center justify-center font-black font-mono text-black text-xs shadow-xs">
                VP
              </div>
              <span className="text-base font-black tracking-[0.16em] text-black uppercase">
                VP Veyora
              </span>
            </Link>

            <p className="text-xs text-gray-600 leading-relaxed max-w-sm">
              VP VEYORA PRIVATE LIMITED is an AI engineering company delivering autonomous agents, workflow automations, and custom integrations for international software agencies and enterprises.
            </p>

            <div className="flex gap-2.5 pt-2">
              <a 
                href="https://linkedin.com/company/vpveyora" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-gray-100 hover:bg-[#ffe500] text-gray-700 hover:text-black transition-colors"
                aria-label="LinkedIn"
              >
                <LinkedInIcon className="h-4 w-4" />
              </a>
              <a 
                href="https://github.com/007VICKY007/VP-Veyora-Website" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-gray-100 hover:bg-[#ffe500] text-gray-700 hover:text-black transition-colors"
                aria-label="GitHub"
              >
                <GitHubIcon className="h-4 w-4" />
              </a>
              <a 
                href="https://instagram.com/vpveyora" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-gray-100 hover:bg-[#ffe500] text-gray-700 hover:text-black transition-colors"
                aria-label="Instagram"
              >
                <InstagramIcon className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Capabilities Nav */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-black">Capabilities</h4>
            <ul className="space-y-2 text-xs font-mono">
              <li><a href="#services" className="hover:text-black hover:underline transition-colors">01 / AI Agents</a></li>
              <li><a href="#services" className="hover:text-black hover:underline transition-colors">02 / Workflow Automation</a></li>
              <li><a href="#services" className="hover:text-black hover:underline transition-colors">03 / AI Integrations</a></li>
              <li><a href="#services" className="hover:text-black hover:underline transition-colors">04 / Custom AI Solutions</a></li>
              <li><a href="#ai-in-action" className="hover:text-black hover:underline transition-colors">Interactive Testbench</a></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-black">Direct Connect</h4>
            <ul className="space-y-2.5 text-xs font-mono">
              <li className="flex items-center gap-2.5">
                <Mail className="h-3.5 w-3.5 text-black shrink-0" />
                <a href="mailto:vpveyora@gmail.com" className="hover:text-black text-gray-800">vpveyora@gmail.com</a>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="h-3.5 w-3.5 text-black shrink-0" />
                <a href="https://wa.me/919488890697" className="hover:text-black text-gray-800">+91 9488890697 (WhatsApp)</a>
              </li>
              <li className="flex items-center gap-2.5">
                <MapPin className="h-3.5 w-3.5 text-black shrink-0" />
                <span className="text-gray-700">Tamil Nadu, India · Global Delivery</span>
              </li>
            </ul>

            <div className="pt-2">
              <a
                href="#partners"
                className="inline-flex items-center gap-1.5 text-[11px] font-mono font-bold uppercase tracking-[0.16em] text-black hover:text-amber-600 transition-colors"
              >
                <span>Agency Partner Program</span>
                <ArrowUpRight className="h-3 w-3" />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Black Bar (Matching the signature black footer in the brochure cover) */}
        <div className="pt-10 mt-12 border-t border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500 font-mono">
          <p>
            &copy; {currentYear} VP VEYORA PRIVATE LIMITED. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/privacy-policy" className="hover:text-black transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-black transition-colors">Terms of Service</Link>
            <Link href="/refund-policy" className="hover:text-black transition-colors">Refund Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
