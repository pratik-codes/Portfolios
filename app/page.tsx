import Image from "next/image"
import Link from "next/link"

import { Icons } from "@/components/icons"

const IntroSection = () => {
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
      <h1 className="text-2xl text-blue-800 dark:text-blue-500 font-bold ">
        Hey, I'm Pratik
      </h1>
      <p className="text-gray-500 mt-2  text-md">
        I'm a <>fullstack developer</>, <>optimist</>, and a{" "}
        <>open source advocate</>. I'm currently working on my OS app called{" "}
        <a
          className="text-blue-800 dark:text-blue-500 hover:underline hover:font-medium"
          href="https://dashlit.com"
          target="_blank"
        >
          dashlit.com
        </a>{" "}
        and contributing to multiple open source projects.
      </p>

      <p className="text-gray-500  text-md">
        I mainly build with{" "}
        <span className="font-medium">React, Node, GO, AWS and Solidity </span>
        but I'm always learning new tools & technologies.
      </p>

      <hr className="mt-12" />
    </>
  )
}

const ProjectSection = () => {
  return (
    <>
      {" "}
      <div className="mt-12">
        <h1 className="text-2xl text-blue-800 dark:text-blue-500 font-bold ">
          Projects
        </h1>
        <p className="text-gray-500 mt-2 mb-2  text-md">
          things I have created
        </p>

        <Link
          href="https://dashlit.com/"
          target="__blank"
          className="hover:underline hover:font-medium transition-all"
        >
          <p className="text-blue-800 dark:text-blue-500  text-md mt-6 underline font-medium">
            Dashlit
          </p>
          <p className="text-gray-500  text-md hover:none">
            An open source browser extension to boost your productivity and
            browser experience.
          </p>
        </Link>

        <p className="text-blue-800 dark:text-blue-500  text-md mt-6 underline font-medium">
          Projects I have built working with companies
        </p>
        <p className="text-gray-500  text-md hover:none mt-2">
          Built{" "}
          <a
            href="https://www.velocity.in/payments"
            className="text-blue-800 dark:text-blue-500 hover:underline hover:font-medium"
          >
            Payments
          </a>{" "}
          (An app used for making payments, vendor management, Invoice
          managemenet etc) from scratch and{" "}
          <a
            href="velocity.in/revenue-based-financing/"
            className="text-blue-800 dark:text-blue-500 hover:underline hover:font-medium"
          >
            Finance
          </a>{" "}
          (Loan management system) while working with{" "}
          <a
            href="https://www.velocity.in/"
            className="text-blue-800 dark:text-blue-500 hover:underline hover:font-medium"
          >
            Velocity.
          </a>{" "}
          Worked mainly on the frontend side in{" "}
          <span className="font-medium">
            react, microfrontends, monorepos and typescript.
          </span>
        </p>

        <p className="text-gray-500  mt-2 text-md hover:none">
          Built{" "}
          <a
            href="https://www.paletteedu.org/"
            className="text-blue-800 dark:text-blue-500 hover:underline hover:font-medium"
          >
            Palette
          </a>{" "}
          (university management app) from scratch and and many other projects
          while working with{" "}
          <a
            href="https://webknot.in/"
            className="text-blue-800 dark:text-blue-500 hover:underline hover:font-medium"
          >
            Webknot.
          </a>{" "}
          Worked on the backend as well as frontend side in{" "}
          <span className="font-medium">react, node(nest.js), AWS. </span>
          Built the service and managed deployment as well as the infrastucture.
        </p>
      </div>
      <hr className="mt-12" />
    </>
  )
}

const BlogSection = () => {
  return (
    <>
      <div className="mt-12">
        <h1 className="text-2xl text-blue-800 dark:text-blue-500 font-bold ">
          Blogs
        </h1>
        <p className="text-gray-500 mt-2 mb-2  text-md">
          I like writing about software development, web3 and producitivity.
        </p>

        <Link
          href="https://blogs.tiwaripratik.com/lets-talk-about-react-performance"
          target="__blank"
          className="hover:underline hover:font-medium transition-all"
        >
          <p className="text-blue-800 dark:text-blue-500  text-md mt-6 underline font-medium">
            Let's talk about react performance ⚛️
          </p>
          <p className="text-gray-500  text-md hover:none">
            Some of the tips and tricks to improve your react app performance.
          </p>
        </Link>

        <Link
          href="https://blogs.tiwaripratik.com/mono-respositories-in-jsts-what-why-and-how-with-nx"
          target="__blank"
          className="hover:underline hover:font-medium transition-all"
        >
          <p className="text-blue-800 dark:text-blue-500  text-md mt-6 underline font-medium">
            Mono Respositories in JS/TS. What? Why? and How? (with Nx)
          </p>
          <p className="text-gray-500  text-md hover:none">
            Sharing about monorepos and how to use them in your projects and
            thier pros and cons.
          </p>
        </Link>

        <Link
          href="https://blogs.tiwaripratik.com/understanding-reacts-ui-rendering-process-understanding-virtual-dom-in-depth"
          target="__blank"
          className="hover:underline hover:font-medium transition-all"
        >
          <p className="text-blue-800 dark:text-blue-500  text-md mt-6 underline font-medium">
            Understanding React's UI Rendering Process (understanding virtual
            dom in depth)
          </p>
          <p className="text-gray-500  text-md hover:none">
            Sharing about how react works under the hood.
          </p>
        </Link>
      </div>

      <a
        href="https://blogs.tiwaripratik.com/"
        target="__blank"
        className="flex gap-2 text-blue-800 dark:text-blue-500 text-md mt-6 cursor-pointer hover:underline font-medium"
      >
        <Icons.open />
        <span>More blogs</span>{" "}
      </a>
    </>
  )
}

export default function IndexPage() {
  return (
    <section className="container grid mt-[8rem] items-center gap-6 pb-8 pt-6 md:py-10">
      <IntroSection />
      <ProjectSection />
      <BlogSection />
      <a
        href="https://nextjs.org/"
        target="__blank"
        className="flex gap-2 cursor-pointer hover:font-medium mt-[10rem]"
      >
        Made with Next.js
        <Image alt="" src="/vercel.svg" width={80} height={20} />
      </a>
    </section>
  )
}
