"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Globe,
  Smartphone,
  Palette,
  ArrowRight,
  ExternalLink,
  ChevronDown,
  Sparkles,
  Layers,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { PORTFOLIO_DATA } from "@/data/portfolio";
import { ProjectItem } from "@/types";
import { RevealOnScroll } from "../shared/RevealOnScroll";

/* ─── Category Configuration with Icons ─────────────────────────────────── */
interface CategoryTab {
  id: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
}

const CATEGORY_TABS: CategoryTab[] = [
  { id: "All", label: "All", icon: Sparkles },
  { id: "Websites", label: "Websites", icon: Globe },
  { id: "Mobile Apps", label: "Mobile Apps", icon: Smartphone },
  { id: "UI/UX", label: "UI/UX", icon: Palette },
];

/* ─── Color Themes for Cards (Dual Tone & Specular Laser Glows) ─────────── */
type CardThemeVariant = "plum" | "cyan" | "coral" | "gold" | "emerald" | "purple";

interface ThemeConfig {
  isDark: boolean;
  cardBg: string;
  cardBorder: string;
  cardShadow: string;
  badgeBg: string;
  badgeText: string;
  badgeBorder: string;
  titleColor: string;
  titleHover: string;
  descColor: string;
  tagBg: string;
  tagText: string;
  tagBorder: string;
  btnBg: string;
  btnText: string;
  btnHoverBg: string;
  btnHoverText: string;
  rimGradient: {
    start: string;
    mid: string;
    end: string;
  };
  rimHaloColor: string;
  ambientGlowColor: string;
}

const THEMES: Record<CardThemeVariant, ThemeConfig> = {
  // Card 1 Signature: Deep Plum Luxury (Hero Featured Card)
  plum: {
    isDark: true,
    cardBg: "bg-gradient-to-br from-[#4A164B] via-[#351037] to-[#220724]",
    cardBorder: "border-[#7C3AED]/35",
    cardShadow: "shadow-[0_20px_50px_rgba(74,22,75,0.22)] hover:shadow-[0_30px_70px_rgba(74,22,75,0.32)]",
    badgeBg: "bg-white",
    badgeText: "text-[#38123C]",
    badgeBorder: "border-transparent",
    titleColor: "text-white",
    titleHover: "group-hover:text-pink-200",
    descColor: "text-white/80",
    tagBg: "bg-white/12",
    tagText: "text-white/95",
    tagBorder: "border-white/20",
    btnBg: "bg-white",
    btnText: "text-[#38123C]",
    btnHoverBg: "group-hover:bg-[#FAF5FF]",
    btnHoverText: "group-hover:text-[#502D6D]",
    rimGradient: {
      start: "#FDE2F0",
      mid: "#FFFFFF",
      end: "#F472B6",
    },
    rimHaloColor: "rgba(244, 63, 94, 0.55)",
    ambientGlowColor: "rgba(244, 114, 182, 0.25)",
  },

  // Card 2 Signature: Clean White with Electric Cyan Water Glow
  cyan: {
    isDark: false,
    cardBg: "bg-white",
    cardBorder: "border-[#E5E0DB]",
    cardShadow: "shadow-[0_15px_40px_rgba(80,45,109,0.06)] hover:shadow-[0_25px_60px_rgba(14,165,233,0.18)]",
    badgeBg: "bg-[#EFF6FF]",
    badgeText: "text-[#0284C7]",
    badgeBorder: "border-[#0284C7]/20",
    titleColor: "text-[#151515]",
    titleHover: "group-hover:text-[#0284C7]",
    descColor: "text-[#544643]",
    tagBg: "bg-[#F0F9FF]",
    tagText: "text-[#0369A1]",
    tagBorder: "border-[#38BDF8]/25",
    btnBg: "bg-[#38123C]",
    btnText: "text-white",
    btnHoverBg: "group-hover:bg-[#0284C7]",
    btnHoverText: "group-hover:text-white",
    rimGradient: {
      start: "#E0F2FE",
      mid: "#FFFFFF",
      end: "#38BDF8",
    },
    rimHaloColor: "rgba(14, 165, 233, 0.55)",
    ambientGlowColor: "rgba(56, 189, 248, 0.25)",
  },

  // Card 3 Signature: Clean White with Medical Coral / Ruby Glow
  coral: {
    isDark: false,
    cardBg: "bg-white",
    cardBorder: "border-[#E5E0DB]",
    cardShadow: "shadow-[0_15px_40px_rgba(80,45,109,0.06)] hover:shadow-[0_25px_60px_rgba(239,68,68,0.18)]",
    badgeBg: "bg-[#FEF2F2]",
    badgeText: "text-[#DC2626]",
    badgeBorder: "border-[#DC2626]/20",
    titleColor: "text-[#151515]",
    titleHover: "group-hover:text-[#DC2626]",
    descColor: "text-[#544643]",
    tagBg: "bg-[#FFF1F2]",
    tagText: "text-[#9F1239]",
    tagBorder: "border-[#FDA4AF]/30",
    btnBg: "bg-[#38123C]",
    btnText: "text-white",
    btnHoverBg: "group-hover:bg-[#E11D48]",
    btnHoverText: "group-hover:text-white",
    rimGradient: {
      start: "#FFE4E6",
      mid: "#FFFFFF",
      end: "#FB7185",
    },
    rimHaloColor: "rgba(244, 63, 94, 0.55)",
    ambientGlowColor: "rgba(251, 113, 133, 0.25)",
  },

  // Card 4 Signature: Clean White with Timeless Gold / Amber Glow
  gold: {
    isDark: false,
    cardBg: "bg-white",
    cardBorder: "border-[#E5E0DB]",
    cardShadow: "shadow-[0_15px_40px_rgba(80,45,109,0.06)] hover:shadow-[0_25px_60px_rgba(245,158,11,0.2)]",
    badgeBg: "bg-[#FEF3C7]",
    badgeText: "text-[#D97706]",
    badgeBorder: "border-[#D97706]/20",
    titleColor: "text-[#151515]",
    titleHover: "group-hover:text-[#D97706]",
    descColor: "text-[#544643]",
    tagBg: "bg-[#FFFBEB]",
    tagText: "text-[#92400E]",
    tagBorder: "border-[#FCD34D]/35",
    btnBg: "bg-[#38123C]",
    btnText: "text-white",
    btnHoverBg: "group-hover:bg-[#D97706]",
    btnHoverText: "group-hover:text-white",
    rimGradient: {
      start: "#FEF3C7",
      mid: "#FFFFFF",
      end: "#FBBF24",
    },
    rimHaloColor: "rgba(245, 158, 11, 0.55)",
    ambientGlowColor: "rgba(251, 191, 36, 0.25)",
  },

  // Dynamic Theme 5: Emerald / Mint Glow
  emerald: {
    isDark: false,
    cardBg: "bg-white",
    cardBorder: "border-[#E5E0DB]",
    cardShadow: "shadow-[0_15px_40px_rgba(80,45,109,0.06)] hover:shadow-[0_25px_60px_rgba(16,185,129,0.18)]",
    badgeBg: "bg-[#ECFDF5]",
    badgeText: "text-[#059669]",
    badgeBorder: "border-[#059669]/20",
    titleColor: "text-[#151515]",
    titleHover: "group-hover:text-[#059669]",
    descColor: "text-[#544643]",
    tagBg: "bg-[#F0FDF4]",
    tagText: "text-[#166534]",
    tagBorder: "border-[#86EFAC]/30",
    btnBg: "bg-[#38123C]",
    btnText: "text-white",
    btnHoverBg: "group-hover:bg-[#059669]",
    btnHoverText: "group-hover:text-white",
    rimGradient: {
      start: "#D1FAE5",
      mid: "#FFFFFF",
      end: "#34D399",
    },
    rimHaloColor: "rgba(16, 185, 129, 0.55)",
    ambientGlowColor: "rgba(52, 211, 153, 0.25)",
  },

  // Dynamic Theme 6: Royal Purple Glow
  purple: {
    isDark: false,
    cardBg: "bg-white",
    cardBorder: "border-[#E5E0DB]",
    cardShadow: "shadow-[0_15px_40px_rgba(80,45,109,0.06)] hover:shadow-[0_25px_60px_rgba(124,58,237,0.18)]",
    badgeBg: "bg-[#F3E8FF]",
    badgeText: "text-[#7C3AED]",
    badgeBorder: "border-[#7C3AED]/20",
    titleColor: "text-[#151515]",
    titleHover: "group-hover:text-[#502D6D]",
    descColor: "text-[#544643]",
    tagBg: "bg-[#FAF5FF]",
    tagText: "text-[#6B21A8]",
    tagBorder: "border-[#D8B4FE]/30",
    btnBg: "bg-[#38123C]",
    btnText: "text-white",
    btnHoverBg: "group-hover:bg-[#7C3AED]",
    btnHoverText: "group-hover:text-white",
    rimGradient: {
      start: "#F3E8FF",
      mid: "#FFFFFF",
      end: "#C084FC",
    },
    rimHaloColor: "rgba(147, 51, 234, 0.55)",
    ambientGlowColor: "rgba(192, 132, 252, 0.25)",
  },
};

/* ─── Golden Botanical Flourish (Leaf Branch Vector Artwork) ─────────────── */
function BotanicalFlourish({
  className = "",
  flip = false,
}: {
  className?: string;
  flip?: boolean;
}) {
  return (
    <svg
      className={`pointer-events-none select-none ${className}`}
      viewBox="0 0 160 220"
      fill="none"
      style={{ transform: flip ? "scaleX(-1)" : undefined }}
    >
      <defs>
        <linearGradient id="goldBranchGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#E2CA90" stopOpacity="0.85" />
          <stop offset="50%" stopColor="#C89B3C" stopOpacity="0.65" />
          <stop offset="100%" stopColor="#A87723" stopOpacity="0.45" />
        </linearGradient>
      </defs>
      {/* Graceful Curved Stem */}
      <path
        d="M 20 210 C 40 160, 60 110, 130 20"
        stroke="url(#goldBranchGrad)"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      {/* Sculpted Leaves Branching Outward */}
      <path
        d="M 130 20 C 146 14, 156 30, 138 36 C 124 40, 118 28, 130 20 Z"
        fill="url(#goldBranchGrad)"
      />
      <path
        d="M 112 48 C 132 42, 142 58, 124 66 C 109 71, 103 58, 112 48 Z"
        fill="url(#goldBranchGrad)"
      />
      <path
        d="M 94 65 C 74 54, 67 70, 84 80 C 95 86, 102 76, 94 65 Z"
        fill="url(#goldBranchGrad)"
      />
      <path
        d="M 80 100 C 100 94, 108 112, 92 120 C 78 124, 71 112, 80 100 Z"
        fill="url(#goldBranchGrad)"
      />
      <path
        d="M 64 120 C 44 110, 37 126, 54 136 C 65 142, 72 130, 64 120 Z"
        fill="url(#goldBranchGrad)"
      />
      <path
        d="M 50 155 C 70 150, 78 168, 62 176 C 48 180, 42 168, 50 155 Z"
        fill="url(#goldBranchGrad)"
      />
      <path
        d="M 34 175 C 16 168, 10 184, 28 192 C 38 196, 44 186, 34 175 Z"
        fill="url(#goldBranchGrad)"
      />
    </svg>
  );
}

/* ─── Helper to generate tailored 3 tags per project ─────────────────────── */
function getProjectTags(project: ProjectItem): string[] {
  // Hardcoded exact match for top 4 reference cards
  if (project.id === "twilight-engineering") return ["Website", "Corporate", "UI/UX"];
  if (project.id === "italian-water-consultancy") return ["Website", "Consultancy", "UI/UX"];
  if (project.id === "erodu-eye-bank") return ["Website", "Healthcare", "UI/UX"];
  if (project.id === "pettagam-ecommerce") return ["Website", "E-commerce", "UI/UX"];

  // Smart derivation for remaining projects
  const tag1 = project.category === "Mobile Apps" ? "Mobile App" : "Website";
  
  let tag2 = "Digital Solution";
  const titleLower = project.title.toLowerCase();
  const summaryLower = project.summary.toLowerCase();

  if (titleLower.includes("school") || summaryLower.includes("education") || summaryLower.includes("learning")) {
    tag2 = "Education";
  } else if (titleLower.includes("tv") || summaryLower.includes("ott") || summaryLower.includes("streaming")) {
    tag2 = "Entertainment";
  } else if (titleLower.includes("clothing") || titleLower.includes("bakery") || titleLower.includes("ecommerce")) {
    tag2 = "E-Commerce";
  } else if (titleLower.includes("group") || summaryLower.includes("enterprise") || summaryLower.includes("industrial")) {
    tag2 = "Enterprise";
  } else if (titleLower.includes("eye") || titleLower.includes("pharmaceutical") || summaryLower.includes("health")) {
    tag2 = "Healthcare";
  } else if (project.technologies && project.technologies[0]) {
    tag2 = project.technologies[0];
  }

  const tag3 = "UI/UX";
  return [tag1, tag2, tag3];
}

/* ─── Main PortfolioTeaser Component ─────────────────────────────────────── */
export function PortfolioTeaser() {
  const [activeTab, setActiveTab] = useState("All");
  const [isExpanded, setIsExpanded] = useState(false);

  // Filter projects by active category tab
  const filteredProjects: ProjectItem[] = useMemo(() => {
    if (activeTab === "All") return PORTFOLIO_DATA;
    if (activeTab === "UI/UX") {
      return PORTFOLIO_DATA.filter(
        (p) =>
          p.category === "UI/UX" ||
          p.technologies?.some((t) => t.toLowerCase().includes("ui") || t.toLowerCase().includes("ux") || t.toLowerCase().includes("figma")) ||
          p.summary.toLowerCase().includes("ui/ux") ||
          p.summary.toLowerCase().includes("design")
      );
    }
    return PORTFOLIO_DATA.filter((p) => p.category === activeTab);
  }, [activeTab]);

  // Display initial 4 projects (like Image 2 reference) or all when expanded
  const displayedProjects = isExpanded ? filteredProjects : filteredProjects.slice(0, 4);

  // Switch tab and collapse back to 4 for smooth browsing
  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    setIsExpanded(false);
  };

  return (
    <section
      id="work"
      className="py-20 sm:py-24 lg:py-28 bg-[#FAF8F5] relative overflow-hidden select-none w-full border-b border-[#C6C2C1]/30"
    >
      {/* ── Global Wave Clip-Path Definitions (SVG ObjectBoundingBox) ───────── */}
      <svg className="absolute w-0 h-0 pointer-events-none" aria-hidden="true">
        <defs>
          {/* Wave Cut Variant A (Curved S-wave for Cards 1 & 3) */}
          <clipPath id="cardWaveCutA" clipPathUnits="objectBoundingBox">
            <path d="M 0.16,0 C 0.03,0.30 0.24,0.68 0.06,1 L 1,1 L 1,0 Z" />
          </clipPath>

          {/* Wave Cut Variant B (Sweeping Graceful Curve for Cards 2 & 4) */}
          <clipPath id="cardWaveCutB" clipPathUnits="objectBoundingBox">
            <path d="M 0.20,0 C 0.05,0.26 0.28,0.72 0.08,1 L 1,1 L 1,0 Z" />
          </clipPath>
        </defs>
      </svg>

      {/* ── Background Atmosphere & Ambient Lighting Elements ───────────────── */}
      <div className="absolute top-0 right-0 w-[650px] h-[650px] bg-amber-100/35 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute top-1/3 left-0 w-[600px] h-[600px] bg-purple-100/30 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-rose-100/25 rounded-full blur-[140px] pointer-events-none" />

      {/* Subtle Luxury Dotted Mesh */}
      <div className="absolute inset-0 bg-dot-light opacity-20 pointer-events-none" />

      {/* Elegant Golden Botanical Leaf Flourishes in Corners (as seen in Image 2) */}
      <div className="absolute top-4 right-4 sm:top-8 sm:right-8 opacity-45 pointer-events-none hidden md:block">
        <BotanicalFlourish className="w-32 sm:w-44 h-auto" />
      </div>
      <div className="absolute bottom-6 left-4 sm:bottom-12 sm:left-8 opacity-40 pointer-events-none hidden md:block">
        <BotanicalFlourish className="w-32 sm:w-44 h-auto" flip />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* ── Section Header (Exact Typography from Image 2) ────────────────── */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <RevealOnScroll>

            {/* Main Headline with Luxury Orbital Halo behind "Projects" */}
            <div className="relative inline-block mb-3">
              {/* Delicate Golden Circular Ring / Orbital Halo */}
              <svg
                className="absolute -top-3 -right-6 sm:-top-4 sm:-right-8 w-24 sm:w-32 h-20 sm:h-24 pointer-events-none opacity-80"
                viewBox="0 0 100 80"
                fill="none"
              >
                <ellipse
                  cx="52"
                  cy="38"
                  rx="44"
                  ry="28"
                  transform="rotate(-15 52 38)"
                  stroke="#C89B3C"
                  strokeWidth="1.2"
                  strokeDasharray="4 2.5"
                />
                <ellipse
                  cx="52"
                  cy="38"
                  rx="42"
                  ry="26"
                  transform="rotate(-15 52 38)"
                  stroke="#E2CA90"
                  strokeWidth="0.8"
                />
                <circle cx="86" cy="24" r="2.5" fill="#FCB116" />
              </svg>

              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#151515] tracking-tight leading-tight">
                Our{" "}
                <span className="text-[#502D6D] bg-gradient-to-r from-[#502D6D] via-[#6B21A8] to-[#9333EA] bg-clip-text text-transparent">
                  Projects
                </span>
              </h2>
            </div>

            {/* Subtitle */}
            <p className="text-sm sm:text-base text-[#544643] leading-relaxed max-w-lg mx-auto">
              A closer look at the work we build.
            </p>
          </RevealOnScroll>

          {/* ── Category Filter Pills (Exact Style from Image 2) ─────────────── */}
          <RevealOnScroll delay={0.1}>
            <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 mt-7 sm:mt-9">
              {CATEGORY_TABS.map((tab) => {
                const isActive = activeTab === tab.id;
                const Icon = tab.icon;

                return (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => handleTabChange(tab.id)}
                    className={`relative inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all duration-300 cursor-pointer select-none ${
                      isActive
                        ? "bg-[#38123C] text-white shadow-lg shadow-[#38123C]/25 border border-[#502D6D] scale-[1.02]"
                        : "bg-white/95 text-[#544643] hover:text-[#151515] border border-[#E5DFD9] shadow-xs hover:border-[#502D6D]/40 hover:bg-white"
                    }`}
                  >
                    {/* Active tab sliding highlight */}
                    {isActive && (
                      <motion.div
                        layoutId="activeFilterTabGlow"
                        transition={{ type: "spring", stiffness: 400, damping: 30 }}
                        className="absolute inset-0 rounded-full bg-gradient-to-r from-[#4A164B] via-[#351037] to-[#4A164B] -z-10"
                      />
                    )}

                    {/* Small dot for All or category icon */}
                    {tab.id === "All" ? (
                      <span className={`w-2 h-2 rounded-full ${isActive ? "bg-[#FCB116]" : "bg-[#544643]"}`} />
                    ) : (
                      <Icon className={`w-3.5 h-3.5 sm:w-4 sm:h-4 ${isActive ? "text-[#FCB116]" : "text-[#502D6D]"}`} />
                    )}

                    <span className="font-syne tracking-wide whitespace-nowrap">
                      {tab.label}
                    </span>
                  </button>
                );
              })}
            </div>
          </RevealOnScroll>
        </div>

        {/* ── 2x2 Bento Grid with Asymmetric Curved Cards ───────────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-7 sm:gap-8 lg:gap-9">
          <AnimatePresence mode="popLayout">
            {displayedProjects.map((project, idx) => {
              // Cycle through the tailored themes:
              // Index 0: Plum Luxury (exact Card 1 from Image 2)
              // Index 1: Cyan Water (exact Card 2 from Image 2)
              // Index 2: Medical Coral (exact Card 3 from Image 2)
              // Index 3: Timeless Gold (exact Card 4 from Image 2)
              const themeKeys: CardThemeVariant[] = ["plum", "cyan", "coral", "gold", "emerald", "purple"];
              const themeKey = themeKeys[idx % themeKeys.length];
              const theme = THEMES[themeKey];
              const tags = getProjectTags(project);

              // Alternate wave shape for adjacent cards
              const waveId = idx % 2 === 0 ? "cardWaveCutA" : "cardWaveCutB";
              const strokePath =
                idx % 2 === 0
                  ? "M 16,0 C 3,30 24,68 6,100"
                  : "M 20,0 C 5,26 28,72 8,100";

              return (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.45, delay: (idx % 4) * 0.08 }}
                  className="group relative"
                >
                  {/* Outer Luxury Card Shell */}
                  <div
                    className={`relative w-full rounded-[28px] sm:rounded-[32px] overflow-hidden border ${theme.cardBorder} ${theme.cardBg} ${theme.cardShadow} transition-all duration-500 hover:-translate-y-1.5 flex flex-col sm:flex-row min-h-[340px] sm:h-[350px] lg:h-[360px]`}
                  >
                    {/* Ambient Specular Outer Halo */}
                    <div
                      className="absolute -inset-1 rounded-[34px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none blur-xl -z-10"
                      style={{ backgroundColor: theme.ambientGlowColor }}
                    />

                    {/* Subtle dot texture inside the dark plum card (Card 1) */}
                    {theme.isDark && (
                      <div className="absolute inset-0 bg-dot-light opacity-15 pointer-events-none" />
                    )}

                    {/* ── Left Column: Project Details & Information ─────────── */}
                    <div className="w-full sm:w-[48%] lg:w-[46%] p-6 sm:p-7 lg:p-8 flex flex-col justify-between relative z-10 shrink-0">
                      <div>
                        {/* Upper Badge (e.g. WEBSITES, MOBILE APPS) */}
                        <div className="mb-3.5">
                          <span
                            className={`inline-block px-3.5 py-1.5 rounded-full text-[10px] sm:text-[11px] font-extrabold uppercase tracking-[0.16em] ${theme.badgeBg} ${theme.badgeText} ${theme.badgeBorder} shadow-xs`}
                          >
                            {project.category.toUpperCase()}
                          </span>
                        </div>

                        {/* Project Title */}
                        <Link
                          href={`/work/${project.slug}`}
                          className={`block font-syne text-xl sm:text-2xl font-black ${theme.titleColor} ${theme.titleHover} tracking-tight leading-tight transition-colors line-clamp-2 mb-2.5`}
                          title={project.title}
                        >
                          {project.title}
                        </Link>

                        {/* Project Summary Description */}
                        <p
                          className={`text-xs sm:text-[13px] ${theme.descColor} leading-relaxed line-clamp-3 mb-4`}
                        >
                          {project.summary}
                        </p>

                        {/* Tailored Pill Tags (e.g. [Website] [Corporate] [UI/UX]) */}
                        <div className="flex flex-wrap gap-1.5">
                          {tags.map((tag) => (
                            <span
                              key={tag}
                              className={`px-2.5 py-1 rounded-full text-[10px] sm:text-[11px] font-semibold ${theme.tagBg} ${theme.tagText} border ${theme.tagBorder} backdrop-blur-xs`}
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Bottom Action: Circular Button with Animated Arrow */}
                      <div className="mt-5 sm:mt-0 flex items-center justify-between">
                        <Link
                          href={`/work/${project.slug}`}
                          className={`inline-flex items-center justify-center w-10 h-10 sm:w-11 sm:h-11 rounded-full ${theme.btnBg} ${theme.btnText} ${theme.btnHoverBg} ${theme.btnHoverText} shadow-md transition-all duration-300 group-hover:scale-110`}
                          aria-label={`View ${project.title} Case Study`}
                        >
                          <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 group-hover:translate-x-1" />
                        </Link>

                        {/* Optional External Live Site Link */}
                        {project.liveUrl && project.liveUrl !== "#" && (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`inline-flex items-center gap-1.5 text-xs font-semibold ${theme.descColor} hover:${theme.titleColor} transition-colors p-1`}
                            title="Visit Live Website"
                          >
                            <span>Live Site</span>
                            <ExternalLink className="w-3.5 h-3.5" />
                          </a>
                        )}
                      </div>
                    </div>

                    {/* ── Right Column: Fluid Organic Curved Window & Image ──── */}
                    <div className="w-full sm:w-[58%] lg:w-[60%] sm:-ml-[6%] relative h-60 sm:h-full overflow-hidden self-stretch">
                      
                      {/* Masked Organic Image Showcase */}
                      <Link
                        href={`/work/${project.slug}`}
                        className="relative w-full h-full block group/img cursor-pointer"
                        style={{
                          clipPath: `url(#${waveId})`,
                        }}
                      >
                        {/* Background filler behind the image */}
                        <div className="absolute inset-0 bg-slate-900" />

                        {/* High-Resolution Project Showcase Image */}
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          quality={95}
                          priority={idx < 2}
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 620px"
                          className="object-cover object-center group-hover:scale-108 transition-transform duration-700 ease-out"
                        />

                        {/* Glass Specular Reflection Highlight */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-white/20 pointer-events-none opacity-60 group-hover:opacity-90 transition-opacity duration-500" />
                      </Link>

                      {/* ── Illuminated Specular Laser Seam along the S-Curve ── */}
                      <svg
                        className="absolute inset-0 w-full h-full pointer-events-none z-20"
                        viewBox="0 0 100 100"
                        preserveAspectRatio="none"
                      >
                        <defs>
                          <linearGradient
                            id={`rimGlow-${project.id}`}
                            x1="0%"
                            y1="0%"
                            x2="0%"
                            y2="100%"
                          >
                            <stop offset="0%" stopColor={theme.rimGradient.start} stopOpacity="0.95" />
                            <stop offset="45%" stopColor={theme.rimGradient.mid} stopOpacity="1" />
                            <stop offset="100%" stopColor={theme.rimGradient.end} stopOpacity="0.9" />
                          </linearGradient>
                        </defs>

                        {/* Ambient Outer Halo Blur */}
                        <path
                          d={strokePath}
                          fill="none"
                          stroke={theme.rimHaloColor}
                          strokeWidth="8"
                          className="opacity-70 blur-xs transition-opacity duration-300 group-hover:opacity-100"
                        />

                        {/* Laser-Crisp Specular Center Core Line */}
                        <path
                          d={strokePath}
                          fill="none"
                          stroke={`url(#rimGlow-${project.id})`}
                          strokeWidth="2.8"
                          strokeLinecap="round"
                          className="drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]"
                        />
                      </svg>
                    </div>

                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* ── Expandable "Load More / View All Projects" Button ─────────────── */}
        {filteredProjects.length > 4 && (
          <RevealOnScroll delay={0.2}>
            <div className="mt-12 sm:mt-14 text-center flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                type="button"
                onClick={() => setIsExpanded(!isExpanded)}
                className="group inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-[#151515] hover:bg-[#502D6D] text-white text-sm font-bold shadow-lg shadow-[#151515]/15 hover:shadow-[#502D6D]/25 transition-all duration-300 cursor-pointer"
              >
                <span>
                  {isExpanded
                    ? "Show Featured Projects"
                    : `View More Projects (${filteredProjects.length - 4} More)`}
                </span>
                <ChevronDown
                  className={`w-4 h-4 text-[#FCB116] transition-transform duration-300 ${
                    isExpanded ? "rotate-180" : "group-hover:translate-y-0.5"
                  }`}
                />
              </button>

            </div>
          </RevealOnScroll>
        )}

      </div>
    </section>
  );
}
