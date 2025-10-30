"use client";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaEnvelope } from "react-icons/fa";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#1B1B1B] text-gray-300 px-6 md:px-12 pt-16 pb-8">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 md:gap-0 items-start pb-12 border-b border-gray-700">
        {/* Left Side */}
        <div>
          <Image 
          src="https://res.cloudinary.com/diatamf9x/image/upload/v1761819230/Copy_of_Black_and_White_Minimalist_Music_Studio_Logo_abbxvv.png" 
          alt="Logo" 
          width={200} 
          height={100}
          className="" />
          <p className="text-gray-400 text-base leading-relaxed max-w-sm">
            Building ideas that inspire<br />growth and impact.
          </p>
        </div>

        {/* Right Side */}
        <div className="flex flex-col md:items-end">
            <div className="flex  w-full md:w-[330px]">
                <p className="text-gray-400 mb-3 text-base">
                    Sign Up for our <span className="text-white font-semibold">Newsletter</span>
                </p>
            </div>

          {/* Newsletter Input */}
          <div className="flex items-center bg-white rounded-md overflow-hidden w-full md:w-[330px]">
            <input
              type="email"
              placeholder="Enter Your Email"
              className="flex-grow px-4 py-2 text-black outline-none placeholder-gray-500 text-sm"
            />
            <button className="bg-black text-white px-4 py-3 flex items-center justify-center">
              <FaEnvelope className="text-sm" />
            </button>
          </div>
        </div>
      </div>

      {/* Second Row - Social + Links + Contact */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start  mt-10 border-b border-gray-700 pb-10 gap-10 md:gap-0">
        {/* Social Icons */}
        <div className="flex gap-4">
          {[FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram].map((Icon, i) => (
            <a
              key={i}
              href="#"
              className="w-9 h-9 rounded-full bg-[#333] flex items-center justify-center hover:bg-gray-500 transition"
            >
              <Icon className="text-white text-sm" />
            </a>
          ))}
        </div>

        {/* Find Your Way */}
        <div>
          <h4 className="text-white font-semibold mb-4 text-base">Find Your Way</h4>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li><a href="#" className="hover:text-white">Home</a></li>
            <li><a href="#" className="hover:text-white">Blogs</a></li>
            <li><a href="#" className="hover:text-white">Videos</a></li>
          </ul>
        </div>

        {/* Contact Us */}
        <div>
          <h4 className="text-white font-semibold mb-4 text-base">Contact Us</h4>
          <ul className="text-gray-400 text-sm space-y-1">
            <li>Kandy Road</li>
            <li>Katugastota.</li>
            <li>startupuncut@gmail.com</li>
            <li>011 123 1234</li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center mt-8 text-sm text-gray-500">
        <p>Copyright © 2025 Startup Uncut</p>
        <p>
          Designed with <span className="text-red-500">❤️</span> by{" "}
          <span className="text-white">Novrith Technologies</span>
        </p>
      </div>
    </footer>
  );
}
