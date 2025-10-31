"use client";
import { title } from "process";
import React from "react";

const timelineData = [
  {
    date: "August 2020",
    title: "White coat failure",
    text: "I aimed to become a doctor, but failing to secure the required CCS in A/Ls shattered that dream. That failure became the spark that pushed me to explore new paths.",
    side: "right",
  },
  {
    date: "December 2020",
    title: "Took over family business:",
    text: "",
    side: "left",
  },
  {
    date: "July 2021",
    title: "Got into business University",
    text: "",
    side: "right",
  },
  {
    date: "2022 – 2023",
    text: "I jumped into everything — crypto, stock trading, dropshipping, affiliate marketing, even a spice export startup. None took off, but each one taught me how to think, adapt, and build.",
    title: "Trying out new things:",
    side: "left",
  },
  {
    date: "March 2024",
    title: "Started digital escapes:",
    text: "Digital Escapes became my first real venture — a digital marketing agency helping hotels and villas grow online. It taught me how strategy, content, and execution can transform a business.",
    side: "right",
  },
  {
    date: "July 2024",
    title: "Graduated with a 1st class degree:",
    text: "",
    side: "left",
  },
  {
    date: "June 2025",
    title: "Built my own office",
    text: "",
    side: "right",
  },
  {
    date: "August 2025",
    title: "Started Xtream Digital:",
    text: "Xtream Digital is my leap into a broader arena — a marketing and content powerhouse for startups and brands across industries. It’s built for businesses ready to scale beyond limits.",
    side: "left",
  },
];

export default function Timeline() {
  return (
    <section className="relative  text-black py-24 font-inter px-4 md:px-16">
      <div className=" relative">
        {/* Title */}
        <h1 className="font-poppins text-[8px] sm:text-[12px] lg:text-[16px] font-semibold text-gray-500  tracking-wider">
          Time Line
        </h1>
        <h2 className="font-poppins text-[20px] sm:text-[30px] lg:text-[40px] font-bold text-black  tracking-wider mb-20">
          My Startup Growth Story
        </h2>
    </div>
    <div className="relative">

        {/* Central Line */}
        <div className="absolute left-1/2 top-0 bottom-0 w-[1.5px] bg-gray-600 transform -translate-x-1/2" />

        {/* Timeline Items */}
        <div className="relative flex flex-col sm:space-y-6 lg:space-y-10 ">
          {timelineData.map((item, index) => (
            <div
              key={index}
              className={`flex py-4  rounded-2xl ${
                item.side === "left" ? "flex-row-reverse" : ""
              }`}
            >
              {/* Date */}
              <div
                className={`w-1/2 text-black justify-center  ${
                  item.side === "left"
                    ? "text-right pr-2 lg:pr-8"
                    : "text-left  pl-2 lg:pl-8"
                }`}
              >
                <h3 className={`font-poppins text-center w-[100px] sm:w-[120px] lg:w-[160px] mx-auto  bg-[#2e2e2e] text-gray-100  text-[10px] sm:text-[12px] lg:text-[16px] font-medium leading-relaxed rounded-4xl px-2 sm:px-3 lg:px-5 py-2 shadow-lg ${item.side === "left" ? " ml-2 sm:ml-4 lg:ml-10" : " mr-2 sm:mr-4 lg:mr-10"} `}>
                {item.date}
                </h3>
              </div>

              {/* Dot */}
              <div className="relative flex items-top mt-3 justify-center">
                <div className="w-4 h-4 sm:w-6 sm:h-6 lg:w-8 lg:h-8 bg-black border-[4px] border-gray-400 shadow-xl rounded-full z-10" />
              </div>

              {/* Description Box */}
              <div className="w-1/2 ">
                <div className=" ">
                <h2 className={`font-poppins mt-2 text-[10px] sm:text-[12px] lg:text-[16px] font-semibold text-black  tracking-wider ${item.side === "left" ? "text-right pr-2 sm:pr-4 lg:pr-10" : "text-left pl-2 sm:pl-4 lg:pl-10"} `}> {item.title}</h2>
                 </div>
                <p
                className={` w-full mt-4 text-[8px] sm:text-[12px] lg:text-[16px] text-white font-poppins leading-relaxed ${
                    item.side === "left" ? "text-right lg:pr-10" : "text-left lg:pl-10"
                } ${item.text.length === 0 ? "hidden" : "border border-gray-600 rounded-xl py-2 sm:py-4 lg:py-6 px-2 sm:px-6 lg:px-10 bg-[#484848]"}`}
                >
                {item.text.length === 0 ? " " : item.text}
                </p>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
