"use client";

import React from "react";
import {
  Eye,
  Search,
  PenTool,
  Code2,
  TrendingUp,
  Target,
  CheckCircle2,
} from "lucide-react";
import { RevealOnScroll } from "@/components/shared/RevealOnScroll";

const PHILOSOPHY_STEPS = [
  {
    step: "01",
    title: "Understand",
    desc: "Your business, users, workflows, and core challenges.",
    icon: Search,
    color: "from-purple-500 to-indigo-600",
    bgColor: "bg-purple-50",
    textColor: "text-[#7C3AED]",
  },
  {
    step: "02",
    title: "Design",
    desc: "Intuitive, clean, and high-impact digital experiences.",
    icon: PenTool,
    color: "from-blue-500 to-cyan-600",
    bgColor: "bg-blue-50",
    textColor: "text-blue-600",
  },
  {
    step: "03",
    title: "Build",
    desc: "Clean, robust, and scalable modern software codebases.",
    icon: Code2,
    color: "from-amber-500 to-orange-600",
    bgColor: "bg-amber-50",
    textColor: "text-amber-600",
  },
  {
    step: "04",
    title: "Improve",
    desc: "Continuous refinement, scaling, analytics, and evolution.",
    icon: TrendingUp,
    color: "from-emerald-500 to-teal-600",
    bgColor: "bg-emerald-50",
    textColor: "text-emerald-600",
  },
];

export function AboutStorySection() {
  return (
    <div className="bg-[#FFFFFF]">
      {/* ─────────────────────────────────────────────────────────────
          02. OUR STORY
          ───────────────────────────────────────────────────────────── */}
      <section className="py-20 lg:py-28 relative overflow-hidden border-b border-[#C6C2C1]/30">
        {/* Ambient Glows */}
        <div className="absolute top-1/4 -right-28 w-[500px] h-[500px] bg-purple-100/30 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-1/4 -left-28 w-[450px] h-[450px] bg-amber-100/25 rounded-full blur-[130px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Narrative Column */}
            <div className="lg:col-span-7 space-y-6">
              <RevealOnScroll>
                {/* Tagline */}
                <div className="inline-flex items-center gap-2.5 mb-2">
                  <span className="w-5 sm:w-6 h-[2px] rounded-full bg-gradient-to-r from-orange-400 to-[#7C3AED]" />
                  <span className="font-syne text-xs sm:text-sm font-extrabold uppercase tracking-[0.2em] text-[#502D6D]">
                    Our Story
                  </span>
                  <span className="w-5 sm:w-6 h-[2px] rounded-full bg-gradient-to-r from-[#7C3AED] to-orange-400" />
                </div>

                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#151515] tracking-tight leading-tight mt-1">
                  From Ideas to{" "}
                  <span className="text-[#502D6D] bg-gradient-to-r from-[#502D6D] via-[#7C3AED] to-[#9333EA] bg-clip-text text-transparent">
                    Digital Solutions.
                  </span>
                </h2>

                <p className="text-base sm:text-lg text-[#544643] leading-relaxed mt-4">
                  Pep Software was established in 2021 with a simple goal — to help businesses use technology in a way that is practical, meaningful and easy to adopt.
                </p>

                <p className="text-sm sm:text-base text-[#544643]/90 leading-relaxed mt-3">
                  What started with a focus on design and digital experiences has grown into a broader software development capability covering UI/UX design, websites, web applications, mobile applications, custom software and SaaS products.
                </p>

                <p className="text-sm sm:text-base text-[#544643]/90 leading-relaxed mt-3">
                  Over the years, we have worked with businesses across different industries, understanding their unique challenges and transforming those requirements into digital solutions.
                </p>

                <p className="text-sm sm:text-base text-[#544643]/90 leading-relaxed mt-3">
                  We believe great software isn&apos;t just about writing code. It is about understanding the business, solving the right problem and creating an experience that people can actually use.
                </p>

                {/* Supporting Highlight Quote Card */}
                <div className="mt-8 p-5 sm:p-6 rounded-2xl bg-gradient-to-r from-purple-50/80 via-white to-amber-50/60 border border-purple-100/90 shadow-sm relative overflow-hidden">
                  <div className="absolute top-0 left-0 bottom-0 w-1.5 bg-gradient-to-b from-[#502D6D] to-[#FCB116]" />
                  <p className="text-base sm:text-lg font-bold text-[#151515] tracking-tight pl-2">
                    &ldquo;We don&apos;t just build software. We understand the problem first — then build the right solution.&rdquo;
                  </p>
                </div>
              </RevealOnScroll>
            </div>

            {/* Right Visual Column: Interactive Journey Card */}
            <div className="lg:col-span-5">
              <RevealOnScroll delay={0.2}>
                <div className="relative rounded-3xl bg-gradient-to-br from-white via-slate-50 to-purple-50/30 p-7 sm:p-9 border border-slate-200/80 shadow-[0_20px_50px_rgba(80,45,109,0.06)] overflow-hidden">
                  {/* Subtle Background Badge */}
                  <div className="flex items-center justify-between pb-6 border-b border-slate-200/80">
                    <div>
                      <span className="text-xs font-bold uppercase tracking-widest text-slate-400">Established</span>
                      <h3 className="text-3xl sm:text-4xl font-black text-[#502D6D] tracking-tight">2021</h3>
                    </div>
                    <div className="w-12 h-12 rounded-2xl bg-[#502D6D]/10 text-[#502D6D] flex items-center justify-center font-black text-lg">
                      5+ yrs
                    </div>
                  </div>

                  {/* Growth Progression Milestones */}
                  <div className="space-y-4 pt-6">
                    <span className="text-xs font-bold uppercase tracking-widest text-[#502D6D] block">
                      Evolution & Scope
                    </span>

                    {[
                      { year: "2021", label: "Founded with Design Focus", desc: "Digital design and human-centric interfaces." },
                      { year: "2022", label: "Web & Mobile Expansion", desc: "Cross-platform mobile apps and responsive web portals." },
                      { year: "2023", label: "Enterprise Custom Software", desc: "Business workflows, quotation engines, and CRM integrations." },
                      { year: "2024+", label: "SaaS Products & Cloud Platforms", desc: "Scalable multi-tenant products and cloud automation." },
                    ].map((m, idx) => (
                      <div key={idx} className="flex items-start gap-3.5 group/item">
                        <div className="w-8 h-8 rounded-full bg-purple-100/80 text-[#7C3AED] flex items-center justify-center text-xs font-black shrink-0 mt-0.5 group-hover/item:scale-110 transition-transform">
                          ✓
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="text-xs font-extrabold text-[#502D6D]">{m.year}</span>
                            <span className="text-xs text-slate-300">•</span>
                            <span className="text-xs sm:text-sm font-bold text-[#151515]">{m.label}</span>
                          </div>
                          <p className="text-xs text-[#544643] mt-0.5">{m.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </RevealOnScroll>
            </div>

          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          03. WHAT WE BELIEVE (OUR PHILOSOPHY)
          ───────────────────────────────────────────────────────────── */}
      <section className="py-20 lg:py-28 bg-[#F8FAFC] relative overflow-hidden border-b border-[#C6C2C1]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
            <RevealOnScroll>
              <div className="inline-flex items-center gap-2.5 mb-2">
                <span className="w-5 sm:w-6 h-[2px] rounded-full bg-gradient-to-r from-orange-400 to-[#7C3AED]" />
                <span className="font-syne text-xs sm:text-sm font-extrabold uppercase tracking-[0.2em] text-[#502D6D]">
                  Our Philosophy
                </span>
                <span className="w-5 sm:w-6 h-[2px] rounded-full bg-gradient-to-r from-[#7C3AED] to-orange-400" />
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#151515] tracking-tight leading-tight mt-1">
                Technology Should Make{" "}
                <span className="text-[#502D6D] bg-gradient-to-r from-[#502D6D] via-[#7C3AED] to-[#9333EA] bg-clip-text text-transparent">
                  Business Simpler.
                </span>
              </h2>

              <p className="mt-4 text-base sm:text-lg text-[#544643] leading-relaxed">
                Every business has different challenges. So, we don&apos;t believe in one-size-fits-all solutions.
                We start by understanding your business, your users and the problem you want to solve. Then we combine strategy, design and technology to create a solution that fits your needs.
              </p>
            </RevealOnScroll>
          </div>

          {/* 4-Step Approach: Understand → Design → Build → Improve */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {PHILOSOPHY_STEPS.map((item, idx) => {
              const Icon = item.icon;
              return (
                <RevealOnScroll key={item.step} delay={idx * 0.1}>
                  <div className="relative rounded-3xl bg-white p-7 sm:p-8 border border-slate-200/80 shadow-[0_10px_30px_rgba(80,45,109,0.04)] hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 group h-full flex flex-col justify-between">
                    <div>
                      {/* Top Row: Icon + Step Number */}
                      <div className="flex items-center justify-between mb-5">
                        <div
                          className={`w-12 h-12 rounded-2xl ${item.bgColor} ${item.textColor} flex items-center justify-center shadow-xs group-hover:scale-110 transition-transform`}
                        >
                          <Icon className="w-6 h-6" />
                        </div>
                        <span className="text-2xl font-black text-slate-200 group-hover:text-purple-300 font-mono transition-colors">
                          {item.step}
                        </span>
                      </div>

                      {/* Title & Desc */}
                      <h3 className="text-xl font-bold text-[#151515] tracking-tight group-hover:text-[#502D6D] transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-sm text-[#544643] leading-relaxed mt-2">
                        {item.desc}
                      </p>
                    </div>

                    {/* Step indicator arrow */}
                    {idx < 3 && (
                      <div className="hidden lg:block absolute -right-4 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-white border border-slate-200 shadow-xs flex items-center justify-center text-slate-400">
                        →
                      </div>
                    )}
                  </div>
                </RevealOnScroll>
              );
            })}
          </div>

          {/* Supporting Philosophy Text */}
          <div className="mt-12 text-center max-w-2xl mx-auto">
            <RevealOnScroll delay={0.2}>
              <p className="text-sm sm:text-base text-[#544643] font-medium leading-relaxed bg-white/80 border border-slate-200/70 py-3.5 px-6 rounded-full inline-block shadow-xs">
                ✨ This allows us to create digital products that are not only visually appealing, but also useful, scalable and aligned with business goals.
              </p>
            </RevealOnScroll>
          </div>

        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          04. MISSION & VISION
          ───────────────────────────────────────────────────────────── */}
      <section className="py-20 lg:py-28 relative overflow-hidden border-b border-[#C6C2C1]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-16">
            <RevealOnScroll>
              <div className="inline-flex items-center gap-2.5 mb-2">
                <span className="w-5 sm:w-6 h-[2px] rounded-full bg-gradient-to-r from-orange-400 to-[#7C3AED]" />
                <span className="font-syne text-xs sm:text-sm font-extrabold uppercase tracking-[0.2em] text-[#502D6D]">
                  Our Mission & Vision
                </span>
                <span className="w-5 sm:w-6 h-[2px] rounded-full bg-gradient-to-r from-[#7C3AED] to-orange-400" />
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#151515] tracking-tight leading-tight mt-1">
                Guiding Principles for a{" "}
                <span className="text-[#502D6D] bg-gradient-to-r from-[#502D6D] via-[#7C3AED] to-[#9333EA] bg-clip-text text-transparent">
                  Digital Future.
                </span>
              </h2>
            </RevealOnScroll>
          </div>

          {/* Dual Mission & Vision Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            
            {/* Mission Card */}
            <RevealOnScroll delay={0.1}>
              <div className="relative rounded-[32px] p-8 sm:p-12 bg-gradient-to-br from-white via-purple-50/20 to-white border border-purple-100 shadow-[0_20px_50px_rgba(80,45,109,0.06)] hover:shadow-2xl hover:border-purple-300 transition-all duration-300 group h-full flex flex-col justify-between">
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-[#502D6D] text-white flex items-center justify-center shadow-lg shadow-[#502D6D]/20 mb-6 group-hover:scale-105 transition-transform">
                    <Target className="w-7 h-7 text-[#FCB116]" />
                  </div>

                  <span className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#502D6D] block mb-2">
                    Our Mission
                  </span>

                  <h3 className="text-2xl sm:text-3xl font-black text-[#151515] tracking-tight leading-tight mb-4">
                    Empowering Business Through Practical Engineering
                  </h3>

                  <p className="text-base sm:text-lg text-[#544643] leading-relaxed">
                    To help businesses embrace technology through thoughtfully designed and well-engineered digital solutions that simplify operations, improve customer experiences and create opportunities for growth.
                  </p>
                </div>

                <div className="mt-8 pt-6 border-t border-purple-100 flex items-center gap-2 text-xs font-bold text-[#502D6D]">
                  <CheckCircle2 className="w-4 h-4 text-[#FCB116]" />
                  <span>Simplify Operations • Elevate Experience • Accelerate Growth</span>
                </div>
              </div>
            </RevealOnScroll>

            {/* Vision Card */}
            <RevealOnScroll delay={0.2}>
              <div className="relative rounded-[32px] p-8 sm:p-12 bg-gradient-to-br from-white via-amber-50/20 to-white border border-amber-100 shadow-[0_20px_50px_rgba(252,177,22,0.06)] hover:shadow-2xl hover:border-amber-300 transition-all duration-300 group h-full flex flex-col justify-between">
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-[#151515] text-white flex items-center justify-center shadow-lg shadow-black/10 mb-6 group-hover:scale-105 transition-transform">
                    <Eye className="w-7 h-7 text-[#FCB116]" />
                  </div>

                  <span className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#B45309] block mb-2">
                    Our Vision
                  </span>

                  <h3 className="text-2xl sm:text-3xl font-black text-[#151515] tracking-tight leading-tight mb-4">
                    A Trusted Technology Partner for Enduring Value
                  </h3>

                  <p className="text-base sm:text-lg text-[#544643] leading-relaxed">
                    To become a trusted technology partner for businesses by continuously creating meaningful digital products, innovative solutions and long-term value through technology.
                  </p>
                </div>

                <div className="mt-8 pt-6 border-t border-amber-100 flex items-center gap-2 text-xs font-bold text-[#B45309]">
                  <CheckCircle2 className="w-4 h-4 text-[#FCB116]" />
                  <span>Meaningful Products • Scalable Innovations • Long-Term Value</span>
                </div>
              </div>
            </RevealOnScroll>

          </div>

        </div>
      </section>
    </div>
  );
}
