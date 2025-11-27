"use client";

import { useState } from "react";
import Image from "next/image";
import type { StaticImageData } from "next/image";
import { BsGithub } from "react-icons/bs";
import { FaExternalLinkAlt } from "react-icons/fa";
import { useTranslations } from "next-intl";

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
    const t = useTranslations("Projects");

  return (
    <article className="bg-gray-600/30 dark:bg-black/60 border-3 border-violet-600 dark:border-white/10 rounded-xl overflow-hidden transition-shadow flex flex-col shadow-[0_6px_25px_theme(colors.indigo.600/0.8)] dark:shadow-[0_6px_25px_theme(colors.indigo.600/0.25)]">
      <div className="relative h-36 lg:h-96 overflow-hidden">
        {isLoading && (
          <div className="flex items-center justify-center">
            <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin" />
          </div>
        )}
        <Image
          src={project.image}
          alt={project.name}
          className={`w-full h-full object-cover hover:scale-110 transition-transform duration-300 ${
            isLoading ? "opacity-0" : "opacity-100"
          }`}
          onLoad={() => setIsLoading(false)}
        />
      </div>
      <div className="p-6 flex flex-col flex-1">
        <h3 className="text-2xl mb-3">{project.name}</h3>
        <p className="mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4 mt-auto">
          {project.technologies.map((tech, techIdx) => (
            <span
              key={techIdx}
              className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex gap-4">
          {project.repository !== "private" && (
            <a
              href={project.repository}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 text-gray-700 dark:text-gray-400 hover:text-blue-600 transition-colors"
            >
              <BsGithub size={20} />
              {t("code")}
            </a>
          )}
          {project.live !== "private" && (
            <a
              href={project.live}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 text-gray-700 dark:text-gray-400 hover:text-blue-600 transition-colors"
            >
              <FaExternalLinkAlt size={20} />
              {t("live")}
            </a>
          )}
        </div>
      </div>
    </article>
  );
};

export default Project;
