import React, { Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Dropdown from "../Components/DropdownButton";

export default function NavBar() {
  return (
    <>
      <div className="Navbar flex justify-center w-full h-18 mt-4 p-2 align-center">
        <div className="NavContainer border flex justify-between 2xl:w-4/6 xl:w-4/6 l:w-4/6 md:w-5/6 sm:w-6/6  p-1 rounded-2xl ">
          <div>
            <button className="m-2 bg-white hover:bg-gray-300 text-black font-black py-2 px-4 sm:mr-4 rounded-full ml-3">
              Hello world ^
            </button>
          </div>
          <div className="">
            <button
              onClick={() => window.open(`//github.com/pratik-codes`, "_blank")}
              className="m-2  hover:bg-gray-300 text-black font-bold py-2 px-4 rounded-full"
            >
              Github
            </button>
            <button
              onClick={() =>
                window.open(`//www.linkedin.com/in/pratiktiwari12/`, "_blank")
              }
              className="m-2  hover:bg-gray-300 text-black font-bold py-2 px-4 rounded-full"
            >
              Linkedin
            </button>
            <button
              onClick={() => {
                window.open(`//pratik-codes.medium.com/`, "_blank");
              }}
              className="m-2  hover:bg-gray-300 text-black font-bold py-2 px-4 rounded-full"
            >
              Blogs
            </button>
            <a className="mailto" href="mailto:pratiktiwari1212@gmail.com">
              <button className="m-2 hover:bg-gray-300 text-black font-bold py-2 px-4 rounded-full">
                Mail
              </button>
            </a>
            <button
              onClick={() => {
                window.open(
                  `//drive.google.com/drive/u/2/folders/11fMGlmzgEQm9YisRvrbHsuqzUtcG0xt-`,
                  "_blank"
                );
              }}
              className="m-2  hover:bg-gray-300 text-black font-bold py-2 px-4 rounded-full"
            >
              Resume
            </button>
          </div>
        </div>
      </div>
      <div className="notificationDropDown">
        <Dropdown />
      </div>
    </>
  );
}

function IconOne() {
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="48" height="48" rx="8" fill="#FFEDD5" />
      <path
        d="M24 11L35.2583 17.5V30.5L24 37L12.7417 30.5V17.5L24 11Z"
        stroke="#FB923C"
        strokeWidth="2"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.7417 19.8094V28.1906L24 32.3812L31.2584 28.1906V19.8094L24 15.6188L16.7417 19.8094Z"
        stroke="#FDBA74"
        strokeWidth="2"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20.7417 22.1196V25.882L24 27.7632L27.2584 25.882V22.1196L24 20.2384L20.7417 22.1196Z"
        stroke="#FDBA74"
        strokeWidth="2"
      />
    </svg>
  );
}

function IconTwo() {
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="48" height="48" rx="8" fill="#FFEDD5" />
      <path
        d="M28.0413 20L23.9998 13L19.9585 20M32.0828 27.0001L36.1242 34H28.0415M19.9585 34H11.8755L15.9171 27"
        stroke="#FB923C"
        strokeWidth="2"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18.804 30H29.1963L24.0001 21L18.804 30Z"
        stroke="#FDBA74"
        strokeWidth="2"
      />
    </svg>
  );
}

function IconThree() {
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="48" height="48" rx="8" fill="#FFEDD5" />
      <rect x="13" y="32" width="2" height="4" fill="#FDBA74" />
      <rect x="17" y="28" width="2" height="8" fill="#FDBA74" />
      <rect x="21" y="24" width="2" height="12" fill="#FDBA74" />
      <rect x="25" y="20" width="2" height="16" fill="#FDBA74" />
      <rect x="29" y="16" width="2" height="20" fill="#FB923C" />
      <rect x="33" y="12" width="2" height="24" fill="#FB923C" />
    </svg>
  );
}
