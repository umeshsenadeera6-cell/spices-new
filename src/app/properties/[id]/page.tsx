import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, MapPin, Bed, Bath, Maximize, CheckCircle, Phone, Mail } from "lucide-react";
import propertiesData from "@/data/properties.json";

export default async function PropertyDetails({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const resolvedParams = await params;
  const property = propertiesData.find((p) => p.id === resolvedParams.id);

  if (!property) {
    notFound();
  }

  return (
    <div className="min-h-screen pt-32 pb-24">
      <div className="container mx-auto px-4">
        <Link href="/properties" className="inline-flex items-center gap-2 text-gray-600 hover:text-primary transition-colors mb-8">
          <ArrowLeft className="h-4 w-4" /> Back to Properties
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Gallery placeholder */}
            <div className="relative h-[50vh] rounded-3xl overflow-hidden glass">
              <img 
                src={property.imageUrl} 
                alt={property.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 left-4 z-10 bg-primary text-gray-900 text-sm font-bold px-4 py-2 rounded-full uppercase tracking-wider">
                {property.status}
              </div>
            </div>

            {/* Title & Info */}
            <div>
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-2">{property.title}</h1>
                  <p className="text-gray-600 flex items-center gap-2 text-lg">
                    <MapPin className="h-5 w-5 text-primary" /> {property.location}
                  </p>
                </div>
                <div className="text-right hidden md:block">
                  <p className="text-3xl font-bold text-primary">{property.price}</p>
                </div>
              </div>
              <p className="text-3xl font-bold text-primary md:hidden mb-6">{property.price}</p>
              
              <div className="flex flex-wrap gap-6 py-6 border-y border-gray-200 my-8">
                {property.bedrooms > 0 && (
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center">
                      <Bed className="text-primary h-6 w-6" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Bedrooms</p>
                      <p className="text-gray-900 font-semibold">{property.bedrooms}</p>
                    </div>
                  </div>
                )}
                {property.bathrooms > 0 && (
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center">
                      <Bath className="text-primary h-6 w-6" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Bathrooms</p>
                      <p className="text-gray-900 font-semibold">{property.bathrooms}</p>
                    </div>
                  </div>
                )}
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center">
                    <Maximize className="text-primary h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Area Size</p>
                    <p className="text-gray-900 font-semibold">{property.size}</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Description</h3>
                <p className="text-gray-600 leading-relaxed text-lg">
                  {property.description}
                </p>
              </div>

              <div className="mt-12">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Property Features</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {property.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-3 text-gray-600">
                      <CheckCircle className="text-primary h-5 w-5" />
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Contact Card */}
            <div className="glass-card p-8 sticky top-32">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Interested in this property?</h3>
              <form className="space-y-4 mb-8">
                <div>
                  <input type="text" placeholder="Your Name" className="w-full bg-gray-100 border border-gray-200 rounded-xl py-3 px-4 text-gray-900 focus:outline-none focus:border-primary transition-colors" />
                </div>
                <div>
                  <input type="email" placeholder="Email Address" className="w-full bg-gray-100 border border-gray-200 rounded-xl py-3 px-4 text-gray-900 focus:outline-none focus:border-primary transition-colors" />
                </div>
                <div>
                  <input type="tel" placeholder="Phone Number" className="w-full bg-gray-100 border border-gray-200 rounded-xl py-3 px-4 text-gray-900 focus:outline-none focus:border-primary transition-colors" />
                </div>
                <div>
                  <textarea placeholder="Message" rows={4} className="w-full bg-gray-100 border border-gray-200 rounded-xl py-3 px-4 text-gray-900 focus:outline-none focus:border-primary transition-colors"></textarea>
                </div>
                <button type="button" className="w-full py-4 bg-primary text-gray-900 font-bold rounded-xl hover:bg-primary-dark transition-colors shadow-lg shadow-primary/30">
                  Request Information
                </button>
              </form>

              <div className="border-t border-gray-200 pt-6 space-y-4">
                <a href="tel:+94112345678" className="flex items-center gap-3 text-gray-600 hover:text-primary transition-colors">
                  <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
                    <Phone className="h-4 w-4" />
                  </div>
                  +94 11 234 5678
                </a>
                <a href="mailto:invest@serendib.lk" className="flex items-center gap-3 text-gray-600 hover:text-primary transition-colors">
                  <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
                    <Mail className="h-4 w-4" />
                  </div>
                  invest@serendib.lk
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
