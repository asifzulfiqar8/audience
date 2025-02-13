"use client";

import useWindowWidth from "@/hooks/useWindowWidth";
import Input from "../shared/Input";
import Button from "../shared/Button";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import GradientHeading from "../shared/GradientHeading";
import Paragraph from "../shared/Paragraph";

const BillingAndCardForm = () => {
  const router = useRouter();
  const isMobile = useWindowWidth(991);
  const [step, setStep] = useState(1);
  const [isPaymentFailed, setIsPaymentFailed] = useState(false);
  const [formData, setFormData] = useState({
    address: "",
    city: "",
    postcode: "",
    country: "",
    phone: "",
    email: "",
    cardholder: "",
    cardnumber: "",
    month: "",
    year: "",
    cvv: "",
  });

  const handleFormData = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleNextStep = () => setStep(step + 1);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("formData", formData);
    router.push("/artist/payment-successful");
    // setIsPaymentFailed(true);
  };

  return (
    <>
      {step === 1 ? (
        // Billing form
        <>
          <h4 className="text-[20px] md:text-[50px] lg:text-[80px] font-bold font-noka text-black mt-10 leading-tight">
            Billing Information
          </h4>
          <form
            className="mt-5 lg:mt-10 grid grid-cols-12 gap-4"
            style={{ rowGap: isMobile ? "20px" : "40px" }}
          >
            <div className="col-span-12">
              <Input
                label="Address Line"
                name="address"
                value={formData.address}
                onChange={(e) => handleFormData(e)}
              />
            </div>
            <div className="col-span-6 lg:col-span-7">
              <Input
                label="Town/City"
                name="city"
                value={formData.city}
                onChange={(e) => handleFormData(e)}
              />
            </div>
            <div className="col-span-6 lg:col-span-5">
              <Input
                label="Postcode"
                name="postcode"
                value={formData.postcode}
                onChange={(e) => handleFormData(e)}
              />
            </div>
            <div className="col-span-6 lg:col-span-7">
              <Input
                label="Country Region"
                name="country"
                value={formData.country}
                onChange={(e) => handleFormData(e)}
              />
            </div>
            <div className="col-span-6 lg:col-span-5">
              <Input
                label="Phone Number"
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={(e) => handleFormData(e)}
              />
            </div>
            <div className="col-span-12">
              <Input
                label="Email Address"
                type="email"
                name="email"
                value={formData.email}
                onChange={(e) => handleFormData(e)}
              />
            </div>
            <div className="col-span-12 flex justify-end">
              <Button
                text="Next"
                color="text-black"
                img="/images/default/view-border.png"
                type="button"
                onClick={handleNextStep}
              />
            </div>
          </form>
        </>
      ) : step === 2 ? (
        // Card form
        <>
          <h4 className="text-[20px] md:text-[50px] lg:text-[80px] font-bold font-noka text-black mt-10 leading-tight">
            Billing Information
          </h4>
          <form
            onSubmit={(e) => handleSubmit(e)}
            className="mt-5 lg:mt-10 grid grid-cols-12 gap-4"
            style={{ rowGap: isMobile ? "20px" : "40px" }}
          >
            <div className="col-span-12">
              <Input
                label="Cardholder Name"
                name="cardholder"
                value={formData.cardholder}
                onChange={(e) => handleFormData(e)}
              />
            </div>
            <div className="col-span-12">
              <Input
                label="Cardholder Number"
                type="number"
                name="cardnumber"
                value={formData.cardnumber}
                onChange={(e) => handleFormData(e)}
              />
            </div>
            <div className="col-span-4 xl:col-span-2">
              <Input
                label="Month"
                name="month"
                value={formData.month}
                onChange={(e) => handleFormData(e)}
              />
            </div>
            <div className="col-span-4 xl:col-span-2">
              <Input
                label="Year"
                type="number"
                name="year"
                value={formData.year}
                onChange={(e) => handleFormData(e)}
              />
            </div>
            <div className="col-span-4 xl:col-span-2">
              <Input
                label="CVV"
                type="number"
                name="cvv"
                value={formData.cvv}
                onChange={(e) => handleFormData(e)}
              />
            </div>
            <div className="col-span-12 flex items-center justify-between">
              <Button
                type="button"
                text="Go Back"
                color="text-black"
                img="/images/default/makepayment-border.png"
                onClick={() => setStep(step - 1)}
              />
              <Button
                text="Make Payment"
                color="text-black"
                img="/images/default/makepayment-border.png"
                type="submit"
              />
            </div>
          </form>
        </>
      ) : null}
      {isPaymentFailed && (
        <section
          className="fixed inset-0 z-50 bg-[#020202CC] w-screen h-screen grid place-items-center"
          onClick={() => setIsPaymentFailed(false)}
        >
          <div
            className="bg-[#FFFFFFCC] bg-[url('/images/contact/contact-bg.png')] bg-no-repeat bg-cover bg-center bg-blend-overlay p-5 lg:p-10 max-w-[960px] rounded-[20px] flex items-center gap-5"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src="/images/default/popup-img.png"
              width={280}
              height={260}
              alt="popup-img"
              className="max-w-[100px] lg:max-w-[270px] h-auto"
            />
            <div>
              <GradientHeading
                textAlign="text-left"
                linearGradient="linear-gradient(180.81deg, #FF0000 -47.73%, #00071D 98.49%)"
                text={
                  <>
                    Payment <br /> Failed
                  </>
                }
              />
              <div className="mt">
                <Paragraph
                  text="Reason for failed payment noted here"
                  color="text-textColor"
                />
              </div>
              <div className="mt-5 lg:mt-[44px]">
                <Button
                  type="button"
                  text="Try Again"
                  color="text-textColor"
                  img="/images/default/makepayment-border.png"
                  onClick={() => setIsPaymentFailed(false)}
                />
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default BillingAndCardForm;
