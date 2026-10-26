"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { RevealOnScroll } from "@/components/shared/RevealOnScroll";
import { CeoSection } from "./CeoSection";

export function AboutTeamSection() {
  return (
    <div className="bg-white">
      {/* ─────────────────────────────────────────────────────────────
          07. OUR TEAM: COLLABORATIVE CULTURE & TALENT
          ───────────────────────────────────────────────────────────── */}
      <section className="py-20 lg:py-24 bg-gradient-to-b from-white via-purple-50/15 to-white relative overflow-hidden border-b border-[#C6C2C1]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Header & Overview */}
          <div className="text-center max-w-3xl mx-auto mb-14">
            <RevealOnScroll>
              <div className="inline-flex items-center gap-2.5 mb-2">
                <span className="w-5 sm:w-6 h-[2px] rounded-full bg-gradient-to-r from-orange-400 to-[#7C3AED]" />
                <span className="font-syne text-xs sm:text-sm font-extrabold uppercase tracking-[0.2em] text-[#502D6D]">
                  Our Team
                </span>
                <span className="w-5 sm:w-6 h-[2px] rounded-full bg-gradient-to-r from-[#7C3AED] to-orange-400" />
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#151515] tracking-tight leading-tight mt-1">
                A Team of Designers, Developers &{" "}
                <span className="text-[#502D6D] bg-gradient-to-r from-[#502D6D] via-[#7C3AED] to-[#9333EA] bg-clip-text text-transparent">
                  Problem Solvers.
                </span>
              </h2>

              <p className="mt-4 text-base sm:text-lg text-[#544643] leading-relaxed">
                Behind every successful digital product is a team that understands both technology and people.
                At Pep Software, our designers, developers and technology professionals work together throughout the project lifecycle — from understanding requirements and designing experiences to development, testing and launch.
              </p>

              <p className="mt-2 text-base text-[#544643] font-medium">
                We believe collaboration produces better products.
              </p>
            </RevealOnScroll>
          </div>

          {/* Supporting Highlight Banner */}
          <div className="max-w-3xl mx-auto">
            <RevealOnScroll delay={0.15}>
              <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-[#502D6D]/[0.06] via-purple-50/60 to-amber-50/40 border border-purple-200/80 text-center shadow-xs">
                <span className="text-xs font-bold uppercase tracking-widest text-[#502D6D] block mb-2">
                  Our Collective Mindset
                </span>
                <p className="text-lg sm:text-xl font-black text-[#151515] tracking-tight">
                  &ldquo;Different skills. One team. One goal — building something that works.&rdquo;
                </p>

                <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-[#151515] hover:bg-[#502D6D] text-white font-bold text-sm shadow-md transition-all cursor-pointer group"
                  >
                    <span>Meet Our Team</span>
                    <ArrowRight className="w-4 h-4 text-[#FCB116] group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </RevealOnScroll>
          </div>

        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          LEADERSHIP & CEO SECTION (Preserving CeoSection)
          ───────────────────────────────────────────────────────────── */}
      <CeoSection />
    </div>
  );
}
