"use client";

import React, { useState, useEffect } from "react";
import { GlassCard } from "@/components/shared/GlassCard";
import { Save, AlertCircle, RefreshCw } from "lucide-react";

export default function SiteSettingsPage() {
  const [settings, setSettings] = useState({
    "homepage.hero.title": "",
    "homepage.hero.subtitle": "",
    "homepage.about.text": "",
  });

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const fetchSettings = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/cms/settings");
      if (res.ok) {
        const data = await res.json();
        setSettings({
          "homepage.hero.title": data["homepage.hero.title"] || "",
          "homepage.hero.subtitle": data["homepage.hero.subtitle"] || "",
          "homepage.about.text": data["homepage.about.text"] || "",
        });
      } else {
        setError("Failed to load site configurations.");
      }
    } catch (err) {
      console.error(err);
      setError("Network error fetching settings.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSettings();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setSettings((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    setError("");
    setSuccess(false);

    const payload = Object.entries(settings).map(([key, value]) => ({
      key,
      value,
    }));

    try {
      const res = await fetch("/api/cms/settings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (res.ok) {
        setSuccess(true);
        setTimeout(() => setSuccess(false), 3000);
      } else {
        const data = await res.json();
        setError(data.error || "Failed to update configurations.");
      }
    } catch (err) {
      console.error(err);
      setError("Network error updating configurations.");
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="space-y-8">
      
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-white">Site Settings</h1>
        <p className="text-sm text-gray-500 mt-1">Configure global text fields and Hero copy for the public homepage.</p>
      </div>

      {loading ? (
        <div className="text-center py-20">
          <span className="h-8 w-8 animate-spin rounded-full border-4 border-indigo-500 border-t-transparent inline-block"></span>
          <p className="text-xs text-gray-500 mt-2">Loading settings...</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6 max-w-3xl">
          
          <GlassCard interactive={false} className="border-gray-900 bg-gray-900/10 space-y-6">
            
            {/* Hero Title */}
            <div className="space-y-2">
              <label htmlFor="homepage.hero.title" className="text-sm font-semibold text-gray-300">Home Page Hero Title</label>
              <input
                type="text"
                id="homepage.hero.title"
                name="homepage.hero.title"
                required
                value={settings["homepage.hero.title"]}
                onChange={handleChange}
                placeholder="Engineering AI Solutions for Tomorrow"
                className="w-full rounded-xl border border-gray-850 bg-gray-950/80 px-4 py-3 text-sm text-white focus:border-indigo-500 focus:outline-none"
              />
            </div>

            {/* Hero Subtitle */}
            <div className="space-y-2">
              <label htmlFor="homepage.hero.subtitle" className="text-sm font-semibold text-gray-300">Home Page Hero Subtitle</label>
              <textarea
                id="homepage.hero.subtitle"
                name="homepage.hero.subtitle"
                required
                rows={3}
                value={settings["homepage.hero.subtitle"]}
                onChange={handleChange}
                placeholder="Helping businesses automate, innovate, and grow..."
                className="w-full rounded-xl border border-gray-850 bg-gray-950/80 px-4 py-3 text-sm text-white focus:border-indigo-500 focus:outline-none"
              ></textarea>
            </div>

            {/* About Text */}
            <div className="space-y-2">
              <label htmlFor="homepage.about.text" className="text-sm font-semibold text-gray-300">Homepage About Section Text</label>
              <textarea
                id="homepage.about.text"
                name="homepage.about.text"
                required
                rows={5}
                value={settings["homepage.about.text"]}
                onChange={handleChange}
                placeholder="VP Veyora Private Limited is an AI-first technology company..."
                className="w-full rounded-xl border border-gray-850 bg-gray-950/80 px-4 py-3 text-sm text-white focus:border-indigo-500 focus:outline-none"
              ></textarea>
            </div>

          </GlassCard>

          {/* Feedback */}
          {error && (
            <div className="flex items-center space-x-2 rounded-xl bg-red-500/10 p-4 text-xs sm:text-sm text-red-400 border border-red-500/20">
              <AlertCircle className="h-5 w-5 shrink-0" />
              <span>{error}</span>
            </div>
          )}

          {success && (
            <div className="rounded-xl bg-emerald-500/10 p-4 text-xs sm:text-sm text-emerald-400 border border-emerald-500/20">
              Settings updated and saved to PostgreSQL successfully!
            </div>
          )}

          {/* Submit */}
          <button
            type="submit"
            disabled={saving}
            className="flex items-center space-x-2 rounded-xl bg-indigo-650 hover:bg-indigo-550 px-6 py-3 text-sm font-semibold text-white transition-all focus:outline-none disabled:opacity-50"
          >
            {saving ? (
              <RefreshCw className="h-4 w-4 animate-spin" />
            ) : (
              <Save className="h-4 w-4" />
            )}
            <span>Save Configuration</span>
          </button>

        </form>
      )}

    </div>
  );
}
