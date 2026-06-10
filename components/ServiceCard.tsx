"use client";

import Link from "next/link";
import type { Service } from "@/types";

interface ServiceCardProps {
  service: Service;
}

export default function ServiceCard({ service }: ServiceCardProps) {
  return (
    <article className="border border-[var(--color-border)] p-8 flex flex-col gap-6 hover:border-[var(--color-border-warm)] transition-colors duration-200 group">
      {/* Icon row */}
      <div className="flex items-center justify-between">
        <span className="text-2xl" role="img" aria-hidden="true">
          {service.icon}
        </span>
        <div className="w-4 h-px bg-[var(--color-border)] group-hover:bg-[var(--color-gold)] group-hover:w-8 transition-all duration-300" />
      </div>

      {/* Title */}
      <h3
        className="text-2xl text-[var(--color-text)] leading-tight"
        style={{ fontFamily: "var(--font-display)", letterSpacing: "0.05em" }}
      >
        {service.title}
      </h3>

      {/* Description */}
      <p
        className="text-sm text-[var(--color-text-muted)] leading-relaxed flex-1"
        style={{ fontFamily: "var(--font-body)" }}
      >
        {service.description}
      </p>

      {/* CTA */}
      <Link
        href="/contact"
        className="text-xs text-[var(--color-gold)] tracking-[0.15em] uppercase hover:text-[var(--color-text)] transition-colors duration-200 self-start"
        style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}
        aria-label={`Book ${service.title}`}
      >
        Book Now →
      </Link>
    </article>
  );
}