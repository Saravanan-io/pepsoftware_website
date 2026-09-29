"use client";

import { useRef, useState } from "react";
import Image from "next/image";

export function PortfolioHeroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <div className="relative w-full max-w-5xl mx-auto group">
      {/* Main Video Frame with Website-Matching Border and Shadow */}
      <div className="relative aspect-video w-full rounded-2xl sm:rounded-[36px] overflow-hidden bg-[#FAF9F7] border border-[#C6C2C1]/80 shadow-xl shadow-black/[0.05] transition-all duration-300">
        {/* HTML5 Video Element */}
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="w-full h-full object-cover"
          onClick={togglePlay}
        >
          <source src="/portfolio-hero.mp4" type="video/mp4" />
          <source
            src="/Robotic_hand_displaying_holograp%E2%80%A6_20260925222533.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>

        {/* PEP Software Logo Watermark - Placed directly over the Gemini watermark to hide it */}
        <div
          className="absolute z-20 pointer-events-none select-none w-[5.6%] aspect-square min-w-[32px] max-w-[58px] drop-shadow-[0_4px_12px_rgba(0,0,0,0.5)]"
          style={{
            left: "90.6%",
            top: "82.0%",
            transform: "translate(-50%, -50%)",
          }}
          aria-label="PEP Software Logo"
        >
          <Image
            src="/pep-icon.png"
            alt="PEP Software Logo"
            fill
            sizes="58px"
            priority
            className="object-contain"
          />
        </div>
      </div>
    </div>
  );
}
