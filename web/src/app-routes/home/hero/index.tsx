import Link from "next/link";
import { Button } from "@/components/button";
import { Container } from "@/components/container";
import { TypographyHeading } from "@/components/typography";
import { InteractiveSkateboard } from "./interactive-skateboard";
import { TallLogo } from "./tall-logo";
import { WideLogo } from "./wide-logo";

export function Hero() {
  return (
    <Container
      id="home-hero"
      className="relative h-dvh overflow-hidden bg-brand-pink bg-[url('/bg-texture.webp')] bg-size-[720px_460px] bg-center bg-repeat text-zinc-800"
    >
      <div className="absolute inset-0 flex items-center pt-20">
        <WideLogo className="hidden w-full text-brand-purple opacity-20 mix-blend-multiply lg:block" />
        <TallLogo className="w-full text-brand-purple opacity-20 mix-blend-multiply lg:hidden" />
      </div>

      <div className="absolute inset-0 mx-auto mt-24 grid max-w-6xl grid-rows-[1fr,auto] place-items-end fl-p-10/16 px-6">
        <TypographyHeading className="relative max-w-2xl place-self-start">
          Escape the cul-de-sac
        </TypographyHeading>
        <div className="relative flex w-full flex-col items-center justify-between gap-2 lg:flex-row">
          <div className="max-w-[45ch] fl-text-lg/xl font-semibold">
            Not just a board, <span className="text-brand-purple italic">your </span>
            board. Design a board that&apos;s as real as the places you take it.
          </div>
          <Link href="/customizer" className="hover:cursor-pointer">
            <Button icon="skateboard" size="lg" className="z-20 mt-2">
              <span>Build your board</span>
            </Button>
          </Link>
        </div>
      </div>

      <InteractiveSkateboard />
    </Container>
  );
}
