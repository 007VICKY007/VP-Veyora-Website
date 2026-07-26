"use client";

import React, { useState } from "react";
import { Send, CheckCircle2, AlertCircle } from "lucide-react";

export const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    companyName: "",
    email: "",
    phone: "",
    country: "",
    service: "Artificial Intelligence",
    budget: "₹50,000 - ₹1,50,000",
    timeline: "1-3 Months",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const servicesList = [
    "Artificial Intelligence",
    "AI Automation",
    "Software Development",
    "Website Development",
    "Mobile Applications",
    "Cybersecurity",
    "Cloud Solutions",
    "Data Engineering",
    "IoT Solutions",
    "Blockchain",
    "Digital Marketing",
  ];

  const budgetsList = [
    "< ₹50,000",
    "₹50,000 - ₹1,50,000",
    "₹1,50,000 - ₹5,00,000",
    "₹5,00,000 - ₹10,00,000",
    "Custom / Enterprise Quote (> ₹10,00,000)",
  ];

  const timelinesList = [
    "< 1 Month (Fast Track)",
    "1 - 3 Months",
    "3 - 6 Months",
    "6+ Months / Retainer",
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setSuccess(true);
        setFormData({
          name: "",
          companyName: "",
          email: "",
          phone: "",
          country: "",
          service: "Artificial Intelligence",
          budget: "₹50,000 - ₹1,50,000",
          timeline: "1-3 Months",
          message: "",
        });
      } else {
        setError(result.error || "Something went wrong. Please try again.");
      }
    } catch (err) {
      console.error(err);
      setError("Network error. Please verify your internet connection and try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full rounded-3xl border border-gray-200/10 bg-white/70 border border-slate-100 dark:bg-white dark:bg-gray-900/30 dark:border-gray-950 p-6 sm:p-10 backdrop-blur-md shadow-xl transition-all duration-300">
      {success ? (
        <div className="text-center py-12 space-y-4">
          <div className="inline-flex rounded-full bg-green-500/15 p-4 text-green-400">
            <CheckCircle2 className="h-16 w-16" />
          </div>
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Inquiry Sent Successfully!</h3>
          <p className="text-slate-600 dark:text-gray-400 max-w-md mx-auto leading-relaxed">
            Thank you for reaching out to VP Enterprises. Founder Vignesh Pandiya or one of our system specialists will review your submission and contact you within 24 hours.
          </p>
          <button
            onClick={() => setSuccess(false)}
            className="mt-6 inline-flex items-center space-x-2 rounded-full border border-slate-200 dark:border-gray-700 bg-white dark:bg-gray-900/60 px-6 py-2.5 text-sm font-semibold text-slate-700 dark:text-gray-300 hover:text-slate-900 dark:text-white"
          >
            Send Another Message
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {/* Full Name */}
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-semibold text-slate-700 dark:text-gray-300">Full Name *</label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="w-full rounded-xl border border-slate-200 dark:border-gray-800 bg-slate-50 dark:bg-white dark:bg-gray-950/80 px-4 py-3 text-sm text-slate-900 dark:text-white placeholder-gray-600 focus:border-[#00529b] focus:outline-none"
              />
            </div>

            {/* Company Name */}
            <div className="space-y-2">
              <label htmlFor="companyName" className="text-sm font-semibold text-slate-700 dark:text-gray-300">Company Name</label>
              <input
                type="text"
                id="companyName"
                name="companyName"
                value={formData.companyName}
                onChange={handleChange}
                placeholder="Your Company Name"
                className="w-full rounded-xl border border-slate-200 dark:border-gray-800 bg-slate-50 dark:bg-white dark:bg-gray-950/80 px-4 py-3 text-sm text-slate-900 dark:text-white placeholder-gray-600 focus:border-[#00529b] focus:outline-none"
              />
            </div>

            {/* Email Address */}
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-semibold text-slate-700 dark:text-gray-300">Email Address *</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email Address"
                className="w-full rounded-xl border border-slate-200 dark:border-gray-800 bg-slate-50 dark:bg-white dark:bg-gray-950/80 px-4 py-3 text-sm text-slate-900 dark:text-white placeholder-gray-600 focus:border-[#00529b] focus:outline-none"
              />
            </div>

            {/* Phone Number */}
            <div className="space-y-2">
              <label htmlFor="phone" className="text-sm font-semibold text-slate-700 dark:text-gray-300">Phone / WhatsApp</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Your Phone / WhatsApp Number"
                className="w-full rounded-xl border border-slate-200 dark:border-gray-800 bg-slate-50 dark:bg-white dark:bg-gray-950/80 px-4 py-3 text-sm text-slate-900 dark:text-white placeholder-gray-600 focus:border-[#00529b] focus:outline-none"
              />
            </div>

            {/* Country */}
            <div className="space-y-2">
              <label htmlFor="country" className="text-sm font-semibold text-slate-700 dark:text-gray-300">Country</label>
              <input
                type="text"
                id="country"
                name="country"
                value={formData.country}
                onChange={handleChange}
                placeholder="Your Country"
                className="w-full rounded-xl border border-slate-200 dark:border-gray-800 bg-slate-50 dark:bg-white dark:bg-gray-950/80 px-4 py-3 text-sm text-slate-900 dark:text-white placeholder-gray-600 focus:border-[#00529b] focus:outline-none"
              />
            </div>

            {/* Selected Service */}
            <div className="space-y-2">
              <label htmlFor="service" className="text-sm font-semibold text-slate-700 dark:text-gray-300">Service Needed *</label>
              <select
                id="service"
                name="service"
                required
                value={formData.service}
                onChange={handleChange}
                className="w-full rounded-xl border border-slate-200 dark:border-gray-800 bg-slate-50 dark:bg-white dark:bg-gray-950/80 px-4 py-3 text-sm text-slate-900 dark:text-white focus:border-[#00529b] focus:outline-none [&>option]:bg-slate-50 dark:bg-gray-950"
              >
                {servicesList.map((serviceName) => (
                  <option key={serviceName} value={serviceName}>{serviceName}</option>
                ))}
              </select>
            </div>

            {/* Budget Range */}
            <div className="space-y-2">
              <label htmlFor="budget" className="text-sm font-semibold text-slate-700 dark:text-gray-300">Estimated Budget *</label>
              <select
                id="budget"
                name="budget"
                required
                value={formData.budget}
                onChange={handleChange}
                className="w-full rounded-xl border border-slate-200 dark:border-gray-800 bg-slate-50 dark:bg-white dark:bg-gray-950/80 px-4 py-3 text-sm text-slate-900 dark:text-white focus:border-[#00529b] focus:outline-none [&>option]:bg-slate-50 dark:bg-gray-950"
              >
                {budgetsList.map((budgetValue) => (
                  <option key={budgetValue} value={budgetValue}>{budgetValue}</option>
                ))}
              </select>
            </div>

            {/* Project Timeline */}
            <div className="space-y-2">
              <label htmlFor="timeline" className="text-sm font-semibold text-slate-700 dark:text-gray-300">Project Timeline *</label>
              <select
                id="timeline"
                name="timeline"
                required
                value={formData.timeline}
                onChange={handleChange}
                className="w-full rounded-xl border border-slate-200 dark:border-gray-800 bg-slate-50 dark:bg-white dark:bg-gray-950/80 px-4 py-3 text-sm text-slate-900 dark:text-white focus:border-[#00529b] focus:outline-none [&>option]:bg-slate-50 dark:bg-gray-950"
              >
                {timelinesList.map((timeValue) => (
                  <option key={timeValue} value={timeValue}>{timeValue}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Project Message */}
          <div className="space-y-2">
            <label htmlFor="message" className="text-sm font-semibold text-slate-700 dark:text-gray-300">Project Details *</label>
            <textarea
              id="message"
              name="message"
              required
              rows={4}
              value={formData.message}
              onChange={handleChange}
              placeholder="Outline your application features, automated workflows, dashboard requirements, or specific target systems..."
              className="w-full rounded-xl border border-slate-200 dark:border-gray-800 bg-slate-50 dark:bg-white dark:bg-gray-950/80 px-4 py-3 text-sm text-slate-900 dark:text-white placeholder-gray-600 focus:border-[#00529b] focus:outline-none"
            ></textarea>
          </div>

          {/* Error Banner */}
          {error && (
            <div className="flex items-center space-x-2 rounded-xl bg-red-500/10 p-4 text-sm text-red-400 border border-red-500/20">
              <AlertCircle className="h-5 w-5 shrink-0" />
              <span>{error}</span>
            </div>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="flex w-full items-center justify-center space-x-2 rounded-xl bg-gradient-to-r from-[#00205b] via-[#00529b] to-[#0072ce] px-6 py-4 text-base font-semibold text-white shadow-lg hover:from-[#00205b] hover:to-[#00529b] focus:outline-none disabled:opacity-50 hover:scale-[1.01] active:scale-[0.99] transition-all duration-200"
          >
            {loading ? (
              <span className="h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent"></span>
            ) : (
              <>
                <span>Submit Inquiry</span>
                <Send className="h-4 w-4" />
              </>
            )}
          </button>
        </form>
      )}
    </div>
  );
};
