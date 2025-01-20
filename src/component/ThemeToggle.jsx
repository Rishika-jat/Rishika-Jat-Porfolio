import React from 'react'
import {  useDispatch, useSelector } from 'react-redux'
import { toggleTheme } from '../theme/themeSlice';
import { MdLightMode } from "react-icons/md";

const ThemeToggle = () => {

    const dispatch = useDispatch()
    const changeMode = useSelector((state)=> state.theme.changeMode);

  return (
   <button className='bg-transparent border-none flex items-center justify-center gap-4 font-mono'>
      <MdLightMode className={`text-xl ${changeMode?'text-white':'text-black'}`}  onClick={()=>dispatch(toggleTheme())}/>
      <h1
          className={`text-xl bg-clip-text logo-name  ${
            changeMode ? "text-transparent dark-gradient-text" : "light-heading"
          }`}
        >
         RISHIKA
        </h1>
      </button>  
  )
}

export default ThemeToggle
