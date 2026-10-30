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

    if (formData.botField) {
      setLoading(false);
      setSuccess(true);
      return;
    }

    if (!formData.name.trim() || !formData.businessEmail.trim() || !formData.company.trim() || !formData.country.trim() || !formData.problemDescription.trim()) {
      setError("Please complete all required fields (Name, Business Email, Company, Country, and Business Need).");
      setLoading(false);
      return;
    }

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
    <div className="w-full rounded-3xl border border-gray-200 bg-white p-6 sm:p-10 shadow-editorial">
      {success ? (
        <div className="text-center py-12 space-y-4">
          <div className="inline-flex rounded-full bg-emerald-50 p-4 text-emerald-600 border border-emerald-200">
            <CheckCircle2 className="h-10 w-10" />
          </div>
          <h3 className="text-2xl font-black text-[#0a0a0a]">Inquiry Received Successfully</h3>
          <p className="text-gray-600 text-sm max-w-md mx-auto leading-relaxed">
            Thank you for contacting VP VEYORA. Our solutions engineering team will review your requirements and respond within 24 business hours to discuss scoping or schedule a discovery call.
          </p>
          <button
            onClick={() => setSuccess(false)}
            className="mt-4 inline-flex items-center space-x-2 rounded-xl bg-[#ffe500] px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-black hover:bg-black hover:text-white transition-colors"
          >
            Submit Another Inquiry
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-5" noValidate>
          
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
              <label htmlFor="name" className="text-xs font-bold text-gray-800 uppercase tracking-wider">
                Full Name <span className="text-amber-500">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full rounded-xl border border-gray-200 bg-gray-50/60 px-4 py-3 text-xs text-[#0a0a0a] focus:bg-white focus:border-black focus:outline-none transition-colors"
              />
            </div>

            {/* Business Email */}
            <div className="space-y-1.5">
              <label htmlFor="businessEmail" className="text-xs font-bold text-gray-800 uppercase tracking-wider">
                Business Email <span className="text-amber-500">*</span>
              </label>
              <input
                type="email"
                id="businessEmail"
                name="businessEmail"
                required
                value={formData.businessEmail}
                onChange={handleChange}
                className="w-full rounded-xl border border-gray-200 bg-gray-50/60 px-4 py-3 text-xs text-[#0a0a0a] focus:bg-white focus:border-black focus:outline-none transition-colors"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            {/* Company Name */}
            <div className="space-y-1.5">
              <label htmlFor="company" className="text-xs font-bold text-gray-800 uppercase tracking-wider">
                Company / Agency Name <span className="text-amber-500">*</span>
              </label>
              <input
                type="text"
                id="company"
                name="company"
                required
                value={formData.company}
                onChange={handleChange}
                className="w-full rounded-xl border border-gray-200 bg-gray-50/60 px-4 py-3 text-xs text-[#0a0a0a] focus:bg-white focus:border-black focus:outline-none transition-colors"
              />
            </div>

            {/* Country */}
            <div className="space-y-1.5">
              <label htmlFor="country" className="text-xs font-bold text-gray-800 uppercase tracking-wider">
                Country / Region <span className="text-amber-500">*</span>
              </label>
              <input
                type="text"
                id="country"
                name="country"
                required
                value={formData.country}
                onChange={handleChange}
                className="w-full rounded-xl border border-gray-200 bg-gray-50/60 px-4 py-3 text-xs text-[#0a0a0a] focus:bg-white focus:border-black focus:outline-none transition-colors"
              />
            </div>
          </div>

          {/* Inquiry Type */}
          <div className="space-y-1.5">
            <label htmlFor="inquiryType" className="text-xs font-bold text-gray-800 uppercase tracking-wider">
              Inquiry Type <span className="text-amber-500">*</span>
            </label>
            <select
              id="inquiryType"
              name="inquiryType"
              value={formData.inquiryType}
              onChange={handleChange}
              className="w-full rounded-xl border border-gray-200 bg-gray-50/60 px-4 py-3 text-xs text-[#0a0a0a] focus:bg-white focus:border-black focus:outline-none transition-colors"
            >
              {inquiryTypes.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </div>

          {/* Business Problem Description */}
          <div className="space-y-1.5">
            <label htmlFor="problemDescription" className="text-xs font-bold text-gray-800 uppercase tracking-wider">
              Brief Description of the Business Problem / Requirement <span className="text-amber-500">*</span>
            </label>
            <textarea
              id="problemDescription"
              name="problemDescription"
              required
              rows={4}
              value={formData.problemDescription}
              onChange={handleChange}
              className="w-full rounded-xl border border-gray-200 bg-gray-50/60 p-4 text-xs text-[#0a0a0a] focus:bg-white focus:border-black focus:outline-none transition-colors leading-relaxed"
            />
          </div>

          {/* Optional Preferred Meeting Time */}
          <div className="space-y-1.5">
            <label htmlFor="preferredMeetingTime" className="text-xs font-bold text-gray-800 uppercase tracking-wider">
              Preferred Meeting Time & Timezone (Optional)
            </label>
            <input
              type="text"
              id="preferredMeetingTime"
              name="preferredMeetingTime"
              value={formData.preferredMeetingTime}
              onChange={handleChange}
              className="w-full rounded-xl border border-gray-200 bg-gray-50/60 px-4 py-3 text-xs text-[#0a0a0a] focus:bg-white focus:border-black focus:outline-none transition-colors"
            />
          </div>

          {/* Error Message */}
          {error && (
            <div className="p-3.5 rounded-xl border border-rose-200 bg-rose-50 flex items-start gap-2.5 text-xs text-rose-800">
              <AlertCircle className="h-4 w-4 shrink-0 mt-0.5 text-rose-600" />
              <span>{error}</span>
            </div>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full inline-flex items-center justify-center gap-2 bg-[#ffe500] hover:bg-black hover:text-white text-black font-mono font-black text-xs uppercase tracking-[0.18em] py-4 rounded-xl transition-all disabled:opacity-50 shadow-sm"
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

          <p className="text-[11px] text-gray-500 text-center leading-relaxed">
            All inquiries are protected by mutual non-disclosure standards. We never sell or share contact details.
          </p>

        </form>
      )}
    </div>
  );
};
