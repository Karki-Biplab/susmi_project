"use client";
import React from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Send } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="min-h-screen px-6 py-24 bg-gradient-to-br from-green-100 via-white to-yellow-100 text-gray-800">
      <motion.h1
        className="text-4xl md:text-5xl font-extrabold text-center text-green-600 mb-12"
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        Let's Connect 💬
      </motion.h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto items-start">
        {/* Info Cards */}
        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="bg-white shadow-md p-6 rounded-xl flex items-center gap-4">
            <Mail className="text-green-500 w-6 h-6" />
            <div>
              <h3 className="font-semibold">Email</h3>
              <p className="text-sm text-gray-600">yogisusmita99@gmail.com</p>
            </div>
          </div>

          <div className="bg-white shadow-md p-6 rounded-xl flex items-center gap-4">
            <MapPin className="text-green-500 w-6 h-6" />
            <div>
              <h3 className="font-semibold">Location</h3>
              <p className="text-sm text-gray-600">Queens, NY, USA</p>
            </div>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.form
          className="bg-white shadow-lg p-8 rounded-xl space-y-6"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div>
            <label className="block text-sm font-medium mb-1">Name</label>
            <input
              type="text"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
              placeholder="Your Name"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Message</label>
            <textarea
              rows="4"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
              placeholder="Write your message here..."
            />
          </div>

          <button
            type="submit"
            className="flex items-center gap-2 bg-green-500 text-white px-6 py-2 rounded-full hover:bg-green-600 transition"
          >
            <Send size={18} />
            Send Message
          </button>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;
