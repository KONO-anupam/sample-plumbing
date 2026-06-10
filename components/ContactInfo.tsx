"use client";

export default function ContactInfo() {
  return (
    <aside className="flex flex-col gap-0">
      {/* Address */}
      <div className="border border-[var(--color-border)] p-8 mb-px">
        <p
          className="text-xs text-[var(--color-gold)] tracking-[0.2em] uppercase mb-4"
          style={{ fontFamily: "var(--font-body)" }}
        >
          Location
        </p>
        <address
          className="not-italic text-[var(--color-text-muted)] text-sm leading-relaxed"
          style={{ fontFamily: "var(--font-body)" }}
        >
          500 Terry Francine St
          <br />
          San Francisco, CA 94158
        </address>
      </div>

      {/* Phone */}
      <div className="border border-[var(--color-border)] p-8 mb-px">
        <p
          className="text-xs text-[var(--color-gold)] tracking-[0.2em] uppercase mb-4"
          style={{ fontFamily: "var(--font-body)" }}
        >
          Phone
        </p>
        <a
          href="tel:1234567890"
          className="text-[var(--color-text)] text-lg hover:text-[var(--color-gold)] transition-colors duration-200 block"
          style={{ fontFamily: "var(--font-display)", letterSpacing: "0.05em" }}
        >
          123-456-7890
        </a>
        <p
          className="text-xs text-[var(--color-text-muted)] mt-2"
          style={{ fontFamily: "var(--font-body)" }}
        >
          Emergency line — always answered
        </p>
      </div>

      {/* Email */}
      <div className="border border-[var(--color-border)] p-8 mb-px">
        <p
          className="text-xs text-[var(--color-gold)] tracking-[0.2em] uppercase mb-4"
          style={{ fontFamily: "var(--font-body)" }}
        >
          Email
        </p>
        <a
          href="mailto:info@mysite.com"
          className="text-[var(--color-text-muted)] text-sm hover:text-[var(--color-gold)] transition-colors duration-200"
          style={{ fontFamily: "var(--font-body)" }}
        >
          info@mysite.com
        </a>
      </div>

      {/* Hours */}
      <div className="border border-[var(--color-border)] p-8">
        <p
          className="text-xs text-[var(--color-gold)] tracking-[0.2em] uppercase mb-6"
          style={{ fontFamily: "var(--font-body)" }}
        >
          Hours
        </p>
        <div className="flex flex-col gap-3">
          <div className="flex justify-between items-center">
            <span
              className="text-xs text-[var(--color-text-muted)] tracking-wider uppercase"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Mon–Fri
            </span>
            <span
              className="text-sm text-[var(--color-text)]"
              style={{ fontFamily: "var(--font-body)" }}
            >
              8am – 6pm
            </span>
          </div>
          <div className="flex justify-between items-center">
            <span
              className="text-xs text-[var(--color-text-muted)] tracking-wider uppercase"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Saturday
            </span>
            <span
              className="text-sm text-[var(--color-text)]"
              style={{ fontFamily: "var(--font-body)" }}
            >
              9am – 3pm
            </span>
          </div>
          <div className="w-full h-px bg-[var(--color-border)] my-1" />
          <div className="flex justify-between items-center">
            <span
              className="text-xs text-[var(--color-text-muted)] tracking-wider uppercase"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Emergency
            </span>
            <span
              className="text-sm text-[var(--color-gold)]"
              style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}
            >
              24 / 7
            </span>
          </div>
        </div>
      </div>

      {/* Emergency callout */}
      <div className="border border-[var(--color-gold)] mt-4 p-6">
        <p
          className="text-xs text-[var(--color-gold)] tracking-[0.2em] uppercase mb-2"
          style={{ fontFamily: "var(--font-body)" }}
        >
          Emergency?
        </p>
        <p
          className="text-xs text-[var(--color-text-muted)] mb-4 leading-relaxed"
          style={{ fontFamily: "var(--font-body)" }}
        >
          Don't fill out a form. Call us directly — we pick up.
        </p>
        <a
          href="tel:1234567890"
          className="block bg-[var(--color-gold)] text-[var(--color-bg)] text-center py-3 text-xs tracking-[0.15em] uppercase hover:bg-[var(--color-gold-dim)] transition-colors duration-200"
          style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}
        >
          Call Now
        </a>
      </div>
    </aside>
  );
}