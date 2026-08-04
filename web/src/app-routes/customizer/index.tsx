import Link from "next/link";
import { Suspense } from "react";
import { Button } from "@/components/button";
import { Loading } from "@/components/loading";
import { Logo } from "@/components/logo";
import { TypographyHeading } from "@/components/typography";
import { CustomizerControlsProvider } from "./context";
import { Controls } from "./controls";
import { Preview } from "./preview";

export function CustomizerAppRoute() {
  return (
    <Suspense fallback={null}>
      <div className="flex min-h-screen flex-col lg:flex-row">
        <CustomizerControlsProvider>
          <div className="relative aspect-square shrink-0 bg-zinc-700 lg:aspect-auto lg:grow">
            <div className="absolute inset-0">
              <Preview />
            </div>
            <Link href="/" className="absolute top-6 left-6">
              <Logo className="h-12 text-white" />
            </Link>
          </div>
          <div className="fl-p-4/6 grow bg-zinc-900 bg-[url('/bg-texture.webp')] bg-size-[720px_460px] bg-center bg-repeat text-white lg:w-96 lg:shrink-0 lg:grow-0">
            <TypographyHeading as="h1" size="sm" className="mt-0 mb-6">
              Build your board
            </TypographyHeading>
            <Controls className="mb-6" />
            <Button color="lime" icon="plus">
              Add to cart
            </Button>
          </div>
        </CustomizerControlsProvider>
        <Loading />
      </div>
    </Suspense>
  );
}
