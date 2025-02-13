"use client";
import Image from "next/image";
import Paragraph from "../shared/Paragraph";
import SectionHeading from "../shared/SectionHeading";
import useWindowWidth from "@/hooks/useWindowWidth";
import Button from "../shared/Button";

const WhyWeExist = () => {
  const isWindowLessThan576 = useWindowWidth(768);

  return (
    <section className="w-full bg-white">
      <section className="container mx-auto px-10 py-[60px] lg:py-[120px] grid grid-cols-12 gap-8">
        <div className="col-span-12 lg:col-span-7">
          <SectionHeading
            textOne="Why We"
            textTwo="Exist"
            br={isWindowLessThan576 ? true : false}
            leading="leading-none"
          />
          <p className="mt-5 text-xs text-center md:text-left md:text-lg font-noka text-black max-w-[700px]">
            Artists often encounter complex blockchain jargon, nuanced cultural
            differences, and a steep learning curve, resulting in decision
            fatigue due to the multitude of options available. Recognizing these
            hurdles, we at audience are committed to removing friction for
            artists. We do this by eliminating chain tribalism and maximalist
            behavior, simplifying wallet creation, and reducing the cognitive
            load required to learn new systems. <br /> <br />
            Our end goal is to help artists generate more revenue from their
            music. This specialization is what sets us apart, and we expect to
            become major players in music distribution within the next three to
            five years. <br /> <br />
            Just like DistroKid, TuneCore, and UnitedMasters do for the web2
            world, we do the same in web3. We distribute to all major web3
            platforms across all major chains so you don't have to.
          </p>
          <div className="mt-[44px] flex justify-center md:justify-start">
            <Button text="Join the movement" color="text-black" />
          </div>
        </div>
        <div className="lg:col-span-5 hidden lg:flex justify-center">
          <Image
            src="/images/about/why-we-exist.png"
            width={453}
            height={640}
            alt="image"
            className="h-full"
          />
        </div>
      </section>
    </section>
  );
};

export default WhyWeExist;
