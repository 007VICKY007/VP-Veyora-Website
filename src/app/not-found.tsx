import React from "react";
import Link from "next/link";
import { GlassCard } from "@/components/shared/GlassCard";
import { Compass, ArrowRight } from "lucide-react";

export default function NotFound() {
  return (
    <div className="bg-transparent text-white  min-h-[80vh] flex flex-col justify-center items-center px-4">
      <GlassCard interactive={false} className="max-w-md w-full text-center space-y-6 border-white/08  p-8 sm:p-12">
        <div className="inline-flex rounded-full bg-yellow-500/10 p-4 text-yellow-600 ">
          <Compass className="h-12 w-12 animate-pulse" />
        </div>
        <div className="space-y-2">
          <h1 className="text-4xl font-extrabold tracking-tight">404</h1>
          <h3 className="text-xl font-bold text-slate-800 ">Page Not Found</h3>
          <p className="text-sm text-white/60  leading-relaxed">
            The page you are trying to reach doesn't exist or has been relocated.
          </p>
        </div>
        <div className="pt-2">
          <Link
            href="/"
            className="inline-flex items-center justify-center space-x-2 rounded-xl bg-yellow-500 hover:bg-[#F5C200]/080 px-6 py-3 text-sm font-semibold text-white  w-full transition-colors shadow"
          >
            <span>Return to Home</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </GlassCard>
    </div>
  );
}
