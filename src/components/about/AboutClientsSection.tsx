"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight, ChevronDown } from "lucide-react";
import { RevealOnScroll } from "@/components/shared/RevealOnScroll";
import { CLIENTS_DATA } from "@/data/clients";
import { ClientLogoCard } from "@/components/shared/ClientLogoCard";

export function AboutClientsSection() {
  const [showAll, setShowAll] = useState(false);
  const displayedClients = showAll ? CLIENTS_DATA : CLIENTS_DATA.slice(0, 18);

  return (
    <section className="py-20 lg:py-28 bg-[#FFFFFF] relative overflow-hidden border-b border-[#C6C2C1]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          <RevealOnScroll>
            <div className="inline-flex items-center gap-2.5 mb-2">
              <span className="w-5 sm:w-6 h-[2px] rounded-full bg-gradient-to-r from-orange-400 to-[#7C3AED]" />
              <span className="font-syne text-xs sm:text-sm font-extrabold uppercase tracking-[0.2em] text-[#502D6D]">
                Businesses We&apos;ve Worked With
              </span>
              <span className="w-5 sm:w-6 h-[2px] rounded-full bg-gradient-to-r from-[#7C3AED] to-orange-400" />
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#151515] tracking-tight leading-tight mt-1">
              Trusted by Businesses{" "}
              <span className="text-[#502D6D] bg-gradient-to-r from-[#502D6D] via-[#7C3AED] to-[#9333EA] bg-clip-text text-transparent">
                Across Industries.
              </span>
            </h2>

            <p className="mt-4 text-base sm:text-lg text-[#544643] leading-relaxed max-w-2xl mx-auto">
              We are proud to work with businesses, organizations, and entrepreneurs who trust us to bring their digital ideas to life.
            </p>
          </RevealOnScroll>
        </div>

        {/* Client Logo Grid Wall */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 sm:gap-5 justify-items-center">
          {displayedClients.map((client, idx) => (
            <RevealOnScroll key={`${client.name}-${idx}`} delay={(idx % 6) * 0.05}>
              <ClientLogoCard
                client={client}
                className="w-full max-w-[240px] sm:max-w-none h-[96px] shadow-sm hover:shadow-lg border-slate-200/90"
              />
            </RevealOnScroll>
          ))}
        </div>

        {/* Action Controls */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
          {CLIENTS_DATA.length > 18 && (
            <button
              onClick={() => setShowAll(!showAll)}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-slate-100 hover:bg-slate-200 text-[#151515] font-bold text-xs uppercase tracking-wider transition-all cursor-pointer"
            >
              <span>{showAll ? "Show Less" : `View All ${CLIENTS_DATA.length} Clients`}</span>
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-300 ${
                  showAll ? "rotate-180" : ""
                }`}
              />
            </button>
          )}

          <Link
            href="/work"
            className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-[#151515] hover:bg-[#502D6D] text-white font-bold text-xs uppercase tracking-wider shadow-md transition-all cursor-pointer group"
          >
            <span>View Our Case Studies</span>
            <ArrowRight className="w-4 h-4 text-[#FCB116] group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}
