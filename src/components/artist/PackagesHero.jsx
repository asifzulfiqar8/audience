"use client";
import { useState } from "react";
import GradientHeading from "../shared/GradientHeading";
import Paragraph from "../shared/Paragraph";
import Button from "../shared/Button";
import { PackagesData } from "@/data/data";

const PackagesHero = () => {
  const [selectedPackage, setSelectedPackage] = useState("Starter Pack");

  return (
    <section className="w-full bg-[url('/images/about/about-hero.png')] bg-no-repeat bg-cover bg-center">
      <section className="container mx-auto px-10 py-[60px] grid grid-cols-1 lg:grid-cols-12 gap-5">
        <div className="lg:col-span-5">
          <GradientHeading
            as="h1"
            text={
              <>
                Choose <br /> A Package
              </>
            }
          />
          <div className="mt-5">
            <Paragraph
              text="Choose a package plan that best suits your needs and interest."
              mw="max-w-[411px ]"
            />
          </div>
        </div>
        <div className="lg:col-span-7 flex flex-col xl:flex-row justify-center gap-[36px]">
          {PackagesData.map((card, i) => (
            <PackageCard
              card={card}
              key={i}
              selectedPackage={selectedPackage}
              setSelectedPackage={setSelectedPackage}
            />
          ))}
        </div>
      </section>
    </section>
  );
};

export default PackagesHero;

const PackageCard = ({ card, selectedPackage, setSelectedPackage }) => {
  console.log("package", selectedPackage);
  return (
    <div
      className={`relative bg-[#FFFFFFE5] p-10 rounded-[20px] h-full flex flex-col justify-between max-w-full md:max-w-[310px] min-w-[310px] ${
        selectedPackage === card.name ? "opacity-100" : "opacity-80"
      }`}
    >
      <div>
        <div className="bg-[#00071D1A] p-[10px] rounded-[10px]">
          <h4 className="text-xl lg:text-[40px] font-medium font-noka text-primary leading-none">
            ${card.price}
            {card.name === "Pro Pack" && (
              <span className="text-[10px]">/Month</span>
            )}
          </h4>
          <h6 className="text-xl lg:text-[30px] text-textColor font-bold font-noka mt-1">
            {card.name}
          </h6>
          <p className="text-xs text-textColor font-medium font-noka">
            {card.description}
          </p>
        </div>
        <div className="mt-5">
          <h6 className="text-xs font-bold font-noka text-primary">
            {card.name} Includes
          </h6>
          <ul>
            {card?.features.map((pack, i) => (
              <li
                key={i}
                className="text-xs text-textColor font-medium font-noka list-disc ml-5"
              >
                {pack}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="mt-5 lg:mt-[44px]">
        <Button
          type="button"
          color="text-black"
          text="Select Package"
          onClick={() => setSelectedPackage(card.name)}
        />
      </div>
    </div>
  );
};
