"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Star, Quote, CheckCircle, Smartphone } from "lucide-react";
import { WordReveal, ParagraphReveal } from "@/components/shared/WordReveal";
import { RevealOnScroll } from "@/components/shared/RevealOnScroll";

export function FeaturedTestimonialSection() {
  return (
    <section className="py-20 lg:py-28 bg-[#F7F8F8] relative overflow-hidden border-b border-[#C6C2C1]/40">
      {/* Ambient background glows */}
      <div className="absolute top-10 -left-20 w-[550px] h-[550px] bg-[#502D6D]/[0.06] rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 -right-20 w-[550px] h-[550px] bg-[#FCB116]/[0.08] rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <RevealOnScroll>
            <WordReveal
              as="h2"
              text="What Our Clients Say"
              gradientWords="Clients Say"
              gradientClassName="text-[#502D6D]"
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#151515]"
            />
          </RevealOnScroll>
        </div>

        {/* Featured Showcase Card */}
        <RevealOnScroll delay={0.15}>
          <div className="relative rounded-[32px] sm:rounded-[40px] bg-white border border-[#C6C2C1]/60 shadow-xl shadow-[#502D6D]/5 overflow-hidden p-6 sm:p-10 lg:p-14">
            {/* Background watermark quote */}
            <Quote className="absolute -top-4 -right-4 w-44 h-44 text-[#502D6D]/[0.04] pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              {/* Left Column: Testimonial Content */}
              <div className="lg:col-span-7 space-y-6">
                {/* Star rating and verified note */}
                <div className="flex flex-wrap items-center justify-between gap-3 pb-2 border-b border-[#C6C2C1]/40">
                  <div className="flex items-center gap-1.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#FCB116] text-[#FCB116]" />
                    ))}
                    <span className="text-xs font-bold text-[#151515] ml-1.5">5.0 Star Rating</span>
                  </div>

                  <div className="flex items-center gap-1.5 text-xs font-bold text-[#502D6D]">
                    <CheckCircle className="w-3.5 h-3.5 text-[#502D6D]" />
                    <span>Verified Project Client</span>
                  </div>
                </div>

                {/* The Quote */}
                <blockquote className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#151515] leading-snug tracking-tight">
                  &ldquo;We needed a custom mobile app for our internal use to manage service calls and stock easily. The team clearly understood our requirements and delivered a user-friendly app, just the way we wanted.&rdquo;
                </blockquote>

                {/* Author Info */}
                <div className="flex items-center gap-4 pt-2">
                  <div className="relative w-16 h-16 rounded-2xl overflow-hidden border-2 border-[#502D6D]/30 shadow-md bg-[#FAF6FD] shrink-0">
                    <Image
                      src="/images/testimonials/lenin.png"
                      alt="Lenin - Director, Lenient Technologies"
                      fill
                      sizes="64px"
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-extrabold text-[#151515]">
                      Lenin
                    </h3>
                    <p className="text-sm font-semibold text-[#502D6D]">
                      Director / Lenient Technologies
                    </p>
                  </div>
                </div>

                {/* Project Tag & CTA */}
                <div className="pt-4 border-t border-[#C6C2C1]/40 flex flex-wrap items-center justify-between gap-4">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-[#544643] block">
                      Project
                    </span>
                    <span className="text-sm sm:text-base font-bold text-[#151515] flex items-center gap-1.5 mt-0.5">
                      <Smartphone className="w-4 h-4 text-[#502D6D]" />
                      Service Management Mobile Application
                    </span>
                  </div>

                  <Link
                    href="/work/lenient-technologies-app"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#151515] text-[#F7F8F8] font-bold text-sm hover:bg-[#502D6D] shadow-md shadow-[#151515]/10 hover:shadow-[#502D6D]/20 transition-all cursor-pointer group"
                  >
                    <span>View Project</span>
                    <ArrowRight className="w-4 h-4 text-[#FCB116] transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>

              {/* Right Column: Visual Mockup Showcase */}
              <div className="lg:col-span-5 relative flex items-center justify-center">
                <div className="relative w-full max-w-[340px] aspect-[4/5] rounded-[28px] overflow-hidden bg-gradient-to-br from-[#F4EDFA] via-[#FBF9FD] to-[#FFFFFF] p-5 border border-[#C6C2C1]/60 shadow-lg group">
                  {/* Subtle top phone bezel dot */}
                  <div className="flex items-center justify-center gap-1.5 pb-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#502D6D]" />
                    <span className="text-[10px] font-mono font-bold tracking-widest text-[#544643] uppercase">
                      Lenient Tech Mobile App
                    </span>
                  </div>

                  <div className="relative w-full h-[calc(100%-28px)] rounded-2xl overflow-hidden shadow-inner bg-white border border-[#C6C2C1]/40 flex items-center justify-center">
                    <Image
                      src="/images/portfolio/Lenient-mobile-app-mockup.png"
                      alt="Lenient Technologies Mobile Application Mockup"
                      fill
                      sizes="(max-width: 768px) 100vw, 340px"
                      className="object-contain p-2 group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
