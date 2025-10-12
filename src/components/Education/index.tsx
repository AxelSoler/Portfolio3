import { useTranslations } from "next-intl";

const Education = () => {
  const t = useTranslations("Education");
  return (
    <section
      className="pt-6 md:py-16 w-full md:w-4/5 mx-auto"
      id="projects"
    >
      <div className="p-4 md:p-6 lg:p-16 bg-gray-600/30 dark:bg-black/60 rounded-2xl">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold underline mb-4 text-center">
          {t("title")}
        </h2>
        <div>
          <h3 className="text-xl md:text-2xl font-semibold">
            {t("degree")} – Microverse
          </h3>
          <p className="text-sm italic">{t("date")}</p>
          <p className="mt-2 text-base leading-relaxed md:text-lg">
            {t.rich("microverse", {
              br: () => <br />,
            })}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Education;
