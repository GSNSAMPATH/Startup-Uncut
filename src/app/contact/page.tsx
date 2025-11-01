"use client";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import Image from "next/image";
export default function ContactSection() {
  return (
    <section className="px-4 md:px-16 py-10 md:py-20">
      {/* Left Side */}

      <div className="relative w-full h-[110vh] flex justify-center items-center flex flex-col md:flex-row w-full   mx-auto bg-white rounded-3xl overflow-hidden shadow-lg mt-10">
  

        <div className="absolute inset-0 flex justify-center items-center opacity-40 pointer-events-none z-10 ">
            <div className="w-[60vw] max-w-[720px] aspect-square border border-gray-400/30 rounded-full flex justify-center items-center">
                <div className="w-[60vw] max-w-[600px] aspect-square border border-gray-400/50 rounded-full flex justify-center items-center">

                <div className="w-[60vw] max-w-[480px] aspect-square border border-gray-400/70 rounded-full flex justify-center items-center">
                <div className="w-[60vw] max-w-[360px] aspect-square border border-gray-400/90 rounded-full flex justify-center items-center">
                    <div className="w-[40vw] max-w-[240px] aspect-square border border-gray-400 rounded-full flex justify-center items-center">
                        <div className="w-[29vw] max-w-[180px] aspect-square rounded-full bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.9)_0%,rgba(0,0,0,0.6)_40%,transparent_60%)]"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>


      
      <div className="md:w-1/2 h-[110vh]  bg-gradient-to-b from-[#F9F9F9] to-[#EDEDED] flex flex-col justify-between items-start p-10 relative rounded-3xl">
        
        
        
        {/* Logo */}
        <div>
          <h1 className="text-3xl font-extrabold text-black">
            <Image
              src="https://res.cloudinary.com/diatamf9x/image/upload/v1761739927/Black_and_White_Minimalist_Music_Studio_Logo_20251020_173228_0000_xd1ekb.png"
              alt="Logo"
              width={200}
              height={200}              
            />
          </h1>
        </div>

        {/* Circles Background */}
        {/* <div className="absolute inset-0 flex justify-center items-center opacity-30 pointer-events-none">
          <div className="w-[300px] h-[300px] border-[1px] border-gray-400 rounded-full flex justify-center items-center">
            <div className="w-[200px] h-[200px] border-[1px] border-gray-400 rounded-full flex justify-center items-center">
              <div className="w-[100px] h-[100px] border-[1px] border-gray-200 rounded-full bg-gradient-to-b from-gray-100 to-gray-500"></div>
            </div>
          </div>
        </div> */}

        {/* Social Icons */}
        <div className="flex flex-col gap-4 z-10">
          <div className="flex items-center gap-3 text-black">
            <FaFacebookF className="text-xl" /> <span>Address</span>
          </div>
          <div className="flex items-center gap-3 text-black">
            <FaInstagram className="text-xl" /> <span>Address</span>
          </div>
          <div className="flex items-center gap-3 text-black">
            <FaLinkedinIn className="text-xl" /> <span>Address</span>
          </div>
          <div className="flex items-center gap-3 text-black">
            <FaTwitter className="text-xl" /> <span>Address</span>
          </div>
        </div>
      </div>

      {/* Right Side Form */}
      <div className="md:w-1/2 h-[110vh] bg-[#1B1B1B] text-white p-10 flex flex-col justify-center rounded-3xl z-20">
        <h2 className="text-2xl font-semibold mb-2">Send us a message</h2>
        <p className="text-gray-400 mb-6">
          Drop a message — you never know where one connection could lead.
        </p>

        <form className="space-y-6 ">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm mb-1">First name</label>
              <input
                type="text"
                placeholder="Enter your first name"
                className="w-full bg-white p-3 rounded-md text-black"
              />
            </div>
            <div>
              <label className="block text-sm mb-1">Last name</label>
              <input
                type="text"
                placeholder="Enter your last name"
                className="w-full bg-white p-3 rounded-md text-black"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm mb-1">Email Address</label>
            <input
              type="email"
              placeholder="Enter your email address"
              className="w-full bg-white p-3 rounded-md text-black"
            />
          </div>

          <div>
            <label className="block text-sm mb-1">Phone number</label>
            <input
              type="tel"
              placeholder="Enter your phone number"
              className="w-full bg-white p-3 rounded-md text-black"
            />
          </div>

          <div>
            <label className="block text-sm mb-1">Subject</label>
            <input
              type="text"
              placeholder="Reservation Inquiry"
              className="w-full bg-white p-3 rounded-md text-black"
            />
          </div>

          <div>
            <label className="block text-sm mb-1">Message</label>
            <textarea
              placeholder="Type your message here"
              rows={4}
              className="w-full bg-white p-3 rounded-md text-black"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-gray-600 hover:bg-gray-500 text-white font-semibold py-3 rounded-full transition-all"
          >
            Send Message
          </button>
        </form>
      </div>
      </div>
    </section>
  );
}
