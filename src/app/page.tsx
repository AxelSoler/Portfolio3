import About from "../components/about";
import SocialLinks from "../components/SocialLinks/SocialLinks";

export default function Home() {
  return (
    <div className="min-h-screen p-8">
      <About />
      <SocialLinks />
    </div>
  );
}
