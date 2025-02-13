import CustomQr from "@/components/qrcode/CustomQr";
import DistributionSec from "@/components/qrcode/DistributionSec";
import PatentSec from "@/components/qrcode/PatentSec";
import QrHero from "@/components/qrcode/QrHero";
import React from "react";

const QrCodes = () => {
  return (
    <>
      <QrHero />
      <CustomQr />
      <PatentSec />
      <DistributionSec />
    </>
  );
};

export default QrCodes;
