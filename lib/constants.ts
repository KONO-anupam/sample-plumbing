export const BUSINESS = {
  name: "Reliable Plumbing Co.",
  shortName: "Reliable Plumbing",
  phone: "(512) 847-3200",
  phoneHref: "tel:+15128473200",
  email: "service@reliableplumbingco.com",
  address: {
    street: "4821 Burnet Road, Suite 110",
    city: "Austin",
    state: "TX",
    zip: "78756",
    full: "4821 Burnet Road, Suite 110, Austin, TX 78756",
  },
  hours: {
    weekday: "Monday – Friday: 7:00 AM – 6:00 PM",
    saturday: "Saturday: 8:00 AM – 4:00 PM",
    sunday: "Sunday: Emergency Service Only",
    emergency: "24/7 Emergency Line: (512) 847-3200",
  },
  founded: 2009,
  yearsInBusiness: 15,
  licenseNumber: "TX-MPL-2009-04821",
  tagline: "Austin's trusted plumber since 2009.",
  description:
    "Licensed and insured plumbing contractor serving Austin, TX and surrounding communities since 2009. Residential and commercial work. Same-day service available.",
  social: {
    facebook: "https://facebook.com",
    google: "https://google.com",
  },
} as const;

export const SERVICES = [
  {
    title: "Emergency Plumbing",
    slug: "emergency-plumbing",
    shortDesc:
      "Burst pipes, flooding, gas leaks — we respond day or night with no overtime charges.",
    icon: "🚨",
  },
  {
    title: "Drain Cleaning",
    slug: "drain-cleaning",
    shortDesc:
      "Slow drains, full clogs, and recurring backups cleared with professional equipment.",
    icon: "🔧",
  },
  {
    title: "Leak Detection",
    slug: "leak-detection",
    shortDesc:
      "Non-invasive leak detection using acoustic equipment and pressure testing.",
    icon: "💧",
  },
  {
    title: "Water Heater Repair",
    slug: "water-heater-repair",
    shortDesc:
      "Repair and replacement for tank and tankless water heaters, all major brands.",
    icon: "🔥",
  },
  {
    title: "Pipe Repair & Repiping",
    slug: "pipe-repair",
    shortDesc:
      "From a single joint to full house repiping — copper, PEX, and CPVC.",
    icon: "🪛",
  },
] as const;

export const SERVICE_AREAS = [
  "Austin",
  "Round Rock",
  "Cedar Park",
  "Georgetown",
  "Pflugerville",
  "Leander",
  "Manor",
  "Bee Cave",
  "Lakeway",
  "Buda",
  "Kyle",
  "San Marcos",
  "Hutto",
  "Taylor",
  "Bastrop",
] as const;

export const TESTIMONIALS = [
  {
    name: "Margaret H.",
    location: "Cedar Park, TX",
    rating: 5,
    text: "Called at 11 PM with a burst pipe under my kitchen sink. The technician was at my house within 45 minutes, had the problem fixed by 1 AM, and cleaned up completely before leaving. This is the kind of service you hope exists when everything goes wrong.",
    date: "March 2024",
  },
  {
    name: "David K.",
    location: "Round Rock, TX",
    rating: 5,
    text: "We've used Reliable Plumbing for three different jobs over the past four years — water heater replacement, sewer line inspection, and repiping our older home. Every time, straightforward pricing, no upselling, and the work holds up. They're our go-to.",
    date: "January 2024",
  },
  {
    name: "Sandra M.",
    location: "Austin, TX",
    rating: 5,
    text: "After two other plumbers told me I needed a full slab leak repair costing $6,000, Reliable Plumbing's team pinpointed the actual leak with their detection equipment and fixed it for under $900. I wish I'd called them first.",
    date: "November 2023",
  },
  {
    name: "Tom and Patricia W.",
    location: "Georgetown, TX",
    rating: 5,
    text: "The technician who came out was professional, on time, and explained everything before touching anything. The quote matched the final bill exactly. We've recommended Reliable Plumbing to four neighbors since.",
    date: "October 2023",
  },
] as const; 