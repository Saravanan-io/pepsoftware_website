"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import {
  Search,
  FileText,
  Pencil,
  Code2,
  Check,
  Rocket,
  ArrowRight,
} from "lucide-react";
import { RevealOnScroll } from "@/components/shared/RevealOnScroll";

interface ProcessStep {
  id: string;
  number: string;
  name: string;
  description: string;
  color: string;
  iconBg: string;
  iconColor: string;
  icon: React.ElementType;
  position: "top" | "bottom";
  targetProgress: number; // 0 to 1 along curve
  cardX: number; // Left coordinate on desktop canvas
  cardY: number; // Top coordinate on desktop canvas
  pinX: number;
  pinY: number;
}

const PROCESS_STEPS: ProcessStep[] = [
  {
    id: "step-1",
    number: "01",
    name: "Discover",
    description: "We understand your business, users and requirements.",
    color: "#7C3AED",
    iconBg: "bg-purple-100/90",
    iconColor: "text-[#7C3AED]",
    icon: Search,
    position: "top",
    targetProgress: 0.11,
    cardX: 80,
    cardY: 130,
    pinX: 215,
    pinY: 350,
  },
  {
    id: "step-2",
    number: "02",
    name: "Plan",
    description: "We define the right solution, scope and approach.",
    color: "#2563EB",
    iconBg: "bg-blue-100/90",
    iconColor: "text-[#2563EB]",
    icon: FileText,
    position: "bottom",
    targetProgress: 0.28,
    cardX: 300,
    cardY: 500,
    pinX: 435,
    pinY: 465,
  },
  {
    id: "step-3",
    number: "03",
    name: "Design",
    description: "We create the experience and visual direction.",
    color: "#D946EF",
    iconBg: "bg-fuchsia-100/90",
    iconColor: "text-[#D946EF]",
    icon: Pencil,
    position: "top",
    targetProgress: 0.46,
    cardX: 540,
    cardY: 145,
    pinX: 675,
    pinY: 365,
  },
  {
    id: "step-4",
    number: "04",
    name: "Build",
    description: "Our development team turns the design into a working product.",
    color: "#059669",
    iconBg: "bg-emerald-100/90",
    iconColor: "text-[#059669]",
    icon: Code2,
    position: "bottom",
    targetProgress: 0.62,
    cardX: 740,
    cardY: 495,
    pinX: 870,
    pinY: 455,
  },
  {
    id: "step-5",
    number: "05",
    name: "Test",
    description: "We test functionality, usability and performance.",
    color: "#F59E0B",
    iconBg: "bg-amber-100/90",
    iconColor: "text-[#F59E0B]",
    icon: Check,
    position: "top",
    targetProgress: 0.77,
    cardX: 940,
    cardY: 135,
    pinX: 1070,
    pinY: 350,
  },
  {
    id: "step-6",
    number: "06",
    name: "Launch",
    description: "We help you launch and continue supporting your product.",
    color: "#EF4444",
    iconBg: "bg-rose-100/90",
    iconColor: "text-[#EF4444]",
    icon: Rocket,
    position: "bottom",
    targetProgress: 0.89,
    cardX: 1120,
    cardY: 470,
    pinX: 1250,
    pinY: 415,
  },
];

const DESKTOP_WIDTH = 1440;
const DESKTOP_HEIGHT = 640;

// Desktop Serpentine Path
const DESKTOP_ROAD_PATH =
  "M 50,400 C 130,400 160,350 215,350 C 295,350 340,465 435,465 C 530,465 575,365 675,365 C 755,365 790,455 870,455 C 950,455 980,350 1070,350 C 1150,350 1190,415 1250,415 C 1300,415 1325,320 1385,270";

export function ServicesProcessSection() {
  const desktopPathRef = useRef<SVGPathElement | null>(null);
  const mobilePathRef = useRef<SVGPathElement | null>(null);
  const cardContainerRef = useRef<HTMLDivElement | null>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  const [progress, setProgress] = useState<number>(0.12);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [activeStepIndex, setActiveStepIndex] = useState<number>(0);

  // Desktop coordinates
  const [carPos, setCarPos] = useState<{ x: number; y: number }>({ x: 215, y: 350 });
  const [carAngle, setCarAngle] = useState<number>(0);
  const [desktopPathLen, setDesktopPathLen] = useState<number>(1520);
  const [computedPins, setComputedPins] = useState<{ x: number; y: number }[]>([]);

  // Mobile coordinates: dynamically measured from card centers via ResizeObserver
  const [mobilePinYs, setMobilePinYs] = useState<number[]>([39, 131, 223, 322, 421, 521]);
  const [mobileRoadHeight, setMobileRoadHeight] = useState<number>(546);
  const [mobileStepProgresses, setMobileStepProgresses] = useState<number[]>([0.08, 0.25, 0.44, 0.63, 0.82, 0.98]);
  const [mobileCarPos, setMobileCarPos] = useState<{ x: number; y: number }>({ x: 28, y: 39 });
  const [mobileCarAngle, setMobileCarAngle] = useState<number>(90);
  const [mobilePathLen, setMobilePathLen] = useState<number>(550);

  // Dynamically measure mobile card vertical centers so the road aligns with millimeter precision
  useEffect(() => {
    const measureCardCenters = () => {
      if (!cardContainerRef.current) return;
      const containerTop = cardContainerRef.current.getBoundingClientRect().top;
      const ys: number[] = [];
      let allValid = true;

      for (let i = 0; i < PROCESS_STEPS.length; i++) {
        const el = cardRefs.current[i];
        if (!el) {
          allValid = false;
          break;
        }
        const rect = el.getBoundingClientRect();
        if (rect.height === 0) {
          allValid = false;
          break;
        }
        ys.push(rect.top - containerTop + rect.height / 2);
      }

      if (allValid && ys.length === 6) {
        setMobilePinYs(ys);
        // The road strictly terminates right inside the 6th card (Launch)
        // Keep road height strictly bounded within the Launch card
        const lastCard = cardRefs.current[5];
        const lastCardBottom = lastCard ? lastCard.getBoundingClientRect().bottom - containerTop : ys[5] + 20;
        const boundedHeight = Math.min(Math.round(lastCardBottom), Math.round(ys[5] + 20));
        setMobileRoadHeight(boundedHeight);
      }
    };

    measureCardCenters();

    let ro: ResizeObserver | null = null;
    if (typeof ResizeObserver !== "undefined" && cardContainerRef.current) {
      ro = new ResizeObserver(() => {
        measureCardCenters();
      });
      ro.observe(cardContainerRef.current);
      cardRefs.current.forEach((el) => {
        if (el) ro?.observe(el);
      });
    }

    window.addEventListener("resize", measureCardCenters);
    const timer = setTimeout(measureCardCenters, 150);
    return () => {
      window.removeEventListener("resize", measureCardCenters);
      clearTimeout(timer);
      ro?.disconnect();
    };
  }, []);

  // Generate dynamic mobile road path based on measured card centers
  const y0 = mobilePinYs[0] || 39;
  const y1 = mobilePinYs[1] || 131;
  const y2 = mobilePinYs[2] || 223;
  const y3 = mobilePinYs[3] || 322;
  const y4 = mobilePinYs[4] || 421;
  const y5 = mobilePinYs[5] || 521;

  const startY = Math.max(8, y0 - 24);
  const endY = y5 + 16;

  const dynamicMobileRoadD = `M 28,${startY} ` +
    `C 40,${(startY + y0) / 2} 16,${(startY + y0) / 2} 28,${y0} ` +
    `C 42,${(y0 + y1) / 2} 14,${(y0 + y1) / 2} 28,${y1} ` +
    `C 42,${(y1 + y2) / 2} 14,${(y1 + y2) / 2} 28,${y2} ` +
    `C 42,${(y2 + y3) / 2} 14,${(y2 + y3) / 2} 28,${y3} ` +
    `C 42,${(y3 + y4) / 2} 14,${(y3 + y4) / 2} 28,${y4} ` +
    `C 42,${(y4 + y5) / 2} 14,${(y4 + y5) / 2} 28,${y5} ` +
    `L 28,${endY}`;

  // Measure path lengths on mount / path update and calculate step progress
  useEffect(() => {
    if (desktopPathRef.current) {
      const len = desktopPathRef.current.getTotalLength();
      setDesktopPathLen(len);
      const pins = PROCESS_STEPS.map((step) => {
        const pt = desktopPathRef.current!.getPointAtLength(step.targetProgress * len);
        return { x: pt.x, y: pt.y };
      });
      setComputedPins(pins);
    }

    if (mobilePathRef.current) {
      const mLen = mobilePathRef.current.getTotalLength();
      setMobilePathLen(mLen);

      // Compute exact progress for each mobile pin along the curve
      const mProgresses = mobilePinYs.map((targetY) => {
        let low = 0;
        let high = mLen;
        for (let iter = 0; iter < 24; iter++) {
          const mid = (low + high) / 2;
          const pt = mobilePathRef.current!.getPointAtLength(mid);
          if (pt.y < targetY) {
            low = mid;
          } else {
            high = mid;
          }
        }
        return Math.min(1, Math.max(0, low / mLen));
      });
      setMobileStepProgresses(mProgresses);
    }
  }, [dynamicMobileRoadD, mobilePinYs]);

  // Update car positions on both desktop and mobile
  useEffect(() => {
    const curP = Math.max(0, Math.min(1, progress));
    const isMobileScreen = typeof window !== "undefined" && window.innerWidth < 1024;

    // 1. Desktop car update
    if (desktopPathRef.current && desktopPathLen > 0) {
      const curDist = curP * desktopPathLen;
      const p = desktopPathRef.current.getPointAtLength(curDist);
      const delta = 4;
      const pAhead = desktopPathRef.current.getPointAtLength(Math.min(desktopPathLen, curDist + delta));
      const pBehind = desktopPathRef.current.getPointAtLength(Math.max(0, curDist - delta));
      const angle = Math.atan2(pAhead.y - pBehind.y, pAhead.x - pBehind.x) * (180 / Math.PI);
      setCarPos({ x: p.x, y: p.y });
      setCarAngle(angle);
    }

    // 2. Mobile car update
    if (mobilePathRef.current && mobilePathLen > 0) {
      const mDist = curP * mobilePathLen;
      const mp = mobilePathRef.current.getPointAtLength(mDist);
      const delta = 3;
      const mpAhead = mobilePathRef.current.getPointAtLength(Math.min(mobilePathLen, mDist + delta));
      const mpBehind = mobilePathRef.current.getPointAtLength(Math.max(0, mDist - delta));
      const mAngle = Math.atan2(mpAhead.y - mpBehind.y, mpAhead.x - mpBehind.x) * (180 / Math.PI);
      setMobileCarPos({ x: mp.x, y: mp.y });
      setMobileCarAngle(mAngle);
    }

    // Active milestone detection
    let closestIdx = 0;
    let minDistance = 999;
    PROCESS_STEPS.forEach((step, idx) => {
      const stepTarget = isMobileScreen && mobileStepProgresses[idx] !== undefined
        ? mobileStepProgresses[idx]
        : step.targetProgress;
      const dist = Math.abs(progress - stepTarget);
      if (dist < minDistance) {
        minDistance = dist;
        closestIdx = idx;
      }
    });

    const endThreshold = isMobileScreen
      ? (mobileStepProgresses[5] ? Math.max(0.88, mobileStepProgresses[5] - 0.05) : 0.92)
      : 0.94;

    if (progress >= endThreshold) {
      setActiveStepIndex(5); // Launch is the final milestone
    } else {
      setActiveStepIndex(closestIdx);
    }
  }, [progress, desktopPathLen, mobilePathLen, mobileStepProgresses]);

  // Continuous auto-drive loop
  useEffect(() => {
    if (!isPlaying) return;

    let frameId: number;
    let prevTime = performance.now();
    const cycleDurationMs = 21000;

    const stepFrame = (now: number) => {
      const delta = now - prevTime;
      prevTime = now;

      setProgress((prev) => {
        const next = prev + delta / cycleDurationMs;
        if (next >= 1) {
          setTimeout(() => {
            setProgress(0);
          }, 2600);
          return 1;
        }
        return next;
      });

      frameId = requestAnimationFrame(stepFrame);
    };

    frameId = requestAnimationFrame(stepFrame);
    return () => cancelAnimationFrame(frameId);
  }, [isPlaying]);

  const handleDriveTo = (stepIdx: number) => {
    setIsPlaying(false);
    const isMobile = typeof window !== "undefined" && window.innerWidth < 1024;
    if (isMobile && mobileStepProgresses[stepIdx] !== undefined) {
      setProgress(mobileStepProgresses[stepIdx]);
    } else {
      setProgress(PROCESS_STEPS[stepIdx].targetProgress);
    }
  };

  const handleRestart = () => {
    setProgress(0);
    setIsPlaying(true);
  };

  return (
    <section className="py-14 sm:py-20 lg:py-24 bg-gradient-to-b from-[#FAF8FD] via-[#F6F4FA] to-[#FAF8FD] relative overflow-hidden select-none">
      {/* Background Soft Lighting Gradients */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[300px] bg-purple-200/25 blur-[130px] rounded-full" />
        <div className="absolute top-1/3 right-10 w-[400px] h-[300px] bg-amber-200/20 blur-[110px] rounded-full" />
      </div>

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* ── Section Header ── */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
          <RevealOnScroll>
            {/* Tagline Accent */}
            <div className="flex items-center justify-center gap-3 mb-2.5">
              <span className="w-6 sm:w-8 h-[2px] rounded-full bg-gradient-to-r from-transparent to-[#7C3AED]" />
              <span className="text-xs sm:text-sm font-extrabold uppercase tracking-[0.2em] text-[#502D6D]">
                How We Work
              </span>
              <span className="w-6 sm:w-8 h-[2px] rounded-full bg-gradient-to-l from-transparent to-[#7C3AED]" />
            </div>

            {/* Title */}
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-[#151515] tracking-tight leading-tight">
              From Idea to{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6D28D9] via-[#7C3AED] to-[#8B5CF6]">
                Launch
              </span>
              <span className="text-[#FCB116]">.</span>
            </h2>

            {/* Subtitle */}
            <p className="mt-2.5 sm:mt-3.5 text-xs sm:text-base lg:text-lg text-[#544643] leading-relaxed max-w-2xl mx-auto">
              A clear process, proven results. We turn your ideas into powerful digital products with strategy, design, development and support.
            </p>
          </RevealOnScroll>
        </div>

        {/* ========================================================
            1. DESKTOP VIEW (Screen >= 1024px): Panoramic Horizontal Diorama
            ======================================================== */}
        <div className="hidden lg:block relative w-full select-none">
          <div className="relative w-full h-[640px]">
            {/* SVG Canvas Layer */}
            <svg
              className="absolute inset-0 w-full h-full pointer-events-none"
              viewBox={`0 0 ${DESKTOP_WIDTH} ${DESKTOP_HEIGHT}`}
              preserveAspectRatio="xMidYMid meet"
            >
              <defs>
                <linearGradient id="roadAsphaltGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#374151" />
                  <stop offset="30%" stopColor="#1F2937" />
                  <stop offset="70%" stopColor="#374151" />
                  <stop offset="100%" stopColor="#1E293B" />
                </linearGradient>

                <linearGradient id="neonTrailGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#8B5CF6" />
                  <stop offset="35%" stopColor="#EC4899" />
                  <stop offset="65%" stopColor="#10B981" />
                  <stop offset="100%" stopColor="#F59E0B" />
                </linearGradient>

                <radialGradient id="sunburstGrad" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#FEF08A" stopOpacity="0.95" />
                  <stop offset="45%" stopColor="#FDE047" stopOpacity="0.6" />
                  <stop offset="80%" stopColor="#F59E0B" stopOpacity="0.2" />
                  <stop offset="100%" stopColor="#F59E0B" stopOpacity="0" />
                </radialGradient>

                <linearGradient id="grassGrad1" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#4ADE80" />
                  <stop offset="55%" stopColor="#22C55E" />
                  <stop offset="100%" stopColor="#15803D" />
                </linearGradient>

                <linearGradient id="grassGrad2" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#86EFAC" />
                  <stop offset="50%" stopColor="#22C55E" />
                  <stop offset="100%" stopColor="#166534" />
                </linearGradient>

                <linearGradient id="headlightBeam" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#FEF08A" stopOpacity="0.85" />
                  <stop offset="40%" stopColor="#FDE047" stopOpacity="0.45" />
                  <stop offset="100%" stopColor="#FBBF24" stopOpacity="0" />
                </linearGradient>

                <g id="isoPineD">
                  <ellipse cx="0" cy="18" rx="14" ry="5" fill="rgba(21, 128, 61, 0.25)" />
                  <rect x="-2.5" y="6" width="5" height="12" fill="#78350F" rx="1" />
                  <polygon points="0,0 -16,12 16,12" fill="#15803D" />
                  <polygon points="0,-8 -13,4 13,4" fill="#16A34A" />
                  <polygon points="0,-16 -9,-2 9,-2" fill="#22C55E" />
                </g>

                <g id="isoPuffTreeD">
                  <ellipse cx="0" cy="16" rx="13" ry="5" fill="rgba(21, 128, 61, 0.25)" />
                  <rect x="-2" y="6" width="4" height="11" fill="#92400E" rx="1" />
                  <circle cx="-6" cy="2" r="8" fill="#15803D" />
                  <circle cx="6" cy="2" r="8" fill="#16A34A" />
                  <circle cx="0" cy="-4" r="10" fill="#22C55E" />
                  <circle cx="-2" cy="-6" r="6" fill="#4ADE80" />
                </g>

                <g id="isoCloudD" opacity="0.95">
                  <ellipse cx="0" cy="0" rx="42" ry="14" fill="#FFFFFF" />
                  <circle cx="-16" cy="-8" r="14" fill="#FFFFFF" />
                  <circle cx="6" cy="-12" r="18" fill="#FFFFFF" />
                  <circle cx="22" cy="-6" r="12" fill="#FFFFFF" />
                  <ellipse cx="0" cy="5" rx="36" ry="6" fill="#F1F5F9" opacity="0.65" />
                </g>

                <g id="isoRocksD">
                  <ellipse cx="-7" cy="2" rx="7" ry="4" fill="#64748B" />
                  <ellipse cx="-6" cy="0" rx="5" ry="3" fill="#94A3B8" />
                  <ellipse cx="6" cy="4" rx="9" ry="5" fill="#475569" />
                  <ellipse cx="5" cy="2" rx="7" ry="4" fill="#64748B" />
                </g>
              </defs>

              {/* Sunburst & Golden Rays */}
              <g transform="translate(1360, 160)">
                <circle cx="0" cy="0" r="140" fill="url(#sunburstGrad)" />
                {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((deg, i) => (
                  <line
                    key={i}
                    x1="0"
                    y1="0"
                    x2={Math.cos((deg * Math.PI) / 180) * 135}
                    y2={Math.sin((deg * Math.PI) / 180) * 135}
                    stroke="#FDE047"
                    strokeWidth="2.5"
                    strokeOpacity="0.45"
                    strokeDasharray="4 4"
                  />
                ))}
              </g>

              {/* Success Mountain Peak */}
              <g transform="translate(1350, 120)">
                <polygon points="0,0 -85,150 40,150" fill="#334155" />
                <polygon points="0,0 40,150 75,150" fill="#64748B" />
                <polygon points="0,0 -25,90 10,75" fill="#475569" />
                <polygon points="0,0 -30,45 -10,35 10,48 22,40 0,0" fill="#FFFFFF" />
                <polygon points="0,0 10,48 22,40 0,0" fill="#E2E8F0" />
                <line x1="0" y1="0" x2="0" y2="-30" stroke="#E2E8F0" strokeWidth="2.5" />
                <polygon points="0,-30 24,-21 0,-12" fill="#EF4444" />
              </g>

              {/* Rolling Hills */}
              <path
                d="M -50,470 Q 180,330 350,440 T 700,380 T 1050,370 T 1400,320 L 1500,640 L -50,640 Z"
                fill="url(#grassGrad2)"
                opacity="0.85"
              />
              <path
                d="M -50,490 Q 200,360 420,490 T 800,440 T 1150,430 T 1450,380 L 1450,640 L -50,640 Z"
                fill="url(#grassGrad1)"
              />

              {/* Stone Viaduct Bridge */}
              <g transform="translate(890, 420)">
                <rect x="15" y="0" width="22" height="95" fill="#64748B" rx="2" />
                <rect x="17" y="2" width="18" height="91" fill="#94A3B8" rx="1" />
                <rect x="65" y="0" width="24" height="95" fill="#64748B" rx="2" />
                <rect x="67" y="2" width="20" height="91" fill="#94A3B8" rx="1" />
                <rect x="115" y="0" width="22" height="95" fill="#64748B" rx="2" />
                <rect x="117" y="2" width="18" height="91" fill="#94A3B8" rx="1" />
                <path d="M 37,35 Q 52,10 65,35 L 65,95 L 37,95 Z" fill="#1E293B" />
                <path d="M 89,35 Q 102,10 115,35 L 115,95 L 89,95 Z" fill="#1E293B" />
                <rect x="10" y="-8" width="135" height="12" fill="#E2E8F0" rx="2" />
                <line x1="10" y1="2" x2="145" y2="2" stroke="#64748B" strokeWidth="1" opacity="0.6" />
              </g>

              {/* Scenery Trees */}
              <use href="#isoPineD" x="65" y="445" />
              <use href="#isoPuffTreeD" x="90" y="460" />
              <use href="#isoPineD" x="120" y="435" />
              <use href="#isoRocksD" x="70" y="475" />
              <use href="#isoPuffTreeD" x="320" y="450" />
              <use href="#isoPineD" x="495" y="435" />
              <use href="#isoPineD" x="535" y="420" />
              <use href="#isoPuffTreeD" x="570" y="445" />
              <use href="#isoPineD" x="720" y="430" />
              <use href="#isoPuffTreeD" x="750" y="450" />
              <use href="#isoPineD" x="895" y="495" />
              <use href="#isoPineD" x="950" y="505" />
              <use href="#isoRocksD" x="970" y="525" />
              <use href="#isoPuffTreeD" x="1010" y="490" />
              <use href="#isoPineD" x="1110" y="405" />
              <use href="#isoPineD" x="1140" y="390" />
              <use href="#isoPuffTreeD" x="1285" y="440" />
              <use href="#isoPineD" x="1330" y="380" />
              <use href="#isoPineD" x="1370" y="340" />

              {/* Clouds */}
              <g transform="translate(160, 485) scale(0.95)"><use href="#isoCloudD" /></g>
              <g transform="translate(560, 560) scale(1.1)"><use href="#isoCloudD" /></g>
              <g transform="translate(980, 530) scale(0.9)"><use href="#isoCloudD" /></g>
              <g transform="translate(1220, 260) scale(0.8)"><use href="#isoCloudD" /></g>

              {/* Road Asphalt */}
              <path
                d={DESKTOP_ROAD_PATH}
                fill="none"
                stroke="rgba(15, 23, 42, 0.28)"
                strokeWidth="56"
                strokeLinecap="round"
                transform="translate(0, 8)"
              />
              <path
                d={DESKTOP_ROAD_PATH}
                fill="none"
                stroke="#E2E8F0"
                strokeWidth="52"
                strokeLinecap="round"
              />
              <path
                d={DESKTOP_ROAD_PATH}
                fill="none"
                stroke="#94A3B8"
                strokeWidth="48"
                strokeLinecap="round"
              />
              <path
                ref={desktopPathRef}
                d={DESKTOP_ROAD_PATH}
                fill="none"
                stroke="url(#roadAsphaltGrad)"
                strokeWidth="42"
                strokeLinecap="round"
              />
              <path
                d={DESKTOP_ROAD_PATH}
                fill="none"
                stroke="#FFFFFF"
                strokeWidth="2.5"
                strokeDasharray="12 12"
                strokeOpacity="0.85"
              />
              <path
                d={DESKTOP_ROAD_PATH}
                fill="none"
                stroke="url(#neonTrailGrad)"
                strokeWidth="4.5"
                strokeDasharray={desktopPathLen}
                strokeDashoffset={desktopPathLen * (1 - progress)}
                strokeLinecap="round"
                opacity="0.95"
              />

              {/* "IDEA" Sign */}
              <g transform="translate(25, 410)">
                <ellipse cx="25" cy="48" rx="30" ry="8" fill="rgba(21, 21, 21, 0.2)" />
                <rect x="12" y="10" width="5" height="38" fill="#78350F" rx="1" />
                <rect x="36" y="10" width="5" height="38" fill="#78350F" rx="1" />
                <polygon points="2,-6 54,-6 50,22 -2,22" fill="#92400E" />
                <polygon points="2,-6 54,-6 52,18 0,18" fill="#B45309" />
                <line x1="4" y1="2" x2="50" y2="2" stroke="#78350F" strokeWidth="1" opacity="0.6" />
                <circle cx="14.5" cy="5" r="1.5" fill="#451A03" />
                <circle cx="38.5" cy="5" r="1.5" fill="#451A03" />
                <text x="24" y="12" textAnchor="middle" fill="#FEF3C7" fontSize="12" fontWeight="900" fontFamily="system-ui" letterSpacing="1">
                  IDEA
                </text>
              </g>

              {/* "SUCCESS" Sign */}
              <g transform="translate(1300, 315)">
                <ellipse cx="30" cy="46" rx="32" ry="8" fill="rgba(21, 21, 21, 0.2)" />
                <rect x="26" y="12" width="6" height="34" fill="#78350F" rx="1" />
                <polygon points="0,-8 68,-14 66,16 -2,22" fill="#92400E" />
                <polygon points="2,-6 66,-12 64,14 0,20" fill="#B45309" />
                <line x1="4" y1="3" x2="62" y2="-3" stroke="#78350F" strokeWidth="1" opacity="0.6" />
                <text x="33" y="9" textAnchor="middle" fill="#FFFBEB" fontSize="11" fontWeight="900" fontFamily="system-ui" letterSpacing="1.2">
                  SUCCESS
                </text>
              </g>

              {/* Milestone Pins and Stems */}
              {PROCESS_STEPS.map((step, idx) => {
                const pin = computedPins[idx] || { x: step.pinX, y: step.pinY };
                const isActive = activeStepIndex === idx;
                const isPassed = progress >= step.targetProgress;
                const isTop = step.position === "top";
                const cardEdgeY = isTop ? step.cardY + 105 : step.cardY;

                return (
                  <g key={`marker-desk-${step.id}`}>
                    <line
                      x1={pin.x}
                      y1={pin.y}
                      x2={pin.x}
                      y2={cardEdgeY}
                      stroke={step.color}
                      strokeWidth={isActive ? "2" : "1.5"}
                      strokeDasharray={isActive ? "none" : "3 3"}
                      strokeOpacity={isActive ? 0.9 : 0.6}
                    />
                    <circle cx={pin.x} cy={cardEdgeY} r="3" fill={step.color} />
                    {isActive && (
                      <circle cx={pin.x} cy={pin.y} r="18" fill="none" stroke={step.color} strokeWidth="2" opacity="0.8" className="animate-ping" />
                    )}
                    <g transform={`translate(${pin.x}, ${pin.y})`} className="cursor-pointer" onClick={() => handleDriveTo(idx)}>
                      <circle cx="0" cy="0" r="14" fill={isPassed || isActive ? step.color : "#FFFFFF"} stroke={step.color} strokeWidth="2.5" filter="drop-shadow(0 2px 5px rgba(0,0,0,0.2))" />
                      <text x="0" y="4.5" textAnchor="middle" fill={isPassed || isActive ? "#FFFFFF" : step.color} fontSize="11" fontWeight="900" fontFamily="system-ui">
                        {step.number}
                      </text>
                    </g>
                  </g>
                );
              })}

              {/* Desktop Traveling Van */}
              <g
                transform={`translate(${carPos.x}, ${carPos.y}) rotate(${carAngle})`}
                style={{ transition: isPlaying ? "none" : "transform 0.25s ease-out" }}
                className="cursor-pointer"
                onClick={() => setIsPlaying(!isPlaying)}
              >
                <ellipse cx="0" cy="7" rx="30" ry="12" fill="rgba(15, 23, 42, 0.45)" />
                <polygon points="26,-6 92,-25 92,25 26,6" fill="url(#headlightBeam)" opacity="0.75" />
                <rect x="-26" y="-11" width="50" height="22" rx="6" fill="#502D6D" stroke="#3B1D54" strokeWidth="1.5" />
                <rect x="-25" y="-10" width="48" height="10" rx="4" fill="#7C3AED" opacity="0.8" />
                <rect x="-18" y="-9" width="36" height="16" rx="5" fill="#F8FAFC" stroke="#E2E8F0" strokeWidth="1" />
                <polygon points="12,-8 20,-6 20,6 12,8" fill="#38BDF8" opacity="0.9" />
                <line x1="14" y1="-5" x2="18" y2="5" stroke="#FFFFFF" strokeWidth="1.2" opacity="0.8" />
                <rect x="-14" y="-8" width="10" height="4" rx="1" fill="#38BDF8" opacity="0.85" />
                <rect x="-1" y="-8" width="10" height="4" rx="1" fill="#38BDF8" opacity="0.85" />
                <rect x="-14" y="4" width="10" height="4" rx="1" fill="#38BDF8" opacity="0.85" />
                <rect x="-1" y="4" width="10" height="4" rx="1" fill="#38BDF8" opacity="0.85" />
                <circle cx="-5" cy="0" r="5" fill="#FCB116" />
                <circle cx="-5" cy="0" r="3.2" fill="#502D6D" />
                <circle cx="-5" cy="0" r="1.5" fill="#FCB116" />
                <rect x="23" y="-5" width="2.5" height="10" rx="1" fill="#CBD5E1" />
                <circle cx="23.5" cy="-7" r="2.5" fill="#FEF08A" stroke="#FFFFFF" strokeWidth="0.8" />
                <circle cx="23.5" cy="7" r="2.5" fill="#FEF08A" stroke="#FFFFFF" strokeWidth="0.8" />
                <rect x="-26.5" y="-9" width="1.5" height="4" rx="0.5" fill="#EF4444" />
                <rect x="-26.5" y="5" width="1.5" height="4" rx="0.5" fill="#EF4444" />
                <rect x="-18" y="-13" width="9" height="3" rx="1.5" fill="#1E293B" />
                <rect x="9" y="-13" width="9" height="3" rx="1.5" fill="#1E293B" />
                <rect x="-18" y="10" width="9" height="3" rx="1.5" fill="#1E293B" />
                <rect x="9" y="10" width="9" height="3" rx="1.5" fill="#1E293B" />
              </g>
            </svg>

            {/* Desktop Floating Cards Layer */}
            {PROCESS_STEPS.map((step, idx) => {
              const Icon = step.icon;
              const isActive = activeStepIndex === idx && progress < 0.94;

              return (
                <div
                  key={`card-desk-${step.id}`}
                  onClick={() => handleDriveTo(idx)}
                  style={{
                    left: `${step.cardX}px`,
                    top: `${step.cardY}px`,
                  }}
                  className={`absolute z-20 w-[245px] sm:w-[260px] p-5 rounded-2xl bg-white/95 backdrop-blur-md transition-all duration-300 cursor-pointer transform hover:-translate-y-1 ${
                    isActive
                      ? "shadow-[0_20px_45px_rgba(0,0,0,0.12)] scale-105"
                      : "shadow-[0_12px_32px_rgba(0,0,0,0.06)] hover:shadow-[0_16px_36px_rgba(0,0,0,0.09)]"
                  }`}
                >
                  <div className="flex items-start gap-3.5">
                    <div
                      className={`w-11 h-11 rounded-2xl ${step.iconBg} ${step.iconColor} flex items-center justify-center shrink-0 transition-transform ${
                        isActive ? "scale-110" : ""
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-base font-extrabold text-[#151515] tracking-tight leading-none mb-1.5">
                        {step.name}
                      </h3>
                      <p className="text-xs text-[#544643] leading-relaxed line-clamp-3">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ========================================================
            2. MOBILE VIEW (Screen < 1024px): Perfectly Proportioned & Aligned
               The road length ends strictly inside the 06 Launch step!
            ======================================================== */}
        <div className="block lg:hidden relative w-full max-w-lg mx-auto py-2">
          {/* Top Idea Marker Banner */}
          <div className="flex items-center gap-3 mb-4 pl-1">
            <div className="px-3.5 py-1.5 rounded-xl bg-[#B45309] text-[#FEF3C7] text-xs font-black tracking-wider shadow-sm flex items-center gap-1.5">
              <span>🪵</span>
              <span>START: IDEA</span>
            </div>
            <span className="text-xs text-[#78350F] font-semibold">Project Kickoff</span>
          </div>

          {/* Vertical Highway & Cards Container */}
          <div ref={cardContainerRef} className="relative pb-1">
            {/* Left Vertical SVG Highway: Height strictly matches the Launch step */}
            <svg
              style={{ height: `${mobileRoadHeight}px` }}
              className="absolute left-0 top-0 w-[64px] pointer-events-none"
              viewBox={`0 0 64 ${mobileRoadHeight}`}
              preserveAspectRatio="none"
            >
              <defs>
                <linearGradient id="mRoadGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#374151" />
                  <stop offset="50%" stopColor="#1F2937" />
                  <stop offset="100%" stopColor="#374151" />
                </linearGradient>

                <linearGradient id="mNeonGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#7C3AED" />
                  <stop offset="35%" stopColor="#2563EB" />
                  <stop offset="70%" stopColor="#10B981" />
                  <stop offset="100%" stopColor="#F59E0B" />
                </linearGradient>
              </defs>

              {/* Road Asphalt */}
              <path
                d={dynamicMobileRoadD}
                fill="none"
                stroke="#E2E8F0"
                strokeWidth="40"
                strokeLinecap="round"
              />
              <path
                ref={mobilePathRef}
                d={dynamicMobileRoadD}
                fill="none"
                stroke="url(#mRoadGrad)"
                strokeWidth="34"
                strokeLinecap="round"
              />
              <path
                d={dynamicMobileRoadD}
                fill="none"
                stroke="#FFFFFF"
                strokeWidth="2"
                strokeDasharray="8 8"
                strokeOpacity="0.85"
              />
              <path
                d={dynamicMobileRoadD}
                fill="none"
                stroke="url(#mNeonGrad)"
                strokeWidth="3.5"
                strokeDasharray={mobilePathLen}
                strokeDashoffset={mobilePathLen * (1 - progress)}
                strokeLinecap="round"
              />

              {/* Mobile Pins & Connector Stems strictly aligned to each card center */}
              {PROCESS_STEPS.map((step, idx) => {
                const py = mobilePinYs[idx] || 39;
                const stepTargetP = mobileStepProgresses[idx] ?? step.targetProgress;
                const isPassed = progress >= stepTargetP;
                const isActive = activeStepIndex === idx;

                return (
                  <g key={`mpin-${step.id}`}>
                    {/* Horizontal stem connecting road to card edge */}
                    <line
                      x1="28"
                      y1={py}
                      x2="64"
                      y2={py}
                      stroke={step.color}
                      strokeWidth="1.5"
                      strokeDasharray="2.5 2.5"
                      strokeOpacity={isActive ? 0.95 : 0.45}
                    />
                    <circle cx="63" cy={py} r="2.5" fill={step.color} opacity={isActive ? 1 : 0.7} />

                    {/* Ping ring when car visits */}
                    {isActive && (
                      <circle
                        cx="28"
                        cy={py}
                        r="14"
                        fill="none"
                        stroke={step.color}
                        strokeWidth="2"
                        opacity="0.8"
                        className="animate-ping"
                      />
                    )}

                    {/* Numbered Pin Badge */}
                    <g className="cursor-pointer pointer-events-auto" onClick={() => handleDriveTo(idx)}>
                      <circle
                        cx="28"
                        cy={py}
                        r="12"
                        fill={isPassed || isActive ? step.color : "#FFFFFF"}
                        stroke={step.color}
                        strokeWidth="2.5"
                      />
                      <text
                        x="28"
                        y={py + 3.5}
                        textAnchor="middle"
                        fill={isPassed || isActive ? "#FFFFFF" : step.color}
                        fontSize="9.5"
                        fontWeight="900"
                        fontFamily="system-ui"
                      >
                        {step.number}
                      </text>
                    </g>
                  </g>
                );
              })}

              {/* Mobile Traveling Purple Van */}
              <g
                transform={`translate(${mobileCarPos.x}, ${mobileCarPos.y}) rotate(${mobileCarAngle})`}
                style={{ transition: isPlaying ? "none" : "transform 0.25s ease-out" }}
                className="cursor-pointer pointer-events-auto"
                onClick={() => setIsPlaying(!isPlaying)}
              >
                <ellipse cx="0" cy="5" rx="18" ry="7" fill="rgba(15, 23, 42, 0.45)" />
                <rect x="-16" y="-7" width="32" height="14" rx="4" fill="#502D6D" stroke="#3B1D54" strokeWidth="1" />
                <rect x="-11" y="-5" width="22" height="10" rx="2.5" fill="#F8FAFC" />
                <polygon points="7,-4 12,-2.5 12,2.5 7,4" fill="#38BDF8" />
                <circle cx="-2.5" cy="0" r="2.5" fill="#FCB116" />
                <circle cx="14" cy="-3.5" r="1.8" fill="#FEF08A" />
                <circle cx="14" cy="3.5" r="1.8" fill="#FEF08A" />
              </g>
            </svg>

            {/* Mobile Cards Stacked on Right */}
            <div className="pl-[66px] sm:pl-[74px] space-y-4">
              {PROCESS_STEPS.map((step, idx) => {
                const Icon = step.icon;
                const isActive = activeStepIndex === idx && progress < 0.94;

                return (
                  <div
                    key={`card-mob-${step.id}`}
                    ref={(el) => {
                      cardRefs.current[idx] = el;
                    }}
                    onClick={() => handleDriveTo(idx)}
                    className={`relative p-4 sm:p-5 rounded-2xl bg-white/95 backdrop-blur-md transition-all duration-300 cursor-pointer ${
                      isActive
                        ? "shadow-[0_16px_36px_rgba(80,45,109,0.12)] scale-[1.02] ring-1 ring-purple-200"
                        : "shadow-[0_8px_24px_rgba(0,0,0,0.05)] hover:shadow-md"
                    }`}
                  >
                    <div className="flex items-start gap-3.5">
                      <div
                        className={`w-11 h-11 rounded-2xl ${step.iconBg} ${step.iconColor} flex items-center justify-center shrink-0 transition-transform ${
                          isActive ? "scale-110" : ""
                        }`}
                      >
                        <Icon className="w-5 h-5" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-1.5 mb-1">
                          <span className="text-xs font-black font-mono" style={{ color: step.color }}>
                            {step.number}
                          </span>
                          <h3 className="text-base font-extrabold text-[#151515] tracking-tight leading-none">
                            {step.name}
                          </h3>
                        </div>
                        <p className="text-xs text-[#544643] leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Bottom Success Mountain Landmark (Right under Launch) */}
          <div className="flex items-center justify-between p-4 rounded-2xl bg-gradient-to-r from-amber-50 to-orange-50/80 border border-amber-200/50 shadow-sm mt-3">
            <div className="flex items-center gap-3">
              <span className="text-2xl">🏔️</span>
              <div>
                <span className="text-xs font-black uppercase text-amber-800 tracking-wider block">
                  DESTINATION: SUCCESS
                </span>
                <span className="text-xs text-amber-950 font-medium">
                  Launched, tested, and scaling with real results.
                </span>
              </div>
            </div>
            <button
              onClick={handleRestart}
              className="px-3 py-1.5 rounded-xl bg-amber-500 text-white font-extrabold text-xs shrink-0 cursor-pointer hover:bg-amber-600 transition-colors"
            >
              Replay ↺
            </button>
          </div>
        </div>


        {/* ── Bottom CTA with Festive Radiating Spark Lines (Matching Image 2) ── */}
        <div className="mt-10 sm:mt-14 lg:mt-16 text-center">
          <RevealOnScroll delay={0.2}>
            <div className="inline-flex items-center justify-center gap-3 sm:gap-4 relative">
              {/* Left Radiating Spark Lines */}
              <div className="flex items-center gap-1 sm:gap-1.5 opacity-80">
                <span className="w-2.5 sm:w-3.5 h-[2.5px] rounded-full bg-[#7C3AED] transform -rotate-45" />
                <span className="w-3.5 sm:w-4.5 h-[2.5px] rounded-full bg-[#7C3AED]" />
                <span className="w-2.5 sm:w-3.5 h-[2.5px] rounded-full bg-[#7C3AED] transform rotate-45" />
              </div>

              {/* "Start Your Project ->" Pill Button */}
              <Link
                href="/contact"
                className="inline-flex items-center gap-2.5 sm:gap-3 px-7 sm:px-10 py-3.5 sm:py-4 rounded-full bg-[#151515] text-white font-extrabold text-xs sm:text-base hover:bg-[#502D6D] shadow-xl shadow-[#151515]/15 hover:shadow-2xl hover:shadow-[#502D6D]/25 transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer group"
              >
                <span>Start Your Project</span>
                <ArrowRight className="w-4 h-4 text-[#FCB116] group-hover:translate-x-1 transition-transform" />
              </Link>

              {/* Right Radiating Spark Lines */}
              <div className="flex items-center gap-1 sm:gap-1.5 opacity-80">
                <span className="w-2.5 sm:w-3.5 h-[2.5px] rounded-full bg-[#7C3AED] transform -rotate-45" />
                <span className="w-3.5 sm:w-4.5 h-[2.5px] rounded-full bg-[#7C3AED]" />
                <span className="w-2.5 sm:w-3.5 h-[2.5px] rounded-full bg-[#7C3AED] transform rotate-45" />
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}
