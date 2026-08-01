import { useLayoutEffect, useState } from "react";

export function useIsSafari(defaultValue = false) {
  const [isSafari, setIsSafari] = useState(defaultValue);

  useLayoutEffect(() => {
    const isSafari =
      typeof window === "undefined"
        ? false
        : window.navigator.userAgent.includes("Safari") &&
          !window.navigator.userAgent.includes("Chrom"); // "Chrome" or "Chromium",

    setIsSafari(isSafari);
  }, []);

  return isSafari;
}
