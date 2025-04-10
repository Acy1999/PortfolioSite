import { CodeBracketIcon } from "@heroicons/react/24/solid";
import React from "react";
import { projects } from "../data";

export default function Projects() {
  return (
    <section
      id="projects"
      className="text-gray-400 dark:bg-gray-900 bg-white body-font"
    >
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-20">
          <CodeBracketIcon className="mx-auto inline-block w-10 mb-4 dark:text-gray-400 text-gray-700" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 dark:text-white text-gray-800">
            {" "}
            Apps I&apos;ve Built
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base dark:text-gray-400 text-gray-700">
            Here are a list of personal projects i have built in the past.
            Although I cannot list all of my work here, feel free to reach out
            and ask about my current work at Deloitte Consulting for more
            information.
          </p>
        </div>
        <div className="flex flex-wrap -m-4">
          {projects.map((project) => (
            <a
              href={`/projects/${project.slug}`}
              key={project.slug}
              className="sm:w-1/2 w-100 p-4"
            >
              <div className="flex relative">
                <img
                  alt="gallery"
                  className="absolute rounded-lg inset-0 w-full h-full object-cover object-center"
                  src={project.image}
                />
                <div className="px-8 py-10 relative rounded-lg z-10 w-full border-4 dark:border-gray-800 dark:bg-gray-900 border-emerald-500 bg-emerald-500 opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium dark:text-emerald-400 text-white mb-1">
                    {project.subtitle}
                  </h2>
                  <h1 className="title-font text-lg font-medium text-white mb-3">
                    {project.title}
                  </h1>
                  <p className="leading-relaxed dark:text-gray-600 text-gray-200">
                    {project.description}
                  </p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
