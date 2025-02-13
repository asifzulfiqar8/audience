import HomeHero from "@/components/home/HomeHero";
import LatestDrops from "@/components/home/LatestDrops";
import OurMerch from "@/components/home/OurMerch";
import RecentActivity from "@/components/home/RecentActivity";
import RoyaltiesSec from "@/components/home/RoyaltiesSec";
import VipTokens from "@/components/home/VipTokens";

export default function Home() {
  return (
    <>
      <HomeHero />
      <LatestDrops />
      <RecentActivity />
      <OurMerch />
      <VipTokens />
      <RoyaltiesSec />
    </>
  );
}
