"use client";
import useWindowWidth from "@/hooks/useWindowWidth";
import GradientHeading from "../shared/GradientHeading";
import Button from "../shared/Button";
import Image from "next/image";

const Welcome = () => {
  const isMobile = useWindowWidth(991);
  return (
    <div>
      <div className="flex justify-center">
        <GradientHeading text={<>Welcome Back {isMobile && <br />} Theo.</>} />
      </div>
      <div className="mt-5 lg:mt-[84px] grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8">
        {/* left column */}
        <div className="bg-[#020000] border border-white rounded-[20px] py-[10px] px-5 lg:p-10 order-2 lg:order-1">
          <h6 className="text-xl lg:text-[40px] text-white font-bold font-noka">
            Balance
          </h6>
          <div className="mt-5 flex items-end justify-between gap-4">
            <p className="text-white text-xs lg:text-base font-medium font-noka">
              Coming soon...
            </p>
            <Button text="Earn $Vip Tokens" />
          </div>
        </div>
        {/* right column */}
        <div className="relative h-[200px] max-h-[147px] order-1 lg:order-2">
          <Image
            src="/images/fan/headphone.png"
            width={120}
            height={110}
            alt="headphone image"
            className="w-[60px] md:w-[120px] absolute bottom-0 right-0"
          />

          <Image
            src="/images/fan/chatbox.png"
            width={400}
            height={150}
            alt="headphone image"
            className="hidden md:block w-[89%] max-h-[135px] absolute bottom-4 right-[12%]"
          />
          <Image
            src="/images/fan/chatbox-mobile.png"
            width={245}
            height={110}
            alt="headphone image"
            className="block md:hidden w-[89%] max-h-[120px] absolute bottom-4 right-[12%]"
          />
          <div className="absolute top-[25%] md:top-[10%] left-[2%]">
            <h6 className="text-black text-xs md:text-lg font-bold font-noka">
              Welcome to your dashboard!
            </h6>
            <h6 className="text-white text-xs md:text-lg font-medium md:font-bold font-noka">
              View your balance, transactions, <br /> owned tracks and discover
              new ones!
            </h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
