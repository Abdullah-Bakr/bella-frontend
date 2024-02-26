"use client";
import React, { useState } from "react";
import Link from "next/link";
import ProductsSkeleton from "./ProductsSkeleton";

const ProductList = ({ productsList, loading }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchedProducts, setSearchedProducts] = useState([]);
  const [noResults, setNoResults] = useState(false);

  // Function to handle search
  const handleSearch = () => {
    const filteredProducts = productsList.filter(
      (item) =>
        item.attributes?.title
          .toLowerCase()
          .includes(searchTerm.toLowerCase()) ||
        item.attributes?.category
          .toLowerCase()
          .includes(searchTerm.toLowerCase())
    );
    setSearchedProducts(filteredProducts);
    setNoResults(filteredProducts.length === 0);
  };

  // Function to show all products again
  const showAllProducts = () => {
    setSearchedProducts([]);
    setSearchTerm("");
    setNoResults(false);
  };

  // Determine which products to display
  const displayProducts =
    searchedProducts.length > 0 ? searchedProducts : productsList;

  return (
    <>
      <div className="w-[80%] mx-auto">
        <img
          src="/pexels-chevon-rossouw-2558605.jpg"
          className="w-full h-[300px] object-cover shadow-xl"
          alt="banner"
        />
      </div>
      <div className="my-5 flex justify-center items-center flex-wrap">
        <input
          className="w-[50%] outline-none text-primary200 h-10 rounded-l-lg pl-4"
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        {searchTerm && ( // Render clear button only when searchTerm is not empty
          <button
            className="bg-white h-10 px-5 text-text100 text-xl "
            onClick={() => setSearchTerm("")} // Clear searchTerm on button click
          >
            x
          </button>
        )}
        <button
          className="bg-accent200 py-2 px-4 rounded-r-lg h-10 text-white "
          onClick={handleSearch}
        >
          Search
        </button>
        <button
          className="bg-accent200 py-2 px-4 rounded-lg h-10 text-white m-5"
          onClick={showAllProducts}
        >
          Show All Products
        </button>
      </div>
      {loading ? (
        <ProductsSkeleton />
      ) : (
        <div className="w-[85%] mx-auto grid gap-5 grid-cols-1 text-text100 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 px-5">
          {noResults ? (
            <div className="text-red-500 text-center">
              No results found for "{searchTerm}".
            </div>
          ) : (
            displayProducts.map((item) => (
              <Link
                href={`/product-details/${item.id}`}
                key={item.id}
                className="hover:shadow-lg mt-10 shadow-md hover:scale-110 transition-all duration-300 border border-solid border-transparent hover:border-primary100 flex cursor-pointer justify-center items-center flex-col bg-bg200 p-3 rounded-lg"
              >
                <img
                  src={item.attributes?.banner?.data?.attributes?.url}
                  alt="product pic"
                  className="object-cover w-[210px] h-[200px] rounded-lg my-3"
                />
                <h2 className="my-3 text-primary100 line-clamp-1">
                  {item.attributes?.title}
                </h2>
                <h4 className="mb-3 text-text100 text-sm line-clamp-2">
                  {item.attributes?.description[0]?.children[0]?.text}
                </h4>
                <div className="flex w-full justify-around items-center">
                  <p className="text-text200/80 uppercase text-[12px]">
                    {item.attributes?.category}
                  </p>
                  <p className="font-bold">${item.attributes?.price}</p>
                </div>
              </Link>
            ))
          )}
        </div>
      )}
    </>
  );
};

export default ProductList;
