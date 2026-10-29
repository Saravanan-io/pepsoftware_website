"use client";

import React from "react";
import {
  Workflow,
  Users,
  ShieldCheck,
  SearchCheck,
  CheckCircle2,
} from "lucide-react";
import { RevealOnScroll } from "@/components/shared/RevealOnScroll";

const BENEFIT_THEMES = [
  {
    title: "Purpose-focused functionality",
    content:
      "Explore functionality grouped around the activities your organization needs to manage, from employee attendance and working-time records to membership, meetings, directories and service operations.",
    icon: Workflow,
    iconBg: "bg-purple-100 text-[#502D6D]",
  },
  {
    title: "User and administrator workflows",
    content:
      "Understand how the available application features support both everyday users and the administrators responsible for managing organizational information and activity.",
    icon: Users,
    iconBg: "bg-amber-100 text-[#B45309]",
  },
  {
    title: "Organized management",
    content:
      "Review the available administrative capabilities for records, attendance, approvals, events, member activity or subscription-related workflows, depending on the product.",
    icon: ShieldCheck,
    iconBg: "bg-blue-100 text-[#1D4ED8]",
  },
  {
    title: "Product-focused evaluation",
    content:
      "Explore the relevant modules and discuss how the documented capabilities relate to your organization's requirements.",
    icon: SearchCheck,
    iconBg: "bg-emerald-100 text-[#047857]",
  },
];

export function ProductsWhyUsSection() {
  return (
    <section className="py-20 lg:py-28 bg-[#F7F8F8] relative overflow-hidden border-t border-[#C6C2C1]/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <RevealOnScroll>
            <div className="inline-flex items-center gap-2.5 mb-2">
              <span className="w-5 sm:w-6 h-[2px] rounded-full bg-gradient-to-r from-orange-400 to-[#7C3AED]" />
              <span className="font-syne text-xs sm:text-sm font-extrabold uppercase tracking-[0.2em] text-[#502D6D]">
                WHY OUR PRODUCTS
              </span>
              <span className="w-5 sm:w-6 h-[2px] rounded-full bg-gradient-to-r from-[#7C3AED] to-orange-400" />
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#151515] tracking-tight leading-tight mt-1">
              Built Around Practical{" "}
              <span className="text-[#502D6D] bg-gradient-to-r from-[#502D6D] via-[#7C3AED] to-[#9333EA] bg-clip-text text-transparent">
                Business Workflows.
              </span>
            </h2>

            <p className="mt-4 text-base sm:text-lg text-[#544643] leading-relaxed max-w-2xl mx-auto">
              Different organizations need different tools. Our product categories focus on the workflows behind workforce administration, business networking, association management and matrimony services.
            </p>
          </RevealOnScroll>
        </div>

        {/* 4 Benefit Themes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {BENEFIT_THEMES.map((theme, idx) => {
            const Icon = theme.icon;
            return (
              <RevealOnScroll key={theme.title} delay={idx * 0.1}>
                <div className="relative rounded-3xl bg-white p-8 sm:p-9 border border-[#C6C2C1]/50 shadow-[0_10px_30px_rgba(80,45,109,0.03)] hover:shadow-xl hover:border-[#502D6D]/30 transition-all duration-300 h-full flex flex-col justify-between group">
                  <div>
                    <div className="flex items-center gap-4 mb-5">
                      <div className={`w-12 h-12 rounded-2xl ${theme.iconBg} flex items-center justify-center shadow-xs group-hover:scale-105 transition-transform`}>
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="text-xs font-bold text-[#502D6D] tracking-widest uppercase">
                        Theme 0{idx + 1}
                      </span>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-bold text-[#151515] tracking-tight group-hover:text-[#502D6D] transition-colors">
                      {theme.title}
                    </h3>

                    <p className="mt-3 text-sm sm:text-base text-[#544643] leading-relaxed">
                      {theme.content}
                    </p>
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
