"use client";
import { useState } from "react";
import projects from "./ProjectsList";
import Project from "./Project";
import "./index.css";
import { FiChevronDown } from "react-icons/fi";

const Projects = () => {
  const [visibleCount, setVisibleCount] = useState(2);

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 2);
  };
  return (
    <section
      className="pt-6 w-full md:w-4/5 mx-auto space-y-2 md:space-y-4"
      id="projects"
    >
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold underline md:mt-16 mb-10 text-center">
        Experience
      </h2>
      {projects.slice(0, visibleCount).map((project, index) => {
        const isEven = index % 2 === 0;

        return (
          <div key={project.name} className="fade-in-up">
            <Project project={project} isEven={isEven} />
          </div>
        );
      })}

      <div className="flex justify-center w-full">
        <button
          onClick={handleLoadMore}
          className={`mt-4 px-6 w-full md:w-auto py-4 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-medium md:text-lg rounded-3xl shadow-lg transform transition duration-300 
          ${
            visibleCount >= projects.length
              ? "opacity-50 cursor-not-allowed"
              : "hover:scale-105 cursor-pointer"
          }`}
          disabled={visibleCount >= projects.length}
        >
          <FiChevronDown className="inline mr-2 text-2xl" />
          {visibleCount >= projects.length
            ? "All projects loaded"
            : "Load More Projects"}
          <FiChevronDown className="inline ml-2 text-2xl" />
        </button>
      </div>
    </section>
  );
};

export default Projects;
