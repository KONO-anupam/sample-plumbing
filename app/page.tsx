import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ServiceCard from "@/components/service-card";
import Testimonials from "@/components/testimonials";
import CtaBanner from "@/components/cta-banner";
import { BUSINESS, SERVICES, SERVICE_AREAS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Austin Plumber | Licensed & Insured | Reliable Plumbing Co.",
  description:
    "Reliable Plumbing Co. has served Austin, TX homeowners and businesses since 2009. Emergency service, drain cleaning, water heater repair, and more. Call (512) 847-3200.",
};

const trustBadges = [
  { label: "Licensed & Insured", detail: "State of Texas MPL License" },
  { label: "15+ Years in Business", detail: "Serving Austin since 2009" },
  { label: "24/7 Emergency Service", detail: "No overtime charges" },
  { label: "Free Estimates", detail: "On most residential jobs" },
];

const whyUs = [
  {
    heading: "Straightforward pricing",
    body: "We give you a written estimate before starting any work. The price you agree to is the price on your invoice — no surprise fees at the end of the job.",
  },
  {
    heading: "Technicians you can trust",
    body: "Every technician on our team is background-checked, licensed, and has been with us long enough to handle whatever your home throws at them.",
  },
  {
    heading: "Same-day service available",
    body: "Most calls booked before noon can be seen the same day. We know plumbing problems don't wait, and neither do we.",
  },
  {
    heading: "We clean up after ourselves",
    body: "We protect your floors, work carefully around your home, and leave your space cleaner than we found it. No exceptions.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-[#1a3a5c] text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1600&q=80"
            alt="Plumber working under a kitchen sink"
            fill
            priority
            className="object-cover opacity-25"
            sizes="100vw"
          />
        </div>
        <div className="relative z-10 max-w-6xl mx-auto px-4 py-16 md:py-24 lg:py-28">
          <div className="max-w-2xl">
            <p className="text-blue-300 text-sm font-medium uppercase tracking-widest mb-3">
              Austin, TX · Est. 2009
            </p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-5">
              Austin&apos;s plumber for when it actually matters.
            </h1>
            <p className="text-blue-100 text-base md:text-lg leading-relaxed mb-8 max-w-xl">
              Reliable Plumbing Co. has handled plumbing repairs and
              installations for Austin homeowners and businesses since 2009.
              Licensed, insured, and available 24/7 for emergencies.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={BUSINESS.phoneHref}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 font-semibold rounded text-white text-sm transition-colors"
                style={{ backgroundColor: "#c0392b" }}
              >
                📞 Call {BUSINESS.phone}
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3.5 font-semibold rounded text-sm border border-white text-white hover:bg-white hover:text-[#1a3a5c] transition-colors"
              >
                Request a Free Estimate
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust badges */}
      <section className="bg-[#0f2540]" aria-label="Trust indicators">
        <div className="max-w-6xl mx-auto px-4 py-5">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {trustBadges.map((badge) => (
              <div key={badge.label} className="text-center py-3">
                <p className="text-white font-semibold text-sm">
                  {badge.label}
                </p>
                <p className="text-blue-300 text-xs mt-0.5">{badge.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 md:py-20 bg-white" aria-labelledby="services-heading">
        <div className="max-w-6xl mx-auto px-4">
          <div className="mb-10 md:mb-12">
            <p className="text-[#c0392b] text-sm font-semibold uppercase tracking-wider mb-2">
              What We Do
            </p>
            <h2
              id="services-heading"
              className="text-2xl md:text-3xl font-bold text-[#1a3a5c] mb-3"
            >
              Plumbing services for Austin homes &amp; businesses
            </h2>
            <p className="text-gray-600 max-w-2xl">
              From stopped-up drains to full repiping projects, we handle the
              range of residential and light commercial plumbing work. All jobs
              backed by a written warranty.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((service) => (
              <ServiceCard
                key={service.slug}
                title={service.title}
                slug={service.slug}
                shortDesc={service.shortDesc}
                icon={service.icon}
              />
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link
              href="/services"
              className="inline-flex items-center gap-1 text-sm font-semibold text-[#1a3a5c] hover:text-[#c0392b] transition-colors"
            >
              View all services →
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-20 bg-[#f7f8fa]" aria-labelledby="why-us-heading">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
            <div>
              <p className="text-[#c0392b] text-sm font-semibold uppercase tracking-wider mb-2">
                Why Reliable Plumbing
              </p>
              <h2
                id="why-us-heading"
                className="text-2xl md:text-3xl font-bold text-[#1a3a5c] mb-4"
              >
                We&apos;ve been doing this for 15 years. It shows.
              </h2>
              <p className="text-gray-600 leading-relaxed mb-8">
                We started as a two-man operation and grew by doing good work
                and not overcharging people. Today we have 12 technicians in the
                field, but the way we handle a job hasn&apos;t changed. You get
                honest pricing, reliable scheduling, and a team that stands
                behind their work.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {whyUs.map((item) => (
                  <div key={item.heading}>
                    <h3 className="font-bold text-[#1a3a5c] text-sm mb-1">
                      {item.heading}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {item.body}
                    </p>
                  </div>
                ))}
              </div>
              <Link
                href="/about"
                className="mt-8 inline-flex items-center gap-1 text-sm font-semibold text-[#1a3a5c] hover:text-[#c0392b] transition-colors"
              >
                More about our company →
              </Link>
            </div>
            <div className="relative rounded-lg overflow-hidden aspect-[4/3] md:aspect-auto md:h-96">
              <Image
                src="https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?w=800&q=80"
                alt="Reliable Plumbing technician at work"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <Testimonials />

      {/* Emergency CTA */}
      <CtaBanner variant="emergency" />

      {/* Service Areas Preview */}
      <section className="py-16 md:py-20 bg-white" aria-labelledby="areas-heading">
        <div className="max-w-6xl mx-auto px-4">
          <div className="mb-8">
            <p className="text-[#c0392b] text-sm font-semibold uppercase tracking-wider mb-2">
              Where We Work
            </p>
            <h2
              id="areas-heading"
              className="text-2xl md:text-3xl font-bold text-[#1a3a5c] mb-3"
            >
              Serving Austin and the surrounding metro
            </h2>
            <p className="text-gray-600 max-w-2xl">
              Our service area covers Greater Austin including many surrounding
              communities. Not sure if we come to you? Give us a call — we
              cover a wide area.
            </p>
          </div>
          <div className="flex flex-wrap gap-2 mb-8">
            {SERVICE_AREAS.map((area) => (
              <span
                key={area}
                className="px-3 py-1.5 bg-[#edf0f5] border border-[#dce2ea] rounded text-sm text-[#1a3a5c] font-medium"
              >
                {area}
              </span>
            ))}
          </div>
          <Link
            href="/service-areas"
            className="inline-flex items-center gap-1 text-sm font-semibold text-[#1a3a5c] hover:text-[#c0392b] transition-colors"
          >
            See full service area details →
          </Link>
        </div>
      </section>

      {/* Bottom CTA */}
      <CtaBanner variant="standard" />
    </>
  );
}