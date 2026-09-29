"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Rocket,
  Users,
  BarChart3,
  Play,
  Pause,
} from "lucide-react";
import { WordReveal, ParagraphReveal } from "@/components/shared/WordReveal";

export function HeroContent() {
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
    <section
      style={{
        position: "relative",
        width: "100%",
        minHeight: "100vh",
        overflow: "hidden",
        background: "#F7F8F8",
      }}
      className="flex flex-col justify-center pt-24 pb-16 lg:py-0 select-none"
    >
      {/* Background shapes & PEP logo ambient glows */}
      <div
        className="absolute inset-0 pointer-events-none overflow-hidden"
        style={{ transform: "translateZ(0)" }}
      >
        {/* Official PEP logo ambient lighting */}
        <div className="absolute -top-[5%] right-[10%] w-[550px] h-[550px] bg-[#502D6D]/[0.09] blur-[150px] rounded-full pointer-events-none" />
        <div className="absolute top-[35%] -left-[10%] w-[600px] h-[600px] bg-[#FCB116]/[0.10] blur-[140px] rounded-full pointer-events-none" />
        <div className="absolute -bottom-[20%] left-[25%] w-[500px] h-[500px] bg-[#C86A28]/[0.06] blur-[130px] rounded-full pointer-events-none" />

        <div className="absolute -top-32 right-0 w-[40%] h-[600px] bg-gradient-to-br from-[#E7EBEA] via-[#EFF0EF] to-[#E9E8E6] opacity-80 blur-[4px] rounded-bl-full transform rotate-12 scale-150 origin-top-right mix-blend-multiply" />
        <div className="absolute bottom-0 right-0 w-full h-[60%] overflow-hidden">
          <div className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] border border-[#502D6D]/15 rounded-full" />
          <div className="absolute bottom-[-10%] right-[10%] w-[500px] h-[500px] bg-gradient-to-tr from-[#E9E8E6]/80 via-[#502D6D]/5 to-transparent rounded-full" />
        </div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] bg-gradient-to-tr from-[#FCB116]/15 to-transparent rounded-full blur-[2px]" />
        <div className="absolute top-[20%] right-[20%] w-32 h-32 opacity-30">
          <div
            className="w-full h-full"
            style={{
              backgroundImage: "radial-gradient(#C6C2C1 2px, transparent 2px)",
              backgroundSize: "16px 16px",
            }}
          />
        </div>
        <div className="absolute bottom-[10%] left-[60%] w-32 h-20 opacity-30">
          <div
            className="w-full h-full"
            style={{
              backgroundImage: "radial-gradient(#C6C2C1 2px, transparent 2px)",
              backgroundSize: "16px 16px",
            }}
          />
        </div>
        <svg
          className="absolute top-0 right-0 w-full h-full"
          viewBox="0 0 1000 1000"
          fill="none"
          preserveAspectRatio="xMidYMid slice"
        >
          <path
            d="M750 250 Q 800 350 900 400"
            stroke="#C6C2C1"
            strokeWidth="1.5"
          />
          <circle cx="750" cy="250" r="5" fill="#502D6D" />
          <circle cx="900" cy="400" r="5" fill="#FCB116" />
          <path
            d="M150 900 Q 200 950 300 950"
            stroke="#C6C2C1"
            strokeWidth="1.5"
          />
          <circle cx="150" cy="900" r="5" fill="#502D6D" />
        </svg>
      </div>

      {/* Main content grid */}
      <div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 w-full h-full flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center w-full my-auto py-8 lg:py-12">
          {/* ── Left: text ─────────────────────────────────────────────── */}
          <div className="lg:col-span-5 xl:col-span-5 space-y-6 relative z-20">
            <WordReveal
              as="h1"
              text="Digital Excellence Starts Here."
              gradientWords={["Excellence", "Here."]}
              gradientClassName="text-transparent bg-clip-text bg-gradient-to-r from-[#502D6D] via-[#C86A28] to-[#FCB116]"
              delay={0.15}
              staggerDelay={0.06}
              duration={0.65}
              className="text-[44px] sm:text-[54px] lg:text-[60px] leading-[1.06] font-extrabold tracking-tight text-[#151515]"
            />

            <ParagraphReveal
              text="We build powerful web, mobile and software solutions that help businesses grow, automate and stay ahead in the digital world."
              delay={0.35}
              duration={0.6}
              staggerDelay={0.018}
              className="text-[17px] sm:text-[19px] text-[#544643] font-medium leading-relaxed max-w-[560px]"
            />

            <motion.div
              initial={{ opacity: 0, y: 22, filter: "blur(4px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{
                duration: 0.65,
                delay: 0.5,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="flex flex-wrap items-center gap-4 pt-2"
            >
              <Link
                href="/work"
                className="group inline-flex items-center gap-4 px-2 py-2 pr-6 rounded-full bg-[#151515] text-[#F7F8F8] hover:bg-[#502D6D] transition-all duration-300 shadow-lg shadow-[#151515]/10 hover:shadow-[#502D6D]/25 border border-transparent hover:border-[#FCB116]/35"
              >
                <span className="pl-6 text-[16px] font-semibold">
                  Our Portfolio
                </span>
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#502D6D] to-[#FCB116] flex items-center justify-center text-white group-hover:scale-105 group-hover:translate-x-0.5 transition-all shadow-xs">
                  <ArrowRight className="w-5 h-5" />
                </div>
              </Link>
              <Link
                href="/services"
                className="group inline-flex items-center gap-4 px-8 py-3 rounded-full bg-[#FFFFFF] border-[1.5px] border-[#C6C2C1] text-[#151515] hover:border-[#502D6D] hover:text-[#502D6D] transition-colors shadow-sm"
              >
                <span className="text-[16px] font-semibold">
                  Explore Services
                </span>
                <ArrowRight className="w-5 h-5 text-[#FCB116] group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 22, filter: "blur(4px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{
                duration: 0.65,
                delay: 0.6,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="flex flex-wrap items-center gap-6 sm:gap-8 pt-6"
            >
              {[
                { Icon: Rocket, label: "Innovative\nSolutions" },
                { Icon: Users, label: "Client Focused\nApproach" },
                { Icon: BarChart3, label: "Results\nDriven" },
              ].map(({ Icon, label }) => (
                <div key={label} className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-[#E9E8E6] border border-[#C6C2C1] flex items-center justify-center text-[#C86A28] shadow-xs">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-[13px] font-bold text-[#151515] leading-tight whitespace-pre-line">
                    {label}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* ── Right: Robotic Hand Hologram Video ──────────────────────── */}
          <div className="lg:col-span-7 xl:col-span-7 relative z-20 flex justify-center lg:justify-end items-center w-full">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.25,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="relative w-full max-w-[680px] xl:max-w-[760px] group"
            >
              {/* Decorative Ambient Aura behind video */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-[#502D6D]/15 via-[#FCB116]/10 to-transparent rounded-[44px] blur-2xl pointer-events-none -z-10 group-hover:opacity-100 opacity-70 transition-opacity duration-500" />

              {/* Main Video Frame */}
              <div className="relative aspect-video w-full rounded-2xl sm:rounded-[36px] overflow-hidden bg-[#FAF9F7] border border-[#C6C2C1]/80 shadow-2xl shadow-black/[0.08] hover:shadow-[#502D6D]/15 transition-all duration-300">
                <video
                  ref={videoRef}
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="auto"
                  className="w-full h-full object-cover cursor-pointer"
                  onClick={togglePlay}
                >
                  <source src="/portfolio-hero.mp4" type="video/mp4" />
                  <source
                    src="/Robotic_hand_displaying_holograp%E2%80%A6_20260925222533.mp4"
                    type="video/mp4"
                  />
                  Your browser does not support the video tag.
                </video>

                {/* Subtle Interactive Play/Pause Indicator on Hover */}
                <button
                  type="button"
                  onClick={togglePlay}
                  aria-label={isPlaying ? "Pause video" : "Play video"}
                  className="absolute bottom-5 left-5 z-20 w-10 h-10 rounded-full bg-black/40 backdrop-blur-md border border-white/20 flex items-center justify-center text-white opacity-0 group-hover:opacity-90 hover:scale-110 transition-all duration-300 shadow-md"
                >
                  {isPlaying ? (
                    <Pause className="w-4 h-4" />
                  ) : (
                    <Play className="w-4 h-4 ml-0.5" />
                  )}
                </button>

                {/* PEP Software Logo Watermark Overlay */}
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
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <div
        className="hidden lg:flex absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex-col items-center gap-2"
        style={{ opacity: 0.5 }}
      >
        <span
          className="text-[10px] font-bold tracking-[0.13em] text-[#544643] uppercase"
          style={{ fontFamily: "'Plus Jakarta Sans',sans-serif" }}
        >
          Scroll to explore
        </span>
        <div className="w-[22px] h-[36px] rounded-[11px] border-[1.5px] border-[#C6C2C1] flex justify-center pt-[5px]">
          <div
            className="w-[3px] h-[8px] rounded-sm bg-[#C86A28]"
            style={{ animation: "scrollDot 1.6s ease-in-out infinite" }}
          />
        </div>
      </div>

      <style>{`
        @keyframes scrollDot{0%,100%{transform:translateY(0);opacity:1}50%{transform:translateY(10px);opacity:0.3}}
      `}</style>
    </section>
  );
}
