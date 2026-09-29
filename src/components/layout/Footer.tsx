"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowUp, MapPin, Mail, Phone } from "lucide-react";
import { COMPANY_INFO, NAV_ITEMS } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="bg-[#E7EBEA] relative overflow-hidden">
      {/* Subtle grid */}
      <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#C6C2C1 1px, transparent 1px)', backgroundSize: '24px 24px' }} />

      {/* Ambient Logo-Themed Glow Orbs */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[350px] bg-[#502D6D]/[0.05] blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-[500px] h-[350px] bg-[#FCB116]/[0.06] blur-[120px] rounded-full pointer-events-none" />

      {/* Top accent line with brand gradient */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-[#502D6D]/30 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-[#C6C2C1]/40">
          {/* Brand */}
          <div className="lg:col-span-4 space-y-5 relative">
            {/* Signature PEP Software Logo Watermark directly behind the brand text */}
            <div className="absolute -top-10 -left-10 w-72 h-72 opacity-[0.16] pointer-events-none select-none z-0">
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
              <div className="relative w-12 h-12 shrink-0 rounded-2xl bg-white p-1.5 border border-[#C6C2C1]/80 shadow-md shadow-black/[0.04] transition-all duration-300 group-hover:scale-105 group-hover:shadow-lg group-hover:border-[#502D6D]/60 group-hover:ring-2 group-hover:ring-[#FCB116]/30">
                <Image
                  src="/pep-icon.png"
                  alt="Pep Software Logo"
                  fill
                  sizes="48px"
                  priority
                  className="object-contain p-0.5"
                />
              </div>
              <div className="flex flex-col">
                <div className="flex items-baseline gap-1.5 leading-none">
                  <span className="font-black text-[27px] tracking-tight text-[#151515] group-hover:text-[#502D6D] transition-colors">
                    PEP
                  </span>
                  <span className="font-semibold text-[27px] tracking-tight text-[#544643] group-hover:text-[#151515] transition-colors">
                    Software
                  </span>
                </div>
                <span className="text-[10px] font-bold tracking-[0.22em] uppercase bg-gradient-to-r from-[#502D6D] to-[#FCB116] bg-clip-text text-transparent mt-1.5">
                  Engineering Digital Growth
                </span>
              </div>
            </Link>
            <p className="relative z-10 text-sm text-[#544643] leading-relaxed max-w-xs font-normal">
              We craft digital experiences that help businesses grow and make a difference. Delivering high-impact web, mobile and software solutions.
            </p>
            {/* Social icons */}
            <div className="flex items-center gap-2.5">
              {[
                { short: "in", href: COMPANY_INFO.socials.linkedin },
                { short: "fb", href: COMPANY_INFO.socials.facebook },
                { short: "ig", href: COMPANY_INFO.socials.instagram },
                { short: "yt", href: COMPANY_INFO.socials.youtube },
              ].map((s) => (
                <a
                  key={s.short}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  className="w-8 h-8 rounded-full bg-[#F7F8F8] border border-[#C6C2C1] flex items-center justify-center text-[10px] font-black text-[#544643] hover:bg-[#502D6D] hover:text-[#FFFFFF] hover:border-[#502D6D] transition-all duration-200 shadow-sm"
                >
                  {s.short}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-[0.15em] text-[#151515]">Quick Links</h4>
            <ul className="space-y-2.5">
              {NAV_ITEMS.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="text-sm text-[#544643] hover:text-[#502D6D] transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-[0.15em] text-[#151515]">Our Services</h4>
            <ul className="space-y-2.5">
              {[
                { label: "UI/UX Design", href: "/services/ui-ux-design" },
                { label: "Website Development", href: "/services/website-design-development" },
                { label: "Mobile App Development", href: "/services/mobile-app-design-development" },
                { label: "Graphic Design", href: "/services/graphic-design" },
                { label: "Maintenance & Support", href: "/contact" },
              ].map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="text-sm text-[#544643] hover:text-[#502D6D] transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-[0.15em] text-[#151515]">Contact Us</h4>
            <ul className="space-y-3.5">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#502D6D] shrink-0 mt-1" />
                <span className="text-sm text-[#544643] leading-snug">
                  {COMPANY_INFO.address}
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#502D6D] shrink-0" />
                <a href={`mailto:${COMPANY_INFO.email}`} className="text-sm text-[#544643] hover:text-[#502D6D] transition-colors">
                  {COMPANY_INFO.email}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#FCB116] shrink-0" />
                <a href={`tel:${COMPANY_INFO.phoneRaw}`} className="text-sm font-semibold text-[#151515] hover:text-[#502D6D] transition-colors">
                  {COMPANY_INFO.phone}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#544643]">
          <span>© 2026 {COMPANY_INFO.name}. All Rights Reserved.</span>
          <div className="flex items-center gap-6">
            <Link href="/about" className="hover:text-[#502D6D] transition-colors">Privacy Policy</Link>
            <Link href="/about" className="hover:text-[#502D6D] transition-colors">Terms & Conditions</Link>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="flex items-center gap-1.5 font-bold text-[#151515] hover:text-[#502D6D] transition-colors"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5 text-[#FCB116]" />
            </button>
          </div>
        </div>
      </div>

      {/* Background Architectural Brand Watermark */}
      <div className="absolute -bottom-6 right-4 pointer-events-none select-none overflow-hidden opacity-[0.035] text-[#151515] font-black text-[90px] sm:text-[130px] lg:text-[170px] tracking-tighter leading-none whitespace-nowrap">
        PEP SOFTWARE
      </div>
    </footer>
  );
}
