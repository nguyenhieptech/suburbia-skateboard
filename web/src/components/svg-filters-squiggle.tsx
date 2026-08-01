/**
 * Defines hidden SVG filter definitions for squiggle effects.
 * Used to apply dynamic squiggle animations to text elements.
 */
export function SVGFiltersSquiggle() {
  return (
    <svg className="h-0 w-0">
      <defs>
        {Array.from({ length: 5 }).map((_, index) => (
          <filter key={index} id={`squiggle-${index}`}>
            <feTurbulence
              baseFrequency="0.01"
              id="turbulence"
              numOctaves="2"
              result="noise"
              seed={index}
            />
            <feDisplacementMap
              id="displacement"
              in2="noise"
              in="SourceGraphic"
              scale="6"
            />
          </filter>
        ))}
      </defs>
    </svg>
  );
}
