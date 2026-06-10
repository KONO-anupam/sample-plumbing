"use client";

import { useState } from "react";

interface FormState {
  name: string;
  email: string;
  phone: string;
  serviceType: string;
  message: string;
}

const initialState: FormState = {
  name: "",
  email: "",
  phone: "",
  serviceType: "",
  message: "",
};

const serviceOptions = [
  "Emergency Repair",
  "Pipe Installation & Repiping",
  "Drain Cleaning",
  "Water Heater Services",
  "Fixture Installation & Repair",
  "Whole-House Repiping",
  "General Inquiry",
  "Other",
];

export default function ContactForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="border border-[var(--color-border-warm)] p-12 flex flex-col gap-6">
        <div className="w-8 h-px bg-[var(--color-gold)]" />
        <h3
          className="text-4xl text-[var(--color-text)]"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Request Received
        </h3>
        <p
          className="text-[var(--color-text-muted)] leading-relaxed"
          style={{ fontFamily: "var(--font-body)" }}
        >
          Thanks, {form.name.split(" ")[0]}. We'll be in touch within the hour
          during business hours. For urgent issues, call{" "}
          <a
            href="tel:1234567890"
            className="text-[var(--color-gold)] hover:text-[var(--color-text)] transition-colors duration-200"
          >
            123-456-7890
          </a>
          .
        </p>
        <button
          onClick={() => {
            setForm(initialState);
            setSubmitted(false);
          }}
          className="self-start text-xs text-[var(--color-text-muted)] tracking-widest uppercase hover:text-[var(--color-text)] transition-colors duration-200 border-b border-[var(--color-border)] pb-1"
          style={{ fontFamily: "var(--font-body)" }}
        >
          Submit another request
        </button>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-8">
      {/* Name + Email */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="flex flex-col gap-2">
          <label
            htmlFor="name"
            className="text-xs text-[var(--color-text-muted)] tracking-[0.15em] uppercase"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Full Name <span className="text-[var(--color-gold)]">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            value={form.name}
            onChange={handleChange}
            placeholder="Harold Starkwater"
            className="bg-[var(--color-surface)] border border-[var(--color-border)] text-[var(--color-text)] px-4 py-3 text-sm focus:outline-none focus:border-[var(--color-gold)] transition-colors duration-200 placeholder:text-[var(--color-text-muted)]"
            style={{ fontFamily: "var(--font-body)" }}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label
            htmlFor="email"
            className="text-xs text-[var(--color-text-muted)] tracking-[0.15em] uppercase"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Email Address <span className="text-[var(--color-gold)]">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={form.email}
            onChange={handleChange}
            placeholder="you@email.com"
            className="bg-[var(--color-surface)] border border-[var(--color-border)] text-[var(--color-text)] px-4 py-3 text-sm focus:outline-none focus:border-[var(--color-gold)] transition-colors duration-200 placeholder:text-[var(--color-text-muted)]"
            style={{ fontFamily: "var(--font-body)" }}
          />
        </div>
      </div>

      {/* Phone + Service */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="flex flex-col gap-2">
          <label
            htmlFor="phone"
            className="text-xs text-[var(--color-text-muted)] tracking-[0.15em] uppercase"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Phone Number
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            value={form.phone}
            onChange={handleChange}
            placeholder="(415) 000-0000"
            className="bg-[var(--color-surface)] border border-[var(--color-border)] text-[var(--color-text)] px-4 py-3 text-sm focus:outline-none focus:border-[var(--color-gold)] transition-colors duration-200 placeholder:text-[var(--color-text-muted)]"
            style={{ fontFamily: "var(--font-body)" }}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label
            htmlFor="serviceType"
            className="text-xs text-[var(--color-text-muted)] tracking-[0.15em] uppercase"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Service Type <span className="text-[var(--color-gold)]">*</span>
          </label>
          <select
            id="serviceType"
            name="serviceType"
            required
            value={form.serviceType}
            onChange={handleChange}
            className="bg-[var(--color-surface)] border border-[var(--color-border)] text-[var(--color-text)] px-4 py-3 text-sm focus:outline-none focus:border-[var(--color-gold)] transition-colors duration-200 appearance-none cursor-pointer"
            style={{ fontFamily: "var(--font-body)" }}
          >
            <option value="" disabled>
              Select a service…
            </option>
            {serviceOptions.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Message */}
      <div className="flex flex-col gap-2">
        <label
          htmlFor="message"
          className="text-xs text-[var(--color-text-muted)] tracking-[0.15em] uppercase"
          style={{ fontFamily: "var(--font-body)" }}
        >
          Message <span className="text-[var(--color-gold)]">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={6}
          value={form.message}
          onChange={handleChange}
          placeholder="Describe the issue or service you need. Include your address if applicable."
          className="bg-[var(--color-surface)] border border-[var(--color-border)] text-[var(--color-text)] px-4 py-3 text-sm focus:outline-none focus:border-[var(--color-gold)] transition-colors duration-200 resize-none placeholder:text-[var(--color-text-muted)]"
          style={{ fontFamily: "var(--font-body)" }}
        />
      </div>

      {/* Submit */}
      <div className="flex items-center justify-between gap-6 pt-2">
        <p
          className="text-xs text-[var(--color-text-muted)]"
          style={{ fontFamily: "var(--font-body)" }}
        >
          <span className="text-[var(--color-gold)]">*</span> Required fields
        </p>
        <button
          type="button"
          onClick={handleSubmit}
          disabled={!form.name || !form.email || !form.serviceType || !form.message}
          className="bg-[var(--color-gold)] text-[var(--color-bg)] px-10 py-4 text-sm tracking-[0.15em] uppercase hover:bg-[var(--color-gold-dim)] transition-colors duration-200 disabled:opacity-40 disabled:cursor-not-allowed"
          style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}
        >
          Send Request
        </button>
      </div>
    </div>
  );
}