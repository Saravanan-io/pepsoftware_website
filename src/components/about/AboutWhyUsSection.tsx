"use client";

import React from "react";
import {
  Briefcase,
  Layers,
  Wrench,
  MessageSquare,
  TrendingUp,
  HeartHandshake,
  CheckCircle2,
} from "lucide-react";
import { RevealOnScroll } from "@/components/shared/RevealOnScroll";

const WHY_POINTS = [
  {
    num: "01",
    title: "Business Understanding",
    desc: "We take time to understand the business problem before recommending a technical solution.",
    icon: Briefcase,
    bgColor: "bg-purple-100",
    color: "text-[#7C3AED]",
  },
  {
    num: "02",
    title: "Design + Development Under One Roof",
    desc: "From UI/UX to development, you can work with one integrated team.",
    icon: Layers,
    bgColor: "bg-blue-100",
    color: "text-blue-600",
  },
  {
    num: "03",
    title: "Practical Solutions",
    desc: "We focus on building solutions that are useful in the real world — not technology for technology's sake.",
    icon: Wrench,
    bgColor: "bg-amber-100",
    color: "text-amber-600",
  },
  {
    num: "04",
    title: "Transparent Communication",
    desc: "You stay informed throughout the project with clear communication and progress updates.",
    icon: MessageSquare,
    bgColor: "bg-emerald-100",
    color: "text-emerald-600",
  },
  {
    num: "05",
    title: "Scalable Technology",
    desc: "We build with the future in mind, so your product can evolve as your business grows.",
    icon: TrendingUp,
    bgColor: "bg-indigo-100",
    color: "text-indigo-600",
  },
  {
    num: "06",
    title: "Long-Term Support",
    desc: "Our relationship doesn't have to end when the project launches. We can continue supporting and improving your digital solution.",
    icon: HeartHandshake,
    bgColor: "bg-rose-100",
    color: "text-rose-600",
  },
];

export function AboutWhyUsSection() {
  return (
    <section className="py-20 lg:py-28 bg-[#FFFFFF] relative overflow-hidden border-b border-[#C6C2C1]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          <RevealOnScroll>
            <div className="inline-flex items-center gap-2.5 mb-2">
              <span className="w-5 sm:w-6 h-[2px] rounded-full bg-gradient-to-r from-orange-400 to-[#7C3AED]" />
              <span className="font-syne text-xs sm:text-sm font-extrabold uppercase tracking-[0.2em] text-[#502D6D]">
                Why Choose Us
              </span>
              <span className="w-5 sm:w-6 h-[2px] rounded-full bg-gradient-to-r from-[#7C3AED] to-orange-400" />
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#151515] tracking-tight leading-tight mt-1">
              Why Businesses Choose{" "}
              <span className="text-[#502D6D] bg-gradient-to-r from-[#502D6D] via-[#7C3AED] to-[#9333EA] bg-clip-text text-transparent">
                Pep Software.
              </span>
            </h2>

            <p className="mt-4 text-base sm:text-lg text-[#544643] leading-relaxed max-w-2xl mx-auto">
              We partner with forward-thinking leaders who value engineering craftsmanship, transparent communication, and software built for commercial longevity.
            </p>
          </RevealOnScroll>
        </div>

        {/* 6 Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {WHY_POINTS.map((point, idx) => {
            const Icon = point.icon;
            return (
              <RevealOnScroll key={point.title} delay={idx * 0.08}>
                <div className="p-7 sm:p-8 rounded-3xl bg-slate-50/70 hover:bg-white border border-slate-200/80 hover:border-purple-200 shadow-xs hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 group h-full flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <div
                        className={`w-12 h-12 rounded-2xl ${point.bgColor} ${point.color} flex items-center justify-center shadow-xs group-hover:scale-110 transition-transform`}
                      >
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="text-2xl font-black text-slate-300 group-hover:text-purple-300 font-mono transition-colors">
                        {point.num}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-[#151515] tracking-tight group-hover:text-[#502D6D] transition-colors">
                      {point.title}
                    </h3>

                    <p className="text-sm sm:text-base text-[#544643] leading-relaxed mt-2.5">
                      {point.desc}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-200/60 flex items-center gap-2 text-xs font-bold text-slate-400 group-hover:text-[#502D6D] transition-colors">
                    <CheckCircle2 className="w-4 h-4 text-[#FCB116]" />
                    <span>Verified Differentiator</span>
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
