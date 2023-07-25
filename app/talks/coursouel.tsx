"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import useMeasure from "react-use-measure"

const Courousel = ({
  title,
  place,
  content_des,
  images,
}: {
  title: string
  place: string
  content_des: string
  images: Array<string>
}) => {
  const [open, setOpen] = useState(false)
  const [ref, bounds] = useMeasure()

  return (
    <div
      onClick={() => setOpen(!open)}
      className={`flex justify-center flex-col space-y-2 hover:bg-transparent-white p-4 border-white hover:border cursor-pointer rounded-xl transition-all duration-150 my-4 ${
        open && " bg-transparent-white border"
      }`}
    >
      <motion.div
        className="overflow-hidden min-w-6/12"
        animate={{ height: bounds.height > 0 ? bounds.height : undefined }}
        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
      >
        <div ref={ref}>
          <div className="flex">
            <div className="w-11/12">
              <div className="text-2xl font-bold">{title}</div>
              <div className="mt-2 font-bold text-gray-300 bg-transparent-white border border-white rounded-2xl w-28 text-center py-1 px-2">
                {place}
              </div>
            </div>
            <div className="w-1/12 flex justify-center items-center transition-all duration-200">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className={`w-6 h-6 transition-all rounded-full border border-white p-1 duration-300 ${
                  open ? " rotate-180" : ""
                }`}
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M12.53 16.28a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 011.06-1.06L12 14.69l6.97-6.97a.75.75 0 111.06 1.06l-7.5 7.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>
          {open && (
            <div>
              <div className="pt-6 text-gray-400">{content_des}</div>
              <div className="mt-6 ml-1 text-xl font-extrabold">Pictures</div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 2xl:grid-cols-2 xl:grid-cols-2 mt-4">
                {images.map((image: string) => {
                  return (
                    <Image
                      className="rounded-xl border-6 border-gray-900 mb-4"
                      src={image}
                      alt=""
                      width="330"
                      height={100}
                    />
                  )
                })}
              </div>
              <div className="mt-6 ml-1 text-xl font-extrabold">Twitter</div>
              <blockquote className="twitter-tweet">
                <p lang="en" dir="ltr">
                  .{" "}
                  <a href="https://twitter.com/pratikk_tiwari?ref_src=twsrc%5Etfw">
                    @pratikk_tiwari
                  </a>{" "}
                  with a live coding demo!{" "}
                  <a href="https://t.co/KyaPOsxxrQ">
                    pic.twitter.com/KyaPOsxxrQ
                  </a>
                </p>
                &mdash; ReactJSPune (@ReactPune){" "}
                <a href="https://twitter.com/ReactPune/status/1682638222206316545?ref_src=twsrc%5Etfw">
                  July 22, 2023
                </a>
              </blockquote>{" "}
              <script
                async
                src="https://platform.twitter.com/widgets.js"
              ></script>
            </div>
          )}
        </div>
      </motion.div>
    </div>
  )
}

export default Courousel
