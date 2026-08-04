"use client";

import { useEffect, useState } from "react";
import { Logo } from "@/components/logo";
import { cn } from "@/lib/utils";
import { useProgress } from "@react-three/drei";

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
        "bg-brand-navy absolute inset-0 grid place-content-center font-sans text-[15vw] text-white transition-opacity duration-2000",
        progress >= 100 ? "pointer-events-none opacity-0" : "opacity-100"
      )}
    >
      <Logo className="animate-squiggle text-brand-pink w-[15vw]" />
      <p className="animate-squiggle text-brand-lime w-full content-center text-center leading-none">
        LOADING...
      </p>
    </div>
  );
}
