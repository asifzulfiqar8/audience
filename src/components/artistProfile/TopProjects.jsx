"use client";
import Image from "next/image";
import SectionHeading from "../shared/SectionHeading";
import Button from "../shared/Button";
import { dropsList, topProjectsData } from "@/data/data";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

const TopProjects = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <section className="w-full bg-white">
      <section className="container mx-auto lg:px-10 py-[60px]">
        <SectionHeading textOne="TOP" textTwo="Projects" />
        <div className="mt-[60px] gap-5 lg:gap-[60px] hidden lg:flex">
          {topProjectsData.slice(0, 5).map((data, i) => (
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
            {topProjectsData.slice(0, 5).map((list, index) => (
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
        <div className="mt-[34px] flex lg:hidden justify-center">
          <Button text="View All" color="text-black" />
        </div>
      </section>
    </section>
  );
};

export default TopProjects;

const DropsCard = ({ data }) => {
  return (
    <div className="w-full md:w-[200px] flex flex-col">
      <Image
        src={data?.image}
        width={185}
        height={185}
        alt="image"
        className="w-full h-[185px] object-cover"
      />
      <div className="bg-[#EDEDED] rounded-bl-[10px] rounded-br-[10px] px-[5px] py-[10px] flex items-center gap-[7px]">
        <Image
          src={data?.userImg}
          width={55}
          height={55}
          alt="image"
          className="size-[55px] object-cover rounded-full"
        />
        <div>
          <h6 className="text-[#000] text-xs font-bold font-noka">
            {data?.userName}
          </h6>
          <p className="my-[5px] text-[#000] text-[10px] font-light font-noka">
            {data?.songs} - {data?.duration}
          </p>
          <p className="my-[5px] text-[#000] text-[10px] font-light font-noka">
            {data?.date}
          </p>
        </div>
      </div>
      <div className="mt-[10px]">
        <p className="text-xs text-[#000] font-medium font-noka">
          {data?.album}
        </p>
        <h6 className="text-[#000] text-xl lg:text-[32px] leading-none font-bold font-noka">
          {data?.albumName}
        </h6>
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
