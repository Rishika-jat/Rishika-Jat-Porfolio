import React , {useEffect}from 'react'
import "./index.css"
import { FaLinkedinIn,FaGithub  } from "react-icons/fa";
import { SiNetlify } from "react-icons/si";
import Intro from './component/Intro';
import ThemeToggle from './component/ThemeToggle';
import About from './component/About';
import { useDispatch, useSelector } from 'react-redux';
  

const App = () => {
  const dispatch = useDispatch(); 
  const changeMode = useSelector((state) => state.theme.changeMode);
 
  useEffect(()=>{
    document.body.className = changeMode?'dark-mode':'light-mode';
  },[changeMode]);

  return (
    <>
    <ThemeToggle/>
  <Intro/>
 <About/>
    </>
  )
}

export default App
