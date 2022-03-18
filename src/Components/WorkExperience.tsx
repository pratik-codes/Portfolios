import React from "react";
import scrollDown from "../Assets/Icons/scrollDown.png";
import CustomCollapsibleCard from "./CustomCollapsibleCard/CustomCollapsibleCard";
import CardHeader from "./CustomCollapsibleCard/CustomCollapsibleCard";

const workExpData = [
  {
    title: "Software Engineer",
    company: "Velocity, Bengaluru 📍",
    duration: "Dec 2021 - present",
    description: [
      "Working on React to build scalable applications to serve multiple D2C businesses across India with an amazing user experience while using our applications.",
      "Worked on React, ANT-D (design system), UmiJS(framework like NextJS). ",
    ],
    techStack: ["reactjs", "antd", "umi", "ruby on rails"],
  },
  {
    title: "Fullstack SDE - 1",
    company: "Webknot Technologies, Bengaluru 📍",
    duration: "Jan 2021 - Dec 2021",
    description: [
      "Built Scalable and robust applications with React, Typescript, NodeJS, and Django.",
      "Also worked on AWS and took part in the architectural decision to plan and scale systems.",
      "Also helped in the hiring process for the company and took responsibility as a growth master.",
    ],
    techStack: ["reactjs", "typescirpt", "nodejs(nestjs)", "django", "aws"],
  },
];

const EducationExpData = [
  {
    title: "Bachelor of Computer applications - BCA(science)",
    company: "Pune university, Pune India 📍",
    duration: "2017 - 2020",
    description: [
      "ModernDevs Club leader. Organized competition and hackathons inside college and guided juniors in their dev journey.",
    ],
  },
];

const WorkExperience = () => {
  return (
    <>
      <div className="project container mx-auto flex justify-center">
        <div className="2xl:w-3/6 xl:w-3/6 lg:w-5/6 md:w-5/6 w-5/6 ">
          <br />
          <br />
          <br />
          <br />
          <h1 className=" text-center font-extrabold text-transparent text-5xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 p-2">
            "History"
          </h1>
          <br />
          <br />
          <div className="">
            <h1 className="font-bold text-purple-500">Work History</h1>
          </div>
          {workExpData.map((data, index) => {
            return (
              <CustomCollapsibleCard
                title={data.title}
                company={data.company}
                duration={data.duration}
                description={data.description}
                key={index}
                techStack={data.techStack}
                skillsTech={null}
                skillsTechFamiliar={null}
                type="history"
              />
            );
          })}
          <br></br>
          <br></br>
          <div className="">
            <h1 className="font-bold text-purple-500">Educational History</h1>
          </div>
          {EducationExpData.map((data, index) => {
            return (
              <CustomCollapsibleCard
                title={data.title}
                company={data.company}
                duration={data.duration}
                description={data.description}
                key={index}
                techStack={[]}
                skillsTech={null}
                skillsTechFamiliar={null}
                type="history"
              />
            );
          })}
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
      <br />
      <br />
    </>
  );
};

export default WorkExperience;
