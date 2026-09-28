"use client";

import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight, Rocket, Users, BarChart3,
  Smartphone, Globe, Layers, Code2,
} from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useIsomorphicLayoutEffect } from "@/hooks/useIsomorphicLayoutEffect";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}



/* ─── Cards config ────────────────────────────────────────────────────────── */
const CARDS = [
  {
    id: "mobile",
    num: "01",
    label: "Mobile App\nDevelopment",
    desc: "Native iOS & Android apps built for performance.",
    Icon: Smartphone,
    accent: "#C86A28",
    // Positioned right near the top-left curve of the glowing brain
    finalVX: -9.5,  // vw offset (near brain top-left)
    finalVY: -13.0, // vh offset
  },
  {
    id: "web",
    num: "02",
    label: "Website\nDevelopment",
    desc: "Modern, fast, conversion-focused platforms.",
    Icon: Globe,
    accent: "#544643",
    // Positioned right near the bottom-left of the brain / robotic hand
    finalVX: -10.0, // vw offset (near brain bottom-left)
    finalVY: 13.5,  // vh offset
  },
  {
    id: "uiux",
    num: "03",
    label: "UI/UX Design",
    desc: "Intuitive, high-converting digital interfaces.",
    Icon: Layers,
    accent: "#C86A28",
    // Positioned right near the top-right curve of the brain
    finalVX: 9.5,   // vw offset (near brain top-right)
    finalVY: -13.0, // vh offset
  },
  {
    id: "software",
    num: "04",
    label: "Software\nDevelopment",
    desc: "Scalable custom architecture & solutions.",
    Icon: Code2,
    accent: "#544643",
    // Positioned right near the bottom-right curve of the brain
    finalVX: 10.0,  // vw offset (near brain bottom-right)
    finalVY: 13.5,  // vh offset
  },
] as const;

/* ─── Glass Card ─────────────────────────────────────────────────────────── */
function GlassCard({
  card,
  elRef,
}: {
  card: (typeof CARDS)[number];
  elRef: React.RefObject<HTMLDivElement | null>;
}) {
  return (
    <div
      ref={elRef}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "clamp(170px, 13.5vw, 205px)", // Well-proportioned so all text reads clearly
        opacity: 0,
        pointerEvents: "none",
        willChange: "transform, opacity",
        zIndex: 40,
        transformOrigin: "center center",
      }}
    >
      <div
        className="group cursor-pointer transition-shadow duration-300 hover:shadow-xl"
        style={{
          background: "rgba(255, 255, 255, 0.92)",
          // backdrop-filter removed from GlassCard: it forces GPU repaint on EVERY scroll frame.
          // The card already has solid rgba bg so text is perfectly legible without blur.
          border: "1.2px solid rgba(255, 255, 255, 0.95)",
          borderRadius: "24px", // Modern round shape
          padding: "13px 15px 12px",
          boxShadow: `0 12px 28px -6px rgba(21, 21, 21, 0.08), 0 2px 8px -2px ${card.accent}14`,
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Top Floating Accent Pill */}
        <div
          style={{
            position: "absolute",
            top: 7,
            left: 15,
            width: 26,
            height: 2.5,
            borderRadius: "9999px",
            background: card.accent,
            boxShadow: `0 0 6px ${card.accent}90`,
          }}
        />

        {/* Diagonal Light Shimmer Reflection */}
        <div
          style={{
            position: "absolute",
            top: "-30%",
            left: "-50%",
            width: "60%",
            height: "160%",
            background:
              "linear-gradient(115deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.40) 50%, rgba(255,255,255,0) 100%)",
            transform: "skewX(-18deg)",
            pointerEvents: "none",
          }}
        />

        {/* Ambient Corner Glow */}
        <div
          style={{
            position: "absolute",
            top: -12,
            right: -12,
            width: 55,
            height: 55,
            borderRadius: "50%",
            background: `radial-gradient(circle, ${card.accent}15 0%, transparent 70%)`,
            pointerEvents: "none",
          }}
        />

        {/* Top Row: Circular Icon + Pill Status */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: 2, marginBottom: 8 }}>
          {/* Round Icon */}
          <div
            style={{
              width: 32,
              height: 32,
              borderRadius: "50%",
              background: `linear-gradient(135deg, ${card.accent}24, ${card.accent}10)`,
              border: `1.2px solid ${card.accent}45`,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: `0 2px 8px ${card.accent}18`,
            }}
          >
            <card.Icon size={15} color={card.accent} />
          </div>

          {/* Round Pill Index */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 4.5,
              padding: "2.5px 8px",
              borderRadius: "9999px",
              background: "rgba(21, 21, 21, 0.05)",
              border: "1px solid rgba(21, 21, 21, 0.08)",
            }}
          >
            <span
              style={{
                width: 4.5,
                height: 4.5,
                borderRadius: "50%",
                background: card.accent,
                boxShadow: `0 0 5px ${card.accent}`,
              }}
            />
            <span
              style={{
                fontSize: "9.5px",
                fontWeight: 800,
                color: "#151515",
                letterSpacing: "0.03em",
                fontFamily: "'Plus Jakarta Sans',sans-serif",
              }}
            >
              {card.num}
            </span>
          </div>
        </div>

        {/* Title — bold, clear, prominent */}
        <h3
          style={{
            fontSize: "clamp(12px, 0.94vw, 13.5px)",
            fontWeight: 800,
            color: "#0F0F0F",
            lineHeight: 1.25,
            letterSpacing: "-0.015em",
            margin: "0 0 5px",
            whiteSpace: "pre-line",
            fontFamily: "'Plus Jakarta Sans',sans-serif",
          }}
        >
          {card.label}
        </h3>

        {/* Description — clear font size & high contrast */}
        <p
          style={{
            fontSize: "clamp(9.5px, 0.74vw, 10.5px)",
            color: "#382F2D",
            margin: "0 0 8px",
            lineHeight: 1.45,
            fontFamily: "'Plus Jakarta Sans',sans-serif",
            fontWeight: 600,
          }}
        >
          {card.desc}
        </p>

        {/* Bottom CTA Row: Round Pill Action Button */}
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 5,
            padding: "3.5px 10px",
            borderRadius: "9999px",
            background: `linear-gradient(135deg, ${card.accent}16, ${card.accent}08)`,
            border: `1.2px solid ${card.accent}35`,
            fontSize: "clamp(9px, 0.70vw, 10px)",
            fontWeight: 700,
            color: card.accent,
            fontFamily: "'Plus Jakarta Sans',sans-serif",
          }}
        >
          <span>Learn more</span>
          <ArrowRight size={10} strokeWidth={2.2} />
        </div>
      </div>
    </div>
  );
}

/* ─── Neural canvas ─────────────────────────────────────────────────────── */
// Driven by GSAP ticker – shares the SINGLE existing RAF loop, no second RAF loop.
function NeuralCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const isVisibleRef = useRef<boolean>(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    // Pause rendering via IntersectionObserver – canvas draws only when visible
    const ioObserver = new IntersectionObserver(
      ([entry]) => { isVisibleRef.current = entry.isIntersecting; },
      { threshold: 0.05 }
    );
    ioObserver.observe(canvas);

    const BX = 0.41, BY = 0.38, BR = 0.155;
    // Reduced from 28 to 20 nodes – nearly identical visual, ~30% less draw calls
    const nodes = Array.from({ length: 20 }, (_, i) => {
      const a = (i / 20) * Math.PI * 2;
      const r = (0.2 + Math.random() * 0.8) * BR;
      return { x: BX + Math.cos(a) * r * 1.35, y: BY + Math.sin(a) * r * 0.92, pulse: Math.random() * Math.PI * 2, speed: 0.04 + Math.random() * 0.05 };
    });

    type C = { a: number; b: number; spark: number; active: boolean; speed: number; opacity: number };
    const conns: C[] = [];
    nodes.forEach((n, i) => nodes.forEach((m, j) => {
      if (j <= i) return;
      const d = Math.sqrt((n.x - m.x) ** 2 + (n.y - m.y) ** 2);
      if (d < 0.12) conns.push({ a: i, b: j, spark: Math.random(), active: Math.random() > 0.4, speed: 0.009 + Math.random() * 0.015, opacity: 0.15 + Math.random() * 0.55 });
    }));

    let t = 0;
    const resize = () => { if (canvas) { canvas.width = canvas.offsetWidth; canvas.height = canvas.offsetHeight; } };
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    // ── CRITICAL PERF FIX: drive draw() from GSAP's ticker, NOT a separate requestAnimationFrame.
    // Previously there were TWO competing RAF loops (GSAP ticker + NeuralCanvas own RAF),
    // which doubles CPU scheduling overhead and causes frame budget contention.
    const onTick = () => {
      if (!isVisibleRef.current || !canvas || !ctx) return;
      const W = canvas.width, H = canvas.height;
      ctx.clearRect(0, 0, W, H);
      t += 0.016;

      nodes.forEach(n => {
        n.pulse += n.speed;
        const alpha = 0.4 + 0.6 * Math.abs(Math.sin(n.pulse));
        const px = n.x * W, py = n.y * H, r = 2 + 2.2 * Math.abs(Math.sin(n.pulse));
        ctx.beginPath();
        ctx.arc(px, py, r * 2.2, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,140,40,${(alpha * 0.25).toFixed(2)})`;
        ctx.fill();
        ctx.beginPath();
        ctx.arc(px, py, r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,200,90,${(alpha * 0.9).toFixed(2)})`;
        ctx.fill();
      });

      conns.forEach(c => {
        if (!c.active) { if (Math.random() < 0.003) { c.active = true; c.spark = 0; } return; }
        c.spark += c.speed;
        if (c.spark > 1) { c.active = Math.random() > 0.35; c.spark = 0; }
        const n = nodes[c.a], m = nodes[c.b];
        const x1 = n.x * W, y1 = n.y * H, x2 = m.x * W, y2 = m.y * H;
        ctx.beginPath(); ctx.moveTo(x1, y1); ctx.lineTo(x2, y2);
        ctx.strokeStyle = `rgba(255,140,40,${(c.opacity * 0.18).toFixed(2)})`;
        ctx.lineWidth = 0.8; ctx.stroke();

        const sx = x1 + (x2 - x1) * c.spark, sy = y1 + (y2 - y1) * c.spark;
        const fa = 0.5 + 0.5 * Math.abs(Math.sin(t * 18 + c.a));
        ctx.beginPath();
        ctx.arc(sx, sy, 4.5, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,160,50,${(fa * 0.35).toFixed(2)})`;
        ctx.fill();
        ctx.beginPath();
        ctx.arc(sx, sy, 2, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,230,120,${(fa * 0.9).toFixed(2)})`;
        ctx.fill();
      });
    };

    // Register with GSAP ticker – shares the single existing RAF from useLenis
    gsap.ticker.add(onTick);

    return () => {
      gsap.ticker.remove(onTick);
      ioObserver.disconnect();
      ro.disconnect();
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none z-10" />;
}


/* ─── HeroContent ────────────────────────────────────────────────────────── */
export function HeroContent() {
  const sectionRef = useRef<HTMLDivElement>(null);

  // 4 individual DOM refs — one per card
  const c0 = useRef<HTMLDivElement>(null);
  const c1 = useRef<HTMLDivElement>(null);
  const c2 = useRef<HTMLDivElement>(null);
  const c3 = useRef<HTMLDivElement>(null);
  const cardDOMRefs = [c0, c1, c2, c3];

  /* ── GSAP ──────────────────────────────────────────────────────────────── */
  // Layout effect (pre-paint): the pinned ScrollTrigger + its pin-spacer must
  // exist BEFORE sibling sections (ServicesGrid) measure their own scroll
  // ranges, otherwise they measure against a layout without this 1800px
  // spacer and their pins hijack the hero's scroll range.
  useIsomorphicLayoutEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const els = cardDOMRefs.map(r => r.current).filter(Boolean) as HTMLDivElement[];
    if (els.length !== 4) return;

    // ── Cache viewport dimensions once – only refresh on resize
    let vw = window.innerWidth;
    let vh = window.innerHeight;

    let bx = vw * 0.67;
    let by = vh * 0.45;
    let rx = Math.max(vw * 0.10, 135);
    let ry = Math.max(vh * 0.14, 110);
    let finalXs = CARDS.map((c) => bx + (c.finalVX / 100) * vw);
    let finalYs = CARDS.map((c) => by + (c.finalVY / 100) * vh);

    const updateDimensions = () => {
      vw = window.innerWidth;
      vh = window.innerHeight;
      bx = vw >= 1024 ? vw * 0.67 : vw * 0.5;
      by = vw >= 1024 ? vh * 0.45 : vh * 0.48;
      rx = Math.max(vw * 0.10, 135);
      ry = Math.max(vh * 0.14, 110);
      finalXs = CARDS.map((c) => bx + (c.finalVX / 100) * vw);
      finalYs = CARDS.map((c) => by + (c.finalVY / 100) * vh);
    };
    updateDimensions();

    const getCardState = (
      i: number,
      p: number,
      curBx: number,
      curBy: number,
      curRx: number,
      curRy: number,
      fx: number,
      fy: number
    ) => {
      const startX = vw + 220 + i * 220;
      const entryX = curBx + curRx;

      const TARGET_SWEEPS = [
        -1.75 * Math.PI,
        -1.25 * Math.PI,
        -2.25 * Math.PI,
        -2.00 * Math.PI,
      ];
      const totalSweep = TARGET_SWEEPS[i];

      // Each card enters with slight stagger:
      // Enter: 0.00 -> 0.14 + stagger
      // Orbit: -> 0.42 + stagger
      // Rest: all cards settled from ~0.50 to 0.70
      // Exit: cards exit one by one to the right edge from 0.70 to 0.94
      const enterStart = i * 0.04;
      const enterEnd = enterStart + 0.14;
      const orbitEnd = enterEnd + 0.24;

      const exitStart = 0.70 + i * 0.045;
      const exitEnd = exitStart + 0.13;

      let x = startX;
      let y = curBy;
      let opacity = 0;
      let scale = 0.88;

      if (p < enterStart) {
        x = startX;
        y = curBy;
        opacity = 0;
        scale = 0.88;
      } else if (p <= enterEnd) {
        const t = (p - enterStart) / (enterEnd - enterStart);
        const ease = t * t * (3 - 2 * t);
        x = startX + (entryX - startX) * ease;
        y = curBy;
        opacity = Math.min(1, t * 2.5);
        scale = 0.88 + 0.08 * ease;
      } else if (p <= orbitEnd) {
        const t = (p - enterEnd) / (orbitEnd - enterEnd);
        const angle = t * totalSweep;
        x = curBx + Math.cos(angle) * curRx;
        y = curBy + Math.sin(angle) * curRy;
        opacity = 1;
        scale = 0.96;
      } else if (p <= exitStart) {
        const tSettle = Math.min(1, (p - orbitEnd) / 0.08);
        const easeSettle = 1 - Math.pow(1 - tSettle, 3);
        const exitAngle = totalSweep;
        const orbitEndX = curBx + Math.cos(exitAngle) * curRx;
        const orbitEndY = curBy + Math.sin(exitAngle) * curRy;
        x = orbitEndX + (fx - orbitEndX) * easeSettle;
        y = orbitEndY + (fy - orbitEndY) * easeSettle;
        opacity = 1;
        scale = 0.96 + 0.04 * easeSettle;
      } else if (p <= exitEnd) {
        // Exit one by one towards right edge of screen
        const t = (p - exitStart) / (exitEnd - exitStart);
        const ease = t * t * (3 - 2 * t);
        const exitTargetX = vw + 260 + i * 150;
        x = fx + (exitTargetX - fx) * ease;
        y = fy;
        opacity = Math.max(0, 1 - t * 1.5);
        scale = 1.0 - 0.12 * ease;
      } else {
        x = vw + 350;
        y = fy;
        opacity = 0;
        scale = 0.85;
      }

      return { x, y, opacity, scale };
    };

    const initCards = () => {
      els.forEach((el, i) => {
        el.style.transform = `translate3d(${vw + 220 + i * 220}px, ${by}px, 0) translate(-50%, -50%) scale(0.88)`;
        el.style.opacity = "0";
        el.style.pointerEvents = "none";
      });
    };
    initCards();

    const PIN_SCROLL = Math.max(vh * 1.8, 1400);

    const masterProxy = { p: 0 };
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top top",
        end: `+=${PIN_SCROLL}`,
        pin: true,
        pinSpacing: true,
        scrub: 0.15,
        anticipatePin: 1,
      },
    });

    tl.to(masterProxy, {
      p: 1,
      duration: 1,
      ease: "none",
      onUpdate: () => {
        const curP = masterProxy.p;
        els.forEach((el, i) => {
          if (!el) return;
          const state = getCardState(
            i, curP,
            bx, by, rx, ry, finalXs[i], finalYs[i]
          );
          el.style.transform = `translate3d(${state.x}px, ${state.y}px, 0) translate(-50%, -50%) scale(${state.scale})`;
          el.style.opacity = String(state.opacity);
          el.style.pointerEvents = state.opacity > 0.05 ? "auto" : "none";
        });
      },
    });

    // Ensure ScrollTrigger positions are calculated in strict top-down order
    ScrollTrigger.sort();
    ScrollTrigger.refresh();

    // Debounced resize – avoids thrashing layout when user drags the window
    let resizeTimer: ReturnType<typeof setTimeout>;
    const onResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        updateDimensions();
        initCards();
        ScrollTrigger.refresh(true);
      }, 150);
    };
    window.addEventListener("resize", onResize, { passive: true });

    return () => {
      clearTimeout(resizeTimer);
      tl.scrollTrigger?.kill();
      tl.kill();
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <>
      {/* ── Pinned hero section: min-height 100vh with natural responsiveness ─── */}
      <section
        ref={sectionRef}
        style={{
          position: "relative",
          width: "100%",
          minHeight: "100vh",
          overflow: "hidden",
          background: "#F7F8F8",
        }}
        className="flex flex-col justify-center pt-20 lg:pt-0"
      >
        {/* Background shapes */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden" style={{ transform: "translateZ(0)" }}>
          <div className="absolute -top-[10%] -right-[10%] w-[50%] h-[50%] bg-[#E7EBEA] blur-[120px] rounded-full" />
          <div className="absolute -bottom-[20%] -left-[10%] w-[60%] h-[60%] bg-[#EFF0EF] blur-[140px] rounded-full" />
          <div className="absolute -top-32 right-0 w-[40%] h-[600px] bg-gradient-to-br from-[#E7EBEA] via-[#EFF0EF] to-[#E9E8E6] opacity-80 blur-[4px] rounded-bl-full transform rotate-12 scale-150 origin-top-right mix-blend-multiply" />
          <div className="absolute bottom-0 right-0 w-full h-[60%] overflow-hidden">
            <div className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] border border-[#C6C2C1]/40 rounded-full" />
            <div className="absolute bottom-[-10%] right-[10%] w-[500px] h-[500px] bg-gradient-to-tr from-[#E9E8E6]/80 to-transparent rounded-full" />
          </div>
          <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] bg-gradient-to-tr from-[#C6C2C1]/20 to-transparent rounded-full blur-[2px]" />
          <div className="absolute top-[20%] right-[20%] w-32 h-32 opacity-30">
            <div className="w-full h-full" style={{ backgroundImage: "radial-gradient(#C6C2C1 2px, transparent 2px)", backgroundSize: "16px 16px" }} />
          </div>
          <div className="absolute bottom-[10%] left-[60%] w-32 h-20 opacity-30">
            <div className="w-full h-full" style={{ backgroundImage: "radial-gradient(#C6C2C1 2px, transparent 2px)", backgroundSize: "16px 16px" }} />
          </div>
          <svg className="absolute top-0 right-0 w-full h-full" viewBox="0 0 1000 1000" fill="none" preserveAspectRatio="xMidYMid slice">
            <path d="M750 250 Q 800 350 900 400" stroke="#C6C2C1" strokeWidth="1.5" />
            <circle cx="750" cy="250" r="5" fill="#C86A28" />
            <circle cx="900" cy="400" r="5" fill="#544643" />
            <path d="M150 900 Q 200 950 300 950" stroke="#C6C2C1" strokeWidth="1.5" />
            <circle cx="150" cy="900" r="5" fill="#C86A28" />
          </svg>
        </div>

        {/* Main content grid */}
        <div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 w-full h-full flex items-center">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center w-full">

            {/* ── Left: text ─────────────────────────────────────────────── */}
            <div className="lg:col-span-5 xl:col-span-5 space-y-8 relative z-20">
              <motion.h1
                initial={false}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-[46px] sm:text-[56px] lg:text-[62px] leading-[1.06] font-extrabold tracking-tight text-[#151515]"
              >
                Digital <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#544643] to-[#151515]">Excellence</span>
                <br />
                Starts{" "}
                <span className="text-[#C86A28] relative inline-block">
                  Here.
                  <svg className="absolute w-full h-4 -bottom-1 left-0 text-[#C86A28]" viewBox="0 0 100 10" preserveAspectRatio="none">
                    <path d="M0 5 Q 50 10 100 2" stroke="currentColor" strokeWidth="3" fill="none" strokeLinecap="round" />
                  </svg>
                </span>
              </motion.h1>

              <motion.p
                initial={false}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-[17px] sm:text-[19px] text-[#544643] font-medium leading-relaxed max-w-[560px]"
              >
                We build powerful web, mobile and software solutions that help businesses grow, automate and stay ahead in the digital world.
              </motion.p>

              <motion.div
                initial={false}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-wrap items-center gap-4 pt-2"
              >
                <Link href="/work" className="group inline-flex items-center gap-4 px-2 py-2 pr-6 rounded-full bg-[#151515] text-[#F7F8F8] hover:bg-[#544643] transition-colors shadow-lg shadow-[#151515]/10">
                  <span className="pl-6 text-[16px] font-semibold">Our Portfolio</span>
                  <div className="w-10 h-10 rounded-full bg-[#E9E8E6] flex items-center justify-center text-[#151515] group-hover:translate-x-1 transition-transform">
                    <ArrowRight className="w-5 h-5" />
                  </div>
                </Link>
                <Link href="/services" className="group inline-flex items-center gap-4 px-8 py-3 rounded-full bg-[#FFFFFF] border-[1.5px] border-[#C6C2C1] text-[#151515] hover:border-[#544643] transition-colors shadow-sm">
                  <span className="text-[16px] font-semibold">Explore Services</span>
                  <ArrowRight className="w-5 h-5 text-[#C86A28] group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>

              <motion.div
                initial={false}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex flex-wrap items-center gap-6 sm:gap-8 pt-6"
              >
                {[
                  { Icon: Rocket, label: "Innovative\nSolutions" },
                  { Icon: Users, label: "Client Focused\nApproach" },
                  { Icon: BarChart3, label: "Results\nDriven" },
                ].map(({ Icon, label }) => (
                  <div key={label} className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-[#E9E8E6] border border-[#C6C2C1] flex items-center justify-center text-[#C86A28] shadow-xs">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[13px] font-bold text-[#151515] leading-tight whitespace-pre-line">{label}</span>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* ── Right: brain image — stationary ────────────────────────── */}
            <div className="lg:col-span-7 xl:col-span-7 relative z-20 flex justify-center lg:justify-end items-center w-full">
              <motion.div
                initial={false}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="relative w-full max-w-[780px] xl:max-w-[880px] 2xl:max-w-[960px] select-none pointer-events-none overflow-visible"
              >
                <div className="absolute w-[85%] h-[70%] bg-gradient-to-tr from-[#E7EBEA]/60 via-[#EFF0EF]/40 to-[#C86A28]/8 rounded-full blur-3xl pointer-events-none -z-10" />
                <div className="relative w-full">
                  <div className="relative w-full">
                    <Image
                      src="/hero-brain-showcase.png"
                      alt="PEP Software – AI Brain on Robotic Hand"
                      width={1024}
                      height={576}
                      priority
                      className="w-full h-auto object-contain block"
                    />
                    <NeuralCanvas />
                  </div>
                </div>
              </motion.div>
            </div>

          </div>
        </div>

        {/* Scroll hint */}
        <div className="absolute bottom-7 left-1/2 -translate-x-1/2 z-50 flex flex-col items-center gap-2" style={{ opacity: 0.5 }}>
          <span className="text-[10px] font-bold tracking-[0.13em] text-[#544643] uppercase" style={{ fontFamily: "'Plus Jakarta Sans',sans-serif" }}>
            Scroll to explore
          </span>
          <div className="w-[22px] h-[36px] rounded-[11px] border-[1.5px] border-[#C6C2C1] flex justify-center pt-[5px]">
            <div className="w-[3px] h-[8px] rounded-sm bg-[#C86A28]" style={{ animation: "scrollDot 1.6s ease-in-out infinite" }} />
          </div>
        </div>

        {/* Floating Glass Cards Overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            pointerEvents: "none",
            zIndex: 35,
            overflow: "hidden",
          }}
        >
          <GlassCard card={CARDS[0]} elRef={c0} />
          <GlassCard card={CARDS[1]} elRef={c1} />
          <GlassCard card={CARDS[2]} elRef={c2} />
          <GlassCard card={CARDS[3]} elRef={c3} />
        </div>

        <style>{`
          @keyframes scrollDot{0%,100%{transform:translateY(0);opacity:1}50%{transform:translateY(10px);opacity:0.3}}
        `}</style>
      </section>
    </>
  );
}
