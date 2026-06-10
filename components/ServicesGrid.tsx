"use client";

import { services } from "@/lib/data";
import ServiceCard from "@/components/ServiceCard";

export default function ServicesGrid() {
  return (
    <section className="border-b border-[var(--color-border)]">
      <div className="max-w-6xl mx-auto px-6 py-24">
        {/* Section header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <p
              className="text-xs text-[var(--color-gold)] tracking-[0.25em] uppercase mb-4"
              style={{ fontFamily: "var(--font-body)" }}
            >
              What We Do
            </p>
            <h2
              className="text-5xl md:text-6xl text-[var(--color-text)] leading-none"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Services
            </h2>
          </div>
          <p
            className="text-[var(--color-text-muted)] text-sm max-w-xs leading-relaxed"
            style={{ fontFamily: "var(--font-body)" }}
          >
            From a dripping tap to a full building repipe — residential and
            commercial, planned and emergency.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0 -mt-px -ml-px">
          {services.map((service) => (
            <div key={service.id} className="mt-px ml-px">
              <ServiceCard service={service} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}