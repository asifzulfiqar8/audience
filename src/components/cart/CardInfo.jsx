"use client";
import useWindowWidth from "@/hooks/useWindowWidth";
import Input from "../shared/Input";
import { useEffect, useState } from "react";

const CardInfo = ({ formData, setFormData }) => {
  const [localCardInfo, setLocalCardInfo] = useState(formData.cardInfo);
  const isMobile = useWindowWidth(1024);

  const handleCardInfo = (e) => {
    setLocalCardInfo({
      ...localCardInfo,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    setFormData((prevData) => ({
      ...prevData,
      cardInfo: localCardInfo,
    }));
  }, [localCardInfo, setFormData]);

  return (
    <div
      className="mt-5 md:mt-[40px] grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-10"
      style={{ columnGap: isMobile ? "31px" : "71px" }}
    >
      <h4 className="lg:col-span-12 text-[20px] md:text-[50px] lg:text-[80px] font-bold font-noka text-black leading-none">
        Card Information
      </h4>
      <div className="lg:col-span-12">
        <Input
          label="Cardholder Name"
          name="cardHolderName"
          value={CardInfo.cardHolderName}
          onChange={(e) => handleCardInfo(e)}
        />
      </div>
      <div className="lg:col-span-12">
        <Input
          label="Cardholder Number"
          type="number"
          name="cardHolderNumber"
          value={CardInfo.cardHolderNumber}
          onChange={(e) => handleCardInfo(e)}
        />
      </div>
      <div
        className="lg:col-span-12 grid grid-cols-3 lg:grid-cols-12"
        style={{ columnGap: isMobile ? "31px" : "71px" }}
      >
        <div className="lg:col-span-2">
          <Input
            label="Month"
            name="cardMonth"
            value={CardInfo.cardMonth}
            onChange={(e) => handleCardInfo(e)}
          />
        </div>
        <div className="lg:col-span-2">
          <Input
            label="Year"
            type="number"
            name="cardYear"
            value={CardInfo.cardYear}
            onChange={(e) => handleCardInfo(e)}
          />
        </div>
        <div className="lg:col-span-2">
          <Input
            label="CVV"
            type="number"
            name="cvv"
            value={CardInfo.cvv}
            onChange={(e) => handleCardInfo(e)}
          />
        </div>
      </div>
    </div>
  );
};

export default CardInfo;
