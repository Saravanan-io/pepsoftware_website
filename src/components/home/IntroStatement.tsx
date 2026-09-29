"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Users, Check } from "lucide-react";
import { RevealOnScroll } from "../shared/RevealOnScroll";
import { WordReveal, ParagraphReveal } from "../shared/WordReveal";

const checklistItems = [
  "Tailored Digital Solutions",
  "Business-Aligned Strategy",
  "User-Centered Design Focus",
  "Reliable Support & Delivery",
  "Transparent & Flexible Pricing",
  "Forward-Thinking Innovation",
];

export function IntroStatement() {
  return (
    <section id="about" className="py-20 lg:py-28 bg-[#F7F8F8] relative overflow-hidden noise-overlay">
      {/* PEP logo brand ambient lighting glows & grid */}
      <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[750px] rounded-full bg-[#502D6D]/[0.08] blur-[160px] pointer-events-none" />
      <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-[#FCB116]/[0.09] blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute inset-0 bg-grid-dark pointer-events-none opacity-30" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-12 items-center">
          {/* Left Column: Narrative & Features */}
          <RevealOnScroll className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2.5">
              <Users className="w-4 h-4 text-[#FCB116] shrink-0" />
              <span className="font-syne text-xs sm:text-sm font-extrabold uppercase tracking-[0.24em] bg-gradient-to-r from-[#502D6D] via-[#8A3DA8] to-[#FCB116] bg-clip-text text-transparent">
                WHO WE ARE?
              </span>
            </div>

            <WordReveal
              as="h2"
              text="Maximize your digital potential and captivate your audience."
              gradientWords="digital potential"
              gradientClassName="text-transparent bg-clip-text bg-gradient-to-r from-[#502D6D] via-[#C86A28] to-[#FCB116]"
              className="text-4xl sm:text-5xl lg:text-[46px] font-extrabold leading-[1.15] tracking-tight text-[#151515]"
            />

            <ParagraphReveal
              text="At Pep Software, we turn your ideas into impactful digital solutions. Whether you're building a website, refining your UI/UX, or launching a product — our team delivers tailored strategies that boost performance and keep users engaged."
              delay={0.12}
              className="text-base sm:text-lg text-[#544643] leading-relaxed"
            />

            {/* Checklist: 2 columns */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3.5 pt-2">
              {checklistItems.map((item) => (
                <div key={item} className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-[#10B981] stroke-[2.75] shrink-0" />
                  <span className="text-sm font-semibold text-[#151515]">{item}</span>
                </div>
              ))}
            </div>

            {/* Actions: Our Services + Customer Support */}
            <div className="flex flex-wrap items-center gap-6 pt-4">
              <Link
                href="/services/ui-ux-design"
                className="inline-flex items-center gap-3 px-6 py-3.5 rounded-full bg-[#151515] hover:bg-[#502D6D] text-[#F7F8F8] font-bold text-sm transition-all duration-300 shadow-md shadow-[#151515]/10 hover:shadow-[#502D6D]/20 border border-transparent hover:border-[#FCB116]/35 group"
              >
                <span>Our Services</span>
                <span className="w-6 h-6 rounded-full bg-gradient-to-r from-[#502D6D] to-[#FCB116] flex items-center justify-center text-white transition-transform group-hover:scale-105 group-hover:translate-x-0.5">
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center text-sm font-bold text-[#151515] border-b-2 border-[#502D6D] pb-1 hover:text-[#502D6D] transition-colors"
              >
                Customer Support
              </Link>
            </div>
          </RevealOnScroll>

          {/* Right Column: High-Res Team Collaboration Showcase */}
          <RevealOnScroll delay={0.2} className="lg:col-span-6">
            <div className="relative group">
              {/* Vibrant ambient backdrop glow */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-[#502D6D]/15 via-[#FCB116]/12 to-transparent rounded-3xl blur-2xl opacity-80 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              {/* Team Collaboration Visual */}
              <div className="relative w-full flex items-center justify-center">
                <Image
                  src="/images/home/team-collaboration-dashboard.png"
                  alt="Pep Software team collaborating on digital solutions dashboard"
                  width={1024}
                  height={550}
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 650px"
                  className="w-full h-auto object-contain drop-shadow-[0_20px_35px_rgba(80,45,109,0.14)] transition-transform duration-500 ease-out group-hover:scale-[1.02]"
                />
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}
