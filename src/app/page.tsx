"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Search, MapPin, Building, Shield, TrendingUp, Award, Quote } from "lucide-react";
import propertiesData from "@/data/properties.json";
import HeroCarousel from "@/components/ui/HeroCarousel";

export default function Home() {
  const featuredProperties = propertiesData.filter(p => p.featured);

  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <HeroCarousel />

        <div className="container relative z-10 mx-auto px-4 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 50, rotateX: -30, z: -100 }}
            animate={{ opacity: 1, y: 0, rotateX: 0, z: 0 }}
            transition={{ duration: 1, type: "spring", bounce: 0.4 }}
            style={{ perspective: 1000 }}
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
            className="flex flex-col sm:flex-row gap-6 justify-center"
          >
            <Link href="/properties" className="btn-primary">
              View Properties <ArrowRight className="h-5 w-5" />
            </Link>
            <Link href="/contact" className="px-8 py-4 bg-white/10 backdrop-blur-md border border-white/30 text-white font-semibold rounded-full hover:bg-white/20 transition-all duration-300 flex items-center justify-center">
              Book a Consultation
            </Link>
          </motion.div>
        </div>

        {/* Floating Search Bar */}
        <motion.div 
          initial={{ opacity: 0, y: 80, rotateX: 20 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          whileHover={{ y: -5, scale: 1.01, rotateX: 2 }}
          transition={{ duration: 0.8, delay: 0.6, type: "spring" }}
          style={{ perspective: 1000 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 w-11/12 max-w-5xl z-20"
        >
          <div className="glass rounded-full p-2.5 flex flex-col md:flex-row gap-2.5">
            <div className="flex-1 flex items-center bg-white rounded-full px-6 py-3.5 border border-gray-200 focus-within:border-primary/50 focus-within:ring-2 focus-within:ring-primary/20 transition-all shadow-sm">
              <MapPin className="text-primary h-5 w-5 mr-3" />
              <input type="text" placeholder="Location (e.g. Colombo)" className="bg-transparent border-none outline-none text-emerald-950 w-full placeholder:text-emerald-600/80 font-medium" />
            </div>
            <div className="flex-1 flex items-center bg-white rounded-full px-6 py-3.5 border border-gray-200 focus-within:border-primary/50 focus-within:ring-2 focus-within:ring-primary/20 transition-all shadow-sm">
              <Building className="text-primary h-5 w-5 mr-3" />
              <select className="bg-transparent border-none outline-none text-emerald-950 w-full appearance-none cursor-pointer font-medium">
                <option value="" className="text-emerald-700">Property Type</option>
                <option value="land" className="text-emerald-950">Land</option>
                <option value="house" className="text-emerald-950">House</option>
                <option value="apartment" className="text-emerald-950">Apartment</option>
              </select>
            </div>
            <div className="flex-1 flex items-center bg-white rounded-full px-6 py-3.5 border border-gray-200 focus-within:border-primary/50 focus-within:ring-2 focus-within:ring-primary/20 transition-all shadow-sm">
              <span className="text-primary font-bold mr-3">LKR</span>
              <select className="bg-transparent border-none outline-none text-emerald-950 w-full appearance-none cursor-pointer font-medium">
                <option value="" className="text-emerald-700">Price Range</option>
                <option value="0-50m" className="text-emerald-950">Under 50M</option>
                <option value="50m-100m" className="text-emerald-950">50M - 100M</option>
                <option value="100m+" className="text-emerald-950">100M+</option>
              </select>
            </div>
            <button className="bg-primary text-white w-[54px] h-[54px] flex items-center justify-center rounded-full hover:bg-primary-dark transition-all duration-300 shadow-lg shadow-primary/30 shrink-0 hover:-translate-y-0.5">
              <Search className="h-6 w-6" />
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
              <h3 className="text-3xl md:text-5xl font-bold text-emerald-950">Featured Properties</h3>
            </div>
            <Link href="/properties" className="hidden md:flex items-center gap-2 text-emerald-800 hover:text-primary transition-colors">
              View All <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProperties.map((property, idx) => (
              <motion.div 
                key={property.id}
                initial={{ opacity: 0, y: 50, rotateX: 15, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0, scale: 1 }}
                whileHover={{ y: -10, rotateX: 5, rotateY: -5, z: 20, scale: 1.02 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                style={{ transformStyle: "preserve-3d", perspective: 1000 }}
                className="glass-card group overflow-hidden cursor-pointer"
              >
                <div className="relative h-64 overflow-hidden">
                  <div className="absolute top-4 left-4 z-10 bg-primary text-emerald-950 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                    {property.status}
                  </div>
                  <img 
                    src={property.images ? property.images[0] : property.imageUrl} 
                    alt={property.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-80"></div>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h4 className="text-xl font-bold text-emerald-950 mb-1 group-hover:text-primary transition-colors">{property.title}</h4>
                      <p className="text-emerald-800 text-sm flex items-center gap-1">
                        <MapPin className="h-3 w-3" /> {property.location}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-primary font-bold">{property.price}</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4 border-t border-gray-200 pt-4 mt-4 text-sm text-emerald-800">
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
            <h3 className="text-3xl md:text-5xl font-bold text-emerald-950">Why Choose Us</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              initial={{ opacity: 0, scale: 0.8, rotateY: 30 }}
              whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
              whileHover={{ scale: 1.05, rotateY: 10, z: 30 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, type: "spring" }}
              style={{ transformStyle: "preserve-3d", perspective: 1000 }}
              className="glass-card p-10 text-center"
            >
              <div className="w-20 h-20 rounded-2xl bg-emerald-50 border border-emerald-100 flex items-center justify-center mx-auto mb-8 shadow-sm">
                <Shield className="h-10 w-10 text-primary" />
              </div>
              <h4 className="text-2xl font-bold text-emerald-950 mb-4">Trust & Transparency</h4>
              <p className="text-emerald-800 leading-relaxed">100% clear deeds, legally vetted properties, and complete transparency in every transaction.</p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.8, rotateY: 30 }}
              whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
              whileHover={{ scale: 1.05, rotateY: 10, z: 30 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.2, type: "spring" }}
              style={{ transformStyle: "preserve-3d", perspective: 1000 }}
              className="glass-card p-10 text-center relative overflow-hidden"
            >
              <div className="w-20 h-20 rounded-2xl bg-emerald-50 border border-emerald-100 flex items-center justify-center mx-auto mb-8 shadow-sm">
                <TrendingUp className="h-10 w-10 text-primary" />
              </div>
              <h4 className="text-2xl font-bold text-emerald-950 mb-4">High ROI Potential</h4>
              <p className="text-emerald-800 leading-relaxed">Strategically selected locations in rapid development zones ensuring maximum return on your investment.</p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.8, rotateY: 30 }}
              whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
              whileHover={{ scale: 1.05, rotateY: 10, z: 30 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.4, type: "spring" }}
              style={{ transformStyle: "preserve-3d", perspective: 1000 }}
              className="glass-card p-10 text-center"
            >
              <div className="w-20 h-20 rounded-2xl bg-emerald-50 border border-emerald-100 flex items-center justify-center mx-auto mb-8 shadow-sm">
                <Award className="h-10 w-10 text-primary" />
              </div>
              <h4 className="text-2xl font-bold text-emerald-950 mb-4">Premium Experience</h4>
              <p className="text-emerald-800 leading-relaxed">From luxury villas to smart apartments, we deliver world-class infrastructure and modern amenities.</p>
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
          <div className="absolute inset-0 bg-emerald-950/90"></div>
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
            <Link href="/contact" className="btn-primary mx-auto inline-flex">
              Schedule a Strategy Session
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
