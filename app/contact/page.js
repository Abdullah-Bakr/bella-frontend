import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa6";

const page = () => {
  return (
    <div className="bg-bg100 mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
      <div className="flex justify-center">
        <h2 className="transition-all duration-200 text-center w-fit text-xl font-bold py-3 px-5 shadow-md shadow-accent100 hover:shadow-accent200 bg-accent200 hover:text-text100 text-white hover:bg-accent100 cursor-pointer rounded-xl sm:text-3xl">
          Contact Us
        </h2>
      </div>
      <div className="flex justify-evenly gap-8 items-center flex-wrap">
        <div className="flex items-center justify-center flex-col">
          <div className="text-text100 flex items-center justify-center flex-col text-[32px] ">
            <h4 className="text-primary100">Bella</h4>
            <h5>FELLOW</h5>
            <div className="text-primary200  my-4 text-[32px] flex justify-center gap-4">
              <div className="hover:text-accent100 cursor-pointer rounded-full transition-all duration-200 w-[64px]  h-[64px] flex items-center justify-center bg-bg100 hover:shadow-md hover:shadow-accent200">
                <FaFacebook />
              </div>
              <div className="hover:text-accent100 cursor-pointer rounded-full transition-all duration-200 w-[64px]  h-[64px] flex items-center justify-center bg-bg100 hover:shadow-md hover:shadow-accent200">
                <FaInstagram />
              </div>
              <div className="hover:text-accent100 cursor-pointer rounded-full transition-all duration-200 w-[64px]  h-[64px] flex items-center justify-center bg-bg100 hover:shadow-md hover:shadow-accent200">
                <FaTwitter />
              </div>
            </div>
          </div>
          <div className="text-text100 my-5 capitalize flex items-center justify-center flex-col text-[32px]">
            <h2 className="my-3">address</h2>
            <p className="text-[16px]">
              1234 street name <span>city, AA 9999</span>
            </p>
          </div>
          <div className="text-text100 my-5 capitalize flex items-center justify-center flex-col text-[32px]">
            <h2 className="my-3">contacts</h2>
            <p className="my-2 text-[16px]">Email : support@bella.com</p>
            <p className="text-[16px]">Phone : 01010101010</p>
          </div>
        </div>
        <div className="flex flex-col items-start justify-center max-w-md w-full p-8 rounded-lg">
          <form className="w-full">
            <div className="mb-4 w-full">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                placeholder="Enter your name"
              />
            </div>
            <div className="mb-4 w-full">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Your Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                placeholder="Enter your email"
              />
            </div>
            <div className="mb-4 w-full">
              <label
                htmlFor="subject"
                className="block text-sm font-medium text-gray-700"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                placeholder="Enter subject"
              />
            </div>
            <div className="mb-4 w-full">
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                placeholder="Enter your message"
              ></textarea>
            </div>
            <div className="mb-4 w-full">
              <button
                type="submit"
                className="w-full transition-all duration-200 shadow-md shadow-accent100 hover:shadow-accent200 bg-accent200 hover:text-text100 text-white py-2 px-4 rounded-md hover:bg-accent100 "
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default page;
