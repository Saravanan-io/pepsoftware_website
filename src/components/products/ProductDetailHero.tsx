"use client";

import React from "react";
import Link from "next/link";
import {
  ArrowRight,
  ChevronRight,
  ShieldCheck,
  CheckCircle2,
  Calendar,
  Layers,
} from "lucide-react";
import { RevealOnScroll } from "@/components/shared/RevealOnScroll";
import { ProductDetailData } from "@/data/products";

interface ProductDetailHeroProps {
  product: ProductDetailData;
  onOpenDemo: () => void;
}

export function ProductDetailHero({ product, onOpenDemo }: ProductDetailHeroProps) {
  const scrollToModules = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.getElementById("product-modules");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="pt-28 sm:pt-32 pb-16 lg:pb-24 bg-[#F7F8F8] relative overflow-hidden border-b border-[#C6C2C1]/40 select-none">
      {/* Background Dots & Ambient Atmosphere */}
      <div className="absolute inset-0 bg-dot-light opacity-30 pointer-events-none" />
      <div className="absolute -top-32 right-1/4 w-[600px] h-[600px] bg-[#502D6D]/[0.06] rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 -left-28 w-[500px] h-[500px] bg-[#FCB116]/[0.07] rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Breadcrumb Navigation */}
        <div className="flex items-center gap-2 text-xs text-[#544643] mb-6 sm:mb-8">
          <Link href="/" className="hover:text-[#502D6D] transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-[#C6C2C1]" />
          <Link href="/products" className="hover:text-[#502D6D] transition-colors">
            Products
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-[#C6C2C1]" />
          <span className="text-[#502D6D] font-bold truncate">{product.name}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Heading, Content & CTAs */}
          <div className="lg:col-span-8 space-y-6 text-left">
            <RevealOnScroll>
              
              {/* Category Badge */}
              <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/80 border border-[#502D6D]/15 shadow-xs backdrop-blur-xs mb-2">
                <span className="w-3.5 h-[2px] rounded-full bg-gradient-to-r from-[#502D6D] to-[#FCB116]" />
                <span className="font-syne text-[11px] sm:text-xs font-extrabold uppercase tracking-[0.2em] text-[#502D6D]">
                  {product.categoryBadge}
                </span>
              </div>

              {/* H1 Headline */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#151515] leading-[1.12] tracking-tight mt-2">
                {product.hero.h1}
              </h1>

              {/* Supporting Content */}
              <p className="text-base sm:text-lg text-[#544643] leading-relaxed font-normal pt-2">
                {product.hero.supportingContent}
              </p>

              {/* Secondary Positioning (e.g., B2B notice for Matrimony) */}
              {product.hero.secondaryPositioning && (
                <div className="p-4 rounded-2xl bg-amber-50/80 border border-amber-200/80 text-amber-900 text-xs sm:text-sm font-semibold flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-[#FCB116] shrink-0" />
                  <span>{product.hero.secondaryPositioning}</span>
                </div>
              )}

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-4">
                <button
                  onClick={onOpenDemo}
                  className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-gradient-to-r from-[#502D6D] via-[#68358F] to-[#502D6D] text-white font-extrabold text-sm sm:text-base hover:shadow-xl hover:shadow-[#502D6D]/25 hover:-translate-y-0.5 active:scale-[0.99] transition-all cursor-pointer shadow-md group"
                >
                  <span>{product.hero.primaryCtaLabel}</span>
                  <ArrowRight className="w-4 h-4 text-[#FCB116] group-hover:translate-x-1 transition-transform" />
                </button>

                <a
                  href="#product-modules"
                  onClick={scrollToModules}
                  className="inline-flex items-center gap-2 px-7 py-4 rounded-full bg-white text-[#151515] font-bold text-sm sm:text-base border border-[#C6C2C1]/80 hover:border-[#502D6D] hover:text-[#502D6D] shadow-xs hover:shadow-md transition-all cursor-pointer"
                >
                  <Layers className="w-4 h-4 text-[#502D6D]" />
                  <span>Explore Modules</span>
                </a>
              </div>

              {/* Target Audience Tags */}
              <div className="pt-6 border-t border-[#C6C2C1]/40">
                <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#502D6D] block mb-2.5">
                  Target Audience:
                </span>
                <div className="flex flex-wrap gap-2">
                  {product.targetAudience.map((aud, i) => (
                    <span
                      key={i}
                      className="text-xs font-semibold px-3 py-1 rounded-full bg-white border border-[#C6C2C1]/60 text-[#151515] shadow-2xs"
                    >
                      {aud}
                    </span>
                  ))}
                </div>
              </div>

            </RevealOnScroll>
          </div>

          {/* Right Column: 4 Key Pillars Display Card */}
          <div className="lg:col-span-4">
            <RevealOnScroll delay={0.15}>
              <div className="relative rounded-3xl bg-white p-7 sm:p-8 border border-[#502D6D]/15 shadow-xl shadow-[#502D6D]/5 space-y-4">
                <div className="h-1.5 w-full absolute top-0 left-0 bg-gradient-to-r from-[#502D6D] via-[#8A3DA8] to-[#FCB116] rounded-t-3xl" />
                
                <div className="flex items-center justify-between pb-2 border-b border-[#E2E4E9]">
                  <span className="font-syne text-[11px] font-extrabold uppercase tracking-widest text-[#502D6D]">
                    CORE CAPABILITIES
                  </span>
                  <ShieldCheck className="w-4 h-4 text-[#FCB116]" />
                </div>

                <div className="space-y-4 pt-1">
                  {product.hero.quickPillars.map((pillar, pIdx) => (
                    <div key={pIdx} className="space-y-1">
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#502D6D] shrink-0" />
                        <h4 className="text-sm font-bold text-[#151515]">{pillar.label}</h4>
                      </div>
                      <p className="text-xs text-[#544643] leading-relaxed pl-6">
                        {pillar.desc}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="pt-4 border-t border-[#E2E4E9]">
                  <button
                    onClick={onOpenDemo}
                    className="w-full py-2.5 rounded-xl bg-[#502D6D]/10 hover:bg-[#502D6D] text-[#502D6D] hover:text-white font-bold text-xs transition-colors cursor-pointer text-center"
                  >
                    Schedule Walkthrough Demo →
                  </button>
                </div>
              </div>
            </RevealOnScroll>
          </div>

        </div>

      </div>
    </section>
  );
}
