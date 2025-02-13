import Image from "next/image";
import BillingAndCardForm from "./BillingAndCardForm";

const PackageSelectedSec = () => {
  return (
    <section className="bg-white w-full">
      <section className="container mx-auto px-10 py-[60px] lg:pb-[120px] grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-10 xl:gap-[87px]">
        <div className="hidden lg:block lg:col-span-5 rounded-[20px]">
          <Image
            src="/images/artist/package-side-img.png"
            width={453}
            height={800}
            alt="image"
            className="w-full object-cover h-auto max-h-[1100px] -mt-[10rem] rounded-[20px]"
          />
        </div>
        <div className="lg:col-span-7 border border-[#00071D] rounded-[20px] p-10">
          <h6 className="text-xl lg:text-[40px] text-textColor font-medium font-noka">
            Starter Pack Selected
          </h6>
          <p className="text-xs lg:text-xl font-medium font-noka text-primary mt-2">
            Amount Due: $100
          </p>
          <div className="mt-10 flex items-center justify-between gap-5">
            <h6 className="text-xs lg:text-[30px] font-bold font-noka text-textColor flex-1 border-b sm:border-0 border-textColor">
              Credit Card
            </h6>
            <p className="text-xs lg:text-[30px] font-medium font-noka text-textColor flex-1 text-end">
              Cardano Wallet
            </p>
          </div>
          {/* Billing form */}
          <BillingAndCardForm />
        </div>
      </section>
    </section>
  );
};

export default PackageSelectedSec;
