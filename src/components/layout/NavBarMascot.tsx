"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

type MascotState = "hidden" | "peek" | "wave" | "hi" | "welcome" | "idle";

const MASCOT_IMAGES = {
  peek: "/images/mascot/mascot_peek.png",
  wave: "/images/mascot/mascot_wave.png",
  hi: "/images/mascot/mascot_hi.png",
  welcome: "/images/mascot/mascot_welcome.png",
};

export function NavBarMascot({ scrolled = false }: { scrolled?: boolean }) {
  const pathname = usePathname();
  const isHome = pathname === "/";

  const [state, setState] = useState<MascotState>("peek");
  const [hasInteracted, setHasInteracted] = useState(0);

  // Orchestrate the 4-step storyboard animation
  useEffect(() => {
    if (!isHome) return;

    // Step 1: Peek is active initially
    setState("peek");

    // Step 2: Rises up and waves (1.4s)
    const t2 = setTimeout(() => {
      setState("wave");
    }, 1400);

    // Step 3: Says "Hi! 👋" (2.7s)
    const t3 = setTimeout(() => {
      setState("hi");
    }, 2700);

    // Step 4: Says "Welcome to Pep Software! 👋" (4.5s)
    const t4 = setTimeout(() => {
      setState("welcome");
    }, 4500);

    // Settle into gentle idle (9.5s)
    const t5 = setTimeout(() => {
      setState("idle");
    }, 9500);

    return () => {
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
      clearTimeout(t5);
    };
  }, [isHome, hasInteracted]);

  const handleInteraction = () => {
    setHasInteracted((prev) => prev + 1);
  };

  if (!isHome) return null;

  // Active image based on state
  const getCurrentImage = () => {
    switch (state) {
      case "peek":
        return MASCOT_IMAGES.peek;
      case "wave":
        return MASCOT_IMAGES.wave;
      case "hi":
        return MASCOT_IMAGES.hi;
      case "welcome":
      case "idle":
        return MASCOT_IMAGES.welcome;
      default:
        return MASCOT_IMAGES.peek;
    }
  };

  return (
    <div
      onClick={handleInteraction}
      className={`hidden md:flex absolute bottom-[calc(100%-4px)] left-4 sm:left-6 lg:left-8 z-20 items-end pointer-events-auto cursor-pointer group select-none ${
        scrolled ? "pointer-events-none" : ""
      }`}
      title="Click to say hello!"
    >
      {/* 3D Boy Mascot Character */}
      <motion.div
        initial={{ y: 25, opacity: 0, scale: 0.85 }}
        animate={{
          y: scrolled ? 35 : state === "peek" ? 12 : 0,
          opacity: scrolled ? 0 : 1,
          scale: scrolled ? 0.85 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 280,
          damping: 22,
        }}
        className="relative w-[95px] sm:w-[105px] h-[38px] sm:h-[42px] shrink-0 transform-gpu"
      >
        {/* Subtle waving body physics */}
        <motion.div
          animate={
            !scrolled && (state === "wave" || state === "hi" || state === "welcome")
              ? {
                  rotate: [-2, 2.5, -2],
                  y: [0, -1.5, 0],
                }
              : { rotate: 0, y: 0 }
          }
          transition={{
            repeat: Infinity,
            duration: 1.4,
            ease: "easeInOut",
          }}
          className="relative w-full h-full"
        >
          <Image
            src={getCurrentImage()}
            alt="Pep Software Friendly 3D Mascot"
            fill
            sizes="120px"
            priority
            className="object-contain object-bottom drop-shadow-[0_6px_12px_rgba(80,45,109,0.18)] transition-all duration-200"
          />

          {/* Golden Curiosity Sparks for Peek State */}
          {state === "peek" && !scrolled && (
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: [0.8, 1.2, 0.9], opacity: [0, 1, 0.7] }}
              transition={{ repeat: Infinity, duration: 1.2 }}
              className="absolute -top-1.5 left-2 w-3.5 h-3.5 pointer-events-none"
            >
              <span className="text-[#FCB116] font-black text-xs">✨</span>
            </motion.div>
          )}

          {/* Purple Wave Radiations */}
          {(state === "wave" || state === "hi") && !scrolled && (
            <motion.div
              animate={{ scale: [0.9, 1.25], opacity: [0.8, 0] }}
              transition={{ repeat: Infinity, duration: 0.9, ease: "easeOut" }}
              className="absolute -top-1 right-2 w-5 h-5 pointer-events-none"
            >
              <span className="text-[#502D6D] text-xs font-black">)))</span>
            </motion.div>
          )}
        </motion.div>
      </motion.div>

      {/* Dynamic Animated Speech Bubble positioned over Contact us button */}
      <AnimatePresence mode="wait">
        {!scrolled && state === "hi" && (
          <motion.div
            key="bubble-hi"
            initial={{ scale: 0.4, opacity: 0, y: 8, x: -8 }}
            animate={{ scale: 1, opacity: 1, y: 0, x: 0 }}
            exit={{ scale: 0.6, opacity: 0, transition: { duration: 0.15 } }}
            transition={{
              type: "spring",
              stiffness: 380,
              damping: 22,
            }}
            className="absolute left-[80px] sm:left-[90px] bottom-1 z-30"
          >
            <div className="relative bg-white/98 backdrop-blur-md px-3.5 py-1 rounded-2xl rounded-bl-xs border border-[#502D6D]/15 shadow-[0_8px_20px_rgba(80,45,109,0.12),0_2px_8px_rgba(252,177,22,0.08)] flex items-center gap-1.5 whitespace-nowrap">
              <span className="font-extrabold text-sm sm:text-base text-[#502D6D] tracking-tight">
                Hi!
              </span>
              <span className="text-base sm:text-lg animate-bounce" style={{ animationDuration: "1s" }}>
                👋
              </span>

              {/* Sparkles around bubble */}
              <div className="absolute -top-2 -right-1 text-[10px] text-[#FCB116] animate-pulse">
                ✨
              </div>
              <div className="absolute -bottom-1 -right-2 text-[8px] text-[#502D6D]">
                ✦
              </div>

              {/* Speech bubble tail pointing to boy */}
              <div className="absolute bottom-2 -left-1 w-2.5 h-2.5 bg-white border-b border-l border-[#502D6D]/15 rotate-45" />
            </div>
          </motion.div>
        )}

        {!scrolled && state === "welcome" && (
          <motion.div
            key="bubble-welcome"
            initial={{ scale: 0.6, opacity: 0, y: 6 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.7, opacity: 0, transition: { duration: 0.25 } }}
            transition={{
              type: "spring",
              stiffness: 350,
              damping: 24,
            }}
            className="absolute left-[78px] sm:left-[88px] bottom-1 z-30"
          >
            <div className="relative bg-white/98 backdrop-blur-md px-3.5 py-1.5 rounded-2xl rounded-bl-xs border border-[#502D6D]/15 shadow-[0_10px_26px_rgba(80,45,109,0.14),0_2px_8px_rgba(252,177,22,0.1)] flex items-center gap-1.5 whitespace-nowrap">
              <span className="font-bold text-xs sm:text-sm text-[#151515] tracking-tight">
                Welcome to{" "}
                <span className="font-black text-[#502D6D]">Pep Software!</span>
              </span>
              <span className="text-sm sm:text-base animate-pulse">👋</span>

              {/* Celebratory golden and purple confetti sparks */}
              <div className="absolute -top-2.5 -right-1 text-[11px] text-[#FCB116] animate-spin" style={{ animationDuration: "5s" }}>
                ✨
              </div>
              <div className="absolute -top-1 right-8 text-[9px] text-[#502D6D] animate-ping" style={{ animationDuration: "2s" }}>
                ✦
              </div>
              <div className="absolute -bottom-1 -right-1 text-[10px] text-[#FCB116]">
                🌟
              </div>

              {/* Tail pointing to boy */}
              <div className="absolute bottom-2 -left-1 w-2.5 h-2.5 bg-white border-b border-l border-[#502D6D]/15 rotate-45" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
