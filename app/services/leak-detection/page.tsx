import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import CtaBanner from "@/components/cta-banner";
import { BUSINESS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Leak Detection in Austin, TX | Reliable Plumbing Co.",
  description:
    "Non-invasive water leak detection for Austin homes. Acoustic equipment and pressure testing to locate hidden leaks without tearing up walls or floors. Call (512) 847-3200.",
};

const leakTypes = [
  {
    title: "Slab leaks",
    desc: "Leaks in water lines running beneath a concrete slab are among the most destructive and hardest to find. We use acoustic listening equipment and pressure testing to pinpoint the exact location before any slab work begins.",
  },
  {
    title: "In-wall leaks",
    desc: "Signs include water stains, soft drywall, or unexplained mold. We use acoustic technology to locate the leak so we open only what needs to be opened — not the whole wall.",
  },
  {
    title: "Underground line leaks",
    desc: "Supply lines running underground can leak for months without visible signs. We use pressure testing and ground acoustic equipment to find the source.",
  },
  {
    title: "Running toilets and faucet leaks",
    desc: "A toilet running constantly can waste 200+ gallons per day. We diagnose internal valve and flapper issues, and repair them on the same visit.",
  },
];

const warningSignsList = [
  "Water bill has increased without explanation",
  "Sound of running water when everything is off",
  "Warm or wet spots on the floor (possible slab leak)",
  "Water meter moving when all fixtures are off",
  "Drop in water pressure throughout the home",
  "Unexplained mold or mildew smell",
  "Damp or stained drywall without a surface source",
  "Cracking or shifting in floors or foundation",
];

const faqs = [
  {
    q: "How do you find a leak without tearing up walls or floors?",
    a: "We use acoustic listening devices that pick up the sound signature of escaping water through pipe walls and building materials. Combined with pressure testing — isolating sections of pipe and measuring pressure drop — we can locate most leaks to within a few inches without any demolition.",
  },
  {
    q: "How much does leak detection cost?",
    a: "Detection service pricing depends on the scope of the search. We'll give you a flat-rate quote for the detection work before we start. If we locate the leak and you proceed with the repair, the detection fee is credited toward the repair cost.",
  },
  {
    q: "What if the leak is under my slab?",
    a: "Slab leaks are serious but manageable. Once we locate the exact spot, we discuss your repair options — direct access repair, rerouting the line through the walls, or epoxy pipe lining depending on the pipe material and leak location. We explain the tradeoffs clearly before you decide.",
  },
  {
    q: "Can a hidden leak cause foundation damage?",
    a: "Yes. Water escaping under a slab erodes soil over time and can cause differential settling. This is why slab leaks should be addressed promptly. If you have any of the warning signs listed above, call us for a pressure test.",
  },
  {
    q: "My water bill went up. How do I know if it's a leak or just higher usage?",
    a: "Turn off all fixtures and check your water meter. If the dial is still moving, water is flowing somewhere in your system. We can perform a pressure test to confirm whether there's a leak and begin tracking it down.",
  },
];

export default function LeakDetectionPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#1a3a5c] text-white py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4">
          <nav aria-label="Breadcrumb" className="mb-5 text-sm text-blue-300">
            <ol className="flex items-center gap-2 flex-wrap">
              <li>
                <Link href="/" className="hover:text-white transition-colors">Home</Link>
              </li>
              <li aria-hidden="true">›</li>
              <li>
                <Link href="/services" className="hover:text-white transition-colors">Services</Link>
              </li>
              <li aria-hidden="true">›</li>
              <li className="text-white">Leak Detection</li>
            </ol>
          </nav>
          <div className="max-w-2xl">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Leak Detection in Austin, TX
            </h1>
            <p className="text-blue-200 text-base md:text-lg leading-relaxed mb-6">
              We find hidden water leaks — in slabs, walls, and underground
              lines — without unnecessary demolition. Acoustic equipment and
              pressure testing. No guessing.
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
                Schedule Inspection
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Warning signs */}
      <section className="py-16 md:py-20 bg-white" aria-labelledby="signs-heading">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
            <div>
              <p className="text-[#c0392b] text-sm font-semibold uppercase tracking-wider mb-2">
                Warning Signs
              </p>
              <h2
                id="signs-heading"
                className="text-2xl md:text-3xl font-bold text-[#1a3a5c] mb-4"
              >
                Signs you may have a hidden leak
              </h2>
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                Most hidden leaks show warning signs before they become visible
                damage. If you&apos;re seeing any of these, a pressure test is
                the right first step.
              </p>
              <ul className="space-y-2">
                {warningSignsList.map((sign) => (
                  <li key={sign} className="flex items-start gap-2 text-sm text-gray-700">
                    <span className="text-[#c0392b] mt-0.5 shrink-0" aria-hidden="true">⚠</span>
                    {sign}
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative rounded-lg overflow-hidden aspect-[4/3]">
              <Image
                src="https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=800&q=80"
                alt="Water leak detection equipment"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Leak Types */}
      <section className="py-16 md:py-20 bg-[#f7f8fa]" aria-labelledby="types-heading">
        <div className="max-w-6xl mx-auto px-4">
          <p className="text-[#c0392b] text-sm font-semibold uppercase tracking-wider mb-2">
            Types of Leaks We Find
          </p>
          <h2
            id="types-heading"
            className="text-2xl md:text-3xl font-bold text-[#1a3a5c] mb-10"
          >
            Every type of leak detection
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {leakTypes.map((item) => (
              <div
                key={item.title}
                className="bg-white border border-[#dce2ea] rounded-lg p-6"
              >
                <h3 className="font-bold text-[#1a3a5c] mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 md:py-20 bg-white" aria-labelledby="faq-heading">
        <div className="max-w-4xl mx-auto px-4">
          <p className="text-[#c0392b] text-sm font-semibold uppercase tracking-wider mb-2">FAQ</p>
          <h2
            id="faq-heading"
            className="text-2xl md:text-3xl font-bold text-[#1a3a5c] mb-10"
          >
            Leak detection questions
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
          <p className="text-sm font-semibold text-[#1a3a5c] mb-3">Related Services:</p>
          <div className="flex flex-wrap gap-3">
            {[
              { label: "Pipe Repair & Repiping", href: "/services/pipe-repair" },
              { label: "Emergency Plumbing", href: "/services/emergency-plumbing" },
              { label: "Drain Cleaning", href: "/services/drain-cleaning" },
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