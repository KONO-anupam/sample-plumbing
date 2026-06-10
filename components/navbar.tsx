"use client";

import Link from "next/link";
import { useState } from "react";
import { BUSINESS } from "@/lib/constants";

const navLinks = [
  { href: "/services", label: "Services" },
  { href: "/service-areas", label: "Service Areas" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="bg-[#1a3a5c] text-white">
      {/* Top bar */}
      <div className="bg-[#0f2540] text-sm">
        <div className="max-w-6xl mx-auto px-4 py-2 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
          <p className="text-blue-200 text-xs sm:text-sm">
            Serving Austin &amp; Surrounding Areas Since 2009 · Licensed &amp;
            Insured
          </p>
          <a
            href={BUSINESS.phoneHref}
            className="font-semibold text-white hover:text-yellow-300 transition-colors text-sm"
            aria-label="Call us"
          >
            📞 {BUSINESS.phone}
          </a>
        </div>
      </div>

      {/* Main nav */}
      <nav className="max-w-6xl mx-auto px-4 py-4" aria-label="Main navigation">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-3 group"
            aria-label="Reliable Plumbing Co. — Home"
          >
            <div
              className="w-10 h-10 rounded flex items-center justify-center text-xl font-bold shrink-0"
              style={{ backgroundColor: "#c0392b" }}
              aria-hidden="true"
            >
              R
            </div>
            <div>
              <div className="font-bold text-lg leading-tight tracking-tight text-white">
                Reliable Plumbing Co.
              </div>
              <div className="text-xs text-blue-300 leading-tight">
                Austin, TX — Est. 2009
              </div>
            </div>
          </Link>

          {/* Desktop nav links */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-blue-100 hover:text-white text-sm font-medium transition-colors border-b border-transparent hover:border-blue-300 pb-0.5"
              >
                {link.label}
              </Link>
            ))}
            <a
              href={BUSINESS.phoneHref}
              className="ml-4 px-4 py-2 text-sm font-semibold rounded text-white transition-colors"
              style={{ backgroundColor: "#c0392b" }}
            >
              Call for Service
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2 rounded"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            <span
              className={`block w-6 h-0.5 bg-white transition-transform ${mobileOpen ? "rotate-45 translate-y-2" : ""}`}
            />
            <span
              className={`block w-6 h-0.5 bg-white transition-opacity ${mobileOpen ? "opacity-0" : ""}`}
            />
            <span
              className={`block w-6 h-0.5 bg-white transition-transform ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}`}
            />
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="md:hidden mt-4 border-t border-blue-800 pt-4 pb-2 flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="py-3 px-2 text-blue-100 hover:text-white hover:bg-blue-800 rounded text-sm font-medium transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <a
              href={BUSINESS.phoneHref}
              className="mt-2 py-3 px-4 text-center text-sm font-semibold rounded text-white transition-colors"
              style={{ backgroundColor: "#c0392b" }}
              onClick={() => setMobileOpen(false)}
            >
              📞 {BUSINESS.phone} — Call Now
            </a>
          </div>
        )}
      </nav>
    </header>
  );
}