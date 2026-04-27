"use client";

import { motion } from "framer-motion";
import { Building2, Target, Eye, Users } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-24 md:pt-32 pb-12 md:pb-16">
      {/* Hero Section */}
      <section className="container mx-auto px-4 mb-10 md:mb-16">
        <div className="text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6"
          >
            <Building2 className="h-8 w-8 text-primary" />
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold text-emerald-950 mb-4"
          >
            Shaping the Future of <span className="text-primary">Sri Lankan Real Estate</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-base md:text-lg text-emerald-800 leading-relaxed"
          >
            Serendib Investment & Developers is a premier real estate firm dedicated to transforming the property landscape of Sri Lanka. We specialize in luxury residential developments, prime commercial lands, and high-yield investment properties.
          </motion.p>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="bg-gray-50 py-10 md:py-16 border-y border-gray-100 relative overflow-hidden mb-10 md:mb-16">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -50, rotateY: 15 }}
              whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
              whileHover={{ scale: 1.02, rotateY: 5, z: 20 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, type: "spring" }}
              style={{ transformStyle: "preserve-3d", perspective: 1000 }}
              className="glass p-8 rounded-2xl relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-bl-full -z-10" />
              <Eye className="h-10 w-10 text-primary mb-4" />
              <h3 className="text-2xl font-bold text-emerald-950 mb-3">Our Vision</h3>
              <p className="text-emerald-800 leading-relaxed">
                To be the most trusted and innovative real estate developer in South Asia, setting global standards in luxury, sustainability, and investment value.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50, rotateY: -15 }}
              whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
              whileHover={{ scale: 1.02, rotateY: -5, z: 20 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, type: "spring", delay: 0.2 }}
              style={{ transformStyle: "preserve-3d", perspective: 1000 }}
              className="glass p-8 rounded-2xl relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-bl-full -z-10" />
              <Target className="h-10 w-10 text-primary mb-4" />
              <h3 className="text-2xl font-bold text-emerald-950 mb-3">Our Mission</h3>
              <p className="text-emerald-800 leading-relaxed">
                To deliver exceptional property solutions that maximize ROI for our investors while creating sustainable, state-of-the-art living and commercial spaces.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="container mx-auto px-4 pb-8">
        <div className="text-center mb-12">
          <Users className="h-10 w-10 text-primary mx-auto mb-3" />
          <h2 className="text-3xl md:text-4xl font-bold text-emerald-950 mb-3">Leadership Team</h2>
          <p className="text-emerald-800 max-w-xl mx-auto">
            Guided by industry veterans with decades of combined experience in real estate development and global investment strategies.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {[
            { name: "Shameen Chandrasekare", role: "Sales & Marketing Director", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80" },
            { name: "Nivantha Perera", role: "Manager - Investment & Developers", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80" },

          ].map((member, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30, rotateX: 10, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0, scale: 1 }}
              whileHover={{ y: -5, rotateX: 2, z: 10 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              style={{ transformStyle: "preserve-3d", perspective: 1000 }}
              className="glass-card overflow-hidden text-center group rounded-2xl"
            >
              <div className="h-72 overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-5">
                <h4 className="text-lg font-bold text-emerald-950 mb-1">{member.name}</h4>
                <p className="text-primary text-sm font-medium">{member.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
