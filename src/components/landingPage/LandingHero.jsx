import Button from "../shared/Button";
import GradientHeading from "../shared/GradientHeading";
import Paragraph from "../shared/Paragraph";

const LandingHero = () => {
  return (
    <section className="w-full bg-[url('/images/home/hero-mobile-bg.png')] lg:bg-[url('/images/landing/landing-hero-bg.png')] bg-no-repeat bg-cover bg-center relative before:content-[' '] before:block before:bg-[url('/images/landing/landing-hero.png')] before:absolute before:bottom-0 before:right-0 xl:before:w-[530px] xl:before:h-[500px] before:z-0 overflow-hidden">
      <section className="container mx-auto px-10 py-[60px] lg:py-[95px] relative z-10">
        <GradientHeading
          mw="max-w-[1100px]"
          as="h1"
          text={
            <>
              A Crypto <span className="font-marker">Music Distribution</span> &
              Ticketing Platform
            </>
          }
        />
        <div className="mt-5">
          <Paragraph
            mw="max-w-[570px]"
            text="Revolutionize how you share your music and connect with fans. Our platform combines seamless crypto-based music distribution with ticketing solutions, empowering artists to take control of their careers. From streaming to live events, we bridge the gap between creativity and technology, delivering exclusive experiences for your most loyal supporters."
          />
        </div>
        <div className="mt-[55px] lg:mt-[64px] flex flex-col  md:flex-row items-center gap-3 md:gap-10">
          <Button text="Start Earning Today" />
          <Button text="Learn More" />
        </div>
      </section>
    </section>
  );
};

export default LandingHero;
