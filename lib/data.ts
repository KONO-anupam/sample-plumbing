import type { Service, Testimonial, NavLink } from "@/types";

export const navLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const services: Service[] = [
  {
    id: "emergency-repairs",
    title: "Emergency Repairs",
    description:
      "Burst pipes, gas leaks, flooding — we respond around the clock. When it can't wait, we're the call you make.",
    icon: "",
  },
  {
    id: "pipe-installation",
    title: "Pipe Installation & Repiping",
    description:
      "From new construction runs to full residential repiping, every joint sealed to last another generation.",
    icon: "",
  },
  {
    id: "drain-cleaning",
    title: "Drain Cleaning",
    description:
      "Hydro-jetting, snaking, and camera inspection. We clear the blockage and diagnose the cause.",
    icon: "",
  },
  {
    id: "water-heater",
    title: "Water Heater Services",
    description:
      "Installation, repair, and replacement for tank and tankless systems. Hot water when you need it.",
    icon: "",
  },
  {
    id: "fixture-installation",
    title: "Fixture Installation & Repair",
    description:
      "Faucets, sinks, toilets, showers — installed right the first time, backed by our 45-year reputation.",
    icon: "",
  },
  {
    id: "whole-house-repiping",
    title: "Whole-House Repiping",
    description:
      "Complete copper or PEX repiping for older homes. The kind of job most contractors avoid — we've built a practice around it.",
    icon: "",
  },
];

export const testimonials: Testimonial[] = [
  {
    id: "alistair-finch",
    name: "Alistair Finch",
    location: "Pacific Heights, SF",
    quote:
      "They rerouted our entire basement plumbing in a day. Clean work, no drama, fair price. Third generation of craftsmen and it shows.",
  },
  {
    id: "leonie-allard",
    name: "Léonie Allard",
    location: "Mission District, SF",
    quote:
      "3am pipe burst on a Sunday. Starkwater picked up on the first ring and had someone here within the hour. I won't use anyone else.",
  },
  {
    id: "soren-petrova",
    name: "Soren Petrova",
    location: "Noe Valley, SF",
    quote:
      "We've been using Starkwater for every property we manage for twelve years. The consistency is remarkable — same quality every single time.",
  },
];