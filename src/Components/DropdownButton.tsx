import { Popover, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/solid";
import { Fragment, useEffect, useRef } from "react";

export default function Dropdown() {
  return (
    <div className="flex justify-center w-4/12 mx-auto px-4 mt-2 bg-gray-300 rounded-2xl ">
      <Popover className="relative">
        {({ open }) => (
          <>
            <Popover.Button
              className={`
                ${open ? "" : "text-opacity-90"}
                text-black group bg-orange-700 px-3 py-2  rounded-md inline-flex items-center text-base font-bold hover:text-opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75`}
            >
              <span>Links</span>
              <ChevronDownIcon
                className={`${open ? "" : "text-opacity-70"}
                  ml-2 h-5 w-5 text-orange-300 group-hover:text-opacity-80 transition ease-in-out duration-150`}
                aria-hidden="true"
              />
            </Popover.Button>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute z-10 w-screen max-w-sm px-4 mt-3 transform -translate-x-1/2 left-1/2 sm:px-0 lg:max-w-3xl">
                <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                  <div className="relative grid gap-8 bg-white p-7 sm:grid-cols-1">
                    <div>
                      <button
                        onClick={() =>
                          window.open(`//github.com/pratik-codes`, "_blank")
                        }
                        className="m-2 bg-gray-300 text-black font-bold py-2 px-4 rounded-full"
                      >
                        Github
                      </button>
                      <button
                        onClick={() =>
                          window.open(
                            `//www.linkedin.com/in/pratiktiwari12/`,
                            "_blank"
                          )
                        }
                        className="m-2 bg-gray-300 text-black font-bold py-2 px-4 rounded-full"
                      >
                        Linkedin
                      </button>
                      <button
                        onClick={() => {
                          window.open(`//www.google.com`, "_blank");
                        }}
                        className="m-2 bg-gray-300 text-black font-bold py-2 px-4 rounded-full"
                      >
                        Blogs
                      </button>
                      <a
                        className="m-2 bg-gray-300 text-black font-bold py-2 px-4 rounded-full"
                        href="mailto:pratiktiwari1212@gmail.com"
                      >
                        <button className="m-2bg-gray-300 text-black font-bold py-2 px-4 rounded-full">
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
                        className="m-2 bg-gray-300 text-black font-bold py-2 px-4 rounded-full"
                      >
                        Resume
                      </button>
                    </div>
                  </div>
                </div>
              </Popover.Panel>
            </Transition>
          </>
        )}
      </Popover>
    </div>
  );
}
