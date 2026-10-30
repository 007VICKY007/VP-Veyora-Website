import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { GlassCard } from "@/components/shared/GlassCard";
import { ShieldCheck, AlertCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Refund & Cancellation Policy | VP VEYORA PRIVATE LIMITED",
  description: "Commercial refund, milestone settlement, and project cancellation policy for professional services by VP VEYORA PRIVATE LIMITED.",
  alternates: {
    canonical: "https://vpveyora.com/refund-policy",
  }
};

export default function RefundPolicyPage() {
  const lastUpdated = "October 2026";

  return (
    <div className="bg-base text-primary min-h-screen pt-32 pb-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-10">
        
        {/* Header */}
        <div className="space-y-2 border-b border-subtle pb-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-brand/20 bg-brand/5 px-3.5 py-1 text-xs font-semibold text-brand">
            <ShieldCheck className="h-3.5 w-3.5" />
            <span>Commercial Policy</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">Refund & Cancellation Policy</h1>
          <p className="text-xs text-muted">Last Updated: {lastUpdated} · Effective for https://vpveyora.com/</p>
        </div>

        {/* Content */}
        <GlassCard interactive={false} className="border-glass space-y-8 text-xs sm:text-sm text-secondary leading-relaxed p-6 sm:p-10">
          
          <div className="space-y-3">
            <h2 className="text-lg font-bold text-primary">1. Custom Engineering & Professional Services Scope</h2>
            <p>
              <strong>VP VEYORA PRIVATE LIMITED</strong> provides bespoke AI automation engineering, technical workflow architecture, system integrations, and professional technology consulting.
            </p>
            <p>
              Unlike pre-packaged off-the-shelf software subscriptions, our work involves dedicated engineering sprint hours, model tuning, custom API integration, and architectural design tailored to each client's specific requirements.
            </p>
          </div>

          <div className="space-y-3 border-t border-subtle pt-6">
            <h2 className="text-lg font-bold text-primary">2. Milestone-Based Project Delivery</h2>
            <p>
              Project engagements are structured under a signed Statement of Work (SOW) with defined milestone deliverables and acceptance criteria:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-secondary">
              <li><strong>Completed Milestones:</strong> Once a milestone is delivered, tested in the staging environment, and approved by the client or agency partner, the fees allocated to that completed milestone are non-refundable as they represent delivered technical hours.</li>
              <li><strong>Advance Deposits:</strong> Initial deposits for upcoming uninitiated milestone sprints may be eligible for partial or full refund if a cancellation request is submitted in writing prior to work commencement, less any accrued third-party setup or infrastructure costs.</li>
            </ul>
          </div>

          <div className="space-y-3 border-t border-subtle pt-6">
            <h2 className="text-lg font-bold text-primary">3. Project Cancellation Terms</h2>
            <p>
              Either party may terminate an active engagement by providing written notice as stipulated in the relevant Master Services Agreement (MSA) or SOW (typically 14 to 30 days notice).
            </p>
            <p>
              Upon receipt of written cancellation notice:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-secondary">
              <li>All active work ceases as of the agreed effective date.</li>
              <li>The client will be invoiced solely for documented hours logged or milestone deliverables completed up to the termination date.</li>
              <li>Any unearned advance balance will be returned within 14 business days via the original payment method.</li>
              <li>All completed code, configuration assets, and documentation completed to date are handed over to the client.</li>
            </ul>
          </div>

          <div className="space-y-3 border-t border-subtle pt-6">
            <h2 className="text-lg font-bold text-primary">4. Monthly SLA & Retainer Agreements</h2>
            <p>
              Ongoing maintenance, model-monitoring retainers, and SLA agreements may be cancelled by either party with 30 days written notice. Retainer fees for the currently active billing month are non-refundable, and support coverage continues through the end of that billing period.
            </p>
          </div>

          <div className="space-y-3 border-t border-subtle pt-6">
            <h2 className="text-lg font-bold text-primary">5. Quality Assurance & Dispute Resolution</h2>
            <p>
              We are committed to delivering production-grade reliability. Each project includes a standard 30-day post-deployment warranty period covering bug fixes for issues falling within the agreed SOW scope.
            </p>
            <p>
              If a deliverable does not satisfy the written specifications in the SOW, please contact our leadership team at <a href="mailto:vpveyora@gmail.com" className="text-brand hover:underline font-mono">vpveyora@gmail.com</a> to initiate a technical review and remediation sprint.
            </p>
          </div>

        </GlassCard>

      </div>
    </div>
  );
}
