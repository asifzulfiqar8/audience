"use client";

import { useState } from "react";
import UploadImage from "./UploadImage";
import Image from "next/image";
import GradientHeading from "../shared/GradientHeading";
import UnderlinedInput from "../shared/UnderlinedInput";
import Button from "../shared/Button";
import { useRouter } from "next/navigation";

const LetsGetStarted = () => {
  const [imagePreview, setImagePreview] = useState(null);
  const [artistName, setArtistName] = useState("");
  const router = useRouter();
  const handleNext = () => {
    router.push("/artist/upload-metadata");
  };

  return (
    <section className="w-full bg-white">
      <section className="container mx-auto px-10 pt-[26px] pb-[60px] lg:py-[120px] grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-[75px]">
        {/* Left Section */}
        <div className="order-2 lg:order-1 flex flex-col gap-8 items-center justify-center">
          {imagePreview ? (
            // Show Image Preview
            <div className="relative w-full h-[400px] rounded-[20px] overflow-hidden">
              <Image
                src={imagePreview}
                width={520}
                height={401}
                alt="Uploaded Preview"
                className="w-full h-full object-cover rounded-[20px]"
              />
            </div>
          ) : (
            // Show Drag & Drop UI
            <UploadImage
              imagePreview={imagePreview}
              setImagePreview={setImagePreview}
            />
          )}
          <div className="block lg:hidden">
            <Button
              type="button"
              text="Continue"
              onClick={handleNext}
              color="text-black"
            />
          </div>
        </div>

        {/* Right Section */}
        <div className="order-1 lg:order-2">
          <Image
            src="/images/default/logo.png"
            width={235}
            height={51}
            alt="logo"
            className="w-[200px] md:w-[235px] h-auto hidden lg:block"
          />
          <div className="lg:mt-[40px]">
            <GradientHeading
              text={
                <>
                  Let’s Get <br /> You Started
                </>
              }
              linearGradient="linear-gradient(186.81deg, #FF0000 28.73%, #00071D 98.49%)"
            />
            <p className="mt-5 text-center md:text-left text-textColor text-xs md:text-xl font-bold font-noka">
              Welcome! <br />
              Set up your artist profile by filling the information below.
            </p>
            <form className="mt-[30px] lg:mt-[40px]">
              <UnderlinedInput
                label="Artist/Band Name"
                labelCenter
                name="artistName"
                value={artistName}
                onChange={(e) => setArtistName(e.target.value)}
              />
              <div className="mt-[40px] hidden lg:block">
                <Button
                  type="button"
                  text="Continue"
                  onClick={handleNext}
                  color="text-black"
                />
              </div>
            </form>
          </div>
        </div>
      </section>
    </section>
  );
};

export default LetsGetStarted;
