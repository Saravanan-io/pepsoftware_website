"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronRight, ChevronLeft } from "lucide-react";
import { RevealOnScroll } from "@/components/shared/RevealOnScroll";

interface FlowServiceCard {
  number: string;
  title: string;
  description: string;
  pedestalImage: string;
  targetId: string;
  accentColor: string;
  accentBg: string;
  glowColor: string;
  hoverShadow: string;
  hoverText: string;
}

const FLOW_SERVICES: FlowServiceCard[] = [
  {
    number: "01",
    title: "Website & Web Apps",
    description: "Professional websites and powerful web applications for businesses.",
    pedestalImage: "/images/services/pedestal_02_web.png",
    targetId: "service-01",
    accentColor: "text-[#3B82F6]",
    accentBg: "bg-[#3B82F6]",
    glowColor: "rgba(59, 130, 246, 0.45)",
    hoverShadow: "group-hover:shadow-[0_20px_45px_rgba(59,130,246,0.16)]",
    hoverText: "group-hover:text-[#3B82F6]",
  },
  {
    number: "02",
    title: "Mobile Apps",
    description: "Android and iOS applications designed around your users.",
    pedestalImage: "/images/services/pedestal_03_mobile.png",
    targetId: "service-02",
    accentColor: "text-[#10B981]",
    accentBg: "bg-[#10B981]",
    glowColor: "rgba(16, 185, 129, 0.45)",
    hoverShadow: "group-hover:shadow-[0_20px_45px_rgba(16,185,129,0.16)]",
    hoverText: "group-hover:text-[#10B981]",
  },
  {
    number: "03",
    title: "Custom Software",
    description: "Software built specifically around your business processes.",
    pedestalImage: "/images/services/pedestal_04_software.png",
    targetId: "service-03",
    accentColor: "text-[#F59E0B]",
    accentBg: "bg-[#F59E0B]",
    glowColor: "rgba(245, 158, 11, 0.45)",
    hoverShadow: "group-hover:shadow-[0_20px_45px_rgba(245,158,11,0.16)]",
    hoverText: "group-hover:text-[#F59E0B]",
  },
  {
    number: "04",
    title: "SaaS Products",
    description: "Scalable cloud-based products built for recurring businesses.",
    pedestalImage: "/images/services/pedestal_05_saas.png",
    targetId: "service-04",
    accentColor: "text-[#8B5CF6]",
    accentBg: "bg-[#8B5CF6]",
    glowColor: "rgba(139, 92, 246, 0.45)",
    hoverShadow: "group-hover:shadow-[0_20px_45px_rgba(139,92,246,0.16)]",
    hoverText: "group-hover:text-[#8B5CF6]",
  },
  {
    number: "05",
    title: "UI/UX Design",
    description: "Simple, intuitive and user-friendly digital experiences.",
    pedestalImage: "/images/services/pedestal_01_uiux.png",
    targetId: "service-05",
    accentColor: "text-[#A855F7]",
    accentBg: "bg-[#A855F7]",
    glowColor: "rgba(168, 85, 247, 0.45)",
    hoverShadow: "group-hover:shadow-[0_20px_45px_rgba(168,85,247,0.16)]",
    hoverText: "group-hover:text-[#A855F7]",
  },
  {
    number: "06",
    title: "Digital Marketing",
    description: "Digital strategies that help your business reach the right audience.",
    pedestalImage: "/images/services/pedestal_06_marketing.png",
    targetId: "service-06",
    accentColor: "text-[#F43F5E]",
    accentBg: "bg-[#F43F5E]",
    glowColor: "rgba(244, 63, 94, 0.45)",
    hoverShadow: "group-hover:shadow-[0_20px_45px_rgba(244,63,94,0.16)]",
    hoverText: "group-hover:text-[#F43F5E]",
  },
];

export function ServicesFlowRoadmap() {
  const scrollToService = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section className="py-20 lg:py-28 bg-[#FAF8F8] border-b border-[#C6C2C1]/40 relative overflow-hidden">
      {/* ─── Background Ambient Light Elements ─── */}
      <div className="absolute top-10 left-6 w-[450px] h-[450px] bg-blue-200/30 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-16 right-6 w-[450px] h-[450px] bg-rose-100/35 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/3 w-80 h-80 bg-purple-100/25 rounded-full blur-[110px] pointer-events-none" />

      {/* Decorative Wavy Background Ribbons */}
      <div className="absolute left-0 top-0 bottom-0 w-48 opacity-25 pointer-events-none hidden xl:block">
        <svg viewBox="0 0 200 800" fill="none" className="w-full h-full">
          <path
            d="M -50 0 C 80 150 -30 350 70 500 C 170 650 30 750 -40 800"
            stroke="url(#bgWaveBlue)"
            strokeWidth="38"
            strokeLinecap="round"
          />
          <defs>
            <linearGradient id="bgWaveBlue" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#BFDBFE" />
              <stop offset="100%" stopColor="#DDD6FE" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="absolute right-0 top-0 bottom-0 w-48 opacity-20 pointer-events-none hidden xl:block">
        <svg viewBox="0 0 200 800" fill="none" className="w-full h-full">
          <path
            d="M 250 0 C 120 180 230 380 130 520 C 30 660 170 760 240 800"
            stroke="url(#bgWaveWarm)"
            strokeWidth="38"
            strokeLinecap="round"
          />
          <defs>
            <linearGradient id="bgWaveWarm" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FED7AA" />
              <stop offset="100%" stopColor="#FECDD3" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Floating Glossy 3D Lavender Sphere (from reference top-right) */}
      <div className="absolute top-28 right-[12%] hidden lg:block w-14 h-14 rounded-full bg-gradient-to-br from-[#F5F3FF] via-[#DDD6FE] to-[#8B5CF6] shadow-[0_16px_32px_rgba(139,92,246,0.32),inset_0_2px_4px_white] pointer-events-none animate-float-medium" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* ─── Header: Matching Reference Exactly ─── */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <RevealOnScroll>
            {/* Accent Label: — OUR SERVICES — */}
            <div className="inline-flex items-center justify-center gap-2 mb-3">
              <span className="w-5 h-[2px] rounded-full bg-[#D1D5DB]" />
              <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#4B5563]">
                OUR <span className="text-[#8B5CF6]">SERVICES</span>
              </span>
              <span className="w-5 h-[2px] rounded-full bg-[#D1D5DB]" />
            </div>

            {/* Heading: What Can We Build for You? */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#111827] tracking-[-0.03em] leading-tight">
              What Can We{" "}
              <span className="bg-gradient-to-r from-[#8B5CF6] via-[#A855F7] to-[#7C3AED] bg-clip-text text-transparent">
                Build for You?
              </span>
            </h2>

            {/* Description */}
            <p className="mt-4 text-base sm:text-lg text-[#4B5563] leading-relaxed">
              From a simple business website to a complete business application, we help turn your ideas and requirements into working digital products.
            </p>
          </RevealOnScroll>
        </div>

        {/* ─── Desktop View: 2-Column Serpentine Flow Roadmap ─── */}
        <div className="hidden lg:block relative max-w-[1040px] h-[590px] mx-auto">
          {/* SVG Connecting Flow Tubes with Animated Gradient Strokes */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none z-0"
            viewBox="0 0 1040 590"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              {/* Row 1 -> Row 2 gradient (01 Blue to 02 Teal) */}
              <linearGradient id="flowGrad1" x1="450" y1="95" x2="600" y2="135" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#3B82F6" />
                <stop offset="60%" stopColor="#10B981" />
                <stop offset="100%" stopColor="#059669" />
              </linearGradient>

              {/* Row 2 return loop (02 Teal to 03 Amber) */}
              <linearGradient id="flowGrad2" x1="600" y1="170" x2="75" y2="250" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#059669" />
                <stop offset="60%" stopColor="#F59E0B" />
                <stop offset="100%" stopColor="#F59E0B" />
              </linearGradient>

              {/* Row 2 -> Row 3 gradient (03 Amber to 04 Purple) */}
              <linearGradient id="flowGrad3" x1="450" y1="295" x2="600" y2="335" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#F59E0B" />
                <stop offset="60%" stopColor="#8B5CF6" />
                <stop offset="100%" stopColor="#7C3AED" />
              </linearGradient>

              {/* Row 3 return loop (04 Purple to 05 Violet) */}
              <linearGradient id="flowGrad4" x1="600" y1="370" x2="75" y2="450" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#7C3AED" />
                <stop offset="60%" stopColor="#A855F7" />
                <stop offset="100%" stopColor="#A855F7" />
              </linearGradient>

              {/* Row 3 -> Row 4 gradient (05 Violet to 06 Rose) */}
              <linearGradient id="flowGrad5" x1="450" y1="495" x2="600" y2="495" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#A855F7" />
                <stop offset="70%" stopColor="#F43F5E" />
                <stop offset="100%" stopColor="#E11D48" />
              </linearGradient>
            </defs>

            {/* Path 1: Card 01 (Website) -> Card 02 (Mobile) Pedestal */}
            <path
              d="M 450 95 H 575 C 600 95 605 130 585 155"
              stroke="url(#flowGrad1)"
              strokeWidth="5"
              strokeLinecap="round"
              className="opacity-90"
            />
            <path
              d="M 450 95 H 575 C 600 95 605 130 585 155"
              stroke="#FFFFFF"
              strokeWidth="2.5"
              strokeLinecap="round"
              className="animate-flow-dash"
            />

            {/* Path 2: Card 02 (Mobile) -> Card 03 (Custom Software) Looping back left underneath */}
            <path
              d="M 585 155 C 570 180 540 195 500 195 H 120 C 90 195 75 220 75 250"
              stroke="url(#flowGrad2)"
              strokeWidth="5"
              strokeLinecap="round"
              className="opacity-85"
            />
            <path
              d="M 585 155 C 570 180 540 195 500 195 H 120 C 90 195 75 220 75 250"
              stroke="#FFFFFF"
              strokeWidth="2.5"
              strokeLinecap="round"
              className="animate-flow-dash"
            />

            {/* Path 3: Card 03 (Custom Software) -> Card 04 (SaaS Products) Pedestal */}
            <path
              d="M 450 295 H 575 C 600 295 605 330 585 355"
              stroke="url(#flowGrad3)"
              strokeWidth="5"
              strokeLinecap="round"
              className="opacity-90"
            />
            <path
              d="M 450 295 H 575 C 600 295 605 330 585 355"
              stroke="#FFFFFF"
              strokeWidth="2.5"
              strokeLinecap="round"
              className="animate-flow-dash"
            />

            {/* Path 4: Card 04 (SaaS Products) -> Card 05 (UI/UX Design) Looping back left underneath */}
            <path
              d="M 585 355 C 570 380 540 395 500 395 H 120 C 90 395 75 420 75 450"
              stroke="url(#flowGrad4)"
              strokeWidth="5"
              strokeLinecap="round"
              className="opacity-85"
            />
            <path
              d="M 585 355 C 570 380 540 395 500 395 H 120 C 90 395 75 420 75 450"
              stroke="#FFFFFF"
              strokeWidth="2.5"
              strokeLinecap="round"
              className="animate-flow-dash"
            />

            {/* Path 5: Card 05 (UI/UX Design) -> Card 06 (Digital Marketing) Pedestal */}
            <path
              d="M 450 495 H 590"
              stroke="url(#flowGrad5)"
              strokeWidth="5"
              strokeLinecap="round"
              className="opacity-90"
            />
            <path
              d="M 450 495 H 590"
              stroke="#FFFFFF"
              strokeWidth="2.5"
              strokeLinecap="round"
              className="animate-flow-dash"
            />

            {/* ─── Glowing Connection Beads (Color matched to each milestone) ─── */}
            {/* Bead 1 (Card 01 Tip): Blue */}
            <circle cx="450" cy="95" r="7" fill="#3B82F6" stroke="#FFFFFF" strokeWidth="3" filter="drop-shadow(0 0 8px #3B82F6)" />
            {/* Bead 2 (Card 02 Pedestal Entry): Teal */}
            <circle cx="585" cy="115" r="7" fill="#10B981" stroke="#FFFFFF" strokeWidth="3" filter="drop-shadow(0 0 8px #10B981)" />

            {/* Bead 3 (Card 03 Pedestal Entry): Amber */}
            <circle cx="75" cy="250" r="7" fill="#F59E0B" stroke="#FFFFFF" strokeWidth="3" filter="drop-shadow(0 0 8px #F59E0B)" />
            {/* Bead 4 (Card 03 Tip): Amber */}
            <circle cx="450" cy="295" r="7" fill="#F59E0B" stroke="#FFFFFF" strokeWidth="3" filter="drop-shadow(0 0 8px #F59E0B)" />
            {/* Bead 5 (Card 04 Pedestal Entry): Purple */}
            <circle cx="585" cy="315" r="7" fill="#8B5CF6" stroke="#FFFFFF" strokeWidth="3" filter="drop-shadow(0 0 8px #8B5CF6)" />

            {/* Bead 6 (Card 05 Pedestal Entry): Violet */}
            <circle cx="75" cy="450" r="7" fill="#A855F7" stroke="#FFFFFF" strokeWidth="3" filter="drop-shadow(0 0 8px #A855F7)" />
            {/* Bead 7 (Card 05 Tip): Violet */}
            <circle cx="450" cy="495" r="7" fill="#A855F7" stroke="#FFFFFF" strokeWidth="3" filter="drop-shadow(0 0 8px #A855F7)" />
            {/* Bead 8 (Card 06 Pedestal Entry): Rose */}
            <circle cx="590" cy="495" r="7" fill="#F43F5E" stroke="#FFFFFF" strokeWidth="3" filter="drop-shadow(0 0 8px #F43F5E)" />
          </svg>

          {/* ─── Animated Flow Directional Chevrons Overlay ─── */}
          {/* Chevron 1: Row 1 Bridge >> (Teal/Blue) */}
          <div className="absolute left-[505px] top-[83px] pointer-events-none flex items-center text-[#10B981] animate-chevron-right z-10">
            <ChevronRight className="w-5 h-5 -mr-2.5 stroke-[3]" />
            <ChevronRight className="w-5 h-5 stroke-[3]" />
          </div>

          {/* Chevron 2: Loop 1 Return << (Amber) */}
          <div className="absolute left-[310px] top-[183px] pointer-events-none flex items-center text-[#F59E0B] animate-chevron-left z-10">
            <ChevronLeft className="w-5 h-5 -mr-2.5 stroke-[3]" />
            <ChevronLeft className="w-5 h-5 stroke-[3]" />
          </div>

          {/* Chevron 3: Row 2 Bridge >> (Purple) */}
          <div className="absolute left-[505px] top-[283px] pointer-events-none flex items-center text-[#8B5CF6] animate-chevron-right z-10">
            <ChevronRight className="w-5 h-5 -mr-2.5 stroke-[3]" />
            <ChevronRight className="w-5 h-5 stroke-[3]" />
          </div>

          {/* Chevron 4: Loop 2 Return << (Violet) */}
          <div className="absolute left-[310px] top-[383px] pointer-events-none flex items-center text-[#A855F7] animate-chevron-left z-10">
            <ChevronLeft className="w-5 h-5 -mr-2.5 stroke-[3]" />
            <ChevronLeft className="w-5 h-5 stroke-[3]" />
          </div>

          {/* Chevron 5: Row 3 Bridge >> (Rose) */}
          <div className="absolute left-[505px] top-[483px] pointer-events-none flex items-center text-[#F43F5E] animate-chevron-right z-10">
            <ChevronRight className="w-5 h-5 -mr-2.5 stroke-[3]" />
            <ChevronRight className="w-5 h-5 stroke-[3]" />
          </div>

          {/* Exit Chevron: Right of Card 06 >> (Rose) */}
          <div className="absolute left-[1025px] top-[483px] pointer-events-none flex items-center text-[#F43F5E] animate-chevron-right z-10">
            <ChevronRight className="w-6 h-6 -mr-3 stroke-[3]" />
            <ChevronRight className="w-6 h-6 stroke-[3]" />
          </div>

          {/* ─── 6 Service Cards Placed at Exact Milestone Positions ─── */}
          {/* ═══ ROW 1: 01 (Left) & 02 (Right) ═══ */}
          {/* Card 01: Website & Web Apps */}
          <div className="absolute left-0 top-[25px] w-[450px] h-[140px] z-20">
            <RevealOnScroll delay={0.05}>
              <div
                onClick={() => scrollToService(FLOW_SERVICES[0].targetId)}
                className="group relative w-full h-[140px] flex items-center cursor-pointer"
              >
                {/* 3D Circular Pedestal Icon */}
                <div className="absolute left-0 top-1/2 -translate-y-1/2 z-20 w-[128px] h-[128px]">
                  <div
                    className="absolute inset-2 rounded-full blur-xl pointer-events-none opacity-80 group-hover:opacity-100 transition-opacity"
                    style={{ backgroundColor: FLOW_SERVICES[0].glowColor }}
                  />
                  <div className="relative w-full h-full transition-transform duration-300 group-hover:scale-105">
                    <Image
                      src={FLOW_SERVICES[0].pedestalImage}
                      alt={FLOW_SERVICES[0].title}
                      fill
                      sizes="128px"
                      className="object-contain drop-shadow-[0_8px_16px_rgba(0,0,0,0.15)]"
                      priority
                    />
                  </div>
                </div>

                {/* White Capsule Pill Card */}
                <div className={`absolute left-[52px] right-0 top-0 bottom-0 rounded-[38px] bg-white/95 border border-white/90 shadow-[0_16px_36px_rgba(0,0,0,0.06),0_2px_8px_rgba(0,0,0,0.02),inset_0_1px_2px_white] ${FLOW_SERVICES[0].hoverShadow} transition-all duration-300 transform group-hover:-translate-y-1 pl-20 pr-6 py-4 flex flex-col justify-between`}>
                  <div>
                    <div className={`text-sm font-extrabold ${FLOW_SERVICES[0].accentColor} font-mono leading-none mb-1`}>
                      {FLOW_SERVICES[0].number}
                    </div>
                    <h3 className={`text-xl font-bold text-[#111827] font-sans tracking-tight leading-tight ${FLOW_SERVICES[0].hoverText} transition-colors`}>
                      {FLOW_SERVICES[0].title}
                    </h3>
                    <p className="text-xs text-[#4B5563] leading-snug mt-1 line-clamp-2">
                      {FLOW_SERVICES[0].description}
                    </p>
                  </div>
                  <div className={`flex items-center gap-1.5 text-xs font-bold ${FLOW_SERVICES[0].accentColor} pt-1`}>
                    <span>Explore Details</span>
                    <span className={`w-5 h-5 rounded-full ${FLOW_SERVICES[0].accentBg} text-white flex items-center justify-center transition-transform group-hover:translate-x-1`}>
                      <ArrowRight className="w-3 h-3" />
                    </span>
                  </div>
                </div>
              </div>
            </RevealOnScroll>
          </div>

          {/* Card 02: Mobile Apps */}
          <div className="absolute left-[570px] top-[25px] w-[450px] h-[140px] z-20">
            <RevealOnScroll delay={0.15}>
              <div
                onClick={() => scrollToService(FLOW_SERVICES[1].targetId)}
                className="group relative w-full h-[140px] flex items-center cursor-pointer"
              >
                {/* 3D Circular Pedestal Icon */}
                <div className="absolute left-0 top-1/2 -translate-y-1/2 z-20 w-[128px] h-[128px]">
                  <div
                    className="absolute inset-2 rounded-full blur-xl pointer-events-none opacity-80 group-hover:opacity-100 transition-opacity"
                    style={{ backgroundColor: FLOW_SERVICES[1].glowColor }}
                  />
                  <div className="relative w-full h-full transition-transform duration-300 group-hover:scale-105">
                    <Image
                      src={FLOW_SERVICES[1].pedestalImage}
                      alt={FLOW_SERVICES[1].title}
                      fill
                      sizes="128px"
                      className="object-contain drop-shadow-[0_8px_16px_rgba(0,0,0,0.15)]"
                      priority
                    />
                  </div>
                </div>

                {/* White Capsule Pill Card */}
                <div className={`absolute left-[52px] right-0 top-0 bottom-0 rounded-[38px] bg-white/95 border border-white/90 shadow-[0_16px_36px_rgba(0,0,0,0.06),0_2px_8px_rgba(0,0,0,0.02),inset_0_1px_2px_white] ${FLOW_SERVICES[1].hoverShadow} transition-all duration-300 transform group-hover:-translate-y-1 pl-20 pr-6 py-4 flex flex-col justify-between`}>
                  <div>
                    <div className={`text-sm font-extrabold ${FLOW_SERVICES[1].accentColor} font-mono leading-none mb-1`}>
                      {FLOW_SERVICES[1].number}
                    </div>
                    <h3 className={`text-xl font-bold text-[#111827] font-sans tracking-tight leading-tight ${FLOW_SERVICES[1].hoverText} transition-colors`}>
                      {FLOW_SERVICES[1].title}
                    </h3>
                    <p className="text-xs text-[#4B5563] leading-snug mt-1 line-clamp-2">
                      {FLOW_SERVICES[1].description}
                    </p>
                  </div>
                  <div className={`flex items-center gap-1.5 text-xs font-bold ${FLOW_SERVICES[1].accentColor} pt-1`}>
                    <span>Explore Details</span>
                    <span className={`w-5 h-5 rounded-full ${FLOW_SERVICES[1].accentBg} text-white flex items-center justify-center transition-transform group-hover:translate-x-1`}>
                      <ArrowRight className="w-3 h-3" />
                    </span>
                  </div>
                </div>
              </div>
            </RevealOnScroll>
          </div>

          {/* ═══ ROW 2: 03 (Left) & 04 (Right) ═══ */}
          {/* Card 03: Custom Software */}
          <div className="absolute left-0 top-[225px] w-[450px] h-[140px] z-20">
            <RevealOnScroll delay={0.25}>
              <div
                onClick={() => scrollToService(FLOW_SERVICES[2].targetId)}
                className="group relative w-full h-[140px] flex items-center cursor-pointer"
              >
                {/* 3D Circular Pedestal Icon */}
                <div className="absolute left-0 top-1/2 -translate-y-1/2 z-20 w-[128px] h-[128px]">
                  <div
                    className="absolute inset-2 rounded-full blur-xl pointer-events-none opacity-80 group-hover:opacity-100 transition-opacity"
                    style={{ backgroundColor: FLOW_SERVICES[2].glowColor }}
                  />
                  <div className="relative w-full h-full transition-transform duration-300 group-hover:scale-105">
                    <Image
                      src={FLOW_SERVICES[2].pedestalImage}
                      alt={FLOW_SERVICES[2].title}
                      fill
                      sizes="128px"
                      className="object-contain drop-shadow-[0_8px_16px_rgba(0,0,0,0.15)]"
                    />
                  </div>
                </div>

                {/* White Capsule Pill Card */}
                <div className={`absolute left-[52px] right-0 top-0 bottom-0 rounded-[38px] bg-white/95 border border-white/90 shadow-[0_16px_36px_rgba(0,0,0,0.06),0_2px_8px_rgba(0,0,0,0.02),inset_0_1px_2px_white] ${FLOW_SERVICES[2].hoverShadow} transition-all duration-300 transform group-hover:-translate-y-1 pl-20 pr-6 py-4 flex flex-col justify-between`}>
                  <div>
                    <div className={`text-sm font-extrabold ${FLOW_SERVICES[2].accentColor} font-mono leading-none mb-1`}>
                      {FLOW_SERVICES[2].number}
                    </div>
                    <h3 className={`text-xl font-bold text-[#111827] font-sans tracking-tight leading-tight ${FLOW_SERVICES[2].hoverText} transition-colors`}>
                      {FLOW_SERVICES[2].title}
                    </h3>
                    <p className="text-xs text-[#4B5563] leading-snug mt-1 line-clamp-2">
                      {FLOW_SERVICES[2].description}
                    </p>
                  </div>
                  <div className={`flex items-center gap-1.5 text-xs font-bold ${FLOW_SERVICES[2].accentColor} pt-1`}>
                    <span>Explore Details</span>
                    <span className={`w-5 h-5 rounded-full ${FLOW_SERVICES[2].accentBg} text-white flex items-center justify-center transition-transform group-hover:translate-x-1`}>
                      <ArrowRight className="w-3 h-3" />
                    </span>
                  </div>
                </div>
              </div>
            </RevealOnScroll>
          </div>

          {/* Card 04: SaaS Products */}
          <div className="absolute left-[570px] top-[225px] w-[450px] h-[140px] z-20">
            <RevealOnScroll delay={0.35}>
              <div
                onClick={() => scrollToService(FLOW_SERVICES[3].targetId)}
                className="group relative w-full h-[140px] flex items-center cursor-pointer"
              >
                {/* 3D Circular Pedestal Icon */}
                <div className="absolute left-0 top-1/2 -translate-y-1/2 z-20 w-[128px] h-[128px]">
                  <div
                    className="absolute inset-2 rounded-full blur-xl pointer-events-none opacity-80 group-hover:opacity-100 transition-opacity"
                    style={{ backgroundColor: FLOW_SERVICES[3].glowColor }}
                  />
                  <div className="relative w-full h-full transition-transform duration-300 group-hover:scale-105">
                    <Image
                      src={FLOW_SERVICES[3].pedestalImage}
                      alt={FLOW_SERVICES[3].title}
                      fill
                      sizes="128px"
                      className="object-contain drop-shadow-[0_8px_16px_rgba(0,0,0,0.15)]"
                    />
                  </div>
                </div>

                {/* White Capsule Pill Card */}
                <div className={`absolute left-[52px] right-0 top-0 bottom-0 rounded-[38px] bg-white/95 border border-white/90 shadow-[0_16px_36px_rgba(0,0,0,0.06),0_2px_8px_rgba(0,0,0,0.02),inset_0_1px_2px_white] ${FLOW_SERVICES[3].hoverShadow} transition-all duration-300 transform group-hover:-translate-y-1 pl-20 pr-6 py-4 flex flex-col justify-between`}>
                  <div>
                    <div className={`text-sm font-extrabold ${FLOW_SERVICES[3].accentColor} font-mono leading-none mb-1`}>
                      {FLOW_SERVICES[3].number}
                    </div>
                    <h3 className={`text-xl font-bold text-[#111827] font-sans tracking-tight leading-tight ${FLOW_SERVICES[3].hoverText} transition-colors`}>
                      {FLOW_SERVICES[3].title}
                    </h3>
                    <p className="text-xs text-[#4B5563] leading-snug mt-1 line-clamp-2">
                      {FLOW_SERVICES[3].description}
                    </p>
                  </div>
                  <div className={`flex items-center gap-1.5 text-xs font-bold ${FLOW_SERVICES[3].accentColor} pt-1`}>
                    <span>Explore Details</span>
                    <span className={`w-5 h-5 rounded-full ${FLOW_SERVICES[3].accentBg} text-white flex items-center justify-center transition-transform group-hover:translate-x-1`}>
                      <ArrowRight className="w-3 h-3" />
                    </span>
                  </div>
                </div>
              </div>
            </RevealOnScroll>
          </div>

          {/* ═══ ROW 3: 05 (Left) & 06 (Right) ═══ */}
          {/* Card 05: UI/UX Design */}
          <div className="absolute left-0 top-[425px] w-[450px] h-[140px] z-20">
            <RevealOnScroll delay={0.45}>
              <div
                onClick={() => scrollToService(FLOW_SERVICES[4].targetId)}
                className="group relative w-full h-[140px] flex items-center cursor-pointer"
              >
                {/* 3D Circular Pedestal Icon */}
                <div className="absolute left-0 top-1/2 -translate-y-1/2 z-20 w-[128px] h-[128px]">
                  <div
                    className="absolute inset-2 rounded-full blur-xl pointer-events-none opacity-80 group-hover:opacity-100 transition-opacity"
                    style={{ backgroundColor: FLOW_SERVICES[4].glowColor }}
                  />
                  <div className="relative w-full h-full transition-transform duration-300 group-hover:scale-105">
                    <Image
                      src={FLOW_SERVICES[4].pedestalImage}
                      alt={FLOW_SERVICES[4].title}
                      fill
                      sizes="128px"
                      className="object-contain drop-shadow-[0_8px_16px_rgba(0,0,0,0.15)]"
                    />
                  </div>
                </div>

                {/* White Capsule Pill Card */}
                <div className={`absolute left-[52px] right-0 top-0 bottom-0 rounded-[38px] bg-white/95 border border-white/90 shadow-[0_16px_36px_rgba(0,0,0,0.06),0_2px_8px_rgba(0,0,0,0.02),inset_0_1px_2px_white] ${FLOW_SERVICES[4].hoverShadow} transition-all duration-300 transform group-hover:-translate-y-1 pl-20 pr-6 py-4 flex flex-col justify-between`}>
                  <div>
                    <div className={`text-sm font-extrabold ${FLOW_SERVICES[4].accentColor} font-mono leading-none mb-1`}>
                      {FLOW_SERVICES[4].number}
                    </div>
                    <h3 className={`text-xl font-bold text-[#111827] font-sans tracking-tight leading-tight ${FLOW_SERVICES[4].hoverText} transition-colors`}>
                      {FLOW_SERVICES[4].title}
                    </h3>
                    <p className="text-xs text-[#4B5563] leading-snug mt-1 line-clamp-2">
                      {FLOW_SERVICES[4].description}
                    </p>
                  </div>
                  <div className={`flex items-center gap-1.5 text-xs font-bold ${FLOW_SERVICES[4].accentColor} pt-1`}>
                    <span>Explore Details</span>
                    <span className={`w-5 h-5 rounded-full ${FLOW_SERVICES[4].accentBg} text-white flex items-center justify-center transition-transform group-hover:translate-x-1`}>
                      <ArrowRight className="w-3 h-3" />
                    </span>
                  </div>
                </div>
              </div>
            </RevealOnScroll>
          </div>

          {/* Card 06: Digital Marketing */}
          <div className="absolute left-[570px] top-[425px] w-[450px] h-[140px] z-20">
            <RevealOnScroll delay={0.55}>
              <div
                onClick={() => scrollToService(FLOW_SERVICES[5].targetId)}
                className="group relative w-full h-[140px] flex items-center cursor-pointer"
              >
                {/* 3D Circular Pedestal Icon */}
                <div className="absolute left-0 top-1/2 -translate-y-1/2 z-20 w-[128px] h-[128px]">
                  <div
                    className="absolute inset-2 rounded-full blur-xl pointer-events-none opacity-80 group-hover:opacity-100 transition-opacity"
                    style={{ backgroundColor: FLOW_SERVICES[5].glowColor }}
                  />
                  <div className="relative w-full h-full transition-transform duration-300 group-hover:scale-105">
                    <Image
                      src={FLOW_SERVICES[5].pedestalImage}
                      alt={FLOW_SERVICES[5].title}
                      fill
                      sizes="128px"
                      className="object-contain drop-shadow-[0_8px_16px_rgba(0,0,0,0.15)]"
                    />
                  </div>
                </div>

                {/* White Capsule Pill Card */}
                <div className={`absolute left-[52px] right-0 top-0 bottom-0 rounded-[38px] bg-white/95 border border-white/90 shadow-[0_16px_36px_rgba(0,0,0,0.06),0_2px_8px_rgba(0,0,0,0.02),inset_0_1px_2px_white] ${FLOW_SERVICES[5].hoverShadow} transition-all duration-300 transform group-hover:-translate-y-1 pl-20 pr-6 py-4 flex flex-col justify-between`}>
                  <div>
                    <div className={`text-sm font-extrabold ${FLOW_SERVICES[5].accentColor} font-mono leading-none mb-1`}>
                      {FLOW_SERVICES[5].number}
                    </div>
                    <h3 className={`text-xl font-bold text-[#111827] font-sans tracking-tight leading-tight ${FLOW_SERVICES[5].hoverText} transition-colors`}>
                      {FLOW_SERVICES[5].title}
                    </h3>
                    <p className="text-xs text-[#4B5563] leading-snug mt-1 line-clamp-2">
                      {FLOW_SERVICES[5].description}
                    </p>
                  </div>
                  <div className={`flex items-center gap-1.5 text-xs font-bold ${FLOW_SERVICES[5].accentColor} pt-1`}>
                    <span>Explore Details</span>
                    <span className={`w-5 h-5 rounded-full ${FLOW_SERVICES[5].accentBg} text-white flex items-center justify-center transition-transform group-hover:translate-x-1`}>
                      <ArrowRight className="w-3 h-3" />
                    </span>
                  </div>
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </div>

        {/* ─── Mobile / Tablet Responsive View: Vertical Connected Flow ─── */}
        <div className="lg:hidden relative space-y-6 max-w-md mx-auto pt-4">
          {/* Vertical connecting line */}
          <div className="absolute left-8 top-10 bottom-10 w-[3px] bg-gradient-to-b from-[#3B82F6] via-[#F59E0B] to-[#F43F5E] opacity-40 pointer-events-none" />

          {FLOW_SERVICES.map((service, index) => (
            <RevealOnScroll key={service.number} delay={index * 0.08}>
              <div
                onClick={() => scrollToService(service.targetId)}
                className="group relative flex items-center bg-white/95 rounded-[32px] p-4 pr-6 border border-white/80 shadow-[0_16px_36px_rgba(0,0,0,0.06),inset_0_1px_2px_white] hover:shadow-xl transition-all duration-300 cursor-pointer"
              >
                {/* 3D Circular Pedestal Icon */}
                <div className="relative shrink-0 -ml-5 mr-3">
                  <div
                    className="absolute inset-0 rounded-full blur-lg opacity-70 pointer-events-none"
                    style={{ backgroundColor: service.glowColor }}
                  />
                  <div className="relative w-20 h-20 sm:w-24 sm:h-24 transition-transform duration-300 group-hover:scale-105">
                    <Image
                      src={service.pedestalImage}
                      alt={service.title}
                      fill
                      sizes="96px"
                      className="object-contain drop-shadow-md"
                    />
                  </div>
                </div>

                {/* Card Content */}
                <div className="flex-1">
                  <div className={`text-sm font-extrabold ${service.accentColor} font-mono`}>
                    {service.number}
                  </div>
                  <h3 className="text-lg font-bold text-[#111827] font-sans tracking-tight mb-1">
                    {service.title}
                  </h3>
                  <p className="text-xs text-[#4B5563] leading-relaxed mb-2 line-clamp-2">
                    {service.description}
                  </p>
                  <div className={`flex items-center gap-1.5 text-xs font-bold ${service.accentColor}`}>
                    <span>Explore Details</span>
                    <span className={`w-5 h-5 rounded-full ${service.accentBg} text-white flex items-center justify-center`}>
                      <ArrowRight className="w-3 h-3" />
                    </span>
                  </div>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>

        {/* ─── Bottom CTA ─── */}
        <div className="mt-16 lg:mt-20 text-center">
          <RevealOnScroll delay={0.2}>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-[#111827] text-white font-bold text-sm sm:text-base hover:bg-[#8B5CF6] shadow-lg shadow-[#111827]/10 hover:shadow-[#8B5CF6]/25 transition-all transform hover:-translate-y-0.5 cursor-pointer"
            >
              <span>Discuss Your Requirement</span>
              <ArrowRight className="w-4 h-4 text-[#FCB116]" />
            </Link>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}
