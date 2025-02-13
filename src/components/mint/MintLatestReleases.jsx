import { latestReleasesData } from "@/data/data";
import SectionHeading from "../shared/SectionHeading";
import ViewAllBtn from "../shared/ViewAllBtn";
import MintSongBox from "./MintSongBox";

const MintLatestReleases = () => {
  return (
    <section className="bg-white w-full">
      <section className="container mx-auto px-10 py-[60px] lg:py-[120px]">
        <SectionHeading textOne="Latest" textTwo="Releases" />
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-[30px]">
          {latestReleasesData.map((song, i) => (
            <MintSongBox song={song} key={i} />
          ))}
        </div>
        <div className="mt-10 hidden lg:flex justify-center">
          <ViewAllBtn text="View All Releases" url="" />
        </div>
      </section>
    </section>
  );
};

export default MintLatestReleases;
