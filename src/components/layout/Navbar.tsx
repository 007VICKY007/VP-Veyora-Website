"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowUpRight } from "lucide-react";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeTab, setActiveTab] = useState("overview");
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navCapsules = [
    { id: "overview", name: "Overview", href: "/#hero" },
    { id: "services", name: "Capabilities", href: "/#services" },
    { id: "ai-in-action", name: "AI in Action", href: "/#ai-in-action" },
    { id: "partners", name: "Partners", href: "/#partners" },
  ];

  if (pathname.startsWith("/admin")) return null;

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled 
        ? "bg-[#04040c]/85 backdrop-blur-2xl border-b border-white/10 shadow-2xl py-3.5" 
        : "bg-transparent py-5 border-b border-white/5"
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">

          {/* Left: Capsule Pill Navigation (Inspired by ZROBIM reference) */}
          <nav className="hidden lg:flex items-center gap-1.5 p-1 rounded-full border border-white/10 bg-white/[0.03] backdrop-blur-md">
            {navCapsules.map((capsule) => {
              const isActive = activeTab === capsule.id;
              return (
                <a
                  key={capsule.id}
                  href={capsule.href}
                  onClick={() => setActiveTab(capsule.id)}
                  className={`px-4 py-1.5 rounded-full text-[11px] font-mono uppercase tracking-[0.18em] transition-all duration-300 ${
                    isActive
                      ? "bg-white text-black font-bold shadow-md shadow-white/20"
                      : "text-white/70 hover:text-white hover:bg-white/10"
                  }`}
                >
                  {capsule.name}
                </a>
              );
            })}
          </nav>

          {/* Center: Brand Typography & Geometric Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative h-9 w-9 rounded-xl bg-gradient-to-tr from-cyan-400 via-indigo-500 to-pink-500 p-[1.5px] shadow-lg shadow-cyan-500/20 group-hover:shadow-cyan-400/40 transition-shadow">
              <div className="h-full w-full bg-[#050614] rounded-[10px] flex items-center justify-center font-black font-mono text-cyan-400 text-sm">
                VP
              </div>
            </div>
            <div className="flex flex-col leading-tight">
              <span className="text-sm sm:text-base font-black tracking-[0.16em] uppercase text-white group-hover:text-cyan-300 transition-colors">
                VP Veyora
              </span>
              <span className="text-[8px] font-mono font-bold tracking-[0.3em] uppercase text-cyan-400/90">
                AI Delivery Partner
              </span>
            </div>
          </Link>

          {/* Right: Contact link & Ghost Circular Arrow Pill Button */}
          <div className="hidden sm:flex items-center gap-4">
            <a
              href="#contact"
              className="text-xs font-mono font-bold uppercase tracking-[0.16em] text-white/70 hover:text-white transition-colors"
            >
              Contact
            </a>

            {/* Circular Arrow Pill CTA (Inspired by EOSAI / ZROBIM) */}
            <a
              href="#partners"
              className="group flex items-center gap-2 pl-4 pr-1.5 py-1.5 rounded-full border border-white/20 hover:border-cyan-400/60 bg-white/[0.04] hover:bg-white/[0.08] transition-all backdrop-blur-md"
            >
              <span className="text-[11px] font-mono font-bold uppercase tracking-[0.18em] text-white group-hover:text-cyan-300 transition-colors">
                Partner With Us
              </span>
              <div className="h-7 w-7 rounded-full bg-cyan-400 group-hover:bg-white text-black flex items-center justify-center transition-colors shadow-sm">
                <ArrowUpRight className="h-3.5 w-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </a>
          </div>

          {/* Mobile Hamburger Toggle */}
          <div className="lg:hidden flex items-center gap-2">
            <a
              href="#partners"
              className="sm:hidden px-3 py-1.5 rounded-full bg-cyan-400 text-black font-mono font-bold text-[10px] uppercase tracking-wider"
            >
              Partner
            </a>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-full border border-white/10 bg-white/5 text-white hover:text-cyan-300 focus:outline-none"
              aria-label="Toggle navigation"
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Slide-down Drawer */}
      {isOpen && (
        <div className="lg:hidden bg-[#04040c]/95 backdrop-blur-2xl border-t border-white/10 px-6 py-6 space-y-4">
          <div className="space-y-1">
            {navCapsules.map((capsule) => (
              <a
                key={capsule.id}
                href={capsule.href}
                onClick={() => {
                  setActiveTab(capsule.id);
                  setIsOpen(false);
                }}
                className="block py-2.5 text-xs font-mono font-bold uppercase tracking-[0.18em] text-white/80 hover:text-cyan-300 border-b border-white/5 transition-colors"
              >
                {capsule.name}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="block py-2.5 text-xs font-mono font-bold uppercase tracking-[0.18em] text-white/80 hover:text-cyan-300 border-b border-white/5 transition-colors"
            >
              Contact
            </a>
          </div>

          <div className="pt-2">
            <a
              href="#partners"
              onClick={() => setIsOpen(false)}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-cyan-400 via-teal-300 to-cyan-400 text-black font-mono font-bold text-xs uppercase tracking-[0.18em] shadow-lg shadow-cyan-500/20"
            >
              <span>Discuss a Partnership</span>
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
