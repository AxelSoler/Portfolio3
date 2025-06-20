import Projects from "@/components/projects";
import About from "../components/about";
import ContactForm from "@/components/contact";

export default function Home() {
  return (
    <div className="min-h-screen p-8">
      <About />
      <Projects />
      <ContactForm />
    </div>
  );
}
