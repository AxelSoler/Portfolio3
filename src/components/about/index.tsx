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
import "./index.css";

const About = () => (
  <section className="text-center flex flex-col items-center" id="about">
    <h1 className="text-4xl font-bold">AXEL SOLER</h1>
    <h2 className="text-3xl font-bold">Full Stack Developer</h2>
    <div className="flex flex-col items-center lg:w-4/5">
      <Image
        className="rounded-full w-60 border-4 border-[#4294ff]"
        src={profilePicture}
        alt="Axel Soler"
      />
      {/* <div className="h-28 w-full mt-4">
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
      </div> */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
        <div className="text-center md:text-left text-lg md:text-xl space-y-4">
          <h3 className="text-2xl font-bold">About My self</h3>
          <p>
            I’m a Full Stack Developer with a strong focus on Frontend
            technologies. I specialize in building modern, responsive, and
            high-performance web applications using React, Next.js, and Tailwind
            CSS.
          </p>

          <p>
            I’m passionate about programming, and I thrive in collaborative,
            fully remote environments where I can learn and grow alongside
            teammates from around the world.
          </p>

          <p>
            I’m patient, collaborative, committed, and always looking to
            improve. I bring a growth mindset and a friendly attitude to every
            project.
          </p>
          <p>I’m fluent in both English and Spanish.</p>
          <p>
            Feel free to explore my work in the Projects section. If something
            catches your eye, don’t hesitate to reach out through the Contact
            section.
          </p>
        </div>
        <div className="text-lg md:text-xl">
          <h3 className="text-2xl font-bold">Main Technologies</h3>
          <div className="flex flex-wrap justify-between my-4">
            <div className="skill">
              <Image className="w-12" src={JavaScriptimg} alt=" logo" />
              JavaScript
            </div>
            <div className="skill">
              <Image className="w-12" src={reactimg} alt=" logo" />
              React
            </div>
            <div className="skill">
              <Image className="w-12" src={reactimg} alt=" logo" />
              Next.js
            </div>
            <div className="skill">
              <Image className="w-12" src={reactimg} alt=" logo" />
              TailwindCSS
            </div>
            <div className="skill">
              <Image className="w-12" src={HTMLimg} alt=" logo" />
              HTML
            </div>
            <div className="skill">
              <Image className="w-12" src={CSSimg} alt=" logo" />
              CSS
            </div>
            <div className="skill">
              <Image className="w-12" src={Githubimg} alt=" logo" />
              Github
            </div>
          </div>

          <h3 className="text-2xl font-bold">Secondary Technologies</h3>
          <div className="flex flex-wrap justify-between my-4">
            <div className="skill">
              <Image className="w-12" src={Railsimg} alt="Rails logo" />
              Node.JS
            </div>
            <div className="skill">
              <Image className="w-12" src={Rubyimg} alt="Ruby logo" />
              Ruby
            </div>
            <div className="skill">
              <Image className="w-12" src={Railsimg} alt="Rails logo" />
              Ruby on Rails
            </div>
            <div className="skill">
              <Image className="w-12" src={Postgresimg} alt=" logo" />
              Postgres
            </div>
            <div className="skill">
              <Image className="w-12" src={RSpecimg} alt=" logo" />
              RSpec
            </div>
            <div className="skill">
              <Image className="w-12" src={Gitlabimg} alt="skill logo" />
              Gitlab
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default About;
