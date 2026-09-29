"use client";

import Link from "next/link";
import { ArrowRight, Home, ChevronRight } from "lucide-react";
import { ServiceFeaturesVisual } from "./ServiceFeaturesVisual";
import { WordReveal, ParagraphReveal } from "@/components/shared/WordReveal";

interface ServiceHeroProps {
  badge: string;
  title: string;
  highlight?: string;
  gradientWord?: string;
  description: string;
  bullets?: string[];
  ctaText?: string;
  ctaHref?: string;
  breadcrumbs?: { label: string; href: string }[];
  visualImage?: string;
  visualAlt?: string;
}

export function ServiceHero({
  badge,
  title,
  highlight,
  gradientWord,
  description,
  bullets,
  ctaText = "Get a Free Quote",
  ctaHref = "/contact",
  breadcrumbs,
  visualImage,
  visualAlt,
}: ServiceHeroProps) {
  const gradientText = highlight || gradientWord;
  return (
    <section className="relative pt-12 pb-20 bg-[#F7F8F8] overflow-hidden border-b border-[#C6C2C1]/40">
      <div className="absolute inset-0 bg-dot-light opacity-30 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumbs */}
        {breadcrumbs && (
          <nav className="flex items-center gap-2 text-xs text-[#544643] mb-8">
            <Link href="/" className="flex items-center gap-1 hover:text-[#C86A28] transition-colors">
              <Home className="w-3.5 h-3.5" />
              <span>Home</span>
            </Link>
            {breadcrumbs.map((bc) => (
              <div key={bc.label} className="flex items-center gap-2">
                <ChevronRight className="w-3 h-3 text-[#C6C2C1]" />
                <Link href={bc.href} className="hover:text-[#C86A28] transition-colors font-medium">
                  {bc.label}
                </Link>
              </div>
            ))}
          </nav>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2.5">
              <span className="w-4 h-[2px] rounded-full bg-gradient-to-r from-[#502D6D] to-[#FCB116]" />
              <span className="font-syne text-xs sm:text-sm font-extrabold uppercase tracking-[0.24em] bg-gradient-to-r from-[#502D6D] via-[#8A3DA8] to-[#FCB116] bg-clip-text text-transparent">
                {badge}
              </span>
            </div>

            <WordReveal
              as="h1"
              text={[title, gradientText].filter(Boolean).join(" ")}
              gradientWords={gradientText}
              gradientClassName="text-transparent bg-clip-text bg-gradient-to-r from-[#544643] to-[#C86A28]"
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#151515] leading-[1.06]"
            />

            <ParagraphReveal
              text={description}
              delay={0.15}
              className="text-base sm:text-lg text-[#544643] leading-relaxed"
            />

            {bullets && (
              <ul className="space-y-2.5">
                {bullets.map((b) => (
                  <li key={b} className="flex items-center gap-2.5 text-sm font-semibold text-[#151515]">
                    <div className="w-5 h-5 rounded-md bg-[#E9E8E6] text-[#C86A28] border border-[#C6C2C1] flex items-center justify-center shrink-0">
                      <svg className="w-3 h-3" fill="none" viewBox="0 0 12 10">
                        <path d="M1 5l3.5 3.5L11 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    {b}
                  </li>
                ))}
              </ul>
            )}

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link href={ctaHref} className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#151515] text-[#F7F8F8] font-bold text-sm hover:bg-[#544643] shadow-md shadow-[#151515]/10 transition-all">
                <span>{ctaText}</span>
                <ArrowRight className="w-4 h-4 text-[#C86A28]" />
              </Link>
              <Link
                href="/work"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#EFF0EF] border border-[#C6C2C1] text-[#151515] font-semibold text-sm hover:border-[#151515] shadow-xs transition-all"
              >
                View Our Work
              </Link>
            </div>
          </div>

          {/* Right: 3D Feature Highlights Visual with Smooth Animation */}
          <div className="relative flex items-center justify-center mt-8 lg:mt-0">
            <ServiceFeaturesVisual
              imageSrc={visualImage}
              alt={visualAlt || title}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
