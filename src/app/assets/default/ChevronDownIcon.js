"use client";

import useWindowWidth from "@/hooks/useWindowWidth";

const ChevronDownIcon = () => {
  const isMobile = useWindowWidth(768);
  return (
    <svg
      width={isMobile ? 16 : 26}
      height={isMobile ? 16 : 26}
      viewBox="0 0 26 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="12.9998" cy="12.9998" r="12.9998" fill="black" />
      <path
        d="M20.1389 10.1111L13 17.25L5.86113 10.1111"
        stroke="#FF0000"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default ChevronDownIcon;
