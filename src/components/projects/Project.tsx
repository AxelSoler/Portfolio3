import Image from "next/image";
import type { StaticImageData } from "next/image";
import { FaGithub } from "react-icons/fa";
import { HiOutlineExternalLink } from "react-icons/hi";

type projectProps = {
  name: string;
  description: string;
  image: StaticImageData;
  live: string;
  repository: string;
  technologies: string[];
  position: string;
  company: string;
};

const Project = (props: { project: projectProps }) => {
  const { project } = props;
  return (
    <div
      id={project.name}
      className="project text-md md:text-lg gap-2 bg-gray-600/30 dark:bg-black/60"
    >
      <Image className="picture object-contain" src={project.image} alt={project.name} />
      <h3 className="text-xl md:text-3xl">{project.name}</h3>
      <p className="md:text-xl">{project.description}</p>
      <p className="mr-auto mt-auto">Company: {project.company}</p>
      <p className="mr-auto">Role: {project.position}</p>
      <div className="flex gap-2 mr-auto">
        Stack:
        <ul className="flex flex-wrap gap-2 justify-start">
          {project.technologies.map((technology: string) => (
            <li key={technology}>{technology}</li>
          ))}
        </ul>
      </div>
      <div className="flex justify-between items-center w-full">
        {project.live === "private" ? (
          <span className="projectLink cursor-not-allowed opacity-50 flex items-center gap-1">
            Private
            <HiOutlineExternalLink />
          </span>
        ) : (
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="projectLink cursor-pointer flex items-center gap-1"
          >
            Live Site
            <HiOutlineExternalLink />
          </a>
        )}
        {project.repository === "private" ? (
          <span className="projectLink cursor-not-allowed opacity-50 flex items-center gap-1">
            Private
            <FaGithub />
          </span>
        ) : (
          <a
            href={project.repository}
            target="_blank"
            rel="noopener noreferrer"
            className="projectLink cursor-pointer flex items-center gap-1"
          >
            Repository
            <FaGithub />
          </a>
        )}
      </div>
    </div>
  );
};

export default Project;
