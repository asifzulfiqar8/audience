import Image from "next/image";
import QrcodeSection from "./QrcodeSection";

const QrCodeContent = () => {
  return (
    <div className="lg:mt-[60px]">
      <div className="flex gap-8">
        <div className="basis-1/2 hidden lg:block"></div>
        <div className="basis-full lg:basis-[50%]">
          <Image
            src="/images/artist/qr-box-mobile.png"
            width={600}
            height={251}
            alt="image"
            className="w-full h-auto block lg:hidden mt-2"
          />
          <Image
            src="/images/artist/qr-box.png"
            width={600}
            height={251}
            alt="image"
            className="w-full h-auto mt-2 hidden lg:block"
          />
        </div>
      </div>
      {/* QR codes sec */}
      <QrcodeSection />
    </div>
  );
};

export default QrCodeContent;
