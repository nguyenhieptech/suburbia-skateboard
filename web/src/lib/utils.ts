import { ClassValue, clsx } from "clsx";
import { twMerge } from "fluid-tailwindcss/tailwind-merge";

// https://github.com/nguyenviet02/fluid-tailwindcss#tailwind-merge-integration
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
