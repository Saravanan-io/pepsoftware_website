"use client";

import { ReactNode, useEffect } from "react";
import { usePathname } from "next/navigation";
import { registerGSAP } from "@/lib/gsap";
import { useLenis } from "@/hooks/useLenis";

export function SmoothScrollProvider({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const lenisRef = useLenis();

  useEffect(() => {
    // Reset scroll to top smoothly on page route changes
    if (lenisRef.current) {
      lenisRef.current.scrollTo(0, { immediate: true });
    }
  }, [pathname, lenisRef]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.history.scrollRestoration = "manual";
    }

    const { ScrollTrigger } = registerGSAP();
    ScrollTrigger.clearScrollMemory("manual");

    // Initial refresh after short tick to ensure DOM is ready
    const timer = setTimeout(() => {
      ScrollTrigger.sort();
      ScrollTrigger.refresh();
    }, 100);

    // Refresh after fonts are loaded
    if (typeof document !== "undefined" && document.fonts) {
      document.fonts.ready.then(() => {
        ScrollTrigger.refresh();
      });
    }

    // Refresh after full window load
    const onLoad = () => {
      ScrollTrigger.sort();
      ScrollTrigger.refresh();
    };

    window.addEventListener("load", onLoad);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("load", onLoad);
    };
  }, []);

  return <>{children}</>;
}
