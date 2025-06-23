"use client";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import projects from "./ProjectsList";
import Project from "./Project";
import "./index.css";
import Link from "next/link";

const Projects = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1392 },
      items: 3
    },
    laptop: {
      breakpoint: { max: 1392, min: 768 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 768, min: 0 },
      items: 1
    }
  };
  return (
    <section className="pt-6 w-full md:w-4/5 mx-auto " id="projects">
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold underline md:mt-16 mb-10 text-center">
        Latest Creations
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
        {projects.slice(0, 5).map((project) => (
          <Project key={project.name} project={project} />
        ))}
      </Carousel>
      <div className="w-full flex justify-center">
        <Link
          href="/projects"
          className="inline-block mt-8 px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-medium rounded-full shadow-lg hover:scale-105 transform transition duration-300"
        >
          See All Projects
        </Link>
      </div>
    </section>
  );
};

export default Projects;
