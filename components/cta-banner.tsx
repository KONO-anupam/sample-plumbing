import Link from "next/link";
import { BUSINESS } from "@/lib/constants";

interface CtaBannerProps {
  variant?: "emergency" | "standard";
  heading?: string;
  subtext?: string;
}

export default function CtaBanner({
  variant = "standard",
  heading,
  subtext,
}: CtaBannerProps) {
  const isEmergency = variant === "emergency";

  const defaultHeading = isEmergency
    ? "Plumbing emergency? We're available right now."
    : "Ready to schedule service?";

  const defaultSubtext = isEmergency
    ? "Burst pipes, active flooding, no hot water — call us any hour. Austin's 24/7 emergency plumber."
    : "Call for a free estimate or use our contact form. Same-day appointments available Monday through Saturday.";

  return (
    <section
      className="py-12 md:py-16"
      style={{ backgroundColor: isEmergency ? "#c0392b" : "#1a3a5c" }}
      aria-label={isEmergency ? "Emergency service call to action" : "Contact call to action"}
    >
      <div className="max-w-5xl mx-auto px-4 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
        <div className="text-white">
          <h2 className="text-2xl md:text-3xl font-bold mb-2 leading-tight">
            {heading ?? defaultHeading}
          </h2>
          <p className="text-sm md:text-base opacity-90 max-w-xl">
            {subtext ?? defaultSubtext}
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-3 shrink-0">
          <a
            href={BUSINESS.phoneHref}
            className="inline-flex items-center justify-center gap-2 px-6 py-3 font-semibold rounded text-sm transition-colors bg-white text-[#1a3a5c] hover:bg-gray-100"
          >
            📞 {BUSINESS.phone}
          </a>
          {!isEmergency && (
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3 font-semibold rounded text-sm border border-white text-white hover:bg-white hover:text-[#1a3a5c] transition-colors"
            >
              Request a Quote
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}