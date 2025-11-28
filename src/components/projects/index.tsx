import Project from "./Project";
import useProjects from "@/ProjectsList";
import { useTranslations } from "next-intl";

const Projects = () => {
  const projects = useProjects();
  const t = useTranslations("Projects");
  return (
    <section className="w-full md:w-4/5 space-y-2 md:space-y-4">
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold underline mb-4 text-center">
        {t("title")}
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-2 mt-8 fade-in-up">
        {projects.slice(0, 6).map((project) => (
          <Project project={project} key={project.name} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
