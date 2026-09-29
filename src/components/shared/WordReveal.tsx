"use client";

import { useMemo, ReactNode } from "react";
import { motion, Variants } from "framer-motion";
import { cn } from "@/lib/utils";

export interface WordItem {
  word: string;
  isGradient: boolean;
}

export function parseTextToWords(
  text: string,
  gradientWords?: string | string[]
): WordItem[] {
  if (!text) return [];

  const rawWords = text.trim().split(/\s+/);
  if (!rawWords.length || rawWords[0] === "") return [];

  const targets: string[] = [];
  if (Array.isArray(gradientWords)) {
    gradientWords.forEach((g) => {
      if (typeof g === "string") {
        g.trim()
          .split(/\s+/)
          .forEach((w) => {
            const clean = w.toLowerCase().replace(/[.,!?;:—\-]/g, "");
            if (clean) targets.push(clean);
          });
      }
    });
  } else if (typeof gradientWords === "string" && gradientWords.trim()) {
    gradientWords
      .trim()
      .split(/\s+/)
      .forEach((w) => {
        const clean = w.toLowerCase().replace(/[.,!?;:—\-]/g, "");
        if (clean) targets.push(clean);
      });
  }

  return rawWords.map((word) => {
    const cleanWord = word.toLowerCase().replace(/[.,!?;:—\-]/g, "");
    const isGradient = targets.length > 0 && targets.includes(cleanWord);
    return { word, isGradient };
  });
}

const defaultContainerVariants: Variants = {
  hidden: {},
  visible: (custom: { staggerDelay: number; delay: number }) => ({
    transition: {
      staggerChildren: custom.staggerDelay,
      delayChildren: custom.delay,
    },
  }),
};

const defaultWordVariants: Variants = {
  hidden: {
    opacity: 0,
    y: "110%",
    filter: "blur(4px)",
  },
  visible: (custom: { duration: number }) => ({
    opacity: 1,
    y: "0%",
    filter: "blur(0px)",
    transition: {
      duration: custom.duration,
      ease: [0.16, 1, 0.3, 1],
    },
  }),
};

export interface WordRevealProps {
  text?: string;
  children?: ReactNode;
  gradientWords?: string | string[];
  gradientClassName?: string;
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span" | "div";
  className?: string;
  wordClassName?: string;
  delay?: number;
  staggerDelay?: number;
  duration?: number;
  once?: boolean;
  amount?: number;
}

export function WordReveal({
  text,
  children,
  gradientWords,
  gradientClassName,
  as: Tag = "div",
  className,
  wordClassName,
  delay = 0,
  staggerDelay = 0.035,
  duration = 0.6,
  once = false,
  amount = 0.15,
}: WordRevealProps) {
  const rawText =
    typeof text === "string"
      ? text
      : typeof children === "string"
      ? children
      : Array.isArray(children)
      ? children.filter((c) => typeof c === "string").join(" ")
      : "";

  const words = useMemo(
    () => parseTextToWords(rawText, gradientWords),
    [rawText, gradientWords]
  );

  const Component = motion[Tag];

  return (
    <Component
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount, margin: "0px 0px -40px 0px" }}
      variants={defaultContainerVariants}
      custom={{ staggerDelay, delay }}
      className={cn("inline-block w-full", className)}
      suppressHydrationWarning
    >
      {words.map((item, index) => (
        <span
          key={`${index}-${item.word}`}
          className="inline-block overflow-hidden align-top leading-[inherit] py-[0.08em] mr-[0.28em] last:mr-0"
        >
          <motion.span
            variants={defaultWordVariants}
            custom={{ duration }}
            className={cn(
              "inline-block",
              wordClassName,
              item.isGradient && gradientClassName
            )}
          >
            {item.word}
          </motion.span>
        </span>
      ))}
    </Component>
  );
}

export interface ParagraphRevealProps {
  text?: string;
  children?: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  staggerDelay?: number;
  once?: boolean;
  amount?: number;
}

export function ParagraphReveal({
  text,
  children,
  className,
  delay = 0.05,
  duration = 0.55,
  staggerDelay = 0.016,
  once = false,
  amount = 0.15,
}: ParagraphRevealProps) {
  const rawText =
    typeof text === "string"
      ? text
      : typeof children === "string"
      ? children
      : Array.isArray(children)
      ? children.filter((c) => typeof c === "string").join(" ")
      : "";

  const words = useMemo(() => parseTextToWords(rawText), [rawText]);

  return (
    <motion.p
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount, margin: "0px 0px -40px 0px" }}
      variants={defaultContainerVariants}
      custom={{ staggerDelay, delay }}
      className={cn("inline-block w-full", className)}
      suppressHydrationWarning
    >
      {words.map((item, index) => (
        <span
          key={`${index}-${item.word}`}
          className="inline-block overflow-hidden align-top leading-[inherit] py-[0.05em] mr-[0.26em] last:mr-0"
        >
          <motion.span
            variants={defaultWordVariants}
            custom={{ duration }}
            className="inline-block"
          >
            {item.word}
          </motion.span>
        </span>
      ))}
    </motion.p>
  );
}
