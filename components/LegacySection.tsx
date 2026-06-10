"use client";

import Link from "next/link";
import Image from "next/image";

export default function LegacySection() {
  return (
    <section className="border-b border-[var(--color-border)]">
      <div className="max-w-6xl mx-auto px-6 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* Image column */}
          <div className="relative order-2 md:order-1">
            <div className="border border-[var(--color-border-warm)] p-1">
              <Image
                src="https://picsum.photos/seed/family-plumbers/700/500"
                alt="Three generations of the Starkwater family"
                width={700}
                height={500}
                className="w-full object-cover grayscale"
              />
            </div>
            {/* Floating label */}
            <div
              className="absolute -bottom-3 -right-3 border border-[var(--color-gold)] bg-[var(--color-bg)] px-5 py-3"
            >
              <p
                className="text-xs text-[var(--color-gold)] tracking-[0.2em] uppercase"
                style={{ fontFamily: "var(--font-body)" }}
              >
                Harold · Dean · Maya & Callum
              </p>
            </div>
          </div>

          {/* Text column */}
          <div className="order-1 md:order-2">
            <p
              className="text-xs text-[var(--color-gold)] tracking-[0.25em] uppercase mb-6"
              style={{ fontFamily: "var(--font-body)" }}
            >
              The Starkwater Legacy
            </p>
            <h2
              className="text-5xl md:text-6xl text-[var(--color-text)] leading-none mb-8"
              style={{ fontFamily: "var(--font-display)" }}
            >
              40 Years of
              <br />
              Family Tradition
            </h2>
            <p
              className="text-[var(--color-text-muted)] leading-relaxed mb-6"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Harold Starkwater founded this business on a straightforward
              belief: do the work properly and your reputation takes care of
              itself. His son Dean grew that reputation across every
              neighbourhood in the city. Today, Harold's grandchildren carry
              the same toolkit — upgraded tools, same standards.
            </p>
            <p
              className="text-[var(--color-text-muted)] leading-relaxed mb-10"
              style={{ fontFamily: "var(--font-body)" }}
            >
              A family name is the most accountable thing a tradesperson can
              put on a van. We've built our business on never forgetting that.
            </p>
            <Link
              href="/about"
              className="inline-flex items-center gap-3 border border-[var(--color-border-warm)] text-[var(--color-text-muted)] px-6 py-3 text-xs tracking-[0.15em] uppercase hover:border-[var(--color-gold)] hover:text-[var(--color-gold)] transition-colors duration-200"
              style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}
            >
              Read More
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}