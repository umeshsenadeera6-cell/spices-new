import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Investor Relations | Serendib Investment & Developers",
  description: "Partner with Serendib to secure high-yield real estate assets in Sri Lanka. Explore high capital appreciation and attractive rental yields.",
  keywords: "Invest in Sri Lanka, Property Investment, High Yield Real Estate, Foreign Investment Sri Lanka",
};

export default function InvestorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
