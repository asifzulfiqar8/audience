"use client";
import { ChevronDownIcon } from "@/app/assets/icons";
import { useState } from "react";

const FAQs = ({ lists }) => {
  const [isFaqOpen, setIsFaqOpen] = useState(0);

  const handleFaqOpen = (index) =>
    setIsFaqOpen(isFaqOpen === index ? null : index);
  return lists.map((list, index) => (
    <div
      className={`bg-[#F3F3F3] py-[10px] px-[30px] rounded-[10px] ${
        lists.length > 0 ? "mb-5" : "mb-0"
      }`}
      key={index}
    >
      <button
        className="flex items-center justify-between gap-5 lg:gap-10 w-full"
        onClick={() => handleFaqOpen(index)}
      >
        <h6 className="text-black text-xs md:text-xl text-left font-bold font-noka leading-relaxed">
          {list.question}
        </h6>
        <div
          className={`${
            isFaqOpen === index ? "rotate-180" : "rotate-0"
          } transition-all duration-200`}
        >
          <ChevronDownIcon />
        </div>
      </button>
      <div
        className={`grid transition-all duration-300 ease-in-out ${
          isFaqOpen === index
            ? "grid-rows-[1fr] opacity-100 mt-4"
            : "grid-rows-[0fr] opacity-0 mt-0"
        }`}
      >
        <p className="overflow-hidden">{list.answer}</p>
      </div>
    </div>
  ));
};

export default FAQs;
