"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

interface AsteroidItem {
  mesh: THREE.Mesh;
  vx: number;
  vy: number;
  vz: number;
  rotSpeedX: number;
  rotSpeedY: number;
  rotSpeedZ: number;
  initialY: number;
  orbitRadiusX: number;
  orbitRadiusY: number;
  orbitSpeed: number;
  orbitAngle: number;
}

interface ShootingStar {
  line: THREE.Line;
  active: boolean;
  progress: number;
  speed: number;
  startPos: THREE.Vector3;
  dir: THREE.Vector3;
  length: number;
  cooldown: number;
}

export function AsteroidSpaceBackground() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    let animId: number;
    let isVisible = true;

    // ─── Scene, Camera & Renderer Setup ─────────────────────────────────────
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x030306, 0.012);

    let width = container.clientWidth || window.innerWidth;
    let height = container.clientHeight || 500;

    const camera = new THREE.PerspectiveCamera(48, width / height, 0.1, 200);
    camera.position.set(0, 0, 28);

    const renderer = new THREE.WebGLRenderer({
      canvas,
      alpha: true,
      antialias: true,
      powerPreference: "high-performance",
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.15;

    // ─── Lighting: Dramatic Deep-Space High-Contrast Lighting ───────────────
    // Primary distant Sun directional light with warm/white illumination
    const sunLight = new THREE.DirectionalLight(0xfff6ea, 2.8);
    sunLight.position.set(-25, 20, 22);
    scene.add(sunLight);

    // Secondary stellar backlight creating dramatic silver/blue silhouette
    const backSunLight = new THREE.DirectionalLight(0x7090d0, 1.2);
    backSunLight.position.set(28, -15, -18);
    scene.add(backSunLight);

    // PEP Brand Deep Violet / Amethyst Point Light (Ambient nebula glow)
    const purpleLight = new THREE.PointLight(0xa855f7, 3.5, 75, 1.2);
    purpleLight.position.set(-18, -8, 10);
    scene.add(purpleLight);

    // PEP Brand Golden Amber Point Light (Stellar flare glow)
    const amberLight = new THREE.PointLight(0xfcb116, 2.8, 65, 1.4);
    amberLight.position.set(20, 10, 8);
    scene.add(amberLight);

    // Low ambient fill so dark sides of asteroids maintain faceted silhouette
    const ambientLight = new THREE.AmbientLight(0x1a1626, 0.85);
    scene.add(ambientLight);

    // ─── Procedural Asteroid Generator ───────────────────────────────────────
    const createAsteroidGeometry = (radius: number, detail: number, seed: number) => {
      // Dodecahedron with subdivision creates authentic polyhedral space rock base
      const baseGeom = new THREE.DodecahedronGeometry(radius, detail);

      const posAttr = baseGeom.attributes.position;
      const v = new THREE.Vector3();
      const craterCenter = new THREE.Vector3(
        Math.sin(seed * 2.3),
        Math.cos(seed * 3.7),
        Math.sin(seed * 5.1)
      ).normalize();
      const craterRadius = 0.65;

      for (let i = 0; i < posAttr.count; i++) {
        v.fromBufferAttribute(posAttr, i);
        const originalLen = v.length();
        v.normalize();

        // 3D Multi-frequency displacement for rocky crags & jagged ridges
        const n1 = Math.sin(v.x * 4.2 + seed) * Math.cos(v.y * 3.8 + seed * 1.3) * 0.28;
        const n2 = Math.sin(v.y * 8.5 + seed * 2.1) * Math.cos(v.z * 7.4) * 0.12;
        const n3 = Math.cos(v.z * 13.2 + seed * 0.7) * 0.06;

        // Crater depression indentation
        const distToCrater = v.distanceTo(craterCenter);
        let craterIndent = 0;
        if (distToCrater < craterRadius) {
          craterIndent = Math.sin((distToCrater / craterRadius) * Math.PI) * 0.22;
        }

        const distortion = 1 + n1 + n2 + n3 - craterIndent;
        v.multiplyScalar(originalLen * distortion);
        posAttr.setXYZ(i, v.x, v.y, v.z);
      }

      posAttr.needsUpdate = true;

      // toNonIndexed gives each face separate normals = sharp crystal/rock facets
      const finalGeom: THREE.BufferGeometry = baseGeom.toNonIndexed();
      baseGeom.dispose();
      finalGeom.computeVertexNormals();
      return finalGeom;
    };

    // Material Variations for Real Space Asteroids with Rich Cosmic Lighting
    const materials = [
      // Carbonaceous Chondrite with Subtle Specular Sheen
      new THREE.MeshStandardMaterial({
        color: 0x333644,
        roughness: 0.7,
        metalness: 0.28,
        flatShading: true,
      }),
      // Nickel-Iron Asteroid with Metallic Space Flare
      new THREE.MeshStandardMaterial({
        color: 0x48423d,
        roughness: 0.55,
        metalness: 0.6,
        flatShading: true,
      }),
      // Cosmic Amethyst/Obsidian mineral rock
      new THREE.MeshStandardMaterial({
        color: 0x2e2740,
        roughness: 0.68,
        metalness: 0.35,
        flatShading: true,
      }),
      // Golden Amber ore-bearing space stone
      new THREE.MeshStandardMaterial({
        color: 0x423625,
        roughness: 0.62,
        metalness: 0.48,
        flatShading: true,
      }),
    ];

    // ─── Spawn Roaming Asteroids (Thoughtfully Framed Around Content) ──────────
    const asteroids: AsteroidItem[] = [];
    const asteroidCount = 28;

    // Define bounds for wrapping in 3D
    const bounds = {
      x: 34,
      y: 19,
      zMin: -36,
      zMax: 8,
    };

    for (let i = 0; i < asteroidCount; i++) {
      const seed = i * 1.73 + 0.42;

      let radius: number;
      let detail: number;
      let posX: number;
      let posY: number;
      let posZ: number;

      if (i < 5) {
        // Hero Foreground Asteroids: Placed in peripheral wings so text stays crystal clear
        radius = 1.6 + (i % 3) * 0.5;
        detail = 2;
        posZ = -2 + (i % 3) * 3;

        // Position on left flank, right flank, or top margin
        if (i === 0) {
          posX = -22 - Math.random() * 6; // Far left
          posY = 2 + Math.random() * 6;
        } else if (i === 1) {
          posX = 21 + Math.random() * 7; // Far right
          posY = 3 + Math.random() * 5;
        } else if (i === 2) {
          posX = -20 - Math.random() * 5;
          posY = -6 - Math.random() * 4; // Bottom left
        } else if (i === 3) {
          posX = 23 + Math.random() * 6;
          posY = -5 - Math.random() * 4; // Bottom right
        } else {
          posX = (Math.random() - 0.5) * 16;
          posY = 12 + Math.random() * 3; // Upper horizon
        }
      } else if (i < 15) {
        // Midground Asteroids: Placed with depth (z: -14 to -22) so they don't occlude text
        radius = 0.8 + (i % 4) * 0.3;
        detail = 1;
        posZ = -14 - (i % 5) * 2;
        posX = (Math.random() - 0.5) * bounds.x * 1.7;
        posY = (Math.random() - 0.5) * bounds.y * 1.6;
      } else {
        // Deep Space Background Asteroids: Distant belt (z: -25 to -35)
        radius = 0.35 + (i % 5) * 0.15;
        detail = 1;
        posZ = -26 - (i % 6) * 2;
        posX = (Math.random() - 0.5) * bounds.x * 2;
        posY = (Math.random() - 0.5) * bounds.y * 1.8;
      }

      const geom = createAsteroidGeometry(radius, detail, seed);
      const mat = materials[i % materials.length];
      const mesh = new THREE.Mesh(geom, mat);

      mesh.position.set(posX, posY, posZ);

      // Initial random rotation
      mesh.rotation.set(
        Math.random() * Math.PI * 2,
        Math.random() * Math.PI * 2,
        Math.random() * Math.PI * 2
      );

      scene.add(mesh);

      asteroids.push({
        mesh,
        // Smooth roaming velocities
        vx: (Math.random() - 0.48) * 0.012,
        vy: (Math.random() - 0.5) * 0.009,
        vz: (Math.random() - 0.5) * 0.006,
        // 3-Axis tumbling speeds
        rotSpeedX: (Math.random() - 0.5) * 0.014,
        rotSpeedY: (Math.random() - 0.5) * 0.016,
        rotSpeedZ: (Math.random() - 0.5) * 0.011,
        initialY: posY,
        orbitRadiusX: 1.2 + Math.random() * 2.5,
        orbitRadiusY: 0.6 + Math.random() * 1.5,
        orbitSpeed: 0.15 + Math.random() * 0.3,
        orbitAngle: Math.random() * Math.PI * 2,
      });
    }

    // ─── 3D Starfield System ────────────────────────────────────────────────
    const starCount = 1200;
    const starGeo = new THREE.BufferGeometry();
    const starPositions = new Float32Array(starCount * 3);
    const starColors = new Float32Array(starCount * 3);

    const palette = [
      new THREE.Color("#FFFFFF"), // Crisp White
      new THREE.Color("#FFE4B5"), // Warm Stellar Amber
      new THREE.Color("#D8B4FE"), // Subtle Violet Star
      new THREE.Color("#BAE6FD"), // Ice Blue Star
      new THREE.Color("#FDE047"), // Golden Spark
    ];

    for (let i = 0; i < starCount; i++) {
      const i3 = i * 3;
      starPositions[i3] = (Math.random() - 0.5) * 90;
      starPositions[i3 + 1] = (Math.random() - 0.5) * 60;
      starPositions[i3 + 2] = -50 + Math.random() * 60;

      const col = palette[Math.floor(Math.random() * palette.length)];
      // Subtle brightness variation
      const lum = 0.55 + Math.random() * 0.45;
      starColors[i3] = col.r * lum;
      starColors[i3 + 1] = col.g * lum;
      starColors[i3 + 2] = col.b * lum;
    }

    starGeo.setAttribute("position", new THREE.BufferAttribute(starPositions, 3));
    starGeo.setAttribute("color", new THREE.BufferAttribute(starColors, 3));

    // Create a circular glowing star particle texture programmatically
    const createStarTexture = () => {
      const texCanvas = document.createElement("canvas");
      texCanvas.width = 32;
      texCanvas.height = 32;
      const ctx = texCanvas.getContext("2d");
      if (!ctx) return null;

      const grad = ctx.createRadialGradient(16, 16, 0, 16, 16, 16);
      grad.addColorStop(0, "rgba(255, 255, 255, 1)");
      grad.addColorStop(0.25, "rgba(255, 255, 255, 0.8)");
      grad.addColorStop(0.55, "rgba(255, 255, 255, 0.25)");
      grad.addColorStop(1, "rgba(255, 255, 255, 0)");

      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, 32, 32);

      const texture = new THREE.CanvasTexture(texCanvas);
      return texture;
    };

    const starTexture = createStarTexture();

    const starMat = new THREE.PointsMaterial({
      size: 0.38,
      vertexColors: true,
      map: starTexture ?? undefined,
      transparent: true,
      opacity: 0.95,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    const starPoints = new THREE.Points(starGeo, starMat);
    scene.add(starPoints);

    // ─── Floating Cosmic Dust / Micro Debris Particles ──────────────────────
    const dustCount = 180;
    const dustGeo = new THREE.BufferGeometry();
    const dustPositions = new Float32Array(dustCount * 3);
    const dustVelocities: { x: number; y: number; z: number }[] = [];

    for (let i = 0; i < dustCount; i++) {
      const i3 = i * 3;
      dustPositions[i3] = (Math.random() - 0.5) * 45;
      dustPositions[i3 + 1] = (Math.random() - 0.5) * 30;
      dustPositions[i3 + 2] = -15 + Math.random() * 25;

      dustVelocities.push({
        x: (Math.random() - 0.5) * 0.008,
        y: (Math.random() - 0.5) * 0.006,
        z: (Math.random() - 0.5) * 0.005,
      });
    }

    dustGeo.setAttribute("position", new THREE.BufferAttribute(dustPositions, 3));

    const dustMat = new THREE.PointsMaterial({
      size: 0.22,
      color: 0xfcb116,
      map: starTexture ?? undefined,
      transparent: true,
      opacity: 0.55,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    const dustPoints = new THREE.Points(dustGeo, dustMat);
    scene.add(dustPoints);

    // ─── Shooting Stars / Meteors ───────────────────────────────────────────
    const shootingStars: ShootingStar[] = [];
    const maxShootingStars = 3;

    for (let i = 0; i < maxShootingStars; i++) {
      const lineGeo = new THREE.BufferGeometry();
      const linePositions = new Float32Array(6); // 2 points (head & tail)
      lineGeo.setAttribute("position", new THREE.BufferAttribute(linePositions, 3));

      const lineMat = new THREE.LineBasicMaterial({
        color: i % 2 === 0 ? 0xfff3d6 : 0xd8b4fe,
        transparent: true,
        opacity: 0,
        blending: THREE.AdditiveBlending,
      });

      const line = new THREE.Line(lineGeo, lineMat);
      scene.add(line);

      shootingStars.push({
        line,
        active: false,
        progress: 0,
        speed: 0.025 + Math.random() * 0.02,
        startPos: new THREE.Vector3(),
        dir: new THREE.Vector3(),
        length: 6 + Math.random() * 5,
        cooldown: Math.random() * 180 + 60, // frames before firing
      });
    }

    const triggerShootingStar = (star: ShootingStar) => {
      star.active = true;
      star.progress = 0;
      star.speed = 0.02 + Math.random() * 0.025;
      star.length = 5 + Math.random() * 6;

      // Start somewhere in upper half
      star.startPos.set(
        (Math.random() - 0.3) * 35,
        5 + Math.random() * 12,
        -10 + Math.random() * 15
      );

      // Trajectory pointing downwards & slightly left/right
      const angle = -Math.PI / 4 + (Math.random() - 0.5) * 0.4;
      star.dir.set(Math.cos(angle) * 30, Math.sin(angle) * 30, (Math.random() - 0.5) * 5);
      (star.line.material as THREE.LineBasicMaterial).opacity = 0.9;
    };

    // ─── Mouse Tracking & Parallax ──────────────────────────────────────────
    let targetCameraX = 0;
    let targetCameraY = 0;

    const handlePointerMove = (e: PointerEvent) => {
      const rect = container.getBoundingClientRect();
      const nx = (e.clientX - rect.left) / rect.width;
      const ny = (e.clientY - rect.top) / rect.height;

      // Smooth camera tilt targets
      targetCameraX = (nx - 0.5) * 5.5;
      targetCameraY = -(ny - 0.5) * 3.5;

      // Move ambient lights slightly towards mouse for interactive illumination
      purpleLight.position.x = -18 + (nx - 0.5) * 12;
      amberLight.position.x = 20 - (nx - 0.5) * 12;
    };

    container.addEventListener("pointermove", handlePointerMove);

    // ─── Resize Handler ─────────────────────────────────────────────────────
    const handleResize = () => {
      if (!container || !renderer || !camera) return;
      width = container.clientWidth || window.innerWidth;
      height = container.clientHeight || 500;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    window.addEventListener("resize", handleResize);

    // ─── Intersection Observer (Pause when off-screen) ─────────────────────
    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisible = entry.isIntersecting;
      },
      { rootMargin: "150px" }
    );
    observer.observe(container);

    // ─── Animation Loop ─────────────────────────────────────────────────────
    const clock = new THREE.Clock();

    const animate = () => {
      animId = requestAnimationFrame(animate);

      if (!isVisible) return;

      const elapsed = clock.getElapsedTime();

      // Smooth Camera Parallax Lerp
      camera.position.x += (targetCameraX - camera.position.x) * 0.045;
      camera.position.y += (targetCameraY - camera.position.y) * 0.045;
      camera.lookAt(0, 0, 0);

      // 1. Animate Roaming Asteroids
      for (let i = 0; i < asteroids.length; i++) {
        const item = asteroids[i];
        const m = item.mesh;

        // Roaming drift movement
        m.position.x += item.vx;
        m.position.y += item.vy + Math.sin(elapsed * item.orbitSpeed + item.orbitAngle) * 0.003;
        m.position.z += item.vz;

        // Multi-axis 3D tumbling rotation
        m.rotation.x += item.rotSpeedX;
        m.rotation.y += item.rotSpeedY;
        m.rotation.z += item.rotSpeedZ;

        // Wrap around boundaries seamlessly
        if (m.position.x > bounds.x) m.position.x = -bounds.x;
        else if (m.position.x < -bounds.x) m.position.x = bounds.x;

        if (m.position.y > bounds.y) m.position.y = -bounds.y;
        else if (m.position.y < -bounds.y) m.position.y = bounds.y;

        if (m.position.z > bounds.zMax) m.position.z = bounds.zMin;
        else if (m.position.z < bounds.zMin) m.position.z = bounds.zMax;
      }

      // 2. Slow subtle Starfield drift & twinkle
      starPoints.rotation.y = elapsed * 0.003;
      starPoints.rotation.x = Math.sin(elapsed * 0.002) * 0.02;

      // 3. Float Cosmic Dust Motes
      const dPos = dustGeo.attributes.position as THREE.BufferAttribute;
      for (let i = 0; i < dustCount; i++) {
        const vel = dustVelocities[i];

        let x = dPos.getX(i) + vel.x;
        let y = dPos.getY(i) + vel.y + Math.sin(elapsed * 0.5 + i) * 0.002;
        const z = dPos.getZ(i) + vel.z;

        if (x > 25) x = -25;
        if (x < -25) x = 25;
        if (y > 15) y = -15;
        if (y < -15) y = 15;

        dPos.setXYZ(i, x, y, z);
      }
      dPos.needsUpdate = true;

      // 4. Update Shooting Stars
      for (let i = 0; i < shootingStars.length; i++) {
        const ss = shootingStars[i];
        if (!ss.active) {
          ss.cooldown--;
          if (ss.cooldown <= 0) {
            triggerShootingStar(ss);
          }
        } else {
          ss.progress += ss.speed;
          const posAttr = ss.line.geometry.attributes.position as THREE.BufferAttribute;

          // Head position
          const hx = ss.startPos.x + ss.dir.x * ss.progress;
          const hy = ss.startPos.y + ss.dir.y * ss.progress;
          const hz = ss.startPos.z + ss.dir.z * ss.progress;

          // Tail position lags behind head
          const tailProgress = Math.max(0, ss.progress - 0.12);
          const tx = ss.startPos.x + ss.dir.x * tailProgress;
          const ty = ss.startPos.y + ss.dir.y * tailProgress;
          const tz = ss.startPos.z + ss.dir.z * tailProgress;

          posAttr.setXYZ(0, hx, hy, hz);
          posAttr.setXYZ(1, tx, ty, tz);
          posAttr.needsUpdate = true;

          // Fade out towards completion
          const lineMat = ss.line.material as THREE.LineBasicMaterial;
          if (ss.progress > 0.7) {
            lineMat.opacity = Math.max(0, (1 - ss.progress) / 0.3);
          } else {
            lineMat.opacity = 0.95;
          }

          if (ss.progress >= 1) {
            ss.active = false;
            lineMat.opacity = 0;
            ss.cooldown = 120 + Math.random() * 240; // 2-4 seconds until next
          }
        }
      }

      renderer.render(scene, camera);
    };

    animate();

    // ─── Cleanup on Unmount ─────────────────────────────────────────────────
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", handleResize);
      container.removeEventListener("pointermove", handlePointerMove);
      observer.disconnect();

      // Dispose Geometries & Materials to free GPU memory
      asteroids.forEach((item) => {
        item.mesh.geometry.dispose();
      });
      materials.forEach((m) => m.dispose());

      starGeo.dispose();
      starMat.dispose();
      if (starTexture) starTexture.dispose();

      dustGeo.dispose();
      dustMat.dispose();

      shootingStars.forEach((ss) => {
        ss.line.geometry.dispose();
        (ss.line.material as THREE.Material).dispose();
      });

      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 w-full h-full pointer-events-none select-none overflow-hidden"
      aria-hidden="true"
    >
      <canvas
        ref={canvasRef}
        className="w-full h-full block"
        style={{ width: "100%", height: "100%" }}
      />
    </div>
  );
}
