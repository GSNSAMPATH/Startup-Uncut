"use client";

import { FaD, FaQuoteLeft } from "react-icons/fa6";

export default function TestimonialQuote() {
  return (
    <section className="relative w-full overflow-hidden px-4 md:px-16 py-20 md:px-20 md:py-28">
      <div className="flex flex-col gap-1 items-start ">
        {/* LARGE QUOTE ICON */}
        <div className="text-[#111] text-[20px] sm:text-[30px] lg:text-[40px] ">
          <FaQuoteLeft />
        </div>

        {/* QUOTE TITLE */}
        <h2 className="font-poppins text-center text-[20px] sm:text-[30px] lg:text-[40px] text-[#111] font-bold leading-snug max-w-6xl mx-auto">
          If your first dream broke, maybe it was just making room for your real one.
        </h2>

        {/* QUOTE TEXT */}
        <div className="flex-1 text-center max-w-6xl mx-auto">
          <p className="font-poppins  text-[20px] sm:text-[30px] lg:text-[40px] text-[#111] font-light leading-snug max-w-6xl mx-auto">
            Start. Even if it’s small. Even if you’re unsure. Even if it’s messy.
            This is my story — still being written.  Maybe this is where yours begins.
            alone.
          </p>

          <p className="mt-6 font-poppins text-[20px] sm:text-[30px] lg:text-[40px] text-gray-500 font-medium">
            <span className="font-semibold">—</span>  Shashindu
          </p>
        </div>
      </div>
    </section>
  );
}
