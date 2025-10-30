"use client";

import { FaArrowRight, FaCheckCircle } from "react-icons/fa";
import Image from "next/image";

export default function StartupCommunity() {
  const points = [
    "Connect with fellow founders",
    "Share real startup challenges",
    "Get help, give help",
    "Build partnerships, not just contacts",
  ];

  const orbitImages = [
    { src: "https://res.cloudinary.com/diatamf9x/image/upload/v1761739925/WhatsApp_Image_2025-10-29_at_09.59.01_fa8f631c_idxlzg.jpg", className: "top-0 left-1/2 -translate-x-1/2" },
    { src: "https://res.cloudinary.com/diatamf9x/image/upload/v1761739925/WhatsApp_Image_2025-10-29_at_09.59.01_fa8f631c_idxlzg.jpg", className: "bottom-0 left-1/3" },
    { src: "https://res.cloudinary.com/diatamf9x/image/upload/v1761739925/WhatsApp_Image_2025-10-29_at_09.59.01_fa8f631c_idxlzg.jpg", className: "top-1/3 left-0" },
    { src: "https://res.cloudinary.com/diatamf9x/image/upload/v1761739925/WhatsApp_Image_2025-10-29_at_09.59.01_fa8f631c_idxlzg.jpg", className: "right-0 top-1/3" },
    { src: "https://res.cloudinary.com/diatamf9x/image/upload/v1761739925/WhatsApp_Image_2025-10-29_at_09.59.01_fa8f631c_idxlzg.jpg", className: "bottom-1/3 right-10" },
  ];

  return (
   <section className="relative overflow-hidden py-15 px-6 md:px-16 flex flex-col lg:flex-row items-center justify-between">
      {/* ✨ Gradient Background Layer */}
       <div className="absolute inset-0 bg-[#1e1f21]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_5%_10%,rgba(111,0,225,0.7)_0%,transparent_40%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_35%_99%,rgba(0,124,229,0.3)_0%,transparent_20%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_50%,rgba(0,219,172,0.4)_0%,transparent_30%)]" />
      <div className="absolute inset-0 bg-black/20" />

      {/* Left Content */}
      <div className="max-w-2xl z-10">
        <p className="text-sm font-semibold text-gray-500 mb-2">Join Zinkq</p>
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-white">
          Our Startup Owner Community
        </h2>
        <p className="font-poppins text-[24px] text-gray-300 mb-10 leading-relaxed">
          Zinkq is the Startup Uncut community built for founders who believe in
          growing together, not alone. <br /> It’s a space to connect with real startup
          owners, exchange ideas, share struggles, find support, and unlock
          growth through genuine networking and collaboration.
        </p>

        <ul className="space-y-3 mb-10">
          {points.map((point, index) => (
            <li key={index} className="flex items-center gap-3">
              <FaCheckCircle className="text-cyan-400 text-[24px] mr-6" />
              <span className="text-gray-200 font-poppins text-[24px] font-medium">{point}</span>
            </li>
          ))}
        </ul>

        <button className="bg-gradient-to-r from-sky-400 to-emerald-400 hover:opacity-90 font-poppins text-[16px] font-semibold text-white pl-18 pr-4 py-2 justify-between gap-12 rounded-xl border border-gray-800 flex items-center gap-2 hover:bg-gray-200 transition">
            <p>Join Zinkq </p>
            <FaArrowRight className="text-sm bg-black text-gray-100 h-8 w-8 p-2 rounded-lg" />
        </button>

        <p className=" text-gray-400 text-[24px] font-poppins font-regular">
          grow with people who get the journey.
        </p>
      </div>

      {/* Right Orbit Animation */}
      <div className="relative w-[320px] h-[320px] md:w-[420px] md:h-[420px]">
        <div className="absolute inset-[-40px] rounded-full border border-gray-500/10" />
        <div className="absolute inset-[0px] rounded-full border border-gray-500/20" />
        <div className="absolute inset-[40px] rounded-full border border-gray-500/40" />
        <div className="absolute inset-[80px] rounded-full border border-gray-500/70" />

        {/* Center Image */}
        <div className="absolute inset-[130px] rounded-full overflow-hidden border-4 border-cyan-400/30">
          <Image
            src="https://res.cloudinary.com/diatamf9x/image/upload/v1761739925/WhatsApp_Image_2025-10-29_at_09.58.58_ab7ba9c3_wpxula.jpg"
            alt="Main Founder"
            fill
            className="object-cover"
          />
        </div>

        {/* Orbit Images */}
        {orbitImages.map((img, i) => (
          <div
            key={i}
            className={`absolute w-12 h-12 rounded-full overflow-hidden border-2 border-cyan-300/30 ${img.className}`}
          >
            <Image src={img.src} alt={`Member ${i + 1}`} fill className="object-cover" />
          </div>
        ))}
      </div>
    </section>
  );
}
