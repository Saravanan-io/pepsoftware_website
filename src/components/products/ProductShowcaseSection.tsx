"use client";

import React, { useState } from "react";
import {
  Smartphone,
  MapPin,
  CalendarCheck,
  BarChart2,
  Package,
  Clock,
  Layers,
  Activity,
  AlertTriangle,
  FileText,
  CheckCircle2,
  Users,
  ShieldCheck,
  Briefcase,
  Wrench,
  Search,
  Bell,
  ArrowRight,
  Calendar,
  Check,
  ChevronRight,
  Settings,
  TrendingUp,
  LucideIcon,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { RevealOnScroll } from "@/components/shared/RevealOnScroll";
import { ProductDetailData } from "@/data/products";

interface ProductShowcaseSectionProps {
  showcase: ProductDetailData["showcase"];
  productName: string;
  onOpenDemo: () => void;
}

/* ─── Icon Map for Category Filter Tabs ──────────────────────────────────── */
const TAB_ICONS: LucideIcon[] = [
  Smartphone,
  MapPin,
  CalendarCheck,
  BarChart2,
  Package,
];

/* ─── Tailored 3 Feature Highlights per Screen Group (Image 2 style) ─────── */
interface FeatureHighlightItem {
  icon: LucideIcon;
  iconBg: string;
  iconColor: string;
  title: string;
  desc: string;
}

const TAB_FEATURE_HIGHLIGHTS: Record<string, FeatureHighlightItem[]> = {
  "employee-attendance": [
    {
      icon: Clock,
      iconBg: "bg-[#ECFDF5] border border-[#A7F3D0]",
      iconColor: "text-[#059669]",
      title: "Real-Time Session Tracking",
      desc: "Instant check-in, check-out and working-time calculation.",
    },
    {
      icon: Layers,
      iconBg: "bg-[#FEF3C7] border border-[#FDE68A]",
      iconColor: "text-[#D97706]",
      title: "Multiple Session Support",
      desc: "Manage multiple attendance sessions and break times.",
    },
    {
      icon: MapPin,
      iconBg: "bg-[#F0FDF4] border border-[#BBF7D0]",
      iconColor: "text-[#16A34A]",
      title: "Location & Device Details",
      desc: "Capture location, device and session details for verification.",
    },
  ],
  "location-monitoring": [
    {
      icon: MapPin,
      iconBg: "bg-[#ECFDF5] border border-[#A7F3D0]",
      iconColor: "text-[#059669]",
      title: "Geofence Verification",
      desc: "Configured work-site permitted radius check with instant validation.",
    },
    {
      icon: Activity,
      iconBg: "bg-[#FEF3C7] border border-[#FDE68A]",
      iconColor: "text-[#D97706]",
      title: "Periodic GPS Auditing",
      desc: "Continuous location checks during active sessions to ensure presence.",
    },
    {
      icon: AlertTriangle,
      iconBg: "bg-[#FFF1F2] border border-[#FECDD3]",
      iconColor: "text-[#E11D48]",
      title: "Out-of-Bounds Alert Queues",
      desc: "Automatic missing location-update alerts and breach notifications.",
    },
  ],
  "leave-tasks": [
    {
      icon: CalendarCheck,
      iconBg: "bg-[#ECFDF5] border border-[#A7F3D0]",
      iconColor: "text-[#059669]",
      title: "Formal Leave Requests",
      desc: "Submission workflow with dates, reason notes, and balance overview.",
    },
    {
      icon: FileText,
      iconBg: "bg-[#FEF3C7] border border-[#FDE68A]",
      iconColor: "text-[#D97706]",
      title: "Secure Digital Payslips",
      desc: "Confidential employee payslip information view ready for review.",
    },
    {
      icon: CheckCircle2,
      iconBg: "bg-[#F0FDF4] border border-[#BBF7D0]",
      iconColor: "text-[#16A34A]",
      title: "Assigned Task Workflows",
      desc: "Real-time task progress updates with instructions and checklists.",
    },
  ],
  "admin-overview": [
    {
      icon: Users,
      iconBg: "bg-[#ECFDF5] border border-[#A7F3D0]",
      iconColor: "text-[#059669]",
      title: "Real-Time Headcount",
      desc: "Instant metrics for present, late, on-leave, and absent personnel.",
    },
    {
      icon: AlertTriangle,
      iconBg: "bg-[#FFF1F2] border border-[#FECDD3]",
      iconColor: "text-[#E11D48]",
      title: "Exception Investigation",
      desc: "Out-of-bounds and missing-update alert queues requiring supervisor review.",
    },
    {
      icon: ShieldCheck,
      iconBg: "bg-[#F3E8FF] border border-[#DDD6FE]",
      iconColor: "text-[#7C3AED]",
      title: "Administrative Control",
      desc: "Force checkout or session continuation actions with full daybook audit.",
    },
  ],
  "admin-operations": [
    {
      icon: Package,
      iconBg: "bg-[#ECFDF5] border border-[#A7F3D0]",
      iconColor: "text-[#059669]",
      title: "Material Indent Creation",
      desc: "Digital material requisitions with automated dispatch and receipt logs.",
    },
    {
      icon: Wrench,
      iconBg: "bg-[#FEF3C7] border border-[#FDE68A]",
      iconColor: "text-[#D97706]",
      title: "Tool Inventory & Repairs",
      desc: "Equipment request approvals, check-outs, and repair workflow records.",
    },
    {
      icon: Briefcase,
      iconBg: "bg-[#F0FDF4] border border-[#BBF7D0]",
      iconColor: "text-[#16A34A]",
      title: "Customer Site Directory",
      desc: "Customer premises records, on-site contacts, and comprehensive audit history.",
    },
  ],
};

/* ─── Tropical Leaves SVG Artwork (Image 2 style) ────────────────────────── */
function TropicalLeaves({ className = "" }: { className?: string }) {
  return (
    <svg
      className={`pointer-events-none select-none ${className}`}
      viewBox="0 0 180 220"
      fill="none"
    >
      <defs>
        <linearGradient id="leafGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#22C55E" />
          <stop offset="50%" stopColor="#15803D" />
          <stop offset="100%" stopColor="#14532D" />
        </linearGradient>
        <linearGradient id="leafGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#4ADE80" />
          <stop offset="60%" stopColor="#16A34A" />
          <stop offset="100%" stopColor="#166534" />
        </linearGradient>
      </defs>
      {/* Palm Leaf 1 */}
      <path
        d="M 170 210 C 130 180, 80 120, 20 20 C 50 50, 90 90, 110 140 C 130 190, 150 200, 170 210 Z"
        fill="url(#leafGrad1)"
        opacity="0.85"
      />
      {/* Palm Leaf 2 */}
      <path
        d="M 180 190 C 120 160, 60 90, 40 10 C 70 40, 120 80, 140 130 C 160 170, 170 180, 180 190 Z"
        fill="url(#leafGrad2)"
        opacity="0.9"
      />
      {/* Leaflet Accent */}
      <path
        d="M 160 150 C 120 120, 90 60, 80 30 C 100 50, 130 90, 150 130 Z"
        fill="#86EFAC"
        opacity="0.7"
      />
    </svg>
  );
}

/* ─── Main ProductShowcaseSection Component ──────────────────────────────── */
export function ProductShowcaseSection({
  showcase,
  productName,
  onOpenDemo,
}: ProductShowcaseSectionProps) {
  const [activeTabIdx, setActiveTabIdx] = useState(0);
  const activeGroup = showcase.screenGroups[activeTabIdx] || showcase.screenGroups[0];
  const features =
    TAB_FEATURE_HIGHLIGHTS[activeGroup.id] ||
    TAB_FEATURE_HIGHLIGHTS["employee-attendance"];

  return (
    <section className="py-20 lg:py-28 bg-[#FFFFFF] relative overflow-hidden select-none border-b border-[#C6C2C1]/30">
      
      {/* ── Background Organic Champagne Fluid Waves & Ambience ─────────────── */}
      <div className="absolute top-0 inset-x-0 h-[700px] bg-gradient-to-b from-[#FFF9F2] via-[#FFF3E8] to-[#FFFFFF] pointer-events-none -z-10" />
      <div className="absolute top-1/4 -left-32 w-[600px] h-[600px] bg-amber-100/40 rounded-full blur-[150px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-0 w-[550px] h-[550px] bg-purple-100/30 rounded-full blur-[150px] pointer-events-none -z-10" />

      {/* Playful Floating Confetti Dashes (Image 2 style) */}
      <div className="absolute top-28 left-8 sm:left-14 flex gap-1.5 pointer-events-none opacity-80">
        <span className="w-1.5 h-5 rounded-full bg-[#EA580C] transform -rotate-45" />
        <span className="w-1.5 h-3.5 rounded-full bg-[#EA580C] transform rotate-12 mt-1" />
      </div>
      <div className="absolute top-44 right-8 sm:right-16 flex gap-1.5 pointer-events-none opacity-70">
        <span className="w-1.5 h-4.5 rounded-full bg-[#7C3AED] transform rotate-45" />
        <span className="w-1.5 h-3 rounded-full bg-[#7C3AED] transform -rotate-12 mt-1" />
      </div>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* ── Section Header (Exact Style from Image 2) ─────────────────────── */}
        <div className="text-center max-w-4xl mx-auto mb-10 sm:mb-14">
          <RevealOnScroll>
            {/* Tagline Badge: "— 👥 Workforce Management —" */}
            <div className="inline-flex items-center gap-3 mb-3">
              <span className="w-7 sm:w-9 h-[1.5px] rounded-full bg-gradient-to-r from-transparent via-[#C86A28] to-[#EA580C]" />
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FFF7ED] text-[#EA580C] border border-[#FDBA74]/60 shadow-2xs">
                <Users className="w-3.5 h-3.5 text-[#EA580C]" />
                <span className="font-syne text-xs sm:text-sm font-extrabold tracking-wide">
                  Workforce Management
                </span>
              </div>
              <span className="w-7 sm:w-9 h-[1.5px] rounded-full bg-gradient-to-l from-transparent via-[#C86A28] to-[#EA580C]" />
            </div>

            {/* Main Headline: Two-Tone Typography */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#151515] tracking-tight leading-[1.15] mt-1">
              Explore the Attendance and<br className="hidden sm:inline" />{" "}
              <span className="text-[#064E3B] bg-gradient-to-r from-[#064E3B] via-[#059669] to-[#10B981] bg-clip-text text-transparent">
                Workforce Management Experience
              </span>
            </h2>

            {/* Subtitle */}
            <p className="mt-4 text-sm sm:text-base text-[#544643] leading-relaxed max-w-2xl mx-auto">
              {showcase.intro}
            </p>
          </RevealOnScroll>
        </div>

        {/* ── Centered Two-Row Category Filter Pills (Exact Image 2 Layout) ──── */}
        <RevealOnScroll delay={0.1}>
          <div className="flex flex-col items-center gap-3 mb-12 sm:mb-16">
            
            {/* Row 1: First 3 Categories */}
            <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3">
              {showcase.screenGroups.slice(0, 3).map((group, idx) => {
                const isActive = activeTabIdx === idx;
                const Icon = TAB_ICONS[idx % TAB_ICONS.length];

                return (
                  <button
                    key={group.id}
                    type="button"
                    onClick={() => setActiveTabIdx(idx)}
                    className={`relative inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all duration-300 cursor-pointer select-none ${
                      isActive
                        ? "bg-[#064E3B] text-white shadow-lg shadow-[#064E3B]/25 border border-[#047857] scale-[1.02]"
                        : "bg-white/95 text-[#475569] hover:text-[#0F172A] border border-[#E2E8F0] shadow-xs hover:border-[#064E3B]/40 hover:bg-white"
                    }`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="activeShowcaseTabGlow"
                        transition={{ type: "spring", stiffness: 420, damping: 32 }}
                        className="absolute inset-0 rounded-full bg-[#064E3B] -z-10"
                      />
                    )}
                    <Icon className={`w-4 h-4 ${isActive ? "text-[#34D399]" : "text-[#059669]"}`} />
                    <span className="font-syne tracking-wide whitespace-nowrap">
                      {group.title}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Row 2: Next 2 Categories */}
            <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3">
              {showcase.screenGroups.slice(3, 5).map((group, idx) => {
                const actualIdx = idx + 3;
                const isActive = activeTabIdx === actualIdx;
                const Icon = TAB_ICONS[actualIdx % TAB_ICONS.length];

                return (
                  <button
                    key={group.id}
                    type="button"
                    onClick={() => setActiveTabIdx(actualIdx)}
                    className={`relative inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all duration-300 cursor-pointer select-none ${
                      isActive
                        ? "bg-[#064E3B] text-white shadow-lg shadow-[#064E3B]/25 border border-[#047857] scale-[1.02]"
                        : "bg-white/95 text-[#475569] hover:text-[#0F172A] border border-[#E2E8F0] shadow-xs hover:border-[#064E3B]/40 hover:bg-white"
                    }`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="activeShowcaseTabGlow"
                        transition={{ type: "spring", stiffness: 420, damping: 32 }}
                        className="absolute inset-0 rounded-full bg-[#064E3B] -z-10"
                      />
                    )}
                    <Icon className={`w-4 h-4 ${isActive ? "text-[#34D399]" : "text-[#059669]"}`} />
                    <span className="font-syne tracking-wide whitespace-nowrap">
                      {group.title}
                    </span>
                  </button>
                );
              })}
            </div>

          </div>
        </RevealOnScroll>

        {/* ── Main Showcase Grid (Left: Highlights | Right: Dual Device Mockup) ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* ── Left Column: Title, Subtitle, and 3 Feature Cards ─────────────── */}
          <div className="lg:col-span-5 xl:col-span-4 flex flex-col justify-between">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeGroup.id}
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 16 }}
                transition={{ duration: 0.35 }}
                className="space-y-6"
              >
                {/* Pill Badge */}
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFF3E8] text-[#EA580C] border border-[#FED7AA] text-xs font-bold shadow-2xs">
                  <Smartphone className="w-3.5 h-3.5 text-[#EA580C]" />
                  <span>{activeGroup.badge}</span>
                </div>

                {/* Main Category Title */}
                <h3 className="font-syne text-2xl sm:text-3xl lg:text-[32px] font-black text-[#151515] tracking-tight leading-[1.15]">
                  {activeGroup.title}
                </h3>

                {/* Category Subtitle */}
                <p className="text-sm sm:text-base text-[#544643] leading-relaxed">
                  {activeGroup.description}
                </p>

                {/* 3 Rich Feature Highlight Cards (Exact Style from Image 2) */}
                <div className="space-y-3.5 pt-2">
                  {features.map((feat, fIdx) => {
                    const FIcon = feat.icon;
                    return (
                      <div
                        key={fIdx}
                        className="flex items-start gap-3.5 sm:gap-4 p-3.5 sm:p-4 rounded-2xl bg-white/85 hover:bg-white border border-slate-200/70 hover:border-[#059669]/40 shadow-xs hover:shadow-md transition-all duration-300 group"
                      >
                        <div
                          className={`w-11 h-11 sm:w-12 sm:h-12 rounded-2xl ${feat.iconBg} ${feat.iconColor} flex items-center justify-center shrink-0 shadow-2xs group-hover:scale-108 transition-transform duration-300`}
                        >
                          <FIcon className="w-5 h-5 sm:w-6 sm:h-6" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="font-syne text-sm sm:text-base font-bold text-[#151515] tracking-tight group-hover:text-[#064E3B] transition-colors">
                            {feat.title}
                          </h4>
                          <p className="text-xs sm:text-[13px] text-[#544643] leading-relaxed mt-0.5">
                            {feat.desc}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Live Demo Trigger Button */}
                <div className="pt-2">
                  <button
                    type="button"
                    onClick={onOpenDemo}
                    className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#064E3B] hover:text-[#059669] transition-colors cursor-pointer group"
                  >
                    <span>Experience this in a live demo session</span>
                    <ArrowRight className="w-4 h-4 text-[#EA580C] group-hover:translate-x-1.5 transition-transform" />
                  </button>
                </div>

              </motion.div>
            </AnimatePresence>
          </div>

          {/* ── Right Column: Dual Device Mockup (Phone + Tablet Dashboard) ──── */}
          <div className="lg:col-span-7 xl:col-span-8 relative">
            <RevealOnScroll delay={0.15}>
              
              {/* Botanical Leaves Peeking Behind Mockup Window (z-index behind so it never blocks table) */}
              <div className="absolute -bottom-10 -right-10 pointer-events-none hidden sm:block -z-10 opacity-75">
                <TropicalLeaves className="w-40 sm:w-48 h-auto drop-shadow-md" />
              </div>

              {/* Overlapping Dual Device Stage with Balanced Alignment */}
              <div className="relative flex flex-col lg:flex-row items-center lg:items-start justify-center pt-2 pb-6">
                
                {/* ── FOREGROUND: Smartphone Mockup ─────────────────────────── */}
                <motion.div
                  key={`phone-${activeGroup.id}`}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  className="w-[275px] sm:w-[290px] rounded-[42px] bg-[#1E293B] p-2.5 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.4),0_0_25px_rgba(6,78,59,0.18)] border-4 border-[#334155] relative z-20 shrink-0 lg:-mr-12 lg:translate-y-4 mb-6 lg:mb-0"
                >
                  {/* Phone Screen Glass Base */}
                  <div className="rounded-[34px] bg-[#F8FAFC] overflow-hidden flex flex-col justify-between border border-slate-200/50 min-h-[485px] p-4 text-[#151515]">
                    
                    {/* Top Notch & Status Bar */}
                    <div>
                      <div className="w-20 h-3.5 bg-black rounded-full mx-auto mb-2" />
                      <div className="flex items-center justify-between text-[10px] font-bold text-slate-500 px-1 mb-2.5">
                        <span>9:41</span>
                        <div className="flex items-center gap-1.5">
                          <span className="w-2.5 h-2 bg-slate-500 rounded-2xs" />
                          <span className="w-3.5 h-2 border border-slate-500 rounded-2xs flex items-center p-0.5">
                            <span className="w-full h-full bg-slate-500 rounded-3xs" />
                          </span>
                        </div>
                      </div>

                      {/* User Greeting & Profile (Pep Software) */}
                      <div className="flex items-center justify-between mb-3.5 px-1 pb-2 border-b border-slate-100">
                        <div>
                          <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                            Good Morning
                          </span>
                          <span className="text-sm font-extrabold text-[#151515] block leading-tight">
                            Pep Software
                          </span>
                          <span className="text-[10px] text-slate-400 font-medium block mt-0.5">
                            Today, 28 Oct 2026
                          </span>
                        </div>
                        <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#502D6D] via-[#7C3AED] to-[#A855F7] flex items-center justify-center text-white font-extrabold text-xs shadow-sm ring-2 ring-purple-100">
                          P
                        </div>
                      </div>

                      {/* ── Phone Interactive Hero Widget by Active Category ── */}
                      {activeTabIdx === 0 && (
                        <div className="my-2.5">
                          {/* Modern Check-in Status Card */}
                          <div className="p-3.5 rounded-xl bg-white border border-slate-200/90 shadow-2xs">
                            <div className="flex items-center justify-between mb-2">
                              <span className="text-[11px] font-bold text-slate-500">
                                Daily Attendance
                              </span>
                              <span className="inline-flex items-center gap-1 text-[9px] font-bold text-[#059669] bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200/70">
                                <span className="w-1.5 h-1.5 rounded-full bg-[#059669] animate-pulse" />
                                Checked In
                              </span>
                            </div>
                            <div className="flex items-baseline justify-between">
                              <span className="text-2xl font-black text-[#151515] font-mono tracking-tight">
                                09:02 <span className="text-xs font-bold text-slate-400">AM</span>
                              </span>
                              <span className="text-[10px] font-bold text-[#059669] bg-emerald-50 px-2 py-0.5 rounded-md">
                                On Time
                              </span>
                            </div>
                          </div>

                          {/* Two Stat Badges */}
                          <div className="grid grid-cols-2 gap-2 mt-2.5">
                            <div className="p-2.5 rounded-lg bg-slate-50/80 border border-slate-200/80 border-l-[3px] border-l-amber-500 text-left">
                              <span className="text-[9px] text-slate-500 font-semibold block flex items-center gap-1">
                                <Clock className="w-2.5 h-2.5 text-amber-500" /> Working Hrs
                              </span>
                              <span className="text-xs font-black text-[#151515] mt-0.5 block">
                                05h 42m
                              </span>
                            </div>
                            <div className="p-2.5 rounded-lg bg-slate-50/80 border border-slate-200/80 border-l-[3px] border-l-[#059669] text-left">
                              <span className="text-[9px] text-slate-500 font-semibold block flex items-center gap-1">
                                <MapPin className="w-2.5 h-2.5 text-emerald-500" /> Location
                              </span>
                              <span className="text-xs font-black text-[#151515] mt-0.5 block truncate">
                                HQ Campus
                              </span>
                            </div>
                          </div>
                        </div>
                      )}

                      {activeTabIdx === 1 && (
                        <div className="my-2.5 p-3 rounded-2xl bg-white border border-slate-200/80 shadow-2xs">
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-[10px] font-bold text-[#059669] flex items-center gap-1">
                              <span className="w-2 h-2 rounded-full bg-[#059669] animate-ping" />
                              GPS Verified
                            </span>
                            <span className="text-[9px] font-mono text-slate-400">Radius: 150m</span>
                          </div>
                          <div className="h-20 rounded-xl bg-slate-100 border border-slate-200 relative overflow-hidden flex items-center justify-center">
                            <div className="w-16 h-16 rounded-full border-2 border-emerald-400 bg-emerald-100/40 animate-pulse flex items-center justify-center">
                              <MapPin className="w-5 h-5 text-[#059669]" />
                            </div>
                          </div>
                          <span className="text-[10px] font-bold text-[#151515] block mt-2 truncate">
                            Surampatty Operations Facility
                          </span>
                          <span className="text-[9px] font-mono text-slate-500 block">
                            11.3410° N, 77.7172° E
                          </span>
                        </div>
                      )}

                      {activeTabIdx === 2 && (
                        <div className="my-2.5 p-3 rounded-2xl bg-white border border-slate-200/80 shadow-2xs">
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-[11px] font-bold text-[#151515]">Leave Balance</span>
                            <span className="text-[10px] font-bold text-[#059669]">18 Days Left</span>
                          </div>
                          <div className="p-2 rounded-xl bg-[#F0FDF4] border border-[#BBF7D0] mb-1.5">
                            <span className="text-[10px] font-bold text-[#166534] block">
                              #LR-842: Approved
                            </span>
                            <span className="text-[9px] text-[#15803D] block">
                              Oct 30 - Oct 31 (2 Days)
                            </span>
                          </div>
                          <div className="p-2 rounded-xl bg-slate-50 border border-slate-200">
                            <span className="text-[10px] font-bold text-slate-700 block">
                              Task: Electrical Inspection
                            </span>
                            <span className="text-[9px] text-slate-500 block">
                              In Progress • Checklist Attached
                            </span>
                          </div>
                        </div>
                      )}

                      {activeTabIdx === 3 && (
                        <div className="my-2.5 p-3 rounded-xl bg-white border border-slate-200/90 shadow-2xs">
                          {/* Modern Header with Live Pulse */}
                          <div className="flex items-center justify-between mb-2.5">
                            <span className="text-[11px] font-extrabold text-[#151515] tracking-tight">
                              Live Headcount
                            </span>
                            <span className="inline-flex items-center gap-1 text-[9px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200/70">
                              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                              Live Sync
                            </span>
                          </div>

                          {/* Modern Rectangular Metric Cards (No round capsules) */}
                          <div className="grid grid-cols-2 gap-2 mb-2.5">
                            <div className="p-2.5 rounded-lg bg-slate-50/90 border border-slate-200/80 border-l-[3px] border-l-[#059669]">
                              <div className="flex items-center justify-between text-[9px] text-slate-500 font-semibold mb-0.5">
                                <span>Present</span>
                                <span className="font-bold text-[#059669]">90.6%</span>
                              </div>
                              <span className="text-lg font-black text-[#151515] block">
                                116
                              </span>
                            </div>

                            <div className="p-2.5 rounded-lg bg-slate-50/90 border border-slate-200/80 border-l-[3px] border-l-rose-500">
                              <div className="flex items-center justify-between text-[9px] text-slate-500 font-semibold mb-0.5">
                                <span>Alerts</span>
                                <span className="font-bold text-rose-600">Action</span>
                              </div>
                              <span className="text-lg font-black text-rose-600 block">
                                2
                              </span>
                            </div>
                          </div>

                          {/* Progress Track and Roster Count */}
                          <div className="pt-2 border-t border-slate-100">
                            <div className="flex items-center justify-between text-[9px] text-slate-500 mb-1">
                              <span className="font-medium">Total Active Roster</span>
                              <span className="font-bold text-slate-700 font-mono">116 / 128</span>
                            </div>
                            <div className="h-1.5 w-full bg-slate-100 rounded-sm overflow-hidden flex">
                              <div className="h-full bg-[#059669]" style={{ width: "90.6%" }} />
                              <div className="h-full bg-rose-500" style={{ width: "1.6%" }} />
                            </div>
                          </div>
                        </div>
                      )}

                      {activeTabIdx === 4 && (
                        <div className="my-2.5 p-3 rounded-2xl bg-white border border-slate-200/80 shadow-2xs">
                          <span className="text-[11px] font-bold text-[#151515] block mb-2">
                            Requisitions & Tools
                          </span>
                          <div className="space-y-1.5">
                            <div className="p-2 rounded-xl bg-[#F0FDF4] border border-[#BBF7D0]">
                              <span className="text-[10px] font-bold text-[#166534] block">
                                MI-409: Approved for Dispatch
                              </span>
                              <span className="text-[9px] text-slate-500 block">
                                50m Optical Fiber Spool
                              </span>
                            </div>
                            <div className="p-2 rounded-xl bg-slate-50 border border-slate-200">
                              <span className="text-[10px] font-bold text-slate-700 block">
                                TR-218: Issued
                              </span>
                              <span className="text-[9px] text-slate-500 block">
                                Digital Multimeter Fluke 115
                              </span>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Bottom Primary Action Button */}
                    <div className="mt-2">
                      <button
                        type="button"
                        onClick={onOpenDemo}
                        className="w-full py-2.5 rounded-xl bg-[#059669] hover:bg-[#047857] text-white text-xs font-bold shadow-md transition-all cursor-pointer"
                      >
                        {activeTabIdx === 0
                          ? "Check Out"
                          : activeTabIdx === 1
                          ? "Verify Current GPS"
                          : activeTabIdx === 2
                          ? "Submit Request"
                          : "Review Queue"}
                      </button>

                      {/* Mobile App Bottom Tab Bar */}
                      <div className="flex items-center justify-around pt-2.5 border-t border-slate-200/70 text-slate-400 text-[9px] mt-2">
                        <span className="text-[#059669] font-bold">Home</span>
                        <span>Attendance</span>
                        <span>Tasks</span>
                        <span>More</span>
                      </div>
                    </div>

                  </div>
                </motion.div>

                {/* ── BACKGROUND: Desktop Dashboard Window with Sidebar (Image 2 style) ── */}
                <motion.div
                  key={`dashboard-${activeGroup.id}`}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4 }}
                  className="w-full flex-1 min-w-0 z-10"
                >
                  <div className="rounded-[26px] sm:rounded-[30px] bg-white border border-slate-200/90 shadow-[0_20px_50px_rgba(0,0,0,0.08)] overflow-hidden flex flex-col">
                    
                    {/* Mockup Top Navigation Bar */}
                    <div className="flex items-center justify-between px-4 sm:px-6 py-3 border-b border-slate-100 bg-[#FAFBFD]">
                      {/* Logo & Brand */}
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded-lg bg-[#064E3B] text-white flex items-center justify-center font-bold text-xs">
                          W
                        </div>
                        <span className="font-syne font-extrabold text-xs sm:text-sm text-[#151515]">
                          WorkforcePro
                        </span>
                      </div>

                      {/* Search Bar */}
                      <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-100 text-slate-400 text-xs w-60">
                        <Search className="w-3.5 h-3.5" />
                        <span className="truncate">Search employees, location...</span>
                      </div>

                      {/* User Profile (PEP Software) */}
                      <div className="flex items-center gap-2.5">
                        <Bell className="w-4 h-4 text-slate-400 hover:text-slate-600 cursor-pointer" />
                        <div className="flex items-center gap-2 text-xs">
                          <span className="w-6 h-6 rounded-full bg-[#502D6D] text-white flex items-center justify-center font-bold text-[10px]">
                            P
                          </span>
                          <div className="hidden sm:block text-left leading-none">
                            <span className="font-bold text-[#151515] block">
                              PEP Software
                            </span>
                            <span className="text-[9px] text-slate-400">
                              Administrator
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Window Body: Left Sidebar + Main Content Area */}
                    <div className="flex flex-1 min-w-0">
                      
                      {/* Left Dark-Green Sidebar Menu (as seen in Image 2) */}
                      <div className="hidden md:flex flex-col w-36 lg:w-40 bg-[#064E3B] text-white p-3 space-y-1 shrink-0 text-xs select-none">
                        <div className="bg-[#047857] text-white font-bold rounded-lg px-2.5 py-1.5 flex items-center gap-2">
                          <BarChart2 className="w-3.5 h-3.5" />
                          <span>Dashboard</span>
                        </div>
                        <div className="text-emerald-100 hover:text-white px-2.5 py-1.5 flex items-center gap-2 cursor-pointer">
                          <Clock className="w-3.5 h-3.5" />
                          <span>Attendance</span>
                        </div>
                        <div className="text-emerald-100 hover:text-white px-2.5 py-1.5 flex items-center gap-2 cursor-pointer">
                          <CalendarCheck className="w-3.5 h-3.5" />
                          <span>Leaves</span>
                        </div>
                        <div className="text-emerald-100 hover:text-white px-2.5 py-1.5 flex items-center gap-2 cursor-pointer">
                          <Wrench className="w-3.5 h-3.5" />
                          <span>Tasks & Tools</span>
                        </div>
                        <div className="text-emerald-100 hover:text-white px-2.5 py-1.5 flex items-center gap-2 cursor-pointer">
                          <FileText className="w-3.5 h-3.5" />
                          <span>Reports</span>
                        </div>
                        <div className="text-emerald-100 hover:text-white px-2.5 py-1.5 flex items-center gap-2 cursor-pointer">
                          <Users className="w-3.5 h-3.5" />
                          <span>Team</span>
                        </div>
                        <div className="text-emerald-100 hover:text-white px-2.5 py-1.5 flex items-center gap-2 cursor-pointer mt-auto pt-6">
                          <Settings className="w-3.5 h-3.5" />
                          <span>Settings</span>
                        </div>
                      </div>

                      {/* Main Dashboard Panel */}
                      <div className="flex-1 min-w-0 bg-white">
                        
                        {/* Sub-Header Breadcrumb & Title */}
                        <div className="px-4 sm:px-6 py-3.5 border-b border-slate-100 flex flex-wrap items-center justify-between gap-2">
                          <div>
                            <div className="flex items-center gap-1.5 text-[11px] text-slate-400">
                              <span>Dashboard</span>
                              <ChevronRight className="w-3 h-3" />
                              <span className="text-[#064E3B] font-semibold">
                                {activeGroup.badge}
                              </span>
                            </div>
                            <div className="flex items-center gap-2 mt-0.5">
                              <h4 className="font-syne text-sm sm:text-base font-extrabold text-[#151515]">
                                {activeGroup.mockupData.headerTitle}
                              </h4>
                              <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-emerald-50 text-emerald-800 border border-emerald-200/70 inline-flex items-center gap-1">
                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                                Active
                              </span>
                            </div>
                          </div>

                          <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 bg-slate-50 px-2.5 py-1 rounded-lg border border-slate-200/80">
                            <Calendar className="w-3.5 h-3.5 text-[#059669]" />
                            <span>Tue, 28 Oct 2026</span>
                          </div>
                        </div>

                        {/* 4 Metric KPI Cards - Modern Enterprise Style */}
                        {activeGroup.mockupData.stats && (
                          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-3.5 sm:px-6 bg-[#FCFDFE] border-b border-slate-100">
                            {activeGroup.mockupData.stats.map((stat, sIdx) => {
                              const cardConfigs = [
                                {
                                  accentColor: "border-l-[#502D6D]",
                                  iconBg: "bg-purple-50 text-[#502D6D]",
                                  icon: Users,
                                  category: "Registered Roster",
                                },
                                {
                                  accentColor: "border-l-[#059669]",
                                  iconBg: "bg-emerald-50 text-[#059669]",
                                  icon: CheckCircle2,
                                  category: "Active on Duty",
                                },
                                {
                                  accentColor: "border-l-amber-500",
                                  iconBg: "bg-amber-50 text-amber-600",
                                  icon: CalendarCheck,
                                  category: "Approved Off",
                                },
                                {
                                  accentColor: "border-l-rose-500",
                                  iconBg: "bg-rose-50 text-rose-600",
                                  icon: AlertTriangle,
                                  category: "Review Queue",
                                },
                              ][sIdx % 4];

                              const IconComp = cardConfigs.icon;

                              return (
                                <div
                                  key={sIdx}
                                  className={`p-3 sm:p-3.5 rounded-xl bg-white border border-slate-200/80 border-l-[3.5px] ${cardConfigs.accentColor} shadow-2xs hover:shadow-xs transition-shadow flex flex-col justify-between`}
                                >
                                  <div>
                                    <div className="flex items-center justify-between gap-1.5 mb-1.5">
                                      <span className="text-[10px] sm:text-[11px] font-bold text-slate-500 uppercase tracking-wider leading-tight">
                                        {stat.label}
                                      </span>
                                      <div
                                        className={`w-6 h-6 rounded-md ${cardConfigs.iconBg} flex items-center justify-center shrink-0`}
                                      >
                                        <IconComp className="w-3.5 h-3.5" />
                                      </div>
                                    </div>
                                    <span className="text-xl sm:text-2xl font-black text-[#151515] tracking-tight block">
                                      {stat.value}
                                    </span>
                                  </div>

                                  <div className="mt-2 pt-1.5 border-t border-slate-100/80 flex items-center justify-between">
                                    {stat.change ? (
                                      <span
                                        className={`inline-flex items-center gap-1 text-[10px] font-bold px-1.5 py-0.5 rounded-md border ${
                                          stat.change.includes("Requires") || stat.change.includes("Alert")
                                            ? "bg-rose-50 text-rose-700 border-rose-200/70"
                                            : "bg-emerald-50 text-[#059669] border-emerald-200/70"
                                        }`}
                                      >
                                        {stat.change.includes("90.6%") && (
                                          <TrendingUp className="w-2.5 h-2.5" />
                                        )}
                                        {stat.change}
                                      </span>
                                    ) : (
                                      <span className="text-[10px] font-medium text-slate-400">
                                        {cardConfigs.category}
                                      </span>
                                    )}
                                  </div>
                                </div>
                              );
                            })}
                          </div>
                        )}

                        {/* Location Fields for GPS View */}
                        {activeGroup.mockupData.fields && (
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 p-3.5 sm:px-6 bg-[#FCFDFE] border-b border-slate-100">
                            {activeGroup.mockupData.fields.map((field, fIdx) => (
                              <div
                                key={fIdx}
                                className="p-2.5 rounded-xl bg-white border border-slate-200/80 text-xs"
                              >
                                <span className="text-[10px] font-bold text-slate-400 block">
                                  {field.label}
                                </span>
                                <span className="font-semibold text-[#151515] block mt-0.5">
                                  {field.value}
                                </span>
                              </div>
                            ))}
                          </div>
                        )}

                        {/* Activity & Log Records Table */}
                        <div className="p-4 sm:p-6">
                          <div className="flex items-center justify-between mb-3">
                            <span className="font-syne text-xs font-bold uppercase tracking-wider text-[#151515]">
                              Activity & Log Records
                            </span>
                            <button
                              type="button"
                              onClick={onOpenDemo}
                              className="text-xs font-bold text-[#064E3B] hover:text-[#059669] flex items-center gap-1 cursor-pointer"
                            >
                              <span>View All</span>
                              <ArrowRight className="w-3 h-3" />
                            </button>
                          </div>

                          {/* Table with proper column widths and breathing room */}
                          <div className="overflow-x-auto">
                            <table className="w-full text-left text-xs">
                              <thead>
                                <tr className="border-b border-slate-100 text-slate-400 font-bold text-[10px] uppercase">
                                  <th className="pb-2">Time</th>
                                  <th className="pb-2">Activity</th>
                                  <th className="pb-2 hidden sm:table-cell">Location</th>
                                  <th className="pb-2 text-right">Status</th>
                                </tr>
                              </thead>
                              <tbody className="divide-y divide-slate-100/90 text-slate-700">
                                {activeTabIdx === 0 && (
                                  <>
                                    <tr>
                                      <td className="py-2.5 font-mono text-slate-500 text-[11px]">09:02 AM</td>
                                      <td className="py-2.5 font-bold text-[#151515]">Checked In</td>
                                      <td className="py-2.5 text-slate-500 hidden sm:table-cell">HQ Campus - Zone A</td>
                                      <td className="py-2.5 text-right">
                                        <span className="inline-block px-2 py-0.5 rounded-md bg-emerald-100 text-emerald-800 font-bold text-[10px]">
                                          Active
                                        </span>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td className="py-2.5 font-mono text-slate-500 text-[11px]">11:15 AM</td>
                                      <td className="py-2.5 font-bold text-[#151515]">Break Started</td>
                                      <td className="py-2.5 text-slate-500 hidden sm:table-cell">HQ Campus - Cafeteria</td>
                                      <td className="py-2.5 text-right">
                                        <span className="inline-block px-2 py-0.5 rounded-md bg-amber-100 text-amber-800 font-bold text-[10px]">
                                          Completed
                                        </span>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td className="py-2.5 font-mono text-slate-500 text-[11px]">11:45 AM</td>
                                      <td className="py-2.5 font-bold text-[#151515]">Break Ended</td>
                                      <td className="py-2.5 text-slate-500 hidden sm:table-cell">HQ Campus - Cafeteria</td>
                                      <td className="py-2.5 text-right">
                                        <span className="inline-block px-2 py-0.5 rounded-md bg-amber-100 text-amber-800 font-bold text-[10px]">
                                          Completed
                                        </span>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td className="py-2.5 font-mono text-slate-500 text-[11px]">01:00 PM</td>
                                      <td className="py-2.5 font-bold text-[#151515]">Work Session</td>
                                      <td className="py-2.5 text-slate-500 hidden sm:table-cell">HQ Campus - Zone A</td>
                                      <td className="py-2.5 text-right">
                                        <span className="inline-block px-2 py-0.5 rounded-md bg-emerald-100 text-emerald-800 font-bold text-[10px]">
                                          Active
                                        </span>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td className="py-2.5 font-mono text-slate-500 text-[11px]">06:30 PM</td>
                                      <td className="py-2.5 font-bold text-[#151515]">Checked Out</td>
                                      <td className="py-2.5 text-slate-500 hidden sm:table-cell">HQ Campus - Zone A</td>
                                      <td className="py-2.5 text-right text-slate-400 font-bold text-[10px]">
                                        —
                                      </td>
                                    </tr>
                                  </>
                                )}

                                {activeTabIdx !== 0 &&
                                  activeGroup.mockupData.items &&
                                  activeGroup.mockupData.items.map((rec, rIdx) => (
                                    <tr key={rIdx}>
                                      <td className="py-2.5 font-mono text-slate-500 text-[11px]">
                                        {rec.time || `0${rIdx + 9}:00 AM`}
                                      </td>
                                      <td className="py-2.5 font-bold text-[#151515]">
                                        {rec.label}
                                      </td>
                                      <td className="py-2.5 text-slate-500 hidden sm:table-cell">
                                        {rec.detail}
                                      </td>
                                      <td className="py-2.5 text-right">
                                        <span
                                          className={`inline-block px-2.5 py-0.5 rounded-md font-bold text-[10px] ${
                                            rec.status.includes("Alert")
                                              ? "bg-rose-100 text-rose-800"
                                              : rec.status.includes("Approved") || rec.status.includes("Active") || rec.status.includes("Issued")
                                              ? "bg-emerald-100 text-emerald-800"
                                              : "bg-slate-100 text-slate-700"
                                          }`}
                                        >
                                          {rec.status}
                                        </span>
                                      </td>
                                    </tr>
                                  ))}
                              </tbody>
                            </table>
                          </div>
                        </div>

                      </div>

                    </div>

                  </div>
                </motion.div>

              </div>

            </RevealOnScroll>
          </div>

        </div>

      </div>
    </section>
  );
}
