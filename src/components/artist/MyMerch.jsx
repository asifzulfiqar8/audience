"use client";
import Image from "next/image";
import Button from "../shared/Button";
import useWindowWidth from "@/hooks/useWindowWidth";
import ViewAllBtn from "../shared/ViewAllBtn";
import { myMerchData } from "@/data/data";

const MyMerch = ({ dropNewMerch }) => {
  const isMobile = useWindowWidth(1024);
  const musicData = isMobile ? myMerchData.slice(0, 3) : myMerchData;
  return (
    <div className="border border-white p-5 lg:p-10 rounded-[20px] bg-[#040000]">
      <div className="flex items-center justify-center lg:justify-between gap-5">
        <h6 className="text-[40px] font-bold font-noka text-white">My Merch</h6>
        <p className="text-base font-medium font-noka text-white hidden lg:block">
          10 Owned
        </p>
      </div>
      <div className="mt-10 lg:max-h-[650px] flex flex-col gap-10 lg:overflow-y-scroll custom-scroll pr-4 md:pr-10">
        {musicData.map((merch, i) => (
          <Merch key={i} merch={merch} />
        ))}
        <div className="mt-10 block lg:hidden">
          <ViewAllBtn url="" text="View More" color="text-white" />
        </div>
      </div>
      {dropNewMerch && (
        <div className="mt-10">
          <ViewAllBtn
            url="/artist/upload-merch"
            text="Drop New Merch"
            color="text-white"
          />
        </div>
      )}
    </div>
  );
};

export default MyMerch;

const Merch = ({ merch }) => {
  return (
    <div className="flex flex-col md:flex-row gap-5 md:gap-5 pb-10 border-b border-white">
      <div className="flex-1 max-w-[350px] sm:max-w-[260px]">
        <Image
          src={merch.image}
          width={259}
          height={259}
          alt="album image"
          className="h-full w-full object-cover flex-1"
        />
      </div>
      <div className="flex flex-col justify-between gap-4 lg:gap-10">
        <p className="text-xs font-medium text-white font-noka hidden lg:block">
          Released: {merch.released}
        </p>
        <div>
          <p className="text-white text-xs font-medium font-noka">
            {merch.shirt}
          </p>
          <h6 className="text-xl md:text-[40px] font-bold font-noka text-white mt-[6px] leading-none max-w-[230px]">
            {merch.title}
          </h6>
        </div>
        <div>
          <Button
            type="button"
            text="See Revenue"
            img="/images/default/pricing-border.png"
          />
        </div>
      </div>
    </div>
  );
};
