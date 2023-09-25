"use client"

import { TalkData } from "@/utils/data"

import { FadeInUpBox } from "@/components/framer/FadeInUpBox"

import Courousel from "./coursouel"

const Talks = () => {
  return (
    <section className="container grid mt-[8rem] items-center gap-6 pb-8 pt-6 md:py-10">
      <div className="p-4">
        <div className="text-5xl font-extrabold mb-4">Talks.</div>
        <div className="text-gray-600">
          I like to speak about software development 🚀, open source 🥑, web3
          🌐, dev tools and productivity.
        </div>
      </div>
      <FadeInUpBox>
        <div className="mt-12 grid md:grid-cols-2">
          {TalkData.map((item: any) => {
            return <Courousel {...item} />
          })}
        </div>
      </FadeInUpBox>
    </section>
  )
}

export default Talks
