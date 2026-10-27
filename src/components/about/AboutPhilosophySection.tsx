"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Search, PenTool, Code2, TrendingUp, ArrowRight, LucideIcon } from "lucide-react";

interface StepItem {
  step: string;
  title: string;
  desc: string;
  icon: LucideIcon;
  iconBg: string;
  iconColor: string;
  glowColor: string;
  blobShape: string;
  imageSrc: string;
  imageAlt: string;
}

const PHILOSOPHY_STEPS_DATA: StepItem[] = [
  {
    step: "01",
    title: "Understand",
    desc: "Your business, users, workflows, and core challenges.",
    icon: Search,
    iconBg: "bg-[#F3E8FF]",
    iconColor: "text-[#7C3AED]",
    glowColor: "from-purple-200/40 via-violet-100/20 to-transparent",
    blobShape: "rounded-[42%_58%_68%_32%/46%_54%_46%_54%]",
    imageSrc: "/images/about/philosophy-understand.jpg",
    imageAlt: "User research, wireframe sketching, sticky notes and requirements planning",
  },
  {
    step: "02",
    title: "Design",
    desc: "Intuitive, clean, and high-impact digital experiences.",
    icon: PenTool,
    iconBg: "bg-[#E0F2FE]",
    iconColor: "text-[#0284C7]",
    glowColor: "from-blue-200/40 via-indigo-100/20 to-transparent",
    blobShape: "rounded-[60%_40%_48%_52%/50%_62%_38%_50%]",
    imageSrc: "/images/about/philosophy-design.jpg",
    imageAlt: "Modern UI/UX interface design wireframes and dashboard components",
  },
  {
    step: "03",
    title: "Build",
    desc: "Clean, robust, and scalable modern software codebases.",
    icon: Code2,
    iconBg: "bg-[#FEF3C7]",
    iconColor: "text-[#D97706]",
    glowColor: "from-amber-200/40 via-orange-100/20 to-transparent",
    blobShape: "rounded-[48%_52%_56%_44%/42%_50%_50%_58%]",
    imageSrc: "/images/about/philosophy-build.jpg",
    imageAlt: "Software development clean code on dark theme IDE with syntax highlighting",
  },
  {
    step: "04",
    title: "Improve",
    desc: "Continuous refinement, scaling, analytics, and evolution.",
    icon: TrendingUp,
    iconBg: "bg-[#DCFCE7]",
    iconColor: "text-[#16A34A]",
    glowColor: "from-emerald-200/40 via-teal-100/20 to-transparent",
    blobShape: "rounded-[40%_60%_46%_54%/56%_42%_58%_44%]",
    imageSrc: "/images/about/philosophy-improve.jpg",
    imageAlt: "Business performance growth analytics dashboard with ascending metrics",
  },
];

export function AboutPhilosophySection() {
  return (
    <section className="pt-24 sm:pt-28 lg:pt-32 pb-20 lg:pb-28 bg-[#FFFFFF] relative overflow-hidden border-0">
      {/* Background Ambient Glows & Dot Patterns */}
      <div
        className="absolute top-0 right-0 w-[600px] h-[600px] pointer-events-none -z-0"
        style={{
          background: "radial-gradient(circle at 75% 25%, rgba(192, 132, 252, 0.14) 0%, rgba(237, 233, 254, 0.05) 55%, transparent 75%)",
        }}
      />
      <div
        className="absolute bottom-10 left-0 w-[500px] h-[500px] pointer-events-none -z-0"
        style={{
          background: "radial-gradient(circle at 25% 75%, rgba(233, 213, 255, 0.12) 0%, transparent 65%)",
        }}
      />

      {/* Decorative Dot Matrix on Left and Right matching reference */}
      <div
        className="absolute top-36 left-4 w-28 h-40 opacity-20 pointer-events-none hidden lg:block"
        style={{
          backgroundImage: "radial-gradient(#7C3AED 1.2px, transparent 1.2px)",
          backgroundSize: "14px 14px",
        }}
      />
      <div
        className="absolute bottom-24 right-6 w-32 h-44 opacity-25 pointer-events-none hidden lg:block"
        style={{
          backgroundImage: "radial-gradient(#7C3AED 1.2px, transparent 1.2px)",
          backgroundSize: "14px 14px",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* ─── Top Row: Philosophy Heading & 3D Idea Orb ─── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-16 lg:mb-20">
          
          {/* Left Column: Heading and Narrative */}
          <div className="lg:col-span-7">
            {/* Tagline Pill */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2.5 mb-3"
            >
              <span className="w-5 sm:w-6 h-[2px] rounded-full bg-[#FCB116]" />
              <span className="font-syne text-xs sm:text-sm font-extrabold uppercase tracking-[0.22em] text-[#502D6D]">
                Our Philosophy
              </span>
              <span className="w-5 sm:w-6 h-[2px] rounded-full bg-[#FCB116]" />
            </motion.div>

            {/* Main Title */}
            <motion.h2
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl sm:text-4xl lg:text-[54px] font-black text-[#151515] tracking-tight leading-[1.12]"
            >
              Technology Should Make{" "}
              <br className="hidden sm:inline" />
              <span className="text-[#6D28D9]">Business </span>
              <span className="text-[#8B5CF6]">Simpler.</span>
            </motion.h2>

            {/* Subtitle Description */}
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-5 text-sm sm:text-base text-[#475569] leading-relaxed max-w-xl font-normal"
            >
              Every business has different challenges. So, we don&apos;t believe in one-size-fits-all solutions.
              We start by understanding your business, your users and the problem you want to solve.
              Then we combine strategy, design and technology to create a solution that fits your needs.
            </motion.p>
          </div>

          {/* Right Column: 3D Developer Character Image with Floating Motion & Glow */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-5 flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-[460px] sm:max-w-[500px] flex items-center justify-center select-none">
              {/* Soft purple radial aura in background */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background: "radial-gradient(circle at 60% 50%, rgba(168, 85, 247, 0.16) 0%, rgba(147, 51, 234, 0.06) 45%, transparent 70%)",
                }}
              />

              {/* Decorative background dot pattern */}
              <div
                className="absolute top-2 left-4 w-28 h-24 opacity-25 pointer-events-none"
                style={{
                  backgroundImage: "radial-gradient(#7C3AED 1.2px, transparent 1.2px)",
                  backgroundSize: "12px 12px",
                }}
              />

              {/* Floating Developer Character */}
              <motion.div
                animate={{
                  y: [-6, 6, -6],
                  rotate: [0, 0.6, -0.6, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="relative z-10 w-full"
              >
                <Image
                  src="/images/about/philosophy-developer.png"
                  alt="PEP Software Developer Engineering Modern Digital Solutions"
                  width={1024}
                  height={682}
                  priority
                  className="w-full h-auto object-contain drop-shadow-[0_20px_40px_rgba(80,45,109,0.22)]"
                  sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 500px"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* ─── Middle Section: 4-Step Connected Journey ─── */}
        <div className="relative pt-6 pb-4">
          
          {/* Continuous Connected Purple Road Curve (Visible on LG screens) */}
          <div className="hidden lg:block absolute top-0 left-0 w-full h-[180px] pointer-events-none -z-0">
            <svg
              viewBox="0 0 1200 180"
              className="w-full h-full overflow-visible"
              fill="none"
              preserveAspectRatio="none"
            >
              <defs>
                <linearGradient id="curveRoadGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#C084FC" stopOpacity="0.3" />
                  <stop offset="25%" stopColor="#8B5CF6" stopOpacity="0.85" />
                  <stop offset="60%" stopColor="#7C3AED" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#A855F7" stopOpacity="0.4" />
                </linearGradient>
                <filter id="nodeGlow" x="-50%" y="-50%" width="200%" height="200%">
                  <feDropShadow dx="0" dy="0" stdDeviation="4" floodColor="#8B5CF6" floodOpacity="0.75" />
                </filter>
              </defs>

              {/* Main Winding Road Path connecting 01 -> 02 -> 03 -> 04 */}
              <path
                d="M 50 65 C 130 65, 170 125, 230 125 C 290 125, 310 40, 380 40 C 440 40, 480 120, 560 120 C 640 120, 680 45, 760 45 C 840 45, 870 125, 950 125 C 1020 125, 1070 55, 1150 55"
                stroke="url(#curveRoadGrad)"
                strokeWidth="2.4"
                strokeLinecap="round"
                fill="none"
              />

              {/* Dotted Guide trails looping to steps */}
              {/* Node 1 Dotted guide down */}
              <path
                d="M 145 78 C 120 115, 115 145, 120 170"
                stroke="#C4B5FD"
                strokeWidth="1.2"
                strokeDasharray="3 3"
                fill="none"
              />

              {/* Intermediate dotted connector between 02 & 03 */}
              <path
                d="M 560 120 C 585 145, 615 160, 630 175"
                stroke="#C4B5FD"
                strokeWidth="1.2"
                strokeDasharray="3 3"
                fill="none"
              />

              {/* Dotted guide at 04 */}
              <path
                d="M 950 125 C 970 148, 990 162, 1010 172"
                stroke="#C4B5FD"
                strokeWidth="1.2"
                strokeDasharray="3 3"
                fill="none"
              />

              {/* Glowing Junction Nodes along the Path */}
              {/* Node at Step 01 */}
              <circle cx="145" cy="78" r="4.5" fill="#7C3AED" filter="url(#nodeGlow)" />
              <circle cx="145" cy="78" r="2" fill="#FFFFFF" />

              {/* Node between Step 01 and Step 02 */}
              <circle cx="310" cy="55" r="5" fill="#8B5CF6" filter="url(#nodeGlow)" />
              <circle cx="310" cy="55" r="2.2" fill="#FFFFFF" />

              {/* Node between Step 02 and Step 03 */}
              <circle cx="560" cy="120" r="4.5" fill="#7C3AED" filter="url(#nodeGlow)" />
              <circle cx="560" cy="120" r="2" fill="#FFFFFF" />

              {/* Node between Step 03 and Step 04 */}
              <circle cx="830" cy="50" r="5" fill="#8B5CF6" filter="url(#nodeGlow)" />
              <circle cx="830" cy="50" r="2.2" fill="#FFFFFF" />

              {/* Node at Step 04 */}
              <circle cx="950" cy="125" r="4.5" fill="#7C3AED" filter="url(#nodeGlow)" />
              <circle cx="950" cy="125" r="2" fill="#FFFFFF" />
            </svg>
          </div>

          {/* 4 Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 relative z-10">
            {PHILOSOPHY_STEPS_DATA.map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.12 }}
                  className="group flex flex-col justify-between"
                >
                  {/* Top Content Area */}
                  <div className="relative mb-6">
                    {/* Step Icon Badge */}
                    <div className="relative z-10 mb-4 inline-block">
                      <div
                        className={`w-12 h-12 rounded-full ${item.iconBg} flex items-center justify-center shadow-xs group-hover:scale-110 group-hover:shadow-md transition-all duration-300`}
                      >
                        <Icon className={`w-5 h-5 ${item.iconColor}`} />
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="relative z-10 text-xl font-bold text-[#111827] tracking-tight group-hover:text-[#502D6D] transition-colors">
                      {item.title}
                    </h3>

                    {/* Description */}
                    <p className="relative z-10 text-xs sm:text-sm text-[#475569] leading-relaxed mt-2 min-h-[40px]">
                      {item.desc}
                    </p>

                    {/* Circular Action Button */}
                    <div className="relative z-10 mt-3 inline-block">
                      <div className="w-7 h-7 rounded-full bg-white shadow-xs flex items-center justify-center text-purple-600 group-hover:bg-[#502D6D] group-hover:text-white transition-all duration-300">
                        <ArrowRight className="w-3.5 h-3.5" />
                      </div>
                    </div>
                  </div>

                  {/* Bottom Organic Blob Photo Cutout */}
                  <div className="relative w-full pt-1 flex items-center justify-center">
                    {/* Soft Pastel Background Glow behind blob */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-tr ${item.glowColor} rounded-full blur-xl transform scale-90 group-hover:scale-110 transition-transform duration-500 pointer-events-none`}
                    />

                    {/* Blob Photo Frame */}
                    <div
                      className={`relative w-full max-w-[275px] h-[145px] sm:h-[155px] overflow-hidden ${item.blobShape} shadow-[0_12px_30px_rgba(80,45,109,0.08)] group-hover:shadow-[0_16px_36px_rgba(80,45,109,0.14)] group-hover:-translate-y-1 transition-all duration-500 bg-slate-100`}
                    >
                      <Image
                        src={item.imageSrc}
                        alt={item.imageAlt}
                        fill
                        className="object-cover object-center group-hover:scale-110 transition-transform duration-700 ease-out"
                        sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 25vw"
                      />
                      {/* Subtle specular sheen */}
                      <div className="absolute inset-0 bg-gradient-to-tr from-black/5 via-transparent to-white/20 pointer-events-none" />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>


      </div>
    </section>
  );
}
