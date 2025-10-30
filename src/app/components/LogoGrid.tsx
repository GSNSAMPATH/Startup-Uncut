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

  return (
    <div className="py-12 bg-[#1f1f1f] flex items-center justify-center px-16">
      <div className="flex items-center animate-scroll gap-16 ">
        {logos.map((logo) => (
          <div
            key={logo._id}
            className="flex items-center justify-center rounded-xl p-8  w-[200px] h-[200px]"
            style={{ backgroundColor: logo.bgColor }}
          >
            {logo.logoImage ? (
              <Image
                src={urlFor(logo.logoImage).width(200).url()}
                alt={logo.title}
                width={200}
                height={200}
                className="object-contain rounded-xl"
              />
            ) : (
              <p className="text-white font-semibold text-lg">{logo.title}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

