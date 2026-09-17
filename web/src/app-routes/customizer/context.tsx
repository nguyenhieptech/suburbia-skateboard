"use client";

import { createContext, useContext } from "react";
import { useQueryStates, parseAsStringEnum } from "nuqs";
import { publicAssets } from "@/assets";

export const deckOptions = [
  { name: "yellow-black", url: publicAssets.deck.deckYellowBlack },
  { name: "oni-mask", url: publicAssets.deck.deckOniMask },
  { name: "grid-streaks", url: publicAssets.deck.deckGridStreaks },
  { name: "branches", url: publicAssets.deck.deckBlackYellow },
  { name: "thank-you", url: publicAssets.deck.deckThankYou },
  { name: "pink-swirl", url: publicAssets.deck.deckPinkSwirl },
  { name: "green-navy", url: publicAssets.deck.deckGreenNavy },
  { name: "black-yellow", url: publicAssets.deck.deckBlackYellow },
  { name: "red-black", url: publicAssets.deck.deckRedBlack },
  { name: "red-white", url: publicAssets.deck.deckRedWhite },
  { name: "gray-black", url: publicAssets.deck.deckGrayBlack },
] as const;

export const wheelOptions = [
  { name: "cream", url: publicAssets.wheel.wheelCream },
  { name: "black", url: publicAssets.wheel.wheelBlack },
  { name: "navy", url: publicAssets.wheel.wheelNavy },
  { name: "blue", url: publicAssets.wheel.wheelBlue },
  { name: "yellow", url: publicAssets.wheel.wheelYellow },
  { name: "red", url: publicAssets.wheel.wheelRed },
  { name: "lime", url: publicAssets.wheel.wheelGreen },
  { name: "purple", url: publicAssets.wheel.wheelPurple },
  { name: "pink", url: publicAssets.wheel.wheelPink },
] as const;

export const truckOptions = [
  { name: "black", color: "#333" },
  { name: "steel", color: "#6f6e6a" },
  { name: "asphalt", color: "#34495e" },
  { name: "gold", color: "#deb887" },
  { name: "silver", color: "#eeeeee" },
  { name: "red", color: "#e84118" },
  { name: "blue", color: "#068bd3" },
  { name: "lime", color: "#a6e22e" },
  { name: "yellow", color: "#f1c40f" },
  { name: "purple", color: "#8e44ad" },
  { name: "raspberry", color: "#ba3763" },
  { name: "pink", color: "#f1396e" },
] as const;

export type TruckName = (typeof truckOptions)[number]["name"];

export const boltOptions = [
  { name: "black", color: "#333" },
  { name: "steel", color: "#6f6e6a" },
  { name: "asphalt", color: "#34495e" },
  { name: "gold", color: "#deb887" },
  { name: "silver", color: "#eeeeee" },
  { name: "red", color: "#e84118" },
  { name: "blue", color: "#068bd3" },
  { name: "lime", color: "#a6e22e" },
  { name: "yellow", color: "#f1c40f" },
  { name: "purple", color: "#8e44ad" },
  { name: "raspberry", color: "#ba3763" },
  { name: "pink", color: "#f1396e" },
] as const;

const defaultCustomizerControls = {
  deck: parseAsStringEnum([...deckOptions].map((option) => option.name)).withDefault(
    "yellow-black"
  ),
  wheel: parseAsStringEnum([...wheelOptions].map((option) => option.name)).withDefault(
    "yellow"
  ),
  truck: parseAsStringEnum([...truckOptions].map((option) => option.name)).withDefault(
    "black"
  ),
  bolt: parseAsStringEnum([...boltOptions].map((option) => option.name)).withDefault(
    "black"
  ),
};

// Context Definition
type CustomizerControlsContextValue = {
  config: ReturnType<typeof useQueryStates<typeof defaultCustomizerControls>>[0];
  setConfig: ReturnType<typeof useQueryStates<typeof defaultCustomizerControls>>[1];
};

const CustomizerControlsContext = createContext<CustomizerControlsContextValue | null>(
  null
);

export function CustomizerControlsProvider({ children }: { children: React.ReactNode }) {
  const [config, setConfig] = useQueryStates(defaultCustomizerControls);

  return (
    <CustomizerControlsContext.Provider
      value={{
        config,
        setConfig,
      }}
    >
      {children}
    </CustomizerControlsContext.Provider>
  );
}

export function useCustomizerControls() {
  const context = useContext(CustomizerControlsContext);

  if (!context) {
    throw new Error(
      "useCustomizerControls must be used within a CustomizerControlsProvider"
    );
  }

  return context;
}
