import React, { useEffect } from "react";
import profilePicture from "../Assets/Images/profile-pic.jpg";
import scrollDown from "../Assets/Icons/scrollDown.png";
import { gsap, TimelineLite, Power3 } from "gsap";

const Hero = () => {
  return (
    <div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className="container mx-auto">
        <div className="flex justify-center">
          <img
            src={profilePicture}
            className="rounded-full h-48"
            alt="profilePicture"
          />
        </div>
        <br />
        <h1 className="flex justify-center text-center border-0 font-bold border-gray-500 2xl:text-3xl xl:text-3xl lg:text-3xl md:text-3xl text-2xl p-2">
          Hello 👋 I'm Pratik a
        </h1>
        <h1 className="text-center font-extrabold text-transparent text-3xl 2xl:text-5xl xl:text-5xl lg:text-4xl md:text-4xl  bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 p-2">
          Fullstack Software Engineer{" "}
        </h1>
        <div className="flex justify-center mt-1">
          <p className=" text-center  border-gray-500 text-xl p-2 w-5/6 2xl:w-4/6 xl:w-4/6 lg:w-4/6 md:w-4/6">
            from India working remote 🏡 having industry experience in building
            and deploying scalable web applications. I specialize in JavaScript
            and have professional experience working with React.js Node.js and
            AWS . I am also very enthusiastic about deep learning and Computer
            vision hence I am also quite comfortable with Python and its
            frameworks like FastAPI and Flask.
          </p>
        </div>
      </div>
      <br />
      <br />
      <br />
      <div className="flex justify-center text-center ">
        <img
          src={scrollDown}
          className="animate-bounce w-10"
          alt="scroll down"
        />
      </div>
    </div>
  );
};

export default Hero;
