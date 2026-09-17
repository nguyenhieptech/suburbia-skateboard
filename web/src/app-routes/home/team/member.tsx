import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/button";
import { cn } from "@/lib/utils";
import { type TeamMember } from ".";
import { Scribble } from "./scribble";

const colors = [
  "text-brand-blue",
  "text-brand-lime",
  "text-brand-orange",
  "text-brand-pink",
  "text-brand-purple",
];

export function Member({ member, index }: { member: TeamMember; index: number }) {
  const scribbleColor = colors[index];

  return (
    <div className="group relative flex flex-col items-center gap-4">
      <div className="grid place-items-center overflow-hidden *:[grid-area:1/1]">
        <Image
          src={member.backgroundImage}
          width={500}
          height={500}
          alt={`team-${member.firstName}-${member.lastName}-background`}
          className="scale-110 transform transition-all duration-1000 ease-in-out group-hover:scale-100 group-hover:brightness-75 group-hover:saturate-[.8]"
        />
        <Scribble className={cn("relative", scribbleColor)} />
        <Image
          src={member.foregroundImage}
          width={500}
          height={500}
          alt={`team-${member.firstName}-${member.lastName}-foreground`}
          className="z-2 block transform transition-transform duration-1000 ease-in-out group-hover:scale-110"
        />
        <div className="relative z-3 h-48 w-full place-self-end bg-linear-to-t from-black via-transparent to-transparent"></div>
        <h3 className="relative z-3 grid place-self-end justify-self-start p-2 font-sans fl-text-2xl/3xl text-brand-gray">
          <span className="mb-[-.3em] block">{member.firstName}</span>
          <span className="block">{member.lastName}</span>
        </h3>
      </div>
      <Link href="/customizer">
        <Button size="sm">Build their board</Button>
      </Link>
    </div>
  );
}
