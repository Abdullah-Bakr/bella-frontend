import React from "react";

const Faq = () => {
  return (
    <div className="py-5 bg-bg100">
      <h1 className="text-center my-5 text-[32px] font-bold text-primary200">
        FAQ
      </h1>
      <div className="container mx-auto rounded-xl space-y-4">
        <details className="group border-s-4 border-green-500 bg-bg200 p-6 [&_summary::-webkit-details-marker]:hidden">
          <summary className="flex cursor-pointer items-center justify-between gap-1.5">
            <h2 className="text-lg font-medium text-text100">
              How can I update my account information?
            </h2>
            <span className="shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-5 shrink-0 transition duration-300 group-open:-rotate-45"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
          </summary>
          <p className="mt-4 leading-relaxed text-text200">
            To update your account information, log in to your account and
            navigate to the settings or profile section. From there, you can
            edit your personal details, such as your name, email address, and
            password.
          </p>
        </details>
        <details className="group border-s-4 border-green-500 bg-bg200 p-6 [&_summary::-webkit-details-marker]:hidden">
          <summary className="flex cursor-pointer items-center justify-between gap-1.5">
            <h2 className="text-lg font-medium text-text100">
              Can I cancel my order after it has been placed?
            </h2>
            <span className="shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-5 shrink-0 transition duration-300 group-open:-rotate-45"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
          </summary>
          <p className="mt-4 leading-relaxed text-text200">
            Yes, you can cancel your order within 24 hours of placing it. After
            that, our system may have already processed your order for shipment,
            and we cannot guarantee cancellation.
          </p>
        </details>

        <details className="group border-s-4 border-green-500 bg-bg200 p-6 [&_summary::-webkit-details-marker]:hidden">
          <summary className="flex cursor-pointer items-center justify-between gap-1.5">
            <h2 className="text-lg font-medium text-text100">
              What should I do if I receive a damaged item?
            </h2>
            <span className="shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-5 shrink-0 transition duration-300 group-open:-rotate-45"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
          </summary>
          <p className="mt-4 leading-relaxed text-text200">
            If you receive a damaged item, please contact our customer support
            team within 48 hours of receiving the package. We will provide
            instructions on how to return the item and process a replacement or
            refund.
          </p>
        </details>

        <details className="group border-s-4 border-green-500 bg-bg200 p-6 [&_summary::-webkit-details-marker]:hidden">
          <summary className="flex cursor-pointer items-center justify-between gap-1.5">
            <h2 className="text-lg font-medium text-text100">
              How long does shipping take?
            </h2>
            <span className="shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-5 shrink-0 transition duration-300 group-open:-rotate-45"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
          </summary>
          <p className="mt-4 leading-relaxed text-text200">
            Shipping times vary depending on your location and the shipping
            method selected at checkout. Standard shipping typically takes 3-5
            business days, while expedited shipping may arrive within 1-2
            business days.
          </p>
        </details>
      </div>
    </div>
  );
};

export default Faq;
