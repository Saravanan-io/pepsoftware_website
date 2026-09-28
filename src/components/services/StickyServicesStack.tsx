"use client";

import { useRef, useState, useEffect } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import {
  Code2,
  Layout,
  Smartphone,
  Palette,
  Wrench,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import { SERVICES_DATA } from "@/data/services";
import { ServiceItem } from "@/types";

const serviceIcons: Record<string, typeof Code2> = {
  "website-design-development": Code2,
  "ui-ux-design": Layout,
  "mobile-app-design-development": Smartphone,
  "graphic-design": Palette,
};

const serviceShortLabels: Record<string, string> = {
  "ui-ux-design": "UI/UX Design",
  "website-design-development": "Web Development",
  "mobile-app-design-development": "Mobile Apps",
  "graphic-design": "Graphic & AR/VR",
};

interface DeliverableCardItem {
  number: string;
  title: string;
  description: string;
  image: string;
}

interface ServiceProcessData {
  badgeText: string;
  titlePrefix: string;
  titleHighlight: string;
  titleSuffix: string;
  subtitle: string;
  deliverables: DeliverableCardItem[];
}

const serviceProcesses: Record<string, ServiceProcessData> = {
  "ui-ux-design": {
    badgeText: "WHAT WE DELIVER",
    titlePrefix: "Our ",
    titleHighlight: "UI/UX Design",
    titleSuffix: " Process",
    subtitle:
      "From strategy to stunning interfaces, we craft user experiences that are intuitive, engaging, and conversion-driven.",
    deliverables: [
      {
        number: "01",
        title: "User Research & Insights",
        description:
          "We explore user behavior, pain points, and goals through surveys, interviews, and competitor analysis to design meaningful experiences.",
        image: "/images/services/uiux-step-1-3d.png",
      },
      {
        number: "02",
        title: "UX Strategy & Wireframing",
        description:
          "From journey mapping to wireframing, we build intuitive flows and logical structures that form the backbone of usable products.",
        image: "/images/services/uiux-step-2-3d.png",
      },
      {
        number: "03",
        title: "UI Design & Visual Identity",
        description:
          "We design clean, responsive, and visually stunning interfaces that reflect your brand with pixel-perfect precision.",
        image: "/images/services/uiux-step-3-3d.png",
      },
      {
        number: "04",
        title: "Prototyping & Interaction Design",
        description:
          "Interactive prototypes and smooth micro-interactions bring your product to life and offer early user feedback before development.",
        image: "/images/services/uiux-step-4-3d.png",
      },
    ],
  },
  "website-design-development": {
    badgeText: "WHAT WE DELIVER",
    titlePrefix: "Our ",
    titleHighlight: "Web Development",
    titleSuffix: " Process",
    subtitle:
      "From high-performance frontend architecture to custom CMS and eCommerce, we engineer lightning-fast digital solutions.",
    deliverables: [
      {
        number: "01",
        title: "Custom Website Design",
        description:
          "Tailored website designs blending visual brand identity with user-centered responsive layouts and high conversion flows.",
        image: "/images/services/uiux-step-3-3d.png",
      },
      {
        number: "02",
        title: "Front-end Development",
        description:
          "Fast, clean, component-driven code using Next.js, React, and modern CSS—delivering pixel-perfect performance across devices.",
        image: "/images/services/website-development-3d.png",
      },
      {
        number: "03",
        title: "Custom WordPress & CMS",
        description:
          "Empowering clients with flexible, secure CMS architectures for effortless content publishing and administration.",
        image: "/images/services/uiux-step-2-3d.png",
      },
      {
        number: "04",
        title: "E-Commerce & Storefronts",
        description:
          "Scalable online stores built on Shopify and WooCommerce with frictionless checkouts and mobile commerce optimization.",
        image: "/images/services/uiux-step-4-3d.png",
      },
    ],
  },
  "mobile-app-design-development": {
    badgeText: "WHAT WE DELIVER",
    titlePrefix: "Our ",
    titleHighlight: "Mobile App",
    titleSuffix: " Process",
    subtitle:
      "Native iOS, Android, and cross-platform mobile apps engineered for speed, touch ergonomics, and store-ready stability.",
    deliverables: [
      {
        number: "01",
        title: "iOS Native Development",
        description:
          "Engineered with Swift and SwiftUI for pristine Apple ecosystem performance, haptics, and App Store compliance.",
        image: "/images/services/mobile-app-development-3d.png",
      },
      {
        number: "02",
        title: "Android App Development",
        description:
          "Built with Kotlin for maximum device compatibility, robust background processing, and modern Material UI.",
        image: "/images/services/uiux-step-4-3d.png",
      },
      {
        number: "03",
        title: "Cross-Platform Engineering",
        description:
          "High-velocity Flutter & React Native codebases that deliver native performance across both iOS and Android simultaneously.",
        image: "/images/services/uiux-step-3-3d.png",
      },
      {
        number: "04",
        title: "Touch UX & Performance",
        description:
          "Fluid micro-interactions, gesture navigation, offline-first data persistence, and battery-friendly background sync.",
        image: "/images/services/uiux-step-1-3d.png",
      },
    ],
  },
  "graphic-design": {
    badgeText: "WHAT WE DELIVER",
    titlePrefix: "Our ",
    titleHighlight: "Graphic & Spatial",
    titleSuffix: " Process",
    subtitle:
      "Forging iconic brand identities, bespoke 3D motion graphics, and boundary-pushing Augmented & Virtual Reality spatial experiences.",
    deliverables: [
      {
        number: "01",
        title: "Brand Identity Design",
        description:
          "Logos, comprehensive brand styleguides, custom color systems, and typographic hierarchies that make your business unforgettable.",
        image: "/images/services/graphic-design-3d.png",
      },
      {
        number: "02",
        title: "3D Modeling & Motion",
        description:
          "Photorealistic 3D product renders, WebGL interactive assets, and motion graphics that elevate digital experiences.",
        image: "/images/services/uiux-step-3-3d.png",
      },
      {
        number: "03",
        title: "Augmented Reality (AR)",
        description:
          "Interactive WebAR filters and immersive spatial brand engagements that wow customers on mobile without apps.",
        image: "/images/services/uiux-step-4-3d.png",
      },
      {
        number: "04",
        title: "Marketing & Print Collateral",
        description:
          "From high-conversion digital ad creatives to packaging and trade show collateral, crafted with vector precision.",
        image: "/images/services/uiux-step-2-3d.png",
      },
    ],
  },
};

interface CardProps {
  service: ServiceItem;
  index: number;
  total: number;
  scrollYProgress: MotionValue<number>;
}

function StackCard({ service, index, total, scrollYProgress }: CardProps) {
  const processData = serviceProcesses[service.id] || serviceProcesses["ui-ux-design"];

  // Stacking calculation:
  // Each card scales down slightly after user scrolls past to create a physical card stack
  const rangeStart = (index + 0.8) / total;
  const rangeEnd = Math.min(1, (index + 1.8) / total);
  const targetScale = 1 - (total - 1 - index) * 0.035;

  const scale = useTransform(
    scrollYProgress,
    [rangeStart, rangeEnd],
    [1, targetScale]
  );

  const opacity = useTransform(
    scrollYProgress,
    [rangeStart, rangeEnd],
    [1, index === total - 1 ? 1 : 0.92]
  );

  return (
    <div
      id={`service-${service.id}`}
      data-service-card
      className="sticky top-24 sm:top-28 w-full mb-20 sm:mb-28 lg:mb-36"
      style={{
        top: `calc(90px + ${index * 16}px)`,
        zIndex: 10 + index,
      }}
    >
      <motion.div
        style={{
          scale,
          opacity,
          transformOrigin: "top center",
          willChange: "transform, opacity",
        }}
        className="w-full rounded-[32px] sm:rounded-[40px] bg-[#FFFFFF] border border-[#C6C2C1] shadow-[0_20px_50px_rgba(21,21,21,0.08),0_2px_8px_rgba(21,21,21,0.04)] hover:border-[#C86A28]/60 transition-all duration-300 overflow-hidden transform-gpu group/stack"
      >
        {/* Top Header Strip with Index & Domain Badge */}
        <div className="flex items-center justify-between px-6 sm:px-10 py-4 bg-[#EFF0EF]/80 border-b border-[#C6C2C1]/60">
          <div className="flex items-center gap-3">
            <span className="w-8 h-8 rounded-xl bg-[#151515] text-[#F7F8F8] font-mono text-xs font-black flex items-center justify-center shadow-xs">
              0{index + 1}
            </span>
            <span className="text-xs font-black uppercase tracking-wider text-[#C86A28] flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#C86A28] animate-pulse" />
              {service.badge}
            </span>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-[11px] font-mono font-semibold text-[#544643] hidden sm:inline">
              0{index + 1} / 0{total} Core Domains
            </span>
          </div>
        </div>

        {/* Card Main Body: Reference Showcase Style */}
        <div className="p-6 sm:p-10 lg:p-12 space-y-8">
          {/* Section Header */}
          <div className="text-center max-w-2xl mx-auto space-y-2.5">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E9E8E6] border border-[#C6C2C1] text-[10px] font-black uppercase tracking-[0.2em] text-[#C86A28]">
              <Sparkles className="w-3.5 h-3.5 text-[#C86A28]" />
              <span>{processData.badgeText}</span>
            </div>

            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#151515] tracking-tight">
              {processData.titlePrefix}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF7A1A] to-[#C86A28]">
                {processData.titleHighlight}
              </span>
              {processData.titleSuffix}
            </h3>

            <p className="text-xs sm:text-sm text-[#544643] leading-relaxed max-w-xl mx-auto">
              {processData.subtitle}
            </p>
          </div>

          {/* 2x2 Grid of Organic 3D Fluid Glass Cards matching uploaded reference */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {processData.deliverables.map((item) => (
              <Link
                key={item.number}
                href={`/services/${service.slug}`}
                className="relative group/card cursor-pointer block"
              >
                {/* Layer 1: Organic 3D Amber Backing Plate */}
                <div className="absolute inset-0 rounded-[32px] bg-gradient-to-br from-[#FF9248]/35 via-[#E0782F]/25 to-[#C86A28]/20 border border-[#FF8A3D]/40 translate-x-1.5 translate-y-1.5 group-hover/card:translate-x-2.5 group-hover/card:translate-y-2.5 group-hover/card:from-[#FF8A3D]/50 group-hover/card:to-[#C86A28]/35 transition-all duration-300 pointer-events-none" />

                {/* Floating Amber Metallic Glass Sphere Bead */}
                <div className="absolute -top-1.5 right-12 w-4 h-4 rounded-full bg-gradient-to-br from-[#FFB17A] via-[#FF7A1A] to-[#C86A28] shadow-md pointer-events-none z-20 group-hover/card:scale-110 group-hover/card:-translate-y-0.5 transition-transform duration-300" />

                {/* Layer 2: Main Glassmorphic Fluid Card Container */}
                <div className="relative z-10 p-6 sm:p-7 rounded-[28px] bg-white/94 backdrop-blur-xl border border-white/95 shadow-[0_12px_36px_rgba(0,0,0,0.06),0_2px_8px_rgba(200,106,40,0.05)] group-hover/card:shadow-[0_20px_48px_rgba(200,106,40,0.18)] group-hover/card:-translate-y-1 transition-all duration-300 flex flex-col sm:flex-row items-center justify-between gap-5 overflow-hidden min-h-[200px]">
                  {/* Left Column: Number, Title, Description, Arrow Button */}
                  <div className="flex-1 min-w-0 flex flex-col justify-between h-full space-y-3">
                    <div>
                      <span className="text-2xl sm:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#FF7A1A] to-[#C86A28] block leading-none">
                        {item.number}
                      </span>
                      <h4 className="text-base sm:text-lg font-black text-[#151515] tracking-tight leading-snug mt-1.5 group-hover/card:text-[#C86A28] transition-colors">
                        {item.title}
                      </h4>
                      <p className="text-xs text-[#544643] leading-relaxed mt-1.5 line-clamp-3">
                        {item.description}
                      </p>
                    </div>

                    {/* Circular Orange CTA Button */}
                    <div className="pt-1">
                      <div className="w-9 h-9 rounded-full bg-gradient-to-r from-[#FF7A1A] to-[#C86A28] text-white flex items-center justify-center shadow-md shadow-[#C86A28]/35 group-hover/card:scale-110 group-hover/card:shadow-lg transition-all duration-300 shrink-0">
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Realistic 3D Transparent Illustration */}
                  <div className="shrink-0 w-full sm:w-[190px] lg:w-[220px] flex items-center justify-center relative">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full max-h-[140px] sm:max-h-[170px] object-contain drop-shadow-[0_16px_28px_rgba(200,106,40,0.2)] transition-transform duration-500 ease-out group-hover/card:scale-108 group-hover/card:-translate-y-2 pointer-events-none select-none"
                      loading="lazy"
                    />
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Footer Bar: Tech Stack & Tools Chips + Explore Full Service CTA */}
          <div className="pt-4 border-t border-[#C6C2C1]/60 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            {/* Tools chips */}
            {service.tools && service.tools.length > 0 && (
              <div className="flex items-center gap-1.5 flex-wrap">
                <span className="text-[11px] font-bold text-[#544643] mr-1 flex items-center gap-1">
                  <Wrench className="w-3 h-3 text-[#C86A28]" />
                  Tech Stack:
                </span>
                {service.tools.slice(0, 6).map((tool) => (
                  <span
                    key={tool}
                    className="px-2.5 py-1 rounded-lg text-[11px] font-bold bg-[#EFF0EF] text-[#151515] border border-[#C6C2C1]"
                  >
                    {tool}
                  </span>
                ))}
                {service.tools.length > 6 && (
                  <span className="text-[10px] font-bold text-[#544643]">
                    +{service.tools.length - 6} more
                  </span>
                )}
              </div>
            )}

            {/* Explore Full Service CTA Button */}
            <Link
              href={`/services/${service.slug}`}
              className="group/btn inline-flex items-center justify-center gap-2.5 px-6 py-3 rounded-full bg-[#151515] hover:bg-[#C86A28] text-[#F7F8F8] hover:text-white text-xs font-extrabold transition-all duration-300 shadow-md shadow-[#151515]/10 hover:shadow-xl hover:gap-3 cursor-pointer shrink-0"
            >
              <span>Explore Full {service.title}</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#C86A28] group-hover/btn:text-white transition-colors" />
            </Link>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export function StickyServicesStack() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIdx, setActiveIdx] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Track active service tab index as user scrolls down the stack
  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (latest) => {
      const total = SERVICES_DATA.length;
      const idx = Math.min(total - 1, Math.max(0, Math.floor(latest * total * 1.05)));
      setActiveIdx((prev) => (prev !== idx ? idx : prev));
    });
    return () => unsubscribe();
  }, [scrollYProgress]);

  const scrollToService = (index: number) => {
    const service = SERVICES_DATA[index];
    if (!service) return;
    const el = document.getElementById(`service-${service.id}`);
    if (el) {
      const topOffset = el.getBoundingClientRect().top + window.scrollY - 130;
      window.scrollTo({ top: topOffset, behavior: "smooth" });
    }
  };

  return (
    <section ref={containerRef} className="relative py-12 lg:py-20 bg-[#F7F8F8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header Intro */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E9E8E6] border border-[#C6C2C1] text-xs font-bold uppercase tracking-wider text-[#C86A28] mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>CORE CAPABILITIES</span>
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#151515] tracking-tight mt-1">
            Explore Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#544643] to-[#C86A28]">
              Specialized Services
            </span>
          </h2>
          <p className="text-sm sm:text-base text-[#544643] mt-3 max-w-xl mx-auto leading-relaxed">
            Scroll to navigate through our 4 core domains—engineered for performance, craft, and scale.
          </p>
        </div>

        {/* Sticky Interactive Service Navigation Pill Bar */}
        <div className="sticky top-20 sm:top-24 z-30 mb-8 sm:mb-12 py-2.5 flex justify-center">
          <div className="inline-flex items-center gap-1.5 p-1.5 rounded-full bg-[#FFFFFF]/95 border border-[#C6C2C1] shadow-md shadow-[#151515]/5 max-w-full overflow-x-auto scrollbar-none">
            {SERVICES_DATA.map((service, i) => {
              const isActive = activeIdx === i;
              const shortLabel = serviceShortLabels[service.id] || service.badge;
              return (
                <button
                  key={service.id}
                  onClick={() => scrollToService(i)}
                  className={`relative px-4 py-2 rounded-full text-xs font-bold transition-all duration-300 flex items-center gap-2 shrink-0 cursor-pointer ${
                    isActive
                      ? "bg-[#151515] text-[#F7F8F8] shadow-xs"
                      : "text-[#544643] hover:text-[#151515] hover:bg-[#EFF0EF]"
                  }`}
                >
                  <span
                    className={`font-mono text-[10px] ${
                      isActive ? "text-[#C86A28]" : "text-[#544643]/70"
                    }`}
                  >
                    0{i + 1}
                  </span>
                  <span>{shortLabel}</span>
                  {isActive && (
                    <motion.div
                      layoutId="active-service-dot"
                      className="w-1.5 h-1.5 rounded-full bg-[#C86A28]"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* The 4 Sticky Stacking Cards */}
        <div className="relative pb-16 lg:pb-24">
          {SERVICES_DATA.map((service, index) => (
            <StackCard
              key={service.id}
              service={service}
              index={index}
              total={SERVICES_DATA.length}
              scrollYProgress={scrollYProgress}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
