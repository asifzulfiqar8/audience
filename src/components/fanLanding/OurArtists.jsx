"use client";
import SectionHeading from "../shared/SectionHeading";
import ArtistImg from "../shared/ArtistImg";
import useWindowWidth from "@/hooks/useWindowWidth";
import { fanArtistData } from "@/data/data";

const OurArtists = () => {
  const isMobile = useWindowWidth(1024);
  return (
    <section className="w-full bg-white">
      <section className="container mx-auto px-10 pt-10 pb-[60px] lg:pt-0 lg:pb-[250px]">
        <SectionHeading textOne="Our" textTwo="Artists" />
        <div className="mt-8 md:mt-[60px] grid grid-cols-2 lg:grid-cols-3 justify-items-center lg:justify-items-start gap-5 md:gap-8">
          {fanArtistData.slice(0, isMobile ? 4 : 6).map((artist, i) => (
            <Artist artist={artist} key={i} />
          ))}
        </div>
      </section>
    </section>
  );
};

export default OurArtists;

const Artist = ({ artist }) => {
  return (
    <div className="max-w-[120px] md:max-w-[350px] flex flex-col lg:flex-row items-center gap-[10px]">
      <ArtistImg image={artist.img} />
      <div>
        <h6 className="mt-2 text-black text-xs md:text-base lg:text-2xl font-bold font-noka text-center lg:text-left">
          {artist.title}
        </h6>
        <p className="text-black text-[10px] md:text-base lg:text-2xl font-medium font-noka text-center lg:text-left">
          Releases - {artist.releases}
        </p>
        <p className="text-black text-[10px] md:text-base lg:text-2xl font-medium font-noka text-center lg:text-left">
          Revenue - {artist.revenue}
        </p>
      </div>
    </div>
  );
};
