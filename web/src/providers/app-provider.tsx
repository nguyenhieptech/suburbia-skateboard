import { SVGFiltersSquiggle } from "@/components/svg-filters-squiggle";
import { NuqsProvider } from "./nuqs-provider";
import { SmoothScrollProvider } from "./smooth-scroll-provider";

export function AppProvider({ children }: { children: React.ReactNode }) {
  return (
    <NuqsProvider>
      <SmoothScrollProvider>
        {children}
        <SVGFiltersSquiggle />
      </SmoothScrollProvider>
    </NuqsProvider>
  );
}
