"use client";
import React, { useEffect } from "react";
import { useCart } from "../_context/CartContext";
import Link from "next/link";
import CartApis from "../_utils/CartApis";
import { useRouter } from "next/navigation";

const Cart = () => {
  const { cart, setCart } = useCart();
  const router = useRouter();

  const totalPrice = () => {
    let totalAmount = 0;
    cart.forEach((item) => {
      const quantity = Math.max(parseInt(item?.quantity, 10) || 1, 1);
      totalAmount += quantity * Number(item?.product?.attributes?.price);
    });
    return totalAmount.toFixed(2);
  };

  const deleteCartItemFromList = (id) => {
    CartApis.deleteCartItem(id)
      .then((res) => {
        if (res) {
          setCart((oldCart) =>
            oldCart.filter((item) => item.id !== res?.data?.data?.id)
          );
        }
      })
      .catch((error) => console.log(error));
  };

  const increaseCartQuantity = (id) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id ? { ...item, quantity: (item.quantity || 1) + 1 } : item
      )
    );
  };

  const decreaseCartQuantity = (id) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max((item.quantity || 1) - 1, 1) }
          : item
      )
    );
  };

  return (
    <section>
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <div className="mx-auto max-w-3xl">
          {cart.length > 0 ? (
            <>
              <header className="flex justify-center">
                <h1 className="text-xl font-bold w-fit py-3 px-5 shadow-md shadow-accent100 hover:shadow-accent200 bg-accent200 hover:text-text100 text-white hover:bg-accent100 cursor-pointer rounded-xl sm:text-3xl">
                  Your Cart
                </h1>
              </header>

              <div className="mt-8 bg-bg200 p-10 rounded-xl">
                <ul className="space-y-4">
                  {cart.map((item) => (
                    <li
                      key={item?.id}
                      className="flex items-center gap-4 flex-wrap border-b-[1px] pb-3 border-accent100"
                    >
                      <img
                        src={
                          item?.product?.attributes?.banner?.data?.attributes
                            ?.url
                        }
                        alt=""
                        className="size-16 rounded object-cover"
                      />

                      <div>
                        <h3 className="text-sm text-text100 line-clamp-1">
                          {item?.product?.attributes?.title}
                        </h3>

                        <dl className="mt-0.5 space-y-px text-[10px] text-text200">
                          <div>
                            <dt className="inline">Category:</dt>
                            <dd className="inline capitalize ps-2">
                              {item?.product?.attributes?.category}
                            </dd>
                          </div>
                        </dl>
                      </div>

                      <div className="flex flex-1 items-center justify-around gap-2 text-text100">
                        <div className="flex justify-center items-center gap-2 text-text100">
                          <button
                            onClick={() => decreaseCartQuantity(item.id)}
                            className="py-2 px-4 bg-bg300 rounded-lg"
                          >
                            -
                          </button>
                          <p className="py-2 px-4 bg-bg300 rounded-lg">
                            {item.quantity || 1}
                          </p>
                          <button
                            onClick={() => increaseCartQuantity(item.id)}
                            className="py-2 px-4 bg-bg300 rounded-lg"
                          >
                            +
                          </button>
                        </div>
                        {item.quantity || 1} *
                        {Number(item?.product?.attributes?.price)}
                        <button
                          onClick={() => deleteCartItemFromList(item?.id)}
                          className="text-text100 transition hover:text-red-600"
                        >
                          <span className="sr-only">Remove item</span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="h-4 w-4"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                            />
                          </svg>
                        </button>
                      </div>
                    </li>
                  ))}
                </ul>

                <div className="mt-8 flex justify-end border-t border-gray-100 pt-8">
                  <div className="w-screen space-y-4 ">
                    <div className="flex justify-between text-white bg-primary100 p-4 rounded-lg !text-base font-medium">
                      <dt>Total</dt>
                      <dd>${totalPrice()}</dd>
                    </div>

                    <div className="flex justify-end">
                      <button
                        onClick={() =>
                          router.push(`/checkout?amount=${totalPrice()}`)
                        }
                        className="transition-all duration-200 shadow-md shadow-accent100 hover:shadow-accent200 bg-accent200 hover:text-text100 text-white py-2 px-4 rounded-md hover:bg-accent100 sm:w-auto"
                      >
                        Checkout
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <header className="text-center flex justify-center items-center flex-col">
              <h1 className="transition-all duration-200 text-xl font-bold py-3 px-5 shadow-md shadow-accent100 hover:shadow-accent200 bg-accent200 hover:text-text100 text-white hover:bg-accent100 cursor-pointer rounded-xl sm:text-3xl">
                Your Cart Is Empty
              </h1>
              <div className="mt-10 shadow-lg hover:shadow-2xl sm:w-fit text-primary300 flex justify-center items-center gap-2 text-[25px] px-5 py-2 w-full rounded-lg bg-accent200 hover:bg-accent100 hover:text-primary100 transition-all duration-200">
                <Link href="/productsection">Shop Now</Link>
              </div>
            </header>
          )}
        </div>
      </div>
    </section>
  );
};

export default Cart;
