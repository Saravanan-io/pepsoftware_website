"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Search,
  Map,
  Layers,
  Code2,
  ShieldCheck,
  Rocket,
  ArrowRight,
  Workflow,
} from "lucide-react";
import { RevealOnScroll } from "../shared/RevealOnScroll";
import { WordReveal, ParagraphReveal } from "../shared/WordReveal";

const steps = [
  {
    num: "01",
    title: "Discovery",
    desc: "Understand your goals, target audience and requirements.",
    icon: Search,
  },
  {
    num: "02",
    title: "Strategy",
    desc: "Create detailed roadmap and milestone plan.",
    icon: Map,
  },
  {
    num: "03",
    title: "Design",
    desc: "Craft intuitive, minimal and luxurious user interfaces.",
    icon: Layers,
  },
  {
    num: "04",
    title: "Development",
    desc: "Build scalable code with modern, robust tech stacks.",
    icon: Code2,
  },
  {
    num: "05",
    title: "QA & Testing",
    desc: "Ensure pixel-perfection, security and top speed.",
    icon: ShieldCheck,
  },
  {
    num: "06",
    title: "Launch & Support",
    desc: "Seamless deployment and dedicated long-term care.",
    icon: Rocket,
  },
];

export function ProcessStrip() {
  const [activeStep, setActiveStep] = useState<number>(0);
  const hubRef = useRef<HTMLDivElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const pointRef = useRef<SVGGElement>(null);
  const userInteractedRef = useRef<number>(0);
  const [tilt, setTilt] = useState({ x: 0, y: 0, isHovered: false });

  // Synchronize the single neon light point with active card glow
  useEffect(() => {
    let animId: number;
    let startTime: number | null = null;
    const LOOP_DURATION = 12000; // 12 seconds per full loop (~2s per stage)

    // Key tile coordinates on the new 3D hub (1024 x 682)
    const targets = [
      { step: 0, x: 198, y: 245 }, // 01 Discovery (top-left)
      { step: 1, x: 518, y: 130 }, // 02 Strategy (top-center)
      { step: 2, x: 839, y: 283 }, // 03 Design (top-right)
      { step: 3, x: 839, y: 508 }, // 04 Development (bottom-right)
      { step: 4, x: 503, y: 579 }, // 05 QA & Testing (bottom-center)
      { step: 5, x: 200, y: 498 }, // 06 Launch & Support (bottom-left)
    ];

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = (elapsed % LOOP_DURATION) / LOOP_DURATION;

      if (pathRef.current && pointRef.current) {
        const totalLength = pathRef.current.getTotalLength();
        const pt = pathRef.current.getPointAtLength(progress * totalLength);
        pointRef.current.setAttribute("transform", `translate(${pt.x}, ${pt.y})`);

        // Update active card to the tile currently reached by the neon point
        if (Date.now() - userInteractedRef.current > 3000) {
          let closestStep = 0;
          let minDist = Infinity;
          for (const t of targets) {
            const dx = pt.x - t.x;
            const dy = pt.y - t.y;
            const d = dx * dx + dy * dy;
            if (d < minDist) {
              minDist = d;
              closestStep = t.step;
            }
          }
          setActiveStep((prev) => (prev !== closestStep ? closestStep : prev));
        }
      }

      animId = requestAnimationFrame(animate);
    };

    animId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animId);
  }, []);

  const handleStepSelect = (idx: number) => {
    setActiveStep(idx);
    userInteractedRef.current = Date.now();
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!hubRef.current) return;
    const rect = hubRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    // Subtle physical 3D tilt
    const rotateX = ((y - centerY) / centerY) * -7;
    const rotateY = ((x - centerX) / centerX) * 7;
    setTilt({ x: rotateX, y: rotateY, isHovered: true });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0, isHovered: false });
  };

  return (
    <section id="process" className="py-20 lg:py-28 bg-[#F7F8F8] relative overflow-hidden select-none">
      {/* Background Grid & Ambient Lighting Glows */}
      <div className="absolute inset-0 bg-grid-dark opacity-30 pointer-events-none" />
      <div className="absolute top-1/3 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-[#502D6D]/[0.08] rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-[#FCB116]/[0.09] rounded-full blur-[140px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Header Row with Narrative + 3D Innovation Hub */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-16 lg:mb-20">
          {/* Left Column: Heading & Narrative */}
          <RevealOnScroll className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2.5">
              <Workflow className="w-4 h-4 text-[#FCB116] shrink-0" />
              <span className="font-syne text-xs sm:text-sm font-extrabold uppercase tracking-[0.24em] bg-gradient-to-r from-[#502D6D] via-[#8A3DA8] to-[#FCB116] bg-clip-text text-transparent">
                OUR WORKFLOW
              </span>
            </div>

            <WordReveal
              as="h2"
              text="A simple process for powerful results."
              gradientWords="powerful results."
              gradientClassName="text-transparent bg-clip-text bg-gradient-to-r from-[#502D6D] via-[#C86A28] to-[#FCB116]"
              className="text-4xl sm:text-5xl lg:text-[46px] font-black leading-[1.15] tracking-tight text-[#151515]"
            />

            <ParagraphReveal
              text="We follow a structured and collaborative approach to ensure your vision turns into a successful digital product."
              delay={0.12}
              className="text-base sm:text-lg text-[#544643] leading-relaxed max-w-xl"
            />

            {/* From Idea to Impact Pill Card */}
            <div className="pt-2">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-4 px-5 py-3.5 rounded-full bg-[#FFFFFF]/95 border border-[#E5E5E3] shadow-xs hover:border-[#502D6D]/40 hover:shadow-md transition-all duration-300"
              >
                <div className="relative w-8 h-8 sm:w-9 sm:h-9 shrink-0 transition-transform duration-300 group-hover:scale-115 group-hover:-translate-y-1 drop-shadow-[0_4px_10px_rgba(252,177,22,0.35)]">
                  <Image
                    src="/images/realistic-rocket.png"
                    alt="Realistic Rocket Icon"
                    fill
                    sizes="36px"
                    className="object-contain"
                  />
                </div>
                <div className="text-left pr-2">
                  <span className="block text-xs font-black uppercase tracking-wider text-[#502D6D]">
                    FROM IDEA TO IMPACT
                  </span>
                  <span className="block text-[11px] text-[#544643] font-medium mt-0.5">
                    End-to-end digital excellence
                  </span>
                </div>
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-[#502D6D]/15 to-[#FCB116]/20 border border-[#502D6D]/30 flex items-center justify-center text-[#502D6D] ml-auto group-hover:bg-[#502D6D] group-hover:text-white transition-all duration-300">
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </Link>
            </div>
          </RevealOnScroll>

          {/* Right Column: 3D Innovation Hub with Interactive Mouse Parallax & Orbit Effects */}
          <RevealOnScroll delay={0.15} className="lg:col-span-6 flex justify-center">
            <div
              ref={hubRef}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              className="relative w-full max-w-[560px] aspect-[3/2] rounded-3xl cursor-pointer"
              style={{
                perspective: 1200,
              }}
            >
              {/* Dynamic 3D container with tilt */}
              <div
                className="relative w-full h-full rounded-3xl overflow-visible transition-transform duration-200 ease-out"
                style={{
                  transform: tilt.isHovered
                    ? `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) scale3d(1.02, 1.02, 1.02)`
                    : "rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)",
                  transformStyle: "preserve-3d",
                }}
              >
                {/* Ambient warm radial glow behind the bulb */}
                <div className="absolute top-[42%] left-[49%] -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full bg-gradient-to-tr from-[#C86A28]/40 via-[#FF9800]/30 to-transparent blur-2xl animate-pulse pointer-events-none" />

                {/* 3D Hub Transparent PNG Render Image */}
                <Image
                  src="/images/home/workflow-3d-hub.png"
                  alt="3D Process Innovation Hub with orbiting workflow tiles"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  className="object-contain select-none pointer-events-none drop-shadow-xl"
                />

                {/* Single Neon Light Point Perfectly Following the Line */}
                <svg
                  className="absolute inset-0 w-full h-full pointer-events-none overflow-visible z-10"
                  viewBox="0 0 1024 682"
                  preserveAspectRatio="xMidYMid meet"
                >
                  <defs>
                    {/* Glowing Filters */}
                    <filter id="neon-glow-core" x="-50%" y="-50%" width="200%" height="200%">
                      <feGaussianBlur in="SourceGraphic" stdDeviation="2.5" result="blur1" />
                      <feGaussianBlur in="SourceGraphic" stdDeviation="6" result="blur2" />
                      <feMerge>
                        <feMergeNode in="blur2" />
                        <feMergeNode in="blur1" />
                        <feMergeNode in="SourceGraphic" />
                      </feMerge>
                    </filter>

                    <filter id="neon-glow-ambient" x="-100%" y="-100%" width="300%" height="300%">
                      <feGaussianBlur stdDeviation="10" result="blur" />
                      <feMerge>
                        <feMergeNode in="blur" />
                        <feMergeNode in="SourceGraphic" />
                      </feMerge>
                    </filter>

                    {/* Exact Orbit Path following the orange line in the new 3D image */}
                    <path
                      ref={pathRef}
                      id="neon-orbit-path"
                      d="M 198 245 C 235.5 210.0, 286.7 184.2, 340 165 C 393.3 145.8, 458.0 126.7, 518 130 C 578.0 133.3, 646.5 159.5, 700 185 C 753.5 210.5, 804.0 247.2, 839 283 C 874.0 318.8, 910.0 362.5, 910 400 C 910.0 437.5, 875.7 481.3, 839 508 C 802.3 534.7, 746.0 548.2, 690 560 C 634.0 571.8, 563.0 579.0, 503 579 C 443.0 579.0, 380.5 573.5, 330 560 C 279.5 546.5, 235.8 528.8, 200 498 C 164.2 467.2, 115.3 417.2, 115 375 C 114.7 332.8, 160.5 280.0, 198 245 Z"
                      fill="none"
                      stroke="none"
                    />
                  </defs>

                  {/* Single Neon Light Point */}
                  <g ref={pointRef} filter="url(#neon-glow-core)">
                    {/* Soft atmospheric amber glow */}
                    <circle r="14" fill="#C86A28" opacity="0.45" filter="url(#neon-glow-ambient)" />

                    {/* Vibrant orange neon flare */}
                    <circle r="7.5" fill="#FF7700" opacity="0.95" />

                    {/* Intense hot white core point */}
                    <circle r="3.2" fill="#FFFFFF" />

                    {/* Fading trailing comet sparks */}
                    <circle cx="-5" cy="1" r="4.2" fill="#FFA500" opacity="0.75" />
                    <circle cx="-9" cy="2" r="2.2" fill="#C86A28" opacity="0.45" />
                  </g>
                </svg>

              </div>
            </div>
          </RevealOnScroll>
        </div>

        {/* Bottom Process Steps Strip */}
        <div className="relative">
          {/* Continuous Curved Connecting Track with Circular Nodes (Desktop) */}
          <div className="hidden lg:block absolute top-[52px] left-[5%] right-[5%] h-12 pointer-events-none z-0">
            <svg
              className="w-full h-full overflow-visible"
              viewBox="0 0 1000 60"
              preserveAspectRatio="none"
              fill="none"
            >
              {/* Subtle background connecting spline */}
              <path
                d="M 50 30 Q 140 5 230 30 T 410 30 T 590 30 T 770 30 T 950 30"
                stroke="#F4D3C2"
                strokeWidth="2"
                strokeDasharray="4 4"
                className="opacity-70"
              />

              {/* Active flowing energy line up to active card */}
              <path
                d="M 50 30 Q 140 5 230 30 T 410 30 T 590 30 T 770 30 T 950 30"
                stroke="url(#process-gradient)"
                strokeWidth="2.5"
                strokeLinecap="round"
                className="transition-all duration-700"
              />

              <defs>
                <linearGradient id="process-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#502D6D" stopOpacity="0.9" />
                  <stop offset={`${Math.min(100, (activeStep + 1) * 16)}%`} stopColor="#C86A28" stopOpacity="1" />
                  <stop offset={`${Math.min(100, (activeStep + 1) * 18)}%`} stopColor="#FCB116" stopOpacity="1" />
                  <stop offset={`${Math.min(100, (activeStep + 1) * 20)}%`} stopColor="#C6C2C1" stopOpacity="0.2" />
                </linearGradient>
              </defs>

              {/* Connecting node circles between each pair of cards */}
              {[140, 320, 500, 680, 860].map((cx, i) => {
                const isPassed = activeStep > i;
                const isCurrent = activeStep === i || activeStep === i + 1;
                return (
                  <g key={i}>
                    <circle
                      cx={cx}
                      cy={18}
                      r={isCurrent ? "8" : "6"}
                      fill="#FFFFFF"
                      stroke={isCurrent ? "#FCB116" : isPassed ? "#502D6D" : "#E5E5E3"}
                      strokeWidth={isCurrent ? "3" : "2.5"}
                      className="transition-all duration-300"
                    />
                    <circle
                      cx={cx}
                      cy={18}
                      r={isCurrent ? "4" : "2.5"}
                      fill={isCurrent ? "#FCB116" : isPassed ? "#502D6D" : "#E5E5E3"}
                      className="transition-all duration-300"
                    />
                  </g>
                );
              })}
            </svg>
          </div>

          {/* 6 Process Cards Grid */}
          <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3.5 lg:gap-4">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              const isActive = activeStep === idx;

              return (
                <RevealOnScroll key={step.num} delay={idx * 0.06}>
                  <div
                    onClick={() => handleStepSelect(idx)}
                    onMouseEnter={() => handleStepSelect(idx)}
                    className={`group relative flex flex-col items-center text-center p-4 sm:p-5 rounded-[26px] transition-all duration-500 cursor-pointer ${isActive
                        ? "bg-gradient-to-b from-[#FFFFFF] via-[#FAF5FC] to-[#FFF9EE] border-2 border-[#502D6D] ring-4 ring-[#FCB116]/25 shadow-[0_0_35px_rgba(80,45,109,0.22),0_15px_30px_rgba(252,177,22,0.18)] -translate-y-3 scale-[1.03]"
                        : "bg-[#FFFFFF] border border-[#E5E5E3] shadow-xs hover:border-[#502D6D]/40 hover:-translate-y-1 hover:shadow-md"
                      }`}
                  >
                    {/* Step Number Top Pill with Reached Beacon */}
                    <div className="relative mb-3 flex items-center justify-center">
                      {isActive && (
                        <span className="absolute -top-3 w-2.5 h-2.5 rounded-full bg-[#FCB116] shadow-[0_0_10px_#FCB116] animate-ping" />
                      )}
                      <span
                        className={`inline-block px-3 py-0.5 rounded-full text-xs font-extrabold transition-all duration-300 ${isActive
                            ? "bg-gradient-to-r from-[#502D6D] to-[#FCB116] text-white shadow-[0_0_16px_rgba(80,45,109,0.4)] scale-105"
                            : "text-[#544643] bg-transparent"
                          }`}
                      >
                        {step.num}
                      </span>
                    </div>

                    {/* Step Icon Squircle with Neon Aura */}
                    <div
                      className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-3.5 transition-all duration-300 ${isActive
                          ? "bg-gradient-to-tr from-[#FF7700] to-[#FFA500] text-white shadow-[0_0_24px_rgba(255,119,0,0.6)] scale-110"
                          : "bg-[#FDF2EC] border border-[#F4D3C2] text-[#C86A28] group-hover:scale-105"
                        }`}
                    >
                      <Icon className="w-5 h-5 stroke-[2.4]" />
                    </div>

                    {/* Step Title */}
                    <h4
                      className={`text-sm font-black mb-1.5 transition-colors ${isActive
                          ? "text-[#C86A28]"
                          : "text-[#151515] group-hover:text-[#C86A28]"
                        }`}
                    >
                      {step.title}
                    </h4>

                    {/* Step Description */}
                    <p className="text-[11px] text-[#544643] leading-relaxed mb-4 flex-1">
                      {step.desc}
                    </p>

                    {/* Bottom Action Arrow Circle Button */}
                    <div
                      className={`w-7 h-7 rounded-full flex items-center justify-center transition-all duration-300 ${isActive
                          ? "bg-[#FF7700] text-white shadow-[0_0_14px_rgba(255,119,0,0.7)] scale-115"
                          : "bg-[#FDF2EC] border border-[#F4D3C2] text-[#C86A28] group-hover:bg-[#C86A28] group-hover:text-white"
                        }`}
                    >
                      <ArrowRight className="w-3.5 h-3.5" />
                    </div>
                  </div>
                </RevealOnScroll>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
