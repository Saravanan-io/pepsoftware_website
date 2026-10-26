"use client";

import Link from "next/link";
import { Globe, Smartphone, Cpu, Palette, ArrowRight, MessageCircle } from "lucide-react";
import { WordReveal, ParagraphReveal } from "@/components/shared/WordReveal";
import { RevealOnScroll } from "@/components/shared/RevealOnScroll";

export function TestimonialsByServiceSection() {
  const serviceCategories = [
    {
      title: "Website Development",
      description: "Business websites, corporate websites and one-page websites.",
      icon: Globe,
      href: "/services/website-design-development",
      accent: "from-[#502D6D] to-[#8036B3]",
      tag: "Web Platforms",
      iconColor: "text-[#502D6D]",
      iconBg: "bg-[#502D6D]/10",
    },
    {
      title: "Mobile App Development",
      description: "Business and internal-use mobile applications.",
      icon: Smartphone,
      href: "/services/mobile-app-design-development",
      accent: "from-[#FCB116] to-[#E59700]",
      tag: "iOS & Android",
      iconColor: "text-[#C86A28]",
      iconBg: "bg-[#C86A28]/10",
    },
    {
      title: "Custom Software",
      description: "Solutions built around specific business workflows.",
      icon: Cpu,
      href: "/services",
      accent: "from-[#502D6D] to-[#FCB116]",
      tag: "Enterprise Workflows",
      iconColor: "text-[#7C3AED]",
      iconBg: "bg-[#7C3AED]/10",
    },
    {
      title: "UI/UX Design",
      description: "Digital experiences designed around real users and business goals.",
      icon: Palette,
      href: "/services/ui-ux-design",
      accent: "from-[#8036B3] to-[#502D6D]",
      tag: "User Experience",
      iconColor: "text-[#2563EB]",
      iconBg: "bg-[#2563EB]/10",
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-[#F7F8F8] relative overflow-hidden border-b border-[#C6C2C1]/40">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 -right-20 w-[550px] h-[550px] bg-[#502D6D]/[0.05] rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 -left-20 w-[550px] h-[550px] bg-[#FCB116]/[0.07] rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <RevealOnScroll>
            <WordReveal
              as="h2"
              text="From Websites to Custom Software."
              gradientWords="Custom Software."
              gradientClassName="text-[#502D6D]"
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#151515]"
            />

            <ParagraphReveal
              text="Our client feedback comes from different types of digital projects."
              delay={0.15}
              className="text-base sm:text-lg text-[#544643] leading-relaxed max-w-xl mx-auto mt-4"
            />
          </RevealOnScroll>
        </div>

        {/* 4 Service Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
          {serviceCategories.map((cat, idx) => {
            const Icon = cat.icon;
            return (
              <RevealOnScroll key={cat.title} delay={0.08 * (idx + 1)}>
                <Link
                  href={cat.href}
                  className="h-full p-8 rounded-3xl bg-white border border-[#C6C2C1]/60 hover:border-[#502D6D] hover:shadow-xl hover:shadow-[#502D6D]/10 hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
                >
                  <div className="space-y-4">
                    {/* Top Icon + Tag */}
                    <div className="flex items-center justify-between">
                      <div className={`w-12 h-12 rounded-2xl ${cat.iconBg} border border-[#C6C2C1]/60 flex items-center justify-center ${cat.iconColor} group-hover:scale-110 transition-all duration-300 shadow-xs`}>
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="text-xs font-semibold text-[#544643]">
                        {cat.tag}
                      </span>
                    </div>

                    <h3 className="font-syne text-lg font-bold text-[#151515] group-hover:text-[#502D6D] transition-colors pt-2">
                      {cat.title}
                    </h3>

                    <p className="text-sm text-[#544643] leading-relaxed">
                      {cat.description}
                    </p>
                  </div>

                  <div className="pt-6 mt-6 border-t border-[#C6C2C1]/40 flex items-center gap-1.5 text-xs font-bold text-[#502D6D] group-hover:text-[#FCB116] transition-colors">
                    <span>Learn More</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </div>
                </Link>
              </RevealOnScroll>
            );
          })}
        </div>

        {/* CTA Bar */}
        <RevealOnScroll delay={0.2}>
          <div className="rounded-3xl bg-gradient-to-r from-[#151515] via-[#22102E] to-[#151515] p-8 sm:p-10 border border-[#502D6D]/40 shadow-xl flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left relative overflow-hidden">
            {/* Ambient inner glow */}
            <div className="absolute right-0 top-0 bottom-0 w-80 bg-gradient-to-l from-[#FCB116]/10 to-transparent pointer-events-none" />

            <div className="relative z-10 space-y-1">
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                Have a Similar Requirement?
              </h3>
              <p className="text-sm text-[#D4C7EC]">
                Tell us about your project vision and get tailored technical guidance.
              </p>
            </div>

            <Link
              href="/contact"
              className="relative z-10 shrink-0 inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-gradient-to-r from-[#502D6D] to-[#FCB116] text-white font-bold text-sm hover:opacity-95 shadow-lg shadow-[#FCB116]/20 transition-all hover:scale-105 active:scale-95"
            >
              <span>Let&apos;s discuss it</span>
              <ArrowRight className="w-4 h-4 text-white" />
            </Link>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
