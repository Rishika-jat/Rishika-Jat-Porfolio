

import React, { useState } from "react";
import { useSelector } from "react-redux";
import {  FaGithub, FaGlobe } from "react-icons/fa";
import { HiArrowNarrowRight,HiArrowNarrowLeft } from "react-icons/hi";
import { FaCss3Alt } from "react-icons/fa6";
import { ProjectsList } from "./ProjectsList";

const Projects = () => {
  const changeMode = useSelector((state) => state.theme.changeMode);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    const newIndex = currentIndex === 0 ? ProjectsList.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const handleNext = () => {
    const newIndex = currentIndex === ProjectsList.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <>
      <div className="flex justify-around items-center py-14 lg:px-30 xl:px-56 md:px-20 sm:px-20 md:flex-wrap lg:flex-nowrap xl:flex-nowrap hero-section">
        <div className="project-section flex flex-col gap-20 items-center justify-center">
          <h1
            className={`text-7xl bg-clip-text ${
              changeMode
                ? "text-transparent dark-gradient-text"
                : "light-heading"
            }`}
          >
            My Projects
          </h1>
          <div className="flex justify-center w-full items-center">
            <button onClick={handlePrev} className={`p-2 bg-transparent ${changeMode?" ":"border-gray-500 border-solid"}`}><HiArrowNarrowLeft className={`${changeMode?'text-white':'text-gray-500'}`}/></button>
            <div className="flex overflow-hidden w-full  transition-transform duration-500 ease-in-out">
              {ProjectsList.slice(currentIndex, currentIndex + 2).map((project, index) => (
                <div
                  key={index}
                  className={`px-1 mx-10 py-7 w-2/4 h-fit flex items-center gap-3 flex-col ${
                    changeMode ? "border-solid border-gradient" : "shadow-2xl"
                  } mb-8`} // Added margin-bottom to create space below
                >
                  <div>
                    <img src={project.photo} width={350} alt={project.name} />
                  </div>
                  <div className="w-5/6 flex flex-col gap-2">
                    <h1
                      className={`text-xl bg-clip-text ${
                        changeMode
                          ? "text-transparent dark-gradient-text"
                          : "light-heading"
                      }`}
                    >
                      {project.name}
                    </h1>
                    <p>{project.description}</p>
                    <div className="flex gap-2 text-3xl ">
                      {project.technologies.map((tech, i) => (
                        <div
                          key={i}
                          className={`h-8 w-8 flex items-center justify-center ${
                            changeMode
                              ? "border-gradient"
                              : "border-gray-300 border-solid"
                          }`}
                        >
                          <tech.icon className="text-2xl" title={tech.label} />
                        </div>
                      ))}
                    </div>
                    <div className="flex justify-around text-3xl mt-5">
                      <div
                        className={`${
                          changeMode
                            ? "image-container"
                            : "light-image-container"
                        } flex items-center justify-center rounded-3xl text-white`}
                      >
                        <a href={project.github} className="no-underline" target="_blank">
                        <button className="bg-transparent border-none px-6 py-2 flex gap-1 items-center justify-center">
                          <span>Git-hub</span> <FaGithub className="text-xl" />
                        </button></a>
                      </div>
                      <div
                        className={`${
                          changeMode
                            ? "image-container"
                            : "light-image-container"
                        } flex items-center justify-center rounded-3xl text-white`}
                      >
                      <a href={project.liveDemo} className="no-underline" target="_blank">
                        <button className="bg-transparent border-none px-4 py-2 flex gap-1 items-center justify-center">
                          <span>Live Demo</span> <FaGlobe className="text-xl" />
                        </button>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <button onClick={handlePrev} className={`p-2 bg-transparent ${changeMode?'':'border-gray-500 border-solid'}`}><HiArrowNarrowRight className={`${changeMode?'text-white':'text-gray-500'}`}/></button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
