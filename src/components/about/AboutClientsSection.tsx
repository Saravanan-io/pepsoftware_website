"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { RevealOnScroll } from "@/components/shared/RevealOnScroll";

export function AboutClientsSection() {
  const customClients = [
    { name: "Pettagam", imageSrc: "/clients/client-1.png" },
    { name: "Client 2", imageSrc: "/clients/client-2.png" },
    { name: "ISDA", imageSrc: "/clients/client-3.png" },
    { name: "KYRO", imageSrc: "/clients/client-4.png" },
    { name: "Navi's Studio", imageSrc: "/clients/client-5.png" },
    { name: "Client 6", imageSrc: "/clients/client-6.png" },
  ];

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
              We are proud to work with businesses, organizations and entrepreneurs who trust us to bring their digital ideas to life.
            </p>
          </RevealOnScroll>
        </div>

        {/* Client Logo Grid Wall */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
          {customClients.map((client, idx) => (
            <RevealOnScroll key={idx} delay={idx * 0.05}>
              <div className="h-28 sm:h-32 rounded-2xl bg-slate-50/80 hover:bg-white border border-slate-200/80 hover:border-purple-200 p-4 flex items-center justify-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1 group">
                <div className="relative w-full h-full flex items-center justify-center opacity-70 group-hover:opacity-100 transition-opacity">
                  <Image
                    src={client.imageSrc}
                    alt={client.name}
                    width={140}
                    height={50}
                    className="max-h-12 w-auto object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                  />
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <RevealOnScroll delay={0.2}>
            <Link
              href="/work"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#151515] hover:bg-[#502D6D] text-white font-bold text-sm shadow-md transition-all cursor-pointer group"
            >
              <span>View Our Projects</span>
              <ArrowRight className="w-4 h-4 text-[#FCB116] group-hover:translate-x-1 transition-transform" />
            </Link>
          </RevealOnScroll>
        </div>

      </div>
    </section>
  );
}
