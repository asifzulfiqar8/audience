import Image from "next/image";

const ArtistImg = ({ image }) => {
  return (
    <div className="relative size-[70px] lg:size-[140px]">
      <Image
        src="/images/browse-music/artist-bg.png"
        width={140}
        height={140}
        alt="bg"
        className="size-[70px] lg:size-[140px] absolute inset-0"
      />
      <Image
        src={image}
        width={110}
        height={110}
        alt="artist-img"
        className="size-[50px] lg:size-[110px] object-cover rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
      />
    </div>
  );
};

export default ArtistImg;
