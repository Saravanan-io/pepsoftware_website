"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { WordReveal, ParagraphReveal } from "./WordReveal";

interface SectionHeadingProps {
  badge?: string;
  title: string;
  gradientWord?: string;
  titleSuffix?: string;
  description?: string;
  align?: "left" | "center" | "right";
  className?: string;
  light?: boolean;
}

export function SectionHeading({
  badge,
  title,
  gradientWord,
  titleSuffix,
  description,
  align = "center",
  className,
  light = false,
}: SectionHeadingProps) {
  const alignClasses = {
    left: "text-left items-start",
    center: "text-center items-center mx-auto",
    right: "text-right items-end ml-auto",
  }[align];

  return (
    <div className={cn("flex flex-col max-w-3xl mb-12 lg:mb-16", alignClasses, className)}>
      {badge && (
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2, margin: "0px 0px -40px 0px" }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center gap-2 mb-3"
        >
          <span
            className={cn(
              "w-4 h-[2px] rounded-full",
              light
                ? "bg-gradient-to-r from-[#D79EFF] to-[#FCB116]"
                : "bg-gradient-to-r from-[#502D6D] to-[#FCB116]"
            )}
          />
          <span
            className={cn(
              "font-syne text-xs sm:text-sm font-extrabold uppercase tracking-[0.24em] bg-clip-text text-transparent",
              light
                ? "bg-gradient-to-r from-[#D79EFF] via-[#F3C68F] to-[#FCB116]"
                : "bg-gradient-to-r from-[#502D6D] via-[#8A3DA8] to-[#FCB116]"
            )}
          >
            {badge}
          </span>
        </motion.div>
      )}

      <WordReveal
        as="h2"
        text={[title, gradientWord, titleSuffix].filter(Boolean).join(" ")}
        gradientWords={gradientWord}
        gradientClassName={cn(
          "text-transparent bg-clip-text",
          light
            ? "bg-gradient-to-r from-[#D79EFF] via-[#FCB116] to-[#FFE29A]"
            : "bg-gradient-to-r from-[#544643] to-[#C86A28]"
        )}
        className={cn(
          "text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-[1.12]",
          light ? "text-white" : "text-[#151515]"
        )}
      />

      {description && (
        <ParagraphReveal
          text={description}
          delay={0.12}
          className={cn(
            "mt-4 text-base sm:text-lg leading-relaxed max-w-2xl font-normal",
            light ? "text-[#D4C7EC]" : "text-[#544643]"
          )}
        />
      )}
    </div>
  );
}
