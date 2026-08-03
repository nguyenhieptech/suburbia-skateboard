import Image from "next/image";
import Link from "next/link";
import { publicAssets } from "@/assets";
import { Container } from "@/components/container";
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
        />
        <Logo className="fl-top-10/18 fl-left-10/18 pointer-events-none absolute h-20 mix-blend-exclusion md:h-28" />
      </div>
      <Container as="nav">
        <ul className="fl-text-lg/xl flex flex-wrap justify-center gap-8">
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
    { id: "2", label: "Customize", href: "/customize" },
    { id: "3", label: "About", href: "" },
  ];
}
