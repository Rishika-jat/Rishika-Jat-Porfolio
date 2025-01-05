import React from 'react'
import { useSelector } from 'react-redux';
const SkillComponent = ({image}) => {
    const changeMode = useSelector((state) => state.theme.changeMode);
    const githubpath="/src/assets/github (2).png";
  return (
    
    <div
    className={`h-28 w-28 flex items-center justify-center rounded-lg ${
      changeMode
        ? "border-gradient  bg-transparent "
        : "bg-white border-gray-300 border-solid"
    }`}
  >
 
 {image !== githubpath ? ( <img src={image} alt="" width={80} /> ) : ( <img src={image} alt="" width={80} className={changeMode ? 'bg-transparent' : 'bg-black'} /> )}
  </div>
  )
}

export default SkillComponent
