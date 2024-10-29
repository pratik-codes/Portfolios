"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { PersonalProjectData, ProjectData } from "@/utils/data"

import { Icons } from "@/components/icons"

import { Badge } from "./ui/badge"
import PulseAvatar from "./custom/pulse-avatar"
import { siteConfig } from "@/config/site"

export const IntroSection = () => {
  return (
    <>
      <div className="relative group w-[180px] h-[180px] mb-8">

        <div className="absolute cursor-pointer w-full h-full rounded-full transition-opacity duration-300 group-hover:ring-0">
          <PulseAvatar>
            <Image
              src={siteConfig.avatar_image}
              className="rounded-full object-cover cursor-pointer"
              layout="fill" // Ensures the image fills the container while maintaining aspect ratio
              alt="avatar_picture"
            />
          </PulseAvatar>
        </div>
        <PulseAvatar>
          <Image
            src={"/assets/profile-pic.jpg"}
            className="absolute rounded-full transition-opacity duration-300 opacity-0 group-hover:opacity-100 object-cover"
            layout="fill" // Ensures the image fills the container while maintaining aspect ratio
            alt="profile_picture"
          />
        </PulseAvatar>
      </div >
      <div className="text-3xl text-white font-extrabold">
        Hey, I'm Pratik{" "}
        <span className="animate-shake">
          <span className="animate-pulse">👋</span>
        </span>
      </div>

      <div className="text-gray-500 mt-2  text-md">
        I'm a <>fullstack developer 🚀</>, <>optimist 🧠</>, and a{" "}
        <>open source advocate 🥑</>. I'm currently working on my OS app called{" "}
        <Link
          className="text-white hover:underline hover:font-medium"
          href="https://sifusecurity.com"
          target="_blank"
        >
          sifusecurity.com
        </Link>{" "}
        and{" "}
        <Link
          className="text-white hover:underline hover:font-medium"
          href="https://dashlit.byarclabs.com"
          target="_blank"
        >
          dashlit.com
        </Link>{" "}
        and contributing to multiple open source projects.
      </div>

      <div className="text-gray-500  text-md">
        I mainly build with{" "}
        <span className="font-medium">React, Node, GO, AWS and Solidity </span>
        but I'm always learning new tools & technologies.
      </div>

      <hr className="mt-12" />
    </>
  )
}

export const ProjectSection = () => {
  return (
    <>
      {" "}
      <div className="mt-12">
        <div className="text-3xl text-white font-bold">Projects.</div>
        <div className="text-gray-500 mt-2 mb-2  text-md">
          things I have created
        </div>
        {PersonalProjectData.map((project: ProjectData) => {
          return (
            <div
              onClick={() => window.open(project.titleLink, "_blank")}
              className="mt-8 base-card p-4 rounded-3xl cursor-pointer bg-opacity-50 backdrop-blur-md">
              <Link
                href={project.titleLink}
                target="_blank"
                className="text-white hover:underline hover:font-medium"
              >
                <div className="text-md font-medium text-white">
                  {project.title}
                </div>
              </Link>
              <div className="text-md text-gray-500 space-y-2">
                {/* // map over description and show it */}
                {project.description.map((description: string) => {
                  return (
                    <div className="text-md text-gray-500">{description}</div>
                  )
                })}
              </div>
              {/* // show all the hastags */}
              <div className="text-md text-gray-500 mt-1 space-x-1">
                {project.hastags.map((tag: string) => {
                  return <Badge variant="outline" className="base-card">#{tag}</Badge>
                })}
              </div>
            </div>
          )
        })}

        <div className="base-card p-4 rounded-3xl bg-opacity-50 backdrop-blur-md mt-6">
          <div className="text-white text-md underline font-medium">
            Projects I have built working with companies
          </div>
          <div className="text-gray-500  text-md hover:none mt-2">
            <div className="mb-2">
              Currently working with{" "}
              <Link
                className="text-white  hover:underline hover:font-medium"
                href="https://securly.com/"
              >
                Securly
              </Link>
              , building the core extension products to save kids life. Also
              working on migrating the backend to Golang along with many other
              feature development and tech debts. <br />
            </div>
            Built{" "}
            <Link
              href="https://www.velocity.in/payments"
              className="text-white  hover:underline hover:font-medium"
            >
              Payments
            </Link>{" "}
            (An app used for making payments, vendor management, Invoice
            managemenet etc) from scratch and{" "}
            <Link
              href="velocity.in/revenue-based-financing/"
              className="text-white  hover:underline hover:font-medium"
            >
              Finance
            </Link>{" "}
            (Loan management system) while working with{" "}
            <Link
              href="https://www.velocity.in/"
              className="text-white  hover:underline hover:font-medium"
            >
              Velocity.
            </Link>{" "}
            Worked mainly on the frontend side in{" "}
            <span className="font-medium">
              react, microfrontends, monorepos and typescript.
            </span>
          </div>

          <div className="text-gray-500  mt-2 text-md hover:none">
            Built{" "}
            <Link
              href="https://www.paletteedu.org/"
              className="text-white  hover:underline hover:font-medium"
            >
              Palette
            </Link>{" "}
            (university management app) from scratch and and many other projects
            while working with{" "}
            <Link
              href="https://webknot.in/"
              className="text-white  hover:underline hover:font-medium"
            >
              Webknot.
            </Link>{" "}
            Worked on the backend as well as frontend side in{" "}
            <span className="font-medium">react, node(nest.js), AWS. </span>
            Built the service and managed deployment as well as the infrastucture.
          </div>
        </div>
      </div>
      {/* <hr className="mt-12" /> */}
    </>
  )
}

export const BlogSection = () => {
  return (
    <>
      <div className="mt-12">
        <div className="text-2xl text-white  font-bold ">Blogs</div>
        <div className="text-gray-500 mt-2 mb-2  text-md">
          I like writing about software development, web3 and producitivity.
        </div>

        <Link
          href="https://blogs.tiwaripratik.com/lets-talk-about-react-performance"
          target="__blank"
          className="hover:underline hover:font-medium transition-all"
        >
          <div className="text-white   text-md mt-6 underline font-medium">
            Let's talk about react performance ⚛️
          </div>
          <div className="text-gray-500  text-md hover:none">
            Some of the tips and tricks to improve your react app performance.
          </div>
        </Link>

        <Link
          href="https://blogs.tiwaripratik.com/mono-respositories-in-jsts-what-why-and-how-with-nx"
          target="__blank"
          className="hover:underline hover:font-medium transition-all"
        >
          <div className="text-white   text-md mt-6 underline font-medium">
            Mono Respositories in JS/TS. What? Why? and How? (with Nx)
          </div>
          <div className="text-gray-500  text-md hover:none">
            Sharing about monorepos and how to use them in your projects and
            thier pros and cons.
          </div>
        </Link>

        <Link
          href="https://blogs.tiwaripratik.com/understanding-reacts-ui-rendering-process-understanding-virtual-dom-in-depth"
          target="__blank"
          className="hover:underline hover:font-medium transition-all"
        >
          <div className="text-white   text-md mt-6 underline font-medium">
            Understanding React's UI Rendering Process (understanding virtual
            dom in depth)
          </div>
          <div className="text-gray-500  text-md hover:none">
            Sharing about how react works under the hood.
          </div>
        </Link>
      </div>

      <Link
        href="/blogs"
        target="__blank"
        className="flex gap-2 text-white  text-md mt-6 cursor-pointer hover:underline font-medium"
      >
        <Icons.open />
        <span>More blogs</span>{" "}
      </Link>
    </>
  )
}
