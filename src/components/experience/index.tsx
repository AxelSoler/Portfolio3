import { useTranslations } from "next-intl";
import FlipCard from "@/components/flipCard";
import microverse from "@/img/profile/Microverse_logo.png";
import eest from "@/img/profile/eest_logo.jpg";
import unmdp from "@/img/profile/unmdp_logo.jpg";
import goodsoftwaredev from "@/img/profile/GSD_logo.png";
import alura from "@/img/profile/alura_logo.jpg";

const Experience = () => {
  const t = useTranslations("Experience");
  return (
    <section className="w-full md:w-4/5">
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold underline mb-4 text-center">
        {t("title")}
      </h2>
      <div className="grid lg:grid-cols-2 gap-8 mt-4 lg:mt-8">
        <FlipCard section="Goodsoftwaredev" image={goodsoftwaredev} />
        <FlipCard section="alura" image={alura} />
        <FlipCard section="microverse" image={microverse} />
        <FlipCard section="university" image={unmdp} />
        <FlipCard section="highschool" image={eest} />
      </div>
    </section>
  );
};

export default Experience;
