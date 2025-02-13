"use client";

import { fanIcons } from "@/data/data";
import useWindowWidth from "@/hooks/useWindowWidth";
import Image from "next/image";

const AuthForm = () => {
  const isMobile = useWindowWidth(991);
  return (
    <div
      className="mt-[44px] grid grid-cols-5 gap-6"
      style={{ rowGap: isMobile ? "20px" : "54px" }}
    >
      {fanIcons.map((icon, i) => (
        <Icon key={i} icon={icon} />
      ))}
    </div>
  );
};

export default AuthForm;

const Icon = ({ icon }) => {
  return (
    <button className="size-[84px] grid place-items-center lg:border-[3px] lg:border-[#CED3E4] lg:rounded-full">
      <Image
        src={icon}
        width={36}
        height={36}
        alt="icon"
        className="size-[36px]"
      />
    </button>
  );
};
