"use client";

import React, { useEffect, useState } from "react";
import ProductList from "./ProductList";
import ProductApis from "../_utils/ProductApis";

const ProductSection = () => {
  const [productsList, setProductsList] = useState([]);
  useEffect(() => {
    getLatestProducts_();
  }, []);
  const getLatestProducts_ = () => {
    ProductApis.getLatestProducts().then((res) => {
      setProductsList(res.data.data);
    });
  };
  return (
    <div className=" py-5 bg-bg100">
      <ProductList productsList={productsList} loading={!productsList.length} />
    </div>
  );
};

export default ProductSection;
