import Image from "next/image";
import projects from "@/components/projects/ProjectsList";

const Projects = () => {
  return (
    <div className="projectsMenu">
      <h1>PROJECTS LIST</h1>
      {projects.map((project, index) => {
        const isEven = index % 2 === 0;

        return (
          <div
            key={project.name}
            className={`flex flex-col md:flex-row items-center ${
              isEven ? "md:flex-row" : "md:flex-row-reverse"
            } gap-6`}
          >
            <Image
              src={project.image}
              alt={project.name}
              className="w-[400px] h-[250px] object-contain rounded-xl shadow-md"
            />
            <div className="itemContainer">
              <div className="itemTitle">
                <h3>{project.name}</h3>
                <p className="itemDesc">{project.description}</p>
              </div>
              <div className="itemLinks">
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="itemLink"
                >
                  Live Version
                </a>
                <a
                  href={project.repository}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="itemLink"
                >
                  Repository
                </a>
              </div>
            </div>
          </div>
        );
        // <li key={project.name} className="projectItem">
        //   <Image
        //     className="imageItem object-contain"
        //     src={project.image}
        //     alt="project"
        //   />
        //   <div className="itemContainer">
        //     <div className="itemTitle">
        //       <h3>{project.name}</h3>
        //       <p className="itemDesc">{project.description}</p>
        //     </div>
        //     <div className="itemLinks">
        //       <a
        //         href={project.live}
        //         target="_blank"
        //         rel="noopener noreferrer"
        //         className="itemLink"
        //       >
        //         Live Version
        //       </a>
        //       <a
        //         href={project.repository}
        //         target="_blank"
        //         rel="noopener noreferrer"
        //         className="itemLink"
        //       >
        //         Repository
        //       </a>
        //     </div>
        //   </div>
        // </li>
      })}
    </div>
  );
};

export default Projects;
