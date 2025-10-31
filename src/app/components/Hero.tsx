"use client";
import Image from "next/image";
import { FaArrowRight, FaCalendar, FaCalendarDay } from "react-icons/fa";
import { useState, TouchEvent } from "react";

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

    const [index, setIndex] = useState(0);
  const [startX, setStartX] = useState(0);

  const onTouchStart = (e: TouchEvent<HTMLDivElement>) => {
    setStartX(e.touches[0].clientX);
  };

  const onTouchMove = (e: TouchEvent<HTMLDivElement>) => {
    const diff = startX - e.touches[0].clientX;
    if (diff > 50 && index < cards.length - 1) {
      setIndex(index + 1);
      setStartX(e.touches[0].clientX);
    }
    if (diff < -50 && index > 0) {
      setIndex(index - 1);
      setStartX(e.touches[0].clientX);
    }
  };

  return (
    <section className="relative w-full px-4 md:px-16 text-white pb-10 md:pb-24">

      <div>
        <h1 className="hederfont font-bold mb-4 leading-tight text-black mt-10 md:mt-20 max-w-[1100px] ">
          A/L Didn’t Make Me a Doctor. It Made Me an Entrepreneur{" "}
          <span className="text-gray-400">- This Is Startup Uncut.</span>
        </h1>

        <p className="text-gray-600 font-poppins text-[12px] sm:text-[16px] lg:text-[24px] leading-relaxed font-bold max-w-[1300px]">
          Startup Uncut is my real-time documentary — not of success, but of becoming. <br />
          <span className="font-medium">It’s the unfiltered journey of building a business from nothing, shared exactly as it happens — before the glory, in the middle of the chaos</span>
          <br />
          <span className="font-medium">Every win, every breakdown, every pivot, and every lesson is documented here as I fight to turn a rejected dream into a self-made reality.</span> 
        </p>
      </div>

      {/* Big Feature Card */}
      <div className="hidden md:block w-full h-[40vh] md:h-[70vh] relative overflow-hidden rounded-2xl md:rounded-[40px] mt-5 md:mt-10">
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
                <h2 className="font-poppins sm:text-[20px] lg:text-[28px] text-[10px] md:text-3xl font-bold md:mb-2">{selectedCard.title}</h2>
                <FaArrowRight className="text-[10px] md:text-[16px] font-bold md:mb-2 rotate-[-40deg] border border-white border-1 h-5 w-5 md:h-10 md:w-10 px-1 md:px-3 py-1 md:py-2 rounded-full" />
            </div>
          <p className="text-gray-300 font-poppins sm:text-[16px] lg:text-[20px] text-[8px] md:mb-4">{selectedCard.desc}</p>
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
      {/* <div className="mx-auto  mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
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
      </div> */}

        {/* Small Cards */}
  <div className="mx-auto mt-8 md:mt-12">
    {/* Desktop Grid */}
    <div className="hidden md:grid sm:grid-cols-2 md:grid-cols-3 gap-4 lg:gap-6">
      {cards.map((card) => (
        <div
          key={card.id}
          onClick={() => setSelectedCard(card)}
          className="bg-white overflow-hidden rounded-2xl shadow-md cursor-pointer hover:scale-105 transition"
        >
           <div className="relative w-full h-70 lg:h-60 ">
              <Image src={card.image} alt={card.title} fill className="object-cover" />
           
            <div className="bg-white/5 w-full backdrop-blur-xl rounded-2xl py-2 md:px-2 lg:px-4 overflow-hidden absolute h-1/2  bottom-0 ">
               <div className="flex justify-between items-center">
                <h2 className=" font-bold font-poppins text-[14px] line-clamp-1">{card.title}</h2>
                <FaArrowRight className="text-[1px] font-bold rotate-[-40deg] border border-white border-1 h-5 w-5  px-1 py-1 rounded-full" />
            </div>
              <p className="text-[10px] text-gray-300 font-poppins line-clamp-1">{card.desc}</p>
              <div className="flex justify-between items-center mt-4 lg:mt-8">
                <div className="flex items-center">
                    <Image 
                    src={card.image}
                    alt={card.title} 
                    width={20}
                    height={20}
                    className="w-7 h-7 rounded-full mr-4" />
                <p className="text-[10px] font-medium text-white">{card.author}</p>
                <FaCalendar className="inline ml-4 boder border-white border-1 h-7 w-7  px-1 py-2 rounded-full mr-4"/>
                <p className="text-[10px] font-medium text-white">{card.date}</p>
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

    {/* Mobile Carousel */}
    <div className="md:hidden relative">
      <div
        className="overflow-hidden rounded-2xl"
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
      >
        <div
          className="flex transition-transform duration-500"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {cards.map((card) => (
            <div key={card.id} className="min-w-full">
              <div
                onClick={() => setSelectedCard(card)}
                className="bg-white overflow-hidden rounded-2xl shadow-md cursor-pointer hover:scale-105 transition"
              >
                 <div className="relative w-full h-60 sm:h-100">
              <Image src={card.image} alt={card.title} fill className="object-cover" />
           
            <div className="bg-white/5 w-full backdrop-blur-xl rounded- py-2 px-4 overflow-hidden absolute h-2/5  bottom-0 ">
               <div className="flex justify-between items-center">
                <h2 className=" font-bold font-poppins text-[10px] sm:text-[20px]">{card.title}</h2>
                <FaArrowRight className="text-[1px] font-bold rotate-[-40deg] border border-white border-1 h-5 w-5 sm:h-6 sm:w-6  px-1 py-1 rounded-full" />
            </div>
              <p className="text-[8px] sm:text-[16px] text-gray-300 font-poppins ">{card.desc}</p>
              <div className="flex justify-between items-center mt-5 sm:mt-14">
                <div className="flex items-center">
                    <Image 
                    src={card.image}
                    alt={card.title} 
                    width={20}
                    height={20}
                    className="w-5 h-5 rounded-full mr-4" />
                <p className="text-[6px] sm:text-[12px] font-medium text-white">{card.author}</p>
                <FaCalendar className="inline ml-4 boder border-white border-1 h-5 w-5   py-1 rounded-full mr-4"/>
                <p className="text-[8px] sm:text-[12px] font-medium text-white">{card.date}</p>
                </div>
                <div className="bg-white/10 border border-white/20 text-[8px] sm:text-[12px] px-3 py-1 rounded-full">
                  {card.tag}
                </div>
              </div>    
            </div>
            </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Dots */}
      <div className="flex justify-center mt-4 gap-2">
        {cards.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`h-1 w-1 rounded-full transition-all ${
              i === index ? "bg-gray-900" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  </div>

      {/* Explore More Button */}
      <div className="flex justify-end mt-4 sm:mt-6 md:mt-10">
        <button className="bg-transparent font-poppins text-[10px] sm:text-[12px] md:text-[16px] font-medium text-black px-1 py-1 md:px-3 sm:py-2 md:py-2 justify-between md:gap-8 rounded-lg md:rounded-xl border border-gray-800 flex items-center md:gap-2 hover:bg-gray-200 transition">
          <p className="px-4 sm:px-6 md:px-8">Explore More </p>
          <FaArrowRight className="text-sm bg-black text-gray-100 h-6 md:h-8 w-6 md:w-8 p-2 rounded-lg" />
        </button>
      </div>
    </section>
  );
}
