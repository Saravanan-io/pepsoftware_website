"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { RevealOnScroll } from "@/components/shared/RevealOnScroll";
import { Hero3DOrbitalAnimation } from "@/components/services/Hero3DOrbitalAnimation";

export function ServicesHeroSection() {
  return (
    <section className="relative pt-24 sm:pt-28 pb-16 lg:pb-24 bg-[#F7F8F8] border-b border-[#C6C2C1]/40 overflow-hidden">
      {/* Ambient Logo-Themed Glow Orbs */}
      <div className="absolute -top-32 -right-20 w-[600px] h-[600px] bg-[#502D6D]/[0.07] rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute -bottom-32 -left-20 w-[600px] h-[600px] bg-[#FCB116]/[0.08] rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute inset-0 bg-dot-light opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 xl:gap-12 items-center">
          {/* Left Column: Heading, Description, CTAs, Statistics */}
          <div className="lg:col-span-6 xl:col-span-6 space-y-6 text-center lg:text-left">
            <RevealOnScroll>
              {/* Minimalist Section Accent */}
              <div className="flex items-center justify-center lg:justify-start gap-2.5 mb-3">
                <span className="w-5 h-[2.5px] rounded-full bg-gradient-to-r from-[#502D6D] to-[#FCB116]" />
                <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#502D6D]">
                  Digital Excellence for Businesses
                </span>
              </div>

              {/* Exact Requested Heading */}
              <h1 className="text-4xl sm:text-5xl lg:text-5xl xl:text-6xl font-extrabold tracking-[-0.03em] text-[#151515] leading-[1.12]">
                Digital Solutions for Real{" "}
                <span className="text-[#502D6D] relative inline-block">
                  Business Needs.
                  <span className="absolute bottom-1 left-0 w-full h-[4px] bg-[#FCB116]/40 rounded-full" />
                </span>
              </h1>

              {/* Exact Requested Description */}
              <p className="text-base sm:text-lg text-[#544643] leading-relaxed max-w-xl mx-auto lg:mx-0 mt-5 font-normal">
                We design, develop and deliver digital solutions that help businesses work smarter, serve customers better and grow.
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-[#151515] text-[#F7F8F8] font-bold text-sm sm:text-base hover:bg-[#502D6D] shadow-lg shadow-[#151515]/15 hover:shadow-[#502D6D]/25 transition-all transform hover:-translate-y-0.5 cursor-pointer"
                >
                  <span>Start a Project</span>
                  <ArrowRight className="w-4 h-4 text-[#FCB116]" />
                </Link>
                <Link
                  href="/work"
                  className="inline-flex items-center gap-2 px-7 py-4 rounded-full bg-white border border-[#C6C2C1] text-[#151515] font-semibold text-sm sm:text-base hover:border-[#502D6D] hover:text-[#502D6D] shadow-xs hover:shadow-md transition-all cursor-pointer"
                >
                  <span>View Our Work</span>
                  <ArrowRight className="w-4 h-4 text-[#502D6D]" />
                </Link>
              </div>

              {/* Value Signals with default vibrant colors */}
              <div className="pt-8 border-t border-[#C6C2C1]/40 grid grid-cols-3 gap-4 max-w-lg mx-auto lg:mx-0">
                <div className="text-center lg:text-left">
                  <div className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#502D6D]">50+</div>
                  <div className="text-xs text-[#544643] font-medium mt-0.5">Projects Delivered</div>
                </div>
                <div className="text-center lg:text-left border-x border-[#C6C2C1]/40 px-3">
                  <div className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#FCB116]">100%</div>
                  <div className="text-xs text-[#544643] font-medium mt-0.5">In-House Quality</div>
                </div>
                <div className="text-center lg:text-left">
                  <div className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#059669]">4.9/5</div>
                  <div className="text-xs text-[#544643] font-medium mt-0.5">Client Rating</div>
                </div>
              </div>
            </RevealOnScroll>
          </div>

          {/* Right Column: Exact 3D Orbital Rotation Visual */}
          <div className="lg:col-span-6 xl:col-span-6 flex items-center justify-center relative">
            <RevealOnScroll delay={0.15}>
              <Hero3DOrbitalAnimation />
            </RevealOnScroll>
          </div>
        </div>
      </div>
    </section>
  );
}
