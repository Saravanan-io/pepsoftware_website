"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useMotionValue,
  MotionValue,
} from "framer-motion";
import { ArrowRight, ShieldCheck, ChevronDown, Sparkles } from "lucide-react";
import { RevealOnScroll } from "@/components/shared/RevealOnScroll";
import { WordReveal, ParagraphReveal } from "@/components/shared/WordReveal";
import { cn } from "@/lib/utils";

export interface PillarItem {
  num: string;
  title: string;
  description: string;
  image: string;
  alt: string;
  href: string;
  blobGradient: string;
  cornerBorder: string;
  buttonBg: string;
}

const DEFAULT_PILLARS: PillarItem[] = [
  {
    num: "01",
    title: "Tailored Solutions",
    description:
      "Every digital product is custom crafted to your exact business goals, target audience, and market niche.",
    image: "/images/why-choose/tailored-solutions-3d.jpg",
    alt: "3D Target Dartboard Bullseye – Tailored Solutions",
    href: "/services/website-design-development",
    blobGradient: "from-amber-200/70 via-orange-100/50 to-transparent",
    cornerBorder: "border-amber-400/90 group-hover:border-amber-500",
    buttonBg: "bg-amber-100 text-amber-900 group-hover:bg-[#FCB116] group-hover:text-white",
  },
  {
    num: "02",
    title: "User-Centered Design",
    description:
      "We blend visual branding with empathetic UI/UX principles to build interfaces that visitors love and trust.",
    image: "/images/why-choose/user-centered-design-3d.jpg",
    alt: "3D Artist Paint Palette – User-Centered Design",
    href: "/services/ui-ux-design",
    blobGradient: "from-purple-200/70 via-fuchsia-100/50 to-transparent",
    cornerBorder: "border-[#502D6D]/90 group-hover:border-[#68358F]",
    buttonBg: "bg-purple-100 text-[#502D6D] group-hover:bg-[#502D6D] group-hover:text-white",
  },
  {
    num: "03",
    title: "Innovation-Driven Approach",
    description:
      "Modern frameworks ensuring blazing fast performance, ironclad security, and future-proof scalability.",
    image: "/images/why-choose/innovation-approach-3d.jpg",
    alt: "3D Glowing Innovation Lightbulb – Innovation-Driven Approach",
    href: "/services/mobile-app-design-development",
    blobGradient: "from-yellow-200/70 via-amber-100/50 to-transparent",
    cornerBorder: "border-[#FCB116]/90 group-hover:border-[#FCB116]",
    buttonBg: "bg-yellow-100 text-amber-900 group-hover:bg-[#FCB116] group-hover:text-white",
  },
  {
    num: "04",
    title: "Transparent Workflow",
    description:
      "Predictable milestones, regular updates, and collaborative project management from concept to launch.",
    image: "/images/why-choose/transparent-workflow-3d.jpg",
    alt: "3D Isometric Circular Refresh Loop – Transparent Workflow",
    href: "/contact",
    blobGradient: "from-violet-200/70 via-purple-100/50 to-transparent",
    cornerBorder: "border-purple-600/90 group-hover:border-purple-700",
    buttonBg: "bg-violet-100 text-purple-900 group-hover:bg-[#68358F] group-hover:text-white",
  },
];

// Sequential jump timing across the pinned scroll track:
// Card jump begins immediately as the 3D cinematic logo zooms and dissolves
// Cards 0 & 1 jump in from LEFT side of the screen
// Cards 2 & 3 jump in from RIGHT side of the screen
const JUMP_RANGES = [
  { start: 0.08, end: 0.30, isLeft: true },  // Card 0: Left 1 (Tailored Solutions)
  { start: 0.26, end: 0.48, isLeft: true },  // Card 1: Left 2 (User-Centered Design)
  { start: 0.44, end: 0.66, isLeft: false }, // Card 2: Right 1 (Innovation-Driven Approach)
  { start: 0.62, end: 0.84, isLeft: false }, // Card 3: Right 2 (Transparent Workflow)
];

/**
 * 3D Cinematic PEP Software Logo Showcase
 * - When user enters the page / section: triggers a dramatic 3D cinematic reveal animation
 *   (deep perspective scale-in, holographic orbit ignition, light flare, typography assemble).
 * - While idling: continuous floating levitation, dual rotating 3D orbit rings, expanding energy pulses,
 *   periodic specular light sweep, and interactive 3D mouse parallax tilt.
 * - When user scrolls: immediately zooms forward through the screen into invisibility, clearing the stage for the cards.
 */
function Cinematic3DLogo({ progress }: { progress: MotionValue<number> }) {
  // Local cursor tracking for interactive 3D tilt
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const hoverSpringConfig = { damping: 20, stiffness: 140, mass: 0.6 };
  const smoothMouseX = useSpring(mouseX, hoverSpringConfig);
  const smoothMouseY = useSpring(mouseY, hoverSpringConfig);

  const tiltX = useTransform(smoothMouseY, [-0.5, 0.5], [12, -12]);
  const tiltY = useTransform(smoothMouseX, [-0.5, 0.5], [-14, 14]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const xPos = (e.clientX - rect.left) / rect.width - 0.5;
    const yPos = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(xPos);
    mouseY.set(yPos);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  // Scroll-driven Cinematic Zoom-Through:
  // Starts IMMEDIATELY at p = 0.00 so any scroll action triggers instant zoom
  const scrollScale = useTransform(progress, (p) => {
    if (p <= 0.0) return 1;
    if (p >= 0.12) return 3.5;
    const t = p / 0.12;
    const smooth = t * t * (3 - 2 * t);
    return 1 + smooth * 2.5;
  });

  // Dissolves smoothly to 0 as it zooms past the camera
  const scrollOpacity = useTransform(progress, (p) => {
    if (p <= 0.005) return 1;
    if (p >= 0.09) return 0;
    const t = (p - 0.005) / (0.09 - 0.005);
    return Math.max(0, 1 - t);
  });

  // 3D Z-translation (pushing towards viewer)
  const scrollZ = useTransform(progress, [0.0, 0.12], [0, 480]);

  // Motion blur effect on zoom
  const scrollBlur = useTransform(progress, (p) => {
    if (p <= 0.005) return "blur(0px)";
    if (p >= 0.10) return "blur(16px)";
    const t = (p - 0.005) / (0.10 - 0.005);
    return `blur(${t * 16}px)`;
  });

  // Once scrolled past 0.04, disable pointer events so cards can be hovered cleanly
  const pointerEvents = useTransform(progress, (p) =>
    p > 0.04 ? "none" : "auto"
  );

  // Once completely faded, hide to save GPU rendering cycles
  const visibility = useTransform(progress, (p) =>
    p > 0.11 ? "hidden" : "visible"
  );

  const handleScrollCueClick = () => {
    if (typeof window !== "undefined") {
      window.scrollBy({ top: 380, behavior: "smooth" });
    }
  };

  return (
    <motion.div
      style={{
        scale: scrollScale,
        opacity: scrollOpacity,
        z: scrollZ,
        filter: scrollBlur,
        pointerEvents,
        visibility,
        perspective: "1400px",
        transformStyle: "preserve-3d",
      }}
      className="absolute inset-0 z-20 flex flex-col items-center justify-center select-none"
    >
      {/* Cinematic Entrance Container: Plays dramatic 3D assemble animation when user enters the section */}
      <motion.div
        initial={{ opacity: 0, scale: 0.35, y: 30, rotateX: 25 }}
        whileInView={{ opacity: 1, scale: 1, y: 0, rotateX: 0 }}
        viewport={{ once: false, amount: 0.15 }}
        transition={{
          type: "spring",
          damping: 18,
          stiffness: 90,
          mass: 0.75,
        }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="relative flex flex-col items-center justify-center p-6 sm:p-10 cursor-pointer"
        style={{
          perspective: "1200px",
          transformStyle: "preserve-3d",
        }}
      >
        {/* Ambient Volumetric Nebula Glow with Entrance Flare */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="absolute w-[360px] h-[360px] sm:w-[480px] sm:h-[480px] rounded-full blur-[90px] bg-gradient-to-tr from-[#502D6D]/25 via-[#8A3DA8]/20 to-[#FCB116]/30 pointer-events-none animate-pulse"
        />

        {/* 3D Holographic Orbit Ring 1 (Amber / Gold theme) */}
        <motion.div
          initial={{ scale: 0, opacity: 0, rotateZ: -60 }}
          whileInView={{ scale: 1, opacity: 1, rotateZ: 0 }}
          transition={{ duration: 1.0, delay: 0.15, ease: "easeOut" }}
          style={{
            rotateX: 68,
            rotateY: 16,
            transformStyle: "preserve-3d",
          }}
          className="absolute w-64 h-64 sm:w-80 sm:h-80 rounded-full border border-dashed border-[#FCB116]/50 pointer-events-none"
        >
          {/* Continuous Orbit Spin */}
          <motion.div
            animate={{ rotateZ: [0, 360] }}
            transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
            className="w-full h-full relative"
          >
            {/* Glowing Satellite Orb */}
            <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3.5 h-3.5 rounded-full bg-[#FCB116] shadow-[0_0_14px_#FCB116]" />
          </motion.div>
        </motion.div>

        {/* 3D Holographic Orbit Ring 2 (Purple theme) */}
        <motion.div
          initial={{ scale: 0, opacity: 0, rotateZ: 60 }}
          whileInView={{ scale: 1, opacity: 1, rotateZ: 0 }}
          transition={{ duration: 1.0, delay: 0.25, ease: "easeOut" }}
          style={{
            rotateX: 68,
            rotateY: -22,
            transformStyle: "preserve-3d",
          }}
          className="absolute w-72 h-72 sm:w-92 sm:h-92 rounded-full border border-dotted border-[#502D6D]/45 pointer-events-none"
        >
          {/* Continuous Reverse Orbit Spin */}
          <motion.div
            animate={{ rotateZ: [360, 0] }}
            transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
            className="w-full h-full relative"
          >
            {/* Glowing Satellite Orb */}
            <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-3.5 h-3.5 rounded-full bg-[#502D6D] shadow-[0_0_14px_#502D6D]" />
          </motion.div>
        </motion.div>

        {/* Floating 3D Core with Interactive Mouse Tilt */}
        <motion.div
          style={{
            rotateX: tiltX,
            rotateY: tiltY,
            transformStyle: "preserve-3d",
          }}
          animate={{ y: [0, -9, 0] }}
          transition={{ duration: 3.6, repeat: Infinity, ease: "easeInOut" }}
          className="relative flex flex-col items-center"
        >
          {/* Glassmorphic Halo Pedestal Shield */}
          <div className="relative w-36 h-36 sm:w-44 sm:h-44 rounded-full flex items-center justify-center backdrop-blur-2xl bg-white/85 border border-white/95 shadow-[0_24px_60px_rgba(80,45,109,0.20),0_10px_30px_rgba(252,177,22,0.16),inset_0_2px_4px_rgba(255,255,255,0.95)] overflow-hidden group">
            {/* Inner Golden Ring Accent */}
            <div className="absolute inset-2.5 rounded-full border border-[#FCB116]/35 pointer-events-none" />

            {/* Specular Light Beam Sheen Sweep */}
            <motion.div
              animate={{ x: ["-160%", "260%"] }}
              transition={{
                duration: 2.8,
                repeat: Infinity,
                repeatDelay: 1.0,
                ease: "easeInOut",
              }}
              className="absolute inset-y-0 w-28 -skew-x-25 bg-gradient-to-r from-transparent via-white/85 to-transparent pointer-events-none"
            />

            {/* Concentric Energy Pulse Wave */}
            <motion.div
              animate={{ scale: [1, 1.45], opacity: [0.65, 0] }}
              transition={{
                duration: 2.2,
                repeat: Infinity,
                ease: "easeOut",
              }}
              className="absolute inset-0 rounded-full border-2 border-[#FCB116]/50 pointer-events-none"
            />

            {/* 3D Floating PEP Software Emblem with Depth */}
            <div
              className="relative w-24 h-24 sm:w-28 sm:h-28 drop-shadow-[0_12px_24px_rgba(80,45,109,0.25)] transition-transform duration-300 group-hover:scale-105"
              style={{ transform: "translateZ(38px)" }}
            >
              <Image
                src="/pep-icon.png"
                alt="PEP Software Official 3D Emblem"
                fill
                sizes="120px"
                priority
                className="object-contain"
              />
            </div>
          </div>

          {/* Cinematic Brand Typography with Staggered Entrance */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col items-center mt-5 text-center"
            style={{ transform: "translateZ(25px)" }}
          >
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#FCB116] animate-spin" style={{ animationDuration: "6s" }} />
              <h3 className="font-syne font-black text-2xl sm:text-3xl tracking-[0.24em] uppercase bg-gradient-to-r from-[#502D6D] via-[#8A3DA8] to-[#FCB116] bg-clip-text text-transparent drop-shadow-xs">
                PEP SOFTWARE
              </h3>
              <Sparkles className="w-4 h-4 text-[#502D6D]" />
            </div>

            {/* Interactive Scroll Cue Button */}
            <button
              onClick={handleScrollCueClick}
              type="button"
              className="inline-flex items-center gap-1.5 mt-3 text-[11px] font-semibold text-[#544643]/75 hover:text-[#502D6D] uppercase tracking-widest transition-colors cursor-pointer group"
            >
              <span>Scroll to explore pillars</span>
              <motion.span
                animate={{ y: [0, 4, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              >
                <ChevronDown className="w-3.5 h-3.5 text-[#FCB116] group-hover:translate-y-0.5 transition-transform" />
              </motion.span>
            </button>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

interface ModernWhyChooseSectionProps {
  badge?: string;
  title?: string;
  gradientWord?: string;
  description?: string;
  pillars?: PillarItem[];
  className?: string;
  id?: string;
}

interface JumpingPillarCardProps {
  pillar: PillarItem;
  idx: number;
  progress: MotionValue<number>;
}

function JumpingPillarCard({ pillar, idx, progress }: JumpingPillarCardProps) {
  const config = JUMP_RANGES[idx] || {
    start: 0.15 * idx,
    end: 0.15 * idx + 0.28,
    isLeft: idx < 2,
  };
  const { start, end, isLeft } = config;

  // Responsive start position off the screen edges
  const [startX, setStartX] = useState(isLeft ? -360 : 360);

  useEffect(() => {
    const updateStartX = () => {
      const w = window.innerWidth;
      // Proportional distance so cards start cleanly off-screen
      let dist = 360;
      if (idx === 0) dist = Math.min(420, Math.max(280, w * 0.30));
      else if (idx === 1) dist = Math.min(560, Math.max(380, w * 0.44));
      else if (idx === 2) dist = Math.min(560, Math.max(380, w * 0.44));
      else dist = Math.min(420, Math.max(280, w * 0.30));
      setStartX(isLeft ? -dist : dist);
    };

    updateStartX();
    window.addEventListener("resize", updateStartX);
    return () => window.removeEventListener("resize", updateStartX);
  }, [idx, isLeft]);

  // Local mouse movement for subtle interactive 3D tilt on hover
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const hoverSpringConfig = { damping: 22, stiffness: 180, mass: 0.5 };
  const smoothMouseX = useSpring(mouseX, hoverSpringConfig);
  const smoothMouseY = useSpring(mouseY, hoverSpringConfig);

  const tiltX = useTransform(smoothMouseY, [-0.5, 0.5], [5, -5]);
  const tiltY = useTransform(smoothMouseX, [-0.5, 0.5], [-5, 5]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const xPos = (e.clientX - rect.left) / rect.width - 0.5;
    const yPos = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(xPos);
    mouseY.set(yPos);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  // 1. Horizontal Trajectory (X) - 100% scroll-driven with smoothstep:
  const x = useTransform(progress, (p) => {
    if (p <= start) return startX;
    if (p >= end) return 0;
    const t = (p - start) / (end - start);
    const smooth = t * t * (3 - 2 * t);
    return startX * (1 - smooth);
  });

  // 2. Vertical Jump Arc (Y) - 100% scroll-driven parabolic arc:
  // Starts lower (35px), gently leaps up to -30px apex, floats smoothly down to landing (0px)
  const y = useTransform(progress, (p) => {
    if (p <= start) return 35;
    if (p >= end) return 0;
    const t = (p - start) / (end - start);
    const arc = Math.sin(t * Math.PI) * 58;
    const settle = 35 * (1 - t);
    return settle - arc;
  });

  // 3. 3D Perspective Yaw (rotateY) - 100% scroll-driven:
  // Subtle 18deg isometric angle leveling out cleanly to 0deg
  const rotateY = useTransform(progress, (p) => {
    const startY = isLeft ? -18 : 18;
    if (p <= start) return startY;
    if (p >= end) return 0;
    const t = (p - start) / (end - start);
    const smooth = t * t * (3 - 2 * t);
    return startY * (1 - smooth);
  });

  // 4. 3D Bank Angle (rotateZ) - 100% scroll-driven:
  const rotateZ = useTransform(progress, (p) => {
    const startZ = isLeft ? -5 : 5;
    if (p <= start) return startZ;
    if (p >= end) return 0;
    const t = (p - start) / (end - start);
    const smooth = t * t * (3 - 2 * t);
    return startZ * (1 - smooth);
  });

  // 5. 3D Pitch (rotateX) - 100% scroll-driven:
  const rotateX = useTransform(progress, (p) => {
    if (p <= start) return 10;
    if (p >= end) return 0;
    const t = (p - start) / (end - start);
    const smooth = t * t * (3 - 2 * t);
    return 10 * (1 - smooth);
  });

  // 6. Scale (Gentle depth pop) - 100% scroll-driven:
  // 0.88 -> 1.03 mid-air apex -> 1.0 touchdown
  const scale = useTransform(progress, (p) => {
    if (p <= start) return 0.88;
    if (p >= end) return 1.0;
    const t = (p - start) / (end - start);
    const swell = Math.sin(t * Math.PI) * 0.08;
    const base = 0.88 + t * 0.12;
    return base + swell;
  });

  // 7. Opacity - 100% scroll-driven:
  const opacity = useTransform(progress, (p) => {
    if (p <= start) return 0;
    if (p >= end) return 1;
    const t = (p - start) / (end - start);
    return Math.min(1, t / 0.28);
  });

  // Specular Light Beam sweep right as card completes touchdown
  const beamX = useTransform(
    progress,
    [start + 0.14, end + 0.10],
    ["-130%", "260%"]
  );
  const beamOpacity = useTransform(
    progress,
    [start + 0.14, start + 0.20, end, end + 0.10],
    [0, 0.75, 0.75, 0]
  );

  // 3D Clay Icon landing impact cushion
  const iconY = useTransform(progress, (p) => {
    if (p < start) return 10;
    if (p >= end) return 0;
    const t = (p - start) / (end - start);
    return (1 - t) * 10 - Math.sin(t * Math.PI) * 8;
  });

  // Background pastel blob drift
  const blobRotate = useTransform(progress, [0, 1], [idx * 20, idx * 20 + 75]);

  return (
    <div
      className="h-full"
      style={{
        perspective: "1400px",
        transformStyle: "preserve-3d",
      }}
    >
      <motion.div
        style={{
          x,
          y,
          rotateY,
          rotateZ,
          rotateX,
          scale,
          opacity,
          transformStyle: "preserve-3d",
        }}
        className="h-full"
      >
        {/* Interactive 3D mouse tilt layer */}
        <motion.div
          style={{
            rotateX: tiltX,
            rotateY: tiltY,
            transformStyle: "preserve-3d",
          }}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className="h-full"
        >
          <Link
            href={pillar.href}
            className="group relative flex flex-col justify-between h-full rounded-[32px] bg-white/95 backdrop-blur-xl border border-white/80 p-6 sm:p-7 shadow-[0_16px_40px_rgba(80,45,109,0.06),0_2px_8px_rgba(0,0,0,0.03)] hover:shadow-[0_26px_60px_rgba(80,45,109,0.14),0_8px_20px_rgba(252,177,22,0.10)] hover:-translate-y-2 transition-all duration-300 overflow-hidden cursor-pointer"
          >
            {/* Top Organic Pastel Liquid Fluid Blob with Scroll-driven Drift */}
            <motion.div
              style={{ rotate: blobRotate }}
              className={cn(
                "absolute -top-10 -left-10 w-48 h-48 rounded-[45%_55%_65%_35%/40%_50%_60%_70%] blur-md pointer-events-none transition-transform duration-700 group-hover:scale-125 bg-gradient-to-br opacity-80 group-hover:opacity-100",
                pillar.blobGradient
              )}
            />

            {/* Subtle Glass Surface Sheen & Ambient Card Fill */}
            <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-transparent to-white/90 pointer-events-none" />

            {/* Anamorphic Glass Light Beam Sweep (sweeps across as card lands) */}
            <motion.div
              style={{
                x: beamX,
                opacity: beamOpacity,
              }}
              className="absolute inset-y-0 w-36 -skew-x-25 bg-gradient-to-r from-transparent via-white/85 to-transparent pointer-events-none z-20"
            />

            {/* Top Row: 3D Floating Clay Icon */}
            <div className="relative z-10 flex items-start mb-5">
              {/* 3D Floating Clay Icon with Independent Levitation */}
              <motion.div
                style={{
                  y: iconY,
                }}
                className="relative w-20 h-20 sm:w-22 sm:h-22 rounded-2xl overflow-hidden drop-shadow-[0_12px_22px_rgba(0,0,0,0.08)] group-hover:drop-shadow-[0_18px_32px_rgba(80,45,109,0.20)] transition-all duration-300 group-hover:-translate-y-1.5"
              >
                <Image
                  src={pillar.image}
                  alt={pillar.alt}
                  fill
                  sizes="(max-width: 640px) 80px, 90px"
                  className="object-contain"
                  priority={idx < 2}
                />
              </motion.div>
            </div>

            {/* Content */}
            <div className="relative z-10 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-[#151515] group-hover:text-[#502D6D] transition-colors mb-2.5 leading-snug">
                  {pillar.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#544643] leading-relaxed font-normal">
                  {pillar.description}
                </p>
              </div>

              {/* Bottom Action Row: Learn More + Arrow Pill */}
              <div className="flex items-center gap-2 pt-5 mt-4 border-t border-gray-100/80">
                <span className="text-xs font-bold text-[#151515] group-hover:text-[#502D6D] transition-colors">
                  Learn More
                </span>
                <div
                  className={cn(
                    "w-7 h-7 rounded-full flex items-center justify-center transition-all duration-300 group-hover:translate-x-1.5 group-hover:scale-105 shadow-2xs ml-auto",
                    pillar.buttonBg
                  )}
                >
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>
            </div>

            {/* Bottom-right Corner Accent Curve Border */}
            <div
              className={cn(
                "absolute bottom-0 right-0 w-24 h-24 pointer-events-none rounded-br-[32px] border-b-[3.5px] border-r-[3.5px] transition-all duration-500 group-hover:w-28 group-hover:h-28",
                pillar.cornerBorder
              )}
            />
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
}

export function ModernWhyChooseSection({
  badge = "WHY CHOOSE PEP SOFTWARE",
  title = "Built for Quality.",
  gradientWord = "Engineered to Scale.",
  description = "We combine creative artistry with rigorous engineering to deliver digital solutions that give your brand a lasting competitive edge.",
  pillars = DEFAULT_PILLARS,
  className,
  id = "why-choose-pep",
}: ModernWhyChooseSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null);

  // Directly track the section while pinned in the viewport ("start start" to "end end")
  // The animation ONLY executes while the user is actively on the section!
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  // Calibrated spring physics: immediate responsive scroll tracking with zero sluggishness
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 26,
    mass: 0.25,
    restDelta: 0.0005,
  });

  return (
    <section
      ref={sectionRef}
      id={id}
      className={cn(
        // Extra scroll track height so the section pins in view while user scrolls through the 3D jumps
        "relative h-[240vh] bg-[#F7F8F8]",
        className
      )}
    >
      {/* Sticky Fullscreen Viewport Container: Locks into view when user reaches section */}
      <div className="sticky top-0 h-screen w-full flex flex-col justify-center py-6 sm:py-8 lg:py-10 overflow-hidden bg-[#F7F8F8] border-t border-[#C6C2C1]/40">
        {/* Ambient Logo-Themed Glow Orbs */}
        <div className="absolute top-10 -left-20 w-[550px] h-[550px] bg-[#502D6D]/[0.05] rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-10 -right-20 w-[550px] h-[550px] bg-[#FCB116]/[0.07] rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute inset-0 bg-dot-light opacity-30 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full flex flex-col justify-center">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10 lg:mb-12 shrink-0">
            <RevealOnScroll>
              <div className="inline-flex items-center gap-2 mb-2">
                <ShieldCheck className="w-4 h-4 text-[#FCB116] shrink-0" />
                <span className="font-syne text-xs sm:text-sm font-extrabold uppercase tracking-[0.24em] bg-gradient-to-r from-[#502D6D] via-[#8A3DA8] to-[#FCB116] bg-clip-text text-transparent">
                  {badge}
                </span>
              </div>

              <WordReveal
                as="h2"
                text={`${title} ${gradientWord}`}
                gradientWords={gradientWord}
                gradientClassName="text-transparent bg-clip-text bg-gradient-to-r from-[#502D6D] via-[#C86A28] to-[#FCB116]"
                className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-black text-[#151515] leading-[1.12] tracking-tight mt-0.5"
              />

              <ParagraphReveal
                text={description}
                delay={0.12}
                className="text-xs sm:text-sm lg:text-base text-[#544643] leading-relaxed mt-2.5 max-w-2xl mx-auto font-normal hidden sm:block"
              />
            </RevealOnScroll>
          </div>

          {/* Cards & 3D Cinematic Logo Stage */}
          <div className="relative flex items-center justify-center min-h-[440px] sm:min-h-[460px]">
            {/* 3D Cinematic PEP Software Logo: Displays in center before cards jump in, then zooms & dissolves when cards arrive */}
            <Cinematic3DLogo progress={smoothProgress} />

            {/* 4 Cards Grid - Centered in viewport, cards jump in 2 from left & 2 from right while user is on section */}
            <div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7 items-stretch w-full"
              style={{
                perspective: "1600px",
                transformStyle: "preserve-3d",
              }}
            >
              {pillars.map((pillar, idx) => (
                <JumpingPillarCard
                  key={pillar.title}
                  pillar={pillar}
                  idx={idx}
                  progress={smoothProgress}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
