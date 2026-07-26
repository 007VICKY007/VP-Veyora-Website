"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { signIn, useSession } from "next-auth/react";
import { GlassCard } from "@/components/shared/GlassCard";
import { Lock, Mail, AlertCircle, Brain } from "lucide-react";

export default function AdminLoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await signIn("credentials", {
        redirect: false,
        email,
        password,
      });

      if (res?.error) {
        setError(res.error || "Invalid credentials");
      } else {
        // Redirect to dashboard
        router.push("/admin/dashboard");
        router.refresh();
      }
    } catch (err) {
      console.error(err);
      setError("An unexpected authentication error occurred.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-transparent text-slate-900 dark:text-white min-h-[90vh] flex flex-col justify-center items-center px-4">
      <div className="max-w-md w-full space-y-6">
        
        {/* Brand Header */}
        <div className="text-center space-y-2">
          <img src="/logo.jpg" alt="VP Enterpriceses Logo" className="h-16 w-16 object-contain rounded-xl shadow-sm mx-auto select-none" />
          <h2 className="text-2xl font-bold">VP Enterpriceses</h2>
          <p className="text-sm text-slate-500 dark:text-gray-500">Authorized Systems Administration Portal</p>
        </div>

        {/* Login Card */}
        <GlassCard interactive={false} className="border-gray-900 bg-gray-900/15 p-8 sm:p-10">
          <form onSubmit={handleSubmit} className="space-y-6">
            
            {/* Email */}
            <div className="space-y-2">
              <label htmlFor="email" className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Email Address</label>
              <div className="relative">
                <span className="absolute left-3 top-3.5 text-gray-600">
                  <Mail className="h-4.5 w-4.5" />
                </span>
                <input
                  type="email"
                  id="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="contact@vpenterprises.in"
                  className="w-full rounded-xl border border-gray-800 bg-gray-950/80 pl-10 pr-4 py-3 text-sm text-white placeholder-gray-600 focus:border-indigo-500 focus:outline-none"
                />
              </div>
            </div>

            {/* Password */}
            <div className="space-y-2">
              <label htmlFor="password" className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Password</label>
              <div className="relative">
                <span className="absolute left-3 top-3.5 text-gray-600">
                  <Lock className="h-4.5 w-4.5" />
                </span>
                <input
                  type="password"
                  id="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full rounded-xl border border-gray-800 bg-gray-950/80 pl-10 pr-4 py-3 text-sm text-white placeholder-gray-600 focus:border-indigo-500 focus:outline-none"
                />
              </div>
            </div>

            {/* Error Message */}
            {error && (
              <div className="flex items-center space-x-2 rounded-xl bg-red-500/10 p-4 text-xs sm:text-sm text-red-400 border border-red-500/20">
                <AlertCircle className="h-5 w-5 shrink-0" />
                <span>{error}</span>
              </div>
            )}

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className="flex w-full items-center justify-center space-x-2 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-650 px-6 py-3.5 text-sm font-semibold text-white shadow-lg hover:from-indigo-500 hover:to-purple-550 focus:outline-none disabled:opacity-50 transition-all"
            >
              {loading ? (
                <span className="h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent"></span>
              ) : (
                <span>Log In</span>
              )}
            </button>

          </form>
        </GlassCard>

      </div>
    </div>
  );
}
