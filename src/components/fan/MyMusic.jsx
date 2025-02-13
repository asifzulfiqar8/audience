"use client";
import { myMusicData } from "@/data/data";
import Image from "next/image";
import Button from "../shared/Button";
import useWindowWidth from "@/hooks/useWindowWidth";
import ViewAllBtn from "../shared/ViewAllBtn";

const MyMusic = () => {
  const isMobile = useWindowWidth(1024);
  const musicData = isMobile ? myMusicData.slice(0, 3) : myMusicData;
  return (
    <div className="border border-white p-5 lg:p-10 rounded-[20px] bg-[#040000]">
      <div className="flex items-center justify-between gap-5">
        <h6 className="text-[40px] font-bold font-noka text-white">My Music</h6>
        <p className="text-base font-medium font-noka text-white">10 Owned</p>
      </div>
      <div className="mt-10 lg:max-h-[650px] flex flex-col gap-10 lg:overflow-y-scroll custom-scroll pr-4 md:pr-10">
        {musicData.map((song, i) => (
          <SongCard key={i} song={song} />
        ))}
        <div className="mt-10 block lg:hidden">
          <ViewAllBtn url="" text="View More" color="text-white" />
        </div>
      </div>
    </div>
  );
};

export default MyMusic;

const SongCard = ({ song }) => {
  return (
    <div className="flex flex-col md:flex-row gap-5 md:gap-5 pb-10 border-b border-white">
      <div className="flex-1 max-w-[350px] sm:max-w-[160px]">
        <Image
          src={song.image}
          width={160}
          height={160}
          alt="album image"
          className="h-full w-full object-cover flex-1"
        />
      </div>
      <div>
        <p className="text-white text-xs font-medium font-noka">{song.ep}</p>
        <h6 className="text-xl md:text-[40px] font-bold font-noka text-white mt-[6px] leading-none max-w-[230px]">
          {song.title}
        </h6>
        <div className="flex items-center gap-[7px] mt-3">
          <Image
            src={song.singerImg}
            width={55}
            height={55}
            alt="image"
            className="size-[55px] object-cover rounded-full"
          />
          <div>
            <h6 className="text-white text-xs font-bold font-noka">
              {song.singerName}
            </h6>
            <p className="my-[5px] text-white text-xs font-noka">
              {song.songs} Songs - 15min
            </p>
            <p className="my-[5px] text-white text-xs font-light font-noka">
              7 June 2024
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-1 items-end xl:justify-end">
        <Button
          type="button"
          text="Play"
          img="/images/default/view-border.png"
        />
      </div>
    </div>
  );
};
