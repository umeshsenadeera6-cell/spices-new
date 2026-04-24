import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/ui/WhatsAppButton";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Serendib Investment & Developers | Premium Real Estate in Sri Lanka",
  description: "Invest Smart. Build Your Future with Serendib. Premium property development, land sales, and real estate investment opportunities in Sri Lanka.",
  keywords: "Real Estate, Sri Lanka, Property Investment, Land Sales, Luxury Villas, Serendib",
  openGraph: {
    title: "Serendib Investment & Developers | Premium Real Estate in Sri Lanka",
    description: "Invest Smart. Build Your Future with Serendib. Premium property development, land sales, and real estate investment opportunities in Sri Lanka.",
    url: "https://serendib.lk",
    siteName: "Serendib Investment & Developers",
    images: [
      {
        url: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Serendib Real Estate Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Serendib Investment & Developers | Premium Real Estate in Sri Lanka",
    description: "Invest Smart. Build Your Future with Serendib. Premium property development, land sales, and real estate investment opportunities in Sri Lanka.",
    images: ["https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <Navbar />
        <main className="flex-1">{children}</main>
        <WhatsAppButton />
        <Footer />
      </body>
    </html>
  );
}
