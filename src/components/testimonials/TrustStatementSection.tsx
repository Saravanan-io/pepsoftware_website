"use client";

import Image from "next/image";
import Link from "next/link";
import { Handshake, MessageSquareText, CheckCircle2, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { RevealOnScroll } from "@/components/shared/RevealOnScroll";

export function TrustStatementSection() {
  const cards = [
    {
      num: "01",
      title: "Understanding the Business",
      description:
        "We take the time to learn your market, requirements, and true goals before writing a single line of code.",
      image: "/images/trust/card-charts.jpg",
      icon: Handshake,
      tilt: "lg:-rotate-2 hover:rotate-0",
      accentBar: false,
    },
    {
      num: "02",
      title: "Communicating Clearly",
      description:
        "Direct, transparent updates with no jargon, keeping you informed at every milestone along the way.",
      image: "/images/trust/card-videocall.jpg",
      icon: MessageSquareText,
      tilt: "lg:rotate-0 hover:-translate-y-2.5",
      accentBar: false,
    },
    {
      num: "03",
      title: "Delivering a Solution That Works",
      description:
        "Intuitive, reliable, and user-friendly digital products engineered to solve practical business challenges.",
      image: "/images/trust/card-dashboard.jpg",
      icon: CheckCircle2,
      tilt: "lg:rotate-2 hover:rotate-0",
      accentBar: true,
    },
  ];

  return (
    <section className="py-24 lg:py-32 bg-[#FFFFFF] relative overflow-hidden border-b border-[#C6C2C1]/30 select-none">
      {/* Ambient background glows */}
      <div className="absolute top-10 left-10 w-[550px] h-[550px] bg-[#502D6D]/[0.04] rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[600px] h-[600px] bg-[#FCB116]/[0.05] rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 left-1/3 w-[500px] h-[500px] bg-[#8B5CF6]/[0.03] rounded-full blur-[140px] pointer-events-none" />

      {/* Sinuous Animated Connected Wave Path Behind Cards */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <svg
          className="w-full h-full min-w-[1200px]"
          viewBox="0 0 1440 850"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Main S-Curve Guide Line */}
          <path
            d="M -50 560 C 180 430, 260 620, 480 520 C 680 440, 780 640, 980 500 C 1140 400, 1260 520, 1340 340 C 1390 230, 1360 160, 1280 140 C 1200 120, 1150 180, 1220 220"
            stroke="url(#trustGradientLine)"
            strokeWidth="2.5"
            strokeDasharray="6 6"
            className="opacity-40"
          />

          {/* Solid Flow Sub-Path */}
          <path
            d="M 120 540 C 300 480, 460 550, 680 480 C 880 420, 1020 520, 1240 380"
            stroke="url(#trustGradientSolid)"
            strokeWidth="1.5"
            className="opacity-30"
          />

          {/* Glowing Connected Nodes along the path */}
          <circle cx="120" cy="540" r="6" fill="#FCB116" className="animate-pulse" />
          <circle cx="120" cy="540" r="12" fill="#FCB116" fillOpacity="0.25" />

          <circle cx="480" cy="520" r="6.5" fill="#502D6D" />
          <circle cx="480" cy="520" r="14" fill="#502D6D" fillOpacity="0.2" />

          <circle cx="940" cy="510" r="6" fill="#FCB116" className="animate-pulse" />
          <circle cx="940" cy="510" r="12" fill="#FCB116" fillOpacity="0.25" />

          <circle cx="1180" cy="380" r="5" fill="#8B5CF6" />
          <circle cx="1340" cy="340" r="6.5" fill="#FCB116" />

          {/* Traveling Particle Animation along Path */}
          <motion.circle
            r="4.5"
            fill="#FCB116"
            initial={{ offsetDistance: "0%" }}
            animate={{ offsetDistance: "100%" }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "linear",
            }}
            style={{
              offsetPath:
                "path('M -50 560 C 180 430, 260 620, 480 520 C 680 440, 780 640, 980 500 C 1140 400, 1260 520, 1340 340')",
            }}
          />

          <defs>
            <linearGradient id="trustGradientLine" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#FCB116" />
              <stop offset="35%" stopColor="#8B5CF6" />
              <stop offset="70%" stopColor="#502D6D" />
              <stop offset="100%" stopColor="#FCB116" />
            </linearGradient>
            <linearGradient id="trustGradientSolid" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#8B5CF6" />
              <stop offset="50%" stopColor="#502D6D" />
              <stop offset="100%" stopColor="#FCB116" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Showcase Banner with Team photo on Left, Header in Center, Paper Plane on Right */}
        <div className="relative mb-16 lg:mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Top Left: Team Collaborating Cutout Graphic */}
            <div className="lg:col-span-3 hidden lg:flex justify-start relative">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                animate={{ y: [0, -6, 0] }}
                className="relative w-[360px] xl:w-[400px] aspect-[1024/682] -ml-6 -mt-6 pointer-events-none select-none"
              >
                <Image
                  src="/images/trust/team-cutout.png"
                  alt="Pep Software Team Collaborating"
                  fill
                  sizes="400px"
                  priority
                  className="object-contain filter drop-shadow-md"
                />
              </motion.div>
            </div>

            {/* Top Center: Heading & Narrative */}
            <div className="lg:col-span-6 text-center space-y-4">
              <RevealOnScroll>
                {/* Clean Eyebrow with decorative lines */}
                <div className="flex items-center justify-center gap-3 text-xs sm:text-[13px] font-bold tracking-[0.28em] text-[#502D6D] uppercase mb-3">
                  <span className="w-8 h-[1px] bg-[#502D6D]/40" />
                  <span>THE PEP SOFTWARE DIFFERENCE</span>
                  <span className="w-8 h-[1px] bg-[#502D6D]/40" />
                </div>

                {/* Main Heading with Golden Curved Accent Line */}
                <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-extrabold text-[#151515] leading-[1.12] tracking-tight text-center">
                  We Build{" "}
                  <span className="relative inline-block text-[#502D6D]">
                    Relationships,
                    {/* Golden Curved Accent Line underneath */}
                    <svg
                      className="absolute -bottom-2 left-0 w-full h-3 text-[#FCB116]"
                      viewBox="0 0 100 20"
                      preserveAspectRatio="none"
                      fill="none"
                    >
                      <path
                        d="M 2 14 Q 50 3, 98 14"
                        stroke="currentColor"
                        strokeWidth="3.5"
                        strokeLinecap="round"
                      />
                    </svg>
                  </span>
                  <br />
                  Not Just Projects.
                </h2>

                {/* Narrative */}
                <p className="text-sm sm:text-base text-[#544643] leading-relaxed max-w-xl mx-auto pt-3 font-normal">
                  Every project starts with a requirement. But a successful project comes from understanding the business, communicating clearly and delivering a solution that works.
                </p>

                <p className="text-xs sm:text-sm font-semibold text-[#502D6D] max-w-lg mx-auto pt-1">
                  We&apos;re grateful to the businesses and people who have trusted Pep Software with their digital projects.
                </p>
              </RevealOnScroll>
            </div>

            {/* Top Right: 3D Origami Purple Paper Plane + Handwritten Script */}
            <div className="lg:col-span-3 hidden lg:flex flex-col items-center justify-center relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                animate={{
                  y: [0, -10, 0],
                  rotate: [0, 2, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="relative w-44 h-44 cursor-pointer"
              >
                {/* Soft ambient plane glow */}
                <div className="absolute inset-0 bg-[#8B5CF6]/20 rounded-full blur-2xl pointer-events-none" />

                <Image
                  src="/images/trust/paper-plane.png"
                  alt="3D Origami Purple Paper Plane"
                  fill
                  sizes="176px"
                  className="object-contain filter drop-shadow-xl"
                />

                {/* Elegant Handwritten Script */}
                <div className="absolute -bottom-6 -right-2 font-serif italic text-base sm:text-lg text-[#8B5CF6] leading-tight select-none rotate-6 drop-shadow-xs pointer-events-none">
                  <div>Ideas</div>
                  <div className="pl-3">Collaboration</div>
                  <div className="pl-6 text-[#A855F7]">Growth</div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* 3 Floating Showcase Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-8 pt-4 pb-12 relative z-10">
          {cards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <RevealOnScroll key={card.num} delay={0.12 * (idx + 1)}>
                <div
                  className={`h-full rounded-[34px] bg-white border border-[#E8E4EE] p-5 pb-8 shadow-xl shadow-[#502D6D]/[0.05] hover:shadow-2xl hover:shadow-[#502D6D]/15 transition-all duration-500 flex flex-col justify-between group relative overflow-hidden ${card.tilt}`}
                >
                  <div>
                    {/* Top Visual Container with Number Badge and Image */}
                    <div className="relative w-full aspect-[16/11] rounded-2xl overflow-hidden bg-[#F7F8F8] border border-[#C6C2C1]/40 mb-6">
                      {/* Number badge in upper corner */}
                      <div className="absolute top-3 left-3 z-10 px-3 py-1 rounded-full bg-white/95 backdrop-blur-md border border-[#C6C2C1]/50 text-xs font-mono font-extrabold text-[#502D6D] shadow-sm">
                        {card.num}
                      </div>

                      <Image
                        src={card.image}
                        alt={card.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 380px"
                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                    </div>

                    {/* Floating Icon Pill Overlapping Content */}
                    <div className="relative -mt-12 ml-4 mb-4 z-10 inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-white border-2 border-[#502D6D]/20 shadow-lg shadow-[#502D6D]/10 text-[#502D6D] group-hover:bg-[#502D6D] group-hover:text-white group-hover:border-[#502D6D] transition-all duration-300">
                      <Icon className="w-6 h-6 transition-colors" />
                    </div>

                    {/* Card Title & Description */}
                    <div className="px-2 space-y-2">
                      <h3 className="font-syne text-xl sm:text-[22px] font-extrabold text-[#151515] group-hover:text-[#502D6D] transition-colors leading-snug">
                        {card.title}
                      </h3>
                      <p className="text-sm text-[#544643] leading-relaxed font-normal pt-1">
                        {card.description}
                      </p>
                    </div>
                  </div>

                  {/* Optional Gold Accent Bar for Card 03 */}
                  {card.accentBar && (
                    <div className="px-2 pt-4">
                      <div className="w-12 h-1 bg-[#FCB116] rounded-full" />
                    </div>
                  )}
                </div>
              </RevealOnScroll>
            );
          })}
        </div>

        {/* Bottom Center Pill CTA Button */}
        <RevealOnScroll delay={0.25}>
          <div className="flex items-center justify-center gap-4 pt-6">
            <span className="text-[#FCB116] text-xs font-bold select-none tracking-widest hidden sm:inline">
              ✦ ✦
            </span>

            <Link
              href="/contact"
              className="inline-flex items-center gap-2.5 px-9 py-4 rounded-full bg-gradient-to-r from-[#502D6D] via-[#5D327F] to-[#68358F] text-white font-bold text-sm shadow-xl shadow-[#502D6D]/25 hover:shadow-2xl hover:scale-105 active:scale-95 transition-all group"
            >
              <span>Let&apos;s Build Together</span>
              <ArrowRight className="w-4 h-4 text-[#FCB116] transition-transform group-hover:translate-x-1" />
            </Link>

            <span className="text-[#FCB116] text-xs font-bold select-none tracking-widest hidden sm:inline">
              ✦ ✦
            </span>
          </div>
        </RevealOnScroll>
      </div>

      {/* Foreground Depth of Field Corner Leaves (Bottom Left) */}
      <div className="absolute -bottom-6 -left-8 w-48 h-48 sm:w-64 sm:h-64 pointer-events-none z-20 select-none opacity-80">
        <Image
          src="/images/trust/corner-leaves-blurred.png"
          alt=""
          fill
          sizes="256px"
          className="object-contain"
        />
      </div>
    </section>
  );
}
