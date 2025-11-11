"use client";

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
  FaAws,
} from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { useTranslations } from "next-intl";
import "./index.css";
import ExpandedContainer from "../container/ExpandedContainer";

export default function Skills() {
  const t = useTranslations("About");

  return (
    <div className="flex flex-col bg-gray-600/30 dark:bg-black/60 shadow-[0_6px_25px_theme(colors.indigo.600/0.8)] dark:shadow-[0_6px_25px_rgba(59,130,246,0.25)] p-4 lg:p-6 rounded-2xl md:min-h-[240px] h-fit">
      <h3 className="text-left text-lg md:text-2xl font-bold border-b border-black dark:border-white mb-4">
        {t("skillsTitle")}
      </h3>
      <div className="flex items-center justify-evenly pb-4 pt-2">
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
          <RiNextjsFill className="text-2xl lg:text-4xl xl:text-5xl text-black dark:text-white" />
          Next.js
        </div>
        <div className="skill">
          <RiNodejsLine
            color="green"
            className="text-2xl lg:text-4xl xl:text-5xl"
          />
          Node.js
        </div>
        <div className="skill">
          <BiLogoTypescript className="text-2xl lg:text-4xl xl:text-5xl text-blue-600 dark:text-blue-400" />
          TypeScript
        </div>
      </div>

      <ExpandedContainer text={<SkillsNode />} />
    </div>
  );
}

const SkillsNode = () => (
  <div className="h-full flex flex-wrap justify-evenly items-center gap-3 lg:gap-6 xl:gap-8 pb-2 text-xs md:text-sm lg:text-lg">
    <div className="skill">
      <FaHtml5 color="#FF6B00" className="text-2xl lg:text-4xl xl:text-5xl" />
      HTML
    </div>
    <div className="skill">
      <FaCss3Alt className="text-2xl lg:text-4xl xl:text-5xl text-[#006385] dark:text-[#00BFFF]" />
      CSS
    </div>
    <div className="skill">
      <SiRedux color="#8F00FF" className="text-2xl lg:text-4xl xl:text-5xl" />
      Redux
    </div>
    <div className="skill">
      <RiTailwindCssFill className="text-2xl lg:text-4xl xl:text-5xl text-[#004aad] dark:text-blue-400" />
      TailwindCSS
    </div>
    <div className="skill">
      <SiAngular className="text-2xl lg:text-4xl xl:text-5xl text-[#DD0031]" />
      Angular
    </div>
    <div className="skill">
      <DiRuby color="red" className="text-2xl lg:text-4xl xl:text-5xl" />
      Ruby
    </div>
    <div className="skill">
      <SiRubyonrails color="red" className="text-2xl lg:text-4xl xl:text-5xl" />
      Rails
    </div>
    <div className="skill">
      <SiMongodb color="green" className="text-2xl lg:text-4xl xl:text-5xl" />
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
    <div className="skill">
      <FaGithubSquare className="text-2xl lg:text-4xl xl:text-5xl text-black dark:text-white" />
      GitHub
    </div>
    <div className="skill">
      <FaGitlab color="#FF6B00" className="text-2xl lg:text-4xl xl:text-5xl" />
      Gitlab
    </div>
    <div className="skill">
      <SiJest color="#FF6B00" className="text-2xl lg:text-4xl xl:text-5xl" />
      Jest
    </div>
    <div className="skill">
      <SiRubygems color="red" className="text-2xl lg:text-4xl xl:text-5xl" />
      RSpec
    </div>
    <div className="skill">
      <SiDocker className="text-2xl lg:text-4xl xl:text-5xl text-[#006385] dark:text-[#00BFFF]" />
      Docker
    </div>
    <div className="skill">
      <SiPostman color="#FF6B00" className="text-2xl lg:text-4xl xl:text-5xl" />
      Postman
    </div>
    <div className="skill">
      <SiFigma className="text-2xl lg:text-4xl xl:text-5xl text-black dark:text-white" />
      Figma
    </div>
    <div className="skill">
      <SiCplusplus className="text-2xl lg:text-4xl xl:text-5xl text-[#006385] dark:text-[#00BFFF]" />
      C#
    </div>
    <div className="skill">
      <FaAws className="text-2xl lg:text-4xl xl:text-5xl text-black dark:text-orange-400" />
      AWS
    </div>
  </div>
);
