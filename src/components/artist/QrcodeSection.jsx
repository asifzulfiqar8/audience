"use client";
import Image from "next/image";
import Button from "../shared/Button";
import useWindowWidth from "@/hooks/useWindowWidth";

const items = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const QrcodeSection = () => {
  const isMobile = useWindowWidth(1024);
  const qrData = isMobile ? items.slice(0, 3) : items.slice(0, 8);
  return (
    <div className="mt-10 bg-[#020000] border border-white rounded-[20px] p-5 lg:p-10">
      <div className="flex flex-col md:flex-row items-center justify-between gap-3">
        <h6 className="text-xl lg:text-[40px] text-white font-bold font-noka">
          QR Codes
        </h6>
        <Button text="ORDER MORE QR CODES" />
      </div>
      <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-10">
        {qrData.map((item, i) => (
          <QrCard key={i} i={i} item={item} data={qrData} isMobile={isMobile} />
        ))}
      </div>
    </div>
  );
};

export default QrcodeSection;

const QrCard = ({ item, i, data, isMobile }) => {
  return (
    <div
      className={`flex flex-col md:flex-row gap-3 md:gap-10 pb-10 ${
        isMobile
          ? i < data.length - 1
            ? "border-b border-white"
            : ""
          : i < data.length - 2
          ? "border-b border-white"
          : ""
      }`}
    >
      <Image
        src="/images/artist/qr-img.png"
        width={150}
        height={150}
        alt="qr code"
        className="size-full sm:size-[150px] object-cover"
      />
      <div className="flex flex-col justify-between gap-4">
        <div>
          <span className="text-xs text-white font-medium font-noka">
            Single
          </span>
          <h6 className="mt-1 md:mt-5 text-xl md:text-[40px] text-white font-bold font-noka">
            Single Name
          </h6>
        </div>
        <div className="flex items-center gap-5">
          <Button text="Copy Link" img="/images/default/buy-now-border.png" />
          <div className="hidden lg:block">
            <Button
              text="Download"
              img="/images/default/buy-now-border.png"
              bottom="-bottom-[10px]"
            />
          </div>
          <div className="block lg:hidden">
            <Button text="Share" img="/images/default/buy-now-border.png" />
          </div>
        </div>
      </div>
    </div>
  );
};
