import profilePicture from "@/img/profile/profilepic.jpg";
import Image from "next/image";
import { RiNextjsFill, RiTailwindCssFill, RiNodejsLine } from "react-icons/ri";
import { SiRubyonrails, SiRubygems, SiCplusplus, SiRedux, SiJest, SiMongodb, SiMysql, SiDocker, SiFigma, SiPostman } from "react-icons/si";
import { DiRuby } from "react-icons/di";
import { BiLogoTypescript, BiLogoPostgresql } from "react-icons/bi";
import {
  FaGithubSquare,
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaGitlab
} from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import "./index.css";
import Link from "next/link";

const About = () => (
  <section className="text-center flex flex-col items-center md:mt-16" id="about">
    <div className="flex items-center justify-evenly w-full md:w-4/5 text-left rounded-2xl p-4 bg-gray-500/30 dark:bg-black/60">
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
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2 text-left text-base md:text-lg ">
        <div className="space-y-4 bg-gray-500/30 dark:bg-black/60 p-4 rounded-2xl">
          <h3 className="text-lg md:text-2xl font-bold border-b border-black dark:border-white">About Me</h3>
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
            I’m detail-oriented, open to feedback, and always learning. My
            mindset is: keep improving, stay humble, and build great things
            together.
          </p>
          <p>
            Fluent in English and Spanish, I can adapt and communicate easily
            with international teams.
          </p>
          <p>
            Take a look at my <Link href="#projects" className="underline text-blue-700 dark:text-green-300">projects</Link>. if anything stands out, feel free
            to <Link href="#contact" className="underline text-blue-700 dark:text-green-300">reach out</Link>, I’d love to connect!
          </p>
        </div>
        <div className="bg-gray-500/30 dark:bg-black/60 p-4 rounded-2xl">
          <h3 className="text-left text-lg md:text-2xl font-bold border-b border-black dark:border-white">Core Stack</h3>
          <div className="flex flex-wrap justify-between my-2 items-center">
            <h4 className="font-bold">Frontend:</h4>
            <div className="skill">
              <IoLogoJavascript color="yellow" size="52px" />
              JavaScript
            </div>
            <div className="skill">
              <FaReact color="#00BFFF" size="52px" />
              React
            </div>
            <div className="skill">
              <RiNextjsFill color="black" size="52px" />
              Next.js
            </div>
            <div className="skill">
              <RiTailwindCssFill color="#004aad" size="52px" />
              TailwindCSS
            </div>
            <div className="skill">
              <FaHtml5 color="#FF6B00" size="52px" />
              HTML
            </div>
            <div className="skill">
              <FaCss3Alt color="#00BFFF" size="52px" />
              CSS
            </div>
            <div className="skill">
              <BiLogoTypescript color="blue" size="52px" />
              TypeScript
            </div>
            <div className="skill">
              <SiRedux color="#8F00FF" size="52px" />
              Redux
            </div>
          </div>

          <div className="flex flex-wrap justify-between my-2 items-center">
            <h4 className="font-bold">Backend:</h4>
            <div className="skill">
              <RiNodejsLine color="green" size="52px" />
              Node.js
            </div>
            <div className="skill">
              <DiRuby color="red" size="52px" />
              Ruby
            </div>
            <div className="skill">
              <SiRubyonrails color="red" size="52px" />
              Ruby on Rails
            </div>
          </div>

          <div className="flex flex-wrap justify-between my-2 items-center">
            <h4 className="font-bold">Databases:</h4>
            <div className="skill">
              <SiMongodb color="green" size="52px" />
              MongoDB
            </div>
            <div className="skill">
              <SiMysql  color="#00758F" size="56px" />
              MySQL
            </div>
            <div className="skill">
              <BiLogoPostgresql color="#1E3A8A" size="52px" />
              PostgreSQL
            </div>
          </div>

          <div className="flex flex-wrap justify-between my-2 items-center">
            <h4 className="font-bold">Testing/DevOps:</h4>
            <div className="skill">
              <FaGithubSquare color="black" size="52px" />
              GitHub
            </div>
            <div className="skill">
              <FaGitlab color="#FF6B00" size="52px" />
              Gitlab
            </div>
            <div className="skill">
              <SiJest color="orange" size="52px" />
              Jest
            </div>
            <div className="skill">
              <SiRubygems color="red" size="52px" />
              RSpec
            </div>
          </div>

          <div className="flex flex-wrap justify-between my-2 items-center">
            <h4 className="font-bold">Others:</h4>
            <div className="skill">
              <SiDocker color="#00BFFF" size="52px" />
              Docker
            </div>
            <div className="skill">
              <SiFigma color="black" size="52px" />
              Figma
            </div>
            <div className="skill">
              <SiPostman color="orange" size="52px" />
              Postman
            </div>
            <div className="skill">
              <SiCplusplus color="#00BFFF" size="52px" />
              C#
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default About;
