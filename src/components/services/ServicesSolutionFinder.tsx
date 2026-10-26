"use client";

import { useState } from "react";
import Link from "next/link";
import { 
  ArrowRight, 
  Globe, 
  Smartphone, 
  Cpu, 
  Cloud, 
  Palette, 
  TrendingUp, 
  CheckCircle2 
} from "lucide-react";
import { RevealOnScroll } from "@/components/shared/RevealOnScroll";

interface QuickChoice {
  id: string;
  question: string;
  solution: string;
  serviceId: string;
  icon: typeof Globe;
  accentColor: string;
  accentBg: string;
  rightArrowBg: string;
  rightArrowText: string;
  swooshGradId: string;
  swooshColor1: string;
  swooshColor2: string;
  swooshColor3: string;
  recommendation: string;
}

const QUICK_CHOICES: QuickChoice[] = [
  {
    id: "choice-web",
    question: "I need a new website",
    solution: "Website Development",
    serviceId: "service-01",
    icon: Globe,
    accentColor: "text-[#7C3AED]",
    accentBg: "bg-[#7C3AED]",
    rightArrowBg: "bg-purple-100 group-hover:bg-[#7C3AED]",
    rightArrowText: "text-[#7C3AED] group-hover:text-white",
    swooshGradId: "swooshPurple",
    swooshColor1: "#7C3AED",
    swooshColor2: "#8B5CF6",
    swooshColor3: "#A855F7",
    recommendation: "Modern, responsive Next.js web experiences engineered for lightning speed and conversion.",
  },
  {
    id: "choice-app",
    question: "I need a mobile application",
    solution: "Mobile App Development",
    serviceId: "service-02",
    icon: Smartphone,
    accentColor: "text-[#F59E0B]",
    accentBg: "bg-[#F59E0B]",
    rightArrowBg: "bg-amber-100 group-hover:bg-[#F59E0B]",
    rightArrowText: "text-[#F59E0B] group-hover:text-white",
    swooshGradId: "swooshAmber",
    swooshColor1: "#F59E0B",
    swooshColor2: "#F97316",
    swooshColor3: "#FB923C",
    recommendation: "High-performance iOS & Android applications with offline-first reliability and smooth UX.",
  },
  {
    id: "choice-software",
    question: "I want to automate my business",
    solution: "Custom Software",
    serviceId: "service-03",
    icon: Cpu,
    accentColor: "text-[#10B981]",
    accentBg: "bg-[#10B981]",
    rightArrowBg: "bg-emerald-100 group-hover:bg-[#10B981]",
    rightArrowText: "text-[#10B981] group-hover:text-white",
    swooshGradId: "swooshGreen",
    swooshColor1: "#10B981",
    swooshColor2: "#059669",
    swooshColor3: "#047857",
    recommendation: "Bespoke ERP, CRM, and workflow management systems built strictly around your company's processes.",
  },
  {
    id: "choice-uiux",
    question: "I need to improve an existing product",
    solution: "UI/UX / Product Development",
    serviceId: "service-05",
    icon: Palette,
    accentColor: "text-[#0EA5E9]",
    accentBg: "bg-[#0EA5E9]",
    rightArrowBg: "bg-sky-100 group-hover:bg-[#0EA5E9]",
    rightArrowText: "text-[#0EA5E9] group-hover:text-white",
    swooshGradId: "swooshCyan",
    swooshColor1: "#0EA5E9",
    swooshColor2: "#0284C7",
    swooshColor3: "#0369A1",
    recommendation: "Comprehensive heuristic audits, user flows, and modern design systems that elevate usability.",
  },
  {
    id: "choice-mktg",
    question: "I want more customers online",
    solution: "Digital Marketing",
    serviceId: "service-06",
    icon: TrendingUp,
    accentColor: "text-[#F43F5E]",
    accentBg: "bg-[#F43F5E]",
    rightArrowBg: "bg-rose-100 group-hover:bg-[#F43F5E]",
    rightArrowText: "text-[#F43F5E] group-hover:text-white",
    swooshGradId: "swooshRose",
    swooshColor1: "#F43F5E",
    swooshColor2: "#E11D48",
    swooshColor3: "#BE123C",
    recommendation: "Strategic SEO, Google Ads, and targeted social acquisition designed for quantifiable ROI.",
  },
  {
    id: "choice-saas",
    question: "I have a software product idea",
    solution: "SaaS Development",
    serviceId: "service-04",
    icon: Cloud,
    accentColor: "text-[#6366F1]",
    accentBg: "bg-[#6366F1]",
    rightArrowBg: "bg-indigo-100 group-hover:bg-[#6366F1]",
    rightArrowText: "text-[#6366F1] group-hover:text-white",
    swooshGradId: "swooshIndigo",
    swooshColor1: "#6366F1",
    swooshColor2: "#4F46E5",
    swooshColor3: "#4338CA",
    recommendation: "Full-cycle MVP to cloud production architecture with subscription management and multi-tenancy.",
  },
];

export function ServicesSolutionFinder() {
  const [selectedChoice, setSelectedChoice] = useState<string>("choice-web");

  const activeChoice = QUICK_CHOICES.find((c) => c.id === selectedChoice) || QUICK_CHOICES[0];
  const ActiveIcon = activeChoice.icon;

  const scrollToService = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section className="py-20 lg:py-28 bg-[radial-gradient(ellipse_at_50%_0%,#FFFFFF_0%,#FAF9FC_65%,#F5F3F8_100%)] border-b border-[#C6C2C1]/40 relative overflow-hidden">
      {/* ─── Background Decorative Design (Exact Reference Match) ─── */}
      {/* Top-Left: Large Purple Ambient Dome with Thin Contour Rings */}
      <div className="absolute -top-32 -left-32 w-[460px] h-[460px] lg:w-[560px] lg:h-[560px] rounded-full bg-gradient-to-br from-purple-200/50 via-purple-100/25 to-transparent pointer-events-none" />
      <div className="absolute -top-24 -left-24 w-[480px] h-[480px] lg:w-[600px] lg:h-[600px] rounded-full border border-purple-200/60 pointer-events-none" />
      <div className="absolute -top-12 -left-12 w-[380px] h-[380px] lg:w-[480px] lg:h-[480px] rounded-full border border-purple-200/35 pointer-events-none" />

      {/* Bottom-Left: Soft Purple Ambient Glow with Contour Ring */}
      <div className="absolute -bottom-24 -left-24 w-[380px] h-[380px] rounded-full bg-gradient-to-tr from-purple-200/40 via-purple-100/20 to-transparent pointer-events-none" />
      <div className="absolute -bottom-16 -left-16 w-[420px] h-[420px] rounded-full border border-purple-200/40 pointer-events-none" />

      {/* Top-Right: Large Warm Peach/Amber Ambient Dome with Thin Contour Rings */}
      <div className="absolute -top-32 -right-32 w-[460px] h-[460px] lg:w-[560px] lg:h-[560px] rounded-full bg-gradient-to-bl from-amber-200/45 via-orange-100/25 to-transparent pointer-events-none" />
      <div className="absolute -top-24 -right-24 w-[480px] h-[480px] lg:w-[600px] lg:h-[600px] rounded-full border border-amber-200/60 pointer-events-none" />
      <div className="absolute -top-12 -right-12 w-[380px] h-[380px] lg:w-[480px] lg:h-[480px] rounded-full border border-amber-200/35 pointer-events-none" />

      {/* Bottom-Right: Soft Rose/Warm Ambient Glow with Contour Ring */}
      <div className="absolute -bottom-24 -right-24 w-[380px] h-[380px] rounded-full bg-gradient-to-tl from-rose-100/40 via-amber-100/20 to-transparent pointer-events-none" />
      <div className="absolute -bottom-16 -right-16 w-[420px] h-[420px] rounded-full border border-rose-200/40 pointer-events-none" />

      {/* Left Dot Matrix Pattern (4 cols x 6 rows) */}
      <div className="absolute left-6 lg:left-12 top-48 hidden md:grid grid-cols-4 gap-2.5 opacity-40 pointer-events-none">
        {Array.from({ length: 24 }).map((_, i) => (
          <span key={i} className="w-1.5 h-1.5 rounded-full bg-[#9CA3AF]" />
        ))}
      </div>

      {/* Right Dot Matrix Pattern (4 cols x 6 rows) */}
      <div className="absolute right-6 lg:right-12 bottom-36 hidden md:grid grid-cols-4 gap-2.5 opacity-40 pointer-events-none">
        {Array.from({ length: 24 }).map((_, i) => (
          <span key={i} className="w-1.5 h-1.5 rounded-full bg-[#9CA3AF]" />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* ─── Section Header (Exact Reference Match) ─── */}
        <div className="text-center max-w-3xl mx-auto mb-14 lg:mb-16">
          <RevealOnScroll>
            {/* Accent Badge: — SOLUTION FINDER — */}
            <div className="inline-flex items-center justify-center gap-2 mb-3">
              <span className="w-5 h-[2px] rounded-full bg-[#7C3AED]" />
              <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#7C3AED]">
                SOLUTION FINDER
              </span>
              <span className="w-5 h-[2px] rounded-full bg-[#7C3AED]" />
            </div>

            {/* Heading: Not Sure What You Need? */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#111827] tracking-[-0.03em] leading-tight">
              Not Sure{" "}
              <span className="bg-gradient-to-r from-[#8B5CF6] via-[#A855F7] to-[#7C3AED] bg-clip-text text-transparent">
                What You Need?
              </span>
            </h2>

            {/* Description */}
            <p className="mt-4 text-base sm:text-lg text-[#4B5563] leading-relaxed">
              Tell us what you&apos;re trying to achieve. We&apos;ll help you identify the right digital solution.
            </p>
          </RevealOnScroll>
        </div>

        {/* ─── Interactive Two-Column Layout ─── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          {/* Left Column: Stack of Sleek Horizontal Pill Cards */}
          <div className="lg:col-span-7 space-y-4">
            <RevealOnScroll>
              <h3 className="text-xs font-bold uppercase tracking-widest text-[#6B7280] mb-4">
                SELECT YOUR GOAL:
              </h3>

              <div className="space-y-3.5">
                {QUICK_CHOICES.map((choice) => {
                  const isSelected = selectedChoice === choice.id;
                  const Icon = choice.icon;

                  return (
                    <button
                      key={choice.id}
                      type="button"
                      onClick={() => setSelectedChoice(choice.id)}
                      className={`group relative w-full min-h-[68px] sm:h-[72px] rounded-2xl sm:rounded-full bg-white border text-left flex items-center justify-between pr-4 sm:pr-5 pl-3 sm:pl-4 py-2.5 sm:py-0 transition-all duration-300 cursor-pointer overflow-hidden ${
                        isSelected
                          ? "border-[#7C3AED]/40 shadow-[0_12px_30px_rgba(124,58,237,0.12)] ring-2 ring-[#7C3AED]/20 scale-[1.01]"
                          : "border-gray-100 hover:border-gray-300 shadow-[0_4px_16px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.06)] hover:scale-[1.005]"
                      }`}
                    >
                      {/* Left Swoosh / Wave Flame Ribbon Background Graphic */}
                      <svg
                        className="absolute left-0 top-0 h-full w-[130px] pointer-events-none"
                        viewBox="0 0 130 72"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <defs>
                          <linearGradient
                            id={choice.swooshGradId}
                            x1="0"
                            y1="0"
                            x2="130"
                            y2="72"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop offset="0%" stopColor={choice.swooshColor1} />
                            <stop offset="60%" stopColor={choice.swooshColor2} />
                            <stop offset="100%" stopColor={choice.swooshColor3} />
                          </linearGradient>
                        </defs>

                        {/* Outer softer translucent wave ribbon */}
                        <path
                          d="M 36 0 C 16.12 0 0 16.12 0 36 C 0 55.88 16.12 72 36 72 H 125 C 92 72 65 52 65 36 C 65 20 90 0 115 0 Z"
                          fill={`url(#${choice.swooshGradId})`}
                          opacity="0.32"
                        />

                        {/* Main solid wave ribbon */}
                        <path
                          d="M 36 0 C 16.12 0 0 16.12 0 36 C 0 55.88 16.12 72 36 72 H 105 C 78 72 52 52 52 36 C 52 20 74 0 94 0 Z"
                          fill={`url(#${choice.swooshGradId})`}
                        />
                      </svg>

                      {/* Icon Badge Container */}
                      <div className="relative z-10 w-11 h-11 rounded-full bg-white/20 backdrop-blur-xs flex items-center justify-center shrink-0 shadow-[inset_0_1px_2px_rgba(255,255,255,0.4)] transition-transform duration-300 group-hover:scale-105">
                        <Icon className="w-5 h-5 text-white" />
                      </div>

                      {/* Card Text Content */}
                      <div className="flex-1 min-w-0 pl-3 sm:pl-4 pr-2">
                        <div className="text-sm sm:text-base font-bold text-[#111827] truncate group-hover:text-[#111827]">
                          &ldquo;{choice.question}&rdquo;
                        </div>
                        <div className={`text-xs font-semibold ${choice.accentColor} flex items-center gap-1 mt-0.5`}>
                          <span>→</span>
                          <span className="truncate">{choice.solution}</span>
                        </div>
                      </div>

                      {/* Right Circular Arrow Button */}
                      <div
                        className={`relative z-10 w-9 h-9 rounded-full ${choice.rightArrowBg} flex items-center justify-center shrink-0 transition-all duration-300 group-hover:translate-x-1`}
                      >
                        <ArrowRight className={`w-4 h-4 ${choice.rightArrowText} stroke-[2.5]`} />
                      </div>
                    </button>
                  );
                })}
              </div>
            </RevealOnScroll>
          </div>

          {/* Right Column: Tailored Recommendation Box (Exact Match to Reference) */}
          <div className="lg:col-span-5">
            <RevealOnScroll delay={0.15}>
              <div className="rounded-[32px] bg-white border border-gray-100 p-7 sm:p-8 shadow-[0_20px_50px_rgba(0,0,0,0.05),0_2px_8px_rgba(0,0,0,0.02)] relative overflow-hidden">
                {/* Header: Recommended Match & Circular Icon */}
                <div className="flex items-center justify-between pb-6 border-b border-gray-100">
                  <div>
                    <span className="text-xs uppercase tracking-wider text-[#6B7280] font-bold block mb-1">
                      RECOMMENDED MATCH
                    </span>
                    <h4 className="text-2xl sm:text-3xl font-extrabold text-[#111827] tracking-tight">
                      {activeChoice.solution}
                    </h4>
                  </div>
                  <div className="w-14 h-14 rounded-full bg-purple-50 text-[#7C3AED] flex items-center justify-center shrink-0 shadow-inner">
                    <ActiveIcon className="w-7 h-7 text-[#7C3AED]" />
                  </div>
                </div>

                {/* Body Content */}
                <div className="pt-6 space-y-6">
                  <div>
                    <div className="text-xs uppercase tracking-wider text-[#6B7280] font-bold mb-2">
                      WHY THIS FITS YOUR REQUIREMENT:
                    </div>
                    <p className="text-sm sm:text-base text-[#374151] leading-relaxed">
                      {activeChoice.recommendation}
                    </p>
                  </div>

                  {/* 3 Value Checklist Items with Green Checkmark Icons */}
                  <div className="space-y-3 pt-1">
                    <div className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-emerald-50 flex items-center justify-center shrink-0">
                        <CheckCircle2 className="w-4 h-4 text-[#059669]" />
                      </div>
                      <span className="text-xs sm:text-sm font-medium text-[#374151]">
                        Free initial technical feasibility audit
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-emerald-50 flex items-center justify-center shrink-0">
                        <CheckCircle2 className="w-4 h-4 text-[#059669]" />
                      </div>
                      <span className="text-xs sm:text-sm font-medium text-[#374151]">
                        Transparent scope, milestones & fixed pricing
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-emerald-50 flex items-center justify-center shrink-0">
                        <CheckCircle2 className="w-4 h-4 text-[#059669]" />
                      </div>
                      <span className="text-xs sm:text-sm font-medium text-[#374151]">
                        Dedicated team & regular sprint reviews
                      </span>
                    </div>
                  </div>

                  {/* Action Buttons: View Service Details & Discuss This */}
                  <div className="pt-4 flex flex-col sm:flex-row items-center gap-3">
                    <button
                      type="button"
                      onClick={() => scrollToService(activeChoice.serviceId)}
                      className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-[#F3F4F6] hover:bg-gray-200 text-[#111827] text-xs font-bold transition-all cursor-pointer text-center"
                    >
                      View Service Details
                    </button>
                    <Link
                      href={`/contact?service=${encodeURIComponent(activeChoice.solution)}`}
                      className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-[#111827] hover:bg-[#7C3AED] text-white text-xs font-bold transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md shadow-[#111827]/10"
                    >
                      <span>Discuss This</span>
                      <span className="w-5 h-5 rounded-full bg-[#F59E0B] text-black flex items-center justify-center">
                        <ArrowRight className="w-3 h-3 text-black stroke-[2.5]" />
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </div>
    </section>
  );
}
