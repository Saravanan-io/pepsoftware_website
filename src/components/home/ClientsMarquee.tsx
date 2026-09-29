"use client";

import Image from "next/image";
import { Clients3DBackground } from "./Clients3DBackground";

export function ClientsMarquee() {
  const customClients = [
    {
      name: "Pettagam",
      imageSrc: "/clients/client-1.png",
    },
    {
      name: "Client 2",
      imageSrc: "/clients/client-2.png",
    },
    {
      name: "ISDA",
      imageSrc: "/clients/client-3.png",
    },
    {
      name: "KYRO",
      imageSrc: "/clients/client-4.png",
    },
    {
      name: "Navi's Studio",
      imageSrc: "/clients/client-5.png",
    },
    {
      name: "Client 6",
      imageSrc: "/clients/client-6.png",
    },
  ];

  // 4x duplication ensures perfectly smooth infinite -50% marquee loop with larger cards
  const marqueeItems = [
    ...customClients,
    ...customClients,
    ...customClients,
    ...customClients,
  ];

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
        <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-tight">
          A few of the amazing clients{" "}
          <span className="bg-gradient-to-r from-[#D79EFF] via-[#FCB116] to-[#FFE29A] bg-clip-text text-transparent">
            we've worked with.
          </span>
        </h3>

        <p className="text-xs sm:text-sm text-[#D4C7EC] mt-2.5 max-w-xl mx-auto font-normal">
          Delivering high-performance digital experiences, bespoke mobile applications, and enterprise software systems.
        </p>
      </div>

      {/* 3D Marquee Carousel Row */}
      <div className="relative w-full overflow-hidden py-4">
        {/* Left & Right Cosmic Infinity Edge Fade Gradients */}
        <div className="absolute left-0 top-0 bottom-0 w-24 sm:w-48 bg-gradient-to-r from-[#0C0418] via-[#0C0418]/85 to-transparent z-20 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 sm:w-48 bg-gradient-to-l from-[#0C0418] via-[#0C0418]/85 to-transparent z-20 pointer-events-none" />

        <div className="flex items-center gap-7 sm:gap-9 w-max animate-marquee py-3 hover:[animation-play-state:paused]">
          {marqueeItems.map((client, idx) => (
            <div
              key={`${client.name}-${idx}`}
              className="flex items-center justify-center w-[230px] sm:w-[270px] h-[98px] sm:h-[114px] rounded-2xl sm:rounded-3xl bg-[#FFFFFF] border-2 border-[#502D6D]/45 hover:border-[#FCB116] shadow-xl shadow-black/50 hover:shadow-2xl hover:shadow-[#502D6D]/40 hover:-translate-y-2.5 hover:scale-[1.04] transition-all duration-300 shrink-0 px-6 py-4 overflow-hidden relative group cursor-pointer"
            >
              {/* Subtle ambient card glow on hover */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[#502D6D]/[0.08] to-[#FCB116]/[0.08] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

              {/* Corner starlight glint */}
              <div className="absolute top-2.5 right-2.5 w-1.5 h-1.5 rounded-full bg-[#FCB116] opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-[0_0_8px_#FCB116]" />

              <div className="relative w-full h-full flex items-center justify-center">
                <Image
                  src={client.imageSrc}
                  alt={client.name}
                  width={210}
                  height={75}
                  loading="lazy"
                  className="max-h-[64px] sm:max-h-[74px] w-auto max-w-[88%] object-contain contrast-110 filter group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
