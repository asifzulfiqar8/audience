"use client";
import useWindowWidth from "@/hooks/useWindowWidth";
import Image from "next/image";
import { useState } from "react";
import { Autoplay, Thumbs } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const ImageGallery = ({ images }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const isMobile = useWindowWidth(1024);

  return (
    <div className="flex flex-col-reverse lg:flex-row items-center gap-6">
      {/* Thumbnail Images (Left Side) */}
      <Swiper
        onSwiper={(swiper) => setThumbsSwiper(swiper)}
        direction={isMobile ? "horizontal" : "vertical"}
        spaceBetween={10}
        slidesPerView={3}
        freeMode
        watchSlidesProgress
        className="h-[80px] lg:h-[408px] w-[288px] lg:w-auto"
      >
        {images?.map((img, index) => (
          <SwiperSlide key={index} className="cursor-pointer p-1">
            <Image
              src={img}
              alt={`Thumbnail ${index}`}
              width={120}
              height={120}
              className={`border border-black rounded-[10px] object-contain transition-opacity duration-300 size-full ${
                activeIndex === index ? "opacity-100" : "opacity-50"
              }`}
              unoptimized
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Main Image Slider (Right Side) */}
      <Swiper
        spaceBetween={10}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[Thumbs, Autoplay]}
        autoplay={{ delay: 3000, disableOnInteraction: true }}
        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
        className="border border-black rounded-[10px] w-full"
      >
        {images?.map((img, index) => (
          <SwiperSlide key={index}>
            <Image
              src={img}
              alt={`Product ${index}`}
              width={545}
              height={545}
              className="object-cover w-full h-[310px] lg:h-[545px]"
              unoptimized
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ImageGallery;
