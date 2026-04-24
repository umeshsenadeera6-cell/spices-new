"use client";

import { motion } from "framer-motion";
import { TrendingUp, PieChart, Download, DollarSign, Globe, ShieldCheck } from "lucide-react";

export default function InvestorPage() {
  return (
    <div className="min-h-screen pt-32 pb-24">
      {/* Header */}
      <section className="container mx-auto px-4 mb-20 text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-bold text-gray-900 mb-6"
        >
          Invest in <span className="text-primary">Sri Lanka</span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-xl text-gray-600 max-w-3xl mx-auto"
        >
          Sri Lanka is emerging as one of the most lucrative real estate markets in South Asia. Partner with Serendib to secure high-yield assets in strategic development zones.
        </motion.p>
      </section>

      {/* Benefits Grid */}
      <section className="container mx-auto px-4 mb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: TrendingUp,
              title: "High Capital Appreciation",
              desc: "Prime locations in Colombo and coastal belts have consistently shown double-digit year-on-year capital growth."
            },
            {
              icon: DollarSign,
              title: "Attractive Rental Yields",
              desc: "Luxury apartments and vacation villas offer rental yields averaging 6-8%, outperforming many global markets."
            },
            {
              icon: Globe,
              title: "Foreign Investment Friendly",
              desc: "Favorable government policies and simplified legal frameworks make foreign property ownership seamless."
            },
            {
              icon: ShieldCheck,
              title: "Secure Investments",
              desc: "Serendib provides 100% legally vetted, clear title deeds ensuring your capital is protected."
            },
            {
              icon: PieChart,
              title: "Portfolio Diversification",
              desc: "Hedge against inflation by adding tangible, high-growth emerging market assets to your global portfolio."
            }
          ].map((benefit, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 50, rotateY: -15, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, rotateY: 0, scale: 1 }}
              whileHover={{ scale: 1.05, rotateY: 5, rotateX: 5, z: 20 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.1, type: "spring" }}
              style={{ transformStyle: "preserve-3d", perspective: 1000 }}
              className="glass p-8 rounded-2xl hover:bg-white/60 transition-colors"
            >
              <div className="w-14 h-14 bg-primary/20 rounded-xl flex items-center justify-center mb-6">
                <benefit.icon className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
              <p className="text-gray-600 leading-relaxed">{benefit.desc}</p>
            </motion.div>
          ))}

          {/* Calculator CTA - Optional UI feature requested */}
          <motion.div 
            initial={{ opacity: 0, y: 50, rotateX: 15 }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
            whileHover={{ scale: 1.02, rotateX: -5, z: 10 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.5, type: "spring" }}
            style={{ transformStyle: "preserve-3d", perspective: 1000 }}
            className="glass-card p-8 rounded-2xl flex flex-col justify-center items-center text-center bg-gradient-to-br from-navy-light/80 to-primary/20 border-primary/30"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-3">ROI Calculator</h3>
            <p className="text-gray-600 mb-6">Estimate your potential returns based on current market data.</p>
            <button className="px-6 py-3 bg-primary text-gray-900 font-bold rounded-full w-full shadow-lg shadow-primary/30">
              Launch Calculator
            </button>
          </motion.div>
        </div>
      </section>

      {/* Downloads Section */}
      <section className="bg-white py-20 border-y border-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Investor Resources</h2>
            <p className="text-gray-600">Download our latest market reports and project brochures.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="glass p-6 rounded-2xl flex items-center justify-between group cursor-pointer hover:border-primary/50 transition-colors">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                  <Download className="text-primary h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-gray-900 font-bold group-hover:text-primary transition-colors">Market Report Q3 2026</h4>
                  <p className="text-gray-600 text-sm">PDF • 4.2 MB</p>
                </div>
              </div>
              <button className="text-gray-600 hover:text-gray-900 transition-colors">
                Download
              </button>
            </div>
            
            <div className="glass p-6 rounded-2xl flex items-center justify-between group cursor-pointer hover:border-primary/50 transition-colors">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                  <Download className="text-primary h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-gray-900 font-bold group-hover:text-primary transition-colors">Luxury Projects Brochure</h4>
                  <p className="text-gray-600 text-sm">PDF • 8.5 MB</p>
                </div>
              </div>
              <button className="text-gray-600 hover:text-gray-900 transition-colors">
                Download
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
