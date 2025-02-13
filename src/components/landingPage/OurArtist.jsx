"use client";
import SectionHeading from "../shared/SectionHeading";
import ArtistImg from "../shared/ArtistImg";
import Link from "next/link";
import { artistData } from "@/data/data";
import useWindowWidth from "@/hooks/useWindowWidth";

const OurArtist = () => {
  const isMobile = useWindowWidth(1024);
  return (
    <section className="w-full bg-white">
      <section className="container mx-auto px-10 py-0 lg:py-[60px]">
        <SectionHeading textOne="Our" textTwo="Artists" />
        <div className="mt-8 md:mt-[60px] grid grid-cols-2 lg:grid-cols-3 justify-items-center lg:justify-items-start gap-5 md:gap-8">
          {artistData.slice(0, isMobile ? 4 : 6).map((artist, i) => (
            <Artist artist={artist} key={i} />
          ))}
        </div>
      </section>
    </section>
  );
};

export default OurArtist;

const Artist = ({ artist }) => {
  return (
    <div className="max-w-[120px] md:max-w-[350px] flex flex-col lg:flex-row items-center gap-[10px]">
      <ArtistImg image={artist.img} />
      <div>
        <h6 className="mt-2 text-black text-xs md:text-base lg:text-2xl font-bold font-noka text-center lg:text-left">
          {artist.title}
        </h6>
        <Link
          href=""
          className="text-black text-[10px] md:text-base lg:text-2xl font-medium font-noka underline text-center lg:text-left"
        >
          View Releases
        </Link>
      </div>
    </div>
  );
};
