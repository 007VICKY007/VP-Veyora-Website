"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

/**
 * 1. RunningLettersTicker
 * Infinite smooth horizontal marquee with customizable speed, direction, and styling.
 */
interface RunningLettersTickerProps {
  text: string;
  repeat?: number;
  speedSeconds?: number;
  direction?: "left" | "right";
  className?: string;
  separator?: string;
  outline?: boolean;
}

export const RunningLettersTicker: React.FC<RunningLettersTickerProps> = ({
  text,
  repeat = 6,
  speedSeconds = 25,
  direction = "left",
  className = "",
  separator = "•",
  outline = false,
}) => {
  const items = Array.from({ length: repeat });

  return (
    <div className={`overflow-hidden whitespace-nowrap select-none flex ${className}`}>
      <motion.div
        animate={{
          x: direction === "left" ? ["0%", "-50%"] : ["-50%", "0%"],
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: speedSeconds,
            ease: "linear",
          },
        }}
        className="flex shrink-0 items-center"
      >
        {items.map((_, i) => (
          <span
            key={i}
            className={`inline-flex items-center px-4 font-black uppercase tracking-tight ${
              outline
                ? "text-transparent [text-stroke:1px_rgba(0,0,0,0.15)] [-webkit-text-stroke:1px_rgba(0,0,0,0.15)]"
                : ""
            }`}
          >
            <span>{text}</span>
            <span className="mx-4 text-[#ffe500] font-normal">{separator}</span>
          </span>
        ))}
        {items.map((_, i) => (
          <span
            key={`dup-${i}`}
            className={`inline-flex items-center px-4 font-black uppercase tracking-tight ${
              outline
                ? "text-transparent [text-stroke:1px_rgba(0,0,0,0.15)] [-webkit-text-stroke:1px_rgba(0,0,0,0.15)]"
                : ""
            }`}
          >
            <span>{text}</span>
            <span className="mx-4 text-[#ffe500] font-normal">{separator}</span>
          </span>
        ))}
      </motion.div>
    </div>
  );
};

/**
 * 2. RunningLetterHeadline
 * Letter-by-letter running wave animation that cycles through dynamic terms.
 */
interface RunningLetterHeadlineProps {
  words: string[];
  intervalMs?: number;
  className?: string;
  highlightClassName?: string;
}

export const RunningLetterHeadline: React.FC<RunningLetterHeadlineProps> = ({
  words,
  intervalMs = 3200,
  className = "",
  highlightClassName = "bg-[#ffe500] text-black px-3.5 py-0.5 rounded-lg font-black shadow-xs",
}) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (words.length <= 1) return;
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, intervalMs);
    return () => clearInterval(timer);
  }, [words.length, intervalMs]);

  const currentWord = words[index];

  return (
    <span className={`inline-block relative overflow-hidden align-middle ${className}`}>
      <AnimatePresence mode="wait">
        <motion.span
          key={currentWord}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, y: -20, transition: { duration: 0.25 } }}
          className={`inline-flex items-center ${highlightClassName}`}
        >
          {currentWord.split("").map((char, charIdx) => (
            <motion.span
              key={`${currentWord}-${charIdx}`}
              initial={{ y: 24, opacity: 0, rotateX: 60 }}
              animate={{ y: 0, opacity: 1, rotateX: 0 }}
              transition={{
                duration: 0.38,
                delay: charIdx * 0.03,
                type: "spring",
                stiffness: 350,
                damping: 24,
              }}
              className="inline-block"
              style={{ display: "inline-block", whiteSpace: "pre" }}
            >
              {char}
            </motion.span>
          ))}
        </motion.span>
      </AnimatePresence>
    </span>
  );
};

/**
 * 3. RunningLetterHover
 * Interactive rolling letter hover effect on individual buttons/links.
 */
export const RunningLetterHover: React.FC<{
  text: string;
  className?: string;
}> = ({ text, className = "" }) => {
  return (
    <span className={`inline-flex overflow-hidden relative group/letter ${className}`}>
      {text.split("").map((char, idx) => (
        <span key={idx} className="relative inline-block overflow-hidden" style={{ whiteSpace: "pre" }}>
          <span className="inline-block transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover/letter:-translate-y-full">
            {char}
          </span>
          <span
            aria-hidden="true"
            className="absolute left-0 top-full inline-block transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover/letter:-translate-y-full text-[#ffe500]"
          >
            {char}
          </span>
        </span>
      ))}
    </span>
  );
};
