"use client";

import { useRef, useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { WordReveal, ParagraphReveal } from "@/components/shared/WordReveal";
import { RevealOnScroll } from "@/components/shared/RevealOnScroll";

interface ServiceCardData {
  id: string;
  tag: string;
  title: string;
  description: string;
  href: string;
  theme: "purple" | "dark" | "white" | "slate";
  bgClass: string;
  textColor: string;
  descColor: string;
  tagColor: string;
  arrowColor: string;
  logoTheme: "light" | "dark";
}

const SERVICE_ITEMS: ServiceCardData[] = [
  {
    id: "01",
    tag: "WEB",
    title: "Website Development",
    description: "Business websites, corporate websites and one-page websites.",
    href: "/services/website-design-development",
    theme: "purple",
    bgClass: "bg-[#502D6D] shadow-2xl",
    textColor: "text-white",
    descColor: "text-purple-200/90",
    tagColor: "text-purple-200",
    arrowColor: "text-white",
    logoTheme: "light",
  },
  {
    id: "02",
    tag: "MOBILE",
    title: "Mobile App Development",
    description: "Business and internal-use mobile applications.",
    href: "/services/mobile-app-design-development",
    theme: "dark",
    bgClass: "bg-[#151515] shadow-2xl",
    textColor: "text-white",
    descColor: "text-neutral-400",
    tagColor: "text-neutral-400",
    arrowColor: "text-white",
    logoTheme: "light",
  },
  {
    id: "03",
    tag: "CUSTOM",
    title: "Custom Software",
    description: "Solutions built around specific business workflows.",
    href: "/services",
    theme: "white",
    bgClass: "bg-white shadow-[0_25px_60px_rgba(0,0,0,0.12)]",
    textColor: "text-[#151515]",
    descColor: "text-[#544643]",
    tagColor: "text-[#544643]",
    arrowColor: "text-[#151515]",
    logoTheme: "dark",
  },
  {
    id: "04",
    tag: "UI/UX",
    title: "UI/UX Design",
    description: "Digital experiences designed around real users and business goals.",
    href: "/services/ui-ux-design",
    theme: "slate",
    bgClass: "bg-[#18181B] shadow-2xl",
    textColor: "text-white",
    descColor: "text-neutral-400",
    tagColor: "text-neutral-400",
    arrowColor: "text-white",
    logoTheme: "light",
  },
  {
    id: "05",
    tag: "ERP",
    title: "ERP Solutions",
    description: "Integrated systems to manage and grow your business efficiently & globally.",
    href: "/services",
    theme: "purple",
    bgClass: "bg-[#502D6D] shadow-2xl",
    textColor: "text-white",
    descColor: "text-purple-200/90",
    tagColor: "text-purple-200",
    arrowColor: "text-white",
    logoTheme: "light",
  },
];

export function TestimonialsByServiceSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeCardIndex, setActiveCardIndex] = useState(2);

  // Scroll tracking across the sticky section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Responsive spring physics calibrated for smooth tactile wheel rotation
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 24,
    mass: 0.2,
  });

  // Wheel rotation angle (degrees): cards rotate as you scroll down
  // Card 01 centered at progress 0 (+15deg), Card 03 at progress 0.5 (0deg), Card 05 at progress 1.0 (-15deg)
  const wheelAngle = useTransform(smoothProgress, [0, 0.25, 0.5, 0.75, 1], [15, 7.5, 0, -7.5, -15]);

  // Update active card index based on scroll position
  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (latest) => {
      if (latest < 0.2) setActiveCardIndex(0);
      else if (latest < 0.4) setActiveCardIndex(1);
      else if (latest < 0.6) setActiveCardIndex(2);
      else if (latest < 0.8) setActiveCardIndex(3);
      else setActiveCardIndex(4);
    });
    return () => unsubscribe();
  }, [scrollYProgress]);

  const scrollToCard = (index: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const targetOffset = index / (SERVICE_ITEMS.length - 1);
    const scrollDistance = containerRef.current.offsetHeight - window.innerHeight;
    const targetY = scrollTop + rect.top + targetOffset * scrollDistance;
    window.scrollTo({ top: targetY, behavior: "smooth" });
  };

  return (
    <>
      <section
        ref={containerRef}
        className="relative bg-[#F7F8F8] h-[250vh] lg:h-[280vh]"
      >
        {/* Sticky Viewport Container */}
        <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col justify-between pt-24 sm:pt-28 pb-6 sm:pb-8">
          
          {/* Background ambient lighting */}
          <div className="absolute top-1/4 -right-20 w-[550px] h-[550px] bg-[#502D6D]/[0.05] rounded-full blur-[140px] pointer-events-none" />
          <div className="absolute bottom-10 -left-20 w-[550px] h-[550px] bg-[#FCB116]/[0.07] rounded-full blur-[140px] pointer-events-none" />
          <div className="absolute inset-0 bg-dot-light opacity-30 pointer-events-none" />

          {/* Section Header */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-30 shrink-0">
            <div className="max-w-3xl">
              <WordReveal
                as="h2"
                text="From Websites to Custom Software."
                gradientWords="Custom Software."
                gradientClassName="text-[#502D6D]"
                className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-[#151515]"
              />
              <ParagraphReveal
                text="Our client feedback comes from different types of digital projects."
                delay={0.1}
                className="text-xs sm:text-sm text-[#544643] mt-1"
              />
            </div>
          </div>

          {/* Rotary Wheel Stage with vertical gradient mask */}
          <div 
            className="relative flex-1 w-full max-w-[1440px] mx-auto flex items-center justify-start overflow-visible px-4 sm:px-6 lg:px-8 mt-2 [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
          >
            {/* Giant Circular Wheel Disc on the Left (Solid clean white disc with NO border) */}
            <div className="absolute -left-[660px] sm:-left-[560px] lg:-left-[460px] top-1/2 -translate-y-1/2 w-[1100px] h-[1100px] sm:w-[1300px] sm:h-[1300px] lg:w-[1500px] lg:h-[1500px] rounded-full bg-white shadow-[0_20px_60px_rgba(0,0,0,0.05),-10px_0_40px_rgba(80,45,109,0.03)] pointer-events-none z-10" />

            {/* Cards Arc Track (Desktop fanned rotary wheel) */}
            <div className="relative w-full h-full flex items-center z-20 pl-0 sm:pl-28 lg:pl-56">
              <div className="relative w-full h-[400px] sm:h-[440px] lg:h-[480px] flex items-center">
                {SERVICE_ITEMS.map((card, idx) => {
                  return (
                    <RotaryCard
                      key={card.id}
                      card={card}
                      index={idx}
                      wheelAngle={wheelAngle}
                      activeCardIndex={activeCardIndex}
                      onSelect={() => scrollToCard(idx)}
                    />
                  );
                })}
              </div>
            </div>

            {/* Rotary Scroll Helper Badge */}
            <div className="hidden lg:flex absolute right-8 bottom-3 items-center gap-2.5 px-4 py-2 rounded-full bg-white/95 backdrop-blur-md shadow-md z-30 pointer-events-none">
              <div className="w-4 h-4 rounded-full border-2 border-t-[#502D6D] border-r-[#502D6D] border-b-[#FCB116] border-l-transparent animate-spin" style={{ animationDuration: "2.5s" }} />
              <span className="text-xs font-bold text-[#151515]">Scroll to rotate wheel</span>
              <span className="text-[11px] text-slate-500 font-medium">({activeCardIndex + 1}/5)</span>
            </div>

          </div>

          {/* Bottom Status Indicator */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full shrink-0 z-30">
            <div className="flex items-center justify-between text-xs text-[#544643] pt-2">
              <div className="flex items-center gap-2">
                <span className="font-bold text-[#151515] font-syne">PEP Service Matrix</span>
                <span className="text-[#C6C2C1]">•</span>
                <span>Full-Cycle Digital Engineering</span>
              </div>
              <div className="flex items-center gap-1.5 font-mono text-[11px]">
                <span className="text-[#502D6D] font-bold">0{activeCardIndex + 1}</span>
                <span className="text-[#C6C2C1]">/</span>
                <span>05</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Post-Wheel CTA Banner */}
      <section className="relative z-20 bg-[#F7F8F8] py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <RevealOnScroll>
            <div className="rounded-3xl bg-gradient-to-r from-[#151515] via-[#22102E] to-[#151515] p-8 sm:p-10 shadow-xl flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left relative overflow-hidden">
              <div className="absolute right-0 top-0 bottom-0 w-80 bg-gradient-to-l from-[#FCB116]/10 to-transparent pointer-events-none" />

              <div className="relative z-10 space-y-1">
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                  Have a Similar Requirement?
                </h3>
                <p className="text-sm text-[#D4C7EC]">
                  Tell us about your project vision and get tailored technical guidance.
                </p>
              </div>

              <Link
                href="/contact"
                className="relative z-10 shrink-0 inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-[#FCB116] text-[#151515] font-extrabold text-sm hover:bg-white shadow-lg shadow-[#FCB116]/20 transition-all hover:scale-105 active:scale-95"
              >
                <span>Let&apos;s discuss it</span>
                <ArrowRight className="w-4 h-4 text-[#151515]" />
              </Link>
            </div>
          </RevealOnScroll>
        </div>
      </section>
    </>
  );
}

// Single Rotary Card along the Circular Wheel (NO BORDERS)
function RotaryCard({
  card,
  index,
  wheelAngle,
  activeCardIndex,
  onSelect,
}: {
  card: ServiceCardData;
  index: number;
  wheelAngle: any;
  activeCardIndex: number;
  onSelect: () => void;
}) {
  // Angular spacing: 7.5 degrees per card along the wheel circumference
  const baseAngle = (index - 2) * 7.5;

  // Total current angle of this card = baseAngle + wheelAngle
  const cardAngle = useTransform(wheelAngle, (wAngle: number) => {
    return baseAngle + wAngle;
  });

  // Calculate X and Y coordinates along a circular wheel with radius R = 950px
  const cardX = useTransform(cardAngle, (deg: number) => {
    const rad = (deg * Math.PI) / 180;
    return 950 * (Math.cos(rad) - 1) + 20;
  });

  const cardY = useTransform(cardAngle, (deg: number) => {
    const rad = (deg * Math.PI) / 180;
    return 950 * Math.sin(rad);
  });

  const isCurrentActive = activeCardIndex === index;

  // Scale: Active card expands smoothly to 1.02, outer cards gently taper to 0.94
  const cardScale = useTransform(cardAngle, (deg: number) => {
    const dist = Math.abs(deg);
    return Math.max(0.93, 1.02 - dist * 0.0035);
  });

  // Opacity: smoothly dissolves when rotated far away from center
  const cardOpacity = useTransform(cardAngle, (deg: number) => {
    const dist = Math.abs(deg);
    if (dist > 22) return Math.max(0, 1 - (dist - 22) * 0.12);
    return Math.max(0.85, 1 - dist * 0.004);
  });

  return (
    <motion.div
      style={{
        x: cardX,
        y: cardY,
        rotate: cardAngle,
        scale: cardScale,
        opacity: cardOpacity,
        // Active card elevates to 60 for full focus, otherwise stacked in natural sequence (Card 05 on 04, 04 on 03...)
        zIndex: isCurrentActive ? 60 : 10 + index * 5,
      }}
      onClick={onSelect}
      className={`absolute left-0 w-[340px] sm:w-[560px] md:w-[640px] lg:w-[730px] rounded-3xl p-5 sm:p-6 lg:p-7 cursor-pointer transition-shadow duration-300 select-none ${
        card.bgClass
      } ${
        isCurrentActive
          ? "shadow-[0_30px_70px_rgba(0,0,0,0.28)]"
          : "shadow-xl"
      }`}
    >
      {/* Top Header of Card: Logo + 0X Number + Category Tag (NO BORDER DIVIDER) */}
      <div className="flex items-center justify-between pb-2 mb-3 sm:mb-4">
        {/* Left: PEP Software Logo */}
        <div className="flex items-center gap-2">
          <div className="relative w-5 h-5 sm:w-6 sm:h-6 shrink-0">
            <Image
              src="/pep-icon.png"
              alt="Pep Software Icon"
              fill
              sizes="24px"
              unoptimized
              priority
              className={`object-contain ${card.logoTheme === "light" ? "brightness-200" : ""}`}
            />
          </div>
          <span className={`text-[12px] sm:text-[13px] font-black tracking-wider uppercase font-syne ${card.textColor}`}>
            PEP <span className="opacity-80 font-normal">SOFTWARE</span>
          </span>
        </div>

        {/* Center: Step Number */}
        <div className={`text-xs sm:text-sm font-black tracking-widest font-mono opacity-80 ${card.textColor}`}>
          {card.id}
        </div>

        {/* Right: Category Tag */}
        <div className={`text-[11px] sm:text-xs font-black tracking-wider uppercase font-mono ${card.tagColor}`}>
          {card.tag}
        </div>
      </div>

      {/* Main Body: Left Content + Right UI Mockup */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 sm:gap-6 items-center">
        {/* Left Column: Title, Description, Thin Line Arrow */}
        <div className="md:col-span-5 space-y-2 sm:space-y-3 text-left">
          <h3 className={`text-xl sm:text-2xl lg:text-[25px] font-extrabold font-syne leading-tight tracking-tight ${card.textColor}`}>
            {card.title}
          </h3>
          <p className={`text-xs sm:text-sm leading-relaxed ${card.descColor}`}>
            {card.description}
          </p>
          <div className="pt-1">
            <Link
              href={card.href}
              onClick={(e) => e.stopPropagation()}
              className={`inline-flex items-center gap-2 text-xl font-light group/link transition-all ${card.arrowColor}`}
            >
              <span className="group-hover/link:translate-x-1.5 transition-transform">→</span>
            </Link>
          </div>
        </div>

        {/* Right Column: Custom UI Mockup Preview matching 2nd image */}
        <div className="md:col-span-7">
          {index === 0 && <WebsiteMockup />}
          {index === 1 && <MobileAppsMockup />}
          {index === 2 && <CustomSoftwareMockup />}
          {index === 3 && <UIUXDesignMockup />}
          {index === 4 && <ERPMockup />}
        </div>
      </div>
    </motion.div>
  );
}

// 01. Web Development Browser Mockup (NO BORDERS)
function WebsiteMockup() {
  return (
    <div className="relative w-full h-[175px] sm:h-[195px] lg:h-[215px] bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col text-slate-800">
      {/* Top Browser Bar */}
      <div className="h-6 sm:h-7 bg-slate-100 px-3 flex items-center justify-between">
        <div className="flex items-center gap-1.5">
          <div className="w-2 h-2 rounded-full bg-red-400" />
          <div className="w-2 h-2 rounded-full bg-amber-400" />
          <div className="w-2 h-2 rounded-full bg-emerald-400" />
        </div>
        <div className="h-3.5 sm:h-4 w-24 sm:w-32 bg-white rounded-full text-[8px] text-slate-400 flex items-center justify-center font-mono shadow-xs">
          pepsoftware.com
        </div>
        <div className="w-8" />
      </div>

      {/* Website Body Preview */}
      <div className="flex-1 p-3 sm:p-3.5 flex flex-col justify-between bg-gradient-to-br from-slate-50 via-white to-purple-50/50">
        <div className="flex items-center justify-between pb-1.5">
          <div className="flex items-center gap-1.5">
            <div className="w-3.5 h-3.5 rounded bg-[#502D6D] flex items-center justify-center text-[7px] text-white font-bold">P</div>
            <span className="text-[10px] font-bold text-slate-900">ModernWeb</span>
          </div>
          <div className="flex items-center gap-2 sm:gap-2.5 text-[8px] text-slate-500 font-medium">
            <span>About</span>
            <span>Services</span>
            <span>Contact</span>
            <span className="px-2 py-0.5 rounded-full bg-[#502D6D] text-white text-[7px] font-semibold">Get Started</span>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-2 sm:gap-3 items-center py-1">
          <div className="col-span-7 space-y-1 text-left">
            <h4 className="text-xs sm:text-sm font-black text-slate-900 leading-tight">
              Modern Websites for Growing Brands
            </h4>
            <p className="text-[9px] text-slate-500 line-clamp-2">
              High-performance digital platforms built for speed, SEO, and conversion.
            </p>
            <div className="flex items-center gap-2 pt-0.5">
              <span className="px-2 py-0.5 rounded bg-[#502D6D] text-white text-[8px] font-bold">Explore</span>
              <span className="text-[8px] text-slate-600 font-medium">Demo →</span>
            </div>
          </div>
          <div className="col-span-5 h-20 sm:h-22 rounded-lg bg-gradient-to-tr from-[#502D6D] via-[#7C3AED] to-[#FCB116] p-0.5 shadow-md overflow-hidden relative">
            <div className="w-full h-full bg-slate-900/90 rounded-[6px] p-2 flex flex-col justify-between text-white relative overflow-hidden">
              <div className="absolute -right-3 -bottom-3 w-12 h-12 rounded-full bg-purple-500/30 blur-xl" />
              <div className="text-[7px] font-mono text-purple-300">ARCHITECTURE</div>
              <div className="space-y-1">
                <div className="w-10 h-1 bg-white/80 rounded-full" />
                <div className="w-14 h-1 bg-purple-400 rounded-full" />
                <div className="w-6 h-0.5 bg-white/40 rounded-full" />
              </div>
              <div className="text-[8px] font-bold text-amber-300 flex items-center justify-between">
                <span>99.9% Uptime</span>
                <span>⚡ 0.4s</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// 02. Mobile App Development Dual Phones Mockup (NO BORDERS)
function MobileAppsMockup() {
  return (
    <div className="relative w-full h-[175px] sm:h-[195px] lg:h-[215px] flex items-center justify-center gap-2 sm:gap-3 overflow-hidden">
      {/* Dark Theme Phone */}
      <div className="w-[120px] sm:w-[140px] lg:w-[150px] h-[165px] sm:h-[185px] lg:h-[205px] rounded-[20px] bg-[#121214] shadow-2xl p-2 flex flex-col justify-between text-white relative">
        <div className="w-9 sm:w-11 h-2 bg-black rounded-full mx-auto flex items-center justify-center">
          <div className="w-1 h-1 rounded-full bg-slate-700" />
        </div>
        <div className="space-y-0.5 text-left">
          <div className="text-[7px] text-slate-400">Good Morning</div>
          <div className="text-[9px] font-bold">Welcome Back!</div>
        </div>
        <div className="p-1.5 rounded-xl bg-gradient-to-r from-purple-900/80 to-indigo-900/80 space-y-0.5">
          <div className="text-[6px] text-purple-200">Total Balance</div>
          <div className="text-[10px] sm:text-[11px] font-black text-white">₹12,450</div>
        </div>
        <div className="h-8 sm:h-10 flex items-end justify-between gap-1 px-1 bg-white/[0.06] rounded-lg p-1">
          <div className="w-2 h-3 bg-purple-500/40 rounded-t-sm" />
          <div className="w-2 h-5 bg-purple-500/60 rounded-t-sm" />
          <div className="w-2 h-7 bg-purple-400 rounded-t-sm" />
          <div className="w-2 h-4 bg-purple-500/50 rounded-t-sm" />
          <div className="w-2 h-8 bg-gradient-to-t from-purple-500 to-[#FCB116] rounded-t-sm" />
        </div>
        <div className="flex items-center justify-around pt-1 text-[7px] text-slate-400">
          <span className="text-purple-400 font-bold">●</span>
          <span>■</span>
          <span>▲</span>
          <span>◆</span>
        </div>
      </div>

      {/* Light Theme Phone */}
      <div className="w-[120px] sm:w-[140px] lg:w-[150px] h-[165px] sm:h-[185px] lg:h-[205px] rounded-[20px] bg-white shadow-2xl p-2 flex flex-col justify-between text-slate-800 relative">
        <div className="w-9 sm:w-11 h-2 bg-slate-100 rounded-full mx-auto flex items-center justify-center">
          <div className="w-1 h-1 rounded-full bg-slate-300" />
        </div>
        <div className="text-left space-y-0.5">
          <div className="text-[7px] text-slate-400">‹ Explore</div>
          <div className="text-[9px] font-bold text-slate-900 leading-tight">Find Your Perfect Solution</div>
        </div>
        <div className="grid grid-cols-2 gap-1 sm:gap-1.5 my-auto">
          <div className="p-1.5 rounded-lg bg-purple-50/80 flex flex-col items-center">
            <span className="text-[10px]">🍔</span>
            <span className="text-[6px] font-bold text-purple-900 mt-0.5">Food</span>
          </div>
          <div className="p-1.5 rounded-lg bg-amber-50/80 flex flex-col items-center">
            <span className="text-[10px]">🛍️</span>
            <span className="text-[6px] font-bold text-amber-900 mt-0.5">E-comm</span>
          </div>
          <div className="p-1.5 rounded-lg bg-emerald-50/80 flex flex-col items-center">
            <span className="text-[10px]">🩺</span>
            <span className="text-[6px] font-bold text-emerald-900 mt-0.5">Health</span>
          </div>
          <div className="p-1.5 rounded-lg bg-blue-50/80 flex flex-col items-center">
            <span className="text-[10px]">📚</span>
            <span className="text-[6px] font-bold text-blue-900 mt-0.5">Edu</span>
          </div>
        </div>
        <div className="flex items-center justify-around pt-1 text-[7px] text-slate-400">
          <span className="text-slate-900 font-bold">●</span>
          <span>■</span>
          <span>▲</span>
          <span>◆</span>
        </div>
      </div>
    </div>
  );
}

// 03. Custom Software Enterprise SaaS Dashboard Mockup (NO BORDERS)
function CustomSoftwareMockup() {
  return (
    <div className="relative w-full h-[175px] sm:h-[195px] lg:h-[215px] bg-[#F8FAFC] rounded-2xl shadow-xl p-2.5 flex gap-2 text-slate-800 overflow-hidden">
      {/* Left Sidebar */}
      <div className="w-18 sm:w-22 bg-white rounded-xl shadow-xs p-2 flex flex-col justify-between shrink-0">
        <div className="space-y-1.5">
          <div className="flex gap-1 pb-1">
            <div className="w-1.5 h-1.5 rounded-full bg-slate-300" />
            <div className="w-1.5 h-1.5 rounded-full bg-slate-300" />
            <div className="w-1.5 h-1.5 rounded-full bg-slate-300" />
          </div>
          <div className="space-y-0.5 text-[7px] font-medium text-left">
            <div className="px-1.5 py-0.5 rounded bg-[#502D6D] text-white font-bold flex items-center gap-1">
              <span>❖</span>
              <span>Dashboard</span>
            </div>
            <div className="px-1.5 py-0.5 text-slate-600">Projects</div>
            <div className="px-1.5 py-0.5 text-slate-600">Tasks</div>
            <div className="px-1.5 py-0.5 text-slate-600">Team</div>
            <div className="px-1.5 py-0.5 text-slate-600">Reports</div>
            <div className="px-1.5 py-0.5 text-slate-600">Settings</div>
          </div>
        </div>
        <div className="text-[6px] text-slate-400 font-mono">v2.4.0</div>
      </div>

      {/* Main Panel */}
      <div className="flex-1 flex flex-col justify-between bg-white rounded-xl shadow-xs p-2">
        <div className="flex items-center justify-between pb-1">
          <span className="text-[9px] sm:text-[10px] font-bold text-slate-900">Project Overview</span>
          <span className="text-[7px] px-1.5 py-0.5 rounded bg-slate-100 text-slate-600 font-medium">This Month ▾</span>
        </div>
        {/* KPI Cards */}
        <div className="grid grid-cols-3 gap-1 sm:gap-1.5 my-0.5">
          <div className="p-1 rounded-lg bg-slate-50">
            <div className="text-[10px] sm:text-[11px] font-black text-slate-900">12</div>
            <div className="text-[6px] text-slate-500 font-medium">Active</div>
          </div>
          <div className="p-1 rounded-lg bg-purple-50">
            <div className="text-[10px] sm:text-[11px] font-black text-[#502D6D]">8</div>
            <div className="text-[6px] text-purple-700 font-medium">Team</div>
          </div>
          <div className="p-1 rounded-lg bg-amber-50">
            <div className="text-[10px] sm:text-[11px] font-black text-amber-800">24</div>
            <div className="text-[6px] text-amber-700 font-medium">Pending</div>
          </div>
        </div>
        {/* Wave Analytics Chart */}
        <div className="h-12 sm:h-14 rounded-lg bg-slate-50/80 p-1 flex flex-col justify-between relative overflow-hidden">
          <div className="text-[7px] font-bold text-slate-600 flex justify-between">
            <span>Sprint Velocity</span>
            <span className="text-emerald-600">+18.4%</span>
          </div>
          <svg className="w-full h-7 sm:h-8" viewBox="0 0 100 30" preserveAspectRatio="none">
            <defs>
              <linearGradient id="customG" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#7C3AED" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#7C3AED" stopOpacity="0.0" />
              </linearGradient>
            </defs>
            <path d="M 0 25 Q 20 8 40 18 T 80 10 T 100 5 L 100 30 L 0 30 Z" fill="url(#customG)" />
            <path d="M 0 25 Q 20 8 40 18 T 80 10 T 100 5" fill="none" stroke="#7C3AED" strokeWidth="2" />
          </svg>
        </div>
      </div>
    </div>
  );
}

// 04. UI/UX Design Studio Canvas Mockup (NO BORDERS)
function UIUXDesignMockup() {
  return (
    <div className="relative w-full h-[175px] sm:h-[195px] lg:h-[215px] bg-[#18181B] rounded-2xl shadow-2xl p-2.5 flex gap-2 text-white overflow-hidden">
      {/* Tool Rail */}
      <div className="w-6 sm:w-7 bg-[#202024] rounded-lg p-1 flex flex-col items-center gap-1.5 shrink-0 text-slate-400">
        <div className="w-3 h-3 rounded bg-purple-600 text-white flex items-center justify-center text-[7px] font-bold">✦</div>
        <div className="text-[8px]">↖</div>
        <div className="text-[8px]">▢</div>
        <div className="text-[8px]">✎</div>
        <div className="text-[8px]">T</div>
      </div>

      {/* Center Artboard */}
      <div className="flex-1 bg-[#24242A] rounded-xl p-2 flex flex-col items-center justify-center relative overflow-hidden">
        <div className="absolute top-1.5 left-2 text-[6px] font-mono text-purple-300 bg-purple-900/60 px-1 py-0.5 rounded">
          Artboard · 375×812
        </div>
        <div className="w-24 sm:w-32 h-20 sm:h-24 rounded-xl bg-gradient-to-tr from-purple-600 to-indigo-600 p-2 shadow-lg flex flex-col justify-between text-white relative">
          <div className="flex justify-between items-center">
            <div className="w-3.5 h-3.5 rounded-full bg-white/20 backdrop-blur-sm" />
            <div className="text-[6px] font-mono">PEP UI</div>
          </div>
          <div className="space-y-1">
            <div className="w-10 sm:w-14 h-1.5 bg-white/90 rounded-full" />
            <div className="w-14 sm:w-18 h-1 bg-white/50 rounded-full" />
          </div>
          <div className="flex gap-1">
            <div className="w-2 h-2 rounded-full bg-amber-400" />
            <div className="w-2 h-2 rounded-full bg-white/40" />
          </div>
        </div>
      </div>

      {/* Inspector Panel */}
      <div className="w-18 sm:w-22 bg-[#202024] rounded-lg p-2 flex flex-col justify-between shrink-0 text-[7px] text-slate-300">
        <div className="space-y-1">
          <div className="font-bold text-white flex items-center justify-between">
            <span>Design</span>
            <span className="text-[8px] font-serif font-black">Aa</span>
          </div>
          <div className="space-y-0.5 text-slate-400">
            <div className="flex justify-between"><span>X: 140</span><span>Y: 82</span></div>
            <div className="flex justify-between"><span>W: 320</span><span>H: 240</span></div>
          </div>
          <div className="pt-1">
            <div className="text-[6px] text-slate-400 mb-0.5">Colors</div>
            <div className="flex gap-1">
              <div className="w-2.5 h-2.5 rounded-full bg-[#502D6D]" />
              <div className="w-2.5 h-2.5 rounded-full bg-[#7C3AED]" />
              <div className="w-2.5 h-2.5 rounded-full bg-[#FCB116]" />
            </div>
          </div>
        </div>
        <div className="pt-0.5 text-[6px] text-slate-400 flex justify-between">
          <span>Radius</span>
          <span className="text-white font-mono">16px</span>
        </div>
      </div>
    </div>
  );
}

// 05. ERP Solutions Operations Suite Mockup (NO BORDERS)
function ERPMockup() {
  return (
    <div className="relative w-full h-[175px] sm:h-[195px] lg:h-[215px] bg-white rounded-2xl shadow-xl p-2.5 flex gap-2 text-slate-800 overflow-hidden">
      {/* Sidebar */}
      <div className="w-18 sm:w-22 bg-slate-50 rounded-xl p-2 flex flex-col justify-between shrink-0">
        <div className="space-y-1">
          <div className="flex items-center gap-1 pb-1">
            <div className="w-2 h-2 rounded-full bg-purple-600" />
            <span className="text-[8px] font-black text-slate-900">ERP Pro</span>
          </div>
          <div className="space-y-0.5 text-[7px] font-medium text-left">
            <div className="px-1.5 py-0.5 rounded bg-[#502D6D] text-white font-bold">Dashboard</div>
            <div className="px-1.5 py-0.5 text-slate-600">Inventory</div>
            <div className="px-1.5 py-0.5 text-slate-600">Sales</div>
            <div className="px-1.5 py-0.5 text-slate-600">Purchase</div>
            <div className="px-1.5 py-0.5 text-slate-600">Accounts</div>
          </div>
        </div>
        <span className="text-[6px] text-emerald-600 font-bold">● Active Sync</span>
      </div>

      {/* Main ERP Panel */}
      <div className="flex-1 flex flex-col justify-between">
        <div className="grid grid-cols-2 gap-1.5">
          <div className="p-1.5 rounded-lg bg-slate-50">
            <div className="text-[7px] text-slate-500 font-medium">Total Sales</div>
            <div className="text-[10px] sm:text-[11px] font-black text-slate-900">₹5,20,000</div>
            <span className="text-[6px] text-emerald-600 font-bold bg-emerald-50 px-1 py-0.2 rounded">+12% vs last mo</span>
          </div>
          <div className="p-1.5 rounded-lg bg-slate-50">
            <div className="text-[7px] text-slate-500 font-medium">Total Purchase</div>
            <div className="text-[10px] sm:text-[11px] font-black text-slate-900">₹3,10,000</div>
            <span className="text-[6px] text-emerald-600 font-bold bg-emerald-50 px-1 py-0.2 rounded">+8% optimal</span>
          </div>
        </div>
        {/* Wave Curve */}
        <div className="h-12 sm:h-14 rounded-lg bg-purple-50/40 p-1 flex flex-col justify-between relative overflow-hidden">
          <div className="flex justify-between items-center text-[7px]">
            <span className="font-bold text-[#502D6D]">Sales Analytics</span>
            <span className="text-slate-500">Monthly ▾</span>
          </div>
          <svg className="w-full h-7 sm:h-8" viewBox="0 0 100 30" preserveAspectRatio="none">
            <defs>
              <linearGradient id="erpG" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#502D6D" stopOpacity="0.45" />
                <stop offset="100%" stopColor="#502D6D" stopOpacity="0.0" />
              </linearGradient>
            </defs>
            <path d="M 0 26 Q 15 28 30 14 T 60 16 T 85 8 T 100 4 L 100 30 L 0 30 Z" fill="url(#erpG)" />
            <path d="M 0 26 Q 15 28 30 14 T 60 16 T 85 8 T 100 4" fill="none" stroke="#502D6D" strokeWidth="2.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}
