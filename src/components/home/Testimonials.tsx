"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, MessageSquareQuote, Quote, CheckCircle2 } from "lucide-react";
import { TESTIMONIALS_DATA } from "@/data/testimonials";
import { RevealOnScroll } from "../shared/RevealOnScroll";
import { WordReveal, ParagraphReveal } from "../shared/WordReveal";

export function Testimonials() {
  const [idx, setIdx] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isPaused, setIsPaused] = useState(false);
  const [resetTimer, setResetTimer] = useState(0);
  const total = TESTIMONIALS_DATA.length;

  const nextSlide = () => {
    setDirection(1);
    setIdx((i) => (i + 1) % total);
    setResetTimer((t) => t + 1);
  };

  const prevSlide = () => {
    setDirection(-1);
    setIdx((i) => (i === 0 ? total - 1 : i - 1));
    setResetTimer((t) => t + 1);
  };

  const goToSlide = (target: number) => {
    setDirection(target >= idx ? 1 : -1);
    setIdx(target);
    setResetTimer((t) => t + 1);
  };

  // Auto-play interval: smoothly flow to next card every 3.5s, pause on hover
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setDirection(1);
      setIdx((i) => (i + 1) % total);
    }, 3500);

    return () => clearInterval(timer);
  }, [isPaused, resetTimer, total]);

  // Circular window of 3 cards for desktop, 2 for tablet, 1 for mobile
  const visibleCards = [
    TESTIMONIALS_DATA[idx % total],
    TESTIMONIALS_DATA[(idx + 1) % total],
    TESTIMONIALS_DATA[(idx + 2) % total],
  ];

  // Animation variants for smooth sliding flow
  const variants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 30 : -30,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (dir: number) => ({
      x: dir > 0 ? -30 : 30,
      opacity: 0,
    }),
  };

  return (
    <section className="py-20 lg:py-28 bg-gradient-to-b from-[#F7F1FB] via-[#F4EDFA] to-[#F8F2FC] relative overflow-hidden select-none">
      {/* Small Dots Background Pattern */}
      <div className="absolute inset-0 bg-dot-purple pointer-events-none" />

      {/* Ambient Brand Glowing Orbs */}
      <div className="absolute top-10 -left-20 w-[550px] h-[550px] bg-[#502D6D]/[0.09] rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 -right-20 w-[550px] h-[550px] bg-[#8A3DA8]/[0.08] rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#FCB116]/[0.04] rounded-full blur-[160px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <RevealOnScroll className="max-w-2xl">
            <div className="inline-flex items-center gap-2.5 mb-3">
              <MessageSquareQuote className="w-4 h-4 text-[#FCB116] shrink-0" />
              <span className="font-syne text-xs sm:text-sm font-extrabold uppercase tracking-[0.24em] bg-gradient-to-r from-[#502D6D] via-[#8A3DA8] to-[#FCB116] bg-clip-text text-transparent">
                CLIENT TESTIMONIALS
              </span>
            </div>
            <WordReveal
              as="h2"
              text="Client Feedback & Reviews."
              gradientWords="Reviews."
              gradientClassName="bg-gradient-to-r from-[#502D6D] via-[#8A3DA8] to-[#FCB116] bg-clip-text text-transparent"
              className="text-4xl sm:text-5xl font-extrabold text-[#151515] leading-tight tracking-tight"
            />
            <ParagraphReveal
              text="Real stories and feedback from business founders and industry leaders who partnered with Pep Software to scale their digital presence."
              delay={0.12}
              className="text-base text-[#544643] mt-3 max-w-xl"
            />
          </RevealOnScroll>

          {/* Navigation Arrows */}
          <RevealOnScroll delay={0.1}>
            <div className="flex items-center gap-3">
              <button
                onClick={prevSlide}
                className="w-12 h-12 rounded-full bg-white border border-[#D9CDE8] flex items-center justify-center text-[#151515] hover:bg-[#502D6D] hover:border-[#502D6D] hover:text-white shadow-xs hover:shadow-md hover:shadow-[#502D6D]/15 active:scale-95 transition-all duration-200 cursor-pointer"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextSlide}
                className="w-12 h-12 rounded-full bg-white border border-[#D9CDE8] flex items-center justify-center text-[#151515] hover:bg-[#502D6D] hover:border-[#502D6D] hover:text-white shadow-xs hover:shadow-md hover:shadow-[#502D6D]/15 active:scale-95 transition-all duration-200 cursor-pointer"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </RevealOnScroll>
        </div>

        {/* Carousel Container with Pause-on-Hover for reading ease */}
        <div
          className="relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => setIsPaused(false)}
        >
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={idx}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {visibleCards.map((t, i) => {
                // Hide 3rd card on md (show 2), show all 3 on lg
                const visibilityClass = i === 2 ? "hidden lg:flex" : i === 1 ? "hidden md:flex" : "flex";

                return (
                  <div
                    key={`${t.id}-${idx}-${i}`}
                    className={`${visibilityClass} flex-col justify-between h-full p-8 rounded-3xl bg-white border border-[#E6DCF2] shadow-sm hover:shadow-xl hover:shadow-[#502D6D]/12 hover:-translate-y-1.5 hover:border-[#502D6D]/45 transition-all duration-300 card-shimmer overflow-hidden group relative`}
                  >
                    {/* Decorative Background Quote Watermark */}
                    <Quote className="absolute top-5 right-5 w-12 h-12 text-[#502D6D]/10 group-hover:text-[#502D6D]/20 transition-colors pointer-events-none" />

                    <div>
                      {/* Top Bar: Stars + Category Pill */}
                      <div className="flex items-center justify-between gap-2 mb-4">
                        <div className="flex items-center gap-1">
                          {[...Array(t.rating)].map((_, s) => (
                            <Star key={s} className="w-4 h-4 text-[#FCB116] fill-[#FCB116]" />
                          ))}
                        </div>
                        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[#502D6D]/[0.08] border border-[#502D6D]/20 text-[10px] font-bold uppercase tracking-wider text-[#502D6D]">
                          <CheckCircle2 className="w-2.5 h-2.5 text-[#FCB116]" />
                          {t.projectType}
                        </span>
                      </div>

                      {/* Authentic Review Text */}
                      <p className="text-sm sm:text-[15px] text-[#151515] font-normal leading-relaxed">
                        &ldquo;{t.quote}&rdquo;
                      </p>
                    </div>

                    {/* Client Profile Footer */}
                    <div className="flex items-center gap-3.5 pt-6 mt-6 border-t border-[#E6DCF2]">
                      <div className="relative w-12 h-12 rounded-full overflow-hidden border border-[#E6DCF2] shrink-0 bg-[#FAF6FD] shadow-xs group-hover:border-[#FCB116] transition-colors">
                        <Image
                          src={t.avatar}
                          alt={t.name}
                          fill
                          sizes="48px"
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-[#151515] group-hover:text-[#502D6D] transition-colors">
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
            </motion.div>
          </AnimatePresence>
        </div>

        {/* 4 Interactive Dot Indicators */}
        <div className="flex items-center justify-center gap-2 mt-10">
          {[...Array(total)].map((_, i) => (
            <button
              key={i}
              onClick={() => goToSlide(i)}
              className={`rounded-full transition-all duration-300 cursor-pointer ${
                i === idx % total
                  ? "bg-[#502D6D] w-8 h-2.5 ring-1 ring-[#FCB116]/60 shadow-xs shadow-[#502D6D]/30"
                  : "bg-[#D9CDE8] hover:bg-[#502D6D]/60 w-2.5 h-2.5"
              }`}
              aria-label={`Go to review ${i + 1} (${TESTIMONIALS_DATA[i].name})`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
