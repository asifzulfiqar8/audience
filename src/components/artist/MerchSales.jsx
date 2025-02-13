"use client";
import Image from "next/image";
import Button from "../shared/Button";
import { merchSalesData } from "@/data/data";
import useWindowWidth from "@/hooks/useWindowWidth";
import ViewAllBtn from "../shared/ViewAllBtn";

const MerchSales = () => {
  const isMobile = useWindowWidth(1024);
  const merchData = isMobile
    ? merchSalesData.slice(0, 3)
    : merchSalesData.slice(0, 4);
  return (
    <div className="mt-[60px] lg:mt-[120px] bg-[#020000] border border-white rounded-[20px] p-5 lg:p-10">
      <div className="flex items-center justify-center lg:justify-between">
        <h6 className="text-[40px] text-white font-bold font-noka text-center md:text-left">
          {isMobile ? "My Merch" : "Merch Sales"}
        </h6>
        <p className="text-base text-white font-medium font-noka hidden lg:block">
          10 Owned
        </p>
      </div>
      <div className="mt-[50px] lg:mt-10 grid grid-cols-1 lg:grid-cols-2 gap-10">
        {merchData.map((card, i) => (
          <MerchCard key={i} card={card} i={i} merchData={merchData} />
        ))}
      </div>
      <div className="hidden lg:block">
        <ViewAllBtn
          text="Drop New Merch"
          url="artist/upload-merch"
          color="text-white"
        />
      </div>
      <div className="block lg:hidden">
        <ViewAllBtn text="View More" url="" color="text-white" />
      </div>
    </div>
  );
};

export default MerchSales;

const MerchCard = ({ card, i, merchData }) => {
  return (
    <div
      className={`flex flex-col lg:flex-row gap-5 lg:gap-10 xl:gap-[50px] pb-10 ${
        i < merchData.length - 2 ? "border-b border-white" : ""
      }`}
    >
      <Image src={card.image} width={260} height={260} alt="merch image" />
      <div className="flex flex-col justify-between gap-5">
        <p className="text-xs text-white font-medium font-noka flex items-center gap-1">
          Total Sold - <span className="font-bold">12</span>{" "}
          <span className="bg-white h-[70%] w-[1px] inline-block"></span> Total
          Earned - $<span className="font-bold">360</span>
        </p>
        <div>
          <span className="text-xs text-white font-medium font-noka">
            T-Shirt
          </span>
          <h6 className="text-[40px] font-bold text-white font-noka max-w-[215px] leading-9">
            The Audience Economy
          </h6>
        </div>
        <div>
          <Button text="See Revenue" />
        </div>
      </div>
    </div>
  );
};
