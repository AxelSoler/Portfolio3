import { useTranslations } from "next-intl";
import Schooldescription from "./schoolDescription";
import microverse from "../../img/profile/Microverse_logo.png";
import eest from "../../img/profile/eest_logo.jpg";
import unmdp from "../../img/profile/unmdp_logo.jpg";

const Education = () => {
  const t = useTranslations("Education");
  return (
    <section className="pt-6 md:py-24 w-full md:w-4/5 mx-auto" id="education">
      <div className="p-4 md:p-6 lg:p-16 bg-gray-600/30 dark:bg-black/60 shadow-[0_6px_25px_theme(colors.indigo.600/0.8)] dark:shadow-[0_6px_25px_rgba(59,130,246,0.25)] rounded-2xl">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold underline mb-4 text-center">
          {t("title")}
        </h2>
        <Schooldescription section="microverse" image={microverse} />
        <Schooldescription section="university" image={unmdp} />
        <Schooldescription section="highschool" image={eest} />
      </div>
    </section>
  );
};

export default Education;
