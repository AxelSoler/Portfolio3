"use client";
import { useState } from "react";
import Project from "./Project";
import useProjects from "./ProjectsList";
import { useTranslations } from "next-intl";
import "./index.css";

const Projects = () => {
  const [showProjects, setShowProjects] = useState(false);
  const t = useTranslations("Projects");
  const projects = useProjects();
  return (
    <section
      className="pt-6 md:pt-24 w-full md:w-4/5 mx-auto space-y-2 md:space-y-4"
      id="projects"
    >
      <div className="p-4 md:p-6 bg-gray-600/30 dark:bg-black/60 rounded-2xl">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold underline mb-4 text-center">
          {t("title")}
        </h2>
        <div>
          <h3 className="text-xl md:text-2xl font-semibold">
            {t("GoodsoftwaredevRole")}
          </h3>
          <p className="text-sm italic">{t("GoodsoftwaredevDate")}</p>
          <p className="mt-2 text-base leading-relaxed md:text-lg">
            {t.rich("GoodsoftwaredevDescription", {
              goodsoftwaredev: (chunks) => (
                <span className="font-semibold">{chunks}</span>
              ),
              react: (chunks) => <span className="font-medium">{chunks}</span>,
              tailwind: (chunks) => (
                <span className="font-medium">{chunks}</span>
              ),
              git: (chunks) => <span className="font-medium">{chunks}</span>,
              figma: (chunks) => <span className="font-medium">{chunks}</span>,
              notion: (chunks) => <span className="font-medium">{chunks}</span>,
              postman: (chunks) => (
                <span className="font-medium">{chunks}</span>
              ),
              br: () => <br />,
            })}
          </p>
        </div>
        <div className="flex flex-col items-center w-full">
          {showProjects && (
            <div className="grid md:grid-cols-2 2xl:grid-cols-4 gap-6 mt-8 fade-in-up">
              {projects.slice(0, 4).map((project) => (
                <Project project={project} key={project.name} />
              ))}
            </div>
          )}
          <button
            onClick={() => setShowProjects(!showProjects)}
            className="mt-4 px-6 cursor-pointer w-full md:w-fit py-4 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-medium md:text-lg rounded-3xl shadow-lg transform transition duration-300 hover:scale-105"
          >
            {showProjects ? t("closeProjects") : t("seeProjects")}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
