"use client";

import React from "react";
import {
  Briefcase,
  Layers,
  MessageSquare,
  Cpu,
  HeartHandshake,
} from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import { RevealOnScroll } from "@/components/shared/RevealOnScroll";

interface WhyUsPillar {
  number: string;
  title: string;
  description: string;
  icon: React.ElementType;
  iconBg: string;
  iconColor: string;
}

const WHY_US_PILLARS: WhyUsPillar[] = [
  {
    number: "01",
    title: "Business First",
    description: "We understand your business before choosing the technology.",
    icon: Briefcase,
    iconBg: "bg-[#F3E8FF]",
    iconColor: "text-[#7C3AED]",
  },
  {
    number: "02",
    title: "Design + Development",
    description: "Design and development work together under one team.",
    icon: Layers,
    iconBg: "bg-[#EFF6FF]",
    iconColor: "text-[#2563EB]",
  },
  {
    number: "03",
    title: "Clear Communication",
    description: "Stay informed at every stage of your project.",
    icon: MessageSquare,
    iconBg: "bg-[#ECFDF5]",
    iconColor: "text-[#059669]",
  },
  {
    number: "04",
    title: "Practical Technology",
    description: "We choose technology that fits your needs, not just trends.",
    icon: Cpu,
    iconBg: "bg-[#FEF3C7]",
    iconColor: "text-[#D97706]",
  },
  {
    number: "05",
    title: "Long-Term Support",
    description: "We help your digital product evolve beyond launch.",
    icon: HeartHandshake,
    iconBg: "bg-[#F5F3FF]",
    iconColor: "text-[#8B5CF6]",
  },
];

export function ServicesWhyUsSection() {
  return (
    <section className="py-20 lg:py-28 bg-[#FFFFFF] border-b border-[#C6C2C1]/30 relative overflow-hidden">
      {/* Background Ambient Lighting Elements */}
      <div className="absolute top-1/4 left-6 w-[550px] h-[550px] bg-purple-100/30 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-12 left-1/3 w-[450px] h-[450px] bg-amber-100/25 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 xl:gap-20 items-center">
          
          {/* ── Left Column: Headline, Subtitle, and 3D Architectural Composition ── */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            <div>
              <RevealOnScroll>
                {/* Tagline Badge: "— WHY PEP SOFTWARE —" */}
                <div className="flex items-center gap-2.5 mb-4">
                  <span className="w-5 sm:w-6 h-[2px] rounded-full bg-gradient-to-r from-orange-400 to-[#7C3AED]" />
                  <span className="text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-[#502D6D]">
                    Why Pep Software
                  </span>
                  <span className="w-5 sm:w-6 h-[2px] rounded-full bg-gradient-to-r from-[#7C3AED] to-orange-400" />
                </div>

                {/* Main Headline */}
                <h2 className="text-3xl sm:text-4xl lg:text-[44px] xl:text-[48px] font-black text-[#151515] tracking-tight leading-[1.12]">
                  More Than Just a<br className="hidden sm:inline" />{" "}
                  Development Team.
                </h2>

                {/* Subtitle */}
                <p className="mt-4 sm:mt-5 text-sm sm:text-base text-[#544643] leading-relaxed max-w-lg">
                  We combine business understanding, design, technology and long-term support to build solutions that create real value for your business.
                </p>
              </RevealOnScroll>
            </div>

            {/* 3D Thinking Character with Golden Question Mark */}
            <div className="mt-6 sm:mt-8">
              <RevealOnScroll delay={0.15}>
                <div className="relative max-w-[420px] sm:max-w-[460px] mx-auto lg:mx-0 select-none">
                  {/* Ambient Warm Golden Glow behind question mark */}
                  <div className="absolute top-4 right-6 w-40 sm:w-48 h-40 sm:h-48 bg-amber-300/35 rounded-full blur-3xl pointer-events-none" />
                  {/* Ambient Purple Glow behind character */}
                  <div className="absolute bottom-6 left-8 w-48 sm:w-56 h-48 sm:h-56 bg-purple-200/35 rounded-full blur-3xl pointer-events-none" />
                  
                  {/* Floating Motion Animation */}
                  <motion.div
                    animate={{ y: [-4, 4, -4] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="relative z-10"
                  >
                    <Image
                      src="/images/services/why-us-character.png"
                      alt="Why Pep Software - Your Thoughtful Digital Partner"
                      width={1024}
                      height={682}
                      className="w-full h-auto object-contain drop-shadow-[0_15px_30px_rgba(80,45,109,0.12)]"
                      priority
                    />
                  </motion.div>

                  {/* Soft Floor Contact Shadow */}
                  <div className="w-3/4 h-4 bg-gradient-to-r from-transparent via-slate-400/20 to-transparent blur-md mx-auto -mt-2 rounded-full" />
                </div>
              </RevealOnScroll>
            </div>
          </div>

          {/* ── Right Column: 5 Stacked Milestone Rows with Divider Lines ── */}
          <div className="lg:col-span-6">
            <div className="divide-y divide-slate-100/90 border-t sm:border-t-0 border-slate-100/90">
              {WHY_US_PILLARS.map((pillar, idx) => {
                const Icon = pillar.icon;
                return (
                  <RevealOnScroll key={pillar.title} delay={idx * 0.08}>
                    <div className="py-5 sm:py-6 group flex items-start sm:items-center gap-4 sm:gap-6 transition-all duration-300 hover:bg-purple-50/25 -mx-3 px-3 sm:-mx-4 sm:px-4 rounded-2xl cursor-default">
                      {/* Stylized Number 01..05 in sleek sans-serif */}
                      <span className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-[#DDD6FE] tracking-tight shrink-0 select-none group-hover:text-[#A78BFA] transition-colors leading-none w-12 sm:w-14">
                        {pillar.number}
                      </span>

                      {/* Thin Vertical Divider Bar */}
                      <span className="h-10 sm:h-12 w-[1px] bg-slate-200/90 shrink-0 self-center" />

                      {/* Soft Pastel Icon Badge */}
                      <div
                        className={`w-12 h-12 rounded-2xl ${pillar.iconBg} ${pillar.iconColor} flex items-center justify-center shrink-0 shadow-xs transition-transform duration-300 group-hover:scale-110`}
                      >
                        <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                      </div>

                      {/* Content: Title & Description */}
                      <div className="flex-1 min-w-0">
                        <h3 className="text-base sm:text-lg font-bold text-[#151515] tracking-tight group-hover:text-[#502D6D] transition-colors">
                          {pillar.title}
                        </h3>
                        <p className="text-xs sm:text-sm text-[#544643] leading-relaxed mt-1">
                          {pillar.description}
                        </p>
                      </div>
                    </div>
                  </RevealOnScroll>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
