import Link from "next/link";
import { Building2, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-100 pt-16 pb-8 mt-20 relative overflow-hidden">
      {/* Decorative gradient blur */}
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-primary/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-500/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Col */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <Building2 className="text-primary h-8 w-8" />
              <span className="text-xl font-bold tracking-wider text-gray-900">
                SERENDIB
              </span>
            </Link>
            <p className="text-gray-600 text-sm leading-relaxed">
              Premium property development, land sales, and real estate investment opportunities across Sri Lanka. Invest smart and build your future.
            </p>
            <div className="flex gap-4 pt-2">
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-gray-900 font-semibold mb-6 text-lg">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/properties" className="text-gray-600 hover:text-primary transition-colors text-sm">Properties</Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-600 hover:text-primary transition-colors text-sm">About Us</Link>
              </li>
              <li>
                <Link href="/investor" className="text-gray-600 hover:text-primary transition-colors text-sm">Investor Relations</Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-600 hover:text-primary transition-colors text-sm">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-gray-900 font-semibold mb-6 text-lg">Services</h4>
            <ul className="space-y-3">
              <li className="text-gray-600 text-sm">Luxury Villas</li>
              <li className="text-gray-600 text-sm">Commercial Land</li>
              <li className="text-gray-600 text-sm">Property Management</li>
              <li className="text-gray-600 text-sm">Investment Consulting</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-gray-900 font-semibold mb-6 text-lg">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm text-gray-600">
                <MapPin className="h-5 w-5 text-primary shrink-0" />
                <span>Level 35, World Trade Center, Colombo 01, Sri Lanka</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-gray-600">
                <Phone className="h-5 w-5 text-primary shrink-0" />
                <span>+94 11 234 5678</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-gray-600">
                <Mail className="h-5 w-5 text-primary shrink-0" />
                <span>invest@serendib.lk</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Serendib Investment & Developers. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-gray-500">
            <Link href="#" className="hover:text-gray-900 transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-gray-900 transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
