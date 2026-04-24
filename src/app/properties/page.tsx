"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Search, MapPin, SlidersHorizontal } from "lucide-react";
import propertiesData from "@/data/properties.json";

export default function PropertiesPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterType, setFilterType] = useState("");
  const [filterLocation, setFilterLocation] = useState("");

  const filteredProperties = propertiesData.filter(property => {
    const matchesSearch = property.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = filterType ? property.type.toLowerCase() === filterType.toLowerCase() : true;
    const matchesLocation = filterLocation ? property.location.toLowerCase().includes(filterLocation.toLowerCase()) : true;
    return matchesSearch && matchesType && matchesLocation;
  });

  return (
    <div className="min-h-screen pt-32 pb-24">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-12">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
          >
            Explore <span className="text-primary">Properties</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-gray-600 max-w-2xl"
          >
            Discover our exclusive portfolio of luxury villas, modern apartments, and prime commercial lands across Sri Lanka.
          </motion.p>
        </div>

        {/* Filters */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="glass p-4 rounded-2xl mb-12 flex flex-col lg:flex-row gap-4"
        >
          <div className="flex-1 relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-600 h-5 w-5" />
            <input 
              type="text" 
              placeholder="Search properties..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-gray-100 border border-gray-200 rounded-xl py-3 pl-12 pr-4 text-gray-900 focus:outline-none focus:border-primary transition-colors"
            />
          </div>
          <div className="flex gap-4">
            <select 
              value={filterType}
              onChange={(e) => setFilterType(e.target.value)}
              className="bg-gray-100 border border-gray-200 rounded-xl py-3 px-4 text-gray-900 focus:outline-none focus:border-primary transition-colors appearance-none cursor-pointer"
            >
              <option value="" className="bg-white text-gray-900">All Types</option>
              <option value="Villa" className="bg-white text-gray-900">Villa</option>
              <option value="Apartment" className="bg-white text-gray-900">Apartment</option>
              <option value="Land" className="bg-white text-gray-900">Land</option>
              <option value="House" className="bg-white text-gray-900">House</option>
            </select>
            <select 
              value={filterLocation}
              onChange={(e) => setFilterLocation(e.target.value)}
              className="bg-gray-100 border border-gray-200 rounded-xl py-3 px-4 text-gray-900 focus:outline-none focus:border-primary transition-colors appearance-none cursor-pointer"
            >
              <option value="" className="bg-white text-gray-900">All Locations</option>
              <option value="Colombo" className="bg-white text-gray-900">Colombo</option>
              <option value="Negombo" className="bg-white text-gray-900">Negombo</option>
              <option value="Kandy" className="bg-white text-gray-900">Kandy</option>
              <option value="Galle" className="bg-white text-gray-900">Galle</option>
            </select>
            <button className="bg-gray-200 p-3 rounded-xl hover:bg-gray-300 transition-colors flex items-center justify-center">
              <SlidersHorizontal className="h-5 w-5 text-gray-900" />
            </button>
          </div>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProperties.length > 0 ? (
            filteredProperties.map((property, idx) => (
              <motion.div 
                key={property.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="glass-card group overflow-hidden"
              >
                <Link href={`/properties/${property.id}`}>
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
                    </div>
                    
                    <div className="mb-4">
                      <p className="text-primary text-xl font-bold">{property.price}</p>
                    </div>

                    <div className="flex gap-4 border-t border-gray-200 pt-4 text-sm text-gray-600">
                      {property.bedrooms > 0 && (
                        <span>{property.bedrooms} Beds</span>
                      )}
                      {property.bathrooms > 0 && (
                        <span>{property.bathrooms} Baths</span>
                      )}
                      <span>{property.size}</span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))
          ) : (
            <div className="col-span-full py-12 text-center text-gray-600">
              No properties found matching your criteria. Try adjusting your filters.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
