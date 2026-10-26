"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Monitor,
  FileText,
  Smartphone,
  Cloud,
  Layers,
  ShoppingCart,
  CreditCard,
  Package,
  Globe,
  TrendingUp,
  Cpu,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { RevealOnScroll } from "@/components/shared/RevealOnScroll";

interface ProjectShowcase {
  id: string;
  number: string;
  total: string;
  name: string;
  category: string;
  filterCategories: string[];
  description: string;
  link: string;
  numColor: string;
  themeColor: string;
  badgeBg: string;
  badgeText: string;
  badgeBorder: string;
  badgeIcon: React.ElementType;
  badgeLabel: string;
  features: {
    icon: React.ElementType;
    label: string;
  }[];
  buttonBg: string;
  buttonArrow: "up-right" | "right";
  layout: "mockup-left" | "mockup-right";
  mockupType: "twilight-laptop" | "lenient-phones" | "bakers-laptop" | "elite-portal" | "pravin-platform";
}

const CATEGORIES = [
  { id: "all", label: "All" },
  { id: "websites", label: "Websites" },
  { id: "mobile", label: "Mobile Apps" },
  { id: "software", label: "Custom Software" },
  { id: "uiux", label: "UI/UX Design" },
  { id: "ecommerce", label: "E-commerce" },
  { id: "saas", label: "SaaS Products" },
];

const SHOWCASE_PROJECTS: ProjectShowcase[] = [
  {
    id: "twilight",
    number: "01",
    total: "06",
    name: "Twilight Engineering Solutions",
    category: "Websites & Web Apps",
    filterCategories: ["all", "websites"],
    description:
      "High-precision engineering and manufacturing digital portal with instant B2B quotation pipelines.",
    link: "/work/twilight-engineering-solutions",
    numColor: "text-[#C7D2FE]",
    themeColor: "#7C3AED",
    badgeBg: "bg-white/95",
    badgeText: "text-[#502D6D]",
    badgeBorder: "border-purple-100",
    badgeIcon: Globe,
    badgeLabel: "Websites & Web Apps",
    features: [
      { icon: Monitor, label: "Corporate Website" },
      { icon: FileText, label: "Quotation System" },
      { icon: Smartphone, label: "Responsive Design" },
    ],
    buttonBg: "bg-[#7C3AED] hover:bg-[#6D28D9]",
    buttonArrow: "up-right",
    layout: "mockup-left",
    mockupType: "twilight-laptop",
  },
  {
    id: "lenient",
    number: "02",
    total: "06",
    name: "Lenient Mobile Experience",
    category: "Mobile Apps",
    filterCategories: ["all", "mobile"],
    description:
      "Modern Android & iOS mobile application featuring offline-first data caching and responsive performance.",
    link: "/work",
    numColor: "text-[#FED7AA]",
    themeColor: "#EA580C",
    badgeBg: "bg-[#059669]",
    badgeText: "text-white",
    badgeBorder: "border-emerald-400/40",
    badgeIcon: Smartphone,
    badgeLabel: "Mobile Apps",
    features: [
      { icon: Smartphone, label: "Android & iOS" },
      { icon: Cloud, label: "Offline Access" },
      { icon: Layers, label: "Modern UI/UX" },
    ],
    buttonBg: "bg-[#EA580C] hover:bg-[#C2410C]",
    buttonArrow: "right",
    layout: "mockup-right",
    mockupType: "lenient-phones",
  },
  {
    id: "bakers",
    number: "03",
    total: "06",
    name: "Smart Bakers Mart",
    category: "E-Commerce & SaaS",
    filterCategories: ["all", "ecommerce", "saas"],
    description:
      "Comprehensive confectionery e-commerce platform with product catalog, secure payments and order management.",
    link: "/work/smart-bakers-mart",
    numColor: "text-[#FECDD3]",
    themeColor: "#E11D48",
    badgeBg: "bg-[#FFF1F2]",
    badgeText: "text-[#BE123C]",
    badgeBorder: "border-rose-200",
    badgeIcon: ShoppingCart,
    badgeLabel: "E-Commerce & SaaS",
    features: [
      { icon: ShoppingCart, label: "Online Store" },
      { icon: CreditCard, label: "Secure Payments" },
      { icon: Package, label: "Order Management" },
    ],
    buttonBg: "bg-[#E11D48] hover:bg-[#BE123C]",
    buttonArrow: "right",
    layout: "mockup-left",
    mockupType: "bakers-laptop",
  },
  {
    id: "elite",
    number: "04",
    total: "06",
    name: "The Elite Mutual Funds",
    category: "UI/UX Design",
    filterCategories: ["all", "uiux"],
    description:
      "Wealth advisory investment portal with real-time SIP return calculators, visual risk charts, and onboarding funnels.",
    link: "/work/the-elite-mutual-funds",
    numColor: "text-[#C7D2FE]",
    themeColor: "#4F46E5",
    badgeBg: "bg-[#EEF2FF]",
    badgeText: "text-[#4338CA]",
    badgeBorder: "border-indigo-200",
    badgeIcon: TrendingUp,
    badgeLabel: "UI/UX Design",
    features: [
      { icon: TrendingUp, label: "Wealth Analytics" },
      { icon: Monitor, label: "SIP Calculator" },
      { icon: Layers, label: "Interactive Charts" },
    ],
    buttonBg: "bg-[#4F46E5] hover:bg-[#3730A3]",
    buttonArrow: "right",
    layout: "mockup-right",
    mockupType: "elite-portal",
  },
  {
    id: "pravin",
    number: "05",
    total: "06",
    name: "Pravin Bottelings",
    category: "Custom Software",
    filterCategories: ["all", "software"],
    description:
      "Automated beverage bottling manufacturing website showcasing production lines and contract batch capacities.",
    link: "/work/pravin-bottelings",
    numColor: "text-[#FEF08A]",
    themeColor: "#D97706",
    badgeBg: "bg-[#FFFBEB]",
    badgeText: "text-[#B45309]",
    badgeBorder: "border-amber-200",
    badgeIcon: Cpu,
    badgeLabel: "Custom Software",
    features: [
      { icon: Cpu, label: "Production Line CRM" },
      { icon: FileText, label: "Batch Scheduling" },
      { icon: Monitor, label: "B2B Showcase" },
    ],
    buttonBg: "bg-[#D97706] hover:bg-[#B45309]",
    buttonArrow: "right",
    layout: "mockup-left",
    mockupType: "pravin-platform",
  },
];

/* ─────────────────────────────────────────────────────────────
   3D Laptop Mockup: Twilight Engineering Solutions (Row 1)
   ───────────────────────────────────────────────────────────── */
function TwilightLaptopMockup() {
  return (
    <div className="relative w-full max-w-[520px] lg:max-w-[580px] mx-auto select-none group/laptop py-6">
      {/* Rocky Cliff Base (Matches Reference Image 2) */}
      <div className="absolute -bottom-6 left-0 right-0 h-28 pointer-events-none z-0">
        <svg viewBox="0 0 500 120" preserveAspectRatio="none" className="w-full h-full filter drop-shadow-md">
          <defs>
            <linearGradient id="rockGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#C9B097" />
              <stop offset="50%" stopColor="#9C826B" />
              <stop offset="100%" stopColor="#6E5844" />
            </linearGradient>
            <linearGradient id="rockGrad2" x1="0%" y1="0%" x2="50%" y2="100%">
              <stop offset="0%" stopColor="#E6D5C3" />
              <stop offset="100%" stopColor="#B39B82" />
            </linearGradient>
          </defs>
          <path d="M 10,80 Q 80,45 160,60 T 320,50 T 480,75 L 500,120 L 0,120 Z" fill="url(#rockGrad1)" opacity="0.85" />
          <path d="M 30,85 Q 110,65 190,75 T 350,65 T 460,90 L 500,120 L 0,120 Z" fill="url(#rockGrad2)" opacity="0.6" />
        </svg>
      </div>

      {/* Lush Green Foliage on Left Edge (Matches Reference Image 2) */}
      <div className="absolute -left-6 -bottom-2 z-30 pointer-events-none w-28 h-36">
        <svg viewBox="0 0 100 120" fill="none" className="w-full h-full filter drop-shadow-md">
          {/* Leaf 1 */}
          <path d="M 10,110 C 20,80 15,40 45,30 C 40,55 35,80 10,110 Z" fill="#2E7D32" />
          <path d="M 10,110 C 25,85 20,45 45,30" stroke="#4CAF50" strokeWidth="1.5" />
          {/* Leaf 2 */}
          <path d="M 15,100 C 40,85 55,55 75,50 C 65,70 50,90 15,100 Z" fill="#1B5E20" />
          <path d="M 15,100 C 45,85 55,60 75,50" stroke="#81C784" strokeWidth="1.5" />
          {/* Leaf 3 */}
          <path d="M 8,115 C 2,85 0,55 12,35 C 18,55 16,85 8,115 Z" fill="#388E3C" />
          {/* Leaf 4 (small) */}
          <path d="M 22,95 C 35,75 50,65 60,60 C 50,75 40,85 22,95 Z" fill="#43A047" opacity="0.9" />
        </svg>
      </div>

      {/* 3D Angled Laptop Shell */}
      <div
        className="relative z-10 transition-transform duration-500 group-hover/laptop:scale-[1.02]"
        style={{
          transform: "perspective(1200px) rotateY(-8deg) rotateX(4deg)",
          transformOrigin: "bottom center",
        }}
      >
        {/* Upper Screen Frame */}
        <div className="rounded-t-2xl bg-[#090D16] p-2.5 sm:p-3 shadow-2xl border border-slate-700/80">
          {/* Screen Camera Notch */}
          <div className="absolute top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-slate-900 border border-slate-700 flex items-center justify-center">
            <div className="w-1 h-1 rounded-full bg-blue-500/80" />
          </div>

          {/* Screen Content Canvas */}
          <div className="relative rounded-lg overflow-hidden bg-[#0A0F1D] aspect-[16/10] border border-slate-800 text-white flex flex-col justify-between">
            {/* Nav Header */}
            <div className="px-3 py-2 bg-[#0F172A]/95 border-b border-slate-800 flex items-center justify-between text-[9px] sm:text-[10px]">
              <div className="flex items-center gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-rose-500 flex items-center justify-center text-[6px] font-black">T</div>
                <span className="font-black tracking-wider text-rose-400">TWILIGHT</span>
              </div>
              <div className="hidden sm:flex items-center gap-3 text-slate-400 font-medium text-[8px]">
                <span className="text-white font-bold">Home</span>
                <span>About</span>
                <span>Services</span>
                <span>Quotation</span>
              </div>
              <div className="px-2.5 py-0.5 rounded-sm bg-rose-600 text-white text-[7px] font-bold shadow-xs">
                Get a Quote
              </div>
            </div>

            {/* Hero Screen Section */}
            <div className="relative flex-1 p-3.5 sm:p-6 flex flex-col justify-center bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950/90 overflow-hidden">
              {/* Industrial Silhouette Graphic inside screen */}
              <div className="absolute right-0 bottom-0 top-0 w-2/5 opacity-35 pointer-events-none">
                <svg viewBox="0 0 100 100" fill="none" className="w-full h-full text-slate-400">
                  <rect x="8" y="25" width="14" height="75" fill="currentColor" opacity="0.7" />
                  <rect x="26" y="10" width="16" height="90" fill="currentColor" opacity="0.85" />
                  <rect x="46" y="35" width="18" height="65" fill="currentColor" opacity="0.65" />
                  <line x1="2" y1="95" x2="98" y2="95" stroke="currentColor" strokeWidth="2" />
                  <polygon points="55,10 57,35 53,35" fill="currentColor" />
                </svg>
              </div>

              <div className="relative z-10 max-w-[72%]">
                <div className="inline-block px-1.5 py-0.5 rounded bg-rose-500/15 border border-rose-500/30 text-rose-400 text-[7px] sm:text-[8px] font-bold uppercase tracking-wider mb-1.5">
                  Engineering Excellence
                </div>
                <h4 className="text-xs sm:text-base font-black leading-tight text-white tracking-tight">
                  Innovative Engineering Solutions for a Better Tomorrow.
                </h4>
                <p className="text-[7px] sm:text-[9px] text-slate-400 mt-1 line-clamp-2">
                  Precision. Performance. Partnerships. Delivering mission-critical industrial manufacturing portals.
                </p>
                <div className="mt-2.5 sm:mt-3 flex items-center gap-2">
                  <span className="px-2.5 py-1 rounded bg-rose-600 text-white text-[8px] font-extrabold shadow-sm">
                    Explore Systems
                  </span>
                  <span className="text-[8px] text-slate-300 font-semibold underline underline-offset-2">
                    View Specs
                  </span>
                </div>
              </div>
            </div>

            {/* Screen Bottom Bar */}
            <div className="px-3 py-1 bg-slate-950 border-t border-slate-800 flex items-center justify-between text-[7px] text-slate-500">
              <span>Twilight Engineering Solutions Pvt. Ltd.</span>
              <span className="text-emerald-400 font-semibold">● Live Production</span>
            </div>
          </div>
        </div>

        {/* Laptop Keyboard Aluminum Base */}
        <div className="relative h-3.5 sm:h-4 bg-gradient-to-b from-[#E2E8F0] via-[#CBD5E1] to-[#94A3B8] rounded-b-xl shadow-xl border-t border-slate-300 flex items-center justify-center">
          <div className="w-16 h-1 bg-slate-400 rounded-b-md" />
        </div>
      </div>

      {/* Floating Badge: Websites & Web Apps (Matching Reference Image 2) */}
      <div className="absolute top-2 -left-2 sm:-left-4 z-20 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-full shadow-[0_10px_25px_rgba(80,45,109,0.15)] border border-purple-100 flex items-center gap-2 text-xs font-bold text-[#502D6D]">
        <div className="w-5 h-5 rounded-full bg-purple-100 text-[#7C3AED] flex items-center justify-center">
          <Globe className="w-3 h-3" />
        </div>
        <span>Websites & Web Apps</span>
      </div>

      {/* Floating Purple Circular Button (Matching Reference Image 2) */}
      <Link
        href="/work/twilight-engineering-solutions"
        className="absolute bottom-2 right-2 sm:right-4 z-20 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#7C3AED] hover:bg-[#6D28D9] text-white flex items-center justify-center shadow-[0_10px_25px_rgba(124,58,237,0.4)] hover:scale-110 transition-all cursor-pointer group/btn"
      >
        <ArrowUpRight className="w-5 h-5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
      </Link>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   3D Dual Phone Mockup: Lenient Mobile Experience (Row 2)
   ───────────────────────────────────────────────────────────── */
function LenientPhonesMockup() {
  return (
    <div className="relative w-full max-w-[460px] sm:max-w-[500px] mx-auto select-none group/phones py-6">
      {/* Natural Round Stone/Wood Pedestal (Matches Reference Image 2) */}
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-[340px] sm:w-[400px] h-20 pointer-events-none z-0">
        <svg viewBox="0 0 360 80" className="w-full h-full filter drop-shadow-xl">
          <defs>
            <linearGradient id="pedestalTop" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#E6D3BA" />
              <stop offset="50%" stopColor="#D5BE9E" />
              <stop offset="100%" stopColor="#C4AA87" />
            </linearGradient>
            <linearGradient id="pedestalSide" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#B69A77" />
              <stop offset="100%" stopColor="#7E6547" />
            </linearGradient>
          </defs>
          {/* Pedestal Side Cylinder */}
          <path d="M 20,40 C 20,60 90,75 180,75 C 270,75 340,60 340,40 L 340,55 C 340,75 270,80 180,80 C 90,80 20,75 20,55 Z" fill="url(#pedestalSide)" />
          {/* Pedestal Top Ellipse */}
          <ellipse cx="180" cy="40" rx="160" ry="32" fill="url(#pedestalTop)" />
          {/* Natural Stone Rim Texture / Moss Accents */}
          <ellipse cx="180" cy="40" rx="155" ry="29" fill="none" stroke="#FAF0E6" strokeWidth="1.5" opacity="0.6" />
          <circle cx="70" cy="45" r="4" fill="#6B8E23" opacity="0.8" />
          <circle cx="80" cy="48" r="3" fill="#556B2F" opacity="0.7" />
          <circle cx="290" cy="44" r="4" fill="#6B8E23" opacity="0.75" />
          <circle cx="280" cy="47" r="3" fill="#556B2F" opacity="0.8" />
        </svg>
      </div>

      {/* Dual Phones Container */}
      <div className="relative z-10 flex items-center justify-center gap-3 sm:gap-5 pb-6">
        {/* Phone 1: Lenient Login Screen (Left, slightly rotated) */}
        <div
          className="relative z-10 w-[160px] sm:w-[195px] rounded-[30px] sm:rounded-[36px] bg-[#0F172A] p-2 shadow-2xl border border-slate-700/80 transition-transform duration-500 group-hover/phones:scale-[1.02]"
          style={{
            transform: "perspective(1000px) rotateY(6deg) rotateX(4deg) rotateZ(-3deg)",
          }}
        >
          {/* Dynamic Island */}
          <div className="absolute top-3 left-1/2 -translate-x-1/2 w-12 h-3.5 bg-black rounded-full z-20 flex items-center justify-end pr-1.5">
            <div className="w-1.5 h-1.5 rounded-full bg-blue-500/80" />
          </div>

          {/* Screen Content */}
          <div className="rounded-[24px] sm:rounded-[28px] overflow-hidden bg-white aspect-[9/18] p-3 pt-7 flex flex-col justify-between text-slate-900">
            {/* Logo */}
            <div className="text-center mt-3">
              <h5 className="text-sm sm:text-base font-black text-slate-800 tracking-tight">Lenient</h5>
              <span className="text-[7px] text-slate-400 font-semibold uppercase tracking-wider block">Technologies</span>
            </div>

            {/* Login Form */}
            <div className="space-y-2 my-auto">
              <span className="text-[10px] font-black text-slate-900 block text-center">Welcome Back</span>
              <div className="h-6 rounded-md bg-slate-100 border border-slate-200 px-2 flex items-center text-[8px] text-slate-400">
                Email
              </div>
              <div className="h-6 rounded-md bg-slate-100 border border-slate-200 px-2 flex items-center text-[8px] text-slate-400">
                Password
              </div>
              <div className="h-6 rounded-md bg-[#10B981] text-white flex items-center justify-center text-[8px] font-black shadow-sm">
                Login
              </div>
              <span className="text-[7px] text-slate-400 text-center block">Forgot Password?</span>
            </div>

            {/* Home Indicator */}
            <div className="w-12 h-1 bg-slate-300 rounded-full mx-auto" />
          </div>
        </div>

        {/* Phone 2: Dashboard (Right, forward elevated) */}
        <div
          className="relative z-20 w-[170px] sm:w-[210px] rounded-[30px] sm:rounded-[36px] bg-[#0F172A] p-2 shadow-2xl border border-slate-700/80 transition-transform duration-500 group-hover/phones:scale-[1.03]"
          style={{
            transform: "perspective(1000px) rotateY(-4deg) rotateX(2deg) rotateZ(2deg)",
          }}
        >
          {/* Dynamic Island */}
          <div className="absolute top-3 left-1/2 -translate-x-1/2 w-14 h-3.5 bg-black rounded-full z-20 flex items-center justify-end pr-1.5">
            <div className="w-1.5 h-1.5 rounded-full bg-blue-500/80" />
          </div>

          {/* Screen Content */}
          <div className="rounded-[24px] sm:rounded-[28px] overflow-hidden bg-[#F8FAFC] aspect-[9/18] p-3 pt-7 flex flex-col justify-between text-slate-900">
            {/* Top Bar */}
            <div className="flex items-center justify-between mt-1">
              <div className="flex items-center gap-1.5">
                <div className="w-4 h-4 rounded bg-emerald-500 text-white flex items-center justify-center text-[8px] font-bold">L</div>
                <span className="text-[10px] font-extrabold text-slate-800">Dashboard</span>
              </div>
              <div className="w-4 h-4 rounded-full bg-slate-200" />
            </div>

            {/* 4 Stat Cards */}
            <div className="grid grid-cols-2 gap-1.5 my-2">
              <div className="p-1.5 rounded-lg bg-blue-50 border border-blue-100">
                <span className="text-[7px] text-blue-600 font-bold block">Service Calls</span>
                <span className="text-xs font-black text-blue-900">24</span>
              </div>
              <div className="p-1.5 rounded-lg bg-orange-50 border border-orange-100">
                <span className="text-[7px] text-orange-600 font-bold block">Pending</span>
                <span className="text-xs font-black text-orange-900">8</span>
              </div>
              <div className="p-1.5 rounded-lg bg-emerald-50 border border-emerald-100">
                <span className="text-[7px] text-emerald-600 font-bold block">Completed</span>
                <span className="text-xs font-black text-emerald-900">16</span>
              </div>
              <div className="p-1.5 rounded-lg bg-purple-50 border border-purple-100">
                <span className="text-[7px] text-purple-600 font-bold block">Stock Items</span>
                <span className="text-xs font-black text-purple-900">32</span>
              </div>
            </div>

            {/* Recent Activity */}
            <div className="space-y-1">
              <span className="text-[8px] font-black text-slate-700 block">Recent Activity</span>
              <div className="p-1 rounded bg-white border border-slate-200/80 flex items-center justify-between text-[7px]">
                <span className="font-semibold text-slate-700">New service call</span>
                <span className="text-blue-500 font-bold">2m ago</span>
              </div>
              <div className="p-1 rounded bg-white border border-slate-200/80 flex items-center justify-between text-[7px]">
                <span className="font-semibold text-slate-700">Stock updated</span>
                <span className="text-slate-400">1h ago</span>
              </div>
            </div>

            {/* Home Indicator */}
            <div className="w-12 h-1 bg-slate-300 rounded-full mx-auto" />
          </div>
        </div>
      </div>

      {/* Floating Badge: Mobile Apps (Top Right) */}
      <div className="absolute top-2 -right-2 sm:-right-4 z-30 bg-[#10B981] text-white px-3.5 py-1.5 rounded-full shadow-[0_10px_25px_rgba(16,185,129,0.3)] flex items-center gap-2 text-xs font-bold">
        <Smartphone className="w-3.5 h-3.5" />
        <span>Mobile Apps</span>
      </div>

      {/* Floating Orange Circular Button (Bottom Right) */}
      <Link
        href="/work"
        className="absolute bottom-4 right-2 sm:right-4 z-30 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#EA580C] hover:bg-[#C2410C] text-white flex items-center justify-center shadow-[0_10px_25px_rgba(234,88,12,0.4)] hover:scale-110 transition-all cursor-pointer group/btn"
      >
        <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-0.5 transition-transform" />
      </Link>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   3D Laptop Mockup: Smart Bakers Mart (Row 3)
   ───────────────────────────────────────────────────────────── */
function BakersLaptopMockup() {
  return (
    <div className="relative w-full max-w-[520px] lg:max-w-[580px] mx-auto select-none group/laptop py-6">
      {/* 3D Confectionery Pastries in Foreground (Matches Reference Image 2) */}
      <div className="absolute -bottom-3 -left-4 z-30 pointer-events-none flex items-center gap-1.5 filter drop-shadow-xl">
        <span className="text-4xl sm:text-5xl transform -rotate-12 hover:scale-110 transition-transform">🍩</span>
        <span className="text-3xl sm:text-4xl transform rotate-6">🧁</span>
      </div>
      <div className="absolute -bottom-4 left-24 z-30 pointer-events-none filter drop-shadow-lg">
        <span className="text-3xl sm:text-4xl transform rotate-12">🥐</span>
      </div>

      {/* 3D Angled Laptop Shell */}
      <div
        className="relative z-10 transition-transform duration-500 group-hover/laptop:scale-[1.02]"
        style={{
          transform: "perspective(1200px) rotateY(-8deg) rotateX(4deg)",
          transformOrigin: "bottom center",
        }}
      >
        {/* Upper Screen Frame */}
        <div className="rounded-t-2xl bg-[#1C1917] p-2.5 sm:p-3 shadow-2xl border border-stone-700/80">
          {/* Screen Camera Notch */}
          <div className="absolute top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-stone-900 border border-stone-700 flex items-center justify-center">
            <div className="w-1 h-1 rounded-full bg-blue-500/80" />
          </div>

          {/* Bakery Website Screen Content */}
          <div className="relative rounded-lg overflow-hidden bg-[#2D0A14] aspect-[16/10] border border-stone-800 text-white flex flex-col justify-between">
            {/* Top Navigation Bar */}
            <div className="px-3 py-2 bg-[#1C060E] border-b border-rose-950 flex items-center justify-between text-[9px] sm:text-[10px]">
              <div className="flex items-center gap-1.5">
                <span className="text-sm">🍰</span>
                <span className="font-extrabold tracking-wider text-rose-300">Smart Bakers Mart</span>
              </div>
              <div className="hidden sm:flex items-center gap-3 text-rose-200/70 font-medium text-[8px]">
                <span className="text-white font-bold">Home</span>
                <span>Cakes</span>
                <span>Pastries</span>
                <span>Tools</span>
              </div>
              <div className="px-2 py-0.5 rounded-sm bg-amber-500 text-stone-900 text-[7px] font-black flex items-center gap-1">
                <span>🛒</span>
                <span>Cart (3)</span>
              </div>
            </div>

            {/* Bakery Hero Banner with Warm Confectionery Aesthetic */}
            <div className="relative flex-1 p-4 sm:p-6 flex flex-col justify-center bg-gradient-to-r from-[#3B0716] via-[#5C1126] to-[#450A19] overflow-hidden">
              {/* Bakery Cake Illustration Accent */}
              <div className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 pointer-events-none">
                <div className="w-20 h-20 sm:w-28 sm:h-28 rounded-full bg-amber-200/10 flex items-center justify-center border border-amber-300/20 shadow-inner">
                  <span className="text-4xl sm:text-5xl filter drop-shadow-md">🎂</span>
                </div>
              </div>

              <div className="relative z-10 max-w-[65%]">
                <span className="text-[7px] sm:text-[8px] font-bold text-amber-300 uppercase tracking-widest block mb-1">
                  Sweet Celebrations
                </span>
                <h4 className="text-xs sm:text-base font-black leading-tight text-white tracking-tight">
                  Fresh Bakes For Sweeter Moments
                </h4>
                <p className="text-[7px] sm:text-[9px] text-rose-200/80 mt-1 line-clamp-2">
                  Order handcrafted artisan cakes, confectionery ingredients, and premium baking tools online.
                </p>
                <div className="mt-2.5 flex items-center gap-2">
                  <span className="px-2.5 py-1 rounded bg-amber-400 text-stone-950 text-[8px] font-extrabold shadow-sm">
                    Shop Now
                  </span>
                  <span className="text-[7px] text-amber-200 font-semibold">
                    2-Hour Delivery
                  </span>
                </div>
              </div>
            </div>

            {/* Bottom Screen Bar */}
            <div className="px-3 py-1 bg-[#1A050D] border-t border-rose-950 flex items-center justify-between text-[7px] text-rose-300/70">
              <span>🍓 Strawberry Gateau ₹650</span>
              <span className="text-emerald-400 font-semibold">In Stock</span>
            </div>
          </div>
        </div>

        {/* Laptop Keyboard Aluminum Base */}
        <div className="relative h-3.5 sm:h-4 bg-gradient-to-b from-[#E2E8F0] via-[#CBD5E1] to-[#94A3B8] rounded-b-xl shadow-xl border-t border-slate-300 flex items-center justify-center">
          <div className="w-16 h-1 bg-slate-400 rounded-b-md" />
        </div>
      </div>

      {/* Floating Badge: E-Commerce & SaaS (Top Left) */}
      <div className="absolute top-2 -left-2 sm:-left-4 z-20 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-full shadow-[0_10px_25px_rgba(225,29,72,0.15)] border border-rose-200 flex items-center gap-2 text-xs font-bold text-rose-700">
        <div className="w-5 h-5 rounded-full bg-rose-100 text-[#E11D48] flex items-center justify-center">
          <ShoppingCart className="w-3 h-3" />
        </div>
        <span>E-Commerce & SaaS</span>
      </div>

      {/* Floating Rose/Magenta Circular Button (Bottom Right) */}
      <Link
        href="/work/smart-bakers-mart"
        className="absolute bottom-2 right-2 sm:right-4 z-20 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#E11D48] hover:bg-[#BE123C] text-white flex items-center justify-center shadow-[0_10px_25px_rgba(225,29,72,0.4)] hover:scale-110 transition-all cursor-pointer group/btn"
      >
        <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-0.5 transition-transform" />
      </Link>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   Main Component: ServicesSelectedWorkSection
   ───────────────────────────────────────────────────────────── */
export function ServicesSelectedWorkSection() {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const filteredProjects = SHOWCASE_PROJECTS.filter((proj) =>
    activeCategory === "all" ? true : proj.filterCategories.includes(activeCategory)
  );

  return (
    <section className="relative py-20 lg:py-28 bg-[#FFFFFF] overflow-hidden">
      {/* ─────────────────────────────────────────────────────────
          Continuous Panoramic River Canvas (Matches Reference Image 2)
          Dynamic smooth organic S-curve ribbons flowing down
          ───────────────────────────────────────────────────────── */}
      <div className="absolute inset-0 pointer-events-none select-none z-0 overflow-hidden">
        {/* River Wave 1: Top-Right to Center-Left (Periwinkle / Soft Lilac) */}
        <svg
          viewBox="0 0 1440 900"
          preserveAspectRatio="none"
          className="absolute top-0 left-0 w-full h-[850px] opacity-80"
        >
          <defs>
            <linearGradient id="periwinkleRiver" x1="0%" y1="0%" x2="100%" y2="80%">
              <stop offset="0%" stopColor="#FFFFFF" />
              <stop offset="40%" stopColor="#F5F3FF" />
              <stop offset="85%" stopColor="#EDE9FE" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#DDD6FE" stopOpacity="0.5" />
            </linearGradient>
            <linearGradient id="refinerySky" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FEF3C7" stopOpacity="0.9" />
              <stop offset="60%" stopColor="#FDE68A" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
            </linearGradient>
          </defs>
          {/* Sweeping organic lilac wave */}
          <path
            d="M 0,220 C 350,180 550,420 900,320 C 1200,240 1350,120 1440,80 L 1440,560 C 1320,620 1100,580 850,540 C 500,480 200,640 0,600 Z"
            fill="url(#periwinkleRiver)"
          />
        </svg>

        {/* Industrial Refinery Skyline on Far Right (Twilight Backdrop - Matches Image 2) */}
        <div className="absolute top-[280px] lg:top-[320px] right-0 w-[380px] lg:w-[480px] h-[360px] opacity-80 pointer-events-none hidden md:block">
          {/* Sunset Atmospheric Sky Glow */}
          <div className="absolute inset-0 bg-gradient-to-l from-amber-100/80 via-orange-50/50 to-transparent rounded-full blur-3xl" />
          <svg viewBox="0 0 400 300" fill="none" className="w-full h-full text-[#B89B7E]">
            {/* Main Industrial Distillation Columns & Chimneys */}
            <rect x="260" y="40" width="22" height="230" fill="currentColor" opacity="0.8" />
            <polygon points="260,40 271,20 282,40" fill="currentColor" opacity="0.85" />
            <rect x="295" y="70" width="18" height="200" fill="currentColor" opacity="0.7" />
            <polygon points="295,70 304,50 313,70" fill="currentColor" opacity="0.75" />
            <rect x="330" y="90" width="26" height="180" fill="currentColor" opacity="0.85" />
            {/* Connecting Pipes & Catwalks */}
            <line x1="240" y1="120" x2="360" y2="120" stroke="currentColor" strokeWidth="3" opacity="0.7" />
            <line x1="250" y1="180" x2="370" y2="180" stroke="currentColor" strokeWidth="2.5" opacity="0.7" />
            <line x1="240" y1="240" x2="380" y2="240" stroke="currentColor" strokeWidth="4" opacity="0.8" />
            {/* Spherical Storage Tanks */}
            <circle cx="210" cy="230" r="30" fill="currentColor" opacity="0.65" />
            <circle cx="150" cy="245" r="22" fill="currentColor" opacity="0.55" />
            {/* Ground Horizon Line */}
            <line x1="100" y1="270" x2="400" y2="270" stroke="currentColor" strokeWidth="6" opacity="0.9" />
          </svg>
        </div>

        {/* River Wave 2: Middle-Right to Center-Left (Warm Sand / Amber Wave) */}
        <svg
          viewBox="0 0 1440 900"
          preserveAspectRatio="none"
          className="absolute top-[850px] left-0 w-full h-[900px] opacity-75"
        >
          <defs>
            <linearGradient id="amberRiver" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#FEF3C7" stopOpacity="0.85" />
              <stop offset="50%" stopColor="#FFEDD5" stopOpacity="0.75" />
              <stop offset="85%" stopColor="#FFF7ED" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path
            d="M 1440,120 C 1200,80 950,260 600,240 C 300,220 100,360 0,420 L 0,780 C 250,740 600,680 950,720 C 1250,760 1380,680 1440,640 Z"
            fill="url(#amberRiver)"
          />
        </svg>

        {/* River Wave 3: Bottom-Left to Bottom-Right (Soft Rose / Confectionery Pink Wave) */}
        <svg
          viewBox="0 0 1440 900"
          preserveAspectRatio="none"
          className="absolute top-[1700px] left-0 w-full h-[900px] opacity-75"
        >
          <defs>
            <linearGradient id="roseRiver" x1="0%" y1="0%" x2="100%" y2="80%">
              <stop offset="0%" stopColor="#FFE4E6" stopOpacity="0.85" />
              <stop offset="50%" stopColor="#FFF1F2" stopOpacity="0.75" />
              <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path
            d="M 0,160 C 350,120 650,300 1050,260 C 1300,230 1400,340 1440,380 L 1440,780 C 1150,740 800,660 450,700 C 200,730 80,660 0,620 Z"
            fill="url(#roseRiver)"
          />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* ── Section Header (Exact Match to Reference Image 2) ── */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <RevealOnScroll>
            {/* Tagline Badge */}
            <div className="flex items-center justify-center gap-2.5 mb-3.5">
              <span className="w-6 h-[2px] rounded-full bg-gradient-to-r from-orange-400 to-[#7C3AED]" />
              <span className="text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-[#502D6D]">
                Our Projects
              </span>
              <span className="w-6 h-[2px] rounded-full bg-gradient-to-r from-[#7C3AED] to-orange-400" />
            </div>

            {/* Title: Matching Image 2 exact wording and gradient */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#151515] tracking-tight leading-tight">
              Real Businesses.{" "}
              <span className="text-[#7C3AED] bg-gradient-to-r from-[#7C3AED] via-[#9333EA] to-[#6B21A8] bg-clip-text text-transparent">
                Real Solutions.
              </span>
            </h2>

            {/* Subtitle */}
            <p className="mt-4 text-sm sm:text-base text-[#544643] leading-relaxed max-w-2xl mx-auto">
              Explore some of the websites, mobile apps and software solutions we&apos;ve built for businesses and organizations.
            </p>
          </RevealOnScroll>
        </div>

        {/* ── Category Filter Pills (Exact Match to Reference Image 2) ── */}
        <div className="flex items-center justify-start sm:justify-center gap-2 sm:gap-2.5 overflow-x-auto pb-4 pt-1 px-1 mb-16 sm:mb-20 scrollbar-none">
          {CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-bold tracking-tight transition-all duration-300 shrink-0 cursor-pointer ${
                  isActive
                    ? "bg-[#6B21A8] text-white shadow-md shadow-purple-900/20 scale-105"
                    : "bg-slate-100 hover:bg-slate-200/80 text-[#544643] hover:text-[#151515]"
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* ── Continuous River Showcases (No enclosed card borders) ── */}
        <div className="space-y-24 sm:space-y-32 lg:space-y-40">
          <AnimatePresence mode="wait">
            {filteredProjects.map((project, idx) => {
              const isEven = idx % 2 === 1;

              return (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.45, delay: idx * 0.08 }}
                  className="relative"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-14 lg:gap-16 items-center">
                    
                    {/* Mockup Column: On mobile, always on top (order-1); on desktop, alternates */}
                    <div
                      className={`order-1 lg:col-span-6 ${
                        isEven ? "lg:order-2" : "lg:order-1"
                      }`}
                    >
                      {isEven ? (
                        <LenientPhonesMockup />
                      ) : project.mockupType === "twilight-laptop" ? (
                        <TwilightLaptopMockup />
                      ) : (
                        <BakersLaptopMockup />
                      )}
                    </div>

                    {/* Content Column: On mobile, always below (order-2); on desktop, alternates */}
                    <div
                      className={`order-2 lg:col-span-6 ${
                        isEven ? "lg:order-1" : "lg:order-2"
                      }`}
                    >
                      {/* Stylized Huge Numeral + Overline (Exact Match to Image 2) */}
                      <div className="flex items-baseline gap-4 mb-2">
                        <span
                          className={`text-7xl sm:text-8xl lg:text-9xl font-black ${project.numColor} tracking-tighter select-none font-sans leading-none`}
                        >
                          {project.number}
                        </span>
                        <div className="space-y-1">
                          <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-slate-400 font-mono block">
                            {project.number}/{project.total}
                          </span>
                        </div>
                      </div>

                      {/* Project Title */}
                      <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#151515] tracking-tight leading-tight mt-1">
                        {project.name}
                      </h3>

                      {/* Project Description */}
                      <p className="mt-3 sm:mt-4 text-sm sm:text-base text-[#544643] leading-relaxed max-w-xl">
                        {project.description}
                      </p>

                      {/* Feature Tags with Icons (Exact Match to Image 2) */}
                      <div className="mt-6 flex flex-wrap items-center gap-2.5 sm:gap-4">
                        {project.features.map((feat, fIdx) => {
                          const FeatIcon = feat.icon;
                          return (
                            <div
                              key={fIdx}
                              className="px-3.5 py-2 rounded-xl bg-white/95 border border-slate-200/90 shadow-xs flex items-center gap-2 text-xs sm:text-sm font-bold text-slate-800"
                            >
                              <FeatIcon
                                className="w-4 h-4"
                                style={{ color: project.themeColor }}
                              />
                              <span>{feat.label}</span>
                            </div>
                          );
                        })}
                      </div>

                      {/* Explore Case Study Link with Arrow */}
                      <div className="mt-7">
                        <Link
                          href={project.link}
                          className="inline-flex items-center gap-2 text-sm sm:text-base font-extrabold text-[#7C3AED] hover:text-[#502D6D] transition-colors group/link cursor-pointer"
                        >
                          <span>Explore Case Study</span>
                          <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1.5 transition-transform" />
                        </Link>
                      </div>
                    </div>

                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* ── Bottom CTA ── */}
        <div className="mt-20 sm:mt-28 text-center relative z-10">
          <RevealOnScroll delay={0.25}>
            <Link
              href="/work"
              className="inline-flex items-center gap-2.5 px-8 sm:px-10 py-3.5 sm:py-4 rounded-full bg-[#151515] text-white font-extrabold text-sm sm:text-base hover:bg-[#502D6D] shadow-xl shadow-[#151515]/15 hover:shadow-2xl hover:shadow-[#502D6D]/25 transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer group"
            >
              <span>View All Projects</span>
              <ArrowRight className="w-4 h-4 text-[#FCB116] group-hover:translate-x-1 transition-transform" />
            </Link>
          </RevealOnScroll>
        </div>

      </div>
    </section>
  );
}
