"use client";

import React from "react";
import {
  Clock,
  AlertTriangle,
  CalendarCheck,
  MapPin,
  Wrench,
  FileText,
  Users,
  Calendar,
  CheckCircle,
  Share2,
  Award,
  Activity,
  Search,
  Briefcase,
  Shield,
  Megaphone,
  UserCheck,
  User,
  Edit3,
  Heart,
  CreditCard,
  LucideIcon,
} from "lucide-react";
import { RevealOnScroll } from "@/components/shared/RevealOnScroll";
import { ProductDetailData } from "@/data/products";

const ICON_MAP: Record<string, LucideIcon> = {
  Clock,
  AlertTriangle,
  CalendarCheck,
  MapPin,
  Wrench,
  FileText,
  Users,
  Calendar,
  CheckCircle,
  Share2,
  Award,
  Activity,
  Search,
  Briefcase,
  Shield,
  Megaphone,
  UserCheck,
  User,
  Edit3,
  Heart,
  CreditCard,
};

/* ─── 3D Pushpin Component (Realistic Spherical Specular Depth) ─────────── */
type PinColor = "orange" | "purple" | "blue" | "coral" | "violet" | "cyan";

interface PinPalette {
  headStart: string;
  headEnd: string;
  highlight: string;
  body: string;
  shadowColor: string;
}

const PIN_PALETTES: Record<PinColor, PinPalette> = {
  orange: {
    headStart: "#FB923C",
    headEnd: "#EA580C",
    highlight: "#FFEDD5",
    body: "#C2410C",
    shadowColor: "rgba(194, 65, 12, 0.45)",
  },
  purple: {
    headStart: "#C084FC",
    headEnd: "#9333EA",
    highlight: "#FAF5FF",
    body: "#7E22CE",
    shadowColor: "rgba(126, 34, 206, 0.45)",
  },
  blue: {
    headStart: "#60A5FA",
    headEnd: "#2563EB",
    highlight: "#EFF6FF",
    body: "#1D4ED8",
    shadowColor: "rgba(29, 78, 216, 0.45)",
  },
  coral: {
    headStart: "#F87171",
    headEnd: "#E11D48",
    highlight: "#FFF1F2",
    body: "#BE123C",
    shadowColor: "rgba(190, 18, 60, 0.45)",
  },
  violet: {
    headStart: "#A78BFA",
    headEnd: "#7C3AED",
    highlight: "#F5F3FF",
    body: "#6D28D9",
    shadowColor: "rgba(109, 40, 217, 0.45)",
  },
  cyan: {
    headStart: "#38BDF8",
    headEnd: "#0284C7",
    highlight: "#F0F9FF",
    body: "#0369A1",
    shadowColor: "rgba(3, 105, 161, 0.45)",
  },
};

function PushPin3D({
  color = "orange",
  className = "",
}: {
  color?: PinColor;
  className?: string;
}) {
  const p = PIN_PALETTES[color] || PIN_PALETTES.orange;
  const id = `pin-${color}`;

  return (
    <div className={`relative flex items-center justify-center select-none ${className}`}>
      {/* 3D Cast Shadow on the Paper */}
      <div
        className="absolute -bottom-1 w-7 h-3 rounded-full blur-[2px] opacity-45 pointer-events-none"
        style={{ backgroundColor: p.body }}
      />
      <svg
        className="w-8 h-9 drop-shadow-md select-none pointer-events-none"
        viewBox="0 0 32 36"
        fill="none"
      >
        <defs>
          {/* Spherical Head Gradient with Specular Light Glint */}
          <radialGradient id={`${id}-head`} cx="35%" cy="30%" r="65%">
            <stop offset="0%" stopColor={p.highlight} />
            <stop offset="35%" stopColor={p.headStart} />
            <stop offset="85%" stopColor={p.headEnd} />
            <stop offset="100%" stopColor={p.body} />
          </radialGradient>

          {/* Pin Waist / Collar Gradient */}
          <linearGradient id={`${id}-body`} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor={p.body} />
            <stop offset="45%" stopColor={p.headStart} />
            <stop offset="100%" stopColor={p.body} />
          </linearGradient>
        </defs>

        {/* Tapered Collar / Base */}
        <path
          d="M 10 24 C 10 21, 22 21, 22 24 L 20 28 C 20 30, 12 30, 12 28 Z"
          fill={`url(#${id}-body)`}
        />

        {/* Round Rim Ring */}
        <ellipse cx="16" cy="22" rx="7" ry="2.8" fill={p.body} opacity="0.85" />

        {/* 3D Spherical Head */}
        <ellipse cx="16" cy="12" rx="11" ry="10" fill={`url(#${id}-head)`} />

        {/* Bright Specular Glint */}
        <ellipse
          cx="13"
          cy="8"
          rx="3.5"
          ry="2"
          transform="rotate(-20 13 8)"
          fill="#FFFFFF"
          opacity="0.9"
        />
      </svg>
    </div>
  );
}

/* ─── Confetti Sprinkles Component ───────────────────────────────────────── */
function ConfettiSprinkles({
  color = "orange",
  position = "top-left",
}: {
  color?: "orange" | "purple" | "blue" | "coral";
  position?: "top-left" | "top-right" | "bottom-left" | "bottom-right";
}) {
  const colorClasses = {
    orange: "bg-[#FB923C]",
    purple: "bg-[#A855F7]",
    blue: "bg-[#38BDF8]",
    coral: "bg-[#F43F5E]",
  };

  const posClasses = {
    "top-left": "-top-4 -left-5",
    "top-right": "-top-3 -right-6",
    "bottom-left": "-bottom-4 -left-5",
    "bottom-right": "-bottom-3 -right-6",
  };

  return (
    <div
      className={`absolute ${posClasses[position]} flex gap-1.5 pointer-events-none select-none z-0`}
    >
      <span
        className={`w-1.5 h-4 sm:h-5 rounded-full ${colorClasses[color]} opacity-75 transform -rotate-45 shadow-2xs`}
      />
      <span
        className={`w-1.5 h-3 sm:h-3.5 rounded-full ${colorClasses[color]} opacity-55 transform rotate-12 mt-1 shadow-2xs`}
      />
    </div>
  );
}

/* ─── Note Card Configurations Matching Reference Image ─────────────────── */
interface NoteStyle {
  numColor: string;
  underlineColor: string;
  pinColor: PinColor;
  paperBg: string;
  paperBorder: string;
  blobColor: string;
  tiltClass: string;
  confettiColor: "orange" | "purple" | "blue" | "coral";
  confettiPos: "top-left" | "top-right" | "bottom-left" | "bottom-right";
}

const NOTE_STYLES: NoteStyle[] = [
  // 01: Warm Peach/Cream Note
  {
    numColor: "text-[#EA580C]",
    underlineColor: "bg-[#EA580C]",
    pinColor: "orange",
    paperBg: "bg-gradient-to-br from-[#FFFDF9] via-[#FFFAF2] to-[#FFF3E8]",
    paperBorder: "border-[#FED7AA]/60",
    blobColor: "bg-amber-100/50",
    tiltClass: "-rotate-2 sm:-rotate-3 group-hover:rotate-0",
    confettiColor: "orange",
    confettiPos: "top-left",
  },
  // 02: Soft Lavender Note
  {
    numColor: "text-[#7C3AED]",
    underlineColor: "bg-[#7C3AED]",
    pinColor: "purple",
    paperBg: "bg-gradient-to-br from-[#FCF9FF] via-[#FAF5FF] to-[#F3E8FF]",
    paperBorder: "border-[#DDD6FE]/70",
    blobColor: "bg-purple-100/50",
    tiltClass: "rotate-2 sm:rotate-3 group-hover:rotate-0",
    confettiColor: "purple",
    confettiPos: "top-right",
  },
  // 03: Soft Sky Blue Note
  {
    numColor: "text-[#2563EB]",
    underlineColor: "bg-[#2563EB]",
    pinColor: "blue",
    paperBg: "bg-gradient-to-br from-[#F8FCFF] via-[#F0F9FF] to-[#E0F2FE]",
    paperBorder: "border-[#BAE6FD]/70",
    blobColor: "bg-blue-100/50",
    tiltClass: "-rotate-1 sm:-rotate-2 group-hover:rotate-0",
    confettiColor: "blue",
    confettiPos: "bottom-left",
  },
  // 04: Soft Blush Rose Note
  {
    numColor: "text-[#EA580C]",
    underlineColor: "bg-[#EA580C]",
    pinColor: "coral",
    paperBg: "bg-gradient-to-br from-[#FFF9F7] via-[#FFF5F5] to-[#FFE4E6]",
    paperBorder: "border-[#FECDD3]/70",
    blobColor: "bg-rose-100/50",
    tiltClass: "rotate-3 sm:rotate-4 group-hover:rotate-0",
    confettiColor: "coral",
    confettiPos: "bottom-right",
  },
  // 05: Soft Lilac/Violet Note
  {
    numColor: "text-[#7C3AED]",
    underlineColor: "bg-[#7C3AED]",
    pinColor: "violet",
    paperBg: "bg-gradient-to-br from-[#FCF9FF] via-[#FAF5FF] to-[#EDE9FE]",
    paperBorder: "border-[#DDD6FE]/70",
    blobColor: "bg-purple-100/50",
    tiltClass: "-rotate-2 sm:-rotate-3 group-hover:rotate-0",
    confettiColor: "purple",
    confettiPos: "bottom-left",
  },
  // 06: Soft Warm Butter Ivory Note
  {
    numColor: "text-[#1E40AF]",
    underlineColor: "bg-[#1E40AF]",
    pinColor: "cyan",
    paperBg: "bg-gradient-to-br from-[#FFFFF5] via-[#FEFCE8] to-[#FEF3C7]",
    paperBorder: "border-[#FDE68A]/70",
    blobColor: "bg-amber-100/40",
    tiltClass: "rotate-1 sm:rotate-2 group-hover:rotate-0",
    confettiColor: "blue",
    confettiPos: "bottom-right",
  },
];

interface ProductChallengesSectionProps {
  challenges: ProductDetailData["challenges"];
}

export function ProductChallengesSection({ challenges }: ProductChallengesSectionProps) {
  return (
    <section className="py-20 lg:py-28 bg-[#FFFFFF] relative overflow-hidden select-none">
      {/* Background Ambient Glows */}
      <div className="absolute top-1/4 left-10 w-[500px] h-[500px] bg-purple-100/30 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-[500px] h-[500px] bg-amber-100/25 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <RevealOnScroll>
            <div className="inline-flex items-center gap-2.5 mb-2">
              <span className="w-5 sm:w-6 h-[2px] rounded-full bg-gradient-to-r from-orange-400 to-[#7C3AED]" />
              <span className="font-syne text-xs sm:text-sm font-extrabold uppercase tracking-[0.2em] text-[#502D6D]">
                OPERATIONAL SITUATIONS
              </span>
              <span className="w-5 sm:w-6 h-[2px] rounded-full bg-gradient-to-r from-[#7C3AED] to-orange-400" />
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#151515] tracking-tight leading-tight mt-1">
              {challenges.heading}
            </h2>

            <p className="mt-4 text-base sm:text-lg text-[#544643] leading-relaxed max-w-2xl mx-auto">
              {challenges.intro}
            </p>
          </RevealOnScroll>
        </div>

        {/* ── 3D Pinned Notes Roadmap Container ─────────────────────────────── */}
        <div className="relative max-w-5xl mx-auto">
          
          {/* Connecting Dashed Winding SVG Trail (Desktop >= 1024px) */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none hidden lg:block z-0"
            viewBox="0 0 1000 1150"
            fill="none"
            preserveAspectRatio="none"
          >
            {/* 01 to 02 connector */}
            <path
              d="M 430 130 C 500 130, 520 220, 570 230"
              stroke="#A855F7"
              strokeWidth="2.4"
              strokeDasharray="6 6"
              strokeOpacity="0.65"
            />
            <circle cx="475" cy="155" r="4.5" fill="#FFFFFF" stroke="#A855F7" strokeWidth="2.2" />
            <circle cx="535" cy="205" r="4.5" fill="#FFFFFF" stroke="#A855F7" strokeWidth="2.2" />

            {/* 02 to 03 connector */}
            <path
              d="M 570 340 C 520 400, 480 430, 430 490"
              stroke="#A855F7"
              strokeWidth="2.4"
              strokeDasharray="6 6"
              strokeOpacity="0.65"
            />
            <circle cx="530" cy="385" r="4.5" fill="#FFFFFF" stroke="#A855F7" strokeWidth="2.2" />
            <circle cx="465" cy="450" r="4.5" fill="#FFFFFF" stroke="#A855F7" strokeWidth="2.2" />

            {/* 03 to 04 connector */}
            <path
              d="M 430 520 C 500 520, 520 600, 570 610"
              stroke="#A855F7"
              strokeWidth="2.4"
              strokeDasharray="6 6"
              strokeOpacity="0.65"
            />
            <circle cx="475" cy="545" r="4.5" fill="#FFFFFF" stroke="#A855F7" strokeWidth="2.2" />
            <circle cx="535" cy="590" r="4.5" fill="#FFFFFF" stroke="#A855F7" strokeWidth="2.2" />

            {/* 04 to 05 connector */}
            <path
              d="M 570 720 C 520 780, 480 810, 430 870"
              stroke="#A855F7"
              strokeWidth="2.4"
              strokeDasharray="6 6"
              strokeOpacity="0.65"
            />
            <circle cx="530" cy="765" r="4.5" fill="#FFFFFF" stroke="#A855F7" strokeWidth="2.2" />
            <circle cx="465" cy="830" r="4.5" fill="#FFFFFF" stroke="#A855F7" strokeWidth="2.2" />

            {/* 05 to 06 connector */}
            <path
              d="M 430 900 C 500 900, 520 980, 570 990"
              stroke="#A855F7"
              strokeWidth="2.4"
              strokeDasharray="6 6"
              strokeOpacity="0.65"
            />
            <circle cx="475" cy="925" r="4.5" fill="#FFFFFF" stroke="#A855F7" strokeWidth="2.2" />
            <circle cx="535" cy="970" r="4.5" fill="#FFFFFF" stroke="#A855F7" strokeWidth="2.2" />
          </svg>

          {/* ── Staggered 2-Column Grid (Cards 1..6) ─────────────────────────── */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-12 sm:gap-y-14 lg:gap-y-16 gap-x-10 lg:gap-x-14">
            {challenges.items.map((item, idx) => {
              const Icon = ICON_MAP[item.icon] || FileText;
              const noteStyle = NOTE_STYLES[idx % NOTE_STYLES.length];
              const isEvenCol = idx % 2 === 1;

              return (
                <React.Fragment key={item.title}>
                  <RevealOnScroll delay={idx * 0.1}>
                    <div
                      className={`relative group ${
                        isEvenCol ? "lg:mt-14" : ""
                      }`}
                    >
                      {/* Ambient Pastel Liquid Blob Behind Note */}
                      <div
                        className={`absolute -inset-4 sm:-inset-6 rounded-[36px] ${noteStyle.blobColor} blur-2xl opacity-60 group-hover:opacity-90 transition-opacity duration-300 pointer-events-none -z-10`}
                      />

                      {/* 3D Pushpin (pinned at top center) */}
                      <div className="absolute -top-4 sm:-top-5 left-1/2 -translate-x-1/2 z-30">
                        <PushPin3D color={noteStyle.pinColor} />
                      </div>

                      {/* Confetti Sprinkles */}
                      <ConfettiSprinkles
                        color={noteStyle.confettiColor}
                        position={noteStyle.confettiPos}
                      />

                      {/* The Pinned Note Paper */}
                      <div
                        className={`relative rounded-[26px] sm:rounded-[28px] p-6 sm:p-7 sm:pb-8 ${noteStyle.paperBg} ${noteStyle.paperBorder} shadow-[0_16px_36px_rgba(80,45,109,0.08),0_4px_12px_rgba(0,0,0,0.04)] hover:shadow-[0_24px_50px_rgba(80,45,109,0.14)] ${noteStyle.tiltClass} transition-all duration-300 ease-out z-10`}
                      >
                        {/* Card Header: Number on Left, Icon Badge on Right */}
                        <div className="flex items-start justify-between mb-4 pt-1">
                          <div>
                            <span
                              className={`block font-syne text-2xl sm:text-3xl font-black ${noteStyle.numColor} tracking-tight leading-none`}
                            >
                              0{idx + 1}
                            </span>
                            {/* Underline accent under number */}
                            <span
                              className={`block w-6 sm:w-7 h-[2.5px] rounded-full ${noteStyle.underlineColor} mt-1.5`}
                            />
                          </div>

                          {/* Rounded Square Icon Badge */}
                          <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-white/95 border border-slate-200/90 shadow-xs flex items-center justify-center text-[#151515] group-hover:scale-110 transition-transform duration-300">
                            <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-[#151515]" />
                          </div>
                        </div>

                        {/* Title */}
                        <h3 className="font-syne text-lg sm:text-xl font-black text-[#151515] tracking-tight leading-snug mb-2.5">
                          {item.title}
                        </h3>

                        {/* Description */}
                        <p className="text-xs sm:text-[13px] text-[#544643] leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </RevealOnScroll>

                  {/* Mobile connecting dashed line between consecutive cards */}
                  {idx < challenges.items.length - 1 && (
                    <div className="lg:hidden flex flex-col items-center my-1 select-none pointer-events-none">
                      <div className="w-[2px] h-5 border-l-2 border-dashed border-[#A855F7]/50" />
                      <span className="w-2.5 h-2.5 rounded-full border-2 border-[#A855F7] bg-white my-0.5" />
                      <div className="w-[2px] h-5 border-l-2 border-dashed border-[#A855F7]/50" />
                    </div>
                  )}
                </React.Fragment>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
