import Image from "next/image";
import Link from "next/link";
import { FaStar } from "react-icons/fa6";
import { Button } from "@/components/button";
import { TypographyHeading } from "@/components/typography";
import { cn } from "@/lib/utils";
import { type SkateboardProductItem } from ".";
import { HorizontalLine, VerticalLine } from "./line";
import { Scribble } from "./scribble";

export function ProductItem({ product }: { product: SkateboardProductItem }) {
  return (
    <div className="group relative mx-auto w-full max-w-72 px-8 pt-4">
      <VerticalLine
        className={cn(
          "absolute top-0 h-full stroke-2 text-stone-300 transition-colors group-hover:text-stone-400",
          "left-4"
        )}
      />
      <VerticalLine
        className={cn(
          "absolute top-0 h-full stroke-2 text-stone-300 transition-colors group-hover:text-stone-400",
          "right-4"
        )}
      />
      <HorizontalLine className="-mx-8 stroke-2 text-stone-300 transition-colors group-hover:text-stone-400" />

      <div className="fl-text-sm/2xl flex items-center justify-between">
        <span>${product.price}</span>
        <span className="inline-flex items-center gap-1">
          <FaStar className="text-yellow-400" />
          {product.star}
        </span>
      </div>
      <div className="-mb-1 overflow-hidden py-4">
        <Scribble
          className="absolute inset-0 h-full w-full"
          color={product.scribbleColor}
        />
        <Image
          alt={`skateboard-${product.imgAlt}`}
          src={product.imgUrl}
          width={150}
          height={150}
          className="mx-auto w-[58%] origin-top transform-gpu transition-transform duration-500 ease-in-out group-hover:scale-140"
        />
      </div>
      <HorizontalLine className="-mx-8 stroke-2 text-stone-300 transition-colors group-hover:text-stone-400" />
      <TypographyHeading as="h3" size="xs" className="my-2 text-center">
        {product.name}
      </TypographyHeading>
      <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-200 group-hover:opacity-100">
        <Button>
          <Link
            href={`/customizer?deck=${product.deck}&wheel=${product.wheel}&truck=${product.truck}&bolt=${product.bolt}`}
          >
            Customize
          </Link>
        </Button>
      </div>
    </div>
  );
}
