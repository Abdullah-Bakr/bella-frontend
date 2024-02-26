"use client";
import { useCart } from "../../_context/CartContext";
import CartApis from "../../_utils/CartApis";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { BsPatchCheck } from "react-icons/bs";
import { BsCartCheck } from "react-icons/bs";

const ProductInfo = ({ product }) => {
  const { user } = useUser();
  const router = useRouter();
  const [disaple, setDisaple] = useState(false);

  const { cart, setCart } = useCart();

  useEffect(() => {
    // Check if the product has already been added to the cart for the current user
    if (user && cart.some((item) => item.product.id === product?.id)) {
      setDisaple(true);
    } else {
      setDisaple(false);
    }
  }, [product, user, cart]);

  const handleAddToCart = () => {
    if (!user) {
      router.push("/sign-in");
    } else {
      const data = {
        data: {
          username: user.fullName,
          email: user.primaryEmailAddress.emailAddress,
          products: [
            {
              id: product.id,
              quantity: 1,
            },
          ],
        },
      };
      CartApis.addToCart(data)
        .then((res) => {
          setCart((oldCart) => [
            ...oldCart,
            {
              id: res?.data?.data?.id,
              product,
              quantity: 1, // Update the quantity in the local cart state
            },
          ]);
          setDisable(true);
        })
        .catch((error) => console.log("error ", error));
    }
  };

  return (
    <>
      {product?.id ? (
        <div className="text-text100">
          <h2 className="text-[20px] my-3">{product?.attributes?.title}</h2>
          <h2 className="text-text200/80 uppercase">
            #{product?.attributes?.category}
          </h2>
          <p className="my-3 text-text200">
            {product?.attributes?.description[0]?.children[0]?.text}
          </p>
          <h2>
            {product?.attributes?.instantDelivery ? (
              <div className="flex gap-3 items-center">
                <p className="text-[18px]">Instant Delivery</p>
                <BsPatchCheck className="text-primary100 w-5 h-5" />
              </div>
            ) : (
              "Not Free"
            )}
          </h2>

          <h2 className="text-text200 text-[25px] rounded-lg my-3">
            Price :
            <span className="text-primary100 text-[32px]">
              {" "}
              ${product?.attributes?.price}
            </span>
          </h2>

          <button
            disabled={disaple}
            onClick={() => handleAddToCart()}
            className={
              disaple
                ? `cursor-not-allowed shadow-lg sm:w-fit text-text200 flex justify-center items-center gap-2 text-[25px] px-5 py-2 w-full rounded-lg bg-bg300  `
                : `shadow-lg hover:shadow-2xl sm:w-fit text-primary300 flex justify-center items-center gap-2 text-[25px] px-5 py-2 w-full rounded-lg bg-accent200 hover:bg-accent100 hover:text-primary100 transition-all duration-200`
            }
          >
            <span>
              <BsCartCheck />
            </span>{" "}
            Add To Cart
          </button>
        </div>
      ) : (
        <div className="text-text100">
          <h2 className=" w-40 h-5 bg-bg300 animate-pulse my-3"></h2>
          <h2 className="w-20 h-5 bg-bg300 animate-pulse "></h2>
          <p className="my-3 w-full h-5 bg-bg300 animate-pulse "></p>
          <h2>
            {product?.attributes?.instantDelivery ? (
              <div className="flex gap-3 items-center">
                <p className="w-40 h-5 bg-bg300 animate-pulse"> </p>
              </div>
            ) : (
              ""
            )}
          </h2>

          <h2 className="w-40 h-10 bg-bg300 animate-pulse rounded-lg my-3"></h2>
          <button className="w-40 h-10 bg-bg300 animate-pulse rounded-lg mt-4"></button>
        </div>
      )}
    </>
  );
};

export default ProductInfo;
