import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { SVGFiltersSquiggle } from "@/components/svg-filters-squiggle";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
      <SVGFiltersSquiggle />
    </>
  );
}
