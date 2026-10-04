"use client";

import React from "react";

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  interactive?: boolean;
}

export const GlassCard: React.FC<GlassCardProps> = ({
  children,
  className = "",
  interactive = true,
  ...props
}) => {
  return (
    <div
      className={`relative rounded-xl border border-white/[0.07] bg-white/[0.015] p-6 sm:p-8 transition-all duration-300 ${
        interactive
          ? "hover:border-[#F5C200]/35 hover:bg-white/[0.03] hover:-translate-y-1 hover:shadow-xl hover:shadow-black/60"
          : ""
      } ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};
