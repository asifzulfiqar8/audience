"use client";
import useWindowWidth from "@/hooks/useWindowWidth";
import Input from "../shared/Input";
import { useEffect, useState } from "react";

const ShippingInfo = ({ formData, setFormData }) => {
  const [localShippingInfo, setLocalShippingInfo] = useState(
    formData.shippingInfo
  );
  const isMobile = useWindowWidth(1024);

  const handleBillingInfo = (e) => {
    setLocalShippingInfo({
      ...localShippingInfo,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    setFormData((prevData) => ({
      ...prevData,
      shippingInfo: localShippingInfo,
    }));
  }, [localShippingInfo, setFormData]);

  return (
    <div
      className="mt-5 md:mt-[40px] grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-10"
      style={{ columnGap: isMobile ? "31px" : "71px" }}
    >
      <h4 className="lg:col-span-12 text-[20px] md:text-[50px] lg:text-[80px] font-bold font-noka text-black leading-none">
        Shipping Information
      </h4>
      <div className="lg:col-span-12">
        <Input
          label="Address Line"
          name="addressLine"
          value={localShippingInfo.addressLine}
          onChange={(e) => handleBillingInfo(e)}
        />
      </div>
      <div className="lg:col-span-4">
        <Input
          label="Town/City"
          name="city"
          value={localShippingInfo.city}
          onChange={(e) => handleBillingInfo(e)}
        />
      </div>
      <div className="lg:col-span-2">
        <Input
          label="Postcode"
          type="number"
          name="postCode"
          value={localShippingInfo.postCode}
          onChange={(e) => handleBillingInfo(e)}
        />
      </div>
      <div className="lg:col-span-4">
        <Input
          label="Country Region"
          name="country"
          value={localShippingInfo.country}
          onChange={(e) => handleBillingInfo(e)}
        />
      </div>
      <div className="lg:col-span-2">
        <Input
          label="Phone Number"
          type="tel"
          name="phone"
          value={localShippingInfo.phone}
          onChange={(e) => handleBillingInfo(e)}
        />
      </div>
      <div className="lg:col-span-12">
        <Input
          label="Email Address"
          type="email"
          name="email"
          value={localShippingInfo.email}
          onChange={(e) => handleBillingInfo(e)}
        />
      </div>
    </div>
  );
};

export default ShippingInfo;
