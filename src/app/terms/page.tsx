import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { GlassCard } from "@/components/shared/GlassCard";
import { ShieldCheck, AlertCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Terms & Conditions | VP VEYORA PRIVATE LIMITED",
  description: "Terms and conditions governing the use of the VP VEYORA website and professional consulting inquiries.",
  alternates: {
    canonical: "https://vpveyora.com/terms",
  }
};

export default function TermsPage() {
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
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">Terms & Conditions</h1>
          <p className="text-xs text-muted">Last Updated: {lastUpdated} · Effective for https://vpveyora.com/</p>
        </div>

        {/* Content */}
        <GlassCard interactive={false} className="border-glass space-y-8 text-xs sm:text-sm text-secondary leading-relaxed p-6 sm:p-10">
          
          <div className="space-y-3">
            <h2 className="text-lg font-bold text-primary">1. Agreement to Terms</h2>
            <p>
              These Terms & Conditions govern your access to and use of the website operated by <strong>VP VEYORA PRIVATE LIMITED</strong> at <a href="https://vpveyora.com/" className="text-brand hover:underline font-mono">https://vpveyora.com/</a>. By accessing or using our website, you agree to comply with and be bound by these terms.
            </p>
          </div>

          <div className="space-y-3 border-t border-subtle pt-6">
            <h2 className="text-lg font-bold text-primary">2. Informational Purpose & Form Inquiries</h2>
            <p>
              The content provided on this website—including architectural breakdowns, pricing hypotheses, and interactive workflow demonstrations—is for informational and illustrative purposes only.
            </p>
            <p>
              Submitting an inquiry through our contact or partner forms does <strong>not</strong> constitute a binding commercial contract. Binding software development, white-label engineering, or retainer obligations are established solely upon the mutual execution of a formal, written Statement of Work (SOW) or Master Services Agreement (MSA).
            </p>
          </div>

          <div className="space-y-3 border-t border-subtle pt-6">
            <h2 className="text-lg font-bold text-primary">3. Intellectual Property Rights</h2>
            <p>
              Unless otherwise explicitly indicated, VP VEYORA PRIVATE LIMITED owns all intellectual property rights in the website design, code, graphics, and written content. 
            </p>
            <p>
              For client engagements: Upon completion and settlement of milestones specified in a written Statement of Work (SOW), intellectual property rights to custom code, workflow schemas, and bespoke integrations are assigned to the client or agency partner as defined contractually.
            </p>
          </div>

          <div className="space-y-3 border-t border-subtle pt-6">
            <h2 className="text-lg font-bold text-primary">4. Demonstrations & Synthetic Data Notice</h2>
            <p>
              Interactive simulators and demonstration case studies featured on this website utilize synthetic, mock, or publicly anonymized datasets. They are designed to demonstrate workflow logic and human-in-the-loop validation mechanics, and do not represent actual customer confidential data.
            </p>
          </div>

          <div className="space-y-3 border-t border-subtle pt-6">
            <h2 className="text-lg font-bold text-primary">5. Limitation of Liability</h2>
            <p>
              To the maximum extent permitted by applicable law, VP VEYORA PRIVATE LIMITED and its officers, directors, and employees shall not be liable for any indirect, incidental, consequential, or punitive damages arising from the use of or inability to use this website.
            </p>
          </div>

          <div className="space-y-3 border-t border-subtle pt-6">
            <h2 className="text-lg font-bold text-primary">6. Governing Law</h2>
            <p>
              These Terms shall be governed by and construed in accordance with the laws of India, subject to the jurisdiction of the competent courts in Tamil Nadu, India. Specific commercial contracts executed with international clients may stipulate alternative dispute resolution mechanisms or governing jurisdictions as agreed in writing.
            </p>
          </div>

          <div className="space-y-3 border-t border-subtle pt-6">
            <h2 className="text-lg font-bold text-primary">7. Contact Information</h2>
            <p>
              For inquiries regarding these Terms & Conditions, please contact: <a href="mailto:vpveyora@gmail.com" className="text-brand hover:underline font-mono">vpveyora@gmail.com</a>.
            </p>
          </div>

        </GlassCard>

      </div>
    </div>
  );
}
