import Link from "next/link";

interface ServiceCardProps {
  title: string;
  slug: string;
  shortDesc: string;
  icon: string;
  featured?: boolean;
}

export default function ServiceCard({
  title,
  slug,
  shortDesc,
  icon,
  featured = false,
}: ServiceCardProps) {
  return (
    <article
      className={`border rounded-lg p-6 flex flex-col transition-shadow hover:shadow-md ${
        featured
          ? "border-[#1a3a5c] bg-white"
          : "border-[#dce2ea] bg-white hover:border-[#2a5298]"
      }`}
    >
      <div
        className="w-12 h-12 rounded flex items-center justify-center text-2xl mb-4 shrink-0"
        style={{ backgroundColor: "#edf0f5" }}
        aria-hidden="true"
      >
        {icon}
      </div>
      <h3 className="font-bold text-[#1a3a5c] text-lg mb-2">{title}</h3>
      <p className="text-gray-600 text-sm leading-relaxed flex-1">{shortDesc}</p>
      <Link
        href={`/services/${slug}`}
        className="mt-5 inline-flex items-center text-sm font-semibold text-[#1a3a5c] hover:text-[#c0392b] transition-colors group"
        aria-label={`Learn more about ${title}`}
      >
        Learn more{" "}
        <span className="ml-1 group-hover:translate-x-0.5 transition-transform" aria-hidden="true">
          →
        </span>
      </Link>
    </article>
  );
}