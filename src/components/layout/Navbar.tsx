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
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? "bg-white/95 backdrop-blur-xl border-b border-gray-200/80 shadow-sm py-3" 
        : "bg-white/80 backdrop-blur-md py-4 border-b border-gray-100"
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">

          {/* Left: Capsule Pill Navigation (Inspired by Editorial Table of Contents) */}
          <nav className="hidden lg:flex items-center gap-1 p-1 rounded-full border border-gray-200 bg-gray-50/80">
            {navCapsules.map((capsule) => {
              const isActive = activeTab === capsule.id;
              return (
                <a
                  key={capsule.id}
                  href={capsule.href}
                  onClick={() => setActiveTab(capsule.id)}
                  className={`px-4 py-1.5 rounded-full text-[11px] font-mono uppercase tracking-[0.16em] transition-all duration-200 ${
                    isActive
                      ? "bg-[#0a0a0a] text-white font-bold shadow-sm"
                      : "text-gray-600 hover:text-black hover:bg-gray-200/60"
                  }`}
                >
                  {capsule.name}
                </a>
              );
            })}
          </nav>

          {/* Center: Brand Typography & Geometric Yellow Cube Mark */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="relative h-8 w-8 rounded-lg bg-[#ffe500] p-1 shadow-sm flex items-center justify-center font-black font-mono text-black text-xs">
              VP
            </div>
            <div className="flex flex-col leading-tight">
              <span className="text-sm sm:text-base font-black tracking-[0.16em] uppercase text-[#0a0a0a]">
                VP Veyora
              </span>
              <span className="text-[8px] font-mono font-bold tracking-[0.25em] uppercase text-gray-500">
                AI Delivery Partner
              </span>
            </div>
          </Link>

          {/* Right: Contact link & Editorial Black Pill with Yellow Arrow */}
          <div className="hidden sm:flex items-center gap-5">
            <a
              href="#contact"
              className="text-xs font-mono font-bold uppercase tracking-[0.16em] text-gray-600 hover:text-black transition-colors"
            >
              Contact
            </a>

            <a
              href="#partners"
              className="group flex items-center gap-2.5 pl-4 pr-1.5 py-1.5 rounded-full bg-[#0a0a0a] hover:bg-black transition-all shadow-sm"
            >
              <span className="text-[11px] font-mono font-bold uppercase tracking-[0.18em] text-white">
                Partner With Us
              </span>
              <div className="h-7 w-7 rounded-full bg-[#ffe500] text-black flex items-center justify-center transition-transform group-hover:rotate-45">
                <ArrowUpRight className="h-4 w-4" />
              </div>
            </a>
          </div>

          {/* Mobile Hamburger Toggle */}
          <div className="lg:hidden flex items-center gap-2">
            <a
              href="#partners"
              className="sm:hidden px-3 py-1.5 rounded-full bg-[#ffe500] text-black font-mono font-bold text-[10px] uppercase tracking-wider"
            >
              Partner
            </a>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg border border-gray-200 bg-gray-50 text-black focus:outline-none"
              aria-label="Toggle navigation"
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Slide-down Drawer */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200 px-6 py-6 space-y-4 shadow-lg">
          <div className="space-y-1">
            {navCapsules.map((capsule) => (
              <a
                key={capsule.id}
                href={capsule.href}
                onClick={() => {
                  setActiveTab(capsule.id);
                  setIsOpen(false);
                }}
                className="block py-2.5 text-xs font-mono font-bold uppercase tracking-[0.18em] text-gray-800 hover:text-black border-b border-gray-100 transition-colors"
              >
                {capsule.name}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="block py-2.5 text-xs font-mono font-bold uppercase tracking-[0.18em] text-gray-800 hover:text-black border-b border-gray-100 transition-colors"
            >
              Contact
            </a>
          </div>

          <div className="pt-2">
            <a
              href="#partners"
              onClick={() => setIsOpen(false)}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-[#ffe500] text-black font-mono font-bold text-xs uppercase tracking-[0.18em] shadow-sm"
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
