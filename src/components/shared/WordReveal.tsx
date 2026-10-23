"use client";

import { useMemo, ReactNode } from "react";
import { motion, Variants } from "framer-motion";
import { cn } from "@/lib/utils";

export interface WordItem {
  word: string;
  isGradient: boolean;
  colorClass?: string;
}

const DEFAULT_BRAND_COLORS = ["text-[#502D6D]", "text-[#FCB116]"];
const DEFAULT_LIGHT_BRAND_COLORS = ["text-[#D79EFF]", "text-[#FCB116]", "text-[#FFE29A]"];

export function parseTextToWords(
  text: string,
  gradientWords?: string | string[],
  options?: {
    gradientClassName?: string | string[];
    gradientClassNames?: string[];
    wordColors?: Record<string, string>;
  }
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

  // Determine color palette (single solid color per word)
  let colorPalette: string[] = [];
  if (options?.gradientClassNames && options.gradientClassNames.length > 0) {
    colorPalette = options.gradientClassNames;
  } else if (Array.isArray(options?.gradientClassName) && options.gradientClassName.length > 0) {
    colorPalette = options.gradientClassName;
  } else if (typeof options?.gradientClassName === "string" && options.gradientClassName.trim()) {
    const cls = options.gradientClassName.trim();
    if (cls.includes("gradient") || cls.includes("bg-clip-text")) {
      // Don't apply multi-gradient to a single word; use solid logo colors instead
      if (cls.includes("#D79EFF") || cls.includes("#FFFFFF") || cls.includes("white")) {
        colorPalette = DEFAULT_LIGHT_BRAND_COLORS;
      } else {
        colorPalette = DEFAULT_BRAND_COLORS;
      }
    } else {
      colorPalette = [cls];
    }
  } else {
    colorPalette = DEFAULT_BRAND_COLORS;
  }

  let gradientMatchIndex = 0;

  return rawWords.map((word) => {
    const cleanWord = word.toLowerCase().replace(/[.,!?;:—\-]/g, "");
    const isTarget = targets.length > 0 && targets.includes(cleanWord);

    let colorClass: string | undefined = undefined;
    if (isTarget) {
      if (options?.wordColors && options.wordColors[cleanWord]) {
        colorClass = options.wordColors[cleanWord];
      } else if (colorPalette.length > 0) {
        colorClass = colorPalette[gradientMatchIndex % colorPalette.length];
        gradientMatchIndex++;
      }
    }

    return {
      word,
      isGradient: isTarget,
      colorClass,
    };
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
  },
  visible: (custom: { duration: number }) => ({
    opacity: 1,
    y: "0%",
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
  gradientClassName?: string | string[];
  gradientClassNames?: string[];
  wordColors?: Record<string, string>;
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
  gradientClassNames,
  wordColors,
  as: Tag = "div",
  className,
  wordClassName,
  delay = 0,
  staggerDelay = 0.035,
  duration = 0.6,
  once = true,
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
    () =>
      parseTextToWords(rawText, gradientWords, {
        gradientClassName,
        gradientClassNames,
        wordColors,
      }),
    [rawText, gradientWords, gradientClassName, gradientClassNames, wordColors]
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
              item.colorClass
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
  once = true,
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
