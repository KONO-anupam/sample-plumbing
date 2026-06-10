"use client";

import Link from "next/link";

export default function CTABanner() {
  return (
    <section className="border-b border-[var(--color-border)]">
      <div className="max-w-6xl mx-auto px-6 py-20">
        {/* Top rule */}
        <div className="w-full h-px bg-[var(--color-border-warm)] mb-16" />

        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-10">
          <div className="max-w-xl">
            <p
              className="text-xs text-[var(--color-gold)] tracking-[0.25em] uppercase mb-4"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Free Estimates · No Obligation
            </p>
            <h2
              className="text-5xl md:text-7xl text-[var(--color-text)] leading-none"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Get a Quote.
              <br />
              <span className="text-[var(--color-gold)]">No Runaround.</span>
            </h2>
          </div>

          <div className="flex flex-col gap-4 min-w-max">
            <Link
              href="/contact"
              className="bg-[var(--color-gold)] text-[var(--color-bg)] px-10 py-5 text-sm tracking-[0.15em] uppercase hover:bg-[var(--color-gold-dim)] transition-colors duration-200 text-center"
              style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}
            >
              Request a Quote
            </Link>
            <a
              href="tel:1234567890"
              className="border border-[var(--color-border)] text-[var(--color-text-muted)] px-10 py-5 text-sm tracking-[0.15em] uppercase hover:border-[var(--color-border-warm)] hover:text-[var(--color-text)] transition-colors duration-200 text-center"
              style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}
            >
              Call 123-456-7890
            </a>
          </div>
        </div>

        {/* Bottom rule */}
        <div className="w-full h-px bg-[var(--color-border-warm)] mt-16" />
      </div>
    </section>
  );
}