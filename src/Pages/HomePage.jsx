// import React, { useState } from 'react';
// import Intro from '../component/Intro';
// import About from '../component/About';
// import Skills from '../component/Skills';
// import Projects from '../component/Projects';
// import Contact from "../component/Contact";
// import { FaLinkedin, FaGithub, FaBars } from "react-icons/fa";
// import { LiaTimesCircle } from "react-icons/lia";
// import { useSelector } from 'react-redux';
// import ThemeToggle from '../component/ThemeToggle';
// const HomePage = () => {
//     const changeMode = useSelector((state) => state.theme.changeMode);
//     const [menuOpen, setMenuOpen] = useState(false);

//     return (
//         <>
//             {/* Navbar */}
//             <nav className={`sticky top-0 z-50 flex flex-wrap gap-3 items-center justify-between p-5 shadow-md px-20 ${changeMode ? "bg-gray-900 text-white" : "bg-gray-100 text-black"}`}>
//                 {/* Left Section - Theme Toggle */}
//                 <div className="flex items-center justify-between w-full md:w-auto">
//                     <ThemeToggle />
//                     <button
//                         className={`text-2xl bg-transparent border-none md:hidden focus:outline-none ${changeMode ? 'text-white' : 'text-black'}`}
//                         onClick={() => setMenuOpen(!menuOpen)}
//                     >
//                         {menuOpen ? <LiaTimesCircle /> : <FaBars />}
//                     </button>
//                 </div>

//                 {/* Center Section - Menu Links */}
//                 <div className={`${menuOpen ? "block" : "hidden"} w-full md:w-auto md:flex justify-center`}>
//                     <ul className="flex flex-col md:flex-row items-center list-none gap-10 text-lg">
//                         {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((item) => (
//                             <a
//                                 key={item}
//                                 href={`#${item.toLowerCase()}-container`}
//                                 className={`no-underline ${changeMode ? 'hover:text-gray-300 text-white' : 'hover:text-gray-600 text-black'}`}
//                             >
//                                 <li className="hover:underline">{item}</li>
//                             </a>
//                         ))}
//                     </ul>
//                 </div>

//                 {/* Right Section - Social Icons */}
//                 <div className="w-full md:w-auto flex justify-center md:justify-end right-social-icons">
//                     <ul className="flex items-center gap-5 list-none">
//                         <a
//                             href="https://www.linkedin.com/in/rishika-jat"
//                             target="_blank"
//                             rel="noopener noreferrer"
//                             className={`no-underline ${changeMode ? 'hover:text-gray-300 text-white' : 'hover:text-gray-600 text-black'}`}
//                         >
//                             <li className="hover:scale-110 transition-transform">
//                                 <FaLinkedin className="text-2xl" />
//                             </li>
//                         </a>
//                         <a
//                             href="https://github.com/Rishika-jat"
//                             target="_blank"
//                             rel="noopener noreferrer"
//                             className={`no-underline ${changeMode ? 'hover:text-gray-300 text-white' : 'hover:text-gray-600 text-black'}`}
//                         >
//                             <li className="hover:scale-110 transition-transform">
//                                 <FaGithub className="text-2xl" />
//                             </li>
//                         </a>
//                     </ul>
//                 </div>
//             </nav>

//             {/* Content Sections */}
//             <div className='flex justify-around items-center py-16 lg:px-30 xl:px-56 md:px-20 sm:px-20 md:flex-wrap lg:flex-nowrap xl:flex-nowrap hero-section' id='intro-container'>
//                 <Intro />
//             </div>
//             <div className='flex justify-center items-center flex-col py-16 lg:px-30 xl:px-56 md:px-20 sm:px-20 md:flex-wrap lg:flex-nowrap xl:flex-nowrap gap-20 about-section-main' id='about-container'>
//                 <About />
//             </div>
//             <div className="flex justify-around items-center py-32 lg:px-30 xl:px-56 md:px-20 sm:px-20 md:flex-wrap lg:flex-nowrap xl:flex-nowrap hero-section" id="skills-container">
//                 <Skills />
//             </div>
//             <div className="flex justify-around items-center py-14 lg:px-30 xl:px-56 md:px-20 sm:px-20 md:flex-wrap lg:flex-nowrap xl:flex-nowrap hero-section" id="projects-container">
//                 <Projects />
//             </div>
//             <div className="flex justify-around items-center py-14 lg:px-30 xl:px-56 md:px-20 sm:px-20 md:flex-wrap lg:flex-nowrap xl:flex-nowrap hero-section" id="contact-container">
//                 <Contact />
//             </div>
//         </>
//     );
// }

// export default HomePage;



import React, { useState, useEffect, useRef } from 'react';
import Intro from '../component/Intro';
import About from '../component/About';
import Skills from '../component/Skills';
import Projects from '../component/Projects';
import Contact from "../component/Contact";
import { FaLinkedin, FaGithub, FaBars } from "react-icons/fa";
import { LiaTimesCircle } from "react-icons/lia";
import { useSelector } from 'react-redux';
import ThemeToggle from '../component/ThemeToggle';

const HomePage = () => {
    const changeMode = useSelector((state) => state.theme.changeMode);
    const [menuOpen, setMenuOpen] = useState(false);

    //active style change accordingly scroll & click
    const [activeLink, setActiveLink] = useState('Home');
    const sectionRefs = useRef({
        Home: null,
        About: null,
        Skills: null,
        Projects: null,
        Contact: null,
    });

    const handleScroll = () => {
        const scrollPosition = window.scrollY + window.innerHeight / 2;

        for (const section in sectionRefs.current) {
            const sectionElement = sectionRefs.current[section];
            if (sectionElement) {
                const sectionTop = sectionElement.offsetTop;
                const sectionHeight = sectionElement.offsetHeight;

                if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                    setActiveLink(section);
                    break;
                }
            }
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            {/* Navbar */}
            <nav className={`sticky top-0 z-50 flex flex-wrap gap-3 items-center justify-between p-5 shadow-md px-20 ${changeMode ? "bg-gray-900 text-white" : "bg-gray-100 text-black"}`}>
                {/* Left Section - Theme Toggle */}
                <div className="flex items-center justify-between w-full md:w-auto">
                    <ThemeToggle />
                    <button
                        className={`text-2xl bg-transparent border-none md:hidden focus:outline-none ${changeMode ? 'text-white' : 'text-black'}`}
                        onClick={() => setMenuOpen(!menuOpen)}
                    >
                        {menuOpen ? <LiaTimesCircle /> : <FaBars />}
                    </button>
                </div>

                {/* Center Section - Menu Links */}
                <div className={`${menuOpen ? "block" : "hidden"} w-full md:w-auto md:flex justify-center`}>
                    <ul className="flex flex-col md:flex-row items-center list-none gap-10 text-lg nav-links">
                        {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((item) => (
                            <a
                                key={item}
                                href={`#${item.toLowerCase()}-container`}
                                className={`no-underline ${changeMode ? 'text-white dark' : 'text-black light'} 
                                            ${activeLink === item ? 'active-link' : ''}`} 
                                onClick={() => setActiveLink(item)}
                            >
                                <li >{item}</li>
                            </a>
                        ))}
                    </ul>
                </div>

                {/* Right Section - Social Icons */}
                <div className="w-full md:w-auto flex justify-center md:justify-end right-social-icons">
                    <ul className="flex items-center gap-5 list-none">
                        <a
                            href="https://www.linkedin.com/in/rishika-jat"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`no-underline ${changeMode ? 'hover:text-gray-300 text-white' : 'hover:text-gray-600 text-black'} social-icon`}
                        >
                            <li className="hover:scale-110 transition-transform">
                                <FaLinkedin className="text-2xl" />
                            </li>
                        </a>
                        <a
                            href="https://github.com/Rishika-jat"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`no-underline ${changeMode ? 'hover:text-gray-300 text-white' : 'hover:text-gray-600 text-black'} social-icon`}
                        >
                            <li className="hover:scale-110 transition-transform">
                                <FaGithub className="text-2xl" />
                            </li>
                        </a>
                    </ul>
                </div>
            </nav>

            {/* Content Sections */}
            <div ref={(el) => (sectionRefs.current.Home = el)} className='flex justify-around items-center py-8 lg:px-30 xl:px-56 md:px-20 sm:px-20 md:flex-wrap lg:flex-nowrap xl:flex-nowrap hero-section' id='home-container'>
                <Intro />
            </div>
            <div ref={(el) => (sectionRefs.current.About = el)} className='flex justify-center items-center flex-col py-20 lg:px-30 xl:px-56 md:px-20 sm:px-20 md:flex-wrap lg:flex-nowrap xl:flex-nowrap gap-20 about-section-main' id='about-container'>
                <About />
            </div>
            <div ref={(el) => (sectionRefs.current.Skills = el)} className="flex justify-around items-center py-32 lg:px-30 xl:px-56 md:px-20 sm:px-20 md:flex-wrap lg:flex-nowrap xl:flex-nowrap hero-section" id="skills-container">
                <Skills />
            </div>
            <div ref={(el) => (sectionRefs.current.Projects = el)} className="flex justify-around items-center py-20 lg:px-30 xl:px-56 md:px-20 sm:px-20 md:flex-wrap lg:flex-nowrap xl:flex-nowrap hero-section" id="projects-container">
                <Projects />
            </div>
            <div ref={(el) => (sectionRefs.current.Contact = el)} className="flex justify-around items-center py-18 lg:px-30 xl:px-56 md:px-20 sm:px-20 md:flex-wrap lg:flex-nowrap xl:flex-nowrap hero-section my-16" id="contact-container ">
                <Contact />
            </div>

            <footer className=" shadow-lg pb-8 flex justify-center items-center">
  <p className="text-lg font-semibold">
  Thanks for visiting my portfolio👩‍💻
  </p>
</footer>

        </>
    );
}

export default HomePage;
