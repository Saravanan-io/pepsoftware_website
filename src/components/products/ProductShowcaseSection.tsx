"use client";

import React, { useState } from "react";
import {
  Monitor,
  Smartphone,
  CheckCircle2,
  Eye,
  Layers,
  Sparkles,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";
import { RevealOnScroll } from "@/components/shared/RevealOnScroll";
import { ProductDetailData } from "@/data/products";

interface ProductShowcaseSectionProps {
  showcase: ProductDetailData["showcase"];
  productName: string;
  onOpenDemo: () => void;
}

export function ProductShowcaseSection({
  showcase,
  productName,
  onOpenDemo,
}: ProductShowcaseSectionProps) {
  const [activeTabIdx, setActiveTabIdx] = useState(0);
  const activeGroup = showcase.screenGroups[activeTabIdx] || showcase.screenGroups[0];

  return (
    <section className="py-20 lg:py-28 bg-[#F8FAFC] relative overflow-hidden border-y border-[#C6C2C1]/40 select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <RevealOnScroll>
            <div className="inline-flex items-center gap-2.5 mb-2">
              <span className="w-5 sm:w-6 h-[2px] rounded-full bg-gradient-to-r from-orange-400 to-[#7C3AED]" />
              <span className="font-syne text-xs sm:text-sm font-extrabold uppercase tracking-[0.2em] text-[#502D6D]">
                APPLICATION INTERFACE SHOWCASE
              </span>
              <span className="w-5 sm:w-6 h-[2px] rounded-full bg-gradient-to-r from-[#7C3AED] to-orange-400" />
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#151515] tracking-tight leading-tight mt-1">
              {showcase.heading}
            </h2>

            <p className="mt-4 text-base sm:text-lg text-[#544643] leading-relaxed max-w-2xl mx-auto">
              {showcase.intro}
            </p>
          </RevealOnScroll>
        </div>

        {/* Tab Navigation Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
          {showcase.screenGroups.map((group, idx) => {
            const isActive = activeTabIdx === idx;
            return (
              <button
                key={group.id}
                onClick={() => setActiveTabIdx(idx)}
                className={`px-4 sm:px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer flex items-center gap-2 ${
                  isActive
                    ? "bg-[#502D6D] text-white shadow-md shadow-[#502D6D]/20"
                    : "bg-white text-[#544643] border border-[#C6C2C1]/60 hover:border-[#502D6D] hover:text-[#151515]"
                }`}
              >
                {group.type === "employee" || group.type === "member" ? (
                  <Smartphone className="w-4 h-4 opacity-75" />
                ) : (
                  <Monitor className="w-4 h-4 opacity-75" />
                )}
                <span>{group.title}</span>
              </button>
            );
          })}
        </div>

        {/* Showcase Display Area */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Screen Group Description & Feature Highlights */}
          <div className="lg:col-span-5 space-y-6">
            <RevealOnScroll key={activeGroup.id}>
              
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-purple-100 text-[#502D6D] text-xs font-bold border border-purple-200">
                <Layers className="w-3.5 h-3.5" />
                <span>{activeGroup.badge}</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-black text-[#151515] tracking-tight leading-snug">
                {activeGroup.title}
              </h3>

              <p className="text-sm sm:text-base text-[#544643] leading-relaxed">
                {activeGroup.description}
              </p>

              {/* Highlights List */}
              <div className="space-y-3 pt-2">
                <span className="text-xs font-extrabold uppercase tracking-wider text-[#151515] block">
                  Key Interface Highlights:
                </span>
                {activeGroup.highlights.map((item, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#151515] font-medium leading-relaxed">
                    <CheckCircle2 className="w-4 h-4 text-[#FCB116] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              {/* Request Demo Context Link */}
              <div className="pt-4">
                <button
                  onClick={onOpenDemo}
                  className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#502D6D] hover:text-[#3F1E5C] transition-colors cursor-pointer group"
                >
                  <span>Experience this in a live demo session</span>
                  <ArrowRight className="w-4 h-4 text-[#FCB116] group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

            </RevealOnScroll>
          </div>

          {/* Right Column: High-Fidelity Demonstration Interface */}
          <div className="lg:col-span-7">
            <RevealOnScroll delay={0.15}>
              <div className="relative rounded-3xl bg-white p-5 sm:p-7 border border-[#502D6D]/20 shadow-2xl shadow-[#502D6D]/10 overflow-hidden">
                
                {/* Mockup Window Top Navigation Bar */}
                <div className="flex items-center justify-between pb-4 mb-5 border-b border-slate-100">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-rose-400" />
                    <div className="w-3 h-3 rounded-full bg-amber-400" />
                    <div className="w-3 h-3 rounded-full bg-emerald-400" />
                    <span className="text-xs font-bold text-[#544643] ml-2">
                      {productName} • {activeGroup.badge}
                    </span>
                  </div>

                  <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-[#F7F8F8] text-[#544643] border border-slate-200">
                    Demonstration View
                  </span>
                </div>

                {/* Inner Mockup View Header */}
                <div className="mb-6 p-4 rounded-2xl bg-gradient-to-r from-[#502D6D]/[0.05] via-[#FCB116]/[0.05] to-transparent border border-purple-100 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-[#502D6D] block">
                      Active Screen
                    </span>
                    <h4 className="text-base sm:text-lg font-black text-[#151515]">
                      {activeGroup.mockupData.headerTitle}
                    </h4>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-white border border-purple-200 flex items-center justify-center text-[#502D6D] shadow-2xs">
                    <Eye className="w-4 h-4" />
                  </div>
                </div>

                {/* Optional Metric Stat Cards */}
                {activeGroup.mockupData.stats && (
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-5">
                    {activeGroup.mockupData.stats.map((stat, sIdx) => (
                      <div key={sIdx} className="p-3 rounded-xl bg-[#F8F9FA] border border-slate-200/80 text-center">
                        <span className="text-[10px] font-semibold text-[#544643] block truncate">
                          {stat.label}
                        </span>
                        <span className="text-base sm:text-lg font-black text-[#151515] block mt-0.5">
                          {stat.value}
                        </span>
                        {stat.change && (
                          <span className="text-[10px] font-bold text-[#047857] block">
                            {stat.change}
                          </span>
                        )}
                      </div>
                    ))}
                  </div>
                )}

                {/* Optional Key-Value Configuration Fields */}
                {activeGroup.mockupData.fields && (
                  <div className="space-y-2.5 mb-5">
                    {activeGroup.mockupData.fields.map((field, fIdx) => (
                      <div key={fIdx} className="flex flex-col sm:flex-row sm:items-center justify-between p-3 rounded-xl bg-[#F8F9FA] border border-slate-200/80 text-xs gap-1">
                        <span className="font-bold text-[#544643]">{field.label}:</span>
                        <span className="font-semibold text-[#151515]">{field.value}</span>
                      </div>
                    ))}
                  </div>
                )}

                {/* Items / Records Table Simulation */}
                {activeGroup.mockupData.items && (
                  <div className="space-y-2.5">
                    <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#544643] block">
                      Activity & Log Records:
                    </span>
                    {activeGroup.mockupData.items.map((record, rIdx) => (
                      <div
                        key={rIdx}
                        className="p-3.5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs hover:border-[#502D6D]/30 transition-colors flex flex-col sm:flex-row sm:items-center justify-between gap-2"
                      >
                        <div>
                          <span className="text-xs sm:text-sm font-bold text-[#151515] block">
                            {record.label}
                          </span>
                          <span className="text-xs text-[#544643] block mt-0.5">
                            {record.detail}
                          </span>
                        </div>
                        <div className="flex items-center gap-2 shrink-0">
                          {record.time && (
                            <span className="text-[11px] text-[#544643]/70 font-mono">
                              {record.time}
                            </span>
                          )}
                          <span
                            className={`text-[10px] font-bold px-2.5 py-1 rounded-full ${
                              record.status.includes("Alert")
                                ? "bg-red-100 text-red-700 border border-red-200"
                                : record.status.includes("Approved") || record.status.includes("Verified")
                                ? "bg-emerald-100 text-emerald-800 border border-emerald-200"
                                : record.status.includes("Active") || record.status.includes("Member")
                                ? "bg-purple-100 text-[#502D6D] border border-purple-200"
                                : "bg-slate-100 text-slate-700 border border-slate-200"
                            }`}
                          >
                            {record.status}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* Demonstration Notice Footer */}
                <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between text-[11px] text-[#544643]">
                  <div className="flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#059669]" />
                    <span>Sample demonstration records. No confidential client data exposed.</span>
                  </div>
                  <span className="font-mono text-[10px] text-slate-400">PEP-UI v2.4</span>
                </div>

              </div>
            </RevealOnScroll>
          </div>

        </div>

      </div>
    </section>
  );
}
