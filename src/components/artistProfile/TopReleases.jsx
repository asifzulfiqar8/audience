"use client";
import Image from "next/image";
import SectionHeading from "../shared/SectionHeading";
import Button from "../shared/Button";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import ViewAllBtn from "../shared/ViewAllBtn";
import { topReleasesData } from "@/data/data";

const OurMerch = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <section className="w-full bg-white">
      <section className="container mx-auto lg:px-10 pt-[60px] lg:pt-[120px] pb-[60px]">
        <SectionHeading textOne="TOP" textTwo="Releases" />
        <div className="mt-[60px] justify-between gap-5 hidden lg:flex">
          {topReleasesData.slice(0, 5).map((data, i) => (
            <DropsCard key={i} data={data} />
          ))}
        </div>
        <div className="mt-5 md:mt-10 block lg:hidden">
          <Swiper
            modules={[Autoplay, Navigation]}
            slidesPerView={1.8}
            spaceBetween={20}
            centeredSlides={true}
            loop={true}
            autoplay={{ delay: 3000, disableOnInteraction: true }}
            breakpoints={{
              576: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
            }}
            onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
            className={`relative`}
          >
            {topReleasesData.slice(0, 5).map((list, index) => (
              <SwiperSlide
                className={`mx-auto transition-opacity duration-500 !h-full ${
                  activeIndex === index
                    ? "opacity-100 scale-100"
                    : "opacity-50 scale-90"
                }`}
                key={index}
              >
                <DropsCard data={list} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="mt-8 hidden lg:flex justify-center">
          <ViewAllBtn url="" />
        </div>
      </section>
    </section>
  );
};

export default OurMerch;

const DropsCard = ({ data }) => {
  return (
    <div className="w-full md:w-[200px] flex flex-col">
      <Image
        src={data?.artistImg}
        width={185}
        height={185}
        alt="image"
        className="w-full h-[185px] object-cover"
      />
      <div className="mt-6">
        <p className="text-xs text-[#000] font-medium font-noka">
          {data?.type}
        </p>
        <h6 className="text-[#000] text-xl lg:text-[32px] leading-none font-bold font-noka mt-1">
          {data?.name}
        </h6>
        <p className="text-textColor text-xs font-medium font-noka ">
          {data?.tags}
        </p>
      </div>
      <div className="mt-4 flex flex-1 items-end justify-between">
        <Button
          text="Buy Now"
          color="text-[#000]"
          img="/images/default/buy-now-border.png"
        />
        <div className="flex items-center max-w-[89px]">
          {data?.companyImages.slice(0, 5).map((item, index) => (
            <div
              className="size-[30px] p-1 rounded-full shadow-songShadow -ml-3 grid place-items-center bg-white"
              key={index}
            >
              <Image
                src={item}
                width={18}
                height={18}
                alt="image"
                className="size-full rounded-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
