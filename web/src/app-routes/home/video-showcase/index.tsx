import Image from "next/image";
import { publicAssets } from "@/assets";
import { Container } from "@/components/container";
import { cn } from "@/lib/utils";
import { VideoPlayer } from "./video-player";

const MASK_CLASSES =
  "[mask-image:url(/video-mask.png)] [mask-mode:alpha] [mask-position:center_center] [mask-repeat:no-repeat] [mask-size:100%_auto]";

export function VideoShowcase() {
  return (
    <Container
      id="home-video-showcase"
      className="bg-zinc-900 bg-[url('/bg-texture.webp')] bg-size-[720px_460px] bg-center bg-repeat"
      // For remote images (URLs), use the style attribute with a template literal because Tailwind CSS
      // is a static analysis tool that cannot process dynamic or external URLs in its utility classes.
      // style={{
      //   backgroundImage: `url(${publicAssets.bgTexture})`,
      // }}
    >
      <div className="relative aspect-video">
        {/* Masks */}
        <div
          className={cn(
            MASK_CLASSES,
            "absolute inset-0 translate-x-3 translate-y-3 bg-brand-lime"
          )}
        />
        <div
          className={cn(
            MASK_CLASSES,
            "absolute inset-0 translate-x-2 translate-y-2 bg-white"
          )}
        />
        <div
          className={cn(
            MASK_CLASSES,
            "absolute inset-0 -translate-x-2 -translate-y-2 bg-white"
          )}
        />

        {/* Video */}
        <div className={cn(MASK_CLASSES, "relative h-full")}>
          <VideoPlayer />
          {/* Texture overlay */}
          <Image
            src={publicAssets.imageTexture}
            alt=""
            fill
            className="pointer-events-none object-cover opacity-50"
          />
        </div>
      </div>
    </Container>
  );
}
