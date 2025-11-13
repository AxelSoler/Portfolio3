import { useTranslations } from "next-intl";
import AboutSection from "./aboutDescription";
import Skills from "./skills";
import Link from "next/link";
import ProfileCard from "./profileCard";
import { LuBriefcaseBusiness } from "react-icons/lu";
import { CiMail } from "react-icons/ci";
import "./index.css";

const About = () => {
  const t = useTranslations("About");
  return (
    <section
      className="text-center flex flex-col items-center pt-10"
      id="about"
    >
      <ProfileCard />
      <div className="flex flex-col items-center md:w-4/5 mt-4 md:mt-8">
        <p className="text-center text-2xl lg:text-4xl font-bold border-b border-black dark:border-white mb-4">
          {t("haveIdea")}
          <br className="md:hidden" /> {t("makeItReal")}
        </p>
        <p className="md:text-lg lg:text-xl mb-6">{t("description")}</p>
        <div className="flex gap-4 md:gap-8 lg:gap-24 mb-4 md:mb-8 lg:mb-12 md:justify-center w-full font-bold">
          <Link
            href="#professional"
            className="flex items-center justify-center w-full md:w-[200px] md:text-xl gap-2 px-4 py-2 rounded-xl backdrop-blur-md border-2 border-blue-500/40 hover:border-blue-400 hover:shadow-[0_0_15px_#6366f1] transition-all duration-300 hover:scale-105"
          >
            <LuBriefcaseBusiness className="text-xl" />
            {t("experienceLink")}
          </Link>
          <Link
            href="#contact"
            className="flex items-center justify-center w-full md:w-[200px] md:text-xl gap-2 px-4 py-2 text-white rounded-xl transition-all duration-300 hover:scale-105 border-2 border-violet-500 hover:shadow-[0_0_15px_#8b5cf6]"
          >
            <CiMail className="text-3xl" />
            {t("contactLink")}
          </Link>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-8 lg:gap-16 text-left text-sm md:text-lg">
          <AboutSection />
          <Skills />
        </div>
      </div>
    </section>
  );
};

export default About;
