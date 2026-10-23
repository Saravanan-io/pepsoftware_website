"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Quote, Sparkles, CheckCircle2 } from "lucide-react";
import { RevealOnScroll } from "@/components/shared/RevealOnScroll";
import { WordReveal, ParagraphReveal } from "@/components/shared/WordReveal";

export function CeoSection() {
  const leadershipHighlights = [
    "Human-Centered Product Strategy",
    "Enterprise-Grade Software Rigor",
    "Radical Transparency & Collaboration",
    "Continuous Innovation & Mentorship",
  ];

  return (
    <section className="py-20 lg:py-28 bg-white relative overflow-hidden border-b border-[#C6C2C1]/40 select-none">
      {/* Ambient Atmospheric Lighting Blobs */}
      <div className="absolute top-1/4 -left-28 w-[500px] h-[500px] bg-[#502D6D]/[0.04] rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-28 w-[500px] h-[500px] bg-[#FCB116]/[0.06] rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute inset-0 bg-dot-light opacity-25 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* ── LEFT COLUMN: CEO Vision & Narrative Content ─────────────────── */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <RevealOnScroll>
              {/* Pre-title Badge */}
              <div className="inline-flex items-center gap-2.5 mb-2">
                <span className="w-4 h-[2px] rounded-full bg-gradient-to-r from-[#502D6D] to-[#FCB116]" />
                <span className="font-syne text-xs sm:text-sm font-extrabold uppercase tracking-[0.24em] text-[#502D6D]">
                  LEADERSHIP & VISION
                </span>
              </div>

              {/* Main Headline */}
              <WordReveal
                as="h2"
                text="Pioneering Technology with Purpose, Craftsmanship & Vision"
                gradientWords="Purpose, Craftsmanship & Vision"
                gradientClassName="text-[#502D6D]"
                className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#151515] leading-[1.12] tracking-tight mt-2"
              />

              {/* CEO Identity Block */}
              <div className="pt-2">
                <div className="flex items-center gap-3">
                  <span className="font-syne text-xl sm:text-2xl font-extrabold text-[#151515] tracking-tight">
                    Shri Gowtham
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FCB116]" />
                  <span className="font-syne text-xs sm:text-sm font-extrabold uppercase tracking-wider text-[#502D6D] bg-[#502D6D]/[0.08] px-3 py-1 rounded-full">
                    Founder & CEO
                  </span>
                </div>
              </div>

              {/* Quote Block */}
              <div className="relative pl-6 py-2 border-l-2 border-[#FCB116] my-4">
                <Quote className="w-5 h-5 text-[#FCB116] absolute -top-1 left-2 opacity-50" />
                <p className="text-base sm:text-lg font-medium text-[#151515] italic leading-relaxed">
                  &ldquo;Software should never be treated as just code. It is the living digital backbone of our clients&apos; ambitions. Every platform we architect must inspire confidence, elevate user experience, and drive lasting commercial value.&rdquo;
                </p>
              </div>

              {/* Bio Narrative */}
              <ParagraphReveal
                text="Under Shri Gowtham's guidance, PEP Software has evolved from a boutique engineering practice into a full-service creative digital agency in Erode, Tamil Nadu. With over 5+ years of strategic leadership, he has spearheaded the delivery of 50+ enterprise-grade web, mobile, and cloud platforms for international startups and established enterprises."
                delay={0.12}
                className="text-sm sm:text-base text-[#544643] leading-relaxed font-normal"
              />

              <ParagraphReveal
                text="By uniting human-centered design thinking with rigorous technical standards, he cultivates a high-trust studio culture focused on client transparency, velocity, and enduring technical excellence."
                delay={0.2}
                className="text-sm sm:text-base text-[#544643]/85 leading-relaxed font-normal"
              />

              {/* Key Leadership Highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-3">
                {leadershipHighlights.map((highlight, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm font-bold text-[#151515]">
                    <CheckCircle2 className="w-4 h-4 text-[#FCB116] shrink-0" />
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>

              {/* Call to Action Row */}
              <div className="flex flex-wrap items-center gap-4 pt-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#502D6D] text-white font-bold text-sm hover:bg-[#3F1E5C] shadow-lg shadow-[#502D6D]/20 hover:shadow-[#502D6D]/35 transition-all cursor-pointer group"
                >
                  <span>Connect with Our Leadership</span>
                  <ArrowRight className="w-4 h-4 text-[#FCB116] transition-transform group-hover:translate-x-1" />
                </Link>
                <Link
                  href="/work"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white text-[#151515] font-bold text-sm border border-[#C6C2C1]/70 hover:border-[#502D6D] hover:text-[#502D6D] transition-all cursor-pointer"
                >
                  <span>Explore Our Portfolio</span>
                </Link>
              </div>
            </RevealOnScroll>
          </div>

          {/* ── RIGHT COLUMN: High-Resolution CEO Portrait ───────────────────── */}
          <div className="lg:col-span-5 flex items-center justify-center">
            <RevealOnScroll delay={0.2} className="w-full max-w-[420px] sm:max-w-[460px]">
              <div className="relative group">
                
                {/* Ambient Backlight Glow Ring */}
                <div className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-[#502D6D]/20 via-[#FCB116]/25 to-[#502D6D]/15 blur-2xl opacity-75 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                {/* Transparent CEO Silhouette with Ambient Backglow */}
                <div className="relative w-full flex flex-col items-center">
                  
                  {/* High-Resolution Transparent CEO Cutout */}
                  <div className="relative w-full max-w-[380px] sm:max-w-[420px] aspect-square flex items-center justify-center">
                    <Image
                      src="/images/about/ceo.png"
                      alt="Shri Gowtham – Founder & CEO of PEP Software"
                      width={640}
                      height={640}
                      priority
                      className="w-full h-auto object-contain drop-shadow-[0_20px_40px_rgba(80,45,109,0.18)] transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                  </div>

                  {/* Professional Executive Typography (Design Signature) */}
                  <div className="mt-5 text-center">
                    <h3 className="font-syne text-2xl sm:text-3xl font-extrabold text-[#151515] tracking-tight">
                      Shri Gowtham
                    </h3>
                    <div className="flex items-center justify-center gap-2 mt-2">
                      <span className="w-5 h-[1.5px] bg-[#FCB116] rounded-full" />
                      <p className="font-syne text-xs sm:text-[13px] font-extrabold text-[#502D6D] tracking-[0.24em] uppercase">
                        Founder & Chief Executive Officer
                      </p>
                      <span className="w-5 h-[1.5px] bg-[#FCB116] rounded-full" />
                    </div>
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#544643]/80 mt-1.5">
                      PEP Software • Erode, Tamil Nadu
                    </p>
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
