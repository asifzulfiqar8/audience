import Image from "next/image";
import GradientHeading from "../shared/GradientHeading";
import Paragraph from "../shared/Paragraph";
import Button from "../shared/Button";

const QrHero = () => {
  return (
    <section className="w-full bg-[url('/images/home/hero-mobile-bg.png')] lg:bg-[url('/images/qr/qr-hero.png')] bg-no-repeat bg-cover bg-center">
      <section className="container mx-auto px-10 py-[60px] grid grid-cols-1 lg:grid-cols-12 gap-5">
        <div className="lg:col-span-7 flex flex-col justify-center">
          <GradientHeading
            mw="max-w-[740px]"
            text={
              <>
                Transform Your Listeners Into{" "}
                <span className="font-marker">Paying fans</span> With Custom QR
                Codes
              </>
            }
          />
          <Paragraph
            mw="max-w-[530px]"
            text="Boost conversions, gather valuable data, and gain insights into your audience."
          />
          <div className="mt-10 flex flex-col md:flex-row items-center gap-[15px] md:gap-5">
            <Button text="BOOK A CONSULTATION" />
            <Button text="EARN $VIP TOKENS" />
          </div>
        </div>
        <div className="lg:col-span-5 hidden lg:block">
          <Image
            src="/images/qr/hero-img.png"
            width={716}
            height={716}
            alt="hero-image"
          />
        </div>
      </section>
    </section>
  );
};

export default QrHero;
