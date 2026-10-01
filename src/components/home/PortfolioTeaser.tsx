"use client";

import { useState, useMemo, useRef, useEffect, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  ExternalLink,
  Sparkles,
} from "lucide-react";
import { motion } from "framer-motion";
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

  const activeIdxRef = useRef(0);
  const sectionRef = useRef<HTMLElement>(null);

  // Main 60-120fps Animation Loop with Direct DOM updates
  useEffect(() => {
    lastTimeRef.current = performance.now();
    let isVisible = false;
    let isRunning = false;

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

      if (normIdx !== activeIdxRef.current && Math.abs(curPos - roundedPos) < 0.3) {
        activeIdxRef.current = normIdx;
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
        ? 295
        : isTablet
        ? 380
        : isLarge
        ? 495
        : 445;
      const slotSpacingZ = isMobile ? 125 : isTablet ? 155 : 185;
      const rotYFactor = isMobile ? 21 : 25;

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

      if (isVisible) {
        animFrameRef.current = requestAnimationFrame(animate);
      } else {
        isRunning = false;
      }
    };

    const startAnimation = () => {
      if (!isRunning) {
        isRunning = true;
        lastTimeRef.current = performance.now();
        animFrameRef.current = requestAnimationFrame(animate);
      }
    };

    const stopAnimation = () => {
      isRunning = false;
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
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
  }, [total, isAutoPlay]);

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

  return (
    <section
      ref={sectionRef}
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

        {/* Studio Exhibition Filter Navigation */}
        <RevealOnScroll delay={0.15}>
          <div className="inline-flex items-center p-1.5 rounded-full bg-white/95 backdrop-blur-2xl border border-[#C6C2C1]/70 shadow-[0_10px_30px_rgba(80,45,109,0.06),0_2px_8px_rgba(0,0,0,0.02)] gap-1">
            {categories.map((tab) => {
              const isActive = activeTab === tab;

              return (
                <button
                  key={tab}
                  type="button"
                  onClick={() => handleTabChange(tab)}
                  className={`relative px-5 sm:px-6 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer z-10 select-none ${
                    isActive
                      ? "text-white"
                      : "text-[#544643] hover:text-[#151515] hover:bg-black/[0.03]"
                  }`}
                >
                  {/* Sliding Luminous Brand Capsule */}
                  {isActive && (
                    <motion.div
                      layoutId="activePortfolioTabPill"
                      transition={{ type: "spring", stiffness: 420, damping: 30 }}
                      className="absolute inset-0 rounded-full bg-gradient-to-r from-[#502D6D] via-[#68358F] to-[#502D6D] shadow-[0_6px_20px_rgba(80,45,109,0.32)] border border-[#FCB116]/40 -z-10"
                    />
                  )}

                  {/* Clean Category Title */}
                  <span className="font-syne tracking-wide whitespace-nowrap">
                    {tab}
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


          {/* ── 3D PERSPECTIVE STAGE VIEWPORT ─────────────────────────────────── */}
          <div
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
            onPointerCancel={handlePointerUp}
            className="relative w-full h-[490px] sm:h-[535px] lg:h-[575px] flex items-center justify-center overflow-visible cursor-grab active:cursor-grabbing touch-pan-y"
            style={{
              perspective: "1500px",
              perspectiveOrigin: "50% 50%",
            }}
          >
            {/* 3D Glowing Cylindrical Floor Pedestal */}
            <div
              className="absolute bottom-2 left-1/2 -translate-x-1/2 pointer-events-none"
              style={{
                transform: "rotateX(75deg) translateZ(-145px)",
                transformStyle: "preserve-3d",
              }}
            >
              {/* Outer Deep Floor Glow */}
              <div className="w-[1150px] h-[350px] rounded-full bg-gradient-to-r from-[#502D6D]/0 via-[#A855F7]/35 to-[#502D6D]/0 blur-3xl" />
              {/* Outer Glowing Neon Ring */}
              <div className="absolute inset-0 w-[1040px] h-[300px] mx-auto rounded-full border border-[#A855F7]/40 shadow-[0_0_40px_rgba(168,85,247,0.35)]" />
              {/* Inner Glowing Gold Ring */}
              <div className="absolute inset-0 w-[800px] h-[220px] mx-auto my-auto rounded-full border border-[#FCB116]/30 shadow-[0_0_25px_rgba(252,177,22,0.25)]" />
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
                const isMobileApp =
                  project.category === "Mobile Apps" ||
                  project.id.includes("app") ||
                  project.image.toLowerCase().includes("mobile-app");

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
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[335px] sm:w-[390px] lg:w-[435px] xl:w-[455px] will-change-transform"
                    style={{
                      transformStyle: "preserve-3d",
                      cursor: isCenter ? "default" : "pointer",
                    }}
                  >
                    {/* Active Card Ambient Spotlight Halo */}
                    {isCenter && (
                      <div className="absolute -inset-4 bg-gradient-to-r from-[#7C3AED]/35 via-[#FCB116]/20 to-[#7C3AED]/35 rounded-[38px] blur-2xl pointer-events-none -z-10 animate-pulse" />
                    )}

                    {/* Card Body - Luxury Crisp White Base */}
                    <div
                      className={`group relative flex flex-col p-3.5 sm:p-4 lg:p-4.5 rounded-[28px] transition-all duration-300 overflow-hidden shadow-2xl ${
                        isCenter
                          ? "bg-[#FFFFFF] border-2 border-[#502D6D] ring-4 ring-[#FCB116]/30 shadow-[0_25px_60px_-10px_rgba(80,45,109,0.35),0_0_35px_rgba(252,177,22,0.2)]"
                          : "bg-[#FFFFFF]/95 backdrop-blur-xl border border-[#E5E5E3] shadow-[0_15px_40px_rgba(0,0,0,0.35)]"
                      }`}
                    >
                      {/* Top Edge Light Sheen */}
                      <div
                        className={`absolute top-0 inset-x-0 h-[2.5px] pointer-events-none transition-opacity duration-300 ${
                          isCenter
                            ? "bg-gradient-to-r from-[#502D6D] via-[#C86A28] to-[#FCB116] opacity-100"
                            : "bg-gradient-to-r from-transparent via-[#502D6D]/30 to-transparent opacity-60"
                        }`}
                      />

                      {/* Top Center Category Label */}
                      <div className="flex items-center justify-center mb-3">
                        <span className="font-syne text-xs sm:text-[13px] font-extrabold uppercase tracking-[0.22em] text-[#502D6D]">
                          {project.category}
                        </span>
                      </div>

                      {/* Browser / Device Mockup Screen */}
                      <div
                        className="relative w-full rounded-2xl overflow-hidden bg-[#F5F4F2] border border-[#E5E5E3] p-2 group-hover:border-[#502D6D]/40 transition-colors block"
                      >
                        {/* Card Header Title Bar */}
                        <div className="flex items-center justify-between mb-2.5 px-1.5 pt-0.5">
                          <Link
                            href={`/work/${project.slug}`}
                            tabIndex={isCenter ? 0 : -1}
                            className="font-syne text-sm sm:text-[15px] font-bold tracking-tight text-[#151515] hover:text-[#502D6D] truncate max-w-[270px] sm:max-w-[320px] transition-colors cursor-pointer"
                            title={project.title}
                          >
                            {project.title}
                          </Link>

                          {hasLiveUrl ? (
                            <a
                              href={project.liveUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-[#544643] hover:text-[#502D6D] transition-colors p-1 shrink-0"
                              title="Visit Live Site"
                              tabIndex={isCenter ? 0 : -1}
                            >
                              <ExternalLink className="w-3.5 h-3.5" />
                            </a>
                          ) : (
                            <div className="text-[#544643] group-hover:text-[#502D6D] transition-colors p-1 shrink-0">
                              <ExternalLink className="w-3.5 h-3.5" />
                            </div>
                          )}
                        </div>

                        {/* Image Showcase */}
                        <Link
                          href={`/work/${project.slug}`}
                          tabIndex={isCenter ? 0 : -1}
                          className={`relative h-72 sm:h-84 lg:h-[370px] w-full rounded-xl overflow-hidden border border-[#E5E5E3] flex items-center justify-center block cursor-pointer group/img ${
                            isMobileApp ? "bg-[#F8F9FA] p-2" : "bg-[#FFFFFF]"
                          }`}
                        >
                          {project.image ? (
                            <Image
                              src={project.image}
                              alt={project.title}
                              fill
                              quality={95}
                              priority={idx <= 2}
                              sizes="(max-width: 640px) 700px, (max-width: 1024px) 850px, 950px"
                              className={
                                isMobileApp
                                  ? "object-contain object-center p-2 group-hover/img:scale-105 transition-transform duration-500 drop-shadow-[0_12px_24px_rgba(0,0,0,0.15)]"
                                  : "object-cover object-top group-hover/img:scale-105 transition-transform duration-500"
                              }
                            />
                          ) : (
                            <div className="flex flex-col items-center justify-center gap-2 text-[#544643]">
                              <Sparkles className="w-6 h-6 text-[#FCB116]" />
                              <span className="text-xs font-mono">
                                Interactive Project
                              </span>
                            </div>
                          )}
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


        </div>
      </div>
    </section>
  );
}
