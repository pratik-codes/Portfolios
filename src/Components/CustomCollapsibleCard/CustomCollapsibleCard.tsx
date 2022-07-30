import React, { useState } from "react";
import { Fragment, useEffect, useRef } from "react";
import autoAnimate from "@formkit/auto-animate";

import CardDetails from "./CardDetails";

interface Props {
  title: string;
  company: string | null;
  duration: string | null;
  description: Array<string>;
  techStack: Array<string>;
  skillsTech: Array<string> | null;
  skillsTechFamiliar: Array<string> | null;
  type: string;
}

const CustomCollapsibleCard: React.FC<Props> = ({
  title,
  duration,
  company,
  description,
  techStack,
  skillsTech,
  skillsTechFamiliar,
  type,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const parent = useRef(null);

  useEffect(() => {
    parent.current && autoAnimate(parent.current);
    console.log(parent.current);
  }, [parent]);

  return (
    <div ref={parent} className="p-5 my-5 rounded-xl shadow-xl border">
      {" "}
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between items-center cursor-pointer"
      >
        <div className="w-4/6">
          <h1 className="font-bold text-xl text-gray-800">{title}</h1>
          <h1 className="font-bold text-gray-500">{company && company}</h1>
        </div>
        <div className="w-2/6 h-full flex justify-end items-center">
          <h1 className="inline-block align-middle font-bold text-purple-500 ml-2">
            {duration && duration}
          </h1>
          {isOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="ml-3 h-6 w-6 text-gray-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 15l7-7 7 7"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="ml-3 h-6 w-6 text-gray-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          )}
        </div>
      </div>
      {isOpen && (
        <div className="p-5 my-3">
          <CardDetails
            type={type}
            details={description}
            techStack={techStack}
            skillsTech={skillsTech}
            skillsTechFamiliar={skillsTechFamiliar}
          />
        </div>
      )}
    </div>
  );
};

export default CustomCollapsibleCard;
