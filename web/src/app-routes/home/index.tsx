import { Hero } from "./hero";
import { Product } from "./product";
import { ProductInfoContent } from "./product-info-content";
import { Team } from "./team";
import { VideoShowcase } from "./video-showcase";

export function HomeAppRoute() {
  return (
    <>
      <Hero />
      <Product />
      <ProductInfoContent />
      <VideoShowcase />
      <Team />
    </>
  );
}
