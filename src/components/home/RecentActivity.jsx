"use client";
import Image from "next/image";
import SectionHeading from "../shared/SectionHeading";
import useWindowWidth from "@/hooks/useWindowWidth";

const RecentActivity = () => {
  const isMobile = useWindowWidth(1024);
  const items = Array.from({ length: isMobile ? 4 : 12 });
  return (
    <section className="w-full bg-white">
      <section className="container mx-auto px-10 py-[60px]">
        <SectionHeading textOne="Recent" textTwo="ACTIVITY" />
        <div
          className="mt-[34px] lg:mt-[90px] grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-[56px]"
          style={{ rowGap: "30px" }}
        >
          {items.map((item, i) => (
            <RecentList
              data={item}
              key={i}
              i={i}
              items={items}
              isMobile={isMobile}
            />
          ))}
        </div>
      </section>
    </section>
  );
};

export default RecentActivity;

const RecentList = ({ data, i, items, isMobile }) => {
  return (
    <div>
      <div className="bg-[#F3F3F3] rounded-[10px] p-[10px] flex items-center justify-between">
        <div className="flex gap-5">
          <Image
            src="/images/home/song-image-1.png"
            width={65}
            height={65}
            alt="image"
            className="size-[65px] object-cover"
          />
          <div className="text-[#000]">
            <p className="text-sm font-medium font-noka">EP</p>
            <h6 className="my-1">Tunes For Late Spring</h6>
            <div className="flex items-center gap-4">
              <p className="text-sm font-medium font-noka">0.001 SOL</p>
              <div className="bg-white size-[14px] rounded-full p-1 grid place-items-center">
                <Image
                  src="/images/home/recent-activity-logo.png"
                  width={8}
                  height={8}
                  alt="image"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
        <p className="text-[#000]"></p>
      </div>
      {isMobile
        ? i < items.length - 1 && (
            <div className="w-full h-[1px] bg-[#000] mt-[30px]"></div>
          )
        : i < items.length - 2 && (
            <div className="w-full h-[1px] bg-[#000] mt-[30px]"></div>
          )}
    </div>
  );
};
