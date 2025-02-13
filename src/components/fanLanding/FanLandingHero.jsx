import Button from "../shared/Button";
import GradientHeading from "../shared/GradientHeading";
import Paragraph from "../shared/Paragraph";

const FanLandingHero = () => {
  return (
    <section className="w-full bg-[url('/images/home/hero-mobile-bg.png')] lg:bg-[url('/images/landing/fan-landing-bg.png')] bg-no-repeat bg-cover bg-center relative before:content-[' '] before:block before:bg-[url('/images/landing/fan-hero.png')] before:absolute before:bottom-0 before:right-0 xl:before:w-[530px] xl:before:h-[510px] before:z-0 overflow-hidden">
      <section className="container mx-auto px-10 py-[60px] lg:py-[95px] relative z-10">
        <GradientHeading
          mw="max-w-[1020px]"
          as="h1"
          text={
            <>
              Earn <span className="font-marker">$VIP Tokens</span> And Get
              Access To Exclusive Experiences 
            </>
          }
        />
        <div className="mt-5">
          <Paragraph
            mw="max-w-[570px]"
            text="Get access to live performances by purchasing Tracks and Albums with the opportunity to top your earning with $VIP Tokens."
          />
        </div>
        <div className="mt-[55px] lg:mt-[64px] flex flex-col  md:flex-row items-center gap-3 md:gap-10">
          <Button text="EARN $VIP TOKENS" />
          <Button text="Learn More" />
        </div>
      </section>
    </section>
  );
};

export default FanLandingHero;
