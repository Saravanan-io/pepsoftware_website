"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ShieldCheck, PhoneCall, Sparkles } from "lucide-react";
import { COMPANY_INFO } from "@/lib/constants";

interface Contact3DVisualProps {
  className?: string;
}

export function Contact3DVisual({ className = "" }: Contact3DVisualProps) {
  return (
    <div
      className={`relative w-full max-w-[540px] mx-auto flex flex-col items-center justify-center select-none ${className}`}
    >
      {/* Ambient Atmospheric Glow Layers */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[380px] sm:w-[440px] h-[380px] sm:h-[440px] bg-[radial-gradient(ellipse_at_center,rgba(80,45,109,0.18)_0%,rgba(200,106,40,0.12)_40%,transparent_70%)] rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[260px] h-[260px] bg-[radial-gradient(circle,rgba(252,177,22,0.14)_0%,transparent_70%)] rounded-full blur-2xl pointer-events-none" />

      {/* Floating 3D Device & Communication Artifacts */}
      <motion.div
        animate={{
          y: [0, -14, 0],
          rotate: [0, 0.8, -0.6, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="relative z-10 w-full flex items-center justify-center"
      >
        <div className="relative w-[320px] sm:w-[420px] md:w-[460px] aspect-square">
          <Image
            src="/images/contact/contact-3d-transparent.png"
            alt="3D Realistic Communication Hub - PEP Software"
            fill
            sizes="(max-width: 640px) 320px, (max-width: 768px) 420px, 460px"
            priority
            className="object-contain drop-shadow-[0_24px_38px_rgba(21,21,21,0.14)]"
          />
        </div>

        {/* Realtime Floating Glassmorphic Micro-Badge: Live Response */}
        <motion.div
          animate={{
            y: [0, -8, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5,
          }}
          className="absolute -top-2 right-2 sm:right-6 z-20 flex items-center gap-2.5 px-3.5 py-2 rounded-2xl bg-[#EFF0EF]/90 backdrop-blur-md border border-white/80 shadow-lg shadow-[#151515]/5"
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
          </span>
          <div className="flex flex-col">
            <span className="text-[11px] font-bold text-[#151515] leading-tight">
              Live Response
            </span>
            <span className="text-[10px] text-[#544643]">
              Avg. &lt; 2 Hours
            </span>
          </div>
        </motion.div>

        {/* Realtime Floating Glassmorphic Micro-Badge: Direct Hotline */}
        <motion.div
          animate={{
            y: [0, 8, 0],
          }}
          transition={{
            duration: 4.6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          className="absolute bottom-10 left-0 sm:left-4 z-20 flex items-center gap-2.5 px-3.5 py-2 rounded-2xl bg-[#EFF0EF]/90 backdrop-blur-md border border-white/80 shadow-lg shadow-[#151515]/5"
        >
          <div className="w-7 h-7 rounded-xl bg-gradient-to-tr from-[#502D6D] to-[#FCB116] flex items-center justify-center text-white shrink-0 shadow-xs">
            <PhoneCall className="w-3.5 h-3.5" />
          </div>
          <div className="flex flex-col">
            <span className="text-[10px] text-[#544643] leading-tight">
              Direct Reach
            </span>
            <span className="text-[11px] font-bold text-[#151515]">
              {COMPANY_INFO.phone}
            </span>
          </div>
        </motion.div>

        {/* Realtime Floating Glassmorphic Micro-Badge: Confidentiality */}
        <motion.div
          animate={{
            y: [0, -6, 0],
          }}
          transition={{
            duration: 4.2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1.5,
          }}
          className="hidden sm:flex absolute top-1/2 -right-3 z-20 items-center gap-2 px-3 py-1.5 rounded-xl bg-white/85 backdrop-blur-md border border-[#C6C2C1]/60 shadow-md shadow-[#151515]/5"
        >
          <ShieldCheck className="w-3.5 h-3.5 text-[#C86A28]" />
          <span className="text-[10px] font-bold text-[#151515]">
            Strict NDA Protected
          </span>
        </motion.div>
      </motion.div>

      {/* Realtime Synchronized Ground Contact Shadow */}
      <motion.div
        animate={{
          scale: [1, 0.85, 1],
          opacity: [0.24, 0.12, 0.24],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="w-[240px] sm:w-[320px] h-6 -mt-4 bg-[radial-gradient(ellipse_at_center,rgba(21,21,21,0.5)_0%,transparent_70%)] blur-md pointer-events-none"
      />
    </div>
  );
}
