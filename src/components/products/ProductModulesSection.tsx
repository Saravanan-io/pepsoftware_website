"use client";

import React, { useState } from "react";
import {
  Clock,
  Navigation,
  Users,
  Calendar,
  Receipt,
  CheckSquare,
  Building2,
  Truck,
  Wrench,
  BarChart3,
  QrCode,
  Share2,
  Award,
  Activity,
  Bell,
  ShieldCheck,
  Search,
  Briefcase,
  Shield,
  Heart,
  UserCheck,
  Settings,
  UserPlus,
  PhoneCall,
  FileText,
  Image,
  Crown,
  LayoutDashboard,
  CheckCircle2,
  ShieldAlert,
  ChevronDown,
  LucideIcon,
} from "lucide-react";
import { RevealOnScroll } from "@/components/shared/RevealOnScroll";
import { ProductModule } from "@/data/products";

const MODULE_ICONS: Record<string, LucideIcon> = {
  Clock,
  Navigation,
  Users,
  Calendar,
  Receipt,
  CheckSquare,
  Building2,
  Truck,
  Wrench,
  BarChart3,
  QrCode,
  Share2,
  Award,
  Activity,
  Bell,
  ShieldCheck,
  Search,
  Briefcase,
  Shield,
  Heart,
  UserCheck,
  Settings,
  UserPlus,
  PhoneCall,
  FileText,
  Image,
  Crown,
  LayoutDashboard,
};

interface ProductModulesSectionProps {
  modules: ProductModule[];
  productName: string;
}

export function ProductModulesSection({ modules, productName }: ProductModulesSectionProps) {
  const [filter, setFilter] = useState<string>("all");

  return (
    <section id="product-modules" className="py-20 lg:py-28 bg-[#FFFFFF] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <RevealOnScroll>
            <div className="inline-flex items-center gap-2.5 mb-2">
              <span className="w-5 sm:w-6 h-[2px] rounded-full bg-gradient-to-r from-orange-400 to-[#7C3AED]" />
              <span className="font-syne text-xs sm:text-sm font-extrabold uppercase tracking-[0.2em] text-[#502D6D]">
                COMPLETE MODULE SPECIFICATION
              </span>
              <span className="w-5 sm:w-6 h-[2px] rounded-full bg-gradient-to-r from-[#7C3AED] to-orange-400" />
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#151515] tracking-tight leading-tight mt-1">
              Detailed Features &{" "}
              <span className="text-[#502D6D] bg-gradient-to-r from-[#502D6D] via-[#7C3AED] to-[#9333EA] bg-clip-text text-transparent">
                Product Modules.
              </span>
            </h2>

            <p className="mt-4 text-base sm:text-lg text-[#544643] leading-relaxed max-w-2xl mx-auto">
              Explore the verified operational modules that power the {productName}. Every capability is organized into structured functional areas supporting users and administrators.
            </p>
          </RevealOnScroll>
        </div>

        {/* Modules Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {modules.map((mod, idx) => {
            const Icon = MODULE_ICONS[mod.icon] || CheckSquare;
            return (
              <RevealOnScroll key={mod.id} delay={idx * 0.05}>
                <div className="relative rounded-[32px] bg-[#F8F9FA] hover:bg-white p-8 sm:p-9 border border-[#C6C2C1]/60 hover:border-[#502D6D]/40 shadow-xs hover:shadow-xl transition-all duration-300 h-full flex flex-col justify-between group">
                  
                  <div>
                    {/* Module Header Row */}
                    <div className="flex items-center justify-between gap-3 mb-6">
                      <div className="w-12 h-12 rounded-2xl bg-white border border-[#502D6D]/15 text-[#502D6D] flex items-center justify-center shadow-xs group-hover:scale-105 group-hover:bg-[#502D6D] group-hover:text-white transition-all duration-300">
                        <Icon className="w-6 h-6" />
                      </div>

                      <div className="flex items-center gap-2">
                        <span className="text-[11px] font-extrabold px-3 py-1 rounded-full bg-[#502D6D]/10 text-[#502D6D] border border-[#502D6D]/20 uppercase tracking-widest font-mono">
                          {mod.code}
                        </span>
                      </div>
                    </div>

                    {/* Module Name & Tagline */}
                    <h3 className="text-xl sm:text-2xl font-black text-[#151515] tracking-tight group-hover:text-[#502D6D] transition-colors">
                      {mod.name}
                    </h3>
                    <p className="text-xs font-semibold text-[#FCB116] mt-1 uppercase tracking-wider">
                      {mod.tagline}
                    </p>

                    {/* Description */}
                    <p className="mt-3 text-sm text-[#544643] leading-relaxed">
                      {mod.description}
                    </p>

                    {/* User & Operational Capabilities Checklist */}
                    <div className="mt-6 pt-5 border-t border-[#C6C2C1]/30 space-y-2.5">
                      <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#151515] block">
                        Included Functional Capabilities:
                      </span>
                      {mod.capabilities.map((cap, cIdx) => (
                        <div key={cIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#151515] font-medium leading-relaxed">
                          <CheckCircle2 className="w-4 h-4 text-[#059669] shrink-0 mt-0.5" />
                          <span>{cap}</span>
                        </div>
                      ))}
                    </div>

                    {/* Administrative Controls Block (if present) */}
                    {mod.adminCapabilities && mod.adminCapabilities.length > 0 && (
                      <div className="mt-5 p-4 rounded-2xl bg-purple-50/60 border border-purple-200/70 space-y-2">
                        <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#502D6D] block flex items-center gap-1.5">
                          <ShieldCheck className="w-3.5 h-3.5 text-[#502D6D]" />
                          <span>Administrative Oversight:</span>
                        </span>
                        {mod.adminCapabilities.map((aCap, aIdx) => (
                          <div key={aIdx} className="flex items-start gap-2 text-xs text-[#502D6D] font-medium leading-snug">
                            <span className="text-[#FCB116] font-bold">•</span>
                            <span>{aCap}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  <div className="mt-6 pt-4 border-t border-[#C6C2C1]/30 flex items-center justify-between text-[11px] text-[#544643]">
                    <span className="font-semibold">{productName}</span>
                    <span className="font-mono text-[10px] text-slate-400">Verified Module</span>
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
