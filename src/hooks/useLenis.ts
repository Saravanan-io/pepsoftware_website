"use client";

import { useEffect, useRef } from "react";
import Lenis from "lenis";
import { gsap } from "gsap";
import { registerGSAP } from "@/lib/gsap";

export function useLenis() {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    // Respect prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) return;

    const { ScrollTrigger } = registerGSAP();

    const lenis = new Lenis({
      lerp: 0.1,
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1.0,
      touchMultiplier: 1.5,
    });

    lenisRef.current = lenis;

    // Sync Lenis with ScrollTrigger on each scroll event
    lenis.on("scroll", ScrollTrigger.update);

    // Drive Lenis through GSAP ticker to share a single RAF loop
    // This prevents two competing requestAnimationFrame loops
    const onTick = (time: number) => {
      lenis.raf(time * 1000);
    };
    gsap.ticker.add(onTick);
    gsap.ticker.lagSmoothing(0); // prevent large jumps after tab switch

    // Normalize all ScrollTrigger measurements once every trigger on the page
    // has been created (this hook's effect runs after all child effects) and
    // again once every asset has finished loading. Without this, a trigger
    // created before a sibling's pin-spacer keeps stale start/end values and
    // its pin hijacks the sibling's scroll range.
    const refreshId = requestAnimationFrame(() => ScrollTrigger.refresh());
    const onLoad = () => ScrollTrigger.refresh();
    window.addEventListener("load", onLoad);

    return () => {
      cancelAnimationFrame(refreshId);
      window.removeEventListener("load", onLoad);
      gsap.ticker.remove(onTick);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  return lenisRef;
}

