import Image from "next/image";
import SectionHeading from "../shared/SectionHeading";
import Paragraph from "../shared/Paragraph";
import { offerData } from "@/data/data";
import ViewAllBtn from "../shared/ViewAllBtn";
import Button from "../shared/Button";

const OurOffer = () => {
  return (
    <section className="w-full bg-white">
      <section className="container mx-auto px-10 pt-[60px] lg:pt-0 pb-[60px]">
        <SectionHeading textOne="Our" textTwo="Offer" />
        <div className="mt-5 lg:mt-[40px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {offerData.map((offer, i) => (
            <Offer offer={offer} key={i} i={i} />
          ))}
        </div>
        <div className="mt-[34px] lg:mt-[44px]">
          <div className="hidden lg:block">
            <ViewAllBtn url="" text="View Pricing & Packages" />
          </div>
          <div className="flex lg:hidden justify-center">
            <Button text="View Pricing & Packages" color="text-black" />
          </div>
        </div>
      </section>
    </section>
  );
};

export default OurOffer;

const Offer = ({ offer, i }) => {
  return (
    <div
      className={`flex flex-col items-center md:items-start gap-5 pb-5 p-0 md:p-5 ${
        i < offerData.length - 1
          ? "border-b-[0.5px] md:border-none border-[#ff00007f]"
          : ""
      }`}
    >
      <Image
        src={offer.image}
        width={90}
        height={90}
        alt="offer image"
        className="size-[45px] lg:size-[90px]"
      />
      <h6 className="text-primary text-xl lg:text-[30px] font-bold font-noka">
        {offer.title}
      </h6>
      <Paragraph text={offer.text} color="text-black" />
    </div>
  );
};
