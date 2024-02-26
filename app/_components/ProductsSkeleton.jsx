import React from "react";

const ProductsSkeleton = () => {
  return (
    <div className="w-[85%] mx-auto grid gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 px-5">
      {[...Array(8)].map((_, index) => (
        <div
          key={index}
          className="animate-pulse mt-10 shadow-md flex justify-center items-center flex-col bg-primary300 p-3 rounded-lg"
        >
          <div className="w-[200px] h-[250px] bg-primary200/45 animate-pulse rounded-lg"></div>
          <h2 className="my-3 w-[150px] h-5 bg-bg300 animate-pulse"></h2>
          <div className="flex w-full justify-around items-center animate-pulse">
            <p className="w-10 h-5 bg-bg300 animate-pulse"></p>
            <p className="w-10 h-5 bg-bg300 animate-pulse"></p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductsSkeleton;
