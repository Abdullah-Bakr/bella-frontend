import Image from "next/image";
import React from "react";

const ProductBanner = ({ product }) => {
  return (
    <div>
      {product?.id ? (
        <div className="flex w-fit rounded-lg justify-center p-4 bg-bg200 shadow-md shadow-accent100">
          <img
            src={product?.attributes?.banner?.data?.attributes?.url}
            alt="product-details picture"
            className="object-contain w-fit rounded-lg h-[300px] "
          />
        </div>
      ) : (
        <div className="w-[320px] sm:w-[400px] h-[300px] p-4 bg-bg300 rounded-lg animate-pulse"></div>
      )}
    </div>
  );
};

export default ProductBanner;
