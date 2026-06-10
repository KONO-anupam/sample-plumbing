import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import CtaBanner from "@/components/cta-banner";
import { BUSINESS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "About Us | Licensed Austin Plumber Since 2009",
  description:
    "Reliable Plumbing Co. has served Austin, TX since 2009. Learn about our history, our team, our certifications, and why thousands of local homeowners trust us with their plumbing.",
};

const team = [
  {
    name: "Mike Castillo",
    title: "Owner & Master Plumber",
    bio: "Mike has held a Master Plumber license since 2004. He founded Reliable Plumbing Co. in 2009 after a decade working for larger contractors. He still runs a service route three days a week.",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
  },
  {
    name: "Sarah Nguyen",
    title: "Operations Manager",
    bio: "Sarah manages scheduling, dispatch, and customer service. She joined us in 2014 and runs the day-to-day so every appointment starts and ends on time.",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80",
  },
  {
    name: "James Ruiz",
    title: "Lead Field Technician",
    bio: "James is our most senior field tech with 11 years at Reliable Plumbing. He specializes in slab leak detection and large-scale repiping projects.",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80",
  },
];

const certifications = [
  "State of Texas Master Plumber License — MPL-2009-04821",
  "IAPMO Certified — International Association of Plumbing and Mechanical Officials",
  "Navien Certified Technician — Tankless Water Heater Service",
  "Bradford White Certified — Tank Water Heater Installation & Repair",
  "PHCC Member — Plumbing-Heating-Cooling Contractors Association",
  "$2 Million General Liability Insurance",
  "Workers Compensation Coverage — All field employees",
];

const values = [
  {
    heading: "Honesty before a sale",
    body: "We diagnose the actual problem and tell you what we find, even when the honest answer costs us a job. Our repeat customer rate has been above 70% for eight years running — that doesn't happen with pushy sales tactics.",
  },
  {
    heading: "Quality that holds",
    body: "We use materials we'd put in our own homes. We don't cut corners on fittings, valves, or water heater units to squeeze margin out of a job. If a repair doesn't last, we come back and fix it.",
  },
  {
    heading: "Respect for your home",
    body: "Shoe covers on every job. Floor protection on slab work. A clean workspace when we leave. We've been welcomed into thousands of homes and we take that seriously.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-[#1a3a5c] text-white py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4">
          <nav aria-label="Breadcrumb" className="mb-4 text-sm text-blue-300">
            <ol className="flex items-center gap-2">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li aria-hidden="true">›</li>
              <li className="text-white">About</li>
            </ol>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold mb-3">About Reliable Plumbing Co.</h1>
          <p className="text-blue-200 max-w-2xl text-base md:text-lg">
            A family-founded Austin plumbing company with 15 years of service
            and a reputation built one job at a time.
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-16 md:py-20 bg-white" aria-labelledby="story-heading">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
            <div className="relative rounded-lg overflow-hidden aspect-[4/3]">
              <Image
                src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&q=80"
                alt="Plumbing technician inspecting pipes"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div>
              <p className="text-[#c0392b] text-sm font-semibold uppercase tracking-wider mb-2">
                Our Story
              </p>
              <h2
                id="story-heading"
                className="text-2xl md:text-3xl font-bold text-[#1a3a5c] mb-4"
              >
                Started in 2009 with a truck and a license
              </h2>
              <div className="space-y-4 text-gray-700 text-sm leading-relaxed">
                <p>
                  Mike Castillo got his Master Plumber license in 2004 and spent
                  five years working for a large service company. He learned the
                  business thoroughly, but he also learned that bigger doesn't
                  always mean better for the customer.
                </p>
                <p>
                  In 2009, he started Reliable Plumbing Co. with one truck, a
                  business license, and the idea that a local plumber should be
                  honest, responsive, and fair. His first year, he did 60% of
                  his jobs on referrals from the first 20 customers.
                </p>
                <p>
                  Today, Reliable Plumbing has 12 licensed field technicians,
                  serves all of Greater Austin, and has completed more than
                  18,000 service calls. The company has grown, but the core
                  hasn&apos;t changed: show up on time, fix it right, and charge
                  what you said you would.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 md:py-20 bg-[#f7f8fa]" aria-labelledby="values-heading">
        <div className="max-w-6xl mx-auto px-4">
          <p className="text-[#c0392b] text-sm font-semibold uppercase tracking-wider mb-2">
            How We Work
          </p>
          <h2
            id="values-heading"
            className="text-2xl md:text-3xl font-bold text-[#1a3a5c] mb-10"
          >
            What we hold ourselves to
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {values.map((value) => (
              <div
                key={value.heading}
                className="bg-white border border-[#dce2ea] rounded-lg p-6"
              >
                <h3 className="font-bold text-[#1a3a5c] mb-3">
                  {value.heading}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {value.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 md:py-20 bg-white" aria-labelledby="team-heading">
        <div className="max-w-6xl mx-auto px-4">
          <p className="text-[#c0392b] text-sm font-semibold uppercase tracking-wider mb-2">
            The Team
          </p>
          <h2
            id="team-heading"
            className="text-2xl md:text-3xl font-bold text-[#1a3a5c] mb-10"
          >
            The people behind the work
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {team.map((member) => (
              <article key={member.name} className="text-center">
                <div className="relative w-32 h-32 rounded-full overflow-hidden mx-auto mb-4">
                  <Image
                    src={member.image}
                    alt={`Photo of ${member.name}`}
                    fill
                    className="object-cover"
                    sizes="128px"
                  />
                </div>
                <h3 className="font-bold text-[#1a3a5c] text-lg">
                  {member.name}
                </h3>
                <p className="text-[#c0392b] text-sm font-medium mb-2">
                  {member.title}
                </p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {member.bio}
                </p>
              </article>
            ))}
          </div>
          <p className="mt-8 text-sm text-gray-500 text-center">
            Plus 9 additional licensed field technicians serving Austin and
            surrounding communities.
          </p>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 md:py-20 bg-[#f7f8fa]" aria-labelledby="certs-heading">
        <div className="max-w-6xl mx-auto px-4">
          <p className="text-[#c0392b] text-sm font-semibold uppercase tracking-wider mb-2">
            Credentials
          </p>
          <h2
            id="certs-heading"
            className="text-2xl md:text-3xl font-bold text-[#1a3a5c] mb-8"
          >
            Licensed, insured, and certified
          </h2>
          <div className="bg-white border border-[#dce2ea] rounded-lg divide-y divide-[#dce2ea]">
            {certifications.map((cert) => (
              <div key={cert} className="flex items-center gap-3 px-6 py-4">
                <span className="text-green-600 text-lg shrink-0" aria-hidden="true">
                  ✓
                </span>
                <span className="text-sm text-gray-700">{cert}</span>
              </div>
            ))}
          </div>
          <p className="mt-6 text-sm text-gray-500">
            License verification:{" "}
            <a
              href="https://www.tceq.texas.gov/agency/occupational_licensing/plumbing/index.html"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#1a3a5c] underline hover:text-[#c0392b] transition-colors"
            >
              Texas Commission on Environmental Quality (TCEQ)
            </a>
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-14 bg-[#1a3a5c] text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-blue-300 text-sm font-semibold uppercase tracking-wider mb-3">
            Our Mission
          </p>
          <blockquote className="text-xl md:text-2xl font-medium leading-relaxed text-white">
            &ldquo;To be the plumber Austin homeowners call first — not because
            we advertise the most, but because we&apos;ve earned it.&rdquo;
          </blockquote>
          <p className="mt-4 text-blue-300 text-sm">— Mike Castillo, Founder</p>
        </div>
      </section>

      <CtaBanner variant="standard" />
    </>
  );
}