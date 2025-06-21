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
    <div id={project.name} className="project">
      <Image className="picture" src={project.image} alt={project.name} />
      <h3 className="projectName">{project.name}</h3>
      <p className="cardDescription">{project.description}</p>
      <ul className="ulTech">
        {project.technologies.map((technology: string) => (
          <li key={technology}>{technology}</li>
        ))}
      </ul>
      <div className="repoLinks">
        <a
          href={project.live}
          target="_blank"
          rel="noopener noreferrer"
          className="projectLink"
        >
          Live Version
        </a>
        <a
          href={project.repository}
          target="_blank"
          rel="noopener noreferrer"
          className="projectLink"
        >
          See Source
        </a>
      </div>
    </div>
  );
};

export default Project;
