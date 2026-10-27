"use client";

import React from "react";
import {
  Clock,
  AlertTriangle,
  CalendarCheck,
  MapPin,
  Wrench,
  FileText,
  Users,
  Calendar,
  CheckCircle,
  Share2,
  Award,
  Activity,
  Search,
  Briefcase,
  Shield,
  Megaphone,
  UserCheck,
  User,
  Edit3,
  Heart,
  CreditCard,
  LucideIcon,
} from "lucide-react";
import { RevealOnScroll } from "@/components/shared/RevealOnScroll";
import { ProductDetailData } from "@/data/products";

const ICON_MAP: Record<string, LucideIcon> = {
  Clock,
  AlertTriangle,
  CalendarCheck,
  MapPin,
  Wrench,
  FileText,
  Users,
  Calendar,
  CheckCircle,
  Share2,
  Award,
  Activity,
  Search,
  Briefcase,
  Shield,
  Megaphone,
  UserCheck,
  User,
  Edit3,
  Heart,
  CreditCard,
};

interface ProductChallengesSectionProps {
  challenges: ProductDetailData["challenges"];
}

export function ProductChallengesSection({ challenges }: ProductChallengesSectionProps) {
  return (
    <section className="py-20 lg:py-28 bg-[#FFFFFF] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <RevealOnScroll>
            <div className="inline-flex items-center gap-2.5 mb-2">
              <span className="w-5 sm:w-6 h-[2px] rounded-full bg-gradient-to-r from-orange-400 to-[#7C3AED]" />
              <span className="font-syne text-xs sm:text-sm font-extrabold uppercase tracking-[0.2em] text-[#502D6D]">
                OPERATIONAL SITUATIONS
              </span>
              <span className="w-5 sm:w-6 h-[2px] rounded-full bg-gradient-to-r from-[#7C3AED] to-orange-400" />
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#151515] tracking-tight leading-tight mt-1">
              {challenges.heading}
            </h2>

            <p className="mt-4 text-base sm:text-lg text-[#544643] leading-relaxed max-w-2xl mx-auto">
              {challenges.intro}
            </p>
          </RevealOnScroll>
        </div>

        {/* Challenges Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {challenges.items.map((item, idx) => {
            const Icon = ICON_MAP[item.icon] || FileText;
            return (
              <RevealOnScroll key={item.title} delay={idx * 0.08}>
                <div className="relative rounded-3xl bg-[#F8F9FA] hover:bg-white p-7 sm:p-8 border border-[#C6C2C1]/50 hover:border-[#502D6D]/40 shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full flex flex-col justify-between group">
                  <div>
                    <div className="w-12 h-12 rounded-2xl bg-white border border-[#502D6D]/15 text-[#502D6D] flex items-center justify-center shadow-xs group-hover:bg-[#502D6D] group-hover:text-white transition-all duration-300 mb-5">
                      <Icon className="w-6 h-6" />
                    </div>

                    <h3 className="text-lg sm:text-xl font-bold text-[#151515] tracking-tight group-hover:text-[#502D6D] transition-colors">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-sm text-[#544643] leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-[#C6C2C1]/30 flex items-center justify-between text-[11px] font-bold text-[#502D6D]">
                    <span className="uppercase tracking-wider">Operational Requirement</span>
                    <span className="text-[#FCB116]">0{idx + 1}</span>
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
