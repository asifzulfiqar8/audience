"use client";
import { mintHeroData } from "@/data/data";
import Image from "next/image";
import { HiPlay } from "react-icons/hi2";
import Button from "../shared/Button";
import AlbumCoverMobile from "./AlbumCoverMobile";

const MintHero = () => {
  return (
    <section className="w-full bg-white">
      <section className="container mx-auto px-10 pt-[60px] lg:pt-[30px] pb-[30px]">
        <div className="bg-black rounded-[20px] px-5 lg:px-[40px] py-10 lg:py-[60px] bg-[url('/images/default/mint-bg.png')] bg-cover bg-center bg-no-repeat">
          {/* mobile section */}
          <div className="block lg:hidden">
            <AlbumCoverMobile data={mintHeroData[0]} />
          </div>
          <div className="hidden lg:grid grid-cols-12 gap-5">
            <div className="lg:col-span-7">
              <AlbumCover data={mintHeroData[0]} />
            </div>
            <div className="lg:col-span-5">
              <p className="text-white text-xs font-medium font-noka mb-[50px]">
                Track List
              </p>
              <SongList songs={mintHeroData[0].songs} />
            </div>
          </div>
          {/* second column */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 mt-5 lg:mt-[60px] lg:border-t border-white lg:pt-[60px]">
            <div className="lg:col-span-5 border-b lg:border-b-0 lg:border-r border-white pb-5 lg:pb-0">
              <h6 className="text-[20px] md:text-[50px] lg:text-[80px] font-bold font-noka text-white leading-none">
                Activity
              </h6>
              <div className="mt-3 h-[282px] overflow-y-scroll flex flex-col gap-1 custom-scroll lg:mr-[50px]">
                {mintHeroData[0].activities.map((activity, i) => (
                  <div className="flex items-center gap-4 md:gap-5" key={i}>
                    <Image
                      src={activity.img}
                      width={33}
                      height={33}
                      alt="avatar"
                      className="size-[33px] rounded-full object-cover"
                    />
                    <h6 className="text-base text-white font-bold font-noka">
                      {activity.title}
                      <span className="hidden lg:inline-block">
                        (id: 0344564583053458)
                      </span>
                    </h6>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:col-span-7 flex flex-col lg:items-end">
              <h6 className="text-[20px] md:text-[50px] lg:text-[80px] font-bold font-noka text-white leading-none lg:min-w-[500px]">
                Leaderboard
              </h6>
              <div className="mt-3 md:mt-5 flex flex-col gap-[5px] lg:min-w-[500px]">
                {mintHeroData[0].leaderboard.slice(0, 5).map((leader, i) => (
                  <div
                    className="flex items-center justify-between gap-4 bg-white p-[10px] rounded-[10px]"
                    key={i}
                  >
                    <div className="flex items-center gap-5">
                      <Image
                        src={leader.img}
                        width={33}
                        height={33}
                        alt="avatar"
                        className="size-[33px] rounded-full object-cover"
                      />
                      <h6 className="text-primary text-xs md:text-base font-bold font-noka">
                        {leader.title}
                      </h6>
                    </div>
                    <p className="text-textColor text-xs md:text-base font-medium font-noka">
                      {leader.mins}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default MintHero;

const AlbumCover = ({ data }) => {
  return (
    <div className="flex flex-col md:flex-row md:items-center gap-4 min-h-[160px] max-h-full">
      <Image
        src={data.albumImg}
        width={256}
        height={256}
        alt="album image"
        className="w-full sm:w-[246px] h-auto"
      />
      <div>
        <p className="text-white text-xs font-medium font-noka">EP</p>
        <h6 className="text-xl md:text-[40px] font-bold font-noka text-white mt-[6px] leading-none max-w-[180px]">
          {data.albumName}
        </h6>
        <div className="flex items-center gap-[7px] mt-3">
          <Image
            src={data.singerImg}
            width={55}
            height={55}
            alt="image"
            className="size-[55px] object-cover rounded-full"
          />
          <div>
            <h6 className="text-white text-xs font-bold font-noka">
              {data.singerName}
            </h6>
            <p className="my-[5px] text-white text-xs font-noka">
              {data.songs?.length} Songs - {data.duration}
            </p>
            <p className="my-[5px] text-white text-xs font-light font-noka">
              7 June 2024
            </p>
          </div>
        </div>
        <div className="mt-4 flex justify-center lg:justify-start items-center gap-5">
          <Button text="Collect" img="/images/default/buy-now-border.png" />
          <div className="flex items-center max-w-[68px]">
            {data?.companyImages.slice(0, 5).map((item, index) => (
              <div
                className="size-[20px] p-1 rounded-full shadow-songShadow -ml-2 grid place-items-center bg-white"
                key={index}
              >
                <Image
                  src={item}
                  width={10}
                  height={10}
                  alt="image"
                  className="size-full rounded-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const SongList = ({ songs }) => {
  return (
    <div className="mt-5 lg:mt-10  border-y border-primary">
      {songs?.map((song, index) => (
        <div
          key={song.id}
          className={`flex justify-between items-center py-[10px] ${
            index !== song?.songs?.length - 1 ? "border-b border-white" : ""
          }`}
        >
          <span className="text-white text-[10px] md:text-base font-noka font-medium ">
            {index + 1}. {song.title}
          </span>
          <div className="flex items-center gap-[10px]">
            <span className="text-white text-[10px] md:text-base font-bold font-noka">
              1:54
            </span>

            <HiPlay color="#fff" size={20} />
          </div>
        </div>
      ))}
    </div>
  );
};
