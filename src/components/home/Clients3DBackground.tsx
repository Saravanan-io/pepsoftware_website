"use client";

import { useEffect, useRef } from "react";

interface FloatingCrystal {
  x: number;
  y: number;
  z: number;
  size: number;
  rotX: number;
  rotY: number;
  rotZ: number;
  vx: number;
  vy: number;
  vz: number;
  vRotX: number;
  vRotY: number;
  vRotZ: number;
  color: string;
  glowColor: string;
  shape: number; // 0: octahedron, 1: diamond cube, 2: faceted shard
}

interface TwinkleStar {
  x: number;
  y: number;
  radius: number;
  alpha: number;
  baseAlpha: number;
  speed: number;
  phase: number;
  color: string;
}

export function Clients3DBackground() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let width = (canvas.width = container.clientWidth);
    let height = (canvas.height = container.clientHeight);

    const handleResize = () => {
      if (!canvas || !container) return;
      width = canvas.width = container.clientWidth;
      height = canvas.height = container.clientHeight;
    };

    window.addEventListener("resize", handleResize);

    // Mouse Parallax
    let mouseX = width / 2;
    let mouseY = height / 2;
    let targetMouseX = width / 2;
    let targetMouseY = height / 2;
    let isHovered = false;

    const handlePointerMove = (e: PointerEvent) => {
      const rect = container.getBoundingClientRect();
      targetMouseX = e.clientX - rect.left;
      targetMouseY = e.clientY - rect.top;
      isHovered = true;
    };

    const handlePointerLeave = () => {
      isHovered = false;
      targetMouseX = width / 2;
      targetMouseY = height / 2;
    };

    container.addEventListener("pointermove", handlePointerMove);
    container.addEventListener("pointerleave", handlePointerLeave);

    // 1. Initialize Stars
    const starCount = 85;
    const stars: TwinkleStar[] = [];
    const starPalette = ["#FFFFFF", "#FCB116", "#D8B4FE", "#E9D5FF", "#FFE28A"];

    for (let i = 0; i < starCount; i++) {
      stars.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: 0.8 + Math.random() * 1.6,
        alpha: Math.random(),
        baseAlpha: 0.2 + Math.random() * 0.6,
        speed: 1.5 + Math.random() * 3.5,
        phase: Math.random() * Math.PI * 2,
        color: starPalette[Math.floor(Math.random() * starPalette.length)],
      });
    }

    // 2. Initialize 3D Floating Crystals & Geometric Shards
    const crystalCount = 38;
    const crystals: FloatingCrystal[] = [];
    const crystalColors = [
      { color: "#502D6D", glow: "#8A3DA8" },
      { color: "#FCB116", glow: "#FFD978" },
      { color: "#68358F", glow: "#A855F7" },
      { color: "#C86A28", glow: "#FCB116" },
      { color: "#3B1E54", glow: "#502D6D" },
    ];

    for (let i = 0; i < crystalCount; i++) {
      const palette = crystalColors[Math.floor(Math.random() * crystalColors.length)];
      crystals.push({
        x: (Math.random() - 0.5) * width * 1.2,
        y: (Math.random() - 0.5) * height * 1.2,
        z: Math.random() * 600 - 300,
        size: 7 + Math.random() * 14,
        rotX: Math.random() * Math.PI * 2,
        rotY: Math.random() * Math.PI * 2,
        rotZ: Math.random() * Math.PI * 2,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.35,
        vz: (Math.random() - 0.5) * 0.3,
        vRotX: (Math.random() - 0.5) * 0.025,
        vRotY: (Math.random() - 0.5) * 0.025,
        vRotZ: (Math.random() - 0.5) * 0.025,
        color: palette.color,
        glowColor: palette.glow,
        shape: Math.floor(Math.random() * 3),
      });
    }

    // 3D Gyroscopic Rings angles
    let ringRotX = 0.55;
    let ringRotY = 0.35;
    let ringRotZ = 0;

    let time = 0;

    const render = () => {
      time += 0.016;

      ctx.clearRect(0, 0, width, height);

      // Smooth mouse interpolation
      mouseX += (targetMouseX - mouseX) * 0.05;
      mouseY += (targetMouseY - mouseY) * 0.05;

      const parallaxTiltX = ((mouseY / height) - 0.5) * 0.35;
      const parallaxTiltY = ((mouseX / width) - 0.5) * 0.35;

      const centerX = width / 2;
      const centerY = height / 2;

      // 1. Draw Starfield with flickers
      const flickerMultiplier = isHovered ? 1.7 : 1.0;
      for (let i = 0; i < stars.length; i++) {
        const star = stars[i];
        const flicker = Math.sin(time * star.speed * flickerMultiplier + star.phase);
        let currentAlpha = star.baseAlpha + flicker * 0.4;
        if (currentAlpha < 0.1) currentAlpha = 0.1;
        if (currentAlpha > 1) currentAlpha = 1;

        ctx.fillStyle = star.color;
        ctx.globalAlpha = currentAlpha;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fill();

        // Cross sparkle on brightest stars
        if (currentAlpha > 0.8 && star.radius > 1.2) {
          ctx.strokeStyle = star.color;
          ctx.lineWidth = 0.5;
          const s = star.radius * 2.5;
          ctx.beginPath();
          ctx.moveTo(star.x - s, star.y);
          ctx.lineTo(star.x + s, star.y);
          ctx.moveTo(star.x, star.y - s);
          ctx.lineTo(star.x, star.y + s);
          ctx.stroke();
        }
      }
      ctx.globalAlpha = 1;

      // 2. 3D Gyroscope Orbit Rings in Background
      ringRotX += 0.003;
      ringRotY += 0.004;
      ringRotZ += 0.002;

      const rings = [
        { radiusX: 380, radiusY: 130, angle: ringRotX + parallaxTiltX, color: "rgba(80, 45, 109, 0.35)", strokeW: 1.5 },
        { radiusX: 520, radiusY: 170, angle: ringRotY + parallaxTiltY, color: "rgba(252, 177, 22, 0.22)", strokeW: 1.2 },
        { radiusX: 260, radiusY: 90, angle: -ringRotZ, color: "rgba(168, 85, 247, 0.28)", strokeW: 1.0 },
      ];

      rings.forEach((ring) => {
        ctx.save();
        ctx.translate(centerX, centerY);
        ctx.rotate(ring.angle);
        ctx.strokeStyle = ring.color;
        ctx.lineWidth = ring.strokeW;
        ctx.setLineDash([8, 12]);
        ctx.beginPath();
        ctx.ellipse(0, 0, ring.radiusX, ring.radiusY, 0, 0, Math.PI * 2);
        ctx.stroke();
        ctx.restore();
      });

      // 3. Project & Render 3D Floating Crystals
      const fov = 650;

      // Sort crystals by depth (z)
      crystals.forEach((c) => {
        c.x += c.vx;
        c.y += c.vy;
        c.z += c.vz;
        c.rotX += c.vRotX;
        c.rotY += c.vRotY;
        c.rotZ += c.vRotZ;

        // Wrap around boundaries
        if (c.x < -width * 0.7) c.x = width * 0.7;
        if (c.x > width * 0.7) c.x = -width * 0.7;
        if (c.y < -height * 0.7) c.y = height * 0.7;
        if (c.y > height * 0.7) c.y = -height * 0.7;
        if (c.z < -300) c.z = 300;
        if (c.z > 300) c.z = -300;
      });

      crystals.sort((a, b) => a.z - b.z);

      crystals.forEach((c) => {
        // Apply parallax rotation
        const effZ = c.z + 400;
        const scale = fov / (fov + effZ);

        const px = centerX + c.x * scale + (mouseX - centerX) * 0.08 * scale;
        const py = centerY + c.y * scale + (mouseY - centerY) * 0.08 * scale;

        const rad = c.size * scale;
        if (rad < 1) return;

        ctx.save();
        ctx.translate(px, py);
        ctx.rotate(c.rotZ);

        const alpha = Math.min(0.85, Math.max(0.15, (c.z + 300) / 600));
        ctx.globalAlpha = alpha;

        // Draw 3D Polyhedral Shard
        if (c.shape === 0) {
          // 3D Diamond Octahedron
          ctx.beginPath();
          ctx.moveTo(0, -rad * 1.4);
          ctx.lineTo(rad, 0);
          ctx.lineTo(0, rad * 1.4);
          ctx.lineTo(-rad, 0);
          ctx.closePath();
          ctx.fillStyle = c.color;
          ctx.fill();

          // Internal Facet Shading
          ctx.beginPath();
          ctx.moveTo(0, -rad * 1.4);
          ctx.lineTo(rad * 0.4, 0);
          ctx.lineTo(0, rad * 1.4);
          ctx.closePath();
          ctx.fillStyle = c.glowColor;
          ctx.globalAlpha = alpha * 0.6;
          ctx.fill();

          ctx.strokeStyle = c.glowColor;
          ctx.lineWidth = 0.8 * scale;
          ctx.stroke();
        } else if (c.shape === 1) {
          // 3D Hexagonal Star Crystal
          ctx.beginPath();
          const sides = 6;
          for (let s = 0; s < sides; s++) {
            const a = (s / sides) * Math.PI * 2;
            const r = s % 2 === 0 ? rad * 1.2 : rad * 0.65;
            const sx = Math.cos(a) * r;
            const sy = Math.sin(a) * r;
            if (s === 0) ctx.moveTo(sx, sy);
            else ctx.lineTo(sx, sy);
          }
          ctx.closePath();
          ctx.fillStyle = c.color;
          ctx.fill();

          ctx.strokeStyle = c.glowColor;
          ctx.lineWidth = 0.8 * scale;
          ctx.stroke();
        } else {
          // 3D Tumbling Triangular Prism
          ctx.beginPath();
          ctx.moveTo(0, -rad);
          ctx.lineTo(rad * 1.1, rad * 0.8);
          ctx.lineTo(-rad * 1.1, rad * 0.8);
          ctx.closePath();
          ctx.fillStyle = c.color;
          ctx.fill();

          ctx.strokeStyle = c.glowColor;
          ctx.lineWidth = 0.8 * scale;
          ctx.stroke();
        }

        ctx.restore();
        ctx.globalAlpha = 1;
      });

      if (isVisible) {
        animId = requestAnimationFrame(render);
      } else {
        isRunning = false;
      }
    };

    let isVisible = false;
    let isRunning = false;

    const startAnimation = () => {
      if (!isRunning) {
        isRunning = true;
        animId = requestAnimationFrame(render);
      }
    };

    const stopAnimation = () => {
      isRunning = false;
      cancelAnimationFrame(animId);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisible = entry.isIntersecting;
        if (isVisible) {
          startAnimation();
        } else {
          stopAnimation();
        }
      },
      { rootMargin: "150px 0px" }
    );
    observer.observe(container);

    return () => {
      stopAnimation();
      observer.disconnect();
      window.removeEventListener("resize", handleResize);
      container.removeEventListener("pointermove", handlePointerMove);
      container.removeEventListener("pointerleave", handlePointerLeave);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 pointer-events-auto overflow-hidden select-none"
      aria-hidden="true"
    >
      <canvas ref={canvasRef} className="w-full h-full block" />
    </div>
  );
}
