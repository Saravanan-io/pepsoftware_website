"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

interface ServiceFeaturesVisualProps {
  imageSrc?: string;
  alt?: string;
}

export function ServiceFeaturesVisual({
  imageSrc = "/images/services/service-features-pillars.png",
  alt = "PEP Software Features - Modern Technologies, Responsive Design, SEO Optimized, Scalable Architecture",
}: ServiceFeaturesVisualProps = {}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  // Mouse tilt tracking
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth springs for 3D perspective
  const springConfig = { damping: 25, stiffness: 150 };
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [7, -7]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-8, 8]), springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      className="relative w-full max-w-[620px] mx-auto flex items-center justify-center select-none py-4"
      style={{ perspective: 1200 }}
    >
      {/* Dynamic Ambient Background Glow */}
      <div className="absolute -inset-4 bg-gradient-to-tr from-[#C86A28]/18 via-[#544643]/10 to-transparent rounded-[40px] blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[85%] h-[75%] bg-[#C86A28]/10 rounded-full blur-[100px] pointer-events-none -z-10" />

      {/* Main Entrance & Float Motion Container */}
      <motion.div
        initial={{ opacity: 0, y: 35, scale: 0.92 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{
          duration: 0.9,
          ease: [0.16, 1, 0.3, 1],
        }}
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        className="relative w-full"
      >
        {/* Continuous Weightless Floating Layer */}
        <motion.div
          animate={{
            y: [-6, 6, -6],
            rotateZ: [-0.4, 0.4, -0.4],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="relative w-full flex items-center justify-center"
        >
          {/* 3D Glass Illustration Image */}
          <div className="relative w-full overflow-visible group">
            <Image
              src={imageSrc}
              alt={alt}
              width={1024}
              height={682}
              priority
              className="w-full h-auto object-contain filter drop-shadow-[0_24px_48px_rgba(21,21,21,0.14)] transition-transform duration-500 group-hover:scale-[1.02]"
            />

            {/* Subtle Glass Reflection Light Sweep on Mount */}
            <motion.div
              initial={{ x: "-120%", opacity: 0 }}
              animate={{ x: "180%", opacity: [0, 0.6, 0] }}
              transition={{
                duration: 1.4,
                delay: 0.4,
                ease: "easeInOut",
              }}
              className="absolute inset-y-0 w-1/3 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-[-25deg] pointer-events-none"
            />
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
