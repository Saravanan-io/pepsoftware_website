"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Layout, Code2, Smartphone, Layers, ChevronLeft, ChevronRight } from "lucide-react";
import { registerGSAP } from "@/lib/gsap";
import type { ScrollTrigger as ScrollTriggerInstance } from "gsap/ScrollTrigger";
import { WordReveal, ParagraphReveal } from "../shared/WordReveal";

const services = [
  {
    id: "ui-ux-design",
    num: "01",
    icon: Layout,
    label: "UI/UX Design",
    desc: "Beautiful Interfaces. Meaningful Experiences. User-centered products crafted to elevate brands and maximize engagement.",
    accent: "#502D6D", // PEP Royal Purple
    href: "/services/ui-ux-design",
    image: "/images/services/ui-ux-design-real.jpg",
    tag: "Design & Research",
  },
  {
    id: "website-development",
    num: "02",
    icon: Code2,
    label: "Website Development",
    desc: "Inspired Design. Intelligent Development. Responsive, lightning-fast web solutions that perform seamlessly across all devices.",
    accent: "#68358F", // Vibrant Violet
    href: "/services/website-design-development",
    image: "/images/services/website-development-real.jpg",
    tag: "Web Architecture",
  },
  {
    id: "mobile-app",
    num: "03",
    icon: Smartphone,
    label: "Mobile App Development",
    desc: "Design with Purpose. Develop with Precision. Deliver with Impact. High-performance native and cross-platform apps.",
    accent: "#502D6D", // PEP Royal Purple
    href: "/services/mobile-app-design-development",
    image: "/images/services/mobile-app-development-real.jpg",
    tag: "iOS & Android",
  },
  {
    id: "ar-vr",
    num: "04",
    icon: Layers,
    label: "AR/VR Design",
    desc: "Captivating Visuals. Immersive Realities. Boundary-pushing 3D modeling, interactive WebAR, and spatial experiences.",
    accent: "#7C3AED", // Royal Purple Accent
    href: "/services/graphic-design",
    image: "/images/services/ar-vr-design-real.jpg",
    tag: "Spatial Computing",
  },
];

export function ServicesGrid() {
  const containerRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const scrollTriggerRef = useRef<ScrollTriggerInstance | null>(null);
  const activeIndexRef = useRef<number>(0);
  const [activeIdx, setActiveIdx] = useState<number>(0);

  // Pure mathematical 3D position calculation (Kanavu Illam style):
  // Center card: translate3d(0, 0, 75px) rotateY(0deg) scale(1)
  // Left cards:  translate3d(-spacing, 12px, 0) rotateY(8deg) scale(0.85)
  // Right cards: translate3d(spacing, 12px, 0) rotateY(-8deg) scale(0.85)
  // Linear tracking along horizontal 3D track (NO modulo jumping or teleporting)
  const applyCardPositions = useCallback((virtualIdx: number, vw: number) => {
    const isMobile = vw < 768;
    const isTablet = vw >= 768 && vw < 1024;
    
    // Spacing dynamically scaled to viewport for larger cards
    const spacing = isMobile
      ? Math.min(vw * 0.78, 310)
      : isTablet
      ? Math.min(vw * 0.40, 360)
      : Math.min(390, Math.max(320, vw * 0.27));

    services.forEach((_, i) => {
      const el = cardRefs.current[i];
      if (!el) return;

      // Pure linear distance along horizontal 3D track
      const diff = i - virtualIdx;
      const absDiff = Math.abs(diff);
      const clampedD = Math.min(absDiff, 2.5);
      const sign = Math.sign(diff);

      const x = diff * spacing;
      const y = clampedD * (isMobile ? 10 : 14);
      const z = 75 - clampedD * (isMobile ? 50 : 65);
      const rotateY = -sign * Math.min(absDiff, 1.8) * (isMobile ? 6.5 : 8.5);
      const scale = Math.max(0.66, 1 - clampedD * 0.15);
      const opacity = Math.max(0, 1 - clampedD * 0.44);
      const zIndex = Math.round(50 - clampedD * 15);

      // Direct GPU transform update without CSS transition fighting
      el.style.transform = `translate3d(${x}px, ${y}px, ${z}px) rotateY(${rotateY}deg) scale(${scale})`;
      el.style.opacity = String(opacity);
      el.style.zIndex = String(zIndex);
      el.style.pointerEvents = absDiff < 0.6 ? "auto" : "none";
    });
  }, []);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const { gsap, ScrollTrigger } = registerGSAP();
    const N = services.length;

    // Initial positioning
    applyCardPositions(0, window.innerWidth);

    const ctx = gsap.context(() => {
      const PIN_SCROLL = Math.max(window.innerHeight * 2.0, 1800);

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: `+=${PIN_SCROLL}`,
          pin: true,
          pinSpacing: true,
          scrub: 0.15, // Responsive 60fps tracking without Lenis delay
          anticipatePin: 1,
          onUpdate: (self) => {
            const p = self.progress;
            let virtual = (p / 0.82) * (N - 1);
            if (p > 0.82) {
              const exitP = (p - 0.82) / 0.18;
              virtual = (N - 1) + exitP * 0.9;
            }

            applyCardPositions(virtual, window.innerWidth);

            const closest = Math.min(N - 1, Math.max(0, Math.round(virtual)));
            if (closest !== activeIndexRef.current) {
              activeIndexRef.current = closest;
              setActiveIdx(closest);
            }
          },
        },
      });

      scrollTriggerRef.current = tl.scrollTrigger ?? null;
    }, containerRef);

    const handleResize = () => {
      applyCardPositions(activeIndexRef.current, window.innerWidth);
      ScrollTrigger.refresh(true);
    };

    window.addEventListener("resize", handleResize, { passive: true });

    return () => {
      window.removeEventListener("resize", handleResize);
      scrollTriggerRef.current = null;
      ctx.revert();
    };
  }, [applyCardPositions]);

  // Navigate to specific card index via smooth scroll
  const scrollToCard = (targetIdx: number) => {
    const st = scrollTriggerRef.current;
    const N = services.length;
    const clampedIdx = Math.max(0, Math.min(N - 1, targetIdx));

    if (st) {
      const targetProgress = (clampedIdx / (N - 1)) * 0.82;
      const targetScroll = st.start + targetProgress * (st.end - st.start);
      window.scrollTo({
        top: targetScroll,
        behavior: "smooth",
      });
    } else {
      setActiveIdx(clampedIdx);
      applyCardPositions(clampedIdx, window.innerWidth);
    }
  };

  const handlePrev = () => {
    const prev = (activeIdx - 1 + services.length) % services.length;
    scrollToCard(prev);
  };

  const handleNext = () => {
    const next = (activeIdx + 1) % services.length;
    scrollToCard(next);
  };

  return (
    <div ref={containerRef} className="w-full relative bg-[#F7F8F8]">
      <section
        ref={sectionRef}
        id="services"
        className="min-h-screen h-screen flex flex-col justify-between bg-[#F7F8F8] select-none overflow-hidden"
      >
        {/* Top band showing previous page color (#F7F8F8) */}
        <div className="w-full h-16 sm:h-20 lg:h-24 shrink-0 bg-[#F7F8F8]" />

        {/* Decreased-height Dark Purple Section with Cosmic Atmosphere */}
        <div className="w-full flex-1 flex flex-col justify-center bg-[#0B0217] relative overflow-hidden py-3 sm:py-4 lg:py-5 border-y border-[#3A145E]/40 shadow-sm">
          {/* Pure Deep Dark Purple Cosmic Ambient Nebulae */}
          <div
            className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_40%,rgba(104,53,143,0.55),transparent_65%)] pointer-events-none"
            style={{ animation: "cosmicPulse 9s ease-in-out infinite" }}
          />
          <div
            className="absolute inset-0 bg-[radial-gradient(circle_at_20%_60%,rgba(80,45,109,0.55),transparent_55%)] pointer-events-none"
            style={{ animation: "cosmicPulse 12s ease-in-out infinite reverse" }}
          />
          <div
            className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_100%,rgba(58,20,94,0.65),transparent_60%)] pointer-events-none"
            style={{ animation: "cosmicPulse 15s ease-in-out infinite" }}
          />
          <div
            className="absolute inset-0 bg-[radial-gradient(circle_at_50%_15%,rgba(124,58,237,0.22),transparent_55%)] pointer-events-none"
            style={{ animation: "cosmicPulse 11s ease-in-out infinite reverse" }}
          />
          <div className="absolute inset-0 bg-dot-light opacity-10 pointer-events-none" />

          {/* Animated Floating Pure Dark Purple Glow Orbs */}
          <div
            className="absolute -top-24 -left-20 w-[600px] h-[600px] bg-[#502D6D]/45 rounded-full blur-[140px] pointer-events-none"
            style={{ animation: "orbFloat1 10s ease-in-out infinite" }}
          />
          <div
            className="absolute top-1/2 -right-24 w-[550px] h-[550px] bg-[#68358F]/40 rounded-full blur-[130px] pointer-events-none"
            style={{ animation: "orbFloat2 12s ease-in-out infinite" }}
          />
          <div
            className="absolute -bottom-24 left-1/3 w-[650px] h-[650px] bg-[#3D1466]/55 rounded-full blur-[150px] pointer-events-none"
            style={{ animation: "orbFloat1 14s ease-in-out infinite reverse" }}
          />
          <div
            className="absolute top-1/4 left-1/4 w-[480px] h-[480px] bg-[#7C3AED]/20 rounded-full blur-[130px] pointer-events-none"
            style={{ animation: "orbFloat2 16s ease-in-out infinite" }}
          />

          {/* Subtle Lavender & Purple Stardust Sparkles */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {[
              { top: "15%", left: "12%", size: 3, delay: "0s", duration: "3s" },
              { top: "25%", left: "85%", size: 2.5, delay: "1s", duration: "4s" },
              { top: "70%", left: "8%", size: 3.5, delay: "0.5s", duration: "3.5s" },
              { top: "80%", left: "90%", size: 2.5, delay: "1.5s", duration: "4.5s" },
              { top: "45%", left: "95%", size: 3, delay: "2s", duration: "3s" },
              { top: "10%", left: "60%", size: 2, delay: "0.8s", duration: "4s" },
            ].map((star, i) => (
              <span
                key={i}
                className="absolute rounded-full bg-[#D4C7EC]/70 shadow-[0_0_8px_rgba(168,85,247,0.7)]"
                style={{
                  top: star.top,
                  left: star.left,
                  width: star.size,
                  height: star.size,
                  animation: `twinkleStar ${star.duration} ease-in-out infinite ${star.delay}`,
                }}
              />
            ))}
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex-1 flex flex-col justify-center gap-2 sm:gap-3">
            {/* Section Header */}
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-1.5 sm:mb-2 gap-3">
            <div className="max-w-2xl">
              <div className="flex items-center gap-3 mb-2">
                <div className="inline-flex items-center gap-2">
                  <span className="w-4 h-[2px] rounded-full bg-gradient-to-r from-[#D4C7EC] to-[#A855F7]" />
                  <span className="font-syne text-xs sm:text-sm font-extrabold uppercase tracking-[0.24em] bg-gradient-to-r from-[#FFFFFF] via-[#E9D5FF] to-[#C084FC] bg-clip-text text-transparent">
                    OUR SERVICES
                  </span>
                </div>

                {/* Live Card Counter */}
                <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.08] backdrop-blur-md border border-white/15">
                  <span className="text-[11px] font-mono font-bold text-[#E9D5FF]">
                    0{activeIdx + 1}
                  </span>
                  <span className="text-[11px] font-mono text-[#D4C7EC]/70">/ 04</span>
                  <span className="text-[11px] font-semibold text-white ml-1 hidden sm:inline">
                    • {services[activeIdx]?.label}
                  </span>
                </div>
              </div>

              <WordReveal
                as="h2"
                text="Digital solutions for a smarter tomorrow."
                gradientWords="tomorrow."
                gradientClassName="text-transparent bg-clip-text bg-gradient-to-r from-[#FFFFFF] via-[#E9D5FF] to-[#C084FC]"
                className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white leading-tight tracking-tight"
              />
              <ParagraphReveal
                text="From design to development, we deliver end-to-end digital solutions tailored to your business needs."
                delay={0.12}
                className="mt-1 text-xs sm:text-sm text-[#D4C7EC] leading-relaxed font-normal"
              />
            </div>

            {/* Right Action Bar & Navigation Arrows */}
            <div className="flex items-center gap-3 shrink-0">
              <div className="flex items-center gap-2 mr-2">
                <button
                  type="button"
                  onClick={handlePrev}
                  aria-label="Previous service"
                  className="w-9 h-9 rounded-full bg-white/10 backdrop-blur-md border border-white/20 hover:border-[#A855F7] flex items-center justify-center text-white hover:bg-[#68358F] hover:text-white transition-all duration-300 shadow-sm cursor-pointer"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={handleNext}
                  aria-label="Next service"
                  className="w-9 h-9 rounded-full bg-white/10 backdrop-blur-md border border-white/20 hover:border-[#A855F7] flex items-center justify-center text-white hover:bg-[#68358F] hover:text-white transition-all duration-300 shadow-sm cursor-pointer"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>

              <Link
                href="/services"
                className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-[#502D6D] to-[#68358F] hover:from-[#68358F] hover:to-[#7C3AED] text-white text-xs sm:text-sm font-bold border border-white/15 hover:border-transparent shadow-lg shadow-black/30 transition-all shrink-0"
              >
                <span>Explore All Services</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#D4C7EC] group-hover:text-white transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>

          {/* ── 3D Perspective Carousel Stage ────────────────────────────── */}
        <div
          className="relative w-full h-[440px] sm:h-[465px] lg:h-[485px] flex items-center justify-center overflow-visible"
          style={{
            perspective: "1200px",
            perspectiveOrigin: "50% 50%",
            transformStyle: "preserve-3d",
          }}
        >
          {/* Pure Dark Purple 3D floor plane glow */}
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-[90%] max-w-5xl h-20 bg-radial from-[#68358F]/40 via-[#502D6D]/25 to-transparent blur-2xl pointer-events-none rounded-full" />

          {services.map((svc, idx) => {
            const Icon = svc.icon;
            const isCenter = activeIdx === idx;

            return (
              <div
                key={svc.id}
                ref={(el) => {
                  cardRefs.current[idx] = el;
                }}
                onClick={() => {
                  if (!isCenter) scrollToCard(idx);
                }}
                className={`absolute top-1/2 left-1/2 w-[315px] sm:w-[355px] lg:w-[385px] -translate-x-1/2 -translate-y-1/2 will-change-transform ${
                  isCenter ? "cursor-default" : "cursor-pointer"
                }`}
                style={{
                  transformStyle: "preserve-3d",
                }}
              >
                <div
                  className={`group relative flex flex-col p-5 sm:p-6 rounded-[28px] transition-all duration-300 overflow-hidden ${
                    isCenter
                      ? "bg-gradient-to-b from-[#1C0A33]/92 via-[#140626]/95 to-[#0D021A]/98 backdrop-blur-2xl border border-[#A855F7]/50 ring-1 ring-white/20 shadow-[0_25px_60px_-10px_rgba(124,58,237,0.45),0_0_35px_rgba(168,85,247,0.25)]"
                      : "bg-gradient-to-b from-[#18082D]/75 via-[#110420]/80 to-[#0A0214]/85 backdrop-blur-xl border border-white/10 shadow-2xl"
                  }`}
                >
                  {/* Subtle top border light sheen */}
                  <div
                    className={`absolute top-0 inset-x-0 h-[1.5px] pointer-events-none transition-opacity duration-300 ${
                      isCenter
                        ? "bg-gradient-to-r from-transparent via-[#C084FC] to-transparent opacity-90"
                        : "bg-gradient-to-r from-transparent via-white/15 to-transparent opacity-40"
                    }`}
                  />

                  {/* Ambient inner soft glow for active card */}
                  {isCenter && (
                    <div className="absolute -top-14 -right-14 w-40 h-40 rounded-full bg-[#7C3AED]/25 blur-2xl pointer-events-none" />
                  )}

                  {/* Image showcase window */}
                  <div className="relative w-full h-44 sm:h-48 lg:h-52 rounded-2xl overflow-hidden mb-4 bg-[#0E031B] border border-white/10 group-hover:border-[#A855F7]/40 transition-colors">
                    <Image
                      src={svc.image}
                      alt={svc.label}
                      fill
                      sizes="(max-width: 768px) 315px, (max-width: 1024px) 355px, 385px"
                      className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                      priority={idx === 0}
                    />

                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0E031B]/90 via-black/20 to-transparent pointer-events-none" />

                    {/* Card index pill with glowing status dot */}
                    <div className="absolute bottom-3 left-3 px-3 py-1 rounded-full bg-[#0B0217]/85 backdrop-blur-md border border-white/15 text-[11px] font-mono font-bold tracking-wider text-[#E9D5FF] flex items-center gap-1.5 shadow-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#C084FC] animate-pulse" />
                      <span>{svc.num}</span>
                      <span className="text-white/40">•</span>
                      <span>{svc.tag}</span>
                    </div>

                    {/* Floating service icon */}
                    <div
                      className={`absolute top-3 right-3 w-10 h-10 rounded-xl backdrop-blur-md border flex items-center justify-center transition-all duration-300 ${
                        isCenter
                          ? "bg-gradient-to-br from-[#7C3AED] to-[#502D6D] border-[#C084FC]/50 text-white shadow-[0_0_15px_rgba(168,85,247,0.5)]"
                          : "bg-white/10 border-white/15 text-[#D4C7EC]"
                      }`}
                    >
                      <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                    </div>
                  </div>

                  {/* Card Title */}
                  <h3
                    className={`text-xl sm:text-2xl font-extrabold tracking-tight mb-2 transition-colors ${
                      isCenter ? "text-white group-hover:text-[#E9D5FF]" : "text-white/85"
                    }`}
                  >
                    {svc.label}
                  </h3>

                  {/* Card Description */}
                  <p className="text-xs sm:text-sm text-[#D4C7EC]/85 leading-relaxed line-clamp-2 mb-4">
                    {svc.desc}
                  </p>

                  {/* Arrow CTA */}
                  <div className="pt-3.5 border-t border-white/10 flex items-center justify-between mt-auto">
                    <span
                      className={`text-xs sm:text-sm font-semibold tracking-wide transition-colors ${
                        isCenter ? "text-[#C084FC] group-hover:text-[#E9D5FF]" : "text-[#D4C7EC]/70"
                      }`}
                    >
                      Learn more
                    </span>
                    <Link
                      href={svc.href}
                      tabIndex={isCenter ? 0 : -1}
                      className={`w-10 h-10 rounded-full border flex items-center justify-center transition-all duration-300 ${
                        isCenter
                          ? "bg-gradient-to-r from-[#7C3AED] to-[#68358F] hover:from-[#A855F7] hover:to-[#7C3AED] text-white border-[#C084FC]/50 shadow-[0_0_16px_rgba(168,85,247,0.45)] group-hover:scale-105"
                          : "bg-white/10 border-white/15 text-[#D4C7EC] hover:bg-white/20 hover:text-white"
                      }`}
                      aria-label={`Learn more about ${svc.label}`}
                    >
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                    </Link>
                  </div>
                </div>

                {/* Pure Purple 3D Floor Shadow */}
                <div
                  className={`mx-auto h-4 rounded-full blur-xl transition-all duration-300 pointer-events-none ${
                    isCenter
                      ? "w-4/5 bg-gradient-to-r from-[#502D6D]/0 via-[#A855F7]/50 to-[#502D6D]/0 opacity-95"
                      : "w-3/5 bg-black/60 opacity-30"
                  }`}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>

        {/* Bottom band showing next page color (#F7F8F8) */}
        <div className="w-full h-8 sm:h-12 lg:h-14 shrink-0 bg-[#F7F8F8]" />

      {/* Embedded Ambient Animation Keyframes */}
      <style jsx>{`
        @keyframes orbFloat1 {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          50% {
            transform: translate(35px, -30px) scale(1.12);
          }
        }

        @keyframes orbFloat2 {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          50% {
            transform: translate(-40px, 25px) scale(1.15);
          }
        }

        @keyframes twinkleStar {
          0%, 100% {
            opacity: 0.2;
            transform: scale(0.8);
          }
          50% {
            opacity: 1;
            transform: scale(1.4);
          }
        }

        @keyframes cosmicPulse {
          0%, 100% {
            opacity: 0.5;
            transform: scale(1);
          }
          50% {
            opacity: 0.8;
            transform: scale(1.08);
          }
        }
      `}</style>
    </section>
  </div>
);
}
