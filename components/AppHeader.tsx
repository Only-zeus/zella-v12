"use client";
 
import Link from "next/link";
import { useEffect, useState } from "react";
import ZellaLogo from "./ZellaLogo";
 
type NavigationItem = {
  label: string;
  href: string;
};
 
type AppHeaderProps = {
  navigation?: NavigationItem[];
  showAuthActions?: boolean;
};
 
const defaultNavigation: NavigationItem[] = [
  { label: "Platform", href: "#platform" },
  { label: "Research", href: "#research" },
  { label: "Adaptive AI", href: "#adaptive" },
  { label: "Security", href: "#security" },
];
 
function MenuIcon({ open }: { open: boolean }) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true">
      {open ? (
        <path
          d="M6 6l12 12M18 6 6 18"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
      ) : (
        <path
          d="M5 7h14M5 12h14M5 17h14"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
      )}
    </svg>
  );
}
 
function ArrowUpRightIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M7 17 17 7M8 7h9v9"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
 
export default function AppHeader({
  navigation = defaultNavigation,
  showAuthActions = true,
}: AppHeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);
 
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
 
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);
 
  const closeMenu = () => setMenuOpen(false);
 
  return (
    <header className="landing-header safe-top">
      <div className="page-shell landing-header-inner">
        <Link href="/" className="landing-brand" aria-label="Zella home">
          <ZellaLogo />
 
          <span className="landing-brand-copy">
            <strong>ZELLA</strong>
            <small>INTELLIGENCE SYSTEM</small>
          </span>
        </Link>
 
        <nav className="landing-nav" aria-label="Primary navigation">
          {navigation.map((item) => (
            <a href={item.href} key={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
 
        <div className="landing-header-actions">
          {showAuthActions ? (
            <>
              <Link href="/login" className="landing-sign-in">
                Sign in
              </Link>
 
              <Link
                href="/dashboard"
                className="zella-button zella-button-primary landing-launch"
              >
                Launch Zella
                <ArrowUpRightIcon />
              </Link>
            </>
          ) : null}
 
          <button
            className="landing-menu-button"
            type="button"
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={menuOpen}
            aria-controls="zella-mobile-menu"
            onClick={() => setMenuOpen((current) => !current)}
          >
            <MenuIcon open={menuOpen} />
          </button>
        </div>
      </div>
 
      <div
        id="zella-mobile-menu"
        className={`mobile-menu ${menuOpen ? "mobile-menu-open" : ""}`}
        aria-hidden={!menuOpen}
      >
        <button
          type="button"
          className="mobile-menu-backdrop"
          aria-label="Close navigation menu"
          onClick={closeMenu}
        />
 
        <nav className="mobile-menu-panel" aria-label="Mobile navigation">
          <div className="mobile-menu-head">
            <div className="landing-brand">
              <ZellaLogo size={34} />
              <span className="landing-brand-copy">
                <strong>ZELLA</strong>
                <small>INTELLIGENCE SYSTEM</small>
              </span>
            </div>
 
            <button
              type="button"
              className="landing-menu-button"
              aria-label="Close navigation menu"
              onClick={closeMenu}
            >
              <MenuIcon open />
            </button>
          </div>
 
          <div className="mobile-menu-links">
            {navigation.map((item) => (
              <a href={item.href} key={item.href} onClick={closeMenu}>
                <span>{item.label}</span>
                <span aria-hidden="true">↗</span>
              </a>
            ))}
          </div>
 
          {showAuthActions ? (
            <div className="mobile-menu-actions">
              <Link
                href="/login"
                className="zella-button zella-button-secondary"
                onClick={closeMenu}
              >
                Sign in
              </Link>
 
              <Link
                href="/dashboard"
                className="zella-button zella-button-primary"
                onClick={closeMenu}
              >
                Launch Zella
                <ArrowUpRightIcon />
              </Link>
            </div>
          ) : null}
        </nav>
      </div>
    </header>
  );
}