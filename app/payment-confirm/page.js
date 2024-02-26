import Image from "next/image";
import Link from "next/link";
import React from "react";

function PaymentConfirm() {
  return (
    <div className="flex flex-col items-center justify-center px-5 mt-4">
      <Image src="/verified.gif" alt="check" width={130} height={130} />
      <h2 className="text-[24px]">Payment Successful !</h2>
      <h2 className="text-[17px] text-center mt-6 text-gray-500">
        We sent an email with your order confirmation along with Digital Content
      </h2>
      <Link
        href="/"
        className="transition-all duration-200 shadow-md shadow-accent100 hover:shadow-accent200 bg-accent200 hover:text-text100 my-5 text-white py-2 px-4 rounded-md hover:bg-accent100 sm:w-auto"
      >
        Go to Home
      </Link>
    </div>
  );
}

export default PaymentConfirm;
