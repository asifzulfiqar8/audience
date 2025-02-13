import Image from "next/image";
import GradientHeading from "../shared/GradientHeading";
import AuthForm from "./AuthForm";

const FanSignin = () => {
  return (
    <section className="w-full bg-white">
      <section className="container mx-auto px-10 pt-[26px] pb-[60px] lg:py-[120px]">
        <div className="grid grid-cols-1 lg:grid-cols-12">
          <div className="lg:col-span-5 w-full h-full bg-[url('/images/fan/fan-img.png')] bg-no-repeat bg-center bg-cover rounded-[20px] hidden lg:block"></div>
          <div className="hidden lg:block col-span-1"></div>
          <div className="lg:col-span-6">
            <Image
              src="/images/default/logo.png"
              width={235}
              height={51}
              alt="logo"
              className="w-[200px] md:w-[235px] h-auto hidden lg:block"
            />
            <div className="lg:mt-[40px]">
              <GradientHeading
                text={
                  <>
                    Let’s Get <br /> You Started
                  </>
                }
                linearGradient="linear-gradient(186.81deg, #FF0000 28.73%, #00071D 98.49%)"
              />
              <p className="mt-5 text-center md:text-left text-textColor text-xs md:text-xl font-bold font-noka">
                Welcome! <br />
                Log in or sign up to create a wallet
              </p>
              <AuthForm />
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default FanSignin;
