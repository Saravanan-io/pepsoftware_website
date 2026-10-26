"use client";

import { Compass, MessageSquareCode, Sparkles, Wrench, Headphones, Check } from "lucide-react";
import { WordReveal, ParagraphReveal } from "@/components/shared/WordReveal";
import { RevealOnScroll } from "@/components/shared/RevealOnScroll";

export function WhyChooseUsSection() {
  const differentiators = [
    {
      num: "01",
      title: "Business Understanding",
      description: "We take time to understand what your business actually needs.",
      icon: Compass,
      detail: "Strategic requirement discovery before design and code.",
    },
    {
      num: "02",
      title: "Clear Communication",
      description: "We keep clients involved and informed throughout the project.",
      icon: MessageSquareCode,
      detail: "Direct status check-ins and responsive feedback loops.",
    },
    {
      num: "03",
      title: "User-Friendly Solutions",
      description: "We focus on making digital products simple and easy to use.",
      icon: Sparkles,
      detail: "Clean UX designed around intuitive workflows.",
    },
    {
      num: "04",
      title: "Practical Development",
      description: "We build solutions around real requirements rather than unnecessary complexity.",
      icon: Wrench,
      detail: "Performant, maintainable, modern web and mobile tech.",
    },
    {
      num: "05",
      title: "Ongoing Support",
      description: "We remain available to help improve and maintain your digital product after launch.",
      icon: Headphones,
      detail: "Proactive maintenance, feature iterations, and technical guidance.",
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-[#F7F8F8] relative overflow-hidden border-b border-[#C6C2C1]/40">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 -left-20 w-[600px] h-[600px] bg-[#502D6D]/[0.05] rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-10 -right-20 w-[550px] h-[550px] bg-[#FCB116]/[0.07] rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <RevealOnScroll>
            <WordReveal
              as="h2"
              text="What Makes Working With Us Different?"
              gradientWords="Working With Us Different?"
              gradientClassName="text-[#502D6D]"
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#151515]"
            />
          </RevealOnScroll>
        </div>

        {/* 5 Pillars Layout: Top row 3 cards, bottom row 2 cards centered */}
        <div className="space-y-6">
          {/* Row 1: 3 cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {differentiators.slice(0, 3).map((item, idx) => {
              const Icon = item.icon;
              return (
                <RevealOnScroll key={item.num} delay={0.1 * (idx + 1)}>
                  <div className="h-full p-8 rounded-3xl bg-white border border-[#C6C2C1]/60 hover:border-[#502D6D] hover:shadow-xl hover:shadow-[#502D6D]/10 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="w-12 h-12 rounded-2xl bg-[#F7F8F8] border border-[#C6C2C1]/70 flex items-center justify-center text-[#502D6D] group-hover:bg-[#502D6D] group-hover:text-white transition-all duration-300">
                          <Icon className="w-6 h-6" />
                        </div>
                        <span className="font-mono text-xl font-black text-[#502D6D]/35 group-hover:text-[#FCB116] transition-colors">
                          {item.num}
                        </span>
                      </div>

                      <h3 className="font-syne text-xl font-bold text-[#151515] group-hover:text-[#502D6D] transition-colors pt-1">
                        {item.title}
                      </h3>

                      <p className="text-sm text-[#544643] leading-relaxed">
                        {item.description}
                      </p>
                    </div>

                    <div className="pt-4 mt-6 border-t border-[#C6C2C1]/40 flex items-center gap-2 text-xs font-medium text-[#502D6D]">
                      <Check className="w-3.5 h-3.5 text-[#FCB116]" />
                      <span>{item.detail}</span>
                    </div>
                  </div>
                </RevealOnScroll>
              );
            })}
          </div>

          {/* Row 2: 2 cards centered */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {differentiators.slice(3, 5).map((item, idx) => {
              const Icon = item.icon;
              return (
                <RevealOnScroll key={item.num} delay={0.1 * (idx + 4)}>
                  <div className="h-full p-8 rounded-3xl bg-white border border-[#C6C2C1]/60 hover:border-[#502D6D] hover:shadow-xl hover:shadow-[#502D6D]/10 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="w-12 h-12 rounded-2xl bg-[#F7F8F8] border border-[#C6C2C1]/70 flex items-center justify-center text-[#502D6D] group-hover:bg-[#502D6D] group-hover:text-white transition-all duration-300">
                          <Icon className="w-6 h-6" />
                        </div>
                        <span className="font-mono text-xl font-black text-[#502D6D]/35 group-hover:text-[#FCB116] transition-colors">
                          {item.num}
                        </span>
                      </div>

                      <h3 className="font-syne text-xl font-bold text-[#151515] group-hover:text-[#502D6D] transition-colors pt-1">
                        {item.title}
                      </h3>

                      <p className="text-sm text-[#544643] leading-relaxed">
                        {item.description}
                      </p>
                    </div>

                    <div className="pt-4 mt-6 border-t border-[#C6C2C1]/40 flex items-center gap-2 text-xs font-medium text-[#502D6D]">
                      <Check className="w-3.5 h-3.5 text-[#FCB116]" />
                      <span>{item.detail}</span>
                    </div>
                  </div>
                </RevealOnScroll>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
