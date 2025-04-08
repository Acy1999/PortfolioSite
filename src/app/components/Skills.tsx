import { CheckBadgeIcon, CpuChipIcon } from "@heroicons/react/24/solid";
import React from "react";
import { skills } from "../data";

export default function Skills() {
  return (
    <section id="skills">
      <div className="container px-5 py-10 mx-auto">
        <div className="text-center mb-20">
          <CpuChipIcon className="w-10 inline-block mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font dark:text-white text-slate-800 mb-4">
            Skills &amp; Technologies
          </h1>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
            Navigating the Digital Landscape with Proficiency and Precision.
            Explore a Diverse Array of Skills Showcased in My Portfolio
          </p>
        </div>
        <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
          {skills.map((skills) => (
            <div key={skills.skill} className="p-2 sm:w-1/2 w-full">
              <div className="dark:bg-gray-800 bg-emerald-500 rounded flex p-4 h-full items-center">
                <CheckBadgeIcon className="dark:text-green-400 text-white w-6 h-6 flex-shrink-0 mr-4" />
                <span className="title-font font-medium text-white">
                  {skills.skill}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
