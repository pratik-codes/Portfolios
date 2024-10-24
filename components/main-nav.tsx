"use client"

import TabsComponent from "./ui/TabsComponent"

export function MainNav({ changeScale }: { changeScale: (scale: number) => void }) {
  const tabsProps = [
    // {
    //   id: "",
    //   label: "home",
    // },
    {
      id: "blogs",
      label: "blogs",
    },
    {
      id: "talks",
      label: "talks",
    },
    {
      id: "blocks",
      label: "blocks",
    },
  ]

  return (
    <div className="flex gap-6 md:gap-10">
      <div className="flex flex-row space-x-0">
        <TabsComponent tabs={tabsProps} changeScale={changeScale} />
      </div>
    </div>
  )
}
