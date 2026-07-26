import React from "react";
import { ContactForm } from "@/components/sections/ContactForm";
import { GlassCard } from "@/components/shared/GlassCard";
import { Mail, Phone, Clock, MapPin } from "lucide-react";
import { LinkedInIcon, GitHubIcon, InstagramIcon } from "@/components/shared/SocialIcons";

export default function ContactPage() {
  return (
    <div className="bg-transparent text-slate-900 dark:text-white min-h-screen py-20 px-4">
      <div className="max-w-6xl mx-auto space-y-16">
        
        {/* Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#00529b] dark:text-blue-400">Get in Touch</span>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">Contact VP Enterpriceses</h1>
          <p className="text-slate-600 dark:text-gray-400 text-lg leading-relaxed">
            Ready to initiate a custom development sprint or automate your database workflows? Connect with us below.
          </p>
        </div>

        {/* Contact Content Split */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
          
          {/* Info Sidebar */}
          <div className="lg:col-span-2 space-y-6">
            
            {/* Direct Channels */}
            <GlassCard interactive={false} className="border-slate-200 dark:border-gray-900 space-y-4 text-xs sm:text-sm">
              <h4 className="font-bold text-sm uppercase tracking-wider text-[#00529b] dark:text-blue-400">Direct Inquiries</h4>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <Mail className="h-5 w-5 text-[#00529b] dark:text-blue-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs text-slate-500 dark:text-gray-500 block">General Business</span>
                    <a href="mailto:contact@vpenterpriceses.in" className="text-slate-900 dark:text-white hover:underline font-semibold">contact@vpenterpriceses.in</a>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <Mail className="h-5 w-5 text-[#00529b] dark:text-blue-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs text-slate-500 dark:text-gray-500 block">Project Sales</span>
                    <a href="mailto:sales@vpenterpriceses.in" className="text-slate-900 dark:text-white hover:underline font-semibold">sales@vpenterpriceses.in</a>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <Mail className="h-5 w-5 text-[#00529b] dark:text-blue-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs text-slate-500 dark:text-gray-500 block">Customer Support</span>
                    <a href="mailto:support@vpenterpriceses.in" className="text-slate-900 dark:text-white hover:underline font-semibold">support@vpenterpriceses.in</a>
                  </div>
                </li>
              </ul>
            </GlassCard>

            {/* Calling Details */}
            <GlassCard interactive={false} className="border-slate-200 dark:border-gray-900 space-y-4 text-xs sm:text-sm">
              <h4 className="font-bold text-sm uppercase tracking-wider text-slate-500 dark:text-slate-400">Phone & Support Hours</h4>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <Phone className="h-5 w-5 text-[#00529b] dark:text-blue-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs text-slate-500 dark:text-gray-500 block">Phone / WhatsApp</span>
                    <a href="tel:+919488890697" className="text-slate-900 dark:text-white hover:underline font-semibold">+91 9488890697</a>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <Clock className="h-5 w-5 text-[#00529b] dark:text-blue-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs text-slate-500 dark:text-gray-500 block">Working Hours</span>
                    <span className="text-slate-900 dark:text-white font-semibold">Mon - Sat (9:00 AM - 7:00 PM IST)</span>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 text-[#00529b] dark:text-blue-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs text-slate-500 dark:text-gray-500 block">Location</span>
                    <span className="text-slate-900 dark:text-white font-semibold">Tamil Nadu, India</span>
                  </div>
                </li>
              </ul>
            </GlassCard>

            {/* Social wall */}
            <div className="flex justify-center lg:justify-start space-x-4 pt-2">
              <a href="https://linkedin.com/company/vpenterpriceses" target="_blank" rel="noopener noreferrer" className="p-3 bg-white hover:bg-blue-50/50 rounded-full border border-slate-200 hover:text-[#00529b] text-slate-600 transition-colors">
                <LinkedInIcon className="h-5 w-5" />
              </a>
              <a href="https://github.com/VPEnterpriceses" target="_blank" rel="noopener noreferrer" className="p-3 bg-white hover:bg-blue-50/50 rounded-full border border-slate-200 hover:text-[#00529b] text-slate-600 transition-colors">
                <GitHubIcon className="h-5 w-5" />
              </a>
              <a href="https://instagram.com/vpenterpriceses" target="_blank" rel="noopener noreferrer" className="p-3 bg-white hover:bg-blue-50/50 rounded-full border border-slate-200 hover:text-[#00529b] text-slate-600 transition-colors">
                <InstagramIcon className="h-5 w-5" />
              </a>
            </div>

          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            <ContactForm />
          </div>

        </div>

      </div>
    </div>
  );
}
