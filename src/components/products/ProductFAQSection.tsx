"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { RevealOnScroll } from "@/components/shared/RevealOnScroll";

interface ProductFAQSectionProps {
  faqs: { q: string; a: string }[];
  productName: string;
}

export function ProductFAQSection({ faqs, productName }: ProductFAQSectionProps) {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIdx((prev) => (prev === index ? null : index));
  };

  return (
    <section className="py-20 lg:py-28 bg-[#FFFFFF] border-t border-[#C6C2C1]/60">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <RevealOnScroll>
            <div className="inline-flex items-center gap-2.5 mb-2">
              <HelpCircle className="w-4 h-4 text-[#FCB116] shrink-0" />
              <span className="font-syne text-xs sm:text-sm font-extrabold uppercase tracking-[0.24em] text-[#502D6D]">
                FREQUENTLY ASKED QUESTIONS
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#151515] leading-tight tracking-tight mt-1">
              Common Questions About the{" "}
              <span className="text-[#502D6D]">{productName}.</span>
            </h2>

            <p className="text-sm sm:text-base text-[#544643] mt-3">
              Clear answers regarding documented capabilities, workflows, and administrative features.
            </p>
          </RevealOnScroll>
        </div>

        {/* Accordion List */}
        <div className="space-y-3.5">
          {faqs.map((faq, i) => {
            const isOpen = openIdx === i;
            return (
              <div
                key={`${faq.q}-${i}`}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? "bg-[#F7F8F8] border-[#502D6D]/40 shadow-sm"
                    : "bg-[#F8F9FA] border-[#C6C2C1]/60 hover:border-[#502D6D]/40"
                }`}
              >
                <button
                  onClick={() => toggleFaq(i)}
                  className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm sm:text-base font-bold text-[#151515] flex items-center gap-3">
                    <HelpCircle
                      className={`w-4 h-4 shrink-0 transition-colors ${
                        isOpen ? "text-[#502D6D]" : "text-[#C6C2C1]"
                      }`}
                    />
                    {faq.q}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 border transition-transform duration-200 ${
                      isOpen
                        ? "bg-[#502D6D] text-white border-[#502D6D] rotate-180"
                        : "bg-white text-[#544643] border-[#C6C2C1]/80"
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-sm text-[#544643] leading-relaxed border-t border-[#C6C2C1]/30 animate-in fade-in duration-200">
                    <p className="max-w-3xl leading-relaxed">{faq.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
