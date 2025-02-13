"use client";
import Image from "next/image";
import SectionHeading from "../shared/SectionHeading";
import { unlockSecData } from "@/data/data";
import Button from "../shared/Button";
import useWindowWidth from "@/hooks/useWindowWidth";

const UnlockVIP = () => {
  const isMobile = useWindowWidth();
  return (
    <section className="w-full bg-white">
      <section className="container mx-auto px-10 py-5">
        <SectionHeading
          leading="leading-none"
          textOne="Unlock"
          textTwo="VIP Benefits"
          br={isMobile ? true : false}
        />
        <div className="mt-6 lg:mt-[40px] grid grid-cols-1 lg:grid-cols-12 lg:gap-[70px]">
          <div className="lg:col-span-5 hidden lg:block">
            <Image
              src="/images/landing/unlock-img.png"
              alt="image"
              width={506}
              height={673}
              className="w-full h-auto"
            />
          </div>
          <div className="lg:col-span-7 flex flex-col gap-6 justify-between">
            {unlockSecData.map((data, index) => (
              <VipList key={index} data={data} />
            ))}
          </div>
        </div>
        <div className="mt-[34px] lg:mt-[45px] flex justify-center">
          <Button
            text="Browse Tracks"
            color="text-black"
            img="/images/default/pricing-border.png"
          />
        </div>
      </section>
    </section>
  );
};

export default UnlockVIP;

const VipList = ({ data }) => {
  return (
    <div className="flex flex-col md:flex-row items-center gap-5">
      <Image
        src={data.img}
        alt="image"
        width={80}
        height={80}
        className="size-[40px] lg:size-[80px]"
      />
      <div>
        <h6 className="text-primary text-center md:text-left text-xs md:text-xl font-bold font-noka">
          {data.title}
        </h6>
        <p className="text-black text-center md:text-left text-xs md:text-xl font-medium font-noka max-w-[212px] md:max-w-full">
          {data.description}
        </p>
      </div>
    </div>
  );
};
