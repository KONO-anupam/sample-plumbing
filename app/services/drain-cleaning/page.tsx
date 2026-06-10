import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import CtaBanner from "@/components/cta-banner";
import { BUSINESS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Drain Cleaning in Austin, TX | Reliable Plumbing Co.",
  description:
    "Professional drain cleaning for Austin homes and businesses. Slow drains, full clogs, and recurring backups cleared with hydro-jetting and snake equipment. Call (512) 847-3200.",
};

const drainTypes = [
  {
    title: "Kitchen drains",
    desc: "Grease, food buildup, and soap scum are the leading cause of slow or clogged kitchen drains. We clear the line completely, not just poke a hole through it.",
  },
  {
    title: "Bathroom drains",
    desc: "Hair, soap residue, and mineral deposits build up over time in showers, tubs, and sinks. We remove the clog and inspect the trap for debris.",
  },
  {
    title: "Toilet clogs",
    desc: "Most toilet clogs can be cleared quickly. For recurring clogs, we inspect the trap and drain line to rule out a deeper obstruction.",
  },
  {
    title: "Main sewer line",
    desc: "A backed-up main line affects every drain in the house. We clear it with hydro-jet equipment and camera inspect to confirm the line is clear.",
  },
  {
    title: "Floor drains",
    desc: "Common in laundry rooms, garages, and basements. These often collect debris over years of use. We clear and clean the trap.",
  },
  {
    title: "Outdoor and yard drains",
    desc: "Landscape drains and downspout drains can become blocked with sediment, leaves, and root intrusion. We clear and inspect the line.",
  },
];

const processSteps = [
  {
    title: "Assess the drain",
    body: "We run water, listen to the flow, and ask about the history. A slow drain and a complete backup call for different tools.",
  },
  {
    title: "Select the right method",
    body: "Simple clogs get cleared with a professional-grade snake. Grease buildup, root intrusion, or main line blockages call for hydro-jet equipment.",
  },
  {
    title: "Clear the blockage",
    body: "We clear the line fully — not just enough to restore partial flow. For main lines, we camera inspect after clearing to confirm it's completely open.",
  },
  {
    title: "Test and advise",
    body: "We run water at full flow to confirm the repair, and let you know if the cause of the clog suggests a maintenance schedule or a repair.",
  },
];

const faqs = [
  {
    q: "What's the difference between snaking a drain and hydro-jetting?",
    a: "A drain snake (auger) breaks up or pulls out a clog and is effective for most standard blockages. Hydro-jetting uses high-pressure water to fully scour the inside of the pipe — it's more thorough for grease buildup, scale, or recurring clogs, and it's what we use on main sewer lines.",
  },
  {
    q: "Can I use chemical drain cleaners to handle this myself?",
    a: "Chemical cleaners can dissolve some soft clogs, but they're corrosive to older pipes, rarely work on solid obstructions, and don't address root intrusion or grease buildup in deeper lines. They also don't tell you why the drain is backing up. We generally recommend skipping them.",
  },
  {
    q: "How long does a drain cleaning typically take?",
    a: "Most sink or shower drain calls take 30–60 minutes. Main sewer line clearing with camera inspection typically takes 90 minutes to 2 hours.",
  },
  {
    q: "Why does my drain keep clogging after I've had it cleaned?",
    a: "Recurring clogs usually mean one of three things: the original cleaning didn't fully clear the line, there's a structural issue with the pipe (bellied section, root intrusion), or the household habits are causing buildup faster than the pipe can handle. We can camera inspect the line to diagnose recurring problems.",
  },
  {
    q: "Do you offer drain maintenance plans?",
    a: "We do offer preventive maintenance agreements for commercial properties and for homeowners who've had repeated issues. Ask us about options when we're on-site.",
  },
];

export default function DrainCleaningPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#1a3a5c] text-white py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4">
          <nav aria-label="Breadcrumb" className="mb-5 text-sm text-blue-300">
            <ol className="flex items-center gap-2 flex-wrap">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li aria-hidden="true">›</li>
              <li>
                <Link href="/services" className="hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li aria-hidden="true">›</li>
              <li className="text-white">Drain Cleaning</li>
            </ol>
          </nav>
          <div className="max-w-2xl">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Drain Cleaning in Austin, TX
            </h1>
            <p className="text-blue-200 text-base md:text-lg leading-relaxed mb-6">
              Slow drains and full clogs cleared by licensed plumbers using
              professional snake and hydro-jet equipment. We clear the whole
              line — not just enough to get water moving.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={BUSINESS.phoneHref}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 font-semibold rounded text-white text-sm"
                style={{ backgroundColor: "#c0392b" }}
              >
                📞 {BUSINESS.phone}
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3 font-semibold rounded text-sm border border-white text-white hover:bg-white hover:text-[#1a3a5c] transition-colors"
              >
                Schedule Service
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Types of drains */}
      <section className="py-16 md:py-20 bg-white" aria-labelledby="drains-heading">
        <div className="max-w-6xl mx-auto px-4">
          <p className="text-[#c0392b] text-sm font-semibold uppercase tracking-wider mb-2">
            What We Clear
          </p>
          <h2
            id="drains-heading"
            className="text-2xl md:text-3xl font-bold text-[#1a3a5c] mb-3"
          >
            Every drain in your home
          </h2>
          <p className="text-gray-600 max-w-2xl mb-10">
            Different drains clog for different reasons, and the right fix
            depends on what&apos;s in the line and where. We diagnose before we
            start.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {drainTypes.map((drain) => (
              <div
                key={drain.title}
                className="border border-[#dce2ea] rounded-lg p-5 bg-white"
              >
                <h3 className="font-bold text-[#1a3a5c] mb-2">{drain.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{drain.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image break */}
      <div className="relative h-48 md:h-64 overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1600&q=80"
          alt="Plumber working on drain pipes"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[#1a3a5c] opacity-65" />
        <div className="absolute inset-0 flex items-center justify-center px-4">
          <p className="text-white text-xl md:text-2xl font-bold text-center">
            Most drain clogs cleared same day · Flat-rate pricing
          </p>
        </div>
      </div>

      {/* Process */}
      <section className="py-16 md:py-20 bg-[#f7f8fa]" aria-labelledby="process-heading">
        <div className="max-w-6xl mx-auto px-4">
          <p className="text-[#c0392b] text-sm font-semibold uppercase tracking-wider mb-2">
            How It Works
          </p>
          <h2
            id="process-heading"
            className="text-2xl md:text-3xl font-bold text-[#1a3a5c] mb-10"
          >
            How we handle a drain cleaning call
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step, idx) => (
              <div
                key={step.title}
                className="bg-white border border-[#dce2ea] rounded-lg p-6"
              >
                <div
                  className="w-8 h-8 rounded-full text-white text-sm font-bold flex items-center justify-center mb-4"
                  style={{ backgroundColor: "#c0392b" }}
                  aria-hidden="true"
                >
                  {idx + 1}
                </div>
                <h3 className="font-bold text-[#1a3a5c] mb-2">{step.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 md:py-20 bg-white" aria-labelledby="faq-heading">
        <div className="max-w-4xl mx-auto px-4">
          <p className="text-[#c0392b] text-sm font-semibold uppercase tracking-wider mb-2">
            FAQ
          </p>
          <h2
            id="faq-heading"
            className="text-2xl md:text-3xl font-bold text-[#1a3a5c] mb-10"
          >
            Drain cleaning questions
          </h2>
          <div className="divide-y divide-[#dce2ea]">
            {faqs.map((faq) => (
              <div key={faq.q} className="py-6">
                <h3 className="font-bold text-[#1a3a5c] mb-2">{faq.q}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related */}
      <section className="py-10 bg-[#f7f8fa] border-t border-[#dce2ea]">
        <div className="max-w-6xl mx-auto px-4">
          <p className="text-sm font-semibold text-[#1a3a5c] mb-3">
            Related Services:
          </p>
          <div className="flex flex-wrap gap-3">
            {[
              { label: "Emergency Plumbing", href: "/services/emergency-plumbing" },
              { label: "Pipe Repair & Repiping", href: "/services/pipe-repair" },
              { label: "Leak Detection", href: "/services/leak-detection" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-4 py-2 border border-[#dce2ea] rounded text-sm text-[#1a3a5c] bg-white hover:border-[#1a3a5c] transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner variant="standard" />
    </>
  );
}