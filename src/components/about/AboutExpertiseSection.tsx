"use client";

import React from "react";
import Link from "next/link";
import {
  Palette,
  Globe,
  Smartphone,
  Cpu,
  Cloud,
  Layers,
  ArrowRight,
} from "lucide-react";
import { RevealOnScroll } from "@/components/shared/RevealOnScroll";

const CAPABILITIES = [
  {
    title: "UI/UX Design",
    desc: "Creating intuitive, user-friendly and visually engaging digital experiences.",
    icon: Palette,
    link: "/services",
    iconBg: "bg-purple-100",
    iconColor: "text-[#7C3AED]",
  },
  {
    title: "Website & Web App Development",
    desc: "Building responsive websites and powerful web applications for businesses and organizations.",
    icon: Globe,
    link: "/services",
    iconBg: "bg-blue-100",
    iconColor: "text-blue-600",
  },
  {
    title: "Mobile App Development",
    desc: "Designing and developing mobile applications that provide seamless experiences across devices.",
    icon: Smartphone,
    link: "/services",
    iconBg: "bg-emerald-100",
    iconColor: "text-emerald-600",
  },
  {
    title: "Custom Software Development",
    desc: "Building business-specific software to solve unique operational and workflow challenges.",
    icon: Cpu,
    link: "/services",
    iconBg: "bg-amber-100",
    iconColor: "text-amber-600",
  },
  {
    title: "SaaS Product Development",
    desc: "Helping businesses turn product ideas into scalable cloud-based software products.",
    icon: Cloud,
    link: "/services",
    iconBg: "bg-indigo-100",
    iconColor: "text-indigo-600",
  },
  {
    title: "Digital Solutions",
    desc: "Integrating technology, automation and digital tools to improve the way businesses operate.",
    icon: Layers,
    link: "/services",
    iconBg: "bg-rose-100",
    iconColor: "text-rose-600",
  },
];

export function AboutExpertiseSection() {
  return (
    <section className="py-20 lg:py-28 bg-[#F8FAFC] relative overflow-hidden border-b border-[#C6C2C1]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          <RevealOnScroll>
            <div className="inline-flex items-center gap-2.5 mb-2">
              <span className="w-5 sm:w-6 h-[2px] rounded-full bg-gradient-to-r from-orange-400 to-[#7C3AED]" />
              <span className="font-syne text-xs sm:text-sm font-extrabold uppercase tracking-[0.2em] text-[#502D6D]">
                Our Expertise
              </span>
              <span className="w-5 sm:w-6 h-[2px] rounded-full bg-gradient-to-r from-[#7C3AED] to-orange-400" />
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#151515] tracking-tight leading-tight mt-1">
              One Team.{" "}
              <span className="text-[#502D6D] bg-gradient-to-r from-[#502D6D] via-[#7C3AED] to-[#9333EA] bg-clip-text text-transparent">
                Multiple Digital Capabilities.
              </span>
            </h2>

            <p className="mt-4 text-base sm:text-lg text-[#544643] leading-relaxed max-w-2xl mx-auto">
              From the first idea to the final product, our team brings together design, development and technology expertise to build complete digital solutions.
            </p>
          </RevealOnScroll>
        </div>

        {/* 6 Capabilities Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {CAPABILITIES.map((item, idx) => {
            const Icon = item.icon;
            return (
              <RevealOnScroll key={item.title} delay={idx * 0.08}>
                <div className="relative rounded-3xl bg-white p-7 sm:p-8 border border-slate-200/80 shadow-[0_10px_30px_rgba(80,45,109,0.04)] hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 group h-full flex flex-col justify-between">
                  <div>
                    <div
                      className={`w-12 h-12 rounded-2xl ${item.iconBg} ${item.iconColor} flex items-center justify-center shadow-xs group-hover:scale-110 transition-transform mb-5`}
                    >
                      <Icon className="w-6 h-6" />
                    </div>

                    <h3 className="text-xl font-bold text-[#151515] tracking-tight group-hover:text-[#502D6D] transition-colors">
                      {item.title}
                    </h3>

                    <p className="text-sm sm:text-base text-[#544643] leading-relaxed mt-2.5">
                      {item.desc}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                    <Link
                      href={item.link}
                      className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#7C3AED] hover:text-[#502D6D] group-hover:translate-x-0.5 transition-transform"
                    >
                      <span>Explore Capability</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
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
