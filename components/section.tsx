import Image from "next/image";
import Link from "next/link";

import { Icons } from "@/components/icons";


export const IntroSection = () => {
  return (
    <>
      <Image
        style={{ marginLeft: "-5px" }}
        className="rounded-full mb-6"
        height={200}
        width={200}
        src="https://pbs.twimg.com/profile_images/1663538735093514240/ffTqlIAb_400x400.jpg"
        alt="profile_picture"
      />
      <div className="text-3xl text-white font-extrabold">
        Hey, I'm Pratik 👋
      </div>
      <div className="text-gray-500 mt-2  text-md">
        I'm a <>fullstack developer 🚀</>, <>optimist 🧠</>, and a{" "}
        <>open source advocate 🥑</>. I'm currently working on my OS app called{" "}
        <Link
          className="text-white hover:underline hover:font-medium"
          href="https://dashlit.com"
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
        <div className="text-2xl text-white  font-bold ">
          Projects
        </div>
        <div className="text-gray-500 mt-2 mb-2  text-md">
          things I have created
        </div>

        <Link
          href="https://dashlit.com/"
          target="__blank"
          className="hover:underline hover:bg-transparent hover:font-medium transition-all"
        >
          <div className="text-white text-md mt-6 underline font-medium"></div>
          <div className="text-white text-md mt-6 underline font-medium">
            Dashlit
          </div>
          <div className="text-gray-500  text-md hover:none">
            An open source browser extension to boost your productivity and
            browser experience.
          </div>
        </Link>

        <div className="text-white   text-md mt-6 underline font-medium">
          Projects I have built working with companies
        </div>
        <div className="text-gray-500  text-md hover:none mt-2">
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
      <hr className="mt-12" />
    </>
  )
}

export const BlogSection = () => {
  return (
    <>
      <div className="mt-12">
        <div className="text-2xl text-white  font-bold ">
          Blogs
        </div>
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
