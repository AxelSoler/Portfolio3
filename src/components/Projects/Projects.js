'use client';
// import Carousel from 'react-multi-carousel';
// import 'react-multi-carousel/lib/styles.css';
// import { ImCross } from 'react-icons/im';
import projects from './AllProjects';
// import Project from './Project';
import './Projects.css';

const Projects = () => {
  const addProjectsMenu = () => {
    const hamburger = document.querySelector('.hamburger');
    const projectsMenu = document.querySelector('.projectsMenu');
    hamburger.classList.add('inactive');
    projectsMenu.classList.add('active');
    document.body.style.overflow = 'hidden';
  };
  const removeProjectsMenu = () => {
    const hamburger = document.querySelector('.hamburger');
    const projectsMenu = document.querySelector('.projectsMenu');
    hamburger.classList.remove('inactive');
    projectsMenu.classList.remove('active');
    document.body.style.overflow = 'auto';
  };

  // const responsive = {
  //   desktop: {
  //     breakpoint: { max: 3000, min: 1024 },
  //     items: 3,
  //   },
  //   laptop: {
  //     breakpoint: { max: 1024, min: 768 },
  //     items: 2,
  //   },
  //   mobile: {
  //     breakpoint: { max: 768, min: 0 },
  //     items: 1,
  //   },
  // };
  return (
    <section className="work" id="work">
      <h2 className="title">MY PROJECTS</h2>
      {/* <Carousel
        showDots
        arrows={false}
        responsive={responsive}
        className="carousel-container"
        infinite
        centerMode={false}
        autoPlay
        autoPlaySpeed={5000}
        additionalTransfrom={0}
        draggable={false}
        focusOnSelect={false}
        keyBoardControl
        minimumTouchDrag={80}
        pauseOnHover
        renderArrowsWhenDisabled={false}
        rewind={false}
        rewindWithAnimation={false}
        rtl={false}
        shouldResetAutoplay
        slidesToSlide={1}
        swipeable
        transitionDuration={500}
      >
        {projects.map((project) => (
          <Project key={project.name} project={project} />
        ))}
      </Carousel> */}
      <button
        onClick={addProjectsMenu}
        onKeyDown={addProjectsMenu}
        id="ProjectsBtn"
        type="button"
      >
        Projects List
      </button>
      <div className="projectsMenu">
        <button
          onClick={removeProjectsMenu}
          onKeyDown={removeProjectsMenu}
          className="removeProjectsBtn"
          type="button"
        >
          {/* <ImCross size="20px" color="#fff" /> */}
        </button>
        <h2>PROJECTS LIST</h2>
        {projects.map((project) => (
          <li key={project.name} className="projectItem">
            <image className="imageItem" src={project.image} alt="project" />
            <div className="itemContainer">
              <div className="itemTitle">
                <h3>{project.name}</h3>
                <p className="itemDesc">{project.description}</p>
              </div>
              <div className="itemLinks">
                <a href={project.live} target="_blank" rel="noopener noreferrer" className="itemLink">
                  Live Version
                </a>
                <a href={project.repository} target="_blank" rel="noopener noreferrer" className="itemLink">
                  Repository
                </a>
              </div>
            </div>
          </li>
        ))}
      </div>
    </section>
  );
};

export default Projects;
