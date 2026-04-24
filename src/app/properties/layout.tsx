import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Properties | Serendib Investment & Developers",
  description: "Explore our exclusive portfolio of luxury villas, modern apartments, and prime commercial lands across Sri Lanka.",
  keywords: "Luxury Villas Sri Lanka, Modern Apartments Colombo, Commercial Land, Sri Lanka Real Estate Portfolio",
};

export default function PropertiesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
