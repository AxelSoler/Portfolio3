import Professional from "@/components/professional";
import About from "@/components/about";
import ContactForm from "@/components/contact";
import Navbar from "@/components/navbar";
import Education from "@/components/education";
import Projects from "@/components/projects";
import ContactButton from "@/components/buttons/ContactButton";

export default function Home() {
  return (
    <div className="min-h-screen px-4 md:px-8 pb-8">
      <Navbar />
      <About />
      <Professional />
      <Projects />
      <Education />
      <ContactForm />
      <ContactButton />
    </div>
  );
}
