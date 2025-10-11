import Image from "next/image";
import logo from "@/img/profile/light_logo.png";
import { useTranslations } from "next-intl";
import AboutSection from "./aboutDescription";
import Skills from "./skills";
import "./index.css";

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
      </div>
    </section>
  );
};

export default About;
