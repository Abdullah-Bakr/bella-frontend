"use client";
import React, { useEffect, useState } from "react";
import ProductBanner from "../_components/ProductBanner";
import ProductInfo from "../_components/ProductInfo";
import SimilarProducts from "../../_components/SimilarProducts";
import BreadCrums from "../../_components/BreadCrums";
import ProductApis from "../../_utils/ProductApis";

const page = ({ params }) => {
  const [productDetails, setProductDetails] = useState({});
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    getProductById_();
  }, [params?.productId]);
  const getProductById_ = () => {
    ProductApis.getProductById(params?.productId).then((res) => {
      setProductDetails(res?.data?.data);
      getProductListByCategory(res?.data?.data);
    });
  };
  const getProductListByCategory = (product) => {
    ProductApis.getProductByCategory(product?.attributes?.category).then(
      (res) => {
        setProductList(res?.data?.data);
      }
    );
  };
  return (
    <div className="bg-bg100 pt-10">
      <div className=" mx-auto w-[80%]">
        <BreadCrums />
        <div className="grid justify-items-center grid-cols-1 md:grid-cols-2 gap-5 mt-10 mx-auto">
          <ProductBanner product={productDetails} />
          <ProductInfo product={productDetails} />
        </div>
        <hr className="w-full h-[2px] mt-10 bg-primary200/70" />
        <div className="mt-10 pb-10 ">
          <h2 className="text-2xl text-text100 my-10">Similar Products</h2>
          <SimilarProducts productList={productList} />
        </div>
      </div>
    </div>
  );
};

export default page;
