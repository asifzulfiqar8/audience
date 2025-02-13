"use client";
import useWindowWidth from "@/hooks/useWindowWidth";
import Image from "next/image";
import { useState } from "react";
import Button from "../shared/Button";
import GradientHeading from "../shared/GradientHeading";
import Paragraph from "../shared/Paragraph";
import AnalyticsContent from "./AnalyticsContent";
import DropsContent from "./DropsContent";
import QrCodeContent from "./QrCodeContent";

const ArtistDashboard = () => {
  const isMobile = useWindowWidth(1024);
  const [tab, setTab] = useState("drops");

  const renderContent = (tab) => {
    switch (tab) {
      case "drops":
        return <DropsContent />;
      case "analytics":
        return <AnalyticsContent />;
      case "QR code":
        return <QrCodeContent />;
      default:
        return null;
    }
  };

  return (
    <section className="w-full bg-[url('/images/fan/fan-bg.png')] bg-no-repeat bg-cover bg-center">
      <section className="container  mx-auto px-10 py-[60px] lg:pt-[76px] pb-[120px]">
        <Welcome />
        <div className="py-[10px] px-5 border border-white rounded-[10px] mt-[60px] max-w-[610px] mx-auto hidden lg:flex items-center gap-5 justify-between">
          {["drops", "analytics", "QR code"].map((item, i) => (
            <Tab item={item} i={i} key={i} tab={tab} setTab={setTab} />
          ))}
        </div>
        <div>{renderContent(tab)}</div>
      </section>
    </section>
  );
};

export default ArtistDashboard;

const Tab = ({ item, i, tab, setTab }) => {
  return (
    <>
      <button
        className={`text-white text-center text-lg font-medium font-noka py-[10px] px-4 rounded-[10px] w-[150px] capitalize ${
          tab === item ? "bg-primary" : "bg-transparent"
        }`}
        key={i}
        onClick={() => setTab(item)}
      >
        {item}
      </button>
      {i !== 2 && (
        <div className="h-full w-[1px] border-l border-white py-6"></div>
      )}
    </>
  );
};

const Welcome = () => {
  const isMobile = useWindowWidth();
  return (
    <div className="flex flex-col items-center">
      <GradientHeading text={<>Welcome Back {isMobile && <br />} Theo.</>} />
      <div className="hidden lg:block">
        <Paragraph text="Take a look at what’s happening with your collections today!" />
      </div>
    </div>
  );
};
