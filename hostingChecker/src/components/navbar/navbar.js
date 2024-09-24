"use client";
import { useState } from "react";
import Link from "next/link";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const Navbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div>
      <nav className="bg-black border-gray-400 border-b-2 text-white p-3 flex items-center justify-between relative z-50">
        <div className="flex items-center justify-between w-full">
          {/* Sidebar Toggle Button */}
          <button onClick={toggleSidebar} className="text-white pl-2 md:hidden">
            {sidebarOpen ? (
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="3"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            ) : (
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="gray"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            )}
          </button>

          {/* Logo / Heading */}
          <div className="text-xl md:text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 via-yellow-200 to-cyan-800 md:ml-10 ml-auto mr-auto md:mr-0">
            Hosting Checker
          </div>

          {/* Navbar Links (visible on larger screens) */}
          <ul className="hidden md:flex flex-row space-x-4 items-center md:mr-20">
            <li>
              <Link
                href="/home"
                className="text-xl border border-transparent px-4 py-2 transition-all duration-300 ease-in-out hover:bg-gray-600 hover:border-white-500 hover:rounded-md"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/pricing"
                className="text-xl border border-transparent px-4 py-2 transition-all duration-300 ease-in-out hover:bg-gray-600 hover:border-white-500 hover:rounded-md"
              >
                Pricing
              </Link>
            </li>
            <li>
              <Link
                href="https://www.codeapto.com/contact"
                className="text-xl border border-transparent px-4 py-2 transition-all duration-300 ease-in-out hover:bg-gray-600 hover:border-white-500 hover:rounded-md"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      {/* Sidebar for mobile/tablet */}
      <div
        className={`absolute inset-y-0 left-0 z-40 transition-transform transform ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } md:hidden`}
      >
        <div
          className="w-auto sm:w-80 bg-black h-full shadow-md p-8 border-r-2 border-gray-400"
          onClick={(e) => e.stopPropagation()}
        >
          <ul className="space-y-4 mt-8">
            <li>
              <Link
                href="/home"
                className="text-white px-4 py-2 hover:bg-gray-600 hover:rounded-md"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/pricing"
                className="text-white px-4 py-2 hover:bg-gray-600 hover:rounded-md"
              >
                Pricing
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="text-white px-4 py-2 hover:bg-gray-600 hover:rounded-md"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
