import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { BUSINESS } from "@/lib/constants";

export const metadata: Metadata = {
  metadataBase: new URL("https://reliableplumbingco.com"),
  title: {
    default: `${BUSINESS.name} | Austin, TX Plumber`,
    template: `%s | ${BUSINESS.name}`,
  },
  description: BUSINESS.description,
  keywords: [
    "plumber Austin TX",
    "Austin plumbing company",
    "emergency plumber Austin",
    "drain cleaning Austin",
    "water heater repair Austin",
    "licensed plumber Austin Texas",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://reliableplumbingco.com",
    siteName: BUSINESS.name,
    title: `${BUSINESS.name} | Austin, TX Plumber`,
    description: BUSINESS.description,
  },
  twitter: {
    card: "summary",
    title: `${BUSINESS.name} | Austin, TX`,
    description: BUSINESS.description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-0 focus:left-0 bg-[#1a3a5c] text-white px-4 py-2 z-50 text-sm font-medium"
        >
          Skip to main content
        </a>
        <Navbar />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}