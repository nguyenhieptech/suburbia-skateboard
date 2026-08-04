import { SVGFiltersSquiggle } from "@/components/svg-filters-squiggle";
import { NuqsProvider } from "./nuqs-provider";

export function AppProvider({ children }: { children: React.ReactNode }) {
  return (
    <NuqsProvider>
      {children}
      <SVGFiltersSquiggle />
    </NuqsProvider>
  );
}
