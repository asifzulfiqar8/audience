"use client";
import Image from "next/image";
import Button from "../shared/Button";
import { analyticsData } from "@/data/data";
import useWindowWidth from "@/hooks/useWindowWidth";
import ViewAllBtn from "../shared/ViewAllBtn";

const AnalyticsSec = () => {
  const isMobile = useWindowWidth(1024);
  return (
    <div className="mt-[50px] bg-[#020000] border border-white rounded-[20px] p-5 lg:p-10">
      <h6 className="text-[40px] text-white font-bold font-noka text-center md:text-left">
        {isMobile ? "My Music" : "Analytics"}
      </h6>
      <div className="flex flex-col gap-8 lg:gap-10"></div>
      {analyticsData.slice(0, 3).map((item, index) => (
        <Analytic analytic={item} key={index} />
      ))}
    </div>
  );
};

export default AnalyticsSec;

const Analytic = ({ analytic }) => {
  return (
    <div className="mt-8 lg:mt-10 flex flex-col lg:flex-row lg:items-center gap-6 pb-8 lg:pb-10 border-b border-white">
      <div className="size-150px object-cover">
        <Image
          src={analytic.image}
          width={150}
          height={150}
          alt="image"
          className="size-full sm:size-[150px] object-cover"
        />
      </div>
      <div className="flex flex-col justify-between gap-4 h-full">
        <p className="text-xs font-medium text-white font-noka">
          Total Mints - <span className="font-bold">{analytic.totalMins}</span>
        </p>
        <h6 className="text-[40px] font-bold text-white font-noka max-w-[225px] leading-9">
          {analytic.title}
        </h6>
        <div>
          <Button text="View Data" img="/images/default/buy-now-border.png" />
        </div>
      </div>
      <div className="overflow-x-scroll custom-scroll pb-6 w-full lg:flex-1 flex gap-[36px]">
        {analytic.images.map((data, i) => (
          <List data={data} key={i} />
        ))}
      </div>
      <div className="block lg:hidden">
        <ViewAllBtn text="View More" url="" color="text-white" />
      </div>
    </div>
  );
};

const List = ({ data }) => {
  return (
    <div className="flex flex-col items-center gap-5">
      <div className="size-[80px] bg-white rounded-full object-cover grid place-items-center p-[10px]">
        <Image
          src={data.image}
          width={45}
          height={45}
          alt="image"
          className="size-[45px] object-cover"
        />
      </div>
      <div>
        <p className="text-center text-xs text-white font-medium font-noka">
          Total Mints
        </p>
        <p className="text-center text-xs text-white font-bold font-noka">
          {data.totalMins}
        </p>
        <div className="mt-1">
          <p className="text-center text-xs text-white font-medium font-noka">
            Total Earned
          </p>
          <p className="text-center text-xs text-white font-bold font-noka">
            {data.totalEarned}
          </p>
        </div>
      </div>
    </div>
  );
};
