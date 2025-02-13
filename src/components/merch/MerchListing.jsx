"use client";
import { useState } from "react";
import Image from "next/image";
import Button from "../shared/Button";
import { merchLists } from "@/data/data";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

const MerchListing = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="w-full">
      <section className="container mx-auto lg:px-10 py-[60px] lg:py-[120px]">
        <div className="hidden lg:block">
          <div className="grid grid-cols-5 gap-5" style={{ rowGap: "60px" }}>
            {merchLists.map((data, i) => (
              <DropsCard key={i} data={data} />
            ))}
          </div>
          <div className="flex justify-center mt-[40px]">
            <button
              className={`uppercase text-xs md:text-lg font-noka font-bold relative text-textColor w-full block text-center`}
            >
              Load More
              <Image
                src="/images/default/merch-viewall-border.png"
                width={1500}
                height={9}
                className="absolute -bottom-[4px] left-0"
                alt="button-border-img w-full"
              />
            </button>
          </div>
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
            {merchLists.slice(0, 5).map((list, index) => (
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
      </section>
    </section>
  );
};

export default MerchListing;

const DropsCard = ({ data }) => {
  return (
    <div className="w-full max-w-[220px] md:w-[200px] flex flex-col">
      <Image
        src={data?.merchImg}
        width={185}
        height={185}
        alt="image"
        className="w-full h-[185px] object-cover"
      />
      <div className="mt-6">
        <p className="text-xs text-[#000] font-medium font-noka">
          {data?.type}
        </p>
        <h6 className="text-[#000] text-xl lg:text-[32px] leading-none font-bold font-noka">
          {data?.merchName}
        </h6>
        <p className="text-primary text-xl font-medium font-noka ">
          £{data?.price}
        </p>
      </div>
      <div className="mt-4 flex flex-1 items-end justify-between">
        <Button
          link={`products/${data._id}`}
          text="View"
          color="text-[#000]"
          img="/images/default/view-border.png"
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
