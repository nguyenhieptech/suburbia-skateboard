"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ReactNode, useRef, useLayoutEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

interface Props {
  children: ReactNode;
  duration?: number; // seconds
  delay?: number; // seconds
}

export function SlideIn({ children, duration = 0.6, delay = 0 }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (!ref.current) return;

    gsap.from(ref.current, {
      x: -100,
      opacity: 0,
      duration,
      delay,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ref.current,
        start: "top 85%",
        once: true,
      },
    });
  }, [delay, duration]);

  return <div ref={ref}>{children}</div>;
}
