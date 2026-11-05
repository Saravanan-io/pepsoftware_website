"use client";

import Link from "next/link";
import Image from "next/image";
import { MapPin, Mail, Phone } from "lucide-react";
import { COMPANY_INFO, NAV_ITEMS } from "@/lib/constants";
import { AsteroidSpaceBackground } from "./AsteroidSpaceBackground";

export function Footer() {
  return (
    <footer className="bg-[#030306] text-white relative overflow-hidden border-t border-white/[0.08] select-none">
      {/* 3D Asteroid Space Roaming Canvas */}
      <AsteroidSpaceBackground />

      {/* Subtle cosmic star grid texture */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(rgba(255, 255, 255, 0.6) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      {/* Atmospheric Nebula Glow Orbs (Brand Signature) */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[400px] bg-[#502D6D]/[0.22] blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-[550px] h-[380px] bg-[#FCB116]/[0.14] blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[380px] bg-[#3B1D58]/[0.12] blur-[160px] rounded-full pointer-events-none" />

      {/* Central Soft Vignette for Text Contrast & Clarity */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(3,3,6,0.55)_0%,rgba(3,3,6,0.15)_65%,transparent_100%)] pointer-events-none" />

      {/* Luminous Brand Stellar Gradient Top Border Line */}
      <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-[#FCB116] via-[#A855F7] to-transparent opacity-80 shadow-[0_0_15px_rgba(252,177,22,0.4)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-14 border-b border-white/[0.08]">
          {/* Brand Column */}
          <div className="lg:col-span-4 space-y-6 relative">
            {/* Signature PEP Software Logo Watermark directly behind brand text */}
            <div className="absolute -top-10 -left-10 w-72 h-72 opacity-[0.06] pointer-events-none select-none z-0">
              <Image
                src="/pep-icon.png"
                alt="Pep Software Watermark Logo"
                fill
                sizes="288px"
                priority
                className="object-contain"
              />
            </div>

            <Link href="/" className="relative z-10 inline-flex items-center gap-3.5 group">
              <div className="relative w-12 h-12 shrink-0 rounded-2xl bg-gradient-to-br from-white/10 to-white/[0.03] backdrop-blur-xl p-2 border border-white/20 shadow-xl shadow-black/80 transition-all duration-300 group-hover:scale-105 group-hover:border-[#FCB116]/80 group-hover:shadow-[0_0_25px_rgba(252,177,22,0.35)]">
                <Image
                  src="/pep-icon.png"
                  alt="Pep Software Logo"
                  fill
                  sizes="48px"
                  priority
                  className="object-contain p-0.5 drop-shadow-md"
                />
              </div>
              <div className="flex items-baseline gap-1.5 leading-none font-clash">
                <span className="font-medium text-[28px] tracking-tight bg-gradient-to-r from-white via-zinc-100 to-[#FCB116] bg-clip-text text-transparent group-hover:to-amber-300 transition-all">
                  Pep
                </span>
                <span className="font-medium text-[28px] tracking-tight text-zinc-100 group-hover:text-white transition-colors">
                  Software
                </span>
              </div>
            </Link>

            <p className="relative z-10 text-sm text-zinc-400 leading-relaxed max-w-sm font-normal">
              We craft digital experiences that help businesses grow and make a difference. Delivering high-impact web, mobile and software solutions.
            </p>

            {/* Modern Social Media SVG Buttons */}
            <div className="flex items-center gap-3 pt-1">
              {[
                {
                  label: "LinkedIn",
                  href: COMPANY_INFO.socials.linkedin,
                  icon: (
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.64c-.9 0-1.63.73-1.63 1.63s.73 1.63 1.63 1.63 1.63-.73 1.63-1.63-.73-1.63-1.63-1.63Z" />
                    </svg>
                  ),
                },
                {
                  label: "Facebook",
                  href: COMPANY_INFO.socials.facebook,
                  icon: (
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z" />
                    </svg>
                  ),
                },
                {
                  label: "Instagram",
                  href: COMPANY_INFO.socials.instagram,
                  icon: (
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  ),
                },
                {
                  label: "YouTube",
                  href: COMPANY_INFO.socials.youtube,
                  icon: (
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                    </svg>
                  ),
                },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={s.label}
                  className="w-10 h-10 rounded-xl bg-white/[0.04] hover:bg-gradient-to-br hover:from-[#502D6D]/80 hover:to-[#FCB116]/30 border border-white/10 hover:border-[#FCB116]/70 flex items-center justify-center text-zinc-400 hover:text-white transition-all duration-300 hover:scale-110 hover:shadow-[0_0_20px_rgba(252,177,22,0.35)] backdrop-blur-md"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="lg:col-span-2 space-y-5">
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-100 font-syne relative pb-2.5 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-7 after:h-[2px] after:rounded-full after:bg-gradient-to-r after:from-[#FCB116] after:to-transparent">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {NAV_ITEMS.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="group flex items-center text-sm font-medium text-zinc-400 hover:text-white transition-all duration-200"
                  >
                    <span className="group-hover:translate-x-1.5 transition-transform duration-200">
                      {item.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Services Column */}
          <div className="lg:col-span-3 space-y-5">
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-100 font-syne relative pb-2.5 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-7 after:h-[2px] after:rounded-full after:bg-gradient-to-r after:from-[#A855F7] after:to-transparent">
              Our Services
            </h4>
            <ul className="space-y-3">
              {[
                { label: "Website Development", href: "/services/website-design-development" },
                { label: "Mobile App Development", href: "/services/mobile-app-design-development" },
                { label: "Custom Software Development", href: "/services/ui-ux-design" },
                { label: "ERP & CRM Software Development", href: "/services#service-erp-crm" },
                { label: "Digital Marketing", href: "/services/graphic-design" },
              ].map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="group flex items-center text-sm font-medium text-zinc-400 hover:text-white transition-all duration-200"
                  >
                    <span className="group-hover:translate-x-1.5 transition-transform duration-200">
                      {item.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Us Column */}
          <div className="lg:col-span-3 space-y-5">
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-100 font-syne relative pb-2.5 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-7 after:h-[2px] after:rounded-full after:bg-gradient-to-r after:from-[#FCB116] after:to-transparent">
              Contact Us
            </h4>
            <ul className="space-y-4">
              {/* Address */}
              <li className="flex items-start gap-3 group">
                <div className="w-9 h-9 rounded-xl bg-[#502D6D]/30 border border-[#A855F7]/30 flex items-center justify-center text-[#FCB116] shrink-0 mt-0.5 group-hover:border-[#FCB116]/60 group-hover:bg-[#502D6D]/50 group-hover:scale-105 group-hover:shadow-[0_0_15px_rgba(252,177,22,0.25)] transition-all duration-200 backdrop-blur-sm">
                  <MapPin className="w-4 h-4 text-[#FCB116]" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-zinc-500 font-syne">
                    Location
                  </span>
                  <span className="text-sm text-zinc-300 group-hover:text-white font-medium leading-snug transition-colors">
                    {COMPANY_INFO.locations}
                  </span>
                </div>
              </li>

              {/* Email */}
              <li className="flex items-start gap-3 group">
                <div className="w-9 h-9 rounded-xl bg-[#502D6D]/30 border border-[#A855F7]/30 flex items-center justify-center text-[#FCB116] shrink-0 mt-0.5 group-hover:border-[#FCB116]/60 group-hover:bg-[#502D6D]/50 group-hover:scale-105 group-hover:shadow-[0_0_15px_rgba(252,177,22,0.25)] transition-all duration-200 backdrop-blur-sm">
                  <Mail className="w-4 h-4 text-[#FCB116]" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-zinc-500 font-syne">
                    Email
                  </span>
                  <a
                    href={`mailto:${COMPANY_INFO.email}`}
                    className="text-sm text-zinc-300 hover:text-[#FCB116] font-medium transition-colors"
                  >
                    {COMPANY_INFO.email}
                  </a>
                </div>
              </li>

              {/* Phone */}
              <li className="flex items-start gap-3 group">
                <div className="w-9 h-9 rounded-xl bg-[#502D6D]/30 border border-[#A855F7]/30 flex items-center justify-center text-[#FCB116] shrink-0 mt-0.5 group-hover:border-[#FCB116]/60 group-hover:bg-[#502D6D]/50 group-hover:scale-105 group-hover:shadow-[0_0_15px_rgba(252,177,22,0.25)] transition-all duration-200 backdrop-blur-sm">
                  <Phone className="w-4 h-4 text-[#FCB116]" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-zinc-500 font-syne">
                    Direct Line
                  </span>
                  <a
                    href={`tel:${COMPANY_INFO.phoneRaw}`}
                    className="text-sm font-bold text-white hover:text-[#FCB116] transition-colors mt-0.5 tracking-wide"
                  >
                    {COMPANY_INFO.phone}
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-5 text-xs text-zinc-400">
          <div className="flex items-center gap-2">
            <span>© 2026 {COMPANY_INFO.name}. All Rights Reserved.</span>
          </div>

          <div className="flex items-center gap-6">
            <Link
              href="/about"
              className="text-zinc-400 hover:text-white transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/about"
              className="text-zinc-400 hover:text-white transition-colors"
            >
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>

      {/* Subtle Architectural Brand Watermark Positioned in Background */}
      <div className="absolute top-1/2 right-6 -translate-y-1/2 pointer-events-none select-none overflow-hidden opacity-[0.015] text-white font-black text-[80px] sm:text-[120px] lg:text-[150px] tracking-tighter leading-none whitespace-nowrap z-0">
        PEP SOFTWARE
      </div>
    </footer>
  );
}
