import React from "react";
import { publicAssets } from "@/assets";
import { Container } from "@/components/container";
import { SlideIn } from "@/components/slide-in";
import { TypographyHeading } from "@/components/typography";
import { Member } from "./member";

export function Team() {
  const team = getTeam();

  return (
    <Container
      id="home-team"
      className="bg-brand-navy bg-[url('/bg-texture.webp')] bg-size-[720px_460px] bg-center bg-repeat"
    >
      <SlideIn>
        <TypographyHeading as="h2" size="lg" className="mb-8 text-center text-white">
          The Team
        </TypographyHeading>
      </SlideIn>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
        {team.map((member, index) => (
          <React.Fragment key={index}>
            <SlideIn>
              <Member index={index} member={member} />
            </SlideIn>
          </React.Fragment>
        ))}
      </div>
    </Container>
  );
}

export interface TeamMember {
  id: string;
  firstName: string;
  lastName: string;
  foregroundImage: string;
  backgroundImage: string;
}

function getTeam(): TeamMember[] {
  return [
    {
      id: "1",
      firstName: "Sophie",
      lastName: "Castillo",
      backgroundImage: publicAssets.team.sophieBack,
      foregroundImage: publicAssets.team.sophieFront,
    },
    {
      id: "2",
      firstName: "Carter",
      lastName: "Bell",
      backgroundImage: publicAssets.team.carterBack,
      foregroundImage: publicAssets.team.carterFront,
    },
    {
      id: "3",
      firstName: "Dylan",
      lastName: "Foster",
      backgroundImage: publicAssets.team.dylanBack,
      foregroundImage: publicAssets.team.dylanFront,
    },
    {
      id: "4",
      firstName: "Jordan",
      lastName: "Lee",
      backgroundImage: publicAssets.team.jordanBack,
      foregroundImage: publicAssets.team.jordanFront,
    },
  ];
}
