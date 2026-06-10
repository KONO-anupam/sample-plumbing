import type { Metadata } from "next";
import HeroSection from "@/components/HeroSection";
import ServicesGrid from "@/components/ServicesGrid";
import LegacySection from "@/components/LegacySection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CTABanner from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "Starkwater Plumbing — San Francisco Since 1978",
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ServicesGrid />
      <LegacySection />
      <TestimonialsSection />
      <CTABanner />
    </>
  );
}