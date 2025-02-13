import React from "react";

const Paragraph = ({ text, color, mw, className }) => {
  return (
    <p
      className={`text-xs text-center md:text-left md:text-lg font-noka ${className} ${
        mw ? mw : ""
      } ${color ? color : "text-white"}`}
    >
      {text}
    </p>
  );
};

export default Paragraph;
