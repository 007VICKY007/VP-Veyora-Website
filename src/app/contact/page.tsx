import React from "react";
import type { Metadata } from "next";
import { ContactForm } from "@/components/sections/ContactForm";
import { GlassCard } from "@/components/shared/GlassCard";
import { Mail, Phone, Clock, MapPin, Handshake, ShieldCheck } from "lucide-react";
import { LinkedInIcon, GitHubIcon, InstagramIcon } from "@/components/shared/SocialIcons";

export const metadata: Metadata = {
  title: "Contact VP VEYORA | Request an Automation Audit or Partnership",
  description: "Get in touch with VP VEYORA PRIVATE LIMITED. Request an AI automation audit, discuss white-label delivery, or scope a custom workflow project.",
  alternates: {
    canonical: "https://vpveyora.com/contact",
  }
};

export default function ContactPage() {
  return (
    <div className="bg-base text-primary min-h-screen pt-32 pb-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto space-y-16">
        
        {/* Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full border border-brand/20 bg-brand/5 px-4 py-1.5 text-xs font-semibold text-brand">
            <Mail className="h-3.5 w-3.5" />
            <span>Direct Lead & Partner Desk</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
            Connect With Our Engineering Team
          </h1>
          <p className="text-secondary text-base sm:text-lg leading-relaxed">
            Ready to automate manual workflows or discuss an agency delivery partnership? Share your scope below and we will respond within 24 business hours.
          </p>
        </div>

        {/* Contact Content Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Info Sidebar */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Direct Channels */}
            <GlassCard interactive={false} className="border-glass space-y-4 text-xs sm:text-sm p-6 sm:p-7">
              <h4 className="font-bold text-xs uppercase tracking-wider text-brand font-mono">
                Direct Communication Channels
              </h4>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3 text-secondary">
                  <Mail className="h-4 w-4 text-brand shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[10px] text-muted block uppercase">Client & Agency Inquiries</span>
                    <a href="mailto:vpveyora@gmail.com" className="text-primary hover:text-brand font-mono font-semibold">
                      vpveyora@gmail.com
                    </a>
                  </div>
                </li>
                <li className="flex items-start space-x-3 text-secondary">
                  <Phone className="h-4 w-4 text-brand shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[10px] text-muted block uppercase">Direct WhatsApp Desk</span>
                    <a href="https://wa.me/919488890697" className="text-primary hover:text-brand font-mono font-semibold">
                      +91 9488890697
                    </a>
                  </div>
                </li>
                <li className="flex items-start space-x-3 text-secondary">
                  <MapPin className="h-4 w-4 text-brand shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[10px] text-muted block uppercase">Engineering Hub</span>
                    <span className="text-primary font-semibold">Tamil Nadu, India</span>
                  </div>
                </li>
                <li className="flex items-start space-x-3 text-secondary">
                  <Clock className="h-4 w-4 text-brand shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[10px] text-muted block uppercase">Working Hours</span>
                    <span className="text-primary font-semibold">Mon – Sat (9:00 AM – 7:00 PM IST)</span>
                  </div>
                </li>
              </ul>
            </GlassCard>

            {/* International Collaboration Assurance */}
            <GlassCard interactive={false} className="border-brand/20 bg-brand/5 space-y-3 p-6 text-xs text-secondary">
              <div className="flex items-center gap-2 text-primary font-bold">
                <ShieldCheck className="h-4 w-4 text-brand" />
                <span>NDA & Confidentiality Protected</span>
              </div>
              <p className="leading-relaxed">
                We sign mutual non-disclosure agreements prior to reviewing client workflows or API credentials. All customer IP belongs 100% to you or your client.
              </p>
            </GlassCard>

            {/* Social channels */}
            <div className="flex items-center gap-3 pt-2">
              <a 
                href="https://linkedin.com/company/vpveyora" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-3 bg-card hover:bg-card-hover rounded-xl border border-glass hover:border-brand/40 text-secondary hover:text-brand transition-colors"
                aria-label="LinkedIn"
              >
                <LinkedInIcon className="h-4 w-4" />
              </a>
              <a 
                href="https://github.com/007VICKY007/VP-Veyora-Website" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-3 bg-card hover:bg-card-hover rounded-xl border border-glass hover:border-brand/40 text-secondary hover:text-brand transition-colors"
                aria-label="GitHub"
              >
                <GitHubIcon className="h-4 w-4" />
              </a>
              <a 
                href="https://instagram.com/vpveyora" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-3 bg-card hover:bg-card-hover rounded-xl border border-glass hover:border-brand/40 text-secondary hover:text-brand transition-colors"
                aria-label="Instagram"
              >
                <InstagramIcon className="h-4 w-4" />
              </a>
            </div>

          </div>

          {/* Form */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>

        </div>

      </div>
    </div>
  );
}
