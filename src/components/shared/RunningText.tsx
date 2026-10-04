"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

/**
 * 1. TypewriterText: Running letter-by-letter typing animation with blinking gold cursor
 */
export const TypewriterText: React.FC<{
  words: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseTime?: number;
  className?: string;
}> = ({
  words,
  typingSpeed = 90,
  deletingSpeed = 45,
  pauseTime = 1800,
  className = "",
}) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const fullWord = words[currentWordIndex];

    const timer = setTimeout(() => {
      if (!isDeleting) {
        // Typing letters forward
        setCurrentText(fullWord.slice(0, currentText.length + 1));

        if (currentText === fullWord) {
          // Finished typing word, pause before deleting
          setTimeout(() => setIsDeleting(true), pauseTime);
        }
      } else {
        // Deleting letters backward
        setCurrentText(fullWord.slice(0, currentText.length - 1));

        if (currentText === "") {
          setIsDeleting(false);
          setCurrentWordIndex((prev) => (prev + 1) % words.length);
        }
      }
    }, isDeleting ? deletingSpeed : typingSpeed);

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentWordIndex, words, typingSpeed, deletingSpeed, pauseTime]);

  return (
    <span className={`inline-flex items-center ${className}`}>
      <span>{currentText}</span>
      <motion.span
        animate={{ opacity: [1, 0, 1] }}
        transition={{ repeat: Infinity, duration: 0.8, ease: "linear" }}
        className="inline-block w-[3px] h-[0.9em] bg-[#F5C200] ml-1.5 align-middle shadow-[0_0_8px_#F5C200]"
      />
    </span>
  );
};

/**
 * 2. RunningMarquee: Infinite horizontal running letters / text banner
 */
export const RunningMarquee: React.FC<{
  items?: string[];
  speed?: number;
  className?: string;
}> = ({
  items = [
    "ARTIFICIAL INTELLIGENCE",
    "WORKFLOW AUTOMATION",
    "ENTERPRISE SAAS",
    "FULL-STACK PLATFORMS",
    "CLOUD ARCHITECTURE",
    "ZERO-TRUST SECURITY",
    "AUTONOMOUS LLM AGENTS",
    "CUSTOM ERP PLATFORMS"
  ],
  speed = 28,
  className = "",
}) => {
  // Double array to create seamless loop
  const content = [...items, ...items, ...items];

  return (
    <div className={`relative overflow-hidden w-full border-y border-white/[0.06] bg-white/[0.01] py-4 select-none ${className}`}>
      {/* Left/Right Edge Fades */}
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#05050d] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#05050d] to-transparent z-10 pointer-events-none" />

      <motion.div
        animate={{ x: ["0%", "-33.333%"] }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: speed,
        }}
        className="flex items-center space-x-8 whitespace-nowrap w-max"
      >
        {content.map((item, idx) => (
          <div key={idx} className="flex items-center space-x-8">
            <span className="text-xs sm:text-sm font-extrabold tracking-[0.25em] uppercase text-white/50 hover:text-[#F5C200] transition-colors duration-200">
              {item}
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#F5C200] shadow-[0_0_8px_#F5C200]" />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

/**
 * 3. AnimatedLetters: Splits a phrase into individual letters that animate in
 */
export const AnimatedLetters: React.FC<{
  text: string;
  className?: string;
  delay?: number;
}> = ({ text, className = "", delay = 0 }) => {
  const letters = Array.from(text);

  return (
    <motion.span
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={{
        visible: {
          transition: {
            staggerChildren: 0.03,
            delayChildren: delay,
          },
        },
      }}
      className={`inline-block ${className}`}
    >
      {letters.map((char, index) => (
        <motion.span
          key={index}
          variants={{
            hidden: { opacity: 0, y: 15 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.4, ease: [0.21, 0.47, 0.32, 0.98] },
            },
          }}
          className="inline-block"
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </motion.span>
  );
};
