import { ArrowRightIcon } from "@heroicons/react/24/outline";
import React from "react";

export default function Navbar() {
  return (
    <header className="dark:bg-gray-800 bg-emerald-500 md:sticky top-0 z-10">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <nav className="title-font font-medium dark:text-white text-gray-100 mb-4 md:mb-0">
          <a href="#about" className="ml-3 text-xl">
            Tony Young
          </a>
        </nav>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l dark:md:border-gray-700 md:border-white	flex flex-wrap items-center text-base justify-center text-gray-700 dark:text-gray-400">
          <a href="#projects" className="mr-5 hover:text-white">
            Past Work
          </a>
          <a href="#skills" className="mr-5 hover:text-white">
            Skills
          </a>
        </nav>
        <a
          href="#contact"
          className="inline-flex items-center dark:bg-gray-800 bg-white border-0 py-1 px-3 focus:outline-none dark:hover:bg-gray-700 hover:bg-gray-700 hover:text-white rounded text-base mt-4 md:mt-0"
        >
          Hire Me
          <ArrowRightIcon className="w-4 h-4 ml-1" />
        </a>
      </div>
    </header>
  );
}
