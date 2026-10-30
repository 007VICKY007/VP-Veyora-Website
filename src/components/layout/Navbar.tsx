"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowRight, Sparkles } from "lucide-react";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { name: "Services", href: "/#services" },
    { name: "AI in Action", href: "/#ai-in-action" },
    { name: "Partnerships", href: "/#partners" },
    { name: "Contact", href: "/#contact" },
  ];

  if (pathname.startsWith("/admin")) return null;

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled ? "glass-nav shadow-2xl shadow-cyan-950/40" : "bg-transparent border-b border-transparent"
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">

          {/* Logo with futuristic glowing mark */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="h-9 w-9 rounded-xl bg-gradient-to-tr from-cyan-400 via-purple-500 to-pink-500 p-0.5 shadow-lg shadow-cyan-500/20 group-hover:shadow-cyan-400/40 transition-shadow">
              <div className="h-full w-full bg-[#050512] rounded-[10px] flex items-center justify-center font-black font-mono text-cyan-400 text-sm">
                VP
              </div>
            </div>
            <div className="flex flex-col leading-tight">
              <span className="text-base font-black tracking-tight text-white uppercase group-hover:text-cyan-300 transition-colors">
                VP Veyora
              </span>
              <span className="text-[8px] font-mono font-bold tracking-[0.25em] uppercase text-cyan-400">
                AI Technology
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs font-mono font-bold uppercase tracking-[0.16em] text-white/70 hover:text-cyan-300 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Partner With Us CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="#partners"
              className="relative px-5 py-2.5 rounded-xl font-black font-mono text-xs uppercase tracking-[0.18em] text-black bg-gradient-to-r from-cyan-400 via-teal-300 to-cyan-400 hover:from-white hover:to-white transition-all shadow-md shadow-cyan-500/25 hover:-translate-y-0.5"
            >
              Partner With Us
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden glass p-2.5 text-white hover:border-cyan-400/40 transition-all rounded-xl"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden glass-nav border-t border-white/10 px-6 pt-4 pb-6 space-y-3">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block py-2 text-xs font-mono font-bold uppercase tracking-[0.15em] text-white/80 hover:text-cyan-300 transition-colors"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-2">
            <a
              href="#partners"
              onClick={() => setIsOpen(false)}
              className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-400 to-purple-500 text-black font-black font-mono text-xs uppercase tracking-[0.18em] py-3 rounded-xl shadow-md"
            >
              <span>Partner With Us</span>
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
