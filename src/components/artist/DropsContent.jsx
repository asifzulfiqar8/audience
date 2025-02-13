"use client";
import useWindowWidth from "@/hooks/useWindowWidth";
import MyMerch from "./MyMerch";
import MyMusic from "./MyMusic";
import Image from "next/image";
import Button from "../shared/Button";

const DropsContent = () => {
  const isMobile = useWindowWidth(1024);
  return (
    <>
      <div className="mt-2 block lg:hidden">
        <Image
          src="/images/artist/drops-box.png"
          width={574}
          height={220}
          alt="image"
          className="w-full"
        />
        <div className="bg-[#020000] border border-white rounded-[20px] py-[10px] px-5 lg:p-10 order-2 lg:order-1">
          <h6 className="text-xl lg:text-[40px] text-white font-bold font-noka">
            Balance
          </h6>
          <div className="mt-5 flex items-end justify-between gap-4">
            <p className="text-white text-xs lg:text-base font-medium font-noka">
              34.3435 $VIP
            </p>
            <Button text="Earn $Vip Tokens" />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-[60px]">
        {/* my music sec */}
        <div>
          <MyMusic dropNewMusic={isMobile ? false : true} />
        </div>
        <div>
          <div className="mb-3 hidden lg:block">
            <Image
              src="/images/artist/drops-box.png"
              width={574}
              height={220}
              alt="image"
              className="w-full"
            />
          </div>
          <MyMerch dropNewMerch={isMobile ? false : true} />
        </div>
      </div>
    </>
  );
};

export default DropsContent;
