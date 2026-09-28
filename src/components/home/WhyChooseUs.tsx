"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sparkles,
  Cpu,
  Award,
  Users,
  Zap,
  ArrowRight,
  CheckCircle2,
  TrendingUp,
  ShieldCheck,
  Star,
  Check,
} from "lucide-react";
import { RevealOnScroll } from "../shared/RevealOnScroll";

interface FeaturePillar {
  id: string;
  icon: typeof Cpu;
  title: string;
  description: string;
  badge: string;
  highlightStat: string;
  statLabel: string;
  keyBenefits: string[];
}

const pillars: FeaturePillar[] = [
  {
    id: "digital-innovation",
    icon: Cpu,
    title: "Expertise in Digital Innovation",
    description:
      "We blend design thinking with emerging tech to create modern, user-focused solutions.",
    badge: "Cutting-Edge Tech",
    highlightStat: "99.98%",
    statLabel: "System Architecture Uptime",
    keyBenefits: [
      "Modern Next.js & React ecosystems",
      "AI & Spatial 3D / WebGL integration",
      "Ultra-scalable cloud infrastructure",
    ],
  },
  {
    id: "track-record",
    icon: Award,
    title: "Proven Track Record of Success",
    description:
      "From startups to established brands, our projects drive measurable impact.",
    badge: "Verified Results",
    highlightStat: "+180%",
    statLabel: "Average Client Growth Rate",
    keyBenefits: [
      "100+ projects successfully deployed",
      "Over $15M+ client revenue generated",
      "Consistent 5.0-star client satisfaction",
    ],
  },
  {
    id: "experienced-team",
    icon: Users,
    title: "Dedicated and Experienced Team",
    description:
      "Our skilled team brings creativity, strategy, and execution to every project.",
    badge: "Senior Specialists",
    highlightStat: "100%",
    statLabel: "In-House Senior Engineers",
    keyBenefits: [
      "No outsourcing — direct talent access",
      "Cross-functional UI/UX & dev synergy",
      "Proactive consultation & guidance",
    ],
  },
  {
    id: "agile-delivery",
    icon: Zap,
    title: "Agile Delivery & Transparency",
    description:
      "Direct communication, sprint reviews, and end-to-end milestone accountability.",
    badge: "On-Time Guarantee",
    highlightStat: "< 24h",
    statLabel: "Continuous Sprint Velocity",
    keyBenefits: [
      "Transparent milestone roadmaps",
      "Weekly live demos and feedback loops",
      "Rigorous automated QA testing",
    ],
  },
];

export function WhyChooseUs() {
  const [activeIdx, setActiveIdx] = useState<number>(1); // Default to "Proven Track Record of Success" as in screenshot
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const userInteractedRef = useRef<number>(0);
  const cardRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0, isHovered: false });

  // Auto-cycle through pillars every 5 seconds if user hasn't manually interacted recently
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      if (Date.now() - userInteractedRef.current > 6000) {
        setActiveIdx((prev) => (prev + 1) % pillars.length);
      }
    }, 4500);

    return () => clearInterval(interval);
  }, [isPaused]);

  const handleSelect = (idx: number) => {
    setActiveIdx(idx);
    userInteractedRef.current = Date.now();
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
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

  const activePillar = pillars[activeIdx];

  return (
    <section
      id="why-choose-us"
      className="py-20 lg:py-28 bg-[#F7F8F8] relative overflow-hidden select-none"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Background Subtle Luxury Grid & Ambient Glows */}
      <div className="absolute inset-0 bg-grid-dark opacity-30 pointer-events-none" />
      <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#E7EBEA] rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute top-1/4 right-1/4 w-[450px] h-[450px] bg-[#C86A28]/8 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Left Column: Heading & Interactive Feature Cards List */}
          <div className="lg:col-span-7 space-y-8">
            <RevealOnScroll className="space-y-5">
              {/* Badge */}
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FDF2EC] border border-[#F4D3C2] text-xs font-bold uppercase tracking-wider text-[#C86A28]">
                <Sparkles className="w-3.5 h-3.5 text-[#C86A28]" />
                <span>WHY CHOOSE US?</span>
              </span>

              {/* Main Headline */}
              <h2 className="text-4xl sm:text-5xl lg:text-[46px] font-black leading-[1.15] tracking-tight text-[#151515]">
                Smart Solutions, Real Results &mdash;{" "}
                <span className="text-[#C86A28]">Built Around Your Vision</span>
              </h2>

              {/* Sub-description */}
              <p className="text-base sm:text-lg text-[#544643] leading-relaxed max-w-2xl">
                We don&apos;t just deliver projects &mdash; we partner with you to create digital experiences that are impactful, efficient, and built to grow with your business.
              </p>
            </RevealOnScroll>

            {/* Interactive Feature List Cards */}
            <div className="space-y-3.5 pt-2">
              {pillars.map((pillar, idx) => {
                const Icon = pillar.icon;
                const isActive = activeIdx === idx;

                return (
                  <div
                    key={pillar.id}
                    onClick={() => handleSelect(idx)}
                    onMouseEnter={() => handleSelect(idx)}
                    className={`group relative flex items-start gap-4 sm:gap-5 p-4 sm:p-5 rounded-[24px] cursor-pointer transition-all duration-300 ${
                      isActive
                        ? "bg-[#FFFFFF] border-2 border-[#FF7700] ring-4 ring-[#FF9500]/20 shadow-[0_12px_32px_rgba(200,106,40,0.18)] -translate-y-1 scale-[1.01]"
                        : "bg-[#FFFFFF]/60 border border-[#E5E5E3] hover:border-[#C86A28]/40 hover:bg-[#FFFFFF] hover:shadow-sm"
                    }`}
                  >
                    {/* Active Ping Beacon */}
                    {isActive && (
                      <span className="absolute top-4 right-4 w-2 h-2 rounded-full bg-[#FF7700] shadow-[0_0_8px_#FF7700] animate-ping" />
                    )}

                    {/* Icon Squircle */}
                    <div
                      className={`w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 transition-all duration-300 ${
                        isActive
                          ? "bg-gradient-to-tr from-[#FF7700] to-[#FFA500] text-white shadow-[0_0_20px_rgba(255,119,0,0.45)] scale-105"
                          : "bg-[#FDF2EC] border border-[#F4D3C2] text-[#C86A28] group-hover:scale-105"
                      }`}
                    >
                      <Icon className="w-5 h-5 stroke-[2.2]" />
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0 pr-4">
                      <div className="flex items-center gap-2.5 mb-1">
                        <h3
                          className={`text-base sm:text-lg font-black transition-colors ${
                            isActive ? "text-[#151515]" : "text-[#151515] group-hover:text-[#C86A28]"
                          }`}
                        >
                          {pillar.title}
                        </h3>
                        {isActive && (
                          <span className="hidden sm:inline-flex px-2 py-0.5 rounded-full text-[10px] font-extrabold bg-[#FDF2EC] border border-[#F4D3C2] text-[#C86A28]">
                            {pillar.badge}
                          </span>
                        )}
                      </div>
                      <p className="text-xs sm:text-sm text-[#544643] leading-relaxed">
                        {pillar.description}
                      </p>
                    </div>

                    {/* Right Arrow / Check Circle */}
                    <div
                      className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 self-center ${
                        isActive
                          ? "bg-[#FF7700] text-white scale-110 shadow-sm"
                          : "text-[#C6C2C1] group-hover:text-[#C86A28]"
                      }`}
                    >
                      {isActive ? (
                        <Check className="w-4 h-4 stroke-[3]" />
                      ) : (
                        <ArrowRight className="w-4 h-4" />
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: 3D Dynamic Vision & Impact Showcase Card */}
          <div className="lg:col-span-5">
            <RevealOnScroll delay={0.2}>
              <div
                ref={cardRef}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                className="relative rounded-[32px] p-6 sm:p-8 bg-[#EFF0EF]/90 border border-[#C6C2C1] shadow-xl overflow-hidden transition-transform duration-200 ease-out"
                style={{
                  perspective: 1000,
                  transform: tilt.isHovered
                    ? `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) scale3d(1.02, 1.02, 1.02)`
                    : "rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)",
                  transformStyle: "preserve-3d",
                }}
              >
                {/* Ambient Warm Corner Glow */}
                <div className="absolute -top-16 -right-16 w-56 h-56 rounded-full bg-gradient-to-br from-[#FF7700]/25 to-transparent blur-3xl pointer-events-none" />

                {/* Card Header: Live Status + Rating */}
                <div className="flex items-center justify-between pb-5 border-b border-[#C6C2C1]/60 relative z-10">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#10B981] shadow-[0_0_8px_#10B981] animate-pulse" />
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#151515]">
                      PEP Standard • 2026
                    </span>
                  </div>

                  <div className="flex items-center gap-1 text-[#FF7700] bg-[#FFFFFF] px-2.5 py-1 rounded-full border border-[#C6C2C1]/60 shadow-2xs">
                    <Star className="w-3.5 h-3.5 fill-[#FF7700]" />
                    <span className="text-xs font-black text-[#151515]">5.0</span>
                    <span className="text-[10px] text-[#544643] font-medium">(150+ reviews)</span>
                  </div>
                </div>

                {/* Animated Dynamic Center Display */}
                <div className="py-6 relative z-10 min-h-[260px] flex flex-col justify-between">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activePillar.id}
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -12 }}
                      transition={{ duration: 0.28 }}
                      className="space-y-5"
                    >
                      {/* Highlight Metric Box */}
                      <div className="p-5 rounded-2xl bg-[#FFFFFF] border border-[#C6C2C1]/70 shadow-xs flex items-center justify-between">
                        <div>
                          <div className="text-3xl sm:text-4xl font-black text-[#C86A28] tracking-tight">
                            {activePillar.highlightStat}
                          </div>
                          <div className="text-xs font-bold text-[#544643] mt-1">
                            {activePillar.statLabel}
                          </div>
                        </div>

                        <div className="w-12 h-12 rounded-2xl bg-[#FDF2EC] border border-[#F4D3C2] flex items-center justify-center text-[#C86A28]">
                          <TrendingUp className="w-6 h-6" />
                        </div>
                      </div>

                      {/* Key Pillar Benefits Checklist */}
                      <div className="space-y-2.5 pt-1">
                        <span className="block text-[11px] font-black uppercase tracking-wider text-[#544643]">
                          Core Commitments & Delivery
                        </span>
                        {activePillar.keyBenefits.map((benefit, i) => (
                          <div key={i} className="flex items-center gap-2.5">
                            <div className="w-4 h-4 rounded-full bg-[#10B981]/15 flex items-center justify-center text-[#10B981] shrink-0">
                              <Check className="w-3 h-3 stroke-[3]" />
                            </div>
                            <span className="text-xs sm:text-[13px] font-semibold text-[#151515]">
                              {benefit}
                            </span>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>

                {/* Card Footer: Trust Statement & Contact Action */}
                <div className="pt-5 border-t border-[#C6C2C1]/60 flex flex-col sm:flex-row items-center justify-between gap-4 relative z-10">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-full bg-[#FFFFFF] border border-[#C6C2C1] flex items-center justify-center text-[#C86A28] shadow-2xs">
                      <ShieldCheck className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="block text-[11px] font-black uppercase tracking-wider text-[#151515]">
                        100% Quality Guaranteed
                      </span>
                      <span className="block text-[10px] text-[#544643]">
                        Tailored for your vision & scale
                      </span>
                    </div>
                  </div>

                  <Link
                    href="/contact"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-[#151515] text-[#F7F8F8] text-xs font-bold hover:bg-[#544643] transition-colors shadow-xs group"
                  >
                    <span>Partner With Us</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#C86A28] group-hover:translate-x-0.5 transition-transform" />
                  </Link>
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </div>
    </section>
  );
}
