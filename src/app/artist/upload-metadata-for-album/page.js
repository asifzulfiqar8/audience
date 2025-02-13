import UploadMetaForAlbum from "@/components/artist/UploadMetaForAlbum";
import Image from "next/image";

const images = [
  "/images/artist/metadata-1.png",
  "/images/artist/metadata-2.png",
  "/images/artist/metadata-3.png",
  "/images/artist/metadata-4.png",
  "/images/artist/metadata-5.png",
  "/images/artist/metadata-6.png",
];

const UploadMetadataForAlbumt = () => {
  return (
    <section className="w-full bg-white">
      <section className="container mx-auto px-10 pt-6 md:pt-[60px] pb-[60px] md:pb-[116px] grid grid-cols-1 lg:grid-cols-12">
        <div className="hidden lg:flex flex-col justify-between lg:col-span-5">
          {images.map((image, i) => (
            <Image
              key={i}
              src={image}
              width={457}
              height={333}
              alt="image"
              className="w-full -mt-[60px]"
            />
          ))}
        </div>
        <div className="hidden lg:block col-span-1"></div>
        <div className="lg:col-span-6 flex items-center">
          <UploadMetaForAlbum />
        </div>
      </section>
    </section>
  );
};

export default UploadMetadataForAlbumt;
