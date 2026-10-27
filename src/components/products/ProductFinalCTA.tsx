"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Phone, MessageSquare, ShieldCheck, Clock } from "lucide-react";
import { COMPANY_INFO } from "@/lib/constants";
import { RevealOnScroll } from "@/components/shared/RevealOnScroll";
import { ProductDetailData } from "@/data/products";

interface ProductFinalCTAProps {
  finalCta: ProductDetailData["finalCta"];
  productSlug: string;
  onOpenDemo: () => void;
}

export function ProductFinalCTA({
  finalCta,
  productSlug,
  onOpenDemo,
}: ProductFinalCTAProps) {
  return (
    <section className="py-20 lg:py-28 bg-[#FFFFFF] relative overflow-hidden border-t border-[#C6C2C1]/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <RevealOnScroll>
          <div className="relative rounded-[36px] bg-gradient-to-br from-[#151515] via-[#21142B] to-[#502D6D] p-8 sm:p-12 lg:p-16 text-white shadow-2xl overflow-hidden border border-[#502D6D]/40">
            {/* Ambient Lighting Orbs */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#FCB116]/10 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#502D6D]/40 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute inset-0 bg-dot-dark opacity-20 pointer-events-none" />

            <div className="max-w-3xl mx-auto text-center relative z-10">
              
              {/* Badge */}
              <div className="flex items-center justify-center gap-2 mb-4">
                <span className="w-5 h-[2px] rounded-full bg-[#FCB116]" />
                <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#FCB116]">
                  SCHEDULE A WALKTHROUGH
                </span>
                <span className="w-5 h-[2px] rounded-full bg-[#FCB116]" />
              </div>

              {/* Exact Specified Heading */}
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight text-white">
                {finalCta.heading}
              </h2>

              {/* Exact Specified Copy */}
              <p className="mt-5 text-base sm:text-lg lg:text-xl text-[#F7F8F8]/80 leading-relaxed font-normal">
                {finalCta.copy}
              </p>

              {/* Action Buttons */}
              <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                <button
                  onClick={onOpenDemo}
                  className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-[#FCB116] text-[#151515] font-extrabold text-sm sm:text-base hover:bg-white shadow-lg shadow-[#FCB116]/20 transition-all transform hover:-translate-y-0.5 cursor-pointer"
                >
                  <span>{finalCta.ctaLabel}</span>
                  <ArrowRight className="w-4 h-4 text-[#151515]" />
                </button>

                <Link
                  href={`/contact?product=${productSlug}`}
                  className="inline-flex items-center gap-2.5 px-7 py-4 rounded-full bg-white/10 hover:bg-white/20 text-white font-semibold text-sm sm:text-base backdrop-blur-xs border border-white/20 transition-all cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4 text-[#FCB116]" />
                  <span>Send Direct Inquiry</span>
                </Link>
              </div>

              {/* Operational Reassurance Badges */}
              <div className="mt-10 pt-8 border-t border-white/10 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs text-white/70">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-[#FCB116]" />
                  <span>Prompt reply within 24 business hours</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#059669]" />
                  <span>Structured module walkthrough</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-[#38BDF8]" />
                  <span>Direct developer & specialist consultation</span>
                </div>
              </div>

            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
