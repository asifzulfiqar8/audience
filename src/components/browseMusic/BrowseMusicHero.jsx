"use client";
import { useEffect, useState } from "react";
import GradientHeading from "../shared/GradientHeading";
import Paragraph from "../shared/Paragraph";
import SearchInput from "../shared/SearchInput";
import SectionHeading from "../shared/SectionHeading";
import Image from "next/image";
import { artistsProfile } from "@/data/data";

const BrowseMusicHero = () => {
  const [searchInput, setSearchInput] = useState("");
  const [artistList, setArtistList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedArtist, setSelectedArtist] = useState("");

  useEffect(() => {
    if (searchInput.trim() === "") {
      setArtistList([]);
      return;
    }

    setLoading(true);

    const delay = setTimeout(() => {
      const filteredData = artistsProfile.filter((data) =>
        data.name.toLowerCase().includes(searchInput.toLowerCase())
      );

      setArtistList(filteredData);
      setLoading(false);
    }, 500);

    return () => clearTimeout(delay);
  }, [searchInput]);

  return (
    <section className="w-full bg-[url('/images/home/hero-mobile-bg.png')] lg:bg-[url('/images/merch/hero-bg.png')] bg-no-repeat bg-cover bg-center">
      <section className="container mx-auto px-10 py-[60px] grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div>
          <div className="hidden lg:block">
            <SectionHeading
              textOne="Browse"
              textTwo="Music"
              color="text-white"
              as="h1"
            />
          </div>
          <div className="block lg:hidden">
            <GradientHeading as="h1" text="Browse Music" />
          </div>
          <div className="mt-5 hidden lg:block">
            <Paragraph text="Or scroll down and discover our top artists, releases and playlists curated by the community." />
          </div>
        </div>
        <div className="grid place-items-center">
          <div className="relative">
            <SearchInput
              placeholder="Search music.."
              value={searchInput}
              name="search"
              onChange={(e) => setSearchInput(e.target.value)}
            />
            {searchInput && (
              <div className="absolute top-[40px] left-0 p-5 w-full max-h-[335px] md:max-h-[456px] overflow-y-scroll search-scroll bg-white border border-black rounded-[20px] z-50 flex flex-col gap-[5px]">
                {loading ? (
                  <span className="text-textColor text-sm md:text-xl font-medium font-noka">
                    Loading...
                  </span>
                ) : artistList.length > 0 ? (
                  artistList.map((data, i) => (
                    <ArtistList
                      key={i}
                      artist={data}
                      setSelectedArtist={setSelectedArtist}
                    />
                  ))
                ) : (
                  <span className="text-textColor text-sm md:text-xl font-medium font-noka">
                    Sorry no results have been found...
                  </span>
                )}
              </div>
            )}
          </div>
        </div>
      </section>
    </section>
  );
};

export default BrowseMusicHero;

const ArtistList = ({ artist, setSelectedArtist }) => {
  return (
    <div
      className="bg-textColor hover:bg-primary p-[10px] rounded-[20px] flex items-center gap-8 transition-all duration-100 group cursor-pointer"
      onClick={() => setSelectedArtist(artist)}
    >
      <Image
        src={artist.image}
        width={110}
        height={110}
        alt="artist image"
        className="size-[50px] md:size-[110px] object-cover rounded-full"
      />
      <div>
        <h6 className="text-xs md:text-2xl font-bold text-white font-noka">
          {artist.name}
        </h6>
        <p className="text-primary text-xs md:text-2xl font-medium font-noka underline group-hover:text-textColor">
          {artist.role}
        </p>
      </div>
    </div>
  );
};
