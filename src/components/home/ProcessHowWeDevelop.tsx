"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { Briefcase, Globe, Smartphone, Star, TrendingUp } from "lucide-react";
import { AnimatedCounter } from "../shared/AnimatedCounter";
import { RevealOnScroll } from "../shared/RevealOnScroll";
import { WordReveal, ParagraphReveal } from "../shared/WordReveal";

const metrics = [
  { value: "5", label: "Years Experience", icon: Briefcase },
  { value: "25+", label: "Website Projects", icon: Globe },
  { value: "10+", label: "Mobile App Projects", icon: Smartphone },
  { value: "4.7", label: "Review Clients", icon: Star },
];

interface PartyPaper {
  id: number;
  type: "rect" | "ribbon" | "star" | "circle";
  color: string;
  w: number;
  h: number;
  vx: number;
  vy: number;
  gravity: number;
  wobbleFreq: number;
  wobbleAmp: number;
  rotSpeed: number;
  flipSpeed: number;
  delay: number;
}

function seededRandom(seed: number) {
  const x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
}

const CONFETTI_COLORS = [
  "#FF007F", // Neon Pink / Rose
  "#FFD700", // Bright Gold
  "#00F0FF", // Electric Cyan
  "#FF6B00", // Vibrant Orange
  "#A855F7", // Electric Purple
  "#10B981", // Emerald Mint
  "#EC4899", // Instagram Pink
  "#3B82F6", // Sky Blue
  "#FFCC00", // Warm Yellow
  "#FFFFFF", // Shimmer White
];

// 68 pre-computed deterministic particles for Instagram-style party paper burst
const PARTY_PAPERS: PartyPaper[] = Array.from({ length: 68 }, (_, i) => {
  const s = i * 19.83 + 3;
  const r1 = seededRandom(s);
  const r2 = seededRandom(s + 1);
  const r3 = seededRandom(s + 2);
  const r4 = seededRandom(s + 3);
  const r5 = seededRandom(s + 4);
  const r6 = seededRandom(s + 5);

  const type: "rect" | "ribbon" | "star" | "circle" =
    i % 4 === 0 ? "ribbon" : i % 6 === 0 ? "star" : i % 8 === 0 ? "circle" : "rect";
  const color = CONFETTI_COLORS[Math.floor(r1 * CONFETTI_COLORS.length)];

  // Fan out upwards and leftwards across the steps and trophy
  const angleDeg = -70 - r2 * 100;
  const angleRad = (angleDeg * Math.PI) / 180;
  const speed = 7 + r3 * 15;

  return {
    id: i,
    type,
    color,
    w: Number((6 + r4 * 5).toFixed(1)),
    h: Number((11 + r5 * 7).toFixed(1)),
    vx: Number((Math.cos(angleRad) * speed).toFixed(2)),
    vy: Number((Math.sin(angleRad) * speed).toFixed(2)),
    gravity: Number((1.0 + r6 * 0.4).toFixed(2)),
    wobbleFreq: Number((7 + r1 * 10).toFixed(1)),
    wobbleAmp: Number((14 + r2 * 22).toFixed(1)),
    rotSpeed: Math.round((r3 - 0.5) * 720),
    flipSpeed: Number((6 + r4 * 10).toFixed(1)),
    delay: Number(((i / 68) * 0.26).toFixed(3)),
  };
});

export function ProcessHowWeDevelop() {
  const containerRef = useRef<HTMLDivElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const characterRef = useRef<SVGGElement>(null);
  const armLeftRef = useRef<SVGGElement>(null);
  const armRightRef = useRef<SVGGElement>(null);
  const legLeftRef = useRef<SVGGElement>(null);
  const legRightRef = useRef<SVGGElement>(null);
  const bodyBobRef = useRef<SVGGElement>(null);
  const celebrateRef = useRef<SVGGElement>(null);

  // Instagram Party Effect Refs
  const confettiGroupRef = useRef<SVGGElement>(null);
  const burstRingRef = useRef<SVGCircleElement>(null);
  const trophyFlareRef = useRef<SVGCircleElement>(null);
  const partyElementsRef = useRef<(SVGGElement | null)[]>([]);

  const [tilt, setTilt] = useState({ x: 0, y: 0, isHovered: false });

  const sectionRef = useRef<HTMLElement>(null);

  // 60FPS Continuous Animation of Walking Man & Instagram Party Paper Effect
  useEffect(() => {
    let animId: number;
    let startTime: number | null = null;
    let isVisible = false;
    let isRunning = false;
    let cachedTotalLength = 0;
    const LOOP_DURATION = 12500; // 12.5 seconds total cycle
    const walkEnd = 0.76; // 9.5s ascent, 3.0s celebration with party paper flow

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const loopTime = elapsed % LOOP_DURATION;
      const progress = loopTime / LOOP_DURATION;

      if (pathRef.current && characterRef.current) {
        if (!cachedTotalLength) {
          cachedTotalLength = pathRef.current.getTotalLength() || 1;
        }
        const totalLength = cachedTotalLength;
        const isCelebrating = progress >= walkEnd;
        const walkProgress = isCelebrating ? 1 : progress / walkEnd;

        // Current point on the arrow path
        const currentDist = walkProgress * totalLength;
        const pt = pathRef.current.getPointAtLength(currentDist);

        // Compute tangent angle for natural uphill inclination
        const delta = 3;
        const ptAhead = pathRef.current.getPointAtLength(Math.min(totalLength, currentDist + delta));
        const angleRad = Math.atan2(ptAhead.y - pt.y, ptAhead.x - pt.x);
        const slopeDeg = (angleRad * 180) / Math.PI;

        // Natural body lean into the slope (dampened so character stays upright)
        const bodyLean = isCelebrating ? 0 : slopeDeg * 0.35;

        // Position character with scale(1.75) - noticeable, clear, planted firmly on golden rail
        characterRef.current.setAttribute(
          "transform",
          `translate(${pt.x}, ${pt.y - 8}) rotate(${bodyLean}) scale(1.75)`
        );

        // Fade in at the start, fade out at end
        let charOpacity = 1;
        if (progress < 0.03) {
          charOpacity = progress / 0.03;
        } else if (progress > 0.97) {
          charOpacity = (1 - progress) / 0.03;
        }
        characterRef.current.setAttribute("opacity", charOpacity.toFixed(2));

        if (!isCelebrating) {
          // Cadence: Natural human steps (160ms per step)
          const walkCycle = (elapsed / 160) % (Math.PI * 2);
          const legLeft = Math.sin(walkCycle) * 26;
          const legRight = Math.sin(walkCycle + Math.PI) * 26;
          const armLeft = Math.sin(walkCycle + Math.PI) * 22;
          const armRight = Math.sin(walkCycle) * 22;
          const headBob = -Math.abs(Math.sin(walkCycle * 2)) * 2.2;

          if (legLeftRef.current) legLeftRef.current.setAttribute("transform", `translate(-3, -15) rotate(${legLeft})`);
          if (legRightRef.current) legRightRef.current.setAttribute("transform", `translate(3, -15) rotate(${legRight})`);
          if (armLeftRef.current) armLeftRef.current.setAttribute("transform", `translate(-3, -26) rotate(${armLeft})`);
          if (armRightRef.current) armRightRef.current.setAttribute("transform", `translate(3, -26) rotate(${armRight})`);
          if (bodyBobRef.current) bodyBobRef.current.setAttribute("transform", `translate(0, ${headBob})`);
          if (celebrateRef.current) celebrateRef.current.setAttribute("opacity", "0");

          // Hide party paper effects when walking
          if (confettiGroupRef.current) confettiGroupRef.current.setAttribute("opacity", "0");
          if (burstRingRef.current) burstRingRef.current.setAttribute("opacity", "0");
          if (trophyFlareRef.current) trophyFlareRef.current.setAttribute("opacity", "0");
        } else {
          // Victory Celebration at the Trophy & Final Arrow: Joyful arms raised in triumph!
          const cheerWiggle = Math.sin(elapsed / 90) * 14;
          const cheerHop = Math.abs(Math.sin(elapsed / 130)) * -4;

          if (legLeftRef.current) legLeftRef.current.setAttribute("transform", "translate(-4, -15) rotate(5)");
          if (legRightRef.current) legRightRef.current.setAttribute("transform", "translate(4, -15) rotate(-5)");
          if (armLeftRef.current) armLeftRef.current.setAttribute("transform", `translate(-4, -26) rotate(${-140 + cheerWiggle})`);
          if (armRightRef.current) armRightRef.current.setAttribute("transform", `translate(4, -26) rotate(${140 - cheerWiggle})`);
          if (bodyBobRef.current) bodyBobRef.current.setAttribute("transform", `translate(0, ${-4 + cheerHop})`);

          if (celebrateRef.current) {
            const starPulse = 1.1 + Math.sin(elapsed / 110) * 0.25;
            celebrateRef.current.setAttribute("opacity", "1");
            celebrateRef.current.setAttribute("transform", `translate(1, -48) scale(${starPulse.toFixed(2)})`);
          }

          // INSTAGRAM PARTY PAPER EFFECT FLOW
          const celebProgress = (progress - walkEnd) / (1 - walkEnd); // 0.0 to 1.0

          // 1. Initial Golden Shockwave Pop from Final Arrowhead
          if (burstRingRef.current) {
            if (celebProgress < 0.25) {
              const ringT = celebProgress / 0.25;
              burstRingRef.current.setAttribute("r", `${ringT * 95}`);
              burstRingRef.current.setAttribute("opacity", `${(1 - ringT) * 0.9}`);
              burstRingRef.current.setAttribute("stroke-width", `${Math.max(1, 4 * (1 - ringT))}`);
            } else {
              burstRingRef.current.setAttribute("opacity", "0");
            }
          }

          // 2. Trophy Golden Ambient Flare
          if (trophyFlareRef.current) {
            if (celebProgress < 0.45) {
              const flareT = celebProgress / 0.45;
              trophyFlareRef.current.setAttribute("opacity", `${Math.sin(flareT * Math.PI) * 0.85}`);
              trophyFlareRef.current.setAttribute("transform", `translate(945, 165) scale(${1 + flareT * 0.5})`);
            } else {
              trophyFlareRef.current.setAttribute("opacity", "0");
            }
          }

          // 3. Flow of Party Paper Confetti across the image
          if (confettiGroupRef.current) {
            confettiGroupRef.current.setAttribute("opacity", "1");
          }

          PARTY_PAPERS.forEach((p, idx) => {
            const el = partyElementsRef.current[idx];
            if (!el) return;

            if (celebProgress < p.delay) {
              el.setAttribute("opacity", "0");
              return;
            }

            const tau = (celebProgress - p.delay) / (1 - p.delay); // 0.0 to 1.0
            // Flow trajectory: shoots up from (940, 165) then arcs leftwards and down over steps
            const x = 940 + p.vx * tau * 24 + Math.sin(tau * p.wobbleFreq) * p.wobbleAmp;
            const y = 165 + p.vy * tau * 16 + p.gravity * Math.pow(tau, 1.8) * 440;

            // 3D paper tumbling flip & rotation
            const flip = Math.cos(tau * p.flipSpeed);
            const rot = (tau * p.rotSpeed) % 360;

            // Opacity envelope: quick fade-in, smooth fade-out near end
            let op = 1;
            if (tau < 0.08) op = tau / 0.08;
            else if (celebProgress > 0.86) op = (1 - celebProgress) / 0.14;

            el.setAttribute(
              "transform",
              `translate(${x.toFixed(1)}, ${y.toFixed(1)}) rotate(${rot.toFixed(1)}) scale(${flip.toFixed(2)}, 1)`
            );
            el.setAttribute("opacity", op.toFixed(2));
          });
        }
      }

      if (isVisible) {
        animId = requestAnimationFrame(animate);
      } else {
        isRunning = false;
      }
    };

    const startAnimation = () => {
      if (!isRunning) {
        isRunning = true;
        animId = requestAnimationFrame(animate);
      }
    };

    const stopAnimation = () => {
      isRunning = false;
      cancelAnimationFrame(animId);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisible = entry.isIntersecting;
        if (isVisible) {
          startAnimation();
        } else {
          stopAnimation();
        }
      },
      { rootMargin: "150px 0px" }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      stopAnimation();
      observer.disconnect();
    };
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -6;
    const rotateY = ((x - centerX) / centerX) * 6;
    setTilt({ x: rotateX, y: rotateY, isHovered: true });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0, isHovered: false });
  };

  return (
    <section ref={sectionRef} className="py-20 lg:py-28 bg-[#E7EBEA] relative overflow-hidden select-none">
      <div className="absolute inset-0 bg-dot-light opacity-30 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Heading + Metric Cards */}
          <div className="lg:col-span-6 space-y-8">
            <RevealOnScroll>
              <div className="inline-flex items-center gap-2.5 mb-2">
                <span className="w-4 h-[2px] rounded-full bg-gradient-to-r from-[#502D6D] to-[#FCB116]" />
                <span className="font-syne text-xs sm:text-sm font-extrabold uppercase tracking-[0.24em] bg-gradient-to-r from-[#502D6D] via-[#8A3DA8] to-[#FCB116] bg-clip-text text-transparent">
                  OUR IMPACT
                </span>
              </div>
              <WordReveal
                as="h2"
                text="Numbers that build trust."
                gradientWords="trust."
                gradientClassName="text-transparent bg-clip-text bg-gradient-to-r from-[#544643] to-[#C86A28]"
                className="text-4xl sm:text-5xl font-extrabold text-[#151515] leading-tight tracking-tight mt-4"
              />
              <ParagraphReveal
                text="We take pride in delivering digital solutions that create real value for our clients across every industry and business stage."
                delay={0.12}
                className="text-base sm:text-lg text-[#544643] leading-relaxed mt-4 max-w-xl"
              />
            </RevealOnScroll>

            {/* 4 Metrics Grid */}
            <div className="grid grid-cols-2 gap-4 sm:gap-5">
              {metrics.map((m, idx) => {
                const Icon = m.icon;
                return (
                  <RevealOnScroll key={m.label} delay={idx * 0.08}>
                    <div
                      className="p-6 rounded-3xl bg-[#EFF0EF] border border-[#C6C2C1] shadow-xs hover:border-[#544643] hover:shadow-lg hover:-translate-y-1.5 hover:scale-[1.02] transition-[border-color,box-shadow,transform] duration-300 group card-shimmer"
                    >
                      <div className="w-12 h-12 rounded-2xl bg-[#E9E8E6] border border-[#C6C2C1] flex items-center justify-center mb-5 shadow-xs group-hover:scale-105 group-hover:border-[#544643] transition-[border-color,transform] duration-300">
                        <Icon className="w-6 h-6 text-[#C86A28]" />
                      </div>
                      <div className="text-4xl font-black text-[#151515] leading-none">
                        <AnimatedCounter value={m.value} />
                      </div>
                      <p className="text-sm font-semibold text-[#544643] mt-2">{m.label}</p>
                    </div>
                  </RevealOnScroll>
                );
              })}
            </div>
          </div>

          {/* Right Column: 3D Ascending Growth Milestones Graphic with Animated Tiny Man Walking along the Arrow */}
          <RevealOnScroll delay={0.2} className="lg:col-span-6 flex justify-center">
            <div
              ref={containerRef}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              className="relative w-full max-w-[580px] aspect-[3/2] rounded-3xl cursor-pointer"
              style={{
                perspective: 1200,
              }}
            >
              {/* Dynamic 3D tilt wrapper */}
              <div
                className="relative w-full h-full rounded-3xl overflow-visible transition-transform duration-200 ease-out"
                style={{
                  transform: tilt.isHovered
                    ? `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) scale3d(1.02, 1.02, 1.02)`
                    : "rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)",
                  transformStyle: "preserve-3d",
                }}
              >
                {/* Ambient Warm Glow behind the Golden Trophy and Arrow */}
                <div className="absolute top-[20%] right-[10%] w-60 h-60 rounded-full bg-gradient-to-br from-[#FF9800]/30 via-[#C86A28]/25 to-transparent blur-3xl pointer-events-none animate-pulse" />

                {/* 3D Growth Steps Transparent Render Image */}
                <Image
                  src="/images/home/numbers-growth-steps.png"
                  alt="3D Progression Steps from Ideation and Development to Victory Trophy"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-contain select-none pointer-events-none drop-shadow-2xl"
                />

                {/* SVG Overlay: Accurate Golden Arrow Guide Path & Tiny Animated Walking Man */}
                <svg
                  className="absolute inset-0 w-full h-full pointer-events-none overflow-visible z-10"
                  viewBox="0 0 1024 682"
                  preserveAspectRatio="xMidYMid meet"
                >
                  <defs>
                    {/* Exact Spline Path passing through the 7 glowing nodes of the golden arrow */}
                    <path
                      ref={pathRef}
                      id="growth-arrow-curve"
                      d="M 125 613 C 150.0 610.0, 317.7 582.0, 363 571 C 408.3 560.0, 408.0 558.2, 441 547 C 474.0 535.8, 515.7 522.3, 561 504 C 606.3 485.7, 665.5 465.2, 713 437 C 760.5 408.8, 806.0 380.5, 846 335 C 886.0 289.5, 925.0 200.0, 953 164"
                      fill="none"
                      stroke="none"
                    />

                    {/* Subtle Footstep Light Ripple */}
                    <radialGradient id="footstep-aura" cx="50%" cy="50%" r="50%">
                      <stop offset="0%" stopColor="#FFD700" stopOpacity="0.8" />
                      <stop offset="40%" stopColor="#FF9500" stopOpacity="0.4" />
                      <stop offset="100%" stopColor="#C86A28" stopOpacity="0" />
                    </radialGradient>

                    {/* Golden Shockwave & Trophy Blast Aura */}
                    <radialGradient id="trophy-blast-glow" cx="50%" cy="50%" r="50%">
                      <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.95" />
                      <stop offset="35%" stopColor="#FFD700" stopOpacity="0.85" />
                      <stop offset="70%" stopColor="#FF7700" stopOpacity="0.35" />
                      <stop offset="100%" stopColor="#FF007F" stopOpacity="0" />
                    </radialGradient>

                    {/* Confetti Paper Depth Shadow */}
                    <filter id="confetti-shadow" x="-30%" y="-30%" width="160%" height="160%">
                      <feDropShadow dx="0" dy="2" stdDeviation="2" floodColor="#000000" floodOpacity="0.25" />
                    </filter>
                  </defs>

                  {/* Tiny Walking Man Character Group */}
                  <g ref={characterRef} className="pointer-events-none">
                    {/* Contact drop shadow cast onto golden rail */}
                    <ellipse cx="0" cy="0" rx="9" ry="3.5" fill="#151515" opacity="0.35" />

                    {/* Golden footstep glow aura */}
                    <circle cx="0" cy="0" r="7" fill="url(#footstep-aura)" />

                    {/* Articulated Body Group with Vertical Bob */}
                    <g ref={bodyBobRef}>
                      {/* Back Arm (Left Arm) */}
                      <g ref={armLeftRef}>
                        <path
                          d="M 0 0 L -3 10 L -4 17"
                          stroke="#374151"
                          strokeWidth="3.2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          fill="none"
                        />
                        <circle cx="-4" cy="17" r="2" fill="#F4A261" />
                      </g>

                      {/* Back Leg (Left Leg) */}
                      <g ref={legLeftRef}>
                        <path
                          d="M 0 0 L -2 8 L -3 15"
                          stroke="#1F2937"
                          strokeWidth="3.4"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          fill="none"
                        />
                        {/* Shoe */}
                        <path d="M -3 15 L 3 16" stroke="#FF7700" strokeWidth="3" strokeLinecap="round" />
                      </g>

                      {/* Torso & Stylish Modern Agency Jacket */}
                      <path
                        d="M -5 -27 L 5 -26 L 3 -14 L -4 -14 Z"
                        fill="#151515"
                        stroke="#374151"
                        strokeWidth="0.8"
                      />
                      {/* Vibrant Orange Tie / Inner Collar */}
                      <path d="M 0 -26 L 1 -21 L 0 -17" stroke="#FF7700" strokeWidth="1.6" strokeLinecap="round" />

                      {/* Neck */}
                      <line x1="0" y1="-27" x2="0" y2="-29" stroke="#F4A261" strokeWidth="2.5" />

                      {/* Head */}
                      <circle cx="1" cy="-34" r="5" fill="#F4A261" />
                      {/* Stylish Hair */}
                      <path d="M -4 -35 Q 2 -41 7 -35 Q 4 -32 6 -30 Q 1 -33 -4 -35 Z" fill="#2B1E16" />
                      {/* Face / Forward Visor silhouette */}
                      <circle cx="4.5" cy="-34" r="1.2" fill="#151515" />

                      {/* Front Leg (Right Leg) */}
                      <g ref={legRightRef}>
                        <path
                          d="M 0 0 L 2 8 L 3 15"
                          stroke="#111827"
                          strokeWidth="3.6"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          fill="none"
                        />
                        {/* Shoe */}
                        <path d="M 3 15 L 9 16" stroke="#FF7700" strokeWidth="3.2" strokeLinecap="round" />
                      </g>

                      {/* Front Arm (Right Arm) with Tech Briefcase */}
                      <g ref={armRightRef}>
                        <path
                          d="M 0 0 L 4 10 L 6 17"
                          stroke="#1F2937"
                          strokeWidth="3.4"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          fill="none"
                        />
                        <circle cx="6" cy="17" r="2.2" fill="#F4A261" />

                        {/* Tiny Modern Orange Briefcase */}
                        <g transform="translate(6, 16) rotate(6)">
                          <rect x="-1" y="0" width="7" height="6" rx="1.5" fill="#C86A28" stroke="#FF7700" strokeWidth="0.7" />
                          <line x1="1" y1="0" x2="1" y2="-2" stroke="#544643" strokeWidth="0.8" />
                          <circle cx="2.5" cy="3" r="1" fill="#FFFFFF" />
                        </g>
                      </g>

                      {/* Golden Celebration Starburst when reaching the Trophy */}
                      <g ref={celebrateRef} opacity="0" transform="translate(1, -45)">
                        <path d="M 0 -7 L 2 -2 L 7 0 L 2 2 L 0 7 L -2 2 L -7 0 L -2 -2 Z" fill="#FFD700" stroke="#FF9500" strokeWidth="0.6" />
                        <circle cx="0" cy="0" r="2.5" fill="#FFFFFF" />
                      </g>
                    </g>
                  </g>

                  {/* Instagram Party Effect Layer: Expanding Pop, Glowing Flare & Flowing Party Paper */}
                  <g id="instagram-party-layer" className="pointer-events-none">
                    {/* Golden Trophy Blast Radial Glow */}
                    <circle
                      ref={trophyFlareRef}
                      cx="0"
                      cy="0"
                      r="65"
                      fill="url(#trophy-blast-glow)"
                      opacity="0"
                    />

                    {/* Expanding Golden Shockwave Pop */}
                    <circle
                      ref={burstRingRef}
                      cx="945"
                      cy="165"
                      r="0"
                      fill="none"
                      stroke="#FFD700"
                      strokeWidth="3"
                      opacity="0"
                    />

                    {/* Flying Party Paper & Confetti Streamers */}
                    <g ref={confettiGroupRef} opacity="0" filter="url(#confetti-shadow)">
                      {PARTY_PAPERS.map((p, idx) => (
                        <g
                          key={p.id}
                          ref={(el) => {
                            partyElementsRef.current[idx] = el;
                          }}
                          opacity="0"
                        >
                          {p.type === "rect" && (
                            <rect
                              x={-p.w / 2}
                              y={-p.h / 2}
                              width={p.w}
                              height={p.h}
                              rx={1.5}
                              fill={p.color}
                            />
                          )}
                          {p.type === "ribbon" && (
                            <path
                              d="M -3 -13 Q 5 -6 -3 0 Q 5 6 -3 13"
                              stroke={p.color}
                              strokeWidth={3}
                              fill="none"
                              strokeLinecap="round"
                            />
                          )}
                          {p.type === "star" && (
                            <path
                              d="M 0 -8 L 2.4 -2.4 L 8 0 L 2.4 2.4 L 0 8 L -2.4 2.4 L -8 0 L -2.4 -2.4 Z"
                              fill={p.color}
                            />
                          )}
                          {p.type === "circle" && (
                            <circle cx={0} cy={0} r={p.w / 2} fill={p.color} />
                          )}
                        </g>
                      ))}
                    </g>
                  </g>
                </svg>

                {/* Floating Glass Performance Badge */}
                <div className="absolute -bottom-2 sm:bottom-2 right-4 sm:right-6 px-4 py-2.5 rounded-2xl bg-[#FFFFFF]/90 backdrop-blur-md border border-[#E5E5E3] shadow-lg flex items-center gap-3 z-20">
                  <div className="w-8 h-8 rounded-xl bg-[#FDF2EC] border border-[#F4D3C2] flex items-center justify-center text-[#C86A28] shrink-0">
                    <TrendingUp className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="flex items-center gap-1.5">
                      <span className="text-[11px] font-black uppercase tracking-wider text-[#151515]">
                        Performance Velocity
                      </span>
                    </div>
                    <span className="text-[10px] font-bold text-[#C86A28]">
                      +184% YoY Avg Growth
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}
