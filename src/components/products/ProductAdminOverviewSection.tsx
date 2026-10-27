"use client";

import React from "react";
import {
  MapPin,
  Users,
  ShieldAlert,
  CheckCircle2,
  FileSpreadsheet,
  Bell,
  QrCode,
  BarChart3,
  UserCheck,
  Megaphone,
  BookOpen,
  Shield,
  Image,
  Send,
  Edit3,
  Crown,
  Receipt,
  LucideIcon,
} from "lucide-react";
import { RevealOnScroll } from "@/components/shared/RevealOnScroll";
import { ProductDetailData } from "@/data/products";

const ADMIN_ICONS: Record<string, LucideIcon> = {
  MapPin,
  Users,
  ShieldAlert,
  CheckCircle2,
  FileSpreadsheet,
  Bell,
  QrCode,
  BarChart3,
  UserCheck,
  Megaphone,
  BookOpen,
  Shield,
  Image,
  Send,
  Edit3,
  Crown,
  Receipt,
};

interface ProductAdminOverviewSectionProps {
  administration: ProductDetailData["administration"];
  productName: string;
}

export function ProductAdminOverviewSection({
  administration,
  productName,
}: ProductAdminOverviewSectionProps) {
  return (
    <section className="py-20 lg:py-28 bg-[#F8FAFC] relative overflow-hidden border-t border-[#C6C2C1]/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <RevealOnScroll>
            <div className="inline-flex items-center gap-2.5 mb-2">
              <span className="w-5 sm:w-6 h-[2px] rounded-full bg-gradient-to-r from-orange-400 to-[#7C3AED]" />
              <span className="font-syne text-xs sm:text-sm font-extrabold uppercase tracking-[0.2em] text-[#502D6D]">
                CENTRALIZED GOVERNANCE
              </span>
              <span className="w-5 sm:w-6 h-[2px] rounded-full bg-gradient-to-r from-[#7C3AED] to-orange-400" />
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#151515] tracking-tight leading-tight mt-1">
              {administration.heading}
            </h2>

            <p className="mt-4 text-base sm:text-lg text-[#544643] leading-relaxed max-w-2xl mx-auto">
              {administration.description}
            </p>
          </RevealOnScroll>
        </div>

        {/* 6 Capabilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {administration.capabilities.map((cap, idx) => {
            const Icon = ADMIN_ICONS[cap.icon] || Shield;
            return (
              <RevealOnScroll key={cap.title} delay={idx * 0.08}>
                <div className="p-7 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-xs hover:shadow-xl hover:border-[#502D6D]/30 transition-all duration-300 h-full flex flex-col justify-between group">
                  <div>
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#502D6D]/10 to-[#FCB116]/20 border border-[#502D6D]/15 text-[#502D6D] flex items-center justify-center shadow-xs group-hover:scale-105 group-hover:bg-[#502D6D] group-hover:text-white transition-all duration-300 mb-5">
                      <Icon className="w-6 h-6" />
                    </div>

                    <h3 className="text-lg sm:text-xl font-bold text-[#151515] tracking-tight group-hover:text-[#502D6D] transition-colors">
                      {cap.title}
                    </h3>

                    <p className="mt-3 text-xs sm:text-sm text-[#544643] leading-relaxed">
                      {cap.detail}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-2 text-[11px] font-bold text-[#502D6D]">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#FCB116]" />
                    <span>Administrator Console Feature</span>
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
