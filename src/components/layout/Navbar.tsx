"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  // Navigation Links
  const navLinks = [
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Pricing", href: "/pricing" },
    { name: "Blog", href: "/blog" },
  ];

  const isActive = (path: string) => pathname === path;

  // Don't show public navbar on admin pages
  const isAdmin = pathname.startsWith("/admin");
  if (isAdmin) return null;

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200/10 bg-white/70 dark:bg-gray-950/70 backdrop-blur-md transition-colors duration-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo / Brand */}
          <Link href="/" className="flex items-center space-x-3">
            <img src="/logo.jpg" alt="VP Enterprises Logo" className="h-9 w-9 object-contain rounded-lg shadow-sm" />
            <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#00205b] to-[#00529b] dark:from-[#00529b] dark:to-[#0072ce]">
              VP Enterprises
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`text-sm font-medium transition-colors duration-200 hover:text-[#00529b] dark:hover:text-blue-400 ${
                  isActive(link.href)
                    ? "text-[#00529b] dark:text-blue-400 border-b-2 border-blue-600 dark:border-indigo-400 pb-1"
                    : "text-gray-600 dark:text-gray-300"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Action Area */}
          <div className="hidden md:flex items-center space-x-4">
            {/* CTA */}
            <Link
              href="/contact"
              className="rounded-full bg-gradient-to-r from-[#00205b] to-[#00529b] px-5 py-2 text-sm font-medium text-white shadow-lg shadow-blue-900/10 transition-all duration-200 hover:scale-105"
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center space-x-2">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="rounded-md p-2 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
              aria-label="Toggle mobile menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      {isOpen && (
        <div className="md:hidden border-b border-gray-200/10 bg-white dark:bg-gray-950 px-4 pt-2 pb-4 space-y-1 sm:px-6 transition-colors duration-300">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={`block rounded-md px-3 py-2 text-base font-medium ${
                isActive(link.href)
                  ? "bg-blue-50/70 dark:bg-blue-950/20 text-[#00529b] dark:text-blue-400"
                  : "text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-900"
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setIsOpen(false)}
            className="block w-full text-center rounded-md bg-gradient-to-r from-[#00205b] to-[#00529b] px-4 py-2.5 text-base font-medium text-white shadow-md"
          >
            Contact Us
          </Link>
        </div>
      )}
    </header>
  );
};
