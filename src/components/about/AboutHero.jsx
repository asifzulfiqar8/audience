import GradientHeading from "../shared/GradientHeading";
import Paragraph from "../shared/Paragraph";
import Button from "../shared/Button";

const AboutHero = () => {
  return (
    <section className="w-full bg-[url('/images/home/hero-mobile-bg.png')] lg:bg-[url('/images/about/about-hero.png')] bg-no-repeat bg-cover bg-center">
      <section className="container mx-auto px-10 grid grid-cols-12 gap-4 pt-[60px] pb-[60px] md:pb-[86px]">
        <div className="col-span-12 lg:col-span-7">
          <GradientHeading as="h1" text="We Are Audience" />
          <div className="mt-5">
            <Paragraph
              mw="max-w-[571px]"
              text="We're innovators, creators, and music enthusiasts committed to transforming the future of music. By blending cutting-edge technology with artistry, we empower musicians to take control of their craft and connect with fans like never before. This isn't just a platform—it's a community built for artists and their audiences."
            />
          </div>
          <div className="mt-[44px] flex flex-col-reverse md:flex-row items-center gap-3 md:gap-10">
            <Button text="Join The Movement" />
            <Button text="About Our Founder" />
          </div>
        </div>
        <div className="hidden lg:block col-span-5"></div>
      </section>
    </section>
  );
};

export default AboutHero;
