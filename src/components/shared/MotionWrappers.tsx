"use client";

import React, { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

interface FadeInProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  distance?: number;
  duration?: number;
}

export const FadeIn: React.FC<FadeInProps> = ({
  children,
  className = "",
  delay = 0,
  direction = "up",
  distance = 24,
  duration = 0.6,
}) => {
  const getInitialPosition = () => {
    switch (direction) {
      case "up":
        return { y: distance, x: 0 };
      case "down":
        return { y: -distance, x: 0 };
      case "left":
        return { x: distance, y: 0 };
      case "right":
        return { x: -distance, y: 0 };
      case "none":
        return { x: 0, y: 0 };
    }
  };

  const initial = { opacity: 0, ...getInitialPosition() };

  return (
    <motion.div
      initial={initial}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{
        duration,
        delay,
        ease: [0.21, 0.47, 0.32, 0.98],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export const StaggerContainer: React.FC<{
  children: React.ReactNode;
  className?: string;
  staggerDelay?: number;
}> = ({ children, className = "", staggerDelay = 0.1 }) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-40px" }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: staggerDelay,
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export const StaggerItem: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className = "" }) => {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.5,
            ease: [0.21, 0.47, 0.32, 0.98],
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export const Counter: React.FC<{
  value: string;
  label?: string;
  className?: string;
}> = ({ value, label, className = "" }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });
  const [displayValue, setDisplayValue] = useState("0");

  useEffect(() => {
    if (!isInView) return;

    // Check if numeric
    const numericMatch = value.match(/([0-9.]+)/);
    if (!numericMatch) {
      setDisplayValue(value);
      return;
    }

    const targetNumber = parseFloat(numericMatch[0]);
    const prefix = value.slice(0, numericMatch.index);
    const suffix = value.slice((numericMatch.index || 0) + numericMatch[0].length);

    let start = 0;
    const duration = 1200;
    const startTime = performance.now();

    const update = (now: number) => {
      const progress = Math.min((now - startTime) / duration, 1);
      // easeOutExpo
      const easedProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      const current = start + (targetNumber - start) * easedProgress;

      const formatted = Number.isInteger(targetNumber)
        ? Math.round(current).toString()
        : current.toFixed(1);

      setDisplayValue(`${prefix}${formatted}${suffix}`);

      if (progress < 1) {
        requestAnimationFrame(update);
      } else {
        setDisplayValue(value);
      }
    };

    requestAnimationFrame(update);
  }, [isInView, value]);

  return (
    <div ref={ref} className={className}>
      <span>{displayValue}</span>
      {label && <div className="text-xs text-white/40 uppercase tracking-wider mt-1">{label}</div>}
    </div>
  );
};
