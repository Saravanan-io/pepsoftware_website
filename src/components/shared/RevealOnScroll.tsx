"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface RevealOnScrollProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  yOffset?: number;
  once?: boolean;
  amount?: number;
}

export function RevealOnScroll({
  children,
  className,
  delay = 0,
  duration = 0.65,
  yOffset = 22,
  once = true,
  amount = 0.15,
}: RevealOnScrollProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: yOffset }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, amount, margin: "0px 0px -40px 0px" }}
      transition={{
        duration,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
      style={{ willChange: "transform, opacity" }}
      className={cn("w-full", className)}
    >
      {children}
    </motion.div>
  );
}
