"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Mail } from "lucide-react";
import { RevealOnScroll } from "@/components/shared/RevealOnScroll";

export function AboutClosingCTA() {
  return (
    <section className="py-24 lg:py-32 bg-gradient-to-b from-white via-purple-50/25 to-[#F8FAFC] relative overflow-hidden">
      {/* Ambient Lighting Accents */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-purple-100/40 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <RevealOnScroll>
          {/* Tagline */}
          <div className="inline-flex items-center gap-2.5 mb-3">
            <span className="w-5 sm:w-6 h-[2px] rounded-full bg-gradient-to-r from-orange-400 to-[#7C3AED]" />
            <span className="font-syne text-xs sm:text-sm font-extrabold uppercase tracking-[0.2em] text-[#502D6D]">
              Let&apos;s Work Together
            </span>
            <span className="w-5 sm:w-6 h-[2px] rounded-full bg-gradient-to-r from-[#7C3AED] to-orange-400" />
          </div>

          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black text-[#151515] tracking-tight leading-[1.1] mt-2">
            Have an Idea?{" "}
            <span className="text-[#502D6D] bg-gradient-to-r from-[#502D6D] via-[#7C3AED] to-[#9333EA] bg-clip-text text-transparent">
              Let&apos;s Build It Together.
            </span>
          </h2>

          {/* Description */}
          <p className="mt-5 text-base sm:text-lg text-[#544643] leading-relaxed max-w-2xl mx-auto">
            Whether you need a new website, mobile application, custom software or have an idea for a SaaS product, we&apos;d love to hear about it.
          </p>

          <p className="mt-2 text-sm sm:text-base text-[#544643]/85 leading-relaxed max-w-2xl mx-auto">
            Tell us what you&apos;re trying to build, the challenge you&apos;re trying to solve or simply where you&apos;d like to start.
          </p>

          {/* Action Buttons */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4 sm:gap-5">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2.5 px-9 py-4 rounded-full bg-[#151515] hover:bg-[#502D6D] text-white font-extrabold text-sm sm:text-base shadow-xl shadow-[#151515]/15 hover:shadow-2xl hover:shadow-[#502D6D]/30 transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer group"
            >
              <span>Start a Project</span>
              <ArrowRight className="w-4 h-4 text-[#FCB116] group-hover:translate-x-1 transition-transform" />
            </Link>

            <a
              href="mailto:hello@pepsoftwares.com"
              className="inline-flex items-center gap-2.5 px-9 py-4 rounded-full bg-white hover:bg-slate-50 text-[#151515] font-extrabold text-sm sm:text-base border border-slate-300 shadow-sm transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer group"
            >
              <Mail className="w-4 h-4 text-[#502D6D]" />
              <span>Talk to Us</span>
              <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-[#502D6D] group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          {/* Trust Footnote */}
          <div className="mt-8 pt-6 border-t border-slate-200/60 flex items-center justify-center gap-6 text-xs text-slate-500 font-semibold">
            <span>⚡ Rapid Response within 24h</span>
            <span>•</span>
            <span>🔒 Confidential & NDA-backed</span>
            <span>•</span>
            <span>📍 Erode, Tamil Nadu, India</span>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
