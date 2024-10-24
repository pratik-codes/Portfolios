"use client"

import BaseCard from "@/components/custom/base-card"
import { FloatingNav } from "@/components/floating-nav"

const Blocks = () => {
  return (
    <section className="container grid mt-[8rem] items-center gap-6 pb-8 pt-6 md:py-10">
      <div className="p-4">
        <div className="text-5xl font-extrabold mb-4">Blocks.</div>
        <div className="text-gray-600">
          Beautifully designed motions components. Easy copy-paste. Customizable. Open Source. Built for engineers and designers.
        </div>
      </div>

      <div className="mt-8">
        <BaseCard codeLink={"https://github.com/pratik-codes/React-Portfolios/blob/master/components/floating-nav.tsx"}>
          <FloatingNav addClass="mt-12" />
        </BaseCard>
      </div>

    </section>
  )
}

export default Blocks
