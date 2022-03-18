import React from "react";
import profilePicture from "../Assets/Images/profile-pic.jpg";
import github from "../Assets/Images/github.png";
import link from "../Assets/Images/link.png";
import medium from "../Assets/Images/medium.png";

interface CardProps {
  title: string;
  description: string;
  githubLink: string;
  websiteLink: string;
  mediumLink: string;
  tag1: string;
  tag2: string;
  tag3: string;
  type: string;
}
const Card: React.FC<CardProps> = ({
  title,
  description,
  githubLink,
  websiteLink,
  mediumLink,
  tag1,
  tag2,
  tag3,
  type,
}) => {
  return (
    <div>
      <div className="max-w-sm  rounded-xl overflow-hidden shadow-lg h-full border">
        {/* <img
          className="w-full"
          src={profilePicture}
          alt="Sunset in the mountains"
        /> */}
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{title}</div>
          <p className="text-gray-700 text-base">{description}</p>
        </div>
        {type === "project" ? (
          <div className="flex px-6 pt-4 pb-2">
            {" "}
            <img
              onClick={() => window.open(`//${githubLink}`, "_blank")}
              className="w-10 cursor-pointer hover:bg-gray-300 transition duration-500 rounded-full p-2"
              src={github}
              alt="github"
            />
            <img
              onClick={() => {
                window.open(`//${websiteLink}`, "_blank");
              }}
              className="w-10 mr-4 cursor-pointer hover:bg-gray-300 transition duration-500 rounded-full p-2"
              src={link}
              alt="link"
            />
          </div>
        ) : (
          <div className="flex px-6 pt-4 pb-2">
            <img
              onClick={() => window.open(`//${mediumLink}`, "_blank")}
              className="w-10 mr-4 cursor-pointer hover:bg-gray-300 transition duration-500 rounded-full p-2"
              src={link}
              alt="github"
            />
          </div>
        )}
        <div className="px-6 pt-4 pb-2">
          <span className="inline-block cursor-pointer bg-purple-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #{tag1}
          </span>
          <span className="inline-block bg-purple-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #{tag2}
          </span>
          <span className="inline-block bg-purple-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #{tag3}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Card;
