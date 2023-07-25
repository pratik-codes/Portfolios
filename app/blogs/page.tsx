"use client"

import Link from "next/link"
import { BlogData } from "@/utils/data"
import { AnimatePresence, motion } from "framer-motion"

const Blogs = () => {
  return (
    <section className="container grid mt-[8rem] items-center gap-6 pb-8 pt-6 md:py-10">
      <div className="p-4">
        <div className="text-5xl font-extrabold mb-4">Blogs</div>
        <div className="text-gray-600">
          I like to write about software development 🚀, open source 🥑, web3
          🌐, dev tools and productivity.
        </div>
      </div>
      <div className="mt-12">
        <AnimatePresence>
          {BlogData.map((item: any) => (
            <motion.div>
              <Link
                key={item.title}
                target="__blank"
                href={item.url}
                className="flex justify-center flex-col space-y-2 hover:bg-transparent-white p-4 hover:border-white hover:border rounded-xl translate-all duration-150 my-4"
              >
                <div className="text-2xl font-bold">{item.title}</div>
                <div className="text-gray-600">{item.description}</div>
              </Link>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </section>
  )
}

export default Blogs
