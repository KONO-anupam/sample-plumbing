"use client";

import Link from "next/link";
import Image from "next/image";
import CTABanner from "@/components/CTABanner";

const milestones = [
  {
    year: "1978",
    title: "Founded by Harold Starkwater",
    body: "Harold opened a one-man shop in the Sunset District with a used truck and a reputation for showing up on time. Word spread quickly.",
  },
  {
    year: "1994",
    title: "Second Generation",
    body: "Harold's son Dean joined the business after his apprenticeship. The team grew to six technicians and expanded into commercial work.",
  },
  {
    year: "2008",
    title: "City-Wide Contracts",
    body: "Starkwater was awarded maintenance contracts with several SF Housing Authority properties — a recognition of consistent, code-compliant work.",
  },
  {
    year: "2019",
    title: "Third Generation",
    body: "Dean's daughter Maya and son Callum came aboard, bringing updated methods while preserving the standards their grandfather set.",
  },
  {
    year: "2024",
    title: "45 Years Strong",
    body: "Same family. Same address. Same commitment. Thousands of San Francisco homes and businesses have run through Starkwater hands.",
  },
];

const values = [
  {
    label: "Honest Assessment",
    body: "We tell you what the problem is, not the most expensive version of it. Customers who trust us come back — and send their neighbours.",
  },
  {
    label: "Work That Lasts",
    body: "Every joint, every weld, every seal is done as if the house belongs to someone we know. Because often it does.",
  },
  {
    label: "Respect for Your Home",
    body: "Clean drop cloths. Shoes off. Job site left cleaner than we found it. This has been policy since 1978, not a marketing bullet point.",
  },
  {
    label: "Standing Behind It",
    body: "If something we touched fails within two years, we come back and fix it without a second invoice. No questions asked.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Page Header */}
      <section className="border-b border-[var(--color-border)]">
        <div className="max-w-6xl mx-auto px-6 pt-24 pb-16">
          <p
            className="text-[var(--color-gold)] text-xs tracking-[0.25em] uppercase mb-4"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Est. 1978 — San Francisco, CA
          </p>
          <h1
            className="text-6xl md:text-8xl text-[var(--color-text)] leading-none tracking-wide mb-8"
            style={{ fontFamily: "var(--font-display)" }}
          >
            A Trade Built on
            <br />
            <span className="text-[var(--color-gold)]">Family Name</span>
          </h1>
          <p
            className="text-lg text-[var(--color-text-muted)] max-w-2xl leading-relaxed"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Three generations of Starkwaters have worked the same streets, fixed
            the same kinds of problems, and earned the same quiet trust. This is
            how we got here.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="border-b border-[var(--color-border)]">
        <div className="max-w-6xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <p
              className="text-xs text-[var(--color-gold)] tracking-[0.2em] uppercase mb-6"
              style={{ fontFamily: "var(--font-body)" }}
            >
              The Story
            </p>
            <h2
              className="text-4xl md:text-5xl text-[var(--color-text)] leading-tight mb-8"
              style={{ fontFamily: "var(--font-display)" }}
            >
              What 45 Years
              <br />
              Actually Looks Like
            </h2>
            <div
              className="space-y-5 text-[var(--color-text-muted)] leading-relaxed"
              style={{ fontFamily: "var(--font-body)" }}
            >
              <p>
                Harold Starkwater started this business in the back of a
                secondhand Ford with four hundred dollars and a list of tools
                he&apos;d been accumulating since his first apprenticeship. He
                wasn&apos;t trying to build a dynasty. He was trying to do good
                work and get paid fairly for it.
              </p>
              <p>
                Forty-five years later, his grandchildren are making the same
                calls in the same city. The truck is newer. The tools are
                better. The principle hasn&apos;t changed.
              </p>
              <p>
                San Francisco is a city that tests its tradespeople — old
                buildings, unusual plumbing layouts, residents who&apos;ve been
                burned before and have no patience for contractors who cut
                corners. Starkwater has survived and grown in that environment
                because we&apos;ve never treated a job as a transaction.
              </p>
              <p>When your name is on the work, you protect it differently.</p>
            </div>
          </div>
          <div className="relative">
            <div className="border border-[var(--color-border-warm)] p-1">
              <Image
                src="https://picsum.photos/seed/plumbing-shop/600/700"
                alt="The Starkwater workshop"
                width={600}
                height={700}
                className="w-full object-cover grayscale contrast-125"
              />
            </div>
            <div
              className="absolute -bottom-4 -left-4 bg-[var(--color-gold)] text-[var(--color-bg)] px-4 py-2"
              style={{ fontFamily: "var(--font-display)" }}
            >
              <span className="text-3xl">45</span>
              <span className="text-xs tracking-widest ml-2 uppercase">
                Years
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Milestones */}
      <section className="border-b border-[var(--color-border)]">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <p
            className="text-xs text-[var(--color-gold)] tracking-[0.2em] uppercase mb-4"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Timeline
          </p>
          <h2
            className="text-5xl text-[var(--color-text)] mb-16"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Milestones
          </h2>
          <div className="relative">
            <div className="absolute left-[3.5rem] top-0 bottom-0 w-px bg-[var(--color-border-warm)] hidden md:block" />
            <div className="space-y-0">
              {milestones.map((m) => (
                <div
                  key={m.year}
                  className="grid grid-cols-1 md:grid-cols-[7rem_1fr] gap-4 md:gap-12 border-b border-[var(--color-border)] py-10 last:border-b-0 relative"
                >
                  <div className="flex md:flex-col items-start gap-4 md:gap-0">
                    <div
                      className="w-3 h-3 rounded-full bg-[var(--color-gold)] mt-1 hidden md:block md:relative md:z-10 md:-left-[0.125rem]"
                      style={{ marginLeft: "3.375rem" }}
                    />
                    <span
                      className="text-[var(--color-gold)] text-sm tracking-widest"
                      style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}
                    >
                      {m.year}
                    </span>
                  </div>
                  <div>
                    <h3
                      className="text-xl text-[var(--color-text)] mb-3"
                      style={{
                        fontFamily: "var(--font-display)",
                        letterSpacing: "0.05em",
                      }}
                    >
                      {m.title}
                    </h3>
                    <p
                      className="text-[var(--color-text-muted)] leading-relaxed"
                      style={{ fontFamily: "var(--font-body)" }}
                    >
                      {m.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="border-b border-[var(--color-border)]">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <p
            className="text-xs text-[var(--color-gold)] tracking-[0.2em] uppercase mb-4"
            style={{ fontFamily: "var(--font-body)" }}
          >
            How We Work
          </p>
          <h2
            className="text-5xl text-[var(--color-text)] mb-16"
            style={{ fontFamily: "var(--font-display)" }}
          >
            What We Stand By
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-0">
            {values.map((v) => (
              <div
                key={v.label}
                className="border border-[var(--color-border)] p-8 -mt-px -ml-px"
              >
                <div className="w-6 h-px bg-[var(--color-gold)] mb-6" />
                <h3
                  className="text-xl text-[var(--color-text)] mb-4"
                  style={{
                    fontFamily: "var(--font-display)",
                    letterSpacing: "0.05em",
                  }}
                >
                  {v.label}
                </h3>
                <p
                  className="text-[var(--color-text-muted)] leading-relaxed text-sm"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  {v.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <h2
              className="text-4xl md:text-5xl text-[var(--color-text)] mb-3"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Ready to talk?
            </h2>
            <p
              className="text-[var(--color-text-muted)]"
              style={{ fontFamily: "var(--font-body)" }}
            >
              We&apos;re available for quotes, questions, and emergency calls.
            </p>
          </div>
          <Link
            href="/contact"
            className="border border-[var(--color-gold)] text-[var(--color-gold)] px-8 py-4 text-sm tracking-[0.15em] uppercase hover:bg-[var(--color-gold)] hover:text-[var(--color-bg)] transition-colors duration-200 whitespace-nowrap"
            style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}
          >
            Get in Touch
          </Link>
        </div>
      </section>

      <CTABanner />
    </>
  );
}