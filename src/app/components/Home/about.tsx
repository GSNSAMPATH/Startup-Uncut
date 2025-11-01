// app/about/page.tsx
import Image from "next/image";

export default function AboutPage() {
  const images = [
    "/dffca2f47e1eef1c215958aa0a33b0f56541cbe2.jpg",
    "/dffca2f47e1eef1c215958aa0a33b0f56541cbe2.jpg",
    "/dffca2f47e1eef1c215958aa0a33b0f56541cbe2.jpg",
    "/dffca2f47e1eef1c215958aa0a33b0f56541cbe2.jpg",
    "/dffca2f47e1eef1c215958aa0a33b0f56541cbe2.jpg",
    "/dffca2f47e1eef1c215958aa0a33b0f56541cbe2.jpg",
    "/dffca2f47e1eef1c215958aa0a33b0f56541cbe2.jpg",
  ];

  return (
    <main className="min-h-screen bg-[#1a1a1a] text-white px-4 md:px-16 py-10 md:py-20">
      <div className="">
        {/* Header */}
        <div className="mb-10">
          <p className="text-gray-400 text-[8px] sm:text-[12px] lg:text-[16px] font-poppins font-semibold mb-2">About Me</p>
          <h1 className="font-poppins text-[20px] sm:text-[30px] lg:text-[40px] md:text-5xl font-bold">
            Why I Started Startup Uncut
          </h1>
        </div>

        {/* Collage Grid */}
        <div className="grid full grid-cols-5 lg:gap-4 mt-20 ">
          <div className="col-span-5 row-span-4 flex flex-row gap-2 sm:gap-3 lg:gap-4 w-full">
            <div className="flex flex-col gap-4 w-full h-[400px] sm:h-[500] lg:h-[600px] py-38 md:py-44 ">
                   <div className="flex flex-col gap-4 w-full h-[400px] sm:h-[500] lg:h-[600px]  rounded-xl">
                    <Image
                      src="https://res.cloudinary.com/diatamf9x/image/upload/v1761739926/WhatsApp_Image_2025-10-29_at_09.59.01_b66a7276_qxan0x.jpg"
                      alt="Villa Sathkara"
                      width={500}
                      height={500}
                      className="object-cover w-full h-full rounded-xl hover:scale-110 transition duration-300 ease-in-out"
                    />
                   </div>
            </div>
            <div className="w-full h-[400px] sm:h-[500] lg:h-[600px] flex flex-col sm:gap-3 gap-2 lg:gap-4 w-full py-20">
                <div className="flex flex-col gap-4 w-full h-[300px]  rounded-xl">
                    <Image
                      src="https://res.cloudinary.com/diatamf9x/image/upload/v1761739924/WhatsApp_Image_2025-10-29_at_09.58.58_101daea6_l17x5o.jpg"
                      alt="Villa Sathkara"
                      width={500}
                      height={500}
                      className="object-cover w-full h-full rounded-xl hover:scale-110 transition duration-300 ease-in-out"
                    />
                </div>
                <div className="flex flex-col gap-4 w-full h-[600px]  rounded-xl">
                    <Image
                      src="https://res.cloudinary.com/diatamf9x/image/upload/v1761739923/WhatsApp_Image_2025-10-29_at_09.58.58_4ebbc757_nvjnui.jpg"
                      alt="Villa Sathkara"
                      width={500}
                      height={500}
                      className="object-cover w-full h-full rounded-xl hover:scale-110 transition duration-300 ease-in-out"
                    />
                </div>
            </div>
            <div className="flex flex-col gap-4 w-full h-[400px] sm:h-[500] lg:h-[600px]  rounded-2xl">
                    <Image
                      src="https://res.cloudinary.com/diatamf9x/image/upload/v1761739925/WhatsApp_Image_2025-10-29_at_09.58.57_676f5f4a_lnvr7a.jpg"
                      alt="Villa Sathkara"
                      width={500}
                      height={500}
                      className="object-cover w-full h-full hover:scale-110 transition duration-300 ease-in-out rounded-xl"
                    />
            </div>
            <div className="w-full h-[400px] sm:h-[500] lg:h-[600px] flex flex-col gap-2 sm:gap-3 lg:gap-4 w-full py-20">
                <div className="flex flex-col gap-4 w-full h-[600px] rounded-xl">
                    <Image
                      src="https://res.cloudinary.com/diatamf9x/image/upload/v1761739923/WhatsApp_Image_2025-10-29_at_09.58.55_011499e6_pzyodm.jpg"
                      alt="Villa Sathkara"
                      width={500}
                      height={500}
                      className="object-cover w-full h-full rounded-xl hover:scale-110 transition duration-300 ease-in-out"
                    />
                </div>
                <div className="flex flex-col gap-4 w-full h-[300px]  rounded-xl bg-white">
                    <Image
                      src="https://res.cloudinary.com/diatamf9x/image/upload/v1761739927/WhatsApp_Image_2025-10-29_at_09.59.00_49671580_tkiwc1.jpg"
                      alt="Villa Sathkara"
                      width={500}
                      height={500}
                      className="object-cover w-full h-full xl:h-[200px] rounded-xl hover:scale-110 transition duration-300 ease-in-out"
                    />
                </div>
            </div>
            <div className="flex flex-col gap-4 w-full h-[400px] sm:h-[500] lg:h-[600px] py-38 md:py-44 ">
                   <div className="flex flex-col gap-4 w-full h-[600px]  rounded-xl">
                    <Image
                      src="https://res.cloudinary.com/diatamf9x/image/upload/v1761739926/WhatsApp_Image_2025-10-29_at_09.58.59_1cb3f3d7_ziboeh.jpg"
                      alt="Villa Sathkara"
                      width={500}
                      height={500}
                      className="object-cover w-full h-full rounded-xl hover:scale-110 transition duration-300 ease-in-out"
                    />
                   </div>
            </div>
          </div>    
        </div>
        {/* Text Section */}
        <div className="text-gray-300 mt-10 sm:mt-16 lg:mt-20 leading-relaxed space-y-2 sm:space-y-3 lg:space-y-4">
          <p className="text-[#E8E8E8] font-poppins text-[12px] sm:text-[16px] lg:text-[24px] leading-relaxed font-medium">
            I didn’t start Startup Uncut because I had the answers. I started
            it because I was willing to document the search for them.
          </p>
          <p className="text-[#E8E8E8] font-poppins text-[12px] sm:text-[16px] lg:text-[24px] leading-relaxed font-medium ">
            After failing my A/L white coat dream, I entered entrepreneurship
            with zero guarantees and a hundred fears. I realized that while
            everyone talks about success, almost no one shows the messy middle 
            the confusion, the self-doubt, the long nights, the rejections, and
            the constant questioning of “Am I doing this right?”
          </p>
        </div>
      </div>
    </main>
  );
}
