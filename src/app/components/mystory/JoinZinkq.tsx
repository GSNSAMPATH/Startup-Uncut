"use client";

import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

export default function JoinZinkq() {
  return (
    <section className="py-10 md:py-20 px-4 md:px-16">
        <div className="relative w-full overflow-hidden rounded-xl md:rounded-3xl text-white px-4 py-4 md:px-16 md:py-20 shadow-[0_0_60px_-15px_rgba(0,0,0,0.6)]">
      {/* === GRADIENT LAYERS === */}
      <div className="absolute inset-0 bg-[#1e1f21]" />
      <div className="absolute inset-0 md:bg-[radial-gradient(circle_at_5%_10%,rgba(0,124,229,0.3)_0%,transparent_40%)] bg-[radial-gradient(circle_at_5%_90%,rgba(111,0,225,0.7)_0%,transparent_40%)]" />
      <div className="absolute inset-0 md:bg-[radial-gradient(circle_at_35%_99%,rgba(111,0,225,0.7)_0%,transparent_30%)] bg-[radial-gradient(circle_at_90%_60%,rgba(0,124,229,0.3)_10%,transparent_30%)]" />
      <div className="absolute inset-0 md:bg-[radial-gradient(circle_at_80%_30%,rgba(0,219,172,0.4)_0%,transparent_30%)] bg-[radial-gradient(circle_at_40%_30%,rgba(0,219,172,0.4)_0%,transparent_30%)]" />
      <div className="absolute inset-0 bg-black/20" />
      {/* === END GRADIENT === */}

      <div className="relative flex flex-col md:flex-col justify-between gap-4 md:gap-8 z-10">
        {/* LEFT TEXT */}
        <div className="flex flex-col md:items-start">
          <h2 className="font-poppins text-[14px] sm:text-[30px] lg:text-[40px] font-extrabold tracking-tight mb-2 md:mb-5">
            Join the <span className="text-white">Zinkq Founder Community</span>
          </h2>
          <p className="font-poppins text-gray-300 leading-relaxed text-[8px] sm:text-[16px] lg:text-[20px] max-w-5xl">
            If you’re building something — or trying to — don’t do it alone.
            <br />
            Zinkq is a community for founders who want to connect, share
            challenges, exchange ideas, collaborate, and grow together.
            <br />
            <span className="text-gray-200 font-medium">
              No hype — just builders helping builders.
            </span>
          </p>
        </div>

        {/* RIGHT CTA */}
        <div className="flex flex-col items-end gap-1 md:gap-4">
        <button className=" bg-gradient-to-r from-sky-400 to-emerald-400 hover:opacity-90 font-poppins text-[10px] sm:text-[12px] md:text-[16px] font-semibold text-white  px-2 md:px-3 md:pr-4 py-1 sm:py-2 justify-between md:gap-4 md:gap-1 rounded-lg md:rounded-xl border border-gray-800 flex items-center md:gap-2 hover:bg-gray-200 transition">
            <p className="px-4 sm:px-6 md:px-8">Join Zinkq </p>
            <FaArrowRight className="text-sm bg-black text-gray-100 h-6 md:h-8 w-6 md:w-8 p-2 rounded-lg" />
        </button>

          <p className="font-poppins text-[8px] sm:text-[16px] lg:text-[20px]  text-gray-300 text-center md:text-right">
            grow alongside{" "}
            <span className="font-semibold">
              people who understand the journey.
            </span>
          </p>
        </div>
      </div>
      </div>
    </section>
  );
}
