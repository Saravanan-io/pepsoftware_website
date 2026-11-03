"use client";

import { Clients3DBackground } from "@/components/home/Clients3DBackground";
import { CLIENTS_DATA } from "@/data/clients";
import { ClientLogoCard } from "@/components/shared/ClientLogoCard";

export function ClientLogoWallSection() {
  // Duplication ensures a perfectly smooth infinite -50% marquee loop with all 33 clients
  const marqueeItems = [...CLIENTS_DATA, ...CLIENTS_DATA];

  return (
    <section className="relative z-10 py-20 lg:py-28 bg-[#0C0418] border-y border-[#502D6D]/50 overflow-hidden select-none">
      {/* Deep Cosmic Purple & Amber Ambient Nebulae */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_35%,rgba(80,45,109,0.55),transparent_70%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_65%,rgba(252,177,22,0.14),transparent_60%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_65%,rgba(104,53,143,0.3),transparent_65%)] pointer-events-none" />
      <div className="absolute inset-0 bg-dot-light opacity-10 pointer-events-none" />

      {/* 3D Floating Gyroscope Rings, Tumbling Crystals & Flickering Stars Canvas */}
      <Clients3DBackground />

      {/* Section Header Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 sm:mb-12 text-center">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-tight">
          Businesses We&apos;ve Had the{" "}
          <span className="text-[#FCB116]">
            Opportunity to Work With.
          </span>
        </h2>

        <p className="text-xs sm:text-sm text-[#D4C7EC] mt-2.5 max-w-xl mx-auto font-normal">
          We&apos;re proud to have worked with businesses and organizations across different industries.
        </p>
      </div>

      {/* 3D Marquee Carousel Row */}
      <div className="relative w-full overflow-hidden py-4">
        {/* Left & Right Cosmic Infinity Edge Fade Gradients */}
        <div className="absolute left-0 top-0 bottom-0 w-24 sm:w-48 bg-gradient-to-r from-[#0C0418] via-[#0C0418]/85 to-transparent z-20 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 sm:w-48 bg-gradient-to-l from-[#0C0418] via-[#0C0418]/85 to-transparent z-20 pointer-events-none" />

        <div
          className="flex items-center gap-7 sm:gap-9 w-max animate-marquee py-3 hover:[animation-play-state:paused]"
          style={{ animationDuration: "65s" }}
        >
          {marqueeItems.map((client, idx) => (
            <ClientLogoCard
              key={`${client.name}-${idx}`}
              client={client}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
