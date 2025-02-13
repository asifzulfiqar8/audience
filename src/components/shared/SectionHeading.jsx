import React from "react";

const SectionHeading = ({
  mw,
  textOne,
  textTwo,
  leading,
  color,
  br,
  as: Tag = "h4",
}) => {
  return (
    <Tag
      className={`text-[30px] md:text-[50px] lg:text-[80px] font-bold font-noka text-center md:text-left ${
        mw ? mw : "max-w-full"
      } ${color ? color : "text-black"} ${leading ? leading : ""}`}
    >
      {textOne}&nbsp;
      {br && <br />}
      <span className="font-marker text-primary font-normal uppercase">
        {textTwo}
      </span>
    </Tag>
  );
};

export default SectionHeading;
