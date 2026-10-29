"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ArrowRight, Menu, X } from "lucide-react";
import { NavBarMascot } from "./NavBarMascot";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const isScrolled = window.scrollY > 20;
          setScrolled((prev) => (prev !== isScrolled ? isScrolled : prev));
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "About us", href: "/about" },
    { label: "Services", href: "/services", hasDropdown: true },
    { label: "Products", href: "/products", hasDropdown: true },
    { label: "Projects", href: "/work" },
    { label: "Testimonials", href: "/testimonials" },
  ];

  const isHome = pathname === "/";

  return (
    <>
      <header
        className={`fixed ${
          scrolled ? "top-3 sm:top-4" : isHome ? "top-10 sm:top-14 md:top-16" : "top-3 sm:top-4"
        } left-0 right-0 z-50 transition-all duration-500 ease-out flex justify-center px-4`}
        style={{ transform: "translateZ(0)", willChange: "transform" }}
      >
        <div
          className={`relative w-full max-w-[1220px] mx-auto rounded-[40px] flex items-center justify-between px-5 sm:px-6 py-3 transition-all duration-300 bg-[#F7F8F8] shadow-sm border border-[#C6C2C1]/40 ${
            scrolled ? "shadow-md bg-[#F7F8F8]/95 backdrop-blur-md border-[#C6C2C1]/60" : ""
          }`}
        >
          {/* Animated 3D Boy Mascot on Home Page */}
          <NavBarMascot scrolled={scrolled} />
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group shrink-0">
            <div className="relative w-10 h-10 sm:w-11 sm:h-11">
              <Image
                src="/pep-icon.png"
                alt="Pep Software Logo Icon"
                fill
                sizes="44px"
                priority
                className="object-contain"
              />
            </div>
            <span className="font-semibold text-[23px] sm:text-[26px] text-[#151515] ml-1 tracking-tight">
              Pep Software
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-5 xl:gap-7">
            {navLinks.map((item) => {
              const isActive = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);

              return (
                <div key={item.label} className="relative group">
                  <Link
                    href={item.href}
                    className={`flex items-center gap-1.5 text-[14px] xl:text-[15px] transition-colors py-2 ${
                      isActive ? "text-[#502D6D] font-bold" : "text-[#151515]/75 hover:text-[#502D6D] font-medium"
                    }`}
                  >
                    {item.label}
                    {item.hasDropdown && <ChevronDown className="w-3.5 h-3.5 opacity-60 group-hover:rotate-180 transition-transform duration-200" />}
                  </Link>
                  {isActive && (
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-5 h-1 bg-[#502D6D] rounded-full shadow-[0_0_8px_rgba(80,45,109,0.3)]" />
                  )}

                  {/* Products Dropdown Menu */}
                  {item.label === "Products" && (
                    <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-200 z-50">
                      <div className="w-80 bg-white rounded-2xl p-2.5 shadow-2xl border border-[#502D6D]/15 space-y-1">
                        <Link
                          href="/products/attendance-tracking-system"
                          className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-purple-50/70 transition-colors group/sub"
                        >
                          <div className="w-2 h-2 rounded-full bg-[#502D6D] shrink-0 mt-1.5" />
                          <div>
                            <span className="text-xs font-bold text-[#151515] group-hover/sub:text-[#502D6D] block leading-tight">
                              Attendance Tracking System
                            </span>
                            <span className="text-[10px] text-[#544643] block mt-0.5">
                              Workforce, shifts & location-aware checks
                            </span>
                          </div>
                        </Link>

                        <Link
                          href="/products/business-club-app"
                          className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-amber-50/70 transition-colors group/sub"
                        >
                          <div className="w-2 h-2 rounded-full bg-[#B45309] shrink-0 mt-1.5" />
                          <div>
                            <span className="text-xs font-bold text-[#151515] group-hover/sub:text-[#B45309] block leading-tight">
                              Business Club App
                            </span>
                            <span className="text-[10px] text-[#544643] block mt-0.5">
                              Meetings, referrals & Thank You Notes
                            </span>
                          </div>
                        </Link>

                        <Link
                          href="/products/network-club-app"
                          className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-blue-50/70 transition-colors group/sub"
                        >
                          <div className="w-2 h-2 rounded-full bg-[#1D4ED8] shrink-0 mt-1.5" />
                          <div>
                            <span className="text-xs font-bold text-[#151515] group-hover/sub:text-[#1D4ED8] block leading-tight">
                              Network Club App
                            </span>
                            <span className="text-[10px] text-[#544643] block mt-0.5">
                              Association directory, committees & events
                            </span>
                          </div>
                        </Link>

                        <Link
                          href="/products/matrimony-application"
                          className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-rose-50/70 transition-colors group/sub"
                        >
                          <div className="w-2 h-2 rounded-full bg-[#BE123C] shrink-0 mt-1.5" />
                          <div>
                            <span className="text-xs font-bold text-[#151515] group-hover/sub:text-[#BE123C] block leading-tight">
                              Matrimony Application
                            </span>
                            <span className="text-[10px] text-[#544643] block mt-0.5">
                              B2B profiles, discovery & match administration
                            </span>
                          </div>
                        </Link>

                        <div className="pt-1.5 border-t border-slate-100">
                          <Link
                            href="/products"
                            className="text-[11px] font-bold text-[#502D6D] hover:text-[#3F1E5C] flex items-center justify-between p-2 rounded-lg hover:bg-purple-50/50"
                          >
                            <span>Explore All Products</span>
                            <ArrowRight className="w-3.5 h-3.5 text-[#FCB116]" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </nav>

          {/* Right Button */}
          <div className="flex items-center gap-3">
            <Link
              href="/contact"
              className="hidden sm:flex items-center gap-3 px-2 py-2 pr-6 rounded-full bg-[#151515] text-[#F7F8F8] hover:bg-[#502D6D] transition-all duration-300 group shadow-lg shadow-[#151515]/10 hover:shadow-[#502D6D]/25 border border-transparent hover:border-[#FCB116]/35"
            >
              <span className="pl-4 text-[15px] font-semibold">Contact us</span>
              <div className="w-7 h-7 rounded-full bg-[#FCB116] flex items-center justify-center text-[#151515] group-hover:scale-105 group-hover:translate-x-0.5 transition-all shadow-xs">
                <ArrowRight className="w-4 h-4" />
              </div>
            </Link>

            <button
              onClick={() => setMobileOpen(true)}
              className="lg:hidden p-2 rounded-full bg-[#EFF0EF] text-[#151515] hover:bg-[#E9E8E6] transition-colors"
              aria-label="Open menu"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
              className="fixed inset-0 z-[60] bg-[#151515]/40 backdrop-blur-sm"
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-[85%] max-w-sm bg-[#F7F8F8] z-[70] flex flex-col shadow-2xl border-l border-[#C6C2C1]"
            >
              <div className="flex items-center justify-between p-6 border-b border-[#C6C2C1]/40">
                <span className="font-extrabold text-xl text-[#151515]">Pep Software</span>
                <button
                  onClick={() => setMobileOpen(false)}
                  className="p-2 rounded-full bg-[#EFF0EF] text-[#151515] hover:bg-[#E9E8E6] transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div className="flex-1 px-6 py-8 flex flex-col gap-6">
                {navLinks.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className="text-lg font-medium text-[#151515] hover:text-[#C86A28] transition-colors"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
