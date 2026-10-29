"use client";

import Link from "next/link";
import { ArrowRight, PhoneCall, Sparkles, MessageSquare } from "lucide-react";
import { WordReveal, ParagraphReveal } from "@/components/shared/WordReveal";
import { RevealOnScroll } from "@/components/shared/RevealOnScroll";
import { COMPANY_INFO } from "@/lib/constants";

export function TestimonialsFinalCTA() {
  return (
    <section className="py-20 lg:py-28 bg-[#F7F8F8] relative overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[500px] bg-gradient-to-r from-[#502D6D]/[0.08] to-[#FCB116]/[0.1] blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main CTA Spotlight Box */}
        <RevealOnScroll>
          <div className="rounded-[36px] sm:rounded-[44px] bg-gradient-to-br from-[#151515] via-[#210D30] to-[#12051E] border border-[#502D6D]/60 p-8 sm:p-14 lg:p-20 text-center shadow-2xl relative overflow-hidden">
            {/* Ambient inner gradients & starlight dots */}
            <div className="absolute -top-24 -left-24 w-80 h-80 bg-[#502D6D]/40 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute -bottom-24 -right-24 w-80 h-80 bg-[#FCB116]/25 rounded-full blur-[100px] pointer-events-none" />

            <div className="relative z-10 max-w-3xl mx-auto space-y-6">
              {/* Heading */}
              <WordReveal
                as="h2"
                text="Your Project Could Be Our Next Success Story."
                gradientWords="Our Next Success Story."
                gradientClassName="text-[#FCB116]"
                className="text-3xl sm:text-4xl lg:text-5xl sm:leading-tight font-extrabold text-white tracking-tight"
              />

              {/* Description */}
              <div className="space-y-2 pt-1">
                <ParagraphReveal
                  text="Have an idea, business challenge or project in mind?"
                  delay={0.12}
                  className="text-base sm:text-lg text-[#E3DAF3] font-medium"
                />
                <ParagraphReveal
                  text="Let's understand what you need and explore how Pep Software can help."
                  delay={0.2}
                  className="text-sm sm:text-base text-[#D4C7EC]/90 font-normal max-w-xl mx-auto"
                />
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center justify-center gap-4 pt-6">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-[#FCB116] text-[#151515] font-extrabold text-sm hover:bg-white shadow-xl shadow-[#FCB116]/20 transition-all hover:scale-105 active:scale-95 group"
                >
                  <span>Start a Project</span>
                  <ArrowRight className="w-4 h-4 text-[#151515] transition-transform group-hover:translate-x-1" />
                </Link>

                <a
                  href={`tel:${COMPANY_INFO.phoneRaw}`}
                  className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-white/10 hover:bg-white/15 text-white font-bold text-sm border border-white/20 backdrop-blur-sm transition-all hover:scale-105 active:scale-95"
                >
                  <PhoneCall className="w-4 h-4 text-[#FCB116]" />
                  <span>Talk to Us</span>
                </a>
              </div>
            </div>
          </div>
        </RevealOnScroll>

        {/* Section 10 Transition Blurb */}
        <RevealOnScroll delay={0.2}>
          <div className="mt-14 pt-10 border-t border-[#C6C2C1]/40 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
            <p className="text-sm sm:text-base text-[#544643] max-w-2xl font-normal leading-relaxed">
              Pep Software designs and develops websites, mobile apps, custom software and digital products for businesses.
            </p>

            <Link
              href="/contact"
              className="inline-flex items-center gap-2 text-sm font-extrabold text-[#502D6D] hover:text-[#FCB116] transition-colors shrink-0 group"
            >
              <span>Let&apos;s Build Something</span>
              <ArrowRight className="w-4 h-4 text-[#FCB116] transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
