"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ClientItem } from "@/types";

interface ClientLogoCardProps {
  client: ClientItem;
  className?: string;
}

export function ClientLogoCard({
  client,
  className = "",
}: ClientLogoCardProps) {
  const [imgError, setImgError] = useState(false);

  // Live site icon URL
  const iconUrl = client.imageSrc
    ? client.imageSrc
    : client.domain
    ? `https://www.google.com/s2/favicons?domain=${client.domain}&sz=128`
    : null;

  const cardContent = (
    <div
      className={`flex items-center justify-center w-[230px] sm:w-[270px] h-[98px] sm:h-[114px] rounded-2xl sm:rounded-3xl bg-[#FFFFFF] border-2 border-[#502D6D]/40 hover:border-[#FCB116] shadow-xl shadow-black/50 hover:shadow-2xl hover:shadow-[#502D6D]/40 hover:-translate-y-2 hover:scale-[1.03] transition-all duration-300 shrink-0 px-5 py-3.5 overflow-hidden relative group cursor-pointer select-none ${className}`}
    >
      {/* Ambient hover glow */}
      <div className="absolute inset-0 bg-gradient-to-tr from-[#502D6D]/[0.08] to-[#FCB116]/[0.08] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

      {/* Starlight Corner Glint */}
      <div className="absolute top-2.5 right-2.5 w-1.5 h-1.5 rounded-full bg-[#FCB116] opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-[0_0_8px_#FCB116]" />

      {client.hasLiveSite && iconUrl && !imgError ? (
        /* If live site link available: Icon image + Title */
        <div className="flex items-center gap-3.5 w-full justify-center px-1">
          <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-slate-50 border border-slate-200/80 flex items-center justify-center shrink-0 overflow-hidden p-1.5 shadow-sm group-hover:border-[#502D6D]/40 group-hover:shadow transition-all duration-300">
            {client.imageSrc ? (
              <Image
                src={client.imageSrc}
                alt={`${client.name} logo`}
                width={48}
                height={48}
                loading="lazy"
                className="w-full h-full object-contain filter group-hover:scale-105 transition-transform duration-300"
              />
            ) : (
              /* eslint-disable-next-line @next/next/no-img-element */
              <img
                src={iconUrl}
                alt={`${client.name} icon`}
                width={40}
                height={40}
                loading="lazy"
                className="w-full h-full object-contain filter group-hover:scale-105 transition-transform duration-300"
                onError={() => setImgError(true)}
              />
            )}
          </div>

          <div className="flex flex-col min-w-0 text-left">
            <span className="font-syne font-black text-[14px] sm:text-[16px] tracking-tight text-[#151515] group-hover:text-[#502D6D] transition-colors leading-tight line-clamp-2">
              {client.name}
            </span>
          </div>
        </div>
      ) : (
        /* If live site link NOT available: Just Title Enough */
        <div className="flex items-center justify-center w-full h-full text-center px-3">
          <span className="font-syne font-black text-[15px] sm:text-[18px] tracking-tight text-[#151515] group-hover:text-[#502D6D] transition-colors leading-tight">
            {client.name}
          </span>
        </div>
      )}
    </div>
  );

  if (client.hasLiveSite && client.liveUrl) {
    return (
      <a
        href={client.liveUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`${client.name} website`}
        className="block shrink-0 focus:outline-none"
      >
        {cardContent}
      </a>
    );
  }

  return cardContent;
}
