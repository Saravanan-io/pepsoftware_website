"use client";

import { useState } from "react";
import Image from "next/image";
import { Star, ChevronLeft, ChevronRight, MessageSquareQuote, Quote, CheckCircle2 } from "lucide-react";
import { TESTIMONIALS_DATA } from "@/data/testimonials";
import { RevealOnScroll } from "../shared/RevealOnScroll";

export function Testimonials() {
  const [idx, setIdx] = useState(0);
  const total = TESTIMONIALS_DATA.length;

  const nextSlide = () => setIdx((i) => (i + 1) % total);
  const prevSlide = () => setIdx((i) => (i === 0 ? total - 1 : i - 1));

  // Circular window of 3 cards for desktop, 2 for tablet, 1 for mobile
  const visibleCards = [
    TESTIMONIALS_DATA[idx % total],
    TESTIMONIALS_DATA[(idx + 1) % total],
    TESTIMONIALS_DATA[(idx + 2) % total],
  ];

  return (
    <section className="py-20 lg:py-28 bg-[#E7EBEA] relative overflow-hidden select-none">
      <div className="absolute inset-0 bg-dot-light opacity-30 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <RevealOnScroll className="max-w-2xl">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E9E8E6] border border-[#C6C2C1] text-xs font-bold uppercase tracking-wider text-[#C86A28] mb-3">
              <MessageSquareQuote className="w-3.5 h-3.5" />
              <span>TESTIMONIAL</span>
            </span>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-[#151515] leading-tight tracking-tight">
              Client Feedback &{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#544643] to-[#C86A28]">
                Reviews.
              </span>
            </h2>
            <p className="text-base text-[#544643] mt-3 max-w-xl">
              Real stories and feedback from business founders and industry leaders who partnered with Pep Software to scale their digital presence.
            </p>
          </RevealOnScroll>

          {/* Navigation Arrows */}
          <RevealOnScroll delay={0.1}>
            <div className="flex items-center gap-3">
              <button
                onClick={prevSlide}
                className="w-12 h-12 rounded-full bg-[#EFF0EF] border border-[#C6C2C1] flex items-center justify-center text-[#151515] hover:bg-[#151515] hover:text-[#F7F8F8] shadow-xs hover:shadow-md transition-all duration-200 cursor-pointer"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextSlide}
                className="w-12 h-12 rounded-full bg-[#EFF0EF] border border-[#C6C2C1] flex items-center justify-center text-[#151515] hover:bg-[#151515] hover:text-[#F7F8F8] shadow-xs hover:shadow-md transition-all duration-200 cursor-pointer"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </RevealOnScroll>
        </div>

        {/* Testimonial Cards: 1 on mobile, 2 on tablet, 3 on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {visibleCards.map((t, i) => {
            // Hide 3rd card on md (show 2), show all 3 on lg
            const visibilityClass = i === 2 ? "hidden lg:flex" : i === 1 ? "hidden md:flex" : "flex";

            return (
              <div
                key={`${t.id}-${idx}`}
                className={`${visibilityClass} flex-col justify-between h-full p-8 rounded-3xl bg-[#EFF0EF] border border-[#C6C2C1] shadow-xs hover:shadow-xl hover:-translate-y-2 hover:border-[#544643] transition-all duration-300 card-shimmer overflow-hidden group relative`}
              >
                {/* Decorative Background Quote Watermark */}
                <Quote className="absolute top-5 right-5 w-12 h-12 text-[#C6C2C1]/30 group-hover:text-[#C86A28]/30 transition-colors pointer-events-none" />

                <div>
                  {/* Top Bar: Stars + Category Pill */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <div className="flex items-center gap-1">
                      {[...Array(t.rating)].map((_, s) => (
                        <Star key={s} className="w-4 h-4 text-[#C86A28] fill-current" />
                      ))}
                    </div>
                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[#E9E8E6] border border-[#C6C2C1] text-[10px] font-bold uppercase tracking-wider text-[#C86A28]">
                      <CheckCircle2 className="w-2.5 h-2.5" />
                      {t.projectType}
                    </span>
                  </div>

                  {/* Authentic Review Text */}
                  <p className="text-sm sm:text-[15px] text-[#151515] font-normal leading-relaxed">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                </div>

                {/* Client Profile Footer */}
                <div className="flex items-center gap-3.5 pt-6 mt-6 border-t border-[#C6C2C1]/60">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden border border-[#C6C2C1] shrink-0 bg-[#E9E8E6] shadow-xs group-hover:border-[#C86A28] transition-colors">
                    <Image
                      src={t.avatar}
                      alt={t.name}
                      fill
                      sizes="48px"
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#151515] group-hover:text-[#C86A28] transition-colors">
                      {t.name}
                    </h4>
                    <p className="text-xs text-[#544643] font-medium leading-tight mt-0.5">
                      {t.role}, {t.company}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* 4 Interactive Dot Indicators */}
        <div className="flex items-center justify-center gap-2 mt-10">
          {[...Array(total)].map((_, i) => (
            <button
              key={i}
              onClick={() => setIdx(i)}
              className={`rounded-full transition-all duration-300 cursor-pointer ${
                i === idx % total
                  ? "bg-[#151515] w-8 h-2.5"
                  : "bg-[#C6C2C1] hover:bg-[#544643] w-2.5 h-2.5"
              }`}
              aria-label={`Go to review ${i + 1} (${TESTIMONIALS_DATA[i].name})`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
