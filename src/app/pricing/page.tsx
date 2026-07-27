import React from "react";
import Link from "next/link";
import { getPricingPlans } from "@/lib/dataLoaders";
import { GlassCard } from "@/components/shared/GlassCard";
import { Check, Info } from "lucide-react";

export default async function PricingPage() {
  const plans = await getPricingPlans();

  return (
    <div className="bg-transparent text-slate-900 dark:text-white min-h-screen py-20 px-4">
      <div className="max-w-6xl mx-auto space-y-16">
        
        {/* Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#00529b] dark:text-blue-400">Our Packages</span>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">Flexible Service Pricing</h1>
          <p className="text-slate-600 dark:text-gray-400 text-lg leading-relaxed">
            Select a package tailored to your scope. All custom integrations are quoted under detailed SOW milestones.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan) => {
            const features = Array.isArray(plan.features) ? plan.features : [];
            return (
              <GlassCard 
                key={plan.id} 
                className={`flex flex-col justify-between h-full relative ${
                  plan.featured 
                    ? "border-[#00529b] bg-blue-50/40 border border-blue-100/50 dark:bg-blue-50/40 border border-blue-100/50 shadow-2xl shadow-indigo-500/10" 
                    : "border-slate-200 dark:border-gray-900"
                }`}
              >
                {plan.featured && (
                  <span className="absolute top-0 right-1/2 translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-[#00205b] via-[#00529b] to-[#0072ce] px-4 py-1 text-xs font-semibold text-white tracking-wide uppercase">
                    Most Popular
                  </span>
                )}

                <div className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold text-white">{plan.name}</h3>
                    <p className="text-xs text-slate-500 dark:text-gray-500 mt-1.5 leading-relaxed">{plan.description}</p>
                  </div>

                  <div className="flex items-baseline text-white">
                    <span className="text-3xl sm:text-4xl font-extrabold tracking-tight">{plan.price}</span>
                    <span className="ml-1 text-sm font-semibold text-slate-500 dark:text-gray-500">
                      {plan.billingPeriod !== "one-time" && plan.billingPeriod !== "custom" ? `/${plan.billingPeriod}` : ""}
                      {plan.billingPeriod === "one-time" ? " flat fee" : ""}
                    </span>
                  </div>

                  <ul className="space-y-3.5 pt-6 border-t border-slate-200 dark:border-gray-900">
                    {features.map((feat, idx) => (
                      <li key={idx} className="flex items-start space-x-3 text-xs sm:text-sm text-slate-700 dark:text-gray-300">
                        <Check className="h-5 w-5 text-[#00529b] dark:text-blue-400 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-8">
                  <Link
                    href={plan.buttonUrl}
                    className={`${plan.featured ? "bg-gradient-to-r from-[#00205b] to-[#00529b] text-white font-semibold hover:from-[#00205b] hover:to-[#00529b] shadow-lg shadow-blue-900/15" : "bg-white hover:bg-blue-50/50 text-[#00529b] border border-blue-200 hover:border-blue-300 shadow-sm"} block w-full text-center rounded-xl py-3.5 text-sm font-bold transition-all`}
                  >
                    {plan.buttonText}
                  </Link>
                </div>
              </GlassCard>
            );
          })}
        </div>

        {/* Additional note */}
        <div className="max-w-4xl mx-auto flex items-start space-x-3 bg-white/70 border border-slate-100 dark:bg-gray-900/30 dark:border-gray-950 border border-slate-200 dark:border-gray-800 p-6 rounded-2xl text-xs sm:text-sm text-slate-600 dark:text-gray-400">
          <Info className="h-5 w-5 text-[#00529b] dark:text-blue-400 shrink-0 mt-0.5" />
          <div className="space-y-1">
            <h4 className="font-semibold text-white">Need custom integrations, SLA agreements, or dedicated developer retainers?</h4>
            <p className="leading-relaxed">
              For organizations requiring RAG systems, specialized API developments, security pentesting, or Kubernetes orchestrations, we perform full scoping meetings and provide detailed project bids. Contact CEO Vignesh Pandiya directly at <a href="mailto:contact@vpenterpriceses.com" className="text-[#00529b] dark:text-blue-400 hover:underline">contact@vpenterpriceses.com</a>.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}
