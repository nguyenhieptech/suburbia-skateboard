import { cn } from "@/lib/utils";

type ContainerProps<T extends React.ElementType> = {
  as?: T;
} & React.ComponentProps<T>;

export function Container<T extends React.ElementType>({
  as: Comp = "section",
  className,
  children,
  ...props
}: ContainerProps<T>) {
  return (
    <Comp
      className={cn(
        "px-6 py-10 lg:py-16 [.header+&]:pt-44 [.header+&]:md:pt-32",
        className
      )}
      {...props}
    >
      <div className="mx-auto w-full max-w-6xl">{children}</div>
    </Comp>
  );
}
