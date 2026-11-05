"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

interface PrincipleItem {
  num: string;
  title: string;
  titleLines: string[];
  desc: string;
  iconSrc: string;
  yOffset: number;
  rotation: number;
  badgeBg: string;
  badgeBorder: string;
  cardBg: string;
  cardBorder: string;
  glowUnder: string;
}

const PRINCIPLES: PrincipleItem[] = [
  {
    num: "01",
    title: "Client Success",
    titleLines: ["Client", "Success"],
    desc: "Your success is the real measure of our work. We focus on creating solutions that deliver meaningful business value and tangible growth.",
    iconSrc: "/images/about/principles/client-success.png",
    yOffset: 0,
    rotation: -8.5,
    badgeBg: "bg-[#F3E8FF]/80",
    badgeBorder: "border-[#E9D5FF]",
    cardBg: "bg-gradient-to-b from-[#FAF8FF] to-[#FFFFFF]",
    cardBorder: "border-[#E9D5FF]/80",
    glowUnder: "rgba(168,85,247,0.25)",
  },
  {
    num: "02",
    title: "Quality",
    titleLines: ["Quality"],
    desc: "From architectural design to code delivery, we obsess over details that make every software platform fast, reliable, and secure.",
    iconSrc: "/images/about/principles/quality.png",
    yOffset: 30,
    rotation: -5,
    badgeBg: "bg-[#E0F2FE]/80",
    badgeBorder: "border-[#BAE6FD]",
    cardBg: "bg-gradient-to-b from-[#F0F7FF] to-[#FFFFFF]",
    cardBorder: "border-[#BAE6FD]/80",
    glowUnder: "rgba(56,189,248,0.25)",
  },
  {
    num: "03",
    title: "Transparency",
    titleLines: ["Transparency"],
    desc: "Clear communication, realistic milestones, and honest discussions form the bedrock of our high-trust client relationships.",
    iconSrc: "/images/about/principles/transparency.png",
    yOffset: 56,
    rotation: -1.8,
    badgeBg: "bg-[#DCFCE7]/80",
    badgeBorder: "border-[#BBF7D0]",
    cardBg: "bg-gradient-to-b from-[#F0FDF4] to-[#FFFFFF]",
    cardBorder: "border-[#BBF7D0]/80",
    glowUnder: "rgba(34,197,94,0.25)",
  },
  {
    num: "04",
    title: "User-Centric Thinking",
    titleLines: ["User-Centric", "Thinking"],
    desc: "We design around the real people who interact with the product every day — prioritizing speed, intuition, and frictionless flow.",
    iconSrc: "/images/about/principles/user-centric.png",
    yOffset: 54,
    rotation: 1.8,
    badgeBg: "bg-[#FFEDD5]/80",
    badgeBorder: "border-[#FED7AA]",
    cardBg: "bg-gradient-to-b from-[#FFF7ED] to-[#FFFFFF]",
    cardBorder: "border-[#FED7AA]/80",
    glowUnder: "rgba(249,115,22,0.25)",
  },
  {
    num: "05",
    title: "Continuous Learning",
    titleLines: ["Continuous", "Learning"],
    desc: "Technology moves fast. We continuously experiment, adopt modern best practices, and refine our stack to build superior digital products.",
    iconSrc: "/images/about/principles/continuous-learning.png",
    yOffset: 28,
    rotation: 5,
    badgeBg: "bg-[#FEF9C3]/80",
    badgeBorder: "border-[#FEF08A]",
    cardBg: "bg-gradient-to-b from-[#FEFCE8] to-[#FFFFFF]",
    cardBorder: "border-[#FEF08A]/80",
    glowUnder: "rgba(234,179,8,0.25)",
  },
  {
    num: "06",
    title: "Long-Term Partnership",
    titleLines: ["Long-Term", "Partnership"],
    desc: "We are more than a one-time build vendor. We become an enduring technology partner your business can rely on as you scale.",
    iconSrc: "/images/about/principles/partnership.png",
    yOffset: -2,
    rotation: 8.5,
    badgeBg: "bg-[#FCE7F3]/80",
    badgeBorder: "border-[#FBCFE8]",
    cardBg: "bg-gradient-to-b from-[#FDF2F8] to-[#FFFFFF]",
    cardBorder: "border-[#FBCFE8]/80",
    glowUnder: "rgba(244,114,182,0.25)",
  },
];

/* ─── Clothespin / Peg Clip ─────────────────────────────────────────────── */
function ClotheslineClip() {
  return (
    <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-30 pointer-events-none flex flex-col items-center">
      <div className="w-6 h-9 sm:w-7 sm:h-10 rounded-[6px] bg-gradient-to-b from-[#6366F1] to-[#7C3AED] shadow-[0_3px_8px_rgba(99,102,241,0.45)] flex flex-col items-center justify-between py-1.5 border border-white/30">
        {/* Top indent / hinge */}
        <div className="w-3.5 h-0.5 rounded-full bg-white/40" />
        {/* Metallic peg eyelet / hole */}
        <div className="w-2 h-2 rounded-full bg-white/90 shadow-[inset_0_1px_2px_rgba(0,0,0,0.3)]" />
        {/* Bottom grip line */}
        <div className="w-3 h-0.5 rounded-full bg-black/25" />
      </div>
    </div>
  );
}

export function AboutValuesSection() {
  return (
    <section
      id="principles"
      className="py-20 lg:py-28 bg-[#FFFFFF] relative overflow-hidden select-none"
    >
      {/* Ambient Atmospheric Lighting Blobs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[450px] bg-purple-100/30 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        
        {/* ─── Header: Exact Match to Reference Image ─── */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-18">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Headline */}
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#0F172A] tracking-tight leading-tight">
              Our{" "}
              <span className="bg-gradient-to-r from-[#6366F1] via-[#7C3AED] to-[#9333EA] bg-clip-text text-transparent">
                Core Principles
              </span>
            </h2>

            {/* Subtitle */}
            <p className="mt-3 text-sm sm:text-base text-[#64748B] font-normal max-w-xl mx-auto">
              Don&apos;t pick from presets, build your brand identity your way.
            </p>
          </motion.div>
        </div>

        {/* ─── Clothesline Stage: Wire + Hanging Clipped Cards (All 6 Cards Fully Visible) ─── */}
        <div className="relative w-full max-w-6xl xl:max-w-7xl mx-auto pt-6 pb-6">
          
          {/* Scrollable on small screens, full width on desktop */}
          <div className="overflow-x-auto lg:overflow-visible pb-8 pt-4 scrollbar-none -mx-4 px-4 sm:mx-0 sm:px-0">
            <div className="min-w-[880px] lg:min-w-0 w-full relative px-2 sm:px-4">
              
              {/* The Hanging Sagging String / Cable SVG */}
              <div className="absolute top-[8px] sm:top-[10px] left-0 right-0 h-32 pointer-events-none z-10">
                <svg
                  viewBox="0 0 1200 130"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-full h-full overflow-visible"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M 10 28 C 340 120, 860 120, 1190 28"
                    stroke="#CBD5E1"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    opacity="0.85"
                  />
                </svg>
              </div>

              {/* 6 Hanging Cards in a 6-Column Grid — 3D Clock Pendulum Animation Effect */}
              <div
                className="grid grid-cols-6 gap-2.5 sm:gap-3.5 md:gap-4 lg:gap-4 xl:gap-5 w-full relative z-20 items-start"
                style={{ perspective: "1400px", transformStyle: "preserve-3d" }}
              >
                {PRINCIPLES.map((principle, idx) => {
                  // Pendulum timing & harmonic oscillation parameters
                  const cycleDuration = 4.2 + (idx % 3) * 0.25;
                  const phaseDelay = idx * 0.32;
                  const swingAngle = 3.6;

                  return (
                    /* Anchor container positioned along the catenary wire curve */
                    <div
                      key={principle.num}
                      style={{
                        transform: `translateY(${principle.yOffset}px)`,
                      }}
                      className="relative w-full"
                    >
                      {/* 3D Clock Pendulum Swinging Card (Pivots from top peg at 50% 0px) */}
                      <motion.div
                        initial={{ opacity: 0, y: -20, rotateZ: principle.rotation }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false, amount: 0.15 }}
                        animate={{
                          rotateZ: [
                            principle.rotation - swingAngle,
                            principle.rotation + swingAngle,
                            principle.rotation - swingAngle,
                          ],
                          rotateY: [-3.5, 3.5, -3.5],
                          rotateX: [0, 3, 0],
                        }}
                        transition={{
                          opacity: { duration: 0.6, delay: idx * 0.08 },
                          y: { duration: 0.6, delay: idx * 0.08, ease: "easeOut" },
                          rotateZ: {
                            repeat: Infinity,
                            duration: cycleDuration,
                            ease: "easeInOut",
                            delay: phaseDelay,
                          },
                          rotateY: {
                            repeat: Infinity,
                            duration: cycleDuration,
                            ease: "easeInOut",
                            delay: phaseDelay + 0.15,
                          },
                          rotateX: {
                            repeat: Infinity,
                            duration: cycleDuration / 2,
                            ease: "easeInOut",
                            delay: phaseDelay,
                          },
                        }}
                        whileHover={{
                          scale: 1.05,
                          y: -8,
                          transition: { duration: 0.25, ease: "easeOut" },
                        }}
                        whileTap={{ scale: 0.98 }}
                        style={{
                          transformOrigin: "50% 0px",
                          transformStyle: "preserve-3d",
                          willChange: "transform",
                          boxShadow: `0 22px 48px -8px ${principle.glowUnder}`,
                        }}
                        className={`relative w-full h-[190px] sm:h-[205px] lg:h-[215px] xl:h-[225px] rounded-[26px] sm:rounded-[30px] p-4 sm:p-5 flex flex-col items-center text-center justify-center gap-3 sm:gap-3.5 cursor-pointer transition-all duration-300 hover:scale-[1.02] text-[#0F172A] ${principle.cardBg} ${principle.cardBorder} border`}
                      >
                        {/* Purple Peg / Clip clamping the card to the wire */}
                        <ClotheslineClip />

                        {/* Top: 3D Realistic Icon Badge */}
                        <div
                          className={`w-13 h-13 sm:w-15 sm:h-15 lg:w-16 lg:h-16 rounded-2xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110 shadow-xs border ${principle.badgeBorder} ${principle.badgeBg} p-1.5 overflow-hidden relative`}
                        >
                          <Image
                            src={principle.iconSrc}
                            alt={principle.title}
                            width={80}
                            height={80}
                            className="w-full h-full object-contain filter drop-shadow-sm select-none"
                            priority
                          />
                        </div>

                        {/* Title */}
                        <div className="flex flex-col items-center">
                          {principle.titleLines.map((line, lIdx) => (
                            <span
                              key={lIdx}
                              className="text-xs sm:text-sm lg:text-[15px] xl:text-base font-black tracking-tight leading-tight text-[#0F172A]"
                            >
                              {line}
                            </span>
                          ))}
                        </div>
                      </motion.div>
                    </div>
                  );
                })}
              </div>

            </div>
          </div>

          {/* Mobile Swipe Hint (visible on small screens only) */}
          <div className="sm:hidden text-center text-xs text-slate-400 mt-2 flex items-center justify-center gap-1">
            <span>Swipe cards to explore</span>
            <ArrowRight className="w-3 h-3 text-slate-400" />
          </div>

        </div>

      </div>
    </section>
  );
}