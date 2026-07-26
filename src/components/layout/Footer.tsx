"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  ArrowRight,
  Brain
} from "lucide-react";
import {
  LinkedInIcon,
  GitHubIcon,
  InstagramIcon,
  FacebookIcon,
  YouTubeIcon
} from "../shared/SocialIcons";

export const Footer = () => {
  const pathname = usePathname();
  const [email, setEmail] = useState("");
  const [subscribed, setSubsubscribed] = useState(false);

  // Don't show footer on admin routes
  const isAdmin = pathname.startsWith("/admin");
  if (isAdmin) return null;

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubsubscribed(true);
    setEmail("");
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-200/10 bg-gray-50 dark:bg-gray-950/40 py-16 text-gray-600 dark:text-gray-300 transition-colors duration-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-4 md:grid-cols-2">
          
          {/* Brand and Mission Column */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-3">
              <img src="/logo.jpg" alt="VP Enterpriceses Logo" className="h-9 w-9 object-contain rounded-lg shadow-sm" />
              <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#00205b] to-[#00529b] dark:from-[#00529b] dark:to-[#0072ce]">
                VP Enterpriceses
              </span>
            </Link>
            <p className="text-sm leading-relaxed text-gray-500 dark:text-gray-400">
              Engineering AI Solutions for Tomorrow. Helping businesses automate, innovate, and grow using Artificial Intelligence and modern software technologies.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="https://linkedin.com/company/vpenterprises" target="_blank" rel="noopener noreferrer" className="hover:text-[#00529b] dark:hover:text-blue-400">
                <LinkedInIcon className="h-5 w-5" />
              </a>
              <a href="https://github.com/VPEnterprises" target="_blank" rel="noopener noreferrer" className="hover:text-[#00529b] dark:hover:text-blue-400">
                <GitHubIcon className="h-5 w-5" />
              </a>
              <a href="https://instagram.com/vpenterprises" target="_blank" rel="noopener noreferrer" className="hover:text-[#00529b] dark:hover:text-blue-400">
                <InstagramIcon className="h-5 w-5" />
              </a>
              <a href="https://facebook.com/vpenterprises" target="_blank" rel="noopener noreferrer" className="hover:text-[#00529b] dark:hover:text-blue-400">
                <FacebookIcon className="h-5 w-5" />
              </a>
              <a href="https://youtube.com/@vpenterprises" target="_blank" rel="noopener noreferrer" className="hover:text-[#00529b] dark:hover:text-blue-400">
                <YouTubeIcon className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-950 dark:text-white">Services</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/services/artificial-intelligence" className="hover:text-[#00529b] dark:hover:text-blue-400">Artificial Intelligence</Link></li>
              <li><Link href="/services/ai-automation" className="hover:text-[#00529b] dark:hover:text-blue-400">AI Automation</Link></li>
              <li><Link href="/services/software-development" className="hover:text-[#00529b] dark:hover:text-blue-400">Software Development</Link></li>
              <li><Link href="/services/cybersecurity" className="hover:text-[#00529b] dark:hover:text-blue-400">Cybersecurity</Link></li>
              <li><Link href="/services/cloud-solutions" className="hover:text-[#00529b] dark:hover:text-blue-400">Cloud Solutions</Link></li>
            </ul>
          </div>

          {/* Contact Details Column */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-950 dark:text-white">Contact Info</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center space-x-2.5">
                <MapPin className="h-4 w-4 text-[#00529b] dark:text-blue-400 shrink-0" />
                <span>Tamil Nadu, India</span>
              </li>
              <li className="flex items-center space-x-2.5">
                <Phone className="h-4 w-4 text-[#00529b] dark:text-blue-400 shrink-0" />
                <a href="tel:+919488890697" className="hover:text-[#00529b] dark:hover:text-blue-400">+91 9488890697</a>
              </li>
              <li className="flex items-start space-x-2.5">
                <Mail className="h-4 w-4 text-[#00529b] dark:text-blue-400 shrink-0 mt-0.5" />
                <div className="flex flex-col space-y-0.5">
                  <a href="mailto:contact@vpenterpriceses.in" className="hover:text-[#00529b] dark:hover:text-blue-400">contact@vpenterpriceses.in</a>
                  <a href="mailto:sales@vpenterpriceses.in" className="text-xs text-gray-400 hover:text-[#00529b] dark:hover:text-blue-400">sales@vpenterpriceses.in</a>
                </div>
              </li>
              <li className="flex items-center space-x-2.5">
                <Clock className="h-4 w-4 text-[#00529b] dark:text-blue-400 shrink-0" />
                <span>Mon - Sat: 9 AM - 7 PM IST</span>
              </li>
            </ul>
          </div>

          {/* Newsletter Column */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-950 dark:text-white">Newsletter</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
              Subscribe to get the latest insights on Artificial Intelligence & digital transformation.
            </p>
            {subscribed ? (
              <p className="text-sm text-green-600 dark:text-green-400 font-medium">Thank you for subscribing!</p>
            ) : (
              <form onSubmit={handleSubscribe} className="flex">
                <input
                  type="email"
                  placeholder="Enter email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full rounded-l-md border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 focus:border-[#00529b] focus:outline-none dark:border-gray-800 dark:bg-gray-900 dark:text-white"
                />
                <button
                  type="submit"
                  className="rounded-r-md bg-[#00529b] px-4 text-white hover:bg-blue-500 transition-colors"
                >
                  <ArrowRight className="h-4 w-4" />
                </button>
              </form>
            )}
          </div>
        </div>

        <div className="mt-12 border-t border-gray-200/10 pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-gray-400">
          <p>© {currentYear} VP Enterpriceses. All rights reserved. Founded by Vignesh Pandiya.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link href="/privacy-policy" className="hover:underline">Privacy Policy</Link>
            <Link href="/terms" className="hover:underline">Terms & Conditions</Link>
            <Link href="/refund-policy" className="hover:underline">Refund Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
