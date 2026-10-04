import React from "react";
import { GlassCard } from "@/components/shared/GlassCard";

export default function RefundPolicyPage() {
  const lastUpdated = "July 25, 2026";

  return (
    <div className="bg-transparent text-white  min-h-screen py-20 px-4">
      <div className="max-w-4xl mx-auto space-y-10">
        
        {/* Header */}
        <div className="space-y-2 border-b border-white/08  pb-6">
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">Refund & Cancellation Policy</h1>
          <p className="text-xs text-white/40 ">Last Updated: {lastUpdated}</p>
        </div>

        {/* Content */}
        <GlassCard interactive={false} className="border-white/08    space-y-6 text-sm sm:text-base text-white/80  leading-relaxed p-8 sm:p-12">
          
          <p>
            Thank you for partnering with <strong>VP Veyora Private Limited</strong>. Since we are a professional business consulting and custom software development agency, we outline refund and cancellation terms clearly.
          </p>

          <div className="space-y-3">
            <h3 className="text-xl font-bold text-white ">1. Service Commitments</h3>
            <p>
              All software development, AI automation, cybersecurity auditing, and cloud solutions are custom-engineered. Once a Statement of Work (SOW) is signed and milestones are initiated, fees allocated to completed milestones are non-refundable as they represent direct engineering hours worked.
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="text-xl font-bold text-white ">2. Cancellation of Projects</h3>
            <p>
              Clients may request cancellation of active development sprints in writing. Upon cancellation, the client will be invoiced for any hours logged or milestones achieved up to the receipt date of the written notice, and any remaining balance of advance deposits will be returned within 14 business days.
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="text-xl font-bold text-white ">3. Technical Support SLA Cancellations</h3>
            <p>
              Support SLA retainers (e.g. monthly infrastructure monitoring or software updates) can be cancelled by giving 30 days notice in writing. Fees for the current billing cycle are non-refundable, and monitoring services will terminate at the end of that billing month.
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="text-xl font-bold text-white ">4. Inquiries & Disagreements</h3>
            <p>
              We aim for complete project success and customer satisfaction. If you believe a deliverable does not match the signed SOW specs, please contact CEO Vignesh Pandiya directly at <a href="mailto:vpveyora@gmail.com" className="text-yellow-600  hover:underline">vpveyora@gmail.com</a> so that we can review and resolve the discrepancy.
            </p>
          </div>

        </GlassCard>

      </div>
    </div>
  );
}
