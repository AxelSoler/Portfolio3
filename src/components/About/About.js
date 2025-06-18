import HTMLimg from "../../img/symbols/html.svg";
import CSSimg from "../../img/symbols/css.svg";
import JavaScriptimg from "../../img/symbols/javascript.svg";
import reactimg from "../../img/symbols/react.svg";
import Rubyimg from "../../img/symbols/ruby.svg";
import Railsimg from "../../img/symbols/rails.svg";
import Postgresimg from "../../img/symbols/postgresql.svg";
import RSpecimg from "../../img/symbols/RSpec.svg";
import Githubimg from "../../img/symbols/github.svg";
import Gitlabimg from "../../img/symbols/gitlab.svg";
import profilePicture from "@/img/profile/profilepic.jpg";
import Image from "next/image";
import "./About.css";

const About = () => (
  <section
    className="text-center flex flex-col items-center"
    id="about"
  >
    <h1 className="text-3xl">AXEL SOLER</h1>
    <h2 className="text-2xl">Full Stack Developer</h2>
    <div className="flex flex-col items-center lg:w-1/2">
      <Image
        className="rounded-full w-60 border-4 border-[#4294ff]"
        src={profilePicture}
        alt="Axel Soler"
      />
      <div className="h-28 w-full mt-4">
        <div className="marquee">
          <div className="marqueeblock">
            <ul className="ulmarquee">
              <li>
                <Image className="skill" src={HTMLimg} alt="skill logo" />
                HTML
              </li>
              <li>
                <Image className="skill" src={CSSimg} alt="skill logo" />
                CSS
              </li>
              <li>
                <Image className="skill" src={JavaScriptimg} alt="skill logo" />
                JavaScript
              </li>
              <li>
                <Image className="skill" src={reactimg} alt="skill logo" />
                React
              </li>
              <li>
                <Image className="skill" src={Rubyimg} alt="skill logo" />
                Ruby
              </li>
              <li>
                <Image
                  className="skill railsimg"
                  src={Railsimg}
                  alt="skill logo"
                />
                Rails
              </li>
              <li>
                <Image className="skill" src={Postgresimg} alt="skill logo" />
                Postgres
              </li>
              <li>
                <Image className="skill" src={RSpecimg} alt="skill logo" />
                RSpec
              </li>
              <li>
                <Image className="skill" src={Githubimg} alt="skill logo" />
                Github
              </li>
              <li>
                <Image className="skill" src={Gitlabimg} alt="skill logo" />
                Gitlab
              </li>
            </ul>
          </div>
        </div>
        <div className="marquee">
          <div className="marqueeblock marqueeblock2">
            <ul className="ulmarquee">
              <li>
                <Image className="skill" src={HTMLimg} alt="skill logo" />
                HTML
              </li>
              <li>
                <Image className="skill" src={CSSimg} alt="skill logo" />
                CSS
              </li>
              <li>
                <Image className="skill" src={JavaScriptimg} alt="skill logo" />
                JavaScript
              </li>
              <li>
                <Image className="skill" src={reactimg} alt="skill logo" />
                React
              </li>
              <li>
                <Image className="skill" src={Rubyimg} alt="skill logo" />
                Ruby
              </li>
              <li>
                <Image
                  className="skill railsimg"
                  src={Railsimg}
                  alt="skill logo"
                />
                Rails
              </li>
              <li>
                <Image className="skill" src={Postgresimg} alt="skill logo" />
                Postgres
              </li>
              <li>
                <Image className="skill" src={RSpecimg} alt="skill logo" />
                RSpec
              </li>
              <li>
                <Image className="skill" src={Githubimg} alt="skill logo" />
                Github
              </li>
              <li>
                <Image className="skill" src={Gitlabimg} alt="skill logo" />
                Gitlab
              </li>
            </ul>
          </div>
        </div>
      </div>
      <p className="description">
        I’m a Full Stack Developer with a strong focus on Frontend technologies.
        I specialize in building modern, responsive, and high-performance web
        applications using React, Next.js, and Tailwind CSS.
      </p>

      <p className="description">
        I’m passionate about programming, and I thrive in
        collaborative, fully remote environments where I can learn and grow
        alongside teammates from around the world.
      </p>

      {/* <p className="SkillsDescription">
        <Image className="skill" src={JavaScriptimg} alt="JavaScript logo" />
        JavaScript → React
        <Image className="skill" src={reactimg} alt="React logo" />
      </p>
      <p className="SkillsDescription">
        <Image className="skill" src={Rubyimg} alt="Ruby logo" />
        Ruby → Ruby on Rails
        <Image className="skill railsimg" src={Railsimg} alt="Rails logo" />
      </p> */}

      <p className="description">
        I’m patient, collaborative, committed, and always looking to improve. I
        bring a growth mindset and a friendly attitude to every project.
      </p>
      <p className="description">
        I’m fluent in both English and Spanish.
      </p>
      <p className="description">
        Feel free to explore my work in the Projects section. If something
        catches your eye, don’t hesitate to reach out through the Contact
        section.
      </p>
    </div>
  </section>
);

export default About;
