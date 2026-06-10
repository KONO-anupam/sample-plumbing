"use client";

import Link from "next/link";
import { navLinks } from "@/lib/data";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[var(--color-border)] bg-[var(--color-surface)]">
      <div className="max-w-6xl mx-auto px-6 py-16">
        {/* Top row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pb-12 border-b border-[var(--color-border)]">
          {/* Brand */}
          <div>
            <Link href="/" className="block mb-4">
              <span
                className="text-3xl text-[var(--color-text)] tracking-widest hover:text-[var(--color-gold)] transition-colors duration-200"
                style={{ fontFamily: "var(--font-display)" }}
              >
                STARKWATER
              </span>
            </Link>
            <p
              className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-6"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Family-owned plumbing in San Francisco since 1978. Three
              generations. One standard of work.
            </p>
            <div
              className="text-xs text-[var(--color-gold)] tracking-[0.2em] uppercase"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Est. 1978 — Licensed · Insured · Bonded
            </div>
          </div>

          {/* Navigation */}
          <div>
            <p
              className="text-xs text-[var(--color-text-muted)] tracking-[0.2em] uppercase mb-6"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Navigation
            </p>
            <nav className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-[var(--color-text-muted)] text-sm hover:text-[var(--color-text)] transition-colors duration-200"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/contact"
                className="text-[var(--color-gold)] text-sm hover:text-[var(--color-text)] transition-colors duration-200"
                style={{ fontFamily: "var(--font-body)" }}
              >
                Request Service →
              </Link>
            </nav>
          </div>

          {/* Contact + Hours */}
          <div>
            <p
              className="text-xs text-[var(--color-text-muted)] tracking-[0.2em] uppercase mb-6"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Contact & Hours
            </p>
            <address
              className="not-italic flex flex-col gap-3 text-sm text-[var(--color-text-muted)]"
              style={{ fontFamily: "var(--font-body)" }}
            >
              <span>500 Terry Francine St<br />San Francisco, CA 94158</span>
              <a
                href="tel:1234567890"
                className="hover:text-[var(--color-gold)] transition-colors duration-200"
              >
                123-456-7890
              </a>
              <a
                href="mailto:info@mysite.com"
                className="hover:text-[var(--color-gold)] transition-colors duration-200"
              >
                info@mysite.com
              </a>
            </address>
            <div
              className="mt-6 pt-6 border-t border-[var(--color-border)] text-sm"
              style={{ fontFamily: "var(--font-body)" }}
            >
              <p className="text-[var(--color-text-muted)] mb-1">Mon–Fri: 8am–6pm</p>
              <p className="text-[var(--color-gold)]">24/7 Emergency Service</p>
            </div>
          </div>
        </div>

        {/* Bottom row */}
        <div className="pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p
            className="text-xs text-[var(--color-text-muted)]"
            style={{ fontFamily: "var(--font-body)" }}
          >
            © {year} Starkwater Plumbing. All rights reserved.
          </p>
          <p
            className="text-xs text-[var(--color-text-muted)]"
            style={{ fontFamily: "var(--font-body)" }}
          >
            CA Contractor License #XXXXXX
          </p>
        </div>
      </div>
    </footer>
  );
}