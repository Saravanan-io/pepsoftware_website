"use client";

import React from "react";
import { Building, CheckCircle2, ArrowRight } from "lucide-react";
import { RevealOnScroll } from "@/components/shared/RevealOnScroll";
import { ProductDetailData } from "@/data/products";

interface ProductUseCasesSectionProps {
  useCases: ProductDetailData["useCases"];
  productName: string;
}

export function ProductUseCasesSection({
  useCases,
  productName,
}: ProductUseCasesSectionProps) {
  return (
    <section className="py-20 lg:py-28 bg-[#FFFFFF] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <RevealOnScroll>
            <div className="inline-flex items-center gap-2.5 mb-2">
              <span className="w-5 sm:w-6 h-[2px] rounded-full bg-gradient-to-r from-orange-400 to-[#7C3AED]" />
              <span className="font-syne text-xs sm:text-sm font-extrabold uppercase tracking-[0.2em] text-[#502D6D]">
                ORGANIZATIONAL FIT
              </span>
              <span className="w-5 sm:w-6 h-[2px] rounded-full bg-gradient-to-r from-[#7C3AED] to-orange-400" />
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#151515] tracking-tight leading-tight mt-1">
              {useCases.heading}
            </h2>

            <p className="mt-4 text-base sm:text-lg text-[#544643] leading-relaxed max-w-2xl mx-auto">
              {useCases.intro}
            </p>
          </RevealOnScroll>
        </div>

        {/* Use Cases Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {useCases.cases.map((c, idx) => (
            <RevealOnScroll key={c.title} delay={idx * 0.1}>
              <div className="p-8 sm:p-9 rounded-3xl bg-[#F8F9FA] hover:bg-white border border-[#C6C2C1]/60 hover:border-[#502D6D]/40 shadow-xs hover:shadow-xl transition-all duration-300 h-full flex flex-col justify-between group">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-purple-100 text-[#502D6D] flex items-center justify-center font-bold text-xs font-mono">
                      0{idx + 1}
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#544643] bg-white px-3 py-1 rounded-full border border-slate-200">
                      Potential Deployment Fit
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-[#151515] tracking-tight group-hover:text-[#502D6D] transition-colors">
                    {c.title}
                  </h3>

                  <p className="mt-3 text-sm text-[#544643] leading-relaxed">
                    {c.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#C6C2C1]/30">
                  <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#502D6D] block mb-1">
                    Typically Applicable For:
                  </span>
                  <p className="text-xs font-semibold text-[#151515]">
                    {c.suitableFor}
                  </p>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>

      </div>
    </section>
  );
}
