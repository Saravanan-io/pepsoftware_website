"use client";

import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import {
  Smartphone,
  Globe,
  Layers,
  Code2,
  ArrowRight,
} from "lucide-react";
import { gsap } from "gsap";

/* ─── Cards Configuration ─────────────────────────────────────────────────── */
const CARDS = [
  {
    id: "mobile",
    num: "01",
    label: "Mobile App\nDevelopment",
    desc: "Native iOS & Android apps built for performance.",
    Icon: Smartphone,
    accent: "#502D6D", // PEP Royal Purple
    href: "/services/mobile-app-design-development",
    targetPercentX: 0.16, // Top-Left
    targetPercentY: 0.22,
    sweepAngle: -0.80 * Math.PI,
    floatDelay: 0,
  },
  {
    id: "uiux",
    num: "03",
    label: "UI/UX Design",
    desc: "Intuitive, high-converting digital interfaces.",
    Icon: Layers,
    accent: "#68358F", // Vibrant Brand Violet
    href: "/services/ui-ux-design",
    targetPercentX: 0.84, // Top-Right
    targetPercentY: 0.22,
    sweepAngle: -1.85 * Math.PI,
    floatDelay: 0.6,
  },
  {
    id: "web",
    num: "02",
    label: "Website\nDevelopment",
    desc: "Modern, fast, conversion-focused platforms.",
    Icon: Globe,
    accent: "#FCB116", // PEP Golden Amber
    href: "/services/website-design-development",
    targetPercentX: 0.16, // Bottom-Left
    targetPercentY: 0.78,
    sweepAngle: -1.25 * Math.PI,
    floatDelay: 1.2,
  },
  {
    id: "software",
    num: "04",
    label: "Software\nDevelopment",
    desc: "Scalable custom architecture & solutions.",
    Icon: Code2,
    accent: "#C86A28", // Warm Terracotta
    href: "/services",
    targetPercentX: 0.84, // Bottom-Right
    targetPercentY: 0.78,
    sweepAngle: -1.60 * Math.PI,
    floatDelay: 1.8,
  },
] as const;

/* ─── Smooth Natural Orbit Math Helper ────────────────────────────────────── */
function getOrbitCardState(
  i: number,
  p: number,
  W: number,
  cx: number,
  cy: number,
  rx: number,
  ry: number,
  targets: { x: number; y: number }[]
) {
  const startX = W + 160 + i * 110;
  const totalSweep = CARDS[i].sweepAngle;

  // Stagger each card smoothly
  const stagger = i * 0.10;
  const t = Math.max(0, Math.min(1, (p - stagger) / (1 - stagger * 0.65)));

  if (t <= 0) {
    return { x: startX, y: cy, opacity: 0, scale: 0.88 };
  }

  // Phase 1: Gentle approach from right side into orbit entry (0 -> 0.25)
  if (t <= 0.25) {
    const e = t / 0.25;
    const smoothE = e * e * (3 - 2 * e); // Cubic ease
    const entryX = cx + rx;
    const x = startX + (entryX - startX) * smoothE;
    const y = cy;
    const opacity = Math.min(1, e * 2.2);
    const scale = 0.88 + 0.06 * smoothE;
    return { x, y, opacity, scale };
  }

  // Phase 2: Steady, smooth rotation around the central brain (0.25 -> 0.75)
  if (t <= 0.75) {
    const ot = (t - 0.25) / 0.50;
    // Continuous smooth angular sweep
    const angle = ot * totalSweep;
    const x = cx + rx * Math.cos(angle);
    const y = cy + ry * Math.sin(angle);
    return { x, y, opacity: 1, scale: 0.94 };
  }

  // Phase 3: Butter-smooth decrescendo docking into target corner (0.75 -> 1.0)
  const st = (t - 0.75) / 0.25;
  const dockEase = 1 - Math.pow(1 - st, 3); // Soft cubic deceleration
  const orbitEndX = cx + rx * Math.cos(totalSweep);
  const orbitEndY = cy + ry * Math.sin(totalSweep);
  const target = targets[i];
  const x = orbitEndX + (target.x - orbitEndX) * dockEase;
  const y = orbitEndY + (target.y - orbitEndY) * dockEase;
  return { x, y, opacity: 1, scale: 0.94 + 0.06 * dockEase };
}

/* ─── Neural Canvas Component ────────────────────────────────────────────── */
function NeuralCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const isVisibleRef = useRef<boolean>(true);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    const ioObserver = new IntersectionObserver(
      ([entry]) => {
        isVisibleRef.current = entry.isIntersecting;
      },
      { threshold: 0.05 }
    );
    ioObserver.observe(canvas);

    const BX = 0.41,
      BY = 0.38,
      BR = 0.155;
    const nodes = Array.from({ length: 20 }, (_, i) => {
      const a = (i / 20) * Math.PI * 2;
      const r = (0.2 + Math.random() * 0.8) * BR;
      return {
        x: BX + Math.cos(a) * r * 1.35,
        y: BY + Math.sin(a) * r * 0.92,
        pulse: Math.random() * Math.PI * 2,
        speed: 0.04 + Math.random() * 0.05,
      };
    });

    type Conn = {
      a: number;
      b: number;
      spark: number;
      active: boolean;
      speed: number;
      opacity: number;
    };
    const conns: Conn[] = [];
    nodes.forEach((n, i) =>
      nodes.forEach((m, j) => {
        if (j <= i) return;
        const d = Math.sqrt((n.x - m.x) ** 2 + (n.y - m.y) ** 2);
        if (d < 0.12)
          conns.push({
            a: i,
            b: j,
            spark: Math.random(),
            active: Math.random() > 0.4,
            speed: 0.009 + Math.random() * 0.015,
            opacity: 0.15 + Math.random() * 0.55,
          });
      })
    );

    let animId: number;

    const resize = () => {
      if (canvas) {
        canvas.width = canvas.offsetWidth;
        canvas.height = canvas.offsetHeight;
      }
    };
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    const draw = () => {
      animId = requestAnimationFrame(draw);
      if (!isVisibleRef.current) return;

      const w = canvas.width,
        h = canvas.height;
      if (w === 0 || h === 0) return;
      ctx.clearRect(0, 0, w, h);

      // Draw Connections & Synapse Sparks
      conns.forEach((c) => {
        const na = nodes[c.a],
          nb = nodes[c.b];
        const x1 = na.x * w,
          y1 = na.y * h,
          x2 = nb.x * w,
          y2 = nb.y * h;

        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.strokeStyle = `rgba(180, 110, 240, ${c.opacity * 0.35})`;
        ctx.lineWidth = 0.9;
        ctx.stroke();

        if (c.active) {
          c.spark = (c.spark + c.speed) % 1;
          const sx = x1 + (x2 - x1) * c.spark;
          const sy = y1 + (y2 - y1) * c.spark;
          const g = ctx.createRadialGradient(sx, sy, 0, sx, sy, 5);
          g.addColorStop(0, "rgba(255, 230, 120, 0.95)");
          g.addColorStop(0.5, "rgba(252, 177, 22, 0.5)");
          g.addColorStop(1, "rgba(80, 45, 109, 0)");
          ctx.beginPath();
          ctx.arc(sx, sy, 5, 0, Math.PI * 2);
          ctx.fillStyle = g;
          ctx.fill();
        }
      });

      // Draw Nodes
      nodes.forEach((n) => {
        n.pulse += n.speed;
        const nx = n.x * w,
          ny = n.y * h;
        const r = 2.2 + Math.sin(n.pulse) * 1.0;
        const alpha = 0.55 + Math.sin(n.pulse) * 0.45;

        ctx.beginPath();
        ctx.arc(nx, ny, r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(252, 177, 22, ${alpha * 0.85})`;
        ctx.fill();
      });
    };

    draw();

    return () => {
      cancelAnimationFrame(animId);
      ioObserver.disconnect();
      ro.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none z-10"
    />
  );
}

/* ─── Glass Card Content Renderer ────────────────────────────────────────── */
function CardInnerContent({ card }: { card: (typeof CARDS)[number] }) {
  return (
    <Link
      href={card.href}
      className="group block relative p-5 sm:p-5.5 rounded-[24px] bg-white/95 backdrop-blur-md border border-white/90 shadow-[0_12px_36px_rgba(80,45,109,0.08),0_2px_8px_rgba(0,0,0,0.04)] hover:shadow-[0_22px_48px_rgba(80,45,109,0.18)] hover:-translate-y-1.5 transition-all duration-300 w-full"
    >
      {/* Top Row: Circular Icon + Status Indicator */}
      <div className="flex items-center justify-between mt-0.5 mb-3">
        {/* Round Icon */}
        <div
          className="w-9 h-9 rounded-full flex items-center justify-center transition-transform group-hover:scale-110 duration-300"
          style={{
            background: `linear-gradient(135deg, ${card.accent}24, ${card.accent}10)`,
            border: `1.2px solid ${card.accent}45`,
            boxShadow: `0 2px 10px ${card.accent}20`,
          }}
        >
          <card.Icon size={16} color={card.accent} />
        </div>

        {/* Status Indicator */}
        <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/[0.04] border border-black/[0.06]">
          <span
            className="w-1.5 h-1.5 rounded-full"
            style={{
              background: card.accent,
              boxShadow: `0 0 6px ${card.accent}`,
            }}
          />
          <span className="text-[10px] font-extrabold text-[#151515] font-syne tracking-wider">
            {card.num}
          </span>
        </div>
      </div>

      {/* Title */}
      <h3 className="text-sm sm:text-[15px] font-extrabold text-[#0F0F0F] group-hover:text-[#502D6D] transition-colors leading-tight tracking-tight mb-1.5 whitespace-pre-line">
        {card.label}
      </h3>

      {/* Description */}
      <p className="text-[11px] sm:text-xs text-[#544643] leading-relaxed font-medium mb-3.5">
        {card.desc}
      </p>

      {/* Bottom Action Pill */}
      <div
        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[10.5px] font-bold transition-all duration-300 group-hover:gap-2"
        style={{
          background: `linear-gradient(135deg, ${card.accent}16, ${card.accent}08)`,
          border: `1.2px solid ${card.accent}35`,
          color: card.accent,
        }}
      >
        <span>Learn more</span>
        <ArrowRight size={11} strokeWidth={2.4} />
      </div>
    </Link>
  );
}

/* ─── Main Portfolio Showcase Component ──────────────────────────────────── */
export function PortfolioHeroCardsShowcase() {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [isAnimationSettled, setIsAnimationSettled] = useState(false);
  const pathname = usePathname();
  const [playCount, setPlayCount] = useState(0);
  const isIntersectingRef = useRef(false);

  // Trigger fresh animation every time user navigates to this page from another page
  useEffect(() => {
    setPlayCount((prev) => prev + 1);
  }, [pathname]);

  // Trigger when user navigates using back/forward cache
  useEffect(() => {
    const handlePageShow = () => {
      setPlayCount((prev) => prev + 1);
    };
    window.addEventListener("pageshow", handlePageShow);
    return () => window.removeEventListener("pageshow", handlePageShow);
  }, []);

  // Replay animation whenever the user scrolls away and comes back into view
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && entry.intersectionRatio >= 0.15) {
          if (!isIntersectingRef.current) {
            isIntersectingRef.current = true;
            // User scrolled back into view: replay the animation!
            setPlayCount((prev) => prev + 1);
          }
        } else if (!entry.isIntersecting || entry.intersectionRatio < 0.05) {
          if (isIntersectingRef.current) {
            isIntersectingRef.current = false;
            setIsAnimationSettled(false);
            // Hide cards offscreen immediately so they are prepped for next entrance
            cardRefs.current.forEach((el) => {
              if (el) {
                el.style.opacity = "0";
                el.style.pointerEvents = "none";
                el.style.transform = "translate3d(9999px, 0, 0)";
              }
            });
          }
        }
      },
      {
        threshold: [0, 0.05, 0.15],
      }
    );

    observer.observe(container);

    return () => {
      observer.disconnect();
    };
  }, []);

  // Automatic Orbit Animation Logic that runs on every visit
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let isMounted = true;
    setIsAnimationSettled(false);

    // Immediately hide all cards offscreen right
    cardRefs.current.forEach((el) => {
      if (el) {
        el.style.opacity = "0";
        el.style.pointerEvents = "none";
        el.style.transform = `translate3d(9999px, 0, 0)`;
      }
    });

    let currentTween: gsap.core.Tween | null = null;

    const runOrbitAnimation = () => {
      if (!isMounted) return;
      const W = container.offsetWidth;
      const H = container.offsetHeight;

      // Mobile/tablet fallback
      if (W < 1024) {
        setIsAnimationSettled(true);
        return;
      }

      // Brain Center & Orbit Radii
      const cx = W * 0.50;
      const cy = H * 0.45;
      const rx = W * 0.36;
      const ry = H * 0.30;

      // Target Corner Positions
      const targets = CARDS.map((c) => ({
        x: W * c.targetPercentX,
        y: H * c.targetPercentY,
      }));

      // Set initial positions offscreen to the right
      cardRefs.current.forEach((el, i) => {
        if (!el) return;
        const state = getOrbitCardState(i, 0, W, cx, cy, rx, ry, targets);
        el.style.transform = `translate3d(${state.x}px, ${state.y}px, 0) translate(-50%, -50%) scale(${state.scale})`;
        el.style.opacity = "0";
        el.style.pointerEvents = "none";
      });

      // Master Animation Proxy running automatically
      const proxy = { p: 0 };
      currentTween = gsap.to(proxy, {
        p: 1,
        duration: 3.8,
        ease: "power1.inOut",
        delay: 0.1,
        onUpdate: () => {
          if (!isMounted) return;
          const curP = proxy.p;
          cardRefs.current.forEach((el, i) => {
            if (!el) return;
            const state = getOrbitCardState(i, curP, W, cx, cy, rx, ry, targets);
            el.style.transform = `translate3d(${state.x}px, ${state.y}px, 0) translate(-50%, -50%) scale(${state.scale})`;
            el.style.opacity = String(state.opacity);
            el.style.pointerEvents = curP > 0.88 ? "auto" : "none";
          });
        },
        onComplete: () => {
          if (!isMounted) return;
          setIsAnimationSettled(true);
        },
      });
    };

    // Use requestAnimationFrame so container dimensions are verified before running
    const rafId = requestAnimationFrame(() => {
      runOrbitAnimation();
    });

    return () => {
      isMounted = false;
      cancelAnimationFrame(rafId);
      currentTween?.kill();
    };
  }, [playCount]);

  return (
    <div
      ref={containerRef}
      className="relative w-full max-w-6xl mx-auto overflow-hidden lg:overflow-visible select-none"
    >
      {/* Outer ambient glow backdrop */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[550px] bg-gradient-to-tr from-[#502D6D]/[0.08] via-[#FCB116]/[0.08] to-transparent rounded-full blur-[140px] pointer-events-none" />

      {/* Main Showcase Stage */}
      <div className="relative w-full min-h-[440px] sm:min-h-[500px] lg:min-h-[580px] xl:min-h-[640px] flex items-center justify-center">
        {/* Central Brain Image & Neural Synapses */}
        <motion.div
          key={`brain-${playCount}`}
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-[620px] sm:max-w-[720px] lg:max-w-[800px] xl:max-w-[860px] aspect-[16/10] select-none pointer-events-none"
        >
          {/* Subtle soft backdrop radial glow */}
          <div className="absolute inset-0 bg-radial-gradient from-white/60 via-transparent to-transparent opacity-80" />

          <div className="relative w-full h-full">
            <Image
              src="/hero-brain-showcase.png"
              alt="PEP Software – AI Robotic Hand and Neural Core"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 860px"
              className="object-contain"
            />
            {/* Glowing Interactive Neural Synapse Canvas */}
            <NeuralCanvas />
          </div>
        </motion.div>

        {/* ── Desktop Cinematic Floating Cards with Automatic Orbit Entrance ── */}
        <div className="hidden lg:block absolute inset-0 pointer-events-none z-30">
          {CARDS.map((card, idx) => (
            <div
              key={`${card.id}-${playCount}`}
              ref={(el) => {
                cardRefs.current[idx] = el;
              }}
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "235px",
                opacity: 0,
                willChange: "transform, opacity",
                transformOrigin: "center center",
                pointerEvents: isAnimationSettled ? "auto" : "none",
              }}
            >
              {/* Once animation is settled, subtle levitation float is activated */}
              <motion.div
                animate={
                  isAnimationSettled
                    ? {
                        y: [0, -7, 0],
                      }
                    : {}
                }
                transition={{
                  duration: 4.5,
                  delay: card.floatDelay,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <CardInnerContent card={card} />
              </motion.div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Mobile / Tablet Clean Responsive Slide-in Cards ── */}
      <div className="lg:hidden mt-4 sm:mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-xl mx-auto px-2">
        {CARDS.map((card, idx) => (
          <motion.div
            key={`${card.id}-${playCount}`}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.6,
              delay: 0.15 + idx * 0.12,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            <CardInnerContent card={card} />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
