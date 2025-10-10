import Projects from "@/components/projects";
import About from "../components/about";
import ContactForm from "@/components/contact";
import Navbar from "@/components/navbar";
import Education from "@/components/Education";

export default function Home() {
  return (
    <div className="min-h-screen px-4 md:px-8">
      <Navbar />
      <About />
      <Projects />
      <Education />
      <ContactForm />
    </div>
  );
}
