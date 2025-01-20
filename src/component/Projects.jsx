// import React, { useState } from "react";
// import { useSelector } from "react-redux";
// import { FaGithub, FaGlobe } from "react-icons/fa";
// import { HiArrowNarrowRight, HiArrowNarrowLeft } from "react-icons/hi";
// import { ProjectsList } from "./ProjectsList";


// const Projects = () => {
//   const changeMode = useSelector((state) => state.theme.changeMode);
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [isAnimating, setIsAnimating] = useState(false);
//   const [direction, setDirection] = useState("");

//   const handlePrev = () => {
//     if (!isAnimating) {
//       setDirection("prev");
//       setIsAnimating(true);
//       const newIndex = currentIndex === 0 ? ProjectsList.length - 1 : currentIndex - 1;
//       setTimeout(() => {
//         setCurrentIndex(newIndex);
//         setIsAnimating(false);
//       }, 250); // match the animation duration
//     }
//   };

//   const handleNext = () => {
//     if (!isAnimating) {
//       setDirection("next");
//       setIsAnimating(true);
//       const newIndex = currentIndex === ProjectsList.length - 1 ? 0 : currentIndex + 1;
//       setTimeout(() => {
//         setCurrentIndex(newIndex);
//         setIsAnimating(false);
//       }, 250); // match the animation duration
//     }
//   };

//   return (
//     <div className="project-section flex flex-col gap-20 items-center justify-center">
//       <h1
//         className={`text-7xl bg-clip-text ${
//           changeMode ? "text-transparent dark-gradient-text" : "light-heading"
//         }`}
//       >
//         My Projects
//       </h1>
//       <div className="flex justify-center w-full items-center projects-container">
//         <button
//           onClick={handlePrev}
//           className={`p-2 bg-transparent ${
//             changeMode ? "" : "border-gray-500 border-solid"
//           }`}
//         >
//           <HiArrowNarrowLeft
//             className={`${changeMode ? "text-white" : "text-gray-500"}`}
//           />
//         </button>
//         <div className="flex overflow-hidden w-full transition-transform duration-500 ease-in-out project-sec">
//           <div
//             className={`px-7 mx-10 py-7 w-full h-fit flex items-center gap-3 A-Project-main ${
//               changeMode ? "border-solid border-gradient" : "shadow-2xl"
//             } mb-8 ${
//               isAnimating
//                 ? direction === "next"
//                   ? "slide-in-right"
//                   : "slide-in-left"
//                 : ""
//             }`}
//           >
//             <div>
//               <img src={ProjectsList[currentIndex].photo} width={400} alt={ProjectsList[currentIndex].name} />
//             </div>
//             <div className="w-5/6 flex flex-col gap-2 project-details">
//               <h1
//                 className={`text-xl bg-clip-text ${
//                   changeMode ? "text-transparent dark-gradient-text" : "light-heading"
//                 }`}
//               >
//                 {ProjectsList[currentIndex].name}
//               </h1>
//               <p>{ProjectsList[currentIndex].description}</p>
//               <div className="flex gap-2 text-3xl ">
//                 {ProjectsList[currentIndex].technologies.map((tech, i) => (
//                   <div
//                     key={i}
//                     className={`h-8 w-8 flex items-center justify-center ${
//                       changeMode ? "border-gradient" : "border-gray-300 border-solid"
//                     }`}
//                   >
//                     <tech.icon className="text-2xl" title={tech.label} />
//                   </div>
//                 ))}
//               </div>
//               <div className="flex justify-around text-3xl mt-5">
//                 <div
//                   className={`${
//                     changeMode ? "image-container" : "light-image-container"
//                   } flex items-center justify-center rounded-3xl text-white`}
//                 >
//                   <a href={ProjectsList[currentIndex].github} className="no-underline" target="_blank">
//                     <button className="bg-transparent border-none px-6 py-2 flex gap-1 items-center justify-center">
//                       <span>Git-hub</span> <FaGithub className="text-xl" />
//                     </button>
//                   </a>
//                 </div>
//                 <div
//                   className={`${
//                     changeMode ? "image-container" : "light-image-container"
//                   } flex items-center justify-center rounded-3xl text-white`}
//                 >
//                   <a href={ProjectsList[currentIndex].liveDemo} className="no-underline" target="_blank">
//                     <button className="bg-transparent border-none px-4 py-2 flex gap-1 items-center justify-center">
//                       <span>Live Demo</span> <FaGlobe className="text-xl" />
//                     </button>
//                   </a>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         <button
//           onClick={handleNext}
//           className={`p-2 bg-transparent ${
//             changeMode ? "" : "border-gray-500 border-solid"
//           }`}
//         >
//           <HiArrowNarrowRight
//             className={`${changeMode ? "text-white" : "text-gray-500"}`}
//           />
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Projects;


import React, { useState } from "react";
import { useSelector } from "react-redux";
import { FaGithub, FaGlobe } from "react-icons/fa";
import { HiArrowNarrowRight, HiArrowNarrowLeft } from "react-icons/hi";
import { ProjectsList } from "./ProjectsList";


const Projects = () => {
  const changeMode = useSelector((state) => state.theme.changeMode);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [direction, setDirection] = useState("");

  const handlePrev = () => {
    if (!isAnimating) {
      setDirection("prev");
      setIsAnimating(true);
      const newIndex = currentIndex === 0 ? ProjectsList.length - 1 : currentIndex - 1;
      setTimeout(() => {
        setCurrentIndex(newIndex);
        setIsAnimating(false);
      }, 500); // match the animation duration
    }
  };

  const handleNext = () => {
    if (!isAnimating) {
      setDirection("next");
      setIsAnimating(true);
      const newIndex = currentIndex === ProjectsList.length - 1 ? 0 : currentIndex + 1;
      setTimeout(() => {
        setCurrentIndex(newIndex);
        setIsAnimating(false);
      }, 500); // match the animation duration
    }
  };

  return (
    <div className="project-section flex flex-col gap-20 items-center justify-center">
      <h1
        className={`text-7xl bg-clip-text ${
          changeMode ? "text-transparent dark-gradient-text" : "light-heading"
        }`}
      >
        My Projects
      </h1>
      <div className="flex justify-center w-full items-center projects-container">
        <button
          onClick={handlePrev}
          className={`p-2 bg-transparent ${
            changeMode ? "" : "border-gray-500 border-solid"
          }`}
        >
          <HiArrowNarrowLeft
            className={`${changeMode ? "text-white" : "text-gray-500"}`}
          />
        </button>
        <div className="flex overflow-hidden w-full transition-transform duration-500 ease-in-out project-sec">
          <div
            className={`px-7 mx-10 py-7 w-full h-fit flex items-center gap-3 A-Project-main ${
              changeMode ? "border-solid border-gradient" : "shadow-2xl"
            } mb-8 ${
              isAnimating
                ? direction === "next"
                  ? "slide-fade-in-right"
                  : "slide-fade-in-left"
                : ""
            } ${
              isAnimating
                ? direction === "next"
                  ? "slide-fade-out-left"
                  : "slide-fade-out-right"
                : ""
            }`}
          >
            <div>
              <img src={ProjectsList[currentIndex].photo} width={400} alt={ProjectsList[currentIndex].name} />
            </div>
            <div className="w-5/6 flex flex-col gap-2 project-details">
              <h1
                className={`text-xl bg-clip-text ${
                  changeMode ? "text-transparent dark-gradient-text" : "light-heading"
                }`}
              >
                {ProjectsList[currentIndex].name}
              </h1>
              <p>{ProjectsList[currentIndex].description}</p>
              <div className="flex gap-2 text-3xl ">
                {ProjectsList[currentIndex].technologies.map((tech, i) => (
                  <div
                    key={i}
                    className={`h-8 w-8 flex items-center justify-center transition-transform duration-300 ease-in-out transform hover:scale-95 hover:border-2 ${
                      changeMode ? "border-gradient" : "border-gray-300 border-solid"
                    }`}
                  >
                    <tech.icon className="text-2xl" title={tech.label} />
                  </div>
                ))}
              </div>
              <div className="flex justify-around text-3xl mt-5 project-det-btn">
                <div
                  className={`${
                    changeMode ? "image-container" : "light-image-container"
                  } flex items-center justify-center rounded-3xl text-white`}
                >
                  <a href={ProjectsList[currentIndex].github} className="no-underline" target="_blank">
                    <button className="bg-transparent border-none px-6 py-2 flex gap-1 items-center justify-center">
                      <span>Git-hub</span> <FaGithub className="text-xl" />
                    </button>
                  </a>
                </div>
                <div
                  className={`${
                    changeMode ? "image-container" : "light-image-container"
                  } flex items-center justify-center rounded-3xl text-white`}
                >
                  <a href={ProjectsList[currentIndex].liveDemo} className="no-underline" target="_blank">
                    <button className="bg-transparent border-none px-4 py-2 flex gap-1 items-center justify-center">
                      <span>Live Demo</span> <FaGlobe className="text-xl" />
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button
          onClick={handleNext}
          className={`p-2 bg-transparent ${
            changeMode ? "" : "border-gray-500 border-solid"
          }`}
        >
          <HiArrowNarrowRight
            className={`${changeMode ? "text-white" : "text-gray-500"}`}
          />
        </button>
      </div>
    </div>
  );
};

export default Projects;
