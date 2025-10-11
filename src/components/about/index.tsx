import Image from "next/image";
import logo from "@/img/profile/light_logo.png";
import { useTranslations } from "next-intl";
import AboutSection from "./aboutDescription";
import Skills from "./skills";
import "./index.css";
import Link from "next/link";
import { FaChevronDown } from "react-icons/fa";

const About = () => {
  const t = useTranslations("About");
  return (
    <section
      className="text-center flex flex-col items-center pt-10 md:pt-24"
      id="about"
    >
      <div className="flex items-center justify-evenly w-full md:w-4/5 text-left rounded-2xl p-4 bg-gray-600/30 dark:bg-black/60">
        <div className="relative w-28 h-28 md:w-40 md:h-40">
          <Image src={logo} alt="Axel Soler Logo" fill priority />
        </div>
        <div>
          <h1 className="text-xl md:text-4xl font-bold">AXEL SOLER</h1>
          <h2 className="text-lg md:text-3xl font-bold">{t("developer")}</h2>
          <h2 className="text-lg md:text-3xl">{t("specialist")}</h2>
        </div>
      </div>
      <div className="flex flex-col items-center md:w-4/5">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-4 md:mt-8 text-left text-sm md:text-lg">
          <AboutSection />
          <Skills />
        </div>
        <p className="text-center text-xl lg:text-4xl font-bold border-b border-black dark:border-white mt-4 md:mt-10 lg:mt-18">
          {t("haveIdea")}
          <br className="md:hidden" />
          {t("makeItReal")}
        </p>
        <div className="flex flex-col md:flex-row gap-4 md:gap-8 lg:gap-24 mt-4 md:mt-8 md:justify-center w-full font-bold">
          <Link
            href="#projects"
            className="flex items-center justify-center md:w-[200px] md:text-xl gap-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-xl transition-all duration-300 shadow-md"
          >
            <FaChevronDown className="transition-transform duration-300 mt-1" />
            {t("experienceLink")}
            <FaChevronDown className="transition-transform duration-300 mt-1" />
          </Link>
          <Link
            href="#contact"
            className="flex items-center justify-center md:w-[200px] md:text-xl gap-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-xl transition-all duration-300 shadow-md"
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
