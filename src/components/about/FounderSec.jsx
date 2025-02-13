import Image from "next/image";
import Paragraph from "../shared/Paragraph";
import SectionHeading from "../shared/SectionHeading";

const FounderSec = () => {
  return (
    <section className="w-full bg-white">
      <section className="container mx-auto px-10 pt-[27px] pb-[98px] lg:py-[120px] grid grid-cols-12 gap-8">
        <div className="col-span-12 lg:col-span-7">
          <SectionHeading
            textOne="Meet The Founder"
            textTwo="Theo Bailey"
            br
            leading="leading-none"
          />
          <div className="lg:hidden mt-[52px] mb-[34px] flex justify-center md:justify-start">
            <Image
              src="/images/about/qr-images.png"
              width={310}
              height={245}
              alt="image"
              className="h-full"
            />
          </div>
          <Paragraph
            className="mt-5"
            color="text-black"
            mw="max-w-[720px]"
            text="Since 2022, I've made several angel investments into web3 music platforms, giving me a unique perspective on the challenges artists face when navigating the web3 landscape. As an entrepreneur, I couldn't resist the opportunity to build on these insights, which led to the launch of audience."
          />
        </div>
        <div className="lg:col-span-5 hidden lg:flex justify-center">
          <Image
            src="/images/about/theo.png"
            width={335}
            height={328}
            alt="image"
            className="h-full"
          />
        </div>
      </section>
    </section>
  );
};

export default FounderSec;
