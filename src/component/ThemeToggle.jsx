import React from 'react'
import {  useDispatch, useSelector } from 'react-redux'
import { toggleTheme } from '../theme/themeSlice';
import { MdLightMode } from "react-icons/md";

const ThemeToggle = () => {

    const dispatch = useDispatch()
    const changeMode = useSelector((state)=> state.theme.changeMode);

  return (
   <button className='bg-transparent border-none' onClick={()=>dispatch(toggleTheme())}>
      <MdLightMode className={`text-xl ${changeMode?'text-white':'text-black'}`}/>
      </button>  
  )
}

export default ThemeToggle
