"use client";
import Image from "next/image";
import SectionHeading from "../shared/SectionHeading";
import Paragraph from "../shared/Paragraph";
import useWindowWidth from "@/hooks/useWindowWidth";
import Button from "../shared/Button";

const DistributionSec = () => {
  const isWidthGreaterThan991 = useWindowWidth(1280);
  return (
    <section className="w-full bg-white">
      <section className="container mx-auto px-10 py-[60px] lg:pt-[120px] lg:pb-4">
        <div className="mb-[60px] lg:mb-[112px]">
          <Image
            src="/images/qr/available-now.png"
            width={1200}
            height={462}
            alt="available now image"
            className="w-full"
          />
        </div>
        <SectionHeading
          textOne="Free Distribution Fees"
          textTwo="For Every QR Code Purchased"
          br
          leading="leading-tight lg:leading-none"
        />
        <div className="mt-2 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-[50px]">
          <div className="mt-5 lg:mt-[44px]">
            <Paragraph
              color="text-black"
              text="Make your album cover stand out and drive engagement with our one-of-a-kind, fully customisable QR code builder. Seamlessly integrate a unique QR code into your cover design, personalised with custom backgrounds, colours, shapes, and even image uploads - offering a creative touch like nowhere else."
            />
            <div className="mt-[30px] lg:mt-[44px] flex justify-center md:justify-start">
              <Button text="BOOK A CONSULTATION" color="text-black" />
            </div>
          </div>
          <div className="hidden lg:flex justify-center">
            <Image
              src="/images/qr/distribution-img.png"
              width={500}
              height={346}
              alt="qr-codes"
            />
          </div>
        </div>
      </section>
    </section>
  );
};

export default DistributionSec;
