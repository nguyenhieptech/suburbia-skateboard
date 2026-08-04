import { publicAssets } from "@/assets";
import { Container } from "@/components/container";
import { SlideIn } from "@/components/slide-in";
import { TypographyHeading } from "@/components/typography";
import { ProductItem } from "./product-item";

export interface SkateboardProductItem {
  id: string;
  name: string;
  price: string;
  star: string;
  imgUrl: string;
  imgAlt: string;
  scribbleColor: string;
  deck: string;
  wheel: string;
  truck: string;
  bolt: string;
}

function getProducts(): SkateboardProductItem[] {
  return [
    {
      id: "1",
      name: "Green Navy",
      price: "89.99",
      star: "40",
      imgUrl: publicAssets.complete.completeGreenNavy,
      imgAlt: "green-navy",
      scribbleColor: "oklch(0.72 0.16 122.62)",
      deck: "green-navy",
      wheel: "lime",
      truck: "black",
      bolt: "lime",
    },
    {
      id: "2",
      name: "Pink Drop",
      price: "89.99",
      star: "37",
      imgUrl: publicAssets.complete.completePinkDrop,
      imgAlt: "pink-drop",
      scribbleColor: "oklch(0.66 0.2 9.66)",
      deck: "pink-swirl",
      wheel: "cream",
      truck: "silver",
      bolt: "white",
    },
    {
      id: "3",
      name: "Yellow Black",
      price: "89.99",
      star: "35",
      imgUrl: publicAssets.complete.completeYellowBlack,
      imgAlt: "yellow-black",
      scribbleColor: "oklch(0.89 0.14 103.9)",
      deck: "yellow-black",
      wheel: "yellow",
      truck: "black",
      bolt: "yellow",
    },
    {
      id: "4",
      name: "Grid Streaks",
      price: "99.99",
      star: "52",
      imgUrl: publicAssets.complete.completeGridStreaks,
      imgAlt: "grid-streaks",
      scribbleColor: "oklch(0.39 0.12 262.31)",
      deck: "grid-streaks",
      wheel: "navy",
      truck: "black",
      bolt: "silver",
    },
  ];
}

export function Products() {
  const products = getProducts();

  return (
    <Container
      id="home-products"
      className="bg-brand-gray bg-[url('/bg-texture.webp')] bg-size-[720px_460px] bg-center bg-repeat"
    >
      <SlideIn>
        <TypographyHeading className="fl-mb-4/6 text-center" as="h2">
          Latest Drop
        </TypographyHeading>
      </SlideIn>
      <SlideIn>
        <div className="fl-mb-6/10 text-center">
          Grab our freshest designs before they sell out!
        </div>
      </SlideIn>
      <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
        {products.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </div>
    </Container>
  );
}
