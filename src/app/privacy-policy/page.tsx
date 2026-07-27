import React from "react";
import Link from "next/link";
import { GlassCard } from "@/components/shared/GlassCard";

export default function PrivacyPolicyPage() {
  const lastUpdated = "July 25, 2026";

  return (
    <div className="bg-transparent text-slate-900 dark:text-white min-h-screen py-20 px-4">
      <div className="max-w-4xl mx-auto space-y-10">
        
        {/* Header */}
        <div className="space-y-2 border-b border-slate-200 dark:border-gray-900 pb-6">
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">Privacy Policy</h1>
          <p className="text-xs text-slate-500 dark:text-gray-500">Last Updated: {lastUpdated}</p>
        </div>

        {/* Content */}
        <GlassCard interactive={false} className="border-slate-200 dark:border-gray-900 bg-white/70 border border-slate-100 dark:bg-gray-900/10 dark:border-gray-950 space-y-6 text-sm sm:text-base text-slate-700 dark:text-gray-300 leading-relaxed p-8 sm:p-12">
          
          <p>
            Welcome to <strong>VP Enterpriceses</strong> (available at <a href="https://vpenterpriceses.com" className="text-blue-600 dark:text-blue-400 hover:underline">https://vpenterpriceses.com</a>). We are committed to protecting your personal information and your right to privacy. If you have any questions or concerns about this privacy notice, please contact us at <a href="mailto:contact@vpenterpriceses.com" className="text-blue-600 dark:text-blue-400 hover:underline">contact@vpenterpriceses.com</a>.
          </p>

          <div className="space-y-3">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">1. Information We Collect</h3>
            <p>
              We collect personal information that you voluntarily provide to us when you fill out our contact inquiry form, subscribe to our newsletter, or express interest in obtaining information about us or our services. This includes:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-slate-600 dark:text-gray-400">
              <li>First name, last name, and organizational affiliations.</li>
              <li>Contact details, including email addresses, phone/WhatsApp numbers, and country location.</li>
              <li>Project scope descriptions, budgets, and delivery timelines.</li>
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">2. How We Use Your Information</h3>
            <p>
              We use personal information collected via our website for:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-slate-600 dark:text-gray-400">
              <li>Scheduling project consultations and managing leads.</li>
              <li>Sending transaction confirmation emails regarding form submissions.</li>
              <li>Delivering newsletters and industry insights (only when explicitly subscribed).</li>
              <li>Fulfilling legal and security audits.</li>
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">3. Data Retention</h3>
            <p>
              We store your submitted contact lead details in a secure PostgreSQL database. We will only keep your personal information for as long as it is necessary for the purposes set out in this privacy notice, unless a longer retention period is required by Indian data privacy laws.
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">4. Security Measures</h3>
            <p>
              We implement appropriate technical and organizational security measures designed to protect the security of any personal information we process. All database layers are guarded with Prisma access parameters, rate-limited, and protected from SQL injection and cross-site scripting vulnerabilities.
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">5. Contact Us</h3>
            <p>
              If you have questions or comments about this policy, you may email us directly at <a href="mailto:contact@vpenterpriceses.com" className="text-blue-600 dark:text-blue-400 hover:underline">contact@vpenterpriceses.com</a> or write to:
            </p>
            <p className="text-slate-600 dark:text-gray-400 border-l-2 border-blue-500 pl-4 font-mono text-xs">
              VP Enterpriceses<br />
              Attn: Vignesh Pandiya (CEO)<br />
              Tamil Nadu, India
            </p>
          </div>

        </GlassCard>

      </div>
    </div>
  );
}
