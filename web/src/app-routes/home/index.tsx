import { Hero } from "./hero";
import { ProductInfoContent } from "./product-info-content";
import { Products } from "./products";
import { Team } from "./team";
import { VideoShowcase } from "./video-showcase";

export function HomeAppRoute() {
  return (
    <>
      <Hero />
      <Products />
      <ProductInfoContent />
      <VideoShowcase />
      <Team />
    </>
  );
}
