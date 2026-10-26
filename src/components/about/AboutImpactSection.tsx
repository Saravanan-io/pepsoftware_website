"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { RevealOnScroll } from "@/components/shared/RevealOnScroll";
import { AnimatedCounter } from "@/components/shared/AnimatedCounter";
import { CosmicSolarSystem } from "./CosmicSolarSystem";

export function AboutImpactSection() {
  const stats = [
    { value: "50+", label: "Projects Delivered", detail: "Mission-critical applications built & deployed." },
    { value: "50+", label: "Businesses Served", detail: "Startups & global enterprises empowered." },
    { value: "5+", label: "Years of Experience", detail: "Continuous full-stack engineering excellence." },
    { value: "10+", label: "Digital Products & Solutions", detail: "Enterprise SaaS & mobile architectures." },
  ];

  return (
    <section className="py-24 lg:py-32 bg-[#0C0418] relative overflow-hidden border-y border-[#502D6D]/50 select-none">
      {/* Cosmic Ambient Deep Purple & Gold Nebulae */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_50%,rgba(80,45,109,0.5),transparent_65%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_40%,rgba(252,177,22,0.12),transparent_55%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_100%,rgba(104,53,143,0.35),transparent_60%)] pointer-events-none" />
      <div className="absolute inset-0 bg-dot-light opacity-10 pointer-events-none" />

      {/* 3D Interactive Solar System, Orbiting Planets & Asteroids */}
      <CosmicSolarSystem />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pointer-events-none">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Left Narrative */}
          <div className="lg:col-span-7 space-y-6 pointer-events-auto">
            <RevealOnScroll>
              <div className="inline-flex items-center gap-2.5 mb-2">
                <span className="w-5 sm:w-6 h-[2px] rounded-full bg-gradient-to-r from-[#D79EFF] to-[#FCB116]" />
                <span className="font-syne text-xs sm:text-sm font-extrabold uppercase tracking-[0.24em] text-[#FCB116]">
                  Our Impact
                </span>
                <span className="w-5 sm:w-6 h-[2px] rounded-full bg-gradient-to-r from-[#FCB116] to-[#D79EFF]" />
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-[1.12] tracking-tight mt-1">
                Experience You Can See in{" "}
                <span className="text-[#FCB116] bg-gradient-to-r from-[#FCB116] via-[#FFE29A] to-[#FCB116] bg-clip-text text-transparent">
                  Our Work.
                </span>
              </h2>

              <p className="text-base sm:text-lg text-[#E3DAF3] leading-relaxed font-normal mt-4">
                Every project adds to our experience, capabilities and understanding of how technology can solve real business problems.
              </p>

              <p className="text-sm sm:text-base text-[#C6B8DE] leading-relaxed font-normal mt-2">
                We believe in verified, honest results. Over the years, our cross-functional team in Erode, Tamil Nadu, has developed reliable software architectures that power mission-critical operations daily.
              </p>

              <div className="pt-4">
                <Link
                  href="/work"
                  className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-[#FCB116] hover:bg-[#EAA00A] text-[#151515] font-extrabold text-sm shadow-xl shadow-[#FCB116]/20 transition-all cursor-pointer group"
                >
                  <span>Explore Our Projects</span>
                  <ArrowRight className="w-4 h-4 text-[#151515] group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </RevealOnScroll>
          </div>

          {/* Right Metric Stat Cards */}
          <div className="lg:col-span-5 pointer-events-auto">
            <RevealOnScroll delay={0.2}>
              <div className="grid grid-cols-2 gap-4 sm:gap-5">
                {stats.map((stat, i) => (
                  <div
                    key={i}
                    className="p-6 sm:p-7 rounded-3xl bg-[#1C0B32]/80 backdrop-blur-xl border border-[#502D6D]/70 hover:border-[#FCB116] text-center shadow-2xl shadow-black/50 hover:shadow-[#502D6D]/40 hover:-translate-y-2 hover:scale-[1.02] transition-all duration-300 group relative overflow-hidden cursor-default"
                  >
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(252,177,22,0.18),transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                    <div className="relative z-10 text-3xl sm:text-4xl font-black text-[#FCB116] group-hover:scale-105 transition-transform duration-300">
                      <AnimatedCounter value={stat.value} />
                    </div>
                    <div className="relative z-10 text-xs sm:text-sm font-bold text-white mt-2 group-hover:text-[#FCB116] transition-colors leading-tight">
                      {stat.label}
                    </div>
                    <p className="relative z-10 text-[10px] text-slate-400 mt-1 line-clamp-1">
                      {stat.detail}
                    </p>

                    <div className="absolute top-2.5 right-2.5 w-1.5 h-1.5 rounded-full bg-[#FCB116] opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-[0_0_8px_#FCB116]" />
                  </div>
                ))}
              </div>
            </RevealOnScroll>
          </div>

        </div>
      </div>
    </section>
  );
}
