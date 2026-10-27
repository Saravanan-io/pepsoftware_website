"use client";

import React, { useRef, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Sparkles } from "@react-three/drei";
import * as THREE from "three";

function RibbonMesh() {
  const meshRef = useRef<THREE.Mesh>(null);
  const ringRef = useRef<THREE.Mesh>(null);

  useFrame((state, delta) => {
    const t = state.clock.getElapsedTime();
    if (meshRef.current) {
      // Smooth continuous 3D rotation and organic wobble
      meshRef.current.rotation.y += delta * 0.22;
      meshRef.current.rotation.x = Math.sin(t * 0.35) * 0.18 + 0.2;
      meshRef.current.rotation.z = Math.cos(t * 0.3) * 0.12;
    }
    if (ringRef.current) {
      ringRef.current.rotation.y -= delta * 0.12;
      ringRef.current.rotation.x = Math.sin(t * 0.3) * 0.25 + 0.5;
    }
  });

  return (
    <group position={[0, 0, 0]}>
      {/* Main 3D Iridescent Möbius / Torus Ribbon */}
      <Float speed={1.6} rotationIntensity={0.35} floatIntensity={0.4}>
        <mesh ref={meshRef} scale={1.0}>
          <torusKnotGeometry args={[1.35, 0.38, 180, 32, 2, 3]} />
          <meshPhysicalMaterial
            color="#A855F7"
            emissive="#4A044E"
            emissiveIntensity={0.28}
            roughness={0.06}
            metalness={0.15}
            clearcoat={1}
            clearcoatRoughness={0.08}
            transmission={0.84}
            ior={1.5}
            thickness={2.4}
            specularIntensity={1.4}
            specularColor="#FFFFFF"
            attenuationColor="#F472B6"
            attenuationDistance={1.2}
            iridescence={0.88}
            iridescenceIOR={1.45}
            transparent
            opacity={0.96}
          />
        </mesh>
      </Float>

      {/* Floating accent caustics golden orbital ring */}
      <Float speed={1.3} rotationIntensity={0.4} floatIntensity={0.3}>
        <mesh ref={ringRef} scale={1.0} rotation={[Math.PI / 3, 0.2, Math.PI / 4]}>
          <torusGeometry args={[1.85, 0.024, 16, 80]} />
          <meshStandardMaterial
            color="#F59E0B"
            emissive="#D97706"
            emissiveIntensity={0.7}
            roughness={0.1}
            metalness={0.8}
            transparent
            opacity={0.75}
          />
        </mesh>
      </Float>

      {/* Subtle floating gold & violet ambient sparkles */}
      <Sparkles count={30} scale={4.5} size={2.2} speed={0.35} opacity={0.6} color="#FDE68A" />
      <Sparkles count={20} scale={4.0} size={1.8} speed={0.28} opacity={0.5} color="#C084FC" />
    </group>
  );
}

/**
 * High-fidelity 3D Crystalline Flow Ribbon with SVG Glass Refraction & CSS 3D
 * Used as primary fallback or lightweight engine when WebGL context is restricted.
 */
function CSS3DFlowRibbon() {
  return (
    <div className="relative w-full h-full flex items-center justify-center select-none pointer-events-none">
      {/* Background ambient light burst */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[380px] h-[380px] bg-gradient-to-tr from-[#9333EA]/30 via-[#EC4899]/20 to-[#F59E0B]/25 rounded-full blur-[90px] animate-pulse" />

      {/* 3D Flowing Ribbon Composition */}
      <div className="relative w-[340px] h-[340px] sm:w-[420px] sm:h-[420px] animate-[spin_24s_linear_infinite]">
        <svg
          viewBox="0 0 500 500"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full overflow-visible"
        >
          <defs>
            {/* Iridescent Glass Gradients */}
            <linearGradient id="ribbonGrad1" x1="10%" y1="0%" x2="90%" y2="100%">
              <stop offset="0%" stopColor="#C084FC" stopOpacity="0.95" />
              <stop offset="35%" stopColor="#8B5CF6" stopOpacity="0.85" />
              <stop offset="65%" stopColor="#EC4899" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#F59E0B" stopOpacity="0.95" />
            </linearGradient>

            <linearGradient id="ribbonGrad2" x1="100%" y1="10%" x2="0%" y2="90%">
              <stop offset="0%" stopColor="#FDBA74" stopOpacity="0.95" />
              <stop offset="40%" stopColor="#C084FC" stopOpacity="0.75" />
              <stop offset="70%" stopColor="#7C3AED" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#6366F1" stopOpacity="0.9" />
            </linearGradient>

            <linearGradient id="specularGlint" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0" />
              <stop offset="50%" stopColor="#FFFFFF" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
            </linearGradient>
          </defs>

          {/* Ribbon Layer 1: Back Under-Loop */}
          <path
            d="M 140 180 
               C 100 270, 160 380, 260 410 
               C 360 440, 440 370, 430 260 
               C 420 150, 310 90, 210 110 
               C 120 130, 90 220, 140 310
               C 190 400, 320 440, 400 380"
            stroke="url(#ribbonGrad2)"
            strokeWidth="56"
            strokeLinecap="round"
            fill="none"
            opacity="0.85"
          />

          {/* Ribbon Layer 2: Main Outer Möbius Twist */}
          <path
            d="M 140 180 
               C 100 270, 160 380, 260 410 
               C 360 440, 440 370, 430 260 
               C 420 150, 310 90, 210 110 
               C 120 130, 90 220, 140 310"
            stroke="url(#ribbonGrad1)"
            strokeWidth="48"
            strokeLinecap="round"
            fill="none"
          />

          {/* Caustic Glass Highlights (Specular Sheen Edge) */}
          <path
            d="M 155 190 
               C 120 270, 175 365, 265 395 
               C 355 425, 425 360, 415 260 
               C 405 160, 305 105, 215 125"
            stroke="url(#specularGlint)"
            strokeWidth="5"
            strokeLinecap="round"
            fill="none"
            opacity="0.9"
          />

          {/* Golden Orbit Ring Accent */}
          <ellipse
            cx="250"
            cy="250"
            rx="210"
            ry="85"
            stroke="#F59E0B"
            strokeWidth="2.5"
            strokeOpacity="0.75"
            fill="none"
            transform="rotate(-25 250 250)"
          />
        </svg>
      </div>
    </div>
  );
}

export function Story3DFlowRibbon() {
  const [webglSupported, setWebglSupported] = useState<boolean | null>(null);

  useEffect(() => {
    try {
      const canvas = document.createElement("canvas");
      const gl =
        canvas.getContext("webgl", { powerPreference: "high-performance" }) ||
        canvas.getContext("experimental-webgl");
      setWebglSupported(!!gl);
    } catch (e) {
      setWebglSupported(false);
    }
  }, []);

  // During SSR or checking, render fallback smoothly
  if (webglSupported === false) {
    return (
      <div className="w-full h-full min-h-[380px] sm:min-h-[460px] lg:min-h-[520px] relative pointer-events-none select-none flex items-center justify-center">
        <CSS3DFlowRibbon />
      </div>
    );
  }

  if (webglSupported === null) {
    return (
      <div className="w-full h-full min-h-[380px] sm:min-h-[460px] lg:min-h-[520px] relative pointer-events-none select-none" />
    );
  }

  return (
    <div className="w-full h-full min-h-[400px] sm:min-h-[460px] lg:min-h-[520px] relative pointer-events-none select-none flex items-center justify-center [mask-image:radial-gradient(circle_at_center,black_70%,transparent_100%)] [-webkit-mask-image:radial-gradient(circle_at_center,black_70%,transparent_100%)]">
      <Canvas
        camera={{ position: [0, 0, 7.0], fov: 42 }}
        dpr={[1, 1.5]}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: "high-performance",
        }}
        className="w-full h-full"
      >
        <ambientLight intensity={1.2} />
        {/* Warm golden directional point light from top-right matching reference image */}
        <pointLight position={[5, 4, 3]} intensity={8.5} color="#FB923C" />
        {/* Deep rich purple glow from left */}
        <pointLight position={[-4, -2, 3]} intensity={7.5} color="#A855F7" />
        {/* Cyan rim light from bottom */}
        <pointLight position={[0, -4, -2]} intensity={3.5} color="#67E8F9" />
        <directionalLight position={[1, 5, 2]} intensity={2.5} color="#FFFFFF" />

        <RibbonMesh />
      </Canvas>
    </div>
  );
}
