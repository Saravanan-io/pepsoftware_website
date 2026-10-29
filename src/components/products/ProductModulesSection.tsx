"use client";

import React, { useState, useEffect } from "react";
import NextImage from "next/image";
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
  Crown,
  LayoutDashboard,
  CheckCircle2,
  Maximize2,
  X,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  LucideIcon,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
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
  Crown,
  LayoutDashboard,
};

interface ProductModulesSectionProps {
  modules: ProductModule[];
  productName: string;
}

export function ProductModulesSection({
  modules,
  productName,
}: ProductModulesSectionProps) {
  const [modalModuleIdx, setModalModuleIdx] = useState<number | null>(null);

  const hasScreenshots = modules.some((m) => !!m.image);

  // Keyboard navigation for screenshot modal
  useEffect(() => {
    if (modalModuleIdx === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setModalModuleIdx(null);
      } else if (e.key === "ArrowLeft") {
        setModalModuleIdx((prev) =>
          prev !== null ? (prev > 0 ? prev - 1 : modules.length - 1) : null
        );
      } else if (e.key === "ArrowRight") {
        setModalModuleIdx((prev) =>
          prev !== null ? (prev < modules.length - 1 ? prev + 1 : 0) : null
        );
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [modalModuleIdx, modules.length]);

  return (
    <section id="product-modules" className="py-20 lg:py-28 bg-[#FFFFFF] relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-0 inset-x-0 h-96 bg-gradient-to-b from-[#FBF8FF] to-transparent pointer-events-none -z-10" />
      <div className="absolute top-1/3 -right-32 w-96 h-96 bg-purple-100/40 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute bottom-1/4 -left-32 w-96 h-96 bg-amber-100/30 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <RevealOnScroll>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#151515] tracking-tight leading-tight">
              {productName.includes("Attendance") ? "Workforce Operations & " : "Core Features & "}
              <span className="text-[#502D6D] bg-gradient-to-r from-[#502D6D] via-[#7C3AED] to-[#EA580C] bg-clip-text text-transparent">
                Live App Modules.
              </span>
            </h2>

            <p className="mt-4 text-base sm:text-lg text-[#544643] leading-relaxed max-w-2xl mx-auto">
              Explore the complete application experience powering the {productName}. Review verified screenshots from the live application, paired with simple descriptions of everyday operations.
            </p>
          </RevealOnScroll>
        </div>

        {/* ─── MODULES DISPLAY ────────────────────────────────────────────── */}
        {hasScreenshots ? (
          /* ── Rich Alternating Showcase with Screenshots ── */
          <div className="space-y-12 lg:space-y-16">
            {modules.map((mod, idx) => {
              const Icon = MODULE_ICONS[mod.icon] || CheckSquare;
              const isEven = idx % 2 === 0;

              return (
                <RevealOnScroll key={mod.id} delay={0.05}>
                  <div className="relative rounded-[32px] sm:rounded-[36px] bg-gradient-to-br from-white via-[#FCFAFF] to-white p-6 sm:p-10 lg:p-12 border border-[#C6C2C1]/60 hover:border-[#502D6D]/40 shadow-xs hover:shadow-2xl transition-all duration-500 group overflow-hidden">
                    
                    {/* Ambient Glow */}
                    <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl from-[#7C3AED]/10 via-transparent to-transparent rounded-full pointer-events-none -z-0" />

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
                      
                      {/* ── Left / Right Phone Mockup ───────────────────────── */}
                      <div
                        className={`lg:col-span-5 flex flex-col items-center justify-center ${
                          isEven ? "lg:order-1" : "lg:order-2"
                        }`}
                      >
                        <div
                          onClick={() => setModalModuleIdx(idx)}
                          className="relative cursor-pointer group/phone transition-transform duration-300 hover:scale-[1.02]"
                          title="Click to view full-size screenshot"
                        >
                          {/* Smartphone Outer Chassis */}
                          <div className="w-[260px] sm:w-[290px] rounded-[44px] bg-[#1E1B24] p-3 shadow-[0_25px_60px_-15px_rgba(80,45,109,0.3)] ring-1 ring-white/20 relative">
                            
                            {/* Speaker slit & Dynamic Island Notch */}
                            <div className="absolute top-4 left-1/2 -translate-x-1/2 w-24 h-4 bg-black/90 rounded-full z-20 flex items-center justify-center">
                              <span className="w-2.5 h-2.5 rounded-full bg-slate-900 border border-slate-700/60 mr-2" />
                              <span className="w-8 h-1 rounded-full bg-slate-800" />
                            </div>

                            {/* Screen Container */}
                            <div className="relative rounded-[36px] overflow-hidden bg-white aspect-[442/961] shadow-inner">
                              {mod.image ? (
                                <NextImage
                                  src={mod.image}
                                  alt={`${mod.name} screenshot`}
                                  width={442}
                                  height={961}
                                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover/phone:scale-105"
                                  priority={idx === 0}
                                />
                              ) : (
                                <div className="w-full h-full flex flex-col items-center justify-center bg-purple-50 p-6 text-center">
                                  <Icon className="w-16 h-16 text-[#502D6D] mb-4" />
                                  <p className="font-bold text-[#151515] text-sm">{mod.name}</p>
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* ── Content Column ─────────────────────────────────── */}
                      <div
                        className={`lg:col-span-7 flex flex-col justify-center ${
                          isEven ? "lg:order-2" : "lg:order-1"
                        }`}
                      >
                        {/* Header Badges */}
                        <div className="flex flex-wrap items-center gap-2.5 mb-4">
                          <span className="text-[11px] font-black px-3 py-1 rounded-full bg-[#502D6D] text-white tracking-widest font-mono uppercase shadow-xs">
                            {mod.code}
                          </span>
                          {mod.badge && (
                            <span className="text-[11px] font-bold px-3 py-1 rounded-full bg-[#FCB116]/20 text-[#B45309] border border-[#FCB116]/30 uppercase tracking-wider">
                              {mod.badge}
                            </span>
                          )}
                          <div className="w-8 h-8 rounded-xl bg-purple-50 text-[#502D6D] border border-purple-200/50 flex items-center justify-center ml-auto">
                            <Icon className="w-4 h-4" />
                          </div>
                        </div>

                        {/* Title & Tagline */}
                        <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#151515] tracking-tight group-hover:text-[#502D6D] transition-colors">
                          {mod.name}
                        </h3>
                        <p className="text-xs sm:text-sm font-bold text-[#EA580C] mt-1.5 uppercase tracking-wide">
                          {mod.tagline}
                        </p>

                        {/* Simple Description */}
                        <p className="mt-4 text-base sm:text-lg text-[#544643] leading-relaxed font-normal">
                          {mod.description}
                        </p>

                        {/* Included Capabilities Checklist */}
                        <div className="mt-6 pt-5 border-t border-[#C6C2C1]/40">
                          <h4 className="text-xs font-black uppercase tracking-wider text-[#151515] mb-3 flex items-center gap-1.5">
                            <Sparkles className="w-3.5 h-3.5 text-[#FCB116]" />
                            <span>What you can do in this screen:</span>
                          </h4>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                            {mod.capabilities.map((cap, cIdx) => (
                              <div
                                key={cIdx}
                                className="flex items-start gap-2.5 text-xs sm:text-sm text-[#151515] font-medium leading-snug p-2 rounded-xl bg-white/70 border border-slate-200/60"
                              >
                                <CheckCircle2 className="w-4 h-4 text-[#059669] shrink-0 mt-0.5" />
                                <span>{cap}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Supervisor & Admin Oversight Block */}
                        {mod.adminCapabilities && mod.adminCapabilities.length > 0 && (
                          <div className="mt-5 p-4 rounded-2xl bg-[#502D6D]/5 border border-[#502D6D]/15 space-y-2">
                            <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#502D6D] block flex items-center gap-1.5">
                              <ShieldCheck className="w-4 h-4 text-[#502D6D]" />
                              <span>Supervisor & Admin Advantage:</span>
                            </span>
                            <div className="space-y-1.5">
                              {mod.adminCapabilities.map((aCap, aIdx) => (
                                <div key={aIdx} className="flex items-start gap-2 text-xs text-[#502D6D] font-medium leading-relaxed">
                                  <span className="text-[#EA580C] font-bold">•</span>
                                  <span>{aCap}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}

                        {/* Card Footer: Single Clean Action Button to Enlarge */}
                        <div className="mt-7 pt-4 border-t border-[#C6C2C1]/40 flex items-center justify-between">
                          <button
                            onClick={() => setModalModuleIdx(idx)}
                            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#F3F0F7] hover:bg-[#502D6D] text-[#502D6D] hover:text-white text-xs font-bold transition-all duration-200 cursor-pointer group/btn"
                          >
                            <Maximize2 className="w-3.5 h-3.5 transition-transform group-hover/btn:scale-110" />
                            <span>Enlarge Screenshot</span>
                          </button>

                          <span className="font-mono text-[11px] text-slate-400 font-semibold">{productName}</span>
                        </div>

                      </div>

                    </div>

                  </div>
                </RevealOnScroll>
              );
            })}
          </div>
        ) : (
          /* ── Standard Clean Grid Fallback (for products without screenshots) ── */
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            {modules.map((mod, idx) => {
              const Icon = MODULE_ICONS[mod.icon] || CheckSquare;
              return (
                <RevealOnScroll key={mod.id} delay={idx * 0.05}>
                  <div className="relative rounded-[32px] bg-[#F8F9FA] hover:bg-white p-8 sm:p-9 border border-[#C6C2C1]/60 hover:border-[#502D6D]/40 shadow-xs hover:shadow-xl transition-all duration-300 h-full flex flex-col justify-between group">
                    <div>
                      <div className="flex items-center justify-between gap-3 mb-6">
                        <div className="w-12 h-12 rounded-2xl bg-white border border-[#502D6D]/15 text-[#502D6D] flex items-center justify-center shadow-xs group-hover:scale-105 group-hover:bg-[#502D6D] group-hover:text-white transition-all duration-300">
                          <Icon className="w-6 h-6" />
                        </div>
                        <span className="text-[11px] font-extrabold px-3 py-1 rounded-full bg-[#502D6D]/10 text-[#502D6D] border border-[#502D6D]/20 uppercase tracking-widest font-mono">
                          {mod.code}
                        </span>
                      </div>

                      <h3 className="text-xl sm:text-2xl font-black text-[#151515] tracking-tight group-hover:text-[#502D6D] transition-colors">
                        {mod.name}
                      </h3>
                      <p className="text-xs font-semibold text-[#FCB116] mt-1 uppercase tracking-wider">
                        {mod.tagline}
                      </p>

                      <p className="mt-3 text-sm text-[#544643] leading-relaxed">
                        {mod.description}
                      </p>

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
        )}

      </div>

      {/* ─── LIGHTBOX MODAL FOR FULL SCREENSHOT VIEW ───────────────────── */}
      <AnimatePresence>
        {modalModuleIdx !== null && modules[modalModuleIdx] && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-10 bg-black/85 backdrop-blur-md"
            onClick={() => setModalModuleIdx(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl w-full max-h-[92vh] bg-[#18181B] rounded-[32px] border border-white/10 p-5 sm:p-8 flex flex-col lg:flex-row gap-6 items-center overflow-y-auto"
            >
              {/* Close Button */}
              <button
                onClick={() => setModalModuleIdx(null)}
                className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Prev / Next Buttons */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setModalModuleIdx((prev) =>
                    prev !== null ? (prev > 0 ? prev - 1 : modules.length - 1) : null
                  );
                }}
                className="absolute left-3 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors hidden sm:flex cursor-pointer"
                aria-label="Previous screenshot"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setModalModuleIdx((prev) =>
                    prev !== null ? (prev < modules.length - 1 ? prev + 1 : 0) : null
                  );
                }}
                className="absolute right-3 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors hidden sm:flex cursor-pointer"
                aria-label="Next screenshot"
              >
                <ChevronRight className="w-5 h-5" />
              </button>

              {/* Screenshot Phone Showcase */}
              <div className="shrink-0 flex justify-center">
                <div className="w-[280px] sm:w-[320px] rounded-[44px] bg-[#25222E] p-3 shadow-2xl ring-1 ring-white/20">
                  <div className="rounded-[36px] overflow-hidden bg-white aspect-[442/961]">
                    {modules[modalModuleIdx].image ? (
                      <NextImage
                        src={modules[modalModuleIdx].image!}
                        alt={modules[modalModuleIdx].name}
                        width={442}
                        height={961}
                        className="w-full h-full object-cover object-top"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-slate-400">
                        No image
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Modal Details Panel */}
              <div className="text-white flex-1 space-y-4 pr-0 sm:pr-4">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono font-bold px-3 py-1 rounded-full bg-[#FCB116] text-[#151515]">
                    {modules[modalModuleIdx].code}
                  </span>
                  {modules[modalModuleIdx].badge && (
                    <span className="text-xs font-bold px-3 py-1 rounded-full bg-white/10 text-slate-200">
                      {modules[modalModuleIdx].badge}
                    </span>
                  )}
                  <span className="text-xs text-slate-400 ml-auto font-mono">
                    {modalModuleIdx + 1} of {modules.length}
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-black tracking-tight text-white">
                  {modules[modalModuleIdx].name}
                </h3>

                <p className="text-xs font-bold uppercase tracking-wider text-[#FCB116]">
                  {modules[modalModuleIdx].tagline}
                </p>

                <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                  {modules[modalModuleIdx].description}
                </p>

                <div className="pt-4 border-t border-white/10 space-y-2">
                  <span className="text-xs font-extrabold uppercase tracking-wider text-slate-400 block">
                    Core Screen Capabilities:
                  </span>
                  <div className="space-y-1.5">
                    {modules[modalModuleIdx].capabilities.map((cap, cIdx) => (
                      <div key={cIdx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-200">
                        <CheckCircle2 className="w-4 h-4 text-[#10B981] shrink-0 mt-0.5" />
                        <span>{cap}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}
