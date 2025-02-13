import Image from "next/image";
import GradientHeading from "../shared/GradientHeading";
import UploadMerchForm from "./UploadMerchForm";

const UploadMerchSec = () => {
  return (
    <section className="bg-white w-full">
      <section className="container mx-auto px-10 py-[60px] lg:pt-[42px] lg:pb-[120px] grid grid-cols-1 lg:grid-cols-12 gap-4">
        <div className="hidden lg:block lg:col-span-5">
          <Image
            src="/images/artist/upload-merch.png"
            alt="upload-merch"
            width={457}
            height={1200}
          />
        </div>
        <div className="lg:col-span-1"></div>
        <div className="lg:col-span-6 flex flex-col justify-center">
          <Image
            src="/images/default/logo.png"
            width={235}
            height={51}
            alt="logo"
            className="w-[200px] md:w-[235px] h-auto hidden lg:block"
          />
          <div className="lg:mt-[40px]">
            <h6
              className="text-2xl lg:text-[40px] font-bold font-noka text-center md:text-left"
              style={{
                background:
                  "linear-gradient(186.81deg, #FF0000 28.73%, #00071D 98.49%)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Upload Your Merch
            </h6>
            <p className="mt-5 lg:mt-[60px] text-center md:text-left text-textColor text-xs md:text-xl font-bold font-noka">
              Enter All Your Information
            </p>
          </div>
          <UploadMerchForm />
        </div>
      </section>
    </section>
  );
};

export default UploadMerchSec;
