import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import CtaBanner from "@/components/cta-banner";
import { BUSINESS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Emergency Plumber in Austin, TX — 24/7 Response",
  description:
    "Burst pipe, flooding, gas leak, or no hot water? Reliable Plumbing Co. is Austin's 24/7 emergency plumber. No overtime charges. Call (512) 847-3200 now.",
};

const whatWeCover = [
  "Burst or ruptured pipes",
  "Sewage backup into the home",
  "Active flooding from a broken fitting",
  "No hot water — tank or tankless failure",
  "Gas line leaks (detected or suspected)",
  "Overflowing toilets that won't stop",
  "Frozen pipe damage",
  "Slab leak causing structural concern",
  "Loss of water pressure throughout the home",
  "Failed water heater in rental units",
];

const responseSteps = [
  {
    step: "Call us",
    detail:
      "A live dispatcher answers {BUSINESS.phone} 24 hours a day, 7 days a week. No answering service — a real person will take your call and assess the urgency.",
  },
  {
    step: "We dispatch immediately",
    detail:
      "For confirmed emergencies, we aim to have a technician on the road within 30 minutes. We'll give you an accurate ETA before we hang up.",
  },
  {
    step: "Immediate assessment on arrival",
    detail:
      "The technician will locate the source, stop active damage if possible, and explain clearly what they found and what the repair involves before touching anything.",
  },
  {
    step: "Fix it the same night",
    detail:
      "We carry extensive parts inventory on every truck. Most emergency repairs — burst pipes, failed pressure valves, blown fittings — are completed the same visit.",
  },
];

const faqs = [
  {
    q: "Do you charge extra for nighttime or weekend emergency calls?",
    a: "No. We made the decision years ago to charge the same flat-rate pricing regardless of when you call. There are no overtime surcharges, no weekend premiums, and no holiday fees.",
  },
  {
    q: "What should I do while waiting for the plumber to arrive?",
    a: "Find your main water shutoff and turn it off. This is typically near the water meter or where the main line enters the house. This stops active flooding and limits damage while we're in route. Our dispatcher can walk you through this over the phone.",
  },
  {
    q: "What qualifies as a plumbing emergency?",
    a: "Anything with active water damage or safety risk: burst pipes, sewage backup, suspected gas leaks, flooding, or loss of water entirely. If you're not sure, call us — we'd rather answer a question and tell you it can wait than have you wait through a situation that's getting worse.",
  },
  {
    q: "How quickly can you typically arrive?",
    a: "For Austin and the immediate metro area, we average 35–55 minutes on emergency calls. For communities 30+ miles out, it may be 60–90 minutes depending on technician availability.",
  },
  {
    q: "Do you handle gas line emergencies?",
    a: "Yes, with one important note: if you smell gas strongly, leave the building and call 911 or Austin Energy at 512-322-9100 before calling us. Once the gas company has assessed it as safe, we can handle the repair.",
  },
];

export default function EmergencyPlumbingPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-[#96281b] text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1600&q=80"
            alt="Emergency plumbing service"
            fill
            priority
            className="object-cover opacity-20"
            sizes="100vw"
          />
        </div>
        <div className="relative z-10 max-w-6xl mx-auto px-4 py-14 md:py-20">
          <nav aria-label="Breadcrumb" className="mb-5 text-sm text-red-200">
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
              <li className="text-white">Emergency Plumbing</li>
            </ol>
          </nav>
          <div className="max-w-2xl">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              24/7 Emergency Plumbing in Austin, TX
            </h1>
            <p className="text-red-100 text-base md:text-lg leading-relaxed mb-6">
              Burst pipes, sewage backups, active flooding — we respond day or
              night with no overtime charges. Licensed technicians, stocked
              trucks, and an honest assessment on arrival.
            </p>
            <a
              href={BUSINESS.phoneHref}
              className="inline-flex items-center gap-2 px-6 py-3.5 font-bold rounded text-[#96281b] bg-white hover:bg-gray-100 transition-colors text-base"
            >
              📞 Call Now: {BUSINESS.phone}
            </a>
          </div>
        </div>
      </section>

      {/* What we cover */}
      <section className="py-16 md:py-20 bg-white" aria-labelledby="coverage-heading">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-start">
            <div>
              <p className="text-[#c0392b] text-sm font-semibold uppercase tracking-wider mb-2">
                Emergency Coverage
              </p>
              <h2
                id="coverage-heading"
                className="text-2xl md:text-3xl font-bold text-[#1a3a5c] mb-4"
              >
                What counts as a plumbing emergency
              </h2>
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                Plumbing emergencies don&apos;t stop at 5 PM. We handle the full
                range of urgent situations — anything that involves active water
                damage, health risks, or complete loss of function.
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {whatWeCover.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-gray-700">
                    <span className="text-[#c0392b] mt-0.5 shrink-0" aria-hidden="true">
                      ✓
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative rounded-lg overflow-hidden aspect-[4/3]">
              <Image
                src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800&q=80"
                alt="Plumber repairing burst pipe"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* How We Respond */}
      <section className="py-16 md:py-20 bg-[#f7f8fa]" aria-labelledby="process-heading">
        <div className="max-w-6xl mx-auto px-4">
          <p className="text-[#c0392b] text-sm font-semibold uppercase tracking-wider mb-2">
            Our Process
          </p>
          <h2
            id="process-heading"
            className="text-2xl md:text-3xl font-bold text-[#1a3a5c] mb-10"
          >
            What to expect when you call
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {responseSteps.map((item, idx) => (
              <div
                key={item.step}
                className="bg-white border border-[#dce2ea] rounded-lg p-6"
              >
                <div
                  className="w-9 h-9 rounded-full text-white text-sm font-bold flex items-center justify-center mb-4"
                  style={{ backgroundColor: "#1a3a5c" }}
                  aria-hidden="true"
                >
                  {idx + 1}
                </div>
                <h3 className="font-bold text-[#1a3a5c] mb-2">{item.step}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {item.step === "Call us"
                    ? `A live dispatcher answers ${BUSINESS.phone} 24 hours a day, 7 days a week. No answering service — a real person will take your call and assess the urgency.`
                    : item.detail}
                </p>
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
            Common questions about emergency service
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

      {/* Related services */}
      <section className="py-10 bg-[#f7f8fa] border-t border-[#dce2ea]">
        <div className="max-w-6xl mx-auto px-4">
          <p className="text-sm font-semibold text-[#1a3a5c] mb-3">
            Related Services:
          </p>
          <div className="flex flex-wrap gap-3">
            {[
              { label: "Leak Detection", href: "/services/leak-detection" },
              { label: "Pipe Repair & Repiping", href: "/services/pipe-repair" },
              {
                label: "Water Heater Repair",
                href: "/services/water-heater-repair",
              },
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

      <CtaBanner variant="emergency" />
    </>
  );
}