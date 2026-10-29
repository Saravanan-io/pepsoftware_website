"use client";

import React from "react";
import Link from "next/link";
import {
  ArrowRight,
  Clock,
  Briefcase,
  Users2,
  HeartHandshake,
  CheckCircle2,
  ChevronRight,
  Sparkles,
} from "lucide-react";
import { RevealOnScroll } from "@/components/shared/RevealOnScroll";

interface ProductCardItem {
  id: string;
  title: string;
  category: string;
  route: string;
  ctaText: string;
  icon: React.ComponentType<{ className?: string }>;
  description: string;
  verifiedFeatures: string[];
  moduleCount: string;
  badgeColor: string;
}

const PRODUCTS: ProductCardItem[] = [
  {
    id: "attendance-tracking-system",
    title: "Attendance Tracking System",
    category: "Workforce & Operations Management",
    route: "/products/attendance-tracking-system/",
    ctaText: "Explore Attendance Tracking System",
    icon: Clock,
    description:
      "Manage employee attendance, working-time records and related workforce operations through a structured application experience. Explore attendance, location-aware checks, employee and leave workflows, payroll-related information and additional workforce-operation modules.",
    verifiedFeatures: [
      "Employee check-in, check-out, and multiple daily attendance sessions",
      "GPS location checks, site geofencing, and out-of-bounds alerts",
      "Employee profiles, departments, and leave approval workflows",
      "Payslip viewing and verified attendance summaries",
      "Operational task assignments, material indents, and tool inventory",
    ],
    moduleCount: "10 Integrated Modules",
    badgeColor: "bg-purple-100 text-[#502D6D] border-purple-200",
  },
  {
    id: "business-club-app",
    title: "Business Club App",
    category: "Business Networking & Chapter Operations",
    route: "/products/business-club-app/",
    ctaText: "Explore Business Club App",
    icon: Briefcase,
    description:
      "Organize business club membership, meetings, attendance and networking activities. Explore member profiles, referral workflows, Thank You Notes, engagement features and administrative tools.",
    verifiedFeatures: [
      "Member directory with non-competing business categories",
      "Regular meetings, Power Team sessions, and QR attendance checks",
      "Leave application and early-departure permission workflows",
      "Business referral recording and R-to-R interaction tracking",
      "Thank You Notes with recorded business value and participation points",
    ],
    moduleCount: "8 Dedicated Modules",
    badgeColor: "bg-amber-100 text-[#B45309] border-amber-200",
  },
  {
    id: "network-club-app",
    title: "Network Club App",
    category: "Association & Member Directory Management",
    route: "/products/network-club-app/",
    ctaText: "Explore Network Club App",
    icon: Users2,
    description:
      "Help member-based organizations organize member directories, business profiles, committee information, events and member-related communications through a dedicated application experience.",
    verifiedFeatures: [
      "Searchable member directory with business, brand, and contact fields",
      "Executive committee and chairperson records grouped by terms",
      "Upcoming and past association events with photo archives",
      "In-app advertisements, announcements, and circular notices",
      "Birthday and anniversary notifications with member approval queues",
    ],
    moduleCount: "8 Association Modules",
    badgeColor: "bg-blue-100 text-[#1D4ED8] border-blue-200",
  },
  {
    id: "matrimony-application",
    title: "Matrimony Application",
    category: "B2B Software for Businesses & Associations",
    route: "/products/matrimony-application/",
    ctaText: "Explore Matrimony Application",
    icon: HeartHandshake,
    description:
      "Explore a matrimony application with member profiles, partner discovery, interest workflows, membership administration and operator-facing management tools for businesses and associations exploring a matrimony service.",
    verifiedFeatures: [
      "Multi-step registration (personal, family, astrology, lifestyle)",
      "Filter-based partner discovery, favourites, and express interest flows",
      "Quota-controlled contact reveal and downloadable biodata PDF",
      "Horoscope document handling and profile photo moderation",
      "Membership plans, receipt upload, and operator payment verification",
    ],
    moduleCount: "10 Operator Modules",
    badgeColor: "bg-rose-100 text-[#BE123C] border-rose-200",
  },
];

export function ProductsOverviewGrid() {
  return (
    <section id="explore-products" className="py-20 lg:py-28 bg-[#FFFFFF] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <RevealOnScroll>
            <div className="inline-flex items-center gap-2.5 mb-2">
              <span className="w-5 sm:w-6 h-[2px] rounded-full bg-gradient-to-r from-orange-400 to-[#7C3AED]" />
              <span className="font-syne text-xs sm:text-sm font-extrabold uppercase tracking-[0.2em] text-[#502D6D]">
                OUR PRODUCTS
              </span>
              <span className="w-5 sm:w-6 h-[2px] rounded-full bg-gradient-to-r from-[#7C3AED] to-orange-400" />
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#151515] tracking-tight leading-tight mt-1">
              Explore Our{" "}
              <span className="text-[#502D6D] bg-gradient-to-r from-[#502D6D] via-[#7C3AED] to-[#9333EA] bg-clip-text text-transparent">
                Products.
              </span>
            </h2>

            <p className="mt-4 text-base sm:text-lg text-[#544643] leading-relaxed max-w-2xl mx-auto">
              Each product addresses a different set of operational needs. Explore the modules, understand the available workflows and review the product details to see what may fit your organization.
            </p>
          </RevealOnScroll>
        </div>

        {/* 4 Cards Grid (2x2 on desktop for rich, complete presentation) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          {PRODUCTS.map((product, idx) => {
            const Icon = product.icon;
            return (
              <RevealOnScroll key={product.id} delay={idx * 0.1}>
                <div className="group relative h-full rounded-[32px] bg-white border border-[#C6C2C1]/60 hover:border-[#502D6D]/40 p-8 sm:p-10 shadow-[0_10px_35px_rgba(80,45,109,0.04)] hover:shadow-2xl hover:shadow-[#502D6D]/10 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between overflow-hidden">
                  
                  {/* Subtle Top Accent Line */}
                  <div className="h-1.5 w-full absolute top-0 left-0 bg-gradient-to-r from-transparent via-[#502D6D]/30 to-transparent group-hover:via-[#502D6D] transition-all" />

                  {/* Corner Glow Accent */}
                  <div className="absolute -top-16 -right-16 w-40 h-40 bg-[radial-gradient(circle,rgba(80,45,109,0.06)_0%,transparent_70%)] rounded-full pointer-events-none group-hover:scale-125 transition-transform duration-500" />

                  <div>
                    {/* Top Row: Icon, Category Badge, Module Count */}
                    <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
                      <div className="w-14 h-14 rounded-2xl bg-[#502D6D]/10 border border-[#502D6D]/15 flex items-center justify-center text-[#502D6D] group-hover:scale-105 group-hover:bg-[#502D6D] group-hover:text-white transition-all duration-300 shadow-sm">
                        <Icon className="w-7 h-7" />
                      </div>

                      <div className="flex items-center gap-2">
                        <span className={`text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full border ${product.badgeColor}`}>
                          {product.category}
                        </span>
                        <span className="text-[10px] font-semibold text-[#544643] bg-[#F7F8F8] px-2.5 py-1 rounded-full border border-[#C6C2C1]/50">
                          {product.moduleCount}
                        </span>
                      </div>
                    </div>

                    {/* Product Title */}
                    <h3 className="text-2xl sm:text-3xl font-black text-[#151515] tracking-tight group-hover:text-[#502D6D] transition-colors">
                      {product.title}
                    </h3>

                    {/* Exact Specified Description */}
                    <p className="mt-3 text-sm sm:text-base text-[#544643] leading-relaxed">
                      {product.description}
                    </p>

                    {/* Verified Capabilities Checklist */}
                    <div className="mt-6 pt-5 border-t border-[#C6C2C1]/40 space-y-2.5">
                      <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#502D6D] block">
                        Verified Application Capabilities:
                      </span>
                      {product.verifiedFeatures.map((feat, fIdx) => (
                        <div key={fIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#151515] font-medium leading-snug">
                          <CheckCircle2 className="w-4 h-4 text-[#FCB116] shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Card Bottom CTA Link */}
                  <div className="mt-8 pt-6 border-t border-[#C6C2C1]/30 flex flex-wrap items-center justify-between gap-4">
                    <Link
                      href={product.route}
                      className="inline-flex items-center gap-2 text-sm sm:text-base font-bold text-[#502D6D] group-hover:text-[#3F1E5C] transition-colors"
                    >
                      <span>{product.ctaText}</span>
                      <ArrowRight className="w-4 h-4 text-[#FCB116] group-hover:translate-x-1.5 transition-transform" />
                    </Link>

                    <Link
                      href={`/contact?product=${product.id}`}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#544643] hover:text-[#151515] bg-[#F7F8F8] hover:bg-[#EFF0EF] px-3.5 py-2 rounded-full border border-[#C6C2C1]/60 transition-colors"
                    >
                      <span>Request Demo</span>
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
