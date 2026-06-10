"use client";

import type { Testimonial } from "@/types";

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export default function TestimonialCard({ testimonial }: TestimonialCardProps) {
  const initial = testimonial.name.charAt(0);

  return (
    <blockquote className="border border-[var(--color-border)] p-8 flex flex-col gap-8">
      <div
        className="text-5xl text-[var(--color-gold)] leading-none select-none"
        aria-hidden="true"
        style={{ fontFamily: "Georgia, serif" }}
      >
        &ldquo;
      </div>

      <p
        className="text-[var(--color-text)] text-base leading-relaxed flex-1"
        style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
      >
        {testimonial.quote}
      </p>

      <footer className="flex items-center gap-4 border-t border-[var(--color-border)] pt-6">
        <div
          className="w-8 h-8 flex items-center justify-center border border-[var(--color-border-warm)] text-xs text-[var(--color-gold)]"
          style={{ fontFamily: "var(--font-display)" }}
          aria-hidden="true"
        >
          {initial}
        </div>
        <div>
          <cite
            className="not-italic text-sm text-[var(--color-text)] block"
            style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}
          >
            {testimonial.name}
          </cite>
          <span
            className="text-xs text-[var(--color-text-muted)]"
            style={{ fontFamily: "var(--font-body)" }}
          >
            {testimonial.location}
          </span>
        </div>
      </footer>
    </blockquote>
  );
}