import { Button } from "@/components/button";
import { Container } from "@/components/container";
import { SlideIn } from "@/components/slide-in";
import { TypographyHeading } from "@/components/typography";
import { cn } from "@/lib/utils";
import { type ProductInfo } from ".";
import { ParallaxImage } from "./parallax-image";

export function ProductInfo({ productInfo }: { productInfo: ProductInfo }) {
  return (
    <Container
      as="div"
      className={cn(
        "sticky top-[calc(var(--index)*2rem)] bg-[url('/bg-texture.webp')] bg-size-[720px_460px] bg-center bg-repeat",
        productInfo.theme === "blue" && "bg-brand-blue text-white",
        productInfo.theme === "orange" && "bg-brand-orange text-white",
        productInfo.theme === "navy" && "bg-brand-navy text-white",
        productInfo.theme === "lime" && "bg-brand-lime"
      )}
      style={{ "--index": productInfo.id }}
    >
      <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2 md:gap-24">
        <div
          className={cn(
            "flex flex-col items-center gap-8 text-center md:items-start md:text-left",
            productInfo.variant === "imageOnLeft" && "md:order-2"
          )}
        >
          <SlideIn>
            <TypographyHeading size="lg" as="h2">
              {productInfo.heading}
            </TypographyHeading>
          </SlideIn>
          <SlideIn>
            <p className="max-w-md text-lg leading-relaxed">{productInfo.description}</p>
          </SlideIn>
          <SlideIn>
            <Button color={productInfo.theme === "lime" ? "orange" : "lime"}>
              {productInfo.buttonText}
            </Button>
          </SlideIn>
        </div>

        <ParallaxImage
          foregroundImage={productInfo.foregroundImage}
          backgroundImage={productInfo.backgroundImage}
        />
      </div>
    </Container>
  );
}
