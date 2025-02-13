import SectionHeading from "../shared/SectionHeading";

const ArtistHeroSec = () => {
  return (
    <section className="w-full bg-[url('/images/default/artist-hero.png')] bg-no-repeat bg-cover bg-center">
      <section className="container mx-auto px-10 py-[60px] lg:py-[120px]">
        <SectionHeading
          textOne="Tommy Richman"
          color="text-white"
          leading="leading-none"
        />
        <p className="mt-5 md:mt-1 text-white text-center md:text-left text-xs md:text-lg font-medium font-noka">
          33 Releases
        </p>
      </section>
    </section>
  );
};

export default ArtistHeroSec;
