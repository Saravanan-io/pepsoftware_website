"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Layout, Code2, Smartphone, Layers, Sparkles, ChevronLeft, ChevronRight } from "lucide-react";
import { registerGSAP } from "@/lib/gsap";
import type { ScrollTrigger as ScrollTriggerInstance } from "gsap/ScrollTrigger";

const services = [
  {
    id: "ui-ux-design",
    num: "01",
    icon: Layout,
    label: "UI/UX Design",
    desc: "User-centric designs that create meaningful and engaging experiences.",
    accent: "#C86A28",
    href: "/services/ui-ux-design",
    image: "/images/services/ui-ux-design.jpg",
    tag: "Design & Research",
  },
  {
    id: "website-development",
    num: "02",
    icon: Code2,
    label: "Website Development",
    desc: "High-performance websites built with modern web technologies.",
    accent: "#544643",
    href: "/services/website-design-development",
    image: "/images/services/website-development.jpg",
    tag: "Web Architecture",
  },
  {
    id: "mobile-app",
    num: "03",
    icon: Smartphone,
    label: "Mobile App Development",
    desc: "Feature-rich mobile apps for both Android and iOS platforms.",
    accent: "#C86A28",
    href: "/services/mobile-app-design-development",
    image: "/images/services/mobile-app-development.jpg",
    tag: "iOS & Android",
  },
  {
    id: "ar-vr",
    num: "04",
    icon: Layers,
    label: "AR/VR Design",
    desc: "Immersive augmented and VR experiences that bring ideas to life with whole new realities.",
    accent: "#544643",
    href: "/services/graphic-design",
    image: "/images/services/ar-vr-design.jpg",
    tag: "Spatial Computing",
  },
];

export function ServicesGrid() {
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
    
    // Spacing dynamically scaled to viewport
    const spacing = isMobile
      ? Math.min(vw * 0.72, 280)
      : isTablet
      ? Math.min(vw * 0.35, 300)
      : Math.min(330, Math.max(270, vw * 0.23));

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
          // Progress 0.0 to 0.82 smoothly navigates cards 0 through 3 (N-1)
          // Progress 0.82 to 1.0 smoothly glides last card out to seamlessly transition to next section
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

    const handleResize = () => {
      applyCardPositions(activeIndexRef.current, window.innerWidth);
      ScrollTrigger.refresh(true);
    };

    window.addEventListener("resize", handleResize, { passive: true });

    return () => {
      window.removeEventListener("resize", handleResize);
      tl.scrollTrigger?.kill();
      tl.kill();
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
    <section
      ref={sectionRef}
      id="services"
      className="min-h-screen flex flex-col justify-between py-4 sm:py-6 lg:py-8 bg-[#F7F8F8] relative overflow-hidden select-none"
    >
      {/* Background delicate dot pattern */}
      <div className="absolute inset-0 bg-dot-light opacity-30 pointer-events-none" />

      {/* Subtle warm ambient lighting glow behind 3D tunnel */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[#C86A28]/6 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex-1 flex flex-col justify-between">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-2 sm:mb-4 gap-4">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-1.5">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E9E8E6] border border-[#C6C2C1] text-[11px] font-bold uppercase tracking-wider text-[#C86A28]">
                <Sparkles className="w-3 h-3" />
                <span>OUR SERVICES</span>
              </span>

              {/* Live Card Counter */}
              <div className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#EFF0EF] border border-[#C6C2C1]/80">
                <span className="text-[11px] font-mono font-bold text-[#C86A28]">
                  0{activeIdx + 1}
                </span>
                <span className="text-[11px] font-mono text-[#544643]">/ 04</span>
                <span className="text-[11px] font-semibold text-[#151515] ml-1 hidden sm:inline">
                  • {services[activeIdx]?.label}
                </span>
              </div>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#151515] leading-tight tracking-tight">
              Digital solutions for a smarter{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#544643] to-[#C86A28]">
                tomorrow.
              </span>
            </h2>
            <p className="mt-1 text-xs sm:text-sm text-[#544643] leading-relaxed">
              From design to development, we deliver end-to-end digital solutions tailored to your business needs.
            </p>
          </div>

          {/* Right Action Bar & Navigation Arrows */}
          <div className="flex items-center gap-3 shrink-0">
            <div className="flex items-center gap-2 mr-2">
              <button
                type="button"
                onClick={handlePrev}
                aria-label="Previous service"
                className="w-9 h-9 rounded-full bg-[#EFF0EF] border border-[#C6C2C1] hover:border-[#151515] flex items-center justify-center text-[#151515] hover:bg-[#151515] hover:text-[#F7F8F8] transition-colors duration-200 shadow-xs cursor-pointer"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={handleNext}
                aria-label="Next service"
                className="w-9 h-9 rounded-full bg-[#EFF0EF] border border-[#C6C2C1] hover:border-[#151515] flex items-center justify-center text-[#151515] hover:bg-[#151515] hover:text-[#F7F8F8] transition-colors duration-200 shadow-xs cursor-pointer"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            <Link
              href="/services"
              className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#151515] text-[#F7F8F8] text-xs sm:text-sm font-semibold hover:bg-[#544643] shadow-md shadow-[#151515]/10 transition-all shrink-0"
            >
              <span>Explore All Services</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#C86A28] transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>

        {/* ── 3D Perspective Carousel Stage ────────────────────────────── */}
        <div
          className="relative w-full h-[390px] sm:h-[420px] flex items-center justify-center overflow-visible my-auto"
          style={{
            perspective: "1200px",
            perspectiveOrigin: "50% 50%",
            transformStyle: "preserve-3d",
          }}
        >
          {/* Subtle 3D floor plane grid glow */}
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-[85%] max-w-4xl h-10 bg-radial from-[#C86A28]/10 via-[#151515]/5 to-transparent blur-xl pointer-events-none rounded-full" />

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
                className={`absolute top-1/2 left-1/2 w-[280px] sm:w-[320px] -translate-x-1/2 -translate-y-1/2 will-change-transform ${
                  isCenter ? "cursor-default" : "cursor-pointer"
                }`}
                style={{
                  transformStyle: "preserve-3d",
                }}
              >
                <div
                  className={`group relative flex flex-col p-4 sm:p-5 rounded-[24px] bg-[#EFF0EF] border transition-[border-color,background-color] duration-200 overflow-hidden ${
                    isCenter
                      ? "border-[#C86A28] ring-1 ring-[#C86A28]/40 shadow-xl bg-[#FFFFFF]"
                      : "border-[#C6C2C1] shadow-md bg-[#EFF0EF]"
                  }`}
                >
                  {/* Image showcase window */}
                  <div className="relative w-full h-36 sm:h-40 rounded-xl overflow-hidden mb-3 bg-[#E7EBEA] border border-[#C6C2C1]/60">
                    <Image
                      src={svc.image}
                      alt={svc.label}
                      fill
                      sizes="(max-width: 768px) 280px, 320px"
                      className="object-cover object-center"
                      priority={idx === 0}
                    />

                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent pointer-events-none" />

                    {/* Card index pill */}
                    <div className="absolute bottom-2 left-2.5 px-2 py-0.5 rounded-md bg-[#151515]/75 backdrop-blur-md text-[9px] font-mono font-bold tracking-wider text-[#F7F8F8]">
                      {svc.num} • {svc.tag}
                    </div>

                    {/* Floating service icon */}
                    <div
                      className={`absolute top-2.5 right-2.5 w-9 h-9 rounded-lg backdrop-blur-md border flex items-center justify-center transition-colors duration-200 ${
                        isCenter
                          ? "bg-[#FFFFFF] border-[#C86A28]/60 text-[#C86A28] shadow-sm"
                          : "bg-[#F7F8F8]/90 border-[#C6C2C1]/80 text-[#544643]"
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Card Title */}
                  <h3
                    className={`text-lg sm:text-xl font-bold transition-colors mb-1 ${
                      isCenter ? "text-[#151515]" : "text-[#544643]"
                    }`}
                  >
                    {svc.label}
                  </h3>

                  {/* Card Description */}
                  <p className="text-xs sm:text-sm text-[#544643] leading-relaxed line-clamp-2 mb-3">
                    {svc.desc}
                  </p>

                  {/* Arrow CTA */}
                  <div className="pt-2.5 border-t border-[#C6C2C1]/60 flex items-center justify-between mt-auto">
                    <span className="text-xs font-semibold text-[#544643]">
                      Learn more
                    </span>
                    <Link
                      href={svc.href}
                      tabIndex={isCenter ? 0 : -1}
                      className={`w-9 h-9 rounded-full border flex items-center justify-center transition-colors duration-200 shadow-xs ${
                        isCenter
                          ? "bg-[#151515] text-[#F7F8F8] border-[#151515] hover:bg-[#C86A28] hover:border-[#C86A28]"
                          : "bg-[#E9E8E6] text-[#544643] border-[#C6C2C1] hover:bg-[#151515] hover:text-[#F7F8F8]"
                      }`}
                      aria-label={`Learn more about ${svc.label}`}
                    >
                      <ArrowRight className="w-3.5 h-3.5 text-[#C86A28] group-hover:text-[#F7F8F8]" />
                    </Link>
                  </div>
                </div>

                {/* 3D Floor Shadow */}
                <div
                  className={`mx-auto h-3 rounded-full blur-md transition-opacity duration-300 pointer-events-none ${
                    isCenter ? "w-4/5 bg-[#151515]/20 opacity-100" : "w-3/5 bg-[#151515]/10 opacity-40"
                  }`}
                />
              </div>
            );
          })}
        </div>

        {/* ── Bottom Interactive Pagination Bar ────────────────────────── */}
        <div className="flex flex-col sm:flex-row items-center justify-between pt-2 sm:pt-3 border-t border-[#C6C2C1]/40 gap-3">
          {/* Scroll progress instruction */}
          <div className="flex items-center gap-2 text-xs text-[#544643] font-medium">
            <span className="w-2 h-2 rounded-full bg-[#C86A28] animate-pulse" />
            <span>Scroll vertically to traverse 3D cards</span>
          </div>

          {/* Clickable Card Selector Pills */}
          <div className="flex items-center gap-2">
            {services.map((svc, i) => {
              const isSelected = activeIdx === i;
              return (
                <button
                  key={svc.id}
                  type="button"
                  onClick={() => scrollToCard(i)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all duration-300 flex items-center gap-1.5 cursor-pointer ${
                    isSelected
                      ? "bg-[#151515] text-[#F7F8F8] shadow-sm shadow-[#151515]/20"
                      : "bg-[#EFF0EF] text-[#544643] border border-[#C6C2C1] hover:border-[#151515] hover:text-[#151515]"
                  }`}
                >
                  <span
                    className={`w-1.5 h-1.5 rounded-full ${
                      isSelected ? "bg-[#C86A28]" : "bg-[#C6C2C1]"
                    }`}
                  />
                  <span>0{i + 1}</span>
                  <span className="hidden md:inline font-normal opacity-85">
                    {svc.label}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
