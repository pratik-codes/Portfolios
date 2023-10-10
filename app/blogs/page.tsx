"use client"

import { BlogData } from "@/utils/data"
import { AnimatePresence } from "framer-motion"
import Image from "next/image"
import Link from "next/link"

import { FadeInUpBox } from "@/components/framer/FadeInUpBox"

const Blogs = () => {
  return (
    <section className="container grid mt-[8rem] items-center gap-6 pb-8 pt-6 md:py-10">
      <div className="p-4">
        <div className="text-5xl font-extrabold mb-4">Blogs.</div>
        <div className="text-gray-600">
          I like to write about software development 🚀, open source 🥑, web3
          🌐, dev tools and productivity.
        </div>
      </div>
      <div className="my-12 grid grid-col-2 space-y-10">
        <AnimatePresence>
          {BlogData.map((item: any) => (
            <FadeInUpBox>
              <Link
                key={item.title}
                target="__blank"
                href={item.url}
                className="flex h-full justify-center flex-col translate-all"
              >
                  <div   className="hover:text-gray-400 text-lg font-medium underline decoration-neutral-600 underline-offset-4 transition-colors focus:decoration-neutral-500 focus:outline-offset-6 hover:decoration-neutral-500">{item.title}</div>
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
