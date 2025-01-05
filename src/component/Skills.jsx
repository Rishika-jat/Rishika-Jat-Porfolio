import React from "react";
import { useSelector } from "react-redux";
import SkillComponent from "./SkillComponent";
const Skills = () => {
  const changeMode = useSelector((state) => state.theme.changeMode);
const imagePaths=[
  'src/assets/html-5.png',
  'src/assets/CSS-logo.png',
  'src/assets/js.png',
  'src/assets/react-logo.png',
  'src/assets/what-is-bootstrap-removebg-preview.png',
  'src/assets/TailwindCSS.png',
  'src/assets/mysql-com-icon.avif',
  'src/assets/git.png',
  '/src/assets/github (2).png',
  'src/assets/redux-logo.png',
  'src/assets/java (2).png',
  'src/assets/wordpress.png',

]

  return (
    <>
      <div className="flex justify-around items-center py-32 lg:px-30 xl:px-56 md:px-20 sm:px-20 md:flex-wrap lg:flex-nowrap xl:flex-nowrap hero-section">
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
      </div>
    </>
  );
};

export default Skills;
