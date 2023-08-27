"use client"

import Image from "next/image"
import Link from "next/link"
import { Tweet } from "react-tweet"

import { Button } from "@/components/ui/button"
import { FadeInUpBox } from "@/components/framer/FadeInUpBox"

const TalkDetails = ({ talkData }: any) => {
  const { title, content_des, logoImage, place, images, twitter_embeds } =
    talkData
  return (
    <FadeInUpBox>
      <section className={"container mt-[4rem] "}>
        <Button asChild variant={"ghost"}>
          <Link href={"/talks"}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="mr-2 h-4 w-4"
            >
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>{" "}
            <span className="mr-2">Back</span>
          </Link>
        </Button>
        <div className="mt-[4rem] p-4">
          <div className="flex h-[6rem] w-[6rem] items-center justify-center rounded-full bg-zinc-900/5 ring-2 ring-zinc-900/25 backdrop-blur-[2px] transition duration-300 group-hover:bg-white/50 group-hover:ring-zinc-900/25 dark:bg-white/7.5 dark:ring-white/15 dark:group-hover:bg-emerald-300/10 dark:ring-emerald-400">
            <Image
              alt="logo"
              src={logoImage}
              width={70}
              height={70}
              className="rounded-full"
            />
          </div>
          <div className="mt-8 text-xl font-bold">{title}</div>
          <div className="mt-2 text-sm w-9/12">{content_des}</div>
          <div className="mt-4 font-bold text-gray-300 bg-transparent-white border border-white rounded-2xl w-fit text-center py-1 px-3">
            📍 {place}
          </div>
          <hr className="my-12" />
          <div className="text-3xl font-bold mb-8">Images</div>
          <div className="grid grid-auto md:grid-cols-2 gap-8">
            {images.map((image: any) => (
              <Image
                alt="logo"
                src={image}
                width={500}
                height={500}
                className="rounded-xl"
              />
            ))}
          </div>
        </div>

        <hr className="my-12" />
      </section>
      <div className="md:container">
        <div className="text-3xl font-bold mb-8">Tweets</div>
        <div className="grid grid-auto md:grid-cols-2 gap-8">
          {twitter_embeds.map((tweet: any) => (
            <div className="">
              <Tweet id={tweet} />
            </div>
          ))}
        </div>
      </div>
    </FadeInUpBox>
  )
}

export default TalkDetails
