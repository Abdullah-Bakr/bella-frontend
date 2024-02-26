"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { UserButton, useUser } from "@clerk/nextjs";
import { FaCartShopping } from "react-icons/fa6";
import { useCart } from "../_context/CartContext";
import CartApis from "../_utils/CartApis";
import ViewCart from "./ViewCart";
import MobileMenu from "./MobileMenu";

function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const { cart, setCart, showMenu, setShowMenu, openCart, setOpenCart } =
    useCart();

  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    setIsLoggedIn(window.location.href.toString().includes("sign-in"));
  }, []);
  const { user } = useUser();
  useEffect(() => {
    user && getCartItems();
  }, [user]);

  const getCartItems = () => {
    CartApis.getUserCartItems(user.primaryEmailAddress.emailAddress).then(
      (res) => {
        console.log("response from cart item", res?.data?.data);
        res?.data?.data.forEach((cItem) => {
          setCart((oldCart) => [
            ...oldCart,
            {
              id: cItem?.id,
              product: cItem?.attributes?.products?.data[0],
            },
          ]);
        });
      }
    );
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    !isLoggedIn && (
      <>
        <header className="bg-bg200 shadow-md z-20 sticky top-0">
          <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 ">
            <div className="flex h-16 items-center justify-between">
              <div className="md:flex md:items-center md:gap-12 text-primary100">
                <Link href="/">
                  <img
                    src="/logo1.png"
                    alt="logo"
                    className="w-10 h-10 cursor-pointer"
                  />
                </Link>
              </div>

              <div className="hidden md:block">
                <nav aria-label="Global">
                  <ul className="flex items-center gap-6 text-sm">
                    <li>
                      <Link
                        className="text-primary100 transition hover:text-primary200 duration-200"
                        href="/"
                      >
                        Home
                      </Link>
                    </li>

                    <li>
                      <Link
                        className="text-primary100 transition hover:text-primary200 duration-200"
                        href="/productsection"
                      >
                        Shop
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="text-primary100 transition hover:text-primary200 duration-200"
                        href="/about"
                      >
                        About
                      </Link>
                    </li>

                    <li>
                      <Link
                        className="text-primary100 transition hover:text-primary200 duration-200"
                        href="/services"
                      >
                        Services
                      </Link>
                    </li>

                    <li>
                      <Link
                        className="text-primary100 transition hover:text-primary200 duration-200"
                        href="/contact"
                      >
                        Contact Us
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>

              <div className="flex items-center gap-4">
                {!user ? (
                  <div className="sm:flex sm:gap-4">
                    <a
                      className="transition-all duration-200 rounded-md bg-primary100 hover:bg-primary200 px-5 py-2.5 text-sm font-medium text-bg100 hover:text-bg200 shadow"
                      href="/sign-in"
                    >
                      Login || Sign up
                    </a>
                  </div>
                ) : (
                  <div className="flex items-center gap-5">
                    <h2
                      onClick={() => setOpenCart(!openCart)}
                      className="flex items-center gap-1 cursor-pointer"
                    >
                      <FaCartShopping className="text-primary100" />(
                      {cart?.length})
                    </h2>
                    <UserButton />
                    {openCart ? <ViewCart setOpenCart={setOpenCart} /> : null}
                  </div>
                )}

                <div className="block md:hidden">
                  <button
                    onClick={() => setShowMenu(!showMenu)}
                    className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="fixed bottom-10 right-10">
            <button
              className={`fixed bottom-[85px] right-10 rounded-full bg-primary100 hover:bg-primary200 p-2 text-white shadow transition-opacity ${
                showBackToTop ? "opacity-100" : "opacity-0"
              } sm:p-3 lg:p-4`}
              onClick={scrollToTop}
              style={{
                transition: "opacity 0.3s ease-in-out",
              }}
            >
              <span className="sr-only">Back to top</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        </header>
        {showMenu ? <MobileMenu setShowMenu={setShowMenu} /> : null}
      </>
    )
  );
}

export default Header;
