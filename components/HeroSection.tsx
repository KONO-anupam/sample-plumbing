"use client";

import Link from "next/link";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col justify-end overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://picsum.photos/seed/pipe-worker/1600/900"
          alt="Plumber at work"
          fill
          priority
          className="object-cover grayscale"
          sizes="100vw"
        />
        {/* Dark overlay — editorial flat black, not gradient */}
        <div className="absolute inset-0 bg-[var(--color-bg)] opacity-75" />
        {/* Thin amber horizontal rule at vertical center — the signature element */}
        <div className="absolute top-1/2 left-0 right-0 h-px bg-[var(--color-gold)] opacity-20" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 pb-20 pt-40 w-full">
        {/* Eyebrow */}
        <div className="flex items-center gap-4 mb-8">
          <div className="w-8 h-px bg-[var(--color-gold)]" />
          <p
            className="text-xs text-[var(--color-gold)] tracking-[0.3em] uppercase"
            style={{ fontFamily: "var(--font-body)" }}
          >
            San Francisco · Since 1978
          </p>
        </div>

        {/* Headline */}
        <h1
          className="text-6xl sm:text-7xl md:text-8xl lg:text-[7rem] text-[var(--color-text)] leading-none tracking-wide mb-8 max-w-4xl"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Skill That Flows
          <br />
          Through{" "}
          <span className="text-[var(--color-gold)]">Generations</span>
        </h1>

        {/* Subheading */}
        <p
          className="text-lg text-[var(--color-text-muted)] max-w-xl leading-relaxed mb-12"
          style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
        >
          Three generations of Starkwaters have earned San Francisco's trust
          the same way — by doing the work right, every time, without
          exception.
        </p>

        {/* CTA row */}
        <div className="flex flex-wrap items-center gap-6">
          <Link
            href="/contact"
            className="bg-[var(--color-gold)] text-[var(--color-bg)] px-8 py-4 text-sm tracking-[0.15em] uppercase hover:bg-[var(--color-gold-dim)] transition-colors duration-200"
            style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}
          >
            Request Service
          </Link>
          <a
            href="tel:1234567890"
            className="flex items-center gap-3 text-[var(--color-text-muted)] hover:text-[var(--color-text)] transition-colors duration-200"
            style={{ fontFamily: "var(--font-body)" }}
          >
            <span className="text-xs tracking-widest uppercase">
              Emergency
            </span>
            <span className="text-lg text-[var(--color-text)]">
              123-456-7890
            </span>
          </a>
        </div>
      </div>

      {/* Bottom stat bar */}
      <div className="relative z-10 border-t border-[var(--color-border)] bg-[var(--color-bg)] bg-opacity-80">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-3 divide-x divide-[var(--color-border)]">
            {[
              { value: "45+", label: "Years in Business" },
              { value: "12K+", label: "Jobs Completed" },
              { value: "24/7", label: "Emergency Response" },
            ].map((stat) => (
              <div key={stat.label} className="py-6 px-4 text-center">
                <div
                  className="text-3xl text-[var(--color-gold)] mb-1"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {stat.value}
                </div>
                <div
                  className="text-xs text-[var(--color-text-muted)] tracking-[0.1em] uppercase"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}