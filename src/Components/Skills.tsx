import React from "react";
import SkillsDisclosure from "./SkillsDisclouser";
import scrollDown from "../Assets/Icons/scrollDown.png";

const Skills = () => {
  return (
    <>
      <div className="skills container mx-auto flex justify-center">
        <div className="w-4/6 ">
          <br />
          <br />
          <br />
          <h1 className="text-center font-extrabold text-transparent text-5xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 p-2">
            "Skills"
          </h1>
          <br />
          <SkillsDisclosure />
        </div>
      </div>
      <br />
      <br />
      <div className="flex justify-center text-center ">
        <img
          src={scrollDown}
          className="animate-bounce w-10"
          alt="scroll down"
        />
      </div>
    </>
  );
};

export default Skills;
