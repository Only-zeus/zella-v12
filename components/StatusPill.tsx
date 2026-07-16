import type { ReactNode } from "react";
 
type StatusTone = "default" | "positive" | "negative" | "warning";
 
type StatusPillProps = {
  children: ReactNode;
  tone?: StatusTone;
  showDot?: boolean;
  className?: string;
};
 
const toneClass: Record<StatusTone, string> = {
  default: "",
  positive: "status-pill-positive",
  negative: "status-pill-negative",
  warning: "status-pill-warning",
};
 
export default function StatusPill({
  children,
  tone = "default",
  showDot = false,
  className = "",
}: StatusPillProps) {
  return (
    <span
      className={`status-pill ${toneClass[tone]} ${className}`.trim()}
    >
      {showDot ? <span className="live-dot" aria-hidden="true" /> : null}
      {children}
    </span>
  );
}