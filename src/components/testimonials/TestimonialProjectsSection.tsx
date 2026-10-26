"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ExternalLink, Layers } from "lucide-react";
import { WordReveal, ParagraphReveal } from "@/components/shared/WordReveal";
import { RevealOnScroll } from "@/components/shared/RevealOnScroll";

export function TestimonialProjectsSection() {
  const verifiedProjects = [
    {
      client: "Lenient Technologies",
      projectType: "Service Management App",
      category: "Mobile Application",
      description:
        "Custom enterprise mobile app engineered for internal service calls management, inventory tracking, and field technician workflow synchronization.",
      image: "/images/portfolio/Lenient-mobile-app-mockup.png",
      slug: "lenient-technologies-app",
      accent: "bg-[#502D6D]",
    },
    {
      client: "Pravin Bottelings",
      projectType: "Business Website",
      category: "Website Development",
      description:
        "Modern, responsive industrial manufacturing website showcasing high-capacity bottle blow-moulding capabilities and digital inquiries.",
      image: "/images/portfolio/Pravin-Bottelings.png",
      slug: "pravin-bottelings",
      liveUrl: "https://pravinbottelings.com/",
      accent: "bg-[#FCB116]",
    },
    {
      client: "Hakir Pharmaceuticals",
      projectType: "Corporate Website",
      category: "Brand & Corporate Web",
      description:
        "Clean, compliance-focused pharmaceutical corporate website engineered to present products and clinical formulation portfolios.",
      image: "/images/portfolio/Hakir-1.png",
      slug: "hakir-pharmaceuticals",
      liveUrl: "https://hakirpharmaceuticals.com/",
      accent: "bg-[#502D6D]",
    },
    {
      client: "The Elite Mutual Funds",
      projectType: "One-Page Platform",
      category: "Financial Services",
      description:
        "Fast, accessible, and high-converting single-page investment platform with interactive calculator and investor consultation flows.",
      image: "/images/portfolio/Elite.png",
      slug: "the-elite-mutual-funds",
      accent: "bg-[#FCB116]",
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-[#FFFFFF] relative overflow-hidden border-b border-[#C6C2C1]/40">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[550px] bg-gradient-to-r from-[#502D6D]/[0.03] to-[#FCB116]/[0.04] blur-[160px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <RevealOnScroll>
            <WordReveal
              as="h2"
              text="See What We Built Together."
              gradientWords="Built Together."
              gradientClassName="text-[#502D6D]"
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#151515]"
            />

            <ParagraphReveal
              text="Testimonials become more meaningful when you can see the work behind them."
              delay={0.15}
              className="text-base sm:text-lg text-[#544643] leading-relaxed max-w-xl mx-auto mt-4"
            />
          </RevealOnScroll>
        </div>

        {/* 4 Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-14">
          {verifiedProjects.map((proj, idx) => (
            <RevealOnScroll key={proj.slug} delay={0.1 * (idx + 1)}>
              <div className="rounded-[32px] bg-[#F7F8F8] border border-[#C6C2C1]/60 hover:border-[#502D6D] hover:shadow-2xl hover:shadow-[#502D6D]/12 transition-all duration-300 p-6 sm:p-8 flex flex-col justify-between group overflow-hidden">
                <div>
                  {/* Top Header: Client & Category */}
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-5">
                    <div>
                      <h3 className="font-syne text-xl sm:text-2xl font-extrabold text-[#151515] group-hover:text-[#502D6D] transition-colors">
                        {proj.client}
                      </h3>
                      <p className="text-xs sm:text-sm font-semibold text-[#502D6D] mt-0.5">
                        {proj.projectType}
                      </p>
                    </div>

                    <span className="text-xs font-semibold text-[#544643]">
                      {proj.category}
                    </span>
                  </div>

                  {/* Project Screenshot / Visual */}
                  <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden bg-white border border-[#C6C2C1]/50 mb-6 flex items-center justify-center p-3 shadow-inner group-hover:border-[#502D6D]/40 transition-colors">
                    <Image
                      src={proj.image}
                      alt={`${proj.client} - ${proj.projectType}`}
                      fill
                      sizes="(max-width: 768px) 100vw, 550px"
                      className="object-contain p-2 group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  <p className="text-sm text-[#544643] leading-relaxed mb-6 font-normal">
                    {proj.description}
                  </p>
                </div>

                {/* Bottom Action Link */}
                <div className="pt-4 border-t border-[#C6C2C1]/50 flex items-center justify-between gap-3">
                  <Link
                    href={`/work/${proj.slug}`}
                    className="inline-flex items-center gap-2 text-sm font-bold text-[#151515] group-hover:text-[#502D6D] transition-colors"
                  >
                    <span>View Case Study</span>
                    <ArrowRight className="w-4 h-4 text-[#FCB116] transition-transform group-hover:translate-x-1" />
                  </Link>

                  {proj.liveUrl && (
                    <a
                      href={proj.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#544643] hover:text-[#502D6D] transition-colors"
                    >
                      <span>Live Site</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>

        {/* CTA: Explore All Projects */}
        <RevealOnScroll delay={0.2}>
          <div className="text-center pt-4">
            <Link
              href="/work"
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-[#151515] text-[#F7F8F8] font-bold text-sm hover:bg-[#502D6D] shadow-lg shadow-[#151515]/10 hover:shadow-[#502D6D]/20 transition-all cursor-pointer group"
            >
              <span>Explore All Projects</span>
              <ArrowRight className="w-4 h-4 text-[#FCB116] transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
