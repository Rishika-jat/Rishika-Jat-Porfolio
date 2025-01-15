import React from "react";
import { useSelector } from "react-redux";
import SkillComponent from "./SkillComponent";
const Skills = () => {
  const changeMode = useSelector((state) => state.theme.changeMode);
const imagePaths=[
  '/html-5.png',
  '/CSS-logo.png',
  '/js.png',
  '/react-logo.png',
  '/what-is-bootstrap-removebg-preview.png',
  '/TailwindCSS.png',
  '/mysql-com-icon.avif',
  '/git.png',
  '/github (2).png',
  '/redux-logo.png',
  '/java (2).png',
  '/wordpress.png',

]

  return (
    <>
     
        <div className="skill-section flex flex-col gap-20 items-center justify-center">
          <h1
            className={`text-7xl bg-clip-text ${
              changeMode
                ? "text-transparent dark-gradient-text"
                : "light-heading"
            }`}
          >
            My Skills
          </h1>
          <div className="flex gap-10 flex-wrap w-4/5 items-center justify-center">
          {imagePaths.map((src, index) => ( <SkillComponent key={index} image={src} />))}
          </div>
        </div>
    
    </>
  );
};

export default Skills;
