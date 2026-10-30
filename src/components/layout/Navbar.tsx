"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowRight } from "lucide-react";
import { ThemeToggle } from "@/components/shared/ThemeToggle";

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
    { name: "Solutions", href: "/solutions/ai-automation" },
    { name: "Partner Program", href: "/partners" },
    { name: "Demos", href: "/demos" },
    { name: "Pricing", href: "/pricing" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  const isActive = (path: string) => pathname === path || (path !== "/" && pathname.startsWith(path));
  if (pathname.startsWith("/admin")) return null;

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled ? "glass-nav shadow-2xl shadow-black/50" : "bg-transparent border-b border-transparent"
    }`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="flex flex-col leading-tight">
              <span className="text-base font-black tracking-tight text-primary uppercase">
                VP Veyora
              </span>
              <span className="text-[8px] font-bold tracking-[0.25em] uppercase text-brand">
                AI Automation Partner
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`text-xs font-semibold uppercase tracking-[0.15em] transition-all duration-200 relative ${
                  isActive(link.href)
                    ? "text-brand"
                    : "text-secondary hover:text-primary"
                }`}
              >
                {link.name}
                {isActive(link.href) && (
                  <span className="absolute -bottom-1 left-0 right-0 h-px bg-brand" />
                )}
              </Link>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <ThemeToggle />
            <Link
              href="/partners"
              className="relative overflow-hidden bg-brand text-inverse font-bold text-xs uppercase tracking-[0.18em] px-5 py-2.5 rounded-lg transition-all duration-300 hover:bg-white hover:shadow-lg hover:shadow-brand/25 hover:-translate-y-0.5"
            >
              Discuss Partnership
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden glass p-2.5 text-primary hover:border-brand/40 transition-all rounded-lg"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden glass-nav border-t border-subtle px-6 pt-4 pb-6 space-y-3">
          <div className="flex items-center justify-between py-2 border-b border-subtle">
            <span className="text-xs font-semibold uppercase tracking-[0.15em] text-secondary">Display Mode</span>
            <ThemeToggle />
          </div>
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={`block py-2 text-xs font-semibold uppercase tracking-[0.15em] transition-colors ${
                isActive(link.href) ? "text-brand" : "text-secondary hover:text-primary"
              }`}
            >
              {link.name}
            </Link>
          ))}
          <div className="pt-2">
            <Link
              href="/partners"
              onClick={() => setIsOpen(false)}
              className="w-full inline-flex items-center justify-center gap-2 bg-brand text-inverse font-bold text-xs uppercase tracking-[0.18em] py-3 rounded-lg"
            >
              <span>Discuss Partnership</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};
