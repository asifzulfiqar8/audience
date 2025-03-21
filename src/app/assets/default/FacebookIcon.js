"use client";
import useWindowWidth from "@/hooks/useWindowWidth";

const FacebookIcon = () => {
  const isMobile = useWindowWidth(768);

  return (
    <svg
      width={isMobile ? 17 : 47}
      height={isMobile ? 17 : 47}
      viewBox="0 0 47 47"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_1_14144)">
        <path
          d="M44.4052 0H2.59479C1.16129 0 0 1.16129 0 2.59479V44.4072C0 45.8387 1.16129 47 2.59479 47H25.1058V28.7993H18.9802V21.7062H25.1058V16.4755C25.1058 10.4046 28.813 7.09896 34.2297 7.09896C36.8245 7.09896 39.0531 7.29283 39.7033 7.379V13.724L35.9472 13.726C33.0018 13.726 32.432 15.1262 32.432 17.1785V21.7081H39.4565L38.542 28.8012H32.432V47H44.4091C45.8387 47 47 45.8387 47 44.4052V2.59479C47 1.16129 45.8387 0 44.4052 0Z"
          fill="white"
        />
      </g>
      <defs>
        <clipPath id="clip0_1_14144">
          <rect width="47" height="47" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default FacebookIcon;
