import React from "react";

const GradientHeading = ({
  as: Tag = "h6",
  text,
  textSize,
  leading,
  mw,
  textAlign,
  linearGradient = "linear-gradient(186deg, rgb(255, 0, 0) -28.73%, rgb(255, 255, 255) 98.49%)",
}) => {
  return (
    <Tag
      className={`font-noka font-bold max-w-[994px] ${
        textAlign ? textAlign : "text-center md:text-left"
      } ${textSize ? textSize : "text-[30px] md:text-[50px] lg:text-[80px]"} ${
        mw ? mw : ""
      } ${leading ? leading : "leading-tight"}`}
      style={{
        background: linearGradient,
        background: `-webkit-${linearGradient}`,
        backgroundClip: "text",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
      }}
    >
      {text}
    </Tag>
  );
};

export default GradientHeading;
