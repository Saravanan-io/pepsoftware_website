"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ShieldCheck } from "lucide-react";
import { RevealOnScroll } from "@/components/shared/RevealOnScroll";
import { WordReveal, ParagraphReveal } from "@/components/shared/WordReveal";
import { cn } from "@/lib/utils";

export interface PillarItem {
  num: string;
  title: string;
  description: string;
  image: string;
  alt: string;
  href: string;
  blobGradient: string;
  cornerBorder: string;
  buttonBg: string;
}

const DEFAULT_PILLARS: PillarItem[] = [
  {
    num: "01",
    title: "Tailored Solutions",
    description:
      "Every digital product is custom crafted to your exact business goals, target audience, and market niche.",
    image: "/images/why-choose/tailored-solutions-3d.jpg",
    alt: "3D Target Dartboard Bullseye – Tailored Solutions",
    href: "/services/website-design-development",
    blobGradient: "from-amber-200/70 via-orange-100/50 to-transparent",
    cornerBorder: "border-amber-400/90 group-hover:border-amber-500",
    buttonBg: "bg-amber-100 text-amber-900 group-hover:bg-[#FCB116] group-hover:text-white",
  },
  {
    num: "02",
    title: "User-Centered Design",
    description:
      "We blend visual branding with empathetic UI/UX principles to build interfaces that visitors love and trust.",
    image: "/images/why-choose/user-centered-design-3d.jpg",
    alt: "3D Artist Paint Palette – User-Centered Design",
    href: "/services/ui-ux-design",
    blobGradient: "from-purple-200/70 via-fuchsia-100/50 to-transparent",
    cornerBorder: "border-[#502D6D]/90 group-hover:border-[#68358F]",
    buttonBg: "bg-purple-100 text-[#502D6D] group-hover:bg-[#502D6D] group-hover:text-white",
  },
  {
    num: "03",
    title: "Innovation-Driven Approach",
    description:
      "Modern frameworks ensuring blazing fast performance, ironclad security, and future-proof scalability.",
    image: "/images/why-choose/innovation-approach-3d.jpg",
    alt: "3D Glowing Innovation Lightbulb – Innovation-Driven Approach",
    href: "/services/mobile-app-design-development",
    blobGradient: "from-yellow-200/70 via-amber-100/50 to-transparent",
    cornerBorder: "border-[#FCB116]/90 group-hover:border-[#FCB116]",
    buttonBg: "bg-yellow-100 text-amber-900 group-hover:bg-[#FCB116] group-hover:text-white",
  },
  {
    num: "04",
    title: "Transparent Workflow",
    description:
      "Predictable milestones, regular updates, and collaborative project management from concept to launch.",
    image: "/images/why-choose/transparent-workflow-3d.jpg",
    alt: "3D Isometric Circular Refresh Loop – Transparent Workflow",
    href: "/contact",
    blobGradient: "from-violet-200/70 via-purple-100/50 to-transparent",
    cornerBorder: "border-purple-600/90 group-hover:border-purple-700",
    buttonBg: "bg-violet-100 text-purple-900 group-hover:bg-[#68358F] group-hover:text-white",
  },
];

interface ModernWhyChooseSectionProps {
  badge?: string;
  title?: string;
  gradientWord?: string;
  description?: string;
  pillars?: PillarItem[];
  className?: string;
  id?: string;
}

export function ModernWhyChooseSection({
  badge = "WHY CHOOSE PEP SOFTWARE",
  title = "Built for Quality.",
  gradientWord = "Engineered to Scale.",
  description = "We combine creative artistry with rigorous engineering to deliver digital solutions that give your brand a lasting competitive edge.",
  pillars = DEFAULT_PILLARS,
  className,
  id = "why-choose-pep",
}: ModernWhyChooseSectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "py-20 lg:py-28 bg-[#F7F8F8] relative overflow-hidden border-t border-[#C6C2C1]/40",
        className
      )}
    >
      {/* Ambient Logo-Themed Glow Orbs */}
      <div className="absolute top-10 -left-20 w-[550px] h-[550px] bg-[#502D6D]/[0.05] rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 -right-20 w-[550px] h-[550px] bg-[#FCB116]/[0.07] rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute inset-0 bg-dot-light opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header matching user uploaded image */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <RevealOnScroll>
            <div className="inline-flex items-center gap-2 mb-3">
              <ShieldCheck className="w-4 h-4 text-[#FCB116] shrink-0" />
              <span className="font-syne text-xs sm:text-sm font-extrabold uppercase tracking-[0.24em] bg-gradient-to-r from-[#502D6D] via-[#8A3DA8] to-[#FCB116] bg-clip-text text-transparent">
                {badge}
              </span>
            </div>

            <WordReveal
              as="h2"
              text={`${title} ${gradientWord}`}
              gradientWords={gradientWord}
              gradientClassName="text-transparent bg-clip-text bg-gradient-to-r from-[#502D6D] via-[#C86A28] to-[#FCB116]"
              className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#151515] leading-[1.12] tracking-tight mt-1"
            />

            <ParagraphReveal
              text={description}
              delay={0.12}
              className="text-sm sm:text-base text-[#544643] leading-relaxed mt-4 max-w-2xl mx-auto font-normal"
            />
          </RevealOnScroll>
        </div>

        {/* 4 Modern 3D Floating Illustrated Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7">
          {pillars.map((pillar, idx) => (
            <RevealOnScroll key={pillar.title} delay={idx * 0.09}>
              <Link
                href={pillar.href}
                className="group relative flex flex-col justify-between h-full rounded-[32px] bg-white/95 backdrop-blur-xl border border-white/80 p-6 sm:p-7 shadow-[0_16px_40px_rgba(80,45,109,0.05),0_2px_8px_rgba(0,0,0,0.03)] hover:shadow-[0_24px_55px_rgba(80,45,109,0.12)] hover:-translate-y-2 transition-all duration-400 overflow-hidden cursor-pointer"
              >
                {/* Top Organic Pastel Liquid Fluid Blob */}
                <div
                  className={cn(
                    "absolute -top-8 -left-8 w-40 h-40 rounded-[45%_55%_65%_35%/40%_50%_60%_70%] blur-sm pointer-events-none transition-all duration-500 group-hover:scale-120 group-hover:rotate-6 bg-gradient-to-br opacity-80 group-hover:opacity-100",
                    pillar.blobGradient
                  )}
                />

                {/* Subtle Card Background Glow on Hover */}
                <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-transparent to-white/80 pointer-events-none" />

                {/* Top Row: 3D Floating Icon */}
                <div className="relative z-10 flex items-start mb-6">
                  {/* 3D Floating Clay Icon */}
                  <div className="relative w-20 h-20 sm:w-22 sm:h-22 rounded-2xl overflow-hidden drop-shadow-[0_10px_20px_rgba(0,0,0,0.08)] group-hover:scale-105 group-hover:-rotate-3 transition-transform duration-400">
                    <Image
                      src={pillar.image}
                      alt={pillar.alt}
                      fill
                      sizes="(max-width: 640px) 80px, 90px"
                      className="object-contain"
                      priority={idx < 2}
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="relative z-10 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-[#151515] group-hover:text-[#502D6D] transition-colors mb-2.5 leading-snug">
                      {pillar.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#544643] leading-relaxed font-normal">
                      {pillar.description}
                    </p>
                  </div>

                  {/* Bottom Action Row: Learn More + Arrow Pill */}
                  <div className="flex items-center gap-2 pt-6 mt-4 border-t border-gray-100/80">
                    <span className="text-xs font-bold text-[#151515] group-hover:text-[#502D6D] transition-colors">
                      Learn More
                    </span>
                    <div
                      className={cn(
                        "w-6 h-6 rounded-full flex items-center justify-center transition-all duration-300 group-hover:translate-x-1 shadow-2xs ml-auto",
                        pillar.buttonBg
                      )}
                    >
                      <ArrowRight className="w-3.5 h-3.5" />
                    </div>
                  </div>
                </div>

                {/* Bottom-right Corner Accent Curve Border matching reference image */}
                <div
                  className={cn(
                    "absolute bottom-0 right-0 w-24 h-24 pointer-events-none rounded-br-[32px] border-b-[3.5px] border-r-[3.5px] transition-all duration-300",
                    pillar.cornerBorder
                  )}
                />
              </Link>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
