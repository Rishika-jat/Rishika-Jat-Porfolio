import React from "react";
import { useSelector } from "react-redux";
const SkillComponent = ({ image }) => {
  const changeMode = useSelector((state) => state.theme.changeMode);
  const githubpath = "/github (2).png";
  return (
    <div
      className={`h-28 w-28 flex items-center justify-center rounded-lg transition-transform duration-300 ease-in-out transform hover:scale-110 hover:border-2 ${
        changeMode
          ? "border-gradient  bg-transparent  "
          : "bg-white border-gray-300 border-solid"
      }`}
    >
      {image !== githubpath ? (
        <img src={image} alt="" width={80} />
      ) : (
        <img
          src={image}
          alt=""
          width={80}
          className={changeMode ? "bg-transparent" : "bg-black"}
        />
      )}
    </div>
  );
};

export default SkillComponent;
