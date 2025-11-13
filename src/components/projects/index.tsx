import Project from "./Project";
import useProjects from "@/ProjectsList";
import { useTranslations } from "next-intl";

const Projects = () => {
  const projects = useProjects();
  const t = useTranslations("Projects");
  return (
    <section
      className="pt-6 md:pt-24 w-full md:w-4/5 mx-auto space-y-2 md:space-y-4"
      id="professional"
    >
      <div className="p-4 md:p-6 lg:p-12 bg-gray-600/30 dark:bg-black/60 shadow-[0_6px_25px_theme(colors.indigo.600/0.8)] dark:shadow-[0_6px_25px_rgba(59,130,246,0.25)] rounded-2xl">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold underline mb-4 text-center">
          {t("title")}
        </h2>
        <div className="grid md:grid-cols-2 gap-6 mt-8 fade-in-up">
          {projects.slice(0, 4).map((project) => (
            <Project project={project} key={project.name} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
