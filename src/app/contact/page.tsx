"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Send } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="min-h-screen pt-32 pb-24 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-40 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold text-emerald-950 mb-6"
          >
            Get in <span className="text-primary">Touch</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-emerald-800 max-w-2xl mx-auto"
          >
            Ready to secure your next investment? Our expert advisors are here to guide you through every step.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50, rotateY: 15 }}
            animate={{ opacity: 1, x: 0, rotateY: 0 }}
            transition={{ duration: 0.8, delay: 0.2, type: "spring" }}
            style={{ transformStyle: "preserve-3d", perspective: 1000 }}
            className="space-y-8"
          >
            <div className="glass p-8 rounded-3xl">
              <h3 className="text-2xl font-bold text-emerald-950 mb-8">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center shrink-0">
                    <MapPin className="text-primary h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-emerald-950 font-semibold mb-1">Head Office</h4>
                    <p className="text-emerald-800 leading-relaxed">
                      No 87,Pannipitiya Road<br />
                      Battaramulla,<br />
                      Sri Lanka.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center shrink-0">
                    <Phone className="text-primary h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-emerald-950 font-semibold mb-1">Phone</h4>
                    <p className="text-emerald-800">Main: +94 74 411 0414</p>
                    <p className="text-emerald-800">Sales: +94 74 411 0414</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center shrink-0">
                    <Mail className="text-primary h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-emerald-950 font-semibold mb-1">Email</h4>
                    <p className="text-emerald-800">invest@serendib.lk</p>
                    <p className="text-emerald-800">support@serendib.lk</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="h-64 rounded-3xl overflow-hidden glass relative">
              <div className="absolute inset-0 bg-white text-emerald-950/80 flex flex-col items-center justify-center z-10 text-center px-4">
                <MapPin className="text-primary h-8 w-8 mb-2" />
                <p className="text-emerald-950 font-semibold">Google Maps Integration</p>
                <p className="text-sm text-emerald-800">Requires API Key</p>
              </div>
              <img
                src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=800&q=80"
                alt="Map Background"
                className="w-full h-full object-cover opacity-30 blur-sm"
              />
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50, rotateY: -15 }}
            animate={{ opacity: 1, x: 0, rotateY: 0 }}
            transition={{ duration: 0.8, delay: 0.3, type: "spring" }}
            style={{ transformStyle: "preserve-3d", perspective: 1000 }}
          >
            <div className="glass-card p-8 md:p-10 rounded-3xl h-full">
              <h3 className="text-2xl font-bold text-emerald-950 mb-6">Send us a Message</h3>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-emerald-800 mb-2">First Name</label>
                    <input
                      type="text"
                      className="w-full bg-gray-100 border border-gray-200 rounded-xl py-3 px-4 text-emerald-950 focus:outline-none focus:border-primary transition-colors"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-emerald-800 mb-2">Last Name</label>
                    <input
                      type="text"
                      className="w-full bg-gray-100 border border-gray-200 rounded-xl py-3 px-4 text-emerald-950 focus:outline-none focus:border-primary transition-colors"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-emerald-800 mb-2">Email Address</label>
                  <input
                    type="email"
                    className="w-full bg-gray-100 border border-gray-200 rounded-xl py-3 px-4 text-emerald-950 focus:outline-none focus:border-primary transition-colors"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-emerald-800 mb-2">Subject</label>
                  <select className="w-full bg-gray-100 border border-gray-200 rounded-xl py-3 px-4 text-emerald-950 focus:outline-none focus:border-primary transition-colors appearance-none cursor-pointer">
                    <option value="" className="bg-white text-emerald-950">Select an inquiry type</option>
                    <option value="buy" className="bg-white text-emerald-950">Buying Property</option>
                    <option value="invest" className="bg-white text-emerald-950">Investment Consultation</option>
                    <option value="sell" className="bg-white text-emerald-950">Selling Property</option>
                    <option value="other" className="bg-white text-emerald-950">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-emerald-800 mb-2">Message</label>
                  <textarea
                    rows={5}
                    className="w-full bg-gray-100 border border-gray-200 rounded-xl py-3 px-4 text-emerald-950 focus:outline-none focus:border-primary transition-colors resize-none"
                    placeholder="How can we help you?"
                  ></textarea>
                </div>

                <button
                  type="button"
                  className="w-full py-4 bg-primary text-emerald-950 font-bold rounded-xl hover:bg-primary-dark transition-colors shadow-lg shadow-primary/30 flex items-center justify-center gap-2"
                >
                  Send Message <Send className="h-4 w-4" />
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
