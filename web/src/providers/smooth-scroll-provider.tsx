"use client";

import "lenis/dist/lenis.css";
import { ReactLenis } from "lenis/react";

/**
 * @description Smooth scrolling experiences on the web with Lenis
 * @see https://github.com/darkroomengineering/lenis/tree/main/packages/react
 */
export function SmoothScrollProvider({ children }: { children?: React.ReactNode }) {
  return <ReactLenis root>{children}</ReactLenis>;
}
