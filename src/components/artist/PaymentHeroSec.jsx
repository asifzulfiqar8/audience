"use client";
import Button from "../shared/Button";
import GradientHeading from "../shared/GradientHeading";
import Paragraph from "../shared/Paragraph";

const PaymentHeroSec = () => {
  return (
    <section className="w-full bg-[url('/images/home/hero-mobile-bg.png')] lg:bg-[url('/images/contact/contact-bg.png')] bg-no-repeat bg-cover bg-center bg-[#ffffffd5] bg-blend-overlay">
      <section className="container mx-auto px-10 py-[60px] grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div>
          <GradientHeading
            as="h1"
            linearGradient="linear-gradient(186.81deg, #FF0000 15.27%, #00071D 98.49%)"
            text={
              <>
                Payment <br /> Successfull
              </>
            }
          />
          <div className="mt-5">
            <Paragraph text="Your journey begins now!" color="text-black" />
          </div>
        </div>
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-9">
          {/* Card one */}
          <div className="bg-[#FFFFFFE5] p-10 rounded-[20px] flex flex-col justify-between gap-5">
            <div className="p-[10px] rounded-[10px] bg-[#00071D1A]">
              <h6 className="text-primary text-xl lg:text-[40px] font-medium font-noka leading-none">
                Step 01
              </h6>
              <p className="text-textColor text-xl lg:text-[30px] font-bold font-noka mt-1">
                Set Up Profile
              </p>
            </div>
            <div>
              <Button
                type="button"
                text="Edit Details"
                color="text-black"
                img="/images/default/pricing-border.png"
              />
            </div>
          </div>
          {/* Card two */}
          <div className="bg-[#FFFFFFE5] p-10 rounded-[20px] flex flex-col justify-between gap-5">
            <div className="p-[10px] rounded-[10px] bg-[#00071D1A]">
              <h6 className="text-primary text-xl lg:text-[40px] font-medium font-noka leading-none">
                Step 02
              </h6>
              <p className="text-textColor text-xl lg:text-[30px] font-bold font-noka mt-1">
                Start Uploading
              </p>
            </div>
            <div>
              <Button
                type="button"
                text="Upload"
                color="text-black"
                img="/images/default/buy-now-border.png"
              />
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default PaymentHeroSec;
