import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import ContactInfo from "@/components/ContactInfo";

export const metadata: Metadata = {
  title: "Contact & Request Service",
  description:
    "Request a service call, get a quote, or reach Starkwater Plumbing for emergency assistance. Available 24/7 for urgent work.",
};

export default function ContactPage() {
  return (
    <>
      {/* Page Header */}
      <section className="border-b border-[var(--color-border)]">
        <div className="max-w-6xl mx-auto px-6 pt-24 pb-16">
          <p
            className="text-[var(--color-gold)] text-xs tracking-[0.25em] uppercase mb-4"
            style={{ fontFamily: "var(--font-body)" }}
          >
            24/7 Emergency Available
          </p>
          <h1
            className="text-6xl md:text-8xl text-[var(--color-text)] leading-none tracking-wide mb-8"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Request
            <br />
            <span className="text-[var(--color-gold)]">Service</span>
          </h1>
          <p
            className="text-lg text-[var(--color-text-muted)] max-w-xl leading-relaxed"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Fill out the form below and we'll get back to you within the hour
            during business hours. For emergencies, call directly.
          </p>
        </div>
      </section>

      {/* Form + Info Layout */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-16">
          <ContactForm />
          <ContactInfo />
        </div>
      </section>
    </>
  );
}