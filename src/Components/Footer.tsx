import React from "react";
import github from "../Assets/Images/github.png";
import medium from "../Assets/Images/medium.png";
import linkedin from "../Assets/Images/linkedin.png";
import mail from "../Assets/Images/mail.png";

const Footer = () => {
  return (
    <div className="w-4/6 mx-auto border-t-2 border-gray-200 px-15 py-10">
      <div>
        <h1 className="m-2 text-gray-800 font-medium py-2 px-4">
          Made with ☕ and ❤️ by Pratik Tiwari
        </h1>
      </div>
      <br />
      <br />
      <div className="flex justify-end ">
        <img
          onClick={() => window.open(`//github.com/pratik-codes`, "_blank")}
          className="w-12 h-12 cursor-pointer hover:bg-gray-300 transition duration-500 rounded-full p-2"
          src={github}
          alt="github"
        />
        <img
          onClick={() =>
            window.open(`//www.linkedin.com/in/pratiktiwari12/`, "_blank")
          }
          className="w-12 h-12 cursor-pointer hover:bg-gray-300 transition duration-500 rounded-full p-2"
          src={linkedin}
          alt="github"
        />
        <a className="mailto" href="mailto:pratiktiwari1212@gmail.com">
          <img
            className="w-12 h-12 cursor-pointer hover:bg-gray-300 transition duration-500 rounded-full p-2"
            src={mail}
            alt="link"
          />
        </a>
        <img
          onClick={() => {
            window.open(`//pratik-codes.medium.com/`, "_blank");
          }}
          className="w-12 h-12 cursor-pointer hover:bg-gray-300 transition duration-500 p-2"
          src={medium}
          alt="link"
        />
      </div>
    </div>
  );
};

export default Footer;
