import Image from "next/image";
import GradientHeading from "../shared/GradientHeading";
import { HiOutlineArrowLongRight } from "react-icons/hi2";
import { HiOutlineArrowSmRight } from "react-icons/hi";
import MetaDataForm from "./MetaDataForm";

const UploadMeta = () => {
  return (
    <div className="w-full">
      <Image
        src="/images/default/logo.png"
        width={235}
        height={51}
        alt="logo"
        className="w-[200px] md:w-[235px] h-auto hidden lg:block"
      />
      <div className="lg:mt-[40px]">
        <GradientHeading
          textSize="text-[30px] md:text-[40px]"
          text="Upload Your Meta Data"
          linearGradient="linear-gradient(186.81deg, #FF0000 28.73%, #00071D 98.49%)"
        />
      </div>
      <div className="mt-8 md:mt-5 max-w-[500px] bg-black rounded-[10px] p-[10px] md:px-5 md:py-[10px] flex items-center justify-around gap-2 md:gap-5 ">
        <h6 className="px-[10px] md:px-4 py-[5px] md:py-[10px] bg-primary rounded-[10px] text-white text-xs md:text-lg font-medium font-noka">
          1 - Artist Information
        </h6>
        <div className="block lg:hidden">
          <HiOutlineArrowSmRight className="text-white text-xl" />
        </div>
        <div className="hidden lg:block">
          <HiOutlineArrowLongRight className="text-white text-[28px]" />
        </div>
        <h6 className="px-4 py-[10px] bg-[#FFFFFF1A] rounded-[10px] text-white text-xs md:text-lg font-medium font-noka">
          2- Payment
        </h6>
      </div>
      <p className="mt-5 md:mt-7 text-xl font-bold font-noka text-textColor">
        <span className="block lg:hidden">Enter Optional Information</span>
        <span className="hidden lg:block">Enter All Your Information</span>
      </p>
      {/* metadata form */}
      <MetaDataForm />
    </div>
  );
};

export default UploadMeta;
