import Image from "next/image";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";

type Logo = {
  _id: string;
  title: string;
  bgColor: string;
  logoImage: any;
};

// Fetch only first 3 logos from Sanity
async function getLogos() {
  const query = `*[_type == "logo"][0...3]{_id, title, bgColor, logoImage}`;
  const logos: Logo[] = await client.fetch(query);
  return logos;
}

export default async function LogoShowcase() {
  const logos = await getLogos();

  return (
    <section className="px-4 md:px-16 py-10 md:py-16">
        <h2 className="text-[20px] sm:text-[30px] lg:text-[40px] font-poppins font-bold text-black mb-4 md:mb-8">
            Where I Am Now
        </h2>
        <p className="text-[12px] sm:text-[16px] lg:text-[20px] font-poppins font-medium text-gray-500 mt-2 md:mt-2 mb-4 md:mb-8">
            I’m still in the climb — building brands, making decisions, fixing mistakes, chasing vision. This is not a finished story. It’s a journey still unfolding.
        </p>
        <div className="flex justify-center">
      <div className="grid grid-cols-3 md:grid-cols-3 w-full gap-3 md:gap-20">
        {logos.map((logo: any, index: number) => (
          <div
            key={index}
            className="relative rounded-2xl overflow-hidden w-full h-20 md:h-58"
            style={{ backgroundColor: logo.bgColor || "#fff" }}
          >
            <Image
              src={urlFor(logo.logoImage).url()}
              alt={logo.title || "Logo"}
              fill
              className="object-cover  md:object-cover"
            />
          </div>
        ))}
      </div>
    </div>
    </section>
  );
}
