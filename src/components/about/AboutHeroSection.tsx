"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { RevealOnScroll } from "@/components/shared/RevealOnScroll";
import { WordReveal, ParagraphReveal } from "@/components/shared/WordReveal";
import { AboutLogoShowcase } from "./AboutLogoShowcase";

export function AboutHeroSection() {
  return (
    <section className="pt-28 sm:pt-32 lg:pt-36 pb-20 lg:pb-28 bg-[#FFFFFF] relative overflow-hidden border-b border-[#C6C2C1]/40">
      {/* Background Ambient Atmospheric Lighting */}
      <div className="absolute inset-0 bg-dot-light opacity-30 pointer-events-none" />
      <div className="absolute -top-28 -left-20 w-[550px] h-[550px] bg-[#502D6D]/[0.06] rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/2 -right-20 w-[500px] h-[500px] bg-[#FCB116]/[0.08] rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Left Column: Narrative Content */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <RevealOnScroll>
              {/* Tagline Badge */}
              <div className="inline-flex items-center gap-2.5 mb-2">
                <span className="w-5 sm:w-6 h-[2px] rounded-full bg-gradient-to-r from-orange-400 to-[#7C3AED]" />
                <span className="font-syne text-xs sm:text-sm font-extrabold uppercase tracking-[0.2em] text-[#502D6D]">
                  About Pep Software
                </span>
                <span className="w-5 sm:w-6 h-[2px] rounded-full bg-gradient-to-r from-[#7C3AED] to-orange-400" />
              </div>

              {/* Main Headline: Exactly matching user brief */}
              <WordReveal
                as="h1"
                text="We Build Digital Solutions That Move Businesses Forward."
                gradientWords="Move Businesses Forward."
                gradientClassName="text-[#502D6D]"
                className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black tracking-tight text-[#151515] leading-[1.08] mt-3"
              />

              {/* Description Paragraph 1 */}
              <ParagraphReveal
                text="Pep Software is a software and digital product development company helping businesses turn ideas, challenges and opportunities into practical digital solutions."
                delay={0.12}
                className="text-base sm:text-lg text-[#544643] leading-relaxed max-w-2xl font-normal mt-4"
              />

              {/* Description Paragraph 2 */}
              <ParagraphReveal
                text="From websites and mobile applications to custom software and SaaS products, we combine thoughtful design, modern technology and business understanding to create solutions that make a real difference."
                delay={0.2}
                className="text-sm sm:text-base text-[#544643]/90 leading-relaxed max-w-2xl font-normal mt-3"
              />

              {/* Key Capability Highlights */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 pt-3">
                {[
                  "Web & Web Apps",
                  "Mobile Applications",
                  "Custom Software",
                  "SaaS Products",
                  "UI/UX Design",
                  "Digital Solutions",
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2 text-xs sm:text-sm font-bold text-[#151515] bg-slate-50 border border-slate-200/70 px-3 py-1.5 rounded-full"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FCB116] shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              {/* Action CTAs */}
              <div className="flex flex-wrap items-center gap-4 pt-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#151515] text-[#F7F8F8] font-bold text-sm hover:bg-[#502D6D] shadow-md shadow-[#151515]/10 hover:shadow-[#502D6D]/20 transition-all cursor-pointer group"
                >
                  <span>Start a Project</span>
                  <ArrowRight className="w-4 h-4 text-[#FCB116] transition-transform group-hover:translate-x-1" />
                </Link>

                <Link
                  href="/work"
                  className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-white text-[#151515] font-bold text-sm border border-[#C6C2C1]/70 hover:border-[#502D6D] hover:text-[#502D6D] shadow-xs transition-all cursor-pointer group"
                >
                  <span>Explore Our Work</span>
                  <ArrowRight className="w-4 h-4 text-[#502D6D] transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </RevealOnScroll>
          </div>

          {/* Right Column: Interactive 3D Logo Showcase */}
          <div className="lg:col-span-5 flex items-center justify-center">
            <RevealOnScroll delay={0.2}>
              <AboutLogoShowcase />
            </RevealOnScroll>
          </div>
        </div>
      </div>
    </section>
  );
}
