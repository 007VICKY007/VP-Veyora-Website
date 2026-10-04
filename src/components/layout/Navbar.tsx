"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

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
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Pricing", href: "/pricing" },
    { name: "Blog", href: "/blog" },
  ];

  const isActive = (path: string) => pathname === path;
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
              <span className="text-base font-black tracking-tight text-white uppercase">
                VP Veyora
              </span>
              <span className="text-[8px] font-medium tracking-[0.25em] uppercase text-white/35">
                Private Limited · SaaS
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`text-xs font-semibold uppercase tracking-[0.15em] transition-all duration-200 relative ${
                  isActive(link.href)
                    ? "text-[#F5C200]"
                    : "text-white/60 hover:text-white"
                }`}
              >
                {link.name}
                {isActive(link.href) && (
                  <span className="absolute -bottom-1 left-0 right-0 h-px bg-[#F5C200]" />
                )}
              </Link>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-4">
            <Link
              href="/contact"
              className="relative overflow-hidden bg-[#F5C200] text-[#05050d] font-bold text-xs uppercase tracking-[0.2em] px-6 py-3 transition-all duration-300 hover:bg-white hover:shadow-lg hover:shadow-[#F5C200]/25 hover:-translate-y-0.5"
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden glass p-2.5 text-white hover:border-[#F5C200]/40 transition-all"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden glass-nav border-t border-white/05 px-6 pt-4 pb-6 space-y-2">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={`block py-3 text-xs font-bold uppercase tracking-[0.15em] border-l-2 pl-4 transition-colors ${
                isActive(link.href)
                  ? "text-[#F5C200] border-[#F5C200]"
                  : "text-white/55 border-transparent hover:text-white hover:border-white/30"
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setIsOpen(false)}
            className="block w-full text-center bg-[#F5C200] text-[#05050d] font-bold text-xs uppercase tracking-[0.2em] py-3.5 mt-4"
          >
            Contact Us
          </Link>
        </div>
      )}
    </header>
  );
};
