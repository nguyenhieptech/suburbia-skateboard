"use client";

import Image from "next/image";
import { TypographyHeading } from "@/components/typography";
import { cn } from "@/lib/utils";
import {
  useCustomizerControls,
  boltOptions,
  deckOptions,
  truckOptions,
  wheelOptions,
} from "./context";

export function Controls({ className }: { className?: string }) {
  const { config, setConfig } = useCustomizerControls();

  return (
    <div className={cn("flex flex-col gap-6", className)}>
      <Options title="Deck" selectedName={config.deck}>
        {deckOptions.map((deck) => (
          <Option
            key={deck.name}
            imageUrl={deck.url}
            selected={deck.name === config.deck}
            onClick={() => setConfig({ deck: deck.name })}
          >
            {displayOption(deck.name)}
          </Option>
        ))}
      </Options>
      <Options title="Wheels" selectedName={config.wheel}>
        {wheelOptions.map((wheel) => (
          <Option
            key={wheel.name}
            imageUrl={wheel.url}
            selected={wheel.name === config.wheel}
            onClick={() => setConfig({ wheel: wheel.name })}
          >
            {displayOption(wheel.name)}
          </Option>
        ))}
      </Options>
      <Options title="Trucks" selectedName={config.truck}>
        {truckOptions.map((truck) => (
          <Option
            key={truck.name}
            colorHex={truck.color}
            selected={truck.name === config.truck}
            onClick={() => setConfig({ truck: truck.name })}
          >
            {displayOption(truck.name)}
          </Option>
        ))}
      </Options>
      <Options title="Bolts" selectedName={config.bolt}>
        {boltOptions.map((bolt) => (
          <Option
            key={bolt.name}
            colorHex={bolt.color}
            selected={bolt.name === config.bolt}
            onClick={() => setConfig({ bolt: bolt.name })}
          >
            {displayOption(bolt.name)}
          </Option>
        ))}
      </Options>
    </div>
  );
}

function displayOption(option: string) {
  return option.replace(/-/g, " ");
}

interface OptionsProps {
  title?: React.ReactNode;
  selectedName?: string;
  children?: React.ReactNode;
}

function Options({ title, selectedName, children }: OptionsProps) {
  const formattedName = selectedName?.replace(/-/g, " ");

  return (
    <div>
      <div className="flex">
        <TypographyHeading as="h2" size="xs" className="mb-2">
          {title}
        </TypographyHeading>
        <p className="ml-3 text-zinc-300">
          <span className="text-zinc-500 select-none">| </span>
          {formattedName}
        </p>
      </div>
      <ul className="mb-1 flex flex-wrap gap-2">{children}</ul>
    </div>
  );
}

type OptionProps = React.ComponentProps<"button"> & {
  selected: boolean;
  onClick: () => void;
  imageUrl?: string;
  colorHex?: string;
};

function Option({ children, selected, imageUrl, colorHex, onClick }: OptionProps) {
  return (
    <li>
      <button
        className={cn(
          "size-10 cursor-pointer rounded-full bg-black p-0.5 outline-2 outline-transparent",
          selected && "outline-white"
        )}
        onClick={onClick}
      >
        {imageUrl ? (
          <Image
            src={imageUrl}
            alt=""
            width={150}
            height={150}
            className="pointer-events-none h-full w-full rounded-full"
          />
        ) : (
          <div
            className="h-full w-full rounded-full"
            style={{ backgroundColor: colorHex ?? undefined }}
          />
        )}

        <span className="sr-only">{children}</span>
      </button>
    </li>
  );
}
