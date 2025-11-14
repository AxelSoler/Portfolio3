import Professional from "@/components/professional";
import About from "@/components/about";
import ContactForm from "@/components/contact";
import Navbar from "@/components/navbar";
import Education from "@/components/education";
import Projects from "@/components/projects";
import ContactButton from "@/components/buttons/ContactButton";

export default function Home() {
  return (
    <div className="min-h-screen px-4 md:px-0 pb-8 flex flex-col gap-6 md:gap-12 lg:gap-16 items-center">
      <Navbar />
      <About />
      <Projects />
      <Education />
      <ContactForm />
      <ContactButton />
    </div>
  );
}
