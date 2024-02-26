"use client";
import React from "react";
import { useCart } from "../_context/CartContext";
import Link from "next/link";

const ViewCart = ({ setOpenCart }) => {
  const { cart } = useCart();

  return (
    <div
      className="absolute shadow-md rounded-xl h-[450px] overflow-auto right-0 md:right-10 top-14 w-screen max-w-sm border border-gray-600 bg-bg100 px-4 py-8 sm:px-6 lg:px-8"
      aria-modal="true"
      role="dialog"
      tabIndex="-1"
    >
      {cart.length === 0 ? (
        <>
          <div className="flex justify-center items-center flex-col">
            <h2 className="text-xl capitalize my-5 text-center text-primary200">
              Your cart is empty
            </h2>
            <Link
              className="text-center transition-all duration-200 shadow-md shadow-accent100 hover:shadow-accent200 bg-accent200 hover:text-text100 text-white py-2 px-4 rounded-md hover:bg-accent100 sm:w-auto"
              href="/productsection"
              onClick={() => setOpenCart(false)}
            >
              Shop Now
            </Link>
          </div>
        </>
      ) : (
        <div className="space-y-4 text-center">
          <Link
            onClick={() => setOpenCart(false)}
            href="/cart"
            className="block rounded bg-bg200 border border-text200 px-5 py-3 text-sm text-text200 transition hover:ring-1 hover:ring-gray-400"
          >
            View my cart ({cart.length})
          </Link>
        </div>
      )}
      <div className="mt-4 space-y-6">
        <ul className="space-y-4">
          {cart.map((item) => (
            <li
              key={item?.id}
              className="flex items-center gap-4 border-b-2 border-primary100 pb-2"
            >
              <img
                src={item?.product?.attributes?.banner?.data?.attributes?.url}
                alt=""
                className="size-16 rounded object-cover"
              />

              <div>
                <h3 className="text-sm text-gray-900">
                  {item?.product?.attributes?.title}
                </h3>

                <dl className="mt-0.5 space-y-px text-[10px] text-gray-600">
                  <div>
                    <dt className="inline">Category:</dt>
                    <dd className="inline capitalize ps-2">
                      {item?.product?.attributes?.category}
                    </dd>
                  </div>

                  <div>
                    <dt className="inline">Price:</dt>
                    <dd className="inline ps-2">
                      {item?.product?.attributes?.price}
                    </dd>
                  </div>
                </dl>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ViewCart;
