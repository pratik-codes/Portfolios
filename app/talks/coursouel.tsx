"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import useMeasure from "react-use-measure"

const Courousel = ({
  title,
  place,
  content_des,
  images,
  logoImage,
  link,
}: {
  title: string
  place: string
  logoImage: string
  content_des: string
  link: string
  images: Array<string>
}) => {
  const [open, setOpen] = useState(false)
  const [ref, bounds] = useMeasure()

  return (
    <div className="m-4 group relative flex rounded-2xl bg-transparent-black bg-opacity-50 backdrop-blur-md base-card transition-shadow hover:shadow-md hover:shadow-zinc-900/5 dark:bg-white/2.5 dark:hover:shadow-black/5">
      <div className="pointer-events-none">
        <div className="absolute inset-0 rounded-2xl transition duration-300 [mask-image:linear-gradient(white,transparent)] group-hover:opacity-50">
          <svg
            aria-hidden="true"
            className="absolute inset-x-0 inset-y-[-30%] h-[160%] w-full skew-y-[-18deg] fill-black/[0.02] stroke-black/5 dark:fill-white/1 dark:stroke-white/2.5"
          >
            <defs>
              <pattern
                id=":ru:"
                width="72"
                height="56"
                patternUnits="userSpaceOnUse"
                x="50%"
                y="16"
              >
                <path d="M.5 56V.5H72" fill="none"></path>
              </pattern>
            </defs>
            <rect
              width="100%"
              height="100%"
              stroke-width="0"
              fill="url(#:ru:)"
            ></rect>
            <svg x="50%" y="16" className="overflow-visible">
              <rect stroke-width="0" width="73" height="57" x="0" y="56"></rect>
              <rect
                stroke-width="0"
                width="73"
                height="57"
                x="72"
                y="168"
              ></rect>
            </svg>
          </svg>
        </div>
        <div
          className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#D7EDEA] to-[#F4FBDF] opacity-0 transition duration-300 group-hover:opacity-100 dark:from-[#202D2E] dark:to-[#303428]"
          data-projection-id="5"
          style={{
            WebkitMaskImage:
              "radial-gradient(180px at 302px 34px, white, transparent)",
          }}
        ></div>
        <div
          className="absolute inset-0 rounded-2xl opacity-0 mix-blend-overlay transition duration-300 group-hover:opacity-100"
          data-projection-id="6"
          style={{
            WebkitMaskImage:
              "radial-gradient(180px at 302px 34px, white, transparent)",
          }}
        >
          <svg
            aria-hidden="true"
            className="absolute inset-x-0 inset-y-[-30%] h-[160%] w-full skew-y-[-18deg] fill-black/50 stroke-black/70 dark:fill-white/2.5 dark:stroke-white/10"
          >
            <defs>
              <pattern
                id=":rv:"
                width="72"
                height="56"
                patternUnits="userSpaceOnUse"
                x="50%"
                y="16"
              >
                <path d="M.5 56V.5H72" fill="none"></path>
              </pattern>
            </defs>
            <rect width="100%" height="100%" stroke-width="0" fill="url(#:rv:)">
              <Image alt="logo" src={logoImage} width={"12"} height={"12"} />
            </rect>
            <svg x="50%" y="16" className="overflow-visible">
              <rect stroke-width="0" width="73" height="57" x="0" y="56"></rect>
              <rect
                stroke-width="0"
                width="73"
                height="57"
                x="72"
                y="168"
              ></rect>
            </svg>
          </svg>
        </div>
      </div>
      <div className="relative rounded-2xl px-4 pb-4 pt-16">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-zinc-900/5 backdrop-blur-[2px] transition duration-300 ring-1 ring-base dark:bg-white/7.5 dark:ring-white/15 dark:group-hover:bg-base">
          <Image
            alt="logo"
            src={logoImage}
            width={38}
            height={38}
            className="rounded-full"
          />
        </div>
        <h3 className="mt-4 font-semibold leading-2 text-zinc-900 dark:text-white">
          <Link href={link}>
            <span className="absolute inset-0 rounded-2xl"></span>
            <span className="text-md">{title}</span>
          </Link>
        </h3>
        <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
          {content_des}
        </p>
        <div className="absolute font-bold text-gray-300 base-card top-0 right-0 m-3 rounded-2xl w-fit text-center py-1 px-3 text-sm">
          {place}
        </div>
      </div>
    </div>
  )
}

export default Courousel
