"use client";

import React from "react";
import { motion } from "framer-motion";

export function Philosophy3DOrb() {
  return (
    <div className="relative w-full max-w-[480px] h-[350px] flex items-center justify-center select-none pt-4">
      {/* Background radial soft purple glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[340px] h-[340px] rounded-full bg-purple-500/15 blur-3xl" />
        <div className="w-[200px] h-[200px] rounded-full bg-violet-400/20 blur-2xl" />
      </div>

      {/* Subtle background dot matrix pattern */}
      <div 
        className="absolute top-2 left-6 w-28 h-20 opacity-20 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(#7C3AED 1.2px, transparent 1.2px)",
          backgroundSize: "12px 12px",
        }}
      />

      {/* Main 3D System Container */}
      <div className="relative flex items-center justify-center w-[340px] h-[280px] -ml-6">
        {/* Orbital Ellipses */}
        <svg
          viewBox="0 0 400 300"
          className="w-[360px] h-[270px] pointer-events-none overflow-visible"
        >
          {/* Orbit Ring 1 (outer wide) */}
          <ellipse
            cx="200"
            cy="150"
            rx="160"
            ry="78"
            fill="none"
            stroke="#C084FC"
            strokeOpacity="0.45"
            strokeWidth="1.4"
            transform="rotate(-23 200 150)"
          />

          {/* Orbit Ring 2 (middle) */}
          <ellipse
            cx="200"
            cy="150"
            rx="130"
            ry="64"
            fill="none"
            stroke="#A855F7"
            strokeOpacity="0.35"
            strokeWidth="1.2"
            transform="rotate(-16 200 150)"
          />

          {/* Orbit Ring 3 (inner tilted) */}
          <ellipse
            cx="200"
            cy="150"
            rx="142"
            ry="60"
            fill="none"
            stroke="#818CF8"
            strokeOpacity="0.3"
            strokeWidth="1.2"
            transform="rotate(-33 200 150)"
          />
        </svg>

        {/* Orbiting Satellite Beads (3D Spheres) */}
        {/* Top-Right satellite */}
        <motion.div
          animate={{ y: [-3, 3, -3], x: [2, -2, 2] }}
          transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-9 right-14 w-4 h-4 rounded-full shadow-[0_0_12px_rgba(168,85,247,0.85)] z-20 pointer-events-none"
          style={{
            background: "radial-gradient(circle at 35% 30%, #F5F3FF 0%, #A855F7 45%, #581C87 100%)",
          }}
        />

        {/* Far-Right satellite */}
        <motion.div
          animate={{ y: [3, -3, 3], x: [-2, 2, -2] }}
          transition={{ duration: 5.1, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 right-4 w-5 h-5 rounded-full shadow-[0_0_15px_rgba(139,92,246,0.85)] z-20 pointer-events-none"
          style={{
            background: "radial-gradient(circle at 35% 30%, #FFFFFF 0%, #8B5CF6 50%, #4C1D95 100%)",
          }}
        />

        {/* Left middle satellite */}
        <motion.div
          animate={{ y: [-4, 4, -4], x: [-1, 2, -1] }}
          transition={{ duration: 4.7, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-26 left-6 w-4 h-4 rounded-full shadow-[0_0_12px_rgba(147,51,234,0.75)] z-20 pointer-events-none"
          style={{
            background: "radial-gradient(circle at 35% 30%, #EEF2FF 0%, #7C3AED 45%, #3B0764 100%)",
          }}
        />

        {/* Bottom-left satellite */}
        <motion.div
          animate={{ y: [2, -3, 2], x: [1, -2, 1] }}
          transition={{ duration: 3.9, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-10 left-16 w-4 h-4 rounded-full shadow-[0_0_12px_rgba(124,58,237,0.85)] z-20 pointer-events-none"
          style={{
            background: "radial-gradient(circle at 35% 30%, #FAF5FF 0%, #7C3AED 50%, #2E1065 100%)",
          }}
        />

        {/* Central Luminous 3D Glass Orb */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <motion.div
            animate={{ y: [-5, 5, -5], rotate: [0, 1.5, -1.5, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="relative w-32 h-32 sm:w-36 sm:h-36 rounded-full flex items-center justify-center shadow-2xl"
            style={{
              background:
                "radial-gradient(circle at 35% 26%, #E9D5FF 0%, #C084FC 20%, #8B5CF6 45%, #6D28D9 70%, #4C1D95 90%, #2E1065 100%)",
              boxShadow:
                "0 0 50px rgba(139, 92, 246, 0.7), 0 0 95px rgba(124, 58, 237, 0.4), inset 0 0 22px rgba(255, 255, 255, 0.55), inset -8px -8px 24px rgba(0, 0, 0, 0.5)",
            }}
          >
            {/* Top specular glossy crescent highlight */}
            <div
              className="absolute top-2 left-4 w-20 h-10 rounded-full opacity-65 pointer-events-none"
              style={{
                background: "linear-gradient(180deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0) 100%)",
                transform: "rotate(-25deg)",
              }}
            />

            {/* Glowing Lightbulb Graphic inside Orb */}
            <div className="relative z-10 flex flex-col items-center justify-center drop-shadow-[0_0_16px_rgba(255,255,255,0.95)]">
              {/* Radial bulb glow aura */}
              <div className="absolute -inset-4 flex items-center justify-center pointer-events-none">
                <div className="w-16 h-16 rounded-full bg-white/25 blur-md" />
              </div>

              {/* Lightbulb SVG icon with radiant short rays */}
              <svg
                viewBox="0 0 28 28"
                className="w-14 h-14 sm:w-16 sm:h-16 text-white fill-none stroke-white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="14" y1="1.5" x2="14" y2="3.5" strokeWidth="2.2" stroke="white" />
                <line x1="5.2" y1="5.2" x2="6.8" y2="6.8" strokeWidth="2.2" stroke="white" />
                <line x1="1.5" y1="14" x2="3.5" y2="14" strokeWidth="2.2" stroke="white" />
                <line x1="26.5" y1="14" x2="24.5" y2="14" strokeWidth="2.2" stroke="white" />
                <line x1="22.8" y1="5.2" x2="21.2" y2="6.8" strokeWidth="2.2" stroke="white" />

                <path
                  d="M10.5 21h7m-6 3.5h5m-8-11A6.5 6.5 0 0 1 14 7a6.5 6.5 0 0 1 5.5 10c-.9.9-1.5 2-1.5 2.5h-8c0-.5-.6-1.6-1.5-2.5z"
                  fill="rgba(255, 255, 255, 0.28)"
                  stroke="white"
                  strokeWidth="2"
                />
                <path
                  d="M12 14.5c0-1.1.9-2 2-2s2 .9 2 2"
                  stroke="white"
                  strokeWidth="1.8"
                  fill="none"
                />
              </svg>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Handwritten Annotation on Top-Right */}
      <div className="absolute top-2 right-1 sm:right-3 flex flex-col items-start z-30 pointer-events-none">
        <div className="font-handwriting text-2xl sm:text-3xl font-bold text-[#8B5CF6] leading-[1.08] tracking-wide -rotate-6 filter drop-shadow-xs">
          <span>Ideas</span>
          <br />
          <span>Strategy</span>
          <br />
          <span>Technology</span>
          <br />
          <span>Growth</span>
        </div>

        {/* Hand-drawn curved dashed arrow pointing towards the orb without buggy SVG marker */}
        <div className="relative -ml-6 -mt-1 w-20 h-14">
          <svg
            viewBox="0 0 70 45"
            className="w-full h-full overflow-visible"
            fill="none"
          >
            {/* Dashed curved arc */}
            <path
              d="M 58 6 C 40 20, 24 22, 12 30"
              stroke="#8B5CF6"
              strokeWidth="1.6"
              strokeDasharray="3 3"
              strokeLinecap="round"
            />
            {/* Crisp drawn arrowhead */}
            <path
              d="M 18 24 L 11 30 L 19 33"
              stroke="#8B5CF6"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
