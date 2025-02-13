"use client";
import useWindowWidth from "@/hooks/useWindowWidth";
import SectionHeading from "../shared/SectionHeading";
import Paragraph from "../shared/Paragraph";
import Image from "next/image";

const brandImages = [
  "/images/qr/brand-qr-1.png",
  "/images/qr/brand-qr-2.png",
  "/images/qr/brand-qr-3.png",
  "/images/qr/brand-qr-4.png",
];

const CustomQr = () => {
  const isWidthGreaterThan991 = useWindowWidth(1280);
  return (
    <section className="w-full bg-white">
      <section className="container mx-auto px-10 pt-[27px] md:pt-10 pb-[60px] lg:py-[120px]">
        <SectionHeading
          textOne="QR Codes Custom To  Your"
          textTwo="Project And Brand"
          br={isWidthGreaterThan991 ? false : true}
          leading="leading-none"
        />
        <div className="mt-2 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-[50px]">
          <div className="flex items-center order-2 lg:order-1">
            <Paragraph
              color="text-black"
              text="Make your album cover stand out and drive engagement with our one-of-a-kind, fully customisable QR code builder. Seamlessly integrate a unique QR code into your cover design, personalised with custom backgrounds, colours, shapes, and even image uploads - offering a creative touch like nowhere else."
            />
          </div>
          <div className="flex justify-center order-1 lg:order-2 mt-5 lg:mt-0">
            <Image
              src="/images/about/qr-images.png"
              width={500}
              height={346}
              alt="qr-codes"
            />
          </div>
        </div>
        <div className="mt-[50px] hidden xl:flex items-center">
          {brandImages.map((img, i) => (
            <Image
              key={i}
              src={img}
              width={346}
              height={333}
              alt="qr images"
              className="w-full h-auto -ml-[100px]"
            />
          ))}
        </div>
      </section>
    </section>
  );
};

export default CustomQr;
