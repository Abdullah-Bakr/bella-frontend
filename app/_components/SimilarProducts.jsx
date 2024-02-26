import Link from "next/link";
import React from "react";

const SimilarProducts = ({ productList }) => {
  return (
    <div className="w-[85%] mx-auto grid gap-5 grid-cols-1 text-text100 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 px-5 ">
      {productList.map((item) => (
        <Link
          href={`/product-details/${item.id}`}
          key={item.id}
          className="hover:shadow-lg shadow-md hover:scale-110 transition-all duration-300 border border-solid border-transparent hover:border-primary100 flex cursor-pointer justify-center items-center flex-col bg-bg200 p-3 rounded-lg"
        >
          <img
            src={item.attributes?.banner?.data?.attributes?.url}
            alt="product pic"
            className="object-contain  rounded-md my-3"
          />
          <h2 className="my-3 text-primary100 line-clamp-1">
            {item.attributes?.title}
          </h2>
          <div className="flex w-full justify-around items-center">
            <p className="text-text200/80 uppercase text-[12px]">
              {item.attributes?.category}
            </p>
            <p className="font-bold">${item.attributes?.price}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default SimilarProducts;
