"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function Preloader() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const seen = sessionStorage.getItem("pep_seen");
    if (seen) { setShow(false); return; }
    const t = setTimeout(() => {
      setShow(false);
      sessionStorage.setItem("pep_seen", "1");
    }, 1200);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.03, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#F7F8F8]"
        >
          {/* Background grid */}
          <div className="absolute inset-0 bg-grid-dark opacity-30 pointer-events-none" />

          <div className="relative flex flex-col items-center gap-5">
            {/* Logo SVG animation */}
            <svg width="72" height="72" viewBox="0 0 100 100" fill="none" className="drop-shadow-md">
              <defs>
                <linearGradient id="pepG" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#151515" />
                  <stop offset="60%" stopColor="#544643" />
                  <stop offset="100%" stopColor="#C86A28" />
                </linearGradient>
              </defs>
              <motion.path
                d="M 28 80 L 28 20 C 28 20 68 18 68 42 C 68 64 28 62 28 62"
                stroke="url(#pepG)"
                strokeWidth="9"
                strokeLinecap="round"
                fill="none"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 0.85, ease: "easeInOut" }}
              />
              <motion.circle
                cx="73"
                cy="42"
                r="7"
                fill="#C86A28"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.6, type: "spring", stiffness: 200 }}
              />
            </svg>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="flex items-baseline gap-1.5 font-clash"
            >
              <span className="text-2xl font-medium tracking-tight text-[#151515]">Pep</span>
              <span className="text-2xl font-medium tracking-tight text-[#502D6D]">Software</span>
            </motion.div>

            {/* Progress track */}
            <div className="w-36 h-[3px] bg-[#C6C2C1]/40 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 1.0, ease: "easeInOut" }}
                className="h-full rounded-full bg-gradient-to-r from-[#151515] via-[#544643] to-[#C86A28]"
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
