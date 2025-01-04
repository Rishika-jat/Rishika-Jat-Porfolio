import React from 'react'
import {  useDispatch, useSelector } from 'react-redux'
import { toggleTheme } from '../theme/themeSlice';


const ThemeToggle = () => {

    const dispatch = useDispatch()
    const changeMode = useSelector((state)=> state.theme.changeMode);
  return (
   <button onClick={()=>dispatch(toggleTheme())}>
    {changeMode ?'Switch to Light Mode':'Switch to Dark Mode'}
   </button>
  )
}

export default ThemeToggle
