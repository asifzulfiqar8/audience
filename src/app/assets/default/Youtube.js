"use client";
import useWindowWidth from "@/hooks/useWindowWidth";

const Youtube = () => {
  const isMobile = useWindowWidth(768);

  return (
    <svg
      width={isMobile ? 17 : 47}
      height={isMobile ? 17 : 37}
      viewBox="0 0 47 37"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M38.4127 1.23558C31.3549 0.753829 15.6353 0.755787 8.58729 1.23558C0.955667 1.7565 0.0567917 6.36641 0 18.5002C0.0567917 30.6125 0.947834 35.242 8.58729 35.7649C15.6373 36.2447 31.3549 36.2467 38.4127 35.7649C46.0443 35.244 46.9432 30.6341 47 18.5002C46.9432 6.38795 46.0522 1.75845 38.4127 1.23558ZM17.625 26.3336V10.6669L33.2917 18.4865L17.625 26.3336Z"
        fill="white"
      />
    </svg>
  );
};

export default Youtube;
