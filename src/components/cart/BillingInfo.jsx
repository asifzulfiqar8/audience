"use client";
import useWindowWidth from "@/hooks/useWindowWidth";
import Input from "../shared/Input";
import { useEffect, useState } from "react";

const BillingInfo = ({ formData, setFormData }) => {
  const [localBillingInfo, setLocalBillingInfo] = useState(
    formData.billingInfo
  );
  const isMobile = useWindowWidth(1024);

  const handleBillingInfo = (e) => {
    setLocalBillingInfo({
      ...localBillingInfo,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    setFormData((prevData) => ({
      ...prevData,
      billingInfo: localBillingInfo,
    }));
  }, [localBillingInfo, setFormData]);

  return (
    <div className="mt-[40px]">
      <h4 className="text-[20px] md:text-[50px] lg:text-[80px] font-bold font-noka text-black">
        Billing Information
      </h4>
      <div
        className="mt-5 md:mt-[40px] grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-10"
        style={{ columnGap: isMobile ? "31px" : "71px" }}
      >
        <div className="lg:col-span-12">
          <Input
            label="Address Line"
            name="addressLine"
            value={localBillingInfo.addressLine}
            onChange={(e) => handleBillingInfo(e)}
          />
        </div>
        <div className="lg:col-span-4">
          <Input
            label="Town/City"
            name="city"
            value={localBillingInfo.city}
            onChange={(e) => handleBillingInfo(e)}
          />
        </div>
        <div className="lg:col-span-2">
          <Input
            label="Postcode"
            type="number"
            name="postCode"
            value={localBillingInfo.postCode}
            onChange={(e) => handleBillingInfo(e)}
          />
        </div>
        <div className="lg:col-span-4">
          <Input
            label="Country Region"
            name="country"
            value={localBillingInfo.country}
            onChange={(e) => handleBillingInfo(e)}
          />
        </div>
        <div className="lg:col-span-2">
          <Input
            label="Phone Number"
            type="tel"
            name="phone"
            value={localBillingInfo.phone}
            onChange={(e) => handleBillingInfo(e)}
          />
        </div>
        <div className="lg:col-span-12">
          <Input
            label="Email Address"
            type="email"
            name="email"
            value={localBillingInfo.email}
            onChange={(e) => handleBillingInfo(e)}
          />
        </div>
      </div>
    </div>
  );
};

export default BillingInfo;
