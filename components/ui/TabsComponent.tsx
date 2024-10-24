"use client"

import { motion } from "framer-motion"
import { usePathname, useRouter } from "next/navigation"
import { useState, useEffect } from "react"

const TabsComponent = ({
  tabs,
  changeScale
}: {
  tabs: Array<{ id: string; label: string }>
  changeScale: (scale: number) => void
}) => {
  const pathname = usePathname()
  const getDefaultState = () => {
    const activeTab = tabs.find((tab) => pathname.includes(tab.label))
    return activeTab?.id ?? tabs[0].id
  }
  const [activeTab, setActiveTab] = useState(() => getDefaultState())
  const router = useRouter()

  useEffect(() => {
    if (pathname === "/") {
      setActiveTab("");
    }
  }, [pathname]);

  return (
    <div className="flex space-x-0">
      {tabs.map((tab) => (
        <button
          onMouseEnter={() => changeScale(1.2)}
          onMouseLeave={() => changeScale(1.1)}
          onClick={() => {
            setActiveTab(tab.id)
            router.push(`/${tab.id}`)
          }}
          key={tab.id}
          className={`${activeTab === tab.id ? "" : "hover:text-white/60"
            } relative rounded-full px-3 py-1.5 text-sm font-medium text-white outline-sky-400 transition focus-visible:outline-2`}
          style={{
            WebkitTapHighlightColor: "transparent",
          }}
        >
          {activeTab === tab.id && (
            <motion.span
              layoutId="bubble"
              className="absolute inset-0 z-10 bg-transparent-white mix-blend-difference rounded-full"
              transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
              variants={{
                initial: { scale: 1 },
                hover: { scale: 1.1 }
              }}
            />
          )}
          <span className="font-bold text-md">{tab.label}</span>
        </button>
      ))}
    </div>
  )
}

export default TabsComponent
