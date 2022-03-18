import React from "react";
import SkillsDisclosure from "./SkillsDisclouser";
import scrollDown from "../Assets/Icons/scrollDown.png";
import CustomCollapsibleCard from "./CustomCollapsibleCard/CustomCollapsibleCard";

const skillsData = [
  {
    title: "Languages",
    tech: ["typescript", "javascript", "python"],
    familiar: ["go", "c", "c++", "java"],
  },
  {
    title: "Frontend Technologies",
    tech: ["html", "css", "react.js", "antd", "tailwindcss"],
    familiar: ["angular, nextjs, react-native"],
  },
  {
    title: "Backend Technologies",
    tech: [
      "Node.js",
      "express.js",
      "nest.js",
      "flask",
      "fastapi",
      "django",
      "firebase",
    ],
    familiar: ["ruby on rails"],
  },
  {
    title: "Database Technologies",
    tech: ["sql", "mongodb", "postgress", "redis"],
    familiar: ["ruby on rails"],
  },
  {
    title: "Cloud Technologies",
    tech: ["aws"],
    familiar: ["Docker", "kubernetes"],
  },
  {
    title: "Data science Technologies",
    tech: ["python", "numpy", "pandas", "matplotlib", "scikit-learn"],
    familiar: ["computer-vision", "nlp"],
  },
  {
    title: "Other Technologies",
    tech: ["googling", "powerpoint", "git", "github", "jira"],
    familiar: [],
  },
];

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
          <div className="2xl:w-4/6 xl:w-4/6 l:w-4/6 md:w-5/6 sm:w-6/6 mx-auto">
            {skillsData.map((data, index) => {
              return (
                <CustomCollapsibleCard
                  title={data.title}
                  duration={null}
                  company={null}
                  description={[]}
                  techStack={[]}
                  skillsTech={data.tech}
                  skillsTechFamiliar={data.familiar}
                  type="skills"
                />
              );
            })}
          </div>
          {/* <SkillsDisclosure /> */}
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
