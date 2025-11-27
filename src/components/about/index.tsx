import AboutSection from "./aboutDescription";
import Skills from "./skills";
import ProfileCard from "./profileCard";
import "./index.css";

const About = () => {
  return (
    <section
      className="text-center flex flex-col items-center pt-10 w-full md:w-4/5 "
      id="about"
    >
      <ProfileCard />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-8 lg:gap-16 text-left text-sm md:text-lg mt-4 md:mt-8">
        <AboutSection />
        <Skills />
      </div>
    </section>
  );
};

export default About;
