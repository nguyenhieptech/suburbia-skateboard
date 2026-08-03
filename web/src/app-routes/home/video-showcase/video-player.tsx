"use client";

import { useEffect, useRef, useState } from "react";

export function VideoPlayer({ youTubeId = "44I29krtxaw" }: { youTubeId?: string }) {
  const [isInView, setIsInView] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const currentContainerRef = containerRef.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0, rootMargin: "1500px" }
    );

    if (currentContainerRef) {
      observer.observe(currentContainerRef);
    }

    return () => {
      if (currentContainerRef) {
        observer.unobserve(currentContainerRef);
      }
    };
  });

  return (
    <div ref={containerRef} className="relative h-full w-full">
      {isInView && (
        // https://developers.google.com/youtube/player_parameters
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${youTubeId}?playlist=${youTubeId}&autoplay=1&mute=1&loop=1&controls=0&cc_load_policy=1`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          className="pointer-events-none h-full w-full border-0"
        />
      )}
    </div>
  );
}
