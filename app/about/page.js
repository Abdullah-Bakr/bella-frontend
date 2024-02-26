import React from "react";

const page = () => {
  return (
    <section className="bg-bg100">
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        <div className="w-full flex justify-center">
          <h2 className="transition-all duration-200 text-center text-xl font-bold py-3 px-5 shadow-md shadow-accent100 hover:shadow-accent200 bg-accent200 hover:text-text100 text-white hover:bg-accent100 cursor-pointer rounded-xl sm:text-3xl">
            Welcome to Our Cat Paradise!
          </h2>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
          <div className="relative h-64 overflow-hidden sm:h-80 lg:h-full">
            <img
              alt="Cat Paradise"
              src="/_47242596-5467-4a7c-87fe-c4c3863ec227.jpg"
              className="absolute inset-0 h-full rounded-2xl w-full object-cover"
            />
          </div>

          <div className="lg:py-16">
            <article className="space-y-4 text-gray-600">
              <p>
                Welcome to Our Cat Paradise! We are passionate about creating a
                world where cats and their humans can thrive together in perfect
                harmony. Our mission is to provide the ultimate experience for
                cat lovers worldwide.
              </p>

              <p>
                Our team is dedicated to curating the finest selection of
                products and services to pamper your beloved feline friends.
                Whether you're seeking high-quality food, stylish accessories,
                or expert advice on cat care, you'll find everything you need
                right here at Our Cat Paradise.
              </p>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;
