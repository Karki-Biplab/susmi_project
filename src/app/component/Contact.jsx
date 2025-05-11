"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Send } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [formStatus, setFormStatus] = useState({
    message: "",
    isSubmitting: false,
    isSuccess: false,
    isError: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmit = async (event) => {
    event.preventDefault();

    setFormStatus({
      message: "Sending...",
      isSubmitting: true,
      isSuccess: false,
      isError: false,
    });

    const payload = new FormData();
    payload.append("access_key", "cc94ff1f-52db-458c-b009-a7e7a281b48e");
    payload.append("name", formData.name);
    payload.append("email", formData.email);
    payload.append("message", formData.message);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: payload,
      });

      const data = await response.json();

      if (data.success) {
        setFormStatus({
          message: "Your Message Sent Successfully ✅",
          isSubmitting: false,
          isSuccess: true,
          isError: false,
        });
        setFormData({ name: "", email: "", message: "" });
      } else {
        setFormStatus({
          message: data.message || "Something went wrong",
          isSubmitting: false,
          isSuccess: false,
          isError: true,
        });
      }
    } catch (error) {
      console.error("Error:", error);
      setFormStatus({
        message: "An error occurred. Please try again later.",
        isSubmitting: false,
        isSuccess: false,
        isError: true,
      });
    }

    setTimeout(() => {
      setFormStatus({
        message: "",
        isSubmitting: false,
        isSuccess: false,
        isError: false,
      });
    }, 3000);
  };

  return (
    <section
      id="contact"
      className="min-h-screen px-6 py-24 bg-gradient-to-br from-green-100 via-white to-yellow-100 text-gray-800"
    >
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
          onSubmit={onSubmit}
          className="bg-white shadow-lg p-8 rounded-xl space-y-6"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div>
            <label className="block text-sm font-medium mb-1">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
              placeholder="Your Name"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="4"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
              placeholder="Write your message here..."
            />
          </div>

          <button
            type="submit"
            disabled={formStatus.isSubmitting}
            className={`flex items-center gap-2 px-6 py-2 rounded-full transition text-white
              ${formStatus.isSubmitting ? "bg-green-400 cursor-not-allowed" : "bg-green-500 hover:bg-green-600"}`}
          >
            {formStatus.isSubmitting ? "Sending..." : (
              <>
                <Send size={18} />
                Send Message
              </>
            )}
          </button>

          {formStatus.message && (
            <p className={`text-sm text-center mt-4 font-medium ${
              formStatus.isSuccess ? "text-green-600" :
              formStatus.isError ? "text-red-600" :
              "text-yellow-600"
            }`}>
              {formStatus.message}
            </p>
          )}
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;
