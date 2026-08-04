import { NuqsAdapter } from "nuqs/adapters/next/app";

/**
 * @description URL query string management with nuqs
 * @see https://github.com/47ng/nuqs
 */
export function NuqsProvider({ children }: { children: React.ReactNode }) {
  return <NuqsAdapter>{children}</NuqsAdapter>;
}
