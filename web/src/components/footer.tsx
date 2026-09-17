import Image from "next/image";
import Link from "next/link";
import { publicAssets } from "@/assets";
import { Container } from "@/components/container";
import { FooterPhysics } from "@/components/footer-physics";
import { Logo } from "@/components/logo";

export function Footer() {
  const footerLinks = getFooterLinks();

  return (
    <footer className="overflow-hidden bg-zinc-900 bg-[url('/bg-texture.webp')] bg-size-[720px_460px] bg-center bg-repeat text-white">
      <div className="relative h-[80vh] md:aspect-auto">
        <Image
          src={publicAssets.footer}
          alt="footer-background"
          className="h-full w-full object-cover"
          width={1400}
          height={800}
          loading="eager"
        />
        <Logo className="pointer-events-none absolute fl-top-10/18 fl-left-10/18 h-20 mix-blend-exclusion md:h-28" />
        <FooterPhysics />
      </div>
      <Container as="nav">
        <ul className="flex flex-wrap justify-center gap-8 fl-text-lg/xl">
          {footerLinks.map((link) => (
            <li key={link.label} className="hover:underline">
              <Link href={link.href}>{link.label}</Link>
            </li>
          ))}
        </ul>
      </Container>
    </footer>
  );
}

function getFooterLinks() {
  return [
    { id: "1", label: "Team", href: "#home-team" },
    { id: "2", label: "Customizer", href: "/customizer" },
    { id: "3", label: "About", href: "" },
  ];
}
