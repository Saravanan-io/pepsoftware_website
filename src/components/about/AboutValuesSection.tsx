"use client";

import React from "react";
import {
  Trophy,
  CheckCircle,
  MessageCircle,
  Users,
  Lightbulb,
  Handshake,
} from "lucide-react";
import { RevealOnScroll } from "@/components/shared/RevealOnScroll";

const VALUES = [
  {
    num: "01",
    title: "Client Success",
    desc: "Your success is the real measure of our work. We focus on creating solutions that deliver meaningful business value.",
    icon: Trophy,
    badgeBg: "bg-purple-100",
    badgeColor: "text-[#7C3AED]",
  },
  {
    num: "02",
    title: "Quality",
    desc: "From design to development, we pay attention to the details that make a product reliable, usable and professional.",
    icon: CheckCircle,
    badgeBg: "bg-blue-100",
    badgeColor: "text-blue-600",
  },
  {
    num: "03",
    title: "Transparency",
    desc: "Clear communication, realistic expectations and honest discussions are at the heart of every project.",
    icon: MessageCircle,
    badgeBg: "bg-emerald-100",
    badgeColor: "text-emerald-600",
  },
  {
    num: "04",
    title: "User-Centric Thinking",
    desc: "We design around the people who will actually use the product — not just around technology.",
    icon: Users,
    badgeBg: "bg-orange-100",
    badgeColor: "text-orange-600",
  },
  {
    num: "05",
    title: "Continuous Learning",
    desc: "Technology keeps evolving. We continuously learn, experiment and improve the way we work.",
    icon: Lightbulb,
    badgeBg: "bg-amber-100",
    badgeColor: "text-amber-600",
  },
  {
    num: "06",
    title: "Long-Term Partnership",
    desc: "We aim to be more than a one-time development team. We want to become a technology partner our clients can rely on as they grow.",
    icon: Handshake,
    badgeBg: "bg-rose-100",
    badgeColor: "text-rose-600",
  },
];

export function AboutValuesSection() {
  return (
    <section className="py-20 lg:py-28 bg-[#FFFFFF] relative overflow-hidden border-b border-[#C6C2C1]/30">
      {/* Background Ambient Lighting */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-purple-100/25 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[450px] h-[450px] bg-amber-100/20 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          <RevealOnScroll>
            <div className="inline-flex items-center gap-2.5 mb-2">
              <span className="w-5 sm:w-6 h-[2px] rounded-full bg-gradient-to-r from-orange-400 to-[#7C3AED]" />
              <span className="font-syne text-xs sm:text-sm font-extrabold uppercase tracking-[0.2em] text-[#502D6D]">
                What Drives Us
              </span>
              <span className="w-5 sm:w-6 h-[2px] rounded-full bg-gradient-to-r from-[#7C3AED] to-orange-400" />
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#151515] tracking-tight leading-tight mt-1">
              The Principles Behind{" "}
              <span className="text-[#502D6D] bg-gradient-to-r from-[#502D6D] via-[#7C3AED] to-[#9333EA] bg-clip-text text-transparent">
                Our Work.
              </span>
            </h2>

            <p className="mt-4 text-base sm:text-lg text-[#544643] leading-relaxed max-w-2xl mx-auto">
              Our culture and engineering discipline are anchored in core values that ensure every project delivers tangible business value and lasting trust.
            </p>
          </RevealOnScroll>
        </div>

        {/* 6 Value Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {VALUES.map((val, idx) => {
            const Icon = val.icon;
            return (
              <RevealOnScroll key={val.num} delay={idx * 0.08}>
                <div className="relative rounded-3xl bg-slate-50/70 hover:bg-white p-7 sm:p-8 border border-slate-200/80 hover:border-purple-200 shadow-[0_10px_30px_rgba(80,45,109,0.03)] hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 group h-full flex flex-col justify-between">
                  <div>
                    {/* Card Top: Icon & Number */}
                    <div className="flex items-center justify-between mb-5">
                      <div
                        className={`w-12 h-12 rounded-2xl ${val.badgeBg} ${val.badgeColor} flex items-center justify-center shadow-xs group-hover:scale-110 transition-transform`}
                      >
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="text-2xl font-black text-slate-300 group-hover:text-purple-300 font-mono transition-colors">
                        {val.num}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-[#151515] tracking-tight group-hover:text-[#502D6D] transition-colors">
                      {val.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm sm:text-base text-[#544643] leading-relaxed mt-2.5">
                      {val.desc}
                    </p>
                  </div>

                  {/* Bottom Accent Bar */}
                  <div className="mt-6 pt-4 border-t border-slate-200/60 flex items-center gap-2 text-xs font-bold text-slate-400 group-hover:text-[#502D6D] transition-colors">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-300 group-hover:bg-[#FCB116] transition-colors" />
                    <span>Principle {val.num}</span>
                  </div>
                </div>
              </RevealOnScroll>
            );
          })}
        </div>

      </div>
    </section>
  );
}
