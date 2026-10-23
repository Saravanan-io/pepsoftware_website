"use client";

import Image from "next/image";
import { motion } from "framer-motion";

/* ─────────────────────────────────────────────────────────────────────────────
   3D CUBE COMPONENT (Pure CSS 3D preserve-3d Box with 6 Shaded Faces)
───────────────────────────────────────────────────────────────────────────── */
interface CSS3DCubeProps {
  size?: number;
  colorTheme?: "purple" | "gold" | "violet";
}

function CSS3DCube({ size = 32, colorTheme = "purple" }: CSS3DCubeProps) {
  const half = size / 2;

  const themes = {
    gold: {
      front: "linear-gradient(135deg, #FCB116 0%, #E59E0B 100%)",
      top: "linear-gradient(135deg, #FFF6D8 0%, #FCB116 100%)",
      right: "#D97706",
      left: "#F59E0B",
      back: "#C86A28",
      bottom: "#92400E",
      borderColor: "rgba(255, 255, 255, 0.35)",
    },
    purple: {
      front: "linear-gradient(135deg, #68358F 0%, #502D6D 100%)",
      top: "linear-gradient(135deg, #A855F7 0%, #68358F 100%)",
      right: "#3F1E5C",
      left: "#5B2A80",
      back: "#2E1442",
      bottom: "#1C0B32",
      borderColor: "rgba(255, 255, 255, 0.25)",
    },
    violet: {
      front: "linear-gradient(135deg, #8B5CF6 0%, #6D28D9 100%)",
      top: "linear-gradient(135deg, #DDD6FE 0%, #8B5CF6 100%)",
      right: "#5B21B6",
      left: "#7C3AED",
      back: "#4C1D95",
      bottom: "#2E1065",
      borderColor: "rgba(255, 255, 255, 0.3)",
    },
  };

  const current = themes[colorTheme] || themes.purple;

  return (
    <div
      style={{
        width: size,
        height: size,
        transformStyle: "preserve-3d",
      }}
      className="relative select-none pointer-events-none"
    >
      {/* Front Face */}
      <div
        className="absolute inset-0 rounded-sm border"
        style={{
          background: current.front,
          borderColor: current.borderColor,
          transform: `translateZ(${half}px)`,
        }}
      />
      {/* Back Face */}
      <div
        className="absolute inset-0 rounded-sm border"
        style={{
          background: current.back,
          borderColor: "rgba(255, 255, 255, 0.1)",
          transform: `rotateY(180deg) translateZ(${half}px)`,
        }}
      />
      {/* Right Face */}
      <div
        className="absolute inset-0 rounded-sm border"
        style={{
          background: current.right,
          borderColor: "rgba(255, 255, 255, 0.15)",
          transform: `rotateY(90deg) translateZ(${half}px)`,
        }}
      />
      {/* Left Face */}
      <div
        className="absolute inset-0 rounded-sm border"
        style={{
          background: current.left,
          borderColor: "rgba(255, 255, 255, 0.15)",
          transform: `rotateY(-90deg) translateZ(${half}px)`,
        }}
      />
      {/* Top Face (Bright Glossy Specular Light) */}
      <div
        className="absolute inset-0 rounded-sm border"
        style={{
          background: current.top,
          borderColor: "rgba(255, 255, 255, 0.5)",
          transform: `rotateX(90deg) translateZ(${half}px)`,
        }}
      />
      {/* Bottom Face */}
      <div
        className="absolute inset-0 rounded-sm shadow-md"
        style={{
          background: current.bottom,
          transform: `rotateX(-90deg) translateZ(${half}px)`,
        }}
      />
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
   3D GLOSSY SPHERE / CIRCLE BALL COMPONENT
───────────────────────────────────────────────────────────────────────────── */
interface Glossy3DBallProps {
  size?: number;
  colorTheme?: "purple" | "gold";
}

function Glossy3DBall({ size = 32, colorTheme = "purple" }: Glossy3DBallProps) {
  const isGold = colorTheme === "gold";

  return (
    <div
      style={{ width: size, height: size }}
      className="relative rounded-full select-none pointer-events-none"
    >
      <div
        className="w-full h-full rounded-full relative overflow-hidden"
        style={{
          background: isGold
            ? "radial-gradient(circle at 30% 28%, #FFFDF5 0%, #FFE8A3 20%, #FCB116 52%, #C86A28 82%, #78350F 100%)"
            : "radial-gradient(circle at 30% 28%, #FAF5FF 0%, #E9D5FF 20%, #8A3DA8 52%, #502D6D 80%, #1E0B36 100%)",
          boxShadow: isGold
            ? "inset -3px -3px 8px rgba(120,53,15,0.7), 0 8px 18px rgba(252,177,22,0.4)"
            : "inset -3px -3px 8px rgba(30,11,54,0.75), 0 8px 18px rgba(80,45,109,0.38)",
        }}
      >
        {/* Specular Highlight Sheen */}
        <div className="absolute top-[15%] left-[20%] w-[32%] h-[26%] rounded-full bg-white/85 blur-[0.8px]" />
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
   FALLING ITEM CONFIGURATION (Cubes & Balls Tumbling from Behind/Around Logo)
───────────────────────────────────────────────────────────────────────────── */
interface FallingItemConfig {
  id: string;
  type: "cube" | "ball";
  size: number;
  colorTheme: "gold" | "purple" | "violet";
  startX: number;
  startY: number;
  endX: number;
  floorY: number;
  bounce1: number;
  bounce2: number;
  duration: number;
  delay: number;
  zDepth: number;
}

const FALLING_ITEMS: FallingItemConfig[] = [
  {
    id: "fall-cube-gold-1",
    type: "cube",
    size: 32,
    colorTheme: "gold",
    startX: 15,
    startY: -30,
    endX: 85,
    floorY: 220,
    bounce1: 60,
    bounce2: 24,
    duration: 4.6,
    delay: 0.0,
    zDepth: 40,
  },
  {
    id: "fall-cube-purple-1",
    type: "cube",
    size: 30,
    colorTheme: "purple",
    startX: -20,
    startY: -35,
    endX: -95,
    floorY: 215,
    bounce1: 54,
    bounce2: 20,
    duration: 4.8,
    delay: 0.8,
    zDepth: 35,
  },
  {
    id: "fall-ball-gold-1",
    type: "ball",
    size: 30,
    colorTheme: "gold",
    startX: 25,
    startY: -20,
    endX: 45,
    floorY: 225,
    bounce1: 72,
    bounce2: 28,
    duration: 4.2,
    delay: 1.6,
    zDepth: 45,
  },
  {
    id: "fall-cube-violet-1",
    type: "cube",
    size: 24,
    colorTheme: "violet",
    startX: -10,
    startY: -40,
    endX: 120,
    floorY: 210,
    bounce1: 48,
    bounce2: 18,
    duration: 4.4,
    delay: 2.3,
    zDepth: 25,
  },
  {
    id: "fall-ball-purple-1",
    type: "ball",
    size: 34,
    colorTheme: "purple",
    startX: -25,
    startY: -25,
    endX: -55,
    floorY: 222,
    bounce1: 68,
    bounce2: 26,
    duration: 4.5,
    delay: 3.1,
    zDepth: 48,
  },
  {
    id: "fall-cube-gold-2",
    type: "cube",
    size: 20,
    colorTheme: "gold",
    startX: -5,
    startY: -30,
    endX: -130,
    floorY: 212,
    bounce1: 42,
    bounce2: 16,
    duration: 4.0,
    delay: 3.8,
    zDepth: 20,
  },
  {
    id: "fall-ball-gold-2",
    type: "ball",
    size: 22,
    colorTheme: "gold",
    startX: 10,
    startY: -35,
    endX: -15,
    floorY: 228,
    bounce1: 75,
    bounce2: 30,
    duration: 3.9,
    delay: 4.5,
    zDepth: 30,
  },
];

/* ─────────────────────────────────────────────────────────────────────────────
   FALLING ITEM COMPONENT (Tumbles out of Logo with Physics Bounce on Floor)
───────────────────────────────────────────────────────────────────────────── */
interface FallingItemProps {
  config: FallingItemConfig;
}

function FallingItem({ config }: FallingItemProps) {
  const {
    type,
    size,
    colorTheme,
    startX,
    startY,
    endX,
    floorY,
    bounce1,
    bounce2,
    duration,
    delay,
    zDepth,
  } = config;

  // Normalized keyframes (10 phases: emerge -> fall -> impact 1 -> rebound 1 -> impact 2 -> rebound 2 -> impact 3 -> settle -> fade out -> reset)
  const times = [0, 0.08, 0.3, 0.44, 0.56, 0.66, 0.74, 0.85, 0.94, 1.0];

  const yKeyframes = [
    startY,
    startY + 15,
    floorY,
    floorY - bounce1,
    floorY,
    floorY - bounce2,
    floorY,
    floorY,
    floorY + 3,
    startY,
  ];

  const xKeyframes = [
    startX,
    startX + 4,
    endX * 0.5,
    endX * 0.75,
    endX * 0.9,
    endX * 0.97,
    endX,
    endX + 2,
    endX + 3,
    startX,
  ];

  // Squash and stretch along Y axis on impact
  const scaleYKeyframes = [0.8, 1.15, 0.72, 1.12, 0.82, 1.04, 0.95, 1, 0.95, 0.8];
  // Bulge along X axis on impact
  const scaleXKeyframes = [0.8, 0.92, 1.28, 0.92, 1.18, 0.98, 1.05, 1, 1, 0.8];

  const opacityKeyframes = [0, 1, 1, 1, 1, 1, 1, 1, 0, 0];

  return (
    <div
      className="absolute top-1/2 left-1/2 pointer-events-none"
      style={{
        transform: `translate3d(0, 0, ${zDepth}px)`,
        transformStyle: "preserve-3d",
      }}
    >
      {/* Dynamic Floor Shadow for this Falling Item */}
      <motion.div
        animate={{
          x: xKeyframes,
          scaleX: [0.2, 0.4, 1.35, 0.55, 1.2, 0.75, 1.05, 1.0, 0, 0],
          opacity: [0, 0.1, 0.6, 0.16, 0.45, 0.22, 0.4, 0.35, 0, 0],
        }}
        transition={{
          duration,
          repeat: Infinity,
          ease: "linear",
          delay,
          times,
        }}
        style={{
          width: size * 1.1,
          height: 6,
          top: floorY + size - 2,
          left: -((size * 1.1) / 2),
        }}
        className="absolute rounded-full bg-black/35 blur-[2px] pointer-events-none"
      />

      {/* Physics Trajectory & Squash-and-Stretch Wrapper */}
      <motion.div
        animate={{
          x: xKeyframes,
          y: yKeyframes,
          scaleX: scaleXKeyframes,
          scaleY: scaleYKeyframes,
          opacity: opacityKeyframes,
        }}
        transition={{
          duration,
          repeat: Infinity,
          ease: "linear",
          delay,
          times,
        }}
        style={{
          transformStyle: "preserve-3d",
          marginLeft: -(size / 2),
          marginTop: -(size / 2),
        }}
        className="relative pointer-events-none"
      >
        {/* 3D Tumbling Body */}
        {type === "cube" ? (
          <motion.div
            animate={{
              rotateX: [0, 45, 270, 360, 430, 480, 520, 540, 540, 0],
              rotateY: [0, 60, 180, 270, 320, 360, 390, 400, 400, 0],
              rotateZ: [0, 30, 90, 140, 170, 190, 200, 210, 210, 0],
            }}
            transition={{
              duration,
              repeat: Infinity,
              ease: "linear",
              delay,
              times,
            }}
            style={{ transformStyle: "preserve-3d" }}
          >
            <CSS3DCube size={size} colorTheme={colorTheme} />
          </motion.div>
        ) : (
          <motion.div
            animate={{
              rotate: [0, 90, 270, 360, 430, 480, 520, 540, 540, 0],
            }}
            transition={{
              duration,
              repeat: Infinity,
              ease: "linear",
              delay,
              times,
            }}
          >
            <Glossy3DBall size={size} colorTheme={colorTheme === "gold" ? "gold" : "purple"} />
          </motion.div>
        )}
      </motion.div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
   MAIN SHOWCASE: Smooth 3D Flight Logo with Continuous Falling Cubes & Balls
   (No Hover Effect on Logo — Pure Autonomous 3D Levitation)
───────────────────────────────────────────────────────────────────────────── */
export function AboutLogoShowcase() {
  return (
    <div
      className="relative w-full max-w-[500px] lg:max-w-[540px] min-h-[460px] sm:min-h-[500px] mx-auto flex flex-col items-center justify-center select-none py-6 sm:py-8 pointer-events-none"
      style={{ perspective: 1200 }}
    >
      {/* Ambient Brand Atmospheric Backlight Glow */}
      <div className="absolute w-[360px] h-[360px] sm:w-[440px] sm:h-[440px] rounded-full bg-gradient-to-tr from-[#502D6D]/20 via-[#8A3DA8]/12 to-[#FCB116]/18 blur-3xl pointer-events-none -z-10" />

      {/* ── 3D CENTRAL RIG: LOGO + CONTINUOUS FALLING CUBES & BOUNCING BALLS ─── */}
      <motion.div
        initial={{ opacity: 0, y: -40, scale: 0.92 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 w-full max-w-[340px] sm:max-w-[390px] lg:max-w-[430px] flex items-center justify-center"
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Continuous Floating + Downside Flight (Smooth Autonomous Motion, No Hover) */}
        <motion.div
          animate={{
            y: [0, 20, 5, 16, 0],
            rotateX: [0, 6, -3, 5, 0],
            rotateY: [0, -5, 5, -3, 0],
            rotateZ: [-0.5, 1, -0.8, 0.5, -0.5],
            scale: 1,
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="relative w-full flex items-center justify-center"
          style={{ transformStyle: "preserve-3d" }}
        >
          {/* Subtle 3D Depth Backplane Aura */}
          <div
            className="absolute -inset-6 rounded-full bg-radial from-[#FCB116]/15 via-[#502D6D]/10 to-transparent blur-2xl pointer-events-none"
            style={{ transform: "translateZ(-40px)" }}
          />

          {/* High-Resolution PEP Software Logo Image with Dynamic Drop Shadow */}
          <div style={{ transform: "translateZ(30px)" }}>
            <Image
              src="/pep-logo.png"
              alt="Pep Software Official Logo"
              width={476}
              height={564}
              priority
              className="w-full h-auto object-contain drop-shadow-[0_24px_50px_rgba(80,45,109,0.22)]"
            />
          </div>

          {/* ── CUBES & CIRCLE BALLS FALLING FROM LOGO (3D Cascade) ─────────── */}
          {FALLING_ITEMS.map((config) => (
            <FallingItem key={config.id} config={config} />
          ))}
        </motion.div>
      </motion.div>

      {/* 3D Flying Ground Shadow (Syncs with downward/upward flight) */}
      <motion.div
        animate={{
          scaleX: [1, 0.84, 1.12, 0.88, 1],
          scaleY: [1, 0.82, 1.15, 0.86, 1],
          opacity: [0.22, 0.35, 0.16, 0.3, 0.22],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="w-48 sm:w-64 h-6 sm:h-8 rounded-[100%] bg-gradient-to-r from-transparent via-[#502D6D]/40 to-transparent blur-md mt-10 pointer-events-none"
      />
    </div>
  );
}
