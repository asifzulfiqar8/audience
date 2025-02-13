"use client";
import Image from "next/image";
import SectionHeading from "../shared/SectionHeading";
import Paragraph from "../shared/Paragraph";
import useWindowWidth from "@/hooks/useWindowWidth";
import Button from "../shared/Button";

const brandImages = [
  "/images/qr/brand-qr-1.png",
  "/images/qr/brand-qr-2.png",
  "/images/qr/brand-qr-3.png",
  "/images/qr/brand-qr-4.png",
];

const CustomQR = () => {
  const isWidthGreaterThan991 = useWindowWidth(1280);
  return (
    <section className="w-full bg-white">
      <section className="container mx-auto px-10 py-[60px]">
        <SectionHeading
          textOne="Unique & Custom"
          textTwo="QR Codes"
          br={isWidthGreaterThan991 ? true : false}
          leading="leading-tight lg:leading-none"
        />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-[50px] mt-5 lg:mt-10">
          <div>
            <Paragraph
              mw="max-w-[543px]"
              color="text-black"
              text="Effortlessly consolidate your tech stack. Manage campaigns, promotions, QR codes, links, and your audience database."
            />
            <div className="mt-[30px] lg:mt-[44px] flex justify-center md:justify-start">
              <Button text="Learn More" color="text-black" />
            </div>
          </div>
          <div className="flex justify-center">
            <Image
              src="/images/landing/qr-image.png"
              width={446}
              height={112}
              alt="qr-codes"
              className="max-w-[350px] lg:max-w-[446px] h-[88px] lg:h-[112px]"
            />
          </div>
        </div>
        <div className="mt-[60px] lg:mt-[89px] flex flex-wrap lg:flex-nowrap items-center justify-center">
          {brandImages.map((img, i) => (
            <Image
              key={i}
              src={img}
              width={isWidthGreaterThan991 ? 168 : 346}
              height={isWidthGreaterThan991 ? 163 : 333}
              alt="qr images"
              className="lg:w-full h-auto lg:-ml-[100px]"
            />
          ))}
        </div>
      </section>
    </section>
  );
};

export default CustomQR;
