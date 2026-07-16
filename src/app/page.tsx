import About from "@/components/about";
import ContactForm from "@/components/contact";
import Navbar from "@/components/navbar";
import Experience from "@/components/experience";
import Projects from "@/components/projects";
import ContactButton from "@/components/buttons/ContactButton";

export default function Home() {
  return (
    <div className="min-h-screen px-4 md:px-0 pb-8 flex flex-col items-center">
      <Navbar />
      <About />
      <div
        id="experience"
        className="w-64 h-1 bg-gradient-to-r from-transparent via-blue-700 dark:via-blue-400 to-transparent mt-6 mb-4 md:mb-8 lg:mb-10 md:mt-12 lg:mt-16 mx-auto"
      />
      <Experience />
      <div
        id="projects"
        className="w-64 h-1 bg-gradient-to-r from-transparent via-blue-700 dark:via-blue-400 to-transparent mt-6 mb-4 md:mb-8 lg:mb-10 md:mt-12 lg:mt-16 mx-auto"
      />
      <Projects />
      <div
        className="w-64 h-1 bg-gradient-to-r from-transparent via-blue-700 dark:via-blue-400 to-transparent mt-6 mb-4 md:mb-8 lg:mb-10 md:mt-12 lg:mt-16 mx-auto"
      />
      <ContactForm />
      <ContactButton />
    </div>
  );
}
