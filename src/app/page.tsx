import About from "../components/About/About";
import Navbar from "../components/Navbar/Navbar";
import Projects from "../components/Projects/Projects";
import SocialLinks from "../components/SocialLinks/SocialLinks";

export default function Home() {
  return (
    <div className="min-h-screen p-8">
      <Navbar />
      <About />
      <Projects />
      <SocialLinks />
    </div>
  );
}
