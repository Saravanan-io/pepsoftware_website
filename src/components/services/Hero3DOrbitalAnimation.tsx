"use client";

import Image from "next/image";

export function Hero3DOrbitalAnimation() {
  return (
    <div className="relative w-full flex items-center justify-center py-6 select-none">
      {/* Responsive Orbit Stage */}
      <div
        className="relative w-[340px] h-[340px] sm:w-[440px] sm:h-[440px] lg:w-[480px] lg:h-[480px] xl:w-[520px] xl:h-[520px] flex items-center justify-center"
        style={
          {
            "--orbit-r": "182px",
          } as React.CSSProperties
        }
      >
        {/* Responsive CSS Variable Override via Tailwind-like classes */}
        <style jsx>{`
          @media (max-width: 639px) {
            div {
              --orbit-r: 125px !important;
            }
          }
          @media (min-width: 640px) and (max-width: 1023px) {
            div {
              --orbit-r: 155px !important;
            }
          }
          @media (min-width: 1024px) {
            div {
              --orbit-r: 182px !important;
            }
          }
        `}</style>

        {/* ─── Layer 1: Ambient Lighting Glow Orbs (Behind Orbit) ─── */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          {/* Deep Purple Core Glow */}
          <div className="w-[260px] h-[260px] sm:w-[320px] sm:h-[320px] rounded-full bg-[#502D6D]/20 blur-[75px] animate-orbital-pulse" />
          {/* Cyan/Blue Ambient Accent */}
          <div className="absolute -top-6 -right-6 w-[200px] h-[200px] rounded-full bg-[#38BDF8]/15 blur-[65px]" />
          {/* Golden Amber Accent */}
          <div className="absolute -bottom-8 -right-4 w-[220px] h-[220px] rounded-full bg-[#FCB116]/18 blur-[65px]" />
          {/* Emerald Accent */}
          <div className="absolute -bottom-6 -left-6 w-[200px] h-[200px] rounded-full bg-[#059669]/15 blur-[65px]" />
        </div>

        {/* ─── Layer 2: Concentric Stationary 3D Orbital Rings & Glow Track ─── */}
        {/* Outer Dashed Lavender Ring with Directional Arrows */}
        <div className="absolute w-[92%] h-[92%] rounded-full border border-dashed border-[#A855F7]/35 pointer-events-none flex items-center justify-center">
          {/* Directional Arrow: Top (Pointing Left - CCW) */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
            <svg
              className="w-4 h-4 text-[#8B5CF6]/80 -rotate-90"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </div>

          {/* Directional Arrow: Right (Pointing Up - CCW) */}
          <div className="absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
            <svg
              className="w-4 h-4 text-[#8B5CF6]/80 -rotate-180"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </div>

          {/* Directional Arrow: Bottom (Pointing Right - CCW) */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 flex items-center justify-center">
            <svg
              className="w-4 h-4 text-[#8B5CF6]/80 rotate-90"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </div>

          {/* Directional Arrow: Left (Pointing Down - CCW) */}
          <div className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
            <svg
              className="w-4 h-4 text-[#8B5CF6]/80 rotate-0"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </div>
        </div>

        {/* Mid Glowing Sweeping Crescent / Light Trail Track */}
        <div className="absolute w-[82%] h-[82%] rounded-full pointer-events-none flex items-center justify-center">
          {/* Subtle multi-colored sweeping track aura */}
          <svg
            className="w-full h-full opacity-60"
            viewBox="0 0 400 400"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="orbitGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#A855F7" stopOpacity="0.45" />
                <stop offset="35%" stopColor="#38BDF8" stopOpacity="0.5" />
                <stop offset="70%" stopColor="#FCB116" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#10B981" stopOpacity="0.3" />
              </linearGradient>
            </defs>
            <circle
              cx="200"
              cy="200"
              r="170"
              stroke="url(#orbitGradient)"
              strokeWidth="14"
              strokeLinecap="round"
              className="blur-[2px]"
            />
            <circle
              cx="200"
              cy="200"
              r="170"
              stroke="#FFFFFF"
              strokeWidth="1"
              strokeOpacity="0.3"
            />
          </svg>
        </div>

        {/* Inner Subtle Track Ring */}
        <div className="absolute w-[62%] h-[62%] rounded-full border border-[#502D6D]/15 pointer-events-none" />

        {/* Tiny Golden & Lavender Light Particles */}
        <div className="absolute top-[18%] left-[76%] w-2 h-2 rounded-full bg-[#FCB116] shadow-[0_0_8px_#FCB116] animate-pulse pointer-events-none" />
        <div className="absolute bottom-[22%] right-[78%] w-1.5 h-1.5 rounded-full bg-[#A855F7] shadow-[0_0_6px_#A855F7] pointer-events-none" />
        <div className="absolute bottom-[14%] left-[62%] w-2 h-2 rounded-full bg-[#38BDF8] shadow-[0_0_8px_#38BDF8] animate-pulse pointer-events-none" />

        {/* ─── Layer 3: Central Stationary 3D Pep Software Logo Disc ─── */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-auto">
          {/* Disc Outer Glow */}
          <div className="absolute -inset-4 rounded-full bg-[#502D6D]/30 blur-xl pointer-events-none" />

          {/* Deep Purple 3D Beveled Disc */}
          <div className="relative w-32 h-32 sm:w-40 sm:h-40 lg:w-44 lg:h-44 rounded-full p-2.5 sm:p-3 bg-gradient-to-br from-[#401C5E] via-[#2A0E40] to-[#180628] border-[4px] sm:border-[5px] border-white/20 shadow-[0_20px_50px_rgba(42,14,64,0.5),0_0_35px_rgba(80,45,109,0.4),inset_0_3px_5px_rgba(255,255,255,0.45),inset_0_-6px_10px_rgba(0,0,0,0.6)] flex items-center justify-center overflow-hidden group">
            {/* Gloss Specular Highlight Arc on Upper Half */}
            <div className="absolute inset-x-2 top-1.5 h-[46%] rounded-t-full bg-gradient-to-b from-white/25 via-white/5 to-transparent pointer-events-none" />

            {/* Inner Gold Ambient Ring */}
            <div className="absolute inset-2 rounded-full border border-[#FCB116]/20 pointer-events-none" />

            {/* Authentic Pep Software Logo (Stationary) */}
            <div className="relative w-[72%] h-[72%] transition-transform duration-300 group-hover:scale-105">
              <Image
                src="/pep-icon.png"
                alt="Pep Software Logo"
                fill
                priority
                sizes="(max-width: 640px) 110px, (max-width: 1024px) 140px, 160px"
                className="object-contain drop-shadow-[0_4px_12px_rgba(0,0,0,0.4)]"
              />
            </div>
          </div>
        </div>

        {/* ─── Layer 4: Orbital Rotating Carrier with 4 Counter-Rotating 3D Realistic Icons ─── */}
        <div className="absolute inset-0 z-30 pointer-events-none animate-orbital-spin">
          {/*
            4 Realistic Icons positioned along the orbit at 90-degree intervals:
            - UI/UX Design (Purple): Upper-Left (-135°)
            - Web Development (Blue): Upper-Right (-45°)
            - Enterprise Software (Orange): Lower-Right (+45°)
            - Mobile Applications (Teal): Lower-Left (+135°)
          */}

          {/* 1. UI/UX Design: Upper-Left (Purple Gradient 3D Sphere with Realistic 3D Icon) */}
          <div
            className="absolute top-1/2 left-1/2 pointer-events-auto cursor-pointer group"
            style={{
              transform:
                "translate(calc(-50% - 0.7071 * var(--orbit-r)), calc(-50% - 0.7071 * var(--orbit-r)))",
            }}
          >
            {/* Counter-Rotation to keep realistic icon strictly upright */}
            <div className="animate-orbital-counter">
              {/* White Outer 3D Glossy Rim Container */}
              <div className="relative w-[78px] h-[78px] sm:w-[92px] sm:h-[92px] lg:w-[100px] lg:h-[100px] rounded-full p-2 sm:p-2.5 bg-gradient-to-b from-white via-[#F8FAFC] to-[#CBD5E1] shadow-[0_18px_36px_rgba(21,21,21,0.22),0_4px_12px_rgba(21,21,21,0.1),inset_0_2px_4px_rgba(255,255,255,1),inset_0_-3px_5px_rgba(0,0,0,0.15)] border border-white/90 flex items-center justify-center transition-transform duration-300 group-hover:scale-115">
                {/* Inner Purple 3D Gradient Sphere */}
                <div className="relative w-full h-full rounded-full bg-[radial-gradient(circle_at_35%_28%,#C084FC_0%,#9333EA_38%,#6B21A8_72%,#3B0764_100%)] shadow-[0_8px_20px_rgba(147,51,234,0.5),inset_0_3px_5px_rgba(255,255,255,0.6),inset_0_-5px_8px_rgba(0,0,0,0.5)] flex items-center justify-center overflow-hidden">
                  {/* Top-Left Gloss Specular Pill */}
                  <div className="absolute top-1 left-2 sm:top-1.5 sm:left-2.5 w-5 h-2.5 sm:w-6 sm:h-3 rounded-full bg-white/50 blur-[0.5px] -rotate-15 pointer-events-none z-10" />

                  {/* Realistic 3D UI/UX Icon */}
                  <div className="relative w-[85%] h-[85%] transition-transform duration-300 group-hover:scale-110">
                    <Image
                      src="/images/services/orbital/uiux-3d.png"
                      alt="UI/UX Design 3D Icon"
                      fill
                      sizes="100px"
                      className="object-contain drop-shadow-[0_4px_10px_rgba(0,0,0,0.45)]"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 2. Web Development: Upper-Right (Blue Gradient 3D Sphere with Realistic 3D Icon) */}
          <div
            className="absolute top-1/2 left-1/2 pointer-events-auto cursor-pointer group"
            style={{
              transform:
                "translate(calc(-50% + 0.7071 * var(--orbit-r)), calc(-50% - 0.7071 * var(--orbit-r)))",
            }}
          >
            {/* Counter-Rotation */}
            <div className="animate-orbital-counter">
              {/* White Outer 3D Glossy Rim Container */}
              <div className="relative w-[78px] h-[78px] sm:w-[92px] sm:h-[92px] lg:w-[100px] lg:h-[100px] rounded-full p-2 sm:p-2.5 bg-gradient-to-b from-white via-[#F8FAFC] to-[#CBD5E1] shadow-[0_18px_36px_rgba(21,21,21,0.22),0_4px_12px_rgba(21,21,21,0.1),inset_0_2px_4px_rgba(255,255,255,1),inset_0_-3px_5px_rgba(0,0,0,0.15)] border border-white/90 flex items-center justify-center transition-transform duration-300 group-hover:scale-115">
                {/* Inner Blue 3D Gradient Sphere */}
                <div className="relative w-full h-full rounded-full bg-[radial-gradient(circle_at_35%_28%,#60A5FA_0%,#2563EB_38%,#1D4ED8_72%,#172554_100%)] shadow-[0_8px_20px_rgba(37,99,235,0.5),inset_0_3px_5px_rgba(255,255,255,0.6),inset_0_-5px_8px_rgba(0,0,0,0.5)] flex items-center justify-center overflow-hidden">
                  {/* Top-Left Gloss Specular Pill */}
                  <div className="absolute top-1 left-2 sm:top-1.5 sm:left-2.5 w-5 h-2.5 sm:w-6 sm:h-3 rounded-full bg-white/50 blur-[0.5px] -rotate-15 pointer-events-none z-10" />

                  {/* Realistic 3D Web Development Icon */}
                  <div className="relative w-[85%] h-[85%] transition-transform duration-300 group-hover:scale-110">
                    <Image
                      src="/images/services/orbital/web-3d.png"
                      alt="Web Development 3D Icon"
                      fill
                      sizes="100px"
                      className="object-contain drop-shadow-[0_4px_10px_rgba(0,0,0,0.45)]"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 3. Enterprise Software: Lower-Right (Orange Gradient 3D Sphere with Realistic 3D Icon) */}
          <div
            className="absolute top-1/2 left-1/2 pointer-events-auto cursor-pointer group"
            style={{
              transform:
                "translate(calc(-50% + 0.7071 * var(--orbit-r)), calc(-50% + 0.7071 * var(--orbit-r)))",
            }}
          >
            {/* Counter-Rotation */}
            <div className="animate-orbital-counter">
              {/* White Outer 3D Glossy Rim Container */}
              <div className="relative w-[78px] h-[78px] sm:w-[92px] sm:h-[92px] lg:w-[100px] lg:h-[100px] rounded-full p-2 sm:p-2.5 bg-gradient-to-b from-white via-[#F8FAFC] to-[#CBD5E1] shadow-[0_18px_36px_rgba(21,21,21,0.22),0_4px_12px_rgba(21,21,21,0.1),inset_0_2px_4px_rgba(255,255,255,1),inset_0_-3px_5px_rgba(0,0,0,0.15)] border border-white/90 flex items-center justify-center transition-transform duration-300 group-hover:scale-115">
                {/* Inner Orange 3D Gradient Sphere */}
                <div className="relative w-full h-full rounded-full bg-[radial-gradient(circle_at_35%_28%,#FBBF24_0%,#F59E0B_38%,#D97706_72%,#7C2D12_100%)] shadow-[0_8px_20px_rgba(217,119,6,0.5),inset_0_3px_5px_rgba(255,255,255,0.6),inset_0_-5px_8px_rgba(0,0,0,0.5)] flex items-center justify-center overflow-hidden">
                  {/* Top-Left Gloss Specular Pill */}
                  <div className="absolute top-1 left-2 sm:top-1.5 sm:left-2.5 w-5 h-2.5 sm:w-6 sm:h-3 rounded-full bg-white/50 blur-[0.5px] -rotate-15 pointer-events-none z-10" />

                  {/* Realistic 3D Enterprise Database Server Icon */}
                  <div className="relative w-[85%] h-[85%] transition-transform duration-300 group-hover:scale-110">
                    <Image
                      src="/images/services/orbital/enterprise-3d.png"
                      alt="Enterprise Custom Software 3D Icon"
                      fill
                      sizes="100px"
                      className="object-contain drop-shadow-[0_4px_10px_rgba(0,0,0,0.45)]"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 4. Mobile Applications: Lower-Left (Teal Gradient 3D Sphere with Realistic 3D Icon) */}
          <div
            className="absolute top-1/2 left-1/2 pointer-events-auto cursor-pointer group"
            style={{
              transform:
                "translate(calc(-50% - 0.7071 * var(--orbit-r)), calc(-50% + 0.7071 * var(--orbit-r)))",
            }}
          >
            {/* Counter-Rotation */}
            <div className="animate-orbital-counter">
              {/* White Outer 3D Glossy Rim Container */}
              <div className="relative w-[78px] h-[78px] sm:w-[92px] sm:h-[92px] lg:w-[100px] lg:h-[100px] rounded-full p-2 sm:p-2.5 bg-gradient-to-b from-white via-[#F8FAFC] to-[#CBD5E1] shadow-[0_18px_36px_rgba(21,21,21,0.22),0_4px_12px_rgba(21,21,21,0.1),inset_0_2px_4px_rgba(255,255,255,1),inset_0_-3px_5px_rgba(0,0,0,0.15)] border border-white/90 flex items-center justify-center transition-transform duration-300 group-hover:scale-115">
                {/* Inner Teal/Green 3D Gradient Sphere */}
                <div className="relative w-full h-full rounded-full bg-[radial-gradient(circle_at_35%_28%,#34D399_0%,#059669_38%,#047857_72%,#022C22_100%)] shadow-[0_8px_20px_rgba(5,150,105,0.5),inset_0_3px_5px_rgba(255,255,255,0.6),inset_0_-5px_8px_rgba(0,0,0,0.5)] flex items-center justify-center overflow-hidden">
                  {/* Top-Left Gloss Specular Pill */}
                  <div className="absolute top-1 left-2 sm:top-1.5 sm:left-2.5 w-5 h-2.5 sm:w-6 sm:h-3 rounded-full bg-white/50 blur-[0.5px] -rotate-15 pointer-events-none z-10" />

                  {/* Realistic 3D Mobile App Smartphone Icon */}
                  <div className="relative w-[85%] h-[85%] transition-transform duration-300 group-hover:scale-110">
                    <Image
                      src="/images/services/orbital/mobile-3d.png"
                      alt="Mobile App Development 3D Icon"
                      fill
                      sizes="100px"
                      className="object-contain drop-shadow-[0_4px_10px_rgba(0,0,0,0.45)]"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
