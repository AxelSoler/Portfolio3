import Image from "next/image";
import Link from "next/link";
// import profilePicture from "@/img/profile/profilepic.jpg";
import logo from "@/img/profile/logo.png";
import { RiNextjsFill, RiTailwindCssFill, RiNodejsLine } from "react-icons/ri";
import {
  SiRubyonrails,
  SiRubygems,
  SiCplusplus,
  SiRedux,
  SiJest,
  SiMongodb,
  SiMysql,
  SiDocker,
  SiFigma,
  SiPostman,
  SiAngular,
} from "react-icons/si";
import { DiRuby } from "react-icons/di";
import { BiLogoTypescript, BiLogoPostgresql } from "react-icons/bi";
import {
  FaGithubSquare,
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaGitlab,
  FaGoogleDrive,
  FaDownload,
} from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { useTranslations } from "next-intl";
import "./index.css";

const About = () => {
  const t = useTranslations("About");
  return (
    <section
      className="text-center flex flex-col items-center md:pt-24"
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
          <div className="flex flex-col gap-4 bg-gray-600/30 dark:bg-black/60 p-4 rounded-2xl">
            <h3 className="text-lg md:text-2xl font-bold border-b border-black dark:border-white">
              {t("title")}
            </h3>
            <p>{t("description1")}</p>

            <p>{t("description2")}</p>

            <p>{t("description3")}</p>
            <p>{t("description4")}</p>
            <p>
              {t.rich("connect", {
                projectsLink: (chunks) => (
                  <Link
                    href="#projects"
                    className="underline text-blue-700 dark:text-green-300"
                  >
                    {chunks}
                  </Link>
                ),
                contactLink: (chunks) => (
                  <Link
                    href="#contact"
                    className="underline text-blue-700 dark:text-green-300"
                  >
                    {chunks}
                  </Link>
                ),
              })}
            </p>
            <div className="flex justify-center items-center gap-4 mt-auto mb-1 md:mb-8">
              <a
                href="/Axel_Soler_Resume.pdf"
                download
                className="px-2 md:px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition flex items-center gap-2"
              >
                {t("downloadCV")}
                <FaDownload />
              </a>
              <a
                href="https://drive.google.com/file/d/1Ful06pTzhNJO2ErFBoUAmNYZEsEeN1F2/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                className="px-2 md:px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition flex items-center gap-2"
              >
                Google Drive
                <FaGoogleDrive />
              </a>
            </div>
          </div>
          <div className="bg-gray-600/30 dark:bg-black/60 p-4 rounded-2xl grid">
            <h3 className="text-left text-lg md:text-2xl font-bold border-b border-black dark:border-white">
              {t("skillsTitle")}
            </h3>
            <div className="grid grid-cols-[1fr_3fr] py-4 gap-y-4 text-xs md:text-sm lg:text-lg">
              <div className="flex items-center">
                <h4 className="font-bold">Frontend:</h4>
              </div>
              <div className="flex flex-wrap justify-start gap-3 lg:gap-6 xl:gap-8">
                <div className="skill">
                  <IoLogoJavascript
                    color="yellow"
                    className="text-2xl lg:text-4xl xl:text-5xl"
                  />
                  JavaScript
                </div>
                <div className="skill">
                  <FaReact
                    color="#00BFFF"
                    className="text-2xl lg:text-4xl xl:text-5xl text-[#006385] dark:text-[#00BFFF]"
                  />
                  React
                </div>
                <div className="skill">
                  <FaHtml5
                    color="#FF6B00"
                    className="text-2xl lg:text-4xl xl:text-5xl"
                  />
                  HTML
                </div>
                <div className="skill">
                  <FaCss3Alt className="text-2xl lg:text-4xl xl:text-5xl text-[#006385] dark:text-[#00BFFF]" />
                  CSS
                </div>
                <div className="skill">
                  <SiRedux
                    color="#8F00FF"
                    className="text-2xl lg:text-4xl xl:text-5xl"
                  />
                  Redux
                </div>
                <div className="skill">
                  <RiTailwindCssFill className="text-2xl lg:text-4xl xl:text-5xl text-[#004aad] dark:text-blue-400" />
                  TailwindCSS
                </div>
              </div>
              <div className="flex items-center">
                <h4 className="font-bold">Backend:</h4>
              </div>
              <div className="flex flex-wrap justify-start gap-3 lg:gap-6 xl:gap-8">
                <div className="skill">
                  <RiNodejsLine
                    color="green"
                    className="text-2xl lg:text-4xl xl:text-5xl"
                  />
                  Node.js
                </div>
                <div className="skill">
                  <DiRuby
                    color="red"
                    className="text-2xl lg:text-4xl xl:text-5xl"
                  />
                  Ruby
                </div>
                <div className="skill">
                  <SiRubyonrails
                    color="red"
                    className="text-2xl lg:text-4xl xl:text-5xl"
                  />
                  Rails
                </div>
              </div>
              <div className="flex items-center">
                <h4 className="font-bold">{t("skills.Databases")}:</h4>
              </div>
              <div className="flex flex-wrap justify-start gap-3 lg:gap-6 xl:gap-8">
                <div className="skill">
                  <SiMongodb
                    color="green"
                    className="text-2xl lg:text-4xl xl:text-5xl"
                  />
                  MongoDB
                </div>
                <div className="skill">
                  <BiLogoPostgresql className="text-2xl lg:text-4xl xl:text-5xl text-[#1E3A8A] dark:text-blue-400" />
                  PostgreSQL
                </div>
                <div className="skill">
                  <SiMysql className="text-2xl lg:text-4xl xl:text-5xl text-[#005366] dark:text-[#00758F]" />
                  MySQL
                </div>
              </div>
              <div className="flex items-center">
                <h4 className="font-bold">{t("skills.Tools")}:</h4>
              </div>
              <div className="flex flex-wrap justify-start gap-3 lg:gap-6 xl:gap-8">
                <div className="skill">
                  <FaGithubSquare className="text-2xl lg:text-4xl xl:text-5xl text-black dark:text-white" />
                  GitHub
                </div>
                <div className="skill">
                  <FaGitlab
                    color="#FF6B00"
                    className="text-2xl lg:text-4xl xl:text-5xl"
                  />
                  Gitlab
                </div>
                <div className="skill">
                  <SiJest
                    color="#FF6B00"
                    className="text-2xl lg:text-4xl xl:text-5xl"
                  />
                  Jest
                </div>
                <div className="skill">
                  <SiRubygems
                    color="red"
                    className="text-2xl lg:text-4xl xl:text-5xl"
                  />
                  RSpec
                </div>
                <div className="skill">
                  <SiDocker className="text-2xl lg:text-4xl xl:text-5xl text-[#006385] dark:text-[#00BFFF]" />
                  Docker
                </div>
                <div className="skill">
                  <SiPostman
                    color="#FF6B00"
                    className="text-2xl lg:text-4xl xl:text-5xl"
                  />
                  Postman
                </div>
              </div>
              <div className="flex items-center">
                <h4 className="font-bold">{t("skills.Others")}:</h4>
              </div>
              <div className="flex flex-wrap justify-start gap-3 lg:gap-6 xl:gap-8">
                <div className="skill">
                  <RiNextjsFill className="text-2xl lg:text-4xl xl:text-5xl text-black dark:text-white" />
                  Next.js
                </div>
                <div className="skill">
                  <SiAngular className="text-2xl lg:text-4xl xl:text-5xl text-[#DD0031]" />
                  Angular
                </div>
                <div className="skill">
                  <BiLogoTypescript className="text-2xl lg:text-4xl xl:text-5xl text-blue-600 dark:text-blue-400" />
                  TypeScript
                </div>
                <div className="skill">
                  <SiFigma className="text-2xl lg:text-4xl xl:text-5xl text-black dark:text-white" />
                  Figma
                </div>
                <div className="skill">
                  <SiCplusplus className="text-2xl lg:text-4xl xl:text-5xl text-[#006385] dark:text-[#00BFFF]" />
                  C#
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
