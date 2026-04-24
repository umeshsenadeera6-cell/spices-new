import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Serendib Investment & Developers",
  description: "Get in touch with our expert real estate advisors. We are here to guide you through your next property investment in Sri Lanka.",
  keywords: "Contact Serendib, Real Estate Inquiry Sri Lanka, Property Investment Contact, Real Estate Advisors",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
