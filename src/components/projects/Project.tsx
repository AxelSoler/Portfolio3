import Image from "next/image";
import type { StaticImageData } from 'next/image';

type projectProps = {
  name: string;
  description: string;
  image: StaticImageData;
  live: string;
  repository: string;
  technologies: string[];
};

const Project = (props: { project: projectProps }) => {
  const { project } = props;
  return (
    <div id={project.name} className="project bg-gray-600/30 dark:bg-black/60">
      <Image className="picture" src={project.image} alt={project.name} />
      <h3 className="text-xl md:text-3xl">{project.name}</h3>
      <p className="text-lg md:text-xl">{project.description}</p>
      <ul className="flex flex-wrap gap-2 justify-center text-lg md:text-xl">
        {project.technologies.map((technology: string) => (
          <li key={technology}>{technology}</li>
        ))}
      </ul>
      <div className="flex justify-between items-center w-full">
        <a
          href={project.live}
          target="_blank"
          rel="noopener noreferrer"
          className="projectLink"
        >
          See live version
        </a>
        <a
          href={project.repository}
          target="_blank"
          rel="noopener noreferrer"
          className="projectLink"
        >
          See Repository
        </a>
      </div>
    </div>
  );
};

export default Project;
