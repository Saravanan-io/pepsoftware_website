"use client";

import { useState, useMemo, useRef, useEffect, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Play,
  Pause,
  Layers,
  Sparkles,
} from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolio";
import { ProjectItem } from "@/types";
import { RevealOnScroll } from "../shared/RevealOnScroll";
import { WordReveal, ParagraphReveal } from "../shared/WordReveal";

const categories = ["All", "Websites", "Mobile Apps", "UI/UX", "AR/VR"];

export function PortfolioTeaser() {
  const [activeTab, setActiveTab] = useState("All");
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const [isCardHovered, setIsCardHovered] = useState(false);
  const [activeIdx, setActiveIdx] = useState(0);

  // Animation & 3D slot tracking
  const posRef = useRef(0);
  const targetPosRef = useRef(0);
  const animFrameRef = useRef<number | null>(null);
  const lastTimeRef = useRef<number>(0);
  const isCardHoveredRef = useRef<boolean>(false);

  // Drag interaction state
  const isDraggingRef = useRef(false);
  const dragStartXRef = useRef(0);
  const dragStartPosRef = useRef(0);
  const dragVelocityRef = useRef(0);
  const lastDragXRef = useRef(0);
  const lastDragTimeRef = useRef(0);

  // Card DOM refs
  const cardElementsRef = useRef<(HTMLDivElement | null)[]>([]);

  // Filter projects by active tab
  const filteredProjects: ProjectItem[] = useMemo(
    () =>
      activeTab === "All"
        ? PORTFOLIO_DATA
        : PORTFOLIO_DATA.filter((p) => p.category === activeTab),
    [activeTab]
  );

  const total = filteredProjects.length;

  // Handle Tab Switch cleanly
  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    posRef.current = 0;
    targetPosRef.current = 0;
    setActiveIdx(0);
  };

  // Step rotation smoothly by 1 card
  const step = useCallback(
    (direction: 1 | -1) => {
      targetPosRef.current = Math.round(targetPosRef.current) + direction;
      posRef.current = targetPosRef.current;
    },
    []
  );

  // Jump smoothly to a specific project index
  const jumpToIndex = useCallback(
    (targetIndex: number) => {
      if (total <= 1) return;
      const current = Math.round(posRef.current);
      const currentMod = ((current % total) + total) % total;
      let diff = targetIndex - currentMod;
      if (diff > total / 2) diff -= total;
      if (diff < -total / 2) diff += total;
      targetPosRef.current = current + diff;
      posRef.current = targetPosRef.current;
    },
    [total]
  );

  // Main 60-120fps Animation Loop with Direct DOM updates
  useEffect(() => {
    lastTimeRef.current = performance.now();

    const animate = (now: number) => {
      const dt = Math.min(now - lastTimeRef.current, 100);
      lastTimeRef.current = now;

      // Continuous automatic smooth flow: ~4.0 seconds per card transition
      const baseAutoSpeed = 0.0042;

      // PAUSE IMMEDIATELY when hovering on ANY card or during drag
      const isPaused =
        !isAutoPlay || isCardHoveredRef.current || isDraggingRef.current;

      if (!isPaused && total > 1) {
        posRef.current += baseAutoSpeed * (dt / 16.67);
        targetPosRef.current = posRef.current;
      } else if (!isDraggingRef.current) {
        // If paused or snapping to a target, lerp smoothly
        posRef.current += (targetPosRef.current - posRef.current) * 0.1;
      }

      // Handle drag inertia decay
      if (!isDraggingRef.current && Math.abs(dragVelocityRef.current) > 0.002) {
        posRef.current += dragVelocityRef.current;
        targetPosRef.current = posRef.current;
        dragVelocityRef.current *= 0.92;
      }

      const curPos = posRef.current;
      const roundedPos = Math.round(curPos);
      const normIdx = ((roundedPos % total) + total) % total;

      if (normIdx !== activeIdx && Math.abs(curPos - roundedPos) < 0.3) {
        setActiveIdx(normIdx);
      }

      // Responsive spacing factors for the refined width arena
      const isMobile = typeof window !== "undefined" && window.innerWidth < 640;
      const isTablet =
        typeof window !== "undefined" &&
        window.innerWidth >= 640 &&
        window.innerWidth < 1024;
      const isLarge =
        typeof window !== "undefined" && window.innerWidth >= 1400;

      const slotSpacingX = isMobile
        ? 255
        : isTablet
        ? 320
        : isLarge
        ? 435
        : 385;
      const slotSpacingZ = isMobile ? 115 : isTablet ? 145 : 175;
      const rotYFactor = isMobile ? 22 : 26;

      // Apply neat 3D cylindrical slot transforms to all card nodes
      cardElementsRef.current.forEach((el, i) => {
        if (!el) return;

        // Circular slot distance relative to current virtual position
        let dist = (i - (curPos % total)) % total;
        if (dist > total / 2) dist -= total;
        if (dist < -total / 2) dist += total;

        const absDist = Math.abs(dist);

        // Only render the front 5 cards: center (0), left (-1, -2), right (+1, +2)
        if (absDist > 2.4) {
          el.style.visibility = "hidden";
          el.style.opacity = "0";
          el.style.pointerEvents = "none";
        } else {
          el.style.visibility = "visible";

          // Cylindrical slot mathematics
          const x = dist * slotSpacingX;
          const z = -Math.pow(absDist, 1.25) * slotSpacingZ;
          const rotY = -Math.max(-55, Math.min(55, dist * rotYFactor));

          // Scale: center card is 1.05x, flanks scale down neatly to 0.88 and 0.74
          const scale = Math.max(0.70, 1.05 - absDist * 0.15);

          // Opacity: center card is 1.0, flanks are 0.78 and 0.38, then fade out
          let opacity = 1.0;
          if (absDist <= 1.0) {
            opacity = 1.0 - absDist * 0.22;
          } else if (absDist <= 2.0) {
            opacity = 0.78 - (absDist - 1.0) * 0.40;
          } else {
            opacity = Math.max(0, 0.38 - (absDist - 2.0) * 0.95);
          }

          // Z-index: strictly prioritize center card over sides
          const zIndex = Math.round(1000 - absDist * 200);

          el.style.transform = `translate3d(${x.toFixed(1)}px, 0px, ${z.toFixed(
            1
          )}px) rotateY(${rotY.toFixed(2)}deg) scale(${scale.toFixed(3)})`;
          el.style.opacity = opacity.toFixed(3);
          el.style.zIndex = `${zIndex}`;
          el.style.pointerEvents = absDist < 1.4 ? "auto" : "none";
        }
      });

      animFrameRef.current = requestAnimationFrame(animate);
    };

    animFrameRef.current = requestAnimationFrame(animate);

    return () => {
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    };
  }, [total, activeIdx, isAutoPlay]);

  // Pointer / Touch drag handlers for smooth tactile scrubbing
  const handlePointerDown = (e: React.PointerEvent) => {
    isDraggingRef.current = true;
    dragStartXRef.current = e.clientX;
    dragStartPosRef.current = posRef.current;
    lastDragXRef.current = e.clientX;
    lastDragTimeRef.current = performance.now();
    dragVelocityRef.current = 0;
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDraggingRef.current) return;
    const now = performance.now();
    const dt = Math.max(1, now - lastDragTimeRef.current);
    const deltaX = e.clientX - lastDragXRef.current;

    // Convert mouse movement to slot delta (380px drag = 1 full card step)
    const slotPixels = 380;
    const totalDragX = e.clientX - dragStartXRef.current;
    posRef.current = dragStartPosRef.current - totalDragX / slotPixels;
    targetPosRef.current = posRef.current;

    dragVelocityRef.current = (-deltaX / slotPixels) * (16.67 / dt) * 1.1;
    lastDragXRef.current = e.clientX;
    lastDragTimeRef.current = now;
  };

  const handlePointerUp = () => {
    if (!isDraggingRef.current) return;
    isDraggingRef.current = false;
  };

  const currentProject = filteredProjects[activeIdx] || filteredProjects[0];

  return (
    <section
      id="work"
      className="py-16 sm:py-20 lg:py-24 bg-[#F7F8F8] relative overflow-hidden select-none w-full"
    >
      {/* Background Dot Texture */}
      <div className="absolute inset-0 bg-dot-light opacity-30 pointer-events-none" />

      {/* Ambient Lighting Glow Orbs */}
      <div className="absolute -top-32 -right-20 w-[600px] h-[600px] bg-[#502D6D]/[0.08] rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute -bottom-32 -left-20 w-[600px] h-[600px] bg-[#FCB116]/[0.09] rounded-full blur-[140px] pointer-events-none" />

      {/* ── Section Header (Constrained Width for Clean Typography) ─────── */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 sm:mb-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-10 gap-6">
          <RevealOnScroll className="max-w-2xl">
            <div className="inline-flex items-center gap-2.5 mb-3">
              <span className="w-4 h-[2px] rounded-full bg-gradient-to-r from-[#502D6D] to-[#FCB116]" />
              <span className="font-syne text-xs sm:text-sm font-extrabold uppercase tracking-[0.24em] bg-gradient-to-r from-[#502D6D] via-[#8A3DA8] to-[#FCB116] bg-clip-text text-transparent">
                OUR WORK
              </span>
            </div>
            <WordReveal
              as="h2"
              text="Projects that speak for themselves"
              gradientWords="themselves"
              gradientClassName="bg-gradient-to-r from-[#502D6D] via-[#8A3DA8] to-[#FCB116] bg-clip-text text-transparent"
              className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#151515] leading-tight tracking-tight"
            />
            <ParagraphReveal
              text="Explore our recent projects in an immersive 3D cylindrical showcase. Glides automatically; hover any card to pause and inspect."
              delay={0.12}
              className="mt-3 text-sm sm:text-base text-[#544643] leading-relaxed max-w-xl"
            />
          </RevealOnScroll>

          <RevealOnScroll delay={0.1}>
            <Link
              href="/work"
              className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#151515] text-[#F7F8F8] text-sm font-bold hover:bg-[#502D6D] shadow-md shadow-[#151515]/10 hover:shadow-[#502D6D]/20 transition-all shrink-0"
            >
              <span>View All Projects</span>
              <ArrowRight className="w-4 h-4 text-[#FCB116] transition-transform group-hover:translate-x-1" />
            </Link>
          </RevealOnScroll>
        </div>

        {/* Filter Pills with Counts */}
        <RevealOnScroll delay={0.15}>
          <div className="flex flex-wrap items-center gap-2.5">
            {categories.map((tab) => {
              const count =
                tab === "All"
                  ? PORTFOLIO_DATA.length
                  : PORTFOLIO_DATA.filter((p) => p.category === tab).length;

              return (
                <button
                  key={tab}
                  type="button"
                  onClick={() => handleTabChange(tab)}
                  className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all duration-300 flex items-center gap-2 cursor-pointer ${
                    activeTab === tab
                      ? "bg-[#502D6D] text-white border border-[#502D6D] shadow-lg shadow-[#502D6D]/25 ring-2 ring-[#FCB116]/40 scale-[1.02]"
                      : "bg-[#FFFFFF] border border-[#E5E5E3] text-[#544643] hover:text-[#502D6D] hover:border-[#502D6D]/40 shadow-2xs hover:scale-[1.01]"
                  }`}
                >
                  <span>{tab}</span>
                  <span
                    className={`text-[11px] font-mono px-2 py-0.5 rounded-full ${
                      activeTab === tab
                        ? "bg-white/20 text-[#FCB116]"
                        : "bg-[#F0EFEB] text-[#544643]"
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </RevealOnScroll>
      </div>

      {/* ── REFINED WIDTH 3D CYLINDRICAL CINEMATIC ARENA (TASTEFULLY INSET ON BOTH SIDES) ── */}
      <div className="w-full max-w-[1720px] mx-auto px-3 sm:px-6 lg:px-8 xl:px-12">
        <div className="relative w-full rounded-[28px] sm:rounded-[36px] lg:rounded-[44px] bg-gradient-to-b from-[#0F041F] via-[#090214] to-[#0A0216] border border-[#3A145E]/60 shadow-[0_30px_90px_rgba(15,3,28,0.5)] overflow-hidden pt-8 pb-10 sm:pt-10 sm:pb-12">
          {/* Cosmic Ambient Nebulae */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_35%,rgba(124,58,237,0.32),transparent_70%)] pointer-events-none" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_65%,rgba(252,177,22,0.14),transparent_60%)] pointer-events-none" />
          <div className="absolute inset-0 bg-dot-light opacity-10 pointer-events-none" />

          {/* Top Control Bar & Live Mode Status */}
          <div className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6 flex flex-wrap items-center justify-between gap-4">
            {/* Left: Active Card Counter Badge */}
            <div className="flex items-center gap-3">
              <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/[0.08] backdrop-blur-md border border-white/15 shadow-inner">
                <span className="w-2.5 h-2.5 rounded-full bg-[#FCB116] animate-pulse" />
                <span className="font-mono text-xs font-bold text-white">
                  0{activeIdx + 1}
                </span>
                <span className="font-mono text-xs text-[#D4C7EC]/60">
                  / 0{total}
                </span>
                <span className="text-xs font-semibold text-[#D4C7EC] ml-2 hidden sm:inline truncate max-w-[280px]">
                  • {currentProject?.title}
                </span>
              </div>

              {/* 3D Flow Badge */}
              <div className="hidden lg:flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#7C3AED]/20 border border-[#A855F7]/30 text-[11px] font-mono font-bold text-[#E9D5FF]">
                <Layers className="w-3.5 h-3.5 text-[#FCB116]" />
                <span>3D CINEMATIC FLOW</span>
              </div>
            </div>

            {/* Right: Controls (Prev / Next & Auto-Play Toggle) */}
            <div className="flex items-center gap-2.5">
              <button
                type="button"
                onClick={() => setIsAutoPlay(!isAutoPlay)}
                aria-label={isAutoPlay ? "Pause Auto-Flow" : "Resume Auto-Flow"}
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold transition-all duration-300 border cursor-pointer ${
                  isCardHovered
                    ? "bg-[#FCB116]/25 border-[#FCB116] text-[#FCB116] shadow-[0_0_15px_rgba(252,177,22,0.4)]"
                    : isAutoPlay
                    ? "bg-[#FCB116]/15 border-[#FCB116]/50 text-[#FCB116] hover:bg-[#FCB116]/25 shadow-[0_0_15px_rgba(252,177,22,0.35)]"
                    : "bg-white/10 border-white/15 text-white/80 hover:bg-white/20"
                }`}
              >
                {isCardHovered ? (
                  <>
                    <Pause className="w-3.5 h-3.5" />
                    <span>PAUSED (HOVER)</span>
                  </>
                ) : isAutoPlay ? (
                  <>
                    <Pause className="w-3.5 h-3.5" />
                    <span>AUTO FLOW</span>
                  </>
                ) : (
                  <>
                    <Play className="w-3.5 h-3.5" />
                    <span>PAUSED</span>
                  </>
                )}
              </button>

              <button
                type="button"
                onClick={() => step(-1)}
                aria-label="Previous card in 3D cylinder"
                className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 hover:border-[#A855F7] flex items-center justify-center text-white hover:bg-[#7C3AED] hover:text-white transition-all duration-300 shadow-sm cursor-pointer"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={() => step(1)}
                aria-label="Next card in 3D cylinder"
                className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 hover:border-[#A855F7] flex items-center justify-center text-white hover:bg-[#7C3AED] hover:text-white transition-all duration-300 shadow-sm cursor-pointer"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* ── 3D PERSPECTIVE STAGE VIEWPORT ─────────────────────────────────── */}
          <div
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
            onPointerCancel={handlePointerUp}
            className="relative w-full h-[540px] sm:h-[580px] lg:h-[620px] flex items-center justify-center overflow-visible cursor-grab active:cursor-grabbing touch-pan-y"
            style={{
              perspective: "1500px",
              perspectiveOrigin: "50% 50%",
            }}
          >
            {/* 3D Glowing Cylindrical Floor Pedestal */}
            <div
              className="absolute bottom-2 left-1/2 -translate-x-1/2 pointer-events-none"
              style={{
                transform: "rotateX(75deg) translateZ(-160px)",
                transformStyle: "preserve-3d",
              }}
            >
              {/* Outer Deep Floor Glow */}
              <div className="w-[1100px] h-[330px] rounded-full bg-gradient-to-r from-[#502D6D]/0 via-[#A855F7]/35 to-[#502D6D]/0 blur-3xl" />
              {/* Outer Glowing Neon Ring */}
              <div className="absolute inset-0 w-[1000px] h-[280px] mx-auto rounded-full border border-[#A855F7]/40 shadow-[0_0_40px_rgba(168,85,247,0.35)]" />
              {/* Inner Glowing Gold Ring */}
              <div className="absolute inset-0 w-[760px] h-[200px] mx-auto my-auto rounded-full border border-[#FCB116]/30 shadow-[0_0_25px_rgba(252,177,22,0.25)]" />
            </div>

            {/* 3D Cylinder Container */}
            <div
              className="relative w-full h-full flex items-center justify-center"
              style={{
                transformStyle: "preserve-3d",
              }}
            >
              {filteredProjects.map((project, idx) => {
                const isCenter = activeIdx === idx;
                const hasLiveUrl = project.liveUrl && project.liveUrl !== "#";

                return (
                  <div
                    key={`${project.id}-${idx}`}
                    ref={(el) => {
                      cardElementsRef.current[idx] = el;
                    }}
                    onClick={() => {
                      if (!isCenter) jumpToIndex(idx);
                    }}
                    onMouseEnter={() => {
                      // Hovering ANY card pauses the automatic flow immediately
                      isCardHoveredRef.current = true;
                      setIsCardHovered(true);
                    }}
                    onMouseLeave={() => {
                      // Leaving the card resumes the automatic flow
                      isCardHoveredRef.current = false;
                      setIsCardHovered(false);
                    }}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[305px] sm:w-[355px] lg:w-[400px] xl:w-[415px] will-change-transform"
                    style={{
                      transformStyle: "preserve-3d",
                      cursor: isCenter ? "default" : "pointer",
                    }}
                  >
                    {/* Active Card Ambient Spotlight Halo */}
                    {isCenter && (
                      <div className="absolute -inset-4 bg-gradient-to-r from-[#7C3AED]/35 via-[#FCB116]/20 to-[#7C3AED]/35 rounded-[38px] blur-2xl pointer-events-none -z-10 animate-pulse" />
                    )}

                    {/* Card Body - Opaque Solid Obsidian & Frosted Amethyst Base */}
                    <div
                      className={`group relative flex flex-col p-5 sm:p-6 lg:p-6.5 rounded-[28px] transition-all duration-300 overflow-hidden shadow-2xl ${
                        isCenter
                          ? "bg-[#120524] border border-[#A855F7]/75 ring-1 ring-white/20 shadow-[0_30px_70px_-10px_rgba(124,58,237,0.48),0_0_35px_rgba(252,177,22,0.15)]"
                          : "bg-[#0E031B] border border-white/10 opacity-80 hover:opacity-100 hover:border-white/25"
                      }`}
                    >
                      {/* Top Edge Light Sheen */}
                      <div
                        className={`absolute top-0 inset-x-0 h-[1.5px] pointer-events-none transition-opacity duration-300 ${
                          isCenter
                            ? "bg-gradient-to-r from-transparent via-[#FCB116] to-transparent opacity-95"
                            : "bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-40"
                        }`}
                      />

                      {/* Header Row: Category Badge + Year */}
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-2">
                          <span className="text-[10px] sm:text-[11px] font-black uppercase tracking-wider bg-gradient-to-r from-[#7C3AED] to-[#502D6D] text-white px-3.5 py-1.5 rounded-full shadow-[0_0_12px_rgba(124,58,237,0.4)] border border-[#C084FC]/30">
                            {project.category}
                          </span>
                        </div>

                        <span className="text-xs font-mono font-bold text-[#FCB116] bg-[#FCB116]/10 px-3 py-0.5 rounded-full border border-[#FCB116]/30">
                          {project.year}
                        </span>
                      </div>

                      {/* Browser / Device Mockup Screen */}
                      <div className="relative w-full rounded-2xl overflow-hidden bg-[#070110] border border-white/15 p-2 mb-3.5 group-hover:border-[#A855F7]/50 transition-colors">
                        {/* Browser Top Window Bar */}
                        <div className="flex items-center justify-between mb-1.5 px-1">
                          <div className="flex items-center gap-1.5">
                            <span className="w-2.5 h-2.5 rounded-full bg-[#FCB116]" />
                            <span className="w-2.5 h-2.5 rounded-full bg-[#A855F7]" />
                            <span className="w-2.5 h-2.5 rounded-full bg-[#38BDF8]" />
                            <span className="text-[11px] sm:text-xs text-[#E9D5FF] ml-2 font-mono font-semibold tracking-tight truncate max-w-[160px]">
                              {project.client}
                            </span>
                          </div>

                          {hasLiveUrl && (
                            <a
                              href={project.liveUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-[#D4C7EC] hover:text-[#FCB116] transition-colors p-1"
                              title="Visit Live Site"
                              onClick={(e) => e.stopPropagation()}
                            >
                              <ExternalLink className="w-3.5 h-3.5" />
                            </a>
                          )}
                        </div>

                        {/* Image Showcase */}
                        <div className="relative h-34 sm:h-38 lg:h-42 w-full rounded-xl overflow-hidden bg-[#0A0216] border border-white/10 flex items-center justify-center">
                          {project.image ? (
                            <Image
                              src={project.image}
                              alt={project.title}
                              fill
                              sizes="(max-width: 768px) 310px, (max-width: 1200px) 360px, 415px"
                              className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                            />
                          ) : (
                            <div className="flex flex-col items-center justify-center gap-2 text-[#D4C7EC]/50">
                              <Sparkles className="w-6 h-6 text-[#FCB116]" />
                              <span className="text-xs font-mono">
                                Interactive Project
                              </span>
                            </div>
                          )}

                          {/* Gradient Vignette */}
                          <div className="absolute inset-0 bg-gradient-to-t from-[#0E031B]/80 via-transparent to-transparent pointer-events-none" />
                        </div>
                      </div>

                      {/* Card Title */}
                      <h3
                        className={`text-base sm:text-lg lg:text-xl font-black tracking-tight mb-1.5 transition-colors line-clamp-1 font-syne ${
                          isCenter
                            ? "text-white group-hover:text-[#FCB116]"
                            : "text-white/85"
                        }`}
                      >
                        {project.title}
                      </h3>

                      {/* Card Summary */}
                      <p className="text-xs sm:text-[13px] text-[#D4C7EC]/80 leading-relaxed line-clamp-2 mb-3">
                        {project.summary}
                      </p>

                      {/* Result Metrics: Spacious 2-Column Grid */}
                      <div className="grid grid-cols-2 gap-3 py-2.5 mb-3 border-y border-white/10 bg-white/[0.03] rounded-xl px-3.5">
                        {project.results.slice(0, 2).map((res) => (
                          <div key={res.label} className="text-left">
                            <div className="text-xl sm:text-2xl font-black bg-gradient-to-r from-[#FCB116] via-[#FFD066] to-[#FFFFFF] bg-clip-text text-transparent font-syne tracking-tight">
                              {res.metric}
                            </div>
                            <div className="text-[10px] sm:text-[11px] text-[#D4C7EC]/70 font-semibold uppercase tracking-wider line-clamp-1 mt-0.5">
                              {res.label}
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Technologies & CTA Button */}
                      <div className="flex items-center justify-between gap-2 mt-auto pt-1">
                        <div className="flex flex-wrap gap-1.5">
                          {project.technologies.slice(0, 3).map((t) => (
                            <span
                              key={t}
                              className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-white/[0.06] border border-white/10 text-[#D4C7EC]"
                            >
                              {t}
                            </span>
                          ))}
                        </div>

                        <Link
                          href={`/work/${project.slug}`}
                          tabIndex={isCenter ? 0 : -1}
                          className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold transition-all duration-300 ${
                            isCenter
                              ? "bg-gradient-to-r from-[#7C3AED] to-[#502D6D] hover:from-[#A855F7] hover:to-[#7C3AED] text-white border border-[#C084FC]/50 shadow-[0_0_14px_rgba(124,58,237,0.4)] group-hover:scale-105"
                              : "bg-white/10 border border-white/15 text-[#D4C7EC] hover:bg-white/20 hover:text-white"
                          }`}
                        >
                          <span>Case</span>
                          <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                        </Link>
                      </div>
                    </div>

                    {/* 3D Floor Shadow */}
                    <div
                      className={`mx-auto h-4 rounded-full blur-xl transition-all duration-300 pointer-events-none mt-2 ${
                        isCenter
                          ? "w-4/5 bg-gradient-to-r from-[#7C3AED]/0 via-[#A855F7]/50 to-[#7C3AED]/0 opacity-90"
                          : "w-3/5 bg-black/80 opacity-40"
                      }`}
                    />
                  </div>
                );
              })}
            </div>
          </div>

          {/* ── BOTTOM INTERACTIVE STATUS DOCK ─────────────────────────────────── */}
          <div className="relative z-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-3 sm:mt-4">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-4 rounded-2xl bg-white/[0.05] backdrop-blur-xl border border-white/10">
              {/* Interaction Hint */}
              <div className="flex items-center gap-2.5 text-xs text-[#D4C7EC]/80 font-medium">
                <span className="w-2 h-2 rounded-full bg-[#FCB116] animate-pulse" />
                <span>Hover any card to pause • Drag to explore</span>
              </div>

              {/* Direct Card Navigation Dots / Progress Bar */}
              <div className="flex items-center gap-1.5 flex-wrap justify-center">
                {filteredProjects.slice(0, Math.min(filteredProjects.length, 14)).map((p, i) => {
                  const isCurrent = activeIdx === i;
                  return (
                    <button
                      key={`${p.id}-dot-${i}`}
                      type="button"
                      onClick={() => jumpToIndex(i)}
                      className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                        isCurrent
                          ? "w-7 bg-gradient-to-r from-[#FCB116] to-[#A855F7] shadow-[0_0_8px_rgba(252,177,22,0.6)]"
                          : "w-2 bg-white/25 hover:bg-white/50"
                      }`}
                      aria-label={`Jump to project ${p.title}`}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
