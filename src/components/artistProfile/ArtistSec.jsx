import Image from "next/image";
import React from "react";
import SectionHeading from "../shared/SectionHeading";
import Paragraph from "../shared/Paragraph";
import Link from "next/link";
import {
  FacebookIcon,
  InstagramIcon,
  TelegramIcon,
  Youtube,
} from "@/app/assets/icons";

const socialLinks = [
  { url: "", icon: <Youtube /> },
  { url: "", icon: <FacebookIcon /> },
  { url: "", icon: <TelegramIcon /> },
  { url: "", icon: <InstagramIcon /> },
];

const ArtistSec = () => {
  return (
    <section className="w-full bg-[url('/images/browse-music/popular-bg.png')] bg-no-repeat bg-cover bg-center">
      <section className="container mx-auto px-10 py-[60px] grid grid-cols-1 lg:grid-cols-12 gap-10">
        <div className="lg:col-span-4 hidden lg:block">
          <Image
            src="/images/default/artist-img.png"
            width={299}
            height={397}
            className="w-full h-auto rounded-[20px]"
            alt="image"
          />
        </div>
        <div className="lg:col-span-8">
          <SectionHeading textOne="TOMMY RICHMAN" color="text-white" />
          <div className="mt-5">
            <Paragraph
              mw="max-w-[560px]"
              text='Tommy Richman is an American singer and songwriter. He is best known for his 2024 single "Million Dollar Baby", which received major virality from a snippet on TikTok before peaking at number two on the Billboard Hot 100. The single was included in President Barack Obama"s Summer 2024 Playlist.'
            />
            <div className="mt-[34px] lg:mt-[80px] flex items-center justify-center md:justify-start gap-4 social-links">
              {socialLinks.map((link, i) => (
                <SocialLink key={i} link={link} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default ArtistSec;

const SocialLink = ({ link }) => {
  return <Link href={link.url}>{link.icon}</Link>;
};
