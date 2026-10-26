"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { RevealOnScroll } from "@/components/shared/RevealOnScroll";

interface ClientTestimonial {
  id: string;
  name: string;
  subTitleLabel: "Industry" | "Company";
  subTitleValue: string;
  quote: string;
  project: string;
  avatar: string;
  projectSlug: string;
}

const TESTIMONIALS: ClientTestimonial[] = [
  {
    id: "praveen",
    name: "Praveen",
    subTitleLabel: "Industry",
    subTitleValue: "Plastic Bottle Manufacturing",
    quote:
      "We are running a plastic bottle manufacturing company and wanted to build our website. They understood our business clearly and designed a clean and professional site. The team is friendly and gave regular updates. Very happy with their work!",
    project: "Business Website",
    avatar: "/images/testimonials/praveen.png",
    projectSlug: "pravin-bottelings",
  },
  {
    id: "prakash",
    name: "Prakash",
    subTitleLabel: "Industry",
    subTitleValue: "Pharmaceuticals",
    quote:
      "We wanted to take our brand online and Pep Software built a neat and clean website for us. Very friendly team and easy to work with. They delivered everything on time. Highly recommended for anyone looking for a professional website!",
    project: "Business Website",
    avatar: "/images/testimonials/prakash_avatar.png",
    projectSlug: "hakir-pharmaceuticals",
  },
  {
    id: "thangavelu",
    name: "Thangavelu B",
    subTitleLabel: "Industry",
    subTitleValue: "Mutual Funds / Financial Services",
    quote:
      "I recently got a one-page website designed by Pep Software for my mutual fund platform, and I'm extremely happy with the result. The site is fast, clean, and looks great on both desktop and mobile. They understood my needs perfectly and made the entire process smooth and professional.",
    project: "One-Page Website",
    avatar: "/images/testimonials/thangavelu.png",
    projectSlug: "the-elite-mutual-funds",
  },
  {
    id: "lenin",
    name: "Lenin",
    subTitleLabel: "Company",
    subTitleValue: "Lenient Technologies",
    quote:
      "We needed a custom mobile app for our internal use to manage service calls and stock easily. The team clearly understood our requirements and delivered a user-friendly app, just the way we wanted. Very professional and supportive throughout the project.",
    project: "Custom Mobile Application",
    avatar: "/images/testimonials/lenin.png",
    projectSlug: "lenient-technologies-app",
  },
];

// Smooth Apple/Stripe-level easing curve
const transitionConfig = {
  duration: 0.6,
  ease: [0.22, 1, 0.36, 1] as const,
};

const contentVariants = {
  enter: (dir: number) => ({
    x: dir > 0 ? 32 : -32,
    opacity: 0,
    filter: "blur(3px)",
  }),
  center: {
    x: 0,
    opacity: 1,
    filter: "blur(0px)",
    transition: transitionConfig,
  },
  exit: (dir: number) => ({
    x: dir > 0 ? -32 : 32,
    opacity: 0,
    filter: "blur(3px)",
    transition: {
      duration: 0.4,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  }),
};

const avatarVariants = {
  enter: (dir: number) => ({
    scale: 0.82,
    opacity: 0,
    x: dir > 0 ? 20 : -20,
  }),
  center: {
    scale: 1,
    opacity: 1,
    x: 0,
    transition: transitionConfig,
  },
  exit: (dir: number) => ({
    scale: 0.82,
    opacity: 0,
    x: dir > 0 ? -20 : 20,
    transition: {
      duration: 0.35,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  }),
};

export function ClientTestimonialsGrid() {
  const [startIndex, setStartIndex] = useState<number>(0);
  const [direction, setDirection] = useState<number>(1);
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const total = TESTIMONIALS.length;

  const nextSlide = useCallback(() => {
    setDirection(1);
    setStartIndex((prev) => (prev + 1) % total);
  }, [total]);

  const prevSlide = useCallback(() => {
    setDirection(-1);
    setStartIndex((prev) => (prev - 1 + total) % total);
  }, [total]);

  const goToSlide = useCallback(
    (targetIndex: number) => {
      setDirection(targetIndex >= startIndex ? 1 : -1);
      setStartIndex(targetIndex % total);
    },
    [startIndex, total]
  );

  // ── Smooth Auto-flow: Advances 1 by 1 automatically every 4s, pauses on hover ──
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      nextSlide();
    }, 4000);

    return () => clearInterval(interval);
  }, [isPaused, nextSlide]);

  // 3 items to show simultaneously in the carousel
  const visibleItems = [
    TESTIMONIALS[startIndex % total],
    TESTIMONIALS[(startIndex + 1) % total],
    TESTIMONIALS[(startIndex + 2) % total],
  ];

  return (
    <section className="pt-24 sm:pt-32 pb-20 lg:pb-28 bg-[#FFFFFF] relative overflow-hidden select-none border-b border-[#C6C2C1]/30">
      {/* ── Background Decorative Elements (Matching Reference Image) ── */}
      {/* Top-Left Ambient Soft Purple Sphere */}
      <div className="absolute top-10 -left-14 w-64 h-64 rounded-full bg-gradient-to-br from-purple-200/50 to-purple-100/20 blur-3xl pointer-events-none" />

      {/* Bottom-Left Ambient Purple Sphere */}
      <div className="absolute bottom-12 -left-6 w-36 h-36 rounded-full bg-purple-200/60 blur-2xl pointer-events-none" />

      {/* Top-Right Ambient Purple Curved Glow */}
      <div className="absolute -top-12 -right-16 w-80 h-80 rounded-full bg-gradient-to-bl from-purple-200/40 via-purple-100/25 to-transparent blur-3xl pointer-events-none" />

      {/* Far Right Soft Blur Orb */}
      <div className="absolute top-1/2 -right-10 -translate-y-1/2 w-64 h-64 rounded-full bg-purple-100/40 blur-3xl pointer-events-none" />

      {/* Top-Right Dot Grid (6x3) */}
      <div className="absolute top-16 right-8 sm:right-16 grid grid-cols-6 gap-2.5 opacity-40 pointer-events-none hidden sm:grid">
        {Array.from({ length: 18 }).map((_, i) => (
          <div key={i} className="w-1.5 h-1.5 rounded-full bg-purple-400" />
        ))}
      </div>

      {/* Bottom-Left Dot Grid (4x3) */}
      <div className="absolute bottom-12 left-8 sm:left-14 grid grid-cols-4 gap-2.5 opacity-40 pointer-events-none hidden sm:grid">
        {Array.from({ length: 12 }).map((_, i) => (
          <div key={i} className="w-1.5 h-1.5 rounded-full bg-purple-400" />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* ── Section Header (Exact Match to Reference Image) ── */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <RevealOnScroll>
            {/* Pill Badge: "● Testimonials" */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-purple-200/80 shadow-xs mb-4">
              <span className="w-2 h-2 rounded-full bg-[#7C3AED]" />
              <span className="text-xs sm:text-sm font-bold text-[#151515]">
                Testimonials
              </span>
            </div>

            {/* Title: "What our customers say?" */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#151515] tracking-tight leading-tight">
              What our{" "}
              <span className="text-[#7C3AED] bg-gradient-to-r from-[#7C3AED] via-[#9333EA] to-[#68358F] bg-clip-text text-transparent">
                customers say?
              </span>
            </h2>

            {/* Subtitle */}
            <p className="mt-3.5 text-sm sm:text-base text-[#544643] leading-relaxed max-w-xl mx-auto">
              Real stories from businesses who trust and grow with Pep Software.
            </p>
          </RevealOnScroll>
        </div>

        {/* ── Carousel Showcase with Navigation Arrows & Auto-Flow ── */}
        <div
          className="relative max-w-6xl mx-auto px-2 sm:px-12"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => setIsPaused(false)}
        >
          
          {/* Left Arrow Button */}
          <button
            onClick={prevSlide}
            aria-label="Previous Testimonials"
            className="absolute -left-2 sm:left-0 top-1/2 -translate-y-1/2 z-30 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white shadow-lg border border-slate-200/90 text-slate-700 hover:text-[#7C3AED] hover:border-[#7C3AED]/40 hover:scale-110 active:scale-95 transition-all duration-300 flex items-center justify-center cursor-pointer"
          >
            <ChevronLeft className="w-6 h-6 -ml-0.5" />
          </button>

          {/* Right Arrow Button */}
          <button
            onClick={nextSlide}
            aria-label="Next Testimonials"
            className="absolute -right-2 sm:right-0 top-1/2 -translate-y-1/2 z-30 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white shadow-lg border border-slate-200/90 text-slate-700 hover:text-[#7C3AED] hover:border-[#7C3AED]/40 hover:scale-110 active:scale-95 transition-all duration-300 flex items-center justify-center cursor-pointer"
          >
            <ChevronRight className="w-6 h-6 -mr-0.5" />
          </button>

          {/* ── Desktop: 3 Organic Pebble Cards Grid with Smooth Auto Flow ── */}
          <div className="hidden md:grid md:grid-cols-3 gap-6 lg:gap-8 items-center pt-8 pb-4">
            {visibleItems.map((item, idx) => {
              const isCenter = idx === 1;

              return (
                <div
                  key={`slot-${idx}`}
                  className={`relative transition-all duration-500 ${
                    isCenter
                      ? "md:-translate-y-4 md:scale-105 z-20"
                      : "z-10 opacity-95 md:scale-95 hover:opacity-100"
                  }`}
                >
                  {/* Celebratory Sketch Rays (Only on Center Card Avatar) */}
                  {isCenter && (
                    <motion.div
                      key={`sketch-${item.id}`}
                      initial={{ opacity: 0, y: -6, scale: 0.9 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      transition={{ duration: 0.45 }}
                      className="absolute -top-16 sm:-top-18 left-1/2 -translate-x-1/2 pointer-events-none z-30"
                    >
                      <svg
                        className="w-10 h-7 text-[#7C3AED]"
                        viewBox="0 0 40 24"
                        fill="none"
                      >
                        <path
                          d="M 10,20 L 4,6"
                          stroke="currentColor"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                        />
                        <path
                          d="M 20,18 L 20,4"
                          stroke="currentColor"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                        />
                        <path
                          d="M 30,20 L 36,6"
                          stroke="currentColor"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                        />
                      </svg>
                    </motion.div>
                  )}

                  {/* Decorative Sparkle Rays (On Right Card Avatar) */}
                  {idx === 2 && (
                    <div className="absolute -top-13 right-14 sm:right-18 pointer-events-none z-30 hidden md:block">
                      <svg
                        className="w-6 h-6 text-[#7C3AED]"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M 4,18 L 10,12"
                          stroke="currentColor"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                        />
                        <path
                          d="M 12,20 L 20,14"
                          stroke="currentColor"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                        />
                      </svg>
                    </div>
                  )}

                  {/* Offset Curved Backing Silhouette (Creates the Fluid 3D Layered Blob Look) */}
                  <div
                    className={`absolute transition-transform duration-500 pointer-events-none ${
                      isCenter
                        ? "-inset-x-3 -top-4 -bottom-1 rounded-[50px_72px_44px_62px] bg-[#6D28D9] shadow-2xl shadow-purple-900/35"
                        : idx === 0
                        ? "-inset-y-3 -left-4 -right-1 rounded-[68px_38px_50px_76px] bg-[#6D28D9] shadow-xl shadow-purple-900/25"
                        : "-inset-y-3 -right-4 -left-1 rounded-[46px_68px_74px_42px] bg-[#DDD6FE]"
                    }`}
                  />

                  {/* Organic Pebble White Card */}
                  <div
                    className={`relative bg-white border border-slate-200/80 p-6 sm:p-7 pt-16 sm:pt-18 shadow-[0_20px_45px_rgba(80,45,109,0.08)] flex flex-col justify-between min-h-[400px] sm:min-h-[430px] ${
                      isCenter
                        ? "rounded-[48px_58px_44px_54px]"
                        : idx === 0
                        ? "rounded-[52px_44px_40px_60px]"
                        : "rounded-[44px_56px_58px_46px]"
                    }`}
                  >
                    
                    {/* Floating Avatar breaking out of card top with smooth transition */}
                    <div className={`absolute left-1/2 -translate-x-1/2 z-20 ${isCenter ? "-top-12 sm:-top-13" : "-top-10 sm:-top-11"}`}>
                      <AnimatePresence mode="popLayout" custom={direction} initial={false}>
                        <motion.div
                          key={`avatar-${item.id}`}
                          custom={direction}
                          variants={avatarVariants}
                          initial="enter"
                          animate="center"
                          exit="exit"
                          className={`rounded-full border-4 border-white shadow-xl overflow-hidden bg-slate-100 flex items-center justify-center ${
                            isCenter
                              ? "w-24 h-24 sm:w-26 sm:h-26"
                              : "w-20 h-20 sm:w-22 sm:h-22"
                          }`}
                        >
                          <Image
                            src={item.avatar}
                            alt={`${item.name} testimonial`}
                            width={104}
                            height={104}
                            className="w-full h-full object-cover"
                          />
                        </motion.div>
                      </AnimatePresence>
                    </div>

                    {/* Content with smooth directional slide & crossfade */}
                    <AnimatePresence mode="popLayout" custom={direction} initial={false}>
                      <motion.div
                        key={`content-${item.id}`}
                        custom={direction}
                        variants={contentVariants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        className="w-full h-full flex flex-col justify-between"
                      >
                        {/* Top Content: Name & Industry */}
                        <div className="text-center">
                          <h3 className="text-xl sm:text-2xl font-black text-[#151515] tracking-tight">
                            {item.name}
                          </h3>
                          <p className="text-xs sm:text-sm text-slate-500 font-medium mt-0.5">
                            {item.subTitleLabel}: {item.subTitleValue}
                          </p>

                          {/* Purple Quote Marks Icon */}
                          <div className="my-3.5 flex items-center justify-center">
                            <Quote className="w-6 h-6 text-[#7C3AED] fill-[#7C3AED]" />
                          </div>

                          {/* Quote Body in Italics */}
                          <blockquote className="text-xs sm:text-sm text-[#475569] leading-relaxed italic font-normal px-1 sm:px-2">
                            &ldquo;{item.quote}&rdquo;
                          </blockquote>
                        </div>

                        {/* Bottom: Project Type */}
                        <div className="mt-5 pt-3.5 border-t border-slate-100 text-center">
                          <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 block">
                            PROJECT
                          </span>
                          <span className="text-xs sm:text-sm font-extrabold text-[#151515] block mt-0.5">
                            {item.project}
                          </span>
                        </div>
                      </motion.div>
                    </AnimatePresence>

                  </div>
                </div>
              );
            })}
          </div>

          {/* ── Mobile: Single Card Carousel with Smooth Auto Flow ── */}
          <div className="block md:hidden pt-12 pb-4 px-2">
            {(() => {
              const currentItem = TESTIMONIALS[startIndex % total];
              return (
                <div className="relative">
                  {/* Celebratory Sketch Rays */}
                  <div className="absolute -top-14 left-1/2 -translate-x-1/2 pointer-events-none z-30">
                    <svg
                      className="w-9 h-6 text-[#7C3AED]"
                      viewBox="0 0 40 24"
                      fill="none"
                    >
                      <path
                        d="M 10,20 L 4,6"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                      />
                      <path
                        d="M 20,18 L 20,4"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                      />
                      <path
                        d="M 30,20 L 36,6"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                      />
                    </svg>
                  </div>

                  {/* Offset Curved Backing Silhouette */}
                  <div className="absolute -inset-x-2 -top-3 -bottom-1 rounded-[44px_60px_38px_52px] bg-[#6D28D9] shadow-xl shadow-purple-900/30" />

                  {/* Organic Pebble White Card */}
                  <div className="relative bg-white border border-slate-200/80 p-6 pt-16 rounded-[40px_52px_36px_48px] shadow-[0_20px_45px_rgba(80,45,109,0.08)] flex flex-col justify-between min-h-[380px]">
                    {/* Floating Avatar with smooth animation */}
                    <div className="absolute -top-11 left-1/2 -translate-x-1/2 z-20">
                      <AnimatePresence mode="popLayout" custom={direction} initial={false}>
                        <motion.div
                          key={`mobile-avatar-${currentItem.id}`}
                          custom={direction}
                          variants={avatarVariants}
                          initial="enter"
                          animate="center"
                          exit="exit"
                          className="w-22 h-22 rounded-full border-4 border-white shadow-xl overflow-hidden bg-slate-100 flex items-center justify-center"
                        >
                          <Image
                            src={currentItem.avatar}
                            alt={`${currentItem.name} testimonial`}
                            width={90}
                            height={90}
                            className="w-full h-full object-cover"
                          />
                        </motion.div>
                      </AnimatePresence>
                    </div>

                    {/* Top Content with smooth animation */}
                    <AnimatePresence mode="popLayout" custom={direction} initial={false}>
                      <motion.div
                        key={`mobile-content-${currentItem.id}`}
                        custom={direction}
                        variants={contentVariants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        className="w-full h-full flex flex-col justify-between"
                      >
                        <div className="text-center">
                          <h3 className="text-xl font-black text-[#151515] tracking-tight">
                            {currentItem.name}
                          </h3>
                          <p className="text-xs text-slate-500 font-medium mt-0.5">
                            {currentItem.subTitleLabel}: {currentItem.subTitleValue}
                          </p>

                          <div className="my-3 flex items-center justify-center">
                            <Quote className="w-6 h-6 text-[#7C3AED] fill-[#7C3AED]" />
                          </div>

                          <blockquote className="text-xs text-[#475569] leading-relaxed italic font-normal px-1">
                            &ldquo;{currentItem.quote}&rdquo;
                          </blockquote>
                        </div>

                        {/* Bottom: Project Type */}
                        <div className="mt-5 pt-3.5 border-t border-slate-100 text-center">
                          <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 block">
                            PROJECT
                          </span>
                          <span className="text-xs font-extrabold text-[#151515] block mt-0.5">
                            {currentItem.project}
                          </span>
                        </div>
                      </motion.div>
                    </AnimatePresence>
                  </div>
                </div>
              );
            })()}
          </div>

          {/* ── Pagination Indicator Dots (Interactive & Auto-Flow Synced) ── */}
          <div className="flex items-center justify-center gap-2.5 mt-8 sm:mt-10">
            {TESTIMONIALS.map((t, dotIdx) => {
              const isActive = dotIdx === startIndex % total;
              return (
                <button
                  key={dotIdx}
                  onClick={() => goToSlide(dotIdx)}
                  aria-label={`Go to slide ${dotIdx + 1} (${t.name})`}
                  className={`transition-all duration-400 cursor-pointer ${
                    isActive
                      ? "w-7 h-3 rounded-full bg-[#7C3AED] scale-105 shadow-xs"
                      : "w-3 h-3 rounded-full border-2 border-[#7C3AED] bg-transparent hover:bg-purple-100"
                  }`}
                />
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
