import Project from "./Project";
import useProjects from "@/ProjectsList";
import { useTranslations } from "next-intl";
import "./index.css";
import ExpandedContainer from "../container/ExpandedContainer";

const Professional = () => {
  const t = useTranslations("Professional");
  const projects = useProjects();

  const DescriptionNode = () => (
    <p className="mt-2 text-base leading-relaxed md:text-lg">
      {t.rich("GoodsoftwaredevDescription", {
        span: (chunks) => (
          <span className="font-semibold">{chunks}</span>
        ),
        br: () => <br />,
      })}
    </p>
  );

  return (
    <section
      className="pt-6 md:pt-24 w-full md:w-4/5 mx-auto space-y-2 md:space-y-4"
      id="professional"
    >
      <div className="p-4 md:p-6 lg:p-16 bg-gray-600/30 dark:bg-black/60 shadow-[0_6px_25px_theme(colors.indigo.600/0.8)] dark:shadow-[0_6px_25px_rgba(59,130,246,0.25)] rounded-2xl">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold underline mb-4 text-center">
          {t("title")}
        </h2>
        <div>
          <h3 className="text-xl md:text-2xl font-semibold">
            {t("GoodsoftwaredevRole")}
          </h3>
          <p className="text-sm italic">{t("GoodsoftwaredevDate")}</p>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 lg:gap-6 my-4 lg:my-8 fade-in-up">
            {projects.slice(0, 4).map((project) => (
              <Project project={project} key={project.name} />
            ))}
          </div>
          <ExpandedContainer text={<DescriptionNode />} />
        </div>
      </div>
    </section>
  );
};

export default Professional;
