import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Serendib Investment & Developers",
  description: "Learn about Serendib Investment & Developers, our vision, mission, and the leadership team shaping the future of Sri Lankan real estate.",
  keywords: "About Serendib, Real Estate Developers Sri Lanka, Property Development, Investment Leadership",
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
