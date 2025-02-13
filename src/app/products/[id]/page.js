export const runtime = 'edge';

import OurClothing from "@/components/browseMusic/OurClothing";
import ImageGallery from "@/components/viewProduct/ImageGallery";
import ProductDetail from "@/components/viewProduct/ProductDetail";
import { merchLists } from "@/data/data";
import { notFound } from "next/navigation";

const ViewProduct = async ({ params }) => {
  const { id } = await params;
  const product = merchLists.find((list) => list?._id === Number(id));
  const images = product?.merchImages?.map((list) => list);

  if (!product) return notFound();

  return (
    <>
      <section className="w-full bg-white">
        <section className="container mx-auto px-10 grid grid-cols-1 lg:grid-cols-2 gap-6 py-[60px]">
          <ImageGallery images={images} />
          <ProductDetail product={product} />
        </section>
      </section>
      <OurClothing />
    </>
  );
};

export default ViewProduct;
