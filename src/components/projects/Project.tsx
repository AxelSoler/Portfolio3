import { useEffect, useState } from "react";
import Image from "next/image";
import type { StaticImageData } from "next/image";
import ProjectModal from "./ProjectModal";

type projectProps = {
  name: string;
  description: string;
  longDescription?: string;
  image: StaticImageData;
  live: string;
  repository: string;
  technologies: string[];
  position: string;
  company: string;
};

const Project = ({ project }: { project: projectProps }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [projectModal, setProjectModal] = useState(false);
  useEffect(() => {
    const html = document.documentElement;
    if (projectModal) {
      html.style.overflow = "hidden";
    } else {
      html.style.overflow = "auto";
    }
  }, [projectModal]);
  return (
    <>
      <div
        id={project.name}
        className="bg-gray-600/30 dark:bg-black/60 flex flex-col items-center p-4 md:p-6 lg:p-8 rounded gap-4 cursor-pointer"
        onClick={() => setProjectModal(true)}
      >
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin" />
          </div>
        )}
        <Image
          src={project.image}
          alt={project.name}
          className={`w-[400px] h-[250px] object-cover transition-opacity duration-500 rounded-xl ${
            isLoading ? "opacity-0" : "opacity-100"
          }`}
          onLoad={() => setIsLoading(false)}
        />
        <h3 className="underline font-bold lg:text-xl">{project.name}</h3>
      </div>
      {projectModal && (
        <ProjectModal
          project={project}
          closeModal={() => setProjectModal(false)}
        />
      )}
    </>
  );
};

export default Project;
