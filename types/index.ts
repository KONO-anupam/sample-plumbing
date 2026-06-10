export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  quote: string;
}

export interface NavLink {
  label: string;
  href: string;
}