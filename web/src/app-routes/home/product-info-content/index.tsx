import { publicAssets } from "@/assets";
import { ProductInfo } from "./product-info";

export function ProductInfoContent() {
  const productInfoContent = getProductInfoContent();

  return (
    <section id="home-product-info">
      {productInfoContent.map((productInfo) => (
        <ProductInfo key={productInfo.id} productInfo={productInfo} />
      ))}
    </section>
  );
}

export interface ProductInfo {
  id: string;
  theme: "blue" | "orange" | "navy" | "lime";
  heading: string;
  description: string;
  buttonText: string;
  foregroundImage: string;
  backgroundImage: string;
  variant: "imageOnLeft" | "imageOnRight";
}

function getProductInfoContent(): ProductInfo[] {
  return [
    {
      id: "1",
      theme: "blue",
      heading: "Crafted for the kickflip",
      description:
        "Built for big tricks and hard landings, our boards are designed to handle every flip, grind, and bail. Perfect balance, every time.",
      buttonText: "Shop Boards",
      foregroundImage: publicAssets.person1,
      backgroundImage: publicAssets.bgPaint,
      variant: "imageOnRight",
    },
    {
      id: "2",
      theme: "orange",
      heading: "Not Just a Deck, It's Your Canvas",
      description:
        "Each board is a canvas for expression, crafted for those who treat the backstreets as their own art gallery.",
      buttonText: "Shop Boards",
      foregroundImage: publicAssets.person2,
      backgroundImage: publicAssets.bgPaint,
      variant: "imageOnLeft",
    },
    {
      id: "3",
      theme: "navy",
      heading: "Built for Hard Landings",
      description:
        "Skateboarding isn't always smooth. Our boards are built tough to survive the scuffs, scratches, and slams that come with real skating.",
      buttonText: "Shop Boards",
      foregroundImage: publicAssets.person3,
      backgroundImage: publicAssets.bgPaint,
      variant: "imageOnRight",
    },
    {
      id: "4",
      theme: "lime",
      heading: "Fueling the Next Generation",
      description:
        "We're committed to supporting young skaters and DIY projects, giving back to the communities that keep skateboarding alive and evolving.",
      buttonText: "Shop Boards",
      foregroundImage: publicAssets.person4,
      backgroundImage: publicAssets.bgPaint,
      variant: "imageOnLeft",
    },
  ];
}
