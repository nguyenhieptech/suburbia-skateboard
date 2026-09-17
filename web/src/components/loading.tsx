"use client";

import { useEffect, useState } from "react";
import { useProgress } from "@react-three/drei";
import { Logo } from "@/components/logo";
import { cn } from "@/lib/utils";

export function Loading() {
  const { progress } = useProgress();
  const [hasLoadedOnce, setHasLoadedOnce] = useState(false);

  useEffect(() => {
    if (progress >= 100 && !hasLoadedOnce) {
      // Keep loading screen visible for a brief moment after completion
      const timer = setTimeout(() => {
        setHasLoadedOnce(true);
      }, 500);

      return () => clearTimeout(timer);
    }
  }, [progress, hasLoadedOnce]);

  // Don't show loading screen after initial load
  if (hasLoadedOnce) return null;

  return (
    <div
      className={cn(
        "absolute inset-0 grid place-content-center bg-brand-navy font-sans text-[15vw] text-white transition-opacity duration-2000",
        progress >= 100 ? "pointer-events-none opacity-0" : "opacity-100"
      )}
    >
      <Logo className="w-[15vw] animate-squiggle text-brand-pink" />
      <p className="w-full animate-squiggle content-center text-center leading-none text-brand-lime">
        LOADING...
      </p>
    </div>
  );
}
