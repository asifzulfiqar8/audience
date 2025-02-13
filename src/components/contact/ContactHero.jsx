import GradientHeading from "../shared/GradientHeading";

const ContactHero = () => {
  return (
    <section className="w-full bg-[url('/images/home/hero-mobile-bg.png')] lg:bg-[url('/images/contact/contact-bg.png')] bg-no-repeat bg-cover bg-center">
      <section className="container mx-auto px-10 py-[60px]">
        <GradientHeading text="Have Questions Or Want To Discuss Alternative Partnership Options?" />
      </section>
    </section>
  );
};

export default ContactHero;
