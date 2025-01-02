import React from 'react'
import "./index.css"
import { FaLinkedinIn } from "react-icons/fa";

const App = () => {
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
      <div className='flex justify-around items-center py-36 px-56'>
        <div className='flex flex-col gap-4'>
          <h1 className='  text-7xl bg-clip-text text-transparent' >Hi, I'm Rishika</h1>
          <p className=' text-5xl'>Frontend developer</p>
          <p className=' w-2/3'>"Welcome to my creative corner! I’m Rishika, a passionate Frontend Developer with a knack for crafting stunning and intuitive web experiences. Dive in to discover my journey, projects, and the magic I bring to the digital world."</p>
          <div className='flex gap-3'>
          <div className='h-12 w-12 rounded-full border-gradient bg-transparent flex items-center justify-center'><button className='border-0 bg-transparent flex items-center justify-center'><FaLinkedinIn /></button></div>
          <div className='h-12 w-12 rounded-full bg-white flex items-center justify-center'><button>f</button></div>
          <div className='h-12 w-12 rounded-full bg-white flex items-center justify-center'><button>f</button></div>
          <div className='h-12 w-12 rounded-full bg-white flex items-center justify-center'><button>f</button></div>
         
        </div>
        <div>
          <div>
            <button onClick={downloadCV}>download CV</button>
          </div>
        </div>
        </div>
        <div>
          <div className='border-purple-200 rounded-full h-80 w-80 border-gradient flex items-center justify-center '>
            <img src="src\assets\Rishik.jpeg" alt="" width={300} height={300} className='rounded-full'/>
          </div>
        </div>
        
      </div>
    </>
  )
}

export default App
