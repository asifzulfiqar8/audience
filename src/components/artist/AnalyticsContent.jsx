import Image from "next/image";
import Button from "../shared/Button";
import AnalyticsSec from "./AnalyticsSec";
import MerchSales from "./MerchSales";

const AnalyticsContent = () => {
  return (
    <div className="lg:mt-[60px]">
      <div className="flex gap-8">
        <TopTrack />
        <div className="basis-full lg:basis-[50%]">
          <Image
            src="/images/artist/analytics-box.png"
            width={600}
            height={251}
            alt="image"
            className="w-full h-auto hidden lg:block"
          />
          <Image
            src="/images/artist/analytics-box-mobile.png"
            width={600}
            height={251}
            alt="image"
            className="w-full h-auto mt-2 block lg:hidden"
          />
        </div>
      </div>
      {/* Analytics section */}
      <AnalyticsSec />
      {/* Merch Sales Sec */}
      <MerchSales />
    </div>
  );
};

export default AnalyticsContent;

const TopTrack = () => {
  return (
    <div className="bg-[#020000] border border-white rounded-[20px] p-10 basis-1/2 hidden lg:block max-h-max">
      <div className="flex items-center justify-between gap-4">
        <h6 className="text-[40px] font-bold text-white font-noka">
          Top Track
        </h6>
        <p className="text-base font-medium text-white font-noka">10 Owned</p>
      </div>
      <div className="mt-10 flex justify-between gap-10">
        <Image
          src="/images/home/song-image-1.png"
          width={100}
          height={100}
          alt="image"
          className="size-[100px]"
        />
        <div>
          <p className="text-xs font-medium text-white font-noka">
            Released - 12th March 2024
          </p>
          <h6 className="text-[40px] font-bold text-white font-noka leading-9 mt-3">
            Tunes For Late Spring
          </h6>
        </div>
        <div className="flex flex-col justify-between">
          <p className="text-xs font-medium text-white font-noka text-nowrap">
            Total Mints - 300 <br /> Total Earned - 30000
          </p>
          <div>
            <Button text="View Data" img="/images/default/buy-now-border.png" />
          </div>
        </div>
      </div>
    </div>
  );
};
