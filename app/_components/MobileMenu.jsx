import Link from "next/link";
import React from "react";

const MobileMenu = ({ setShowMenu }) => {
  return (
    <div className="flex flex-col justify-between border-e bg-bg100 fixed h-screen top-14 left-0 right-0 z-50">
      <div className="px-4 py-6">
        <ul className="mt-6 space-y-1 flex flex-col items-center gap-3">
          <li>
            <Link
              className="text-text100 transition hover:text-text200 duration-200"
              href="/"
              onClick={() => setShowMenu(false)}
            >
              Home
            </Link>
          </li>

          <li>
            <Link
              className="text-text100 transition hover:text-text200 duration-200"
              href="/productsection"
              onClick={() => setShowMenu(false)}
            >
              Shop
            </Link>
          </li>
          <li>
            <Link
              className="text-text100 transition hover:text-text200 duration-200"
              href="/about"
              onClick={() => setShowMenu(false)}
            >
              About
            </Link>
          </li>

          <li>
            <Link
              className="text-text100 transition hover:text-text200 duration-200"
              href="/services"
              onClick={() => setShowMenu(false)}
            >
              Services
            </Link>
          </li>

          <li>
            <Link
              className="text-text100 transition hover:text-text200 duration-200"
              href="/contact"
              onClick={() => setShowMenu(false)}
            >
              Contact Us
            </Link>
          </li>
        </ul>
      </div>

      {/* <div className="sticky inset-x-0 bottom-0 border-t border-gray-100">
        <a
          href="#"
          className="flex items-center gap-2 bg-white p-4 hover:bg-gray-50"
        >
          <img
            alt=""
            src="https://images.unsplash.com/photo-1600486913747-55e5470d6f40?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
            className="size-10 rounded-full object-cover"
          />

          <div>
            <p className="text-xs">
              <strong className="block font-medium">Eric Frusciante</strong>

              <span> eric@frusciante.com </span>
            </p>
          </div>
        </a>
      </div> */}
    </div>
  );
};

export default MobileMenu;
