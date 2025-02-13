import React from "react";

const Hambarger = () => {
  return (
    <svg
      width="45"
      height="45"
      viewBox="0 0 45 45"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="0.5" y="0.5" width="44" height="44" rx="22" stroke="black" />
      <path
        d="M13.5 14.5H31.5"
        stroke="black"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M13.5 22.5H31.5"
        stroke="black"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M13.5 30.5H31.5"
        stroke="black"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default Hambarger;
