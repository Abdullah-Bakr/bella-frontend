import Link from "next/link";
import React from "react";

function Hero() {
  return (
    <section className="bg-gray-50 hero">
      <div className="mx-auto max-w-screen-xl px-4 py-28 lg:flex lg:flex-col lg:h-screen ">
        <div className="md:w-1/2 text-[40px] mb-4 flex justify-center text-primary100 mt-[-50px]">
          <h1 className="rounded-lg px-4 py-2 animate-bounce text-center w-fit bg-bg300/50">
            Bella Store
          </h1>
        </div>
        <div className=" max-w-xl text-center bg-bg300/20 p-4 rounded-lg">
          <h1 className="text-3xl font-extrabold sm:text-5xl text-text100">
            Welcome Everyone To
            <strong className="font-extrabold text-primary100 block my-3">
              Cats Heaven
            </strong>
          </h1>

          <p className="mt-4 sm:text-xl/relaxed text-text100">
            "Your one-stop destination for all things cat! Explore our curated
            collection of purr-fect essentials and treats for your whiskered
            companion."
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              className="transition-all duration-200 shadow-md shadow-accent100 hover:shadow-accent200 bg-accent200 hover:text-text100 text-white py-2 px-4 rounded-md hover:bg-accent100 sm:w-auto"
              href="/productsection"
            >
              Get Start Shopping
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
