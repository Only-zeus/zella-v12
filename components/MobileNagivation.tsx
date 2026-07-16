"use client";
 
import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";
 
type NavigationItem = {
  label: string;
  href: string;
  icon: ReactNode;
};
 
function HomeIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="m4 11 8-7 8 7v8a1 1 0 0 1-1 1h-4v-6H9v6H5a1 1 0 0 1-1-1v-8Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
    </svg>
  );
}
 
function MarketIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M4 19V9M10 19V4M16 19v-7M22 19V7"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
    </svg>
  );
}
 
function CopilotIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M12 4a8 8 0 1 0 8 8"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
      <path
        d="M12 8v4l3 2M17 4h3v3"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
 
function ScannerIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M4 8V5a1 1 0 0 1 1-1h3M16 4h3a1 1 0 0 1 1 1v3M20 16v3a1 1 0 0 1-1 1h-3M8 20H5a1 1 0 0 1-1-1v-3"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
      <circle
        cx="12"
        cy="12"
        r="3"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
      />
    </svg>
  );
}
 
function PortfolioIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect
        x="4"
        y="6"
        width="16"
        height="14"
        rx="2.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
      />
      <path
        d="M8 6V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1M4 12h16"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
      />
    </svg>
  );
}
 
const navigation: NavigationItem[] = [
  { label: "Home", href: "/dashboard", icon: <HomeIcon /> },
  { label: "Market", href: "/market", icon: <MarketIcon /> },
  { label: "Copilot", href: "/copilot", icon: <CopilotIcon /> },
  { label: "Scanner", href: "/scanner", icon: <ScannerIcon /> },
  { label: "Assets", href: "/portfolio", icon: <PortfolioIcon /> },
];
 
export default function MobileNavigation() {
  const pathname = usePathname();
 
  return (
    <nav className="mobile-bottom-nav" aria-label="Application navigation">
      <div className="mobile-bottom-nav-inner">
        {navigation.map((item) => {
          const active =
            pathname === item.href ||
            (item.href !== "/dashboard" && pathname.startsWith(item.href));
 
          return (
            <Link
              href={item.href}
              key={item.href}
              className={`mobile-bottom-nav-item ${
                active ? "mobile-bottom-nav-item-active" : ""
              }`}
              aria-current={active ? "page" : undefined}
            >
              <span className="mobile-bottom-nav-icon">{item.icon}</span>
              <span>{item.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}