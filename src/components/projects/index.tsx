"use client";
import Image from "next/image";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { ImCross } from "react-icons/im";
import projects from "./AllProjects";
import Project from "./Project";
import "./index.css";
import { useState } from "react";

const Projects = () => {
  const [showProjectsMenu, setShowProjectsMenu] = useState(false);

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    laptop: {
      breakpoint: { max: 1024, min: 768 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 768, min: 0 },
      items: 1
    }
  };
  return (
    <section className="pt-6 w-full md:w-4/5 mx-auto " id="projects">
      <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold underline mt-20 mb-10 text-center">
        LAST PROJECTS
      </h2>
      <Carousel
        arrows={true}
        responsive={responsive}
        className="carousel-container"
        infinite
        centerMode={false}
        additionalTransfrom={0}
        draggable={false}
        focusOnSelect={false}
        keyBoardControl
        minimumTouchDrag={80}
        renderArrowsWhenDisabled={false}
        rewind={false}
        rewindWithAnimation={false}
        rtl={false}
        slidesToSlide={1}
        swipeable
        transitionDuration={500}
      >
        {projects.map((project) => (
          <Project key={project.name} project={project} />
        ))}
      </Carousel>
      <button
        onClick={() => setShowProjectsMenu(true)}
        onKeyDown={() => setShowProjectsMenu(true)}
        id="ProjectsBtn"
        type="button"
      >
        See All Projects
      </button>
      {showProjectsMenu && (
        <div className="projectsMenu">
          <button
            onClick={() => setShowProjectsMenu(false)}
            onKeyDown={() => setShowProjectsMenu(false)}
            className="removeProjectsBtn"
            type="button"
          >
            <ImCross size="20px" color="#fff" />
          </button>
          <h2>PROJECTS LIST</h2>
          {projects.map((project) => (
            <li key={project.name} className="projectItem">
              <Image className="imageItem" src={project.image} alt="project" />
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
            </li>
          ))}
        </div>
      )}
    </section>
  );
};

export default Projects;
