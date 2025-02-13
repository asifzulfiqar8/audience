import Image from "next/image";
import Button from "../shared/Button";
import Paragraph from "../shared/Paragraph";
import SectionHeading from "../shared/SectionHeading";

const PatentSec = () => {
  return (
    <section className="w-full bg-[url('/images/qr/patent-bg.png')] bg-no-repeat bg-center bg-cover">
      <section className="container mx-auto px-10 pt-[30px] lg:pt-[60px] pb-[90px] lg:pb-[75px] grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10">
        <div className="lg:col-span-7 order-2 lg:order-1">
          <SectionHeading
            color="text-white"
            textOne="Patent Protected"
            textTwo="Technology"
            br
            leading="leading-none"
          />
          <Paragraph
            className="mt-5"
            text="This patent positions us at the forefront of innovation, giving artists a unique advantage in direct to audience sales. It’s a key part of what makes our platform unlike anything else — pioneering tools for creators to distribute, engage, and monetize like never before."
          />
          <div className="mt-[74px] hidden lg:flex justify-center md:justify-start">
            <Button text="BOOK A CONSULTATION" />
          </div>
        </div>
        <div className="lg:col-span-5 flex justify-center order-1 lg:order-2">
          <Image
            src="/images/qr/patent-img.png"
            width={379}
            height={331}
            alt="patent-img"
            className="w-[148px] sm:w-[200px] md:w-[380px]"
          />
        </div>
      </section>
    </section>
  );
};

export default PatentSec;
