import React from "react";
import scrollDown from "../Assets/Icons/scrollDown.png";

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
          <div className="flex justify-between">
            <div className="w-4/6">
              <h1 className="font-bold text-xl text-gray-800">
                Fullstack SDE - 1
              </h1>
              <h1 className="font-bold text-gray-500">
                Webknot Technologies Pvt Ltd. Remote 📍
              </h1>
            </div>
            <div className="w-2/6 h-full">
              <h1 className="inline-block align-middle font-bold text-purple-500 ml-2">
                Jan 2021 - Present
              </h1>
            </div>
          </div>
          <div className="m-5">
            <li>
              Worked Independently on a projects to complete the project from
              scratch in <b>React and Node</b> also contributed to optimizing
              and building a backends in <b>Nodejs</b> and received{" "}
              <a
                className="font-semibold text-purple-600"
                href="//https://drive.google.com/file/u/2/d/13AucgIJ0RkzIlekOkEu-xwLeBMfOyCTw/view?usp=sharing"
              >
                <b>Spot on Award </b>
              </a>
              for exceptional performance on a project called palette.
            </li>
            <li>
              Also worked on the Devops side by deploying on <b>AWS</b> and
              taking part in the{" "}
              <b>architectural decision and Disaster recovery plan</b>
            </li>
            <li>Contributed to debug large and complex code.</li>
            <li>
              Also helped in the hiring process for the company and took
              responsibility as a growth master.
            </li>
          </div>
          <br></br>
          <br></br>
          <div className="">
            <h1 className="font-bold text-purple-500">Educational History</h1>
          </div>
          <div className="flex justify-between">
            <div className="w-4/6">
              <h1 className="font-bold text-xl text-gray-800">
                Bachelor of Computer applications - BCA(science)
              </h1>
              <h1 className="font-bold text-gray-500">
                Pune university, Pune India 📍
              </h1>
            </div>
            <div className="w-2/6 h-full">
              <h1 className="inline-block align-middle font-bold text-purple-500">
                2017 - 2020
              </h1>
            </div>
          </div>
          <div className="m-5">
            <li>
              ModernDevs Club leader. Organized competition and hackathons
              inside college and guided juniors in their dev journey.
            </li>
          </div>
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
