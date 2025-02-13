"use client";
import BillingInfo from "@/components/cart/BillingInfo";
import CardInfo from "@/components/cart/CardInfo";
import Checkout from "@/components/cart/Checkout";
import ShippingInfo from "@/components/cart/ShippingInfo";
import Button from "@/components/shared/Button";
import { useState } from "react";

const Cart = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    billingInfo: {},
    cardInfo: {},
    shippingInfo: {},
  });
  const handleCheckout = (e) => {
    e.preventDefault();
    console.log("formData", formData);

    if (formData.billingInfo) {
      setStep(2);
    }
  };
  return (
    <section className="w-full bg-white">
      <section className="container mx-auto py-[60px] lg:py-[120px] px-10">
        <form
          className="border border-[#00071D] rounded-[20px] p-10"
          onSubmit={(e) => handleCheckout(e)}
        >
          <Checkout />
          {step === 1 && (
            <BillingInfo formData={formData} setFormData={setFormData} />
          )}
          {step === 2 && (
            <>
              <CardInfo formData={formData} setFormData={setFormData} />
              <ShippingInfo formData={formData} setFormData={setFormData} />
            </>
          )}
          <div className="flex justify-start md:justify-end mt-[40px]">
            <Button
              type="submit"
              text={step === 2 ? "Make Payment" : "Next"}
              color="text-black"
              img={
                step === 1
                  ? "/images/default/view-border.png"
                  : "/images/default/makepayment-border.png"
              }
            />
          </div>
        </form>
      </section>
    </section>
  );
};

export default Cart;
