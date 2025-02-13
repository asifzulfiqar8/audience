import SectionHeading from "../shared/SectionHeading";
import Paragraph from "../shared/Paragraph";
import Image from "next/image";
import FAQs from "../shared/FAQs";
import { faqLists } from "@/data/data";

const Faq = () => {
  return (
    <section className="w-full bg-white">
      <section className="container mx-auto px-10 py-[60px] lg:pb-[120px]">
        <SectionHeading textOne="FAQ" />
        <div className="mt-5 grid grid-cols-1 lg:grid-cols-2 gap-[80px]">
          <div className="hidden lg:block">
            <Paragraph
              color="text-black"
              text="Got questions? We’ve got answers! Explore our FAQ section to learn more about how our platform works, from crypto music distribution and ticketing to QR codes and $VIP Tokens. Whether you’re curious about setup, customization, or fan engagement, this is the place to find everything you need to know. Still have questions? Our team is here to help!"
            />
            <Image
              src="/images/landing/faq-img.png"
              width={546}
              height={900}
              className="mt-[44px] rounded-[20px] w-full h-auto"
              alt="image"
            />
          </div>
          <div>
            <FAQs lists={faqLists} />
          </div>
        </div>
      </section>
    </section>
  );
};

export default Faq;
