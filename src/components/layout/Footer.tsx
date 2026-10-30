"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Mail, MapPin, Phone, ShieldCheck, ArrowUpRight } from "lucide-react";
import { LinkedInIcon, GitHubIcon, InstagramIcon } from "../shared/SocialIcons";

export const Footer = () => {
  const pathname = usePathname();
  if (pathname.startsWith("/admin")) return null;

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#020208] border-t border-white/10 text-white/60">
      {/* Top neon line */}
      <div className="h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">

          {/* Brand Info */}
          <div className="lg:col-span-5 space-y-4">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="h-8 w-8 rounded-lg bg-gradient-to-tr from-cyan-400 via-purple-500 to-pink-500 p-0.5">
                <div className="h-full w-full bg-[#050512] rounded-[6px] flex items-center justify-center font-black font-mono text-cyan-400 text-xs">
                  VP
                </div>
              </div>
              <span className="text-base font-black tracking-tight text-white uppercase">
                VP Veyora
              </span>
            </Link>

            <p className="text-xs text-white/50 leading-relaxed max-w-sm">
              VP VEYORA PRIVATE LIMITED is an AI technology company building autonomous agents, workflow automations, and custom integrations for international software agencies and enterprises.
            </p>

            <div className="flex gap-3 pt-1">
              <a 
                href="https://linkedin.com/company/vpveyora" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-white/5 border border-white/10 text-white/60 hover:text-cyan-400 hover:border-cyan-400/40 transition-colors"
                aria-label="LinkedIn"
              >
                <LinkedInIcon className="h-4 w-4" />
              </a>
              <a 
                href="https://github.com/007VICKY007/VP-Veyora-Website" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-white/5 border border-white/10 text-white/60 hover:text-cyan-400 hover:border-cyan-400/40 transition-colors"
                aria-label="GitHub"
              >
                <GitHubIcon className="h-4 w-4" />
              </a>
              <a 
                href="https://instagram.com/vpveyora" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-white/5 border border-white/10 text-white/60 hover:text-cyan-400 hover:border-cyan-400/40 transition-colors"
                aria-label="Instagram"
              >
                <InstagramIcon className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Quick Nav */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-white">Navigation</h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#services" className="hover:text-cyan-400 transition-colors">Core Services</a></li>
              <li><a href="#ai-in-action" className="hover:text-cyan-400 transition-colors">AI in Action Demo</a></li>
              <li><a href="#partners" className="hover:text-cyan-400 transition-colors">Agency Partnership</a></li>
              <li><a href="#contact" className="hover:text-cyan-400 transition-colors">Contact Engineering</a></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-white">Direct Connect</h4>
            <ul className="space-y-2.5 text-xs">
              <li className="flex items-center gap-2">
                <Mail className="h-3.5 w-3.5 text-cyan-400" />
                <a href="mailto:vpveyora@gmail.com" className="hover:text-cyan-400 font-mono">vpveyora@gmail.com</a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-3.5 w-3.5 text-purple-400" />
                <a href="https://wa.me/919488890697" className="hover:text-purple-400 font-mono">+91 9488890697 (WhatsApp)</a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="h-3.5 w-3.5 text-pink-400" />
                <span>Tamil Nadu, India · Serving Globally</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Legal Row */}
        <div className="pt-10 mt-10 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/40">
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
