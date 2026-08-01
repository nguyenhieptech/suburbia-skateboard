import { cn } from "@/lib/utils";

interface TypographyHeadingProps {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  size?: "xl" | "lg" | "md" | "sm" | "xs";
  children: React.ReactNode;
  className?: string;
}

export function TypographyHeading({
  as: Comp = "h1",
  className,
  children,
  size = "lg",
}: TypographyHeadingProps) {
  return (
    <Comp
      className={cn(
        "font-sans uppercase",
        size === "xl" && "fl-text-4xl/8xl",
        size === "lg" && "fl-text-4xl/7xl",
        size === "md" && "fl-text-3xl/5xl",
        size === "sm" && "fl-text-2xl/4xl",
        size === "xs" && "fl-text-lg/xl",
        className
      )}
    >
      {children}
    </Comp>
  );
}
