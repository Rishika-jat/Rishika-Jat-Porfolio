import React, {useState} from 'react'
import Intro from '../component/Intro';
import About from '../component/About';
import Skills from '../component/Skills';
import Projects from '../component/Projects';
import Contact from "../component/Contact";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import ThemeToggle from '../component/ThemeToggle';
import { FaBars } from "react-icons/fa6";
import { LiaTimesCircle } from "react-icons/lia";
import { useSelector } from 'react-redux';
const HomePage = () => {
    
    const changeMode = useSelector((state)=> state.theme.changeMode);
    const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      
      
{/* Navbar */}
      <nav
      className={`sticky top-0 z-50 flex flex-wrap gap-3 items-center justify-between p-5 shadow-md px-20 navbar${
        changeMode ? " bg-gray-900 text-white" : " bg-gray-100 text-black"
      }`}
    >
      {/* Left Section - Theme Toggle */}
      <div className="flex items-center justify-between w-full md:w-auto">
        <ThemeToggle />
        <button
          className={`text-2xl bg-transparent  border-none md:hidden focus:outline-none ${changeMode?'text-white':'text-black'}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
        {menuOpen?<LiaTimesCircle/>:<FaBars/>}
        </button>
      </div>

      {/* Center Section - Menu Links */}
      <div
        className={`${
          menuOpen ? "block" : "hidden"
        } w-full md:w-auto md:flex justify-center`}
      >
        <ul className="flex flex-col md:flex-row items-center list-none gap-5 text-lg">
          <a
            href="#intro-container"
            className={`no-underline ${
              changeMode ? "hover:text-gray-300 text-white" : "hover:text-gray-600 text-black"
            }`}
          >
            <li className="hover:underline">Home</li>
          </a>
          <a
            href="#about-container"
            className={`no-underline  ${
              changeMode ? "hover:text-gray-300 text-white" : "hover:text-gray-600 text-black"
            }`}
          >
            <li className="hover:underline">About</li>
          </a>
          <a
            href="#skills-container"
            className={`no-underline ${
              changeMode ? "hover:text-gray-300 text-white" : "hover:text-gray-600 text-black"
            }`}
          >
            <li className="hover:underline">Skills</li>
          </a>
          <a
            href="#projects-container"
            className={`no-underline ${
              changeMode ? "hover:text-gray-300 text-white" : "hover:text-gray-600 text-black"
            }`}
          >
            <li className="hover:underline">Projects</li>
          </a>
          <a
            href="#contact-container"
            className={`no-underline ${
              changeMode ? "hover:text-gray-300 text-white" : "hover:text-gray-600 text-black"
            }`}
          >
            <li className="hover:underline">Contact</li>
          </a>
        </ul>
      </div>

      {/* Right Section - Social Icons */}
      <div className="w-full md:w-auto flex justify-center md:justify-end right-social-icons">
        <ul className="flex items-center gap-5 list-none">
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className={`no-underline ${
              changeMode ? "hover:text-gray-300 text-white" : "hover:text-gray-600 text-black"
            }`}
          >
            <li className="hover:scale-110 transition-transform">
              <FaLinkedin className="text-2xl" />
            </li>
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className={`no-underline ${
              changeMode ? "hover:text-gray-300 text-white" : "hover:text-gray-600 text-black"
            }`}
          >
            <li className="hover:scale-110 transition-transform">
              <FaGithub className="text-2xl" />
            </li>
          </a>
        </ul>
      </div>
    </nav>
    {/* Intro */}
    <div className='flex justify-around items-center py-16 lg:px-30 xl:px-56 md:px-20 sm:px-20 md:flex-wrap lg:flex-nowrap xl:flex-nowrap hero-section ' id='intro-container'>
    <Intro/>
    </div>
    {/* About */}
    <div className='flex justify-center items-center flex-col py-16 lg:px-30 xl:px-56 md:px-20 sm:px-20 md:flex-wrap lg:flex-nowrap xl:flex-nowrap gap-20 about-section-main' id='about-container'>
        <About/>
    </div>
    {/* Skills */}
    <div className="flex justify-around items-center py-32 lg:px-30 xl:px-56 md:px-20 sm:px-20 md:flex-wrap lg:flex-nowrap xl:flex-nowrap hero-section" id="skills-container">
        <Skills/>
    </div>
    {/* Project */}
    <div className="flex justify-around items-center py-14 lg:px-30 xl:px-56 md:px-20 sm:px-20 md:flex-wrap lg:flex-nowrap xl:flex-nowrap hero-section" id="projects-container">
        <Projects/>
    </div>
    {/* Contact */}
    <div className="flex justify-around items-center py-14 lg:px-30 xl:px-56 md:px-20 sm:px-20 md:flex-wrap lg:flex-nowrap xl:flex-nowrap hero-section" id="contact-container">
    <Contact/>
    </div>
    </>
  )
}

export default HomePage
