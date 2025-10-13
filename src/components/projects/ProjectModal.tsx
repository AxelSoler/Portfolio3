import { useState } from "react";
import Image from "next/image";
import type { StaticImageData } from "next/image";
import { ImCross } from "react-icons/im";

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

const ProjectModal = ({
  project,
  closeModal,
}: {
  project: projectProps;
  closeModal: () => void;
}) => {
  const [isLoading, setIsLoading] = useState(true);
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-20 flex items-center justify-center">
      <div className="relative bg-gradient-to-r from-slate-200 via-slate-100 to-slate-200 dark:from-[#0a0a0a] dark:via-[#004aad] dark:to-[#0a0a0a] rounded-2xl shadow-2xl w-5/6 max-w-4xl p-6 md:p-10">
        <button
          onClick={closeModal}
          className="absolute top-4 right-4 bg-[rgba(255,255,255,0.4)] dark:bg-[rgba(17,17,17,0.4)] rounded-full p-2 hover:scale-110 transition cursor-pointer"
        >
          <ImCross className="text-xl" />
        </button>
        <div className="flex flex-col items-center gap-4">
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

          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold underline text-center">
            {project.name}
          </h2>

          <p className="md:text-lg overflow-y-auto max-h-48">
            {project.longDescription
              ? project.longDescription
              : project.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
