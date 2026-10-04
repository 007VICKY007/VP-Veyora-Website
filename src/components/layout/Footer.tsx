"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Phone, Mail, MapPin, Clock, ArrowRight } from "lucide-react";
import { LinkedInIcon, GitHubIcon, InstagramIcon, FacebookIcon, YouTubeIcon } from "../shared/SocialIcons";

export const Footer = () => {
  const pathname = usePathname();
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  if (pathname.startsWith("/admin")) return null;

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    setEmail("");
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#030309] border-t border-white/05">
      {/* Top gold line */}
      <div className="h-px bg-gradient-to-r from-transparent via-[#F5C200]/40 to-transparent" />

      {/* Ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-[#F5C200]/4 glow-blur pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Brand */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="flex flex-col leading-tight">
                <span className="text-base font-black uppercase tracking-tight text-white">VP Veyora</span>
                <span className="text-[8px] tracking-[0.2em] uppercase text-white/30">Private Limited · SaaS</span>
              </div>
            </Link>
            <p className="text-sm text-white/40 leading-relaxed">
              Engineering intelligent technology for growing businesses — AI, SaaS, cloud, and cybersecurity from Tamil Nadu, India.
            </p>
            <div className="flex gap-4">
              {[
                { href: "https://linkedin.com/company/vpveyora", Icon: LinkedInIcon },
                { href: "https://github.com/VPVeyora", Icon: GitHubIcon },
                { href: "https://instagram.com/vpveyora", Icon: InstagramIcon },
                { href: "https://facebook.com/vpveyora", Icon: FacebookIcon },
                { href: "https://youtube.com/@vpveyora", Icon: YouTubeIcon },
              ].map(({ href, Icon }) => (
                <a key={href} href={href} target="_blank" rel="noopener noreferrer"
                  className="text-white/25 hover:text-[#F5C200] transition-colors duration-300">
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <div className="flex items-center gap-3 mb-6">
              <div className="accent-bar" />
              <h3 className="text-[10px] font-bold uppercase tracking-[0.25em] text-white/50">Services</h3>
            </div>
            <ul className="space-y-2.5">
              {[
                ["AI & Machine Learning", "/services/ai-machine-learning"],
                ["Web Development", "/services/web-development"],
                ["Software Development", "/services/software-development"],
                ["AI Agents", "/services/ai-agents"],
                ["Automation", "/services/automation"],
                ["Data Analytics", "/services/data-analytics"],
                ["CRM Solutions", "/services/crm-solutions"],
                ["ERP Solutions", "/services/erp-solutions"],
                ["Custom Technology Services", "/services/custom-technology-services"],
              ].map(([label, href]) => (
                <li key={href}>
                  <Link href={href} className="text-xs sm:text-sm text-white/35 hover:text-[#F5C200] transition-colors flex items-center gap-2 group">
                    <span className="w-0 group-hover:w-2 h-px bg-[#F5C200] transition-all duration-300" />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <div className="flex items-center gap-3 mb-6">
              <div className="accent-bar" />
              <h3 className="text-[10px] font-bold uppercase tracking-[0.25em] text-white/50">Contact</h3>
            </div>
            <ul className="space-y-4 text-sm text-white/40">
              <li className="flex items-start gap-3">
                <MapPin className="h-4 w-4 text-[#F5C200] shrink-0 mt-0.5" />
                <span>Tamil Nadu, India</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-[#F5C200] shrink-0" />
                <a href="tel:+919488890697" className="hover:text-[#F5C200] transition-colors">+91 9488890697</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-[#F5C200] shrink-0" />
                <a href="mailto:vpveyora@gmail.com" className="hover:text-[#F5C200] transition-colors">vpveyora@gmail.com</a>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="h-4 w-4 text-[#F5C200] shrink-0" />
                <span>Mon – Sat · 9 AM – 7 PM IST</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <div className="flex items-center gap-3 mb-6">
              <div className="accent-bar" />
              <h3 className="text-[10px] font-bold uppercase tracking-[0.25em] text-white/50">Newsletter</h3>
            </div>
            <p className="text-sm text-white/35 leading-relaxed">
              Stay updated with the latest AI & digital transformation insights.
            </p>
            {subscribed ? (
              <p className="text-sm text-[#F5C200] font-semibold glow-gold-text">✓ Thank you for subscribing!</p>
            ) : (
              <form onSubmit={handleSubscribe} className="flex mt-4">
                <input
                  type="email"
                  placeholder="Your email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 glass border border-white/08 px-4 py-3 text-sm text-white placeholder-white/25 focus:border-[#F5C200]/40 focus:outline-none bg-transparent"
                />
                <button
                  type="submit"
                  className="bg-[#F5C200] px-4 text-[#05050d] hover:bg-white transition-colors"
                >
                  <ArrowRight className="h-4 w-4" />
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-white/05 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/20">
          <p>© {currentYear} VP Veyora Private Limited. All rights reserved. Founded by Vignesh Pandiya.</p>
          <div className="flex gap-6">
            <Link href="/privacy-policy" className="hover:text-[#F5C200] transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-[#F5C200] transition-colors">Terms & Conditions</Link>
            <Link href="/refund-policy" className="hover:text-[#F5C200] transition-colors">Refund Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
