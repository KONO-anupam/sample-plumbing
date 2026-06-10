import Link from "next/link";
import { BUSINESS, SERVICE_AREAS, SERVICES } from "@/lib/constants";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0f2540] text-white">
      <div className="max-w-6xl mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
          {/* Company info */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div
                className="w-8 h-8 rounded flex items-center justify-center text-sm font-bold shrink-0"
                style={{ backgroundColor: "#c0392b" }}
              >
                R
              </div>
              <span className="font-bold text-base">Reliable Plumbing Co.</span>
            </div>
            <p className="text-blue-300 text-sm leading-relaxed mb-4">
              Serving Austin and surrounding communities since 2009. Licensed,
              insured, and available around the clock for emergencies.
            </p>
            <p className="text-xs text-blue-400">
              License No. {BUSINESS.licenseNumber}
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-sm uppercase tracking-wider text-blue-300 mb-4">
              Our Services
            </h3>
            <ul className="space-y-2">
              {SERVICES.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="text-sm text-blue-200 hover:text-white transition-colors"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/services"
                  className="text-sm text-blue-200 hover:text-white transition-colors"
                >
                  All Services →
                </Link>
              </li>
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h3 className="font-semibold text-sm uppercase tracking-wider text-blue-300 mb-4">
              Service Areas
            </h3>
            <ul className="grid grid-cols-2 gap-x-2 gap-y-1.5">
              {SERVICE_AREAS.slice(0, 10).map((area) => (
                <li key={area}>
                  <Link
                    href="/service-areas"
                    className="text-sm text-blue-200 hover:text-white transition-colors"
                  >
                    {area}
                  </Link>
                </li>
              ))}
            </ul>
            <Link
              href="/service-areas"
              className="inline-block mt-3 text-sm text-blue-300 hover:text-white transition-colors"
            >
              View all areas →
            </Link>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-sm uppercase tracking-wider text-blue-300 mb-4">
              Contact &amp; Hours
            </h3>
            <ul className="space-y-3 text-sm text-blue-200">
              <li>
                <a
                  href={BUSINESS.phoneHref}
                  className="flex items-start gap-2 hover:text-white transition-colors font-medium"
                >
                  <span aria-hidden="true">📞</span>
                  {BUSINESS.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${BUSINESS.email}`}
                  className="flex items-start gap-2 hover:text-white transition-colors"
                >
                  <span aria-hidden="true">✉️</span>
                  {BUSINESS.email}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <span aria-hidden="true">📍</span>
                <span>{BUSINESS.address.full}</span>
              </li>
              <li className="pt-1 border-t border-blue-800 text-xs leading-relaxed text-blue-300">
                {BUSINESS.hours.weekday}
                <br />
                {BUSINESS.hours.saturday}
                <br />
                {BUSINESS.hours.sunday}
                <br />
                <span className="text-yellow-400 font-medium">
                  24/7 Emergency Line Available
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-blue-900 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-blue-400">
          <p>
            © {currentYear} Reliable Plumbing Co. All rights reserved. · Austin,
            TX
          </p>
          <div className="flex gap-4">
            <Link href="/sitemap.xml" className="hover:text-blue-200 transition-colors">
              Sitemap
            </Link>
            <Link href="/contact" className="hover:text-blue-200 transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}