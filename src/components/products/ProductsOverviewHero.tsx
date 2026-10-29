"use client";

import React from "react";
import Link from "next/link";
import {
  Clock,
  MapPin,
  Users,
  BarChart3,
  Briefcase,
  Users2,
  Calendar,
  Share2,
  BookUser,
  MessageSquare,
  Activity,
  Heart,
  UserCheck,
  HeartHandshake,
  ShieldCheck,
  ArrowRight,
  LucideIcon,
} from "lucide-react";
import { RevealOnScroll } from "@/components/shared/RevealOnScroll";

interface SatelliteFeature {
  label: string;
  icon: LucideIcon;
}

interface ProductPod {
  number: string;
  id: string;
  title: string;
  category: string;
  description: string;
  route: string;
  icon: LucideIcon;
  position: "left" | "right"; // Satellite card placement relative to pod
  theme: {
    badgeGradient: string;
    ringGradient: string;
    ringShadow: string;
    accentColor: string;
    buttonBg: string;
    buttonHover: string;
    iconBg: string;
    iconBorder: string;
    iconColor: string;
    satelliteDot: string;
    lineStroke: string;
    activeDot: string;
    ambientGlow: string;
  };
  satellites: SatelliteFeature[];
}

const PRODUCT_PODS: ProductPod[] = [
  {
    number: "01",
    id: "attendance-tracking-system",
    title: "Attendance\nTracking System",
    category: "WORKFORCE & OPERATIONS MANAGEMENT",
    description:
      "Manage employee attendance, working-time records and related workforce operations through a structured application experience.",
    route: "/products/attendance-tracking-system/",
    icon: Clock,
    position: "left",
    theme: {
      badgeGradient: "from-[#8B5CF6] via-[#7C3AED] to-[#502D6D]",
      ringGradient: "from-[#8B5CF6] via-[#C084FC]/40 to-purple-100/30",
      ringShadow: "shadow-[0_20px_50px_-10px_rgba(139,92,246,0.35)]",
      accentColor: "text-[#7C3AED]",
      buttonBg: "bg-[#7C3AED]",
      buttonHover: "hover:bg-[#6D28D9]",
      iconBg: "bg-purple-50",
      iconBorder: "border-purple-200/80",
      iconColor: "text-[#7C3AED]",
      satelliteDot: "#8B5CF6",
      lineStroke: "#C084FC",
      activeDot: "bg-[#7C3AED]",
      ambientGlow: "from-purple-500/10",
    },
    satellites: [
      { label: "GPS location & geo-fencing", icon: MapPin },
      { label: "Employee workflows", icon: Users },
      { label: "Reports & analytics", icon: BarChart3 },
    ],
  },
  {
    number: "02",
    id: "business-club-app",
    title: "Business Club App",
    category: "BUSINESS NETWORKING & CHAPTER OPERATIONS",
    description:
      "Organize business club membership, meetings, attendance and networking activities with powerful administrative tools.",
    route: "/products/business-club-app/",
    icon: Briefcase,
    position: "right",
    theme: {
      badgeGradient: "from-[#F59E0B] via-[#F97316] to-[#EA580C]",
      ringGradient: "from-[#F59E0B] via-[#FDBA74]/40 to-amber-100/30",
      ringShadow: "shadow-[0_20px_50px_-10px_rgba(245,158,11,0.35)]",
      accentColor: "text-[#EA580C]",
      buttonBg: "bg-[#EA580C]",
      buttonHover: "hover:bg-[#C2410C]",
      iconBg: "bg-amber-50",
      iconBorder: "border-amber-200/80",
      iconColor: "text-[#EA580C]",
      satelliteDot: "#F59E0B",
      lineStroke: "#FDBA74",
      activeDot: "bg-[#EA580C]",
      ambientGlow: "from-amber-500/10",
    },
    satellites: [
      { label: "Member directory & profiles", icon: Users2 },
      { label: "Meetings & events", icon: Calendar },
      { label: "Referral tracking & engagement", icon: Share2 },
    ],
  },
  {
    number: "03",
    id: "network-club-app",
    title: "Network Club App",
    category: "ASSOCIATION & MEMBER DIRECTORY MANAGEMENT",
    description:
      "Help member-based organizations organize member directories, communication and engagement activities with easy-to-use tools.",
    route: "/products/network-club-app/",
    icon: Users,
    position: "left",
    theme: {
      badgeGradient: "from-[#14B8A6] via-[#0D9488] to-[#0F766E]",
      ringGradient: "from-[#14B8A6] via-[#5EEAD4]/40 to-teal-100/30",
      ringShadow: "shadow-[0_20px_50px_-10px_rgba(20,184,166,0.35)]",
      accentColor: "text-[#0D9488]",
      buttonBg: "bg-[#0D9488]",
      buttonHover: "hover:bg-[#0F766E]",
      iconBg: "bg-teal-50",
      iconBorder: "border-teal-200/80",
      iconColor: "text-[#0D9488]",
      satelliteDot: "#14B8A6",
      lineStroke: "#5EEAD4",
      activeDot: "bg-[#0D9488]",
      ambientGlow: "from-teal-500/10",
    },
    satellites: [
      { label: "Member directory", icon: BookUser },
      { label: "Communication tools", icon: MessageSquare },
      { label: "Engagement activities", icon: Activity },
    ],
  },
  {
    number: "04",
    id: "matrimony-application",
    title: "Matrimony Application",
    category: "LIFESTYLE & COMMUNITY",
    description:
      "Explore a matrimony application with member profiles, partner preferences and communication tools designed for communities.",
    route: "/products/matrimony-application/",
    icon: Heart,
    position: "right",
    theme: {
      badgeGradient: "from-[#F43F5E] via-[#E11D48] to-[#BE123C]",
      ringGradient: "from-[#F43F5E] via-[#FDA4AF]/40 to-rose-100/30",
      ringShadow: "shadow-[0_20px_50px_-10px_rgba(244,63,94,0.35)]",
      accentColor: "text-[#E11D48]",
      buttonBg: "bg-[#E11D48]",
      buttonHover: "hover:bg-[#BE123C]",
      iconBg: "bg-rose-50",
      iconBorder: "border-rose-200/80",
      iconColor: "text-[#E11D48]",
      satelliteDot: "#F43F5E",
      lineStroke: "#FDA4AF",
      activeDot: "bg-[#E11D48]",
      ambientGlow: "from-rose-500/10",
    },
    satellites: [
      { label: "Member profiles", icon: UserCheck },
      { label: "Partner preferences", icon: HeartHandshake },
      { label: "Secure communication", icon: ShieldCheck },
    ],
  },
];

export function ProductsOverviewHero() {
  return (
    <section className="pt-28 sm:pt-32 pb-20 lg:pb-32 bg-[#FFFFFF] relative overflow-hidden select-none">
      {/* Soft Ambient Background Auras (Exact Match to Reference Colors) */}
      <div className="absolute top-10 left-10 w-[550px] h-[550px] bg-purple-400/[0.06] rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-10 right-10 w-[550px] h-[550px] bg-amber-400/[0.07] rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[550px] h-[550px] bg-teal-400/[0.06] rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[550px] h-[550px] bg-rose-400/[0.06] rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* ─── Header Section (Exact Match to Reference Image) ─── */}
        <div className="text-center max-w-4xl mx-auto mb-16 sm:mb-20">
          <RevealOnScroll>
            {/* Pre-title Tag */}
            <div className="inline-block mb-3">
              <span className="font-syne text-xs sm:text-sm font-extrabold uppercase tracking-[0.25em] text-[#7C3AED]">
                OUR PRODUCTS
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-[#0F172A] tracking-tight leading-[1.12]">
              Software for{" "}
              <span className="bg-gradient-to-r from-[#7C3AED] via-[#9333EA] to-[#EA580C] bg-clip-text text-transparent">
                the way you work
              </span>
            </h1>

            {/* Subtitle */}
            <p className="mt-4 sm:mt-5 text-sm sm:text-base lg:text-lg text-[#64748B] leading-relaxed max-w-2xl mx-auto font-normal">
              Practical, modern software solutions to streamline operations,{" "}
              <strong className="font-semibold text-[#1E293B]">
                strengthen communities
              </strong>{" "}
              and help businesses grow.
            </p>
          </RevealOnScroll>
        </div>

        {/* ─── 4 Circular Pods 2x2 Showcase (Exact Match to Reference Image) ─── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-x-12 lg:gap-y-16 items-center">
          {PRODUCT_PODS.map((pod, idx) => {
            const Icon = pod.icon;
            const isLeft = pod.position === "left";

            return (
              <RevealOnScroll key={pod.id} delay={idx * 0.1}>
                <div className="relative flex flex-col items-center justify-center">
                  
                  {/* Desktop Layout with Connected Satellite Cards */}
                  <div className="relative flex items-center justify-center w-full">
                    
                    {/* LEFT SATELLITE CARDS (For Pods 01 & 03) */}
                    {isLeft && (
                      <div className="hidden xl:flex flex-col gap-5 items-end shrink-0 z-10">
                        {pod.satellites.map((sat, sIdx) => {
                          const SatIcon = sat.icon;
                          return (
                            <div
                              key={sIdx}
                              className="relative group bg-white rounded-2xl border border-slate-100 shadow-[0_8px_20px_rgba(0,0,0,0.04)] hover:shadow-lg hover:-translate-y-0.5 transition-all p-3 flex items-center gap-3 w-[220px]"
                            >
                              <div
                                className={`w-9 h-9 rounded-full ${pod.theme.iconBg} ${pod.theme.iconColor} flex items-center justify-center shrink-0 border ${pod.theme.iconBorder}`}
                              >
                                <SatIcon className="w-4 h-4" />
                              </div>
                              <span className="text-xs font-bold text-[#1E293B] leading-tight">
                                {sat.label}
                              </span>
                            </div>
                          );
                        })}
                      </div>
                    )}

                    {/* CONNECTING SVG BEZIER LINES (LEFT SIDE: For Pods 01 & 03) */}
                    {isLeft && (
                      <div className="hidden xl:block w-[70px] h-[260px] shrink-0 relative pointer-events-none">
                        <svg
                          viewBox="0 0 70 260"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-full h-full"
                        >
                          {/* Top satellite curve */}
                          <path
                            d="M 4 35 C 40 35, 45 80, 68 85"
                            stroke={pod.theme.lineStroke}
                            strokeWidth="1.5"
                            strokeDasharray="3 3"
                            opacity="0.8"
                          />
                          <circle cx="4" cy="35" r="3" fill={pod.theme.satelliteDot} />
                          <circle cx="68" cy="85" r="3" fill={pod.theme.satelliteDot} />

                          {/* Middle satellite straight line */}
                          <path
                            d="M 4 130 L 68 130"
                            stroke={pod.theme.lineStroke}
                            strokeWidth="1.5"
                            strokeDasharray="3 3"
                            opacity="0.8"
                          />
                          <circle cx="4" cy="130" r="3" fill={pod.theme.satelliteDot} />
                          <circle cx="68" cy="130" r="3" fill={pod.theme.satelliteDot} />

                          {/* Bottom satellite curve */}
                          <path
                            d="M 4 225 C 40 225, 45 180, 68 175"
                            stroke={pod.theme.lineStroke}
                            strokeWidth="1.5"
                            strokeDasharray="3 3"
                            opacity="0.8"
                          />
                          <circle cx="4" cy="225" r="3" fill={pod.theme.satelliteDot} />
                          <circle cx="68" cy="175" r="3" fill={pod.theme.satelliteDot} />
                        </svg>
                      </div>
                    )}

                    {/* ─── CENTRAL CIRCULAR POD ─── */}
                    <div className="relative shrink-0">
                      
                      {/* Asymmetric Teardrop Number Badge (Top-Left Shoulder) */}
                      <div
                        className={`absolute -top-3 -left-3 sm:-top-4 sm:-left-4 z-20 px-4 py-2 sm:px-5 sm:py-2.5 rounded-[24px_24px_4px_24px] bg-gradient-to-br ${pod.theme.badgeGradient} shadow-lg flex items-center justify-center`}
                      >
                        <span className="text-xl sm:text-2xl font-black text-white leading-none tracking-tight">
                          {pod.number}
                        </span>
                      </div>

                      {/* Layered Outer 3D Gradient Rim */}
                      <div
                        className={`relative w-[340px] h-[340px] sm:w-[380px] sm:h-[380px] lg:w-[410px] lg:h-[410px] rounded-full p-[8px] sm:p-[10px] bg-gradient-to-br ${pod.theme.ringGradient} ${pod.theme.ringShadow} transition-all duration-300 hover:scale-[1.015]`}
                      >
                        {/* Inner White Disc Face */}
                        <div className="w-full h-full rounded-full bg-white flex flex-col items-center justify-center p-4 sm:p-6 text-center relative border border-slate-100/80 shadow-[inset_0_2px_8px_rgba(255,255,255,0.9),inset_0_-4px_16px_rgba(0,0,0,0.02)]">
                          
                          {/* Top Icon in Soft Pastel Circle */}
                          <div
                            className={`w-10 h-10 sm:w-11 sm:h-11 rounded-full ${pod.theme.iconBg} ${pod.theme.iconColor} border ${pod.theme.iconBorder} flex items-center justify-center mb-1.5 shadow-xs`}
                          >
                            <Icon className="w-5 h-5 sm:w-5 sm:h-5" />
                          </div>

                          {/* Product Title */}
                          <h2 className="text-lg sm:text-xl font-black text-[#0F172A] tracking-tight leading-snug whitespace-pre-line">
                            {pod.title}
                          </h2>

                          {/* Category Tag */}
                          <span
                            className={`text-[9px] sm:text-[10px] font-extrabold uppercase tracking-[0.16em] ${pod.theme.accentColor} mt-1 mb-1.5 block`}
                          >
                            {pod.category}
                          </span>

                          {/* Description */}
                          <p className="text-[11px] sm:text-xs text-[#64748B] leading-relaxed max-w-[260px] mx-auto mb-3">
                            {pod.description}
                          </p>

                          {/* Explore Product Button */}
                          <Link
                            href={pod.route}
                            className={`inline-flex items-center gap-2 px-5 py-2 sm:px-6 sm:py-2.5 rounded-full text-xs sm:text-sm font-bold text-white ${pod.theme.buttonBg} ${pod.theme.buttonHover} shadow-md hover:shadow-lg hover:scale-105 active:scale-95 transition-all cursor-pointer`}
                          >
                            <span>Explore Product</span>
                            <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                          </Link>

                          {/* 3 Pagination Indicator Dots */}
                          <div className="flex items-center justify-center gap-1.5 mt-2.5">
                            <span
                              className={`w-2 h-2 rounded-full ${pod.theme.activeDot}`}
                            />
                            <span className="w-2 h-2 rounded-full bg-slate-200" />
                            <span className="w-2 h-2 rounded-full bg-slate-200" />
                          </div>

                        </div>
                      </div>

                    </div>

                    {/* CONNECTING SVG BEZIER LINES (RIGHT SIDE: For Pods 02 & 04) */}
                    {!isLeft && (
                      <div className="hidden xl:block w-[70px] h-[260px] shrink-0 relative pointer-events-none">
                        <svg
                          viewBox="0 0 70 260"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-full h-full"
                        >
                          {/* Top satellite curve */}
                          <path
                            d="M 2 85 C 25 80, 30 35, 66 35"
                            stroke={pod.theme.lineStroke}
                            strokeWidth="1.5"
                            strokeDasharray="3 3"
                            opacity="0.8"
                          />
                          <circle cx="2" cy="85" r="3" fill={pod.theme.satelliteDot} />
                          <circle cx="66" cy="35" r="3" fill={pod.theme.satelliteDot} />

                          {/* Middle satellite straight line */}
                          <path
                            d="M 2 130 L 66 130"
                            stroke={pod.theme.lineStroke}
                            strokeWidth="1.5"
                            strokeDasharray="3 3"
                            opacity="0.8"
                          />
                          <circle cx="2" cy="130" r="3" fill={pod.theme.satelliteDot} />
                          <circle cx="66" cy="130" r="3" fill={pod.theme.satelliteDot} />

                          {/* Bottom satellite curve */}
                          <path
                            d="M 2 175 C 25 180, 30 225, 66 225"
                            stroke={pod.theme.lineStroke}
                            strokeWidth="1.5"
                            strokeDasharray="3 3"
                            opacity="0.8"
                          />
                          <circle cx="2" cy="175" r="3" fill={pod.theme.satelliteDot} />
                          <circle cx="66" cy="225" r="3" fill={pod.theme.satelliteDot} />
                        </svg>
                      </div>
                    )}

                    {/* RIGHT SATELLITE CARDS (For Pods 02 & 04) */}
                    {!isLeft && (
                      <div className="hidden xl:flex flex-col gap-5 items-start shrink-0 z-10">
                        {pod.satellites.map((sat, sIdx) => {
                          const SatIcon = sat.icon;
                          return (
                            <div
                              key={sIdx}
                              className="relative group bg-white rounded-2xl border border-slate-100 shadow-[0_8px_20px_rgba(0,0,0,0.04)] hover:shadow-lg hover:-translate-y-0.5 transition-all p-3 flex items-center gap-3 w-[220px]"
                            >
                              <div
                                className={`w-9 h-9 rounded-full ${pod.theme.iconBg} ${pod.theme.iconColor} flex items-center justify-center shrink-0 border ${pod.theme.iconBorder}`}
                              >
                                <SatIcon className="w-4 h-4" />
                              </div>
                              <span className="text-xs font-bold text-[#1E293B] leading-tight">
                                {sat.label}
                              </span>
                            </div>
                          );
                        })}
                      </div>
                    )}

                  </div>

                  {/* Mobile & Tablet Fallback Satellite Cards (< xl) */}
                  <div className="flex flex-wrap items-center justify-center gap-2.5 mt-6 xl:hidden max-w-md">
                    {pod.satellites.map((sat, sIdx) => {
                      const SatIcon = sat.icon;
                      return (
                        <div
                          key={sIdx}
                          className="bg-white rounded-xl border border-slate-100 shadow-xs px-3.5 py-2 flex items-center gap-2.5 text-xs font-bold text-[#1E293B]"
                        >
                          <div
                            className={`w-6 h-6 rounded-full ${pod.theme.iconBg} ${pod.theme.iconColor} flex items-center justify-center shrink-0`}
                          >
                            <SatIcon className="w-3.5 h-3.5" />
                          </div>
                          <span>{sat.label}</span>
                        </div>
                      );
                    })}
                  </div>

                </div>
              </RevealOnScroll>
            );
          })}
        </div>

      </div>
    </section>
  );
}
