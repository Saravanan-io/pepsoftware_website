"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Star, ShieldCheck, MessageSquareQuote } from "lucide-react";
import { motion } from "framer-motion";
import { WordReveal, ParagraphReveal } from "@/components/shared/WordReveal";
import { RevealOnScroll } from "@/components/shared/RevealOnScroll";

export function TestimonialsHero() {
  const clientAvatars = [
    { src: "/images/testimonials/lenin.png", name: "Lenin" },
    { src: "/images/testimonials/praveen.png", name: "Praveen" },
    { src: "/images/testimonials/prakash_avatar.png", name: "Prakash" },
    { src: "/images/testimonials/thangavelu.png", name: "Thangavelu B" },
  ];

  return (
    <section className="relative pt-28 sm:pt-32 lg:pt-36 pb-16 lg:pb-24 overflow-hidden bg-[#F7F8F8] border-b border-[#C6C2C1]/40">
      {/* Background ambient lighting */}
      <div className="absolute inset-0 bg-dot-light opacity-35 pointer-events-none" />
      <div className="absolute -top-32 -left-24 w-[600px] h-[600px] bg-[#502D6D]/[0.07] rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-purple-500/[0.08] rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[450px] h-[450px] bg-[#FCB116]/[0.06] rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Content Column */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-6">
            
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-purple-200/80 shadow-xs">
              <span className="w-2 h-2 rounded-full bg-[#7C3AED]" />
              <span className="text-xs font-bold text-[#151515] tracking-wide uppercase">
                Client Success Stories
              </span>
            </div>

            {/* Main Heading */}
            <WordReveal
              as="h1"
              text="Trusted by Businesses. Recommended by Clients."
              gradientWords="Recommended by Clients."
              gradientClassName="text-[#7C3AED]"
              className="text-4xl sm:text-5xl lg:text-5xl xl:text-6xl font-extrabold tracking-tight text-[#151515] leading-[1.1] text-center lg:text-left"
            />

            {/* Description */}
            <div className="space-y-2 pt-1 text-center lg:text-left">
              <ParagraphReveal
                text="The best way to understand our work is to hear from the people we've worked with."
                delay={0.12}
                className="text-base sm:text-lg text-[#544643] leading-relaxed font-normal max-w-xl mx-auto lg:mx-0"
              />
              <ParagraphReveal
                text="From websites and digital experiences to custom software, our clients share their experience of working with Pep Software."
                delay={0.2}
                className="text-sm sm:text-base text-[#544643]/85 leading-relaxed max-w-xl mx-auto lg:mx-0"
              />
            </div>

            {/* Action CTAs */}
            <RevealOnScroll delay={0.25}>
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-[#151515] text-[#F7F8F8] font-bold text-sm hover:bg-[#7C3AED] shadow-lg shadow-[#151515]/10 hover:shadow-[#7C3AED]/25 border border-transparent transition-all cursor-pointer group"
                >
                  <span>Start a Project</span>
                  <ArrowRight className="w-4 h-4 text-[#FCB116] transition-transform group-hover:translate-x-1" />
                </Link>

                <Link
                  href="/work"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white text-[#151515] font-bold text-sm border border-[#C6C2C1]/80 hover:border-[#7C3AED] hover:text-[#7C3AED] shadow-xs hover:shadow-md transition-all cursor-pointer"
                >
                  <span>View Our Projects</span>
                  <ArrowRight className="w-4 h-4 text-[#544643] transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </RevealOnScroll>

            {/* Trust Badge Bar */}
            <RevealOnScroll delay={0.3}>
              <div className="pt-6 sm:pt-8 flex flex-wrap items-center justify-center lg:justify-start gap-5 sm:gap-7 border-t border-[#C6C2C1]/40 mt-6 sm:mt-8">
                {/* Avatars Cluster */}
                <div className="flex items-center gap-3">
                  <div className="flex -space-x-3">
                    {clientAvatars.map((client, idx) => (
                      <div
                        key={idx}
                        className="relative w-10 h-10 rounded-full border-2 border-white overflow-hidden shadow-xs bg-[#E9E8E6]"
                        title={client.name}
                      >
                        <Image
                          src={client.src}
                          alt={client.name}
                          fill
                          sizes="40px"
                          className="object-cover"
                        />
                      </div>
                    ))}
                  </div>
                  <div className="text-left">
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-[#FCB116] text-[#FCB116]" />
                      ))}
                      <span className="text-xs font-bold text-[#151515] ml-1">4.9/5</span>
                    </div>
                    <span className="text-[11px] font-medium text-[#544643]">
                      50+ Verified Client Reviews
                    </span>
                  </div>
                </div>

                {/* Stat 1 */}
                <div className="h-8 w-px bg-[#C6C2C1]/60 hidden sm:block" />

                <div className="flex items-center gap-2.5 text-left">
                  <div className="w-9 h-9 rounded-full bg-[#7C3AED]/10 flex items-center justify-center text-[#7C3AED]">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-sm font-extrabold text-[#151515]">99.9%</div>
                    <div className="text-[11px] font-medium text-[#544643]">Client Satisfaction</div>
                  </div>
                </div>

                {/* Stat 2 */}
                <div className="h-8 w-px bg-[#C6C2C1]/60 hidden sm:block" />

                <div className="flex items-center gap-2.5 text-left">
                  <div className="w-9 h-9 rounded-full bg-[#FCB116]/15 flex items-center justify-center text-[#7C3AED]">
                    <MessageSquareQuote className="w-4 h-4 text-[#7C3AED]" />
                  </div>
                  <div>
                    <div className="text-sm font-extrabold text-[#151515]">100%</div>
                    <div className="text-[11px] font-medium text-[#544643]">On-Time Delivery</div>
                  </div>
                </div>
              </div>
            </RevealOnScroll>
          </div>

          {/* Right Visual Column (Developer with Laptop) */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            {/* Ambient Purple Backlight matching the laptop light */}
            <div className="absolute w-72 h-72 sm:w-96 sm:h-96 rounded-full bg-gradient-to-tr from-[#7C3AED]/25 via-purple-500/15 to-transparent blur-3xl pointer-events-none" />

            <motion.div
              initial={{ opacity: 0, x: 40, scale: 0.95 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
              className="relative w-full max-w-[480px] lg:max-w-none flex items-center justify-center"
            >
              <div className="relative w-full">
                <Image
                  src="/images/testimonials/testimonials-hero-visual.png"
                  alt="Digital experiences and client success - Pep Software"
                  width={620}
                  height={534}
                  priority
                  className="w-full h-auto object-contain drop-shadow-[0_20px_45px_rgba(80,45,109,0.22)] select-none pointer-events-none"
                />
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
