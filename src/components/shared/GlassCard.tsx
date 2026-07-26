"use client";

import React from "react";
import { useTheme } from "./ThemeProvider";

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
  const { theme } = useTheme();
  
  // Decide which CSS classes to apply based on active theme
  const baseClass = theme === "dark" 
    ? (interactive ? "glass-card" : "glass-panel") 
    : (interactive ? "glass-card-light" : "glass-panel-light");

  return (
    <div 
      className={`${baseClass} rounded-2xl p-6 transition-all duration-300 ${className}`} 
      {...props}
    >
      {children}
    </div>
  );
};
