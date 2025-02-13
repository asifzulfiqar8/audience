import Image from "next/image";
import Button from "../shared/Button";
import Paragraph from "../shared/Paragraph";
import SectionHeading from "../shared/SectionHeading";

const VipTokens = () => {
  return (
    <section className="w-full bg-white hidden lg:block">
      <section className="container mx-auto px-10 pt-[60px] pb-[86px] grid grid-cols-12 gap-4">
        <div className="lg:col-span-7">
          <SectionHeading
            textOne="Earn"
            textTwo="$VIP TOKENS"
            leading="leading-none"
          />
          <h6 className="text-lg font-bold text-black font-noka">
            Your Ticket to Exclusive Access
          </h6>
          <Paragraph
            color="text-black"
            mw="max-w-[620px]"
            text="$VIP Tokens let you take your experiences to the next level. Earn rewards for engaging with the artists you love—minting their tracks, buying tickets, or picking up merch. Use your tokens to unlock early releases, VIP event access, and rare collectibles. With $VIP Tokens, your support for music becomes a gateway to incredible experiences."
          />
          <div className="mt-[44px]">
            <Button color="text-black" text="EARN $VIP TOKENS" />
          </div>
        </div>
        <div className="lg:col-span-5">
          <Image
            src="/images/home/vip-tokens.png"
            width={553}
            height={401}
            alt="world-img"
            className="w-full"
          />
        </div>
      </section>
    </section>
  );
};

export default VipTokens;
