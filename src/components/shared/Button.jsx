import Image from "next/image";
import Link from "next/link";
import React from "react";

const Button = ({
  type,
  text,
  link,
  color,
  img = "/images/default/button-border.png",
  bottom,
  ...rest
}) => {
  return type ? (
    <button
      type={type}
      {...rest}
      className={`uppercase text-xs md:text-lg font-noka font-bold relative ${
        color ? color : "text-white"
      }`}
    >
      {text}
      <Image
        src={img}
        width={182}
        height={9}
        className={`absolute left-0 w-full h-auto ${
          bottom ? bottom : "-bottom-[1px]"
        }`}
        alt="button-border-img"
      />
    </button>
  ) : (
    <Link
      href={link ? link : ""}
      className={`uppercase text-xs md:text-lg font-noka font-bold relative ${
        color ? color : "text-white"
      }`}
    >
      {text}
      <Image
        src={img}
        width={182}
        height={9}
        className={`absolute left-0 w-full h-auto ${
          bottom ? bottom : "-bottom-[4px]"
        }`}
        alt="button-border-img"
      />
    </Link>
  );
};

export default Button;
