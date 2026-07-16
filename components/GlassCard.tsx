import type {
  ComponentPropsWithoutRef,
  ElementType,
  ReactNode,
} from "react";
 
type GlassCardProps<T extends ElementType = "div"> = {
  as?: T;
  children: ReactNode;
  strong?: boolean;
  interactive?: boolean;
  className?: string;
} & Omit<ComponentPropsWithoutRef<T>, "as" | "children" | "className">;
 
export default function GlassCard<T extends ElementType = "div">({
  as,
  children,
  strong = false,
  interactive = false,
  className = "",
  ...props
}: GlassCardProps<T>) {
  const Component = as ?? "div";
 
  const classes = [
    strong ? "glass-panel-strong" : "glass-panel",
    interactive ? "interactive-card" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");
 
  return (
    <Component className={classes} {...props}>
      {children}
    </Component>
  );
}