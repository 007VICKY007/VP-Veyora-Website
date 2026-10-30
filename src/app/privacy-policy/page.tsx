import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { GlassCard } from "@/components/shared/GlassCard";
import { ShieldCheck, AlertCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy | VP VEYORA PRIVATE LIMITED",
  description: "Privacy policy, data collection disclosure, and security practices for VP VEYORA PRIVATE LIMITED.",
  alternates: {
    canonical: "https://vpveyora.com/privacy-policy",
  }
};

export default function PrivacyPolicyPage() {
  const lastUpdated = "October 2026";

  return (
    <div className="bg-base text-primary min-h-screen pt-32 pb-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-10">
        
        {/* Header */}
        <div className="space-y-2 border-b border-subtle pb-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-brand/20 bg-brand/5 px-3.5 py-1 text-xs font-semibold text-brand">
            <ShieldCheck className="h-3.5 w-3.5" />
            <span>Corporate Governance</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">Privacy Policy</h1>
          <p className="text-xs text-muted">Last Updated: {lastUpdated} · Effective for https://vpveyora.com/</p>
        </div>

        {/* Legal Advisory Notice */}
        <div className="p-4 rounded-xl border border-glass bg-card/60 flex items-start gap-3 text-xs text-secondary">
          <AlertCircle className="h-4 w-4 text-brand shrink-0 mt-0.5" />
          <p className="leading-relaxed">
            <strong>Notice:</strong> This privacy policy explains how VP VEYORA PRIVATE LIMITED handles information received through our corporate website and customer inquiries. For formal enterprise and white-label agency partnerships, specific data handling, confidentiality, and data processing addendums (DPAs) are executed under bilateral written contracts.
          </p>
        </div>

        {/* Content */}
        <GlassCard interactive={false} className="border-glass space-y-8 text-xs sm:text-sm text-secondary leading-relaxed p-6 sm:p-10">
          
          <div className="space-y-3">
            <h2 className="text-lg font-bold text-primary">1. Overview & Data Controller</h2>
            <p>
              This Privacy Policy applies to <strong>VP VEYORA PRIVATE LIMITED</strong> ("VP VEYORA", "we", "us", or "our"), an Indian technology company having its corporate presence in Tamil Nadu, India, operating the website <a href="https://vpveyora.com/" className="text-brand hover:underline font-mono">https://vpveyora.com/</a>. 
              We act as an AI automation delivery partner for international businesses and software agencies.
            </p>
            <p>
              If you have any questions regarding our data practices or wish to request data deletion, contact us at: <a href="mailto:vpveyora@gmail.com" className="text-brand hover:underline font-mono">vpveyora@gmail.com</a>.
            </p>
          </div>

          <div className="space-y-3 border-t border-subtle pt-6">
            <h2 className="text-lg font-bold text-primary">2. Information We Collect</h2>
            <p>
              We adhere to data minimization principles and collect only necessary professional business information voluntarily provided when you submit a project inquiry, partner application, or communicate with us:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-secondary">
              <li><strong>Contact Information:</strong> Full name, professional business email address, company name, and country/region.</li>
              <li><strong>Project Scoping Details:</strong> Stated business bottlenecks, required system integrations (e.g. CRM, ERP), preferred meeting timeframes, and inquiry category (client project, white-label partnership, joint delivery, referral).</li>
              <li><strong>Technical Metadata:</strong> Standard, non-identifying server logs (browser type, operating system, and timestamp) collected automatically for operational stability and spam defense.</li>
            </ul>
          </div>

          <div className="space-y-3 border-t border-subtle pt-6">
            <h2 className="text-lg font-bold text-primary">3. Purpose and Legal Grounds for Processing</h2>
            <p>We process collected information solely for legitimate business operations:</p>
            <ul className="list-disc pl-5 space-y-1.5 text-secondary">
              <li>To evaluate partnership inquiries, respond to project scoping requests, and coordinate technical discovery discussions.</li>
              <li>To prepare customized Statements of Work (SOWs) and commercial partnership agreements.</li>
              <li>To detect and mitigate malicious form submissions, automated bots, and abusive traffic.</li>
              <li>We do <strong>not</strong> sell, rent, or trade your contact information to third-party data brokers or marketing networks.</li>
            </ul>
          </div>

          <div className="space-y-3 border-t border-subtle pt-6">
            <h2 className="text-lg font-bold text-primary">4. Data Retention & Security Practices</h2>
            <p>
              Inquiry submissions are retained only as long as necessary to facilitate ongoing business communications or as required under applicable commercial record-keeping laws.
            </p>
            <p>
              We implement reasonable technical and organizational safeguards:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-secondary">
              <li>All web traffic is transmitted via encrypted HTTPS (TLS).</li>
              <li>Server-side secrets and email delivery credentials are stored in secure environment variables, never exposed in client bundles.</li>
              <li>Public contact endpoints enforce input sanitization and honeypot bot defense.</li>
            </ul>
          </div>

          <div className="space-y-3 border-t border-subtle pt-6">
            <h2 className="text-lg font-bold text-primary">5. Third-Party Service Providers</h2>
            <p>
              Our website may utilize trusted infrastructure vendors to operate effectively:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-secondary">
              <li><strong>Hosting & Edge Delivery:</strong> Cloudflare / Vercel for DNS, SSL, and web asset delivery.</li>
              <li><strong>Transactional Email:</strong> Resend API for delivering confirmation and notification emails.</li>
            </ul>
          </div>

          <div className="space-y-3 border-t border-subtle pt-6">
            <h2 className="text-lg font-bold text-primary">6. Your Rights & Data Inquiries</h2>
            <p>
              Depending on your jurisdiction (such as GDPR in the European Union / UK, or the Digital Personal Data Protection Act in India), you have the right to request access to the personal data we hold about you, request corrections, or request deletion of your inquiry records. To exercise these rights, please email <a href="mailto:vpveyora@gmail.com" className="text-brand hover:underline font-mono">vpveyora@gmail.com</a>.
            </p>
          </div>

        </GlassCard>

      </div>
    </div>
  );
}
