"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
// import { HiMenu, HiX } from "react-icons/hi";

const navLinks = [
  { name: "HOME", href: "/" },
  { name: "MY STORY", href: "/my-story" },
  { name: "BLOGS", href: "/blogs" },
  { name: "VIDEOS", href: "/episodes" },
  { name: "TOOL KIT", href: "/tools" },
  { name: "CONTACT US", href: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="relative w-full sticky  bg-white shadow-sm md:shadow-none top-0 z-50">
      <nav className="px-4 md:px-16 py-4 flex justify-between items-center">
        
        <div className="flex items-center lg:gap-12 sm:gap-2">
        {/* Logo */}
        <Link href="/" className="font-bold text-gray-800 text-sm leading-4 tracking-tight">
          <Image
            src="https://res.cloudinary.com/diatamf9x/image/upload/v1761719260/Black_and_White_Minimalist_Music_Studio_Logo_20251020_173228_0000_nsohtw.png"  
            alt="Villa Sathkara"
            width={60} 
            height={80}            
            className="max-w-[75px] md:max-w-[150px] h-auto"            
          />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-sm font-medium">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link href={link.href} className="text-gray-600 hover:text-gray-800 transition">
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
        </div>

        {/* CONTACT Button */}
        <Link
          href="/contact"
          className="hidden  md:inline-flex bg-black text-white px-6 py-2 rounded-full text-sm hover:bg-gray-800 transition"
        >
          CONTACT
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden block text-3xl"
          onClick={() => setOpen(!open)}
        >
          <svg
                className="h-6 w-6 text-gray-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {open ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
        </button>
      </nav>

      {/* Mobile Dropdown */}
      {open && (
        <ul className="md:hidden  absolute bg-white w-full text-gray-600 px-8 pb-6 space-y-5 text-sm font-medium ">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link href={link.href} onClick={() => setOpen(false)}>
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
