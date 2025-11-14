import { useTranslations } from "next-intl";
import ExperienceDescription from "./experienceDescription";
import microverse from "@/img/profile/Microverse_logo.png";
import eest from "@/img/profile/eest_logo.jpg";
import unmdp from "@/img/profile/unmdp_logo.jpg";
import goodsoftwaredev from "@/img/profile/GSD_logo.png";

const Experience = () => {
  const t = useTranslations("Experience");
  return (
    <section className="w-full md:w-4/5" id="experience">
      <div className="p-4 md:p-6 lg:p-16 bg-gray-600/30 dark:bg-black/60 shadow-[0_6px_25px_theme(colors.indigo.600/0.8)] dark:shadow-[0_6px_25px_rgba(59,130,246,0.25)] rounded-2xl">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold underline mb-4 text-center">
          {t("title")}
        </h2>
        <div className="grid lg:grid-cols-2 gap-8 mt-4 lg:mt-8">
          <ExperienceDescription section="Goodsoftwaredev" image={goodsoftwaredev} className="col-span-2" />
          <ExperienceDescription section="microverse" image={microverse} />
          <ExperienceDescription section="university" image={unmdp} />
          <ExperienceDescription section="highschool" image={eest} />
        </div>
      </div>
    </section>
  );
};

export default Experience;
