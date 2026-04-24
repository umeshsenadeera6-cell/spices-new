"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Search, MapPin, Building, Shield, TrendingUp, Award, Quote } from "lucide-react";
import propertiesData from "@/data/properties.json";

export default function Home() {
  const featuredProperties = propertiesData.filter(p => p.featured);

  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Video/Image Placeholder */}
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center"
          style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1920&q=80")' }}
        >
          <div className="absolute inset-0 bg-background/70 backdrop-blur-[2px]"></div>
          {/* Luxury Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
        </div>

        <div className="container relative z-10 mx-auto px-4 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
          >
            Invest Smart. <br className="hidden md:block"/>
            <span className="text-gradient">Build Your Future</span> <br className="hidden md:block"/>
            with Serendib
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-white mb-10 max-w-2xl mx-auto"
          >
            Premium property development, land sales, and exclusive real estate investment opportunities in Sri Lanka designed for maximum ROI.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link href="/properties" className="px-8 py-4 bg-primary text-gray-900 font-bold rounded-full hover:bg-primary-dark transition-colors shadow-xl shadow-primary/30 flex items-center justify-center gap-2">
              View Properties <ArrowRight className="h-5 w-5" />
            </Link>
            <Link href="/contact" className="px-8 py-4 glass text-white font-bold rounded-full hover:bg-gray-200 hover:text-gray-900 transition-colors flex items-center justify-center">
              Book a Consultation
            </Link>
          </motion.div>
        </div>

        {/* Floating Search Bar */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 w-11/12 max-w-5xl z-20"
        >
          <div className="glass rounded-full p-4 flex flex-col md:flex-row gap-4">
            <div className="flex-1 flex items-center bg-gray-100 rounded-full px-6 py-3 border border-gray-200 focus-within:border-primary/50 transition-colors">
              <MapPin className="text-primary h-5 w-5 mr-3" />
              <input type="text" placeholder="Location (e.g. Colombo)" className="bg-transparent border-none outline-none text-gray-900 w-full placeholder:text-gray-600" />
            </div>
            <div className="flex-1 flex items-center bg-gray-100 rounded-full px-6 py-3 border border-gray-200 focus-within:border-primary/50 transition-colors">
              <Building className="text-primary h-5 w-5 mr-3" />
              <select className="bg-transparent border-none outline-none text-gray-900 w-full appearance-none cursor-pointer">
                <option value="" className="bg-white text-gray-900 text-gray-900">Property Type</option>
                <option value="land" className="bg-white text-gray-900 text-gray-900">Land</option>
                <option value="house" className="bg-white text-gray-900 text-gray-900">House</option>
                <option value="apartment" className="bg-white text-gray-900 text-gray-900">Apartment</option>
              </select>
            </div>
            <div className="flex-1 flex items-center bg-gray-100 rounded-full px-6 py-3 border border-gray-200 focus-within:border-primary/50 transition-colors">
              <span className="text-primary font-bold mr-3">LKR</span>
              <select className="bg-transparent border-none outline-none text-gray-900 w-full appearance-none cursor-pointer">
                <option value="" className="bg-white text-gray-900 text-gray-900">Price Range</option>
                <option value="0-50m" className="bg-white text-gray-900 text-gray-900">Under 50M</option>
                <option value="50m-100m" className="bg-white text-gray-900 text-gray-900">50M - 100M</option>
                <option value="100m+" className="bg-white text-gray-900 text-gray-900">100M+</option>
              </select>
            </div>
            <button className="bg-primary text-gray-900 p-4 rounded-full hover:bg-primary-dark transition-colors shrink-0">
              <Search className="h-5 w-5" />
            </button>
          </div>
        </motion.div>
      </section>

      {/* Featured Properties */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-sm text-primary font-bold tracking-widest uppercase mb-2">Exclusive Portfolio</h2>
              <h3 className="text-3xl md:text-5xl font-bold text-gray-900">Featured Properties</h3>
            </div>
            <Link href="/properties" className="hidden md:flex items-center gap-2 text-gray-600 hover:text-primary transition-colors">
              View All <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProperties.map((property, idx) => (
              <motion.div 
                key={property.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="glass-card group overflow-hidden cursor-pointer"
              >
                <div className="relative h-64 overflow-hidden">
                  <div className="absolute top-4 left-4 z-10 bg-primary text-gray-900 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                    {property.status}
                  </div>
                  <img 
                    src={property.imageUrl} 
                    alt={property.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-80"></div>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h4 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-primary transition-colors">{property.title}</h4>
                      <p className="text-gray-600 text-sm flex items-center gap-1">
                        <MapPin className="h-3 w-3" /> {property.location}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-primary font-bold">{property.price}</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4 border-t border-gray-200 pt-4 mt-4 text-sm text-gray-600">
                    {property.bedrooms > 0 && (
                      <span>{property.bedrooms} Beds</span>
                    )}
                    {property.bathrooms > 0 && (
                      <span>{property.bathrooms} Baths</span>
                    )}
                    <span>{property.size}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-gray-50 border-y border-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-sm text-primary font-bold tracking-widest uppercase mb-2">The Serendib Advantage</h2>
            <h3 className="text-3xl md:text-5xl font-bold text-gray-900">Why Choose Us</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="glass p-8 rounded-2xl text-center hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-6">
                <Shield className="h-8 w-8 text-primary" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-4">Trust & Transparency</h4>
              <p className="text-gray-600">100% clear deeds, legally vetted properties, and complete transparency in every transaction.</p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="glass p-8 rounded-2xl text-center hover:-translate-y-2 transition-transform duration-300 relative overflow-hidden"
            >
              <div className="absolute inset-0 border-2 border-primary/20 rounded-2xl"></div>
              <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="h-8 w-8 text-primary" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-4">High ROI Potential</h4>
              <p className="text-gray-600">Strategically selected locations in rapid development zones ensuring maximum return on your investment.</p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="glass p-8 rounded-2xl text-center hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-6">
                <Award className="h-8 w-8 text-primary" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-4">Premium Experience</h4>
              <p className="text-gray-600">From luxury villas to smart apartments, we deliver world-class infrastructure and modern amenities.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1920&q=80" 
            alt="Luxury Interior" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-background/80"></div>
        </div>
        
        <div className="container relative z-10 mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto glass p-12 rounded-3xl border border-primary/20"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Ready to Build Your Portfolio?</h2>
            <p className="text-white mb-8 text-lg">
              Speak with our investment advisors to discover exclusive opportunities tailored to your financial goals.
            </p>
            <Link href="/contact" className="inline-block px-10 py-4 bg-primary text-gray-900 font-bold rounded-full hover:bg-primary-dark transition-colors shadow-xl shadow-primary/30">
              Schedule a Strategy Session
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
