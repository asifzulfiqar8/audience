import MyMusicTransactionSec from "@/components/fan/MyMusicTransactionSec";
import Welcome from "@/components/fan/Welcome";

const Fan = () => {
  return (
    <section className="w-full bg-[url('/images/fan/fan-bg.png')] bg-no-repeat bg-cover bg-center">
      <section className="container mx-auto px-10 py-[60px] lg:pt-[76px] pb-[120px]">
        <Welcome />
        <MyMusicTransactionSec />
      </section>
    </section>
  );
};

export default Fan;
