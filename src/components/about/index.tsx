import { useTranslations } from "next-intl";
import AboutSection from "./aboutDescription";
import Skills from "./skills";
import Link from "next/link";
import { FaChevronDown } from "react-icons/fa";
import "./index.css";
import ProfileCard from "./profileCard";

const About = () => {
  const t = useTranslations("About");
  return (
    <section
      className="text-center flex flex-col items-center pt-10 md:pt-24"
      id="about"
    >
      <ProfileCard />
      <div className="flex flex-col items-center md:w-4/5 mt-4 md:mt-8 lg:mt-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-8 lg:gap-16 text-left text-sm md:text-lg">
          <AboutSection />
          <Skills />
        </div>
        <p className="text-center text-xl lg:text-4xl font-bold border-b border-black dark:border-white mt-4 md:mt-10 lg:mt-18">
          {t("haveIdea")}
          <br className="md:hidden" /> {t("makeItReal")}
        </p>
        <div className="flex flex-col md:flex-row gap-4 md:gap-8 lg:gap-24 mt-4 md:mt-8 md:justify-center w-full font-bold">
          <Link
            href="#projects"
            className="flex items-center justify-center w-3/4 mx-auto md:mx-0 md:w-[200px] md:text-xl gap-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-xl transition-all duration-300 shadow-[0_6px_25px_theme(colors.indigo.600/0.8)] hover:scale-105"
          >
            <FaChevronDown className="transition-transform duration-300 mt-1" />
            {t("experienceLink")}
            <FaChevronDown className="transition-transform duration-300 mt-1" />
          </Link>
          <Link
            href="#contact"
            className="flex items-center justify-center w-3/4 mx-auto md:mx-0 md:w-[200px] md:text-xl gap-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-xl transition-all duration-300 shadow-[0_6px_25px_theme(colors.indigo.600/0.8)] hover:scale-105"
          >
            <FaChevronDown className="transition-transform duration-300 mt-1" />
            {t("contactLink")}
            <FaChevronDown className="transition-transform duration-300 mt-1" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default About;
