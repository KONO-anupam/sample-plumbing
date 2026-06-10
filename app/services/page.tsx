import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import ServiceCard from "@/components/service-card";
import CtaBanner from "@/components/cta-banner";
import { SERVICES, BUSINESS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Plumbing Services in Austin, TX",
  description:
    "Reliable Plumbing Co. offers emergency plumbing, drain cleaning, leak detection, water heater repair, and pipe repair for Austin, TX homes and businesses. Call (512) 847-3200.",
};

const additionalServices = [
  "Toilet repair and replacement",
  "Faucet and fixture installation",
  "Garbage disposal repair",
  "Sump pump installation",
  "Backflow prevention",
  "Pressure regulator adjustment",
  "Hose bib repair and replacement",
  "Gas line inspection",
  "Sewer line camera inspection",
  "Water softener hookup",
  "Kitchen and bathroom remodel plumbing",
  "Commercial restroom service",
];

export default function ServicesPage() {
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
              <li className="text-white">Services</li>
            </ol>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold mb-3">
            Plumbing Services in Austin, TX
          </h1>
          <p className="text-blue-200 max-w-2xl text-base md:text-lg">
            Residential and commercial plumbing — repairs, installations, and
            emergency service. All work performed by licensed, insured
            technicians.
          </p>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-16 md:py-20 bg-white" aria-labelledby="main-services-heading">
        <div className="max-w-6xl mx-auto px-4">
          <p className="text-[#c0392b] text-sm font-semibold uppercase tracking-wider mb-2">
            Core Services
          </p>
          <h2
            id="main-services-heading"
            className="text-2xl md:text-3xl font-bold text-[#1a3a5c] mb-3"
          >
            What we specialize in
          </h2>
          <p className="text-gray-600 max-w-2xl mb-10">
            These are the services we perform most frequently and are trained to
            handle at a high level. Each comes with a written estimate and a
            workmanship warranty.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((service) => (
              <ServiceCard
                key={service.slug}
                title={service.title}
                slug={service.slug}
                shortDesc={service.shortDesc}
                icon={service.icon}
                featured
              />
            ))}
          </div>
        </div>
      </section>

      {/* Photo break */}
      <div className="relative h-56 md:h-72 overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=1600&q=80"
          alt="Plumber tools laid out on workbench"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[#1a3a5c] opacity-60" />
        <div className="absolute inset-0 flex items-center justify-center px-4">
          <div className="text-center text-white">
            <p className="text-2xl md:text-3xl font-bold mb-2">
              Serving Austin since 2009
            </p>
            <p className="text-blue-200 text-sm">
              18,000+ service calls completed · Licensed Master Plumber on staff
            </p>
          </div>
        </div>
      </div>

      {/* Additional Services */}
      <section className="py-16 md:py-20 bg-[#f7f8fa]" aria-labelledby="additional-heading">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-start">
            <div>
              <p className="text-[#c0392b] text-sm font-semibold uppercase tracking-wider mb-2">
                Additional Work
              </p>
              <h2
                id="additional-heading"
                className="text-2xl md:text-3xl font-bold text-[#1a3a5c] mb-4"
              >
                We handle more than just the big jobs
              </h2>
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                Beyond our specialty services, we tackle the full range of
                residential and light commercial plumbing needs. If it&apos;s
                connected to your water or drain system, we can usually help.
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {additionalServices.map((service) => (
                  <li key={service} className="flex items-center gap-2 text-sm text-gray-700">
                    <span className="text-[#c0392b] shrink-0" aria-hidden="true">
                      ✓
                    </span>
                    {service}
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-sm text-gray-500">
                Don&apos;t see your specific issue? Call us at{" "}
                <a
                  href={BUSINESS.phoneHref}
                  className="text-[#1a3a5c] font-medium underline hover:text-[#c0392b] transition-colors"
                >
                  {BUSINESS.phone}
                </a>{" "}
                and describe the situation — we&apos;ll let you know right away if
                we can help.
              </p>
            </div>
            <div>
              <div className="bg-white border border-[#dce2ea] rounded-lg p-6">
                <h3 className="font-bold text-[#1a3a5c] text-lg mb-4">
                  Commercial Plumbing
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  We work with property managers, small businesses, and
                  commercial tenants on a regular maintenance and repair basis.
                  Restaurants, office buildings, retail spaces, and apartment
                  complexes have trusted us since 2009.
                </p>
                <ul className="space-y-2">
                  {[
                    "Multi-unit residential buildings",
                    "Restaurant and food service",
                    "Office and retail spaces",
                    "Light industrial facilities",
                    "Property management accounts",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-gray-700">
                      <span className="text-[#c0392b] shrink-0" aria-hidden="true">
                        ✓
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="mt-5 pt-5 border-t border-[#dce2ea]">
                  <Link
                    href="/contact"
                    className="inline-flex items-center text-sm font-semibold text-[#1a3a5c] hover:text-[#c0392b] transition-colors"
                  >
                    Inquire about commercial accounts →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CtaBanner variant="standard" />
    </>
  );
}