"use client";
import Image from "next/image";
import SectionHeading from "../shared/SectionHeading";
import Button from "../shared/Button";
import { dropsList } from "@/data/data";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import ViewAllBtn from "../shared/ViewAllBtn";

const PopularAlbums = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <section className="w-full bg-white bg-[url('/images/browse-music/popular-bg.png')] bg-cover bg-center bg-no-repeat">
      <section className="container mx-auto lg:px-10 py-[60px] lg:pt-[80px] lg:pb-[60px]">
        <SectionHeading
          textOne="Popular"
          textTwo={
            <>
              Albums <span className="text-white">&</span> Singles
            </>
          }
          color="text-white"
        />
        <div className="mt-[60px] justify-between gap-5 hidden lg:flex">
          {dropsList.slice(0, 5).map((data, i) => (
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
            {dropsList.slice(0, 5).map((list, index) => (
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
        <div className="mt-[34px] lg:mt-[57px]">
          <div className="hidden lg:block">
            <ViewAllBtn url="" color="text-white" />
          </div>
          <div className="flex justify-center lg:hidden">
            <Button text="View All" />
          </div>
        </div>
      </section>
    </section>
  );
};

export default PopularAlbums;

const DropsCard = ({ data }) => {
  return (
    <div className="w-full md:w-[200px] flex flex-col">
      <Image
        src={data?.songImg}
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
          <h6 className="text-textColor text-xs font-bold font-noka">
            {data?.userName}
          </h6>
          <p className="my-[5px] text-textColor text-[10px] font-">
            {data?.songs} - {data?.duration}
          </p>
          <p className="my-[5px] text-textColor text-[10px] font-light font-noka">
            {data?.date}
          </p>
        </div>
      </div>
      <div className="mt-[10px]">
        <p className="text-xs text-white font-medium font-noka">
          {data?.album}
        </p>
        <h6 className="text-white text-xl lg:text-[32px] leading-none font-bold font-noka">
          {data?.albumName}
        </h6>
      </div>
      <div className="mt-4 flex flex-1 items-end justify-between">
        <Button
          text="Buy Now"
          color="text-white"
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
