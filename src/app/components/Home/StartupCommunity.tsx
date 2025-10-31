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
   <section className="relative overflow-hidden py-15 px-6 md:px-16 ">
      {/* ✨ Gradient Background Layer */}
       <div className="absolute inset-0 bg-[#1e1f21]" />
      <div className="absolute inset-0 md:bg-[radial-gradient(circle_at_5%_10%,rgba(111,0,225,0.7)_0%,transparent_40%)] bg-[radial-gradient(circle_at_5%_90%,rgba(111,0,225,0.7)_0%,transparent_40%)]" />
      <div className="absolute inset-0 md:bg-[radial-gradient(circle_at_35%_99%,rgba(0,124,229,0.3)_0%,transparent_20%)] bg-[radial-gradient(circle_at_90%_60%,rgba(0,124,229,0.3)_10%,transparent_30%)]" />
      <div className="absolute inset-0 md:bg-[radial-gradient(circle_at_80%_50%,rgba(0,219,172,0.4)_0%,transparent_30%)] bg-[radial-gradient(circle_at_40%_30%,rgba(0,219,172,0.4)_0%,transparent_30%)]" />
      <div className="absolute inset-0 bg-black/20" />

      <div className="relative z-10 ">
        <p className="font-poppins text-[8px] sm:text-[12px] lg:text-[16px] font-semibold text-gray-500 mb-2">Join Zinkq</p>
        <h2 className="text-[20px] sm:text-[30px] lg:text-[40px] md:text-4xl font-bold mb-12 text-white">
          Our Startup Owner Community
        </h2>
      </div>
      
    <div className="flex flex-col lg:flex-row items-center justify-between">

      {/* Left Content */}
      <div className=" lg:max-w-md xl:max-w-2xl z-10 order-2 lg:order-1 ">

        <p className="font-poppins text-[12px] sm:text-[16px] lg:text-[24px] text-gray-300 mb-6 md:mb-10 leading-relaxed">
          Zinkq is the Startup Uncut community built for founders who believe in
          growing together, not alone. <br /> It’s a space to connect with real startup
          owners, exchange ideas, share struggles, find support, and unlock
          growth through genuine networking and collaboration.
        </p>

        <ul className="space-y-3 mb-6 md:mb-10">
          {points.map((point, index) => (
            <li key={index} className="flex items-center gap-1 md:gap-3">
              <FaCheckCircle className="text-cyan-400 text-[12px] sm:text-[16px] lg:text-[24px] mr-2 md:mr-6" />
              <span className="text-gray-200 font-poppins text-[12px] sm:text-[16px] lg:text-[24px] font-medium">{point}</span>
            </li>
          ))}
        </ul>

        <button className="bg-gradient-to-r from-sky-400 to-emerald-400 hover:opacity-90 font-poppins text-[10px] sm:text-[12px] md:text-[16px] font-semibold text-white  px-2 md:px-3 md:pr-4 py-1 sm:py-2 justify-between md:gap-4 md:gap-12 rounded-lg md:rounded-xl border border-gray-800 flex items-center md:gap-2 hover:bg-gray-200 transition">
            <p className="px-4 sm:px-6 md:px-8">Join Zinkq </p>
            <FaArrowRight className="text-sm bg-black text-gray-100 h-6 md:h-8 w-6 md:w-8 p-2 rounded-lg" />
        </button>

        <p className="mt-2 md:mt-4 text-gray-400 text-[12px] sm:text-[16px] lg:text-[24px] font-poppins font-regular">
          grow with people who get the journey.
        </p>
      </div>

      {/* Right Orbit Animation */}
      <div className="relative mt-10 w-[320px] h-[320px] md:w-[420px] md:h-[420px] oder-1 lg:order-2 mb-20">
        <div className=" absolute inset-[-40px] rounded-full border border-gray-500/10" />
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
    </div>
    </section>
  );
}
