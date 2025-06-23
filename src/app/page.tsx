import Projects from "@/components/projects";
import About from "../components/about";
import ContactForm from "@/components/contact";
import Navbar from "@/components/navbar";

export default function Home() {
  return (
    <div className="min-h-screen p-8">
      <Navbar />
      <About />
      <Projects />
      <ContactForm />
    </div>
  );
}
