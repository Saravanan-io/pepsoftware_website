"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Cpu,
  Award,
  Users,
  Zap,
  ArrowRight,
  Check,
} from "lucide-react";
import { RevealOnScroll } from "../shared/RevealOnScroll";
import { WordReveal, ParagraphReveal } from "../shared/WordReveal";

interface FeaturePillar {
  id: string;
  icon: typeof Cpu;
  title: string;
  description: string;
  badge: string;
}

const pillars: FeaturePillar[] = [
  {
    id: "digital-innovation",
    icon: Cpu,
    title: "Expertise in Digital Innovation",
    description:
      "We blend design thinking with emerging tech to create modern, user-focused solutions.",
    badge: "Cutting-Edge Tech",
  },
  {
    id: "track-record",
    icon: Award,
    title: "Proven Track Record of Success",
    description:
      "From startups to established brands, our projects drive measurable impact.",
    badge: "Verified Results",
  },
  {
    id: "experienced-team",
    icon: Users,
    title: "Dedicated and Experienced Team",
    description:
      "Our skilled team brings creativity, strategy, and execution to every project.",
    badge: "Senior Specialists",
  },
  {
    id: "agile-delivery",
    icon: Zap,
    title: "Agile Delivery & Transparency",
    description:
      "Direct communication, sprint reviews, and end-to-end milestone accountability.",
    badge: "On-Time Guarantee",
  },
];

export function WhyChooseUs() {
  const [activeIdx, setActiveIdx] = useState<number>(0);

  return (
    <section
      id="why-choose-us"
      className="py-20 lg:py-28 bg-[#F7F8F8] relative overflow-hidden select-none"
    >
      {/* Background Subtle Luxury Grid & Ambient Glows */}
      <div className="absolute inset-0 bg-grid-dark opacity-30 pointer-events-none" />
      <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#502D6D]/[0.08] rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute top-1/4 right-1/4 w-[450px] h-[450px] bg-[#FCB116]/[0.09] rounded-full blur-[140px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 xl:gap-16 items-center">
          {/* Left Column: Heading & Interactive Feature Cards List */}
          <div className="lg:col-span-7 xl:col-span-6 space-y-8">
            <RevealOnScroll className="space-y-5">
              {/* Stylish Section Kicker */}
              <div className="inline-flex items-center gap-2.5">
                <span className="w-4 h-[2px] rounded-full bg-gradient-to-r from-[#502D6D] to-[#FCB116]" />
                <span className="font-syne text-xs sm:text-sm font-extrabold uppercase tracking-[0.24em] bg-gradient-to-r from-[#502D6D] via-[#8A3DA8] to-[#FCB116] bg-clip-text text-transparent">
                  WHY CHOOSE US?
                </span>
              </div>

              {/* Main Headline */}
              <WordReveal
                as="h2"
                text="Smart Solutions, Real Results — Built Around Your Vision"
                gradientWords="Built Around Your Vision"
                gradientClassName="text-transparent bg-clip-text bg-gradient-to-r from-[#502D6D] via-[#C86A28] to-[#FCB116]"
                className="text-4xl sm:text-5xl lg:text-[46px] font-black leading-[1.15] tracking-tight text-[#151515]"
              />

              {/* Sub-description */}
              <ParagraphReveal
                text="We don't just deliver projects — we partner with you to create digital experiences that are impactful, efficient, and built to grow with your business."
                delay={0.12}
                className="text-base sm:text-lg text-[#544643] leading-relaxed max-w-2xl"
              />
            </RevealOnScroll>

            {/* Interactive Feature List Cards */}
            <div className="space-y-3.5 pt-2">
              {pillars.map((pillar, idx) => {
                const Icon = pillar.icon;
                const isActive = activeIdx === idx;

                return (
                  <div
                    key={pillar.id}
                    onClick={() => setActiveIdx(idx)}
                    onMouseEnter={() => setActiveIdx(idx)}
                    className={`group relative flex items-start gap-4 sm:gap-5 p-4 sm:p-5 rounded-[24px] cursor-pointer transition-all duration-300 ${
                      isActive
                        ? "bg-[#FFFFFF] border-2 border-[#502D6D] ring-4 ring-[#FCB116]/25 shadow-[0_12px_32px_rgba(80,45,109,0.14)] -translate-y-1 scale-[1.01]"
                        : "bg-[#FFFFFF]/60 border border-[#E5E5E3] hover:border-[#502D6D]/40 hover:bg-[#FFFFFF] hover:shadow-sm"
                    }`}
                  >
                    {/* Icon Squircle */}
                    <div
                      className={`w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 transition-all duration-300 ${
                        isActive
                          ? "bg-gradient-to-tr from-[#502D6D] to-[#FCB116] text-white shadow-[0_0_20px_rgba(80,45,109,0.35)] scale-105"
                          : "bg-[#502D6D]/10 border border-[#502D6D]/20 text-[#502D6D] group-hover:scale-105"
                      }`}
                    >
                      <Icon className="w-5 h-5 stroke-[2.2]" />
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0 pr-4">
                      <div className="flex items-center gap-2.5 mb-1">
                        <h3
                          className={`text-base sm:text-lg font-black transition-colors ${
                            isActive ? "text-[#151515]" : "text-[#151515] group-hover:text-[#502D6D]"
                          }`}
                        >
                          {pillar.title}
                        </h3>
                      </div>
                      <p className="text-xs sm:text-sm text-[#544643] leading-relaxed">
                        {pillar.description}
                      </p>
                    </div>

                    {/* Right Arrow / Check Circle */}
                    <div
                      className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 self-center ${
                        isActive
                          ? "bg-[#FF7700] text-white scale-110 shadow-sm"
                          : "text-[#C6C2C1] group-hover:text-[#C86A28]"
                      }`}
                    >
                      {isActive ? (
                        <Check className="w-4 h-4 stroke-[3]" />
                      ) : (
                        <ArrowRight className="w-4 h-4" />
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: High-Impact Team & Solutions Illustration */}
          <div className="lg:col-span-5 xl:col-span-6 relative flex items-center justify-center">
            <RevealOnScroll delay={0.2} className="w-full">
              <div className="relative mx-auto max-w-[560px] lg:max-w-none">
                {/* Ambient Soft Glow Behind the Graphic */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[85%] h-[85%] bg-gradient-to-tr from-[#502D6D]/15 via-[#FCB116]/12 to-transparent rounded-full blur-[70px] pointer-events-none" />

                {/* Subtle Floating Animation Container */}
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="relative z-10 w-full flex items-center justify-center"
                >
                  <Image
                    src="/images/home/why-choose-team.png"
                    alt="PEP Software team collaborating on digital solutions with proven results"
                    width={1024}
                    height={682}
                    priority
                    className="w-full h-auto object-contain drop-shadow-[0_20px_40px_rgba(80,45,109,0.12)]"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                  />
                </motion.div>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </div>
    </section>
  );
}
