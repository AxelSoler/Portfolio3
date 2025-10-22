import Image from "next/image";
import type { StaticImageData } from "next/image";
import Link from "next/link";

type projectProps = {
  name: string;
  nameKey: string;
  description: string;
  longDescription?: string;
  image: StaticImageData;
  live: string;
  repository: string;
  technologies: string[];
  position: string;
  company: string;
};

const Project = ({ project }: { project: projectProps }) => {
  return (
    <Link href={`#${project.name}`}>
      <div className="bg-gray-600/30 dark:bg-black/60 border border-violet-600 dark:border-white/10 flex flex-col items-center p-4 md:p-6 lg:p-8 rounded-xl gap-4 cursor-pointer w-full h-full transition-transform hover:scale-[1.02] hover:shadow-xl duration-300">
        <Image
          src={project.image}
          alt={project.name}
          className={`w-[200px] h-[120px] 2xl:w-[400px] 2xl:h-[250px] object-cover transition-opacity duration-500 rounded-xl`}
        />
        <h3 className="underline font-bold text-xl">{project.nameKey}</h3>
      </div>
    </Link>
  );
};

export default Project;
