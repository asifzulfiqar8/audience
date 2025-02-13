"use client";
import Image from "next/image";
import Button from "./shared/Button";
import { pagesLinks } from "@/data/data";
import Link from "next/link";
import { CloseIcon, FooterHambarger, LinkIcon } from "@/app/assets/icons";
import { useState } from "react";
import { usePathname } from "next/navigation";
import GradientHeading from "./shared/GradientHeading";

const Footer = () => {
  const [navOpen, setNavOpen] = useState(false);
  const path = usePathname();
  const navOpenHandler = () => setNavOpen(!navOpen);
  return (
    <>
      <section className="w-full bg-[url('/images/default/footer-bg.png')] bg-no-repeat bg-center bg-cover relative">
        <section className="container mx-auto px-10 pt-[60px] pb-[40px] md:pt-[55px] md:pb-[55px] relative z-10">
          <GradientHeading text="Your Support For Music Becomes A Gateway To Incredible Experiences" />
          <div className="mt-[44px] flex flex-col sm:flex-row items-center gap-3 sm:gap-10">
            <div className="block md:hidden">
              <Button text="Start Earning Today" />
            </div>
            <div className="hidden md:block">
              <Button text="Start Today" />
            </div>
            <Button text="Learn More" />
          </div>
        </section>
        {/* right image */}
        <div className="hidden lg:block absolute top-0 right-0 z-0 w-auto h-full">
          <Image
            src="/images/default/footer-right.png"
            width={298}
            height={470}
            alt="image"
            className="h-full w-full"
          />
        </div>
      </section>
      <section className="w-full bg-[#070707] relative">
        <section className="container mx-auto pb-[60px] md:py-[50px] px-10 flex items-center gap-10 justify-between">
          <Link href="/">
            <Image
              src="/images/default/footer-logo.png"
              width={261}
              height={57}
              alt="footer-logo"
              className="w-[201px] md:w-[261px]"
            />
          </Link>
          {pagesLinks.map((link, i) => (
            <Link
              href={link.url}
              key={i}
              className="text-white text-xl font-bold font-noka hover:text-primary transition-all duration-200 hidden xl:block"
            >
              {link.page}
            </Link>
          ))}
          <div
            className="block xl:hidden cursor-pointer"
            onClick={navOpenHandler}
          >
            <FooterHambarger />
          </div>
        </section>
        {/* navigation links */}
        <div
          className={`absolute bottom-[136px] right-0 transform bg-[url('/images/default/menu-bg.png')] bg-no-repeat bg-center bg-cover w-full sm:w-[450px] sm:rounded-tl-[20px] sm:rounded-bl-[20px] z-50 py-5 px-10 sm:px-0 md:py-10 sm:pl-14 sm:border-t sm:border-l sm:border-b border-white transition-all duration-500 sm:duration-300 ${
            navOpen
              ? "translate-x-0"
              : "translate-x-[600px] sm:translate-x-[450px]"
          }`}
        >
          <div className="w-full sm:w-[270px]">
            <div className="flex items-center justify-between">
              <h6 className="text-lg font-medium font-noka text-white">
                Close
              </h6>
              <button onClick={() => setNavOpen(false)}>
                <CloseIcon />
              </button>
            </div>
            <div className="mt-10 flex flex-col gap-8 md:gap-9">
              {pagesLinks.map((link, i) => (
                <LinkList
                  link={link}
                  key={i}
                  path={path}
                  setNavOpen={setNavOpen}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="w-full bg-primary">
        <section className="container mx-auto px-5 sm:px-10 py-4 flex flex-col md:flex-row items-center justify-between gap-1">
          <p className="text-sm text-white font-medium font-noka">
            Copyright @ 2024 Audience VIP
          </p>
          <p className="text-sm text-white font-medium font-noka block sm:hidden">
            Company No. 00000000
          </p>
          <p className="text-sm text-white font-medium font-noka">
            <Link href="privacy-policy">Privacy Policy</Link> |
            <Link href="cookie-policy"> Cookie Policy</Link> |
            <Link href="terms-conditions"> Terms & Conditions</Link>
          </p>
        </section>
      </section>
    </>
  );
};

export default Footer;

const LinkList = ({ link, path, setNavOpen }) => {
  return (
    <Link
      href={link.url}
      className={`flex items-center justify-between text-white text-xs md:text-lg font-bold py-1 font-noka ${
        path === link.url ? "border-b-[0.5px] border-[#ffffffc4]" : ""
      }`}
      onClick={() => setNavOpen(false)}
    >
      {link.page}
      <LinkIcon />
    </Link>
  );
};
