import BrowseMusicHero from "@/components/browseMusic/BrowseMusicHero";
import LatestDrops from "@/components/browseMusic/LatestDrops";
import OurClothing from "@/components/browseMusic/OurClothing";
import PopularAlbums from "@/components/browseMusic/PopularAlbums";
import TopArtist from "@/components/browseMusic/TopArtist";

const BrowseMusic = () => {
  return (
    <>
      <BrowseMusicHero />
      <TopArtist />
      <PopularAlbums />
      <LatestDrops />
      <OurClothing />
    </>
  );
};

export default BrowseMusic;
