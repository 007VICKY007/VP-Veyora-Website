import React from "react";
import { GlassCard } from "@/components/shared/GlassCard";

export default function TermsPage() {
  const lastUpdated = "July 25, 2026";

  return (
    <div className="bg-transparent text-white  min-h-screen py-20 px-4">
      <div className="max-w-4xl mx-auto space-y-10">
        
        {/* Header */}
        <div className="space-y-2 border-b border-white/08  pb-6">
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">Terms & Conditions</h1>
          <p className="text-xs text-white/40 ">Last Updated: {lastUpdated}</p>
        </div>

        {/* Content */}
        <GlassCard interactive={false} className="border-white/08    space-y-6 text-sm sm:text-base text-white/80  leading-relaxed p-8 sm:p-12">
          
          <p>
            These Terms & Conditions govern your use of the <strong>VP Veyora Private Limited</strong> website located at <a href="https://vpenterpriceses.com" className="text-yellow-600  hover:underline">https://vpenterpriceses.com</a>. By accessing this website, we assume you accept these terms and conditions in full.
          </p>

          <div className="space-y-3">
            <h3 className="text-xl font-bold text-white ">1. Intellectual Property Rights</h3>
            <p>
              Unless otherwise stated, VP Veyora Private Limited and/or its licensors own the intellectual property rights for all material, code assets, and media published on this site. All intellectual property rights are reserved. You must not copy, sell, or rent content from our site.
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="text-xl font-bold text-white ">2. Consultations & Statement of Work (SOW)</h3>
            <p>
              Inquiries submitted through our forms do not constitute a binding contract. Binding software development or automation terms are initiated exclusively through separate, written, and signed Statements of Work outlining milestones, tech stacks, databases, pricing, and deadlines.
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="text-xl font-bold text-white ">3. User Submissions</h3>
            <p>
              When submitting inquiries, you warrant that all information provided (names, company details, budgets) is accurate and represents active business intentions. We reserve the right to delete mock spam leads or block malicious IPs targeting our endpoints.
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="text-xl font-bold text-white ">4. Limitation of Liability</h3>
            <p>
              VP Veyora Private Limited founder Vignesh Pandiya and our developer teams shall not be held liable for any indirect, consequential, or special liability arising out of or in any way connected with your use of this website or reliance on its static blog checklists.
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="text-xl font-bold text-white ">5. Governing Law</h3>
            <p>
              These terms will be governed by and interpreted in accordance with the laws of India, and you submit to the non-exclusive jurisdiction of the state and federal courts located in Tamil Nadu, India for the resolution of any disputes.
            </p>
          </div>

        </GlassCard>

      </div>
    </div>
  );
}
