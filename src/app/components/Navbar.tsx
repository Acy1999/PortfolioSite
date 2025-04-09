"use client";

import { ArrowRightIcon } from "@heroicons/react/24/outline";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import React, { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="dark:bg-gray-800 bg-emerald-500 md:sticky top-0 z-10">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <div className="flex justify-between w-full md:w-auto">
          <nav className="title-font font-medium dark:text-white text-gray-100">
            <a href="/" className="text-xl">
              Tony Young
            </a>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-white focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <XMarkIcon className="h-6 w-6" />
            ) : (
              <Bars3Icon className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile menu */}
        <nav
          className={`md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l dark:md:border-gray-700 md:border-white flex flex-col md:flex-row items-center text-base justify-center text-gray-700 dark:text-gray-400 w-full md:w-auto ${
            isMenuOpen ? "block" : "hidden md:flex"
          }`}
        >
          <a href="/#projects" className="mr-5 hover:text-white py-2 md:py-0">
            Past Work
          </a>
          <a href="/#skills" className="mr-5 hover:text-white py-2 md:py-0">
            Skills
          </a>
          <a
            href="/#contact"
            className="md:hidden inline-flex items-center dark:bg-gray-800 bg-white border-0 py-1 px-3 focus:outline-none dark:hover:bg-gray-700 hover:bg-gray-700 hover:text-white rounded text-base mt-2"
          >
            Work With Me
            <ArrowRightIcon className="w-4 h-4 ml-1" />
          </a>
        </nav>

        <a
          href="/#contact"
          className="hidden md:inline-flex items-center dark:bg-gray-800 bg-white border-0 py-1 px-3 focus:outline-none dark:hover:bg-gray-700 hover:bg-gray-700 hover:text-white rounded text-base mt-4 md:mt-0"
        >
          Work With Me
          <ArrowRightIcon className="w-4 h-4 ml-1" />
        </a>
      </div>
    </header>
  );
}
