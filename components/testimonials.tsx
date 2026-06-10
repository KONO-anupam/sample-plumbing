import { TESTIMONIALS } from "@/lib/constants";

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <span
          key={i}
          className={i < rating ? "text-yellow-400" : "text-gray-300"}
          aria-hidden="true"
        >
          ★
        </span>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="py-16 md:py-20 bg-[#f7f8fa]" aria-labelledby="testimonials-heading">
      <div className="max-w-6xl mx-auto px-4">
        <div className="mb-10 md:mb-12">
          <p className="text-[#c0392b] text-sm font-semibold uppercase tracking-wider mb-2">
            Customer Reviews
          </p>
          <h2
            id="testimonials-heading"
            className="text-2xl md:text-3xl font-bold text-[#1a3a5c] mb-3"
          >
            What our customers say
          </h2>
          <p className="text-gray-600 max-w-2xl">
            We earn trust one job at a time. Here is what homeowners and
            property managers in the Austin area have shared about their
            experience with us.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {TESTIMONIALS.map((testimonial, i) => (
            <article
              key={i}
              className="bg-white border border-[#dce2ea] rounded-lg p-6 flex flex-col"
            >
              <StarRating rating={testimonial.rating} />
              <blockquote className="mt-3 text-sm text-gray-700 leading-relaxed flex-1">
                &ldquo;{testimonial.text}&rdquo;
              </blockquote>
              <footer className="mt-4 pt-4 border-t border-gray-100">
                <p className="font-semibold text-sm text-[#1a3a5c]">
                  {testimonial.name}
                </p>
                <p className="text-xs text-gray-500">
                  {testimonial.location} · {testimonial.date}
                </p>
              </footer>
            </article>
          ))}
        </div>

        <div className="mt-8 text-center">
          <p className="text-sm text-gray-500">
            4.9 / 5.0 average rating based on 280+ Google reviews
          </p>
        </div>
      </div>
    </section>
  );
}