"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { SERVICES_DATA } from "@/data/services";
import { RevealOnScroll } from "../shared/RevealOnScroll";

interface FAQItem {
  q: string;
  a: string;
  category: string;
}

export function ServicesFAQ() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  // Aggregate all authentic FAQs from SERVICES_DATA
  const allFaqs: FAQItem[] = [];
  SERVICES_DATA.forEach((s) => {
    if (s.faqs) {
      s.faqs.forEach((faq) => {
        allFaqs.push({
          q: faq.q,
          a: faq.a,
          category: s.id,
        });
      });
    }
  });

  const categories = [
    { id: "all", label: "All Questions" },
    { id: "website-design-development", label: "Web Development" },
    { id: "ui-ux-design", label: "UI/UX Design" },
    { id: "mobile-app-design-development", label: "Mobile Apps" },
  ];

  const filteredFaqs =
    activeCategory === "all"
      ? allFaqs
      : allFaqs.filter((f) => f.category === activeCategory);

  const toggleFaq = (index: number) => {
    setOpenIdx((prev) => (prev === index ? null : index));
  };

  return (
    <section className="py-20 lg:py-28 bg-[#EFF0EF] border-t border-[#C6C2C1]/60">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <RevealOnScroll>
            <div className="inline-flex items-center gap-2.5 mb-3">
              <HelpCircle className="w-4 h-4 text-[#FCB116] shrink-0" />
              <span className="font-syne text-xs sm:text-sm font-extrabold uppercase tracking-[0.24em] bg-gradient-to-r from-[#502D6D] via-[#8A3DA8] to-[#FCB116] bg-clip-text text-transparent">
                FREQUENTLY ASKED QUESTIONS
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#151515] leading-tight tracking-tight mt-2">
              Common Questions &{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#544643] to-[#C86A28]">
                Clear Answers.
              </span>
            </h2>
            <p className="text-sm sm:text-base text-[#544643] mt-3">
              Everything you need to know about our web development, UI/UX design, and mobile app services.
            </p>
          </RevealOnScroll>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => {
                setActiveCategory(cat.id);
                setOpenIdx(0);
              }}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer ${
                activeCategory === cat.id
                  ? "bg-[#151515] text-[#F7F8F8] shadow-sm"
                  : "bg-[#E9E8E6] text-[#544643] border border-[#C6C2C1] hover:border-[#151515] hover:text-[#151515]"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Accordion List */}
        <div className="space-y-3.5">
          {filteredFaqs.map((faq, i) => {
            const isOpen = openIdx === i;
            return (
              <div
                key={`${faq.q}-${i}`}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? "bg-[#F7F8F8] border-[#544643] shadow-md"
                    : "bg-[#E9E8E6] border-[#C6C2C1] hover:border-[#544643]/70"
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
                        ? "bg-[#151515] text-[#F7F8F8] border-[#151515] rotate-180"
                        : "bg-[#EFF0EF] text-[#544643] border-[#C6C2C1]"
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-sm text-[#544643] leading-relaxed border-t border-[#C6C2C1]/40 animate-in fade-in duration-200">
                    <p className="max-w-3xl">{faq.a}</p>
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
