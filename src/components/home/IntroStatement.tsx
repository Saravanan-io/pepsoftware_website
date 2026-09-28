"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Users, Check, Box, BarChart3, Zap, ShieldCheck, Lightbulb } from "lucide-react";
import { RevealOnScroll } from "../shared/RevealOnScroll";
import { AnimatedCounter } from "../shared/AnimatedCounter";

const checklistItems = [
  "Tailored Digital Solutions",
  "Business-Aligned Strategy",
  "User-Centered Design Focus",
  "Reliable Support & Delivery",
  "Transparent & Flexible Pricing",
  "Forward-Thinking Innovation",
];

const topMetrics = [
  {
    icon: Box,
    value: "20+",
    label: "Tailored Digital Solutions",
  },
  {
    icon: Users,
    value: "150+",
    label: "Satisfied Clients",
  },
  {
    icon: BarChart3,
    value: "100+",
    label: "Successful Projects",
  },
];

const bottomBadges = [
  {
    icon: Zap,
    label: "Tailored Digital Solutions",
    iconBg: "bg-[#FDF2EC]",
    iconColor: "text-[#C86A28]",
    borderColor: "border-[#F4D3C2]",
  },
  {
    icon: ShieldCheck,
    label: "Reliable Support & Delivery",
    iconBg: "bg-[#E6F4F1]",
    iconColor: "text-[#0D9488]",
    borderColor: "border-[#B2DFDB]",
  },
  {
    icon: Lightbulb,
    label: "Forward-Thinking Innovation",
    iconBg: "bg-[#FDF2EC]",
    iconColor: "text-[#C86A28]",
    borderColor: "border-[#F4D3C2]",
  },
];

export function IntroStatement() {
  return (
    <section id="about" className="py-20 lg:py-28 bg-[#F7F8F8] relative overflow-hidden noise-overlay">
      {/* Subtle neutral luxury background glows & grid */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-[#E7EBEA] blur-[150px] pointer-events-none" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#EFF0EF] blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute inset-0 bg-grid-dark pointer-events-none opacity-30" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Left Column: Narrative & Features */}
          <RevealOnScroll className="lg:col-span-6 space-y-6">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FBECE5] border border-[#F4D3C2] text-xs font-bold uppercase tracking-wider text-[#C86A28]">
              <Users className="w-3.5 h-3.5 text-[#C86A28]" />
              <span>WHO WE ARE?</span>
            </span>

            <h2 className="text-4xl sm:text-5xl lg:text-[46px] font-extrabold leading-[1.15] tracking-tight text-[#151515]">
              Maximize your{" "}
              <span className="text-[#C86A28]">digital potential</span>{" "}
              and captivate your audience.
            </h2>

            <p className="text-base sm:text-lg text-[#544643] leading-relaxed">
              At Pep Software, we turn your ideas into impactful digital solutions. Whether you&apos;re building a website, refining your UI/UX, or launching a product &mdash; our team delivers tailored strategies that boost performance and keep users engaged.
            </p>

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
                className="inline-flex items-center gap-3 px-6 py-3.5 rounded-full bg-[#151515] text-[#F7F8F8] font-bold text-sm hover:bg-[#544643] transition-all shadow-md shadow-[#151515]/10 group"
              >
                <span>Our Services</span>
                <span className="w-6 h-6 rounded-full bg-[#C86A28] flex items-center justify-center text-white transition-transform group-hover:translate-x-0.5">
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center text-sm font-bold text-[#151515] border-b-2 border-[#C86A28] pb-1 hover:text-[#C86A28] transition-colors"
              >
                Customer Support
              </Link>
            </div>
          </RevealOnScroll>

          {/* Right Column: Dashboard Visual Card */}
          <RevealOnScroll delay={0.2} className="lg:col-span-6">
            <div className="relative">
              {/* Outer Dashboard Card */}
              <div className="p-5 sm:p-7 rounded-[32px] bg-[#EFF0EF]/90 border border-[#C6C2C1] shadow-xl space-y-4 sm:space-y-5">
                {/* Top Metrics Row */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {topMetrics.map((stat) => {
                    const Icon = stat.icon;
                    return (
                      <div
                        key={stat.label}
                        className="flex items-center gap-3 p-3.5 rounded-2xl bg-[#FFFFFF] border border-[#C6C2C1]/70 shadow-xs"
                      >
                        <div className="w-10 h-10 rounded-xl bg-[#FDF2EC] border border-[#F4D3C2] flex items-center justify-center text-[#C86A28] shrink-0">
                          <Icon className="w-5 h-5" />
                        </div>
                        <div className="min-w-0">
                          <div className="text-xl sm:text-2xl font-black text-[#151515] leading-none">
                            <AnimatedCounter value={stat.value} />
                          </div>
                          <div className="text-[11px] font-semibold text-[#544643] leading-tight mt-1 truncate">
                            {stat.label}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Center 3D Showcase Graphic */}
                <div className="relative w-full aspect-[16/8.8] rounded-2xl overflow-hidden border border-[#C6C2C1]/80 shadow-xs bg-[#FBFBFA]">
                  <Image
                    src="/images/home/digital-potential-showcase.jpg"
                    alt="Higher performance, engaged audience, and digital potential"
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>

                {/* Bottom Badges Row */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {bottomBadges.map((badge) => {
                    const Icon = badge.icon;
                    return (
                      <div
                        key={badge.label}
                        className="flex items-center gap-2.5 p-3 rounded-2xl bg-[#FFFFFF] border border-[#C6C2C1]/70 shadow-xs"
                      >
                        <div className={`w-8 h-8 rounded-lg ${badge.iconBg} ${badge.borderColor} border flex items-center justify-center ${badge.iconColor} shrink-0`}>
                          <Icon className="w-4 h-4" />
                        </div>
                        <span className="text-[11px] font-bold text-[#151515] leading-tight">
                          {badge.label}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}
