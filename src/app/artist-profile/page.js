import ArtistHeroSec from "@/components/artistProfile/ArtistHeroSec";
import ArtistSec from "@/components/artistProfile/ArtistSec";
import TopProjects from "@/components/artistProfile/TopProjects";
import TopReleases from "@/components/artistProfile/TopReleases";
import OurClothing from "@/components/browseMusic/OurClothing";

const ArtistProfile = () => {
  return (
    <>
      <ArtistHeroSec />
      <TopReleases />
      <TopProjects />
      <OurClothing />
      <ArtistSec />
    </>
  );
};

export default ArtistProfile;
