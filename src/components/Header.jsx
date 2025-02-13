"use client";
import { CloseIcon, Hambarger, LinkIcon } from "@/app/assets/icons";
import { pagesLinks } from "@/data/data";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

const Header = () => {
  const [navOpen, setNavOpen] = useState(false);
  const path = usePathname();
  const menuRef = useRef(null);
  const navOpenHandler = () => setNavOpen(!navOpen);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setNavOpen(false);
      }
    };

    if (navOpen) {
      document.addEventListener("click", handleClickOutside);
    }

    return () => document.removeEventListener("click", handleClickOutside);
  }, [navOpen]);
  return (
    <section className={`w-full bg-[#FFFFFFE5] relative`}>
      <section className="container m-auto px-10">
        <div className="flex items-center justify-between h-[127px]">
          <Link href="/" className="w-[201px] md:w-[235px]">
            <Image
              src="/images/default/logo.png"
              width={235}
              height={51}
              alt="logo"
              className="w-[200px] md:w-[235px] h-auto"
            />
          </Link>
          <div
            className="flex items-center gap-2 cursor-pointer"
            onClick={navOpenHandler}
          >
            <h6 className="text-textColor text-xl font-bold font-noka hidden md:block">
              MENU
            </h6>
            <Hambarger />
          </div>
        </div>
      </section>
      {/* navigation links */}
      <div
        ref={menuRef}
        className={`absolute top-[126px] right-0 transform bg-[url('/images/default/menu-bg.png')] bg-no-repeat bg-center bg-cover w-full sm:w-[450px] sm:rounded-tl-[20px] sm:rounded-bl-[20px] z-50 py-5 px-10 sm:px-0 md:py-10 sm:pl-14 sm:border-t sm:border-l sm:border-b border-white transition-all duration-500 sm:duration-300 ${
          navOpen
            ? "translate-x-0"
            : "translate-x-[600px] sm:translate-x-[450px]"
        }`}
      >
        <div className="w-full sm:w-[270px]">
          <div className="flex items-center justify-between">
            <h6 className="text-lg font-medium font-noka text-white">Close</h6>
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
  );
};

export default Header;

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
