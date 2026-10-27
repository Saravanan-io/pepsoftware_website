"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  ChevronRight,
  Check,
  CalendarCheck,
  MapPin,
  Users,
  BarChart3,
  Layers,
  Search,
  Activity,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";
import { RevealOnScroll } from "@/components/shared/RevealOnScroll";
import { ProductDetailData } from "@/data/products";

interface ProductDetailHeroProps {
  product: ProductDetailData;
  onOpenDemo: () => void;
}

export function ProductDetailHero({ product, onOpenDemo }: ProductDetailHeroProps) {
  const [activeNode, setActiveNode] = useState<number | null>(null);

  const scrollToModules = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.getElementById("product-modules");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Helper to split headline so the final phrase receives the gradient accent matching the reference image
  const renderHeadline = () => {
    if (product.slug === "attendance-tracking-system") {
      return (
        <h1 className="text-3xl sm:text-4xl lg:text-[40px] xl:text-[44px] font-black text-[#0F172A] leading-[1.12] tracking-tight">
          Employee Attendance Tracking and{" "}
          <span className="bg-gradient-to-r from-[#7C3AED] via-[#8B5CF6] to-[#9333EA] bg-clip-text text-transparent block sm:inline">
            Workforce Management
          </span>
        </h1>
      );
    }

    const words = product.hero.h1.split(" ");
    if (words.length <= 3) {
      return (
        <h1 className="text-3xl sm:text-4xl lg:text-[40px] xl:text-[44px] font-black text-[#0F172A] leading-[1.12] tracking-tight">
          {product.hero.h1}
        </h1>
      );
    }

    const primaryText = words.slice(0, words.length - 2).join(" ");
    const gradientText = words.slice(words.length - 2).join(" ");

    return (
      <h1 className="text-3xl sm:text-4xl lg:text-[40px] xl:text-[44px] font-black text-[#0F172A] leading-[1.12] tracking-tight">
        {primaryText}{" "}
        <span className="bg-gradient-to-r from-[#7C3AED] via-[#8B5CF6] to-[#9333EA] bg-clip-text text-transparent block sm:inline">
          {gradientText}
        </span>
      </h1>
    );
  };

  // Icons for the 4 capability nodes
  const pillarIcons = [
    { icon: CalendarCheck, color: "text-[#7C3AED]", bg: "bg-purple-50", border: "border-purple-200" },
    { icon: MapPin, color: "text-[#6366F1]", bg: "bg-indigo-50", border: "border-indigo-200" },
    { icon: Users, color: "text-[#D97706]", bg: "bg-amber-50", border: "border-amber-200" },
    { icon: BarChart3, color: "text-[#9333EA]", bg: "bg-purple-50", border: "border-purple-200" },
  ];

  return (
    <section className="pt-24 sm:pt-28 pb-16 lg:pb-24 bg-[#FFFFFF] relative overflow-hidden select-none">
      {/* Background Soft Purple/Lavender Ambient Atmosphere */}
      <div className="absolute top-1/4 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-purple-100/40 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[450px] h-[450px] bg-purple-50/60 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Breadcrumb Navigation */}
        <div className="flex items-center gap-2 text-xs text-[#64748B] mb-6 sm:mb-8">
          <Link href="/" className="hover:text-[#7C3AED] transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-[#CBD5E1]" />
          <Link href="/products" className="hover:text-[#7C3AED] transition-colors">
            Products
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-[#CBD5E1]" />
          <span className="text-[#7C3AED] font-bold truncate">{product.name}</span>
        </div>

        {/* ─── Hero Main Split: Left Information & Right 3D Laptop + Orbiting Nodes ─── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">
          
          {/* ══════════════════════════════════════════════════════════════
              LEFT COLUMN: Overline Badge, H1, Description, CTAs, Target Audience
              ══════════════════════════════════════════════════════════════ */}
          <div className="lg:col-span-5 space-y-5 text-left">
            <RevealOnScroll>
              
              {/* Overline Badge (Exact Match: — WORKFORCE & OPERATIONS MANAGEMENT) */}
              <div className="inline-flex items-center gap-2 mb-2">
                <span className="w-6 h-[2px] rounded-full bg-[#7C3AED]" />
                <span className="font-syne text-[11px] sm:text-xs font-extrabold uppercase tracking-[0.2em] text-[#7C3AED]">
                  {product.categoryBadge}
                </span>
              </div>

              {/* H1 Headline */}
              {renderHeadline()}

              {/* Supporting Description */}
              <p className="text-sm sm:text-base text-[#64748B] leading-relaxed font-normal pt-1 max-w-xl">
                {product.hero.supportingContent}
              </p>

              {/* Secondary Positioning (e.g., B2B notice for Matrimony) */}
              {product.hero.secondaryPositioning && (
                <div className="p-3.5 rounded-2xl bg-purple-50/80 border border-purple-200/80 text-purple-900 text-xs sm:text-sm font-semibold flex items-center gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-[#7C3AED] shrink-0" />
                  <span>{product.hero.secondaryPositioning}</span>
                </div>
              )}

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3.5 pt-2">
                <button
                  onClick={onOpenDemo}
                  className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-gradient-to-r from-[#502D6D] via-[#68358F] to-[#7C3AED] text-white font-extrabold text-sm shadow-[0_10px_25px_rgba(104,53,143,0.3)] hover:shadow-[0_14px_30px_rgba(104,53,143,0.45)] hover:-translate-y-0.5 active:scale-[0.98] transition-all cursor-pointer group"
                >
                  <span>{product.hero.primaryCtaLabel}</span>
                  <ArrowRight className="w-4 h-4 text-[#FCB116] group-hover:translate-x-1.5 transition-transform" />
                </button>

                <a
                  href="#product-modules"
                  onClick={scrollToModules}
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white text-[#0F172A] font-bold text-sm border border-slate-300 hover:border-[#7C3AED] hover:text-[#7C3AED] shadow-2xs hover:shadow-md transition-all cursor-pointer group"
                >
                  <Layers className="w-4 h-4 text-[#7C3AED] group-hover:rotate-6 transition-transform" />
                  <span>Explore Modules</span>
                </a>
              </div>

              {/* Target Audience Checklist (Exact Match to Reference Layout) */}
              <div className="pt-6 border-t border-slate-200/80 space-y-2.5">
                <span className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-[#0F172A] block">
                  TARGET AUDIENCE:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2">
                  {product.targetAudience.map((aud, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <div className="w-4 h-4 rounded-full bg-purple-50 border border-purple-200 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-2.5 h-2.5 text-[#7C3AED]" />
                      </div>
                      <span className="text-xs text-[#475569] font-medium leading-tight">
                        {aud}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

            </RevealOnScroll>
          </div>

          {/* ══════════════════════════════════════════════════════════════
              RIGHT COLUMN: 3D Perspective Laptop + Orbiting Arc Nodes
              ══════════════════════════════════════════════════════════════ */}
          <div className="lg:col-span-7 relative">
            <RevealOnScroll delay={0.15}>
              
              <div className="relative flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-4">
                
                {/* ─── Ambient Glow Behind Laptop ─── */}
                <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[340px] sm:w-[420px] h-[340px] sm:h-[420px] bg-purple-200/40 rounded-full blur-[80px] pointer-events-none -z-10" />

                {/* ─── Center: 3D Floating Laptop Mockup ─── */}
                <div className="w-full lg:w-[54%] max-w-[460px] shrink-0 relative z-10 animate-hero-laptop">
                  
                  {/* Laptop Display Chassis */}
                  <div className="w-full bg-[#0F172A] rounded-t-xl sm:rounded-t-2xl p-1.5 sm:p-2 border border-slate-700/80 shadow-2xl relative">
                    
                    {/* Top Bezel Webcam Dot */}
                    <div className="w-1.5 h-1.5 rounded-full bg-slate-600 mx-auto mb-1" />
                    
                    {/* Screen Viewport */}
                    <div className="bg-[#F8FAFC] rounded-lg overflow-hidden border border-slate-200/80 text-slate-800 text-[10px] select-none shadow-inner">
                      
                      {/* Dashboard Topbar */}
                      <div className="h-7 bg-white border-b border-slate-200/80 px-2.5 flex items-center justify-between">
                        <div className="flex items-center gap-1.5">
                          <div className="w-4 h-4 rounded-md bg-[#7C3AED] flex items-center justify-center text-white text-[8px] font-black">
                            P
                          </div>
                          <span className="font-bold text-[10px] text-slate-900">Attendance OS</span>
                          <span className="text-[8px] text-emerald-600 font-semibold px-1.5 py-0.2 rounded-full bg-emerald-50 border border-emerald-200 flex items-center gap-1">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                            Live
                          </span>
                        </div>

                        <div className="flex items-center gap-2 text-slate-400">
                          <div className="h-4 px-2 rounded bg-slate-100 flex items-center gap-1 text-[7.5px] text-slate-500">
                            <Search className="w-2.5 h-2.5 text-slate-400" />
                            <span>Search staff...</span>
                          </div>
                          <div className="w-4 h-4 rounded-full bg-purple-100 text-[#7C3AED] flex items-center justify-center text-[7.5px] font-bold">
                            AD
                          </div>
                        </div>
                      </div>

                      {/* Metric Stat Counters Bar */}
                      <div className={`grid grid-cols-4 gap-1 p-1.5 bg-slate-50/80 border-b border-slate-200/70 transition-all ${
                        activeNode === 0 ? "ring-2 ring-[#7C3AED] bg-purple-50/60" : ""
                      }`}>
                        <div className="bg-white p-1 rounded border border-slate-200/80 shadow-2xs">
                          <div className="text-[7.5px] text-slate-500">Present</div>
                          <div className="text-[11px] font-black text-slate-900 flex items-baseline gap-0.5">
                            142 <span className="text-[6.5px] text-emerald-600 font-bold">+4%</span>
                          </div>
                        </div>
                        <div className="bg-white p-1 rounded border border-slate-200/80 shadow-2xs">
                          <div className="text-[7.5px] text-slate-500">On Time</div>
                          <div className="text-[11px] font-black text-[#7C3AED]">96.4%</div>
                        </div>
                        <div className="bg-white p-1 rounded border border-slate-200/80 shadow-2xs">
                          <div className="text-[7.5px] text-slate-500">Geofence</div>
                          <div className="text-[11px] font-black text-indigo-600">12 Sites</div>
                        </div>
                        <div className="bg-white p-1 rounded border border-slate-200/80 shadow-2xs">
                          <div className="text-[7.5px] text-slate-500">Leaves</div>
                          <div className="text-[11px] font-black text-amber-600">3 Open</div>
                        </div>
                      </div>

                      {/* Main Dashboard Screen Split */}
                      <div className="p-1.5 grid grid-cols-12 gap-1.5">
                        
                        {/* Left Screen Card: Live Check-in Activity Feed */}
                        <div className={`col-span-6 bg-white rounded-md border border-slate-200/80 p-1.5 shadow-2xs transition-all ${
                          activeNode === 0 ? "ring-2 ring-[#7C3AED]" : ""
                        }`}>
                          <div className="flex items-center justify-between pb-1 border-b border-slate-100">
                            <span className="font-bold text-[8.5px] text-slate-800">Live Check-ins</span>
                            <span className="text-[7px] text-purple-600 font-bold">142 Logged</span>
                          </div>
                          
                          <div className="space-y-1.5 mt-1.5">
                            <div className="flex items-center justify-between text-[7.5px]">
                              <div className="flex items-center gap-1.5">
                                <div className="w-4 h-4 rounded-full bg-purple-100 text-[#7C3AED] flex items-center justify-center font-bold text-[6.5px]">
                                  AK
                                </div>
                                <div>
                                  <div className="font-bold text-slate-900 leading-tight">Arun Kumar</div>
                                  <div className="text-[6.5px] text-slate-400">Dev Lead</div>
                                </div>
                              </div>
                              <div className="text-right">
                                <span className="px-1 py-0.2 rounded bg-emerald-50 text-emerald-700 font-bold text-[6.5px] block">
                                  08:58 AM
                                </span>
                                <span className="text-[6px] text-slate-400">HQ Site ✓</span>
                              </div>
                            </div>

                            <div className="flex items-center justify-between text-[7.5px]">
                              <div className="flex items-center gap-1.5">
                                <div className="w-4 h-4 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center font-bold text-[6.5px]">
                                  PS
                                </div>
                                <div>
                                  <div className="font-bold text-slate-900 leading-tight">Priya Sharma</div>
                                  <div className="text-[6.5px] text-slate-400">Design Lead</div>
                                </div>
                              </div>
                              <div className="text-right">
                                <span className="px-1 py-0.2 rounded bg-emerald-50 text-emerald-700 font-bold text-[6.5px] block">
                                  09:02 AM
                                </span>
                                <span className="text-[6px] text-slate-400">HQ Site ✓</span>
                              </div>
                            </div>

                            <div className="flex items-center justify-between text-[7.5px]">
                              <div className="flex items-center gap-1.5">
                                <div className="w-4 h-4 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center font-bold text-[6.5px]">
                                  DM
                                </div>
                                <div>
                                  <div className="font-bold text-slate-900 leading-tight">David Miller</div>
                                  <div className="text-[6.5px] text-slate-400">Site Tech</div>
                                </div>
                              </div>
                              <div className="text-right">
                                <span className="px-1 py-0.2 rounded bg-blue-50 text-blue-700 font-bold text-[6.5px] block">
                                  09:15 AM
                                </span>
                                <span className="text-[6px] text-slate-400">Site B ✓</span>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Right Screen Column: Geofence Radar & Weekly Chart */}
                        <div className="col-span-6 space-y-1.5">
                          
                          {/* Geofence Radar Widget (Active on Node 1) */}
                          <div className={`bg-white rounded-md border border-slate-200/80 p-1.5 shadow-2xs relative overflow-hidden transition-all ${
                            activeNode === 1 ? "ring-2 ring-[#7C3AED]" : ""
                          }`}>
                            <div className="flex items-center justify-between pb-1">
                              <span className="font-bold text-[8.5px] text-slate-800">Geofence Radar</span>
                              <span className="text-[6.5px] text-emerald-600 font-bold flex items-center gap-0.5">
                                <span className="w-1 h-1 rounded-full bg-emerald-500 animate-pulse" />
                                GPS Lock
                              </span>
                            </div>

                            {/* Mini Radar Map Canvas */}
                            <div className="h-12 bg-gradient-to-br from-slate-900 via-indigo-950 to-purple-950 rounded relative flex items-center justify-center overflow-hidden">
                              {/* Grid overlay */}
                              <div className="absolute inset-0 bg-[radial-gradient(#4338ca_1px,transparent_1px)] [background-size:6px_6px] opacity-40" />
                              
                              {/* Concentric radar rings */}
                              <div className="w-9 h-9 rounded-full border border-purple-400/30 absolute" />
                              <div className="w-5 h-5 rounded-full border border-purple-400/50 absolute" />
                              
                              {/* Animated radar wave */}
                              <div className="w-8 h-8 rounded-full bg-purple-500/20 absolute animate-radar-wave" />

                              {/* Center Pin Marker */}
                              <div className="relative z-10 flex flex-col items-center">
                                <div className="w-3 h-3 rounded-full bg-amber-400 text-slate-950 flex items-center justify-center shadow-md">
                                  <MapPin className="w-1.5 h-1.5 text-slate-950" />
                                </div>
                                <span className="text-[6px] font-bold text-white bg-slate-900/90 px-1 rounded mt-0.5 whitespace-nowrap">
                                  Erode HQ
                                </span>
                              </div>
                            </div>
                          </div>

                          {/* Weekly Attendance Activity Chart (Active on Node 3) */}
                          <div className={`bg-white rounded-md border border-slate-200/80 p-1.5 shadow-2xs transition-all ${
                            activeNode === 3 ? "ring-2 ring-[#7C3AED]" : ""
                          }`}>
                            <div className="flex items-center justify-between pb-0.5">
                              <span className="font-bold text-[8px] text-slate-800">Weekly Activity</span>
                              <span className="text-[6.5px] text-[#7C3AED] font-bold">98.2% Avg</span>
                            </div>
                            
                            {/* Bar Chart Visualization */}
                            <div className="flex items-end justify-between gap-1 h-7 pt-1">
                              <div className="flex-1 flex flex-col items-center gap-0.5">
                                <div className="w-full bg-purple-200 rounded-t h-4" />
                                <span className="text-[6px] text-slate-400">M</span>
                              </div>
                              <div className="flex-1 flex flex-col items-center gap-0.5">
                                <div className="w-full bg-purple-300 rounded-t h-5" />
                                <span className="text-[6px] text-slate-400">T</span>
                              </div>
                              <div className="flex-1 flex flex-col items-center gap-0.5">
                                <div className="w-full bg-purple-400 rounded-t h-6" />
                                <span className="text-[6px] text-slate-400">W</span>
                              </div>
                              <div className="flex-1 flex flex-col items-center gap-0.5">
                                <div className="w-full bg-[#7C3AED] rounded-t h-7" />
                                <span className="text-[6px] text-purple-700 font-bold">T</span>
                              </div>
                              <div className="flex-1 flex flex-col items-center gap-0.5">
                                <div className="w-full bg-purple-400 rounded-t h-5.5" />
                                <span className="text-[6px] text-slate-400">F</span>
                              </div>
                            </div>
                          </div>

                        </div>

                      </div>

                    </div>
                  </div>

                  {/* Laptop Base & Trackpad Front Lip */}
                  <div className="relative">
                    <div className="h-3 sm:h-3.5 bg-gradient-to-b from-[#334155] to-[#1E293B] rounded-b-xl shadow-xl flex items-start justify-center border-t border-slate-600/40">
                      <div className="w-14 sm:w-16 h-1 bg-slate-500/60 rounded-full mt-0.5" />
                    </div>
                    {/* Shadow underneath */}
                    <div className="w-4/5 h-3.5 bg-purple-950/15 rounded-full blur-md mx-auto -mt-0.5" />
                  </div>

                </div>

                {/* ─── Right: Orbital Capability Arc with 4 Nodes ─── */}
                <div className="w-full lg:w-[46%] relative z-10 space-y-4 lg:space-y-4.5 pl-0 lg:pl-3">
                  
                  {/* SVG Dashed Trajectory Arc (Visible on Desktop) */}
                  <svg
                    className="absolute -left-5 top-0 bottom-0 w-16 h-full pointer-events-none z-0 hidden lg:block"
                    viewBox="0 0 60 400"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M -20 15 C 35 30, 50 120, 32 195 C 15 260, 42 340, -10 385"
                      stroke="#DDD6FE"
                      strokeWidth="1.8"
                      strokeDasharray="4 4"
                      className="animate-trajectory-flow"
                    />
                  </svg>

                  {product.hero.quickPillars.map((pillar, idx) => {
                    const iconConfig = pillarIcons[idx % pillarIcons.length];
                    const IconComponent = iconConfig.icon;
                    const isActive = activeNode === idx;

                    return (
                      <div
                        key={idx}
                        onMouseEnter={() => setActiveNode(idx)}
                        onMouseLeave={() => setActiveNode(null)}
                        className={`group/node flex items-start gap-3.5 p-2 sm:p-2.5 rounded-2xl transition-all duration-300 cursor-pointer relative z-10 ${
                          isActive
                            ? "bg-purple-50/80 shadow-xs translate-x-1"
                            : "hover:bg-slate-50/80 hover:translate-x-0.5"
                        }`}
                      >
                        {/* Circular Pod Badge */}
                        <div
                          className={`relative w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white border flex items-center justify-center shrink-0 transition-all duration-300 ${
                            isActive
                              ? "border-[#7C3AED] shadow-[0_0_20px_rgba(124,58,237,0.35)] scale-110"
                              : `${iconConfig.border} shadow-[0_6px_16px_rgba(124,58,237,0.08)] group-hover/node:border-[#7C3AED] group-hover/node:scale-105`
                          }`}
                        >
                          <IconComponent
                            className={`w-5 h-5 transition-transform duration-300 ${
                              isActive ? "scale-110" : "group-hover/node:scale-110"
                            } ${iconConfig.color}`}
                          />
                        </div>

                        {/* Text Block */}
                        <div className="flex-1 pt-0.5">
                          <h4
                            className={`text-sm sm:text-[14.5px] font-bold text-[#0F172A] transition-colors leading-snug ${
                              isActive
                                ? "text-[#7C3AED]"
                                : "group-hover/node:text-[#7C3AED]"
                            }`}
                          >
                            {pillar.label}
                          </h4>
                          <p className="text-xs text-[#64748B] leading-relaxed mt-0.5">
                            {pillar.desc}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>

              </div>

            </RevealOnScroll>
          </div>

        </div>

      </div>
    </section>
  );
}
