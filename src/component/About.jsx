import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { IoPersonCircleOutline } from "react-icons/io5";
import { AiOutlineRead } from "react-icons/ai";
import { IoRibbonOutline } from "react-icons/io5";

const About = () => {
  const initialContent = "Hello! I'm Rishika Jat, a passionate frontend developer with expertise in HTML, CSS, JavaScript, and React. I've completed approximately 20 projects, each showcasing my skills in creating beautiful and functional web experiences.";
  const changeMode = useSelector((state) => state.theme.changeMode);
  const [content, setContent] = useState(initialContent);
  const [activeButton, setActiveButton] = useState('aboutMe');

  const handleAboutMe = () => {
    setContent(initialContent);
    setActiveButton('aboutMe');
  };

  const handleEducation = () => {
    setContent("I am currently a second-year BCA student at Sant Singaji Institute. My academic journey has been enriching and has provided me with a strong foundation in computer applications and programming.");
    setActiveButton('education');
  };

  const handleExperience = () => {
    setContent("I done one-month internship as a Web Developer at Singaji Software Solution, I gained experience in workplace dynamics,including teamwork and client interactions. I created and maintained responsive web applications using HTML, CSS and Wordpress.");
    setActiveButton('experience');
  };

  const getActiveClassName = (buttonName) => {
    if (activeButton === buttonName) {
      return changeMode ? 'dark-active-button' : 'light-active-button';
    }
    return '';
  };

  return (
    <>
      
        <div className='flex justify-center items-center flex-col'>
          <h1 className={`text-7xl bg-clip-text ${changeMode ? 'text-transparent dark-gradient-text' : 'light-heading'}`}>About Me</h1>
          <p className='text-xl'>My Introduction</p>
        </div>
        <div className='flex gap-20 About-section'>
          <div className={`border-purple-200 w-52 h-72 flex items-center justify-center rounded-xl relative first-circle-fill ${changeMode ? 'image-container' : 'light-image-container'}`}>
            <img src="src\assets\My2.jpg" alt="" width={190} className='rounded-xl ml-2 py-1' />
          </div>
          <div className='flex flex-col gap-8 about-content'>
            <div className='flex gap-10 about-btn'>
              <button onClick={handleAboutMe} className={`flex flex-col w-28 gap-1 items-center justify-center rounded-xl px-5 py-3 ${changeMode ? 'border-gradient text-white bg-transparent' : 'bg-white text-black border-solid border-gray-400'} ${getActiveClassName('aboutMe')}`}>
                <IoPersonCircleOutline className='text-xl' /><span>About Me</span>
              </button>
              <button onClick={handleEducation} className={`flex flex-col w-28 gap-1 items-center justify-center rounded-xl px-5 py-3 ${changeMode ? 'border-gradient bg-transparent text-white' : 'bg-white text-black border-solid border-gray-400'} ${getActiveClassName('education')}`}>
                <AiOutlineRead className='text-xl' /><span>Education</span>
              </button>
              <button onClick={handleExperience} className={`flex flex-col w-28 gap-1 items-center justify-center rounded-xl px-5 py-3 ${changeMode ? 'border-gradient text-white bg-transparent' : 'bg-white text-black border-solid border-gray-400'} ${getActiveClassName('experience')}`}>
                <IoRibbonOutline className='text-xl' /><span>Experience</span>
              </button>
            </div>
            <div>
              <p className='w-96 about-para'>{content}</p>
            </div>
            <div className={`${changeMode ? 'image-container' : 'light-image-container'} w-fit rounded-3xl text-white`}>
              <button className='bg-transparent border-none px-3 py-2'>Contact Me</button>
            </div>
          </div>
        </div>
      
    </>
  );
};

export default About;
