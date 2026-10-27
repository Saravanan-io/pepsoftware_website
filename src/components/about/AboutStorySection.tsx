"use client";

import React from "react";
import dynamic from "next/dynamic";
import {
  Eye,
  Target,
  CheckCircle2,
} from "lucide-react";
import { RevealOnScroll } from "@/components/shared/RevealOnScroll";
import { AboutPhilosophySection } from "./AboutPhilosophySection";

// Dynamically import the 3D ribbon to avoid SSR/hydration issues
const Story3DFlowRibbon = dynamic(
  () => import("./Story3DFlowRibbon").then((mod) => mod.Story3DFlowRibbon),
  {
    ssr: false,
    loading: () => (
      <div className="w-full h-full min-h-[420px] flex items-center justify-center">
        <div className="w-48 h-48 rounded-full bg-purple-500/10 blur-2xl animate-pulse" />
      </div>
    ),
  }
);

export function AboutStorySection() {
  return (
    <div className="bg-[#FFFFFF]">
      {/* ─────────────────────────────────────────────────────────────
          02. OUR STORY (Exact Match to Reference Design)
          ───────────────────────────────────────────────────────────── */}
      <section className="py-24 sm:py-32 lg:pt-36 lg:pb-32 bg-[#09061C] bg-gradient-to-br from-[#08051A] via-[#120B38] to-[#1E0D43] text-white relative overflow-hidden select-none">
        {/* Ambient Radial Gradient Glows (Exact Match to Reference Colors) */}
        <div className="absolute -top-32 -right-32 w-[650px] h-[650px] bg-gradient-to-bl from-[#F59E0B]/25 via-[#EC4899]/15 to-transparent rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute top-1/4 left-1/4 w-[700px] h-[700px] bg-[#7C3AED]/20 rounded-full blur-[150px] pointer-events-none" />
        <div className="absolute -bottom-32 left-1/3 w-[550px] h-[550px] bg-[#581C87]/25 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute top-0 right-0 w-[420px] h-full bg-gradient-to-l from-[#F59E0B]/[0.07] via-transparent to-transparent pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Main Top Content Grid: Text Narrative Left + 3D Flow Ribbon Right */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center mb-16 lg:mb-24">
            
            {/* Left Narrative Column */}
            <div className="lg:col-span-6 space-y-5">
              <RevealOnScroll>
                {/* Tagline */}
                <div className="flex items-center gap-3 mb-5">
                  <span className="w-7 h-[3px] rounded-full bg-gradient-to-r from-[#F59E0B] to-[#EA580C]" />
                  <span className="font-mono text-xs sm:text-sm font-bold uppercase tracking-[0.25em] text-purple-200/90">
                    OUR STORY
                  </span>
                </div>

                {/* Main Headline */}
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.08]">
                  Ideas deserve <br />
                  to become{" "}
                  <span className="bg-gradient-to-r from-[#C084FC] via-[#E879F9] to-[#FB923C] bg-clip-text text-transparent">
                    reality.
                  </span>
                </h2>

                {/* Narrative Paragraphs */}
                <div className="space-y-4 pt-3 max-w-xl">
                  <p className="text-sm sm:text-base text-purple-100/80 leading-relaxed font-normal">
                    Pep Software was established in 2021 with a simple goal — to help businesses use technology in a way that is practical, meaningful and easy to adopt.
                  </p>

                  <p className="text-sm sm:text-base text-purple-100/80 leading-relaxed font-normal">
                    What started with a focus on design and digital experiences has grown into a broader software development capability covering websites, web applications, mobile applications, custom software and SaaS products.
                  </p>

                  <p className="text-sm sm:text-base text-purple-100/80 leading-relaxed font-normal">
                    We believe great software isn&apos;t just about writing code. It is about understanding the business, solving the right problem and creating an experience that people can actually use.
                  </p>
                </div>
              </RevealOnScroll>
            </div>

            {/* Right Visual Column: 3D Flow Ribbon + Floating Metric Badge */}
            <div className="lg:col-span-6 relative flex items-center justify-center">
              <div className="relative w-full h-[420px] sm:h-[480px] lg:h-[540px] max-w-[560px] flex items-center justify-center">
                {/* 3D Animated Ribbon Canvas */}
                <Story3DFlowRibbon />

                {/* Floating Glassmorphic Metric Badge (Exact Match to Image) */}
                <div className="absolute top-1/2 right-0 sm:right-2 lg:right-0 -translate-y-1/2 z-20 flex items-center gap-3.5 sm:gap-4 pointer-events-auto">
                  {/* Circular Glassmorphic Disc */}
                  <div className="w-32 h-32 sm:w-36 sm:h-36 rounded-full bg-white/[0.08] backdrop-blur-xl border border-white/20 shadow-[0_20px_50px_rgba(0,0,0,0.5)] flex flex-col items-center justify-center text-center p-3 relative group">
                    <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-purple-500/10 to-amber-500/15 pointer-events-none" />
                    <span className="text-[9px] font-bold tracking-[0.25em] text-purple-200/80 uppercase">
                      MORE THAN
                    </span>
                    <span className="text-4xl sm:text-5xl font-black text-white leading-none my-1 tracking-tight">
                      5+
                    </span>
                    <span className="text-[9px] font-bold tracking-[0.3em] text-purple-200/80 uppercase">
                      YEARS
                    </span>
                  </div>

                  {/* Vertical Divider Line */}
                  <div className="w-[1px] h-12 bg-white/20 hidden sm:block" />

                  {/* Text Beside Badge */}
                  <div className="hidden sm:block">
                    <p className="text-xs sm:text-sm font-medium text-purple-100/90 leading-snug max-w-[130px]">
                      of building <br />
                      better digital <br />
                      experiences.
                    </p>
                    <div className="w-8 h-[2px] bg-gradient-to-r from-amber-400 to-orange-500 rounded-full mt-2.5" />
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* ── Bottom Glowing Timeline (Exact Match to Reference Image) ── */}
          <div className="pt-6 border-t border-purple-900/30">
            {/* Horizontal Timeline Bar Container */}
            <div className="relative">
              {/* Glowing Gradient Connecting Road / Line with Arrow */}
              <div className="hidden md:flex items-center absolute top-10 left-3 right-0 z-0">
                <div className="flex-1 h-[2px] bg-gradient-to-r from-white/40 via-[#A855F7] to-[#F59E0B] shadow-[0_0_12px_rgba(168,85,247,0.5)]" />
                <span className="text-[#F59E0B] text-base font-black shrink-0 -ml-1">
                  ▶
                </span>
              </div>

              {/* 4 Milestone Columns */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-6 relative z-10">
                {/* Milestone 2021 */}
                <div className="relative">
                  <span className="text-2xl sm:text-3xl font-black text-white tracking-tight block">
                    2021
                  </span>

                  {/* Node Dot on the Line */}
                  <div className="my-3 hidden md:flex items-center">
                    <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center">
                      <div className="w-2.5 h-2.5 rounded-full bg-white shadow-[0_0_12px_#FFFFFF]" />
                    </div>
                  </div>

                  <h4 className="font-bold text-sm sm:text-base text-white mt-1">
                    Founded with Design Focus
                  </h4>
                  <p className="text-xs text-purple-200/70 mt-1 leading-relaxed max-w-[210px]">
                    Digital design and human-centric interfaces.
                  </p>
                </div>

                {/* Milestone 2022 */}
                <div className="relative">
                  <span className="text-2xl sm:text-3xl font-black text-white tracking-tight block">
                    2022
                  </span>

                  {/* Node Dot on the Line */}
                  <div className="my-3 hidden md:flex items-center">
                    <div className="w-5 h-5 rounded-full bg-[#A855F7]/30 flex items-center justify-center">
                      <div className="w-2.5 h-2.5 rounded-full bg-[#A855F7] shadow-[0_0_12px_#A855F7]" />
                    </div>
                  </div>

                  <h4 className="font-bold text-sm sm:text-base text-white mt-1">
                    Web & Mobile Expansion
                  </h4>
                  <p className="text-xs text-purple-200/70 mt-1 leading-relaxed max-w-[210px]">
                    Cross-platform mobile apps and responsive web portals.
                  </p>
                </div>

                {/* Milestone 2023 */}
                <div className="relative">
                  <span className="text-2xl sm:text-3xl font-black text-white tracking-tight block">
                    2023
                  </span>

                  {/* Node Dot on the Line */}
                  <div className="my-3 hidden md:flex items-center">
                    <div className="w-5 h-5 rounded-full bg-[#C084FC]/30 flex items-center justify-center">
                      <div className="w-2.5 h-2.5 rounded-full bg-[#C084FC] shadow-[0_0_12px_#C084FC]" />
                    </div>
                  </div>

                  <h4 className="font-bold text-sm sm:text-base text-white mt-1">
                    Enterprise Custom Software
                  </h4>
                  <p className="text-xs text-purple-200/70 mt-1 leading-relaxed max-w-[210px]">
                    Business workflows, quotation engines, and CRM integrations.
                  </p>
                </div>

                {/* Milestone 2024+ */}
                <div className="relative">
                  <span className="text-2xl sm:text-3xl font-black text-white tracking-tight block">
                    2024+
                  </span>

                  {/* Node Dot on the Line */}
                  <div className="my-3 hidden md:flex items-center">
                    <div className="w-5 h-5 rounded-full bg-[#F59E0B]/30 flex items-center justify-center">
                      <div className="w-2.5 h-2.5 rounded-full bg-[#F59E0B] shadow-[0_0_12px_#F59E0B]" />
                    </div>
                  </div>

                  <h4 className="font-bold text-sm sm:text-base text-white mt-1">
                    SaaS Products & Cloud Platforms
                  </h4>
                  <p className="text-xs text-purple-200/70 mt-1 leading-relaxed max-w-[210px]">
                    Scalable multi-tenant products and cloud automation.
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          03. WHAT WE BELIEVE (OUR PHILOSOPHY)
          ───────────────────────────────────────────────────────────── */}
      <AboutPhilosophySection />

      {/* ─────────────────────────────────────────────────────────────
          04. MISSION & VISION
          ───────────────────────────────────────────────────────────── */}
      <section className="py-20 lg:py-28 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-16">
            <RevealOnScroll>
              <div className="inline-flex items-center gap-2.5 mb-2">
                <span className="w-5 sm:w-6 h-[2px] rounded-full bg-gradient-to-r from-orange-400 to-[#7C3AED]" />
                <span className="font-syne text-xs sm:text-sm font-extrabold uppercase tracking-[0.2em] text-[#502D6D]">
                  Our Mission & Vision
                </span>
                <span className="w-5 sm:w-6 h-[2px] rounded-full bg-gradient-to-r from-[#7C3AED] to-orange-400" />
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#151515] tracking-tight leading-tight mt-1">
                Guiding Principles for a{" "}
                <span className="text-[#502D6D] bg-gradient-to-r from-[#502D6D] via-[#7C3AED] to-[#9333EA] bg-clip-text text-transparent">
                  Digital Future.
                </span>
              </h2>
            </RevealOnScroll>
          </div>

          {/* Dual Mission & Vision Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            
            {/* Mission Card */}
            <RevealOnScroll delay={0.1}>
              <div className="relative rounded-[32px] p-8 sm:p-12 bg-gradient-to-br from-white via-purple-50/20 to-white border border-purple-100 shadow-[0_20px_50px_rgba(80,45,109,0.06)] hover:shadow-2xl hover:border-purple-300 transition-all duration-300 group h-full flex flex-col justify-between">
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-[#502D6D] text-white flex items-center justify-center shadow-lg shadow-[#502D6D]/20 mb-6 group-hover:scale-105 transition-transform">
                    <Target className="w-7 h-7 text-[#FCB116]" />
                  </div>

                  <span className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#502D6D] block mb-2">
                    Our Mission
                  </span>

                  <h3 className="text-2xl sm:text-3xl font-black text-[#151515] tracking-tight leading-tight mb-4">
                    Empowering Business Through Practical Engineering
                  </h3>

                  <p className="text-base sm:text-lg text-[#544643] leading-relaxed">
                    To help businesses embrace technology through thoughtfully designed and well-engineered digital solutions that simplify operations, improve customer experiences and create opportunities for growth.
                  </p>
                </div>

                <div className="mt-8 pt-6 border-t border-purple-100 flex items-center gap-2 text-xs font-bold text-[#502D6D]">
                  <CheckCircle2 className="w-4 h-4 text-[#FCB116]" />
                  <span>Simplify Operations • Elevate Experience • Accelerate Growth</span>
                </div>
              </div>
            </RevealOnScroll>

            {/* Vision Card */}
            <RevealOnScroll delay={0.2}>
              <div className="relative rounded-[32px] p-8 sm:p-12 bg-gradient-to-br from-white via-amber-50/20 to-white border border-amber-100 shadow-[0_20px_50px_rgba(252,177,22,0.06)] hover:shadow-2xl hover:border-amber-300 transition-all duration-300 group h-full flex flex-col justify-between">
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-[#151515] text-white flex items-center justify-center shadow-lg shadow-black/10 mb-6 group-hover:scale-105 transition-transform">
                    <Eye className="w-7 h-7 text-[#FCB116]" />
                  </div>

                  <span className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#B45309] block mb-2">
                    Our Vision
                  </span>

                  <h3 className="text-2xl sm:text-3xl font-black text-[#151515] tracking-tight leading-tight mb-4">
                    A Trusted Technology Partner for Enduring Value
                  </h3>

                  <p className="text-base sm:text-lg text-[#544643] leading-relaxed">
                    To become a trusted technology partner for businesses by continuously creating meaningful digital products, innovative solutions and long-term value through technology.
                  </p>
                </div>

                <div className="mt-8 pt-6 border-t border-amber-100 flex items-center gap-2 text-xs font-bold text-[#B45309]">
                  <CheckCircle2 className="w-4 h-4 text-[#FCB116]" />
                  <span>Meaningful Products • Scalable Innovations • Long-Term Value</span>
                </div>
              </div>
            </RevealOnScroll>

          </div>

        </div>
      </section>
    </div>
  );
}
