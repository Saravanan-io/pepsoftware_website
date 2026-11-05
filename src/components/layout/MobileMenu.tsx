"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronDown, Phone, MapPin, ArrowRight } from "lucide-react";
import { NAV_ITEMS, COMPANY_INFO } from "@/lib/constants";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const [expandedNav, setExpandedNav] = useState<string | null>(null);

  const toggleExpand = (label: string) => {
    setExpandedNav(expandedNav === label ? null : label);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-40 bg-black/40 backdrop-blur-xs md:hidden"
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 bottom-0 w-[85%] max-w-sm bg-[#F7F8F8] z-50 flex flex-col p-6 shadow-2xl overflow-y-auto border-l border-[#C6C2C1]"
          >
            {/* Top header with close button */}
            <div className="flex items-center justify-between pb-6 border-b border-[#C6C2C1]/60">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-[#151515] flex items-center justify-center text-[#C86A28] font-bold text-lg shadow-sm border border-[#544643]">
                  P
                </div>
                <span className="font-medium text-lg text-[#151515] font-clash">Pep Software</span>
              </div>
              <button
                onClick={onClose}
                className="p-2 rounded-full hover:bg-[#E9E8E6] text-[#544643] transition-colors"
                aria-label="Close menu"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Nav list */}
            <div className="flex-1 py-6 space-y-2">
              {NAV_ITEMS.map((item) => (
                <div key={item.label} className="border-b border-[#C6C2C1]/40 pb-2">
                  {item.children ? (
                    <div>
                      <button
                        onClick={() => toggleExpand(item.label)}
                        className="flex items-center justify-between w-full py-2.5 text-base font-semibold text-[#151515] hover:text-[#C86A28] transition-colors"
                      >
                        <span className="flex items-center gap-2">
                          {item.label}
                          {item.badge && (
                            <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-[#E9E8E6] text-[#C86A28] border border-[#C6C2C1]">
                              {item.badge}
                            </span>
                          )}
                        </span>
                        <ChevronDown
                          className={`w-4 h-4 text-[#544643] transition-transform ${
                            expandedNav === item.label ? "rotate-180 text-[#C86A28]" : ""
                          }`}
                        />
                      </button>

                      <AnimatePresence>
                        {expandedNav === item.label && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="overflow-hidden pl-3 space-y-1.5 pt-1 pb-2 border-l-2 border-[#C86A28] ml-1"
                          >
                            {item.children.map((subItem) => (
                              <Link
                                key={subItem.href}
                                href={subItem.href}
                                onClick={onClose}
                                className="block py-1.5 text-sm text-[#544643] hover:text-[#C86A28] transition-colors"
                              >
                                {subItem.label}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      onClick={onClose}
                      className="block py-2.5 text-base font-semibold text-[#151515] hover:text-[#C86A28] transition-colors"
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}
            </div>

            {/* Quick contact blurb */}
            <div className="pt-4 border-t border-[#C6C2C1]/60 space-y-3">
              <a
                href={`tel:${COMPANY_INFO.phoneRaw}`}
                className="flex items-center gap-3 text-xs text-[#544643] hover:text-[#C86A28]"
              >
                <div className="w-8 h-8 rounded-full bg-[#E9E8E6] flex items-center justify-center text-[#C86A28] border border-[#C6C2C1]">
                  <Phone className="w-4 h-4" />
                </div>
                <span>{COMPANY_INFO.phone}</span>
              </a>

              <div className="flex items-start gap-3 text-xs text-[#544643]">
                <div className="w-8 h-8 rounded-full bg-[#E9E8E6] flex items-center justify-center text-[#C86A28] border border-[#C6C2C1] shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4" />
                </div>
                <span className="line-clamp-2 leading-relaxed">
                  {COMPANY_INFO.locations}
                </span>
              </div>

              <Link
                href="/contact"
                onClick={onClose}
                className="w-full mt-4 flex items-center justify-center gap-2 py-3 px-4 rounded-full bg-[#151515] text-[#F7F8F8] text-sm font-semibold hover:bg-[#544643] shadow-md active:scale-95 transition-all"
              >
                <span>Start a Project</span>
                <ArrowRight className="w-4 h-4 text-[#C86A28]" />
              </Link>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
