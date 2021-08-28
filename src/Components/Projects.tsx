import React from "react";
import scrollDown from "../Assets/Icons/scrollDown.png";
import Card from "./Card";
import github from "../Assets/Images/github.png";
import ProjectCard from "./Card";

const projectData = [
  {
    title: "Productively",
    description:
      "Productively is a productivity app on steroids. Which not only takes care of your productivity but other aspects learning and mental health.",
    githubLink: "github.com/pratik-codes/Productively",
    websiteLink: "productive-ly.netlify.app/",
    mediumLink: "",
    tag1: "react",
    tag2: "NodeJS(nestjs)",
    tag3: "Typescript/MONGODB",
    type: "project",
  },
  {
    title: "Ecommerce-website-MERN",
    description:
      "An Real-time Scalable Ecommerce website made with React / React-Router / Redux / Express.js / Node.js / MongoDB.",
    githubLink: "github.com/pratik-codes/Ecommerce-website-MERN",
    websiteLink: "rajsolutions.herokuapp.com/",
    mediumLink: "",
    tag1: "reactJS",
    tag2: "NodeJS(expressJS)",
    tag3: "MONGODB",
    type: "project",
  },
  {
    title: "Nirvana meditation APP",
    description:
      "Nirvana is a meditation and study app that lets you meditate and study using the awesome quality sound tracks that includes Guided meditations and ambience sounds.",
    githubLink: "github.com/pratik-codes/Nirvana_Meditation_App",
    websiteLink: "nirvana-by-pratik.herokuapp.com/",
    mediumLink: "",
    tag1: "HTML/CSS",
    tag2: "NodeJS(expressJS)",
    tag3: "MONGODB",
    type: "project",
  },
];

const Projects = () => {
  return (
    <>
      <div className="project container mx-auto flex justify-center">
        <div className="2xl:w-4/6 xl:w-4/6 lg:w-5/6 md:w-5/6 w-5/6 ">
          <br />
          <br />
          <br />
          <h1 className=" text-center font-extrabold text-transparent text-5xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 p-2">
            "Projects"
          </h1>
          <br />
          <br />
          <div className="container mx-auto flex justify-center grid 2xl:grid-cols-3 xl:grid-cols-3 l:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4">
            {projectData.map((project) => {
              return (
                <Card
                  title={project.title}
                  description={project.description}
                  githubLink={project.githubLink}
                  websiteLink={project.websiteLink}
                  mediumLink={project.mediumLink}
                  tag1={project.tag1}
                  tag2={project.tag2}
                  tag3={project.tag3}
                  type="project"
                />
              );
            })}
          </div>
          <br />
          <button
            onClick={() => window.open(`//github.com/pratik-codes`, "_blank")}
            className="flex m-2 bg-white bg-gray-200 hover:bg-gray-300 text-black font-bold py-2 px-4  rounded-xl ml-3 transition duration-500 "
          >
            All Projects
            <img
              className="w-6 ml-3 cursor-pointer"
              src={github}
              alt="github"
            />
          </button>
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

export default Projects;
