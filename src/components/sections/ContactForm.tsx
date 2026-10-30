"use client";

import React, { useState } from "react";
import { Send, CheckCircle2, AlertCircle, RefreshCw } from "lucide-react";

interface ContactFormProps {
  initialInquiryType?: string;
  initialService?: string;
}

export const ContactForm: React.FC<ContactFormProps> = ({ 
  initialInquiryType = "Client Project",
  initialService = ""
}) => {
  const [formData, setFormData] = useState({
    name: "",
    businessEmail: "",
    company: "",
    country: "",
    inquiryType: initialInquiryType,
    serviceScope: initialService,
    problemDescription: "",
    preferredMeetingTime: "",
    // Spam protection honeypot (should remain empty for real humans)
    botField: ""
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const inquiryTypes = [
    "Client Project",
    "White-label Partnership",
    "Joint Delivery",
    "Referral Partnership",
    "Other"
  ];

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    // Spam honeypot check
    if (formData.botField) {
      // Silently reject bots without error
      setLoading(false);
      setSuccess(true);
      return;
    }

    // Client-side validation
    if (!formData.name.trim() || !formData.businessEmail.trim() || !formData.company.trim() || !formData.country.trim() || !formData.problemDescription.trim()) {
      setError("Please complete all required fields (Name, Business Email, Company, Country, and Business Need).");
      setLoading(false);
      return;
    }

    // Basic email format check
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.businessEmail)) {
      setError("Please provide a valid business email address.");
      setLoading(false);
      return;
    }

    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.businessEmail,
          companyName: formData.company,
          country: formData.country,
          inquiryType: formData.inquiryType,
          service: formData.serviceScope || formData.inquiryType,
          message: formData.problemDescription,
          preferredMeetingTime: formData.preferredMeetingTime
        }),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setSuccess(true);
        setFormData({
          name: "",
          businessEmail: "",
          company: "",
          country: "",
          inquiryType: initialInquiryType,
          serviceScope: "",
          problemDescription: "",
          preferredMeetingTime: "",
          botField: ""
        });
      } else {
        setError(result.error || "Unable to send your inquiry. Please try again or email us directly at vpveyora@gmail.com.");
      }
    } catch (err) {
      console.error("Submission error:", err);
      setError("Network connection issue. Please retry or contact us directly at vpveyora@gmail.com.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full rounded-2xl border border-glass bg-card/90 p-6 sm:p-10 backdrop-blur-xl shadow-2xl transition-all duration-300">
      {success ? (
        <div className="text-center py-12 space-y-5">
          <div className="inline-flex rounded-full bg-emerald-500/10 p-4 text-emerald-400 border border-emerald-500/20">
            <CheckCircle2 className="h-12 w-12" />
          </div>
          <h3 className="text-2xl font-bold text-primary">Inquiry Received Successfully</h3>
          <p className="text-secondary text-sm max-w-md mx-auto leading-relaxed">
            Thank you for reaching out to VP VEYORA. Our solutions engineering team will review your requirements and respond within 24 business hours to discuss scoping or schedule a discovery call.
          </p>
          <button
            onClick={() => setSuccess(false)}
            className="mt-4 inline-flex items-center space-x-2 rounded-lg border border-glass bg-base/50 px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-primary hover:text-brand transition-colors"
          >
            Submit Another Inquiry
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-5" noValidate>
          
          {/* Honeypot field (hidden from screen readers & users) */}
          <div className="hidden" aria-hidden="true">
            <label htmlFor="botField">Leave this field blank</label>
            <input
              type="text"
              id="botField"
              name="botField"
              tabIndex={-1}
              autoComplete="off"
              value={formData.botField}
              onChange={handleChange}
            />
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            {/* Full Name */}
            <div className="space-y-1.5">
              <label htmlFor="name" className="text-xs font-semibold text-secondary">
                Full Name <span className="text-brand">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full rounded-lg border border-glass bg-base px-3.5 py-2.5 text-xs text-primary focus:border-brand focus:outline-none transition-colors"
              />
            </div>

            {/* Business Email */}
            <div className="space-y-1.5">
              <label htmlFor="businessEmail" className="text-xs font-semibold text-secondary">
                Business Email <span className="text-brand">*</span>
              </label>
              <input
                type="email"
                id="businessEmail"
                name="businessEmail"
                required
                value={formData.businessEmail}
                onChange={handleChange}
                className="w-full rounded-lg border border-glass bg-base px-3.5 py-2.5 text-xs text-primary focus:border-brand focus:outline-none transition-colors"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            {/* Company Name */}
            <div className="space-y-1.5">
              <label htmlFor="company" className="text-xs font-semibold text-secondary">
                Company / Agency Name <span className="text-brand">*</span>
              </label>
              <input
                type="text"
                id="company"
                name="company"
                required
                value={formData.company}
                onChange={handleChange}
                className="w-full rounded-lg border border-glass bg-base px-3.5 py-2.5 text-xs text-primary focus:border-brand focus:outline-none transition-colors"
              />
            </div>

            {/* Country */}
            <div className="space-y-1.5">
              <label htmlFor="country" className="text-xs font-semibold text-secondary">
                Country / Region <span className="text-brand">*</span>
              </label>
              <input
                type="text"
                id="country"
                name="country"
                required
                value={formData.country}
                onChange={handleChange}
                className="w-full rounded-lg border border-glass bg-base px-3.5 py-2.5 text-xs text-primary focus:border-brand focus:outline-none transition-colors"
              />
            </div>
          </div>

          {/* Inquiry Type */}
          <div className="space-y-1.5">
            <label htmlFor="inquiryType" className="text-xs font-semibold text-secondary">
              Inquiry Type <span className="text-brand">*</span>
            </label>
            <select
              id="inquiryType"
              name="inquiryType"
              value={formData.inquiryType}
              onChange={handleChange}
              className="w-full rounded-lg border border-glass bg-base px-3.5 py-2.5 text-xs text-primary focus:border-brand focus:outline-none transition-colors"
            >
              {inquiryTypes.map((type) => (
                <option key={type} value={type} className="bg-[#0c0c1a] text-primary">
                  {type}
                </option>
              ))}
            </select>
          </div>

          {/* Business Problem Description */}
          <div className="space-y-1.5">
            <label htmlFor="problemDescription" className="text-xs font-semibold text-secondary">
              Brief Description of the Business Problem / Requirement <span className="text-brand">*</span>
            </label>
            <textarea
              id="problemDescription"
              name="problemDescription"
              required
              rows={4}
              value={formData.problemDescription}
              onChange={handleChange}
              className="w-full rounded-lg border border-glass bg-base p-3.5 text-xs text-primary focus:border-brand focus:outline-none transition-colors leading-relaxed"
            />
          </div>

          {/* Optional Preferred Meeting Time */}
          <div className="space-y-1.5">
            <label htmlFor="preferredMeetingTime" className="text-xs font-semibold text-secondary">
              Preferred Meeting Time & Timezone (Optional)
            </label>
            <input
              type="text"
              id="preferredMeetingTime"
              name="preferredMeetingTime"
              value={formData.preferredMeetingTime}
              onChange={handleChange}
              className="w-full rounded-lg border border-glass bg-base px-3.5 py-2.5 text-xs text-primary focus:border-brand focus:outline-none transition-colors"
            />
          </div>

          {/* Error Message */}
          {error && (
            <div className="p-3.5 rounded-lg border border-rose-500/30 bg-rose-500/10 flex items-start gap-2.5 text-xs text-rose-300">
              <AlertCircle className="h-4 w-4 shrink-0 mt-0.5 text-rose-400" />
              <span>{error}</span>
            </div>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full inline-flex items-center justify-center gap-2 bg-brand text-inverse font-bold text-xs uppercase tracking-[0.18em] py-4 rounded-lg hover:bg-white transition-all duration-300 disabled:opacity-50 shadow-lg shadow-brand/15"
          >
            {loading ? (
              <>
                <RefreshCw className="h-4 w-4 animate-spin" />
                <span>Transmitting Inquiry...</span>
              </>
            ) : (
              <>
                <Send className="h-4 w-4" />
                <span>Submit Inquiry</span>
              </>
            )}
          </button>

          <p className="text-[11px] text-muted text-center leading-relaxed">
            All inquiries are protected by mutual non-disclosure standards. We never sell or share contact details.
          </p>

        </form>
      )}
    </div>
  );
};
