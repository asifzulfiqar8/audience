"use client";
import {
  FacebookIcon,
  InstagramIcon,
  TelegramIcon,
  Youtube,
} from "@/app/assets/icons";
import Image from "next/image";
import Link from "next/link";
import ViewAllBtn from "../shared/ViewAllBtn";
import Button from "../shared/Button";

const socialLinks = [
  { url: "", icon: <Youtube /> },
  { url: "", icon: <FacebookIcon /> },
  { url: "", icon: <TelegramIcon /> },
  { url: "", icon: <InstagramIcon /> },
];

const AlbumCoverMobile = ({ data }) => {
  return (
    <div>
      <div className="flex items-center flex-col gap-2">
        <Image
          src="/images/home/user-image-1.png"
          width={85}
          height={85}
          alt="image"
          className="size-[85px] rounded-full object-cover"
        />
        <h6 className="text-xs text-white font-bold font-noka text-center">
          Gus Dapperton
        </h6>
        <p className="text-xs text-white font-light font-noka text-center max-w-[184px]">
          Rising alt-pop artist Gus Dapperton new EP is Out now!
        </p>
        <div className="flex items-center justify-center gap-4 social-links">
          {socialLinks.map((link, i) => (
            <SocialLink key={i} link={link} />
          ))}
        </div>
      </div>
      <div className="h-[1px] bg-white w-full my-5"></div>
      <div className="flex gap-4">
        <Image
          src={data.albumImg}
          width={86}
          height={86}
          alt="album image"
          className="w-[86px] sm:w-[246px] h-auto"
        />
        <div>
          <p className="text-white text-xs font-medium font-noka">EP</p>
          <h6 className="text-xl font-bold font-noka text-white mt-[6px] leading-none">
            {data.albumName}
          </h6>
          <p className="my-[5px] text-white text-xs font-noka">
            {data.songs?.length} Songs - {data.duration} 7 June 2024
          </p>
        </div>
      </div>
      <div className="mt-5">
        <ViewAllBtn url="" text="Collect" color="text-white" />
      </div>
      <p className="my-3 text-center text-white text-xs font-medium font-noka">
        OR
      </p>
      <div className="flex flex-col gap-4">
        {Array.from({ length: 6 }).map((_, i) => (
          <CoinList key={i} />
        ))}
      </div>
    </div>
  );
};

export default AlbumCoverMobile;

const CoinList = () => {
  return (
    <div className="bg-white py-[5px] px-[10px] rounded-[10px] flex items-center justify-between">
      <div className="flex items-center gap-[5px]">
        <div className="size-[30px] rounded-full bg-white p-2 grid place-items-center">
          <Image
            src="/images/default/audius.png"
            alt="coin image"
            width={18}
            height={18}
          />
        </div>
        <Image
          src="/images/default/btc.png"
          alt="coin image"
          width={40}
          height={16}
        />
      </div>
      <Button
        text="Collect Now"
        color="text-black"
        img="/images/default/makepayment-border.png"
      />
    </div>
  );
};

const SocialLink = ({ link }) => {
  return <Link href={link.url}>{link.icon}</Link>;
};
