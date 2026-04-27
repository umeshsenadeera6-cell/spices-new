"use client";

import { motion } from "framer-motion";
import { Building2, Target, Eye, Users } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-44 pb-24">
      {/* Hero Section */}
      <section className="container mx-auto px-4 mb-24">
        <div className="text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-8"
          >
            <Building2 className="h-10 w-10 text-primary" />
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold text-emerald-950 mb-6"
          >
            Shaping the Future of <span className="text-primary">Sri Lankan Real Estate</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-emerald-800 leading-relaxed"
          >
            Serendib Investment & Developers is a premier real estate firm dedicated to transforming the property landscape of Sri Lanka. We specialize in luxury residential developments, prime commercial lands, and high-yield investment properties.
          </motion.p>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="bg-gray-50 py-24 border-y border-gray-100 relative overflow-hidden mb-24">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -50, rotateY: 15 }}
              whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
              whileHover={{ scale: 1.02, rotateY: 5, z: 20 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, type: "spring" }}
              style={{ transformStyle: "preserve-3d", perspective: 1000 }}
              className="glass p-10 rounded-3xl relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-bl-full -z-10" />
              <Eye className="h-12 w-12 text-primary mb-6" />
              <h3 className="text-3xl font-bold text-emerald-950 mb-4">Our Vision</h3>
              <p className="text-emerald-800 text-lg leading-relaxed">
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
              className="glass p-10 rounded-3xl relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-bl-full -z-10" />
              <Target className="h-12 w-12 text-primary mb-6" />
              <h3 className="text-3xl font-bold text-emerald-950 mb-4">Our Mission</h3>
              <p className="text-emerald-800 text-lg leading-relaxed">
                To deliver exceptional property solutions that maximize ROI for our investors while creating sustainable, state-of-the-art living and commercial spaces.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Users className="h-12 w-12 text-primary mx-auto mb-4" />
          <h2 className="text-3xl md:text-5xl font-bold text-emerald-950 mb-4">Leadership Team</h2>
          <p className="text-emerald-800 max-w-2xl mx-auto">
            Guided by industry veterans with decades of combined experience in real estate development and global investment strategies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            { name: "Shameen Chandrasekare", role: "Sales & Marketing Director", image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80" },
            { name: "Nivantha Perera", role: "Manager - Investment & Developers", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80" },

          ].map((member, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50, rotateX: 15, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0, scale: 1 }}
              whileHover={{ y: -10, rotateX: 5, rotateY: -5, z: 20, scale: 1.02 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              style={{ transformStyle: "preserve-3d", perspective: 1000 }}
              className="glass-card overflow-hidden text-center group"
            >
              <div className="h-80 overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h4 className="text-xl font-bold text-emerald-950 mb-1">{member.name}</h4>
                <p className="text-primary font-medium">{member.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
