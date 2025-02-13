"use client";
import Image from "next/image";
import SectionHeading from "../shared/SectionHeading";
import Paragraph from "../shared/Paragraph";
import useWindowWidth from "@/hooks/useWindowWidth";
import Button from "../shared/Button";

const RoyaltiesSec = () => {
  const isWidthGreaterThan991 = useWindowWidth(1280);
  return (
    <section className="w-full bg-white">
      <section className="container mx-auto px-10 py-[60px] lg:pt-[120px] lg:pb-0">
        <SectionHeading
          textOne="Royalties For"
          textTwo="Every single SALE."
          br={isWidthGreaterThan991 ? true : false}
          leading="leading-tight lg:leading-none"
        />
        <div className="mt-2 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-[50px]">
          <div className="mt-5 lg:mt-[44px]">
            <Paragraph
              mw="max-w-[543px]"
              color="text-black"
              text="Welcome to the future of music distribution and fan engagement. Our platform empowers Direct sales on cutting edge crypto music platforms, while rewarding true fans—your VIPs—with exclusive, unforgettable experiences."
            />
            <div className="mt-[30px] lg:mt-[44px] flex justify-center md:justify-start">
              <Button text="Start Earning Today" color="text-black" />
            </div>
          </div>
          <div className="hidden lg:flex justify-center">
            <Image
              src="/images/home/vip-tokens.png"
              width={553}
              height={401}
              alt="qr-codes"
              className="max-w-[553px]"
            />
          </div>
        </div>
      </section>
    </section>
  );
};

export default RoyaltiesSec;
