"use client";

import React, { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  ArrowUpRight,
  Sliders,
  Package,
  Users,
  RefreshCw,
  ExternalLink,
} from "lucide-react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { RevealOnScroll } from "@/components/shared/RevealOnScroll";

export function TestimonialProjectsSection() {
  const sectionRef = useRef<HTMLElement>(null);

  // Track scroll position within this section
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 65%", "end 85%"],
  });

  // Silky smooth spring physics for the line drawing
  const pathLength = useSpring(scrollYProgress, {
    stiffness: 280,
    damping: 40,
    restDelta: 0.001,
  });

  // Milestone node dots appear progressively as the curve reaches them
  const node1Opacity = useTransform(scrollYProgress, [0, 0.05], [0.3, 1]);
  const node2Opacity = useTransform(scrollYProgress, [0.18, 0.28], [0, 1]);
  const node3Opacity = useTransform(scrollYProgress, [0.42, 0.52], [0, 1]);
  const node4Opacity = useTransform(scrollYProgress, [0.60, 0.70], [0, 1]);
  const node5Opacity = useTransform(scrollYProgress, [0.78, 0.88], [0, 1]);
  const node6Opacity = useTransform(scrollYProgress, [0.88, 0.98], [0, 1]);

  return (
    <section
      ref={sectionRef}
      className="py-24 lg:py-36 bg-[#FFFFFF] relative overflow-hidden select-none border-b border-[#C6C2C1]/30"
    >
      {/* ── Ambient Radial Gradient Glows (Exact Match to Image 2) ── */}
      <div className="absolute -top-32 -left-32 w-[750px] h-[750px] bg-gradient-to-br from-[#7C3AED]/[0.08] via-[#502D6D]/[0.04] to-transparent rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/4 -right-32 w-[700px] h-[700px] bg-gradient-to-bl from-[#7C3AED]/[0.07] via-purple-300/[0.04] to-transparent rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 -left-20 w-[650px] h-[650px] bg-gradient-to-tr from-[#502D6D]/[0.06] via-[#FCB116]/[0.03] to-transparent rounded-full blur-[130px] pointer-events-none" />

      {/* ── Winding Purple Road / Continuous Journey Path (Scroll-Driven Appearance) ── */}
      <div className="hidden lg:block absolute inset-0 pointer-events-none z-0">
        <svg
          viewBox="0 0 1440 2150"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
          preserveAspectRatio="none"
        >
          {/* Subtle Guide Track */}
          <path
            d="M 1320 290 
               C 1180 290, 960 295, 760 300 
               C 480 305, 230 335, 140 440 
               C 60 550, 160 670, 420 680 
               C 680 690, 960 630, 1220 730 
               C 1380 790, 1420 950, 1340 1060 
               C 1260 1170, 940 1200, 680 1260 
               C 380 1330, 60 1440, 40 1620 
               C 20 1800, 240 1900, 600 1920 
               C 960 1940, 1240 1950, 1440 2060"
            stroke="#8B5CF6"
            strokeWidth="2"
            strokeOpacity="0.14"
            strokeDasharray="6 6"
            fill="none"
          />

          {/* Active Glowing Scroll-Animated Path */}
          <motion.path
            d="M 1320 290 
               C 1180 290, 960 295, 760 300 
               C 480 305, 230 335, 140 440 
               C 60 550, 160 670, 420 680 
               C 680 690, 960 630, 1220 730 
               C 1380 790, 1420 950, 1340 1060 
               C 1260 1170, 940 1200, 680 1260 
               C 380 1330, 60 1440, 40 1620 
               C 20 1800, 240 1900, 600 1920 
               C 960 1940, 1240 1950, 1440 2060"
            stroke="#8B5CF6"
            strokeWidth="2.5"
            strokeOpacity="0.9"
            strokeLinecap="round"
            fill="none"
            style={{ pathLength }}
          />

          {/* Decorative Milestone Node Circles - React to Scroll Progress */}
          {/* Start node at top right */}
          <motion.g style={{ opacity: node1Opacity }}>
            <circle cx="1320" cy="290" r="5" fill="#7C3AED" />
            <circle cx="1320" cy="290" r="11" stroke="#8B5CF6" strokeOpacity="0.35" strokeWidth="1.5" />
          </motion.g>

          {/* Node between 01 and 02 */}
          <motion.g style={{ opacity: node2Opacity }}>
            <circle cx="740" cy="685" r="5.5" fill="#F59E0B" stroke="#FFFFFF" strokeWidth="2" />
            <circle cx="740" cy="685" r="12" stroke="#F59E0B" strokeOpacity="0.3" strokeWidth="1.5" />
          </motion.g>

          {/* Node near 02 right */}
          <motion.g style={{ opacity: node3Opacity }}>
            <circle cx="1360" cy="980" r="5" fill="#7C3AED" stroke="#FFFFFF" strokeWidth="2" />
            <circle cx="1360" cy="980" r="11" stroke="#8B5CF6" strokeOpacity="0.35" strokeWidth="1.5" />
          </motion.g>

          {/* Node between 02 and 03 */}
          <motion.g style={{ opacity: node4Opacity }}>
            <circle cx="680" cy="1260" r="5.5" fill="#F59E0B" stroke="#FFFFFF" strokeWidth="2" />
            <circle cx="680" cy="1260" r="12" stroke="#F59E0B" strokeOpacity="0.3" strokeWidth="1.5" />
          </motion.g>

          {/* Node under 03 and 04 */}
          <motion.g style={{ opacity: node5Opacity }}>
            <circle cx="50" cy="1720" r="5.5" fill="#F59E0B" stroke="#FFFFFF" strokeWidth="2" />
            <circle cx="50" cy="1720" r="12" stroke="#F59E0B" strokeOpacity="0.3" strokeWidth="1.5" />
          </motion.g>

          <motion.g style={{ opacity: node6Opacity }}>
            <circle cx="980" cy="1935" r="5" fill="#7C3AED" stroke="#FFFFFF" strokeWidth="2" />
            <circle cx="980" cy="1935" r="11" stroke="#8B5CF6" strokeOpacity="0.35" strokeWidth="1.5" />
          </motion.g>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* ── Section Header (Exact Match to Reference Image 2) ── */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-20 lg:mb-28">
          <div>
            {/* Tagline / Pill */}
            <div className="flex items-center gap-2 mb-4">
              <span className="w-2.5 h-2.5 rounded-full bg-[#502D6D]" />
              <span className="text-xs sm:text-sm font-black uppercase tracking-[0.2em] text-[#502D6D]">
                OUR PROJECTS
              </span>
              <span className="w-8 sm:w-12 h-[2px] bg-[#502D6D]/40" />
            </div>

            {/* Main Title */}
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#151515] tracking-tight font-serif leading-[1.1]">
              Selected <span className="text-[#502D6D]">Work</span>
            </h2>

            {/* Subhead */}
            <p className="mt-3 sm:mt-4 text-base sm:text-lg text-[#544643] font-medium max-w-xl">
              Digital experiences built to move businesses forward.
            </p>
          </div>

          {/* Right-Side Descriptive Copy & Arrow Button */}
          <div className="lg:max-w-md flex items-center justify-between sm:justify-start lg:justify-end gap-5">
            <p className="text-sm sm:text-base text-[#544643] leading-relaxed">
              From web platforms to mobile applications, we partner with businesses to design and develop scalable digital solutions that create real impact.
            </p>

            <Link
              href="/work"
              aria-label="Explore all projects"
              className="w-12 h-12 shrink-0 rounded-full bg-purple-50 hover:bg-[#502D6D] text-[#502D6D] hover:text-white border border-purple-200/80 flex items-center justify-center transition-all duration-300 shadow-sm hover:scale-105 group"
            >
              <ArrowRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>
        </div>

        {/* ── 01. Lenient Technologies (Mobile Application) ── */}
        <div className="relative mb-28 lg:mb-36">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Mockups: Laptop + Standing Smartphone */}
            <div className="lg:col-span-7 relative">
              {/* Handwritten Note + Arrow */}
              <div className="absolute -top-12 -left-2 sm:-left-4 z-30 flex items-center gap-1.5 pointer-events-none">
                <span className="font-handwriting text-2xl sm:text-3xl text-slate-700 font-bold -rotate-6">
                  Mobile Application
                </span>
                <svg
                  width="44"
                  height="36"
                  viewBox="0 0 44 36"
                  fill="none"
                  className="text-slate-600 rotate-12 mt-2"
                >
                  <path
                    d="M 6 4 C 8 18, 18 24, 30 26"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    fill="none"
                  />
                  <path
                    d="M 22 21 L 31 26 L 24 32"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                  />
                </svg>
              </div>

              {/* Laptop Shell Container */}
              <div className="relative w-full max-w-[640px] ml-auto">
                <div className="rounded-t-2xl sm:rounded-t-3xl border-[6px] sm:border-[8px] border-[#1E293B] bg-[#0F172A] p-1.5 sm:p-2 shadow-2xl relative">
                  {/* Top Web Camera */}
                  <div className="w-2 h-2 rounded-full bg-slate-900 border border-slate-700 mx-auto mb-1 flex items-center justify-center">
                    <div className="w-0.5 h-0.5 rounded-full bg-blue-500/70" />
                  </div>

                  {/* Laptop Screen: Lenient Service Management Dashboard */}
                  <div className="rounded-lg sm:rounded-xl overflow-hidden bg-white aspect-[16/10] border border-slate-200/90 text-slate-900 flex flex-col justify-between p-3 sm:p-5 relative shadow-inner">
                    {/* Top Dashboard Nav */}
                    <div className="flex items-center justify-between pb-2.5 sm:pb-3 border-b border-slate-100 pl-16 sm:pl-20">
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded-lg bg-[#502D6D] text-white flex items-center justify-center font-black text-xs">
                          L
                        </div>
                        <span className="font-extrabold text-xs sm:text-sm text-slate-800 tracking-tight">
                          Lenient
                        </span>
                      </div>

                      <div className="flex items-center gap-2 sm:gap-3">
                        <div className="hidden sm:flex items-center gap-2 px-2.5 py-1 rounded-md bg-slate-100 text-[10px] text-slate-400 w-36">
                          <span>Search...</span>
                        </div>
                        <div className="w-5 h-5 rounded-full bg-slate-100 flex items-center justify-center text-[9px] text-slate-600 font-bold">
                          🔔
                        </div>
                        <div className="w-5 h-5 rounded-full bg-[#502D6D]/15 border border-[#502D6D]/30 flex items-center justify-center text-[9px] text-[#502D6D] font-bold">
                          JD
                        </div>
                      </div>
                    </div>

                    {/* Section Header */}
                    <div className="flex items-center justify-between my-2 pl-16 sm:pl-20">
                      <div>
                        <h4 className="text-xs sm:text-base font-black text-slate-900 tracking-tight">
                          Service Management
                        </h4>
                        <p className="text-[8px] sm:text-[10px] text-slate-400">
                          Real-time operations dispatch & tracking
                        </p>
                      </div>
                      <div className="px-2.5 py-1 rounded-md bg-[#502D6D] text-white text-[8px] sm:text-[10px] font-bold shadow-xs">
                        + New Request
                      </div>
                    </div>

                    {/* 4 Stat Metric Cards */}
                    <div className="grid grid-cols-4 gap-1.5 sm:gap-2.5 my-1 pl-16 sm:pl-20">
                      <div className="p-2 sm:p-2.5 rounded-lg bg-sky-50/80 border border-sky-100">
                        <span className="text-[7px] sm:text-[9px] font-semibold text-sky-700 block truncate">
                          Open Requests
                        </span>
                        <span className="text-xs sm:text-lg font-black text-sky-950">
                          124<span className="text-[8px] font-normal text-sky-500 ml-0.5">↑</span>
                        </span>
                      </div>
                      <div className="p-2 sm:p-2.5 rounded-lg bg-indigo-50/80 border border-indigo-100">
                        <span className="text-[7px] sm:text-[9px] font-semibold text-indigo-700 block truncate">
                          In Progress
                        </span>
                        <span className="text-xs sm:text-lg font-black text-indigo-950">
                          98<span className="text-[8px] font-normal text-indigo-500 ml-0.5">↑</span>
                        </span>
                      </div>
                      <div className="p-2 sm:p-2.5 rounded-lg bg-emerald-50/80 border border-emerald-100">
                        <span className="text-[7px] sm:text-[9px] font-semibold text-emerald-700 block truncate">
                          Completed
                        </span>
                        <span className="text-xs sm:text-lg font-black text-emerald-950">
                          36
                        </span>
                      </div>
                      <div className="p-2 sm:p-2.5 rounded-lg bg-rose-50/80 border border-rose-100">
                        <span className="text-[7px] sm:text-[9px] font-semibold text-rose-700 block truncate">
                          Overdue
                        </span>
                        <span className="text-xs sm:text-lg font-black text-rose-950">
                          8
                        </span>
                      </div>
                    </div>

                    {/* Compact Table */}
                    <div className="bg-slate-50/80 rounded-lg p-2 border border-slate-100 text-[8px] sm:text-[10px] pl-16 sm:pl-20">
                      <div className="text-[8px] sm:text-[9px] font-bold text-slate-500 mb-1 flex justify-between">
                        <span>Recent Service Requests</span>
                        <span className="text-[#502D6D] cursor-pointer">View All →</span>
                      </div>
                      <div className="space-y-1">
                        <div className="flex items-center justify-between bg-white px-2 py-1 rounded border border-slate-100">
                          <span className="font-mono text-slate-700 font-bold text-[7px] sm:text-[9px]">#REQ-8021</span>
                          <span className="text-slate-600 truncate max-w-[80px] sm:max-w-[130px]">HVAC Unit Overhaul</span>
                          <span className="px-1.5 py-0.5 rounded-full bg-sky-100 text-sky-800 font-bold text-[6px] sm:text-[8px]">In Progress</span>
                        </div>
                        <div className="flex items-center justify-between bg-white px-2 py-1 rounded border border-slate-100">
                          <span className="font-mono text-slate-700 font-bold text-[7px] sm:text-[9px]">#REQ-8020</span>
                          <span className="text-slate-600 truncate max-w-[80px] sm:max-w-[130px]">Conveyor Calibration</span>
                          <span className="px-1.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 font-bold text-[6px] sm:text-[8px]">Completed</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Laptop Keyboard Aluminum Base */}
                <div className="relative h-3 sm:h-4 bg-gradient-to-b from-[#E2E8F0] via-[#CBD5E1] to-[#94A3B8] rounded-b-xl shadow-xl border-t border-slate-300 flex items-center justify-center">
                  <div className="w-16 sm:w-20 h-1 bg-slate-400 rounded-b-md" />
                </div>
              </div>

              {/* Overlapping Smartphone in Foreground (Shifted left to not cover dashboard title) */}
              <div className="absolute -bottom-6 -left-4 sm:-left-8 lg:-left-10 z-20 w-[140px] sm:w-[175px] lg:w-[190px] rounded-[28px] sm:rounded-[36px] bg-[#0F172A] p-2 sm:p-2.5 shadow-[0_25px_50px_rgba(0,0,0,0.35)] border-2 sm:border-[3px] border-slate-700/80 transition-transform hover:scale-105 duration-300">
                {/* Dynamic Island */}
                <div className="absolute top-3 left-1/2 -translate-x-1/2 w-10 sm:w-14 h-3 bg-black rounded-full z-30 flex items-center justify-end pr-1.5">
                  <div className="w-1 h-1 rounded-full bg-blue-500/80" />
                </div>

                {/* Phone Screen: Mobile App */}
                <div className="rounded-[20px] sm:rounded-[28px] overflow-hidden bg-white aspect-[9/18.5] p-2.5 pt-6 flex flex-col justify-between text-slate-900 border border-slate-200">
                  {/* Brand & Greeting Banner */}
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-black text-[11px] sm:text-xs text-slate-900 tracking-tight">
                        Lenient
                      </span>
                      <div className="w-3.5 h-3.5 rounded-full bg-slate-200" />
                    </div>

                    <div className="p-2 sm:p-2.5 rounded-xl bg-gradient-to-br from-[#502D6D] to-[#7C3AED] text-white shadow-xs">
                      <span className="text-[7px] text-purple-200 block">Good Morning</span>
                      <h6 className="text-[9px] sm:text-[11px] font-black leading-tight">
                        Welcome Back!
                      </h6>
                    </div>
                  </div>

                  {/* 4 Quick Service Tiles */}
                  <div className="grid grid-cols-2 gap-1.5 my-auto">
                    <div className="p-2 rounded-lg bg-purple-50/80 border border-purple-100 flex flex-col items-center text-center">
                      <div className="w-4 h-4 rounded bg-[#502D6D]/15 text-[#502D6D] flex items-center justify-center text-[8px] font-bold mb-1">
                        📋
                      </div>
                      <span className="text-[7px] sm:text-[8px] font-bold text-slate-800 leading-tight">
                        Service Request
                      </span>
                    </div>

                    <div className="p-2 rounded-lg bg-amber-50/80 border border-amber-100 flex flex-col items-center text-center">
                      <div className="w-4 h-4 rounded bg-amber-500/15 text-amber-600 flex items-center justify-center text-[8px] font-bold mb-1">
                        📅
                      </div>
                      <span className="text-[7px] sm:text-[8px] font-bold text-slate-800 leading-tight">
                        Field Schedule
                      </span>
                    </div>

                    <div className="p-2 rounded-lg bg-sky-50/80 border border-sky-100 flex flex-col items-center text-center">
                      <div className="w-4 h-4 rounded bg-sky-500/15 text-sky-600 flex items-center justify-center text-[8px] font-bold mb-1">
                        📦
                      </div>
                      <span className="text-[7px] sm:text-[8px] font-bold text-slate-800 leading-tight">
                        Assets
                      </span>
                    </div>

                    <div className="p-2 rounded-lg bg-emerald-50/80 border border-emerald-100 flex flex-col items-center text-center">
                      <div className="w-4 h-4 rounded bg-emerald-500/15 text-emerald-600 flex items-center justify-center text-[8px] font-bold mb-1">
                        🔔
                      </div>
                      <span className="text-[7px] sm:text-[8px] font-bold text-slate-800 leading-tight">
                        Alerts
                      </span>
                    </div>
                  </div>

                  {/* Bottom Navigation */}
                  <div className="pt-2 border-t border-slate-100 flex items-center justify-around text-[9px] text-slate-400">
                    <span className="text-[#502D6D] font-bold">●</span>
                    <span>⌂</span>
                    <span>⚙</span>
                  </div>

                  {/* Home Bar */}
                  <div className="w-10 h-0.5 bg-slate-300 rounded-full mx-auto" />
                </div>
              </div>
            </div>

            {/* Right Content */}
            <div className="lg:col-span-5 relative lg:pl-4">
              {/* Milestone Watermark 01 */}
              <div className="relative mb-3">
                <span className="text-6xl sm:text-7xl lg:text-8xl font-serif font-black text-purple-200/50 leading-none select-none">
                  01
                </span>
              </div>

              {/* Tag / Category */}
              <span className="text-xs font-black uppercase tracking-[0.2em] text-[#7C3AED] mb-2 block">
                MOBILE APPLICATION
              </span>

              {/* Title */}
              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#151515] font-serif tracking-tight leading-tight">
                Lenient Technologies
              </h3>

              {/* Subheading */}
              <p className="text-lg sm:text-xl font-bold text-[#502D6D] mt-1">
                Service Management App
              </p>

              {/* Description */}
              <p className="mt-4 text-sm sm:text-base text-[#544643] leading-relaxed">
                Custom enterprise mobile app engineered for internal service calls management, inventory tracking, and field technician workflow synchronization.
              </p>

              {/* 4 Feature Pills with Icons */}
              <div className="mt-6 flex flex-wrap items-center gap-2.5 sm:gap-3">
                <div className="px-3.5 py-1.5 rounded-full border border-slate-200/90 bg-white/95 text-xs font-semibold text-slate-700 shadow-xs flex items-center gap-2">
                  <Sliders className="w-3.5 h-3.5 text-[#502D6D]" />
                  <span>Service Management</span>
                </div>

                <div className="px-3.5 py-1.5 rounded-full border border-slate-200/90 bg-white/95 text-xs font-semibold text-slate-700 shadow-xs flex items-center gap-2">
                  <Package className="w-3.5 h-3.5 text-[#502D6D]" />
                  <span>Inventory Tracking</span>
                </div>

                <div className="px-3.5 py-1.5 rounded-full border border-slate-200/90 bg-white/95 text-xs font-semibold text-slate-700 shadow-xs flex items-center gap-2">
                  <Users className="w-3.5 h-3.5 text-[#502D6D]" />
                  <span>Field Operations</span>
                </div>

                <div className="px-3.5 py-1.5 rounded-full border border-slate-200/90 bg-white/95 text-xs font-semibold text-slate-700 shadow-xs flex items-center gap-2">
                  <RefreshCw className="w-3.5 h-3.5 text-[#502D6D]" />
                  <span>Real-time Sync</span>
                </div>
              </div>

              {/* Action Link */}
              <div className="mt-7">
                <Link
                  href="/work/lenient-technologies-app"
                  className="inline-flex items-center gap-1.5 text-base font-black text-[#502D6D] hover:text-[#7C3AED] transition-colors group/link cursor-pointer"
                >
                  <span>Explore project</span>
                  <ArrowUpRight className="w-4 h-4 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* ── 02. Pravin Bottelings (Industrial Website) ── */}
        <div className="relative mb-28 lg:mb-36">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Content */}
            <div className="lg:col-span-5 relative lg:pr-4 order-2 lg:order-1">
              {/* Milestone Watermark 02 */}
              <div className="relative mb-3">
                <span className="text-6xl sm:text-7xl lg:text-8xl font-serif font-black text-purple-200/50 leading-none select-none">
                  02
                </span>
              </div>

              {/* Tag / Category */}
              <span className="text-xs font-black uppercase tracking-[0.2em] text-[#7C3AED] mb-2 block">
                WEBSITE DEVELOPMENT
              </span>

              {/* Title */}
              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#151515] font-serif tracking-tight leading-tight">
                Pravin Bottelings
              </h3>

              {/* Subheading */}
              <p className="text-lg sm:text-xl font-bold text-[#502D6D] mt-1">
                Industrial Website
              </p>

              {/* Description */}
              <p className="mt-4 text-sm sm:text-base text-[#544643] leading-relaxed">
                Modern, responsive industrial manufacturing website showcasing high-capacity bottle blow-moulding capabilities and digital inquiries.
              </p>

              {/* Action Link */}
              <div className="mt-7 flex items-center gap-4">
                <Link
                  href="/work/pravin-bottelings"
                  className="inline-flex items-center gap-1.5 text-base font-black text-[#502D6D] hover:text-[#7C3AED] transition-colors group/link cursor-pointer"
                >
                  <span>Explore project</span>
                  <ArrowUpRight className="w-4 h-4 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                </Link>

                <a
                  href="https://pravinbottelings.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-semibold text-slate-500 hover:text-[#502D6D] transition-colors"
                >
                  <span>Live Site</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

            {/* Right Mockup: Laptop + Circular Bottle Badge */}
            <div className="lg:col-span-7 relative order-1 lg:order-2">
              {/* Handwritten Note + Arrow */}
              <div className="absolute -top-10 right-2 sm:right-6 z-30 flex items-center gap-1.5 pointer-events-none">
                <span className="font-handwriting text-2xl sm:text-3xl text-slate-700 font-bold rotate-3">
                  Industrial Website
                </span>
                <svg
                  width="44"
                  height="36"
                  viewBox="0 0 44 36"
                  fill="none"
                  className="text-slate-600 -rotate-12 mt-3"
                >
                  <path
                    d="M 38 4 C 36 18, 26 24, 14 26"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    fill="none"
                  />
                  <path
                    d="M 22 21 L 13 26 L 20 32"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                  />
                </svg>
              </div>

              {/* Laptop Shell Container */}
              <div className="relative w-full max-w-[640px] mx-auto">
                <div className="rounded-t-2xl sm:rounded-t-3xl border-[6px] sm:border-[8px] border-[#1E293B] bg-[#0F172A] p-1.5 sm:p-2 shadow-2xl relative">
                  {/* Top Web Camera */}
                  <div className="w-2 h-2 rounded-full bg-slate-900 border border-slate-700 mx-auto mb-1 flex items-center justify-center">
                    <div className="w-0.5 h-0.5 rounded-full bg-blue-500/70" />
                  </div>

                  {/* Screen Canvas: Pravin Bottelings Website */}
                  <div className="relative rounded-lg sm:rounded-xl overflow-hidden aspect-[16/10] bg-[#0A101D] border border-slate-200/80">
                    <Image
                      src="/images/portfolio/Pravin-Bottelings.png"
                      alt="Pravin Bottelings Website Showcase"
                      fill
                      className="object-cover object-top hover:scale-105 transition-transform duration-700"
                      sizes="(max-width: 1024px) 100vw, 650px"
                    />
                  </div>
                </div>

                {/* Laptop Keyboard Aluminum Base */}
                <div className="relative h-3 sm:h-4 bg-gradient-to-b from-[#E2E8F0] via-[#CBD5E1] to-[#94A3B8] rounded-b-xl shadow-xl border-t border-slate-300 flex items-center justify-center">
                  <div className="w-16 sm:w-20 h-1 bg-slate-400 rounded-b-md" />
                </div>

                {/* Overlapping Circular Cutout: Zoomed in on Product Bottles */}
                <div className="absolute -bottom-6 -right-3 sm:-right-5 z-20 w-24 h-24 sm:w-28 sm:h-28 rounded-full border-4 border-white shadow-2xl overflow-hidden bg-white">
                  <div className="relative w-full h-full scale-[2.2] translate-y-1">
                    <Image
                      src="/images/portfolio/Pravin-Bottelings.png"
                      alt="Pravin Bottelings Products"
                      fill
                      className="object-cover object-[center_68%]"
                      sizes="120px"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── 03 & 04 Bottom Side-by-Side Grid Row (Exact Match to Image 2) ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-14 items-start">
          {/* ── Milestone 03: Hakir Pharmaceuticals (Horizontal Text + Laptop) ── */}
          <div className="flex flex-col sm:flex-row items-center gap-6 lg:gap-7 relative">
            {/* Left Text Info */}
            <div className="w-full sm:w-[46%] relative">
              {/* Milestone Watermark 03 */}
              <div className="relative mb-2">
                <span className="text-6xl sm:text-7xl font-serif font-black text-purple-200/50 leading-none select-none">
                  03
                </span>
              </div>

              {/* Tag / Category */}
              <span className="text-[11px] sm:text-xs font-black uppercase tracking-[0.2em] text-[#7C3AED] mb-1.5 block">
                CORPORATE WEBSITE
              </span>

              {/* Title */}
              <h3 className="text-2xl sm:text-3xl font-black text-[#151515] font-serif tracking-tight leading-tight">
                Hakir Pharmaceuticals
              </h3>

              {/* Subheading */}
              <p className="text-sm sm:text-base font-bold text-[#502D6D] mt-0.5">
                Corporate Website
              </p>

              {/* Description */}
              <p className="mt-3 text-xs sm:text-sm text-[#544643] leading-relaxed">
                Professional corporate website for a pharmaceutical company, showcasing products, research capabilities and company information.
              </p>

              {/* Action Link */}
              <div className="mt-5 flex items-center gap-3">
                <Link
                  href="/work/hakir-pharmaceuticals"
                  className="inline-flex items-center gap-1.5 text-sm font-black text-[#502D6D] hover:text-[#7C3AED] transition-colors group/link cursor-pointer"
                >
                  <span>Explore project</span>
                  <ArrowUpRight className="w-4 h-4 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                </Link>

                <a
                  href="https://hakirpharmaceuticals.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-[11px] font-semibold text-slate-500 hover:text-[#502D6D] transition-colors"
                >
                  <span>Live Site</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

            {/* Right Laptop Mockup with Circular Pill Cutout */}
            <div className="w-full sm:w-[54%] relative">
              {/* Handwritten Note + Arrow */}
              <div className="absolute -top-9 right-2 sm:right-4 z-30 flex items-center gap-1.5 pointer-events-none">
                <span className="font-handwriting text-xl sm:text-2xl text-slate-700 font-bold rotate-2">
                  Healthcare Industry
                </span>
                <svg
                  width="36"
                  height="30"
                  viewBox="0 0 36 30"
                  fill="none"
                  className="text-slate-600 -rotate-12 mt-2"
                >
                  <path
                    d="M 30 4 C 28 15, 20 20, 10 22"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    fill="none"
                  />
                  <path
                    d="M 17 17 L 9 22 L 15 27"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                  />
                </svg>
              </div>

              {/* Laptop Shell */}
              <div className="rounded-t-xl sm:rounded-t-2xl border-[5px] sm:border-[6px] border-[#1E293B] bg-[#0F172A] p-1 shadow-xl relative">
                <div className="w-1.5 h-1.5 rounded-full bg-slate-900 border border-slate-700 mx-auto mb-1 flex items-center justify-center">
                  <div className="w-0.5 h-0.5 rounded-full bg-blue-500/70" />
                </div>

                <div className="relative rounded-lg overflow-hidden aspect-[16/10] bg-[#0A101D] border border-slate-200/80">
                  <Image
                    src="/images/portfolio/Hakir-1.png"
                    alt="Hakir Pharmaceuticals Website"
                    fill
                    className="object-cover object-top hover:scale-105 transition-transform duration-700"
                    sizes="400px"
                  />
                </div>
              </div>

              {/* Laptop Base */}
              <div className="relative h-2.5 sm:h-3 bg-gradient-to-b from-[#E2E8F0] via-[#CBD5E1] to-[#94A3B8] rounded-b-lg shadow-lg border-t border-slate-300 flex items-center justify-center">
                <div className="w-12 h-1 bg-slate-400 rounded-b-md" />
              </div>

              {/* Circular Medicine / Pill Cutout Badge (Zoomed in on Pills) */}
              <div className="absolute -bottom-4 -left-3 sm:-left-4 z-20 w-16 h-16 sm:w-20 sm:h-20 rounded-full border-[3px] sm:border-4 border-white shadow-xl overflow-hidden bg-white">
                <div className="relative w-full h-full scale-[2.4] translate-y-1">
                  <Image
                    src="/images/portfolio/Hakir-1.png"
                    alt="Hakir Pharmaceuticals Formulations"
                    fill
                    className="object-cover object-[left_72%]"
                    sizes="80px"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* ── Milestone 04: The Elite Mutual Funds (Horizontal Text + Laptop/Phone) ── */}
          <div className="flex flex-col sm:flex-row items-center gap-6 lg:gap-7 relative">
            {/* Left Text Info */}
            <div className="w-full sm:w-[46%] relative">
              {/* Milestone Watermark 04 */}
              <div className="relative mb-2">
                <span className="text-6xl sm:text-7xl font-serif font-black text-purple-200/50 leading-none select-none">
                  04
                </span>
              </div>

              {/* Tag / Category */}
              <span className="text-[11px] sm:text-xs font-black uppercase tracking-[0.2em] text-[#7C3AED] mb-1.5 block">
                ONE-PAGE PLATFORM
              </span>

              {/* Title */}
              <h3 className="text-2xl sm:text-3xl font-black text-[#151515] font-serif tracking-tight leading-tight">
                The Elite Mutual Funds
              </h3>

              {/* Subheading */}
              <p className="text-sm sm:text-base font-bold text-[#502D6D] mt-0.5">
                Financial Services
              </p>

              {/* Description */}
              <p className="mt-3 text-xs sm:text-sm text-[#544643] leading-relaxed">
                Modern one-page platform for mutual fund investments with detailed fund information, performance tracking and easy inquiry flow.
              </p>

              {/* Action Link */}
              <div className="mt-5">
                <Link
                  href="/work/the-elite-mutual-funds"
                  className="inline-flex items-center gap-1.5 text-sm font-black text-[#502D6D] hover:text-[#7C3AED] transition-colors group/link cursor-pointer"
                >
                  <span>Explore project</span>
                  <ArrowUpRight className="w-4 h-4 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                </Link>
              </div>
            </div>

            {/* Right Laptop Mockup + Standing Phone */}
            <div className="w-full sm:w-[54%] relative">
              {/* Handwritten Note + Arrow */}
              <div className="absolute -top-9 right-2 sm:right-4 z-30 flex items-center gap-1.5 pointer-events-none">
                <span className="font-handwriting text-xl sm:text-2xl text-slate-700 font-bold -rotate-3">
                  Financial Platform
                </span>
                <svg
                  width="36"
                  height="30"
                  viewBox="0 0 36 30"
                  fill="none"
                  className="text-slate-600 rotate-12 mt-2"
                >
                  <path
                    d="M 6 4 C 8 15, 15 20, 26 22"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    fill="none"
                  />
                  <path
                    d="M 18 17 L 27 22 L 20 27"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                  />
                </svg>
              </div>

              {/* Laptop Shell */}
              <div className="rounded-t-xl sm:rounded-t-2xl border-[5px] sm:border-[6px] border-[#1E293B] bg-[#0F172A] p-1 shadow-xl relative pr-10 sm:pr-12">
                <div className="w-1.5 h-1.5 rounded-full bg-slate-900 border border-slate-700 mx-auto mb-1 flex items-center justify-center">
                  <div className="w-0.5 h-0.5 rounded-full bg-blue-500/70" />
                </div>

                <div className="relative rounded-lg overflow-hidden aspect-[16/10] bg-[#0A101D] border border-slate-200/80">
                  <Image
                    src="/images/portfolio/Elite.png"
                    alt="The Elite Mutual Funds Platform"
                    fill
                    className="object-cover object-top hover:scale-105 transition-transform duration-700"
                    sizes="350px"
                  />
                </div>
              </div>

              {/* Laptop Base */}
              <div className="relative h-2.5 sm:h-3 bg-gradient-to-b from-[#E2E8F0] via-[#CBD5E1] to-[#94A3B8] rounded-b-lg shadow-lg border-t border-slate-300 flex items-center justify-center mr-10 sm:mr-12">
                <div className="w-12 h-1 bg-slate-400 rounded-b-md" />
              </div>

              {/* Standing Smartphone on Right Foreground (Matching Image 2) */}
              <div className="absolute -bottom-3 -right-2 sm:-right-3 z-20 w-[95px] sm:w-[115px] rounded-[20px] sm:rounded-[24px] bg-[#0F172A] p-1.5 shadow-2xl border-2 border-slate-700/80">
                <div className="w-5 h-1.5 bg-black rounded-full mx-auto mb-1" />
                <div className="rounded-[14px] sm:rounded-[18px] overflow-hidden bg-[#151515] aspect-[9/18] p-1.5 sm:p-2 flex flex-col justify-between text-white border border-slate-700">
                  <div className="mt-1">
                    <span className="text-[6px] text-amber-400 font-bold uppercase tracking-wider block">
                      The Elite
                    </span>
                    <h6 className="text-[7px] sm:text-[8px] font-black leading-tight mt-0.5">
                      Smart Investments Brighter Tomorrows
                    </h6>
                  </div>

                  <div className="space-y-1 my-auto">
                    <div className="h-3.5 rounded bg-slate-800/80 border border-slate-700 px-1 flex items-center text-[5px] text-slate-300">
                      SIP Calculator
                    </div>
                    <div className="h-3.5 rounded bg-[#FCB116] text-[#151515] flex items-center justify-center text-[6px] font-black">
                      Get Started
                    </div>
                  </div>

                  <div className="w-6 h-0.5 bg-slate-500 rounded-full mx-auto" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── Bottom Call To Action ── */}
        <div className="mt-20 lg:mt-28 text-center relative z-10">
          <RevealOnScroll delay={0.15}>
            <Link
              href="/work"
              className="inline-flex items-center gap-2.5 px-8 sm:px-10 py-3.5 sm:py-4 rounded-full bg-[#151515] text-[#F7F8F8] font-bold text-sm sm:text-base hover:bg-[#502D6D] shadow-xl shadow-[#151515]/10 hover:shadow-[#502D6D]/20 transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer group"
            >
              <span>Explore All Case Studies</span>
              <ArrowRight className="w-4 h-4 text-[#FCB116] group-hover:translate-x-1 transition-transform" />
            </Link>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}
