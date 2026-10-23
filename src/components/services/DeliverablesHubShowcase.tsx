"use client";

import { useState, useRef, useMemo, ReactNode } from "react";
import { motion, useInView } from "framer-motion";
import {
  Layers,
  Search,
  Users,
  GitFork,
  Palette,
  Smartphone,
  Component,
  MessageSquareQuote,
  MonitorSmartphone,
  Code2,
  MousePointer,
  Pencil,
  Globe,
  ShoppingCart,
  Layout,
  BarChart3,
  TrendingUp,
  Megaphone,
  RotateCcw,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Cpu,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface SubServiceItem {
  title: string;
  description: string;
}

interface DeliverablesHubShowcaseProps {
  subServices: SubServiceItem[];
  serviceTitle?: string;
  serviceSlug?: string;
  className?: string;
}

/* ─────────────────────────────────────────────────────────────
   60FPS HARDWARE-ACCELERATED MINI VISUAL ACCESSORIES
   Rendered with lightweight SVG & CSS transitions
───────────────────────────────────────────────────────────── */

function VisualResearch() {
  return (
    <div className="relative w-20 h-16 shrink-0 flex items-center justify-center transform-gpu">
      <div className="w-14 h-14 rounded-xl bg-white border border-[#C6C2C1]/80 shadow-xs p-1.5 flex flex-col justify-between -rotate-3 transition-transform duration-200 group-hover:-rotate-6">
        <div className="flex items-center gap-1">
          <div className="w-2 h-2 rounded-full bg-[#C86A28]" />
          <div className="w-6 h-1.5 rounded-full bg-[#EFF0EF]" />
        </div>
        <div className="space-y-1">
          <div className="w-full h-1 rounded bg-[#E9E8E6]" />
          <div className="w-4/5 h-1 rounded bg-[#E9E8E6]" />
          <div className="w-3/5 h-1 rounded bg-[#C86A28]/40" />
        </div>
      </div>
      <div className="absolute -top-1 -right-1 w-8 h-8 rounded-full border-2 border-[#C86A28] bg-white/95 shadow-sm flex items-center justify-center transition-transform duration-200 group-hover:scale-110">
        <Search className="w-4 h-4 text-[#C86A28]" />
      </div>
      <div className="absolute -bottom-1 -left-1 w-5 h-5 rounded-md bg-gradient-to-br from-[#FF8A3D] to-[#C86A28] text-white flex items-center justify-center shadow-xs">
        <Users className="w-3 h-3" />
      </div>
    </div>
  );
}

function VisualWireframing() {
  return (
    <div className="relative w-20 h-16 shrink-0 flex items-center justify-center transform-gpu">
      <div className="w-16 h-14 rounded-xl bg-white border border-[#C6C2C1]/80 shadow-xs p-1.5 rotate-2 transition-transform duration-200 group-hover:rotate-4">
        <div className="w-full h-1.5 rounded bg-[#E9E8E6] mb-1 flex items-center px-1">
          <div className="w-1 h-1 rounded-full bg-[#C86A28]" />
        </div>
        <div className="grid grid-cols-2 gap-1 mb-1">
          <div className="h-5 rounded bg-[#EFF0EF] border border-dashed border-[#C6C2C1]" />
          <div className="h-5 rounded bg-[#EFF0EF] border border-dashed border-[#C6C2C1]" />
        </div>
        <div className="w-6 h-1.5 rounded bg-[#C86A28]/60" />
      </div>
      <div className="absolute -top-1 -right-1 w-6 h-6 rounded-md bg-[#151515] text-[#FF8A3D] flex items-center justify-center shadow-sm rotate-[-25deg] transition-transform duration-200 group-hover:rotate-[-10deg]">
        <Pencil className="w-3 h-3" />
      </div>
      <div className="absolute -bottom-1 -left-1 w-5 h-5 rounded-md bg-gradient-to-br from-[#FF8A3D] to-[#C86A28] text-white flex items-center justify-center shadow-xs">
        <GitFork className="w-3 h-3" />
      </div>
    </div>
  );
}

function VisualUIDesign() {
  return (
    <div className="relative w-20 h-16 shrink-0 flex items-center justify-center transform-gpu">
      <div className="w-15 h-11 rounded-lg bg-[#151515] p-1 shadow-xs border border-[#333] flex flex-col justify-between">
        <div className="w-full h-6 rounded bg-[#222] p-0.5 flex items-center justify-between">
          <div className="space-y-0.5">
            <div className="w-3 h-1 rounded bg-[#FF8A3D]" />
            <div className="w-2 h-0.5 rounded bg-white/40" />
          </div>
          <div className="w-3 h-3 rounded bg-gradient-to-br from-[#C86A28] to-[#FF8A3D]" />
        </div>
        <div className="w-5 h-0.5 rounded-full bg-white/20 mx-auto" />
      </div>
      <div className="absolute bottom-2.5 w-18 h-0.5 rounded-sm bg-[#544643]" />
      <div className="absolute -top-1 -right-0.5 flex gap-0.5 transition-transform duration-200 group-hover:scale-105">
        <div className="w-2 h-6 rounded-xs bg-[#FF8A3D] shadow-xs transform -rotate-12 border border-white" />
        <div className="w-2 h-6 rounded-xs bg-[#C86A28] shadow-xs border border-white" />
        <div className="w-2 h-6 rounded-xs bg-[#544643] shadow-xs transform rotate-12 border border-white" />
      </div>
      <div className="absolute -bottom-1 -left-1 w-5 h-5 rounded-md bg-gradient-to-br from-[#FF8A3D] to-[#C86A28] text-white flex items-center justify-center shadow-xs">
        <Palette className="w-3 h-3" />
      </div>
    </div>
  );
}

function VisualPrototyping() {
  return (
    <div className="relative w-20 h-16 shrink-0 flex items-center justify-center transform-gpu">
      <div className="w-10 h-15 rounded-xl bg-[#151515] p-1 shadow-xs border border-[#333] flex flex-col items-center justify-between">
        <div className="w-3 h-0.5 rounded-full bg-white/30 mb-0.5" />
        <div className="w-full h-9 rounded-md bg-white p-0.5 flex flex-col justify-between">
          <div className="w-full h-2 rounded bg-[#EFF0EF]" />
          <div className="w-full h-2.5 rounded bg-gradient-to-r from-[#FF8A3D] to-[#C86A28]" />
          <div className="flex gap-0.5">
            <div className="w-2.5 h-1.5 rounded bg-[#E9E8E6]" />
            <div className="w-2.5 h-1.5 rounded bg-[#E9E8E6]" />
          </div>
        </div>
        <div className="w-2.5 h-0.5 rounded-full bg-white/20 mt-0.5" />
      </div>
      <div className="absolute top-3.5 right-1.5 w-6 h-6 rounded-full bg-gradient-to-br from-[#FF8A3D] to-[#C86A28] text-white flex items-center justify-center shadow-sm transition-transform duration-200 group-hover:scale-110">
        <MousePointer className="w-3 h-3 fill-white" />
      </div>
    </div>
  );
}

function VisualDesignSystems() {
  return (
    <div className="relative w-20 h-16 shrink-0 flex items-center justify-center transform-gpu">
      <div className="relative w-12 h-12 flex items-center justify-center transition-transform duration-200 group-hover:scale-105">
        <div className="absolute w-10 h-7 rounded-md bg-[#C86A28]/25 border border-[#C86A28]/40 transform rotate-[-20deg] skew-x-[15deg] translate-y-2.5" />
        <div className="absolute w-10 h-7 rounded-md bg-white/90 border border-[#C6C2C1] shadow-xs transform rotate-[-20deg] skew-x-[15deg] translate-y-0" />
        <div className="absolute w-10 h-7 rounded-md bg-gradient-to-br from-white to-[#EFF0EF] border-2 border-[#FF8A3D] shadow-xs transform rotate-[-20deg] skew-x-[15deg] -translate-y-2.5 flex items-center justify-center">
          <div className="w-2.5 h-2.5 rounded-xs bg-[#FF8A3D]" />
        </div>
      </div>
      <div className="absolute -top-1 -right-0.5 w-5 h-5 rounded-md bg-[#151515] text-white font-black text-[9px] flex items-center justify-center shadow-xs">
        Aa
      </div>
      <div className="absolute -bottom-1 -left-1 w-5 h-5 rounded-md bg-gradient-to-br from-[#FF8A3D] to-[#C86A28] text-white flex items-center justify-center shadow-xs">
        <Component className="w-3 h-3" />
      </div>
    </div>
  );
}

function VisualUXWriting() {
  return (
    <div className="relative w-20 h-16 shrink-0 flex items-center justify-center transform-gpu">
      <div className="w-14 h-14 rounded-xl bg-white border border-[#C6C2C1]/80 shadow-xs p-1.5 flex flex-col justify-between">
        <div className="text-xs font-black text-[#151515] leading-none">T</div>
        <div className="space-y-1">
          <div className="w-full h-1 rounded bg-[#C86A28]" />
          <div className="w-4/5 h-1 rounded bg-[#E9E8E6]" />
          <div className="w-3/5 h-1 rounded bg-[#E9E8E6]" />
        </div>
      </div>
      <div className="absolute -top-1 -right-0.5 w-7 h-7 rounded-lg bg-gradient-to-br from-[#FF8A3D] to-[#C86A28] text-white flex items-center justify-center shadow-xs transition-transform duration-200 group-hover:-translate-y-0.5">
        <MessageSquareQuote className="w-3.5 h-3.5" />
      </div>
    </div>
  );
}

function VisualWebAppUI() {
  return (
    <div className="relative w-20 h-16 shrink-0 flex items-center justify-center transform-gpu">
      <div className="w-14 h-10 rounded-md bg-[#151515] p-1 shadow-xs border border-[#333] flex flex-col justify-between">
        <div className="w-full h-full rounded bg-[#222] p-0.5 grid grid-cols-2 gap-0.5">
          <div className="rounded bg-white/20" />
          <div className="rounded bg-[#C86A28]/50" />
        </div>
      </div>
      <div className="absolute -bottom-1 -right-0.5 w-7 h-12 rounded-md bg-[#151515] p-0.5 shadow-sm border border-[#444] flex flex-col justify-between transition-transform duration-200 group-hover:scale-105">
        <div className="w-full h-full rounded bg-[#282828] p-0.5 flex flex-col gap-0.5">
          <div className="w-full h-1.5 rounded bg-[#FF8A3D]" />
          <div className="w-full h-2 rounded bg-white/20" />
        </div>
      </div>
      <div className="absolute -top-1 -left-1 w-5 h-5 rounded-md bg-gradient-to-br from-[#FF8A3D] to-[#C86A28] text-white flex items-center justify-center shadow-xs">
        <MonitorSmartphone className="w-3 h-3" />
      </div>
    </div>
  );
}

function VisualDeveloperHandoff() {
  return (
    <div className="relative w-20 h-16 shrink-0 flex items-center justify-center transform-gpu">
      <div className="w-16 h-13 rounded-lg bg-[#151515] p-1 shadow-xs border border-[#333] flex flex-col justify-between transition-transform duration-200 group-hover:scale-105">
        <div className="flex items-center gap-1 mb-0.5">
          <div className="w-1 h-1 rounded-full bg-red-400" />
          <div className="w-1 h-1 rounded-full bg-yellow-400" />
          <div className="w-1 h-1 rounded-full bg-green-400" />
        </div>
        <div className="font-mono text-[7px] text-[#FF8A3D] leading-tight space-y-0.5">
          <div className="text-white/60">&lt;Component</div>
          <div className="pl-1 text-[#FF8A3D]">ready=&quot;true&quot;</div>
          <div className="text-white/60">/&gt;</div>
        </div>
      </div>
      <div className="absolute -bottom-1 -left-1 w-6 h-6 rounded-md bg-gradient-to-br from-[#FF8A3D] to-[#C86A28] text-white flex items-center justify-center shadow-xs">
        <Code2 className="w-3.5 h-3.5" />
      </div>
    </div>
  );
}

function VisualEcommerce() {
  return (
    <div className="relative w-20 h-16 shrink-0 flex items-center justify-center transform-gpu">
      <div className="w-15 h-12 rounded-xl bg-white border border-[#C6C2C1]/80 shadow-xs p-1.5 flex flex-col justify-between">
        <div className="flex items-center justify-between">
          <span className="text-[8px] font-black text-[#C86A28]">$129</span>
          <div className="w-2 h-2 rounded-full bg-green-500" />
        </div>
        <div className="w-full h-1.5 rounded bg-[#EFF0EF]" />
        <div className="w-3/4 h-1.5 rounded bg-[#FF8A3D]/40" />
      </div>
      <div className="absolute -top-1 -right-1 w-7 h-7 rounded-lg bg-gradient-to-br from-[#FF8A3D] to-[#C86A28] text-white flex items-center justify-center shadow-xs">
        <ShoppingCart className="w-3.5 h-3.5" />
      </div>
    </div>
  );
}

function VisualAnalytics() {
  return (
    <div className="relative w-20 h-16 shrink-0 flex items-center justify-center transform-gpu">
      <div className="w-15 h-12 rounded-xl bg-[#151515] p-1.5 shadow-xs border border-[#333] flex items-end justify-between gap-1">
        <div className="w-2 h-4 rounded-t bg-white/20" />
        <div className="w-2 h-6 rounded-t bg-[#FF8A3D]/60" />
        <div className="w-2 h-8 rounded-t bg-[#C86A28]" />
        <div className="w-2 h-10 rounded-t bg-gradient-to-t from-[#C86A28] to-[#FF8A3D]" />
      </div>
      <div className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-gradient-to-br from-[#FF8A3D] to-[#C86A28] text-white flex items-center justify-center shadow-xs">
        <TrendingUp className="w-3.5 h-3.5" />
      </div>
    </div>
  );
}

function VisualMobile() {
  return (
    <div className="relative w-20 h-16 shrink-0 flex items-center justify-center transform-gpu">
      <div className="w-9 h-14 rounded-xl bg-[#151515] p-1 shadow-xs border border-[#333] flex flex-col items-center justify-between">
        <div className="w-2.5 h-0.5 rounded-full bg-white/30" />
        <div className="w-full h-9 rounded bg-[#252525] p-1 space-y-1">
          <div className="w-full h-2 rounded bg-gradient-to-r from-[#FF8A3D] to-[#C86A28]" />
          <div className="w-4/5 h-1 rounded bg-white/30" />
        </div>
        <div className="w-2 h-0.5 rounded-full bg-white/20" />
      </div>
      <div className="absolute -bottom-1 -left-1 w-6 h-6 rounded-md bg-gradient-to-br from-[#FF8A3D] to-[#C86A28] text-white flex items-center justify-center shadow-xs">
        <Smartphone className="w-3.5 h-3.5" />
      </div>
    </div>
  );
}

function getCardVisual(title: string, index: number): ReactNode {
  const t = title.toLowerCase();
  if (t.includes("research") || t.includes("insight")) return <VisualResearch />;
  if (t.includes("strategy") || t.includes("wirefram")) return <VisualWireframing />;
  if (t.includes("visual") || t.includes("identity") || t.includes("brand")) return <VisualUIDesign />;
  if (t.includes("prototype") || t.includes("interact")) return <VisualPrototyping />;
  if (t.includes("design system") || t.includes("component")) return <VisualDesignSystems />;
  if (t.includes("writing") || t.includes("microcopy") || t.includes("copy") || t.includes("content")) return <VisualUXWriting />;
  if (t.includes("web & app") || t.includes("cross-platform")) return <VisualWebAppUI />;
  if (t.includes("handoff") || t.includes("developer") || t.includes("front-end") || t.includes("development") || t.includes("code")) return <VisualDeveloperHandoff />;
  if (t.includes("commerce") || t.includes("shop") || t.includes("cart")) return <VisualEcommerce />;
  if (t.includes("analytics") || t.includes("seo") || t.includes("funnel") || t.includes("growth") || t.includes("marketing")) return <VisualAnalytics />;
  if (t.includes("app") || t.includes("android") || t.includes("ios") || t.includes("mobile")) return <VisualMobile />;

  const fallbackVisuals = [
    <VisualResearch key={0} />,
    <VisualWireframing key={1} />,
    <VisualUIDesign key={2} />,
    <VisualPrototyping key={3} />,
    <VisualDesignSystems key={4} />,
    <VisualUXWriting key={5} />,
    <VisualWebAppUI key={6} />,
    <VisualDeveloperHandoff key={7} />,
  ];
  return fallbackVisuals[index % fallbackVisuals.length];
}

/* ─────────────────────────────────────────────────────────────
   PRECOMPUTED BÉZIER CONDUITS & LAYOUT CONFIGURATIONS
   Zero DOM measurements, butter-smooth 60fps SVG curves
───────────────────────────────────────────────────────────── */

interface ConduitDef {
  id: number;
  path: string;
  startX: number;
  startY: number;
  endX: number;
  endY: number;
}

interface LayoutConfig {
  stageHeight: number;
  hubYPercent: number;
  positions: string[];
  conduits: ConduitDef[];
}

function getPrecomputedLayout(count: number): LayoutConfig {
  if (count <= 4) {
    return {
      stageHeight: 520,
      hubYPercent: 50,
      positions: [
        "top-[6%] left-[3%] w-[33%]",
        "top-[6%] right-[3%] w-[33%]",
        "top-[58%] left-[3%] w-[33%]",
        "top-[58%] right-[3%] w-[33%]",
      ],
      conduits: [
        { id: 0, path: "M 516 182 C 475 145, 435 115, 395 95", startX: 516, startY: 182, endX: 395, endY: 95 },
        { id: 1, path: "M 684 182 C 725 145, 765 115, 805 95", startX: 684, startY: 182, endX: 805, endY: 95 },
        { id: 2, path: "M 516 338 C 475 375, 435 405, 395 425", startX: 516, startY: 338, endX: 395, endY: 425 },
        { id: 3, path: "M 684 338 C 725 375, 765 405, 805 425", startX: 684, startY: 338, endX: 805, endY: 425 },
      ],
    };
  }

  if (count === 5) {
    // 5 items (Web Design & Dev): 2 top, 2 mid, 1 center-bottom
    return {
      stageHeight: 580,
      hubYPercent: 44,
      positions: [
        "top-[3%] left-[2%] w-[33%]",
        "top-[3%] right-[2%] w-[33%]",
        "top-[36%] left-[1%] w-[33%]",
        "top-[36%] right-[1%] w-[33%]",
        "top-[73%] left-1/2 -translate-x-1/2 w-[34%]",
      ],
      conduits: [
        { id: 0, path: "M 516 182 C 475 140, 435 105, 395 80", startX: 516, startY: 182, endX: 395, endY: 80 },
        { id: 1, path: "M 684 182 C 725 140, 765 105, 805 80", startX: 684, startY: 182, endX: 805, endY: 80 },
        { id: 2, path: "M 490 255 C 455 255, 425 255, 395 255", startX: 490, startY: 255, endX: 395, endY: 255 },
        { id: 3, path: "M 710 255 C 745 255, 775 255, 805 255", startX: 710, startY: 255, endX: 805, endY: 255 },
        { id: 4, path: "M 600 365 L 600 425", startX: 600, startY: 365, endX: 600, endY: 425 },
      ],
    };
  }

  if (count === 6) {
    // 6 items (Mobile App / Digital Marketing): 2 top, 2 mid, 2 bottom
    return {
      stageHeight: 600,
      hubYPercent: 44,
      positions: [
        "top-[3%] left-[2%] w-[33%]",
        "top-[3%] right-[2%] w-[33%]",
        "top-[36%] left-[1%] w-[33%]",
        "top-[36%] right-[1%] w-[33%]",
        "top-[73%] left-[12%] w-[32%]",
        "top-[73%] right-[12%] w-[32%]",
      ],
      conduits: [
        { id: 0, path: "M 516 182 C 475 140, 435 105, 395 80", startX: 516, startY: 182, endX: 395, endY: 80 },
        { id: 1, path: "M 684 182 C 725 140, 765 105, 805 80", startX: 684, startY: 182, endX: 805, endY: 80 },
        { id: 2, path: "M 490 255 C 455 255, 425 255, 395 255", startX: 490, startY: 255, endX: 395, endY: 255 },
        { id: 3, path: "M 710 255 C 745 255, 775 255, 805 255", startX: 710, startY: 255, endX: 805, endY: 255 },
        { id: 4, path: "M 530 345 C 470 385, 390 410, 330 435", startX: 530, startY: 345, endX: 330, endY: 435 },
        { id: 5, path: "M 670 345 C 730 385, 810 410, 870 435", startX: 670, startY: 345, endX: 870, endY: 435 },
      ],
    };
  }

  // 8 items (UI/UX Design / Custom Software): 2 top, 2 mid, 4 bottom
  return {
    stageHeight: 650,
    hubYPercent: 41,
    positions: [
      "top-[2%] left-[1.5%] w-[31%]",
      "top-[2%] right-[1.5%] w-[31%]",
      "top-[35%] left-[1%] w-[31%]",
      "top-[35%] right-[1%] w-[31%]",
      "top-[72%] left-[1%] w-[23%]",
      "top-[72%] left-[26%] w-[23%]",
      "top-[72%] left-[51%] w-[23%]",
      "top-[72%] right-[1%] w-[23%]",
    ],
    conduits: [
      { id: 0, path: "M 516 210 C 475 165, 430 115, 385 85", startX: 516, startY: 210, endX: 385, endY: 85 },
      { id: 1, path: "M 684 210 C 725 165, 770 115, 815 85", startX: 684, startY: 210, endX: 815, endY: 85 },
      { id: 2, path: "M 490 270 C 455 270, 420 270, 385 270", startX: 490, startY: 270, endX: 385, endY: 270 },
      { id: 3, path: "M 710 270 C 745 270, 780 270, 815 270", startX: 710, startY: 270, endX: 815, endY: 270 },
      { id: 4, path: "M 522 340 C 450 395, 260 415, 145 465", startX: 522, startY: 340, endX: 145, endY: 465 },
      { id: 5, path: "M 572 368 C 550 405, 480 430, 445 465", startX: 572, startY: 368, endX: 445, endY: 465 },
      { id: 6, path: "M 628 368 C 650 405, 720 430, 755 465", startX: 628, startY: 368, endX: 755, endY: 465 },
      { id: 7, path: "M 678 340 C 750 395, 940 415, 1055 465", startX: 678, startY: 340, endX: 1055, endY: 465 },
    ],
  };
}

/* Ambient Orbiting Particles around the Central Orb (matching Panel 2) */
const AMBIENT_PARTICLES = [
  { x: -95, y: -80, size: 5, delay: 0.25 },
  { x: 92, y: -75, size: 4.5, delay: 0.35 },
  { x: -115, y: 15, size: 4, delay: 0.45 },
  { x: 110, y: 20, size: 5.5, delay: 0.3 },
  { x: -80, y: 95, size: 4, delay: 0.5 },
  { x: 85, y: 90, size: 4.5, delay: 0.4 },
  { x: 0, y: -118, size: 5, delay: 0.2 },
  { x: 0, y: 120, size: 4, delay: 0.6 },
];

/* ─────────────────────────────────────────────────────────────
   MAIN COMPONENT WITH 8-STAGE PROGRESSIVE FLOW ANIMATION
───────────────────────────────────────────────────────────── */

export function DeliverablesHubShowcase({
  subServices,
  serviceTitle = "UI/UX Design",
  serviceSlug,
  className,
}: DeliverablesHubShowcaseProps) {
  const [activeCard, setActiveCard] = useState<number | null>(null);
  const [replayKey, setReplayKey] = useState(0);

  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.2 });

  const cardCount = subServices.length;
  const layout = useMemo(() => getPrecomputedLayout(cardCount), [cardCount]);

  /* Timing orchestrator matching the 8 storyboard stages:
     Stage 1 & 2: Center appears (0s - 0.5s)
     Stage 3: Card 01 conduit draws -> Card 01 pops in (0.5s - 0.95s)
     Stage 4: Card 02 conduit draws -> Card 02 pops in (1.0s - 1.45s)
     Stage 5: Cards 03 & 04 conduits draw -> pop in (1.5s - 2.0s)
     Stage 6: Bottom cards 05-08 conduits draw -> pop in (2.1s - 2.9s)
     Stage 7: All cards active with traveling energy pulses (3.0s+)
     Stage 8: Interactive hover effect on any card
  */
  const getStageDelays = (idx: number) => {
    if (cardCount === 8) {
      // Precise mappings matching the 8 storyboard frames
      switch (idx) {
        case 0:
          return { conduit: 0.45, card: 0.8 };
        case 1:
          return { conduit: 0.95, card: 1.3 };
        case 2:
          return { conduit: 1.45, card: 1.8 };
        case 3:
          return { conduit: 1.65, card: 2.0 };
        case 4:
          return { conduit: 2.1, card: 2.45 };
        case 5:
          return { conduit: 2.25, card: 2.6 };
        case 6:
          return { conduit: 2.4, card: 2.75 };
        case 7:
          return { conduit: 2.55, card: 2.9 };
        default:
          return { conduit: 0.5 + idx * 0.3, card: 0.8 + idx * 0.3 };
      }
    }

    // Proportional delays for 4, 5, or 6 items
    const conduit = 0.45 + idx * 0.38;
    const card = conduit + 0.32;
    return { conduit, card };
  };

  const isAnimated = isInView;

  return (
    <div
      ref={containerRef}
      key={replayKey}
      className={cn(
        "relative w-full py-4 sm:py-6 bg-[#F7F8F8] rounded-[28px] overflow-hidden select-none",
        className
      )}
    >
      {/* Pure CSS hardware-accelerated continuous energy dash stream */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
          @keyframes conduitFlow {
            0% { stroke-dashoffset: 0; }
            100% { stroke-dashoffset: -48; }
          }
          .conduit-stream {
            stroke-dasharray: 8 36;
            animation: conduitFlow 2.6s linear infinite;
          }
          .conduit-stream-active {
            stroke-dasharray: 12 28;
            animation: conduitFlow 1.2s linear infinite;
          }
        `,
        }}
      />

      {/* Header Bar with Replay Flow Trigger */}
      <div className="flex items-center justify-between px-4 sm:px-8 mb-2 z-30 relative">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-[#FF7A1A] animate-ping" />
          <span className="text-[11px] font-black uppercase tracking-[0.2em] text-[#C86A28]">
            Interactive Deliverables Flow
          </span>
        </div>

        <button
          onClick={() => setReplayKey((k) => k + 1)}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/90 hover:bg-white border border-[#C6C2C1]/70 text-[#544643] hover:text-[#C86A28] text-xs font-bold shadow-xs hover:shadow-sm transition-all duration-200 cursor-pointer"
          title="Replay flow animation"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          <span className="hidden sm:inline">Replay Flow</span>
        </button>
      </div>

      {/* ─────────────────────────────────────────────────────────
          DESKTOP SHOWCASE (lg:block) - 60fps Radial Flow Animation
      ───────────────────────────────────────────────────────── */}
      <div className="hidden lg:block relative w-full max-w-[1240px] mx-auto px-2">
        <div
          className="relative w-full transform-gpu"
          style={{
            height: `${layout.stageHeight}px`,
          }}
        >
          {/* Precomputed Hardware-Accelerated SVG Layer */}
          <svg
            viewBox={`0 0 1200 ${layout.stageHeight}`}
            className="absolute inset-0 w-full h-full pointer-events-none z-10"
            preserveAspectRatio="none"
          >
            <defs>
              <filter id="glow-orange" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="3.5" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {layout.conduits.map((c) => {
              if (c.id >= cardCount) return null;
              const isHovered = activeCard === c.id;
              const hasHover = activeCard !== null;
              const delays = getStageDelays(c.id);

              return (
                <g
                  key={c.id}
                  className="transition-opacity duration-300"
                  style={{
                    opacity: hasHover && !isHovered ? 0.35 : 1,
                  }}
                >
                  {/* Outer Ambient Glow Line (Stages 3-6 progressive draw) */}
                  <motion.path
                    d={c.path}
                    fill="none"
                    stroke={isHovered ? "#FF7A1A" : "#FF9248"}
                    strokeWidth={isHovered ? 5.5 : 3}
                    strokeOpacity={isHovered ? 0.85 : 0.3}
                    filter={isHovered ? "url(#glow-orange)" : undefined}
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={
                      isAnimated
                        ? { pathLength: 1, opacity: 1 }
                        : { pathLength: 0, opacity: 0 }
                    }
                    transition={{
                      pathLength: {
                        duration: 0.5,
                        delay: delays.conduit,
                        ease: [0.16, 1, 0.3, 1],
                      },
                      opacity: { duration: 0.2, delay: delays.conduit },
                    }}
                  />

                  {/* Inner Crisp Conduit (Stage 3-6 draw) */}
                  <motion.path
                    d={c.path}
                    fill="none"
                    stroke={isHovered ? "#FF7A1A" : "#C86A28"}
                    strokeWidth={isHovered ? 3 : 1.8}
                    strokeOpacity={isHovered ? 1 : 0.65}
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={
                      isAnimated
                        ? { pathLength: 1, opacity: 1 }
                        : { pathLength: 0, opacity: 0 }
                    }
                    transition={{
                      pathLength: {
                        duration: 0.45,
                        delay: delays.conduit,
                        ease: [0.16, 1, 0.3, 1],
                      },
                      opacity: { duration: 0.2, delay: delays.conduit },
                    }}
                  />

                  {/* CSS-Accelerated Traveling Energy Pulse (Stage 7 continuous flow) */}
                  <motion.path
                    d={c.path}
                    fill="none"
                    stroke={isHovered ? "#FFF2E5" : "#FFB17A"}
                    strokeWidth={isHovered ? 3.5 : 2.2}
                    className={
                      isHovered ? "conduit-stream-active" : "conduit-stream"
                    }
                    initial={{ opacity: 0 }}
                    animate={
                      isAnimated
                        ? { opacity: isHovered ? 1 : 0.85 }
                        : { opacity: 0 }
                    }
                    transition={{
                      duration: 0.35,
                      delay: delays.conduit + 0.35,
                    }}
                  />

                  {/* Hub Edge Node Circle */}
                  <motion.circle
                    cx={c.startX}
                    cy={c.startY}
                    r={isHovered ? 6.5 : 4.5}
                    fill={isHovered ? "#FF7A1A" : "#C86A28"}
                    stroke="#FFFFFF"
                    strokeWidth={isHovered ? 2 : 1.5}
                    initial={{ scale: 0, opacity: 0 }}
                    animate={
                      isAnimated
                        ? { scale: 1, opacity: 1 }
                        : { scale: 0, opacity: 0 }
                    }
                    transition={{
                      duration: 0.25,
                      delay: delays.conduit,
                      type: "spring",
                      stiffness: 260,
                      damping: 18,
                    }}
                  />

                  {/* Card Anchor Node Circle */}
                  <motion.circle
                    cx={c.endX}
                    cy={c.endY}
                    r={isHovered ? 6 : 4}
                    fill={isHovered ? "#FF7A1A" : "#C86A28"}
                    stroke="#FFFFFF"
                    strokeWidth={isHovered ? 2 : 1.5}
                    initial={{ scale: 0, opacity: 0 }}
                    animate={
                      isAnimated
                        ? { scale: 1, opacity: 1 }
                        : { scale: 0, opacity: 0 }
                    }
                    transition={{
                      duration: 0.25,
                      delay: delays.conduit + 0.32,
                      type: "spring",
                      stiffness: 260,
                      damping: 18,
                    }}
                  />
                </g>
              );
            })}
          </svg>

          {/* ─────────────────────────────────────────────────────────
              CENTER HUB (Stage 1 & 2: Center Appears with Glowing Aura & Particles)
          ───────────────────────────────────────────────────────── */}
          <div
            className="absolute left-[50%] -translate-x-1/2 -translate-y-1/2 z-20 w-[240px] h-[240px] rounded-full flex items-center justify-center p-2 transform-gpu pointer-events-none"
            style={{
              top: `${layout.hubYPercent}%`,
            }}
          >
            {/* Ambient Particle Dots (matching storyboard Panel 2) */}
            {AMBIENT_PARTICLES.map((p, i) => (
              <motion.div
                key={i}
                className="absolute rounded-full bg-[#FF7A1A] pointer-events-none shadow-[0_0_8px_#FF7A1A]"
                style={{
                  width: `${p.size}px`,
                  height: `${p.size}px`,
                  left: `calc(50% + ${p.x}px)`,
                  top: `calc(50% + ${p.y}px)`,
                }}
                initial={{ scale: 0, opacity: 0 }}
                animate={
                  isAnimated
                    ? {
                        scale: [0, 1.2, 1],
                        opacity: [0, 0.9, 0.7],
                        y: [0, (i % 2 === 0 ? -4 : 4), 0],
                      }
                    : { scale: 0, opacity: 0 }
                }
                transition={{
                  scale: { duration: 0.5, delay: p.delay },
                  opacity: { duration: 0.5, delay: p.delay },
                  y: {
                    repeat: Infinity,
                    duration: 3 + (i % 3),
                    ease: "easeInOut",
                    delay: p.delay,
                  },
                }}
              />
            ))}

            {/* Glowing Warm Aura Pulse (Panel 2) */}
            <motion.div
              className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#FF7A1A]/35 via-[#C86A28]/25 to-transparent blur-xl pointer-events-none"
              initial={{ scale: 0.6, opacity: 0 }}
              animate={
                isAnimated
                  ? {
                      scale: [1, 1.14, 1],
                      opacity: [0.4, 0.75, 0.4],
                    }
                  : { scale: 0.6, opacity: 0 }
              }
              transition={{
                scale: { repeat: Infinity, duration: 3.5, ease: "easeInOut" },
                opacity: { repeat: Infinity, duration: 3.5, ease: "easeInOut" },
              }}
            />

            {/* Outer Metallic Ring */}
            <motion.div
              className="absolute inset-0 rounded-full border-2 border-[#C86A28]/60 shadow-[0_0_30px_rgba(200,106,40,0.25),inset_0_0_18px_rgba(200,106,40,0.12)]"
              initial={{ scale: 0.7, opacity: 0 }}
              animate={
                isAnimated
                  ? { scale: 1, opacity: 1 }
                  : { scale: 0.7, opacity: 0 }
              }
              transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
            />

            {/* Inner Glass Sphere */}
            <motion.div
              className="relative w-full h-full rounded-full bg-white border border-white/90 shadow-[0_8px_32px_rgba(200,106,40,0.18)] flex flex-col items-center justify-center p-4 text-center overflow-hidden"
              initial={{ scale: 0.7, opacity: 0 }}
              animate={
                isAnimated
                  ? { scale: 1, opacity: 1 }
                  : { scale: 0.7, opacity: 0 }
              }
              transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="absolute -top-6 -left-6 w-32 h-32 rounded-full bg-gradient-to-br from-white/95 via-white/40 to-transparent pointer-events-none" />

              {/* Center Icon Badge */}
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#FF7A1A] to-[#C86A28] text-white flex items-center justify-center shadow-sm mb-1.5 z-10">
                <Layers className="w-5 h-5" />
              </div>

              {/* Subheading */}
              <span className="text-[9px] font-black uppercase tracking-[0.22em] text-[#C86A28] block mb-0.5 z-10">
                DOMAIN SPECIALIZATION
              </span>

              {/* Main Heading */}
              <h3 className="text-base sm:text-lg font-black text-[#151515] leading-tight tracking-tight z-10">
                What We Deliver
              </h3>
              <p className="text-xs font-extrabold text-[#C86A28] tracking-tight z-10">
                In This Service
              </p>

              {/* Bottom Accent Bar */}
              <div className="w-8 h-1 rounded-full bg-gradient-to-r from-[#FF7A1A] to-[#C86A28] mt-2 z-10" />
            </motion.div>
          </div>

          {/* ─────────────────────────────────────────────────────────
              SURROUNDING CARDS (Progressively animated through Stages 3-6)
          ───────────────────────────────────────────────────────── */}
          {subServices.map((sub, idx) => {
            const isHovered = activeCard === idx;
            const hasHover = activeCard !== null;
            const numberBadge = String(idx + 1).padStart(2, "0");
            const posClass = layout.positions[idx] || "top-0 left-0";
            const delays = getStageDelays(idx);

            return (
              <motion.div
                key={idx}
                onMouseEnter={() => setActiveCard(idx)}
                onMouseLeave={() => setActiveCard(null)}
                initial={{ opacity: 0, scale: 0.85, y: 14 }}
                animate={
                  isAnimated
                    ? {
                        opacity: hasHover && !isHovered ? 0.5 : 1,
                        scale: isHovered ? 1.03 : 1,
                        y: isHovered ? -4 : 0,
                      }
                    : { opacity: 0, scale: 0.85, y: 14 }
                }
                transition={
                  isAnimated
                    ? isHovered || hasHover
                      ? { duration: 0.22, ease: "easeOut" }
                      : {
                          duration: 0.45,
                          delay: delays.card,
                          ease: [0.22, 1, 0.36, 1],
                        }
                    : { duration: 0.2 }
                }
                className={cn(
                  "absolute z-20 group cursor-pointer transform-gpu",
                  posClass
                )}
              >
                {/* 3D Angled Orange Backing Plate */}
                <div
                  className={cn(
                    "absolute inset-0 rounded-2xl transition-transform duration-200 pointer-events-none",
                    "bg-gradient-to-br from-[#FF9248]/35 via-[#E0782F]/25 to-[#C86A28]/20 border border-[#FF8A3D]/40",
                    isHovered
                      ? "translate-x-1.5 translate-y-1.5 from-[#FF8A3D]/55 to-[#C86A28]/40 shadow-xs"
                      : "translate-x-1 translate-y-1"
                  )}
                />

                {/* Main Glassmorphic Card Container */}
                <div
                  className={cn(
                    "relative z-10 p-3.5 sm:p-4 rounded-2xl bg-white border transition-all duration-200 flex items-center justify-between gap-3",
                    isHovered
                      ? "border-[#FF7A1A] shadow-[0_12px_28px_rgba(255,122,26,0.18)]"
                      : "border-[#C6C2C1]/80 shadow-xs hover:border-[#FF8A3D]/80"
                  )}
                >
                  {/* Left Column: Number Badge, Title, Description */}
                  <div className="flex-1 min-w-0 pr-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span
                        className={cn(
                          "w-6 h-6 rounded-full text-white font-black text-[11px] flex items-center justify-center shrink-0 shadow-xs transition-colors duration-200",
                          isHovered
                            ? "bg-[#FF7A1A]"
                            : "bg-gradient-to-br from-[#FF7A1A] to-[#C86A28]"
                        )}
                      >
                        {numberBadge}
                      </span>
                      <h4
                        className={cn(
                          "text-xs sm:text-sm font-extrabold leading-snug tracking-tight transition-colors line-clamp-1",
                          isHovered ? "text-[#C86A28]" : "text-[#151515]"
                        )}
                      >
                        {sub.title}
                      </h4>
                    </div>

                    <p className="text-[11px] text-[#544643] leading-relaxed line-clamp-2">
                      {sub.description}
                    </p>
                  </div>

                  {/* Right Column: Miniature 3D Visual Accessory */}
                  <div className="shrink-0 flex items-center justify-center">
                    {getCardVisual(sub.title, idx)}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* ─────────────────────────────────────────────────────────
          MOBILE & TABLET SHOWCASE (< lg) - High Performance Progressive Reveal
      ───────────────────────────────────────────────────────── */}
      <div className="lg:hidden max-w-2xl mx-auto px-3 sm:px-6 relative space-y-4">
        {/* Central Hub Header */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={
            isAnimated
              ? { opacity: 1, scale: 1 }
              : { opacity: 0, scale: 0.9 }
          }
          transition={{ duration: 0.5 }}
          className="mx-auto w-full max-w-sm rounded-2xl bg-white border border-[#C6C2C1]/80 p-4 sm:p-5 text-center shadow-xs relative overflow-hidden"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#FF7A1A] to-[#C86A28] text-white flex items-center justify-center shadow-xs mx-auto mb-2">
            <Layers className="w-5 h-5" />
          </div>
          <span className="text-[9px] font-black uppercase tracking-[0.2em] text-[#C86A28] block mb-0.5">
            DOMAIN SPECIALIZATION
          </span>
          <h3 className="text-base font-extrabold text-[#151515]">
            What We Deliver in This Service
          </h3>
          <div className="w-8 h-1 rounded-full bg-gradient-to-r from-[#FF7A1A] to-[#C86A28] mx-auto mt-2" />
        </motion.div>

        {/* Vertical Connected Conduit Spine */}
        <div className="relative pl-6 sm:pl-8 space-y-3.5 border-l-2 border-[#C86A28]/40 ml-3 sm:ml-4">
          {subServices.map((sub, idx) => {
            const numberBadge = String(idx + 1).padStart(2, "0");
            const isHovered = activeCard === idx;

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -12 }}
                animate={
                  isAnimated
                    ? { opacity: 1, x: 0 }
                    : { opacity: 0, x: -12 }
                }
                transition={{
                  duration: 0.4,
                  delay: 0.2 + idx * 0.12,
                  ease: "easeOut",
                }}
                onClick={() => setActiveCard(activeCard === idx ? null : idx)}
                className="relative group cursor-pointer"
              >
                {/* Horizontal branch spur */}
                <div className="absolute -left-[26px] sm:-left-[34px] top-5 w-5 sm:w-7 h-0.5 bg-[#C86A28]/60" />
                <div
                  className={cn(
                    "absolute -left-[30px] sm:-left-[38px] top-4 w-2.5 h-2.5 rounded-full border-2 border-white shadow-xs transition-colors duration-200",
                    isHovered ? "bg-[#FF7A1A] scale-125" : "bg-[#C86A28]"
                  )}
                />

                {/* 3D Layered Tab */}
                <div className="absolute inset-0 translate-x-1 translate-y-1 rounded-xl bg-gradient-to-br from-[#FF9248]/30 to-[#C86A28]/20 border border-[#FF8A3D]/40 pointer-events-none" />

                {/* Main Card */}
                <div
                  className={cn(
                    "relative z-10 p-3.5 sm:p-4 rounded-xl bg-white border shadow-xs flex items-center justify-between gap-3 transition-all duration-200",
                    isHovered
                      ? "border-[#FF7A1A] shadow-md"
                      : "border-[#C6C2C1]/80 hover:border-[#FF8A3D]"
                  )}
                >
                  <div className="flex-1 min-w-0 pr-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="w-5 h-5 rounded-full bg-gradient-to-br from-[#FF7A1A] to-[#C86A28] text-white font-extrabold text-[10px] flex items-center justify-center shrink-0">
                        {numberBadge}
                      </span>
                      <h4
                        className={cn(
                          "text-xs sm:text-sm font-extrabold leading-snug transition-colors",
                          isHovered ? "text-[#C86A28]" : "text-[#151515]"
                        )}
                      >
                        {sub.title}
                      </h4>
                    </div>
                    <p className="text-[11px] text-[#544643] leading-relaxed line-clamp-2">
                      {sub.description}
                    </p>
                  </div>
                  <div className="shrink-0 scale-90 sm:scale-100">
                    {getCardVisual(sub.title, idx)}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
