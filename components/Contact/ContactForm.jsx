"use client";

import { useState } from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FiTarget, FiSmile, FiClock } from "react-icons/fi";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    message: "",
    consent: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <section className="bg-gradient-to-r from-purple-600 via-pink-600 to-fuchsia-600 py-20 px-5 md:px-16 text-white">
      <div className="max-w-7xl mx-auto grid md:grid-cols-10 gap-16 items-start">
        {/* LEFT SIDE INFO */}
        <div className="space-y-10 md:col-span-4">
          <div className="flex items-start gap-5">
            <div className="bg-white/20 p-3 flex items-center justify-center rounded-full text-xl">
              <FiClock />
            </div>
            <div>
              <h3 className="text-xl font-bold">Let's Connect</h3>
              <p className="text-gray-200">
                Let’s talk about how we can help you achieve your goals.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-5">
            <div className="bg-white/20 p-3 flex items-center justify-center rounded-full text-xl">
              <FiTarget />
            </div>
            <div>
              <h3 className="text-xl font-bold">Personalized Approach</h3>
              <p className="text-gray-200">
                Engage directly with the specialists who are skilled in your
                domain.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-5">
            <div className="bg-white/20 p-3 flex items-center justify-center rounded-full text-xl">
              <FiSmile />
            </div>
            <div>
              <h3 className="text-xl font-bold">Collaborate to Innovate</h3>
              <p className="text-gray-200">
                We transform your idea into viable solutions, overcoming
                challenges to drive success.
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE FORM */}
        <div className=" md:col-span-6 bg-white rounded-2xl shadow-2xl text-gray-800 overflow-hidden flex flex-col md:flex-row">
          {/* Left Form Fields */}
          <div className="flex-1 p-8 w-[60%]">
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Full Name*"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email*"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                required
              />
              <input
                type="text"
                name="company"
                placeholder="Company*"
                value={formData.company}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                required
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone number"
                value={formData.phone}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
              />
              <textarea
                name="message"
                placeholder="Message*"
                value={formData.message}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                rows="4"
                required
              ></textarea>

              <label className="flex items-start space-x-2 text-xs text-gray">
                <input
                  type="checkbox"
                  name="consent"
                  checked={formData.consent}
                  onChange={handleChange}
                  className="mt-1"
                />
                <span>
                  Yes, I am OK to receive further communication over my details
                  shared here. Refer{" "}
                  <a href="#" className="text-pink-600 underline">
                    Privacy Policy
                  </a>{" "}
                  for more info.
                </span>
              </label>

              <button
                type="submit"
                className="px-5 py-2 rounded-md bg-gradient-to-r from-purple-700 to-pink-600 text-white font-semibold hover:opacity-90"
              >
                Submit
              </button>
            </form>
          </div>

          {/* Right Info Section */}
          <div className="w-full md:w-[40%] bg-gradient-to-b from-pink-700 to-fuchsia-700 text-white p-8 flex flex-col justify-between">
            <div>
              <h3 className="font-bold mb-4">Connect With Us</h3>

              <div className="space-y-3 text-sm">
                <div className="flex items-center gap-3">
                  <FaPhoneAlt className="text-white" />
                  <span>US Toll Free : 1-877-RISHABH</span>
                </div>
                <p>USA : +1-201-484-7302</p>
                <p>INDIA : +91 8511122697</p>
                <p>UK : +44 2070318422</p>
                <p>AU : +61 2 8311 1544</p>
              </div>

              <div className="mt-6 flex items-center gap-3 text-sm">
                <FaEnvelope className="text-white" />
                <span>Email us: sales@rishabhsoft.com</span>
              </div>
            </div>

            <div className="mt-8">
              <h4 className="font-semibold text-sm mb-3">Follow us</h4>
              <div className="flex gap-3">
                <a className="w-8 h-8 flex items-center justify-center rounded-full bg-white/20 hover:bg-white/40">
                  <FaFacebookF />
                </a>
                <a className="w-8 h-8 flex items-center justify-center rounded-full bg-white/20 hover:bg-white/40">
                  <FaInstagram />
                </a>
                <a className="w-8 h-8 flex items-center justify-center rounded-full bg-white/20 hover:bg-white/40">
                  <FaXTwitter />
                </a>
                <a className="w-8 h-8 flex items-center justify-center rounded-full bg-white/20 hover:bg-white/40">
                  <FaLinkedinIn />
                </a>
                <a className="w-8 h-8 flex items-center justify-center rounded-full bg-white/20 hover:bg-white/40">
                  <FaYoutube />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
