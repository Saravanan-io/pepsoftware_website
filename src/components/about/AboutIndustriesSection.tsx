"use client";

import React from "react";
import Link from "next/link";
import {
  Factory,
  Activity,
  GraduationCap,
  Building2,
  Briefcase,
  ShoppingBag,
  TrendingUp,
  Users,
  Utensils,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";
import { RevealOnScroll } from "@/components/shared/RevealOnScroll";

const INDUSTRIES = [
  { name: "Manufacturing", icon: Factory, desc: "B2B portals, quote engines, and shop-floor tracking systems." },
  { name: "Healthcare", icon: Activity, desc: "Patient portals, diagnostic records, and telehealth workflows." },
  { name: "Education", icon: GraduationCap, desc: "E-learning platforms, student dashboards, and courseware." },
  { name: "Real Estate", icon: Building2, desc: "Property catalogs, virtual tours, and CRM booking pipelines." },
  { name: "Professional Services", icon: Briefcase, desc: "Advisory client portals, invoicing, and service scheduling." },
  { name: "Retail & E-commerce", icon: ShoppingBag, desc: "Multi-vendor marketplaces, storefronts, and payment gateways." },
  { name: "Finance & Financial Services", icon: TrendingUp, desc: "Wealth calculators, compliance engines, and investment tracking." },
  { name: "NGOs & Associations", icon: Users, desc: "Donor management, membership directories, and community hubs." },
  { name: "Food & Hospitality", icon: Utensils, desc: "Order management, multi-outlet menus, and reservations." },
  { name: "Business & Enterprise", icon: ShieldCheck, desc: "Custom ERPs, internal tooling, and automated workflows." },
];

export function AboutIndustriesSection() {
  return (
    <section className="py-20 lg:py-28 bg-[#F8FAFC] relative overflow-hidden border-b border-[#C6C2C1]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          <RevealOnScroll>
            <div className="inline-flex items-center gap-2.5 mb-2">
              <span className="w-5 sm:w-6 h-[2px] rounded-full bg-gradient-to-r from-orange-400 to-[#7C3AED]" />
              <span className="font-syne text-xs sm:text-sm font-extrabold uppercase tracking-[0.2em] text-[#502D6D]">
                Industries We Serve
              </span>
              <span className="w-5 sm:w-6 h-[2px] rounded-full bg-gradient-to-r from-[#7C3AED] to-orange-400" />
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#151515] tracking-tight leading-tight mt-1">
              Technology for Different Businesses.{" "}
              <span className="text-[#502D6D] bg-gradient-to-r from-[#502D6D] via-[#7C3AED] to-[#9333EA] bg-clip-text text-transparent">
                Different Challenges.
              </span>
            </h2>

            <p className="mt-4 text-base sm:text-lg text-[#544643] leading-relaxed max-w-2xl mx-auto">
              Our experience spans multiple industries, allowing us to understand different business workflows and build solutions around their specific needs.
            </p>
          </RevealOnScroll>
        </div>

        {/* 10 Industries Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-5">
          {INDUSTRIES.map((ind, idx) => {
            const Icon = ind.icon;
            return (
              <RevealOnScroll key={ind.name} delay={idx * 0.05}>
                <div className="p-6 rounded-2xl bg-white border border-slate-200/80 hover:border-purple-300 shadow-xs hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group h-full flex flex-col justify-between">
                  <div>
                    <div className="w-11 h-11 rounded-xl bg-purple-50 text-[#7C3AED] flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-[#502D6D] group-hover:text-white transition-all">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-base font-bold text-[#151515] tracking-tight group-hover:text-[#502D6D] transition-colors">
                      {ind.name}
                    </h3>
                    <p className="text-xs text-[#544643] mt-2 leading-relaxed">
                      {ind.desc}
                    </p>
                  </div>
                </div>
              </RevealOnScroll>
            );
          })}
        </div>

        {/* Supporting Text Callout & Action */}
        <div className="mt-12 sm:mt-14 max-w-3xl mx-auto text-center">
          <RevealOnScroll delay={0.2}>
            <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200/80 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-6 text-left">
              <div className="max-w-xl">
                <span className="text-xs font-bold uppercase tracking-wider text-[#502D6D] block mb-1">
                  Ready to Transform Your Industry?
                </span>
                <p className="text-sm sm:text-base text-[#544643] leading-relaxed">
                  Whether you&apos;re running a growing business, an established organization or building a new digital product, we can work with you to find the right technology solution.
                </p>
              </div>
              <Link
                href="/contact"
                className="shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#151515] hover:bg-[#502D6D] text-white text-xs sm:text-sm font-bold shadow-md transition-all cursor-pointer group"
              >
                <span>Find Your Solution</span>
                <ArrowRight className="w-4 h-4 text-[#FCB116] group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </RevealOnScroll>
        </div>

      </div>
    </section>
  );
}
