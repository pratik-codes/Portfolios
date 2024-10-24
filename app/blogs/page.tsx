"use client"

import { BlogData } from "@/utils/data"
import { AnimatePresence } from "framer-motion"
import Image from "next/image"
import Link from "next/link"

import { FadeInUpBox } from "@/components/framer/FadeInUpBox"
import { Button } from "@/components/ui/button"

const Blogs = () => {
  return (
    <section className="container grid mt-[8rem] items-center gap-6 pb-8 pt-6 md:py-10">
      <div className="p-4">
        <div className="text-5xl font-extrabold mb-4">Blogs.</div>
        <div className="text-gray-600">
          Explore my thoughts on software development, emerging tech, and industry trends.
        </div>
      </div>

      <div className="flex items-center">
        <Link target="__blank" href={"https://medium.com/@pratik-codes"}>
          <Button variant={"ghost"}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="mr-2 bi bi-medium" viewBox="0 0 16 16"> <path d="M9.025 8c0 2.485-2.02 4.5-4.513 4.5A4.506 4.506 0 0 1 0 8c0-2.486 2.02-4.5 4.512-4.5A4.506 4.506 0 0 1 9.025 8zm4.95 0c0 2.34-1.01 4.236-2.256 4.236-1.246 0-2.256-1.897-2.256-4.236 0-2.34 1.01-4.236 2.256-4.236 1.246 0 2.256 1.897 2.256 4.236zM16 8c0 2.096-.355 3.795-.794 3.795-.438 0-.793-1.7-.793-3.795 0-2.096.355-3.795.794-3.795.438 0 .793 1.699.793 3.795z" /> </svg>
            Medium
          </Button>
        </Link>
        <Link target="__blank" href={"https://dev.to/pratikcodes"}>
          <Button variant={"ghost"}>
            <Image className="mr-2" src="https://dev-to-uploads.s3.amazonaws.com/uploads/logos/resized_logo_UQww2soKuUsjaOGNB38o.png" alt="dev.to" width={20} height={5} />
            Dev.to
          </Button>
        </Link>
        <Link target="__blank" href={"https://blogs.tiwaripratik.com/"}>
          <Button variant={"ghost"}>
            <svg width="256px" height="256px" viewBox="0 0 256 256" version="1.1" xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 mr-2">
              <g fill-rule="evenodd">
                <path d="M17.5913461,85.5328619 C-5.86378203,108.98799 -5.86378203,147.01185 17.5913461,170.464766 L85.5337714,238.409404 C108.9889,261.862319 147.01276,261.862319 170.465675,238.409404 L238.410313,170.464766 C261.863229,147.009638 261.863229,108.985777 238.410313,85.5328619 L170.465675,17.5904365 C147.010547,-5.86247884 108.986687,-5.86247884 85.5337714,17.5904365 L17.5913461,85.5328619 Z M157.724673,157.725976 C174.143262,141.307386 174.143262,114.690241 157.724673,98.2738645 C141.308296,81.8552748 114.691151,81.8552748 98.274774,98.2738645 C81.8561843,114.692454 81.8561843,141.307386 98.274774,157.725976 C114.693364,174.142353 141.308296,174.142353 157.726886,157.725976 L157.724673,157.725976 Z" fill="#2962FF"></path>
              </g>
            </svg>
            Hashnode
          </Button>
        </Link>
      </div>
      <div className="my-12 mx-4 grid grid-col-2 space-y-10">
        <AnimatePresence>
          {BlogData.map((item: any) => (
            <FadeInUpBox>
              <Link
                key={item.title}
                target="__blank"
                href={item.url}
                className="flex h-full justify-center flex-col translate-all"
              >
                <div className="hover:text-gray-400 text-lg font-medium underline decoration-neutral-600 underline-offset-4 transition-colors focus:decoration-neutral-500 focus:outline-offset-6 hover:decoration-neutral-500">{item.title}</div>
                <div className="text-gray-600 text-sm">{item.description}</div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2">
                </div>
              </Link>
            </FadeInUpBox>
          ))}
        </AnimatePresence>
      </div>
    </section>
  )
}

export default Blogs
