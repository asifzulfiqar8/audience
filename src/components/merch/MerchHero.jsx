import SectionHeading from "../shared/SectionHeading";

const MerchHero = () => {
  return (
    <section className="w-full bg-[url('/images/home/hero-mobile-bg.png')] lg:bg-[url('/images/merch/hero-bg.png')] bg-no-repeat bg-cover bg-center">
      <section className="container mx-auto px-10 py-[60px]">
        <div className="hidden lg:block">
          <SectionHeading textOne="Our" textTwo="Merch" color="text-white" />
        </div>
        <div className="block lg:hidden">
          <SectionHeading textOne="Our" textTwo="Clothing" color="text-white" />
        </div>
      </section>
    </section>
  );
};

export default MerchHero;
