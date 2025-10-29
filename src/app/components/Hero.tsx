"use client";
import Image from "next/image";
import { FaArrowRight, FaCalendar, FaCalendarDay } from "react-icons/fa";
import { useState } from "react";

const cards = [
  {
    id: 1,
    title: "Got an idea? Let’s turn it into a startup.",
    desc: "Got an idea that won’t leave your mind? It’s time to bring it to life.",
    image: "/d23f8cb4cb62785a602cf07b3974cf20c6109335.jpg",
    tag: "Entrepreneur",
    author: "Wade Warren",
    date: "18 OCT 2025",
  },
  {
    id: 2,
    title: "Learn from failures, grow faster.",
    desc: "Every failure is a lesson — document, analyze, and move forward.",
    image: "/dffca2f47e1eef1c215958aa0a33b0f56541cbe2.jpg",
    tag: "Startup Tips",
    author: "Jane Doe",
    date: "20 OCT 2025",
  },
  {
    id: 3,
    title: "Networking is key.",
    desc: "Your network determines your net worth — start connecting today.",
    image: "/d23f8cb4cb62785a602cf07b3974cf20c6109335.jpg",
    tag: "Business",
    author: "John Smith",
    date: "22 OCT 2025",
  },
];

export default function Hero() {
  const [selectedCard, setSelectedCard] = useState(cards[0]);

  return (
    <section className="relative w-full px-16 text-white pb-24">

      <div>
        <h1 className="hederfont font-bold mb-4 leading-tight text-black mt-20 max-w-[1100px] ">
          A/L Didn’t Make Me a Doctor. It Made Me an Entrepreneur{" "}
          <span className="text-gray-400">- This Is Startup Uncut.</span>
        </h1>

        <p className="text-gray-600 font-poppins text-[24px] leading-relaxed font-bold max-w-[1300px]">
          Startup Uncut is my real-time documentary — not of success, but of becoming. <br />
          <span className="font-medium">It’s the unfiltered journey of building a business from nothing, shared exactly as it happens — before the glory, in the middle of the chaos</span>
          <br />
          <span className="font-medium">Every win, every breakdown, every pivot, and every lesson is documented here as I fight to turn a rejected dream into a self-made reality.</span> 
        </p>
      </div>

      {/* Big Feature Card */}
      <div className="w-full h-[70vh] relative overflow-hidden rounded-[40px] mt-10">
        <Image
          src={selectedCard.image}
          alt={selectedCard.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/20"></div>

        <div className="bg-white/5 w-full backdrop-blur-xl rounded-2xl p-6 overflow-hidden absolute h-2/5 bottom-0 ">
            <div className="flex justify-between items-center">
                <h2 className="font-poppins xl:text-[28px] text-2xl md:text-3xl font-bold mb-2">{selectedCard.title}</h2>
                <FaArrowRight className="text-[16px] font-bold mb-2 rotate-[-40deg] border border-white border-1 h-10 w-10  px-3 py-2 rounded-full" />
            </div>
          <p className="text-gray-300 font-poppins xl:text-[20px] text-[20px] mb-4">{selectedCard.desc}</p>
          <div className="flex justify-between items-center mt-14">
            <div className="flex items-center">
             <Image 
             src={selectedCard.image} 
             alt={selectedCard.title} 
             width={20}
             height={20}
             className="w-7 h-7 rounded-full mr-4" />
            <p className="text-sm font-medium text-white">{selectedCard.author} <FaCalendar className="inline ml-10 boder border-white border-1 h-7 w-7  px-1 py-2 rounded-full mr-4"/> {selectedCard.date}</p>
            </div>
            <div className="bg-white/10 border border-white/20 text-xs px-3 py-1 rounded-full">
              {selectedCard.tag}
            </div>
          </div>
        </div>
      </div>

      {/* Small Cards */}
      <div className="mx-auto  mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {cards.map((card) => (
          <div
            key={card.id}
            onClick={() => setSelectedCard(card)}
            className="bg-white overflow-hidden rounded-2xl shadow-md cursor-pointer hover:scale-105 transition"
          >
            <div className="relative w-full h-60">
              <Image src={card.image} alt={card.title} fill className="object-cover" />
           
            <div className="bg-white/5 w-full backdrop-blur-xl rounded-2xl py-2 px-4 overflow-hidden absolute h-1/2  bottom-0 ">
               <div className="flex justify-between items-center">
                <h2 className=" font-bold font-poppins text-[14px]">{card.title}</h2>
                <FaArrowRight className="text-[1px] font-bold rotate-[-40deg] border border-white border-1 h-5 w-5  px-1 py-1 rounded-full" />
            </div>
              <p className="text-[10px] text-gray-300 font-poppins ">{card.desc}</p>
              <div className="flex justify-between items-center mt-8">
                <div className="flex items-center">
                    <Image 
                    src={card.image}
                    alt={card.title} 
                    width={20}
                    height={20}
                    className="w-7 h-7 rounded-full mr-4" />
                <p className="text-xs font-medium text-white">{card.author}</p>
                <FaCalendar className="inline ml-4 boder border-white border-1 h-7 w-7  px-1 py-2 rounded-full mr-4"/>
                <p className="text-xs font-medium text-white">{card.date}</p>
                </div>
                <div className="bg-white/10 border border-white/20 text-xs px-3 py-1 rounded-full">
                  {card.tag}
                </div>
              </div>    
            </div>
            </div>
          </div>
        ))}
      </div>

      {/* Explore More Button */}
      <div className="flex justify-end mt-10">
        <button className="bg-transparent text-black px-3 py-2 justify-between gap-8 rounded-xl border border-gray-800 flex items-center gap-2 hover:bg-gray-200 transition">
          <p>Explore More </p>
          <FaArrowRight className="text-sm bg-black text-gray-100 h-8 w-8 p-2 rounded-lg" />
        </button>
      </div>
    </section>
  );
}
