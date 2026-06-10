"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navLinks } from "@/lib/data";

export default function Navbar() {
  // Store which pathname the menu was opened on.
  // When the user navigates, pathname changes and menuOpen becomes false automatically —
  // no effect or ref needed, no lint violations.
  const [menuOpenForPath, setMenuOpenForPath] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  const menuOpen = menuOpenForPath === pathname;

  const toggleMenu = () =>
    setMenuOpenForPath((prev) => (prev === pathname ? null : pathname));

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
          scrolled || menuOpen
            ? "bg-[var(--color-bg)] border-b border-[var(--color-border)]"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="flex flex-col leading-none group"
            aria-label="Starkwater Plumbing — Home"
          >
            <span
              className="text-2xl text-[var(--color-text)] tracking-widest group-hover:text-[var(--color-gold)] transition-colors duration-200"
              style={{ fontFamily: "var(--font-display)" }}
            >
              STARKWATER
            </span>
            <span
              className="text-[0.6rem] text-[var(--color-text-muted)] tracking-[0.3em] uppercase"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Plumbing · Est. 1978
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-xs tracking-[0.15em] uppercase transition-colors duration-200 ${
                  pathname === link.href
                    ? "text-[var(--color-gold)]"
                    : "text-[var(--color-text-muted)] hover:text-[var(--color-text)]"
                }`}
                style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="border border-[var(--color-gold)] text-[var(--color-gold)] px-5 py-2 text-xs tracking-[0.15em] uppercase hover:bg-[var(--color-gold)] hover:text-[var(--color-bg)] transition-colors duration-200"
              style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}
            >
              Emergency: 123-456-7890
            </Link>
          </nav>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2 -mr-2"
            onClick={toggleMenu}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            <span
              className={`block w-6 h-px bg-[var(--color-text)] transition-all duration-200 origin-center ${
                menuOpen ? "rotate-45 translate-y-[7px]" : ""
              }`}
            />
            <span
              className={`block w-6 h-px bg-[var(--color-text)] transition-all duration-200 ${
                menuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block w-6 h-px bg-[var(--color-text)] transition-all duration-200 origin-center ${
                menuOpen ? "-rotate-45 -translate-y-[7px]" : ""
              }`}
            />
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 bg-[var(--color-bg)] flex flex-col">
          <div className="h-16" /> {/* Spacer for navbar height */}
          <nav className="flex-1 flex flex-col justify-center px-8 gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-5xl tracking-wider uppercase py-3 border-b border-[var(--color-border)] transition-colors duration-150 ${
                  pathname === link.href
                    ? "text-[var(--color-gold)]"
                    : "text-[var(--color-text)] hover:text-[var(--color-gold)]"
                }`}
                style={{ fontFamily: "var(--font-display)" }}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="px-8 pb-12">
            <p
              className="text-[var(--color-text-muted)] text-xs tracking-widest uppercase mb-2"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Emergency Line
            </p>
            <a
              href="tel:1234567890"
              className="text-3xl text-[var(--color-gold)]"
              style={{ fontFamily: "var(--font-display)" }}
            >
              123-456-7890
            </a>
          </div>
        </div>
      )}
    </>
  );
}