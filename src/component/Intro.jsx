import React , {useEffect, useState} from 'react'
import { FaLinkedinIn,FaGithub  } from "react-icons/fa";
import { SiNetlify } from "react-icons/si";
import { useDispatch,useSelector } from 'react-redux';
const Intro = () => {
  const dispatch = useDispatch(); 
    const changeMode = useSelector((state) => state.theme.changeMode);
  
  
  
  const downloadCV = () =>{
    const link = document.createElement('a');
    link.href = '/Rishika_Jat_Resume.pdf';
    link.download = "Rishika_Jat_Resume.pdf"
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  return (
  
    <>
   
    <div className='flex justify-around items-center py-16 lg:px-30 xl:px-56 md:px-20 sm:px-20 md:flex-wrap lg:flex-nowrap xl:flex-nowrap hero-section'>
    
    <div className='flex flex-col gap-4 intro-section'>
      <h1 className={`text-7xl bg-clip-text ${changeMode ? 'text-transparent dark-gradient-text' : 'light-heading'}`}>Hi, I’m Rishika</h1>
      <p className=' text-5xl'>Frontend developer</p>
      <p className=' w-2/3'>"Welcome to my creative corner! I’m Rishika, a passionate Frontend Developer with a knack for crafting stunning and intuitive web experiences. Dive in to discover my journey, projects, and the magic I bring to the digital world."</p>
      <div className='flex gap-3'>
      <div className={`h-12 w-12 flex items-center justify-center rounded-full ${changeMode?'border-gradient  bg-transparent ':'bg-black '}`}><button className='border-0 bg-transparent flex items-center justify-center'><FaLinkedinIn  className='icon text-xl'/></button></div>
      <div className={`h-12 w-12 flex items-center justify-center rounded-full ${changeMode?'border-gradient  bg-transparent ':'bg-black '}`}><button className='border-0 bg-transparent flex items-center justify-center'><FaGithub  className='icon text-xl'/></button></div>
      <div className={`h-12 w-12 flex items-center justify-center  rounded-full ${changeMode?'border-gradient  bg-transparent ':'bg-black'}`}><button className='border-0 bg-transparent flex items-center justify-center'><SiNetlify  className='icon text-2xl'/></button></div>
      <div className={`h-12 w-12 flex items-center justify-center rounded-full ${changeMode?'border-gradient  bg-transparent ':'bg-black '}`}><button className='border-0 bg-transparent flex items-center justify-center'><FaLinkedinIn  className='icon text-xl'/></button></div>
     
     
    </div>
    <div>
      <div className={`${changeMode?'image-container':'light-image-container'}  rounded-3xl text-white`}>
        <button onClick={downloadCV} className='bg-transparent border-none px-3 py-2'>download CV</button>
      </div>
    </div>
    </div>
    <div className='profile-div'>
    <div className={`rounded-full h-28 w-28 relative top-20 ${changeMode?' circle-fill':'light-circle-fill'}`}></div>
      <div className={`border-purple-200 h-80 w-80  flex items-center justify-center rounded-full relative first-circle-fill ${changeMode?'image-container':'light-image-container'}`}>
        <img src="src\assets\Rishik.jpeg" alt="" width={300} height={300} className='circular-border-image rounded-full My-image'/>
      </div>
      <div className={`border-solid rounded-full w-44 h-44 relative bottom-28 left-48  second-circle-border ${changeMode?'border-gradient':'light-border-gradient'}`}></div>
    </div>
    
  </div>
  </>
  )
}

export default Intro
