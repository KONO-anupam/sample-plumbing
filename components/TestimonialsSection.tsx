"use client";

import { testimonials } from "@/lib/data";
import TestimonialCard from "@/components/TestimonialCard";

export default function TestimonialsSection() {
  return (
    <section className="border-b border-[var(--color-border)] bg-[var(--color-surface)]">
      <div className="max-w-6xl mx-auto px-6 py-24">
        {/* Header */}
        <div className="mb-16">
          <p
            className="text-xs text-[var(--color-gold)] tracking-[0.25em] uppercase mb-4"
            style={{ fontFamily: "var(--font-body)" }}
          >
            What Clients Say
          </p>
          <h2
            className="text-5xl md:text-6xl text-[var(--color-text)] leading-none"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Trusted by San Francisco
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 -mt-px -ml-px">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="mt-px ml-px">
              <TestimonialCard testimonial={testimonial} />
            </div>
          ))}
        </div>

        {/* Rating note */}
        <div className="mt-12 flex items-center gap-4">
          <div className="h-px flex-1 bg-[var(--color-border)]" />
          <p
            className="text-xs text-[var(--color-text-muted)] tracking-widest uppercase text-center"
            style={{ fontFamily: "var(--font-body)" }}
          >
            4.9 stars across 340+ verified reviews
          </p>
          <div className="h-px flex-1 bg-[var(--color-border)]" />
        </div>
      </div>
    </section>
  );
}