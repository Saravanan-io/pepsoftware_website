"use client";

import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

/* ─────────────────────────────────────────────
   Neural-spark canvas overlay
   Paints realistic neuro-current flicker lines
   over the brain region of the artwork.
───────────────────────────────────────────── */
function NeuralCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Brain region (% of canvas size) – centre of glowing brain in artwork
    const BX = 0.41;  // horizontal centre
    const BY = 0.38;  // vertical centre
    const BR = 0.155; // approximate brain radius (fraction of width)

    // Neural nodes scattered across brain area
    const nodes = Array.from({ length: 28 }, (_, i) => {
      const angle = (i / 28) * Math.PI * 2;
      const r = (0.2 + Math.random() * 0.8) * BR;
      return {
        x: BX + Math.cos(angle) * r * 1.35,
        y: BY + Math.sin(angle) * r * 0.92,
        pulse: Math.random() * Math.PI * 2,
        speed: 0.04 + Math.random() * 0.06,
        glow: 0,
      };
    });

    // Connections between nearby nodes
    type Connection = {
      a: number;
      b: number;
      spark: number;    // 0-1 position along line
      active: boolean;
      speed: number;
      opacity: number;
    };
    const connections: Connection[] = [];
    nodes.forEach((n, i) => {
      nodes.forEach((m, j) => {
        if (j <= i) return;
        const dx = n.x - m.x;
        const dy = n.y - m.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 0.12) {
          connections.push({
            a: i,
            b: j,
            spark: Math.random(),
            active: Math.random() > 0.4,
            speed: 0.008 + Math.random() * 0.016,
            opacity: 0.15 + Math.random() * 0.55,
          });
        }
      });
    });

    let t = 0;

    function resize() {
      if (!canvas) return;
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    }
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    function draw() {
      if (!canvas || !ctx) return;
      const W = canvas.width;
      const H = canvas.height;

      ctx.clearRect(0, 0, W, H);

      t += 0.018;

      // ── Node pulses ──────────────────────
      nodes.forEach((n) => {
        n.pulse += n.speed;
        const alpha = 0.4 + 0.6 * Math.abs(Math.sin(n.pulse));
        const px = n.x * W;
        const py = n.y * H;
        const radius = (2 + 2.5 * Math.abs(Math.sin(n.pulse)));

        const g = ctx.createRadialGradient(px, py, 0, px, py, radius * 3);
        g.addColorStop(0, `rgba(255,160,60,${alpha * 0.9})`);
        g.addColorStop(0.4, `rgba(255,110,20,${alpha * 0.4})`);
        g.addColorStop(1, "rgba(255,80,0,0)");

        ctx.beginPath();
        ctx.arc(px, py, radius, 0, Math.PI * 2);
        ctx.fillStyle = g;
        ctx.fill();
      });

      // ── Neural pathways with spark travelling along them ──
      connections.forEach((c) => {
        if (!c.active) {
          // randomly activate
          if (Math.random() < 0.003) {
            c.active = true;
            c.spark = 0;
          }
          return;
        }

        c.spark += c.speed;
        if (c.spark > 1) {
          c.active = Math.random() > 0.35; // chance to continue or rest
          c.spark = 0;
        }

        const n = nodes[c.a];
        const m = nodes[c.b];
        const x1 = n.x * W, y1 = n.y * H;
        const x2 = m.x * W, y2 = m.y * H;

        // Static dim pathway
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.strokeStyle = `rgba(255,140,40,${c.opacity * 0.18})`;
        ctx.lineWidth = 0.8;
        ctx.stroke();

        // Travelling spark head
        const sx = x1 + (x2 - x1) * c.spark;
        const sy = y1 + (y2 - y1) * c.spark;

        // Bright flicker
        const flickerAlpha = 0.5 + 0.5 * Math.abs(Math.sin(t * 18 + c.a));

        // Lit-up trail behind spark
        const trailLen = Math.max(0, c.spark - 0.18);
        const tx1 = x1 + (x2 - x1) * trailLen;
        const ty1 = y1 + (y2 - y1) * trailLen;

        const lineGrad = ctx.createLinearGradient(tx1, ty1, sx, sy);
        lineGrad.addColorStop(0, "rgba(255,120,20,0)");
        lineGrad.addColorStop(1, `rgba(255,180,60,${c.opacity * flickerAlpha})`);
        ctx.beginPath();
        ctx.moveTo(tx1, ty1);
        ctx.lineTo(sx, sy);
        ctx.strokeStyle = lineGrad;
        ctx.lineWidth = 1.5;
        ctx.stroke();

        // Spark glow dot
        const sg = ctx.createRadialGradient(sx, sy, 0, sx, sy, 7);
        sg.addColorStop(0, `rgba(255,220,100,${flickerAlpha})`);
        sg.addColorStop(0.5, `rgba(255,140,30,${flickerAlpha * 0.6})`);
        sg.addColorStop(1, "rgba(255,80,0,0)");
        ctx.beginPath();
        ctx.arc(sx, sy, 7, 0, Math.PI * 2);
        ctx.fillStyle = sg;
        ctx.fill();
      });

      // ── Occasional large neural burst ─────
      if (Math.random() < 0.018) {
        const n = nodes[Math.floor(Math.random() * nodes.length)];
        const px = n.x * W;
        const py = n.y * H;
        const burst = ctx.createRadialGradient(px, py, 0, px, py, 28);
        burst.addColorStop(0, "rgba(255,200,80,0.55)");
        burst.addColorStop(0.5, "rgba(255,120,30,0.18)");
        burst.addColorStop(1, "rgba(255,80,0,0)");
        ctx.beginPath();
        ctx.arc(px, py, 28, 0, Math.PI * 2);
        ctx.fillStyle = burst;
        ctx.fill();
      }

      animRef.current = requestAnimationFrame(draw);
    }

    draw();

    return () => {
      cancelAnimationFrame(animRef.current);
      ro.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none z-10"
      style={{ mixBlendMode: "screen" }}
    />
  );
}

/* ─────────────────────────────────────────────
   Main Hero Visual Component
───────────────────────────────────────────── */
export function HeroVideo() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="relative w-full max-w-[780px] xl:max-w-[880px] 2xl:max-w-[960px] flex justify-center items-center select-none pointer-events-none overflow-visible"
    >
      {/* Ambient depth glow */}
      <div className="absolute w-[85%] h-[70%] bg-gradient-to-tr from-[#E7EBEA]/60 via-[#EFF0EF]/40 to-[#C86A28]/8 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* ── Hand slides in from right side ── */}
      <motion.div
        initial={{ x: "35%", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
        className="relative w-full"
      >
        {/* Gentle continuous float */}
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut" }}
          className="relative w-full"
        >
          {/* Neural canvas overlay positioned over entire image */}
          <div className="relative w-full">
            <Image
              src="/hero-brain-showcase.png"
              alt="Pep Software – AI Brain on Robotic Hand Holographic Display"
              width={1024}
              height={576}
              priority
              className="w-full h-auto object-contain block"
            />

            {/* Neural current animation overlay only – no duplicate cards */}
            <NeuralCanvas />
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
