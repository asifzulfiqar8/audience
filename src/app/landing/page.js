import CustomQR from "@/components/landingPage/CustomQR";
import Faq from "@/components/landingPage/Faq";
import LandingHero from "@/components/landingPage/LandingHero";
import OurArtist from "@/components/landingPage/OurArtist";
import OurOffer from "@/components/landingPage/OurOffer";
import RoyaltiesSec from "@/components/landingPage/RoyaltiesSec";

const Landing = () => {
  return (
    <>
      <LandingHero />
      <RoyaltiesSec />
      <OurOffer />
      <CustomQR />
      <OurArtist />
      <Faq />
    </>
  );
};

export default Landing;
