import Image from "next/image";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";

type Logo = {
  _id: string;
  title: string;
  bgColor: string;
  logoImage: any;
};

async function getLogos() {
  const query = `*[_type == "logo"]{_id, title, bgColor, logoImage}`;
  const logos: Logo[] = await client.fetch(query);
  return logos;
}

export default async function LogoGrid() {
  const logos = await getLogos();

  // duplicate the array for continuous scroll
  const allLogos = [...logos, ...logos];

  return (
    <div className="relative overflow-hidden py-12 bg-[#1f1f1f]">
      <div className="flex w-max animate-marquee sm:gap-12 lg:gap-26">
        {allLogos.map((logo, index) => (
          <div
            key={`${logo._id}-${index}`}
            className="flex items-center justify-center rounded-xl mx-1 sm:mx-6 p-1 sm:p-6 min-w-[120px] sm:min-w-[150px] h-[80px] md:h-[150px]"
            // style={{ backgroundColor: logo.bgColor || "#333" }}
          >
            {logo.logoImage ? (
              <Image
                src={urlFor(logo.logoImage).width(200).url()}
                alt={logo.title}
                width={150}
                height={150}
                className="object-contain rounded-xl w-[90px] h-[80px] sm:w-[150px] sm:h-[150px]"
              />
            ) : (
              <p className="text-white font-semibold text-sm md:text-lg">{logo.title}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
