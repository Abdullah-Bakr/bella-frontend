import React from "react";
import Link from "next/link";

const page = () => {
  return (
    <section className="bg-bg100 text-text100">
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        <div className="mx-auto max-w-lg text-center">
          <h2 className="transition-all duration-200 text-xl font-bold py-3 px-5 shadow-md shadow-accent100 hover:shadow-accent200 bg-accent200 hover:text-text100 text-white hover:bg-accent100 cursor-pointer rounded-xl sm:text-3xl">
            Explore Our Services for Cats
          </h2>
          <p className="mt-4 text-text200">
            From gourmet treats to stylish accessories, we offer a range of
            services to keep your feline friend happy and healthy.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <a
            className="block rounded-xl border border-primary100 p-8 shadow-xl transition hover:border-primary100/30 hover:shadow-primary200"
            href="#"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="size-10 text-pink-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M12 14l9-5-9-5-9 5 9 5z" />
              <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
              />
            </svg>
            <h2 className="mt-4 text-xl font-bold text-text100">
              Gourmet Treats
            </h2>
            <p className="mt-1 text-sm text-text200">
              Indulge your cat with our selection of premium gourmet treats,
              made from the finest ingredients.
            </p>
          </a>
          <a
            className="block rounded-xl border border-primary100 p-8 shadow-xl transition hover:border-primary100/30 hover:shadow-primary200"
            href="#"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="size-10 text-yellow-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 9v.01M9 12h.01M12 19v.01M12 6v.01M9 6.999L5.209 10.79a1 1 0 00-.209.293V19a2 2 0 002 2h10a2 2 0 002-2V11.085a2 2 0 00-.586-1.415L14 5.999M12 6l-3 3m3 3l3-3m0 3H9"
              />
            </svg>

            <h2 className="mt-4 text-xl font-bold text-text100">
              Customized Care Plans
            </h2>
            <p className="mt-1 text-sm text-text200">
              Tailor your cat's care with our customized care plans, designed to
              meet your cat's unique needs and preferences.
            </p>
          </a>
          <a
            className="block rounded-xl border border-primary100 p-8 shadow-xl transition hover:border-primary100/30 hover:shadow-primary200"
            href="#"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="size-10 text-red-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 14l9-5-9-5-9 5 9 5z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
              />
            </svg>
            <h2 className="mt-4 text-xl font-bold text-text100">
              Expert Veterinary Care
            </h2>
            <p className="mt-1 text-sm text-text200">
              Ensure your cat's health with our expert veterinary care services,
              including routine check-ups, vaccinations, and emergency care.
            </p>
          </a>
          <a
            className="block rounded-xl border border-primary100 p-8 shadow-xl transition hover:border-primary100/30 hover:shadow-primary200"
            href="#"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="size-10 text-green-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
              />
            </svg>
            <h2 className="mt-4 text-xl font-bold text-text100">
              Gourmet Treats
            </h2>
            <p className="mt-1 text-sm text-text200">
              Indulge your cat with our selection of premium gourmet treats,
              made from the finest ingredients.
            </p>
          </a>
          <a
            className="block rounded-xl border border-primary100 p-8 shadow-xl transition hover:border-primary100/30 hover:shadow-primary200"
            href="#"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="size-10 text-blue-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            <h2 className="mt-4 text-xl font-bold text-text100">
              Luxury Bedding
            </h2>
            <p className="mt-1 text-sm text-text200">
              Treat your cat like royalty with our selection of luxury bedding
              options, designed for ultimate comfort and style.
            </p>
          </a>
          <a
            className="block rounded-xl border border-primary100 p-8 shadow-xl transition hover:border-primary100/30 hover:shadow-primary200"
            href="#"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="size-10 text-purple-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 10V3L4 14h7v7l9-11h-7z"
              />
            </svg>
            <h2 className="mt-4 text-xl font-bold text-text100">
              Personalized Care
            </h2>
            <p className="mt-1 text-sm text-text200">
              Provide your cat with personalized care services tailored to their
              unique needs and preferences.
            </p>
          </a>
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/contact"
            className="inline-block transition-all duration-200 shadow-md shadow-accent100 hover:shadow-accent200 bg-accent200 hover:text-text100 text-white py-2 px-4 rounded-md hover:bg-accent100 "
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
};

export default page;
