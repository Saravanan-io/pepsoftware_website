"use client";

import { useEffect, useRef, useState } from "react";

interface Asteroid {
  a: number; // semi-major axis
  b: number; // semi-minor axis
  h: number; // vertical height offset in 3D
  theta: number;
  speed: number;
  size: number;
  rotX: number;
  rotY: number;
  rotSpeedX: number;
  rotSpeedY: number;
  vertices: { x: number; y: number }[];
  baseColor: string;
}

interface Star {
  x: number;
  y: number;
  z: number;
  radius: number;
  color: string;
  twinkleSpeed: number;
  twinklePhase: number;
  baseAlpha: number;
  hasSpikes: boolean;
}

interface Stardust {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  maxLife: number;
  color: string;
  size: number;
}

interface ShootingStar {
  x: number;
  y: number;
  length: number;
  speed: number;
  angle: number;
  opacity: number;
  active: boolean;
}

export function CosmicSolarSystem() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let width = (canvas.width = container.clientWidth);
    let height = (canvas.height = container.clientHeight);

    // Responsive scaling
    const handleResize = () => {
      if (!canvas || !container) return;
      width = canvas.width = container.clientWidth;
      height = canvas.height = container.clientHeight;
    };

    window.addEventListener("resize", handleResize);

    // Mouse tracking for 3D parallax & interactive gravitational hover
    let mouseX = width / 2;
    let mouseY = height / 2;
    let targetMouseX = width / 2;
    let targetMouseY = height / 2;
    let isMouseOver = false;

    const handlePointerMove = (e: PointerEvent) => {
      const rect = container.getBoundingClientRect();
      targetMouseX = e.clientX - rect.left;
      targetMouseY = e.clientY - rect.top;
      isMouseOver = true;

      // Spawn interactive stardust on mouse hover movement
      if (Math.random() < 0.6 && stardustParticles.length < 50) {
        stardustParticles.push({
          x: targetMouseX,
          y: targetMouseY,
          vx: (Math.random() - 0.5) * 1.5,
          vy: (Math.random() - 0.5) * 1.5 - 0.5,
          life: 0,
          maxLife: 35 + Math.random() * 25,
          color: Math.random() > 0.4 ? "#FCB116" : "#A855F7",
          size: 1 + Math.random() * 2.5,
        });
      }
    };

    const handlePointerEnter = () => {
      isMouseOver = true;
      setIsHovered(true);
    };

    const handlePointerLeave = () => {
      isMouseOver = false;
      setIsHovered(false);
      targetMouseX = width / 2;
      targetMouseY = height / 2;
    };

    container.addEventListener("pointermove", handlePointerMove);
    container.addEventListener("pointerenter", handlePointerEnter);
    container.addEventListener("pointerleave", handlePointerLeave);

    // Initialize Stars with flickering parameters
    const starCount = Math.min(220, Math.floor((width * height) / 4500));
    const stars: Star[] = [];
    const starColors = ["#FFFFFF", "#FDFBF7", "#FCB116", "#D8B4FE", "#E9D5FF"];

    for (let i = 0; i < starCount; i++) {
      stars.push({
        x: (Math.random() - 0.5) * width * 1.4,
        y: (Math.random() - 0.5) * height * 1.4,
        z: Math.random() * 800 - 400,
        radius: Math.random() * 1.5 + 0.6,
        color: starColors[Math.floor(Math.random() * starColors.length)],
        twinkleSpeed: 1.2 + Math.random() * 3.5,
        twinklePhase: Math.random() * Math.PI * 2,
        baseAlpha: 0.25 + Math.random() * 0.65,
        hasSpikes: Math.random() < 0.15,
      });
    }

    // Initialize Asteroid Belt
    const asteroidCount = 95;
    const asteroids: Asteroid[] = [];
    for (let i = 0; i < asteroidCount; i++) {
      // Semi-major axis between 190 and 260
      const a = 185 + Math.random() * 85;
      const b = a * (0.86 + Math.random() * 0.08);
      const h = (Math.random() - 0.5) * 36;
      const size = 1.4 + Math.random() * 3.2;

      // Random polygonal vertices for faceted rock silhouette
      const vertCount = 5 + Math.floor(Math.random() * 3);
      const vertices: { x: number; y: number }[] = [];
      for (let v = 0; v < vertCount; v++) {
        const angle = (v / vertCount) * Math.PI * 2;
        const rad = size * (0.65 + Math.random() * 0.5);
        vertices.push({
          x: Math.cos(angle) * rad,
          y: Math.sin(angle) * rad,
        });
      }

      const asteroidColors = [
        "#8E7D9E",
        "#B29BC9",
        "#6B4F82",
        "#502D6D",
        "#C4A47C",
        "#D4AF37",
      ];

      asteroids.push({
        a,
        b,
        h,
        theta: Math.random() * Math.PI * 2,
        speed: 0.0035 + (300 / a) * 0.003 + (Math.random() - 0.5) * 0.001,
        size,
        rotX: Math.random() * Math.PI * 2,
        rotY: Math.random() * Math.PI * 2,
        rotSpeedX: (Math.random() - 0.5) * 0.04,
        rotSpeedY: (Math.random() - 0.5) * 0.04,
        vertices,
        baseColor: asteroidColors[Math.floor(Math.random() * asteroidColors.length)],
      });
    }

    // Interactive Stardust
    const stardustParticles: Stardust[] = [];

    // Periodic Shooting Star / Meteor
    let shootingStar: ShootingStar = {
      x: 0,
      y: 0,
      length: 0,
      speed: 0,
      angle: 0,
      opacity: 0,
      active: false,
    };

    let nextShootingStarTime = 120; // frames
    let frameCount = 0;

    // Solar System Planets
    const planets = [
      {
        name: "Vulcan",
        a: 100,
        b: 85,
        speed: 0.019,
        size: 4.8,
        color: "#FCB116",
        glow: "#FFD978",
        theta: 0.5,
        hasMoon: false,
        hasRing: false,
      },
      {
        name: "Amethyst",
        a: 155,
        b: 130,
        speed: 0.012,
        size: 6.5,
        color: "#A855F7",
        glow: "#C084FC",
        theta: 2.2,
        hasMoon: true,
        hasRing: false,
      },
      {
        name: "PepMajesty",
        a: 295,
        b: 245,
        speed: 0.007,
        size: 11.5,
        color: "#68358F",
        glow: "#8A3DA8",
        theta: 4.1,
        hasMoon: true,
        hasRing: true,
      },
      {
        name: "Celeste",
        a: 375,
        b: 310,
        speed: 0.0045,
        size: 5.5,
        color: "#38BDF8",
        glow: "#7DD3FC",
        theta: 1.1,
        hasMoon: false,
        hasRing: false,
      },
    ];

    // 3D Perspective Projection Matrix
    const pitchBase = 1.02; // ~58 deg inclination
    const yawBase = 0.22;
    let currentPitch = pitchBase;
    let currentYaw = yawBase;

    let time = 0;

    // Main 3D Render Loop
    const render = () => {
      time += 0.016;
      frameCount++;

      ctx.clearRect(0, 0, width, height);

      // Smooth mouse interpolation
      mouseX += (targetMouseX - mouseX) * 0.05;
      mouseY += (targetMouseY - mouseY) * 0.05;

      // Parallax 3D tilt
      const targetPitch = pitchBase + ((mouseY / height) - 0.5) * 0.35;
      const targetYaw = yawBase + ((mouseX / width) - 0.5) * 0.45;
      currentPitch += (targetPitch - currentPitch) * 0.06;
      currentYaw += (targetYaw - currentYaw) * 0.06;

      // Center of solar system: slightly to the right on desktop, center on mobile
      const sunCenterX = width > 1024 ? width * 0.65 : width * 0.5;
      const sunCenterY = height * 0.52;

      // 1. Render Starfield with Flicker Effects
      const hoverFlickerBoost = isMouseOver ? 1.8 : 1.0;

      for (let i = 0; i < stars.length; i++) {
        const star = stars[i];

        // 3D parallax on stars based on z depth
        const parallaxX = (mouseX - width / 2) * (star.z / 3000);
        const parallaxY = (mouseY - height / 2) * (star.z / 3000);

        const screenX = width / 2 + star.x + parallaxX;
        const screenY = height / 2 + star.y + parallaxY;

        if (screenX < -20 || screenX > width + 20 || screenY < -20 || screenY > height + 20) {
          continue;
        }

        // Star flicker calculation
        const flicker = Math.sin(time * star.twinkleSpeed * hoverFlickerBoost + star.twinklePhase);
        let alpha = star.baseAlpha + flicker * 0.45;
        if (alpha < 0.1) alpha = 0.1;
        if (alpha > 1) alpha = 1;

        // Proximity to mouse increases glow
        const distToMouse = Math.hypot(screenX - mouseX, screenY - mouseY);
        if (isMouseOver && distToMouse < 140) {
          alpha = Math.min(1, alpha + (1 - distToMouse / 140) * 0.5);
        }

        ctx.fillStyle = star.color;
        ctx.globalAlpha = alpha;
        ctx.beginPath();
        ctx.arc(screenX, screenY, star.radius, 0, Math.PI * 2);
        ctx.fill();

        // 4-point sparkle cross on bright flickering stars
        if (star.hasSpikes && alpha > 0.75) {
          const spikeLen = star.radius * 3.2;
          ctx.strokeStyle = star.color;
          ctx.lineWidth = 0.6;
          ctx.beginPath();
          ctx.moveTo(screenX - spikeLen, screenY);
          ctx.lineTo(screenX + spikeLen, screenY);
          ctx.moveTo(screenX, screenY - spikeLen);
          ctx.lineTo(screenX, screenY + spikeLen);
          ctx.stroke();
        }
      }
      ctx.globalAlpha = 1;

      // 2. Shooting Star / Meteor logic
      if (!shootingStar.active && frameCount > nextShootingStarTime) {
        shootingStar = {
          x: Math.random() * width * 0.8,
          y: Math.random() * (height * 0.4),
          length: 80 + Math.random() * 90,
          speed: 12 + Math.random() * 8,
          angle: (Math.PI / 4) + (Math.random() - 0.5) * 0.3,
          opacity: 1,
          active: true,
        };
        nextShootingStarTime = frameCount + 180 + Math.floor(Math.random() * 200);
      }

      if (shootingStar.active) {
        const endX = shootingStar.x - Math.cos(shootingStar.angle) * shootingStar.length;
        const endY = shootingStar.y - Math.sin(shootingStar.angle) * shootingStar.length;

        const grad = ctx.createLinearGradient(shootingStar.x, shootingStar.y, endX, endY);
        grad.addColorStop(0, `rgba(255, 255, 255, ${shootingStar.opacity})`);
        grad.addColorStop(0.3, `rgba(252, 177, 22, ${shootingStar.opacity * 0.8})`);
        grad.addColorStop(1, "rgba(80, 45, 109, 0)");

        ctx.strokeStyle = grad;
        ctx.lineWidth = 1.6;
        ctx.beginPath();
        ctx.moveTo(shootingStar.x, shootingStar.y);
        ctx.lineTo(endX, endY);
        ctx.stroke();

        shootingStar.x += Math.cos(shootingStar.angle) * shootingStar.speed;
        shootingStar.y += Math.sin(shootingStar.angle) * shootingStar.speed;
        shootingStar.opacity -= 0.018;

        if (shootingStar.opacity <= 0 || shootingStar.x > width + 100 || shootingStar.y > height + 100) {
          shootingStar.active = false;
        }
      }

      // 3. Central Cosmic Core (Star / Sun) Glow
      // Flare pulse is augmented when hovered
      const sunPulse = Math.sin(time * 2.2) * 4;
      const hoverBoost = isMouseOver ? 10 : 0;
      const sunCoreRadius = 24 + sunPulse * 0.5 + hoverBoost * 0.4;

      // Outer Corona Nebula
      const coronaGrad = ctx.createRadialGradient(
        sunCenterX,
        sunCenterY,
        sunCoreRadius * 0.2,
        sunCenterX,
        sunCenterY,
        sunCoreRadius * 4.5
      );
      coronaGrad.addColorStop(0, "rgba(255, 235, 180, 0.95)");
      coronaGrad.addColorStop(0.2, "rgba(252, 177, 22, 0.7)");
      coronaGrad.addColorStop(0.5, "rgba(138, 61, 168, 0.35)");
      coronaGrad.addColorStop(0.8, "rgba(80, 45, 109, 0.15)");
      coronaGrad.addColorStop(1, "rgba(15, 6, 29, 0)");

      ctx.fillStyle = coronaGrad;
      ctx.beginPath();
      ctx.arc(sunCenterX, sunCenterY, sunCoreRadius * 4.5, 0, Math.PI * 2);
      ctx.fill();

      // Rotating Solar Flares / Magnetic Loops
      ctx.save();
      ctx.translate(sunCenterX, sunCenterY);
      ctx.rotate(time * 0.2);
      ctx.strokeStyle = "rgba(252, 177, 22, 0.22)";
      ctx.lineWidth = 1.2;
      for (let r = 0; r < 4; r++) {
        ctx.rotate((Math.PI / 2));
        ctx.beginPath();
        ctx.ellipse(0, 0, sunCoreRadius * 2.1, sunCoreRadius * 0.9, 0, 0, Math.PI * 2);
        ctx.stroke();
      }
      ctx.restore();

      // Golden Sun Core
      const coreGrad = ctx.createRadialGradient(
        sunCenterX - sunCoreRadius * 0.25,
        sunCenterY - sunCoreRadius * 0.25,
        2,
        sunCenterX,
        sunCenterY,
        sunCoreRadius
      );
      coreGrad.addColorStop(0, "#FFFFFF");
      coreGrad.addColorStop(0.45, "#FCB116");
      coreGrad.addColorStop(0.85, "#E28B00");
      coreGrad.addColorStop(1, "#502D6D");

      ctx.fillStyle = coreGrad;
      ctx.beginPath();
      ctx.arc(sunCenterX, sunCenterY, sunCoreRadius, 0, Math.PI * 2);
      ctx.fill();

      // 4. 3D Projector Helper Function
      const project3D = (x: number, y: number, z: number) => {
        // Rotate X (pitch)
        const cosP = Math.cos(currentPitch);
        const sinP = Math.sin(currentPitch);
        const y1 = y * cosP - z * sinP;
        const z1 = y * sinP + z * cosP;

        // Rotate Y (yaw)
        const cosY = Math.cos(currentYaw);
        const sinY = Math.sin(currentYaw);
        const x2 = x * cosY + z1 * sinY;
        const z2 = -x * sinY + z1 * cosY;

        // Perspective scale
        const fov = 750;
        const scale = fov / (fov + z2);

        return {
          px: sunCenterX + x2 * scale,
          py: sunCenterY + y1 * scale,
          scale,
          zDepth: z2,
        };
      };

      // 5. Draw 3D Orbital Rings (Back half first, front half later, or faded)
      planets.forEach((p) => {
        ctx.beginPath();
        const steps = 64;
        let started = false;

        for (let s = 0; s <= steps; s++) {
          const ang = (s / steps) * Math.PI * 2;
          const ox = Math.cos(ang) * p.a;
          const oz = Math.sin(ang) * p.b;
          const { px, py, zDepth } = project3D(ox, 0, oz);

          // Subtle dashed fade based on depth
          if (!started) {
            ctx.moveTo(px, py);
            started = true;
          } else {
            ctx.lineTo(px, py);
          }
        }
        ctx.strokeStyle = "rgba(168, 85, 247, 0.16)";
        ctx.lineWidth = 1;
        ctx.stroke();
      });

      // 6. Draw & Depth-Sort Celestial Entities (Planets, Asteroids, Stardust)
      interface RenderItem {
        type: "planet" | "asteroid" | "planet_front_ring";
        zDepth: number;
        draw: () => void;
      }

      const renderQueue: RenderItem[] = [];

      // Add Planets to Render Queue
      planets.forEach((p) => {
        p.theta += p.speed;
        const ox = Math.cos(p.theta) * p.a;
        const oz = Math.sin(p.theta) * p.b;
        const { px, py, scale, zDepth } = project3D(ox, 0, oz);

        const currentRadius = Math.max(2, p.size * scale);

        renderQueue.push({
          type: "planet",
          zDepth,
          draw: () => {
            // Planet shadow & light gradient facing central sun
            const lightAngle = Math.atan2(sunCenterY - py, sunCenterX - px);
            const planetGrad = ctx.createRadialGradient(
              px + Math.cos(lightAngle) * currentRadius * 0.4,
              py + Math.sin(lightAngle) * currentRadius * 0.4,
              currentRadius * 0.1,
              px,
              py,
              currentRadius
            );
            planetGrad.addColorStop(0, p.glow);
            planetGrad.addColorStop(0.65, p.color);
            planetGrad.addColorStop(1, "#160728");

            // Glow Aura
            ctx.fillStyle = p.glow;
            ctx.globalAlpha = 0.28;
            ctx.beginPath();
            ctx.arc(px, py, currentRadius * 1.7, 0, Math.PI * 2);
            ctx.fill();
            ctx.globalAlpha = 1;

            // Sphere Body
            ctx.fillStyle = planetGrad;
            ctx.beginPath();
            ctx.arc(px, py, currentRadius, 0, Math.PI * 2);
            ctx.fill();

            // Planet Saturn-like Ring System for PepMajesty
            if (p.hasRing) {
              const ringRadiusX = currentRadius * 2.3;
              const ringRadiusY = currentRadius * 0.65;
              ctx.save();
              ctx.translate(px, py);
              ctx.rotate(-0.4);
              ctx.strokeStyle = "rgba(252, 177, 22, 0.65)";
              ctx.lineWidth = Math.max(1, 2.2 * scale);
              ctx.beginPath();
              ctx.ellipse(0, 0, ringRadiusX, ringRadiusY, 0, 0, Math.PI * 2);
              ctx.stroke();
              ctx.restore();
            }

            // Miniature Orbiting Moon
            if (p.hasMoon) {
              const moonAngle = time * 3.5 + p.a;
              const moonDist = currentRadius * 2.2;
              const moonX = px + Math.cos(moonAngle) * moonDist;
              const moonY = py + Math.sin(moonAngle) * (moonDist * 0.4);
              ctx.fillStyle = "#FDFBF7";
              ctx.beginPath();
              ctx.arc(moonX, moonY, Math.max(1.2, 1.8 * scale), 0, Math.PI * 2);
              ctx.fill();
            }
          },
        });
      });

      // Add Asteroids to Render Queue
      asteroids.forEach((ast) => {
        ast.theta += ast.speed;
        ast.rotX += ast.rotSpeedX;
        ast.rotY += ast.rotSpeedY;

        let ax = Math.cos(ast.theta) * ast.a;
        let az = Math.sin(ast.theta) * ast.b;
        let ay = ast.h;

        // Gravitational interaction with mouse pointer on hover
        if (isMouseOver) {
          const tempProj = project3D(ax, ay, az);
          const dMouse = Math.hypot(tempProj.px - mouseX, tempProj.py - mouseY);
          if (dMouse < 110) {
            const pullForce = (1 - dMouse / 110) * 14;
            const pullAngle = Math.atan2(mouseY - tempProj.py, mouseX - tempProj.px);
            ax += Math.cos(pullAngle) * pullForce;
            ay += Math.sin(pullAngle) * pullForce * 0.4;
          }
        }

        const { px, py, scale, zDepth } = project3D(ax, ay, az);

        renderQueue.push({
          type: "asteroid",
          zDepth,
          draw: () => {
            const currentSize = Math.max(1.2, ast.size * scale);
            ctx.save();
            ctx.translate(px, py);
            ctx.rotate(ast.rotX);

            // Shading: Sun is at origin, facet facing sun is bright
            const distFromSun = Math.hypot(ax, az);
            const isCatchingSun = Math.sin(ast.rotX + ast.theta) > 0.3;

            ctx.fillStyle = isCatchingSun ? "#FCB116" : ast.baseColor;
            ctx.globalAlpha = Math.min(1, Math.max(0.4, (zDepth + 400) / 700));

            ctx.beginPath();
            ast.vertices.forEach((v, idx) => {
              const vx = v.x * scale;
              const vy = v.y * scale;
              if (idx === 0) ctx.moveTo(vx, vy);
              else ctx.lineTo(vx, vy);
            });
            ctx.closePath();
            ctx.fill();

            // Asteroid glint when facing directly toward sunlight
            if (isCatchingSun && currentSize > 2.5) {
              ctx.fillStyle = "#FFF4D0";
              ctx.beginPath();
              ctx.arc(0, 0, currentSize * 0.35, 0, Math.PI * 2);
              ctx.fill();
            }

            ctx.restore();
            ctx.globalAlpha = 1;
          },
        });
      });

      // Sort entities by zDepth (furthest first, closest last)
      renderQueue.sort((a, b) => a.zDepth - b.zDepth);

      // Execute queued draws
      renderQueue.forEach((item) => item.draw());

      // 7. Interactive Stardust Particles (drawn on top)
      for (let s = stardustParticles.length - 1; s >= 0; s--) {
        const dust = stardustParticles[s];
        dust.x += dust.vx;
        dust.y += dust.vy;
        dust.life++;

        const lifeRatio = 1 - dust.life / dust.maxLife;
        if (lifeRatio <= 0) {
          stardustParticles.splice(s, 1);
          continue;
        }

        ctx.fillStyle = dust.color;
        ctx.globalAlpha = lifeRatio * 0.85;
        ctx.beginPath();
        ctx.arc(dust.x, dust.y, dust.size * lifeRatio, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.globalAlpha = 1;

      animId = requestAnimationFrame(render);
    };

    animId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", handleResize);
      container.removeEventListener("pointermove", handlePointerMove);
      container.removeEventListener("pointerenter", handlePointerEnter);
      container.removeEventListener("pointerleave", handlePointerLeave);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 pointer-events-auto overflow-hidden select-none"
      aria-hidden="true"
    >
      <canvas
        ref={canvasRef}
        className="w-full h-full block"
      />
    </div>
  );
}
