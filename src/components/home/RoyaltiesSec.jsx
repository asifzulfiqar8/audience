import Button from "../shared/Button";
import Paragraph from "../shared/Paragraph";
import SectionHeading from "../shared/SectionHeading";

const RoyaltiesSec = () => {
  return (
    <section className="w-full block lg:hidden">
      <section className="container mx-auto px-10 pt-4 pb-[60px]">
        <SectionHeading textOne="Royalties For" textTwo="Every Single Sale" />
        <Paragraph
          color="text-black"
          text="Welcome to the future of music distribution and fan engagement. Our platform empowers Direct sales on cutting edge crypto music platforms, while rewarding true fans—your VIPs—with exclusive, unforgettable experiences."
        />
        <div className="mt-[34px] flex justify-center">
          <Button color="text-black" text="Start Earning Today" />
        </div>
      </section>
    </section>
  );
};

export default RoyaltiesSec;
