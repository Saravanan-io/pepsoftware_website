"use client";

import React, { useState } from "react";
import {
  Search,
  Compass,
  Layers,
  Code2,
  ShieldCheck,
  Rocket,
} from "lucide-react";
import { RevealOnScroll } from "@/components/shared/RevealOnScroll";

const PROCESS_STEPS = [
  {
    num: "01",
    phase: "Discovery",
    title: "Understanding Requirements",
    desc: "We understand your business, users, requirements and challenges.",
    icon: Search,
    color: "from-purple-500 to-indigo-600",
    badgeBg: "bg-purple-100",
    badgeColor: "text-[#7C3AED]",
  },
  {
    num: "02",
    phase: "Strategy",
    title: "Defining the Roadmap",
    desc: "We define the right solution, scope, technology and project direction.",
    icon: Compass,
    color: "from-blue-500 to-cyan-600",
    badgeBg: "bg-blue-100",
    badgeColor: "text-blue-600",
  },
  {
    num: "03",
    phase: "Design",
    title: "UX Flows & Prototyping",
    desc: "We create user flows, wireframes and interfaces focused on usability and experience.",
    icon: Layers,
    color: "from-indigo-500 to-purple-600",
    badgeBg: "bg-indigo-100",
    badgeColor: "text-indigo-600",
  },
  {
    num: "04",
    phase: "Development",
    title: "Full-Stack Engineering",
    desc: "Our developers transform the approved designs into a functional digital product.",
    icon: Code2,
    color: "from-amber-500 to-orange-600",
    badgeBg: "bg-amber-100",
    badgeColor: "text-amber-600",
  },
  {
    num: "05",
    phase: "Testing",
    title: "Quality & Reliability",
    desc: "We test the product for functionality, usability, performance and reliability.",
    icon: ShieldCheck,
    color: "from-emerald-500 to-teal-600",
    badgeBg: "bg-emerald-100",
    badgeColor: "text-emerald-600",
  },
  {
    num: "06",
    phase: "Launch & Support",
    title: "Deployment & Evolution",
    desc: "We help you launch the product and continue supporting it as your business evolves.",
    icon: Rocket,
    color: "from-rose-500 to-pink-600",
    badgeBg: "bg-rose-100",
    badgeColor: "text-rose-600",
  },
];

export function AboutProcessSection() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section className="py-20 lg:py-28 bg-[#FFFFFF] relative overflow-hidden border-b border-[#C6C2C1]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          <RevealOnScroll>
            <div className="inline-flex items-center gap-2.5 mb-2">
              <span className="w-5 sm:w-6 h-[2px] rounded-full bg-gradient-to-r from-orange-400 to-[#7C3AED]" />
              <span className="font-syne text-xs sm:text-sm font-extrabold uppercase tracking-[0.2em] text-[#502D6D]">
                Our Approach
              </span>
              <span className="w-5 sm:w-6 h-[2px] rounded-full bg-gradient-to-r from-[#7C3AED] to-orange-400" />
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#151515] tracking-tight leading-tight mt-1">
              A Clear Process From{" "}
              <span className="text-[#502D6D] bg-gradient-to-r from-[#502D6D] via-[#7C3AED] to-[#9333EA] bg-clip-text text-transparent">
                Idea to Launch.
              </span>
            </h2>

            <p className="mt-4 text-base sm:text-lg text-[#544643] leading-relaxed max-w-2xl mx-auto">
              We follow a structured process to keep projects clear, collaborative and focused on the end goal.
            </p>
          </RevealOnScroll>
        </div>

        {/* 6 Process Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {PROCESS_STEPS.map((step, idx) => {
            const Icon = step.icon;
            return (
              <RevealOnScroll key={step.num} delay={idx * 0.08}>
                <div
                  onMouseEnter={() => setActiveStep(idx)}
                  className={`relative rounded-3xl p-7 sm:p-8 border transition-all duration-300 group h-full flex flex-col justify-between ${
                    activeStep === idx
                      ? "bg-white border-[#502D6D]/40 shadow-xl shadow-purple-900/5 -translate-y-1.5"
                      : "bg-slate-50/70 border-slate-200/80 hover:bg-white hover:border-slate-300"
                  }`}
                >
                  <div>
                    {/* Top Header */}
                    <div className="flex items-center justify-between mb-5">
                      <div
                        className={`w-12 h-12 rounded-2xl ${step.badgeBg} ${step.badgeColor} flex items-center justify-center shadow-xs group-hover:scale-110 transition-transform`}
                      >
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="text-2xl font-black text-slate-300 group-hover:text-purple-300 font-mono transition-colors">
                        {step.num}
                      </span>
                    </div>

                    <span className="text-xs font-bold uppercase tracking-wider text-[#502D6D] block mb-1">
                      Phase {step.num} — {step.phase}
                    </span>

                    <h3 className="text-xl font-bold text-[#151515] tracking-tight group-hover:text-[#502D6D] transition-colors">
                      {step.title}
                    </h3>

                    <p className="text-sm sm:text-base text-[#544643] leading-relaxed mt-2.5">
                      {step.desc}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-200/60 flex items-center gap-2 text-xs font-bold text-slate-400 group-hover:text-[#502D6D] transition-colors">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FCB116]" />
                    <span>Structured Execution</span>
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
