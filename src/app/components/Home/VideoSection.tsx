"use client";
import Image from "next/image";
import { FaPlay, FaArrowRight } from "react-icons/fa";

export default function VideoSection() {
  const videos = [
    {
      id: 1,
      thumbnail:
        "https://res.cloudinary.com/diatamf9x/image/upload/v1761739925/WhatsApp_Image_2025-10-29_at_09.59.01_fa8f631c_idxlzg.jpg",
      title: "Raw footage. Real execution. Every win, failure, pivot, and breakthrough — documented as it happens.",
      author: "Wade Warren",
      duration: "06:30",
      currentTime: "01:56",
    },
    {
      id: 2,
      thumbnail:
        "https://res.cloudinary.com/diatamf9x/image/upload/v1761739925/WhatsApp_Image_2025-10-29_at_09.59.01_fa8f631c_idxlzg.jpg",
      author: "Wade Warren",
    },
    {
      id: 3,
      thumbnail:
        "https://res.cloudinary.com/diatamf9x/image/upload/v1761739925/WhatsApp_Image_2025-10-29_at_09.59.01_fa8f631c_idxlzg.jpg",
      author: "Wade Warren",
    },
  ];

  return (
    <section className="w-full text-white py-15 px-6 md:px-16">
      {/* Header */}
      <div className=" mb-10">
        <h2 className="text-gray-500 font-semibold text-[16px] mb-3 tracking-wide">
          Videos
        </h2>
        
          <h3 className="font-poppins text-[40px] font-bold text-black ">
            Startup Uncut Episodes
          </h3>
        <p className="text-gray-500 font-poppins text-[24px] font-medium">
          Raw footage. Real execution. Every win, failure, pivot, and breakthrough — documented as it happens. 
          Watch the journey unfold in real time.
        </p>
      </div>

      {/* Video Layout */}
      <div className="grid md:grid-cols-3 gap-8">
        {/* Main Video */}
        <div className="md:col-span-2 relative rounded-2xl overflow-hidden mr-8">
          <Image
            src={videos[0].thumbnail}
            alt="Main Video"
            width={900}
            height={900}
            className="object-cover w-full h-auto rounded-2xl"
          />

          {/* Play Icon Overlay */}
          <button className="absolute inset-0 flex items-center justify-center  transition">
            <FaPlay className="text-white text-3xl md:text-4xl" />
          </button>

          {/* Progress Bar (mocked) */}
          <div className="absolute bottom-0 left-0 w-full h-1 bg-white/20">
            <div className="w-[30%] bg-white h-1"></div>
          </div>

          {/* Time */}
          <div className="absolute bottom-4 left-4 text-xs text-gray-200">
            {videos[0].currentTime}
          </div>
          <div className="absolute bottom-4 right-4 text-xs text-gray-200">
            {videos[0].duration}
          </div>

      <div className="w-full mx-auto mt-4 flex items-center gap-3">
        <Image
          src="https://res.cloudinary.com/diatamf9x/image/upload/v1761739925/WhatsApp_Image_2025-10-29_at_09.59.01_fa8f631c_idxlzg.jpg"
          alt="Author"
          width={40}
          height={40}
          className="rounded-full w-10 h-10"
        />
        <div className="mt-2 bottom-3 right-3 flex flex-col">
            <p className="text-sm text-gray-700">sample</p>
            <p className="text-sm text-gray-700">sample</p>
        </div>
      </div>
          
        </div>
        

        {/* Sidebar Videos */}
        <div className="flex flex-col justify-between space-y-6  border-l pl-14 border-gray-600">
          {videos.slice(1).map((vid) => (
            <div key={vid.id} className="rounded-2xl overflow-hidden relative group">
              <Image
                src={vid.thumbnail}
                alt="Small Video"
                width={400}
                height={250}
                className="object-cover w-full h-auto group-hover:opacity-80 transition rounded-2xl"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <FaPlay className="text-white text-lg opacity-80" />
              </div>
              <div className="mt-2 bottom-3 left-3 flex items-center gap-2">
                <Image
                  src="https://res.cloudinary.com/diatamf9x/image/upload/v1761739925/WhatsApp_Image_2025-10-29_at_09.59.01_fa8f631c_idxlzg.jpg"
                  alt="Profile"
                  width={30}
                  height={30}
                  className="rounded-full w-8 h-8"
                />
        
              <div className="mt-2 bottom-3 right-3 flex flex-col">
                <p className="text-sm text-gray-700">{vid.author}</p>
                <p className="text-sm text-gray-700">{vid.author}</p>
              </div>
               </div>
            </div>
          ))}
        </div>
      </div>

      {/* Author under main video */}


      {/* Explore More Button */}
      <div className="flex justify-end mt-12">
        <button className="bg-transparent font-poppins text-[16px] font-medium text-black px-3 py-2 justify-between gap-8 rounded-xl border border-gray-800 flex items-center gap-2 hover:bg-gray-200 transition">
          <p className="px-8">Explore More </p>
          <FaArrowRight className="text-sm bg-black text-gray-100 h-8 w-8 p-2 rounded-lg" />
        </button>
      </div>
    </section>
  );
}
