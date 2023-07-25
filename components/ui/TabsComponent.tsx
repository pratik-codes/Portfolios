import { useState } from "react"
import { useRouter } from "next/navigation"
import { motion } from "framer-motion"

const TabsComponent = ({
  tabs,
}: {
  tabs: Array<{ id: string; label: string }>
}) => {
  const [activeTab, setActiveTab] = useState(tabs[0].id)
  const router = useRouter()

  return (
    <div className="flex space-x-1">
      {tabs.map((tab) => (
        <button
          onClick={() => {
            setActiveTab(tab.id)
            router.push(`/${tab.id}`)
          }}
          key={tab.id}
          className={`${
            activeTab === tab.id ? "" : "hover:text-white/60"
          } relative rounded-full px-3 py-1.5 text-sm font-medium text-white outline-sky-400 transition focus-visible:outline-2`}
          style={{
            WebkitTapHighlightColor: "transparent",
          }}
        >
          {activeTab === tab.id && (
            <motion.span
              layoutId="bubble"
              className="absolute inset-0 z-10 bg-transparent-white mix-blend-difference"
              style={{ borderRadius: 9999 }}
              transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
            />
          )}
          <span className="font-bold text-md">{tab.label}</span>
        </button>
      ))}
    </div>
  )
}
export default TabsComponent
