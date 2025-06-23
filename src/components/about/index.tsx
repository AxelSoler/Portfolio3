import profilePicture from "@/img/profile/profilepic.jpg";
import Image from "next/image";
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
  SiPostman
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
  FaDownload
} from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import "./index.css";
import Link from "next/link";

const About = () => (
  <section
    className="text-center flex flex-col items-center md:mt-16"
    id="about"
  >
    <div className="flex items-center justify-evenly w-full md:w-4/5 text-left rounded-2xl p-4 bg-gray-600/30 dark:bg-black/60">
      <div>
        <h1 className="text-xl md:text-4xl font-bold">AXEL SOLER</h1>
        <h2 className="text-lg md:text-3xl font-bold">Full Stack Developer</h2>
        <h2 className="text-lg md:text-3xl">React Specialist</h2>
      </div>
      <Image
        className="rounded-full w-28 h-28 md:w-40 md:h-40 border-4 border-[#4294ff]"
        src={profilePicture}
        alt="Axel Soler"
      />
    </div>
    <div className="flex flex-col items-center md:w-4/5">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-2 text-left text-sm md:text-lg">
        <div className="flex flex-col gap-4 bg-gray-600/30 dark:bg-black/60 p-4 rounded-2xl">
          <h3 className="text-lg md:text-2xl font-bold border-b border-black dark:border-white">
            About Me
          </h3>
          <p>
            I’m a Full Stack Developer with a frontend focus, passionate about
            crafting fast, modern, and responsive web apps. I mainly work with
            React, Next.js, and Tailwind CSS, building clean and scalable user
            experiences.
          </p>

          <p>
            I love working in remote, collaborative environments where I can
            grow with others and contribute to something meaningful. I’ve been
            part of agile teams across different time zones and enjoy pairing
            up, sharing knowledge, and iterating fast.
          </p>

          <p>
            I’m detail-oriented, receptive to feedback, and constantly learning.
            I believe in continuous improvement, staying humble, and building
            meaningful things together.
          </p>
          <p>
            Fluent in English and Spanish, I can adapt and communicate easily
            with international teams.
          </p>
          <p>
            Take a look at my{" "}
            <Link
              href="#projects"
              className="underline text-blue-700 dark:text-green-300"
            >
              projects
            </Link>
            . if anything stands out, feel free to{" "}
            <Link
              href="#contact"
              className="underline text-blue-700 dark:text-green-300"
            >
              reach out
            </Link>
            , I’d love to connect!
          </p>
          <div className="flex justify-center items-center gap-4 mt-auto mb-1 md:mb-8">
            <a
              href="/AxelSolerResume.pdf"
              download
              className="px-2 md:px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition flex items-center gap-2"
            >
              Get My Resume
              <FaDownload />
            </a>
            <p>or</p>
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
            Core Stack
          </h3>
          <div className="grid grid-cols-[1fr_3fr] py-4 gap-4 text-xs md:text-sm lg:text-lg">
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
                <RiNextjsFill className="text-2xl lg:text-4xl xl:text-5xl text-black dark:text-white" />
                Next.js
              </div>
              <div className="skill">
                <BiLogoTypescript className="text-2xl lg:text-4xl xl:text-5xl text-blue-600 dark:text-blue-400" />
                TypeScript
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
              <h4 className="font-bold">Databases:</h4>
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
              <h4 className="font-bold">Testing/DevOps:</h4>
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
            </div>
            <div className="flex items-center">
              <h4 className="font-bold">Others:</h4>
            </div>
            <div className="flex flex-wrap justify-start gap-3 lg:gap-6 xl:gap-8">
              <div className="skill">
                <SiDocker className="text-2xl lg:text-4xl xl:text-5xl text-[#006385] dark:text-[#00BFFF]" />
                Docker
              </div>
              <div className="skill">
                <SiFigma className="text-2xl lg:text-4xl xl:text-5xl text-black dark:text-white" />
                Figma
              </div>
              <div className="skill">
                <SiPostman
                  color="#FF6B00"
                  className="text-2xl lg:text-4xl xl:text-5xl"
                />
                Postman
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

export default About;
