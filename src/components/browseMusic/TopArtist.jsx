"use client";
import SectionHeading from "../shared/SectionHeading";
import ArtistImg from "../shared/ArtistImg";
import Link from "next/link";
import { artistData } from "@/data/data";
import useWindowWidth from "@/hooks/useWindowWidth";

const TopArtist = () => {
  const isMobile = useWindowWidth(1024);
  return (
    <section className="w-full bg-white">
      <section className="container mx-auto px-10 py-[60px] lg:py-[120px]">
        <SectionHeading textOne="Top" textTwo="Artists" />
        <div className="mt-8 md:mt-[60px] grid grid-cols-3 lg:grid-cols-5 gap-5 md:gap-8">
          {artistData.slice(0, isMobile ? 6 : 5).map((artist, i) => (
            <Artist artist={artist} key={i} />
          ))}
        </div>
      </section>
    </section>
  );
};

export default TopArtist;

const Artist = ({ artist }) => {
  return (
    <div className="max-w-[90px] md:max-w-[200px]">
      <ArtistImg image={artist.img} />
      <h6 className="mt-2 text-black text-xs md:text-base lg:text-2xl font-bold font-noka">
        {artist.title}
      </h6>
      <Link
        href=""
        className="text-primary text-[10px] md:text-base lg:text-2xl font-medium font-noka underline"
      >
        View Releases
      </Link>
    </div>
  );
};
