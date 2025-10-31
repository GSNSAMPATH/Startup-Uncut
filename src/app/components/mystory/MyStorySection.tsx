import Image from "next/image";
import { FaCheckCircle } from "react-icons/fa";

export default function MyStorySection() {
  return (
    <section className=" text-gray-300 px-4 md:px-16 md:py-16 flex flex-col md:flex-row items-center justify-between gap-10">
      {/* ✅ Left Side Text */}
      <div className="flex flex-col gap-10 w-full md:w-1/2 h-full">
        <h2 className="text-[20px] sm:text-[30px] lg:text-[40px] font-poppins font-bold text-black">
          What I Believe
        </h2>
        </div>
      <div className="flex flex-col gap-5 w-full md:w-1/2 h-full order-2 md:order-1">
        <ul className="font-poppins space-y-5 text-[12px] sm:text-[16px] lg:text-[24px] font-medium ">
          <li className="flex items-center gap-8 text-gray-500">
            <span className="text-black"><FaCheckCircle /></span>
            Failure can be a beginning
          </li>
          <li className="flex items-center gap-8 text-gray-500">
            <span className="text-black"><FaCheckCircle /></span>
            You don’t need permission to build
          </li>
          <li className="flex items-center gap-8 text-gray-500">
            <span className="text-black"><FaCheckCircle /></span>
            The marketplace is the real classroom
          </li>
          <li className="flex items-center gap-8 text-gray-500">
            <span className="text-black"><FaCheckCircle /></span>
            Ideas don’t win — consistency does
          </li>
        </ul>
      </div>

      {/* ✅ Right Side Images */}
      <div className="relative  flex gap-2 w-full  md:gap-6 md:h-[250px] md:w-1/2 justify-end order-1 lg:order-2 ">
        <div className="relative w-full h-40 md:w-36 md:h-full rounded-xl overflow-hidden">
          <Image
            src="https://res.cloudinary.com/diatamf9x/image/upload/v1761739926/WhatsApp_Image_2025-10-29_at_09.58.59_51024166_ditgtd.jpg"
            alt="Work Image 1"
            fill
            className="object-cover "
          />
        </div>
        <div className="relative w-full h-40 md:w-36 md:h-full rounded-xl overflow-hidden">
          <Image
            src="https://res.cloudinary.com/diatamf9x/image/upload/v1761739926/WhatsApp_Image_2025-10-29_at_09.58.59_51024166_ditgtd.jpg"
            alt="Work Image 2"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative w-full h-40 md:w-46 md:h-full rounded-xl overflow-hidden">
          <Image
            src="https://res.cloudinary.com/diatamf9x/image/upload/v1761739926/WhatsApp_Image_2025-10-29_at_09.58.59_51024166_ditgtd.jpg"
            alt="Work Image 3"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
