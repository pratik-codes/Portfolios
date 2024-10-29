"use client"

import BaseCard from "@/components/custom/base-card"
import PulseAvatar from "@/components/custom/pulse-avatar"
import { FloatingNav } from "@/components/floating-nav"
import Image from "next/image"
import { siteConfig } from "@/config/site"

const Blocks = () => {
  return (
    <section className="container grid mt-[8rem] items-center gap-6 pb-8 pt-6 md:py-10">
      <div className="p-4">
        <div className="text-5xl font-extrabold mb-4">Blocks.</div>
        <div className="text-gray-600">
          Beautifully designed motions components. Easy copy-paste. Customizable. Open Source. Built for engineers and designers.
        </div>
      </div>

      <div className="mt-8 space-y-[6rem] mb-12">
        <BaseCard blockName="Floating Navbar" codeLink={"https://github.com/pratik-codes/React-Portfolios/blob/master/components/floating-nav.tsx"}>
          <FloatingNav addClass="mt-[6rem]" />
        </BaseCard>

        <BaseCard blockName="Pulse Avatar" codeLink={"https://github.com/pratik-codes/React-Portfolios/blob/master/components/custom/pulse-avatar.tsx"}>
          <PulseAvatar>
            <Image
              src={siteConfig.avatar_image}
              className="rounded-full object-cover cursor-pointer"
              layout="fill" // Ensures the image fills the container while maintaining aspect ratio
              alt="avatar_picture"
            />
          </PulseAvatar>
        </BaseCard>

      </div>

    </section>
  )
}

export default Blocks
