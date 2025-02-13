import Button from "../shared/Button";
import GradientHeading from "../shared/GradientHeading";
import Paragraph from "../shared/Paragraph";

const HomeHero = () => {
  return (
    <section className="w-full bg-[url('/images/home/hero-mobile-bg.png')] lg:bg-[url('/images/home/hero-bg.png')] bg-no-repeat bg-cover bg-center">
      <section className="container mx-auto px-10 grid grid-cols-12 gap-4 pt-[60px] pb-[60px] md:pb-[75px]">
        <div className="col-span-12 lg:col-span-7">
          <GradientHeading as="h1" text="Music That Brings You Closer" />
          <div className="mt-5">
            <Paragraph
              mw="max-w-[571px]"
              text="Connect with your favorite artists like never before. Buy music, access live performances, and unlock VIP experiences with $VIP Tokens."
            />
          </div>
          <div className="mt-[44px] flex flex-col-reverse md:flex-row items-center gap-3 md:gap-10">
            <Button text="Browse All Tracks" />
            <Button text="Earn $VIP Tokens" />
          </div>
        </div>
        <div className="hidden lg:block col-span-5"></div>
      </section>
    </section>
  );
};

export default HomeHero;
