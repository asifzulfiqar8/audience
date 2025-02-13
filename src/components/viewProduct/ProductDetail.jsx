"use client";
import { useState } from "react";
import SectionHeading from "../shared/SectionHeading";
import Button from "../shared/Button";
import Image from "next/image";

const ProductDetail = ({ product }) => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  return (
    <div className="flex flex-col justify-center">
      <p className="text-xs text-center md:text-left text-black font-medium font-noka">
        {product.type}
      </p>
      <SectionHeading
        textOne={product.merchName}
        leading="leading-none"
        mw="max-w-[400px]"
      />
      <p className="text-primary text-center md:text-left text-xl font-medium font-noka">
        £{product.price}
      </p>
      <div className="mt-4 lg:mt-6 flex items-center justify-center lg:justify-start gap-[10px] lg:gap-5">
        {product.sizes.map((size, i) => (
          <button
            onClick={() => setSelectedProduct(size)}
            className={`px-[10px] py-1 lg:px-5 rounded-[5px] text-white text-xs lg:text-xl font-bold font-noka uppercase transition-all duration-300 ${
              selectedProduct === size ? "bg-primary" : "bg-[#00071D]"
            } ${
              !product.availableSize.includes(size)
                ? "opacity-50"
                : "hover:bg-primary opacity-100"
            }`}
            key={i}
            disabled={!product.availableSize.includes(size)}
          >
            {size}
          </button>
        ))}
      </div>
      <div className="mt-4 lg:mt-6 flex items-center justify-center lg:justify-start gap-4">
        <Button
          link="/cart"
          text="Buy Now"
          color="text-[#000]"
          img="/images/default/buy-now-border.png"
        />
        <div className="flex items-center max-w-[89px]">
          {product?.companyImages.slice(0, 5).map((item, index) => (
            <div
              className="size-[30px] p-1 rounded-full shadow-songShadow -ml-3 grid place-items-center bg-white"
              key={index}
            >
              <Image
                src={item}
                width={18}
                height={18}
                alt="image"
                className="size-full rounded-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
