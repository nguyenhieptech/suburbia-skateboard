import { NuqsProvider } from "./nuqs-provider";

export function AppProvider({ children }: { children: React.ReactNode }) {
  return <NuqsProvider>{children}</NuqsProvider>;
}
