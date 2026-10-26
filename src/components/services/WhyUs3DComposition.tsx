"use client";

import React from "react";
import { motion } from "framer-motion";

export function WhyUs3DComposition() {
  return (
    <div className="relative w-full max-w-[460px] h-[320px] sm:h-[360px] lg:h-[390px] mx-auto select-none pointer-events-none">
      {/* Background Ambient Glows */}
      <div className="absolute top-1/4 left-10 w-64 h-64 bg-purple-200/40 rounded-full blur-[80px] pointer-events-none" />
      <div className="absolute bottom-8 right-6 w-56 h-56 bg-amber-200/35 rounded-full blur-[70px] pointer-events-none" />

      {/* Main Vector SVG 3D Architecture Canvas */}
      <svg
        viewBox="0 0 460 380"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full drop-shadow-[0_12px_24px_rgba(80,45,109,0.06)]"
      >
        <defs>
          {/* Shadow Blur Filter */}
          <filter id="whyUsShadowBlur" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="10" />
          </filter>
          <filter id="whyUsSoftBlur" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="5" />
          </filter>

          {/* 1. Amber Glowing Disc Gradient */}
          <linearGradient id="amberDiscGrad" x1="15%" y1="10%" x2="85%" y2="90%">
            <stop offset="0%" stopColor="#FEF08A" stopOpacity="0.95" />
            <stop offset="35%" stopColor="#FBBF24" stopOpacity="0.88" />
            <stop offset="75%" stopColor="#F59E0B" stopOpacity="0.82" />
            <stop offset="100%" stopColor="#EA580C" stopOpacity="0.75" />
          </linearGradient>

          {/* 2. Outer Frosted Glass Arch Gradient */}
          <linearGradient id="outerArchGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.9" />
            <stop offset="40%" stopColor="#F5F3FF" stopOpacity="0.8" />
            <stop offset="85%" stopColor="#DDD6FE" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#C4B5FD" stopOpacity="0.45" />
          </linearGradient>

          {/* 3. Deep Purple Inner Arch Chamber Gradient */}
          <linearGradient id="innerArchGrad" x1="50%" y1="0%" x2="50%" y2="100%">
            <stop offset="0%" stopColor="#2E1065" />
            <stop offset="40%" stopColor="#581C87" />
            <stop offset="75%" stopColor="#7E22CE" />
            <stop offset="100%" stopColor="#9333EA" />
          </linearGradient>

          {/* 4. Foreground Vertical Frosted Glass Slab */}
          <linearGradient id="frontSlabGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.92" />
            <stop offset="30%" stopColor="#FAF5FF" stopOpacity="0.85" />
            <stop offset="100%" stopColor="#EDE9FE" stopOpacity="0.55" />
          </linearGradient>

          {/* 5. Tilted Lilac Cube Face Gradient */}
          <linearGradient id="cubeFaceGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="35%" stopColor="#F5F3FF" />
            <stop offset="70%" stopColor="#DDD6FE" />
            <stop offset="100%" stopColor="#C4B5FD" />
          </linearGradient>

          {/* 6. Glossy Purple Orb Gradient */}
          <radialGradient id="purpleOrbGrad" cx="35%" cy="30%" r="70%">
            <stop offset="0%" stopColor="#C084FC" />
            <stop offset="30%" stopColor="#9333EA" />
            <stop offset="75%" stopColor="#581C87" />
            <stop offset="100%" stopColor="#2E1065" />
          </radialGradient>

          {/* 7. Soft Ambient Floor Shadow Gradient */}
          <radialGradient id="floorShadowGrad" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#502D6D" stopOpacity="0.14" />
            <stop offset="60%" stopColor="#502D6D" stopOpacity="0.06" />
            <stop offset="100%" stopColor="#502D6D" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* ── Floor Ambient Shadows ── */}
        <ellipse cx="230" cy="358" rx="180" ry="14" fill="url(#floorShadowGrad)" />
        <ellipse cx="295" cy="360" rx="75" ry="10" fill="rgba(245, 158, 11, 0.12)" filter="url(#whyUsSoftBlur)" />
        <ellipse cx="325" cy="335" rx="42" ry="10" fill="rgba(80, 45, 109, 0.1)" filter="url(#whyUsSoftBlur)" />

        {/* ── Layer 1: Overlapping Warm Amber Translucent Disc (Behind Arch) ── */}
        <g>
          {/* Ambient Glow behind disc */}
          <circle cx="280" cy="255" r="95" fill="#FDE68A" opacity="0.3" filter="url(#whyUsShadowBlur)" />
          {/* Main Disc */}
          <circle cx="280" cy="255" r="88" fill="url(#amberDiscGrad)" />
          {/* Inner Gloss Rim */}
          <circle cx="280" cy="255" r="87" stroke="rgba(255, 255, 255, 0.7)" strokeWidth="1.5" fill="none" />
          {/* Subtle Crescent Highlight */}
          <path
            d="M 220,230 A 88,88 0 0 1 340,210 A 86,86 0 0 0 226,236 Z"
            fill="#FFFFFF"
            opacity="0.3"
          />
        </g>

        {/* ── Layer 2: Large Frosted Glass Arch ── */}
        <g>
          {/* Outer Arch Shape: from x=75 to x=255 (width 180, radius 90) */}
          <path
            d="M 75,355 L 75,190 A 90,90 0 0 1 255,190 L 255,355 Z"
            fill="url(#outerArchGrad)"
            stroke="rgba(255, 255, 255, 0.9)"
            strokeWidth="2"
          />
          {/* Outer Glass Bevel Sheen */}
          <path
            d="M 77,192 A 88,88 0 0 1 253,192"
            stroke="#FFFFFF"
            strokeWidth="2"
            strokeLinecap="round"
            fill="none"
            opacity="0.75"
          />

          {/* Deep Purple Inner Arch Chamber: from x=110 to x=220 (width 110, radius 55) */}
          <path
            d="M 110,355 L 110,225 A 55,55 0 0 1 220,225 L 220,355 Z"
            fill="url(#innerArchGrad)"
          />
          {/* Inner Chamber Top Rim Highlight */}
          <path
            d="M 112,225 A 53,53 0 0 1 218,225"
            stroke="rgba(255, 255, 255, 0.45)"
            strokeWidth="2"
            fill="none"
          />
          {/* Inner Chamber Vertical Depth Shading */}
          <line x1="110" y1="230" x2="110" y2="355" stroke="rgba(0, 0, 0, 0.25)" strokeWidth="2" />
        </g>

        {/* ── Layer 3: Vertical Frosted Glass Slab (Foreground Right of Arch) ── */}
        <g>
          <rect
            x="180"
            y="200"
            width="68"
            height="155"
            rx="22"
            fill="url(#frontSlabGrad)"
            stroke="rgba(255, 255, 255, 0.95)"
            strokeWidth="1.5"
          />
          {/* Specular Edge Highlight */}
          <line
            x1="186"
            y1="215"
            x2="186"
            y2="340"
            stroke="rgba(255, 255, 255, 0.85)"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </g>

        {/* ── Layer 4: Floating Tilted Pastel Lilac Cube / Squircle (with idle float) ── */}
        <g transform="translate(325, 175)">
          <motion.g
            animate={{
              y: [-6, 6, -6],
              rotate: [25, 28, 25],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            {/* Ambient Drop Shadow on Amber Disc & Floor */}
            <rect
              x="-44"
              y="-44"
              width="88"
              height="88"
              rx="22"
              fill="rgba(80, 45, 109, 0.18)"
              transform="translate(10, 18)"
              filter="url(#whyUsSoftBlur)"
            />
            {/* 3D Depth Underlayer */}
            <rect
              x="-44"
              y="-44"
              width="88"
              height="88"
              rx="22"
              fill="#A78BFA"
              opacity="0.65"
              transform="translate(4, 7)"
            />
            {/* Main Face */}
            <rect
              x="-44"
              y="-44"
              width="88"
              height="88"
              rx="22"
              fill="url(#cubeFaceGrad)"
              stroke="rgba(255, 255, 255, 0.95)"
              strokeWidth="2"
            />
            {/* Top Gloss Highlight */}
            <path
              d="M -34,-34 L 28,-34 A 8,8 0 0 0 20,-40 L -34,-40 Z"
              fill="#FFFFFF"
              opacity="0.7"
            />
          </motion.g>
        </g>

        {/* ── Layer 5: Glossy Purple Orb with Golden Orbit Ring at Apex ── */}
        <g transform="translate(242, 138)">
          {/* Orbital Wireframe Ring */}
          <ellipse
            cx="0"
            cy="0"
            rx="36"
            ry="12"
            fill="none"
            stroke="#D8B4FE"
            strokeWidth="1.5"
            strokeDasharray="3 3"
            opacity="0.85"
            transform="rotate(-22)"
          />

          {/* Deep Purple Sphere */}
          <circle
            cx="0"
            cy="0"
            r="15"
            fill="url(#purpleOrbGrad)"
            filter="drop-shadow(0 4px 10px rgba(46, 16, 101, 0.45))"
          />
          {/* Sphere Specular Highlights */}
          <circle cx="-4.5" cy="-4.5" r="4" fill="#FFFFFF" opacity="0.9" />
          <circle cx="2.5" cy="2.5" r="1.5" fill="#FFFFFF" opacity="0.4" />

          {/* Orbiting Satellite Dot */}
          <motion.g
            animate={{
              scale: [1, 1.25, 1],
              opacity: [0.9, 1, 0.9],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            transform="rotate(-22)"
          >
            <circle
              cx="34"
              cy="2"
              r="3.5"
              fill="#FCB116"
              filter="drop-shadow(0 0 6px #FCB116)"
            />
            <circle cx="34" cy="2" r="1.5" fill="#FFFBEB" />
          </motion.g>
        </g>

        {/* ── Layer 6: Ambient Floating Golden Particles & Sparks ── */}
        {/* Left Golden Spark / Leaf */}
        <g transform="translate(112, 155) rotate(-15)">
          <path
            d="M 0,-8 C 4,-3 8,0 8,8 C 4,3 0,0 0,-8 Z"
            fill="#F59E0B"
            opacity="0.9"
            filter="drop-shadow(0 0 6px #FBBF24)"
          />
        </g>

        {/* Right Floating Amber Orb */}
        <g transform="translate(335, 270)">
          <circle cx="0" cy="0" r="5" fill="#F59E0B" filter="drop-shadow(0 0 6px #F59E0B)" />
          <circle cx="0" cy="0" r="2.2" fill="#FEF3C7" />
        </g>

        {/* Far-left Delicate Purple Particle */}
        <circle cx="85" cy="275" r="3" fill="#A855F7" opacity="0.6" />
      </svg>
    </div>
  );
}
