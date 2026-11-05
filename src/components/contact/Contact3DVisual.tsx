"use client";

import Image from "next/image";
import { motion } from "framer-motion";

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
            alt="3D Realistic Communication Hub - Pep Software"
            fill
            sizes="(max-width: 640px) 320px, (max-width: 768px) 420px, 460px"
            priority
            className="object-contain drop-shadow-[0_24px_38px_rgba(21,21,21,0.14)]"
          />
        </div>
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
