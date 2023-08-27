"use client"

import Image from "next/image"
import Link from "next/link"
import { BlogData } from "@/utils/data"
import { AnimatePresence } from "framer-motion"

import { FadeInUpBox } from "@/components/framer/FadeInUpBox"

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
      <div className="mt-12 grid grid-col-2 space-y-10">
        <AnimatePresence>
          {BlogData.map((item: any) => (
            <FadeInUpBox>
              <Link
                key={item.title}
                target="__blank"
                href={item.url}
                className="flex h-full justify-center flex-col hover:bg-transparent-white border-white hover:border rounded-2xl translate-all"
              >
                <Image
                  src={item.imageSrc}
                  sizes="90vw"
                  style={{
                    width: "100%",
                    height: "auto",
                  }}
                  width={500}
                  height={300}
                  alt="blog_image"
                  className="rounded-2xl"
                />
                <div className="m-4">
                  <div className="text-2xl font-bold">{item.title}</div>
                  <div className="text-gray-600">{item.description}</div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2">
                    {item?.hastags?.map((hashtag: string) => {
                      return (
                        <div className="mt-2 font-bold text-gray-300 bg-transparent-white border border-white rounded-2xl text-center py-1 px-3">
                          #{hashtag}
                        </div>
                      )
                    })}
                  </div>
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
